---
sidebar_label: '数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform-Differentiation-and-Time-Multiplication
  - Mathematics.Fourier-Analysis.Fourier-Transform-Solution-of-Heat-Equation
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Calculus.Gaussian-Integral
---

# 東京大学 工学系研究科 2019年度 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問題

$f$ は連続微分可能で、$f(x)\to0$（$|x|\to\infty$）とする。$f,f',xf$ は絶対可積分であり、Fourier 変換を次のように定義する。

$$
\widehat f(u)=\mathcal F[f](u)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-iux}\,dx.
$$

I. $\mathcal F[f']$ を $u,\widehat f$ で表せ。

II. $d\widehat f/du$ を $\mathcal F[xf]$ で表せ。

III. $f=e^{-ax^2}$、$a>0$ とする。$f'=-2axf$ を Fourier 変換して $\widehat f$ の1階微分方程式を導き、解け。定数の決定には $\int_{-\infty}^\infty e^{-ax^2}dx=\sqrt{\pi/a}$ を用いてよい。

IV. $h_t=h_{xx}$（$x\in\mathbb R,t>0$）の初期条件を $h(x,0)=e^{-ax^2}$ とする。

1. $x$ について Fourier 変換し、$\widehat h(u,t)$ が満たす $t$ の微分方程式を求めよ。
2. $\widehat h(u,t)$ を求めよ。
3. 逆 Fourier 変換によって $h(x,t)$ を求めよ。

V. 連続関数 $g$ は無限遠で零に収束し、絶対可積分であるとする。畳み込みを次のように定義する。
$\displaystyle(f*g)(x)=\int_{-\infty}^{\infty}f(y)g(x-y)\,dy$。

1. $\mathcal F[f*g]$ を $\widehat f,\widehat g$ で表せ。
2. 前問を用いて、$h_t=h_{xx}$、$h(x,0)=g(x)$ の解を積分表示せよ。ただし $t>0$ とする。

#### 题目描述

设 $f$ 连续可微，$f(x)\to0$（$|x|\to\infty$），且 $f,f',xf$ 均绝对可积。采用 Fourier 变换

$$
\widehat f(u)=\mathcal F[f](u)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-iux}\,dx.
$$

I. 用 $u,\widehat f$ 表示 $\mathcal F[f']$。

II. 用 $\mathcal F[xf]$ 表示 $d\widehat f/du$。

III. 设 $f=e^{-ax^2}$，$a>0$。对 $f'=-2axf$ 作 Fourier 变换，求 $\widehat f$ 满足的一阶微分方程并求解。可用 $\int_{-\infty}^\infty e^{-ax^2}dx=\sqrt{\pi/a}$ 确定常数。

IV. 对 $h_t=h_{xx}$（$x\in\mathbb R,t>0$），初值为 $h(x,0)=e^{-ax^2}$：

1. 对 $x$ 作 Fourier 变换，求 $\widehat h(u,t)$ 满足的关于 $t$ 的微分方程。
2. 求 $\widehat h(u,t)$。
3. 作逆变换，求 $h(x,t)$。

V. 连续函数 $g$ 在无穷远趋于零且绝对可积，定义
$\displaystyle(f*g)(x)=\int_{-\infty}^{\infty}f(y)g(x-y)\,dy$。

1. 用 $\widehat f,\widehat g$ 表示 $\mathcal F[f*g]$。
2. 利用前问求 $h_t=h_{xx}$、$h(x,0)=g(x)$ 的解的积分表示（$t>0$）。

## **Kai**

### I–II.

部分積分および積分記号下の微分により、それぞれ

$$
\boxed{\mathcal F[f'](u)=iu\widehat f(u)},\qquad
\boxed{\widehat f'(u)=-i\mathcal F[xf](u)}.
$$

### III.

$f'=-2axf$ を変換すると $iu\widehat f=-2ai\widehat f'$、すなわち

$$
\widehat f'=-\frac{u}{2a}\widehat f.
$$

$\widehat f(0)=1/\sqrt{2a}$ より

$$
\boxed{\widehat f(u)=\frac1{\sqrt{2a}}e^{-u^2/(4a)}}.
$$

### IV.

1. 変換後の方程式は $\boxed{\partial_t\widehat h=-u^2\widehat h}$ である。

2. 初期条件を用いると

$$
\boxed{\widehat h(u,t)=\frac1{\sqrt{2a}}e^{-(t+1/(4a))u^2}}.
$$

3. III の Gauss 関数の変換公式によって逆変換すると

$$
\boxed{h(x,t)=\frac1{\sqrt{1+4at}}\exp\left(-\frac{ax^2}{1+4at}\right)}.
$$

### V.

1. $z=x-y$ とおき、積分の順序を交換すると

$$
\mathcal F[f*g](u)=\frac1{\sqrt{2\pi}}
\left(\int_{\mathbb R}f(y)e^{-iuy}dy\right)
\left(\int_{\mathbb R}g(z)e^{-iuz}dz\right)
=\boxed{\sqrt{2\pi}\widehat f(u)\widehat g(u)}.
$$

2. この場合は $\widehat h=e^{-tu^2}\widehat g$ となる。ここで

$$
\mathcal F\left[\frac1{\sqrt{4\pi t}}e^{-x^2/(4t)}\right]
=\frac1{\sqrt{2\pi}}e^{-tu^2},
$$

畳み込み定理を用いて

$$
\boxed{h(x,t)=\frac1{\sqrt{4\pi t}}\int_{-\infty}^{\infty}
e^{-(x-y)^2/(4t)}g(y)\,dy},\qquad t>0.
$$

