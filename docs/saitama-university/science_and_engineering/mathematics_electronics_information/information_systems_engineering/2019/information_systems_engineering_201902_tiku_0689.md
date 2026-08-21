---
sidebar_label: "2019年2月実施 概率统计"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年2月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。

(a) ある医学的検査は、患者が病気Aである場合に90\%の確率で陽性と判定する。しかし、患者がこの病気ではない場合にも、この医学的検査は5\%の確率で陽性と判定する。総人口の1\%がこの病気にかかると仮定する。今、ある患者が陽性と判定された。この患者がこの病気にかかっている確率を答えよ。

(b) 連続確率変数X,Yは以下の結合確率密度関数をもつとする (Cは定数).

$$
f(x,y) = \begin{cases} Cx(1-x)e^{-2y} & 0 \leq x \leq 1, 0 \leq y, \\ 0 & otherwise. \end{cases}
$$

(1) 定数Cの値を求めよ.

(2) XとYは独立かどうか、答えよ。理由も説明せよ.

(3) Yの期待値を求めよ.

### 题目描述

回答下列问题。

(a) 某项医学检测在患者患有疾病 A 时，以 $90\%$ 的概率给出阳性结果；即使患者未患该病，也会以 $5\%$ 的概率给出阳性结果。假设总人口中有 $1\%$ 患有该病。现有一名患者的检测结果为阳性，求该患者确实患有该病的概率。

(b) 设连续随机变量 $X,Y$ 的联合概率密度函数如下，其中 $C$ 为常数：

$$
f(x,y)=
\begin{cases}
Cx(1-x)e^{-2y},&0\leq x\leq1,\ 0\leq y,\\
0,&\text{其他情形}.
\end{cases}
$$

(1) 求常数 $C$。

(2) 判断 $X$ 与 $Y$ 是否相互独立，并说明理由。

(3) 求 $Y$ 的期望。

## **Kai**

(a) Let A be the event that the patient has disease A, and let + be the event that the test is positive. We are given the following probabilities:
$P(+|A) = 0.9$
$P(+|A^c) = 0.05$
$P(A) = 0.01$
We want to find $P(A|+)$ . By Bayes' theorem:

$$
P(A|+) = \frac{P(+|A)P(A)}{P(+)}
$$

We need to find $P(+)$ . Using the law of total probability:
$P(+) = P(+|A)P(A) + P(+|A^c)P(A^c)$
$P(A^c) = 1 - P(A) = 1 - 0.01 = 0.99$
$P(+) = (0.9)(0.01) + (0.05)(0.99) = 0.009 + 0.0495 = 0.0585$
So,

$$
P(A|+) = \frac{(0.9)(0.01)}{0.0585} = \frac{0.009}{0.0585} = \frac{90}{585} = \frac{18}{117} = \frac{2}{13} \approx 0.1538
$$

Therefore, the probability that the patient has the disease given a positive test result is approximately 0.1538.

(b)
(1) To find the constant C, we need to integrate the joint density function over the entire domain and set it equal to 1:

$$
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dx dy = 1
$$

$$
\int_0^{\infty} \int_0^1 Cx(1-x)e^{-2y} dx dy = 1
$$

$$
C \int_0^{\infty} e^{-2y} dy \int_0^1 x(1-x) dx = 1
$$

$$
C \left[-\frac{1}{2}e^{-2y}\right]_0^{\infty} \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = 1
$$

$$
C \left(0 - (-\frac{1}{2})\right) \left(\frac{1}{2} - \frac{1}{3}\right) = 1
$$

$$
C \left(\frac{1}{2}\right) \left(\frac{1}{6}\right) = 1
$$

$$
\frac{C}{12} = 1
$$

$$
C = 12
$$

(2) To check if X and Y are independent, we need to find the marginal densities $f_X(x)$ and $f_Y(y)$ and see if $f(x,y) = f_X(x) f_Y(y)$ .

$$
f_X(x) = \int_0^{\infty} f(x,y) dy = \int_0^{\infty} 12x(1-x)e^{-2y} dy = 12x(1-x) \int_0^{\infty} e^{-2y} dy = 12x(1-x) \left[-\frac{1}{2}e^{-2y}\right]_0^{\infty} = 12x(1-x) \left(\frac{1}{2}\right) = 6x(1-x), 0 \leq x \leq 1
$$

$$
f_Y(y) = \int_0^1 f(x,y) dx = \int_0^1 12x(1-x)e^{-2y} dx = 12e^{-2y} \int_0^1 x(1-x) dx = 12e^{-2y} \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = 12e^{-2y} \left(\frac{1}{6}\right) = 2e^{-2y}, 0 \leq y
$$

Now check if $f(x,y) = f_X(x) f_Y(y)$ :
$f_X(x) f_Y(y) = (6x(1-x))(2e^{-2y}) = 12x(1-x)e^{-2y} = f(x,y)$
Since $f(x,y) = f_X(x) f_Y(y)$ , X and Y are independent.

(3) To find the expected value of Y, we use the marginal density $f_Y(y)$ :

$$
E[Y] = \int_0^{\infty} y f_Y(y) dy = \int_0^{\infty} y(2e^{-2y}) dy = 2 \int_0^{\infty} ye^{-2y} dy
$$

Using integration by parts, let $u = y$ and $dv = e^{-2y} dy$ . Then $du = dy$ and $v = -\frac{1}{2}e^{-2y}$ .

$$
\int_0^{\infty} ye^{-2y} dy = \left[-\frac{1}{2}ye^{-2y}\right]_0^{\infty} - \int_0^{\infty} -\frac{1}{2}e^{-2y} dy = \left[-\frac{1}{2}ye^{-2y}\right]_0^{\infty} + \frac{1}{2} \int_0^{\infty} e^{-2y} dy = 0 + \frac{1}{2} \left[-\frac{1}{2}e^{-2y}\right]_0^{\infty} = \frac{1}{2} \left(0 - (-\frac{1}{2})\right) = \frac{1}{4}
$$

So, $E[Y] = 2 \left(\frac{1}{4}\right) = \frac{1}{2}$
