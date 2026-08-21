---
sidebar_label: "2011年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Infinite-Series
---
# 京都大学 情報学研究科 数理工学専攻 2011年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$n$ がすべての自然数 $\mathbb{N}$ の上を動くとき， $\frac{1}{n}$ の和 $\sum_{n \in \mathbb{N}} \frac{1}{n}$ は $+\infty$ に発散し， $\frac{1}{n^2}$ の和 $\sum_{n \in \mathbb{N}} \frac{1}{n^2}$ はある正の値に収束する。 $p$ がすべての素数 $\mathbb{P}$ の上を動くとき， $\frac{1}{p}$ の和と $1 + \frac{1}{p}$ の積を，それぞれ，

$$
\sum_{p \in \mathbb{P}} \frac{1}{p} = \frac{1}{p_1} + \frac{1}{p_2} + \dots, \quad \prod_{p \in \mathbb{P}} \left( 1 + \frac{1}{p} \right) = \left( 1 + \frac{1}{p_1} \right) \left( 1 + \frac{1}{p_2} \right) \dots, \quad p_1, p_2, \dots \in \mathbb{P}
$$

とかく。自然数 $n$ は適当な非負整数 $k_1, k_2, \dots \in \{0, 1, 2, \dots\}$ を用いて

$$
n = p_1^{k_1} \cdot p_2^{k_2} \cdot p_3^{k_3} \dots
$$

と一意に素因数分解できることに注意する。 $L$ を 2 以上の自然数とするとき， $L$ 以下の素数のなす有限部分集合を $\mathbb{P}_L$ とかく。以下の問いに答えよ。

(i) 不等式

$$
\log \prod_{p \in \mathbb{P}_L} \left( 1 + \frac{1}{p} \right) < \sum_{p \in \mathbb{P}_L} \frac{1}{p}
$$

を示せ。

(ii) $\prod_{p \in \mathbb{P}} \frac{1}{1 - \frac{1}{p}} = \prod_{p \in \mathbb{P}} \left( 1 + \frac{1}{p} + \frac{1}{p^2} + \dots \right)$ は $+\infty$ に発散することを示せ。

(iii) $\prod_{p \in \mathbb{P}} \frac{1}{1 - \frac{1}{p^2}}$ はある正の値に収束することを示せ。

(iv) $\prod_{p \in \mathbb{P}} \left( 1 + \frac{1}{p} \right)$ の収束，発散について理由をつけて答えよ。

(v) $\sum_{p \in \mathbb{P}} \frac{1}{p}$ の収束，発散について理由をつけて答えよ。

### 题目描述

已知调和级数 $\sum_{n\in\mathbb N}1/n$ 发散到 $+\infty$，而 $\sum_{n\in\mathbb N}1/n^2$ 收敛到某个正数。以 $\mathbb P$ 表示全体素数，并把素数倒数之和及相应无穷乘积记为

$$
\sum_{p\in\mathbb P}\frac1p
=\frac1{p_1}+\frac1{p_2}+\cdots,\qquad
\prod_{p\in\mathbb P}\left(1+\frac1p\right)
=\left(1+\frac1{p_1}\right)\left(1+\frac1{p_2}\right)\cdots,
$$

其中 $p_1,p_2,\ldots\in\mathbb P$。注意每个自然数都能由适当的非负整数 $k_1,k_2,\ldots$ 唯一分解为

$$
n=p_1^{k_1}p_2^{k_2}p_3^{k_3}\cdots.
$$

对任意自然数 $L\geq2$，记不超过 $L$ 的全部素数组成的有限集合为 $\mathbb P_L$。完成以下各问：

1. 证明

   $$
   \log\prod_{p\in\mathbb P_L}\left(1+\frac1p\right)
   <\sum_{p\in\mathbb P_L}\frac1p.
   $$

2. 证明 Euler 乘积

   $$
   \prod_{p\in\mathbb P}\frac1{1-\frac1p}
   =\prod_{p\in\mathbb P}\left(1+\frac1p+\frac1{p^2}+\cdots\right)
   $$

   发散到 $+\infty$。
3. 证明

   $$
   \prod_{p\in\mathbb P}\frac1{1-\frac1{p^2}}
   $$

   收敛到某个正数。
4. 判断无穷乘积

   $$
   \prod_{p\in\mathbb P}\left(1+\frac1p\right)
   $$

   收敛还是发散，并说明理由。
5. 判断素数倒数级数

   $$
   \sum_{p\in\mathbb P}\frac1p
   $$

   收敛还是发散，并说明理由。

## **Kai**

### (i)

$x>0$ に対して

$$
h(x)=x-\log(1+x)
$$

とおくと、

$$
h'(x)=1-\frac{1}{1+x}=\frac{x}{1+x}>0
$$

であり、 $h(0)=0$ である。したがって

$$
\log(1+x)<x
$$

が成り立つ。 $x=1/p$ を代入して $p\in\mathbb P_L$ について和をとれば、

$$
\boxed{
\log\prod_{p\in\mathbb P_L}\left(1+\frac1p\right)
<\sum_{p\in\mathbb P_L}\frac1p}
$$

を得る。

### (ii)

有限集合 $\mathbb P_L$ に対する部分積を考える。等比級数と素因数分解の一意性から、

$$
\begin{aligned}
\prod_{p\in\mathbb P_L}\frac{1}{1-1/p}
&=\prod_{p\in\mathbb P_L}
  \left(1+\frac1p+\frac1{p^2}+\cdots\right)\\
&=\sum_{\substack{n\geq 1\\
\text{} n \text{ の素因数はすべて }L\text{ 以下}}}\frac1n
\end{aligned}
$$

である。特に、 $1\leq n\leq L$ ならば $n$ の素因数はすべて $L$ 以下なので、

$$
\prod_{p\in\mathbb P_L}\frac{1}{1-1/p}
\geq\sum_{n=1}^L\frac1n
$$

となる。右辺は $L\to\infty$ で発散するから、

$$
\boxed{\prod_{p\in\mathbb P}\frac{1}{1-1/p}=+\infty}
$$

である。

### (iii)

同様に、有限部分積は

$$
\prod_{p\in\mathbb P_L}\frac{1}{1-1/p^2}
=
\sum_{\substack{n\geq 1\\
\text{} n \text{ の素因数はすべて }L\text{ 以下}}}\frac1{n^2}
$$

と展開できる。したがって

$$
1<
\prod_{p\in\mathbb P_L}\frac{1}{1-1/p^2}
\leq\sum_{n=1}^{\infty}\frac1{n^2}
$$

である。部分積は $L$ とともに単調増加し、上に有界なので、ある正の有限値に収束する。

### (iv)

各 $L$ に対して

$$
\frac{1}{1-1/p}
=\frac{1}{1-1/p^2}\left(1+\frac1p\right)
$$

であるから、

$$
\prod_{p\in\mathbb P_L}\frac{1}{1-1/p}
=
\left(\prod_{p\in\mathbb P_L}\frac{1}{1-1/p^2}\right)
\left(\prod_{p\in\mathbb P_L}\left(1+\frac1p\right)\right)
$$

となる。(ii) の左辺は $+\infty$ に発散し、(iii) の第 1 因子は正の有限値に収束する。したがって第 2 因子は

$$
\boxed{\prod_{p\in\mathbb P}\left(1+\frac1p\right)=+\infty}
$$

と発散する。

### (v)

(iv) の有限部分積の対数をとると、

$$
\sum_{p\in\mathbb P_L}\log\left(1+\frac1p\right)
\longrightarrow+\infty
$$

である。一方、(i) より

$$
\sum_{p\in\mathbb P_L}\log\left(1+\frac1p\right)
<
\sum_{p\in\mathbb P_L}\frac1p
$$

である。したがって、

$$
\boxed{\sum_{p\in\mathbb P}\frac1p=+\infty}
$$

となる。
