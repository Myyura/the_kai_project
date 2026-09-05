---
sidebar_label: "2020年8月実施 専門科目 S-2"
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Student-t-Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Common-Significance-Interpretation-Errors
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Bonferroni-Correction
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Effect-Size
  - Probability-Statistics.Computational-Statistics.Bootstrap-Method
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
---
# 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-2

## **Author**
祭音Myyura

## **Description**

[大学公表の原題](https://www.ist.i.kyoto-u.ac.jp/content/files/admission/ist-exam-2020Aug-specialized.pdf)
### Q.1
Suppose the number of times an event occurs in one second, $X$, follows the Poisson distribution with $\lambda = 2$. Note that $e^2 \approx 7.389$, and $e^{-2} \approx 0.135$.

(1) Choose the probability density function of the Poisson distribution.

- (a) $f(x) = e^{\lambda} \lambda^x /x!$
- (b) $f(x) = e^{-\lambda} \lambda^x/x!$
- ($c$) $f(x) = e^{\lambda} \lambda^{-x}/x!$
- (d) $f(x) = e^{-\lambda} \lambda^{-x} /x!$

(2) Find the minimum integer $N$ satisfying $P(X \geq N) < 0.1$, and explain why.

(3) Let $S$ be the total number of times this event occurs in $D$ seconds. A theorem says that the distribution of $S$ approaches a normal distribution as $D$ increases. Write the name of this theorem, and find the values of the mean and the variance of the normal distribution $S$ approaches.

### Q.2
Let $Y_1, Y_2, ..., Y_n$ be a random sample of size $n\ (< 30)$ from the normal distribution with the mean $\mu$ and the variance $\sigma^2$. If $\sigma^2$ is known, the 95% confidence interval of $\mu$ can be computed as follows:
"Let $\overline{Y} = (Y_1 + Y_2 + \cdots + Y_n)/n$ be the sample mean.      
$(\overline{Y} - \mu)/(\sqrt{\sigma^2/n})$ follows the standard normal distribution. By using $c$ that satisfies $P(-c \leq Z \leq c) = 0.95$ for random variable $Z$ following the standard normal distribution, the 95% confidence interval of $\mu$ is computed as $[\overline{Y} - c \sqrt{\sigma^2/n}, \overline{Y} + c \sqrt{\sigma^2/n}]$."

Explain similarly the procedure to compute the 95% confidence interval of $\mu$ when $\sigma^2$ is unknown.

### Q.3
Specify the errors in the following statistical arguments.

(1) "One thousand participants performed the task A and the task B. We computed the correlation coefficient of the task scores, and found no significant correlation across individuals between the two tasks. This suggests that the human abilities measured by the tasks A and B are independent."

(2) "We found an interesting statistical difference between Kyoto and Tokyo — the experiment in Kyoto showed a statistically significant difference between the test and control conditions, while that in Tokyo did not. In the next study, we will examine the reason of this regional difference."

### Q.4
Briefly explain the meanings of the two statistical terms chosen from the following list.

- Bonferroni correction
- $\eta^2$ in ANOVA
- Bootstrap method
- Statistical power of a test

### 题目描述

1. 每秒事件发生次数 $X\sim\operatorname{Poisson}(\lambda=2)$，可用
   $e^2\approx7.389$、$e^{-2}\approx0.135$。
   1. 从下列选出 Poisson 概率质量函数：
      - $e^\lambda\lambda^x/x!$；
      - $e^{-\lambda}\lambda^x/x!$；
      - $e^\lambda\lambda^{-x}/x!$；
      - $e^{-\lambda}\lambda^{-x}/x!$。
   2. 求满足 $P(X\ge N)<0.1$ 的最小整数 $N$，并说明理由。
   3. 令 $S$ 为 $D$ 秒内事件总次数。其分布在 $D$ 增大时趋于正态分布。写出该定理名称，并求极限正态分布的均值、方差。
2. $Y_1,\ldots,Y_n$ 是来自 $N(\mu,\sigma^2)$ 的容量 $n<30$ 随机样本。题干已给出 $\sigma^2$ 已知时用标准正态枢轴构造 $\mu$ 的 $95\%$ 置信区间的方法。类似说明当 $\sigma^2$ 未知时如何计算该置信区间。
3. 指出下列统计论证的错误：
   1. 1000 名参与者完成任务 A、B，两任务得分跨个体相关不显著，因此断言两任务测量的人类能力相互独立。
   2. 京都实验中测试与控制条件差异显著，东京实验中不显著，因此断言发现了地区差异并计划研究其原因。
4. 从下列术语中任选两个，简要解释含义：
   - Bonferroni 校正；
   - 方差分析中的 $\eta^2$；
   - Bootstrap 方法；
   - 检验的统计功效。

## **Kai**
### Q.1
#### (1)
For a fixed nonnegative integer $x$, the Poisson limit of a binomial probability is

$$
P(X=x)=\lim_{m\to\infty}\binom{m}{x}
\left(\frac{\lambda}{m}\right)^x
\left(1-\frac{\lambda}{m}\right)^{m-x}
=\frac{\lambda^x}{x!}e^{-\lambda}.
$$

Hence the probability mass function is **(b)**.

#### (2)

$$
\begin{aligned}
P(X \geq N) &= 1 - P(X < N) = 1 - P(X \leq N-1)\\
&= 1 - \sum_{x=0}^{N-1}\left\{ e^{-\lambda}\frac{\lambda^x}{x!} \right\} < 0.1
\end{aligned}
$$

i.e., we need to find the minimum $N$ that satisfies above inequality.

Since

|$x$|0|1|2|3|4|
|-|-|-|-|-|-|
|$f(X=x)$|$0.135$|$0.270$|$0.270$|$0.180$|$0.090$|

The rounded values give $P(X\ge4)\approx0.145>0.1$ and $P(X\ge5)\approx0.055<0.1$, hence the minimum $N$ is $5$.

#### (3)
Central limit theorem.

Assuming independent counts in disjoint one-second intervals, write $S=X_1+\cdots+X_D$, with $X_i\sim\operatorname{Poisson}(2)$. Then

$$
\mathbb E[S]=2D,\qquad \operatorname{Var}(S)=2D,
\qquad \frac{S-2D}{\sqrt{2D}}\xrightarrow{d}N(0,1).
$$

Thus $S$ is approximated by $N(2D,2D)$ for large $D$.

### Q.2
Let $\overline{Y} = (Y_1 + Y_2 + \cdots + Y_n) / n$ and $S^2=\frac1{n-1}\sum_{i=1}^n(Y_i-\overline Y)^2$ denote the unbiased sample variance, with $n\ge2$.

Then, $\frac{\sqrt{n}(\overline{Y}-\mu)}{S}$ follows a $t(n-1)$ distribution. By using $c$ that satisfies $P(-c \leq T \leq c) = 0.95$ for random variable $T$ following the $t(n-1)$ distribution, the 95% confidence interval is computed as

$$
\left[\overline{Y}-c\sqrt{S^2/n}, \overline{Y}+c\sqrt{S^2/n}\right]
$$

### Q.3
#### (1)
A nonsignificant correlation test does not establish that the population correlation is zero. Even zero correlation, when the relevant moments exist, does not imply independence; nonlinear dependence can remain.

#### (2)
The null hypothesis was not rejected in Tokyo and was rejected in Kyoto does not imply a "statistical difference" between the two regions.
Instead of testing the significance of the difference between the test and control conditions separately in Tokyo and Kyoto, the proper approach is to test the region-by-condition interaction, or directly test the difference between the two condition effects.

### Q.4
Note: the answers are generated by GPT-4o

#### Bonferroni correction
The Bonferroni correction is a method used to address the problem of multiple comparisons. It adjusts the significance level ($\alpha$) to reduce the risk of Type I errors (false positives). Specifically, if you perform $m$ tests, the corrected significance level for each test is $\alpha/m$, ensuring the family-wise Type I error probability is at most $\alpha$, without requiring independent tests.

#### $\eta^2$ in ANOVA
$\eta^2$ (eta squared) is a measure of effect size in ANOVA, representing the proportion of total variance in the dependent variable that is attributed to a specific factor or independent variable. It is calculated as the ratio of the sum of squares for the effect to the total sum of squares. Larger $\eta^2$ values indicate a greater effect.

#### Bootstrap method
The bootstrap method is a resampling technique used to estimate the sampling distribution of a statistic. By repeatedly sampling with replacement from the observed data and recalculating the statistic for each sample, the method provides estimates of measures like confidence intervals or standard errors, even when the theoretical distribution is unknown.

#### Statistical power of a test
Statistical power is the probability that a test correctly rejects the null hypothesis ($H_0$) when the alternative hypothesis ($H_a$) is true (i.e., avoiding a Type II error). Higher power indicates a greater likelihood of detecting an effect when it exists, and it depends on factors such as sample size, effect size, and significance level ($\alpha$).
