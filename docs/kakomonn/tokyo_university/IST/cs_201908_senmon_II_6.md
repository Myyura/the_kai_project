---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題6
tags:
  - Tokyo-University
  - Probability-And-Statistics
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題6

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
The probability density function of the normal distribution $N(\mu, \sigma^2)$ with mean $\mu \in \mathbb{R}$ and variance $\sigma^2 > 0$ is given by

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right).
$$

Let $X$ and $Z$ be random variables that independently follow $N(\mu, 1)$ and $N(0, 1)$, respectively, and define $Y = \theta X + Z$ for some constant $\theta \in \mathbb{R}$. For an integer $n > 1$, let $(X_1, Y_1), (X_2, Y_2), \ldots, (X_n, Y_n)$ be two-dimensional random variables that independently follow the same distribution as $(X, Y)$, for which we write $X^{(n)} = (X_1, X_2, \ldots, X_n)$ and $Y^{(n)} = (Y_1, Y_2, \ldots, Y_n)$.

Answer the following questions.

(1) Express the expectation $\mathbb{E}[Y]$ and variance $\mathbb{V}[Y]$ of $Y$ using $\mu$ and $\theta$.

(2) Show that the conditional distribution of $X$ given $Y$ is a normal distribution, and express its expectation $\mathbb{E}[X|Y]$ and variance $\mathbb{V}[X|Y]$ using $\mu$, $\theta$, and $Y$.

(3) Let $(x^{(n)}, y^{(n)})$ denote a realization of $(X^{(n)}, Y^{(n)})$. Express the joint probability density function $p_{\mu, \theta}(x^{(n)}, y^{(n)})$ of $(X^{(n)}, Y^{(n)})$ using $\mu, \theta, x^{(n)} = (x_1, x_2, \ldots, x_n)$ and $y^{(n)} = (y_1, y_2, \ldots, y_n)$.

(4) Consider maximum-likelihood estimation of $(\mu, \theta)$ by the EM algorithm for the case where the observation of $X_n$ is missing from $(X^{(n)},Y^{(n)})$, that is, the case where $(X^{(n-1)},Y^{(n)})$ is observed. Then the update rule of estimators of $(\mu, \theta)$ by the EM algorithm for some initial value $(\mu_0, \theta_0) \in \mathbb{R}^2$ is given by

$$
(\mu_{t+1}, \theta_{t+1}) = \mathop{\arg\max}\limits_{(\mu, \theta) \in \mathbb{R}^2} \mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(X^{(n)},Y^{(n)})], \quad t = 0, 1, \ldots,
$$

where $\bar{\mu}$ and $\bar{\sigma}^2$ are the values obtained by the substitution $(\mu, \theta, Y) := (\mu_t, \theta_t, Y_n)$ in the expressions of $\mathbb{E}[X|Y]$ and $\mathbb{V}[X|Y]$ obtained in question (2), respectively, and $\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}$ denotes the expectation when $X_n$ follows $N(\bar{\mu}, \bar{\sigma}^2)$ and $(X^{(n-1)},Y^{(n)})$ is fixed.

- (i) Express $\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(X^{(n)},Y^{(n)})]$ using $\mu, \theta, \bar{\mu}, \bar{\sigma}^2, X^{(n-1)}$ and $Y^{(n)}$.
- (ii) Express $(\mu_{t+1}, \theta_{t+1})$ using $n, \bar{\mu}, \bar{\sigma}^2, X^{(n-1)}$ and $Y^{(n)}$.

## **Kai**
### (1)

The random variable $Y$ is defined as $Y = \theta X + Z$, where $X \sim N(\mu, 1)$ and $Z \sim N(0, 1)$. Since $X$ and $Z$ are independent, we can calculate the expectation and variance of $Y$ as follows:

1. **Expectation of $Y$**:

$$
\mathbb{E}[Y] = \mathbb{E}[\theta X + Z] = \theta \mathbb{E}[X] + \mathbb{E}[Z] = \theta \mu + 0 = \theta \mu
$$

2. **Variance of $Y$**:

$$
\mathbb{V}[Y] = \mathbb{V}[\theta X + Z] = \theta^2 \mathbb{V}[X] + \mathbb{V}[Z] = \theta^2 \cdot 1 + 1 =\theta^2 + 1
$$

### (2)

To find the conditional distribution of $X$ given $Y$, note that $Y = \theta X + Z$, where $X \sim N(\mu, 1)$ and $Z \sim N(0, 1)$. The joint distribution of $(X, Y)$ is bivariate normal, which implies that the conditional distribution $X|Y$ is also normal.

1. **Expectation of $X|Y$**:

$$
\mathbb{E}[X|Y] = \mu + \frac{\theta}{\theta^2 + 1} (Y - \theta\mu)
$$

2. **Variance of $X|Y$**:

$$
\mathbb{V}[X|Y] = \frac{1}{\theta^2 + 1}
$$

This can be derived using the properties of conditional distributions for bivariate normal distributions.

### (3)

The joint probability density function $p_{\mu, \theta}(\mathbf{x}^{(n)}, \mathbf{y}^{(n)})$ for the random variables $\mathbf{X}^{(n)} = (X_1, X_2, \ldots, X_n)$ and $\mathbf{Y}^{(n)} = (Y_1, Y_2, \ldots, Y_n)$ can be expressed as the product of the marginal distributions of $X_i$ and the conditional distributions of $Y_i$ given $X_i$:

$$
p_{\mu, \theta}(\mathbf{x}^{(n)}, \mathbf{y}^{(n)}) = \prod_{i=1}^{n} \left( \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{(x_i - \mu)^2}{2}\right) \cdot \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{(y_i - \theta x_i)^2}{2}\right) \right)
$$

Expanding this, we get:

$$
p_{\mu, \theta}(\mathbf{x}^{(n)}, \mathbf{y}^{(n)}) = \frac{1}{(2\pi)^{n}} \exp\left(-\sum_{i=1}^{n} \left[\frac{(x_i - \mu)^2}{2} + \frac{(y_i - \theta x_i)^2}{2}\right]\right)
$$

### (4)
#### (i)

The expectation $\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(\mathbf{X}^{(n)}, \mathbf{Y}^{(n)})]$ is given by:

$$
\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(\mathbf{X}^{(n)}, \mathbf{Y}^{(n)})] = \mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}\left[-\sum_{i=1}^{n-1} \left(\frac{(x_i - \mu)^2}{2} + \frac{(y_i - \theta x_i)^2}{2}\right) - \left(\frac{(X_n - \mu)^2}{2} + \frac{(y_n - \theta X_n)^2}{2}\right)\right]
$$

Simplifying further using the properties of the expectation for a normal distribution:

$$
\mathbb{E}_{X_n \sim N(\bar{\mu}, \bar{\sigma}^2)}[\log p_{\mu, \theta}(\mathbf{X}^{(n)}, \mathbf{Y}^{(n)})] = -\sum_{i=1}^{n-1} \left(\frac{(x_i - \mu)^2}{2} + \frac{(y_i - \theta x_i)^2}{2}\right) - \frac{1}{2}\left((\bar{\mu} - \mu)^2 + \bar{\sigma}^2 + \frac{(y_n - \theta \bar{\mu})^2}{\theta^2 + 1}\right)
$$

#### (ii)

The update rule for $(\mu_{t+1}, \theta_{t+1})$ in the EM algorithm is obtained by maximizing the expression found in part (i):

$$
(\mu_{t+1}, \theta_{t+1}) = \mathop{\arg\max}\limits_{(\mu, \theta) \in \mathbb{R}^2} \left[-\sum_{i=1}^{n-1} \left(\frac{(x_i - \mu)^2}{2} + \frac{(y_i - \theta x_i)^2}{2}\right) - \frac{1}{2}\left((\bar{\mu} - \mu)^2 + \bar{\sigma}^2 + \frac{(y_n - \theta \bar{\mu})^2}{\theta^2 + 1}\right)\right]
$$

Solving this for $\mu$ and $\theta$, we find:

$$
\mu_{t+1} = \frac{1}{n} \left(\sum_{i=1}^{n-1} x_i + \bar{\mu}\right)
$$

$$
\theta_{t+1} = \frac{\sum_{i=1}^{n-1} y_i x_i + y_n \bar{\mu}}{\sum_{i=1}^{n-1} x_i^2 + \bar{\mu}^2 + \frac{1}{\theta^2 + 1}}
$$

This update rule depends on the observed data $\mathbf{X}^{(n-1)}, \mathbf{Y}^{(n)}$ and the estimates $\bar{\mu}, \bar{\sigma}^2$ obtained from the conditional expectation.

## **Knowledge**

正态分布 条件分布 数值期望 EM算法 最大似然估计

### 难点思路

推导条件分布涉及到二元正态分布的性质，尤其是推导条件期望和方差时，需要对协方差矩阵有深刻理解。EM 算法的难点在于构建对数似然函数的期望，并通过优化找到参数的更新规则。

### 解题技巧和信息

1. **条件分布**：对于二元正态分布，条件分布仍然是正态分布，且其参数可以通过边际分布的参数计算得到。
2. **EM 算法**：EM 算法通过最大化对数似然函数的期望来迭代更新参数，对于缺失数据的问题尤为有效。
3. **最大似然估计**：通常情况下，EM 算法能够保证参数的渐进一致性，即经过多次迭代，参数估计会收敛到真值。

### 重点词汇

- **Expectation-Maximization (EM) Algorithm**: 期望最大化算法
- **Conditional distribution**: 条件分布
- **Maximum likelihood estimation**: 最大似然估计
- **Normal distribution**: 正态分布

### 参考资料

1. Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer. Chapter 9: Mixture Models and EM.
2. Casella, G., & Berger, R. L. (2001). *Statistical Inference* (2nd ed.). Duxbury. Chapter 7: Estimation.
