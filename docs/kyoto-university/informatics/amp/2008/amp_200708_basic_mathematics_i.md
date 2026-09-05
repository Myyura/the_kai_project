---
sidebar_label: "2007年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2007年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h20/h20_kiso1.pdf)

$a_k \ge 0, k = 0, 1, \dots, n$ とし，多項式 $P(z)$ を

$$
P(z) = \sum_{k=0}^n a_k z^k, \quad z \in \mathbb{C}
$$

で定義する。また， $z = x + iy$ により， $\mathbb{C}$ と $\mathbb{R}^2$ とを同一視する。 $\mathbb{C}$ 内の半円 $C_1, C_2$ をそれぞれ次のように定義する。

$$
C_1: z = e^{i\theta}, 0 \le \theta \le \pi, \quad C_2: z = e^{i\theta}, \pi \le \theta \le 2\pi
$$

ただし， $C_1, C_2$ の向きはともに反時計回りとする。 $P(z)^2$ に対し，関数論におけるコーシーの積分定理を用いると，以下の等式が導かれる。

$$
2 \int_{-1}^1 P(x)^2 dx = - \int_{C_1} P(z)^2 dz + \int_{C_2} P(z)^2 dz
$$

また，区間 $[0, 1]$ 上の実数値連続関数 $f, g$ に対して，シュワルツの不等式

$$
\int_0^1 f(x)g(x)dx \le \left( \int_0^1 f(x)^2 dx \right)^{1/2} \left( \int_0^1 g(x)^2 dx \right)^{1/2}
$$

の成り立つことは既知とする。以下の各問に答えよ。

(i) 次の等式を示せ。

$$
\int_0^{2\pi} \left| P(e^{i\theta}) \right|^2 d\theta = 2\pi \sum_{k=0}^n a_k^2
$$

(ii) 次の不等式を証明せよ。

$$
\int_{-1}^1 P(x)^2 dx \le \pi \sum_{k=0}^n a_k^2
$$

(iii) 以下の不等式が成り立つことを示せ。

$$
P(1)^2 - P(0)^2 \le 2 \left( \int_0^1 P'(x)^2 dx \right)^{1/2} \left( \int_0^1 P(x)^2 dx \right)^{1/2}
$$

(iv) $a_0 = 0$ として，次の不等式を証明せよ。

$$
\left( \sum_{k=1}^n a_k \right)^4 \le 4\pi^2 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n k^2 a_k^2 \right)
$$

(v) $[0, 1]$ 上の実数値連続関数 $f(x)$ に対し，次の不等式が成り立つことを示せ。

$$
\left( \int_0^1 |f(x)| dx \right)^4 \le 4\pi^2 \left( \int_0^1 (f(x))^2 dx \right) \left( \int_0^1 x^2 (f(x))^2 dx \right)
$$

### 题目描述

设 $a_k\geq 0\ (k=0,1,\ldots,n)$，并在复平面上定义

$$
P(z)=\sum_{k=0}^{n}a_kz^k,\qquad z\in\mathbb C.
$$

通过 $z=x+iy$ 将 $\mathbb C$ 与 $\mathbb R^2$ 视为同一平面。令单位圆的上、下半圆分别为

$$
C_1:\ z=e^{i\theta}\ (0\leq\theta\leq\pi),\qquad
C_2:\ z=e^{i\theta}\ (\pi\leq\theta\leq2\pi),
$$

两条曲线均按逆时针方向定向。对 $P(z)^2$ 使用柯西积分定理可得到

$$
2\int_{-1}^{1}P(x)^2\,dx
=-\int_{C_1}P(z)^2\,dz+\int_{C_2}P(z)^2\,dz.
$$

另可直接使用区间 $[0,1]$ 上实值连续函数的施瓦茨不等式

$$
\int_0^1 f(x)g(x)\,dx
\leq
\left(\int_0^1f(x)^2\,dx\right)^{1/2}
\left(\int_0^1g(x)^2\,dx\right)^{1/2}.
$$

完成以下各问：

1. 证明

   $$
   \int_0^{2\pi}\left|P(e^{i\theta})\right|^2\,d\theta
   =2\pi\sum_{k=0}^{n}a_k^2.
   $$

2. 证明

   $$
   \int_{-1}^{1}P(x)^2\,dx\leq\pi\sum_{k=0}^{n}a_k^2.
   $$

3. 证明

   $$
   P(1)^2-P(0)^2
   \leq
   2\left(\int_0^1P'(x)^2\,dx\right)^{1/2}
   \left(\int_0^1P(x)^2\,dx\right)^{1/2}.
   $$

4. 在 $a_0=0$ 时证明

   $$
   \left(\sum_{k=1}^{n}a_k\right)^4
   \leq
   4\pi^2\left(\sum_{k=1}^{n}a_k^2\right)
   \left(\sum_{k=1}^{n}k^2a_k^2\right).
   $$

5. 对任意定义在 $[0,1]$ 上的实值连续函数 $f$，证明

   $$
   \left(\int_0^1|f(x)|\,dx\right)^4
   \leq
   4\pi^2\left(\int_0^1f(x)^2\,dx\right)
   \left(\int_0^1x^2f(x)^2\,dx\right).
   $$

## **Kai**

### (i)

係数 $a_k$ は実数なので、

$$
\begin{aligned}
\left|P(e^{i\theta})\right|^2
&=P(e^{i\theta})\overline{P(e^{i\theta})}\\
&=\left(\sum_{k=0}^n a_ke^{ik\theta}\right)
  \left(\sum_{j=0}^n a_je^{-ij\theta}\right)\\
&=\sum_{k=0}^n\sum_{j=0}^n a_ka_je^{i(k-j)\theta}
\end{aligned}
$$

である。複素指数関数の直交性

$$
\int_0^{2\pi}e^{i(k-j)\theta}\,d\theta
=
\begin{cases}
2\pi & (k=j),\\
0 & (k\neq j)
\end{cases}
$$

を用いると、

$$
\boxed{\int_0^{2\pi}\left|P(e^{i\theta})\right|^2\,d\theta
=2\pi\sum_{k=0}^n a_k^2}
$$

を得る。

### (ii)

$C_1$ と実軸上の線分を合わせた上半円、および $C_2$ と同じ線分を合わせた下半円にコーシーの積分定理を適用する。向きに注意すると、

$$
\int_{C_1}P(z)^2\,dz=-\int_{-1}^1P(x)^2\,dx,
\qquad
\int_{C_2}P(z)^2\,dz=\int_{-1}^1P(x)^2\,dx
$$

である。したがって

$$
2\int_{-1}^1P(x)^2\,dx
=-\int_{C_1}P(z)^2\,dz+\int_{C_2}P(z)^2\,dz
$$

となる。両辺を絶対値で評価し、(i) を使えば、

$$
\begin{aligned}
2\int_{-1}^1P(x)^2\,dx
&\leq \int_{C_1}|P(z)|^2\,|dz|
    +\int_{C_2}|P(z)|^2\,|dz|\\
&=\int_0^{2\pi}|P(e^{i\theta})|^2\,d\theta\\
&=2\pi\sum_{k=0}^n a_k^2
\end{aligned}
$$

である。よって

$$
\boxed{\int_{-1}^1P(x)^2\,dx
\leq \pi\sum_{k=0}^n a_k^2}
$$

が示された。

### (iii)

微積分学の基本定理より、

$$
P(1)^2-P(0)^2
=\int_0^1\frac{d}{dx}\bigl(P(x)^2\bigr)\,dx
=2\int_0^1P(x)P'(x)\,dx
$$

である。シュワルツの不等式を適用すると、

$$
|P(1)^2-P(0)^2|
\leq
2\left(\int_0^1P(x)^2\,dx\right)^{1/2}
\left(\int_0^1P'(x)^2\,dx\right)^{1/2}
$$

となる。左辺の絶対値を外せば、題意の不等式を得る。

### (iv)

$a_0=0$ ならば、

$$
P(0)=0,\qquad P(1)=\sum_{k=1}^n a_k
$$

である。(iii) の不等式を二乗すると、

$$
\left(\sum_{k=1}^n a_k\right)^4
\leq
4\left(\int_0^1P(x)^2\,dx\right)
 \left(\int_0^1P'(x)^2\,dx\right)
$$

を得る。また、 $P$ と

$$
P'(x)=\sum_{k=1}^n ka_kx^{k-1}
$$

はともに非負の係数をもつので、(ii) をそれぞれに適用できる。したがって

$$
\int_0^1P(x)^2\,dx
\leq \pi\sum_{k=1}^n a_k^2
$$

および

$$
\int_0^1P'(x)^2\,dx
\leq \pi\sum_{k=1}^n k^2a_k^2
$$

である。以上より、

$$
\boxed{
\left(\sum_{k=1}^n a_k\right)^4
\leq
4\pi^2
\left(\sum_{k=1}^n a_k^2\right)
\left(\sum_{k=1}^n k^2a_k^2\right)}
$$

が得られる。

### (v)

各 $n$ と $k=1,\ldots,n$ に対して

$$
a_{k,n}=\frac{1}{n}\left|f\left(\frac{k}{n}\right)\right|
$$

とおく。これらは非負なので、(iv) より

$$
\left(\frac1n\sum_{k=1}^n
\left|f\left(\frac{k}{n}\right)\right|\right)^4
\leq
4\pi^2
\left(\frac1n\sum_{k=1}^n
f\left(\frac{k}{n}\right)^2\right)
\left(\frac1n\sum_{k=1}^n
\left(\frac{k}{n}\right)^2
f\left(\frac{k}{n}\right)^2\right)
$$

となる。実際、右辺の二つの和は、(iv) の
$\sum a_{k,n}^2$ と $\sum k^2a_{k,n}^2$ の積を書き直したものである。

$f$ は連続であるから、 $n\to\infty$ として各和のリーマン和極限をとれる。よって

$$
\boxed{
\left(\int_0^1|f(x)|\,dx\right)^4
\leq
4\pi^2
\left(\int_0^1f(x)^2\,dx\right)
\left(\int_0^1x^2f(x)^2\,dx\right)}
$$

が示された。
