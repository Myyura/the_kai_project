---
sidebar_label: "2020年8月実施 専門基礎科目 第3問"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年8月実施 専門基礎科目 第3問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。

(a) 確率変数 X,Yは独立であり、それぞれパラメータ $\lambda_1$ ( $\lambda_1 > 0$ ), $\lambda_2$ ( $\lambda_2 > 0$ )をもつポアソン分布に従うとする.

$$
P(X = x) = \frac{e^{-\lambda_1} \lambda_1^x}{x!} \quad (x = 0, 1, 2, 3, ...),
$$

$$
P(Y = y) = \frac{e^{-\lambda_2} \lambda_2^y}{y!} \quad (y = 0, 1, 2, 3, ...).
$$

(1) Xの期待値E[X] を求めよ.

(2) XとYの同時確率分布は、パラメータ $\lambda_1+\lambda_2$ をもつポアソン分布と、二項分布 Bin( $x+y, \frac{\lambda_1}{\lambda_1+\lambda_2}$ )の積となることを示せ。

(3) 確率変数Z=X+Yの従う確率分布を求めよ。

(4) Z=X+Yの期待値E[Z] を求めよ。

(b) 確率変数 $X_1, ..., X_k$ はパラメータ $p_1, ..., p_k$ ( $p_i \geq 0, \sum_{i=1}^{k} p_i = 1$ )をもつ多項分布に従うとする.

$$
P(X_1 = x_1, ..., X_k = x_k) = \frac{n!}{x_1! ... x_k!} p_1^{x_1} ... p_k^{x_k} \quad (x_i \geq 0, \sum_{i=1}^{k} x_i = n)
$$

(1) $X_1$ の期待値E[ $X_1$ ] を求めよ.

(2) $X_1$ の分散 Var[ $X_1$ ] を求めよ。なお、関係式 Var[ $X_1$ ] = E[ $X_1(X_1-1)$ ]+E[ $X_1$ ] - E[ $X_1$ ] $^2$ を用いて良い。

(3) 6つの面を持つサイコロを720回投げたところ、6が200回出た。有意水準を5\%として、サイコロが公正であるかどうかについて統計的検定を実施せよ。なお、標準正規分布に従う確率変数Zに対して、P(Z $\geq$ 1.96) $\approx$ 0.025となることを用いて良い。

### 题目描述

回答下列问题。

(a) 设随机变量 $X,Y$ 相互独立，且分别服从参数为 $\lambda_1$（$\lambda_1>0$）、$\lambda_2$（$\lambda_2>0$）的 Poisson 分布：

$$
\Pr(X=x)=\frac{e^{-\lambda_1}\lambda_1^x}{x!}
\qquad(x=0,1,2,3,\dots),
$$

$$
\Pr(Y=y)=\frac{e^{-\lambda_2}\lambda_2^y}{y!}
\qquad(y=0,1,2,3,\dots).
$$

(1) 求 $X$ 的期望 $E[X]$。

(2) 证明 $X,Y$ 的联合概率质量函数可分解为：参数为 $\lambda_1+\lambda_2$ 的 Poisson 分布在 $x+y$ 处的概率，与二项分布

$$
\operatorname{Bin}\left(x+y,\frac{\lambda_1}{\lambda_1+\lambda_2}\right)
$$

在 $x$ 处的概率之积。

(3) 令

$$
Z=X+Y.
$$

求 $Z$ 所服从的概率分布。

(4) 求 $Z=X+Y$ 的期望 $E[Z]$。

(b) 设随机变量 $X_1,\dots,X_k$ 服从参数为 $p_1,\dots,p_k$ 的多项分布，其中

$$
p_i\geq0,\qquad \sum_{i=1}^kp_i=1,
$$

且

$$
\Pr(X_1=x_1,\dots,X_k=x_k)
=\frac{n!}{x_1!\cdots x_k!}
p_1^{x_1}\cdots p_k^{x_k},
$$

其中

$$
x_i\geq0,\qquad \sum_{i=1}^kx_i=n.
$$

(1) 求 $X_1$ 的期望 $E[X_1]$。

(2) 求 $X_1$ 的方差 $\operatorname{Var}[X_1]$。可以使用关系式

$$
\operatorname{Var}[X_1]
=E[X_1(X_1-1)]+E[X_1]-E[X_1]^2.
$$

(3) 将一枚六面骰子投掷 $720$ 次，观察到点数 $6$ 出现了 $200$ 次。取显著性水平为 $5\%$，对骰子是否公平进行统计检验。可以使用：若随机变量 $Z$ 服从标准正态分布，则

$$
\Pr(Z\geq1.96)\approx0.025.
$$

## **Kai**

(a)
(1) Since X follows a Poisson distribution with parameter $\lambda_1$ , the expectation is $E[X] = \lambda_1$ .

(2) Since X and Y are independent Poisson random variables with parameters $\lambda_1$ and $\lambda_2$ respectively, Z = X + Y follows a Poisson distribution with parameter $\lambda_1 + \lambda_2$ .

$$
P(Z=z) = \frac{e^{-(\lambda_1+\lambda_2)} (\lambda_1+\lambda_2)^z}{z!} , z = 0,1,2,...
$$

Then, conditional distribution of X given Z = z is

$$
P(X=x|Z=z) = \frac{P(X=x, Z=z)}{P(Z=z)} = \frac{P(X=x, Y=z-x)}{P(Z=z)} = \frac{P(X=x)P(Y=z-x)}{P(Z=z)}
$$

$$
= \frac{\frac{e^{-\lambda_1}\lambda_1^x}{x!} \frac{e^{-\lambda_2}\lambda_2^{z-x}}{(z-x)!}}{\frac{e^{-(\lambda_1+\lambda_2)} (\lambda_1+\lambda_2)^z}{z!}} = \frac{z!}{x!(z-x)!} \frac{\lambda_1^x \lambda_2^{z-x}}{(\lambda_1+\lambda_2)^z} = \binom{z}{x} (\frac{\lambda_1}{\lambda_1+\lambda_2})^x (\frac{\lambda_2}{\lambda_1+\lambda_2})^{z-x}
$$

Therefore, X given Z=z follows a binomial distribution Bin( $z, \frac{\lambda_1}{\lambda_1+\lambda_2}$ ). The joint distribution of X and Y is written as the product of a Poisson distribution with a parameter $\lambda_1 + \lambda_2$ and a binomial distribution Bin( $x+y, \frac{\lambda_1}{\lambda_1 + \lambda_2}$ ).

(3) From (2), Z = X + Y follows a Poisson distribution with parameter $\lambda_1 + \lambda_2$ .

$$
P(Z=z) = \frac{e^{-(\lambda_1+\lambda_2)} (\lambda_1+\lambda_2)^z}{z!} , z = 0,1,2,...
$$

(4) Since Z follows a Poisson distribution with parameter $\lambda_1 + \lambda_2$ , the expectation is $E[Z] = \lambda_1 + \lambda_2$ .

(b)
(1) Since $X_1, ..., X_k$ follow a multinomial distribution with parameters $p_1, ..., p_k$ and n,  $E[X_1] = np_1$ .

(2) Var[ $X_1$ ] = E[ $X_1(X_1-1)$ ] + E[ $X_1$ ] - E[ $X_1$ ] $^2$ .
For a multinomial distribution, $E[X_i(X_i-1)] = n(n-1)p_i^2$ , so
Var[ $X_1$ ] = $n(n-1)p_1^2 + np_1 - (np_1)^2 = n(n-1)p_1^2 + np_1 - n^2p_1^2 = np_1 - np_1^2 = np_1(1-p_1)$ .

(3) Hypothesis testing: The null hypothesis is that the dice is fair. The alternative hypothesis is that the dice is not fair.
Under the null hypothesis, the expected number of times the side of 6 comes out is $720 \times \frac{1}{6} = 120$ .
The test statistic is

$$
Z = \frac{200 - 120}{\sqrt{720 \times \frac{1}{6} \times \frac{5}{6}}} = \frac{80}{\sqrt{100}} = \frac{80}{10} = 8
$$

Since $P(Z \geq 1.96) \approx 0.025$ , the critical value is 1.96. Since $8>1.96$, we reject the null hypothesis. Therefore, we conclude that the dice is not fair at the 5 percent significance level.
