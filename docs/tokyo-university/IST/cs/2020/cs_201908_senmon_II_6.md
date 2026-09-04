---
sidebar_label: 2019年8月実施 専門科目II 問題6
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Data-Science-Artificial-Intelligence.Machine-Learning.Expectation-Maximization-Algorithm
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題6

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
The probability density function of the normal distribution $N(\mu, \sigma^2)$ with mean $\mu \in \mathbb{R}$ and variance $\sigma^2 > 0$ is given by

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right).
$$

Let $X$ and $Z$ be random variables that independently follow $N(\mu, 1)$ and $N(0, 1)$, respectively, and define $Y = \theta X + Z$ for some constant $\theta \in \mathbb{R}$. For an integer $n > 1$, let $(X_1, Y_1), (X_2, Y_2), \ldots, (X_n, Y_n)$ be two-dimensional random variables that independently follow the same distribution as $(X, Y)$, for which we write $X^{(n)} = (X_1, X_2, \ldots, X_n)$ and $Y^{(n)} = (Y_1, Y_2, \ldots, Y_n)$.

Answer the following questions.

(1) Express the expectation $\mathbb{E}[Y]$ and variance $\mathbb{V}[Y]$ of $Y$ using $\mu$ and $\theta$.

(2) Show that the conditional distribution of $X$ given $Y$ is a normal distribution, and express its expectation $\mathbb{E}[X|Y]$ and variance $\mathbb{V}[X|Y]$ using $\mu$, $\theta$, and $Y$.

(3) Let $(x^{(n)}, y^{(n)})$ denote a realization of $(X^{(n)}, Y^{(n)})$. Express the joint probability density function $p_{\mu, \theta}(x^{(n)}, y^{(n)})$ of $(X^{(n)}, Y^{(n)})$ using $\mu, \theta, x^{(n)} = (x_1, x_2, \ldots, x_n)$ and $y^{(n)} = (y_1, y_2, \ldots, y_n)$.

(4) Consider maximum-likelihood estimation of $(\mu, \theta)$ by the EM algorithm for the case where the observation of $X_n$ is missing from $(X^{(n)},Y^{(n)})$, that is, the case where $(X^{(n-1)},Y^{(n)})$ is observed. Then the update rule of estimators of $(\mu, \theta)$ by the EM algorithm for some initial value $(\mu_0, \theta_0) \in \mathbb{R}^2$ is given by

$$
(\mu_{t+1}, \theta_{t+1}) = \mathop{\arg\max}\limits_{(\mu, \theta) \in \mathbb{R}^2} \mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(X^{(n)},Y^{(n)})], \quad t = 0, 1, \ldots,
$$

where $\bar{\mu}$ and $\bar{\sigma}^2$ are the values obtained by the substitution $(\mu, \theta, Y) := (\mu_t, \theta_t, Y_n)$ in the expressions of $\mathbb{E}[X|Y]$ and $\mathbb{V}[X|Y]$ obtained in question (2), respectively, and $\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}$ denotes the expectation when $X_n$ follows $N(\bar{\mu}, \bar{\sigma}^2)$ and $(X^{(n-1)},Y^{(n)})$ is fixed.

- (i) Express $\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(X^{(n)},Y^{(n)})]$ using $n, \mu, \theta, \bar{\mu}, \bar{\sigma}^2, X^{(n-1)}$ and $Y^{(n)}$.
- (ii) Express $(\mu_{t+1}, \theta_{t+1})$ using $n, \bar{\mu}, \bar{\sigma}^2, X^{(n-1)}$ and $Y^{(n)}$.

### 题目描述

均值为 $\mu\in\mathbb R$、方差为 $\sigma^2>0$ 的正态分布
$N(\mu,\sigma^2)$ 的密度为

$$
f(x)=\frac1{\sqrt{2\pi\sigma^2}}
\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$

设随机变量 $X,Z$ 相互独立，分别服从 $N(\mu,1)$ 与 $N(0,1)$，并令
$Y=\theta X+Z$，其中 $\theta\in\mathbb R$。对整数 $n>1$，令
$(X_i,Y_i)\ (i=1,\ldots,n)$ 独立同分布于 $(X,Y)$，记
$X^{(n)}=(X_1,\ldots,X_n)$、$Y^{(n)}=(Y_1,\ldots,Y_n)$。回答下列问题。

（1）用 $\mu,\theta$ 表示 $\mathbb E[Y]$ 和 $\mathbb V[Y]$。

（2）证明给定 $Y$ 时 $X$ 的条件分布仍为正态分布，并用
$\mu,\theta,Y$ 表示 $\mathbb E[X\mid Y]$ 与 $\mathbb V[X\mid Y]$。

（3）设 $(x^{(n)},y^{(n)})$ 是
$(X^{(n)},Y^{(n)})$ 的一个实现。用
$\mu,\theta,x^{(n)},y^{(n)}$ 写出其联合密度
$p_{\mu,\theta}(x^{(n)},y^{(n)})$。

（4）现在 $X_n$ 缺失，仅观测到 $(X^{(n-1)},Y^{(n)})$，用 EM 算法进行
$(\mu,\theta)$ 的最大似然估计。从任意初值 $(\mu_0,\theta_0)\in\mathbb R^2$ 出发，更新规则为

$$
(\mu_{t+1},\theta_{t+1})
=\mathop{\arg\max}_{(\mu,\theta)\in\mathbb R^2}
\mathbb E_{X_n\sim N(\bar\mu,\bar\sigma^2)}
[\log p_{\mu,\theta}(X^{(n)},Y^{(n)})],\qquad t=0,1,\ldots,
$$

其中 $\bar\mu,\bar\sigma^2$ 分别是在第（2）问的条件均值、条件方差表达式中代入
$(\mu,\theta,Y)=(\mu_t,\theta_t,Y_n)$ 所得；取期望时固定
$(X^{(n-1)},Y^{(n)})$。

- （i）用 $n,\mu,\theta,\bar\mu,\bar\sigma^2,X^{(n-1)},Y^{(n)}$
  表示上述期望对数似然。
- （ii）用 $n,\bar\mu,\bar\sigma^2,X^{(n-1)},Y^{(n)}$
  表示更新后的 $(\mu_{t+1},\theta_{t+1})$。

## **Kai**

### (1)

由 $X,Z$ 独立，

$$
\boxed{\mathbb E[Y]=\theta\mu,\qquad\mathbb V[Y]=1+\theta^2.}
$$

### (2)

固定 $Y=y$，联合密度中与 $x$ 有关的指数为

$$
-\frac12\big[(x-\mu)^2+(y-\theta x)^2\big]
=-\frac{1+\theta^2}{2}
\left(x-\frac{\mu+\theta y}{1+\theta^2}\right)^2+C(y).
$$

归一化后可知

$$
\boxed{X\mid Y=y\sim N\left(\frac{\mu+\theta y}{1+\theta^2},\frac1{1+\theta^2}\right).}
$$

因此条件均值为 $(\mu+\theta Y)/(1+\theta^2)$，条件方差为 $1/(1+\theta^2)$。

### (3)

$X_i\sim N(\mu,1)$，且 $Y_i\mid X_i=x_i\sim N(\theta x_i,1)$。各样本独立，故

$$
\boxed{p_{\mu,\theta}(x^{(n)},y^{(n)})
=(2\pi)^{-n}\exp\left\{-\frac12\sum_{i=1}^n
\big[(x_i-\mu)^2+(y_i-\theta x_i)^2\big]\right\}.}
$$

### (4)

令

$$
\bar\mu=\frac{\mu_t+\theta_tY_n}{1+\theta_t^2},\qquad
\bar\sigma^2=\frac1{1+\theta_t^2}.
$$

**(i)** 利用 $\mathbb E[X_n]=\bar\mu$、$\mathbb E[X_n^2]=\bar\mu^2+\bar\sigma^2$，有

$$
\begin{aligned}
Q(\mu,\theta)
={}&-n\log(2\pi)\\
&-\frac12\left\{
\sum_{i=1}^{n-1}\big[(X_i-\mu)^2+(Y_i-\theta X_i)^2\big]
+(\bar\mu-\mu)^2+\bar\sigma^2
+(Y_n-\theta\bar\mu)^2+\theta^2\bar\sigma^2
\right\}.
\end{aligned}
$$

**(ii)** 分别令对 $\mu,\theta$ 的偏导为零，得

$$
\boxed{\mu_{t+1}=\frac{\sum_{i=1}^{n-1}X_i+\bar\mu}{n},\qquad
\theta_{t+1}=\frac{\sum_{i=1}^{n-1}X_iY_i+\bar\mu Y_n}
{\sum_{i=1}^{n-1}X_i^2+\bar\mu^2+\bar\sigma^2}.}
$$

$Q$ 的 Hessian 为对角矩阵，对角元分别为 $-n$ 和
$-(\sum_{i=1}^{n-1}X_i^2+\bar\mu^2+\bar\sigma^2)$，均严格为负，因此以上是唯一最大值点。
