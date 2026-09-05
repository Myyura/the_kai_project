---
sidebar_label: "2008年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Power-Series
  - Mathematics.Calculus.Infinite-Series
---
# 京都大学 情報学研究科 数理工学専攻 2008年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h21/h21_kiso1.pdf)

実数 $c_n$ , $n = 0, 1, ...,$ に対し、 $x = 0$ を中心とするベキ級数

$$
f(x) = \sum_{n=0}^{\infty} c_n x^n
$$

を考える。 $0 < R_f < \infty$ なる $R_f$ に対し、 $|x| < R_f$ ならばこの級数は絶対収束し、 $|x| > R_f$ ならば収束しないとする。同様に、ベキ級数

$$
g(x) = \sum_{n=1}^{\infty} n c_n x^{n-1}
$$

は、 $0 < R_g < \infty$ なる $R_g$ に対し、 $|x| < R_g$ ならばこの級数は絶対収束し、 $|x| > R_g$ ならば収束しないとする。以下の問いに答えよ。

(i) $|x| < R_g$ なる任意の $x$ においてベキ級数 $g(x)$ が絶対収束することを用いて

$$
\sum_{n=0}^{\infty} |c_n| |x|^n < \infty
$$

が成り立つことを示せ。

(ii) $0 < R_0 < R_f$ なる任意の正数 $R_0$ に対して、正数 $M_0$ を適当に選べば、任意の $n$ について $|c_n| R_0^n \leq M_0$ とできる。このとき、 $|x| < R_0$ なる任意の $x$ において

$$
\sum_{n=1}^{\infty} n |c_n| |x|^{n-1} < \infty
$$

が成り立つことを示せ。ただし、 $\sum_{n=1}^{\infty} n a^{n-1} = \frac{1}{(1-a)^2}, (|a| < 1)$ を用いてよい。

(iii) 上で示したことを用いて、ベキ級数 $f(x)$ と $g(x)$ について

$$
R_f = R_g
$$

が成り立つことを示せ。

### 题目描述

对实数列 $(c_n)_{n\geq0}$，考虑以 $0$ 为中心的幂级数

$$
f(x)=\sum_{n=0}^{\infty}c_nx^n.
$$

已知存在 $0<R_f<\infty$，使该级数在 $|x|<R_f$ 时绝对收敛、在 $|x|>R_f$ 时不收敛。其形式导数级数

$$
g(x)=\sum_{n=1}^{\infty}nc_nx^{n-1}
$$

也存在有限正数 $R_g$，并分别在 $|x|<R_g$ 时绝对收敛、在 $|x|>R_g$ 时不收敛。完成以下各问：

1. 利用 $g(x)$ 在每个 $|x|<R_g$ 处绝对收敛，证明

   $$
   \sum_{n=0}^{\infty}|c_n||x|^n<\infty.
   $$

2. 任取 $0<R_0<R_f$。可选取 $M_0>0$，使所有 $n$ 都满足 $|c_n|R_0^n\leq M_0$。据此证明，对每个 $|x|<R_0$，

   $$
   \sum_{n=1}^{\infty}n|c_n||x|^{n-1}<\infty.
   $$

   可以使用

   $$
   \sum_{n=1}^{\infty}na^{n-1}=\frac{1}{(1-a)^2}\qquad(|a|<1).
   $$

3. 结合前两问证明原幂级数与形式导数级数的收敛半径相同，即 $R_f=R_g$。

## **Kai**

### (i)

$|x|<R_g$ とする。 $x=0$ の場合は明らかなので、 $0<|x|<R_g$ としてよい。 $g(x)$ の絶対収束より、

$$
\sum_{n=1}^{\infty}n|c_n||x|^{n-1}<\infty
$$

である。 $n\geq 1$ ならば

$$
|c_n||x|^{n-1}
\leq n|c_n||x|^{n-1}
$$

なので、比較判定法により $\sum_{n=1}^{\infty}|c_n||x|^{n-1}$ も収束する。したがって

$$
\sum_{n=0}^{\infty}|c_n||x|^n
=|c_0|+|x|\sum_{n=1}^{\infty}|c_n||x|^{n-1}
<\infty
$$

である。よって $|x|<R_g$ では $f(x)$ が絶対収束し、

$$
R_g\leq R_f
$$

を得る。

### (ii)

$0<R_0<R_f$ とする。 $\sum c_nR_0^n$ は収束するので、その一般項からなる数列は有界である。したがって、ある $M_0>0$ が存在して、

$$
|c_n|R_0^n\leq M_0
$$

がすべての $n$ について成り立つ。

$|x|<R_0$ とし、

$$
\alpha=\frac{|x|}{R_0}
$$

とおけば、 $0\leq\alpha<1$ である。各 $n\geq 1$ に対して

$$
\begin{aligned}
n|c_n||x|^{n-1}
&=\frac{n}{R_0}\bigl(|c_n|R_0^n\bigr)
  \left(\frac{|x|}{R_0}\right)^{n-1}\\
&\leq \frac{M_0}{R_0}n\alpha^{n-1}
\end{aligned}
$$

となる。ゆえに

$$
\begin{aligned}
\sum_{n=1}^{\infty}n|c_n||x|^{n-1}
&\leq \frac{M_0}{R_0}
\sum_{n=1}^{\infty}n\alpha^{n-1}\\
&=\frac{M_0}{R_0(1-\alpha)^2}
<\infty
\end{aligned}
$$

である。したがって $|x|<R_0$ では $g(x)$ が絶対収束する。

### (iii)

(i) から $R_g\leq R_f$ である。一方、(ii) により、任意の $R_0<R_f$ に対して $R_0\leq R_g$ が成り立つ。 $R_0$ を $R_f$ に下から近づけると、

$$
R_f\leq R_g
$$

を得る。以上より、

$$
\boxed{R_f=R_g}
$$

である。
