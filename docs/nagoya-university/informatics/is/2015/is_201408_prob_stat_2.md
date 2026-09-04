---
sidebar_label: "2014年8月実施 確率・統計 [2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2014年8月実施 確率・統計 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $X, Y$ の同時確率密度関数 $f_{X,Y}(x, y)$ が次式で与えられている. 但し、 $c$ は定数とする. 以下の問いに答えよ.

$$
f_{X,Y}(x, y) = \begin{cases} c(y - x) & (0 \leq x \leq 1, 1 \leq y \leq 3) \\ 0 & (その他) \end{cases}
$$

(1) 定数 $c$ の値を求めよ.

(2) 周辺確率密度関数 $f_Y(y)$ を求めよ.

(3) 条件付き確率密度関数 $f_{X|Y}(x | y)$ を求めよ.

### 题目描述

随机变量 $X,Y$ 的联合概率密度函数为

$$
f_{X,Y}(x,y)=
\begin{cases}
c(y-x),&0\le x\le1,\ 1\le y\le3,\\
0,&\text{其他},
\end{cases}
$$

其中 $c$ 为常数。

1. 求 $c$；
2. 求 $Y$ 的边缘概率密度函数 $f_Y(y)$；
3. 求条件概率密度函数 $f_{X\mid Y}(x\mid y)$。

## **Kai**

(1) $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x, y) dxdy = 1$ であるから,

$$
\int_1^3 \int_0^1 c(y - x) dxdy = 1
$$

$$
\int_1^3 c[yx - \frac{x^2}{2}]_0^1 dy = 1
$$

$$
\int_1^3 c(y - \frac{1}{2}) dy = 1
$$

$$
c[\frac{y^2}{2} - \frac{y}{2}]_1^3 = 1
$$

$$
c[(\frac{9}{2} - \frac{3}{2}) - (\frac{1}{2} - \frac{1}{2})] = 1
$$

$$
c \cdot \frac{6}{2} = 1
$$

$$
3c = 1
$$

$$
c = \frac{1}{3}
$$

(2) 周辺確率密度関数 $f_Y(y)$ は,

$$
f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dx
$$

$1 \leq y \leq 3$ のとき,

$$
f_Y(y) = \int_0^1 \frac{1}{3}(y - x) dx = \frac{1}{3}[yx - \frac{x^2}{2}]_0^1 = \frac{1}{3}(y - \frac{1}{2}) = \frac{2y - 1}{6}
$$

よって,

$$
f_Y(y) = \begin{cases} \frac{2y - 1}{6} & (1 \leq y \leq 3) \\ 0 & (その他) \end{cases}
$$

(3) 条件付き確率密度関数 $f_{X|Y}(x | y)$ は,

$$
f_{X|Y}(x | y) = \frac{f_{X,Y}(x, y)}{f_Y(y)}
$$

$0 \leq x \leq 1, 1 \leq y \leq 3$ のとき,

$$
f_{X|Y}(x | y) = \frac{\frac{1}{3}(y - x)}{\frac{2y - 1}{6}} = \frac{2(y - x)}{2y - 1}
$$

よって,

$$
f_{X|Y}(x | y) = \begin{cases} \frac{2(y - x)}{2y - 1} & (0 \leq x \leq 1, 1 \leq y \leq 3) \\ 0 & (その他) \end{cases}
$$
