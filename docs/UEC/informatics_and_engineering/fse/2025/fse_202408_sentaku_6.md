---
sidebar_label: 2024年8月実施 選択問題 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Vector-Calculus.Stokes-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 電気通信大学 情報理工学研究科 基盤理工学専攻 2024年8月実施 選択問題 基礎数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1) 線形代数

行列

$$
A=\begin{pmatrix}
3&-5&2\\
7&-12&3\\
1&-2&-1
\end{pmatrix}
=\begin{pmatrix}\boldsymbol a_1&\boldsymbol a_2&\boldsymbol a_3\end{pmatrix}
$$

について、$\boldsymbol a_3$ を $\boldsymbol a_1,\boldsymbol a_2$ の一次結合で表し、$\det A$ と $A$ の固有値を求めよ。

### (2) ベクトル解析

$$
\boldsymbol r(\mu,\nu)
=\mu\cos\nu\,\boldsymbol i+\mu\sin\nu\,\boldsymbol j+(4-\mu^2)\boldsymbol k,
\quad 0\leq\mu\leq2, 0\leq\nu\leq2\pi
$$

で表される曲面を $S$、$S$ と $xy$ 平面との交線を、$z>0$ 側から見て反時計回りに向き付けた曲線を $C$ とする。

1. $S,C$ の形を示せ。
2. $S$ と $z=0$ で囲まれる体積を求めよ。
3. $\boldsymbol A=(x^2+y-4)\boldsymbol i+3xy^2\boldsymbol j+(2xz+z^2)\boldsymbol k$ に対し、$\nabla\times\boldsymbol A$ と $\iint_S(\nabla\times\boldsymbol A)\cdot\boldsymbol n\,dS$ を求めよ。$\boldsymbol n$ は外向き単位法線である。
4. $\displaystyle\oint_C\boldsymbol A\cdot d\boldsymbol r$ を求めよ。

### (3) フーリエ級数

周期 $2\pi$ の関数 $f(x)=x(\pi-x)$ $(-\pi\leq x\leq\pi)$ を

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)
$$

と展開するとき、$a_n,b_n$ を求めよ。

### 题目描述

求给定矩阵的列向量关系、行列式与特征值；计算旋转抛物面所围体积、旋度的曲面积分及边界曲线积分；最后求周期函数 $x(\pi-x)$ 的傅里叶系数。

## **Kai**

### (1)

直接計算すると

$$
\boxed{\boldsymbol a_3=9\boldsymbol a_1+5\boldsymbol a_2},
\qquad
\boxed{\det A=0}.
$$

また、

$$
\det(\lambda I-A)=\lambda(\lambda^2+10\lambda+12)
$$

より、固有値は

$$
\boxed{0, -5+\sqrt{13}, -5-\sqrt{13}}
$$

である。

### (2)

#### (a)

$S$ は

$$
z=4-x^2-y^2\quad (x^2+y^2\leq4)
$$

で表される下向きの回転放物面であり、頂点は $(0,0,4)$ である。$C$ は

$$
x^2+y^2=4,\qquad z=0
$$

なる円で、$z>0$ 側から見て反時計回りである。

#### (b)

円柱座標を用いると

$$
V=\int_0^{2\pi}\int_0^2(4-r^2)r\,dr\,d\theta
=\boxed{8\pi}.
$$

#### (c)

$$
\boxed{\nabla\times\boldsymbol A
=\begin{pmatrix}0\\-2z\\3y^2-1\end{pmatrix}}.
$$

$S$ の外向き面素ベクトルは

$$
\boldsymbol n\,dS=(2x,2y,1)\,dx\,dy
$$

である。$D=\{(x,y)\mid x^2+y^2\leq4\}$ とおけば、対称性より

$$
\begin{aligned}
\iint_S(\nabla\times\boldsymbol A)\cdot\boldsymbol n\,dS
&=\iint_D\{-4y(4-x^2-y^2)+3y^2-1\}\,dx\,dy\\
&=3\iint_Dy^2\,dx\,dy-\iint_D1\,dx\,dy\\
&=12\pi-4\pi
=\boxed{8\pi}.
\end{aligned}
$$

#### (d)

ストークスの定理より

$$
\boxed{\displaystyle\oint_C\boldsymbol A\cdot d\boldsymbol r=8\pi}.
$$

### (3)

$$
\begin{aligned}
a_0&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\,dx
=-\frac{2\pi^2}{3},\\
a_n&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\cos nx\,dx
=\frac{4(-1)^{n+1}}{n^2}\quad(n\geq1),\\
b_n&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\sin nx\,dx
=\frac{2\pi(-1)^{n+1}}{n}\quad(n\geq1).
\end{aligned}
$$

したがって、

$$
\boxed{
f(x)=-\frac{\pi^2}{3}
+\sum_{n=1}^{\infty}
\left\{
\frac{4(-1)^{n+1}}{n^2}\cos nx
+\frac{2\pi(-1)^{n+1}}{n}\sin nx
\right\}}
$$

である。
