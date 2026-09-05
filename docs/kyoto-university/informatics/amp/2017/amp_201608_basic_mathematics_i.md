---
sidebar_label: "2016年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2016年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h29_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)

$a > 0$を実数として、半無限区間 $[0, \infty)$ 上で定義された関数 $f(x) = e^x - ax^2$ を考える。 $f(x)$ が狭義単調増加であるとき、以下の問いに答えよ。

(i) $f(x)$ は狭義単調増加である。定数 $a$ が取り得る値の範囲を求めよ。

(ii) 関数 $y = f(x)$ の逆関数を $f^{-1}(y)$ とする。定積分 $F(a) = \int_1^{f(a)} f^{-1}(y) dy$ の値を求めよ。

(iii) $b$ を実数として, $F(a) = b$ を満たす定数 $a$ が (i) で求めた範囲にただ一つ存在するものとする。ただし、 $F(a)$ は (ii) で求めたものである。定数 $b$ の値の範囲を求めよ。

### 题目描述

设 $a>0$，在半无限区间 $[0,\infty)$ 上定义

$$
f(x)=e^x-ax^2.
$$

围绕 $f$ 严格单调递增的情形，完成以下各问：

1. 求使 $f$ 在 $[0,\infty)$ 上严格单调递增的常数 $a$ 的取值范围。
2. 记 $y=f(x)$ 的反函数为 $f^{-1}(y)$。计算

   $$
   F(a)=\int_1^{f(a)}f^{-1}(y)\,dy.
   $$

3. 设 $b\in\mathbb R$，并要求方程

   $$
   F(a)=b
   $$

   在第 1 问所得的 $a$ 的取值范围内恰有一个解。这里 $F$ 为第 2 问求得的函数。求 $b$ 的取值范围。

## **Kai**

### (i)

導関数は

$$
f'(x)=e^x-2ax
$$

である。 $x>0$ に対して

$$
g(x)=\frac{e^x}{x}
$$

とおくと、

$$
g'(x)=\frac{e^x(x-1)}{x^2}
$$

なので、 $g$ は $x=1$ で最小値 $e$ をとる。したがって $f'(x)\geq 0$ がすべての $x\geq 0$ で成り立つ条件は $2a\leq e$ である。

$0<a<e/2$ ならば $f'(x)>0$ である。 $a=e/2$ のときも $f'(x)\geq 0$ で、等号となるのは $x=1$ だけである。任意の $0\leq x_1<x_2$ に対して区間内の一点を除けば $f'(x)>0$ なので、

$$
f(x_2)-f(x_1)=\int_{x_1}^{x_2}f'(x)\,dx>0
$$

である。よって、この端点でも $f$ は狭義単調増加である。以上より、

$$
\boxed{0<a\leq\frac{e}{2}}
$$

となる。

### (ii)

固定した $a$ に対して $y=f(x)$ と変数変換する。 $f(0)=1$ であり、(i) により $f$ は狭義単調増加なので $f^{-1}(1)=0$ である。したがって

$$
\begin{aligned}
F(a)
&=\int_0^a xf'(x)\,dx\\
&=[xf(x)]_0^a-\int_0^a f(x)\,dx\\
&=a(e^a-a^3)
-\int_0^a(e^x-ax^2)\,dx\\
&=ae^a-a^4-\left(e^a-\frac{a^4}{3}-1\right)
\end{aligned}
$$

となる。よって

$$
\boxed{F(a)=(a-1)e^a-\frac{2}{3}a^4+1}
$$

である。

### (iii)

ここでは $f$ 自体もパラメータ $a$ に依存するため、 $F$ の導関数は (ii) の最終式から計算する。すると

$$
F'(a)=ae^a-\frac{8}{3}a^3
=a\left(e^a-\frac{8}{3}a^2\right)
$$

である。

$$
H(a)=\frac{e^a}{a^2}
$$

とおくと、 $0<a<2$ では

$$
H'(a)=\frac{e^a(a-2)}{a^3}<0
$$

である。また、

$$
\lim_{a\downarrow0}H(a)=+\infty,
\qquad
H\left(\frac e2\right)<\frac83
$$

なので、区間 $(0,e/2)$ に

$$
e^\alpha=\frac83\alpha^2
$$

を満たす $\alpha$ がただ一つ存在する。 $F$ は $(0,\alpha)$ で狭義単調増加し、 $(\alpha,e/2]$ で狭義単調減少する。

端点側の値を

$$
B_0=F\left(\frac e2\right)
=\left(\frac e2-1\right)e^{e/2}-\frac{e^4}{24}+1
$$

とおき、最大値を

$$
B_{\max}=F(\alpha)
=(\alpha-1)e^\alpha-\frac23\alpha^4+1
$$

とおく。 $F(0)=0$ であり、増加枝の値域は $(0,B_{\max}]$ 、減少枝の値域は $[B_0,B_{\max}]$ である。したがって $0<a\leq e/2$ において $F(a)=b$ がただ一つの解をもつのは、

$$
\boxed{0<b<B_0\quad\text{または}\quad b=B_{\max}}
$$

の場合である。
