---
sidebar_label: 2015年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Conformal-Mapping
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
  - Mathematics.Complex-Analysis.Contour-Integration
---

# 京都大学 情報学研究科 システム科学専攻 2015年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

以下、$i$ は虚数単位、$e$ は自然対数の底、$\operatorname{Re}z,\operatorname{Im}z$ は実部・虚部を表す。

### 問題1

(1) $f(z)=1/[z(1+2z^2)]$ を、負べきを含んでもよい $z$ のべき級数として2通りに表せ。

(2) 領域 $\{z=x+iy\mid0\le x\le\pi,\ 1\le y\le2\}$ を $w=\sin z$ で変換した像の面積を求めよ。

(3) $0<a<1$ のとき $\int_0^{2\pi}d\theta/(1+a\cos\theta)^2$ を計算せよ。

### 問題2

領域 $\Omega\subset\mathbb C$ の実数値関数が調和関数であるとは、$z=x+iy$ として2階までの偏導関数が連続に存在し、$f_{xx}+f_{yy}=0$ となることである。

(1) $\Omega$ で正則な関数の実部・虚部 $u,v$ はともに調和関数であることを示せ。

(2) $g$ が $\Omega$ で正則で $0$ をとらないなら、$\log|g(z)|$ は調和関数であることを示せ。

### 問題3

(1) $a<b$ とし、図の閉路 $C$ は $\{z\mid a<\operatorname{Re}z<b,\ -\pi<\operatorname{Im}z<\pi\}$ の境界を反時計回りに一周する。$\int_Ce^{e^z}\,dz$ を考察して、実数 $c$ について

$$
I_c=\int_{-\pi}^{\pi}e^{e^{c+i\theta}}\,d\theta
$$

が $c$ によらないことを示せ。

![矩形の閉路 C](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2016/sys_201508_engineering_math_rectangle.svg)

(2) $\int_{-\pi}^{\pi}e^{e^{i\theta}}\,d\theta$ を求めよ。

#### 题目描述

以下 $i$ 为虚数单位、$e$ 为自然对数的底，$\operatorname{Re}z,\operatorname{Im}z$ 表示实部和虚部。

**问题1** （1）将 $f(z)=1/[z(1+2z^2)]$ 写成两种关于 $z$ 的幂级数，允许负次幂。（2）求矩形区域 $0\le x\le\pi,1\le y\le2$ 在 $w=\sin(x+iy)$ 下的像的面积。（3）$0<a<1$，计算 $\int_0^{2\pi}d\theta/(1+a\cos\theta)^2$。

**问题2** 复平面区域 $\Omega$ 中的实值函数称为调和函数，是指它关于 $x,y$ 的二阶偏导数连续存在且满足 $f_{xx}+f_{yy}=0$。

（1）证明 $\Omega$ 上全纯函数的实部、虚部 $u,v$ 都是调和函数。（2）若 $g$ 在 $\Omega$ 上全纯且处处非零，证明 $\log|g(z)|$ 是调和函数。

**问题3** （1）$a<b$，$C$ 是图中区域 $a<\operatorname{Re}z<b,-\pi<\operatorname{Im}z<\pi$ 的边界，沿逆时针方向。考察 $\int_Ce^{e^z}\,dz$，证明对实数 $c$ 定义的积分

$$
I_c=\int_{-\pi}^{\pi}e^{e^{c+i\theta}}\,d\theta
$$

与 $c$ 无关。（2）求 $\int_{-\pi}^{\pi}e^{e^{i\theta}}\,d\theta$。


## **Kai**

### 問題1

(1) 等比級数を用いると

$$
\boxed{f(z)=\sum_{n=0}^{\infty}(-2)^nz^{2n-1},\qquad0<|z|<1/\sqrt2},
$$

$$
\boxed{f(z)=\sum_{n=0}^{\infty}\frac{(-1)^n}{2^{n+1}}z^{-2n-3},\qquad|z|>1/\sqrt2}.
$$

(2) $\sin z_1=\sin z_2$ なら $z_1-z_2\in2\pi\mathbb Z$ または $z_1+z_2\in\pi+2\pi\mathbb Z$。与領域では後者は虚部が正なので不可能であり、前者は $z_1=z_2$ を与える。よって写像は単射である。

面積の Jacobian は $|\cos z|^2=\cos^2x+\sinh^2y$。したがって像の面積は

$$
\boxed{\int_1^2\int_0^\pi(\cos^2x+\sinh^2y)\,dx\,dy
=\frac\pi4(\sinh4-\sinh2)}.
$$

(3) $z=e^{i\theta}$ とおくと

$$
I=\frac4i\int_{|z|=1}\frac{z\,dz}{(az^2+2z+a)^2}.
$$

$s=\sqrt{1-a^2}$、$r_\pm=(-1\pm s)/a$ とおけば内部の極は $r_+$ のみで、

$$
\operatorname{Res}_{z=r_+}\frac{z}{a^2(z-r_+)^2(z-r_-)^2}
=\left.\frac{d}{dz}\frac{z}{a^2(z-r_-)^2}\right|_{r_+}
=\frac1{4s^3}.
$$

よって $\boxed{I=2\pi/(1-a^2)^{3/2}}$。

### 問題2

(1) Cauchy–Riemann 方程式 $u_x=v_y,u_y=-v_x$ を微分し、混合偏導関数の交換を用いれば

$$
u_{xx}+u_{yy}=v_{yx}-v_{xy}=0,\qquad
v_{xx}+v_{yy}=-u_{yx}+u_{xy}=0.
$$

(2) 任意の点の十分小さい近傍では、$g\ne0$ により正則な対数 $h=\log g$ が存在する。$\operatorname{Re}h=\log|g|$ なので (1) より調和的である。調和性は局所的性質だから $\Omega$ 全体で成り立つ。

### 問題3

(1) $e^{e^z}$ は整関数なので閉路積分は $0$。上下の辺では $e^{x+i\pi}=e^{x-i\pi}=-e^x$ となり、積分が打ち消し合う。左右の辺の和は $iI_b-iI_a$ なので $I_a=I_b$。

(2) (1) により $I_0=I_c$。$c\to-\infty$ で $e^{e^{c+i\theta}}\to1$ は $\theta$ について一様なので

$$
\boxed{I_0=\lim_{c\to-\infty}I_c=\int_{-\pi}^{\pi}1\,d\theta=2\pi}.
$$

