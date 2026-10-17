---
sidebar_label: "2012年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 九州大学 工学府 機械系専攻 2012年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$a,b,c,r,\lambda$ はすべて正の定数、$x$ と $y$ は実数とする。行列 $A$、ベクトル $\boldsymbol z$、ベクトル $\boldsymbol p$ をそれぞれ

$$
A=\begin{bmatrix}1&a\\b&c\end{bmatrix},\quad
\boldsymbol z=\begin{bmatrix}x\\y\end{bmatrix},\quad
\boldsymbol p=\begin{bmatrix}1\\r\end{bmatrix}
$$

とする。$I$ は $2\times2$ の単位行列を表すものとする。また、任意のベクトル $\boldsymbol x$ に対し、記号 $\|\cdot\|$ は $\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ で定義されるベクトルノルムを表すものとする。次の各問いに答えよ。（50点）

(1) $c\ne ab$ のとき、$\|A\boldsymbol z-\boldsymbol p\|^2=0$ を満たす $\boldsymbol z$ を $a,b,c,r$ を用いて表せ。

(2) $c=ab$ および $r=b$ が満たされるとき、$\|A\boldsymbol z-\boldsymbol p\|^2=0$ を満たす $\boldsymbol z$ の領域を $xy$ 平面に図示せよ。この際、$a,b$ のうち必要なものを用いて主要な座標を記入せよ。

(3) $c=ab$ が満たされるとき、適切な定数 $C$ と定数要素の2次元列ベクトル $\boldsymbol q$ を用いると

$$
\begin{aligned}
&\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2\\
&=(\boldsymbol z-\boldsymbol q)^{\mathsf T}(A^{\mathsf T}A+\lambda I)(\boldsymbol z-\boldsymbol q)+C
\end{aligned}
$$

が成立する。このとき、$\boldsymbol q$ を $A,I,\boldsymbol p,\lambda$ のみを用いて（$a,b,c,r,C$ を用いずに）表せ。

(4) $b=c=0$ が満たされるとき、$\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2$ を最小化する $\boldsymbol z$ を $a,r,\lambda$ のうち必要なものを用いて表せ。

#### 题目描述

$a,b,c,r,\lambda$ 均为正常数，$x,y$ 为实数。定义矩阵 $A$ 和向量 $\boldsymbol z,\boldsymbol p$ 为

$$
A=\begin{bmatrix}1&a\\b&c\end{bmatrix},\quad
\boldsymbol z=\begin{bmatrix}x\\y\end{bmatrix},\quad
\boldsymbol p=\begin{bmatrix}1\\r\end{bmatrix}.
$$

$I$ 表示 $2\times2$ 单位矩阵。对于任意向量 $\boldsymbol x$，符号 $\|\cdot\|$ 表示由 $\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ 定义的向量范数。回答以下各问。（50分）

(1) 当 $c\ne ab$ 时，用 $a,b,c,r$ 表示满足 $\|A\boldsymbol z-\boldsymbol p\|^2=0$ 的 $\boldsymbol z$。

(2) 当 $c=ab$ 且 $r=b$ 时，在 $xy$ 平面上画出满足 $\|A\boldsymbol z-\boldsymbol p\|^2=0$ 的 $\boldsymbol z$ 的区域，并用 $a,b$ 中所需的量标出主要坐标。

(3) 当 $c=ab$ 时，存在适当的常数 $C$ 和各分量为常数的二维列向量 $\boldsymbol q$，使得

$$
\begin{aligned}
&\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2\\
&=(\boldsymbol z-\boldsymbol q)^{\mathsf T}(A^{\mathsf T}A+\lambda I)(\boldsymbol z-\boldsymbol q)+C.
\end{aligned}
$$

仅用 $A,I,\boldsymbol p,\lambda$ 表示 $\boldsymbol q$，不得使用 $a,b,c,r,C$。

(4) 当 $b=c=0$ 时，用 $a,r,\lambda$ 中所需的量表示使 $\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2$ 最小的 $\boldsymbol z$。

## **Kai**

### (1)

ノルムが零となることと $A\boldsymbol z=\boldsymbol p$ は同値である。$\det A=c-ab\ne0$ より

$$
\boxed{\boldsymbol z=\frac1{c-ab}\begin{pmatrix}c-ar\\r-b\end{pmatrix}}.
$$

### (2)

第2行は第1行の $b$ 倍なので、条件は $x+ay=1$ だけとなる。したがって解集合は、$(1,0)$ と $(0,1/a)$ を通る直線全体である。

![退化した連立方程式の解直線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_math-4-line.svg)

### (3)

$H=A^{\mathsf T}A+\lambda I$ とおく。$\lambda>0$ より、任意の非零ベクトル $v$ に対して $v^{\mathsf T}Hv=\|Av\|^2+\lambda\|v\|^2>0$ であり、$H$ は可逆である。両辺の $\boldsymbol z$ に関する1次項を比較すると $H\boldsymbol q=A^{\mathsf T}\boldsymbol p$。よって

$$
\boxed{\boldsymbol q=(A^{\mathsf T}A+\lambda I)^{-1}A^{\mathsf T}\boldsymbol p}.
$$

このとき $C=\boldsymbol p^{\mathsf T}\boldsymbol p-\boldsymbol q^{\mathsf T}H\boldsymbol q$ とすれば恒等式が成立する。

### (4)

最小化する関数は $(x+ay-1)^2+r^2+\lambda(x^2+y^2)$。偏微分を零とおくと

$$
\begin{pmatrix}1+\lambda&a\\a&a^2+\lambda\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}1\\a\end{pmatrix}.
$$

これを解いて

$$
\boxed{\boldsymbol z=\frac1{1+a^2+\lambda}\begin{pmatrix}1\\a\end{pmatrix}}.
$$

Hessian は正定値なので、これは一意な最小点である。$r^2$ は定数項のため、最小点に影響しない。
