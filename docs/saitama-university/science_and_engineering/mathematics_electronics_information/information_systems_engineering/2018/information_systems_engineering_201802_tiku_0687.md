---
sidebar_label: "2018年2月実施 確率統計"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年2月実施 確率統計

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3. 以下の問に答えよ. [ Solve the following problems. ]

(a) 10枚のコインがある. 9枚は公正なもので、1枚は公正ではないものである。公正ではないコインで表が出る確率を0.9とする。ランダムに1枚のコインを選び、投げるものとする。表が出たとき、そのコインが公正なものである確率を求めよ。

[There are ten coins; nine of them are fair, and one of them is unfair. The probability of heads of the unfair coin is 0.9. We choose a coin randomly and flip it. When we have a head, calculate the probability with which the chosen coin is fair. ]

(b) $X$ を非負整数 $\{0, 1, 2, ...\}$ の集合から値をとる離散確率変数であるとする。 $C$ を定数、 $\lambda$ をパラメータとする ( $\lambda > 0$ ). $X$ の確率分布を以下のように定義する:

[Let $X$ be a discrete random variable taking values from the set of non-negative integers $\{0, 1, 2, ...\}$ . Let $C$ be a constant, and let $\lambda$ be a parameter ( $\lambda > 0$ ). The probability distribution of $X$ is defined as follows: ]

$$
\Pr(X = n) = C \frac{\lambda^n}{n!}
$$

(1) 定数 $C$ の値を計算せよ. [Calculate the constant $C$ .]

(2) $E[X]$ および $E[X(X-1)]$ を計算せよ. ここで $E[\cdot]$ は期待値を表す. [Calculate $E[X]$ and $E[X(X-1)]$ , where $E[\cdot]$ means an expectation. ]

(3) $Y = 3X + 1$ とする. $Y$ の平均と分散を計算せよ. [Let $Y = 3X + 1$ . Calculate the mean and variance of $Y$ .]

(4) 確率変数 $Z$ は $X$ と同じ確率分布に従うものとする。 $X$ と $Z$ が独立であるとき、 $X+Z$ の確率分布を求めよ。 [A random variable $Z$ has the same probability distribution as $X$ . When $X$ and $Z$ are independent, find the probability distribution of $X + Z$ .]

### 题目描述

3. 回答下列问题。

(a) 有 $10$ 枚硬币，其中 $9$ 枚是公平硬币，另 $1$ 枚是不公平硬币；该不公平硬币出现正面的概率为 $0.9$。随机选取一枚硬币并投掷一次。已知结果为正面，求所选硬币是公平硬币的概率。

(b) 设离散随机变量 $X$ 的取值集合为非负整数

$$
\{0,1,2,\dots\}.
$$

设 $C$ 为常数，$\lambda$ 为满足 $\lambda>0$ 的参数，并定义 $X$ 的概率分布为

$$
\Pr(X=n)=C\frac{\lambda^n}{n!}.
$$

(1) 求常数 $C$。

(2) 求

$$
E[X]\quad\text{与}\quad E[X(X-1)],
$$

其中 $E[\cdot]$ 表示期望。

(3) 令

$$
Y=3X+1.
$$

求 $Y$ 的均值与方差。

(4) 设随机变量 $Z$ 与 $X$ 服从相同的概率分布。若 $X$ 与 $Z$ 相互独立，求 $X+Z$ 的概率分布。

## **Kai**

(a) Let $F$ be the event that the coin is fair, and $H$ be the event that a head appears.  We want to find $P(F|H)$ .
We know that $P(F) = \frac{9}{10}$ and $P(F^c) = \frac{1}{10}$ .  Also, $P(H|F) = \frac{1}{2}$ and $P(H|F^c) = 0.9$ .
By Bayes' theorem,

$$
P(F|H) = \frac{P(H|F)P(F)}{P(H)}
$$

We need to find $P(H)$ . Using the law of total probability,

$$
P(H) = P(H|F)P(F) + P(H|F^c)P(F^c) = \frac{1}{2} \cdot \frac{9}{10} + 0.9 \cdot \frac{1}{10} = \frac{9}{20} + \frac{9}{100} = \frac{45}{100} + \frac{9}{100} = \frac{54}{100} = \frac{27}{50}
$$

Therefore,

$$
P(F|H) = \frac{\frac{1}{2} \cdot \frac{9}{10}}{\frac{27}{50}} = \frac{\frac{9}{20}}{\frac{27}{50}} = \frac{9}{20} \cdot \frac{50}{27} = \frac{1}{2} \cdot \frac{5}{3} = \frac{5}{6}
$$

(b)
(1) Since $\sum_{n=0}^{\infty} \Pr(X=n) = 1$ , we have $\sum_{n=0}^{\infty} C \frac{\lambda^n}{n!} = 1$ . Since $\sum_{n=0}^{\infty} \frac{\lambda^n}{n!} = e^{\lambda}$ , we have $Ce^{\lambda} = 1$ , so $C = e^{-\lambda}$ .

(2) Since $\Pr(X=n) = e^{-\lambda} \frac{\lambda^n}{n!}$ , $X$ follows a Poisson distribution with parameter $\lambda$ . Therefore, $E[X] = \lambda$ and $Var(X) = \lambda$ . Also,
$E[X(X-1)] = E[X^2 - X] = E[X^2] - E[X] = Var(X) + E[X]^2 - E[X] = \lambda + \lambda^2 - \lambda = \lambda^2$ .
Alternatively,

$$
\begin{aligned}E[X(X-1)] &= \sum_{n=0}^{\infty} n(n-1) e^{-\lambda} \frac{\lambda^n}{n!} \\ &= e^{-\lambda} \sum_{n=2}^{\infty} n(n-1) \frac{\lambda^n}{n!} \\ &= e^{-\lambda} \sum_{n=2}^{\infty} \frac{\lambda^n}{(n-2)!} \\ &= e^{-\lambda} \lambda^2 \sum_{n=2}^{\infty} \frac{\lambda^{n-2}}{(n-2)!} \\ &= e^{-\lambda} \lambda^2 \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} \\ &= e^{-\lambda} \lambda^2 e^{\lambda} = \lambda^2\end{aligned}
$$

(3) $E[Y] = E[3X+1] = 3E[X] + 1 = 3\lambda + 1$ .
$Var(Y) = Var(3X+1) = 3^2 Var(X) = 9\lambda$ .

(4) Since $X$ and $Z$ are independent and have the same distribution, $\Pr(X=n) = \Pr(Z=n) = e^{-\lambda} \frac{\lambda^n}{n!}$ . Let $W = X+Z$ .  Then

$$
\begin{aligned}P(W=k) &= \sum_{n=0}^k P(X=n, Z=k-n) \\ &= \sum_{n=0}^k P(X=n)P(Z=k-n) \\ &= \sum_{n=0}^k e^{-\lambda} \frac{\lambda^n}{n!} e^{-\lambda} \frac{\lambda^{k-n}}{(k-n)!} \\ &= e^{-2\lambda} \sum_{n=0}^k \frac{\lambda^k}{n!(k-n)!} \\ &= e^{-2\lambda} \frac{\lambda^k}{k!} \sum_{n=0}^k \frac{k!}{n!(k-n)!} \\ &= e^{-2\lambda} \frac{\lambda^k}{k!} \sum_{n=0}^k \binom{k}{n} \\ &= e^{-2\lambda} \frac{\lambda^k}{k!} 2^k \\ &= e^{-2\lambda} \frac{(2\lambda)^k}{k!}\end{aligned}
$$

So $X+Z$ follows a Poisson distribution with parameter $2\lambda$ .
