---
sidebar_label: "2022年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の各命題について，正しければ証明し，正しくなければ理由とともに反例をあげよ.

(i) 数列 $\{a_n\}$ について， $\sum_{n=1}^{\infty} a_n$ が収束すれば $\lim_{n \to \infty} a_n = 0$ が成り立つ．

(ii) 数列 $\{a_n\}$ について， $\lim_{n \to \infty} a_n = 0$ ならば $\sum_{n=1}^{\infty} a_n$ は収束する．

(iii) $\mathbb{R}$ 上の広義単調増加な $C^1$ 級関数 $f(x)$ について， $\lim_{x \to \infty} \frac{df}{dx}(x) = 0$ ならば $\lim_{x \to \infty} f(x)$ は収束する．

(iv) $\mathbb{R}$ 上の広義単調増加な $C^1$ 級関数 $f(x)$ について， $\lim_{x \to \infty} f(x)$ が収束すれば $\lim_{x \to \infty} \frac{df}{dx}(x) = 0$ である．

### 题目描述

判断下列每个命题。若命题正确，请证明；若不正确，请说明理由并给出反例。

1. 对数列 $\{a_n\}$，若级数

$$
\sum_{n=1}^{\infty}a_n
$$

收敛，则

$$
\lim_{n\to\infty}a_n=0.
$$

2. 对数列 $\{a_n\}$，若

$$
\lim_{n\to\infty}a_n=0,
$$

则级数

$$
\sum_{n=1}^{\infty}a_n
$$

收敛。

3. 对定义在 $\mathbb{R}$ 上、单调不减的 $C^1$ 函数 $f$，若

$$
\lim_{x\to\infty}f'(x)=0,
$$

则 $\lim_{x\to\infty}f(x)$ 收敛于有限值。

4. 对定义在 $\mathbb{R}$ 上、单调不减的 $C^1$ 函数 $f$，若
   $\lim_{x\to\infty}f(x)$ 收敛于有限值，则

$$
\lim_{x\to\infty}f'(x)=0.
$$

## **Kai**

### (i) 正しい

部分和を

$$
S_N=\sum_{n=1}^{N}a_n
$$

とおく。級数が収束するなら、ある実数 $S$ に対して $S_N\to S$ である。 $n\geq 2$ では $a_n=S_n-S_{n-1}$ なので、

$$
\lim_{n\to\infty}a_n
=\lim_{n\to\infty}S_n-\lim_{n\to\infty}S_{n-1}
=S-S
=0.
$$

### (ii) 正しくない

反例として $a_n=1/n$ をとる。このとき

$$
\lim_{n\to\infty}a_n=0
$$

だが、調和級数

$$
\sum_{n=1}^{\infty}\frac{1}{n}
$$

は発散する。

### (iii) 正しくない

実数全体で定義された反例として

$$
f(x)=\operatorname{arsinh}x
=\log\left(x+\sqrt{1+x^2}\right)
$$

をとる。この関数は $\mathbb{R}$ 上で $C^1$ 級かつ狭義単調増加であり、

$$
f'(x)=\frac{1}{\sqrt{1+x^2}}
\longrightarrow 0
\qquad (x\to\infty)
$$

を満たす。しかし

$$
f(x)\longrightarrow\infty
\qquad (x\to\infty)
$$

であるから、 $f(x)$ は有限値に収束しない。

### (iv) 正しくない

連続な三角形状の関数

$$
\psi(u)=\max(1-|u|,0)
$$

を使い、

$$
g(x)=\sum_{m=1}^{\infty}
\psi\left(2^{m+2}(x-m)\right)
$$

と定める。各項の台は互いに交わらないので、この和は各点の近傍で有限和となり、 $g$ は $\mathbb{R}$ 上の連続な非負関数である。また、

$$
g(m)=1
\qquad (m=1,2,\ldots).
$$

ここで

$$
f(x)=\int_0^x g(t)\,dt
$$

とおく。すると $f$ は $\mathbb{R}$ 上で $C^1$ 級かつ広義単調増加であり、 $f'(x)=g(x)$ である。各三角形の面積は $2^{-m-2}$ なので、

$$
\lim_{x\to\infty}f(x)
=\int_0^\infty g(t)\,dt
=\sum_{m=1}^{\infty}2^{-m-2}
=\frac{1}{4}.
$$

一方、 $f'(m)=g(m)=1$ がすべての正の整数 $m$ で成り立つので、 $f'(x)$ は $0$ に収束しない。これは題意を満たす反例である。

以上より、(i) のみが正しく、(ii)、(iii)、(iv) は正しくない。
