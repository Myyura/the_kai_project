---
sidebar_label: 2022年8月実施 選択問題 確率統計
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Geometric-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Negative-Binomial-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 選択問題 確率統計

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$0<p<1$、$q=1-p$ とし、整数 $a\ge1$ に対して独立な確率変数 $Y_a$ が

$$
P(Y_a=k)={}_aH_kp^aq^k,\qquad
{}_aH_k=\binom{a+k-1}{k},\qquad k=0,1,2,\ldots
$$

に従うとする。$Y_1$ の積率母関数・平均・分散、および $Y_1$ と同じ分布に従う独立な標本 $x_1,\ldots,x_n$ からの $p$ の最尤推定量を求め、重複組合せの恒等式、畳み込みによる $Y_{a+1}$ の分布、および $Y_a$ の積率母関数を示せ。

### 题目描述

给定负二项分布族，求几何分布的矩母函数、均值、方差及参数的极大似然估计；证明重组合恒等式与卷积关系，并求一般负二项分布的矩母函数。

## **Kai**

### (1)

$X=Y_1$ では $P(X=k)=pq^k$ であるから、

$$
\boxed{
\varphi(\theta)
=\sum_{k=0}^{\infty}p(qe^\theta)^k
=\frac{p}{1-qe^\theta}}
\qquad(qe^\theta<1).
$$

### (2)

$\varphi'(0)$ と $\varphi''(0)$ を用いると、

$$
\boxed{E[X]=\frac qp,\qquad V[X]=\frac q{p^2}}.
$$

### (3)

$S=\sum_{i=1}^n x_i$ とおく。尤度は

$$
L(p)=p^n(1-p)^S
$$

である。$S>0$ では $d\log L/dp=0$ より、

$$
\boxed{\widehat p=\frac{n}{n+S}
=\frac{1}{1+\overline x}}.
$$

$S=0$ では $0<p<1$ 内に最大点はなく、$p\uparrow1$ のとき上限に近づく（閉区間まで許せば $\widehat p=1$）。

### (4)

$k=0$ では両辺は $1$ である。$k-1$ で成立すると仮定すれば、Pascal の公式より

$$
\begin{aligned}
\sum_{m=0}^{k}{}_aH_m
&={}_{a+1}H_{k-1}+{}_aH_k\\
&=\binom{a+k-1}{k-1}+\binom{a+k-1}{k}\\
&=\binom{a+k}{k}={}_{a+1}H_k.
\end{aligned}
$$

よって

$$
\boxed{{}_{a+1}H_k=\sum_{m=0}^{k}{}_aH_m}.
$$

### (5)

$Y_a$ と $Y_1$ は独立なので、畳み込みにより

$$
\begin{aligned}
P(Y_a+Y_1=k)
&=\sum_{m=0}^k{}_aH_mp^aq^m\,pq^{k-m}\\
&=p^{a+1}q^k\sum_{m=0}^k{}_aH_m\\
&={}_{a+1}H_kp^{a+1}q^k.
\end{aligned}
$$

したがって、

$$
\boxed{Y_{a+1}\mathrel{\overset{d}{=}}Y_a+Y_1}.
$$

### (6)

(5) または二項級数より、

$$
\boxed{
\varphi_a(\theta)
=\left(\frac{p}{1-qe^\theta}\right)^a}
\qquad(qe^\theta<1).
$$
