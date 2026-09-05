---
sidebar_label: 2025年8月実施 専門科目 S-1
tags:
  - Kyoto-University
  - Probability-Statistics.Bayesian-Statistics.Beta-Bernoulli-Model
  - Probability-Statistics.Bayesian-Statistics.Bayesian-Inference
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Selection-Bias
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Effect-Size
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-1

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2025_ist.pdf)
### Q.1
Let $\theta$ be the probability of getting heads in a coin toss. Assuming that $\theta$ is a random variable, we want to estimate the probability distribution of $\theta$ from observed data $D$ of independent coin tosses (Bernoulli trials). Here, we introduce a prior distribution of $\theta$ ($p(\theta)$) that follows a beta distribution $\text{Beta}(\theta; \alpha, \beta)$, where $\alpha$ and $\beta$ are the parameters. The probability density function of the beta distribution is given by

$$ 
f(\theta; \alpha, \beta) = \frac{1}{B(\alpha, \beta)} \theta^{\alpha-1} (1 - \theta)^{\beta-1}, \quad (\alpha > 0, \ \beta > 0, \ 0 \leq \theta \leq 1) 
$$

where $B(\alpha, \beta) = \int_{0}^{1} \theta^{\alpha-1}(1 - \theta)^{\beta-1} d\theta$ is the beta function.

(1) Describe briefly what kind of distribution $\text{Beta}(\theta; 1, 1)$ is.

(2) Given that heads appeared $k$ times in $n$ trials, determine the likelihood function $p(D \mid \theta)$ for this observation $D$.

(3) According to Bayes' theorem, the posterior distribution of $\theta$ after observing $D$ can be calculated as $p(\theta \mid D) = p(\theta) \, p(D \mid \theta) / p(D)$. Here, $p(D)$ is a normalization constant that adjusts the integral of the posterior distribution to be 1. Given a prior distribution $\text{Beta}(\theta; \alpha, \beta)$ and observed data consisting of $k$ heads in $n$ trials, derive the posterior distribution of $\theta$.

### Q.2
Let $M$ and $W$ be random variables representing scores in math and English, respectively. Assume $M$ and $W$ are independent and both normally distributed with mean 50 and standard deviation 10.

(1) Let $S$ be the total score $(M + W)$ and $D$ be the difference in scores $(M - W)$. Calculate the variances of $S$ and $D$: $\text{Var}(S)$ and $\text{Var}(D)$.

(2) Show that $S$ and $D$ are uncorrelated.

(3) If two random variables follow a bivariate normal distribution and are uncorrelated, they are independent. Using this property, calculate the covariance of $M$ and $W$ given that $S$ is fixed at $s$ (where $s$ is a constant) : $\text{Cov}(M, W \mid S = s)$.

(4) Calculate the correlation coefficient of $M$ and $W$ given $S = s$:
$$ 
\rho = \frac{\text{Cov}(M, W \mid S = s)}{\sqrt{\text{Var}(M \mid S = s) \ \text{Var}(W \mid S = s)}}. 
$$

(5) Even when math and English scores are independent, a negative correlation emerges when selecting only examinees with high total scores. Briefly explain why, based on the results above.

### Q.3
When reporting experimental results, it is recommended to include effect sizes alongside $p$-values and statistical significance. Cohen's $d$ (the difference between group means divided by within-group standard deviation) is a common effect size.

(1) Both the $t$-statistic and Cohen's $d$ are standardized measures of mean differences between two groups, yet they provide different types of information. Explain the difference using the term 'sample size.'

(2) When is it particularly important to report effect sizes? Describe the circumstances and explain why.

### 题目描述

1. 设 $\theta$ 为一次抛硬币出现正面的概率，并把 $\theta$ 本身视为随机变量。希望根据相互独立的抛硬币观测数据 $D$（Bernoulli 试验）估计 $\theta$ 的概率分布。令 $\theta$ 的先验分布为参数为 $\alpha,\beta$ 的 Beta 分布，其密度为

   $$
   f(\theta;\alpha,\beta)
   =\frac{1}{B(\alpha,\beta)}
   \theta^{\alpha-1}(1-\theta)^{\beta-1},
   \qquad
   \alpha>0,\ \beta>0,\ 0\leq\theta\leq1,
   $$

   其中

   $$
   B(\alpha,\beta)
   =\int_0^1\theta^{\alpha-1}(1-\theta)^{\beta-1}\,d\theta
   $$

   为 Beta 函数。

   （1）简要说明 $\operatorname{Beta}(\theta;1,1)$ 是怎样的分布。

   （2）若 $n$ 次试验中出现 $k$ 次正面，求该观测数据 $D$ 的似然函数 $p(D\mid\theta)$。

   （3）根据 Bayes 定理，

   $$
   p(\theta\mid D)
   =\frac{p(\theta)p(D\mid\theta)}{p(D)},
   $$

   其中 $p(D)$ 是使后验密度积分为 1 的归一化常数。给定先验 $\operatorname{Beta}(\theta;\alpha,\beta)$ 及 $n$ 次试验中 $k$ 次正面的数据，推导 $\theta$ 的后验分布。

2. 令随机变量 $M,W$ 分别表示数学与英语成绩。假设二者相互独立，且都服从均值 50、标准差 10 的正态分布。

   （1）令总分 $S=M+W$，分差 $D=M-W$，计算 $\operatorname{Var}(S)$ 与 $\operatorname{Var}(D)$。

   （2）证明 $S$ 与 $D$ 不相关。

   （3）可使用性质：服从二元正态分布的两个随机变量若不相关，则相互独立。给定总分固定为常数 $s$，计算

   $$
   \operatorname{Cov}(M,W\mid S=s).
   $$

   （4）计算给定 $S=s$ 时 $M,W$ 的相关系数

   $$
   \rho=
   \frac{\operatorname{Cov}(M,W\mid S=s)}
   {\sqrt{\operatorname{Var}(M\mid S=s)\operatorname{Var}(W\mid S=s)}}.
   $$

   （5）即使数学和英语成绩原本独立，只选择总分高的考生后也会出现负相关。根据上述结果简要解释原因。

3. 报告实验结果时，建议在 $p$ 值和统计显著性之外同时报告效应量。Cohen's $d$（两组均值之差除以组内标准差）是一种常用效应量。

   （1）$t$ 统计量与 Cohen's $d$ 都是两组均值差的标准化度量，但二者提供的信息不同。使用“样本量”这一概念解释区别。

   （2）在哪些情况下报告效应量尤其重要？说明具体情形及其原因。

## **Kai**

### Q.1

(1) $B(1,1)=1$，故密度在 $[0,1]$ 上恒为 $1$，即均匀分布。

(2) 若数据为正面次数 $K=k$，则

$$p(D\mid\theta)=\binom nk\theta^k(1-\theta)^{n-k}.$$

若记录的是一次确定的、有顺序的试验序列，则没有组合系数；两种似然关于 $\theta$ 的比例相同。

(3) 将先验乘以似然后归一化，得

$$p(\theta\mid D)=\frac{\theta^{\alpha+k-1}(1-\theta)^{\beta+n-k-1}}{B(\alpha+k,\beta+n-k)},$$

即 $\operatorname{Beta}(\alpha+k,\beta+n-k)$。

### Q.2

(1) 独立性给出

$$\operatorname{Var}(S)=\operatorname{Var}(D)=100+100=200.$$

(2) $\operatorname{Cov}(S,D)=\operatorname{Var}(M)-\operatorname{Var}(W)=0$。$(S,D)$ 是联合正态向量，所以二者独立。

(3) 由 $M=(S+D)/2$、$W=(S-D)/2$，且给定 $S=s$ 不改变 $D$ 的分布，

$$\operatorname{Cov}(M,W\mid S=s)=-\frac14\operatorname{Var}(D)=-50.$$

(4) 两个条件方差均为 $200/4=50$，所以 $\rho=-1$。固定总分时，$W=s-M$ 是完全负线性关系。

(5) 只保留 $S>c$ 时，分差 $D$ 仍与被截断的总分独立。因此

$$\operatorname{Cov}(M,W\mid S>c)=\frac{\operatorname{Var}(S\mid S>c)-200}{4}<0.$$

具体地，记 $z=(c-100)/\sqrt{200}$、$\lambda=\phi(z)/(1-\Phi(z))$，则截断正态方差为 $200(1+z\lambda-\lambda^2)<200$；因为 $\lambda=E[Z\mid Z>z]>z$ 且 $\lambda>0$。选择高总分者后，较低的一科成绩需要较高的另一科成绩来补偿。阈值筛选的相关系数通常介于 $-1$ 和 $0$ 之间，并不等于固定总分时的 $-1$。

### Q.3

(1) Cohen's $d=(\bar X_1-\bar X_2)/s_p$ 描述均值差相对于组内离散程度的大小。在独立两样本、共同方差的 $t$ 检验中，

$$t=\frac{\bar X_1-\bar X_2}{s_p\sqrt{1/n_1+1/n_2}}=d\sqrt{\frac{n_1n_2}{n_1+n_2}}.$$

同样的效应大小在样本量大时可以产生更大的 $|t|$ 和更小的 $p$ 值。$d$ 的定义不以样本量直接放大均值差，但估计 $d$ 的不确定性仍取决于样本量。

(2) 大样本下很小、实际意义有限的差异也可能显著；小样本下有实际意义的差异则可能不显著。此时应同时报告效应量及其置信区间，区分效果大小与证据强弱。比较不同样本量的研究、进行荟萃分析、评价实际用途或规划检验功效时，效应量也比仅报告显著与否更有信息。
