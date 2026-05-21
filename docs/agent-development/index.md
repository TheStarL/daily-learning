---
outline: deep
---

# Agent 开发

Agent 开发聚焦于大语言模型驱动的智能体系统设计与工程化实践，是当前 AI 应用落地的重要方向。

## 研究方向概览

### 工具使用 (Tool Use)

赋予 LLM 调用外部工具的能力，扩展其行动边界：

- **Function Calling** — 结构化工具调用接口设计
- **Tool Learning** — 让模型自主学习使用新工具
- **API Orchestration** — 多工具的编排与调度

### 检索增强生成 (RAG)

结合外部知识库提升 LLM 的回答质量与时效性：

- **向量检索** — 基于 Embedding 的语义检索
- **Chunk 策略** — 文档切分与索引优化
- **Re-ranking** — 检索结果的重排序与筛选

### 多智能体系统 (Multi-Agent)

构建多个 Agent 协同工作的复杂系统：

- **角色分工** — 基于角色的任务分解与分配
- **通信协议** — Agent 间的消息传递机制
- **协作框架** — CrewAI、AutoGen、LangGraph 等实践

### 工程化实践

从原型到生产的工程经验：

- **Prompt Engineering** — 系统性的提示词工程方法
- **评估与监控** — Agent 行为的评测与追踪
- **安全与对齐** — 输出安全性与意图对齐

## 常用框架

| 框架 | 特点 |
|------|------|
| LangChain | 全面的 LLM 应用开发框架 |
| LlamaIndex | 专注于数据连接与检索的框架 |
| CrewAI | 多智能体角色扮演协作框架 |
| AutoGen | 微软推出的多智能体对话框架 |

::: tip 如何添加笔记
在 `docs/agent-development/` 目录下创建新的 `.md` 文件，并在 `config.mts` 的 sidebar 配置中添加对应链接即可。
:::
