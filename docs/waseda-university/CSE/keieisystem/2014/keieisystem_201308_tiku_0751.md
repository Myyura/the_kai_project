---
sidebar_label: "2013年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

正方行列(square matrix) $P$ は、次のように分割(partition)できるものとする。

$$
P = \begin{pmatrix} P_{11} & P_{12} \\ 0 & P_{22} \end{pmatrix}
$$

ただし、 $P_{11}, P_{22}$ は正方行列とする。もし、 $P_{11}, P_{22}$ が正則(nonsingular)ならば、 $P$ も正則であってその逆行列は次のように表されることを示せ

$$
P^{-1} = \begin{pmatrix} P_{11}^{-1} & -P_{11}^{-1}P_{12}P_{22}^{-1} \\ 0 & P_{22}^{-1} \end{pmatrix}
$$

### 题目描述

设方阵 $P$ 可分块为

$$
P=\begin{pmatrix}
P_{11}&P_{12}\\
0&P_{22}
\end{pmatrix},
$$

其中 $P_{11}$、$P_{22}$ 均为方阵。证明：若 $P_{11}$、$P_{22}$ 可逆，则 $P$ 也可逆，且

$$
P^{-1}=
\begin{pmatrix}
P_{11}^{-1}&-P_{11}^{-1}P_{12}P_{22}^{-1}\\
0&P_{22}^{-1}
\end{pmatrix}.
$$

## **Kai**

To prove that if $P_{11}$ and $P_{22}$ are nonsingular, then $P$ is nonsingular and its inverse is given by the formula above, we can verify that $P P^{-1} = I$ and $P^{-1} P = I$ , where $I$ is the identity matrix.

First, let's calculate $P P^{-1}$ :

$$
P P^{-1} = \begin{pmatrix} P_{11} & P_{12} \\ 0 & P_{22} \end{pmatrix} \begin{pmatrix} P_{11}^{-1} & -P_{11}^{-1}P_{12}P_{22}^{-1} \\ 0 & P_{22}^{-1} \end{pmatrix}
$$

$$
= \begin{pmatrix} P_{11}P_{11}^{-1} + P_{12}(0) & P_{11}(-P_{11}^{-1}P_{12}P_{22}^{-1}) + P_{12}P_{22}^{-1} \\ 0P_{11}^{-1} + P_{22}(0) & 0(-P_{11}^{-1}P_{12}P_{22}^{-1}) + P_{22}P_{22}^{-1} \end{pmatrix}
$$

$$
= \begin{pmatrix} I & -P_{12}P_{22}^{-1} + P_{12}P_{22}^{-1} \\ 0 & I \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix} = I
$$

Now, let's calculate $P^{-1} P$ :

$$
P^{-1} P = \begin{pmatrix} P_{11}^{-1} & -P_{11}^{-1}P_{12}P_{22}^{-1} \\ 0 & P_{22}^{-1} \end{pmatrix} \begin{pmatrix} P_{11} & P_{12} \\ 0 & P_{22} \end{pmatrix}
$$

$$
= \begin{pmatrix} P_{11}^{-1}P_{11} + (-P_{11}^{-1}P_{12}P_{22}^{-1})(0) & P_{11}^{-1}P_{12} + (-P_{11}^{-1}P_{12}P_{22}^{-1})P_{22} \\ 0P_{11} + P_{22}^{-1}(0) & 0P_{12} + P_{22}^{-1}P_{22} \end{pmatrix}
$$

$$
= \begin{pmatrix} I & P_{11}^{-1}P_{12} - P_{11}^{-1}P_{12} \\ 0 & I \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix} = I
$$

Since $P P^{-1} = I$ and $P^{-1} P = I$ , $P^{-1}$ is indeed the inverse of $P$ .
