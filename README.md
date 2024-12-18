# MINIDOGE 多语言网站

## 项目介绍

这是一个基于 React + TypeScript + i18n 的多语言网站项目，支持 20 种语言。

## 支持的语言

- 英语 (en-US)
- 简体中文 (zh-CN)
- 繁体中文 (zh-HK)
- 日语 (ja-JP)
- 韩语 (ko-KR)
- 马来语 (ms-MY)
- 印尼语 (id-ID)
- 菲律宾语 (fil-PH)
- 泰语 (th-TH)
- 越南语 (vi-VN)
- 阿拉伯语 (ar-SA)
- 波斯语 (fa-IR)
- 印地语 (hi-IN)
- 土耳其语 (tr-TR)
- 俄语 (ru-RU)
- 法语 (fr-FR)
- 德语 (de-DE)
- 葡萄牙语 (pt-BR)
- 西班牙语 (es-ES)
- 意大利语 (it-IT)

## 项目结构

```
src/config/
├── index.ts          # 主配置文件
├── links.ts          # 外部链接配置
├── nav.ts            # 导航菜单配置
├── shared/           # 共享配置
└── locale/           # 多语言翻译文件
```

## 开发指南

### 安装依赖

```bash
yarn install
```

### 开发模式

```bash
yarn dev
```

### 构建项目

```bash
yarn build
```

### 添加新语言

1. 在 `src/config/locale` 目录下创建新的语言目录
2. 复制完整的翻译文件结构
3. 在 `src/config/index.ts` 中添加语言支持配置

### 修改翻译

直接修改对应语言目录下的翻译文件，注意保持以下规范：

- 保持 HTML 标签的完整性
- 使用直接导出字符串的格式
- 特殊标记（如 $MINIDOGE）保持原样不翻译

## 技术栈

- React
- TypeScript
- i18next
- Vite
- Tailwind CSS

## 注意事项

1. 所有翻译文件必须使用直接导出字符串的格式
2. HTML 标签必须保持完整和一致性
3. 确保所有语言都有完整的翻译文件结构

## 许可证

MIT License