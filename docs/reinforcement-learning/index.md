---
outline: deep
---

# 强化学习

强化学习（Reinforcement Learning）研究智能体如何在与环境的交互中通过试错学习最优策略，是实现通用智能决策的关键技术路径。

## 研究方向概览

### 经典算法

从价值函数到策略梯度的基础理论与算法：

- **Q-Learning / DQN** — 基于价值函数的经典方法
- **Policy Gradient / REINFORCE** — 策略梯度方法的理论基础
- **Actor-Critic** — 结合价值估计与策略优化的框架

### 深度强化学习

将深度学习与 RL 结合，处理高维状态与动作空间：

- **PPO** — 近端策略优化，稳定性与性能的平衡
- **SAC** — 软演员-评论家，最大熵框架下的高效学习
- **TD3** — 双延迟确定性策略梯度

### RLHF 与对齐

利用人类反馈优化大语言模型，实现 AI 对齐：

- **RLHF** — 基于人类反馈的强化学习
- **DPO** — 直接偏好优化，简化 RLHF 流程
- **GRPO** — 组相对策略优化

## 核心概念速查

| 概念 | 说明 |
|------|------|
| MDP | 马尔可夫决策过程，RL 的数学框架 |
| Reward Shaping | 奖励函数设计与工程 |
| Exploration | 探索-利用权衡策略 |
| Off-policy vs On-policy | 离策略与在策略学习的区别 |

::: tip 如何添加笔记
在 `docs/reinforcement-learning/` 目录下创建新的 `.md` 文件，并在 `config.mts` 的 sidebar 配置中添加对应链接即可。
:::
