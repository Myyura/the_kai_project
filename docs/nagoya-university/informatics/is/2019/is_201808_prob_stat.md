---
sidebar_label: "2018年8月実施 確率・統計"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2018年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失，以下内容只能依据现有解答整理，个别实验条件无法完整还原。

1. 从两个装有红球及其他颜色球的盒子 $A,B$ 中等概率选择一个盒子并取球，解答显示单次从 $A$、$B$ 取到红球的概率分别为 $4/6$、$2/6$。
   1. 求一次取到红球的概率；
   2. 原题要求计算某个连续取球事件的概率，但现有资料仅保留了组合数计算式，准确事件条件缺失；
   3. 已知第一次取到红球，比较第二次选择同一盒子或另一个盒子时取到红球的概率，并判断哪种策略较优。取球后不放回。
2. 随机变量的概率密度在 $0\le x\le1$ 上为
   $f(x)=12x^2(a-x)$，区间外为 $0$。
   1. 由归一化条件求常数 $a$；
   2. 求 $P(X\le 1/3)$；
   3. 求 $X$ 的均值与方差；
   4. 将随机变量 $\theta$ 视为一枚硬币出现正面的概率，且 $\theta$ 服从上述密度。条件于 $\theta$ 独立投掷硬币 $n$ 次，求全部出现正面的无条件概率。

## **Kai**
### \[1\]
#### (1)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{4}{6}
  + \frac{1}{2} \cdot \frac{2}{6}
  = \frac{1}{2}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{{}_6C_2 - {}_4C_2}{{}_6C_2}
  + \frac{1}{2} \cdot \frac{{}_6C_2 - 3}{{}_6C_2}
  = \frac{7}{10}
  \end{aligned}
$$

#### (3)
初めに箱 A, B を選ぶことをそれぞれ $X_1=A,B$ で表し、
次に箱 A, B を選ぶことをそれぞれ $X_2=A,B$ で表す。
また、初めに赤玉を選ぶことを $Y_1=R$ で表し、
次に赤玉を選ぶことを $Y_2=R$ で表す。

初めの玉が赤玉であったとき、選んだ箱がA,Bであった確率は、
それぞれ、

$$
\begin{aligned}
P(X_1 = A \mid Y_1 = R)
&=
\frac{P(X_1=A) P(Y_1=R \mid X_1=A)}{P(Y_1=R)}
=
\frac{\frac{1}{2} \cdot \frac{4}{6}}{\frac{1}{2}}
= \frac{2}{3}
\\
P(X_1 = B \mid Y_1 = R)
&=
\frac{P(X_1=B) P(Y_1=R \mid X_1=B)}{P(Y_1=R)}
=
\frac{\frac{1}{2} \cdot \frac{2}{6}}{\frac{1}{2}}
= \frac{1}{3}
\end{aligned}
$$

である。
初めに箱Aを選んで赤玉を取り出したとき、
次に箱 A, B を選んで赤玉を取り出す確率は、それぞれ、

$$
\begin{aligned}
P(Y_2=R \mid X_1 = A , Y_1 = R, X_2=A)
&=
\frac{3}{5}
\\
P(Y_2=R \mid X_1 = A , Y_1 = R, X_2=B)
&=
\frac{2}{6}
=
\frac{1}{3}
\end{aligned}
$$

であり、
初めに箱Bを選んで赤玉を取り出したとき、
次に箱 A, B を選んで赤玉を取り出す確率は、それぞれ、

$$
\begin{aligned}
P(Y_2=R \mid X_1 = B , Y_1 = R, X_2=A)
&=
\frac{4}{6}
=
\frac{2}{3}
\\
P(Y_2=R \mid X_1 = B , Y_1 = R, X_2=B)
&=
\frac{1}{5}
\end{aligned}
$$

である。
よって、
初めに赤玉を取り出したとき、次に同じ箱を選んで赤玉を取り出す確率は、

$$
\begin{aligned}
&
P(X_1=A \mid Y_1=R)
P(Y_2=R \mid X_1=A , Y_1=R, X_2=A)
\\
& \ \ \ \ +
P(X_1=B \mid Y_1=R)
P(Y_2=R \mid X_1=B , Y_1=R, X_2=B)
\\
&=
\frac{2}{3} \cdot \frac{3}{5}
+ \frac{1}{3} \cdot \frac{1}{5}
\\
&=
\frac{7}{15}
\end{aligned}
$$

であり、
次に別の箱を選んで赤玉を取り出す確率は、

$$
\begin{aligned}
&
P(X_1=A \mid Y_1=R)
P(Y_2=R \mid X_1=A , Y_1=R, X_2=B)
\\
& \ \ \ \ +
P(X_1=B \mid Y_1=R)
P(Y_2=R \mid X_1=B , Y_1=R, X_2=A)
\\
&=
\frac{2}{3} \cdot \frac{1}{3}
+ \frac{1}{3} \cdot \frac{2}{3}
\\
&=
\frac{4}{9}
\end{aligned}
$$

であるから、前者の方が大きい。

### \[2\]
#### (1)

$$
  \begin{aligned}
  1
  &=
  12 \int_0^1 x^2(a-x) dx
  \\
  &=
  4a-3
  \\
  \therefore \ \ \ \ 
  a &= 1
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  12 \int_0^{1/3} x^2(1-x) dx
  = \frac{1}{9}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  \mu
  &=
  12 \int_0^1 x^3 (1-x) dx
  \\
  &= \frac{3}{5}
  \\
  \sigma^2
  &=
  12 \int_0^1 x^4 (1-x) dx
  - \left( \frac{3}{5} \right)^2
  \\
  &= \frac{1}{25}
  \end{aligned}
$$

#### (4)
表が出る確率 $\theta$ のコインを $n$ 回投げて
すべて表が出る確率は $\theta^n$ であるから、
これの期待値は、

$$
  \begin{aligned}
  \int_0^1 \theta^n f(\theta) d \theta
  &=
  12 \int_0^1 \theta^{n+2} (1- \theta) d \theta
  \\
  &=
  \frac{12}{(n+3)(n+4)}
  \end{aligned}
$$

である。
