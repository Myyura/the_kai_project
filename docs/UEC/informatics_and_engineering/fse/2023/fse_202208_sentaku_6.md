---
sidebar_label: 2022年8月実施 選択問題 6 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Calculus.Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 電気通信大学 情報理工学研究科 基盤理工学専攻 2022年8月実施 選択問題 6 基礎数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 実数 $a$ に対して
   $$
   A=\begin{pmatrix}
   -1&1+a&-2\\
   0&1&0\\
   4&1-a&5
   \end{pmatrix}
   $$
   の固有値、最大固有値の固有空間、および対角化可能となる $a$ の条件を求めよ。
2. $g(x,y)=(x^2+xy)e^y$ の停留点と極値を求めよ。
3. 円板 $D=\{(x,y)\mid x^2+y^2\le\pi^2\}$ 上の
   $$
   \iint_D\sin\sqrt{x^2+y^2}\,dx\,dy
   $$
   を求めよ。
4. 微分方程式 $9yy'+4x=0$ と $y''+2y'-3y=0$ の一般解を求めよ。

### 题目描述

本题包括含参数矩阵的特征值、特征空间与可对角化条件，二元函数的驻点和极值，圆域上的二重积分，以及一阶、二阶常微分方程。

## **Kai**

### (1)

#### (a)

$$
\begin{aligned}
\det(\lambda I-A)
&=(\lambda-1)
\det\begin{pmatrix}\lambda+1&2\\-4&\lambda-5\end{pmatrix}\\
&=(\lambda-1)^2(\lambda-3).
\end{aligned}
$$

したがって、固有値は

$$
\boxed{1\ \text{（重複度 }2\text{）},\qquad 3}.
$$

#### (b)

$\lambda_1=3$ に対して

$$
(A-3I)x=0
$$

を解くと $x_2=0$, $x_3=-2x_1$ となる。よって、

$$
\boxed{
E_3=\operatorname{span}
\left\{\begin{pmatrix}1\\0\\-2\end{pmatrix}\right\}
}.
$$

#### (c)

$\lambda=1$ に対する係数行列は

$$
A-I=
\begin{pmatrix}
-2&1+a&-2\\
0&0&0\\
4&1-a&4
\end{pmatrix}.
$$

固有空間が二次元となる条件は、第 $3$ 行が第 $1$ 行の $-2$ 倍となることである。したがって、

$$
1-a=-2(1+a)
\iff
\boxed{a=-3}.
$$

### (2)

#### (a)

$$
g_x=(2x+y)e^y,\qquad
g_y=x(x+y+1)e^y.
$$

したがって停留点は

$$
\boxed{(0,0),\ (1,-2)}.
$$

#### (b)

Hesse 行列は

$$
H_g=e^y
\begin{pmatrix}
2&1+2x+y\\
1+2x+y&x(x+y+2)
\end{pmatrix}.
$$

$(0,0)$ では $\det H_g=-1<0$ なので鞍点である。$(1,-2)$ では

$$
H_g(1,-2)=e^{-2}
\begin{pmatrix}2&1\\1&1\end{pmatrix}
$$

が正定値である。よって、

$$
\boxed{\text{極小値 }-e^{-2}\text{ を }(1,-2)\text{ でとる}},
\qquad
\boxed{\text{極大値なし}}.
$$

### (3)

極座標を用いると、

$$
\begin{aligned}
I
&=\int_0^{2\pi}\int_0^\pi r\sin r\,dr\,d\theta\\
&=2\pi[-r\cos r+\sin r]_0^\pi\\
&=\boxed{2\pi^2}.
\end{aligned}
$$

### (4)

#### (a)

$$
9yy'+4x=0
\iff
\frac{d}{dx}(9y^2+4x^2)=0.
$$

したがって一般解は

$$
\boxed{9y^2+4x^2=C}
$$

である。

#### (b)

特性方程式は

$$
r^2+2r-3=(r-1)(r+3)=0.
$$

よって一般解は

$$
\boxed{y=C_1e^x+C_2e^{-3x}}.
$$
