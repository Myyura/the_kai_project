---
sidebar_label: "2022年8月実施 確率・統計 [2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報学研究科 知能システム学専攻 2022年8月実施 確率・統計 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $X$ の確率密度関数 $f(x)$ に関して、以下の問いに答えよ。

(1) $f(x)$ が満たすべき性質を2つ答えよ。

(2) $f(x)$ が次式で与えられる連続関数であるとき、定数 $a, b, c$ の値を求めよ。

$$
f(x) = \begin{cases} a^2x^3 + bx^2 + 4ax + c & (0 \leq x \leq 1) \\ 0 & (otherwise) \end{cases}
$$

(3) $f(x)$ が(2)と同様に与えられるとき、確率変数 $X$ の期待値 $E(X)$ を求めよ。

### 题目描述

关于随机变量 $X$ 的概率密度函数 $f(x)$，回答下列问题。

1. 写出概率密度函数必须满足的两条性质；
2. 若 $f$ 是在实数范围内连续且由下式给出的函数，求常数 $a,b,c$：

   $$
   f(x)=
   \begin{cases}
   a^2x^3+bx^2+4ax+c,&0\le x\le1,\\
   0,&\text{其他};
   \end{cases}
   $$

3. 当 $f(x)$ 如第 2 问所给时，求 $X$ 的期望 $E(X)$。

## **Kai**

(1) 確率密度関数 $f(x)$ が満たすべき性質は以下の2つです。
   - $f(x) \geq 0$ (確率密度は非負である)
   - $\int_{-\infty}^{\infty} f(x) dx = 1$ (全確率が1である)

(2) $f$ は実数全体で連続であり、区間 $[0,1]$ の外では0なので、両端で

$$
c=f(0)=0
$$

$$
a^2+b+4a+c=f(1)=0
$$

が必要である。したがって $c=0$ かつ $b=-a^2-4a$ である。

さらに、密度の積分が1なので、

$$
\frac{a^2}{4}+\frac{b}{3}+2a+c=1.
$$

$b=-a^2-4a,\ c=0$ を代入すると、

$$
-\frac{a^2}{12}+\frac{2a}{3}=1
\quad\Longleftrightarrow\quad
a^2-8a+12=0,
$$

したがって $a=2$ または $a=6$ である。

$a=2$ のとき、

$$
b=-12,\qquad
f(x)=4x(x-1)(x-2)\geq0\quad(0\leq x\leq1).
$$

一方、 $a=6$ のとき、

$$
b=-60,\qquad
f(x)=12x(3x-2)(x-1),
$$

これは $2/3<x<1$ で負になるため確率密度関数ではない。よって、

$$
\boxed{a=2,\qquad b=-12,\qquad c=0}.
$$

(3) 期待値 $E(X)$ は以下のように計算されます。

$$
E(X)
=\int_0^1x(4x^3-12x^2+8x)\,dx
$$

$$
=\frac45-3+\frac83
=\boxed{\frac7{15}}.
$$
