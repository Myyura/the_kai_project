---
sidebar_label: 2019年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Conformal-Mapping
---

# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1

(1) $1$ の15乗根のうち偏角が正で最小のものを $z\ne1$ とする。次の和を求めよ。

$$
S_1=\sum_{k=0}^{5}z^{3k}+\sum_{k=0}^{3}z^{5k}.
$$

(2) $a\ne\pm1$ を実数、$n$ を非負整数とする。原点を中心とする単位円を正の向きに一周する経路 $C_2$ について、次の積分を求めよ。

$$
I_2=\int_{C_2}\frac{z^n}{(z-a)(1-az)}\,dz.
$$

(3) 図の積分路 $C_3$ に沿った複素積分を利用して、次の積分を求めよ。

$$
I_3=\int_0^\infty\frac{dx}{\sqrt{x}(x^2+1)}.
$$

![積分路 C3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2020/sys_201908_engineering_math_contour.svg)

$C_3$ は $\varepsilon\to R$ の実軸、上半平面の半円 $R\to-R$、実軸 $-R\to-\varepsilon$、上半平面の小半円 $-\varepsilon\to\varepsilon$ からなる。

### 問題2

$z=x+yi$ ($x,y$ は実数) とする。以下の関数について、微分可能であるような $z$ の集合、および $z$ の近傍で正則であるような $z$ の集合を各々示せ。

$$
f_1(z)=x^3-3xy^2+(3x^2y-y^3)i,\qquad
f_2(z)=(x-y)^2+(x+y+1)^2i.
$$

### 問題3

関数 $f(z)=z+1/z$ による次の集合の像は、複素平面でどのような図形となるか。

(1) 原点を中心とする半径 $r>0$ の円周。

(2) 半直線 $\ell=\{re^{i\theta}\mid r>0\}$。ただし $\theta$ は $\sin2\theta\ne0$ を満たす定数である。

#### 题目描述

**问题1**

（1）令 $z\ne1$ 为 $1$ 的15次根中正幅角最小者，求

$$
S_1=\sum_{k=0}^{5}z^{3k}+\sum_{k=0}^{3}z^{5k}.
$$

（2）$a$ 为不等于 $\pm1$ 的实数，$n$ 为非负整数。$C_2$ 是以原点为中心、沿正向走一周的单位圆，求

$$
I_2=\int_{C_2}\frac{z^n}{(z-a)(1-az)}\,dz.
$$

（3）利用上图积分路径 $C_3$ 的复积分求

$$
I_3=\int_0^\infty\frac{dx}{\sqrt{x}(x^2+1)}.
$$

路径沿正实轴从 $\varepsilon$ 到 $R$，逆时针绕上半大圆到 $-R$，沿负实轴到 $-\varepsilon$，再顺时针绕上半小圆返回 $\varepsilon$。

**问题2**

设 $z=x+yi$，其中 $x,y$ 为实数。分别求以下函数复可微的点集，以及在该点某邻域内全纯的点集：

$$
f_1(z)=x^3-3xy^2+(3x^2y-y^3)i,\qquad
f_2(z)=(x-y)^2+(x+y+1)^2i.
$$

**问题3**

求下列集合在 $f(z)=z+1/z$ 下的像，并说明是什么图形：（1）以原点为中心、半径 $r>0$ 的圆周；（2）半直线 $\{re^{i\theta}\mid r>0\}$，其中 $\theta$ 为满足 $\sin2\theta\ne0$ 的常数。


## **Kai**

### 問題1

(1) $z=e^{2\pi i/15}$ なので $z^3,z^5$ はそれぞれ原始5乗根、原始3乗根である。したがって

$$
S_1=\left(\sum_{k=0}^{4}z^{3k}+1\right)+\left(\sum_{k=0}^{2}z^{5k}+1\right)=\boxed2.
$$

(2) $|a|<1$ なら内部の極は $a$ のみ、$|a|>1$ なら $1/a$ のみである。留数定理から

$$
\boxed{I_2=
\begin{cases}
\displaystyle\frac{2\pi i\,a^n}{1-a^2},&|a|<1,\\[2mm]
\displaystyle\frac{2\pi i\,a^{-n}}{a^2-1},&|a|>1.
\end{cases}}
$$

$a=0,n=0$ の $a^n$ は $1$ と読む。

(3) 上半平面で $0<\arg z<\pi$ として $F(z)=z^{-1/2}/(1+z^2)$ をとる。大半円、小半円の積分はそれぞれ $O(R^{-3/2})$、$O(\sqrt\varepsilon)$ で消える。負の実軸の上側で $\sqrt{-x}=i\sqrt x$ なので、実軸上の積分の和は $(1-i)I_3$ となる。一方

$$
\operatorname{Res}_{z=i}F=\frac{e^{-i\pi/4}}{2i},\qquad
(1-i)I_3=\pi e^{-i\pi/4}.
$$

よって $\boxed{I_3=\pi/\sqrt2}$。

### 問題2

(1) $f_1(z)=z^3$ なので、微分可能点も正則点も $\mathbb C$ 全体である。

(2) 実部を $u$、虚部を $v$ とすると

$$
u_x=2(x-y),\quad u_y=-2(x-y),\quad
v_x=v_y=2(x+y+1).
$$

Cauchy–Riemann 方程式は $y=-1/2$ と同値。偏導関数は連続なので、微分可能点の集合は $\{x-i/2\mid x\in\mathbb R\}$。この直線は開集合を含まないため、近傍で正則となる点の集合は空集合である。

### 問題3

$w=u+iv=f(re^{i\theta})$ とすると

$$
u=(r+r^{-1})\cos\theta,\qquad v=(r-r^{-1})\sin\theta.
$$

(1) $r\ne1$ なら楕円

$$
\frac{u^2}{(r+r^{-1})^2}+\frac{v^2}{(r-r^{-1})^2}=1.
$$

$r=1$ なら実軸上の線分 $[-2,2]$。

(2) $\theta$ を固定すると

$$
\frac{u^2}{4\cos^2\theta}-\frac{v^2}{4\sin^2\theta}=1,\qquad
\frac{u}{\cos\theta}\ge2.
$$

すなわち双曲線のうち $u$ と $\cos\theta$ の符号が一致する一方の枝全体である。

![Joukowski 写像による円周と半直線の像](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2020/sys_201908_engineering_math_mapping.svg)

