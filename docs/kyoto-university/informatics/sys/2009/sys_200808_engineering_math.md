---
sidebar_label: 2008年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 京都大学 情報学研究科 システム科学専攻 2008年8月実施 工業数学

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $w=2x^2-2y^2$ を $z=x+iy,\bar z=x-iy$ で表せ。

(2) 原点を中心とする半径 $r>0$ の円を $z=r$ から $z=-r$ まで反時計回りに進む曲線を $C$ とする。$|\int_C dz/z|$ を求めよ。

(3) $f(z)=(z^2+z+1)/\{z^2(z+1)\}$ の各特異点における留数を求めよ。

(4) 複素積分を用いて $I=\int_{-\infty}^0dx/(ax^2+1)$（$a>0$）を求めよ。

### 問題2
次の各複素関数が正則となる条件と、そのときの導関数を求めよ。$x=\operatorname{Re}z,y=\operatorname{Im}z$、$a,b,c,q,r$ は実定数とする。

(1) $x(x^2-ay^2)+iy(bx^2-y^2)$。

(2) $x/(x^2+y^2)-iy/(x^2+y^2)$。

(3) $z^2+c\bar z^2$。

(4) $e^{-y}(\cos qx+i\sin qx)$。

(5) $\sum_{n=1}^\infty r^nz^n$。

#### 题目描述

### 问题1
(1) 用 $z=x+iy$ 和 $\bar z=x-iy$ 表示 $w=2x^2-2y^2$。

(2) $C$ 是以原点为圆心、半径 $r>0$，从 $r$ 逆时针至 $-r$ 的上半圆弧。求 $|\int_Cdz/z|$。

(3) 求 $f(z)=(z^2+z+1)/[z^2(z+1)]$ 在各奇点的留数。

(4) 用复积分求 $\int_{-\infty}^0dx/(ax^2+1)$，其中 $a>0$。

### 问题2
$x=\operatorname{Re}z,y=\operatorname{Im}z$，$a,b,c,q,r$ 为实常数。求下列函数全纯的条件及对应导数：

(1) $x(x^2-ay^2)+iy(bx^2-y^2)$；(2) $(x-iy)/(x^2+y^2)$；(3) $z^2+c\bar z^2$；(4) $e^{-y}(\cos qx+i\sin qx)$；(5) $\sum_{n=1}^\infty r^nz^n$。

## **Kai**

### 問題1
(1) $\boxed{w=z^2+\bar z^2}$。

(2) $z=re^{i\theta}$（$0\le\theta\le\pi$）とおけば $\int_Cdz/z=i\pi$。したがって絶対値は $\boxed{\pi}$。

(3) $f(z)=z^{-2}+(z+1)^{-1}$ より、$\operatorname{Res}_0f=0$、$\operatorname{Res}_{-1}f=1$。

(4) $1/(az^2+1)$ を上半円で積分する。上半平面の極 $i/\sqrt a$ の留数は $1/(2i\sqrt a)$。半径 $R$ の円弧積分の絶対値は $\pi R/(aR^2-1)\to0$ なので、留数定理より

$$
\int_{-\infty}^{\infty}\frac{dx}{ax^2+1}=\frac\pi{\sqrt a}.
$$

偶関数であることから $\boxed{I=\pi/(2\sqrt a)}$。

### 問題2
正則性は開集合上で考える。

(1) コーシー・リーマン方程式は

$$
(3-b)x^2+(3-a)y^2=0,\qquad (b-a)xy=0.
$$

開集合上で成立する必要十分条件は $a=b=3$。このとき $f(z)=z^3$、$f'(z)=3z^2$。

(2) $f(z)=1/z$ より $z\ne0$ で正則、$f'(z)=-1/z^2$。

(3) $\partial f/\partial\bar z=2c\bar z$ より、正則となる条件は $c=0$。このとき $f'(z)=2z$。

(4) コーシー・リーマン方程式から $(q-1)\sin qx=(q-1)\cos qx=0$。したがって $q=1$ が必要十分。このとき $f(z)=e^{iz}$、$f'(z)=ie^{iz}$。

(5) $r\ne0$ ならば $|rz|<1$ で正則であり、$f(z)=rz/(1-rz)$、$f'(z)=r/(1-rz)^2$。$|rz|\ge1$ では一般項が $0$ に収束しない。$r=0$ ならば恒等的に $0$ で、全平面で正則、導関数も $0$。

