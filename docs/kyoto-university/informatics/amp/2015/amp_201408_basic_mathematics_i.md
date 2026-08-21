---
sidebar_label: "2014年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

指数関数 $E(t, x) = e^{2xt-t^2}$ の展開

$$
E(t, x) = \sum_{n=0}^{\infty} f_n(x) \frac{t^n}{n!}
$$

を用いて関数 $f_n(x) (n = 0, 1, 2, ...)$ を定める. 以下の問いに答えよ.

(i) 関数 $f_n(x) (n = 0, 1, 2, ...)$ は

$$
\frac{d f_{n+1}(x)}{dx} = 2(n+1)f_n(x)
$$

を満たすことを示せ.

(ii) 関数 $f_n(x) (n = 0, 1, 2, ...)$ は

$$
f_{n+2}(x) = 2xf_{n+1}(x) - 2(n+1)f_n(x)
$$

を満たすことを示せ.

(iii) 関数 $f_n(x) (n = 0, 1, 2, ...)$ は

$$
\frac{d}{dx} \left( e^{-x^2} \frac{d}{dx} f_n(x) \right) = -2ne^{-x^2}f_n(x)
$$

を満たすことを示せ.

(iv) 関数 $f_n(x) (n = 0, 1, 2, ...)$ について等式

$$
\int_{-\infty}^{\infty} e^{-x^2} f_n(x)^2 dx = 2^n n! \sqrt{\pi}
$$

を示せ. ただし, $\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$ を用いてよい.

### 题目描述

通过指数生成函数

$$
E(t,x)=e^{2xt-t^2}
=\sum_{n=0}^{\infty}f_n(x)\frac{t^n}{n!}
$$

定义函数 $f_n(x)\ (n=0,1,2,\ldots)$。完成以下各问：

1. 证明

   $$
   \frac{d f_{n+1}(x)}{dx}=2(n+1)f_n(x).
   $$

2. 证明三项递推关系

   $$
   f_{n+2}(x)
   =2xf_{n+1}(x)-2(n+1)f_n(x).
   $$

3. 证明

   $$
   \frac{d}{dx}\left(e^{-x^2}\frac{d}{dx}f_n(x)\right)
   =-2n e^{-x^2}f_n(x).
   $$
4. 证明

   $$
   \int_{-\infty}^{\infty}e^{-x^2}f_n(x)^2\,dx
   =2^n n!\sqrt{\pi}.
   $$

   可以使用

   $$
   \int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}.
   $$

## **Kai**

### (i) 導関数の関係式

生成関数を $x$ で微分すると、

$$
\frac{\partial E}{\partial x}
=2tE(t,x)
=\sum_{n=0}^{\infty}2f_n(x)\frac{t^{n+1}}{n!}.
$$

一方、級数を項別微分すれば

$$
\frac{\partial E}{\partial x}
=\sum_{n=0}^{\infty}f_n'(x)\frac{t^n}{n!}.
$$

$t^{n+1}$ の係数を比較すると

$$
\frac{f_{n+1}'(x)}{(n+1)!}
=\frac{2f_n(x)}{n!}
$$

であるから、

$$
f_{n+1}'(x)=2(n+1)f_n(x).
$$

### (ii) 三項間漸化式

生成関数を $t$ で微分すると、

$$
\begin{aligned}
\frac{\partial E}{\partial t}
&=(2x-2t)E(t,x),\\
\sum_{n=0}^{\infty}f_{n+1}(x)\frac{t^n}{n!}
&=2x\sum_{n=0}^{\infty}f_n(x)\frac{t^n}{n!}
-2t\sum_{n=0}^{\infty}f_n(x)\frac{t^n}{n!}.
\end{aligned}
$$

$t^{n+1}$ の係数を比較すると、

$$
f_{n+2}(x)
=2xf_{n+1}(x)-2(n+1)f_n(x).
$$

### (iii) 微分方程式

(i) と (ii) から

$$
f_n''(x)-2xf_n'(x)+2nf_n(x)=0
$$

が得られる。実際、 $f_n'=2nf_{n-1}$ 、 $f_n''=4n(n-1)f_{n-2}$ を (ii) の漸化式に代入すればよい。

したがって、

$$
\begin{aligned}
\frac{d}{dx}\left(e^{-x^2}f_n'(x)\right)
&=e^{-x^2}\left(f_n''(x)-2xf_n'(x)\right)\\
&=-2ne^{-x^2}f_n(x).
\end{aligned}
$$

### (iv) 重み付き二乗積分

二つの生成関数を使うと、平方完成により

$$
\begin{aligned}
&\int_{-\infty}^{\infty}
e^{-x^2}E(t,x)E(s,x)\,dx\\
&\quad=
\int_{-\infty}^{\infty}
e^{-x^2+2x(t+s)-t^2-s^2}\,dx\\
&\quad=
e^{2ts}
\int_{-\infty}^{\infty}e^{-(x-t-s)^2}\,dx\\
&\quad=
\sqrt{\pi}\,e^{2ts}
=\sqrt{\pi}\sum_{n=0}^{\infty}\frac{2^nt^ns^n}{n!}.
\end{aligned}
$$

他方、左辺で生成関数を展開したときの $t^ns^n$ の係数は

$$
\frac{1}{(n!)^2}
\int_{-\infty}^{\infty}e^{-x^2}f_n(x)^2\,dx
$$

である。係数比較により

$$
\frac{1}{(n!)^2}
\int_{-\infty}^{\infty}e^{-x^2}f_n(x)^2\,dx
=\frac{2^n\sqrt{\pi}}{n!},
$$

したがって

$$
\int_{-\infty}^{\infty}e^{-x^2}f_n(x)^2\,dx
=2^nn!\sqrt{\pi}.
$$
