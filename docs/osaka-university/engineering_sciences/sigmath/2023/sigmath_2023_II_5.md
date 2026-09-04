---
sidebar_label: "2023年度 数理科学 II [5]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
  - Mathematics.Functional-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X=C([0,1],\mathbb R)$、$d(f,g)=\max_{0\le x\le1}|f(x)-g(x)|$ とする。

$$
F(f)(x)=\int_0^x\{sf(s)+1\}\,ds,\quad f_0=0,\quad f_n=F(f_{n-1}),\quad
h(x)=\sum_{k=1}^\infty\frac{x^{2k-1}}{(2k-1)!!}
$$

と定める。ただし $F:X\to X$、$x\in[0,1]$、$n\in\mathbb N$ である。ここで $(2k-1)!!=(2k-1)(2k-3)\cdots3\cdot1$。

(1) $d(F(f),F(g))\le d(f,g)/2$ を示せ。

(2) 帰納法で $f_n(x)=\sum_{k=1}^nx^{2k-1}/(2k-1)!!$ を示せ。

(3) $h$ は各点で絶対収束し、$\sup_{0\le x\le1}|f_n(x)-h(x)|\le1/(2^{n-1}n!)$ を示せ。

(4) $h\in X$、$h=F(h)$ を示せ。

(5) $h(x)=e^{x^2/2}\int_0^xe^{-s^2/2}\,ds$ を示せ。

## **Kai**

### (1)

$$
|F(f)(x)-F(g)(x)|\le\int_0^xs\,d(f,g)\,ds
=\frac{x^2}2d(f,g)\le\frac12d(f,g).
$$

上限をとればよい。

### (2)
$f_1(x)=x$。$n-1$ で成立するとき

$$
F(f_{n-1})(x)=x+\sum_{k=1}^{n-1}\frac{x^{2k+1}}{(2k+1)(2k-1)!!}
=\sum_{k=1}^n\frac{x^{2k-1}}{(2k-1)!!}.
$$

よって帰納法で成立する。

### (3)
$(2k-1)!!\ge2^{k-1}(k-1)!$ なので、絶対値の級数は $\sum_{j\ge0}1/(2^jj!)$ で支配される。さらに

$$
\sup_x|h(x)-f_n(x)|\le\sum_{j=n}^\infty\frac1{2^jj!}
\le\frac1{2^nn!}\sum_{\ell=0}^\infty2^{-\ell}=\frac1{2^{n-1}n!}.
$$

### (4)
(3) より連続関数列 $f_n$ は $h$ に一様収束するので $h\in X$。(1) より

$$
d(F(h),h)\le\frac12d(h,f_n)+d(f_{n+1},h)\longrightarrow0.
$$

ゆえに $F(h)=h$。

### (5)
(4) と微積分の基本定理より $h'=xh+1,h(0)=0$。したがって

$$
(e^{-x^2/2}h(x))'=e^{-x^2/2}.
$$

$0$ から $x$ まで積分して所定の表示を得る。
