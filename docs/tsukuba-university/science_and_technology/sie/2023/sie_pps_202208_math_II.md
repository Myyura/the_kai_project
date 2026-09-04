---
sidebar_label: "社会工学学位プログラム 2022年8月実施 数学 II"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2022年8月実施 数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問 [1] 及び [2] に答えよ。

[1] 平面 $\mathbb{R}^2$ 上の 3 点 $(x_1, y_1), (x_2, y_2), (1, 1)$ は一直線上の点でないとする。 $x_1, x_2, 1$ が互いに相異なる実数であるとき，以下の問 (1.1)−(1.3) に答えよ。

(1.1)

$$
\begin{vmatrix}
x_1^2 & x_1 & 1 \\
x_2^2 & x_2 & 1 \\
1 & 1 & 1
\end{vmatrix}
\neq 0
$$

を示せ。

(1.2)

$$
\begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
1 & 1 & 1
\end{vmatrix}
\neq 0
$$

を示せ。

(1.3) 3 点 $(x_1, y_1), (x_2, y_2), (1, 1)$ を通る曲線が $y = ax^2 + bx + c$ となる条件と

$$
\begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
1 & 1 & 1
\end{vmatrix}
\neq 0
$$

の関係を理由とともに説明せよ。

[2] 2 次形式 $5x^2 + 5y^2 + 2z^2 + 8xy + 4xz + 4yz$ について，以下の問 (2.1)−(2.3) に答えよ。

(2.1) $\mathbf{x} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ とするとき， $5x^2 + 5y^2 + 2z^2 + 8xy + 4xz + 4yz = {}^t\mathbf{x}A\mathbf{x}$ となる対称行列 $A$ を求めよ。ただし， ${}^t\mathbf{x}$ は $\mathbf{x}$ の転置である。

(2.2) $D = P^{-1}AP$ となる直交行列 $P$ と対角行列 $D$ を求めよ。

(2.3) $\mathbf{x} = P\mathbf{x}', \mathbf{x}' = \begin{bmatrix} x' \\ y' \\ z' \end{bmatrix}$ とおいて，2 次形式 $5x^2 + 5y^2 + 2z^2 + 8xy + 4xz + 4yz$ の標準形を求めよ。

### 题目描述

完成以下两组问题。

**[1] 三点插值与行列式**

平面 $\mathbb R^2$ 上的三点

$$
(x_1,y_1),\qquad(x_2,y_2),\qquad(1,1)
$$

不在同一直线上，并且 $x_1,x_2,1$ 是两两不同的实数。

1. 证明

   $$
   \begin{vmatrix}
   x_1^2&x_1&1\\
   x_2^2&x_2&1\\
   1&1&1
   \end{vmatrix}\neq0.
   $$

2. 证明

   $$
   \begin{vmatrix}
   x_1&y_1&1\\
   x_2&y_2&1\\
   1&1&1
   \end{vmatrix}\neq0.
   $$

3. 考虑通过上述三点的插值曲线

   $$
   y=ax^2+bx+c.
   $$

   说明该曲线为真正的二次曲线（即 $a\neq0$）这一条件，与

   $$
   \begin{vmatrix}
   x_1&y_1&1\\
   x_2&y_2&1\\
   1&1&1
   \end{vmatrix}\neq0
   $$

   之间的关系，并给出理由。

**[2] 二次型的正交对角化**

给定二次型

$$
5x^2+5y^2+2z^2+8xy+4xz+4yz.
$$

1. 对

   $$
   \mathbf x=\begin{bmatrix}x\\y\\z\end{bmatrix},
   $$

   求使

   $$
   5x^2+5y^2+2z^2+8xy+4xz+4yz
   ={}^t\mathbf x A\mathbf x
   $$

   成立的对称矩阵 $A$，其中 ${}^t\mathbf x$ 表示转置。
2. 求一个直交矩阵 $P$ 和一个对角矩阵 $D$，使

   $$
   D=P^{-1}AP.
   $$

3. 令

   $$
   \mathbf x=P\mathbf x',\qquad
   \mathbf x'=\begin{bmatrix}x'\\y'\\z'\end{bmatrix},
   $$

   求该二次型在新坐标下的标准形。

## **Kai**

[1]
(1.1)

$$
\Delta
=
\begin{vmatrix}
x_1^2 & x_1 & 1\\
x_2^2 & x_2 & 1\\
1 & 1 & 1
\end{vmatrix}
$$

とおく。第3行を用いて行基本変形をすると

$$
\Delta
=
\begin{vmatrix}
x_1^2-1 & x_1-1 & 0\\
x_2^2-1 & x_2-1 & 0\\
1 & 1 & 1
\end{vmatrix}
=
\begin{vmatrix}
x_1^2-1 & x_1-1\\
x_2^2-1 & x_2-1
\end{vmatrix}.
$$

よって

$$
\begin{aligned}
\Delta
&=(x_1^2-1)(x_2-1)-(x_2^2-1)(x_1-1)\\
&=(x_1-1)(x_2-1)\bigl((x_1+1)-(x_2+1)\bigr)\\
&=(x_1-x_2)(x_1-1)(x_2-1).
\end{aligned}
$$

仮定より $x_1,x_2,1$ は互いに異なるので，

$$
\Delta\neq 0
$$

が成り立つ。

(1.2)

$$
\begin{vmatrix}
x_1 & y_1 & 1\\
x_2 & y_2 & 1\\
1 & 1 & 1
\end{vmatrix}
\neq 0
$$

は，3点 $(x_1,y_1),(x_2,y_2),(1,1)$ が同一直線上にないことと同値である。
問題文で「一直線上にない」と仮定しているので，この行列式は $0$ ではない。

(1.3)
3点を通る $y=ax^2+bx+c$ を求めるには

$$
\begin{pmatrix}
x_1^2 & x_1 & 1\\
x_2^2 & x_2 & 1\\
1 & 1 & 1
\end{pmatrix}
\begin{pmatrix}
a\\ b\\ c
\end{pmatrix}
=
\begin{pmatrix}
y_1\\ y_2\\ 1
\end{pmatrix}
$$

を解けばよい。(1.1)より係数行列の行列式は $0$ でないから，
$(a,b,c)$ は一意に定まる。

さらにクラメルの公式より

$$
a=
\frac{
\begin{vmatrix}
y_1 & x_1 & 1\\
y_2 & x_2 & 1\\
1 & 1 & 1
\end{vmatrix}
}{
\begin{vmatrix}
x_1^2 & x_1 & 1\\
x_2^2 & x_2 & 1\\
1 & 1 & 1
\end{vmatrix}
}.
$$

したがって

$$
a\neq 0
\iff
\begin{vmatrix}
x_1 & y_1 & 1\\
x_2 & y_2 & 1\\
1 & 1 & 1
\end{vmatrix}
\neq 0.
$$

すなわち，3点が同一直線上にないときに限り $a\neq 0$ となり，
「直線ではない」二次曲線 $y=ax^2+bx+c$ が得られる。

[2]
(2.1)

$$
Q=5x^2+5y^2+2z^2+8xy+4xz+4yz
$$

とする。 $x=\begin{pmatrix}x\\y\\z\end{pmatrix}$ に対し

$$
Q=x^{\mathsf T}Ax
$$

となる対称行列は

$$
A=
\begin{pmatrix}
5 & 4 & 2\\
4 & 5 & 2\\
2 & 2 & 2
\end{pmatrix}.
$$

(2.2)
まず

$$
u_1=\begin{pmatrix}1\\-1\\0\end{pmatrix}
$$

とおくと

$$
Au_1=\begin{pmatrix}1\\-1\\0\end{pmatrix}=1\cdot u_1
$$

より固有値は $1$ である。

次に $x=y$ の形を考え，

$$
u=\begin{pmatrix}1\\1\\t\end{pmatrix}
$$

とおくと

$$
Au=\begin{pmatrix}9+2t\\9+2t\\4+2t\end{pmatrix}.
$$

これが $\lambda u$ に等しいための条件は

$$
4+2t=(9+2t)t
$$

であり，

$$
2t^2+7t-4=0
$$

から

$$
t=\frac12,\ -4
$$

を得る。
$t=\frac12$ のとき $\lambda=10$ ，
$t=-4$ のとき $\lambda=1$ である。

よって固有値は $1,1,10$ であり，
直交規格化した固有ベクトルを

$$
e_1=\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad
e_2=\frac{1}{3\sqrt2}\begin{pmatrix}1\\1\\-4\end{pmatrix},\quad
e_3=\frac{1}{3}\begin{pmatrix}2\\2\\1\end{pmatrix}
$$

と取れば， $e_1,e_2,e_3$ は互いに直交し長さ1である。

したがって直交行列

$$
P=(e_1,e_2,e_3)
$$

に対し

$$
D=P^{\mathsf T}AP
=
\begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 10
\end{pmatrix}
$$

となる。

(2.3)
$x=Px'$ （ $x'=\begin{pmatrix}x'\\y'\\z'\end{pmatrix}$ ）とすると

$$
Q=x^{\mathsf T}Ax
=(x')^{\mathsf T}(P^{\mathsf T}AP)x'
=(x')^{\mathsf T}Dx'
$$

より標準形は

$$
Q=(x')^2+(y')^2+10(z')^2
$$

である。
