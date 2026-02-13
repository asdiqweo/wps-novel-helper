# 📚 小说助手 - WPS插件

<div align="center">

![Vue](https://img.shields.io/badge/Vue-3.4.29-brightgreen)
![Vite](https://img.shields.io/badge/Vite-5.3.1-blue)
![WPS JS](https://img.shields.io/badge/WPS%20JS-latest-orange)

一款专为小说作者设计的WPS插件，支持随机生成人名和国家名，涵盖东方/西方、古代/现代等多种风格。

</div>

## ✨ 功能特点

- 👤 **随机人名生成**
  - 东方现代、东方古代、西方现代、西方古代、日式
  - 支持性别选择（男性/女性/随机）
  - 东方古代支持"表字"显示
  - 西方人名使用中文音译

- 🏳️ **随机国家生成**
  - 古代风格、现代风格、星际时代
  - 全部为虚拟国家名，涵盖东西方和科幻设定

- 🎨 **智能风格匹配**
  - 6种文章类型预设（东方玄幻、历史架空、现代都市、西方奇幻、西方现代、科幻未来）
  - 选择文章类型后自动匹配对应的人名和国家风格

- 🎯 **简洁高效**
  - 现代化UI设计，白色背景+红色主色调
  - 横向紧凑排版，内容充满窗口
  - 一键复制结果

## 📸 效果预览

### 主界面
```
┌─────────────────────────────┐
│      📚 小说助手        │
│    辅助作者创作工具       │
└─────────────────────────────┘

┌─────────────────────────────┐
│  文章类型：[现代都市 ▼]  │
│  📝 现代都市背景...       │
└─────────────────────────────┘

┌──────────────────┬───────────┐
│   👤 随机人名   │  🏳️ 随机国家 │
│  生成符合文章风格  │  生成符合文章风格 │
└──────────────────┴───────────┘

点击按钮展开对应生成器 ↓
```

### 人名生成示例
| 文章类型 | 人名风格 | 示例 |
|----------|---------|------|
| 东方玄幻 | 东方古代 | 司马青云，字孔明 |
| 历史架空 | 东方古代 | 慕容飞剑 |
| 现代都市 | 东方现代 | 张伟、李芳 |
| 西方奇幻 | 西方古代 | 亚瑟德卡米洛 |
| 西方现代 | 西方现代 | 詹姆斯·史密斯 |
| 科幻未来 | 西方现代 | 约翰·安德森 |

### 国家生成示例
| 文章类型 | 国家风格 | 示例 |
|----------|---------|------|
| 东方玄幻 | 古代风格 | 凌霄国、云州 |
| 历史架空 | 古代风格 | 大秦国、流云国 |
| 现代都市 | 现代风格 | 华夏国、东瀛国 |
| 西方奇幻 | 古代风格 | 艾尔瑞亚、卡米洛 |
| 西方现代 | 现代风格 | 诺瓦共和国 |
| 科幻未来 | 星际时代 | 银河帝国、火星殖民地 |

## 🚀 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器
- WPS 专业版（支持插件开发）

### 安装步骤

#### 1️⃣ 全局安装 WPS JS 开发工具

```bash
# 使用 npm 安装（推荐）
npm install -g wpsjs

# 或使用 yarn
yarn global add wpsjs
```

> 💡 **提示**：全局安装只需要执行一次，后续所有项目都可以使用。

#### 2️⃣ 安装项目依赖

```bash
# 进入项目目录
cd novelhelper

# 安装依赖
npm install
# 或
yarn install
```

#### 3️⃣ 启动开发服务器

```bash
# 开发模式（支持热更新）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

开发服务器默认运行在：`http://localhost:3889/`

## 📖 开发指南

### 项目结构

```
novelhelper/
├── public/                 # 静态资源
│   ├── ribbon.xml        # WPS功能区配置（按钮、菜单等）
│   └── images/          # 图标资源
├── src/
│   ├── data/            # 数据文件
│   │   ├── names.js      # 人名数据（各风格）
│   │   └── countries.js  # 国家名数据
│   ├── utils/           # 工具函数
│   │   └── randomGenerator.js  # 随机生成器
│   ├── components/       # Vue组件
│   │   ├── TaskPane.vue  # 主任务面板
│   │   ├── ribbon.js     # 功能区按钮逻辑
│   │   └── js/
│   │       ├── taskpane.js  # 面板功能
│   │       ├── dialog.js   # 对话框功能
│   │       └── util.js     # 工具函数
│   ├── router/           # 路由配置
│   ├── App.vue          # 根组件
│   └── main.js         # 应用入口
├── manifest.xml          # 插件清单文件
├── vite.config.js        # Vite配置
├── package.json          # 项目配置
└── README.md            # 项目说明
```

### 核心文件说明

#### 📄 manifest.xml
插件清单文件，定义插件基本信息：
```xml
<JsPlugin>
  <ApiVersion>1.0.0</ApiVersion>
  <Name>小说助手</Name>
  <Description>辅助作者创作...</Description>
</JsPlugin>
```

#### 🎨 public/ribbon.xml
WPS功能区按钮配置，定义插件在WPS顶部显示的按钮和菜单。

#### 🎯 src/components/TaskPane.vue
主界面组件，包含：
- 文章类型选择器
- 人名/国家功能按钮
- 生成器面板（可展开/折叠）
- 结果展示和复制功能

#### 📊 src/data/
数据文件：
- `names.js` - 人名生成逻辑和数据
- `countries.js` - 国家名生成逻辑和数据

## 🔧 在WPS中加载和调试

### 方法一：使用 wpsjs debug 命令（推荐）

#### 步骤1：启动debug模式

```bash
# 在项目目录执行
wpsjs debug
```

这个命令会自动：
1. ✅ 启动本地开发服务器（`http://localhost:3889`）
2. ✅ 打开浏览器开发者工具（可调试前端代码）
3. ✅ 启动WPS并自动加载插件
4. ✅ 配置WPS使用本地服务器作为插件源

#### 步骤2：在WPS中查看插件

WPS启动后，在顶部功能区会看到 **"小说助手"** 标签页。

点击 **"打开助手面板"** 按钮，即可在右侧看到插件界面。

#### 步骤3：调试插件

**前端调试**（浏览器F12）：
- 打开 `http://localhost:3889` 查看网页界面
- 支持Vue DevTools调试
- 修改代码后自动热更新

**WPS API调试**：
```javascript
// 在浏览器控制台或代码中打印
console.log(window.Application)

// 查看WPS API对象
console.log(window.Application.ActiveDocument)
console.log(window.Application.Selection)
```

### 方法二：使用 wpsjs 项目名称（适合自定义配置）

```bash
# 使用项目名称启动
wpsjs debug novelhelper

# 可选参数：
# --port 3889        # 指定端口号
# --browser         # 指定使用的浏览器
# --wps-path "路径" # 指定WPS安装路径
```

### 方法三：构建后手动加载（生产环境）

```bash
# 1. 构建项目
npm run build

# 2. wpsjs会自动使用dist目录
# 无需额外配置，直接加载即可
```

## 🎯 开发工作流

```
┌─────────────────────────────────────────┐
│  1. 修改代码                        │
│     ↓                                 │
│  2. 浏览器自动热更新                 │
│     ↓                                 │
│  3. 切换到WPS查看效果              │
│     ↓                                 │
│  4. 调试WPS API                     │
│     ↓                                 │
│  5. F5刷新WPS重新加载               │
└─────────────────────────────────────────┘
```

## 🔍 常见问题

### Q1: WPS中看不到插件？

**A**: 检查以下几点：
1. 确认使用的是 **WPS专业版**
2. 确认已执行 `npm install`
3. 尝试在WPS中重新加载插件（F5）
4. 查看WPS开发者工具控制台是否有错误信息

### Q2: 修改代码后没有生效？

**A**:
- 使用 `wpsjs debug` 模式会自动热更新
- 如果手动加载，需要：
  1. 重新构建：`npm run build`
  2. 关闭并重新打开WPS
  3. 或在WPS中按 F5 刷新

### Q3: 如何查看控制台日志？

**A**:
- `wpsjs debug` 会自动打开浏览器开发者工具
- 使用 `console.log()` 输出日志
- 查看浏览器控制台和WPS开发者工具

### Q4: 插件可以打包发布吗？

**A**:
- ✅ 可以，执行 `npm run build` 生成 `dist` 目录
- ✅ `dist` 目录可以直接部署或分享
- ✅ wpsjs会自动识别并使用构建后的文件

### Q5: 如何修改端口号？

**A**:
```bash
# 方法1：修改package.json
"scripts": {
  "dev": "vite --port 3900"  # 改为3900
}

# 方法2：命令行参数
wpsjs debug --port 3900
```

### Q6: 支持哪些WPS版本？

**A**:
- ✅ WPS Office 专业版
- ✅ WPS AI 专业版
- ✅ WPS 2019 及更高版本
- ❌ 个人版不支持插件开发

## 📦 构建和部署

### 开发环境构建

```bash
# 启动开发服务器（支持热更新）
npm run dev
```

### 生产环境构建

```bash
# 构建生产版本
npm run build

# 输出目录：dist/
# 构建产物：
# - dist/index.html
# - dist/assets/*.js
# - dist/assets/*.css
```

### 插件发布

构建完成后，`dist` 目录包含：
- 所有必需的插件文件
- 优化和压缩后的资源
- 可直接用于部署或分享

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|-------|------|
| Vue.js | 3.4.29 | 渐进式JavaScript框架 |
| Vite | 5.3.1 | 下一代前端构建工具 |
| Vue Router | 4.3.3 | Vue官方路由 |
| WPS JS API | latest | WPS插件开发接口 |
| ESLint | 8.57.0 | 代码检查工具 |
| Prettier | 3.2.5 | 代码格式化工具 |

## 📝 开发规范

### 代码风格

项目使用 ESLint + Prettier 保持代码风格统一：

```bash
# 检查代码
npm run lint

# 自动修复
npm run lint -- --fix

# 格式化代码
npm run format
```

### Git 提交规范

```bash
# 添加所有更改
git add .

# 提交（遵循约定式提交）
git commit -m "feat: 添加国家名生成功能"

# 或使用中文
git commit -m "新增：支持科幻风格国家名"
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/新功能`
3. 提交更改：`git commit -m "描述"`
4. 推送分支：`git push origin feature/新功能`
5. 创建 Pull Request

### 代码规范

- 遵循现有代码风格
- 添加必要的注释
- 更新相关文档
- 确保通过所有测试

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🌟 致谢

- [WPS开放平台](https://open.wps.cn/docs/office) - 提供完善的API文档
- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

---

<div align="center">

**如果觉得有用，请给个⭐Star支持一下！**

Made with ❤️ for novel writers

</div>
