---
sidebar_label: 2023年8月実施 必須問題 微分積分
tags:
  - University-of-Electro-Communications
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 必須問題 微分積分

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$f(x,y)=x^2+y^2$、

$$
g(x,y)=f(x-y-1,\,2x+y-2)+19
$$

とする。曲面 $z=g(x,y)$ の $(1,1,g(1,1))$ における接平面を求め、これと曲面 $z=f(x,y)$ の交線上で $z$ が最大となる点を求めよ。また、

$$
I=\iint_D e^{y^2}\,dx\,dy,\qquad
D=\{(x,y)\mid y^3\le x\le y,\ 0\le y\le1\},
$$

$$
J=\iint_E\frac{x}{x^2+y^2}\,dx\,dy,\qquad
E=\{(x,y)\mid1\le x^2+y^2\le2x,\ y\ge0\}
$$

を求め、$L_n=\sum_{j=1}^n\sum_{k=1}^n(nj+nk+n^2)^{-1}$ の $n\to\infty$ における極限を区分求積法で求めよ。

### 题目描述

求复合二元函数曲面的切平面、该平面与抛物面的交线上高度最大的点，并计算两个二重积分及一个二维 Riemann 和的极限。

## **Kai**

### (1)

#### (i)

$$
g=(x-y-1)^2+(2x+y-2)^2+19.
$$

$g(1,1)=21$、$\nabla g(1,1)=(2,4)$ より、

$$
\boxed{h(x,y)=21+2(x-1)+4(y-1)=2x+4y+15}.
$$

#### (ii)

交線の $xy$ 平面への射影は

$$
x^2+y^2=2x+4y+15,
$$

すなわち

$$
(x-1)^2+(y-2)^2=20
$$

である。この円上で $2x+4y+15$ を最大化する。中心 $(1,2)$ からベクトル $(2,4)$ の方向に進んだ点が最大点であるから、

$$
(x,y)=(1,2)+2\sqrt5\,\frac{(2,4)}{2\sqrt5}=(3,6).
$$

このとき $z=3^2+6^2=45$ なので、

$$
\boxed{(a,b,c)=(3,6,45)}.
$$

### (2)

#### (i)

$$
\begin{aligned}
I
&=\int_0^1\int_{y^3}^{y}e^{y^2}\,dx\,dy\\
&=\int_0^1(y-y^3)e^{y^2}\,dy\\
&=\frac12\int_0^1(1-t)e^t\,dt
=\boxed{\frac e2-1}.
\end{aligned}
$$

#### (ii)

極座標を用いると

$$
0\leq\theta\leq\frac{\pi}{3},\qquad 1\leq r\leq2\cos\theta.
$$

したがって、

$$
\begin{aligned}
J
&=\int_0^{\pi/3}\int_1^{2\cos\theta}\cos\theta\,dr\,d\theta\\
&=\int_0^{\pi/3}(2\cos^2\theta-\cos\theta)\,d\theta\\
&=\boxed{\frac{\pi}{3}-\frac{\sqrt3}{4}}.
\end{aligned}
$$

### (3)

$$
L_n=\frac1{n^2}\sum_{j=1}^n\sum_{k=1}^n
\frac1{j/n+k/n+1}
$$

は $[0,1]^2$ 上の Riemann 和である。よって、

$$
\begin{aligned}
L
&=\int_0^1\int_0^1\frac1{x+y+1}\,dx\,dy\\
&=3\log3-4\log2
=\boxed{\log\frac{27}{16}}.
\end{aligned}
$$
