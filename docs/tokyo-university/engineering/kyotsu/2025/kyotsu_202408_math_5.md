---
sidebar_label: '2024年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 東京大学 工学系研究科 2024年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

連続関数 $f(t)$ について $|f(t)|$ と $|f(t)|^2$ が積分可能であるとする。フーリエ変換を

$$
F(\omega)=\mathcal F[f](\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt
$$

とする。ここで $\omega\in\mathbb R$ であり、次の等式が成り立つ。

$$
\int_{-\infty}^{\infty}|F(\omega)|^2\,d\omega=2\pi\int_{-\infty}^{\infty}|f(t)|^2\,dt.
$$

自己相関関数を $R_f(\tau)=\int_{-\infty}^{\infty}f(t)f(t-\tau)\,dt$（$\tau\in\mathbb R$）と定義する。

I. $a>0$ とし、

$$
f(t)=\begin{cases}\cos(at),&|t|\le\pi/(2a),\\0,&|t|>\pi/(2a)\end{cases}
$$

とする。1. $F(\omega)$、2. $R_f(\tau)$、3. $\mathcal F[R_f](\omega)$ をそれぞれ求めよ。

II. 次の積分を求めよ。I の結果を利用してもよい。

$$
1.\quad\int_{-\infty}^{\infty}\frac{\cos^2(\pi x/2)}{(x^2-1)^2}\,dx,\qquad
2.\quad\int_{-\infty}^{\infty}\frac{\cos^4(\pi x/2)}{(x^2-1)^4}\,dx.
$$

#### 题目描述

设连续函数 $f(t)$ 的 $|f(t)|$ 和 $|f(t)|^2$ 均可积，傅里叶变换约定为

$$
F(\omega)=\mathcal F[f](\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt.
$$

可使用

$$
\int_{-\infty}^{\infty}|F(\omega)|^2\,d\omega=2\pi\int_{-\infty}^{\infty}|f(t)|^2\,dt.
$$

自相关函数定义为 $R_f(\tau)=\int_{-\infty}^{\infty}f(t)f(t-\tau)\,dt$。

I. 当 $a>0$ 且

$$
f(t)=\begin{cases}\cos(at),&|t|\le\pi/(2a),\\0,&|t|>\pi/(2a),\end{cases}
$$

分别求：1. $F(\omega)$；2. $R_f(\tau)$；3. $\mathcal F[R_f](\omega)$。

II. 可利用 I 的结果，计算

$$
1.\quad\int_{-\infty}^{\infty}\frac{\cos^2(\pi x/2)}{(x^2-1)^2}\,dx,\qquad
2.\quad\int_{-\infty}^{\infty}\frac{\cos^4(\pi x/2)}{(x^2-1)^4}\,dx.
$$

## **Kai**

### I.1

積和公式を用いて積分すると、

$$
\begin{aligned}
F(\omega)
&=\frac{\sin((\omega-a)\pi/(2a))}{\omega-a}
+\frac{\sin((\omega+a)\pi/(2a))}{\omega+a}\\
&=\boxed{\frac{2a\cos(\pi\omega/(2a))}{a^2-\omega^2}}.
\end{aligned}
$$

$\omega=\pm a$ では連続延長した値 $\boxed{F(\pm a)=\pi/(2a)}$ を取る。

### I.2

$|\tau|>\pi/a$ では二つの関数の台が重ならず、相関関数は零である。$0\le\tau\le\pi/a$ では

$$
R_f(\tau)=\int_{\tau-\pi/(2a)}^{\pi/(2a)}\cos(at)\cos(a(t-\tau))\,dt.
$$

積和公式と $R_f$ の偶性を用いると、

$$
\boxed{R_f(\tau)=\begin{cases}
\displaystyle\frac{(\pi-a|\tau|)\cos(a\tau)+\sin(a|\tau|)}{2a},&|\tau|\le\pi/a,\\[4pt]
0,&|\tau|>\pi/a.
\end{cases}}
$$

### I.3

積分順序を交換して $u=t-\tau$ とおくと、

$$
\mathcal F[R_f](\omega)=F(\omega)F(-\omega).
$$

本問の $f$ は実数値の偶関数なので、

$$
\boxed{\mathcal F[R_f](\omega)=|F(\omega)|^2
=\frac{4a^2\cos^2(\pi\omega/(2a))}{(a^2-\omega^2)^2}}.
$$

$\omega=\pm a$ では値を $\pi^2/(4a^2)$ とする。

### II.1

$a=1$ とし、Parseval の等式を用いると、

$$
4\int_{-\infty}^{\infty}\frac{\cos^2(\pi x/2)}{(x^2-1)^2}\,dx
=2\pi\int_{-\pi/2}^{\pi/2}\cos^2t\,dt=\pi^2.
$$

よって

$$
\boxed{\int_{-\infty}^{\infty}\frac{\cos^2(\pi x/2)}{(x^2-1)^2}\,dx=\frac{\pi^2}{4}}.
$$

### II.2

$a=1$ の $R_f$ に再び Parseval の等式を適用すると、

$$
16\int_{-\infty}^{\infty}\frac{\cos^4(\pi x/2)}{(x^2-1)^4}\,dx
=2\pi\int_{-\infty}^{\infty}R_f(\tau)^2\,d\tau.
$$

I.2 より、

$$
\begin{aligned}
\int_{-\infty}^{\infty}R_f(\tau)^2\,d\tau
&=\frac12\int_0^\pi[(\pi-\tau)\cos\tau+\sin\tau]^2\,d\tau\\
&=\frac{\pi(15+2\pi^2)}{24}.
\end{aligned}
$$

したがって

$$
\boxed{\int_{-\infty}^{\infty}\frac{\cos^4(\pi x/2)}{(x^2-1)^4}\,dx
=\frac{\pi^2(15+2\pi^2)}{192}}.
$$

