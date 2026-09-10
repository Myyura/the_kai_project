---
sidebar_label: '2013年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Differential-Equations.Volterra-Integral-Equation
---

# 東京大学 工学系研究科 2013年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$t$ を実数として $(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau$ とし、
$\mathcal L[f](s)=\int_0^\infty f(t)e^{-st}\,dt$ と定める。
$\mathcal L[f*g]=\mathcal L[f]\mathcal L[g]$ を用いてよい。

I. 定義に従い畳み込みを求めよ。(1) $f(t)=\cos\omega t,g(t)=\sin\omega t$（$\omega\in\mathbb R$）。(2) $f(t)=e^t,g(t)=e^{-t}$。

II. $q(t)=u(t)-u(t-1)$、$r(t)=t+\sin2\pi t$ とする。$u(t)=0$（$t\le0$）、$u(t)=1$（$t>0$）である。
(1) $0\le t<4$ で $q,r$ の概形を描け。(2) 両関数のラプラス変換を求めよ。
(3) $y=q*r$ を求め、同区間で概形を描け。$a\ge0$ に対する移動公式
$\mathcal L[f(t-a)u(t-a)]=e^{-as}\mathcal L[f](s)$ を用いてよい。

III. 積分方程式 $\displaystyle x(t)+2e^t\int_0^t x(\tau)e^{-\tau}\,d\tau=te^t$ を解け。

#### 题目描述

对实数 $t$，定义 $(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau$，并令
$\mathcal L[f](s)=\int_0^\infty f(t)e^{-st}\,dt$。
可用 $\mathcal L[f*g]=\mathcal L[f]\mathcal L[g]$。

I. 按定义计算卷积：(1) $f(t)=\cos\omega t,g(t)=\sin\omega t$，$\omega\in\mathbb R$；(2) $f(t)=e^t,g(t)=e^{-t}$。

II. 令 $q(t)=u(t)-u(t-1)$、$r(t)=t+\sin2\pi t$，其中 $u(t)=0$（$t\le0$）、$u(t)=1$（$t>0$）。
(1) 在 $0\le t<4$ 图示 $q,r$；(2) 求二者的拉普拉斯变换；(3) 求 $y=q*r$，并在同一区间图示。可用位移公式
$\mathcal L[f(t-a)u(t-a)]=e^{-as}\mathcal L[f](s)$（$a\ge0$）。

III. 求积分方程 $\displaystyle x(t)+2e^t\int_0^t x(\tau)e^{-\tau}\,d\tau=te^t$ 的解。

## **Kai**

### I

1. 積和公式を用いると、$\tau-t/2$ の奇関数の項は積分で消えるので、

$$
\int_0^t\cos\omega\tau\sin\omega(t-\tau)\,d\tau
=\boxed{\frac t2\sin\omega t}.
$$

2. $\displaystyle e^{-t}\int_0^t e^{2\tau}\,d\tau=\boxed{\sinh t}$。

### II

$q(t)$ は $(0,1]$ で $1$、それ以外で $0$。$r(t)$ は直線 $t$ に周期 $1$ の正弦波を加えたものである。
定義から積分して、

$$
\boxed{Q(s)=\frac{1-e^{-s}}s,\qquad R(s)=\frac1{s^2}+\frac{2\pi}{s^2+4\pi^2}}\qquad(\operatorname{Re}s>0).
$$

$H(t)=\int_0^t r(v)\,dv=t^2/2+(1-\cos2\pi t)/(2\pi)$ とおくと、

$$
y(t)=H(t)-u(t-1)H(t-1)
=\boxed{\begin{cases}
\dfrac{t^2}2+\dfrac{1-\cos2\pi t}{2\pi},&0\le t\le1,\\
t-\dfrac12,&t>1.
\end{cases}}
$$

![q、rおよび畳み込みyのグラフ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_math_5_functions.svg)

### III

$v(t)=e^{-t}x(t)$ とおくと、方程式は $v(t)+2\int_0^t v(\tau)\,d\tau=t$ となる。
$t=0$ より $v(0)=0$。微分して $v'+2v=1$ を解くと、

$$
\boxed{x(t)=\frac12(e^t-e^{-t})=\sinh t}.
$$

