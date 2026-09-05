---
sidebar_label: "2017年8月実施 数1 [2]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Matrix-Operations
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2017年8月実施 数1 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/82069e4a1dd507dc8d81ea5777054d68.pdf)

次の小問に答えよ。

1) $0 < p < 1$ および $0 < q < 1$ を満たす実数 $p$ と $q$ を用いて、行列

$$
P = \begin{pmatrix} 1-p & q \\ p & 1-q \end{pmatrix}
$$

とおく。 $n$ を自然数とするとき、

$$
P^n = \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^n}{p+q} \begin{pmatrix} p & -q \\ -p & q \end{pmatrix}
$$

が成り立つことを示せ。

2) ある野球選手は、ヒットを打った次の打席において 2 割の確率でヒットを打つとする。また、ヒットを打たなかった次の打席では 4 割の確率でヒットを打つとする。ある打席ではヒットを打った。次々回にヒットを打つ確率を答えよ。また、十分な打席数を終えたあと、次の打席でヒットを打つ確率を答えよ。

### 题目描述

回答下列问题。

1. 设实数 $p,q$ 满足 $0<p<1,\ 0<q<1$，并令

   $$
   P=\begin{pmatrix}1-p&q\\p&1-q\end{pmatrix}.
   $$

   对自然数 $n$，证明

   $$
   P^n
   =\frac1{p+q}\begin{pmatrix}q&q\\p&p\end{pmatrix}
   +\frac{(1-p-q)^n}{p+q}
   \begin{pmatrix}p&-q\\-p&q\end{pmatrix};
   $$

2. 某棒球运动员若上一打席击出安打，则下一打席以 $20\%$ 的概率击出安打；若上一打席未击出安打，则下一打席以 $40\%$ 的概率击出安打。已知他在某一打席击出安打，求再下一打席击出安打的概率；再求经过足够多打席后，他在下一打席击出安打的概率。

## **Kai**

1) (証明)
数学的帰納法で示す。
(i) $n=1$ のとき

$$
\frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{1-p-q}{p+q} \begin{pmatrix} p & -q \\ -p & q \end{pmatrix} = \frac{1}{p+q} \begin{pmatrix} q + p - p^2 - pq & q - q + pq + q^2 \\ p - p + p^2 + pq & p + q - pq - q^2 \end{pmatrix} = \frac{1}{p+q} \begin{pmatrix} q + p(1-p-q) & q(p+q) \\ p(p+q) & p + q(1-p-q) \end{pmatrix}
$$

$$
= \frac{1}{p+q} \begin{pmatrix} q + p - p^2 - pq & pq + q^2 \\ p^2 + pq & p + q - pq - q^2 \end{pmatrix} = \frac{1}{p+q} \begin{pmatrix} (p+q) - p(p+q) & q(p+q) \\ p(p+q) & (p+q) - q(p+q) \end{pmatrix} =  \begin{pmatrix} 1-p & q \\ p & 1-q \end{pmatrix} = P
$$

(ii) $n=k$ のとき成り立つと仮定する。すなわち、

$$
P^k = \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^k}{p+q} \begin{pmatrix} p & -q \\ -p & q \end{pmatrix}
$$

$n=k+1$ のとき

$$
P^{k+1} = P^k P = \left[ \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^k}{p+q} \begin{pmatrix} p & -q \\ -p & q \end{pmatrix} \right] \begin{pmatrix} 1-p & q \\ p & 1-q \end{pmatrix}
$$

$$
= \frac{1}{p+q} \begin{pmatrix} q(1-p) + pq & q^2 + q(1-q) \\ p(1-p) + p^2 & pq + p(1-q) \end{pmatrix} + \frac{(1-p-q)^k}{p+q} \begin{pmatrix} p(1-p) - pq & pq - q(1-q) \\ -p(1-p) + pq & -pq + q(1-q) \end{pmatrix}
$$

$$
= \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^k}{p+q} \begin{pmatrix} p - p^2 - pq & pq - q + q^2 \\ -p + p^2 + pq & -pq + q - q^2 \end{pmatrix}
$$

$$
= \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^k}{p+q} (1-p-q)\begin{pmatrix} p & -q \\ -p & q \end{pmatrix}
$$

$$
= \frac{1}{p+q} \begin{pmatrix} q & q \\ p & p \end{pmatrix} + \frac{(1-p-q)^{k+1}}{p+q} \begin{pmatrix} p & -q \\ -p & q \end{pmatrix}
$$

したがって、 $n=k+1$ のときも成り立つ。
(i)(ii) より、 $n$ が自然数のとき、題意の式は成り立つ。

2) ある打席でヒットを打った場合、次打席でヒットを打つ確率は 0.2 である。ヒットを打たなかった場合、次打席でヒットを打つ確率は 0.4 である。
現在の打席でヒットを打ったとする。次打席でヒットを打つ確率は 0.2 である。その次（次々回）にヒットを打つ確率は、次打席でヒットを打った場合と、次打席でヒットを打たなかった場合の確率を足し合わせる。
(i) 次打席でヒットを打った場合 (確率 0.2) 、その次（次々回）にヒットを打つ確率は 0.2
(ii) 次打席でヒットを打たなかった場合 (確率 1 - 0.2 = 0.8) 、その次（次々回）にヒットを打つ確率は 0.4
したがって、次々回にヒットを打つ確率は、
$0.2 \times 0.2 + 0.8 \times 0.4 = 0.04 + 0.32 = 0.36$

十分な打席数を終えたあと、ヒットを打つ確率を $x$ とすると、
$x = 0.2x + 0.4(1-x)$
$x = 0.2x + 0.4 - 0.4x$
$x = -0.2x + 0.4$
$1.2x = 0.4$
$x = \frac{0.4}{1.2} = \frac{4}{12} = \frac{1}{3}$

したがって、十分な打席数を終えたあと、次の打席でヒットを打つ確率は $\frac{1}{3}$


1) の式に $p=0.8,q=0.4$ を入れると、$n$ 打席後の安打確率は

$$
\frac13+\frac23\left(-\frac15\right)^n
$$

となる。$|{-1/5}|<1$ なので、上の定常値 $1/3$ への収束も確認できる。
