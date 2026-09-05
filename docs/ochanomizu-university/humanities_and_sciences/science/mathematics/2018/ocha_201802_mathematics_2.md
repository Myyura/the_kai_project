---
sidebar_label: "2018年2月実施 数学コース 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Mathematics.Linear-Algebra.Subspace-Sum-and-Intersection-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2018年2月実施 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$4$ 次元実ベクトル空間 $\mathbb R^4$ の部分空間 $W_1,W_2$ を次のように定める。

$$
W_1=
\left\{
\begin{pmatrix}x\\y\\z\\u\end{pmatrix}\in\mathbb R^4
\ \middle|\
\begin{array}{r}
x+y-z=0,\\
2x-3y+u=0
\end{array}
\right\},
$$

$$
W_2=
\left\{
\begin{pmatrix}x\\y\\z\\u\end{pmatrix}\in\mathbb R^4
\ \middle|\
\begin{array}{r}
2x-2z+u=0,\\
4x+4y-3u=0,\\
4y+4z-5u=0
\end{array}
\right\}.
$$

このとき、$W_1,W_2$、$W_1$ と $W_2$ の和空間 $W_1+W_2$、および $W_1$ と $W_2$ の共通部分 $W_1\cap W_2$ の基底と次元をそれぞれ求めよ。

### (2)

線形写像の定義を書き、次の (i), (ii) の写像 $f:\mathbb R^3\to\mathbb R^2$ が線形写像かどうか理由をあげて答え、線形写像ならば $f$ の標準基底に関する表現行列と、$f$ の核と像の次元と基底を求めよ。

#### (i)

$$
f\begin{pmatrix}x\\y\\z\end{pmatrix}
=\begin{pmatrix}x+2y+3\\x^2-xy\end{pmatrix}
$$

#### (ii)

$$
f\begin{pmatrix}x\\y\\z\end{pmatrix}
=\begin{pmatrix}x-2y\\y+z\end{pmatrix}
$$

### (3)

$2\times2$ 行列 $A$ が $2$ つの固有値 $-1,2$ を持ち、固有値 $-1$ に対する固有ベクトルを $(1,-1)^T$、固有値 $2$ に対する固有ベクトルを $(1,2)^T$ とする。このとき、行列

$$
B=\begin{pmatrix}A&O\\O&A\end{pmatrix},
\qquad
C=\begin{pmatrix}O&A\\A&O\end{pmatrix}
$$

の固有値と固有ベクトル空間の基底をそれぞれ答えよ。ただし、$O$ は $2\times2$ 零行列とする。

### 题目描述

1. 求 $\mathbb R^4$ 中两个由齐次线性方程定义的子空间 $W_1,W_2$，以及 $W_1+W_2$、$W_1\cap W_2$ 的基底和维数。
2. 写出线性映射的定义，判断两个给定映射是否线性；对线性者求矩阵、核与像。
3. 已知 $A$ 的两组特征数据，求分块矩阵 $\operatorname{diag}(A,A)$ 与 $\begin{pmatrix}O&A\\A&O\end{pmatrix}$ 的特征值及各特征空间的基底。

## **Kai**

### (1)

各方程式を行基本変形すると

$$
\begin{aligned}
W_1&=\operatorname{span}\left\{
\begin{pmatrix}3\\2\\5\\0\end{pmatrix},
\begin{pmatrix}-1\\1\\0\\5\end{pmatrix}
\right\},\\
W_2&=\operatorname{span}\left\{
\begin{pmatrix}1\\-1\\1\\0\end{pmatrix},
\begin{pmatrix}-2\\5\\0\\4\end{pmatrix}
\right\}.
\end{aligned}
$$

それぞれの二つのベクトルは一次独立なので

$$
\dim W_1=\dim W_2=2.
$$

また、両方の連立方程式を同時に解くと

$$
W_1\cap W_2
=\operatorname{span}\left\{
\begin{pmatrix}1\\2\\3\\4\end{pmatrix}
\right\},
\qquad
\dim(W_1\cap W_2)=1.
$$

したがって

$$
\dim(W_1+W_2)=2+2-1=3.
$$

例えば、和空間の基底として $W_1$ の基底と $W_2$ の第 $1$ の基底ベクトルを取れる。以上より

$$
\boxed{
\begin{aligned}
\mathcal B_{W_1}&=\left\{
\begin{pmatrix}3\\2\\5\\0\end{pmatrix},
\begin{pmatrix}-1\\1\\0\\5\end{pmatrix}
\right\},&\dim W_1&=2,\\
\mathcal B_{W_2}&=\left\{
\begin{pmatrix}1\\-1\\1\\0\end{pmatrix},
\begin{pmatrix}-2\\5\\0\\4\end{pmatrix}
\right\},&\dim W_2&=2,\\
\mathcal B_{W_1+W_2}&=\left\{
\begin{pmatrix}3\\2\\5\\0\end{pmatrix},
\begin{pmatrix}-1\\1\\0\\5\end{pmatrix},
\begin{pmatrix}1\\-1\\1\\0\end{pmatrix}
\right\},&\dim(W_1+W_2)&=3,\\
\mathcal B_{W_1\cap W_2}&=\left\{
\begin{pmatrix}1\\2\\3\\4\end{pmatrix}
\right\},&\dim(W_1\cap W_2)&=1.
\end{aligned}}
$$

### (2)

実ベクトル空間 $V,W$ の写像 $f:V\to W$ が任意の $u,v\in V$、$\alpha,\beta\in\mathbb R$ に対して

$$
f(\alpha u+\beta v)=\alpha f(u)+\beta f(v)
$$

を満たすとき、$f$ を線形写像という。

#### (i)

$$
f(0,0,0)^T=(3,0)^T\ne(0,0)^T
$$

だから、線形写像ではない。

#### (ii)

各成分が $x,y,z$ の一次結合であるから線形写像であり、表現行列は

$$
M=\boxed{\begin{pmatrix}1&-2&0\\0&1&1\end{pmatrix}}.
$$

$M(x,y,z)^T=0$ を解くと $(x,y,z)=t(2,1,-1)$ だから

$$
\boxed{\ker f=\operatorname{span}\{(2,1,-1)^T\},\qquad \dim\ker f=1}.
$$

$\operatorname{rank}M=2$ なので $\operatorname{Im}f=\mathbb R^2$ であり、

$$
\boxed{\operatorname{Im}f=\operatorname{span}\{(1,0)^T,(0,1)^T\},\qquad
\dim\operatorname{Im}f=2}.
$$

### (3)

$$
u=\begin{pmatrix}1\\-1\end{pmatrix},
\qquad
v=\begin{pmatrix}1\\2\end{pmatrix}
$$

とおくと $Au=-u$、$Av=2v$ である。$B$ について

$$
\boxed{
\begin{aligned}
E_{-1}(B)&=\operatorname{span}\left\{
\begin{pmatrix}u\\0\end{pmatrix},
\begin{pmatrix}0\\u\end{pmatrix}
\right\},\\
E_2(B)&=\operatorname{span}\left\{
\begin{pmatrix}v\\0\end{pmatrix},
\begin{pmatrix}0\\v\end{pmatrix}
\right\}.
\end{aligned}}
$$

したがって $B$ の固有値は $-1,2$ で、それぞれの固有空間の次元は $2$ である。

一方、

$$
C\begin{pmatrix}w\\w\end{pmatrix}
=\begin{pmatrix}Aw\\Aw\end{pmatrix},
\qquad
C\begin{pmatrix}w\\-w\end{pmatrix}
=-\begin{pmatrix}Aw\\-Aw\end{pmatrix}.
$$

よって

$$
\boxed{
\begin{array}{c|c}
\lambda& E_\lambda(C)\text{ の基底}\\ \hline
-2&\left\{\begin{pmatrix}1\\2\\-1\\-2\end{pmatrix}\right\}\\[2mm]
-1&\left\{\begin{pmatrix}1\\-1\\1\\-1\end{pmatrix}\right\}\\[2mm]
1&\left\{\begin{pmatrix}1\\-1\\-1\\1\end{pmatrix}\right\}\\[2mm]
2&\left\{\begin{pmatrix}1\\2\\1\\2\end{pmatrix}\right\}
\end{array}}
$$

である。
