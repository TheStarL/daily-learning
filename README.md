# Daily Learning

> 📖 研究笔记与技术探索 — 日常科研与开发笔记

🌐 **在线访问**：[https://thestarl.github.io/daily-learning/](https://thestarl.github.io/daily-learning/)



## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run docs:dev
```

访问 `http://localhost:5173/daily-learning/` 预览站点。

### 构建

```bash
npm run docs:build
```

构建产物输出至 `docs/.vitepress/dist/`。

## 📝 添加笔记

1. 在对应分类目录下创建 `.md` 文件，例如：

   ```bash
   docs/anomaly-detection/patchcore.md
   ```

2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 中添加链接：

   ```ts
   '/anomaly-detection/': [
     {
       text: '工业异常检测',
       items: [
         { text: '概述', link: '/anomaly-detection/' },
         { text: 'PatchCore 论文笔记', link: '/anomaly-detection/patchcore' },  // 新增
       ],
     },
   ],
   ```

3. 提交并推送至 `master` 分支，GitHub Actions 将自动部署。

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) v1.6.4 — 静态站点生成器
- [GitHub Pages](https://pages.github.com/) — 静态站点托管
- [GitHub Actions](https://github.com/features/actions) — CI/CD 自动部署

## 📄 License

MIT
