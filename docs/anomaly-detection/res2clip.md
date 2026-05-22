# Res2CLIP: 残差对准的少量样本学习通用异常检测
## 研究动机

- 统一的文本提示是粗粒度的，一个统一的文本方向很难精确对齐所有局部区域。因为前景、背景、边缘、纹理区域的视觉特征差异很大
- 原始clip的空间类别信息很强，具有类别特定的信息，难以泛化

理论角度

> 传统的text branch隐含 text residual,传统的 visual branch 隐含 visual residual;但前者跨模态对齐不对称，后者丢失方向信息，所以需要residual-to-residual alignment.

跨模态不对齐：一个 absolute visual feature 去对齐一个 relative text residual direction，本身语义层级不一致。

