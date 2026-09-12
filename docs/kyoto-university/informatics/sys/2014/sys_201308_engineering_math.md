---
sidebar_label: 2013年8月実施 専門科目 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Geometry.Complex-Plane-Geometry
---
# 京都大学 情報学研究科 システム科学専攻 2013年8月実施 専門科目 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $\cosh(3+i)$ の実部、虚部、偏角を求めよ。

(2) $z=x+iy$ の関数 $f(z)=x^4-y^3+ix^3y^4$ は正則か調べよ。

(3) $\left|(1-z)/(1+2z)\right|\le1$ を満たす $z$ の範囲を複素平面上に図示せよ。

(4) $\sin z=4$ を満たす $z$ をすべて求めよ。

### 問題2
$f(z)=z/(z^2+z+1)$ とする。

(1) 特異点と各特異点での留数をすべて求めよ。

(2) $C=\{z:|z|=2\}$ を正方向に一周するときの $\oint_Cf(z)dz$ を求めよ。

(3) $\displaystyle\int_{-\infty}^{\infty}\frac{x\,dx}{(x^2+1)(x^2+x+1)}$ を求めよ。

### 問題3
右半面 $\operatorname{Re}z>0$ で正則であり、そこでの値の実部が常に正となる複素関数全体を $\mathcal P$ とする。

(1) $f,g\in\mathcal P$ なら $f\circ g\in\mathcal P$ を示せ。

(2) $f\in\mathcal P$ なら $1/f\in\mathcal P$ を示せ。

#### 题目描述

**问题1** (1) 求 $\cosh(3+i)$ 的实部、虚部和辐角。(2) 设 $z=x+iy$，判断 $f(z)=x^4-y^3+ix^3y^4$ 是否全纯。(3) 在复平面画出满足 $|(1-z)/(1+2z)|\le1$ 的区域。(4) 求 $\sin z=4$ 的所有复数解。

**问题2** 设 $f(z)=z/(z^2+z+1)$。(1) 求全部奇点及相应留数。(2) 沿 $|z|=2$ 正向一周求 $\oint_Cf(z)dz$。(3) 求 $\int_{-\infty}^{\infty}x/[(x^2+1)(x^2+x+1)]dx$。

**问题3** $\mathcal P$ 为在右半平面全纯且函数值实部恒正的所有函数的集合。(1) 证明 $f,g\in\mathcal P$ 蕴含 $f\circ g\in\mathcal P$。(2) 证明 $f\in\mathcal P$ 蕴含 $1/f\in\mathcal P$。

## **Kai**

### 問題1
(1) $\cosh(3+i)=\cosh3\cos1+i\sinh3\sin1$。従って実部は $\boxed{\cosh3\cos1}$、虚部は $\boxed{\sinh3\sin1}$。両者は正なので、偏角は

$$
\boxed{\arctan(\tanh3\tan1)+2\pi k,\quad k\in\mathbb Z}.
$$

(2) $u=x^4-y^3,v=x^3y^4$ とすると、$u_x=4x^3$、$v_y=4x^3y^3$ は恒等的に一致しない。どの開領域でもコーシー・リーマン方程式を満たさないので正則ではない。

(3) 両辺を二乗して整理すると $|z|^2+2\operatorname{Re}z\ge0$。従って $\boxed{|z+1|\ge1}$、すなわち中心 $-1$、半径 $1$ の円の外部と円周である。分母が零になる $z=-1/2$ はこの領域に含まれない。

![中心 -1、半径 1 の円の外部と円周](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2014/sys_201308_engineering_math_region.svg)

(4) $w=e^{iz}$ とおくと $w^2-8iw-1=0$ より $w=i(4\pm\sqrt{15})$。従って

$$
\boxed{z=\frac\pi2+2\pi k\pm i\log(4+\sqrt{15}),\quad k\in\mathbb Z}.
$$

### 問題2
(1) 特異点は単純極 $a_\pm=(-1\pm i\sqrt3)/2$ であり、

$$
\boxed{\operatorname{Res}(f,a_\pm)=\frac{a_\pm}{2a_\pm+1}=\frac12\pm\frac{i}{2\sqrt3}}.
$$

(2) 両極は $|z|<2$ にあるので、留数定理により $\boxed{\oint_Cf(z)dz=2\pi i}$。

(3) 部分分数分解によって

$$
\frac{x}{(x^2+1)(x^2+x+1)}=\frac1{x^2+1}-\frac1{(x+1/2)^2+3/4}.
$$

従って積分値は $\boxed{\pi-2\pi/\sqrt3}$。

### 問題3
(1) $g$ は右半面を右半面に写す。そこで $f\circ g$ は正則であり、$\operatorname{Re}f(g(z))>0$ なので $f\circ g\in\mathcal P$。

(2) $\operatorname{Re}f>0$ より $f\ne0$ なので $1/f$ は正則である。また

$$
\operatorname{Re}\frac1{f(z)}=\frac{\operatorname{Re}f(z)}{|f(z)|^2}>0.
$$

従って $1/f\in\mathcal P$。

