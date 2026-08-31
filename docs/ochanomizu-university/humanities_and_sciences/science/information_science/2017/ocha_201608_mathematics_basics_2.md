---
sidebar_label: "2016年8月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2016年8月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 【1】

連立 $1$ 次方程式

$$
\begin{cases}
x-ay-2z=2,\\
ax+y+4z=4,\\
2x-ay-z=5
\end{cases}
$$

について以下の各問に答えよ。ただし $a$ は実数とする。

#### (1)

ただ $1$ つの解をもつための $a$ の条件を求めよ。

#### (2)

解をもたないように $a$ の値を定めよ。

#### (3)

無限に多くの解をもつように $a$ の値を定め、この連立 $1$ 次方程式を解け。

### 【2】

$\mathbb{R}^3$ から $\mathbb{R}^3$ への線形写像

$$
f\begin{pmatrix}x\\y\\z\end{pmatrix}
=\begin{pmatrix}
x+2y-z\\
4x+y+3z\\
x+z
\end{pmatrix}
$$

について、以下の各問に答えよ。

#### (1)

線形写像 $f$ を表す行列 $A$ を求めよ。

#### (2)

$f$ の核（$\operatorname{Ker}f$）と像（$\operatorname{Im}f$）を求めよ。

#### (2)

$A$ の固有値と固有ベクトルを求めよ。

### 题目描述

1. 对含实参数 $a$ 的三元一次方程组，分别求其有唯一解、无解及有无穷多解时的 $a$；在无穷多解时写出全部解。
2. 对线性映射

   $$
   f(x,y,z)^T=(x+2y-z,\ 4x+y+3z,\ x+z)^T,
   $$

   求表示矩阵、核与像，以及矩阵的特征值和特征向量。

## **Kai**

### 【1】

係数行列を $M$ とすると

$$
M=\begin{pmatrix}
1&-a&-2\\
a&1&4\\
2&-a&-1
\end{pmatrix},\qquad
\det M=(a-1)(a-3).
$$

#### (1)

したがって、ただ $1$ つの解をもつ条件は

$$
\boxed{a\ne1,3}.
$$

#### (2)

$a=3$ のとき、係数行列の階数は $2$、拡大係数行列の階数は $3$ となる。よって解をもたないのは

$$
\boxed{a=3}.
$$

#### (3)

$a=1$ のとき、係数行列と拡大係数行列の階数はいずれも $2$ であり、行基本変形により

$$
x+z=3,\qquad y+3z=1
$$

を得る。$z=t\in\mathbb R$ とおけば

$$
\boxed{a=1,\qquad (x,y,z)=(3-t,\ 1-3t,\ t)\quad(t\in\mathbb R)}.
$$

### 【2】

#### (1)

標準基底に関する表現行列は

$$
\boxed{
A=\begin{pmatrix}
1&2&-1\\
4&1&3\\
1&0&1
\end{pmatrix}}.
$$

#### (2)

$A\boldsymbol{x}=0$ を行基本変形すると $x+z=0$、$y-z=0$ となるので

$$
\boxed{
\operatorname{Ker}f
=\operatorname{span}\left\{
\begin{pmatrix}-1\\1\\1\end{pmatrix}
\right\}}.
$$

$\operatorname{rank}A=2$ であり、第 $1$、第 $2$ 列が一次独立だから

$$
\boxed{
\operatorname{Im}f
=\operatorname{span}\left\{
\begin{pmatrix}1\\4\\1\end{pmatrix},
\begin{pmatrix}2\\1\\0\end{pmatrix}
\right\}}.
$$

#### (2)（固有値と固有ベクトル）

$$
\det(\lambda I-A)=\lambda(\lambda-4)(\lambda+1).
$$

したがって固有値と対応する固有ベクトルは、任意の非零定数倍を許して

$$
\boxed{
\begin{array}{c|c}
\lambda&\text{固有ベクトル}\\ \hline
-1&(-4,5,2)^T\\
0&(-1,1,1)^T\\
4&(3,5,1)^T
\end{array}}
$$

である。
