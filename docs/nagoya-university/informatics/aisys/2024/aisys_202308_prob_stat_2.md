---
sidebar_label: "2023年8月実施 確率・統計 [2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 確率・統計 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/17b639d81a91ac5dca245f353c6a2378.pdf)

確率変数 $X, Y$ の同時確率密度関数 $f_{X,Y}(x, y)$ が次式で与えられるとき、以下の問いに答えよ。

$$
f_{X,Y}(x, y) = \begin{cases} x^2 + \frac{1}{3}y & (-1 \leq x \leq 1, 0 \leq y \leq 1) \\ 0 & (otherwise) \end{cases}
$$

(1) 周辺確率密度関数 $f_X(x)$ を求めよ。

(2) $X+1$ の期待値を求めよ。

(3) $X+1$ の分散を求めよ。

(4) $X^2(Y^3 + Y^2)$ の期待値を求めよ。

### 题目描述

随机变量 $X,Y$ 的联合概率密度函数为

$$
f_{X,Y}(x,y)=
\begin{cases}
x^2+\dfrac13y,&-1\le x\le1,\ 0\le y\le1,\\
0,&\text{其他}.
\end{cases}
$$

1. 求 $X$ 的边缘概率密度函数 $f_X(x)$；
2. 求 $X+1$ 的期望；
3. 求 $X+1$ 的方差；
4. 求 $X^2(Y^3+Y^2)$ 的期望。

## **Kai**

(1) 周辺確率密度関数 $f_X(x)$ を求める。

$$
f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dy
$$

For $-1 \leq x \leq 1$ :

$$
f_X(x) = \int_{0}^{1} (x^2 + \frac{1}{3}y) dy = [x^2y + \frac{1}{6}y^2]_0^1 = x^2 + \frac{1}{6}
$$

Therefore,

$$
f_X(x) = \begin{cases} x^2 + \frac{1}{6} & (-1 \leq x \leq 1) \\ 0 & (otherwise) \end{cases}
$$

(2) $E[X+1]$ を求める。

$$
E[X+1] = E[X] + 1
$$

$$
E[X] = \int_{-\infty}^{\infty} x f_X(x) dx = \int_{-1}^{1} x (x^2 + \frac{1}{6}) dx = \int_{-1}^{1} (x^3 + \frac{1}{6}x) dx = [\frac{1}{4}x^4 + \frac{1}{12}x^2]_{-1}^1 = 0
$$

Therefore,

$$
E[X+1] = 0 + 1 = 1
$$

(3) $V[X+1]$ を求める。

$$
V[X+1] = V[X]
$$

$$
V[X] = E[X^2] - (E[X])^2 = E[X^2] - 0^2 = E[X^2]
$$

$$
E[X^2] = \int_{-\infty}^{\infty} x^2 f_X(x) dx = \int_{-1}^{1} x^2 (x^2 + \frac{1}{6}) dx = \int_{-1}^{1} (x^4 + \frac{1}{6}x^2) dx = [\frac{1}{5}x^5 + \frac{1}{18}x^3]_{-1}^1 = \frac{2}{5} + \frac{2}{18} = \frac{2}{5} + \frac{1}{9} = \frac{18+5}{45} = \frac{23}{45}
$$

Therefore,

$$
V[X+1] = \frac{23}{45}
$$

(4) $E[X^2(Y^3 + Y^2)]$ を求める。

$$
E[X^2(Y^3 + Y^2)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x^2(y^3 + y^2) f_{X,Y}(x, y) dx dy
$$

$$
= \int_{-1}^{1} \int_{0}^{1} x^2(y^3 + y^2) (x^2 + \frac{1}{3}y) dy dx
$$

$$
= \int_{-1}^{1} x^2 \int_{0}^{1} (x^2y^3 + x^2y^2 + \frac{1}{3}y^4 + \frac{1}{3}y^3) dy dx
$$

$$
= \int_{-1}^{1} x^2 [\frac{1}{4}x^2y^4 + \frac{1}{3}x^2y^3 + \frac{1}{15}y^5 + \frac{1}{12}y^4]_0^1 dx
$$

$$
= \int_{-1}^{1} x^2 (\frac{1}{4}x^2 + \frac{1}{3}x^2 + \frac{1}{15} + \frac{1}{12}) dx
$$

$$
= \int_{-1}^{1} x^2 (\frac{7}{12}x^2 + \frac{4+5}{60}) dx = \int_{-1}^{1} x^2 (\frac{7}{12}x^2 + \frac{3}{20}) dx
$$

$$
= \int_{-1}^{1} (\frac{7}{12}x^4 + \frac{3}{20}x^2) dx = [\frac{7}{60}x^5 + \frac{1}{20}x^3]_{-1}^1
$$

$$
= \frac{14}{60} + \frac{2}{20} = \frac{7}{30} + \frac{1}{10} = \frac{7+3}{30} = \frac{10}{30} = \frac{1}{3}
$$
