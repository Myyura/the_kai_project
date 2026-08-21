---
sidebar_label: "2014年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行の基本操作(elementary row operations)を行って、以下の行列 $A$ の階数(rank)を求めよ.

$$
A = \begin{bmatrix} 1 & 4 & 7 & 10 \\ 2 & 5 & 8 & 11 \\ 3 & 6 & 9 & 12 \end{bmatrix}
$$

### 题目描述

使用初等行变换求矩阵

$$
A=
\begin{bmatrix}
1&4&7&10\\
2&5&8&11\\
3&6&9&12
\end{bmatrix}
$$

的秩。

## **Kai**

Apply elementary row operations to find the rank of matrix A.

$$
A = \begin{bmatrix} 1 & 4 & 7 & 10 \\ 2 & 5 & 8 & 11 \\ 3 & 6 & 9 & 12 \end{bmatrix}
$$

Subtract 2 times the first row from the second row, and 3 times the first row from the third row:

$$
\begin{bmatrix} 1 & 4 & 7 & 10 \\ 0 & -3 & -6 & -9 \\ 0 & -6 & -12 & -18 \end{bmatrix}
$$

Multiply the second row by -1/3:

$$
\begin{bmatrix} 1 & 4 & 7 & 10 \\ 0 & 1 & 2 & 3 \\ 0 & -6 & -12 & -18 \end{bmatrix}
$$

Add 6 times the second row to the third row:

$$
\begin{bmatrix} 1 & 4 & 7 & 10 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$

The matrix is now in row echelon form. There are two non-zero rows.  Therefore, the rank of the matrix is 2.

$$
rank(A) = 2
$$
