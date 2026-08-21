---
sidebar_label: "2013年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列 (matrix) $A$ の階数 (rank) が 3 となるための、 $k$ の値に関する必要十分条件を求めよ。
ただし $k$ は実数 (real number) とする。

$$
A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 2 & k \end{pmatrix}
$$

### 题目描述

设 $k$ 为实数。求 $k$ 满足什么必要且充分条件时，矩阵

$$
A=\begin{pmatrix}
1&1&1\\
1&2&4\\
1&2&k
\end{pmatrix}
$$

的秩为 $3$。

## **Kai**

行列 $A$ の階数が 3 となるための $k$ の必要十分条件を求める。
行列式 $|A|$ が 0 でないとき、行列の階数は 3 である。

$$
|A| = \begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 2 & k \end{vmatrix}
$$

$|A|$ を計算する：

$$
|A| = 1 \cdot \begin{vmatrix} 2 & 4 \\ 2 & k \end{vmatrix} - 1 \cdot \begin{vmatrix} 1 & 4 \\ 1 & k \end{vmatrix} + 1 \cdot \begin{vmatrix} 1 & 2 \\ 1 & 2 \end{vmatrix}
$$

$$
= 1(2k - 8) - 1(k - 4) + 1(2 - 2)
$$

$$
= 2k - 8 - k + 4 + 0
$$

$$
= k - 4
$$

階数が 3 となるためには、 $|A| \neq 0$ である必要がある。
したがって、 $k - 4 \neq 0$ , つまり $k \neq 4$ 。

したがって、行列 $A$ の階数が 3 となるための必要十分条件は、 $k \neq 4$ である。
