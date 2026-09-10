---
sidebar_label: '2013年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Large-Deviations
---

# 東京大学 工学系研究科 2013年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

表の確率が $p\in(0,1)$ のコインを独立に $n$ 回投げる。ちょうど $k$ 回表が出る確率を $P_n(k)$（$0\le k\le n$）とする。

I. $P_n(k)$ を求めよ。

II. $\mu=\sum_{k=0}^nkP_n(k)$ から $\mu=np$ を示せ。

III. $0<x<1$ に対し $I(x)=\lim_{n\to\infty}[-n^{-1}\log_eP_n(\lfloor xn\rfloor)]$ を求め、その最小値と最小点を求めよ。
Stirling の公式 $m!\sim\sqrt{2\pi m}(m/e)^m$ を用いてよい。

IV. $\phi_n(\theta)=\log_e\sum_{k=0}^ne^{\theta k}P_n(k)$（$\theta\in\mathbb R$）を求めよ。
さらに $\phi(\theta)=\lim_{n\to\infty}\phi_n(\theta)/n$ とし、$0<\eta<1$ に対して
$\phi^*(\eta)=\max_{\theta\in\mathbb R}[\eta\theta-\phi(\theta)]$ を求めよ。

#### 题目描述

独立掷同一枚硬币 $n$ 次，每次正面概率 $p\in(0,1)$。令 $P_n(k)$ 为恰好 $k$ 次正面的概率，$0\le k\le n$。

I. 求 $P_n(k)$。

II. 从 $\mu=\sum_{k=0}^n kP_n(k)$ 证明 $\mu=np$。

III. 对 $0<x<1$，求 $I(x)=\lim_{n\to\infty}[-n^{-1}\log_e P_n(\lfloor xn\rfloor)]$，并求其最小值及取得最小值的 $x$。
可用 Stirling 公式 $m!\sim\sqrt{2\pi m}(m/e)^m$。

IV. 令 $\phi_n(\theta)=\log_e\sum_{k=0}^n e^{\theta k}P_n(k)$，$\theta\in\mathbb R$。求 $\phi_n(\theta)$；再令
$\phi(\theta)=\lim_{n\to\infty}\phi_n(\theta)/n$，求
$\phi^*(\eta)=\max_{\theta\in\mathbb R}[\eta\theta-\phi(\theta)]$，其中 $0<\eta<1$。

## **Kai**

### I–II

$$
\boxed{P_n(k)=\binom nkp^k(1-p)^{n-k}}.
$$

$k\binom nk=n\binom{n-1}{k-1}$ と二項定理より、

$$
\mu=np\sum_{j=0}^{n-1}\binom{n-1}jp^j(1-p)^{n-1-j}=\boxed{np}.
$$

### III

$x_n=\lfloor xn\rfloor/n\to x$ とおく。Stirling の公式から、

$$
\frac1n\log\binom n{nx_n}
=-x_n\log x_n-(1-x_n)\log(1-x_n)+o(1).
$$

従って、

$$
\boxed{I(x)=x\log\frac xp+(1-x)\log\frac{1-x}{1-p}}.
$$

$I'(x)=\log\dfrac{x(1-p)}{p(1-x)}$、$I''(x)=1/x+1/(1-x)>0$。
唯一の最小点は $\boxed{x=p}$、最小値は $\boxed{0}$ である。

### IV

二項定理より、

$$
\boxed{\phi_n(\theta)=n\log(1-p+pe^\theta)},\qquad
\phi(\theta)=\log(1-p+pe^\theta).
$$

最大点は $\eta=pe^\theta/(1-p+pe^\theta)$ を満たすから、
$\theta_* =\log[\eta(1-p)/(p(1-\eta))]$。
目的関数の二階導関数は常に負なので、

$$
\boxed{\phi^*(\eta)=\eta\log\frac\eta p+(1-\eta)\log\frac{1-\eta}{1-p}=I(\eta)}.
$$

