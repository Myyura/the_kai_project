---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列(matrix) $A$ の階数(rank)を求め、行列 $A$ が正則(non-singular)かどうかを判定せよ。また正則(non-singular)な場合には逆行列(inverse matrix) $A^{-1}$ を求めよ。

$$
A = \begin{pmatrix} 1 & 1 & 2 \\ 2 & 1 & 3 \\ 3 & 1 & 5 \end{pmatrix}
$$

### 题目描述

给定矩阵

$$
A=\begin{pmatrix}
1&1&2\\
2&1&3\\
3&1&5
\end{pmatrix}.
$$

求 $A$ 的秩，判断 $A$ 是否可逆；若可逆，再求 $A^{-1}$。

## **Kai**

まず行列 $A$ の行列式を計算します。

$$
\det(A) = \begin{vmatrix} 1 & 1 & 2 \\ 2 & 1 & 3 \\ 3 & 1 & 5 \end{vmatrix} = 1(5-3) - 1(10-9) + 2(2-3) = 2 - 1 - 2 = -1
$$

行列式が0ではないので、行列 $A$ は正則(non-singular)です。したがって、逆行列 $A^{-1}$ が存在します。

次に、余因子行列を求めます。

$C_{11} = \begin{vmatrix} 1 & 3 \\ 1 & 5 \end{vmatrix} = 5 - 3 = 2$
$C_{12} = -\begin{vmatrix} 2 & 3 \\ 3 & 5 \end{vmatrix} = -(10 - 9) = -1$
$C_{13} = \begin{vmatrix} 2 & 1 \\ 3 & 1 \end{vmatrix} = 2 - 3 = -1$
$C_{21} = -\begin{vmatrix} 1 & 2 \\ 1 & 5 \end{vmatrix} = -(5 - 2) = -3$
$C_{22} = \begin{vmatrix} 1 & 2 \\ 3 & 5 \end{vmatrix} = 5 - 6 = -1$
$C_{23} = -\begin{vmatrix} 1 & 1 \\ 3 & 1 \end{vmatrix} = -(1 - 3) = 2$
$C_{31} = \begin{vmatrix} 1 & 2 \\ 1 & 3 \end{vmatrix} = 3 - 2 = 1$
$C_{32} = -\begin{vmatrix} 1 & 2 \\ 2 & 3 \end{vmatrix} = -(3 - 4) = 1$
$C_{33} = \begin{vmatrix} 1 & 1 \\ 2 & 1 \end{vmatrix} = 1 - 2 = -1$

余因子行列は

$$
\text{cof}(A) = \begin{pmatrix} 2 & -1 & -1 \\ -3 & -1 & 2 \\ 1 & 1 & -1 \end{pmatrix}
$$

随伴行列は余因子行列の転置です。

$$
\text{adj}(A) = \text{cof}(A)^T = \begin{pmatrix} 2 & -3 & 1 \\ -1 & -1 & 1 \\ -1 & 2 & -1 \end{pmatrix}
$$

逆行列は

$$
A^{-1} = \frac{1}{\det(A)} \text{adj}(A) = \frac{1}{-1} \begin{pmatrix} 2 & -3 & 1 \\ -1 & -1 & 1 \\ -1 & 2 & -1 \end{pmatrix} = \begin{pmatrix} -2 & 3 & -1 \\ 1 & 1 & -1 \\ 1 & -2 & 1 \end{pmatrix}
$$

行列の階数は3です。
