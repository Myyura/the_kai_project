---
sidebar_label: 2023年8月実施 選択問題 確率統計
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Basics.Order-Statistics
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 選択問題 確率統計

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

確率変数 $X$ の密度関数を

$$
f(x)=\frac1\beta e^{-x/\beta}\quad(x\geq0,\ \beta>0)
$$

とする。積率母関数、$\beta_0>0$ に対する $P(X>\beta_0)$、$Z=X\mathbf1_{\{X\ge\beta_0\}}$ の期待値、および $Y=\sqrt X$ の期待値と分散を求めよ。また、独立同分布な標本 $x_1,\ldots,x_n$ から $\beta$ を最尤推定し、$W=\max(X_1,\ldots,X_n)$ の $W>\beta_0$ の下での条件付き密度を求めよ。

### 题目描述

给定尺度参数为 $\beta$ 的指数分布，求矩生成函数、尾概率、截断变量和平方根变换的矩；再求 $\beta$ 的极大似然估计，以及样本最大值在超过阈值条件下的密度。

## **Kai**

### (1)

$$
\begin{aligned}
\varphi(\theta)
&=\int_0^\infty e^{\theta x}\frac1\beta e^{-x/\beta}\,dx\\
&=\boxed{\frac1{1-\beta\theta}}
\qquad\left(\theta<\frac1\beta\right).
\end{aligned}
$$

### (2)

$$
\boxed{P(X>\beta_0)=\int_{\beta_0}^{\infty}\frac1\beta e^{-x/\beta}\,dx
=e^{-\beta_0/\beta}}.
$$

### (3)

$$
\begin{aligned}
E[Z]
&=\int_{\beta_0}^{\infty}x\frac1\beta e^{-x/\beta}\,dx\\
&=\boxed{(\beta_0+\beta)e^{-\beta_0/\beta}}.
\end{aligned}
$$

### (4)

$$
E[Y]
=\int_0^\infty\sqrt{x}\frac1\beta e^{-x/\beta}\,dx
=\boxed{\frac{\sqrt{\pi\beta}}2}.
$$

また $E[Y^2]=E[X]=\beta$ であるから、

$$
\boxed{V[Y]=\beta-\frac{\pi\beta}{4}
=\frac{4-\pi}{4}\beta}.
$$

### (5)

尤度は

$$
L(\beta)=\beta^{-n}
\exp\left(-\frac1\beta\sum_{i=1}^n x_i\right).
$$

$\sum_i x_i>0$ のとき、$\partial\log L/\partial\beta=0$ より、

$$
\boxed{\widehat\beta=\frac1n\sum_{i=1}^n x_i}.
$$

すべての $x_i$ が $0$ なら、$\beta\downarrow0$ で尤度は発散するため、$\beta>0$ の範囲に最尤推定値は存在しない。

### (6)

$w\geq0$ に対して

$$
F_W(w)=P(W\leq w)=\left(1-e^{-w/\beta}\right)^n.
$$

したがって $w\geq\beta_0$ では、

$$
\boxed{
g(w\mid W>\beta_0)=
\frac{\dfrac n\beta e^{-w/\beta}
\left(1-e^{-w/\beta}\right)^{n-1}}
{1-\left(1-e^{-\beta_0/\beta}\right)^n}}
$$

であり、$w<\beta_0$ では $g(w\mid W>\beta_0)=0$ である。
