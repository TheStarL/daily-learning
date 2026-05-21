import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Daily Learning',
  description: '论文笔记与项目开发 — 工业异常检测 · 具身智能 · 强化学习 · Agent 开发',
  base: '/daily-learning/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    siteTitle: 'Daily Learning',
    logo: undefined,

    nav: [
      { text: '首页', link: '/' },
      {
        text: '科研',
        items: [
          { text: '工业异常检测', link: '/anomaly-detection/' },
          { text: '具身智能', link: '/embodied-intelligence/' },
          { text: '强化学习', link: '/reinforcement-learning/' },
        ],
        activeMatch: '/anomaly-detection/|/embodied-intelligence/|/reinforcement-learning/',
      },
      {
        text: '开发',
        items: [
          { text: 'Agent 开发', link: '/agent-development/' },
        ],
        activeMatch: '/agent-development/',
      },
      {
        text: '关于我',
        items: [
          { text: '简介', link: '/about/' },
          { text: '个人经历', link: '/about/experience' },
          { text: '生活随笔', link: '/about/life/' },
        ],
        activeMatch: '/about/',
      },
    ],

    sidebar: {
      '/anomaly-detection/': [
        {
          text: '工业异常检测',
          items: [
            { text: '概述', link: '/anomaly-detection/' },
          ],
        },
      ],
      '/embodied-intelligence/': [
        {
          text: '具身智能',
          items: [
            { text: '概述', link: '/embodied-intelligence/' },
          ],
        },
      ],
      '/reinforcement-learning/': [
        {
          text: '强化学习',
          items: [
            { text: '概述', link: '/reinforcement-learning/' },
          ],
        },
      ],
      '/agent-development/': [
        {
          text: 'Agent 开发',
          items: [
            { text: '概述', link: '/agent-development/' },
          ],
        },
      ],
      '/about/': [
        {
          text: '关于我',
          items: [
            { text: '简介', link: '/about/' },
            { text: '个人经历', link: '/about/experience' },
          ],
        },
        {
          text: '生活随笔',
          items: [
            { text: '概述', link: '/about/life/' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheStarL/daily-learning' },
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2024-present Daily Learning',
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
  },
})
