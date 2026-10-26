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

**（1）** 行列

$$
A=\begin{bmatrix}3&-5&2\\7&-12&3\\1&-2&-1\end{bmatrix}
$$

に対して、以下の問に答えよ。

（a）$\boldsymbol a_i$ を $A$ の第 $i$ 列とする（$i=1,2,3$）。$\boldsymbol a_3$ を $\boldsymbol a_1,\boldsymbol a_2$ の 1 次結合で表せ。

（b）行列式 $|A|$ の値を求めよ。

（c）$A$ の固有値をすべて求めよ。

**（2）** 二つのパラメータをもって定義されたベクトル

$$
\begin{aligned}
\boldsymbol r(\mu,\nu)&=\mu\cos\nu\,\boldsymbol i+\mu\sin\nu\,\boldsymbol j+(4-\mu^2)\boldsymbol k\\
&(0\le\mu\le2,\ 0\le\nu\le2\pi)
\end{aligned}
$$

で与えられる曲面 $S$ がある。$\boldsymbol i,\boldsymbol j,\boldsymbol k$ は、それぞれ $x,y,z$ 方向の単位直交ベクトルである。曲面 $S$ と $xy$ 平面との交線を曲線 $C$ とする。ただし、$z$ の正の側から見て反時計回りを曲線 $C$ の向きとする。

（a）$S$ がどのような曲面であるか特徴がわかるように図示せよ。その図中に $C$ がどのような曲線か描け。

（b）曲面 $S$ と $z=0$ の平面で囲まれた体積 $\iiint_V dV$ を求めよ。

（c）ベクトル

$$
\boldsymbol A(x,y,z)=(x^2+y-4)\boldsymbol i+3xy^2\boldsymbol j+(2xz+z^2)\boldsymbol k
$$

について、$\nabla\times\boldsymbol A$ を計算せよ。また、

$$
\iint_S(\nabla\times\boldsymbol A)\cdot\boldsymbol n\,dS
$$

を計算せよ。$\boldsymbol n$ は曲面 $S$ の単位法線ベクトル（外向き）である。

（d）曲線 $C$ に沿ってベクトル $\boldsymbol A$ の線積分 $\int_C\boldsymbol A\cdot d\boldsymbol r$ を計算せよ。ストークスの定理を利用してもよい。

**（3）** 周期 $2\pi$ の周期関数 $f(x)=x(\pi-x)\ (-\pi\le x\le\pi)$ は

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)
$$

と展開できる。以下の問に答えよ。

（a）フーリエ係数 $a_n\ (n=0,1,2,3,\ldots)$ を求めよ。

（b）フーリエ係数 $b_n\ (n=1,2,3,\ldots)$ を求めよ。

行列：matrix、1 次結合：linear combination、行列式：determinant、固有値：eigenvalue、曲面：curved surface、単位直交ベクトル：orthogonal unit vector、曲線：curve、単位法線ベクトル：unit normal vector、線積分：line integral、ストークスの定理：Stokes' theorem、周期関数：periodic function、フーリエ係数：Fourier coefficient。

### 题目描述

**（1）** 对矩阵

$$
A=\begin{bmatrix}3&-5&2\\7&-12&3\\1&-2&-1\end{bmatrix},
$$

回答：

（a）设 $\boldsymbol a_i$ 为 $A$ 的第 $i$ 列（$i=1,2,3$）。将 $\boldsymbol a_3$ 表示为 $\boldsymbol a_1,\boldsymbol a_2$ 的线性组合。

（b）求行列式 $|A|$。

（c）求 $A$ 的全部特征值。

**（2）** 曲面 $S$ 由含两个参数的向量

$$
\begin{aligned}
\boldsymbol r(\mu,\nu)&=\mu\cos\nu\,\boldsymbol i+\mu\sin\nu\,\boldsymbol j+(4-\mu^2)\boldsymbol k\\
&(0\le\mu\le2,\ 0\le\nu\le2\pi)
\end{aligned}
$$

给出。其中 $\boldsymbol i,\boldsymbol j,\boldsymbol k$ 分别为 $x,y,z$ 方向的单位正交向量。设曲面 $S$ 与 $xy$ 平面的交线为曲线 $C$，其方向取从 $z$ 轴正侧看为逆时针。

（a）画出能够体现 $S$ 特征的曲面图，并在同一图中画出曲线 $C$。

（b）求曲面 $S$ 与平面 $z=0$ 围成的体积 $\iiint_VdV$。

（c）对于向量

$$
\boldsymbol A(x,y,z)=(x^2+y-4)\boldsymbol i+3xy^2\boldsymbol j+(2xz+z^2)\boldsymbol k,
$$

计算 $\nabla\times\boldsymbol A$，并计算

$$
\iint_S(\nabla\times\boldsymbol A)\cdot\boldsymbol n\,dS.
$$

这里 $\boldsymbol n$ 为曲面 $S$ 的外向单位法向量。

（d）计算沿曲线 $C$ 的线积分 $\int_C\boldsymbol A\cdot d\boldsymbol r$。可以使用斯托克斯定理。

**（3）** 周期为 $2\pi$ 的周期函数 $f(x)=x(\pi-x)\ (-\pi\le x\le\pi)$ 可以展开为

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx).
$$

回答：

（a）求傅里叶系数 $a_n\ (n=0,1,2,3,\ldots)$。

（b）求傅里叶系数 $b_n\ (n=1,2,3,\ldots)$。

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

![回転放物面 S と境界円 C](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/fse/2025/fse_202408_paraboloid.svg)

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
&=12\pi-4\pi\\
&=\boxed{8\pi}.
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
a_0&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\,dx\\
&=-\frac{2\pi^2}{3},\\
a_n&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\cos nx\,dx
=\frac{4(-1)^{n+1}}{n^2}\\
&(n\geq1),\\
b_n&=\frac1\pi\int_{-\pi}^{\pi}x(\pi-x)\sin nx\,dx
=\frac{2\pi(-1)^{n+1}}{n}\\
&(n\geq1).
\end{aligned}
$$

したがって、$-\pi<x<\pi$ で

$$
\boxed{
f(x)=-\frac{\pi^2}{3}
+\sum_{n=1}^{\infty}
\left\{
\frac{4(-1)^{n+1}}{n^2}\cos nx
+\frac{2\pi(-1)^{n+1}}{n}\sin nx
\right\}}
$$

である。端点 $x=\pm\pi$ では級数は左右極限の平均 $-\pi^2$ に収束する。

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_8_s_choice202408.pdf)
