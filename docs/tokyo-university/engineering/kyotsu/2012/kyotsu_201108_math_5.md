---
sidebar_label: '2011年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 東京大学 工学系研究科 2011年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

フーリエ変換と逆変換を

$$
F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-i\omega x}\,dx,
\qquad f(x)=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty F(\omega)e^{i\omega x}\,d\omega
$$

と定義する。$g(x)=1-|x|/d$（$|x|\le d$）、$g(x)=0$（$|x|>d$）とし、$0<d<a/2$、$N$ は正の整数とする。

I. 次の各 $f$ の変換 $F$ を求めよ。
(1) $f(x)=g(x)$。
(2) $f(x)=g(x-a)+g(x)+g(x+a)$。
(3) $f(x)=\sum_{n=-N}^Ng(x-na)$。

II. I(3) の場合に $\int_{-\infty}^\infty|F(\omega)|^2\,d\omega$ を求めよ。

#### 题目描述

采用对称归一化的 Fourier 变换

$$
F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-i\omega x}\,dx,
\qquad f(x)=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty F(\omega)e^{i\omega x}\,d\omega.
$$

令 $g(x)=1-|x|/d$（$|x|\le d$），其他处为 $0$，其中 $0<d<a/2$，$N$ 为正整数。

I. 分别求下列函数的 $F(\omega)$：(1) $f(x)=g(x)$；(2) $f(x)=g(x-a)+g(x)+g(x+a)$；
(3) $f(x)=\sum_{n=-N}^N g(x-na)$。

II. 对 I(3) 的函数，求 $\int_{-\infty}^\infty|F(\omega)|^2\,d\omega$。

## **Kai**

### I

#### 1

偶関数であることを用いて部分積分すると、

$$
G(\omega)=\frac2{\sqrt{2\pi}}\int_0^d(1-x/d)\cos\omega x\,dx
=\boxed{\frac{2(1-\cos\omega d)}{\sqrt{2\pi}\,d\omega^2}}\quad(\omega\ne0).
$$

$\omega=0$ では連続延長して $\boxed{G(0)=d/\sqrt{2\pi}}$ とする。

#### 2–3

平行移動した関数 $g(x-na)$ の変換は $e^{-ina\omega}G(\omega)$ だから、

$$
\boxed{F_2(\omega)=(1+2\cos a\omega)G(\omega)},
$$

$$
\boxed{F_3(\omega)=G(\omega)\sum_{n=-N}^Ne^{-ina\omega}
=G(\omega)\frac{\sin((N+1/2)a\omega)}{\sin(a\omega/2)}}.
$$

最後の比は $a\omega\in2\pi\mathbb Z$ では連続値 $2N+1$ とする。

### II

$2d<a$ により三角波の台は互いに交わらない。Parseval の等式から、

$$
\int_{-\infty}^\infty|F_3(\omega)|^2\,d\omega
=\int_{-\infty}^\infty|f(x)|^2\,dx
=(2N+1)\,2\int_0^d(1-x/d)^2\,dx
=\boxed{\frac{2d(2N+1)}3}.
$$

