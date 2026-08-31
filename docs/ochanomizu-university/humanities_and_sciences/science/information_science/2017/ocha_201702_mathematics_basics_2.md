---
sidebar_label: "2017年2月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2017年2月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1] $\mathbb{R}^4$ の部分空間

$$
W_1=
\left\{
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
\middle|
\begin{array}{rcl}
y-z+2w&=&0\\
x-y-w&=&0
\end{array}
\right\},
$$

$$
W_2=
\left\{
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
\middle|
\begin{array}{rcl}
x&=&2z\\
x&=&-2w
\end{array}
\right\}
$$

について以下の各問に答えよ。

1. $W_1\cap W_2$ の次元と基底を求めよ。
2. (1) で求めた $W_1\cap W_2$ の基底を含むように、$W_1,W_2$ の基底をそれぞれ求めよ。

### [2]
実対称行列

$$
A=\begin{pmatrix}
2&0&0&1\\
0&2&1&0\\
0&1&2&0\\
1&0&0&2
\end{pmatrix}
$$

について、以下の各問に答えよ。

1. 適当な直交行列 $P$ を求めて対角化せよ。
2. $A^n$ を求めよ。

### 题目描述

1. 给定 $\mathbb R^4$ 的两个子空间 $W_1,W_2$，求交空间的维数和一组基，并分别把这组基扩充为 $W_1,W_2$ 的基。
2. 对给定的 $4$ 阶实对称矩阵 $A$，求正交矩阵 $P$ 将其对角化，并计算 $A^n$。

## **Kai**

### [1]

#### (1)

$W_2$ の条件から $x=2z$, $w=-z$ である。これを $W_1$ の条件に代入すると

$$
y-3z=0,
$$

もう一方の式も自動的に満たされる。したがって

$$
W_1\cap W_2
=\left\{t\begin{pmatrix}2\\3\\1\\-1\end{pmatrix}\middle|t\in\mathbb{R}\right\}.
$$

よって

$$
\boxed{\dim(W_1\cap W_2)=1,\qquad
\left\{\begin{pmatrix}2\\3\\1\\-1\end{pmatrix}\right\}\text{ は基底}}
$$

である。

#### (2)

$W_1$ では $z,w$ を自由変数にとると

$$
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
=z\begin{pmatrix}1\\1\\1\\0\end{pmatrix}
+w\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}.
$$

また、$W_2$ では $y,z$ を自由変数にとると

$$
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
=y\begin{pmatrix}0\\1\\0\\0\end{pmatrix}
+z\begin{pmatrix}2\\0\\1\\-1\end{pmatrix}.
$$

したがって、(1) のベクトルを含む基底の一例は

$$
\boxed{
\begin{aligned}
W_1:&\quad
\left\{
\begin{pmatrix}2\\3\\1\\-1\end{pmatrix},
\begin{pmatrix}1\\1\\1\\0\end{pmatrix}
\right\},\\[2mm]
W_2:&\quad
\left\{
\begin{pmatrix}2\\3\\1\\-1\end{pmatrix},
\begin{pmatrix}0\\1\\0\\0\end{pmatrix}
\right\}.
\end{aligned}}
$$

### [2]

#### (1)

固有値 $3$ に対する正規直交固有ベクトルとして

$$
\frac1{\sqrt2}\begin{pmatrix}1\\0\\0\\1\end{pmatrix},
\qquad
\frac1{\sqrt2}\begin{pmatrix}0\\1\\1\\0\end{pmatrix},
$$

固有値 $1$ に対して

$$
\frac1{\sqrt2}\begin{pmatrix}1\\0\\0\\-1\end{pmatrix},
\qquad
\frac1{\sqrt2}\begin{pmatrix}0\\1\\-1\\0\end{pmatrix}
$$

をとる。これらを列にもつ

$$
P=\frac1{\sqrt2}
\begin{pmatrix}
1&0&1&0\\
0&1&0&1\\
0&1&0&-1\\
1&0&-1&0
\end{pmatrix}
$$

は直交行列であり、

$$
\boxed{P^TAP=\operatorname{diag}(3,3,1,1)}
$$

となる。

#### (2)

$A=P\operatorname{diag}(3,3,1,1)P^T$ より、$n\geq0$ に対して

$$
\boxed{
A^n=\frac12
\begin{pmatrix}
3^n+1&0&0&3^n-1\\
0&3^n+1&3^n-1&0\\
0&3^n-1&3^n+1&0\\
3^n-1&0&0&3^n+1
\end{pmatrix}}
$$

である。
