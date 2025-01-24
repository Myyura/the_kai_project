---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-2

## **Author**
祭音Myyura

## **Description**
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

## **Kai**
### Q.1
#### (1)

$$
\begin{aligned}
f_{X}(x) &= P(X=x) \\
&= {}_n C _x p^x(1-p)^{n-x} \\
&= \frac{n!}{x!(n-x)!}\left(\frac{\lambda}{n}\right)^x \left( 1-\frac{\lambda}{n} \right)^{n-x}\\
&= \frac{n(n-1)\cdots(n-x+1)}{x!}\left( \frac{\lambda}{n} \right)^x\left(1-\frac{\lambda}{n} \right)^n \left(1-\frac{\lambda}{n} \right)^{-x}\\
&= \frac{\lambda^{x}}{x!}\left(1 - \frac{\lambda}{n} \right)^n
\left(1-\frac{1}{n} \right)\cdots \left(1-\frac{x-1}{n} \right)\left(1-\frac{\lambda}{n} \right)^{-x}\\
&= \frac{\lambda^{x}}{x!}\left\{\left(1 + \frac{1}{-n/\lambda}\right)^{-n/\lambda} \right\}^{-\lambda}
\left(1-\frac{1}{n} \right)\cdots \left(1-\frac{x-1}{n} \right)\left( 1-\frac{\lambda}{n} \right)^{-x}\\
&\longrightarrow \frac{\lambda^x}{x!}e^{-\lambda}\quad(n\rightarrow \infty)
\end{aligned}
$$

Hence the PDF of the Poisson distribution is (b)。

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

we have $0.135 + 0.270 + 0.270 + 0.180 + 0.090 = 0.945$, hence the minimum $N$ is $5$.

#### (3)
Central limit theorem.

Note that the mean and variance of the Poisson distribution are both $\lambda$, by Central limit theorem, we know that the mean and the variance of the normal distribution $S$ approaches are $\lambda D = 2D$ and $D^2\cdot \lambda/D=D\lambda=2D$, respectively.

### Q.2
Let $\overline{Y} = (Y_1 + Y_2 + \cdots + Y_n) / n$ and $S^2$ denote the unbiased variance.

Then, $\frac{\sqrt{n}(\overline{Y}-\mu)}{S}$ follows a $t(n-1)$ distribution. By using $c$ that satisfies $P(-c \leq Z \leq c) = 0.95$ for random variable $T$ following the $t(n-1)$ distribution, the 95% confidence interval is computed as

$$
\left[\overline{Y}-c\sqrt{S^2/n}, \overline{Y}+c\sqrt{S^2/n}\right]
$$

### Q.3
#### (1)
Two random variables are uncorrelated is a necessary condition for independence, but not sufficient.

#### (2)
The null hypothesis was not rejected in Tokyo and was rejected in Kyoto does not imply a "statistical difference" between the two regions.
Instead of testing the significance of the difference between the test and control conditions separately in Tokyo and Kyoto, the proper approach would be to include both Tokyo and Kyoto as factors in the experimental conditions and test for the significance of the differences accordingly.

### Q.4
Note: the answers are generated by GPT-4o

#### Bonferroni correction
The Bonferroni correction is a method used to address the problem of multiple comparisons. It adjusts the significance level ($\alpha$) to reduce the risk of Type I errors (false positives). Specifically, if you perform $m$ tests, the corrected significance level for each test is $\alpha/m$, ensuring the overall significance level remains at $\alpha$.

#### $\eta^2$ in ANOVA
$\eta^2$ (eta squared) is a measure of effect size in ANOVA, representing the proportion of total variance in the dependent variable that is attributed to a specific factor or independent variable. It is calculated as the ratio of the sum of squares for the effect to the total sum of squares. Larger $\eta^2$ values indicate a greater effect.

#### Bootstrap method
The bootstrap method is a resampling technique used to estimate the sampling distribution of a statistic. By repeatedly sampling with replacement from the observed data and recalculating the statistic for each sample, the method provides estimates of measures like confidence intervals or standard errors, even when the theoretical distribution is unknown.

#### Statistical power of a test
Statistical power is the probability that a test correctly rejects the null hypothesis ($H_0$) when the alternative hypothesis ($H_a$) is true (i.e., avoiding a Type II error). Higher power indicates a greater likelihood of detecting an effect when it exists, and it depends on factors such as sample size, effect size, and significance level ($\alpha$).
