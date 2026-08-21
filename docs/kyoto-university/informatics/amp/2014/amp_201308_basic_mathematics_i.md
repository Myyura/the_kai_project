---
sidebar_label: "2013年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
---
# 京都大学 情報学研究科 数理工学専攻 2013年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問いに答えよ。

(i) 不等式

$$
2 \leq \left(1 + \frac{1}{n}\right)^n, \quad n = 1, 2, ...
$$

を示せ。

(ii) 極限

$$
\lim_{n \to \infty} \sqrt[n]{2}
$$

を求めよ。

(iii) $a, b > 0$ のとき

$$
\lim_{n \to \infty} \sqrt[n]{a^n + b^n} = \max(a, b)
$$

を示せ。

(iv) $a_1, a_2, ..., a_k > 0$ ( $k \geq 3$ ) のとき

$$
\lim_{n \to \infty} \sqrt[n]{a_1^n + a_2^n + ... + a_k^n} = \max(a_1, a_2, ..., a_k)
$$

を示せ。

### 题目描述

完成以下各问：

1. 对每个正整数 $n=1,2,\ldots$，证明

   $$
   2\leq\left(1+\frac1n\right)^n.
   $$

2. 求极限

   $$
   \lim_{n\to\infty}\sqrt[n]{2}.
   $$

3. 对 $a,b>0$，证明

   $$
   \lim_{n\to\infty}\sqrt[n]{a^n+b^n}
   =\max(a,b).
   $$

4. 对固定的 $k\geq3$ 以及 $a_1,a_2,\ldots,a_k>0$，证明

   $$
   \lim_{n\to\infty}
   \sqrt[n]{a_1^n+a_2^n+\cdots+a_k^n}
   =\max(a_1,a_2,\ldots,a_k).
   $$

## **Kai**

### (i) 不等式

二項定理より、

$$
\left(1+\frac{1}{n}\right)^n
=1+1+\sum_{j=2}^{n}\binom{n}{j}\frac{1}{n^j}.
$$

右辺の和は非負である。したがって、すべての正の整数 $n$ に対して

$$
2\leq \left(1+\frac{1}{n}\right)^n
$$

が成り立つ。なお、 $n=1$ のときは等号である。

### (ii) 累乗根の極限

$\sqrt[n]{2}=1+h_n$ とおくと $h_n>0$ である。ベルヌーイの不等式から

$$
2=(1+h_n)^n\geq 1+nh_n
$$

となるので、

$$
0<h_n\leq \frac{1}{n}.
$$

右辺は $0$ に収束するから、はさみうちの原理により $h_n\to 0$ である。よって

$$
\lim_{n\to\infty}\sqrt[n]{2}=1.
$$

### (iii) 2 項の場合

$M=\max(a,b)$ とおく。 $a,b>0$ であるから

$$
M^n\leq a^n+b^n\leq 2M^n.
$$

各辺の $n$ 乗根をとると

$$
M\leq \sqrt[n]{a^n+b^n}\leq M\sqrt[n]{2}.
$$

(ii) と、はさみうちの原理から

$$
\lim_{n\to\infty}\sqrt[n]{a^n+b^n}
=M
=\max(a,b).
$$

### (iv) 一般の有限個の項

$M=\max(a_1,\ldots,a_k)$ とおけば、

$$
M^n\leq \sum_{j=1}^{k}a_j^n\leq kM^n
$$

であり、したがって

$$
M\leq \sqrt[n]{\sum_{j=1}^{k}a_j^n}\leq M\sqrt[n]{k}.
$$

ここで $k\geq 3$ は固定されている。 $\sqrt[n]{k}=1+u_n$ とおくと、(ii) と同様に

$$
k=(1+u_n)^n\geq 1+nu_n
$$

より $0\leq u_n\leq (k-1)/n$ となる。ゆえに $\sqrt[n]{k}\to 1$ であり、はさみうちの原理から

$$
\lim_{n\to\infty}\sqrt[n]{a_1^n+\cdots+a_k^n}
=\max(a_1,\ldots,a_k).
$$
