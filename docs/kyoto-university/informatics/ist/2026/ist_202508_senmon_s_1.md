---
sidebar_label: "2025年8月実施 専門科目 S-1"
tags:
  - Kyoto-University
  - Probability-And-Statistics
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-1

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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