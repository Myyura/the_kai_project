---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Vandermonde-Determinant
  - Mathematics.Linear-Algebra.Tridiagonal-Determinant-Recurrence
---

# 東京大学 工学系研究科 2018年度 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
正則行列 $P$ の固有値を $\lambda$ とする。次を証明せよ。

1. $\lambda\ne0$。
2. $\lambda^{-1}$ は $P^{-1}$ の固有値であり、$\lambda^n$ は $P^n$ の固有値である。ただし $n$ は正の整数とする。

### II.
次の行列を対角化する直交行列 $P$ と、その対角行列を求めよ。

$$
A=\begin{pmatrix}2&-1&1\\-1&2&-1\\1&-1&2\end{pmatrix}
$$

ここで $P^TAP$ を対角行列とする。

### III.
$p,q,r$ は互いに異なる零でない実数とし、次を定める。

$$
P=\begin{pmatrix}1&1&1\\p&p^2&p^3\\q&q^2&q^3\end{pmatrix},\quad
\boldsymbol r=\begin{pmatrix}r\\r^2\\r^3\end{pmatrix},\quad
\boldsymbol x=\begin{pmatrix}x\\y\\z\end{pmatrix}.
$$

1. $P$ が正則となる条件を求めよ。
2. $P^T\boldsymbol x=\boldsymbol r$ が唯一の解をもつとき、その解を求めよ。

### IV.
$P_n$ は $n\ge2$ 次三重対角行列であり、対角成分はすべて $p+q$、上側の隣接成分はすべて $q$、下側の隣接成分はすべて $p$、他の成分は零とする。$p,q$ は異なる実数である。

1. $D_n=\det P_n$ の漸化式を求めよ。
2. $D_n$ を $p,q,n$ で表せ。

#### 题目描述

##### I.
设 $\lambda$ 是可逆矩阵 $P$ 的特征值。证明：

1. $\lambda\ne0$。
2. $\lambda^{-1}$ 是 $P^{-1}$ 的特征值，$\lambda^n$ 是 $P^n$ 的特征值（$n$ 为正整数）。

##### II.
求正交矩阵 $P$ 及相应对角矩阵，使

$$
A=\begin{pmatrix}2&-1&1\\-1&2&-1\\1&-1&2\end{pmatrix}
$$

对角化。

##### III.
设 $p,q,r$ 为互不相同的非零实数，

$$
P=\begin{pmatrix}1&1&1\\p&p^2&p^3\\q&q^2&q^3\end{pmatrix},\quad
\boldsymbol r=\begin{pmatrix}r\\r^2\\r^3\end{pmatrix},\quad
\boldsymbol x=\begin{pmatrix}x\\y\\z\end{pmatrix}.
$$

1. 求 $P$ 可逆的条件。
2. 当 $P^T\boldsymbol x=\boldsymbol r$ 有唯一解时，求该解。

##### IV.
$P_n$ 为 $n\ge2$ 阶三对角矩阵，主对角线全为 $p+q$，上对角线全为 $q$，下对角线全为 $p$，其余元素为零；$p,q$ 是不同实数。

1. 求 $D_n=\det P_n$ 的递推关系。
2. 求 $D_n$ 关于 $p,q,n$ 的表达式。

## **Kai**

### I.

非零の固有ベクトル $v$ をとると $Pv=\lambda v$ である。$\lambda=0$ なら $v=P^{-1}0=0$ となり矛盾する。よって $\lambda\ne0$ であり、

$$
P^{-1}v=\lambda^{-1}v,\qquad P^nv=\lambda^nv.
$$

### II.

$v=(1,-1,1)^T$ とおけば $A=I+vv^T$ である。したがって $v$ 方向の固有値は $4$、その直交補空間上の固有値は $1$ である。例えば

$$
\boxed{P=\begin{pmatrix}
1/\sqrt2&1/\sqrt6&1/\sqrt3\\
1/\sqrt2&-1/\sqrt6&-1/\sqrt3\\
0&-2/\sqrt6&1/\sqrt3
\end{pmatrix}},\qquad
\boxed{P^TAP=\operatorname{diag}(1,1,4)}.
$$

### III.

1. Vandermonde の行列式より

$$
\det P=pq(p-1)(q-1)(q-p).
$$

仮定の下で、正則となる必要十分条件は $\boxed{p\ne1,\ q\ne1}$ である。

2. 三つの方程式は $x+py+qz=r$、$x+p^2y+q^2z=r^2$、$x+p^3y+q^3z=r^3$ である。消去法により

$$
\boxed{\begin{aligned}
x&=\frac{r(r-p)(r-q)}{(1-p)(1-q)},\\
y&=\frac{r(r-1)(r-q)}{p(p-1)(p-q)},\\
z&=\frac{r(r-1)(r-p)}{q(q-1)(q-p)}.
\end{aligned}}
$$

### IV.

1. 第1行に沿って展開すると

$$
\boxed{D_n=(p+q)D_{n-1}-pqD_{n-2}},\qquad D_0=1,\quad D_1=p+q.
$$

2. 特性方程式は $(\lambda-p)(\lambda-q)=0$ である。初期値を用いて

$$
\boxed{D_n=\frac{p^{n+1}-q^{n+1}}{p-q}}.
$$

