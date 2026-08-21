---
sidebar_label: "2019年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

nを正の整数とする。実数 $\beta_{k,n}$ および $n$ 次多項式

$$
b_{k,n}(x) = \frac{n!}{k!(n-k)!}x^k(1-x)^{n-k}, \quad k \in \{0, 1, 2, ..., n\}
$$

を用いて、高々 $n$ 次の多項式 $f_n(x)$ を

$$
f_n(x) = \sum_{k=0}^n \beta_{k,n}b_{k,n}(x)
$$

によって定める。このとき、以下の問いに答えよ。

(i) 次の恒等式が成り立つことを示せ。

(a)

$$
\sum_{k=0}^n b_{k,n}(x) = 1
$$

(b)

$$
\sum_{k=0}^n k b_{k,n}(x) = nx
$$

(c)

$$
\sum_{k=0}^n (k - nx)^2 b_{k,n}(x) = nx(1-x)
$$

(ii) $\delta > 0$ および $x \in (0, 1)$ に対して、

$$
\sum_{\left| \frac{k}{n} - x \right| \geq \delta} b_{k,n}(x) \leq \frac{1}{4n\delta^2}
$$

が成り立つことを示せ。ここで和の記号は、 $\left| \frac{k}{n} - x \right| \geq \delta$ を満たす全ての $k$ に対する和を表す。

(iii) $f$ を区間 $(0, 1)$ 上の連続な実数値有界関数とし、 $\beta_{k,n} = f(\frac{k}{n})$ によって多項式列 $\{f_n(x)\}_{n=0}^\infty$ を定義する。このとき、任意の $\varepsilon > 0$ に対して、ある正の整数 $N$ で

$$
|f(x) - f_n(x)| < \varepsilon \quad (n \geq N, x \in (0, 1))
$$

を満たすものが存在することを示せ。

### 题目描述

设 $n$ 为正整数。对 $k\in\{0,1,\ldots,n\}$，用实数
$\beta_{k,n}$ 和 $n$ 次多项式

$$
b_{k,n}(x)
=
\frac{n!}{k!(n-k)!}
x^k(1-x)^{n-k}
$$

定义次数不超过 $n$ 的多项式

$$
f_n(x)
=
\sum_{k=0}^n
\beta_{k,n}b_{k,n}(x).
$$

回答下列问题。

1. 证明以下恒等式：

   1. 证明：

$$
\sum_{k=0}^n b_{k,n}(x)=1;
$$

   2. 证明：

$$
\sum_{k=0}^n k\,b_{k,n}(x)=nx;
$$

   3. 证明：

$$
\sum_{k=0}^n
(k-nx)^2b_{k,n}(x)
=nx(1-x).
$$

2. 对任意 $\delta>0$ 和 $x\in(0,1)$，证明

$$
\sum_{\left|\frac{k}{n}-x\right|\geq\delta}
b_{k,n}(x)
\leq
\frac{1}{4n\delta^2},
$$

其中求和遍历所有满足
$\left|\frac{k}{n}-x\right|\geq\delta$ 的
$k\in\{0,\ldots,n\}$。

3. 现有题面设 $f$ 是开区间 $(0,1)$ 上连续、有界的实值函数，并令

$$
\beta_{k,n}
=f\!\left(\frac{k}{n}\right)
$$

来定义多项式序列 $\{f_n\}_{n=0}^{\infty}$；随后要求证明：对每个
$\varepsilon>0$，存在正整数 $N$，使

$$
|f(x)-f_n(x)|<\varepsilon
\qquad
(n\geq N,\ x\in(0,1)).
$$

该小问题按现有文字有缺失：$f$ 未在端点定义，因而
$\beta_{0,n}=f(0)$ 和 $\beta_{n,n}=f(1)$ 无法定义；而且仅在
$(0,1)$ 上连续且有界并不足以保证一致逼近。Kai 明确指出，通常的 Bernstein 逼近定理需要把假设改为“$f$ 在
$[0,1]$ 上连续”；除此之外，现有材料不能唯一恢复其他题面条件。

## **Kai**

### (i) 三つの恒等式

### (a)

二項定理から

$$
\sum_{k=0}^{n}b_{k,n}(x)
=\sum_{k=0}^{n}\binom{n}{k}x^k(1-x)^{n-k}
=(x+1-x)^n
=1.
$$

### (b)

$k\binom{n}{k}=n\binom{n-1}{k-1}$ を用いると、

$$
\begin{aligned}
\sum_{k=0}^{n}k\,b_{k,n}(x)
&=nx\sum_{k=1}^{n}
\binom{n-1}{k-1}x^{k-1}(1-x)^{n-k}\\
&=nx.
\end{aligned}
$$

### (c)

同様に、 $k(k-1)\binom{n}{k}=n(n-1)\binom{n-2}{k-2}$ より

$$
\sum_{k=0}^{n}k(k-1)b_{k,n}(x)
=n(n-1)x^2.
$$

したがって

$$
\begin{aligned}
\sum_{k=0}^{n}k^2b_{k,n}(x)
&=n(n-1)x^2+nx,\\
\sum_{k=0}^{n}(k-nx)^2b_{k,n}(x)
&=\sum_{k=0}^{n}k^2b_{k,n}(x)-n^2x^2\\
&=nx(1-x).
\end{aligned}
$$

### (ii) 集中不等式

和の条件を満たす $k$ に対して $(k-nx)^2\geq n^2\delta^2$ である。(i)(c) を使うと、

$$
\begin{aligned}
n^2\delta^2
\sum_{\left|\frac{k}{n}-x\right|\geq\delta}
b_{k,n}(x)
&\leq
\sum_{\left|\frac{k}{n}-x\right|\geq\delta}
(k-nx)^2b_{k,n}(x)\\
&\leq nx(1-x)\\
&\leq \frac{n}{4}.
\end{aligned}
$$

よって

$$
\sum_{\left|\frac{k}{n}-x\right|\geq\delta}
b_{k,n}(x)
\leq \frac{1}{4n\delta^2}.
$$

### (iii) 問題文の仮定について

この設問は、問題文のままでは成立しない。 $f$ は $(0,1)$ 上でしか定義されていないため、まず $\beta_{0,n}=f(0)$ と $\beta_{n,n}=f(1)$ が定義できない。また、 $(0,1)$ 上で連続かつ有界であっても一様連続とは限らない。たとえば

$$
f(x)=\sin\frac{1}{x}
$$

は $(0,1)$ 上で連続かつ有界だが、 $x=0$ へ連続に延長できない。この関数を $(0,1)$ 上で多項式により一様近似することもできない。実際、多項式は $(0,1)$ 上で一様連続であり、その一様極限も一様連続であるのに、上の $f$ は一様連続でない。

たとえば

$$
x_m=\frac{1}{\frac{\pi}{2}+2\pi m},
\qquad
y_m=\frac{1}{\frac{3\pi}{2}+2\pi m}
$$

とおけば、 $|x_m-y_m|\to 0$ である一方、 $f(x_m)=1$ 、 $f(y_m)=-1$ である。

したがって、通常のベルンシュタイン近似定理として証明するには、仮定を「 $f$ は $[0,1]$ 上の連続関数」と直す必要がある。この修正された仮定のもとで、以下のように示せる。

$f$ は $[0,1]$ 上で一様連続かつ有界である。 $|f(x)|\leq M$ とし、任意の $\varepsilon>0$ に対して

$$
|x-y|<\delta
\quad\Longrightarrow\quad
|f(x)-f(y)|<\frac{\varepsilon}{2}
$$

となる $\delta>0$ を選ぶ。(i)(a) より

$$
\begin{aligned}
|f(x)-f_n(x)|
&\leq
\sum_{k=0}^{n}
\left|f(x)-f\left(\frac{k}{n}\right)\right|
b_{k,n}(x).
\end{aligned}
$$

この和を $|k/n-x|<\delta$ の部分と、その補集合に分ける。前者は $\varepsilon/2$ 以下であり、後者は (ii) から

$$
2M
\sum_{\left|\frac{k}{n}-x\right|\geq\delta}
b_{k,n}(x)
\leq \frac{M}{2n\delta^2}
$$

である。 $M/(2n\delta^2)<\varepsilon/2$ となるように $N$ を選べば、 $n\geq N$ とすべての $x\in[0,1]$ に対して

$$
|f(x)-f_n(x)|<\varepsilon
$$

が成り立つ。
