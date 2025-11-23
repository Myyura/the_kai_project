---
sidebar_label: "2024年8月実施 専門科目 S-1"
tags:
  - Kyoto-University
  - Probability-And-Statistics
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-1

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

### Q.1
Suppose the probability density function $f(x)$ of a random variable $X$ is as follows.
$$ 
f(x) = \begin{cases} 0 & (x < 0) \\ cx(3-x) & (0 \leq x < 3) \\ 0 & (3 \leq x) \end{cases} 
$$
$c$ is a positive constant ($c > 0$).

(1) Compute the value of the constant $c$.

(2) Compute the mean and variance of the random variable $X$.

### Q.2
Let $X$ and $Y$ be independent random variables following the binomial distributions $\mathrm{B}(m, p)$ and $\mathrm{B}(n, p)$, respectively. Derive the distribution of $Z = X + Y$.

### Q.3
Consider normal populations A and B with a common population variance. One sample of size 18 is selected from the normal population A, denoted as $(x_1, x_2, \dots, x_{18})$, and the other one of size 18 from the normal population B, denoted as $(y_1, y_2, \dots, y_{18})$. The statistics derived from the samples are as follows.
$$
 \bar{x} = \frac{1}{18} \sum_{i=1}^{18} x_i \qquad s_x^2 = \frac{1}{17} \sum_{i=1}^{18} (x_i - \bar{x})^2 \\
\bar{y} = \frac{1}{18} \sum_{i=1}^{18} y_i \qquad s_y^2 = \frac{1}{17} \sum_{i=1}^{18} (y_i - \bar{y})^2 \qquad s_{xy} = \frac{1}{17} \sum_{i=1}^{18} (x_i - \bar{x})(y_i - \bar{y}) 
$$

The values 2.110 and 2.032 may be used for the upper 2.5% point of the $t$-distribution with 17 and 34 degrees of freedom, respectively.

(1) Assuming that the samples are paired as $(x_i, y_i)$, $i = 1, 2, \dots, 18$ and randomly selected, compute the 95% confidence interval for the difference between the two population means using necessary statistics among those mentioned above.

(2) Assuming that the samples are unpaired and randomly selected from each population, compute the 95% confidence interval for the difference between the two population means using necessary statistics among those mentioned above.

### Q.4
Consider a linear regression model $Y_i = \alpha + \beta x_i + \epsilon_i \ (i = 1, 2, \dots, 16)$ where the variation in random variables $Y_i \ (i = 1, 2, \dots, 16)$ are explained by the corresponding constants $x_i \ (i = 1, 2, \dots, 16)$ with the regression coefficients of $\alpha$ and $\beta$. Assume that $\epsilon_i \ (i = 1, 2, \dots, 16)$ are independent and follow a normal distribution $\mathrm{N}(0, \sigma^2)$ with mean 0 and variance $\sigma^2$. Let $\hat{\alpha}$ and $\hat{\beta}$ be the least squares estimators of $\alpha$ and $\beta$, respectively.

(1) Compute the standard deviation of $\hat{\beta}$.

(2) Given a new constant $x_{17}$, show the 95% prediction interval of $Y_{17} = \alpha + \beta x_{17} + \epsilon_{17}$ using $\hat{\alpha}, \hat{\beta}, \sigma$, and $x_1, x_2, \dots, x_{17}$ where $\epsilon_{17}$ is independent of $\epsilon_i \ (i = 1, 2, \dots, 16)$ and follows a normal distribution $\mathrm{N}(0, \sigma^2)$. The value 2.145 for the upper 2.5% point of the $t$-distribution with 14 degrees of freedom may be used.