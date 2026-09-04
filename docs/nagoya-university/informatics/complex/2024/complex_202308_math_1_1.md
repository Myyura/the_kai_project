---
sidebar_label: "2023年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の行列 $F$ の行列式 $\det F$ を求めよ。

$$
F = \begin{pmatrix} 0 & 3 & 0 & 0 & 0 \\ 0 & 0 & 5 & 0 & 2 \\ 1 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 4 & 4 \\ 0 & 0 & 0 & 1 & 0 \end{pmatrix}
$$

### 题目描述

求矩阵

$$
F=
\begin{pmatrix}
0&3&0&0&0\\
0&0&5&0&2\\
1&0&1&0&0\\
0&0&1&4&4\\
0&0&0&1&0
\end{pmatrix}
$$

的行列式 $\det F$。

## **Kai**

To calculate the determinant of matrix $F$ , we can use cofactor expansion.

$$
\begin{aligned}
\det(F)
&= -3 \begin{vmatrix} 0 & 5 & 0 & 2 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 4 & 4 \\ 0 & 0 & 1 & 0 \end{vmatrix} \\
&= 3 \begin{vmatrix} 5 & 0 & 2 \\ 1 & 4 & 4 \\ 0 & 1 & 0 \end{vmatrix} \\
&= -3 \begin{vmatrix} 5 & 2 \\ 1 & 4 \end{vmatrix}
=-3(20-2)=-54.
\end{aligned}
$$

Therefore, $\det(F) = -54$ .
