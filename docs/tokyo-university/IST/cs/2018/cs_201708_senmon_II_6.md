---
sidebar_label: 2017年8月実施 専門科目II 問題6
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題6

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Consider the decomposition time of an RNA molecule. Assume that the probability density function of the decomposition time $T$ is

$$
f_T(t)=\lambda e^{-\lambda t},\qquad t\ge0,
$$

where $\lambda$ is a positive real constant.

Answer the following questions.

(1) Calculate the cumulative distribution function

$$
F_T(t)=\int_0^t f_T(x)\,dx.
$$

Also compute the median of $T$.

(2) We measured the decomposition times $T_i$ ($i=1,\ldots,n$) of $n$ RNA molecules. Assume that the decomposition time of each RNA molecule follows the probability density function $f_T(t)$ independently and identically. Calculate the expected value and the variance of

$$
\mu_T=\frac{\sum_{i=1}^nT_i}{n}.
$$

(3) Let $T_{\max}=\max\{T_1,\ldots,T_n\}$, which is the maximum of the measured times $T_i$ in question (2). Let $\operatorname{Prob}(T_{\max}>t)$ denote the probability that $T_{\max}>t$. Give an expression for $\operatorname{Prob}(T_{\max}>t)$ in terms of $F_T(t)$.

(4) Calculate the probability density function $f_{T_{\max}}(t)$ of $T_{\max}$, and the expected value of $T_{\max}$.

### 题目描述

RNA 分子的分解时间 $T$ 的概率密度为

$$
f_T(t)=\lambda e^{-\lambda t},\qquad t\ge0,
$$

其中 $\lambda>0$。

（1）求累积分布函数 $F_T(t)$ 及 $T$ 的中位数。

（2）独立同分布地测量 $n$ 个 RNA 分子的分解时间 $T_1,\ldots,T_n$。求样本均值
$\mu_T=\frac1n\sum_iT_i$ 的期望和方差。

（3）令 $T_{\max}=\max(T_1,\ldots,T_n)$。用 $F_T(t)$ 表示
$\Pr(T_{\max}>t)$。

（4）求 $T_{\max}$ 的概率密度和期望。

## **Kai**

### （1）

对 $t\ge0$，

$$
F_T(t)=\int_0^t\lambda e^{-\lambda x}\,dx=1-e^{-\lambda t}.
$$

当 $t<0$ 时，$F_T(t)=0$。

令 $F_T(m)=1/2$，得中位数

$$
m=\frac{\ln 2}{\lambda}.
$$

### （2）

指数分布满足 $\mathbb E[T_i]=1/\lambda$、
$\operatorname{Var}(T_i)=1/\lambda^2$。由独立性，

$$
\mathbb E[\mu_T]=\frac1\lambda,
\qquad
\operatorname{Var}(\mu_T)=\frac1{n\lambda^2}.
$$

### （3）

对 $t\ge0$，

$$
\Pr(T_{\max}>t)
=1-\Pr(T_1\le t,\ldots,T_n\le t)
=1-[F_T(t)]^n.
$$

### （4）

由 $F_{T_{\max}}(t)=[F_T(t)]^n$，

$$
f_{T_{\max}}(t)
=n[F_T(t)]^{n-1}f_T(t)
=n\lambda e^{-\lambda t}(1-e^{-\lambda t})^{n-1},
\qquad t\ge0.
$$

再用尾积分公式，

$$
\begin{aligned}
\mathbb E[T_{\max}]
&=\int_0^\infty\{1-(1-e^{-\lambda t})^n\}\,dt\\
&=\frac1\lambda\sum_{k=1}^n\frac1k.
\end{aligned}
$$
