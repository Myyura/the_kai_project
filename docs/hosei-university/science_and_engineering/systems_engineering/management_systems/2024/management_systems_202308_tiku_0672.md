---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

互いに独立な確率変数 $X, Y, Z$ はそれぞれ平均 $\lambda_x^{-1} (>0), \lambda_y^{-1} (>0), \lambda_z^{-1} (>0)$ の指数分布に従い、確率変数 $S, T$ は

$$
S = \min[X, Y], T = \max[\min[X, Y], Z]
$$

で表される。このとき、以下の問いに答えよ。

(1) $Pr\{S > s\}$ を $\lambda_x, \lambda_y$ を用いて表せ。

(2) $Pr\{T > t\}$ を $\lambda_x, \lambda_y, \lambda_z$ を用いて表せ。

(3) $E[T]$ を $\lambda_x, \lambda_y, \lambda_z$ を用いて表せ。

(4) $\lambda_x = \lambda, \lambda_y = 3\lambda, \lambda_z = n\lambda$ ( $n$ : 整数) であるとき、 $E[T] < E[X]$ を満たす最小の $n$ の値を求めよ。

### 题目描述

相互独立的随机变量 $X,Y,Z$ 分别服从均值为

$$
\lambda_x^{-1}>0,\qquad
\lambda_y^{-1}>0,\qquad
\lambda_z^{-1}>0
$$

的指数分布。定义随机变量

$$
S=\min[X,Y],\qquad
T=\max[\min[X,Y],Z].
$$

回答下列问题。

（1）用 $\lambda_x,\lambda_y$ 表示 $\Pr\{S>s\}$。

（2）用 $\lambda_x,\lambda_y,\lambda_z$ 表示 $\Pr\{T>t\}$。

（3）用 $\lambda_x,\lambda_y,\lambda_z$ 表示 $E[T]$。

（4）当

$$
\lambda_x=\lambda,\qquad
\lambda_y=3\lambda,\qquad
\lambda_z=n\lambda
$$

（$n$ 为整数）时，求满足 $E[T]<E[X]$ 的最小 $n$。

## **Kai**

In (1) and (2), the exponential formulas below apply to $s\ge0$ and $t\ge0$, respectively. For $s<0$ or $t<0$, the corresponding survival probability is $1$, since $S,T\ge0$.

(1) Since $S = \min(X,Y)$ , and $X,Y$ are independent exponential random variables with parameters $\lambda_x$ and $\lambda_y$ respectively, $S$ is an exponential random variable with parameter $\lambda_x + \lambda_y$ .  Therefore, $Pr\{S > s\} = e^{-(\lambda_x + \lambda_y)s}$ .

(2) $T = \max(S, Z)$ .  Therefore, $Pr\{T > t\} = Pr\{\max(S, Z) > t\} = 1 - Pr\{\max(S, Z) \le t\} = 1 - Pr\{S \le t, Z \le t\}$ .  Since $S$ and $Z$ are independent, $Pr\{T > t\} = 1 - Pr\{S \le t\}Pr\{Z \le t\} = 1 - (1 - e^{-(\lambda_x + \lambda_y)t})(1 - e^{-\lambda_z t}) = e^{-(\lambda_x + \lambda_y)t} + e^{-\lambda_z t} - e^{-(\lambda_x + \lambda_y + \lambda_z)t}$ .

(3) $E[T] = E[\max(S, Z)]$ . Let $S = \min(X,Y)$ .  Then $E[T] = E[\max(S, Z)] = \int_0^{\infty} Pr(\max(S,Z) > t) dt = \int_0^{\infty} (e^{-(\lambda_x + \lambda_y)t} + e^{-\lambda_z t} - e^{-(\lambda_x + \lambda_y + \lambda_z)t}) dt = \frac{1}{\lambda_x + \lambda_y} + \frac{1}{\lambda_z} - \frac{1}{\lambda_x + \lambda_y + \lambda_z}$ .

(4) Given $\lambda_x = \lambda, \lambda_y = 3\lambda, \lambda_z = n\lambda$ , $E[X] = \frac{1}{\lambda_x} = \frac{1}{\lambda}$ .  $E[T] = \frac{1}{\lambda_x + \lambda_y} + \frac{1}{\lambda_z} - \frac{1}{\lambda_x + \lambda_y + \lambda_z} = \frac{1}{4\lambda} + \frac{1}{n\lambda} - \frac{1}{(4+n)\lambda}$ .

We want $E[T] < E[X]$ , so $\frac{1}{4\lambda} + \frac{1}{n\lambda} - \frac{1}{(4+n)\lambda} < \frac{1}{\lambda}$ .  Multiplying by $\lambda$ , we get $\frac{1}{4} + \frac{1}{n} - \frac{1}{4+n} < 1$ , which simplifies to $\frac{1}{n} - \frac{1}{4+n} < \frac{3}{4}$ .
Then $\frac{4+n-n}{n(4+n)} < \frac{3}{4}$ , so $\frac{4}{n(4+n)} < \frac{3}{4}$ , which gives $16 < 3n(4+n) = 12n + 3n^2$ . Thus, $3n^2 + 12n - 16 > 0$ .
$n = \frac{-12 \pm \sqrt{144 - 4(3)(-16)}}{6} = \frac{-12 \pm \sqrt{144 + 192}}{6} = \frac{-12 \pm \sqrt{336}}{6} = \frac{-12 \pm 4\sqrt{21}}{6} = -2 \pm \frac{2\sqrt{21}}{3}$ .
Since $n$ is an integer and $n > 0$ , we have $n > -2 + \frac{2\sqrt{21}}{3} \approx -2 + \frac{2(4.58)}{3} \approx -2 + 3.05 = 1.05$ . Thus the smallest integer $n$ is 2.
Substituting $n=1$ , $3(1)^2 + 12(1) - 16 = 3+12-16 = -1 < 0$ . Substituting $n=2$ , $3(2)^2 + 12(2) - 16 = 12+24-16 = 20 > 0$ . Therefore the smallest integer $n$ that satisfies the inequality is $n=2$ .
