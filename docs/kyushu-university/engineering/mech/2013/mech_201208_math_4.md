---
sidebar_label: "2013年度 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 九州大学 工学府 機械系専攻 2013年度 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$a,b,c,r,\lambda$ はすべて正の定数、$x,y$ は実数とする。行列・ベクトルを

$$
A=\begin{pmatrix}1&a\\b&c\end{pmatrix},\quad
\boldsymbol z=\begin{pmatrix}x\\y\end{pmatrix},\quad
\boldsymbol p=\begin{pmatrix}1\\r\end{pmatrix}
$$

とし、$I$ は $2\times2$ の単位行列、$\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ とする。次の各問いに答えよ。（50点）

1. $c\ne ab$ のとき、$\|A\boldsymbol z-\boldsymbol p\|^2=0$ を満たす $\boldsymbol z$ を $a,b,c,r$ を用いて表せ。
2. $c=ab$ および $r=b$ のとき、$\|A\boldsymbol z-\boldsymbol p\|^2=0$ を満たす $\boldsymbol z$ の領域を $xy$ 平面に図示せよ。$a,b$ のうち必要なものを用いて主要な座標を記入せよ。
3. $c=ab$ のとき、適切な定数 $C$ と定数ベクトル $\boldsymbol q$ を用いて

$$
\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2
=(\boldsymbol z-\boldsymbol q)^{\mathsf T}(A^{\mathsf T}A+\lambda I)(\boldsymbol z-\boldsymbol q)+C
$$

が成り立つ。この $\boldsymbol q$ を $A,I,\boldsymbol p,\lambda$ のみを用いて表せ。

4. $b=c=0$ のとき、$\|A\boldsymbol z-\boldsymbol p\|^2+\lambda\|\boldsymbol z\|^2$ を最小化する $\boldsymbol z$ を $a,r,\lambda$ のうち必要なものを用いて表せ。

#### 题目描述

求二元线性方程的精确解、退化一致时的解直线，以及加上正则项后的配方中心和指定退化情况下的最小点。第 (4) 问按其单独给出的 $b=c=0$ 条件计算。

## **Kai**

### (1)

ノルムが零となることと $A\boldsymbol z=\boldsymbol p$ は同値である。$\det A=c-ab\ne0$ より

$$
\boxed{\boldsymbol z=\frac1{c-ab}\begin{pmatrix}c-ar\\r-b\end{pmatrix}}.
$$

### (2)

第2行は第1行の $b$ 倍なので、条件は $x+ay=1$ だけとなる。したがって解集合は、$(1,0)$ と $(0,1/a)$ を通る直線全体である。

![退化した連立方程式の解直線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/math-4-line.svg)

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
