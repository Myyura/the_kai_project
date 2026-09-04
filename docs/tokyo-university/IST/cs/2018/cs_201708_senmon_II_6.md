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
