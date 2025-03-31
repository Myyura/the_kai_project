---
sidebar_label: "2021年度 線形代数"
sidebar_position: 20
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年度 線形代数


## **Author**
Yu

## **Description**
$n \times m$ 実行列 $A \in \mathbb{R}^{n \times m}$ の第 $j$ 列 $(j = 1, 2, \dots , m)$ を $a_j \in \mathbb{R}^n$とする．各部分集合 $J \subseteq \{1, 2, \dots , m\}$ について，その要素数を $|J|$ で表し，$a_j (j \in J)$ を $j$ に関する昇順で左から並べて得られる $A$ の部分行列を $A[J] \in \mathbb{R}^{n \times |J|}$ で表す．このとき，以下の問いに答えよ．

(1) 以下の行列 $A$ に対し，$\{a_j|j \in J\}$ が線形独立であるような部分集合 $J \subseteq \{1, 2, 3, 4, 5, 6\}$ をすべて求めよ．

$$
A = 
\begin{pmatrix}
1 & 0 & 0 & -2 & 0 & 0 \\
0 & 1 & 0 & -2 & -3 & -5 \\
-2 & -2 & 0 & 4 & 6 & 0 \\
\end{pmatrix}
$$

(2) (1) の行列 $A$ に対し，$\text{rank}(A[J]) < |J|$ を満たす部分集合 $J \subseteq \{1, 2, 3, 4, 5, 6\}$ であって，$J$ の任意の真部分集合 $I \subsetneq J$ について $\text{rank}(A[I]) = |I|$ が成り立つものをすべて求めよ．ただし，空集合 $\emptyset$ に対しては $\text{rank}(A[\emptyset]) = 0$ と定義する．

(3) 一般の $A \in \mathbb{R}^{n×m}$ について，$I \subseteq J \subseteq \{1, 2, \dots , m\}$ かつ $\text{rank}(A[J]) = |J|$ のとき，$\text{rank}(A[I]) = |I|$ が成り立つことを示せ．

## **Kai** 
### (1)

$$
\begin{aligned}
A &= \begin{bmatrix}
1 & 0 & 0 & -2 & 0 & 0\\
0 & 1 & 0 & -2 & -3 & -5\\
-2 & -2 & 0 & 4 & 6 & -10\\
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
J &= \{6\} \\
J &= \emptyset
\end{aligned}
$$

### (2)

$$
J = \{3\} \quad J = \{2,5\} \quad J = \{1,4,6\}
$$

### (3)
$\text{rank}(A[J]) = |J|$ より、$\{a_j|j \in J\}$ は線型独立である.

線型独立な集合の部分集合は線型独立である.

よって, $\{a_i|i \in I\}$ は線型独立である. $\text{rank}(A[I]) = |I|$. 
