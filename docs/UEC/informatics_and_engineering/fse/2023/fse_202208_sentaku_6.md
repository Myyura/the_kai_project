---
sidebar_label: 2022年8月実施 選択問題 6 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Calculus.Local-Extrema
---
# 電気通信大学 情報理工学研究科 基盤理工学専攻 2022年8月実施 選択問題 6 基礎数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**（1）** 実数 $a$ に対して、

$$
A=\begin{bmatrix}-1&1+a&-2\\0&1&0\\4&1-a&5\end{bmatrix}
$$

を考える。

（a）$A$ の固有値をすべて求めよ。

（b）$A$ の最大の固有値を $\lambda_1$ とする。$\lambda_1$ に対する $A$ の固有空間の基底を求めよ。

（c）$A$ が対角化可能であるための $a$ の条件を求めよ。

**（2）** 関数 $g(x,y)=(x^2+xy)e^y$ について以下の問いに答えよ。

（a）$g_x(a,b)=g_y(a,b)=0$ を満たす点 $(a,b)$ をすべて求めよ。ただし、$g_x=\partial g/\partial x$、$g_y=\partial g/\partial y$ である。

（b）$g$ の極値を求めよ。

**（3）** 次の重積分の値を求めよ。

$$
\begin{gathered}
I=\iint_D\sin\sqrt{x^2+y^2}\,dx\,dy,\\
D=\{(x,y)\mid x^2+y^2\le\pi^2\}.
\end{gathered}
$$

**（4）** 次の微分方程式の一般解を求めよ。ここで、$y'=dy/dx$、$y''=d^2y/dx^2$ とする。

（a）$9yy'+4x=0$

（b）$y''+2y'-3y=0$

実数：real number、固有値：eigenvalue、固有空間：eigenspace、基底：basis、対角化可能：diagonalizable、極値：extremum、重積分：multiple integral、微分方程式：differential equation、一般解：general solution。

### 题目描述

**（1）** 对实数 $a$，考虑矩阵

$$
A=\begin{bmatrix}-1&1+a&-2\\0&1&0\\4&1-a&5\end{bmatrix}.
$$

（a）求 $A$ 的全部特征值。

（b）设 $A$ 的最大特征值为 $\lambda_1$，求 $A$ 对应于 $\lambda_1$ 的特征空间的一组基。

（c）求 $A$ 可对角化时 $a$ 必须满足的条件。

**（2）** 对函数 $g(x,y)=(x^2+xy)e^y$，回答：

（a）求全部满足 $g_x(a,b)=g_y(a,b)=0$ 的点 $(a,b)$。其中 $g_x=\partial g/\partial x$、$g_y=\partial g/\partial y$。

（b）求 $g$ 的极值。

**（3）** 求重积分

$$
\begin{gathered}
I=\iint_D\sin\sqrt{x^2+y^2}\,dx\,dy,\\
D=\{(x,y)\mid x^2+y^2\le\pi^2\}.
\end{gathered}
$$

**（4）** 求下列微分方程的通解。其中 $y'=dy/dx$、$y''=d^2y/dx^2$。

（a）$9yy'+4x=0$

（b）$y''+2y'-3y=0$

## **Kai**

### (1)

#### (a)

$$
\begin{aligned}
\det(\lambda I-A)
&=(\lambda-1)
\det\begin{pmatrix}\lambda+1&2\\
-4&\lambda-5\end{pmatrix}\\
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
\begin{gathered}
g_x=(2x+y)e^y,\\
g_y=x(x+y+1)e^y.
\end{gathered}
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
\begin{gathered}
\boxed{\text{極小値 }-e^{-2}\text{ を }(1,-2)\text{ でとる}},\\
\boxed{\text{極大値なし}}.
\end{gathered}
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

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_s_choice202208.pdf)
