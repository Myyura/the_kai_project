---
sidebar_label: "2015年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Numbers
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の条件を満たす複素数 $z = x + iy$ について、以下の問いに答えよ。ただし、 $R$ は実数の集合、 $i$ は虚数単位を表す。

$$
z + \frac{1}{z} \in R
$$

(a) $z + \frac{1}{z} = u + iv$ とおくとき、 $u, v$ を $x, y$ を用いて表せ。

(b) $z$ が複素平面上でえがく図形を求め、その概形を図示せよ。

(c) $|z - 1| \leq 2$ であるとき、 $|z - 2 + i|$ の最大値および最小値を求めよ。

### 题目描述

设复数 $z=x+iy$ 满足

$$
z+\frac1z\in\mathbb R,
$$

其中 $\mathbb R$ 为实数集，$i$ 为虚数单位；该条件同时意味着 $z\ne0$。

1. 令

   $$
   z+\frac1z=u+iv,
   $$

   用 $x,y$ 表示 $u,v$；
2. 求所有满足上述实数条件的 $z$ 在复平面上构成的图形，并画出其大致形状；
3. 在上述条件之外再要求 $|z-1|\le2$，求 $|z-2+i|$ 的最大值与最小值。

## **Kai**

(a) $z + \frac{1}{z} = x + iy + \frac{1}{x + iy} = x + iy + \frac{x - iy}{x^2 + y^2} = x + \frac{x}{x^2 + y^2} + i(y - \frac{y}{x^2 + y^2})$

$u = x + \frac{x}{x^2 + y^2}, v = y - \frac{y}{x^2 + y^2}$

(b) $z + \frac{1}{z} \in R$ より、 $v = y - \frac{y}{x^2 + y^2} = 0$

$y(1 - \frac{1}{x^2 + y^2}) = 0$

$y = 0$ または $x^2 + y^2 = 1$

$y = 0$ は実軸を表す、 $x^2 + y^2 = 1$ は原点中心半径1の円を表す。
ただし， $z=0$ を除外する条件より、 $x=0, y=0$ は除く。

![単位円と原点を除く実軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/is/2016/nagoya-is2016-real-locus.svg)

(c) (b) の条件と $|z-1|\le2$ を同時に満たす集合は、単位円全体と実軸上の $[-1,3]\setminus\{0\}$ の合併である。求める量は点 $2-i$ までの距離である。

実軸部分では

$$
|z-2+i|^2=(x-2)^2+1,\qquad -1\le x\le3,\quad x\ne0.
$$

したがって、最小値は $x=2$ で $1$、最大値は $x=-1$ で $\sqrt{10}$ となる。

単位円部分では三角不等式と逆三角不等式より

$$
\sqrt5-1\le |z-(2-i)|\le\sqrt5+1.
$$

下限は $z=(2-i)/\sqrt5$、上限は $z=(-2+i)/\sqrt5$ で達成される。これらはどちらも $|z-1|\le2$ を満たす。
$1<\sqrt5-1$ および $\sqrt{10}<\sqrt5+1$ より、全体での答えは

$$
\boxed{\min |z-2+i|=1,\qquad \max |z-2+i|=\sqrt5+1}.
$$
