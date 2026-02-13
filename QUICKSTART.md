# 🚀 快速上手指南

## 第一步：全局安装 WPS JS 工具

### Windows 系统

```bash
# 打开PowerShell或CMD，以管理员身份运行
npm install -g wpsjs

# 验证安装
wpsjs --version
```

### 成功标志
安装成功后，会看到类似输出：
```
+ wpsjs@x.x.x installed
+ C:\Users\YourName\AppData\Roaming\npm\node_modules\wpsjs
```

---

## 第二步：安装项目依赖

```bash
# 进入项目目录
cd novelhelper

# 安装依赖
npm install
```

**预期输出**：
```
added 297 packages, and audited 298 packages in 27s
```

---

## 第三步：启动开发环境

### 方法一：推荐 - 使用 wpsjs debug

```bash
# 在项目目录执行
wpsjs debug
```

**这个命令会自动完成以下操作**：

1. ✅ 启动开发服务器在 http://localhost:3889
2. ✅ 自动打开浏览器开发者工具（F12）
3. ✅ 启动WPS并加载插件
4. ✅ 配置所有必要的环境

**看到这个提示说明成功**：
```
[WPS JS] 开发服务器已启动: http://localhost:3889
[WPS JS] 请在WPS中刷新插件（按F5）
```

### 方法二：仅启动开发服务器

```bash
npm run dev
```

**注意**：此方法需要手动在WPS中加载插件

---

## WPS 中查看插件

### 1. 打开 WPS

启动 WPS Office 专业版

### 2. 找到插件

在顶部功能区找到 **"小说助手"** 标签页

### 3. 打开插件

点击 **"打开助手面板"** 按钮

### 4. 使用插件

- 选择文章类型（东方玄幻、历史架空等）
- 点击"随机人名"或"随机国家"
- 点击"生成"按钮
- 点击"复制"按钮复制结果

---

## 调试技巧

### 查看前端日志

浏览器会自动打开 `http://localhost:3889`

在代码中使用：
```javascript
console.log('调试信息')
console.log('生成的人名：', names)
console.log('当前主题：', theme)
```

### 调试 WPS API

```javascript
// 在浏览器控制台执行
window.Application

// 查看当前文档
window.Application.ActiveDocument

// 查看选中的内容
window.Application.Selection

// 查看文档名称
window.Application.ActiveDocument.Name
```

---

## 常见问题解决

### 问题1：插件没有加载

**解决方案**：
1. 检查是否安装了项目依赖：`npm install`
2. 在WPS中按 F5 刷新
3. 重启WPS

### 问题2：修改代码没有更新

**解决方案**：
1. 确认使用的是 `wpsjs debug` 模式（支持热更新）
2. 查看浏览器控制台是否有错误
3. 手动刷新浏览器（Ctrl+Shift+R）

### 问题3：端口被占用

**解决方案**：
```bash
# 方法1：自动使用其他端口
wpsjs debug

# 方法2：指定端口
wpsjs debug --port 3900
```

---

## 从零到运行的完整流程

```bash
# === 第1步：全局安装 WPS JS 工具（只需一次） ===
npm install -g wpsjs

# === 第2步：进入项目目录 ===
cd novelhelper

# === 第3步：安装项目依赖 ===
npm install

# === 第4步：启动开发调试环境 ===
wpsjs debug

# ✅ 完成！现在可以：
# 1. 在浏览器中看到界面（http://localhost:3889）
# 2. 在WPS中使用插件
# 3. 修改代码会自动热更新
# 4. 使用F12查看调试信息
```

**预期时间**：首次运行约需30-60秒完成启动

---

## 生产环境构建和部署

### 构建插件

```bash
# 构建生产版本
npm run build

# 构建完成后，dist目录包含：
# - index.html
# - assets/*.js（压缩优化）
# - assets/*.css（压缩优化）
```

### 部署方式

**方式1：本地加载**
```bash
# 直接将dist目录放在WPS插件目录
# WPS会自动识别
```

**方式2：分享给他人**
```bash
# 将dist目录打包为zip
# 其他人解压后可直接使用
```

---

## 项目文件快速参考

### 关键配置文件

| 文件 | 作用 | 修改频率 |
|------|------|----------|
| manifest.xml | 插件基本信息 | 低 |
| public/ribbon.xml | 功能区按钮 | 中 |
| src/data/names.js | 人名数据 | 低 |
| src/data/countries.js | 国家名数据 | 低 |
| src/components/TaskPane.vue | 主界面 | 高 |
| vite.config.js | 构建配置 | 低 |

### 数据文件位置

```
src/data/
├── names.js          # 修改人名风格或数据
└── countries.js      # 修改国家风格或数据
```

---

## 技巧和建议

### 开发效率提升

1. **使用浏览器同步**
   - wpsjs debug 会自动打开浏览器
   - 代码修改自动热更新
   - 无需手动刷新WPS

2. **充分利用Vue DevTools**
   - 安装 Vue DevTools 浏览器插件
   - 可以实时查看组件状态
   - 支持Vue组件调试

3. **控制台调试技巧**
   ```javascript
   // 使用分组输出
   console.group('人名生成')
   console.log('风格:', style)
   console.log('性别:', gender)
   console.log('结果:', names)
   console.groupEnd()

   // 使用表格输出
   console.table([
     { style: 'easternAncient', name: '东方古代' },
     { style: 'westernModern', name: '西方现代' }
   ])
   ```

### 人名和国家风格扩展

如需添加新的风格，按以下步骤：

1. **在 `src/data/names.js` 中添加新风格数据**
   ```javascript
   export const newStyle = {
     surnames: [...],
     givenNames: [...],
     generateName() { ... }
   }
   ```

2. **在 nameStyles 导出中注册**
   ```javascript
   export const nameStyles = {
     ...
     newStyle: { name: '新风格', data: newStyle }
   }
   ```

3. **在 `src/utils/randomGenerator.js` 中添加推荐**
   ```javascript
   newStyle: {
     nameStyle: 'newStyle',
     countryStyle: '相应国家风格'
   }
   ```

4. **在 TaskPane.vue 的 themes 中添加选项**
   ```javascript
   themes: {
     newType: {
       name: '新类型',
       description: '新类型的描述'
     }
   }
   ```

---

## 获取帮助

- 📖 [WPS开放平台文档](https://open.wps.cn/docs/office)
- 💬 [WPS JS GitHub Issues](https://github.com/WPS-FE/wpsjs/issues)
- 📚 [Vue.js 文档](https://cn.vuejs.org/)
- 🔧 [Vite 文档](https://cn.vitejs.dev/)

---

**祝开发顺利！🎉**
