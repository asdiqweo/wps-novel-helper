<template>
  <div class="taskpane">
    <div class="header">
      <h2>📚 小说助手</h2>
      <p class="subtitle">辅助作者创作工具</p>
    </div>

    <!-- 文章类型选择（下拉框） -->
    <div class="type-section">
      <label class="type-label">文章类型：</label>
      <select v-model="currentTheme" @change="onThemeChange" class="type-select">
        <option v-for="(config, key) in themes" :key="key" :value="key">
          {{ config.name }}
        </option>
      </select>
      <p class="type-desc">{{ currentThemeConfig.description }}</p>
    </div>

    <!-- 功能按钮区 -->
    <div class="function-buttons">
      <button
        :class="['func-btn', { active: activeFunction === 'name' }]"
        @click="showFunction('name')"
      >
        <div class="func-icon">👤</div>
        <div class="func-title">随机人名</div>
        <div class="func-desc">生成符合文章风格的人名</div>
      </button>

      <button
        :class="['func-btn', { active: activeFunction === 'country' }]"
        @click="showFunction('country')"
      >
        <div class="func-icon">🏳️</div>
        <div class="func-title">随机国家</div>
        <div class="func-desc">生成符合文章风格的国家</div>
      </button>
    </div>

    <!-- 人名生成界面 -->
    <div class="function-panel" v-if="activeFunction === 'name'">
      <div class="panel-header">
        <h3>👤 随机人名生成器</h3>
      </div>
      <div class="panel-content">
        <div class="controls">
          <label>
            性别：
            <select v-model="nameGender">
              <option value="null">随机</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </label>
          <label>
            数量：
            <input type="number" v-model.number="nameCount" min="1" max="20" />
          </label>
          <button class="generate-btn" @click="generateNames">生成人名</button>
        </div>
        <div class="results" v-if="generatedNames.length > 0">
          <div class="result-item" v-for="(name, index) in generatedNames" :key="index">
            <span class="result-text">{{ name }}</span>
            <button class="copy-btn" @click="copyText(name)">复制</button>
          </div>
        </div>
        <div class="empty-state" v-else>
          <p>点击"生成人名"开始生成</p>
        </div>
      </div>
    </div>

    <!-- 国家生成界面 -->
    <div class="function-panel" v-if="activeFunction === 'country'">
      <div class="panel-header">
        <h3>🏳️ 随机国家生成器</h3>
      </div>
      <div class="panel-content">
        <div class="controls">
          <label>
            风格：{{ countryStyles[countryStyle]?.name || '全部' }}
          </label>
          <label>
            数量：
            <input type="number" v-model.number="countryCount" min="1" max="20" />
          </label>
          <button class="generate-btn" @click="generateCountries">生成国家</button>
        </div>
        <div class="results" v-if="generatedCountries.length > 0">
          <div class="result-item" v-for="(country, index) in generatedCountries" :key="index">
            <span class="result-text">{{ country }}</span>
            <button class="copy-btn" @click="copyText(country)">复制</button>
          </div>
        </div>
        <div class="empty-state" v-else>
          <p>点击"生成国家"开始生成</p>
        </div>
      </div>
    </div>

    <!-- 系统信息 -->
    <div class="system-info">
      <button @click="onbuttonclick('dockLeft')">← 停靠左边</button>
      <button @click="onbuttonclick('dockRight')">停靠右边 →</button>
      <button @click="onbuttonclick('hideTaskPane')">隐藏面板</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onBeforeUnmount } from 'vue'
import taskPane from './js/taskpane.js'
import {
  generateRandomNames,
  generateRandomCountries,
  getRecommendationByTheme,
  countryStyles as importedCountryStyles
} from '../utils/randomGenerator.js'

export default {
  name: 'TaskPane',
  data() {
    return {
      // 文章主题配置
      themes: {
        fantasy: { name: '东方玄幻', description: '仙侠修真、武侠风格，适合修炼、宗门、秘境等设定' },
        ancient: { name: '历史架空', description: '古代历史背景，适合宫廷、战争、权谋等题材' },
        modern: { name: '现代都市', description: '现代都市背景，适合都市情感、职场等题材' },
        westernFantasy: { name: '西方奇幻', description: '剑与魔法风格，适合龙、骑士、魔法等设定' },
        westernModern: { name: '西方现代', description: '欧美现代背景，适合特工、犯罪等题材' },
        scifi: { name: '科幻未来', description: '未来科技背景，适合星际、机器人等设定' }
      },

      // 当前选中的主题
      currentTheme: 'modern',

      // 当前激活的功能（name 或 country）
      activeFunction: null,

      // 人名设置
      nameGender: 'null',
      nameCount: 5,
      generatedNames: [],

      // 国家设置
      countryStyle: 'modern',
      countryCount: 5,
      generatedCountries: [],

      // 国家风格数据
      countryStyles: importedCountryStyles
    }
  },
  computed: {
    currentThemeConfig() {
      return this.themes[this.currentTheme]
    }
  },
  methods: {
    // 显示功能面板
    showFunction(func) {
      if (this.activeFunction === func) {
        // 如果点击的是当前已激活的功能，则不重新生成
        return
      }
      this.activeFunction = func
      if (func === 'name') {
        this.generateNames()
      } else if (func === 'country') {
        this.generateCountries()
      }
    },

    // 文章类型改变
    onThemeChange() {
      const config = getRecommendationByTheme(this.currentTheme)
      // 根据主题自动设置推荐配置
      this.nameGender = 'null'
      this.countryStyle = config.countryStyle
      // 清空之前的生成结果
      this.generatedNames = []
      this.generatedCountries = []
      // 如果有激活的功能面板，重新生成
      if (this.activeFunction === 'name') {
        this.generateNames()
      } else if (this.activeFunction === 'country') {
        this.generateCountries()
      }
    },

    // 生成人名
    generateNames() {
      const config = getRecommendationByTheme(this.currentTheme)
      const gender = this.nameGender === 'null' ? null : this.nameGender
      this.generatedNames = generateRandomNames(
        this.nameCount,
        config.nameStyle,
        gender
      )
    },

    // 生成国家名
    generateCountries() {
      this.generatedCountries = generateRandomCountries(
        this.countryCount,
        this.countryStyle
      )
    },

    // 复制文本到剪贴板
    async copyText(text) {
      try {
        await navigator.clipboard.writeText(text)
        alert('已复制: ' + text)
      } catch (err) {
        // 降级方案
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        alert('已复制: ' + text)
      }
    },

    // 系统按钮点击
    onbuttonclick(id) {
      return taskPane.onbuttonclick(id)
    },

    // 清空缓存
    clearCache() {
      this.generatedNames = []
      this.generatedCountries = []
      this.nameGender = 'null'
      this.nameCount = 5
      this.countryCount = 5
      this.activeFunction = null
      this.currentTheme = 'modern'
    }
  },
  onBeforeUnmount() {
    // 关闭插件时清空缓存
    this.clearCache()
  }
}
</script>

<style scoped>
.taskpane {
  padding: 12px;
  min-height: 100vh;
  box-sizing: border-box;
  background: #f5f5f5;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
  background: white;
}

.header h2 {
  margin: 0 0 6px 0;
  font-size: 22px;
  color: #d32f2f;
  font-weight: bold;
}

.subtitle {
  margin: 0;
  font-size: 12px;
  color: #666;
}

/* 文章类型选择 */
.type-section {
  background: white;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-left: 4px solid #d32f2f;
}

.type-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #d32f2f;
  margin-bottom: 6px;
}

.type-select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.type-select:focus {
  outline: none;
  border-color: #d32f2f;
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
}

.type-desc {
  margin: 8px 0 0 0;
  font-size: 11px;
  color: #888;
  line-height: 1.3;
}

/* 功能按钮区 */
.function-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.func-btn {
  flex: 1;
  padding: 12px;
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.func-btn:hover {
  border-color: #d32f2f;
  background: #fff5f5;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.15);
}

.func-btn.active {
  border-color: #d32f2f;
  background: #d32f2f;
  color: white;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.2);
}

.func-icon {
  font-size: 28px;
  margin-bottom: 6px;
}

.func-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
}

.func-desc {
  font-size: 11px;
  opacity: 0.8;
  line-height: 1.2;
}

.func-btn.active .func-desc {
  opacity: 1;
}

/* 功能面板 */
.function-panel {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
  animation: slideDown 0.25s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.panel-header {
  background: #d32f2f;
  padding: 10px 14px;
  color: white;
  border-bottom: 1px solid #ffcdd2;
}

.panel-header h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.panel-content {
  padding: 12px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #555;
}

.controls select,
.controls input[type='number'] {
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  background: white;
}

.controls input[type='number'] {
  width: 50px;
}

.generate-btn {
  padding: 6px 16px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s;
}

.generate-btn:hover {
  background: #b71c1c;
  box-shadow: 0 2px 6px rgba(211, 47, 47, 0.3);
}

.generate-btn:active {
  background: #b71c1c;
  transform: scale(0.98);
}

.results {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 260px;
  overflow-y: auto;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: #fafafa;
  border-radius: 6px;
  border-left: 3px solid #d32f2f;
  transition: all 0.2s;
}

.result-item:hover {
  background: #f0f0f0;
  border-left-color: #b71c1c;
}

.result-text {
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

.copy-btn {
  padding: 4px 10px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: #b71c1c;
}

.empty-state {
  text-align: center;
  padding: 30px 20px;
  color: #aaa;
  background: #fafafa;
  border-radius: 6px;
  border: 1px dashed #ddd;
}

.empty-state p {
  margin: 4px 0;
  font-size: 13px;
  color: #888;
}

/* 系统信息 */
.system-info {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
  margin-top: 8px;
}

.system-info button {
  flex: 1;
  min-width: 80px;
  padding: 6px 10px;
  background: white;
  color: #888;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
}

.system-info button:hover {
  background: #f5f5f5;
  color: #d32f2f;
  border-color: #d32f2f;
}

/* 滚动条样式 */
.results::-webkit-scrollbar {
  width: 6px;
}

.results::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 6px;
}

.results::-webkit-scrollbar-thumb {
  background: #d32f2f;
  border-radius: 6px;
}

.results::-webkit-scrollbar-thumb:hover {
  background: #b71c1c;
}
</style>
