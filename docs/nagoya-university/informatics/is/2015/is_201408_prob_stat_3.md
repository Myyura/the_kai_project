---
sidebar_label: "2014年8月実施 確率・統計 [3]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2014年8月実施 確率・統計 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$X, Y$ は互いに独立で同一の分布に従う確率変数であり、 $X$ の確率密度関数 $f_X(x)$ が次式で与えられている。以下の問いに答えよ。

$$
f_X(x) = \begin{cases} 2e^{-2x} & (0 \leq x) \\ 0 & (その他) \end{cases}
$$

(1) 累積分布関数 $F_X(x)$ を求めよ。
(2) 確率変数 $Z = \min\{X, Y\}$ の累積分布関数 $F_Z(z)$ を求めよ。


[出典：名古屋大学 入学試験問題](https://web.archive.org/web/20210425112646id_/http://www.is.nagoya-u.ac.jp/exam-old/d21408.pdf)

### 题目描述

随机变量 $X,Y$ 相互独立且服从同一分布，$X$ 的概率密度函数为

$$
f_X(x)=
\begin{cases}
2e^{-2x},&x\ge0,\\
0,&\text{其他}.
\end{cases}
$$

1. 求 $X$ 的累积分布函数 $F_X(x)$；
2. 定义 $Z=\min\{X,Y\}$，求 $Z$ 的累积分布函数 $F_Z(z)$。

## **Kai**

(1)
確率変数 $X$ の確率密度関数が

$$
f_X(x)=
\begin{cases}
2e^{-2x}, & x\ge 0,\\
0, & x<0
\end{cases}
$$

で与えられているとする．分布関数 $F_X(x)$ は

$$
F_X(x)=P(X\le x)=\int_{-\infty}^{x} f_X(t)\,dt
$$

で定義される．

$x<0$ のときは

$$
F_X(x)=0
$$

である．一方， $x\ge 0$ のとき，

$$
\begin{aligned}
F_X(x)
&=\int_{0}^{x}2e^{-2t}\,dt \\
&=\bigl[-e^{-2t}\bigr]_{0}^{x} \\
&=1-e^{-2x}
\end{aligned}
$$

となる．したがって，

$$
F_X(x)=
\begin{cases}
1-e^{-2x}, & x\ge 0,\\
0, & x<0
\end{cases}
$$

である．

(2)
$X$ と $Y$ は独立で同一の分布に従う確率変数であるから，
$Y$ の分布関数 $F_Y(y)$ は $F_X(y)$ と一致する．

$$
Z=\min(X,Y)
$$

とおき， $Z$ の分布関数 $F_Z(z)$ を求める．

$$
\begin{aligned}
F_Z(z)
&=P(Z\le z) \\
&=1-P(Z>z) \\
&=1-P(X>z,\ Y>z)
\end{aligned}
$$

である． $X$ と $Y$ は独立であるから，

$$
P(X>z,\ Y>z)=P(X>z)P(Y>z)
$$

が成り立つ．

(1) の結果より，

$$
P(X>z)=1-F_X(z)=
\begin{cases}
e^{-2z}, & z\ge 0,\\
1, & z<0
\end{cases}
$$

であり，同様に $P(Y>z)=P(X>z)$ である．したがって，

$$
P(X>z,\ Y>z)=
\begin{cases}
e^{-4z}, & z\ge 0,\\
1, & z<0
\end{cases}
$$

となる．

以上より，

$$
F_Z(z)
=1-P(X>z,\ Y>z)
=
\begin{cases}
1-e^{-4z}, & z\ge 0,\\
0, & z<0
\end{cases}
$$

を得る．
