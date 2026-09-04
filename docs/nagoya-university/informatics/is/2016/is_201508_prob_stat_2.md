---
sidebar_label: "2015年8月実施 確率・統計 [2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 確率・統計 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

互いに独立な確率変数 $X, Y$ について, 以下の問いに答えよ.

(1) $X, Y$ の期待値と分散が, それぞれ $E(X) = 2, V(X) = 1, E(Y) = 5, V(Y) = 9$ で与えられるとき, 確率変数 $W = (X - 2Y)^2$ の期待値 $E(W)$ を求めよ.

(2) $X, Y$ がともに区間 $[1, 2]$ における連続一様分布に従うとき, 確率変数 $Z = \max\{X, Y\}$ の確率密度関数 $f_Z(z)$ を求めよ.

### 题目描述

设随机变量 $X,Y$ 相互独立。

1. 已知

   $$
   E(X)=2,\qquad V(X)=1,\qquad
   E(Y)=5,\qquad V(Y)=9,
   $$

   并定义 $W=(X-2Y)^2$，求 $E(W)$；
2. 若 $X,Y$ 均服从区间 $[1,2]$ 上的连续均匀分布，定义

   $$
   Z=\max\{X,Y\},
   $$

   求 $Z$ 的概率密度函数 $f_Z(z)$。

## **Kai**

(1)
確率変数

$$
W=(X-2Y)^2
$$

の期待値を求める．まず，

$$
W=X^2-4XY+4Y^2
$$

であるから，

$$
E(W)=E(X^2)-4E(XY)+4E(Y^2)
$$

となる．

分散の定義

$$
V(X)=E(X^2)-(E(X))^2
$$

より，

$$
E(X^2)=V(X)+(E(X))^2=1+2^2=5
$$

である．同様に，

$$
E(Y^2)=V(Y)+(E(Y))^2=9+5^2=34
$$

を得る．

また， $X$ と $Y$ は独立であるから，

$$
E(XY)=E(X)E(Y)=2\cdot5=10
$$

である．以上を代入すると，

$$
E(W)=5-4\cdot10+4\cdot34
=5-40+136
=101
$$

となる．

したがって，

$$
E(W)=101
$$

である．

(2)
確率変数

$$
Z=\max(X,Y)
$$

の分布を求める． $F_Z(z)$ を $Z$ の分布関数とすると，

$$
\begin{aligned}
F_Z(z)
&=P(Z\le z)\\
&=P(\max(X,Y)\le z)\\
&=P(X\le z,\ Y\le z)
\end{aligned}
$$

である． $X$ と $Y$ は独立であるから，

$$
F_Z(z)=P(X\le z)P(Y\le z)
$$

となる．

$X,Y$ はともに区間 $[1,2]$ 上の一様分布に従うので，

$$
P(X\le z)=P(Y\le z)=
\begin{cases}
0, & z<1,\\
z-1, & 1\le z\le 2,\\
1, & z>2.
\end{cases}
$$

したがって，

$$
F_Z(z)=
\begin{cases}
0, & z<1,\\
(z-1)^2, & 1\le z\le 2,\\
1, & z>2.
\end{cases}
$$

よって，確率密度関数 $f_Z(z)$ は

$$
f_Z(z)=\frac{d}{dz}F_Z(z)
=
\begin{cases}
0, & z<1,\\
2(z-1), & 1\le z\le 2,\\
0, & z>2.
\end{cases}
$$

である．
