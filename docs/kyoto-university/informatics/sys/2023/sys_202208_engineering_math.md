---
sidebar_label: 2022年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Dirichlet-Integral-by-Indented-Contour
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$e$ は自然対数の底、$\pi$ は円周率、$\mathbb C,\mathbb R$ は複素数・実数全体とする。$\overline z,|z|,\operatorname{Re}z,\operatorname{Im}z$ は共役、絶対値、実部、虚部を表す。

### 問題1
(1) べき級数 $\sum_{n=1}^\infty(-n)^{n-1}z^n/n!$ の収束半径を求めよ。

(2) 領域 $D\subset\mathbb C$ で $f(z)=\phi(x,y)+i\psi(x,y)$ ($z=x+iy$) と書け、$D$ のすべての点で

$$
u=\frac{\partial\phi}{\partial x}=\frac{\partial\psi}{\partial y},\qquad
v=\frac{\partial\phi}{\partial y}=-\frac{\partial\psi}{\partial x}
$$

が成り立つとする。ここで $u,v$ は $x,y$ の関数である。$f$ が正則であることを示し、$df/dz$ を $u,v$ で表せ。

(3) 図の閉路に沿って $f(z)=(1-e^{2iz})/z^2$ を積分することにより $\int_0^\infty\sin^2x/x^2\,dx$ を求めよ。閉路は実軸上の $-R\to-r$、上半平面の小半円 $-r\to r$、実軸上の $r\to R$、上半平面の大半円 $R\to-R$ からなる。
![原点を上側から避ける積分路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2023/sys_202208_engineering_math_indent.svg)

### 問題2
$z,w\in\mathbb C$ に対し $F(z,w)=\operatorname{Re}(\overline z w)$ と定義する。

(1) 任意の $z$ について $F(z,iz)=0$ を示せ。

(2) $u=i(z_1-z_2)$ とおくと $F(z_1,u)=F(z_2,u)$ を示せ。

(3) $z_1,z_2$ はともに零でなく、$z_1=tz_2$ を満たす実数 $t$ は存在しない。$F(z_1,z_3)=F(z_2,z_3)=F(z_1,z_2)$ を満たす複素数 $z_3$ を $z_1,z_2$ で表せ。

### 問題3
$f(z)=\sum_{n=0}^\infty c_nz^n$ とする。

(1) 収束半径を $R$ とするとき、任意の $n\ge0$ と $0<r<R$ に対して

$$
|c_n|\le\frac1{2\pi r^n}\int_0^{2\pi}|f(re^{i\theta})|\,d\theta
$$

を示せ。

(2) 収束半径が $\infty$ とする。ある非負定数 $a,b,m$ が存在し、$|z|>b$ で $|f(z)|\le a|z|^m$ が成り立つなら、$f$ は次数が $m$ 以下の多項式であることを示せ。

#### 题目描述

$i$ 为虚数单位，$e$ 为自然对数的底，$\pi$ 为圆周率，$\mathbb C,\mathbb R$ 为复数、实数集；$\overline z,|z|,\operatorname{Re}z,\operatorname{Im}z$ 分别表示共轭、模、实部、虚部。

问题 1：（1）求 $\sum_{n=1}^\infty(-n)^{n-1}z^n/n!$ 的收敛半径。

（2）区域 $D\subset\mathbb C$ 上 $f(z)=\phi(x,y)+i\psi(x,y)$，$z=x+iy$，处处满足 $u=\phi_x=\psi_y$、$v=\phi_y=-\psi_x$，其中 $u,v$ 是 $x,y$ 的函数。证明 $f$ 全纯并用 $u,v$ 表示 $df/dz$。

（3）沿上图路径积分 $(1-e^{2iz})/z^2$，求 $\int_0^\infty\sin^2x/x^2\,dx$。路径依次为实轴上的 $-R\to-r$、上半平面小半圆 $-r\to r$、实轴上的 $r\to R$、上半平面大半圆 $R\to-R$。

问题 2：定义 $F(z,w)=\operatorname{Re}(\overline zw)$。

（1）证明 $F(z,iz)=0$。

（2）令 $u=i(z_1-z_2)$，证明 $F(z_1,u)=F(z_2,u)$。

（3）$z_1,z_2\ne0$，且不存在实数 $t$ 使 $z_1=tz_2$。用它们表示满足 $F(z_1,z_3)=F(z_2,z_3)=F(z_1,z_2)$ 的 $z_3$。

问题 3：令 $f(z)=\sum_{n=0}^\infty c_nz^n$。

（1）收敛半径为 $R$，证明任意 $n\ge0$、$0<r<R$ 满足

$$
|c_n|\le(2\pi r^n)^{-1}\int_0^{2\pi}|f(re^{i\theta})|\,d\theta.
$$

（2）收敛半径为无穷大；若存在非负常数 $a,b,m$，使 $|z|>b$ 时 $|f(z)|\le a|z|^m$，证明 $f$ 是次数不超过 $m$ 的多项式。

## **Kai**

### 問題1
(1) 係数の比をとると

$$
\left|\frac{a_n}{a_{n+1}}\right|=\left(\frac n{n+1}\right)^{n-1}\longrightarrow e^{-1}.
$$

従って $\boxed{R=1/e}$。

(2) 提示された条件だけでは正則性は従わない。反例は $f(0)=0$、$f(z)=e^{-1/z^4}$ ($z\ne0$) である。原点の実軸・虚軸方向の偏導はともに $0$ で、原点以外では正則なので CR 関係を全域で満たす。しかし $z=re^{i\pi/4}$ では $f(z)=e^{1/r^4}$ となり原点で連続でない。

$\phi,\psi$ の偏導関数が連続という条件を補えば、Cauchy–Riemann の定理から正則であり、

$$
\boxed{f'(z)=\phi_x+i\psi_x=u-iv}.
$$

(3) $f(z)=-2i/z+2+O(z)$。大半円では $|e^{2iz}|\le1$ なので積分の絶対値は $2\pi/R\to0$。小半円は時計回りだから積分は $-i\pi(-2i)=-2\pi$ に収束する。領域内部に特異点はないため

$$
0=\lim_{r\downarrow0,R\to\infty}\left(\int_{-R}^{-r}f(x)\,dx+\int_r^Rf(x)\,dx-2\pi\right).
$$

実部をとり $1-\cos2x=2\sin^2x$ を使うと $4\int_0^\infty\sin^2x/x^2\,dx=2\pi$。従って $\boxed{\pi/2}$。

### 問題2
(1) $F(z,iz)=\operatorname{Re}(i|z|^2)=0$。

(2) 実双線形性により $F(z_1,u)-F(z_2,u)=F(z_1-z_2,i(z_1-z_2))=0$。

(3) $q=\overline z_1z_2=A+iB$ とする。実線形独立性より $B\ne0$。$z_3=t i(z_1-z_2)$ ($t\in\mathbb R$) とおけば (2) より最初の等号を満たし、$F(z_1,z_3)=tB$。従って

$$
\boxed{z_3=i\frac{\operatorname{Re}(\overline z_1z_2)}{\operatorname{Im}(\overline z_1z_2)}(z_1-z_2)}.
$$

独立な二つの実一次方程式の解なので一意である。

### 問題3
(1) Cauchy の積分公式から

$$
c_n=\frac1{2\pi i}\oint_{|z|=r}\frac{f(z)}{z^{n+1}}\,dz
=\frac1{2\pi r^n}\int_0^{2\pi}f(re^{i\theta})e^{-in\theta}\,d\theta.
$$

絶対値をとれば所望の不等式を得る。

(2) 任意の $r>b$ に対し (1) より $|c_n|\le ar^{m-n}$。整数 $n>m$ について $r\to\infty$ とすれば $c_n=0$ である。従って $f$ は次数が $\lfloor m\rfloor$ 以下の多項式となる。
