---
sidebar_label: 2025年8月実施 選択問題 6 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Calculus.Infinite-Series
---
# 電気通信大学 情報理工学研究科 基盤理工学専攻 2025年8月実施 選択問題 6 基礎数学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1) 線形代数

$$
A=\begin{pmatrix}
0&1&1&1\\1&0&1&1\\1&1&0&1\\1&1&1&0
\end{pmatrix},
\quad
u=\begin{pmatrix}4\\-1\\-5\\2\end{pmatrix},
\quad
v=\begin{pmatrix}11\\-5\\1\\k\end{pmatrix}
$$

とする。$Au$、$A$ の固有値、三次元固有空間の指定された基底、および $Av$ がその固有空間に属するための $k$ を求めよ。

ただし、指定された三ベクトルは

$$
p_1=\begin{pmatrix}\alpha\\1\\0\\0\end{pmatrix},\qquad
p_2=\begin{pmatrix}\beta\\0\\1\\0\end{pmatrix},\qquad
p_3=\begin{pmatrix}\gamma\\0\\0\\1\end{pmatrix}
$$

であり、これらが三次元固有空間の基底となるように $\alpha,\beta,\gamma$ を定める。

### (2) 重積分

$$
I_1=\iint_{D_1}(2x+y)\,dx\,dy,
\quad
D_1=\{(x,y)\mid0\le x\le1,\ x\le y\le2x\},
$$

$$
I_2=\iint_{D_2}\sqrt{xy}\,dx\,dy,
\quad
D_2=\{(x,y)\mid x,y\ge0,\ \sqrt x+\sqrt y\le1\}
$$

を求めよ。

### (3) Fourier 級数

周期 $2\pi$ の関数 $f(x)=|x|$ $(-\pi<x\le\pi)$ の Fourier 級数を求め、それを用いて

$$
1+\frac1{3^2}+\frac1{5^2}+\cdots
$$

を求めよ。

### 题目描述

本题包括四阶矩阵的特征值与特征空间、两个二重积分，以及 $|x|$ 的 Fourier 级数和奇数平方倒数级数。

## **Kai**

### (1)

#### (a)

$$
\boxed{Au=\begin{pmatrix}-4\\1\\5\\-2\end{pmatrix}}.
$$

#### (b)

$\boldsymbol e=(1,1,1,1)^{\mathsf T}$ とすると $A\boldsymbol e=3\boldsymbol e$ である。一方、成分和が $0$ のベクトル $x$ には $Ax=-x$ が成り立つ。よって固有値は

$$
\boxed{3,\ -1},
$$

ただし $-1$ の重複度は $3$ である。

#### (c)

三次元固有空間は

$$
V=\left\{x\in\mathbb R^4\mathrel{\middle|}\sum_{j=1}^4x_j=0\right\}.
$$

したがって、指定された三ベクトルが $V$ の基底となる条件は

$$
\boxed{\alpha=\beta=\gamma=-1}.
$$

#### (d)

$Av\in V$ ならば、その成分和は $0$ である。$A$ は成分和を $3$ 倍するので

$$
3(11-5+1+k)=0.
$$

よって

$$
\boxed{k=-7}.
$$

### (2)

#### (a)

$$
\begin{aligned}
I_1
&=\int_0^1\int_x^{2x}(2x+y)\,dy\,dx\\
&=\boxed{\frac76}.
\end{aligned}
$$

#### (b)

$x=s^2$, $y=t^2$ とおくと、$s,t\ge0$, $s+t\le1$ であり、$dx\,dy=4st\,ds\,dt$ である。したがって

$$
\begin{aligned}
I_2
&=4\int_0^1\int_0^{1-s}s^2t^2\,dt\,ds\\
&=\boxed{\frac1{45}}.
\end{aligned}
$$

### (3)

$f$ は偶関数なので $b_n=0$ である。また

$$
a_0=\frac2\pi\int_0^\pi x\,dx=\pi,
$$

$$
a_n=\frac2\pi\int_0^\pi x\cos nx\,dx
=\frac{2\{(-1)^n-1\}}{\pi n^2}.
$$

よって

$$
\boxed{
|x|=\frac\pi2+
\sum_{n=1}^{\infty}
\frac{2\{(-1)^n-1\}}{\pi n^2}\cos nx
}.
$$

$x=0$ を代入すると

$$
0=\frac\pi2-\frac4\pi
\sum_{m=0}^{\infty}\frac1{(2m+1)^2}.
$$

したがって

$$
\boxed{1+\frac1{3^2}+\frac1{5^2}+\cdots=\frac{\pi^2}{8}}.
$$
