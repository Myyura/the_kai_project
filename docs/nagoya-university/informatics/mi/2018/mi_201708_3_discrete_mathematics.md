---
sidebar_label: "2017年8月実施 問題3 離散数学"
tags:
  - Nagoya-University
  - Discrete-Mathematics
---
# 名古屋大学 情報学研究科 数理情報学専攻 2017年8月実施 問題3 離散数学

## **Author**
祭音Myyura

## **Description**
以下の各問に答えよ。

### (1)
$f$ を非負の整数で定義される関数とする。非負の整数 $n$ に対して関数 $g$ を

$$
g(n) = \sum_{k=0}^n \binom{n}{k} f(k)
$$

と定める、このとき,

$$
f(n) = \sum_{k=0}^n  \binom{n}{k} (-1)^{n-k} g(k)
$$

が成立することを示せ。

### (2)
$\mu$ を Mobius 関数とする。すなわち、正の整数に対して

$$
\mu(n) = \begin{cases}
    1 &(n=1) \\
    (-1)^k &(n \text{ is a product of } k \text{ distinct prime numbers}) \\
    0 &(\text{otherwise})
\end{cases}
$$

とする。

#### (i)
正の整数 $n$ に対して、

$$
\sum_{d \mid n} \mu(d) = \begin{cases}
    1 &(n = 1) \\
    0 &(n \geq 2)
\end{cases}
$$

が成立することを示せ。ただし、$d$ は $n$ のすべての正の約数を動くものとする。

#### (ii)
$f$ を正の整数で定義される関数とする。正の整数 $n$ に対して関数 $g$ を

$$
g(n) = \sum_{d \mid n} f(d)
$$

と定める。 このとき、

$$
f(n) = \sum_{d \mid n} \mu(\frac{n}{d})g(d)
$$

が成立することを示せ。

## **Kai**
### (1)

$$
\begin{aligned}
\sum_{k=0}^n(-1)^{n-k}\binom{n}{k}g(k)&=\sum_{k=0}^n(-1)^{n-k}\binom{n}k\sum_{j=0}^k\binom{k}{j} f(j)\\
&=\sum_{j=0}^n\sum_{k=j}^n(-1)^{n-k}\binom{n}k\binom{k}{j} f(j)\\
&=\sum_{j=0}^n\sum_{k=j}^n(-1)^{n-k}\binom{n}{j}\binom{n-j}{n-k} f(j)\\
&=\sum_{j=0}^n\binom{n}{j} f(j)\sum_{k=0}^{n-j}(-1)^k\binom{n-j}{k}\,.
\end{aligned}
$$

By the binomial theorem

$$
\sum_{k=0}^{n-j}(-1)^k\binom{n-j}{k}=\begin{cases}
1,&\text{if }n=j\\
0,&\text{otherwise,}
\end{cases}
$$

hence

$$
\sum_{k=0}^n (-1)^{n-k}\binom{n}{k}g(k)=\binom{n}{n}f(n)=f(n)\,,
$$

### (2)
#### (i)
The statement clearly holds if $n=1$.

Assume that $n > 1$ and by the fundamental theorem of arithmetic we write

$$
n = p_1^{a_1} p_2^{a_2} \dots p_k^{a_k}
$$

In the sum $\sum_{d \mid n} \mu(d)$ the only non-zero terms come from $d = 1$ and the divisors of $n$ which are products of distinct primes.

From the definition of Binomial coefficient, there are $\binom{k}{m}$ ways to choose $m$ primes from $p_1,p_2,\ldots,p_k$ to multiply together.

Thus:

$$
\begin{aligned}
    \sum_{d \mid n} \mu(d) &= \mu(1) + \mu(p_1) + \cdots + \mu(p_k) + \mu(p_1p_2) + \cdots + \mu(p_{k-1}p_{k}) + \cdots + \mu(p_1p_2\cdots p_k) \\
    &= \binom{k}{0} + \binom{k}{1}(-1) + \binom{k}{2}(-1)^2 + \cdots + \binom{k}{k}(-1)^k \\
    &= 0
\end{aligned}
$$

#### (ii)
(This is the so-called [Mobius inversion formula](https://en.wikipedia.org/wiki/M%C3%B6bius_inversion_formula))

$$
\sum_{d \mid n} \mu(\frac{n}{d})g(d) = \sum_{d \mid n} \mu(d) g(\frac{n}{d}) = \sum_{d \mid n} \mu(d) \sum_{c \mid \frac{n}{d}} f(c) = \sum_{c \mid n} f(c) \sum_{d \mid \frac{n}{c}} \mu(d)
$$

By using the result of Question (2)-(i), i.e.,

$$
\sum_{d \mid n} \mu(d) = 1 \text{ for } n=1, \sum_{d \mid n} \mu(d) = 0 \text{ for } n > 1
$$

If we have $\frac{n}{c} = 1$, i.e., $n=c$ then we have

$$
\sum_{d \mid \frac{n}{c}} \mu(d) = \sum_{d \mid 1} \mu(d) = 1
$$

and that $\sum_{d \mid \frac{n}{c}} \mu(d) = 0$ if otherwise. Hence by considering $n=c$ we get

$$
\sum_{c|n}f(c)\sum_{d|\frac{n}{c}}\mu(d)=\sum_{c|n}f(c)=f(n).
$$