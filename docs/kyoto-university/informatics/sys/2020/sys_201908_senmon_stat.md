---
sidebar_label: 2019年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Lognormal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Basics.Joint-Distribution
---
# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 専門科目 確率統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), [AKIRA](https://www.xiaohongshu.com/explore/6871bb3f000000000d01afdc?xsec_token=ABzqL-a7Z1UUEuH5W1f5wAJhySZaFfcwIp-8k2CbGTzus=), 祭音Myyura

## **Description**

### 問題1
確率変数 $X$ の確率分布が以下の確率密度関数で与えられたとき、$X$ の期待値と分散を求めなさい。$\mu$ は実定数である。

$$
f(x) = \left\{
    \begin{aligned}
    &\frac{1}{\sqrt{2\pi}x} \exp \big(-\frac{1}{2} (\log x - \mu)^2\big), &x > 0 \\
    &0, &x \le 0
    \end{aligned}
\right.
$$

### 問題2
確率変数 $X$ は確率密度関数

$$
f(x; \mu) = \left\{
    \begin{aligned}
    &\frac{1}{\mu} \exp \big(-\frac{x}{\mu} \big), &x > 0 \\
    &0, &x \le 0
    \end{aligned}
\right.
$$

の指数分布にしたがう。ただし $\mu > 0$ はパラメータである。以下の設問に答えなさい。

**(1)** パラメータ $\mu$ は未知とする。

(1-1) $X$ に基づく $\mu$ の最尤推定量 $\hat{\mu}$ を求めよ。

(1-2) $\hat{\mu}$ が $\mu$ の不偏推定量であることを示せ。

(1-3) ある定数 $\mu_0 > 0$ に対して、帰無仮説 $H_0: \mu=\mu_0$、対立仮説 $H_1: \mu > \mu_0$ の仮説検定を有意水準 $\alpha (0 < \alpha < 1)$ で行いたい。そのための定数 $c>0$ を定めておき、 $X > c$ のとき帰無仮説を棄却する。定数 $c$ を求めよ。

(1-4) ある関数 $L: (0, \infty) \rightarrow \mathbb{R}$ を用いた集合 $S(x) = \{z \mid z \ge L(x)\} \subsetneq \mathbb{R}$ を定義する。このとき $P(\mu \in S(X)) = 1 - \alpha$ となるように関数 $L(x)$ を定めよ。ただし $P(A)$ は事象 $A$ の確率を表し、$0 < \alpha < 1$ は定数である。

**(2)** 機械Mは $2$ 個の部品で構成されており、Mの運転開始から部品 $i$ が故障するまでの経過時間を確率変数 $X_i$ で表す $(i = 1,2)$。 $X_1, X_2$ は独立に確率密度関数 $f(x; \mu)$ の指数分布にしたがう。ただし $\mu=1$ とする。

(2-1) $2$ 個の部品のいずれか故障するとMは警告を発する。このとき、Mの運転開始からMが警告を発するまでの経過時間を確率変数 $U$ で表す、$U$ の確率密度関数を求めよ。

(2-2) $2$ 個の部品が共に故障したらMは停止する。このとき、Mの運転開始からMの停止するまでの経過時間を確率変数 $V$ で表す。$V$ の確率密度関数を求めよ。

(2-3) 上で定義した $U, V$ の同時確率密度関数を求めよ。

#### 题目描述

1. 随机变量 $X$ 的密度为

$$
   f(x)=
   \begin{cases}
   \dfrac{1}{\sqrt{2\pi}x}
   \exp\!\left[-\dfrac12(\log x-\mu)^2\right] & (x>0),\\
   0 & (x\leq0),
   \end{cases}
$$

   其中 $\mu$ 为实常数。求 $X$ 的期望与方差。

2. 随机变量 $X$ 服从密度为

$$
   f(x;\mu)=
   \begin{cases}
   \dfrac1\mu\exp\!\left(-\dfrac{x}{\mu}\right)&(x>0),\\
   0&(x\leq0)
   \end{cases}
$$

   的指数分布，其中 $\mu>0$。

   （1）设参数 $\mu$ 未知。

   - （1-1）基于单个观测 $X$ 求 $\mu$ 的最大似然估计量 $\hat\mu$。
   - （1-2）证明 $\hat\mu$ 是 $\mu$ 的无偏估计量。
   - （1-3）对给定常数 $\mu_0>0$，在显著性水平 $\alpha$（$0<\alpha<1$）下检验

$$
     H_0:\mu=\mu_0,\qquad H_1:\mu>\mu_0.
$$

     规定当 $X>c$ 时拒绝原假设，其中 $c>0$，求临界值 $c$。
   - （1-4）用函数 $L:(0,\infty)\to\mathbb R$ 定义真子集

$$
     S(x)=\{z\mid z\geq L(x)\}\subsetneq\mathbb R.
$$

     求 $L(x)$，使

$$
     P\bigl(\mu\in S(X)\bigr)=1-\alpha,
$$

     其中 $0<\alpha<1$ 为常数。

   （2）机器 M 由两个部件构成，从机器启动到部件 $i$ 故障的时间记为 $X_i$（$i=1,2$）。$X_1,X_2$ 相互独立，且都服从上述指数分布，取 $\mu=1$。

   - （2-1）任一部件故障时机器发出警告。令从启动到发出警告的时间为 $U$，求 $U$ 的概率密度函数。
   - （2-2）两个部件都故障时机器停止。令从启动到停止的时间为 $V$，求 $V$ 的概率密度函数。
   - （2-3）求上述 $U,V$ 的联合概率密度函数。


## **Kai**

### 問題1

$Y=\log X$ とおくと $Y\sim N(\mu,1)$。平方完成により

$$
E[X^k]=E[e^{kY}]=e^{k\mu+k^2/2}.
$$

したがって

$$
\boxed{E[X]=e^{\mu+1/2},\qquad \operatorname{Var}(X)=(e-1)e^{2\mu+1}}.
$$

### 問題2

**(1-1)** $\log L(\mu)=-\log\mu-X/\mu$ なので

$$
\frac{d\log L}{d\mu}=\frac{X-\mu}{\mu^2}.
$$

$\mu=X$ の前後で符号が正から負へ変わるため $\boxed{\widehat\mu=X}$。

**(1-2)** $E[\widehat\mu]=E[X]=\int_0^\infty xe^{-x/\mu}\,dx/\mu=\mu$ なので不偏である。

**(1-3)** $P_{\mu_0}(X>c)=e^{-c/\mu_0}=\alpha$ より

$$
\boxed{c=-\mu_0\log\alpha}.
$$

**(1-4)**

$$
P_\mu\left(\mu\ge-\frac{X}{\log\alpha}\right)
=P_\mu(X\le-\mu\log\alpha)=1-\alpha.
$$

よって $\boxed{L(x)=-x/\log\alpha}$。

**(2-1)** $U=\min(X_1,X_2)$ なので $P(U>u)=e^{-2u}$ ($u>0$)。したがって

$$
f_U(u)=\begin{cases}2e^{-2u}&u>0,\\0&u\le0.\end{cases}
$$

**(2-2)** $V=\max(X_1,X_2)$ なので $P(V\le v)=(1-e^{-v})^2$ ($v>0$)。よって

$$
f_V(v)=\begin{cases}2e^{-v}(1-e^{-v})&v>0,\\0&v\le0.\end{cases}
$$

**(2-3)** $0<u<v$ では $(X_1,X_2)=(u,v),(v,u)$ の2通りがあり、

$$
f_{U,V}(u,v)=\begin{cases}2e^{-(u+v)}&0<u<v,\\0&\text{その他}.\end{cases}
$$

