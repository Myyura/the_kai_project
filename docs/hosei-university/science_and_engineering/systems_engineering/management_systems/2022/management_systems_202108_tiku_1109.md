---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

平面上の領域 $D$ を

$$
D = \{(x, y) \mid y > 2x, y > -2x\}
$$

とするとき、重積分

$$
I = \iint_D \exp(x^2 - y^2) dxdy
$$

について考える。

(1) $(k,y)$ に対して $(x,y) = (ky, y)$ を対応させる変数変換 $(k,y) \mapsto (x,y)$ を考える。この変換における $D$ の逆像はどのような図形かを図示せよ。

(2) 重積分 $I$ を求めよ。

(3) $E = \{(x,y) \mid y^2 - x^2 < 1\}$ とするとき、二重積分

$$
\iint_{D \cap E} \exp(x^2 - y^2) dxdy
$$

を求めよ。

### 题目描述

定义平面区域

$$
D=\{(x,y)\mid y>2x,\ y>-2x\},
$$

并考虑重积分

$$
I=\iint_D\exp(x^2-y^2)\,dx\,dy.
$$

（1）考虑变量变换

$$
(k,y)\longmapsto(x,y)=(ky,y).
$$

画出区域 $D$ 在此变换下的原像。

（2）求重积分 $I$。

（3）令

$$
E=\{(x,y)\mid y^2-x^2<1\},
$$

求二重积分

$$
\iint_{D\cap E}\exp(x^2-y^2)\,dx\,dy.
$$

## **Kai**

(1) 変数変換 $(k,y)\mapsto(x,y)=(ky,y)$ における $D$ の逆像を求める．

条件 $y>2x,\ y>-2x$ に $x=ky$ を代入すると

$$
y>2ky,\quad y>-2ky.
$$

$D$ では $y>0$ なので，両辺を $y$ で割ると

$$
1>2k,\qquad 1>-2k
$$

すなわち

$$
-\frac12<k<\frac12,\qquad y>0.
$$

よって， $(k,y)$ -平面における逆像は

$$
D'=\{(k,y)\mid -\tfrac12<k<\tfrac12,\ y>0\}
$$

である（ $k$ 方向の区間 $(-1/2,1/2)$ に対し，上へ無限に延びる帯状領域）．

![積分領域の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hosei_university/science_and_engineering/systems_engineering/management_systems/2022/hosei-2021-open-strip.svg)

(2) 重積分 $I$ を求める．

まず変数変換 $(k,y)\mapsto(x,y)=(ky,y)$ を用いると，

$$
J_1=\frac{\partial(x,y)}{\partial(k,y)}
=
\begin{vmatrix}
y & k\\
0 & 1
\end{vmatrix}
=y
$$

より

$$
dxdy=y\,dkdy\qquad (y>0).
$$

したがって

$$
I=\iint_{D} e^{x^{2}-y^{2}}\,dxdy
   =\int_{0}^{\infty}\int_{-1/2}^{1/2}
     e^{(ky)^{2}-y^{2}}\,y\,dkdy.
$$

次に

$$
u=y^{2}-x^{2}=y^{2}-k^{2}y^{2}=y^{2}(1-k^{2}),\quad v=k
$$

とおく（ $(k,y)$ から $(u,k)$ への変換）．これより

$$
y^{2}=\frac{u}{1-k^{2}},\qquad y=\sqrt{\frac{u}{1-k^{2}}}>0.
$$

このとき

$$
\frac{\partial(k,y)}{\partial(u,k)}=
\begin{vmatrix}
0 & 1\\[2pt]
\partial y/\partial u & \partial y/\partial k
\end{vmatrix}
=-\frac{1}{2y(1-k^2)},
\qquad
\left|\frac{\partial(x,y)}{\partial(u,k)}\right|
=|J_1|\cdot\left|\frac{\partial(k,y)}{\partial(u,k)}\right|
=y\cdot\frac1{2y(1-k^2)}
=\frac1{2(1-k^2)}.
$$

また $x^{2}-y^{2}=-(y^{2}-x^{2})=-u$ である．
領域については，(1) より
$-\frac12<k<\frac12,\ y>0$ かつ $y^{2}>x^{2}$ から

$$
0<u<\infty,\quad -\frac12<k<\frac12
$$

となる．よって

$$
I=\int_{-1/2}^{1/2}\int_{0}^{\infty}
   e^{-u}\frac{1}{2(1-k^2)}\,dudk
 =\left(\int_{-1/2}^{1/2}\frac{dk}{2(1-k^2)}\right)
         \left(\int_{0}^{\infty}e^{-u}du\right)
 =\operatorname{artanh}\left(\frac12\right)
 =\frac12\log3.
$$

したがって

$$
\boxed{I=\dfrac12\log3}.
$$

(3) $E=\{(x,y)\mid y^{2}-x^{2}<1\}$ とするとき，

$$
\iint_{D\cap E} \exp(x^{2}-y^{2})\,dxdy
$$

を求めよ．

同じ変数変換を用いると，条件 $y^{2}-x^{2}<1$ は $u<1$ に対応するので，

$$
D\cap E \longleftrightarrow
R'=\{(u,k)\mid 0<u<1,\ -\tfrac12<k<\tfrac12\}.
$$

従って

$$
\iint_{D\cap E} e^{x^{2}-y^{2}}\,dxdy
=\int_{-1/2}^{1/2}\int_{0}^{1}
  e^{-u}\frac{1}{2(1-k^2)}\,dudk
=\left(\int_{-1/2}^{1/2}\frac{dk}{2(1-k^2)}\right)
        \left(\int_{0}^{1}e^{-u}du\right)
=\frac12\log3\,(1-e^{-1}).
$$

よって

$$
\boxed{\displaystyle
\iint_{D\cap E} \exp(x^{2}-y^{2})\,dxdy
=\frac12\log3\,(1-e^{-1})
}.
$$
