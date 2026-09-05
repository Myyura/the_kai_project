---
sidebar_label: "2012年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2012年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数 $f(x) = e^{-x^2}$ は $(-\infty, \infty)$ において積分可能である. 級数 $\sum_{k=-\infty}^{\infty} f(x+2k\pi)$ が区間 $(-\infty, \infty)$ で一様収束することに注意して、周期関数 $F(x)$ を

$$
F(x) = \sum_{k=-\infty}^{\infty} f(x + 2k\pi)
$$

で定める. 以下の問いに答えよ.

(i) 積分

$$
\int_{-\pi}^{\pi} F(x) dx
$$

を求めよ.

(ii) $|x| \geq \pi$ において, 不等式

$$
f(x) \leq e^{-\pi|x|} \qquad (*)
$$

が成り立つことを示せ.

(iii) $|x| \leq \pi$ とする. 不等式(*) を用いて

$$
|F(x) - f(x)| < \frac{2e^{-\pi^2}}{1 - e^{-2\pi^2}}
$$

が成り立つことを示せ.

### 题目描述

函数 $f(x)=e^{-x^2}$ 在 $(-\infty,\infty)$ 上可积。注意到级数

$$
\sum_{k=-\infty}^{\infty}f(x+2k\pi)
$$

在整个实轴上一致收敛，据此定义周期函数

$$
F(x)=\sum_{k=-\infty}^{\infty}f(x+2k\pi).
$$

完成以下各问：

1. 计算

   $$
   \int_{-\pi}^{\pi}F(x)\,dx.
   $$

2. 证明当 $|x|\geq\pi$ 时，

   $$
   f(x)\leq e^{-\pi|x|}.\tag{*}
   $$

3. 设 $|x|\leq\pi$。利用不等式 $(*)$ 证明

   $$
   |F(x)-f(x)|
   <\frac{2e^{-\pi^2}}{1-e^{-2\pi^2}}.
   $$

## **Kai**

実軸全体での一様収束は成立しない。対称部分和 $F_N(x)=\sum_{|k|\le N}f(x+2k\pi)$ に対し $x=-2(N+1)\pi$ と取ると、省いた $k=N+1$ の項が1なので $F(x)-F_N(x)\ge1$ となる。一様収束が成り立つのは各有界区間上であり、本問の積分区間 $[-\pi,\pi]$ では十分である。

### (i)

各項が非負なので Tonelli の定理により和と積分を交換できる。また $|x|\le\pi$ では $f(x+2k\pi)\le e^{-(2|k|-1)^2\pi^2}$（$k\ne0$）であり、右辺の和が収束するため、この区間上の一様収束からも項別積分を正当化できる。各項で $u=x+2k\pi$ と変数変換すると、

$$
\begin{aligned}
\int_{-\pi}^{\pi}F(x)\,dx
&=\sum_{k=-\infty}^{\infty}
  \int_{-\pi}^{\pi}f(x+2k\pi)\,dx\\
&=\sum_{k=-\infty}^{\infty}
  \int_{(2k-1)\pi}^{(2k+1)\pi}f(u)\,du\\
&=\int_{-\infty}^{\infty}e^{-u^2}\,du\\
&=\boxed{\sqrt{\pi}}
\end{aligned}
$$

となる。

### (ii)

$|x|\geq\pi$ ならば、

$$
x^2=|x|^2\geq\pi|x|
$$

である。したがって $-x^2\leq-\pi|x|$ であり、指数関数の単調性から

$$
\boxed{f(x)=e^{-x^2}\leq e^{-\pi|x|}}
$$

を得る。

### (iii)

$|x|\leq\pi$ とする。各 $k\geq 1$ に対して

$$
|x\pm2k\pi|
\geq 2k\pi-|x|
\geq(2k-1)\pi
\geq\pi
$$

なので、(ii) を適用できる。すべての項は非負だから、

$$
\begin{aligned}
|F(x)-f(x)|
&=\sum_{k=1}^{\infty}
  \bigl(f(x+2k\pi)+f(x-2k\pi)\bigr)\\
&\leq
2\sum_{k=1}^{\infty}e^{-(2k-1)\pi^2}\\
&=\frac{2e^{-\pi^2}}{1-e^{-2\pi^2}}
\end{aligned}
$$

となる。 $|x|<\pi$ では上の項別評価がすべて狭義であり、 $x=\pm\pi$ でも等号となり得るのは一つの項だけで、ほかの項では狭義不等号となる。よって全体として

$$
\boxed{
|F(x)-f(x)|
<
\frac{2e^{-\pi^2}}{1-e^{-2\pi^2}}}
$$

が成り立つ。
