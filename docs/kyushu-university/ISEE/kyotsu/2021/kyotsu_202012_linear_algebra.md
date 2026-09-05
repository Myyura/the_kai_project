---
sidebar_label: 2020年12月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Discrete-Mathematics.Combinatorics.Matroid-Theory
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年12月実施 線形代数

## **Author**
Yu, 祭音Myyura

## **Description**
$n \times m$ 実行列 $A \in \mathbb{R}^{n \times m}$ の第 $j$ 列 $(j = 1, 2, \dots , m)$ を $a_j \in \mathbb{R}^n$ とする．各部分集合 $J \subseteq \{1, 2, \dots , m\}$ について，その要素数を $|J|$ で表し， $a_j (j \in J)$ を $j$ に関する昇順で左から並べて得られる $A$ の部分行列を $A[J] \in \mathbb{R}^{n \times |J|}$ で表す．このとき，以下の問いに答えよ．

(1) 以下の行列 $A$ に対し， $\{a_j|j \in J\}$ が線形独立であるような部分集合 $J \subseteq \{1, 2, 3, 4, 5, 6\}$ をすべて求めよ．

$$
A =
\begin{pmatrix}
1 & 0 & 0 & -2 & 0 & 0 \\
0 & 1 & 0 & -2 & -3 & -5 \\
-2 & -2 & 0 & 4 & 6 & 0 \\
\end{pmatrix}
$$

(2) (1) の行列 $A$ に対し， $\text{rank}(A[J]) < |J|$ を満たす部分集合 $J \subseteq \{1, 2, 3, 4, 5, 6\}$ であって， $J$ の任意の真部分集合 $I \subsetneq J$ について $\text{rank}(A[I]) = |I|$ が成り立つものをすべて求めよ．ただし，空集合 $\emptyset$ に対しては $\text{rank}(A[\emptyset]) = 0$ と定義する．

(3) 一般の $A \in \mathbb{R}^{n×m}$ について， $I \subseteq J \subseteq \{1, 2, \dots , m\}$ かつ $\text{rank}(A[J]) = |J|$ のとき， $\text{rank}(A[I]) = |I|$ が成り立つことを示せ．

### 题目描述

设实矩阵 $A\in\mathbb R^{n\times m}$ 的第 $j$ 列为

$$
a_j\in\mathbb R^n\qquad(j=1,2,\ldots,m).
$$

对每个子集 $J\subseteq\{1,2,\ldots,m\}$，以 $|J|$ 表示其元素个数；将所有 $a_j$（$j\in J$）按下标 $j$ 递增的顺序从左到右排列，所得子矩阵记为

$$
A[J]\in\mathbb R^{n\times|J|}.
$$

回答下列问题：

1. 对

$$
A=\begin{pmatrix}
1&0&0&-2&0&0\\
0&1&0&-2&-3&-5\\
-2&-2&0&4&6&0
\end{pmatrix},
$$

   求全部使列集合 $\{a_j\mid j\in J\}$ 线性无关的

   $$
   J\subseteq\{1,2,3,4,5,6\}.
   $$

2. 对第 1 问的同一矩阵，求全部满足

   $$
   \operatorname{rank}(A[J])<|J|
   $$

   且对 $J$ 的每个真子集 $I\subsetneq J$ 都满足

   $$
   \operatorname{rank}(A[I])=|I|
   $$

   的 $J\subseteq\{1,2,3,4,5,6\}$。约定空集满足

   $$
   \operatorname{rank}(A[\varnothing])=0.
   $$

3. 对一般的 $A\in\mathbb R^{n\times m}$，证明：若

   $$
   I\subseteq J\subseteq\{1,2,\ldots,m\},
   \qquad
   \operatorname{rank}(A[J])=|J|,
   $$

   则 $\operatorname{rank}(A[I])=|I|$。

## **Kai**
### (1)

$$
\begin{aligned}
A &= \begin{bmatrix}
1 & 0 & 0 & -2 & 0 & 0\\
0 & 1 & 0 & -2 & -3 & -5\\
-2 & -2 & 0 & 4 & 6 & 0\\
\end{bmatrix}
\Rightarrow
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 5 \\
0 & 1 & 0 & 0 & -3 & 0 \\
0 & 0 & 0 & 1 & 0 & \frac{5}{2} \\
\end{bmatrix} \\
J &= \{1\} \quad J = \{1,2\} \quad J = \{1,4\} \quad J = \{1,5\} \quad J = \{1,6\} \quad J = \{1,2,4\} \quad J = \{1,2,6\} \\
J &= \{2\} \quad J = \{2,4\} \quad J = \{2,6\} \quad J = \{2,4,6\} \\
J &= \{4\} \quad J = \{4,5\} \quad J = \{4,6\} \quad J = \{4,5,6\} \\
J &= \{5\} \quad J = \{5,6\} \\
J &= \{1,4,5\} \quad J = \{1,5,6\} \\
J &= \{6\} \\
J &= \emptyset
\end{aligned}
$$

### (2)

$$
J = \{3\} \quad J = \{2,5\} \quad J = \{1,4,6\}
$$

### (3)
$\text{rank}(A[J]) = |J|$ より、 $\{a_j|j \in J\}$ は線型独立である.

線型独立な集合の部分集合は線型独立である.

よって, $\{a_i|i \in I\}$ は線型独立である. $\text{rank}(A[I]) = |I|$ .
