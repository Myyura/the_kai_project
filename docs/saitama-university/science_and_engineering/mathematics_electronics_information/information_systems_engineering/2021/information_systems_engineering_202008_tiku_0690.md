---
sidebar_label: "2020年8月実施 概率统计"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問いに答えよ.

(a) 確率変数 $X$ が以下の確率密度関数をもつとする ( $C$ は定数で $\lambda > 0$ ).

$$
f(x) = \begin{cases} Ce^{-\lambda x} & x \geq 0 \\ 0 & x < 0 \end{cases}
$$

(1) 定数 $C$ を求めよ.

(2) $X$ の期待値 $E[X]$ を求めよ.

(3) 確率 $Pr(0 \leq X \leq 3)$ を計算せよ.

(b) 100回コイン投げを行い、65回表が出た。有意水準を5\%として、コインが公正であるかどうかについて統計的検定を実施せよ。なお、標準正規分布に従う確率変数 $Z$ に対して, $Pr(Z \geq 1.96) \approx 0.025$ となることを用いて良い。

(c) $X$ と $Y$ は連続確率変数である。 $X$ の確率密度関数と、 $X$ の実現値 $x$ が与えられたときの $Y$ に関する条件付き確率密度関数は以下で与えられるとする。

$$
f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left[ -\frac{x^2}{2\sigma^2} \right],
$$

$$
f_{Y|X}(y | X = x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left[ -\frac{(y-x)^2}{2\sigma^2} \right].
$$

$Y$ の実現値 $y$ が与えられたときの $X$ に関する条件付き確率密度関数 $f_{X|Y}(x | Y = y)$ の平均 $\mu_*$ と分散 $\sigma_*^2$ を求めよ.

### 题目描述

回答下列问题。

(a) 设随机变量 $X$ 的概率密度函数如下，其中 $C$ 为常数且 $\lambda>0$：

$$
f(x)=
\begin{cases}
Ce^{-\lambda x},&x\geq0,\\
0,&x<0.
\end{cases}
$$

(1) 求常数 $C$。

(2) 求 $X$ 的期望 $E[X]$。

(3) 计算

$$
\Pr(0\leq X\leq3).
$$

(b) 投掷一枚硬币 $100$ 次，观察到其中 $65$ 次为正面。取显著性水平为 $5\%$，对该硬币是否公平进行统计检验。可以使用：若随机变量 $Z$ 服从标准正态分布，则

$$
\Pr(Z\geq1.96)\approx0.025.
$$

(c) 设 $X,Y$ 为连续随机变量。$X$ 的概率密度函数以及给定 $X=x$ 时 $Y$ 的条件概率密度函数分别为

$$
f_X(x)=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(-\frac{x^2}{2\sigma^2}\right),
$$

$$
f_{Y\mid X}(y\mid X=x)
=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(-\frac{(y-x)^2}{2\sigma^2}\right).
$$

在给定 $Y=y$ 时，求 $X$ 的条件概率密度函数

$$
f_{X\mid Y}(x\mid Y=y)
$$

的均值 $\mu_*$ 与方差 $\sigma_*^2$。

## **Kai**

(a) (1) Since $f(x)$ is a probability density function, we must have $\int_{-\infty}^{\infty} f(x) dx = 1$ .

So, $\int_{-\infty}^{\infty} f(x) dx = \int_{0}^{\infty} Ce^{-\lambda x} dx = C \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_0^{\infty} = C \left( 0 - \left( -\frac{1}{\lambda} \right) \right) = \frac{C}{\lambda}$ .

Therefore, $\frac{C}{\lambda} = 1$ , which implies $C = \lambda$ .

(2) The expectation value of $X$ is given by $E[X] = \int_{-\infty}^{\infty} x f(x) dx = \int_0^{\infty} x \lambda e^{-\lambda x} dx$ .

Using integration by parts, let $u = x$ and $dv = \lambda e^{-\lambda x} dx$ . Then $du = dx$ and $v = -e^{-\lambda x}$ .

So, $E[X] = \left[ -xe^{-\lambda x} \right]_0^{\infty} + \int_0^{\infty} e^{-\lambda x} dx = 0 + \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_0^{\infty} = \frac{1}{\lambda}$ .

(3) $Pr(0 \leq X \leq 3) = \int_0^3 f(x) dx = \int_0^3 \lambda e^{-\lambda x} dx = \left[ -e^{-\lambda x} \right]_0^3 = -e^{-3\lambda} - (-e^0) = 1 - e^{-3\lambda}$ .

(b) Let $p$ be the probability of getting heads. The null hypothesis is $H_0: p = 0.5$ , and the alternative hypothesis is $H_1: p \neq 0.5$ .

The sample proportion is $\hat{p} = \frac{65}{100} = 0.65$ . The standard error is $\sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.5(1-0.5)}{100}} = \sqrt{\frac{0.25}{100}} = 0.05$ .

The test statistic is $z = \frac{\hat{p} - p}{\sqrt{\frac{p(1-p)}{n}}} = \frac{0.65 - 0.5}{0.05} = \frac{0.15}{0.05} = 3$ .

Since $|z| = 3 > 1.96$ , we reject the null hypothesis at the 5% significance level. Therefore, there is evidence to suggest that the coin is not fair.

(c) We have $f_{X|Y}(x|Y=y) \propto f_{Y|X}(y|X=x) f_X(x)$

$f_{X|Y}(x|Y=y) \propto \exp \left[ -\frac{(y-x)^2}{2\sigma^2} - \frac{x^2}{2\sigma^2} \right] = \exp \left[ -\frac{y^2 - 2xy + x^2 + x^2}{2\sigma^2} \right] = \exp \left[ -\frac{2x^2 - 2xy + y^2}{2\sigma^2} \right] = \exp \left[ -\frac{(x-\frac{y}{2})^2}{\sigma^2} - \frac{y^2}{4\sigma^2} \right] $

$f_{X|Y}(x|Y=y) \propto \exp \left[ -\frac{(x-\frac{y}{2})^2}{\sigma^2} \right]$ which represents a Gaussian. Hence $f_{X|Y}(x|Y=y) \sim N(\frac{y}{2}, \frac{\sigma^2}{2})$

Therefore, $\mu_* = \frac{y}{2}$ and $\sigma_*^2 = \frac{\sigma^2}{2}$ .
