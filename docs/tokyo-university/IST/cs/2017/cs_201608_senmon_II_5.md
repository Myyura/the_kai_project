---
sidebar_label: 2016年8月実施 専門科目II 問題5
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Bayesian-Statistics.Bayesian-Inference
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題5

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Consider the probability density function of the one-dimensional normal distribution with mean $\mu$ and variance $\sigma_0^2$:

$$
\mathcal N(x\mid\mu,\sigma_0^2)
=\frac{1}{\sqrt{2\pi\sigma_0^2}}\exp\left(-\frac{1}{2\sigma_0^2}(x-\mu)^2\right).
$$

Let us also consider $n$ real-valued observations; they are denoted by $x_{1:n}=(x_1,x_2,\ldots,x_n)$. We further suppose the following.

- Each observation $x_i$ (where $i=1,2,\ldots,n$) is independently distributed, following the one-dimensional normal distribution with mean $\mu$ and variance $\sigma_0^2$.
- Variance $\sigma_0^2$ is known.
- The prior distribution of $\mu$ is the one-dimensional normal distribution with mean $m_0$ and variance $\rho_0^2$.

Answer the following questions.

(1) Given an observation $x_1$, let $p(\mu\mid x_1,\sigma_0^2,m_0,\rho_0^2)$ denote the probability density function of the Bayes posterior distribution of the random variable $\mu$. This distribution is a one-dimensional normal distribution, and its probability density function is given by $\mathcal N(\mu\mid m_1,\rho_1^2)$. Express mean $m_1$ and variance $\rho_1^2$, using $x_1,\sigma_0^2,m_0$ and $\rho_0^2$.

You can use the following equality:

$$
p(\mu\mid x_1,\sigma_0^2,m_0,\rho_0^2)
=\frac{\mathcal N(x_1\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_0,\rho_0^2)}
{\int\mathcal N(x_1\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_0,\rho_0^2)\,d\mu}.
$$

(2) Let $n\ge2$. Given observations $x_{1:n}=(x_1,x_2,\ldots,x_n)$, let $p(\mu\mid x_{1:n},\sigma_0^2,m_0,\rho_0^2)$ denote the probability density function of the Bayes posterior distribution of the random variable $\mu$. This distribution is a one-dimensional normal distribution, and its probability density function is given by $\mathcal N(\mu\mid m_n,\rho_n^2)$. Express mean $m_n$ and variance $\rho_n^2$, using $n,x_{1:n},\sigma_0^2,m_0$ and $\rho_0^2$.

(3) For the Bayes posterior distribution $p(\mu\mid x_{1:n},\sigma_0^2,m_0,\rho_0^2)$ of Question (2), show that the following equality holds:

$$
p(\mu\mid x_{1:n},\sigma_0^2,m_0,\rho_0^2)
=\frac{\mathcal N(x_n\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_{n-1},\rho_{n-1}^2)}
{\int\mathcal N(x_n\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_{n-1},\rho_{n-1}^2)\,d\mu}.
$$

### 题目描述

一维正态分布密度为

$$
\mathcal N(x\mid\mu,\sigma_0^2)=\frac1{\sqrt{2\pi\sigma_0^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma_0^2}\right].
$$

观测 $x_{1:n}=(x_1,\ldots,x_n)$ 在给定 $\mu$ 时独立同分布于
$\mathcal N(\mu,\sigma_0^2)$，其中 $\sigma_0^2$ 已知；先验为
$\mu\sim\mathcal N(m_0,\rho_0^2)$。

（1）仅有观测 $x_1$ 时，后验为 $\mathcal N(m_1,\rho_1^2)$。求 $m_1,\rho_1^2$。

（2）给定 $n\ge2$ 个观测时，后验为 $\mathcal N(m_n,\rho_n^2)$。求 $m_n,\rho_n^2$。

（3）证明后验可递推写为

$$
p(\mu\mid x_{1:n},\sigma_0^2,m_0,\rho_0^2)
=\frac{\mathcal N(x_n\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_{n-1},\rho_{n-1}^2)}
{\int\mathcal N(x_n\mid\mu,\sigma_0^2)\mathcal N(\mu\mid m_{n-1},\rho_{n-1}^2)\,d\mu}.
$$

## **Kai**
### (1)
似然与先验相乘后，关于 $\mu$ 的指数项为

$$
-\frac12\left[\frac{(x_1-\mu)^2}{\sigma_0^2}
+\frac{(\mu-m_0)^2}{\rho_0^2}\right].
$$

配方得

$$
\boxed{\rho_1^2=\left(\frac1{\sigma_0^2}+\frac1{\rho_0^2}\right)^{-1}
=\frac{\sigma_0^2\rho_0^2}{\sigma_0^2+\rho_0^2}},
$$

$$
\boxed{m_1=\rho_1^2\left(\frac{x_1}{\sigma_0^2}+\frac{m_0}{\rho_0^2}\right)
=\frac{\rho_0^2x_1+\sigma_0^2m_0}{\sigma_0^2+\rho_0^2}}.
$$

### (2)
独立性给出 $n$ 个二次项。合并 $\mu^2$ 与 $\mu$ 的系数可得

$$
\boxed{\rho_n^2=\left(\frac n{\sigma_0^2}+\frac1{\rho_0^2}\right)^{-1}
=\frac{\sigma_0^2\rho_0^2}{n\rho_0^2+\sigma_0^2}},
$$

$$
\boxed{m_n=\rho_n^2\left(\frac{\sum_{i=1}^n x_i}{\sigma_0^2}+\frac{m_0}{\rho_0^2}\right)
=\frac{\rho_0^2\sum_{i=1}^n x_i+\sigma_0^2m_0}{n\rho_0^2+\sigma_0^2}}.
$$

### (3)
由条件独立性和 Bayes 公式，

$$
\begin{aligned}
p(\mu\mid x_{1:n})
&\propto p(x_n\mid\mu,x_{1:n-1})p(\mu\mid x_{1:n-1})\\
&=p(x_n\mid\mu)p(\mu\mid x_{1:n-1}).
\end{aligned}
$$

其中 $p(x_n\mid\mu)=\mathcal N(x_n\mid\mu,\sigma_0^2)$，而由（2）对 $n-1$ 的结论，
$p(\mu\mid x_{1:n-1})=\mathcal N(\mu\mid m_{n-1},\rho_{n-1}^2)$。除以对 $\mu$ 的积分作归一化，即得到题中等式。
