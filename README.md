# Memes Web V2

这是一个使用 React + TypeScript + Vite 构建的现代化 Web 应用项目。

## 技术栈

- **核心框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI 框架**: 
  - Ant Design (antd)
  - Ant Design Mobile
  - Ant Design Web3
- **状态管理**: 
  - Redux Toolkit
  - React Query
- **路由**: React Router v6
- **样式解决方案**: 
  - Tailwind CSS
  - SASS
  - Styled Components
- **Web3 集成**:
  - Wagmi
  - Viem
  - Solana Wallet Adapter
- **国际化**: i18next
- **HTTP 客户端**: Axios

## 项目结构

```
src/
├── api/          # API 接口定义
├── assets/       # 静态资源文件
├── axios/        # Axios 配置和拦截器
├── components/   # 可复用组件
├── config/       # 项目配置文件
├── hook/         # 自定义 React Hooks
├── i18n/         # 国际化配置
├── provider/     # React Context Providers
├── router/       # 路由配置
├── store/        # Redux 状态管理
├── style/        # 全局样式文件
├── type/         # TypeScript 类型定义
├── util/         # 工具函数
└── view/         # 页面组件
```

## 开发环境配置

### 系统要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
# 或
yarn
```

### 开发命令

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev

# 构建生产版本
npm run build
# 或
yarn build

# 代码检查
npm run lint
# 或
yarn lint

# 预览生产构建
npm run preview
# 或
yarn preview
```

## ESLint 配置

项目使用了严格的 TypeScript ESLint 配置。如果你正在开发生产应用，建议启用类型感知的 lint 规则：

1. 配置顶级 `parserOptions`：

```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

2. 使用更严格的 TypeScript ESLint 规则：
   - 将 `plugin:@typescript-eslint/recommended` 替换为 `plugin:@typescript-eslint/recommended-type-checked` 或 `plugin:@typescript-eslint/strict-type-checked`
   - 可选添加 `plugin:@typescript-eslint/stylistic-type-checked`

## 环境变量

项目使用了不同的环境配置文件：
- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置

## Web3 功能

项目集成了多链钱包支持：
- 以太坊生态: 通过 wagmi 支持
- Solana: 通过 Solana Wallet Adapter 支持

## 移动端适配

项目使用了以下方案实现移动端适配：
- postcss-pxtorem 用于单位转换
- antd-mobile 提供移动端 UI 组件
- 响应式设计通过 Tailwind CSS 实现

## 支付功能

### 概述

本项目使用 Solana 区块链网络处理域名注册支付。用户需要连接 Solana 钱包并支付少量 SOL 来完成域名注册。

### 技术实现

- **区块链网络**: Solana Mainnet
- **钱包集成**: @solana/wallet-adapter-react
- **区块链交互**: @solana/web3.js
- **数值计算**: BigNumber.js

### 支付流程

1. **连接钱包**
   - 用户需要安装并连接支持 Solana 的钱包（如 Phantom）
   - 钱包需要有足够的 SOL 余额

2. **域名注册**
   - 填写项目基本信息（图片、名称、描述等）
   - 系统会创建包含以下内容的交易：
     - 转账指令：支付 0.00001 SOL
     - 备注指令：记录注册信息

3. **交易确认**
   - 交易发送到 Solana 网络
   - 等待区块确认（'confirmed' 级别）
   - 成功后自动跳转到用户页面

### 技术细节

```typescript
// 支付金额
const fixedAmount = 0.00001 // SOL
const lamports = new BigNumber(fixedAmount)
  .multipliedBy(LAMPORTS_PER_SOL)
  .integerValue(BigNumber.ROUND_DOWN)
  .toNumber()

// 接收地址
const recipientPubKey = new PublicKey(
  '74A2G5b6oPK3PS3yX5rAtFwnYvxtbAuhckoWG125KMcP'
)
```

### 注意事项

1. 确保钱包中有足够的 SOL（支付金额 + 交易费用）
2. 交易可能因网络拥堵而延迟
3. 如遇交易失败，请检查：
   - 钱包余额
   - 网络连接
   - 区块链网络状态
