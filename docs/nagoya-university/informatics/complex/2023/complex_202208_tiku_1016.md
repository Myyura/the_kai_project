---
sidebar_label: "2022年8月実施 线性代数"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Affine-Transformation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下のような6つのベクトルが与えられたとき、 $\mathbf{r}_i$ を $\mathbf{r}'_i$ に $(i = 0, 1, 2)$ 移す相似変換の成分表示を求めよ。また、その相似変換の式の中の係数 $\lambda$ の値を求めせ。

$$
\mathbf{r}_0 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}, \mathbf{r}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \mathbf{r}_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \mathbf{r}'_0 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}, \mathbf{r}'_1 = \begin{pmatrix} 5 \\ 2 \end{pmatrix}, \mathbf{r}'_2 = \begin{pmatrix} 3 \\ 8 \end{pmatrix}
$$

### 题目描述

给定六个二维向量

$$
\begin{aligned}
\boldsymbol r_0&=\begin{pmatrix}0\\0\end{pmatrix},&
\boldsymbol r_1&=\begin{pmatrix}1\\0\end{pmatrix},&
\boldsymbol r_2&=\begin{pmatrix}1\\2\end{pmatrix},\\
\boldsymbol r'_0&=\begin{pmatrix}2\\1\end{pmatrix},&
\boldsymbol r'_1&=\begin{pmatrix}5\\2\end{pmatrix},&
\boldsymbol r'_2&=\begin{pmatrix}3\\8\end{pmatrix}.
\end{aligned}
$$

求将 $\boldsymbol r_i$ 映为 $\boldsymbol r'_i$（$i=0,1,2$）的相似变换的分量表达式，并求该相似变换标准式

$$
\boldsymbol r'=\lambda R\boldsymbol r+\boldsymbol b
$$

中的系数 $\lambda$；其中 $R$ 为正交矩阵，$\lambda$ 表示统一的伸缩倍率。

## **Kai**

相似変換は、アフィン変換の一種であり、回転、拡大縮小、平行移動を含む変換です。 $\mathbf{r}' = A\mathbf{r} + \mathbf{b}$ と表せる。
$\mathbf{r}_1 - \mathbf{r}_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \mathbf{r}_2 - \mathbf{r}_0 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$
$\mathbf{r}'_1 - \mathbf{r}'_0 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}, \mathbf{r}'_2 - \mathbf{r}'_0 = \begin{pmatrix} 1 \\ 7 \end{pmatrix}$
$A(\mathbf{r}_1 - \mathbf{r}_0) = \mathbf{r}'_1 - \mathbf{r}'_0$
$A(\mathbf{r}_2 - \mathbf{r}_0) = \mathbf{r}'_2 - \mathbf{r}'_0$
$A \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 1 & 7 \end{pmatrix}$
$A = \begin{pmatrix} 3 & 1 \\ 1 & 7 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 3 & 1 \\ 1 & 7 \end{pmatrix} \frac{1}{2} \begin{pmatrix} 2 & -1 \\ 0 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 6 & -2 \\ 2 & 6 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ 1 & 3 \end{pmatrix}$

$\mathbf{r}'_0 = A \mathbf{r}_0 + \mathbf{b}$
$\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 0 \\ 0 \end{pmatrix} + \mathbf{b}$
$\mathbf{b} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$
$\mathbf{r}' = \begin{pmatrix} 3 & -1 \\ 1 & 3 \end{pmatrix} \mathbf{r} + \begin{pmatrix} 2 \\ 1 \end{pmatrix}$

さらに

$$
A^TA=
\begin{pmatrix}3&1\\-1&3\end{pmatrix}
\begin{pmatrix}3&-1\\1&3\end{pmatrix}
=10I
$$

なので，

$$
A=\lambda R,\qquad
\boxed{\lambda=\sqrt{10}},\qquad
R=\frac1{\sqrt{10}}
\begin{pmatrix}3&-1\\1&3\end{pmatrix},
$$

ここで $R$ は直交行列で $\det R=1$ である。したがって成分表示は

$$
\boxed{
x'=3x-y+2,\qquad y'=x+3y+1
}
$$

であり，拡大率は $\sqrt{10}$ である。
