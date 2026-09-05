---
sidebar_label: "2018年8月実施 確率・統計 [1]–[2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報学研究科 情報システム学専攻 2018年8月実施 確率・統計 [1]–[2]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), [思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### \[1\]


箱Aには赤玉が4つ、青玉が1つ、白玉が1つ入っており、箱Bには赤玉が2つ、青玉が2つ、白玉が2つ入っている。以下の問いに答えよ。ただし、2つの箱は外見上区別がつかず、玉を取り出すとき、箱の中は見えないものとする。

(1) 無作為に1つの箱を選び、その箱から玉を1つ取り出したとき、それが赤玉である確率を求めよ。

(2) 無作為に1つの箱を選び、その箱から玉を2つ取り出したとき、それらの色が異なる確率を求めよ。

(3) 1つの箱から玉を1つ取り出したとき、それが赤玉であったとする。その玉を箱に戻さずに、さらに玉を1つ取り出すとき、最初に玉を取り出したのと同じ箱から取り出す場合と、別の箱から取り出す場合、それぞれについて新たに取り出した玉が赤玉である確率を求め、どちらの場合の方が赤玉である確率が大きいか答えよ。


### \[2\]


確率変数 $X$ の確率密度関数 $f(x)$ が次式で与えられている。ただし $a$ は定数とする。

$$
f(x) = \begin{cases} 12x^2(a-x) & (0 \leq x \leq 1) \\ 0 & (\text{上記以外}) \end{cases}
$$

(1) $a$ の値を求めよ。

(2) 確率変数 $X$ の値が $1/3$ 以下となる確率を求めよ。

(3) 確率変数 $X$ の平均 $\mu$ と分散 $\sigma^2$ を求めよ。

(4) 表が出る確率 $\theta$ の確率分布が $f(\theta)$ で与えられたコインがあるとする。このコインを $n$ 回投げたときにすべて裏が出る確率の期待値を求めよ。ただし、 $n$ 回の試行の間、 $\theta$ の値は変動しないものとする。


[出典：名古屋大学 入学試験問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/180c8bb1241500018a144ec27b6a07b5.pdf)

### 题目描述

#### [1]

盒 A 中有 $4$ 个红球、$1$ 个蓝球和 $1$ 个白球；盒 B 中有 $2$ 个红球、$2$ 个蓝球和 $2$ 个白球。两个盒子的外观无法区分，取球时也看不到盒内。

1. 随机选择一个盒子并从中取出一个球，求该球为红球的概率；
2. 随机选择一个盒子并从中取出两个球，求两球颜色不同的概率；
3. 从一个随机选取的盒子中取出一个球，已知该球为红球。将此球留在盒外、不放回，然后再取一个球。分别求

   - 从第一次取球的同一盒子中再取时，新球为红球的概率；
   - 从另一个盒子中取时，新球为红球的概率。

   比较上述两种取法，回答哪一种取得红球的概率更大。

#### [2]

随机变量 $X$ 的概率密度函数为

$$
f(x)=
\begin{cases}
12x^2(a-x),&0\le x\le1,\\
0,&\text{其他},
\end{cases}
$$

其中 $a$ 为常数。

1. 求 $a$；
2. 求 $P\left(X\le\dfrac13\right)$；
3. 求 $X$ 的均值 $\mu$ 与方差 $\sigma^2$；
4. 有一枚硬币，其出现正面的概率 $\theta$ 本身服从密度 $f(\theta)$。将该硬币投掷 $n$ 次，求“所有投掷均为反面”这一概率的期望；在这 $n$ 次试验期间，$\theta$ 的值保持不变。

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

すべて裏が出る確率の期待値を求める。
$n$ 回全て裏が出る確率は $(1-\theta)^n$ であり、 $\theta$ の確率分布は $f(\theta) = 12\theta^2(1-\theta)$ なので、期待値は、

$$
E[(1-\theta)^n] = \int_0^1 (1-\theta)^n f(\theta) d\theta = \int_0^1 (1-\theta)^n 12\theta^2(1-\theta) d\theta
$$

$$
= 12 \int_0^1 (1-\theta)^{n+1} \theta^2 d\theta
$$

ここで、部分積分を行う。 $u=\theta^2, dv=(1-\theta)^{n+1}d\theta$ とすると、 $du=2\theta d\theta, v = -\frac{(1-\theta)^{n+2}}{n+2}$ なので、

$$
12 \int_0^1 (1-\theta)^{n+1} \theta^2 d\theta = 12 \left[ -\theta^2 \frac{(1-\theta)^{n+2}}{n+2} \right]_0^1 + 12\int_0^1 \frac{(1-\theta)^{n+2}}{n+2} 2\theta d\theta
$$

$$
= 0 + \frac{24}{n+2} \int_0^1 (1-\theta)^{n+2} \theta d\theta
$$

もう一度部分積分を行う。 $u=\theta, dv = (1-\theta)^{n+2}d\theta$ とすると、 $du=d\theta, v = -\frac{(1-\theta)^{n+3}}{n+3}$ なので、

$$
\frac{24}{n+2} \int_0^1 (1-\theta)^{n+2} \theta d\theta = \frac{24}{n+2} \left[ -\theta \frac{(1-\theta)^{n+3}}{n+3} \right]_0^1 + \frac{24}{n+2} \int_0^1 \frac{(1-\theta)^{n+3}}{n+3} d\theta
$$

$$
= 0 + \frac{24}{(n+2)(n+3)} \int_0^1 (1-\theta)^{n+3} d\theta = \frac{24}{(n+2)(n+3)} \left[ -\frac{(1-\theta)^{n+4}}{n+4} \right]_0^1
$$

$$
= \frac{24}{(n+2)(n+3)(n+4)}
$$
