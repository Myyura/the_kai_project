---
sidebar_label: '2011年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Calculus.Surface-Area-by-Double-Integral
  - Mathematics.Calculus.Constrained-Optimization
---

# 東京大学 工学系研究科 2011年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$r>0$ とし、領域 $A,B,C$ をそれぞれ

$$
A:\ x^2+y^2\le r^2,\qquad B:\ y^2+z^2\le r^2,\qquad C:\ z^2+x^2\le r^2
$$

で定める。

I. $D=A\cap B$ とする。(1) 平面 $y=t$（$0\le t\le r$）による断面積を求めよ。(2) $D$ の体積と表面積を求めよ。

II. $E=A\cap B\cap C$ とする。(1) $x^2+y^2+z^2$ の最大値と、それを与える点をすべて求めよ。(2) $E$ の体積と表面積を求めよ。

#### 题目描述

设 $r>0$，三条无限圆柱区域为

$$
A:\ x^2+y^2\le r^2,\quad B:\ y^2+z^2\le r^2,\quad C:\ z^2+x^2\le r^2.
$$

I. 令 $D=A\cap B$。(1) 求平面 $y=t$（$0\le t\le r$）上的截面积；(2) 求 $D$ 的体积和表面积。

II. 令 $E=A\cap B\cap C$。(1) 求 $x^2+y^2+z^2$ 的最大值及全部最大值点；(2) 求 $E$ 的体积和表面积。

## **Kai**

### I

$y=t$ を固定すると $|x|,|z|\le\sqrt{r^2-t^2}$ であり、断面は正方形である。従って、

$$
\boxed{S(t)=4(r^2-t^2)},\qquad
\boxed{V_D=\int_{-r}^r4(r^2-t^2)\,dt=\frac{16r^3}3}.
$$

円柱 $A$ の境界を $(x,y,z)=(r\cos\theta,r\sin\theta,z)$ と表す。
$B$ に属する部分では $|z|\le r|\cos\theta|$、面積要素は $r\,d\theta\,dz$ である。
二つの円柱面の面積は等しいので、

$$
\boxed{S_D=2\int_0^{2\pi}2r^2|\cos\theta|\,d\theta=16r^2}.
$$

### II

三つの制約を加えると $2(x^2+y^2+z^2)\le3r^2$ を得る。
等号は三つの制約で同時に等号が成り立つ場合、すなわち $x^2=y^2=z^2=r^2/2$ に限る。従って、

$$
\boxed{\max(x^2+y^2+z^2)=\frac{3r^2}2},\qquad
\boxed{(x,y,z)=\frac r{\sqrt2}(\pm1,\pm1,\pm1)}.
$$

符号および座標置換の対称性から $0\le z\le y\le x$ の部分だけ積分すればよい。この部分では制約は $x^2+y^2\le r^2$ に帰着する。
$a=r/\sqrt2$ とおくと、

$$
V_E=48\left[\int_0^a\int_0^x y\,dy\,dx
+\int_a^r\int_0^{\sqrt{r^2-x^2}}y\,dy\,dx\right]
=\boxed{8(2-\sqrt2)r^3}.
$$

各円柱面上で、位置ベクトル $\boldsymbol r$ と外向き単位法線は $\boldsymbol r\cdot\boldsymbol n=r$ を満たす。
発散定理より $rS_E=\iiint_E\nabla\cdot\boldsymbol r\,dV=3V_E$ なので、

$$
\boxed{S_E=24(2-\sqrt2)r^2}.
$$

