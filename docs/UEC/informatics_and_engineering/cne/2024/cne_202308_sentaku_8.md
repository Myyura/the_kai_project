---
sidebar_label: 2023年8月実施 選択問題 離散数学とオートマトン
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Combinatorics
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 選択問題 離散数学とオートマトン

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$A=\{1,2,3,4\}$ とし、実数 $x$ に対して $B(x)=\{(a,b,c)\in A^3\mid ax+b=c\}$ と定める。$B(1)$、$B(x)\ne\varnothing$ となる $x$ の最大値・最小値を求め、非空な $B(x)$ 全体が $A^3$ の分割となることを示せ。また、$m\ge3$ として $m$ 元集合 $X$ から自身への写像の総数、像の要素数が 3 以下の写像の個数、および $m=5$ のときの全射の個数を求めよ。

### 题目描述

对集合 $A=\{1,2,3,4\}$ 上由方程 $ax+b=c$ 定义的集合族进行枚举并证明其构成划分；再计算有限集到自身的映射数、像至多含三个元素的映射数及满射数。

## **Kai**

### 1.

#### (1)

$a+b=c\leq4$ を満たす組を列挙すると、

$$
\boxed{
B(1)=\{
(1,1,2),(1,2,3),(2,1,3),
(1,3,4),(2,2,4),(3,1,4)
\}
}.
$$

#### (2)

$B(x)\ne\varnothing$ ならば

$$
x=\frac{c-b}{a}
$$

である。$a\geq1$、$-3\leq c-b\leq3$ より $-3\leq x\leq3$ であり、$x=-3,3$ はそれぞれ $(1,4,1),(1,1,4)$ で達成される。したがって、

$$
\boxed{\max x=3,\qquad \min x=-3}.
$$

#### (3)

任意の $(a,b,c)\in A^3$ に対し、$x=(c-b)/a$ とすれば $(a,b,c)\in B(x)$ である。よって集合族は $A^3$ を覆う。

また、$(a,b,c)\in B(x)\cap B(y)$ ならば

$$
ax+b=c=ay+b.
$$

$a\ne0$ より $x=y$ である。したがって異なる非空の $B(x)$ は互いに素であり、

$$
\boxed{\{B(x)\mid x\in\mathbb R,\ B(x)\ne\varnothing\}
\text{ は }A^3\text{ の分割である}}.
$$

### 2.

#### (1)

$X$ の各要素の像には $m$ 通りの選択があるから、

$$
\boxed{m^m}.
$$

#### (2)

像の要素数を $r=1,2,3$ に分ける。像となる $r$ 元部分集合を選んだ後、その集合への全射を数えると、包除原理より

$$
\begin{aligned}
r=1&:\quad m,\\
r=2&:\quad \binom m2(2^m-2),\\
r=3&:\quad \binom m3(3^m-3\cdot2^m+3).
\end{aligned}
$$

よって求める個数は

$$
\boxed{
m+\binom m2(2^m-2)
+\binom m3(3^m-3\cdot2^m+3)
}.
$$

#### (3)

$m=5$ のとき、有限集合 $X$ から自身への全射は全単射である。したがって、

$$
\boxed{5!=120}.
$$
