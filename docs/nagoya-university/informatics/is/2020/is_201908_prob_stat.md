---
sidebar_label: "2019年8月実施 確率・統計"
tags:
  - Nagoya-University
  - Probability-Statistics.Stochastic-Processes.Waiting-Time-for-Runs
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2019年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失，以下内容依据现有解答整理；第 \[1\] 题前三小问所指的具体投掷事件没有保留下来。

1. 重复投掷一枚公平硬币。
   1. 前三小问分别计算若干指定正反面序列的概率，现有解答中的结果依次为 $1/8$、$1/8$、$1/16$，但准确事件条件缺失；
   2. 求首次出现一个正面所需投掷次数的期望；
   3. 求首次出现连续两个正面所需投掷次数的期望；
   4. 求首次出现连续三个正面所需投掷次数的期望。
2. 二维随机变量 $(X,Y)$ 的联合概率密度在 $x\ge0,\,-x\le y\le x$ 上为
   $$f_{X,Y}(x,y)=a(x^2-y^2)e^{-x},$$
   在其他区域为 $0$。
   1. 求联合密度取得最大值时的 $(x,y)$；
   2. 求 $X$ 的边缘概率密度 $f_X(x)$；
   3. 由归一化条件求常数 $a$；
   4. 求 $X$ 的均值。

## **Kai**
### \[1\]
#### (1)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  1 \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2}
  = \frac{1}{16}
  \end{aligned}
$$

#### (4)
求める期待値 $E(\text{表})$ は、

$$
\begin{aligned}
E \left( \text{表} \right)
=
1 \cdot \frac{1}{2}
+ 2 \cdot \left( \frac{1}{2} \right)^2
+ 3 \cdot \left( \frac{1}{2} \right)^3
+ \cdots
\end{aligned}
$$

であるが、両辺 $1/2$ 倍すると、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
=
1 \cdot \left( \frac{1}{2} \right)^2
+ 2 \cdot \left( \frac{1}{2} \right)^3
+ 3 \cdot \left( \frac{1}{2} \right)^4
+ \cdots
\end{aligned}
$$

となる。
1番目の式から2番目の式を引くと、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
&=
\frac{1}{2}
+ \left( \frac{1}{2} \right)^2
+ \left( \frac{1}{2} \right)^3
+ \cdots
\\
&=
\frac{1}{2} \frac{1}{1 - \frac{1}{2}}
\\
&=
1
\end{aligned}
$$

となるから、

$$
\begin{aligned}
E \left( \text{表} \right) = 2
\end{aligned}
$$

を得る。

#### (5)
与えられた式を整理して、

$$
\begin{aligned}
E \left( \text{表表} \right)
&=
2 E \left( \text{表} \right) + 2
\\
&=
6
\end{aligned}
$$

を得る。

#### (6)
(5) と同じように考えて、

$$
\begin{aligned}
E \left( \text{表表表} \right)
&=
2 E \left( \text{表表} \right) + 2
\\
&=
14
\end{aligned}
$$

を得る。

### \[2\]
#### (1)

$$
  \begin{aligned}
  \frac{\partial}{\partial x} f_{X,Y}(x,y)
  &=
  a ( -x^2 + 2x + y^2 ) e^{-x}
  \\
  \frac{\partial}{\partial y} f_{X,Y}(x,y)
  &=
  -2ay e^{-x}
  \end{aligned}
$$

であるから、 $f_{X,Y}(x,y)$ が最大となるのは $x=2,y=0$ のときである。

#### (2)

$$
\begin{aligned}
f_X(x)
&=
a e^{-x} \int_{-x}^x ( x^2 - y^2 ) dy
\\
&=
\frac{4}{3} a x^3 e^{-x}
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
1
&=
\int_0^\infty f_X(x) dx
\\
&=
\frac{4}{3} a \int_0^\infty x^3 e^{-x} dx
\\
&=
8a
\end{aligned}
$$

であるから、

$$
\begin{aligned}
a = \frac{1}{8}
\end{aligned}
$$

である。

#### (4)

$$
\begin{aligned}
\mu_x
&=
\int_0^\infty x f_X(x) dx
\\
&=
\frac{1}{6} \int_0^\infty x^4 e^{-x} dx
\\
&=
4
\end{aligned}
$$
