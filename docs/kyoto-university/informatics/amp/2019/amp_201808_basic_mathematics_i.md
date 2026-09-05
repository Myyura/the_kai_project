---
sidebar_label: "2018年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Limit
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h31_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)

以下の問いに答えよ。

(i) 2項係数を $ _mC_n = \frac{m!}{n!(m-n)!} $ とかく。2項定理

$ (a+b)^n = _nC_0 a^n + _nC_1 a^{n-1}b + _nC_2 a^{n-2}b^2 + \dots + _nC_n b^n $

を用いて、 $x > 1$ のとき

$$
\lim_{n \to \infty} x^n = \infty
$$

であることを示せ。

さらに、 $0 < x < 1$ のとき

$$
\lim_{n \to \infty} nx^n = 0
$$

であることを示せ。

(ii) $x_0 \neq 0$ とする。級数

$$
\sum_{n=0}^{\infty} a_n x^n
$$

が点 $x = x_0$ で収束すれば、 $|x| < |x_0|$ なるすべての実数 $x$ についてこの級数は収束することを示せ。

さらに、級数

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} x^n
$$

が収束するような実数 $x$ の範囲を求めよ。

### 题目描述

回答下列问题。

1. 用

$$
{}_mC_n=\frac{m!}{n!(m-n)!}
$$

表示二项式系数，并使用二项式定理

$$
(a+b)^n
={}_nC_0a^n+{}_nC_1a^{n-1}b
+{}_nC_2a^{n-2}b^2+\cdots+{}_nC_nb^n
$$

证明：

   1. 当 $x>1$ 时，

$$
\lim_{n\to\infty}x^n=\infty;
$$

   2. 当 $0<x<1$ 时，

$$
\lim_{n\to\infty}nx^n=0.
$$

2. 设 $x_0\ne0$。证明：若幂级数

$$
\sum_{n=0}^{\infty}a_nx^n
$$

在 $x=x_0$ 处收敛，则它对每个满足
$|x|<|x_0|$ 的实数 $x$ 都收敛。

再求使级数

$$
\sum_{n=1}^{\infty}\frac{x^n}{n^2}
$$

收敛的全部实数 $x$。

## **Kai**

### (i) 二つの極限

まず $x>1$ とし、 $x=1+h$ とおく。このとき $h>0$ であり、二項定理から

$$
x^n=(1+h)^n
=1+nh+\binom{n}{2}h^2+\cdots+h^n
\geq 1+nh.
$$

右辺は正の無限大に発散するので、

$$
\lim_{n\to\infty}x^n=\infty.
$$

次に $0<x<1$ とし、 $x=1/(1+h)$ とおく。ここでも $h>0$ である。 $n\geq 3$ に対し、二項定理から

$$
(1+h)^n\geq \binom{n}{3}h^3
=\frac{n(n-1)(n-2)}{6}h^3.
$$

したがって

$$
0<nx^n
=\frac{n}{(1+h)^n}
\leq \frac{6}{(n-1)(n-2)h^3}.
$$

右辺は $0$ に収束するため、はさみうちの原理により

$$
\lim_{n\to\infty}nx^n=0.
$$

### (ii) べき級数の収束

級数 $\sum_{n=0}^{\infty}a_nx_0^n$ が収束すると、その一般項からなる数列 $\{a_nx_0^n\}$ は有界である。したがって、ある $M>0$ が存在して

$$
|a_nx_0^n|\leq M
$$

がすべての $n$ で成り立つ。 $|x|<|x_0|$ のとき $q=|x/x_0|<1$ とおけば、

$$
|a_nx^n|
=|a_nx_0^n|\left|\frac{x}{x_0}\right|^n
\leq Mq^n.
$$

右辺の和は収束する幾何級数なので、比較判定法により $\sum a_nx^n$ は絶対収束する。

最後に

$$
\sum_{n=1}^{\infty}\frac{x^n}{n^2}
$$

を考える。 $x\neq 0$ に対する隣接項の絶対値の比は

$$
\left|
\frac{x^{n+1}/(n+1)^2}{x^n/n^2}
\right|
=|x|\left(\frac{n}{n+1}\right)^2
\longrightarrow |x|.
$$

したがって $|x|<1$ では絶対収束し、 $|x|>1$ では一般項が $0$ に収束せず発散する。端点 $x=1$ と $x=-1$ では、それぞれ

$$
\sum_{n=1}^{\infty}\frac{1}{n^2},
\qquad
\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}
$$

となり、どちらも絶対収束する。以上より、収束する実数 $x$ の範囲は

$$
-1\leq x\leq 1
$$

である。
