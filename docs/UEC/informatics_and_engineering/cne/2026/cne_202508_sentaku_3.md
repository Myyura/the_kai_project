---
sidebar_label: 2025年8月実施 選択問題 確率統計
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Bayesian-Statistics.Beta-Bernoulli-Model
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 選択問題 確率統計

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X\sim\operatorname{Bin}(m_1,q)$、$Y\sim\operatorname{Bin}(m_2,q)$ を独立とする。ただし $m_1,m_2$ は既知の正整数、$0<q<1$ とする。$X$ の積率母関数、期待値・分散、観測値 $X=x$ に基づく $q$ の最尤推定量を求めよ。さらに $Q\sim\operatorname{Beta}(\alpha,\beta)$（$\alpha,\beta>0$）とし、$Q$ を条件として $X,Y$ は独立に上記の二項分布に従うとする。$X=x$ の観測後分布と $Y$ の予測分布、および $S=X+Y$ の $Q=q$ の下での分布を求めよ。

### 题目描述

给定参数相同的两个独立二项分布，求矩生成函数、期望与方差、极大似然估计；再以 Beta 分布为先验，求后验参数、后验预测分布及和的条件分布。

## **Kai**

### (1)

$$
\begin{aligned}
M_X(t)
&=\sum_{x=0}^{m_1}\binom{m_1}{x}(qe^t)^x(1-q)^{m_1-x}\\
&=\boxed{(qe^t+1-q)^{m_1}}.
\end{aligned}
$$

### (2)

$M_X'(0)$ と $M_X''(0)$ より、

$$
\boxed{E[X]=m_1q},\qquad
\boxed{V[X]=m_1q(1-q)}.
$$

### (3)

$$
L(q)=\binom{m_1}{x}q^x(1-q)^{m_1-x}
$$

とすると、$0<x<m_1$ では

$$
\frac{d}{dq}\log L(q)=\frac{x}{q}-\frac{m_1-x}{1-q}=0.
$$

したがって、

$$
\boxed{\widehat q=\frac{x}{m_1}}.
$$

$x=0$ では $q\downarrow0$、$x=m_1$ では $q\uparrow1$ に従い尤度が増加するため、題設の開区間 $0<q<1$ 内に最尤推定値は存在しない。パラメータ空間を $[0,1]$ とすれば、端点でも $\widehat q=x/m_1$ である。

### (4)

Bayes の定理より、

$$
f_{Q\mid X=x}(q)\propto q^{x+\alpha-1}(1-q)^{m_1-x+\beta-1}.
$$

よって、

$$
\boxed{\alpha'=x+\alpha},\qquad
\boxed{\beta'=m_1-x+\beta}.
$$

### (5)

$$
\begin{aligned}
P(Y=y\mid X=x)
&=\int_0^1\binom{m_2}{y}q^y(1-q)^{m_2-y}
\frac{q^{\alpha'-1}(1-q)^{\beta'-1}}{B(\alpha',\beta')}\,dq\\
&=\boxed{
\binom{m_2}{y}
\frac{B(y+x+\alpha,\ m_2-y+m_1-x+\beta)}
{B(x+\alpha,\ m_1-x+\beta)}}.
\end{aligned}
$$

### (6)

Vandermonde の恒等式を用いると、

$$
\begin{aligned}
P(S=s\mid Q=q)
&=\sum_k\binom{m_1}{k}\binom{m_2}{s-k}
q^s(1-q)^{m_1+m_2-s}\\
&=\binom{m_1+m_2}{s}q^s(1-q)^{m_1+m_2-s}.
\end{aligned}
$$

したがって、

$$
\boxed{S\mid Q=q\sim\operatorname{Bin}(m_1+m_2,q)}.
$$
