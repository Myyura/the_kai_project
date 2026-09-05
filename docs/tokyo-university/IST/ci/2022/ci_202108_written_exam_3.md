---
sidebar_label: 2021年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Moore-Penrose-Pseudoinverse
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Select four items out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text.
If necessary, use examples or figures.

1. **Cellular automaton**
2. **Clock frequency**
3. **The method of surrogate data**
4. **Pseudo-inverse matrix (generalized inverse matrix)**
5. **Recurrent neural network**
6. **Kullback-Leibler divergence**
7. **Homography transformation**
8. **Passive Walking**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 元胞自动机。
2. 时钟频率。
3. 替代数据法。
4. 伪逆矩阵。
5. 循环神经网络。
6. Kullback–Leibler 散度。
7. 单应变换。
8. 被动行走。

## **Kai**

### (1) Cellular automaton

A cellular automaton consists of a lattice of cells, each with a state from a finite set. At each discrete time step, all cells update according to a local rule depending on their current state and neighboring states. For example, Conway's Game of Life uses two-dimensional binary cells: a live cell survives with two or three live neighbors, and a dead cell becomes live with exactly three. Simple local rules can generate moving patterns and complex collective behavior. Applications include models of growth, traffic, and computation.

### (2) Clock frequency

Clock frequency is the number of cycles of a periodic clock per second, measured in hertz; the period is $T=1/f$. In a synchronous circuit, clock edges coordinate state changes in registers. The period must accommodate the maximum register-to-register propagation delay, setup time, and clock uncertainty. A processor's execution time can be expressed as instruction count times average cycles per instruction divided by clock frequency. A higher frequency alone does not guarantee higher application performance because instruction throughput, memory stalls, and architecture also matter.

### (3) The method of surrogate data

Surrogate-data testing compares a statistic of an observed time series against statistics of randomized series generated under a specified null hypothesis. For a linear stationary-process null, one approach randomizes Fourier phases while preserving the power spectrum, retaining the linear correlation structure. A nonlinear statistic, such as nonlinear prediction error, is then computed for both the original and surrogate series. An extreme original statistic can reject the null at a chosen significance level. Rejection does not by itself prove deterministic chaos; nonstationarity or an unsuitable null can also explain the result. See [Schreiber and Schmitz](https://arxiv.org/abs/chao-dyn/9909037).

### (4) Pseudo-inverse matrix

For any matrix $A$, its Moore–Penrose inverse $A^+$ uniquely satisfies

$$
AA^+A=A,\quad A^+AA^+=A^+,\quad
(AA^+)^*=AA^+,\quad(A^+A)^*=A^+A,
$$

where $*$ denotes conjugate transpose. If $A=U\Sigma V^*$ is a singular-value decomposition, then $A^+=V\Sigma^+U^*$, where nonzero singular values are inverted and zeros remain zero. The vector $A^+b$ is the minimum-norm solution among all least-squares minimizers of $\|Ax-b\|_2$. For full column rank, $A^+=(A^*A)^{-1}A^*$; for a square nonsingular matrix, $A^+=A^{-1}$.

### (5) Recurrent neural network

A recurrent neural network processes a sequence using a hidden state, for example $h_t=\phi(W_xx_t+W_hh_{t-1}+b)$ and $y_t=\psi(W_yh_t+c)$. The shared parameters and recurrent state let its output depend on earlier inputs, supporting tasks such as sequence labeling and language modeling. Training commonly uses backpropagation through time, which unfolds the recurrence over the sequence. Repeated Jacobian products can cause vanishing or exploding gradients; gated architectures such as LSTM and GRU help retain information over longer intervals.

### (6) Kullback–Leibler divergence

For discrete distributions $P,Q$ on the same support,

$$
D_{\mathrm{KL}}(P\|Q)=\sum_xP(x)\log\frac{P(x)}{Q(x)}.
$$

A zero-$P$ term is defined as zero, while $P(x)>0,Q(x)=0$ gives infinite divergence. Gibbs' inequality gives $D_{\mathrm{KL}}\ge0$, with equality exactly when the distributions agree. It measures the expected excess log loss from using $Q$ when data follow $P$. It is generally asymmetric and does not satisfy the triangle inequality, so it is not a distance metric. Its value is in nats for the natural logarithm and bits for base two.

### (7) Homography transformation

A planar projective transformation maps homogeneous coordinates by $\tilde x'\sim H\tilde x$, where $H$ is a nonsingular $3\times3$ matrix and equality is up to a nonzero scale. Thus $[wx',wy',w]^T=H[x,y,1]^T$. The nine entries of $H$ have one common scale ambiguity, giving eight degrees of freedom. Homographies preserve lines and cross-ratios, but generally not lengths or angles. They describe corresponding images of a plane, or the entire view under pure camera rotation, and are used in document rectification and panorama alignment. Arbitrary three-dimensional scenes with camera translation generally require depth-dependent mappings.

### (8) Passive walking

Passive dynamic walking is a gait sustained by the mechanical dynamics of a legged system without powered joint control. A suitably designed walker can walk down a gentle slope: gravity supplies the energy lost during impacts, while inertia and the geometry coordinate the leg motion. A stable periodic gait corresponds to a stable limit cycle, allowing small disturbances to decay. This illustrates how mechanical design can reduce the control effort needed for locomotion. Sustained walking on level ground with dissipative impacts requires an external energy source. See [McGeer](https://pubmed.ncbi.nlm.nih.gov/8246506/).
