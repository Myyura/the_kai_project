---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

対称行列 $A$ を $A = \begin{bmatrix} 2 & 1 & -1 \\ 1 & 2 & 1 \\ -1 & 1 & 0 \end{bmatrix}$ とする。また、実数 $x_1, x_2, x_3$ は $(x_1)^2 + (x_2)^2 + (x_3)^2 = 1$ を満たすとし、

$F = 2(x_1)^2 + 2(x_2)^2 + 2x_1x_2 + 2x_2x_3 - 2x_3x_1$ とする。

(1) 行列 $A$ は相異なる固有値 $\lambda_1, \lambda_2, \lambda_3$ をもつ。ここで、 $\lambda_1 > \lambda_2 > \lambda_3$ とする。 $\lambda_1, \lambda_2, \lambda_3$ をそれぞれ求めよ。

(2) $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$ とする。 $F$ を $A, x, {^t}x$ で表せ。ただし、 $ {^t}x$ は $x$ の転置行列である。

(3) 適当な直交行列 $U$ をとると、行列 $A$ は ${^t}UAU = \begin{bmatrix} \lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \end{bmatrix}$ と対角化できる。

$y = \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix}$ とし、 $x = Uy$ とおく。 $F$ を $y_1, y_2, y_3$ を用いて表せ。

(4) 前小問 (3) で定義した $y$ について、 $(y_1)^2 + (y_2)^2 + (y_3)^2 = 1$ が成り立つことを示せ。

(5) $F$ の最小値を求めよ。さらに、 $F$ が最小値をとるときの $(x_1, x_2, x_3)$ をすべて求めよ。

### 题目描述

给定对称矩阵

$$
A=
\begin{bmatrix}
2&1&-1\\
1&2&1\\
-1&1&0
\end{bmatrix}.
$$

设实数 $x_1,x_2,x_3$ 满足

$$
x_1^2+x_2^2+x_3^2=1,
$$

并定义

$$
F=2x_1^2+2x_2^2+2x_1x_2+2x_2x_3-2x_3x_1.
$$

（1）矩阵 $A$ 有三个互不相同的特征值 $\lambda_1,\lambda_2,\lambda_3$，且 $\lambda_1>\lambda_2>\lambda_3$。分别求出它们。

（2）令

$$
x=\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}.
$$

用 $A,x,{}^{t}x$ 表示 $F$，其中 ${}^{t}x$ 表示 $x$ 的转置。

（3）取适当的正交矩阵 $U$，可将 $A$ 对角化为

$$
{}^{t}UAU=
\begin{bmatrix}
\lambda_1&0&0\\
0&\lambda_2&0\\
0&0&\lambda_3
\end{bmatrix}.
$$

令

$$
y=\begin{bmatrix}y_1\\y_2\\y_3\end{bmatrix},
\qquad x=Uy.
$$

用 $y_1,y_2,y_3$ 表示 $F$。

（4）对（3）定义的 $y$，证明

$$
y_1^2+y_2^2+y_3^2=1.
$$

（5）求 $F$ 的最小值，并求出 $F$ 取得最小值时的全部 $(x_1,x_2,x_3)$。

## **Kai**

(1) 行列 $A$ の固有値 $\lambda_1>\lambda_2>\lambda_3$ を求める．

$$
\det(A-\lambda I)
=
\begin{vmatrix}
2-\lambda & 1 & -1\\
1 & 2-\lambda & 1\\
-1 & 1 & -\lambda
\end{vmatrix}
=-(\lambda-3)(\lambda-2)(\lambda+1).
$$

よって

$$
\boxed{\lambda_1=3,\quad \lambda_2=2,\quad \lambda_3=-1}.
$$

(2) $x={}^t(x_1,x_2,x_3)$ とするとき， $F$ を $A,x,{}^tx$ で表す．

$$
{}^txAx=
\begin{pmatrix}x_1&x_2&x_3\end{pmatrix}
\begin{pmatrix}
2 & 1 & -1\\
1 & 2 & 1\\
-1& 1 & 0
\end{pmatrix}
\begin{pmatrix}
x_1\\x_2\\x_3
\end{pmatrix}
=2x_1^2+2x_2^2+2x_1x_2+2x_2x_3-2x_3x_1=F.
$$

したがって

$$
\boxed{F={}^txAx}.
$$

(3) 適当な直交行列 $U$ により

$$
{}^tUAU=
\begin{pmatrix}
\lambda_1&0&0\\
0&\lambda_2&0\\
0&0&\lambda_3
\end{pmatrix}
$$

と対角化できる． $y={}^t(y_1,y_2,y_3)$ とし， $x=Uy$ とおくと

$$
F={}^txAx={}^ty\,({}^tUAU)\,y
=\lambda_1y_1^2+\lambda_2y_2^2+\lambda_3y_3^2.
$$

すなわち

$$
\boxed{F=\lambda_1y_1^2+\lambda_2y_2^2+\lambda_3y_3^2}.
$$

(4) (3) で定義した $y$ について $y_1^2+y_2^2+y_3^2=1$ であることを示す．

直交行列 $U$ について ${}^tUU=I$ が成り立つので，

$$
x_1^2+x_2^2+x_3^2
={}^txx
={}^ty\,{}^tU U\,y
={}^tyy
=y_1^2+y_2^2+y_3^2.
$$

仮定より ${}^txx=1$ だから

$$
\boxed{y_1^2+y_2^2+y_3^2=1}.
$$

(5) $F$ の最小値と，そのときの $(x_1,x_2,x_3)$ をすべて求める．

(3)(4) より

$$
F=\lambda_1y_1^2+\lambda_2y_2^2+\lambda_3y_3^2,
\qquad y_1^2+y_2^2+y_3^2=1,
$$

であり
$\lambda_1=3,\lambda_2=2,\lambda_3=-1$ である．
単位球上での二次形式の最小値は最小固有値に等しく，

$$
F_{\min}=\lambda_3=-1.
$$

$\lambda_3=-1$ の固有ベクトルを求めると，

$$
(A+I)v=0
\quad\Rightarrow\quad
v=
\begin{pmatrix}
1\\-1\\2
\end{pmatrix}
$$

（スカラー倍も可）を得る．
条件 $x_1^2+x_2^2+x_3^2=1$ より，

$$
\|v\|^2=1^2+(-1)^2+2^2=6
$$

なので

$$
x=\pm\frac1{\sqrt6}
\begin{pmatrix}
1\\-1\\2
\end{pmatrix}
$$

が必要で十分である．

したがって

$$
\boxed{F_{\min}=-1,\qquad
(x_1,x_2,x_3)
=\pm\frac1{\sqrt6}(1,-1,2)}.
$$
