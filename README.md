# MINIDOGE Web Frontend

MINIDOGE Web Frontend 是一个基于 React + Vite + TypeScript 构建的现代化 Web 应用程序。

## 技术栈

- **框架**: React 18
- **构建工具**: Vite 5
- **语言**: TypeScript 5
- **样式**: TailwindCSS + PostCSS
- **UI 组件**: Ant Design + Ant Design Mobile
- **状态管理**: React Hooks
- **国际化**: i18next
- **Web3**: @solana/web3.js + @solana/spl-token

## 项目结构

```
minidoge-web-frontend/
├── src/                    # 源代码目录
│   ├── assets/            # 静态资源
│   ├── components/        # 组件
│   ├── config/           # 配置文件
│   ├── hooks/            # 自定义 Hooks
│   ├── i18n/             # 国际化
│   ├── layout/           # 布局组件
│   ├── provider/         # Context Providers
│   ├── router/           # 路由配置
│   ├── store/            # 状态管理
│   ├── styles/           # 全局样式
│   ├── types/            # TypeScript 类型定义
│   ├── utils/            # 工具函数
│   ├── view/             # 页面视图
│   ├── App.tsx           # 应用入口组件
│   └── main.tsx          # 应用入口文件
├── public/               # 公共资源
├── scripts/              # 构建脚本
├── docs/                 # 项目文档
├── index.html           # HTML 模板
├── package.json         # 项目依赖
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── tailwind.config.js   # TailwindCSS 配置
```

## 主要功能

- 多语言支持 (20+ 种语言)
- 暗色/亮色主题切换
- 响应式设计
- Web3 钱包集成
- 基金会多签钱包管理
- DAO 治理系统

## 开发指南

### 环境要求

- Node.js >= 18.19.0
- Yarn >= 1.22.19

### 安装依赖

```bash
yarn install
```

### 开发服务器

```bash
yarn dev
```

### 构建生产版本

```bash
yarn build
```

### 代码检查

```bash
yarn lint
```

## 部署

项目使用 Cloudflare Pages 进行部署。每次推送到主分支时会自动触发部署流程。

### 部署配置

- 构建命令: `yarn build`
- 输出目录: `dist`
- 环境变量: 参考 `.env.example`

## 国际化

项目使用 i18next 进行国际化管理，支持以下语言：

- 英语 (en-US)
- 简体中文 (zh-CN)
- 繁体中文 (zh-HK)
- 日语 (ja-JP)
- 韩语 (ko-KR)
- 俄语 (ru-RU)
- 等 20+ 种语言

### 添加新语言

1. 在 `src/config/locale` 创建新的语言目录
2. 复制现有语言文件并翻译
3. 在 `src/config/index.ts` 中注册新语言

## 主题定制

项目支持暗色和亮色主题，主题配置在 `index.html` 的 CSS 变量中定义：

```css
:root[class="light"] {
  --bg-color: white;
  --title-color: #000000;
  --text-color: rgba(0, 0, 0, 0.5);
  --card-color: #e9eaeb;
  --border-color: #5f5f5f24;
}

:root[class="dark"] {
  --bg-color: #181a20;
  --title-color: white;
  --text-color: rgba(255, 255, 255, 0.5);
  --card-color: #282d37;
  --success-color: #16a34a;
  --border-color: #5f5f5f71;
}
```

## Web3 集成

项目使用 Solana Web3.js 和 SPL Token 进行区块链交互：

- 钱包连接
- 代币余额查询
- 多签钱包管理
- 交易处理

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情