---
sidebar_label: "2015年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列のランク (rank)を求めよ.

$$
\begin{bmatrix}
4 & 2 & 6  \\
1 & 1 & 3  \\
-2 & -1 & -3
\end{bmatrix}
$$

### 题目描述

求矩阵

$$
\begin{bmatrix}
4&2&6\\
1&1&3\\
-2&-1&-3
\end{bmatrix}
$$

的秩。

## **Kai**

To find the rank of the matrix, we can perform row operations to reduce it to row echelon form.

Let the matrix be

$$
A = \begin{bmatrix}
4 & 2 & 6  \\
1 & 1 & 3  \\
-2 & -1 & -3
\end{bmatrix}
$$

.

First, swap row 1 and row 2:

$$
\begin{bmatrix}
1 & 1 & 3  \\
4 & 2 & 6  \\
-2 & -1 & -3
\end{bmatrix}
$$

Next, perform $R_2 \to R_2 - 4R_1$ and $R_3 \to R_3 + 2R_1$ :

$$
\begin{bmatrix}
1 & 1 & 3  \\
0 & -2 & -6  \\
0 & 1 & 3
\end{bmatrix}
$$

Multiply row 2 by $-\frac{1}{2}$ :

$$
\begin{bmatrix}
1 & 1 & 3  \\
0 & 1 & 3  \\
0 & 1 & 3
\end{bmatrix}
$$

Finally, perform $R_3 \to R_3 - R_2$ :

$$
\begin{bmatrix}
1 & 1 & 3  \\
0 & 1 & 3  \\
0 & 0 & 0
\end{bmatrix}
$$

The row echelon form of the matrix has 2 non-zero rows. Therefore, the rank of the matrix is 2.

Answer: 2
