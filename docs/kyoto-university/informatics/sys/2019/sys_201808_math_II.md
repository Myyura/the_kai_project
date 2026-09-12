---
sidebar_label: 2018年8月実施 数学 II
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Vector-Calculus.Surface-Normal
---

# 京都大学 情報学研究科 システム科学専攻 2018年8月実施 数学 II

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1

(i) $\displaystyle\int_1^\infty dx/(x^2+1)^2$ を求めよ。

(ii) $f$ は任意の $x\ge1$ で微分可能で、

$$
f(1)=1,\qquad
f'(x)=\frac{2}{\sqrt{f(x)}+1}\left(\frac1{x^2+\{f(x)\}^2}\right)^2\quad(x\ge1)
$$

を満たす。$\lim_{x\to\infty}f(x)$ が有限な値に収束することを示せ。

(iii) $\lim_{x\to\infty}f(x)<5/4$ を示せ。

### 問2

微分可能なスカラー関数 $g(x,y,z)$ に対し、曲面 $S$ を $g(x,y,z)=0$ で定義する。$S$ 上の点 $(a,b,c)$ における法線は

$$
\frac{x-a}{g_x(a,b,c)}=\frac{y-b}{g_y(a,b,c)}=\frac{z-c}{g_z(a,b,c)}
$$

である。$g_x,g_y,g_z$ は偏導関数で、$(a,b,c)$ で全て $0$ ではないとする。点 $(x,y,z)$ と $(p,q,r)$ の距離の2乗を

$$
f(x,y,z)=(x-p)^2+(y-q)^2+(z-r)^2
$$

とおく。

(i) $(a,b,c)$ が $S$ 上で $(p,q,r)$ から最も近い点であるとき、$(p,q,r)$ はこの法線上にあることを示せ。制約 $g=0$ の下で $f$ を最小にする点では、適当な定数 $\lambda$ に対し $f_x+\lambda g_x=f_y+\lambda g_y=f_z+\lambda g_z=0$ が成り立つことを利用せよ。

(ii) $S_1:z=x^2+y^2$ の点 $(a,b,c)$ ($ab\ne0$) における法線を求めよ。

(iii) $S_1$ 上で $(1,2\sqrt2,0)$ に最も近い点は唯一つである。その点を求めよ。

#### 题目描述

**问1**

（i）求 $\int_1^\infty dx/(x^2+1)^2$。

（ii）函数 $f$ 在所有 $x\ge1$ 可微，并满足

$$
f(1)=1,\qquad f'(x)=\frac2{\sqrt{f(x)}+1}\left(\frac1{x^2+f(x)^2}\right)^2.
$$

证明 $\lim_{x\to\infty}f(x)$ 存在且有限。（iii）证明该极限小于 $5/4$。

**问2**

可微标量函数 $g$ 定义曲面 $S:g(x,y,z)=0$。$S$ 上一点 $(a,b,c)$ 的法线定义为

$$
\frac{x-a}{g_x(a,b,c)}=\frac{y-b}{g_y(a,b,c)}=\frac{z-c}{g_z(a,b,c)},
$$

其中下标表示偏导数，且这三个偏导数在该点不全为 $0$。定义到点 $(p,q,r)$ 的距离平方

$$
f(x,y,z)=(x-p)^2+(y-q)^2+(z-r)^2.
$$

（i）若 $(a,b,c)$ 是 $S$ 上距 $(p,q,r)$ 最近的点，证明 $(p,q,r)$ 位于上述法线上。可使用 Lagrange 条件：极小点处存在常数 $\lambda$ 使 $f_x+\lambda g_x=f_y+\lambda g_y=f_z+\lambda g_z=0$。

（ii）求抛物面 $S_1:z=x^2+y^2$ 在点 $(a,b,c)$（$ab\ne0$）处的法线。（iii）已知 $S_1$ 上距 $(1,2\sqrt2,0)$ 最近的点唯一，求此点。


## **Kai**

### 問1

(i) $x=\tan t$ とおくと

$$
\int_1^\infty\frac{dx}{(x^2+1)^2}
=\int_{\pi/4}^{\pi/2}\cos^2t\,dt=\boxed{\frac{\pi-2}{8}}.
$$

(ii) $f'(x)>0$ なので $f(x)\ge1$。したがって

$$
0<f'(x)\le\frac1{(x^2+1)^2},\qquad
1\le f(x)\le1+\int_1^\infty\frac{dt}{(t^2+1)^2}=\frac{\pi+6}{8}.
$$

単調有界性により有限な極限が存在する。

(iii) $\pi<4$ なので $\lim f(x)\le(\pi+6)/8<5/4$。

### 問2

(i) Lagrange 条件から

$$
(p-a,q-b,r-c)=\frac\lambda2\nabla g(a,b,c).
$$

よって $(p,q,r)$ は $(a,b,c)$ を通り $\nabla g(a,b,c)$ を方向ベクトルとする法線上にある。

(ii) $g=x^2+y^2-z$ とおけば

$$
\boxed{\frac{x-a}{2a}=\frac{y-b}{2b}=\frac{z-c}{-1}}.
$$

(iii) 最近点を $(a,b,c)$ とすると $c=a^2+b^2$ であり、(i) より

$$
1=a(1+2c),\qquad 2\sqrt2=b(1+2c).
$$

したがって $b=2\sqrt2a$、$c=9a^2$。よって

$$
18a^3+a-1=(3a-1)(6a^2+2a+1)=0.
$$

実根は $a=1/3$ のみだから、求める点は

$$
\boxed{\left(\frac13,\frac{2\sqrt2}{3},1\right)}.
$$

