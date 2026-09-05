---
sidebar_label: "2015年8月実施 確率・統計 [3]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 確率・統計 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $X, Y$ の同時確率密度関数 $f_{X,Y}(x,y)$ が次式で与えられている。但し、 $c$ は定数とする。これについて、以下の問いに答えよ。

$$
f_{X,Y}(x,y) = \begin{cases} ce^{-x-y}, & 0 \leq x \leq y \\ 0, & その他 \end{cases}
$$

(1) $c$ の値を求めよ。

(2) $Y$ の周辺確率密度関数 $f_Y(y)$ を求めよ。

(3) $X$ と $Y$ が独立であるか否かを、理由とともに答えよ。


[出典：名古屋大学 入学試験問題](https://web.archive.org/web/20210425093032id_/http://www.is.nagoya-u.ac.jp/exam-old/d21508.pdf)

### 题目描述

随机变量 $X,Y$ 的联合概率密度函数为

$$
f_{X,Y}(x,y)=
\begin{cases}
ce^{-x-y},&0\le x\le y,\\
0,&\text{其他},
\end{cases}
$$

其中 $c$ 为常数。

1. 求 $c$；
2. 求 $Y$ 的边缘概率密度函数 $f_Y(y)$；
3. 判断 $X,Y$ 是否独立，并说明理由。

## **Kai**

(1)

$$
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y) dxdy = 1
$$

$$
\int_{0}^{\infty} \int_{0}^{y} ce^{-x-y} dx dy = 1
$$

$$
\int_{0}^{\infty} c e^{-y} \int_{0}^{y} e^{-x} dx dy = 1
$$

$$
\int_{0}^{\infty} c e^{-y} [-e^{-x}]_{0}^{y} dy = 1
$$

$$
\int_{0}^{\infty} c e^{-y} (-e^{-y} + 1) dy = 1
$$

$$
\int_{0}^{\infty} c (e^{-y} - e^{-2y}) dy = 1
$$

$$
c[-e^{-y} + \frac{1}{2}e^{-2y}]_{0}^{\infty} = 1
$$

$$
c[0 - (-1 + \frac{1}{2})] = 1
$$

$$
c(\frac{1}{2}) = 1
$$

$$
c = 2
$$

(2)

$$
f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dx
$$

$$
f_Y(y) = \int_{0}^{y} 2e^{-x-y} dx, y>0
$$

$$
f_Y(y) = 2e^{-y} \int_{0}^{y} e^{-x} dx = 2e^{-y} [-e^{-x}]_{0}^{y} = 2e^{-y} (-e^{-y} + 1) = 2(e^{-y} - e^{-2y}), y>0
$$

$$
f_Y(y) = \begin{cases} 2(e^{-y} - e^{-2y}), & y > 0 \\ 0, & y \leq 0 \end{cases}
$$

(3)

$$
f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy
$$

$$
f_X(x) = \int_{x}^{\infty} 2e^{-x-y} dy, x>0
$$

$$
f_X(x) = 2e^{-x} \int_{x}^{\infty} e^{-y} dy = 2e^{-x} [-e^{-y}]_{x}^{\infty} = 2e^{-x} (0 + e^{-x}) = 2e^{-2x}, x>0
$$

$$
f_X(x) = \begin{cases} 2e^{-2x}, & x>0 \\ 0, & x\leq 0 \end{cases}
$$

$$
f_X(x)f_Y(y) = 4e^{-2x}(e^{-y}-e^{-2y}) \neq f_{X,Y}(x,y)
$$

$X$ と $Y$ は独立ではない
