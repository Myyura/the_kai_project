---
sidebar_label: "2018年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2018年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2次方程式

$$
g(x) = 3x_1^2 + 4x_1x_2 + 3x_2^2 = 1
$$

を満たす2次元ベクトル

$$
x = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}
$$

について, 次の小問に答えよ。

1) この2次方程式をベクトル $x$ と適当な対称行列を用いて書き換えよ。

2) $x$ に適当な正規直交変換を施して $g(x)$ を対角行列を用いた式に書き換えよ。

3) この2次方程式を満たす点全体の集合を $(x_1, x_2)$ 座標系で図示せよ。

4) $x$ がこの2次方程式を満たすとき, 関数

$$
f(x) = x_1^2 + x_2^2
$$

の最大値と最小値を求めよ。 また, 最大値と最小値をとるときのそれぞれの $(x_1, x_2)$ を求めよ。

### 题目描述

对满足二次方程

$$
g(\boldsymbol x)
=3x_1^2+4x_1x_2+3x_2^2=1
$$

的二维向量

$$
\boldsymbol x=\begin{pmatrix}x_1\\x_2\end{pmatrix},
$$

回答下列问题。

1. 用向量 $\boldsymbol x$ 和适当的实对称矩阵改写该二次方程；
2. 对 $\boldsymbol x$ 作适当的标准正交变换，用对角矩阵改写 $g(\boldsymbol x)$；
3. 在 $(x_1,x_2)$ 坐标系中画出满足该二次方程的全部点；
4. 在 $\boldsymbol x$ 满足该方程的条件下，求

   $$
   f(\boldsymbol x)=x_1^2+x_2^2
   $$

   的最大值与最小值，并分别求取得最大值和最小值时的所有 $(x_1,x_2)$。

## **Kai**

### 1. 对称矩阵表示

令

$$
A=
\begin{pmatrix}
3&2\\
2&3
\end{pmatrix}.
$$

则

$$
g(x)=x^TAx
=3x_1^2+4x_1x_2+3x_2^2.
$$

所以原方程可写为 $x^TAx=1$ 。

### 2. 正交对角化

$A$ 的特征多项式为

$$
\det(A-\lambda I)
=(3-\lambda)^2-4
=(\lambda-5)(\lambda-1).
$$

对应于特征值 $5$ 和 $1$ ，可分别取单位特征向量

$$
\frac1{\sqrt2}
\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\frac1{\sqrt2}
\begin{pmatrix}1\\-1\end{pmatrix}.
$$

令

$$
P=
\frac1{\sqrt2}
\begin{pmatrix}
1&1\\
1&-1
\end{pmatrix}.
$$

则 $P^TP=I$ ，并且

$$
P^TAP=
\begin{pmatrix}
5&0\\
0&1
\end{pmatrix}.
$$

作正交坐标变换 $x=Py$ ，即

$$
y_1=\frac{x_1+x_2}{\sqrt2},
\qquad
y_2=\frac{x_1-x_2}{\sqrt2},
$$

便有

$$
g(x)=5y_1^2+y_2^2.
$$

### 3. 图形

方程化为

$$
\frac{y_1^2}{1/5}+y_2^2=1.
$$

因此图形是以原点为中心的椭圆。短半轴长为 $1/\sqrt5$ ，方向为 $x_1=x_2$ ；长半轴长为 $1$ ，方向为 $x_1=-x_2$ 。也就是说，该椭圆由标准轴方向旋转 $45^\circ$ 得到。

### 4. $f(x)$ 的最大值与最小值

正交变换保持长度，因此

$$
f(x)=x_1^2+x_2^2=y_1^2+y_2^2.
$$

由约束 $5y_1^2+y_2^2=1$ 得

$$
f(x)=1-4y_1^2,
\qquad
0\leq y_1^2\leq\frac15.
$$

所以最大值为

$$
\boxed{\max f=1},
$$

在 $(y_1,y_2)=(0,\pm1)$ 时取得。换回原坐标，取值点为

$$
\boxed{
\left(\frac1{\sqrt2},-\frac1{\sqrt2}\right),
\quad
\left(-\frac1{\sqrt2},\frac1{\sqrt2}\right)
}.
$$

最小值为

$$
\boxed{\min f=\frac15},
$$

在 $(y_1,y_2)=(\pm1/\sqrt5,0)$ 时取得。换回原坐标，取值点为

$$
\boxed{
\left(\frac1{\sqrt{10}},\frac1{\sqrt{10}}\right),
\quad
\left(-\frac1{\sqrt{10}},-\frac1{\sqrt{10}}\right)
}.
$$
