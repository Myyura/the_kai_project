---
sidebar_label: "2023年8月実施 数学 第3問"
sidebar_position: 18
tags:
  - Tokyo-University
  - Probability-And-Statistics
---
# 東京大学 情報理工学研究科 2023年8月実施 数学 第3問

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Consider a particle moving on the coordinate plane, and denote the location of the particle at time $t \in \{0, 1, 2, \dots\}$ by $(X_t, Y_t)$. The initial location of the particle is $(X_0, Y_0) = (0, 0)$. Also, if $(X_t, Y_t) = (a, b)$, then $(X_{t+1}, Y_{t+1}) = (a+1, b)$ with probability $p$, $(X_{t+1}, Y_{t+1}) = (a, b+1)$ with probability $q$, and $(X_{t+1}, Y_{t+1}) = (a, b)$ with probability $1 - p - q$. Here, it is assumed that $p, q > 0$, $p + q < 1$, and the movements of the particle at different time points are independent. Let $(X, Y)$ denote the location of the particle such that $(X_{t+1}, Y_{t+1}) = (X_t, Y_t)$ for the first time. Answer the following questions.

(1) Show that the probability that $(X, Y) = (1, 2)$ is $3pq^2(1 - p - q)$.

(2) For non-negative integers $n$, find the probability that $X + Y = n$.

(3) For non-negative integers $n$, let $f_n$ denote the probability that $X = n$.
- (a) Find $f_0$.
- (b) Express the probability that $X \geq n + 1$ given the condition $X \geq n$, using $f_0$.
- ($c$) Show that $f_n = (1 - f_0)^n f_0$.

(4) Express the expectation of $X$ using $p$ and $q$.

(5) Express the correlation coefficient between $X$ and $Y$ 

$$
\frac{\mathbb{E}[(X - \mu_X)(Y - \mu_Y)]}{\sqrt{\mathbb{E}[(X - \mu_X)^2]\mathbb{E}[(Y - \mu_Y)^2]}}
$$

using $p$ and $q$, where $\mu_X = \mathbb{E}[X]$ denotes the expectation of $X$ and $\mu_Y = \mathbb{E}[Y]$ denotes the expectation of $Y$.

## **Kai**
### (1)

To calculate the probability that $(X, Y) = (1, 2)$, we consider the steps the particle must take to reach the position $(1, 2)$ for the first time. The particle must take one step to the right and two steps up. Since each move is independent and the probability of moving right is $p$, moving up is $q$, and staying in the same place is $1 - p - q$, the possible sequences of moves that result in the particle reaching $(1, 2)$ can be:

1. Move right, then move up twice.
2. Move up, move right, then move up again.
3. Move up twice, then move right.

The probability for each of these sequences is $p \cdot q \cdot q \cdot (1 - p - q)$ because the particle has to stay at least once before completing the sequence. There are 3 such sequences, so the total probability is:

$$
P((X, Y) = (1, 2)) = 3pq^2(1 - p - q)
$$

### (2)

To find the probability that $X + Y = n$, note that this sum represents the total number of steps taken by the particle (where each step is either to the right or upwards). The total number of steps $n$ can be distributed between $X$ (right steps) and $Y$ (up steps). If $X = k$, then $Y = n - k$, and the probability of taking $k$ steps to the right and $n - k$ steps up is:

$$
P(X = k, Y = n - k) = \binom{n}{k} p^k q^{n-k} (1 - p - q)
$$

Summing over all possible values of $k$:

$$
P(X + Y = n) = (1 - p - q) \sum_{k=0}^{n} \binom{n}{k} p^k q^{n-k} 
$$

By the binomial theorem, $\sum_{k=0}^{n} \binom{n}{k} p^k q^{n-k} = (p + q)^n$, so:

$$
P(X + Y = n) = (1 - p - q) (p + q)^n
$$

Simplified:

$$
P(X + Y = n) = (p + q)^n (1 - p - q)
$$

### (3)

#### (a) Find $f_0$

To find $f_0$, we need to calculate the probability that the particle never moves to the right, i.e., $X = 0$. This occurs if the particle only moves up or stays in place until it reaches a position where it never moves again. Therefore, $f_0$ is the sum of the probabilities of all possible scenarios where the particle stays in place or moves up any number of times and then stops:

$$
f_0 = \sum_{k=0}^{\infty} q^k(1 - p - q) = \frac{1 - p - q}{1 - q}
$$

#### (b) Express the probability that $X \geq n + 1$ given the condition $X \geq n$, using $f_0$

The probability that $X \geq n + 1$ given that $X \geq n$ is the probability that the particle does not stop after $n$ steps, given that it hasn't stopped at $n$ steps:

$$
\frac{P(X \geq n + 1)}{P(X \geq n)} = \frac{(1 - f_0)^{n+1}}{(1 - f_0)^n} = 1 - f_0
$$

#### ($c$) Show that $f_n = (1 - f_0)^n f_0$

The probability that $X = n$ is the probability that the particle does not stop before $n$ steps and stops exactly at the $n$-th step. This is given by:

$$
f_n = P(\text{No stop in first } n \text{ steps}) \times P(\text{Stop at the } n+1\text{-th step})
$$

Since $f_0 = \frac{1 - p - q}{1 - q}$, the stopping probability at step $n+1$ is $f_0$ and the probability of not stopping is $(1 - f_0)^n$. Therefore:

$$
f_n = (1 - f_0)^n f_0 = \left(1 - \frac{1 - p - q}{1 - q}\right)^n \frac{1 - p - q}{1 - q}
$$

### (4)

The expectation $\mathbb{E}[X]$ is the sum of $n \cdot f_n$, where $f_n$ is the probability of stopping at exactly $n$ steps:

$$
\mathbb{E}[X] = \sum_{n=1}^{\infty} n f_n = \sum_{n=1}^{\infty} n \left(1 - \frac{1 - p - q}{1 - q}\right)^n \frac{1 - p - q}{1 - q}
$$

Recognizing this as a geometric series, the expected value is:

$$
\mathbb{E}[X] = \frac{1 - f_0}{f_0} = \frac{1 - q}{1 - p - q}
$$

### (5)

The correlation coefficient $\rho_{XY}$ is given by:

$$
\rho_{XY} = \frac{\mathrm{Cov}(X, Y)}{\sigma_X \sigma_Y}
$$

where $\mathrm{Cov}(X, Y)$ is the covariance of $X$ and $Y$, and $\sigma_X, \sigma_Y$ are the standard deviations of $X$ and $Y$.

#### 1. Calculate $\mathbb{E}[X]$ and $\mathbb{E}[Y]$

As calculated earlier:

$$
\mathbb{E}[X] = \frac{p}{1 - p - q}, \quad \mathbb{E}[Y] = \frac{q}{1 - p - q}
$$

#### 2. Calculate $\mathbb{E}[XY]$

To find $\mathbb{E}[XY]$, we note that $X$ and $Y$ count the number of steps taken in the horizontal and vertical directions, respectively. Since $X$ and $Y$ are dependent (given that they are both influenced by the same random walk process), we calculate the expected value of their product as follows:

First, recognize that $X$ and $Y$ are determined by the number of right steps and up steps, respectively, until the first time the particle stops moving. This stopping is determined by the geometric distribution of taking either a right or up step.

Given that the probability of moving right is $p$, and moving up is $q$, the expected value $\mathbb{E}[XY]$ considers both:

$$
\mathbb{E}[XY] = \sum_{n=0}^{\infty} \sum_{k=0}^{n} k(n-k) \binom{n}{k} p^k q^{n-k} (1 - p - q)
$$

To simplify, we first express $XY$ as:

$$
\mathbb{E}[XY] = \sum_{n=0}^{\infty} \sum_{k=0}^{n} k(n-k) \binom{n}{k} p^k q^{n-k} (1 - p - q)
$$

Given the symmetry of $p$ and $q$:

$$
\mathbb{E}[XY] = pq \sum_{n=0}^{\infty} n(n-1) (p + q)^{n-2} (1 - p - q)
$$

Recognizing that the series sum over $n$ is a known result of the second moment of a geometric distribution:

$$
\mathbb{E}[XY] = \frac{2pq}{(1 - p - q)^2}
$$

#### 3. Calculate the covariance $\mathrm{Cov}(X, Y)$

The covariance is given by:

$$
\mathrm{Cov}(X, Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
$$

Substitute the earlier results:

$$
\mathrm{Cov}(X, Y) = \frac{2pq}{(1 - p - q)^2} - \frac{p}{1 - p - q} \cdot \frac{q}{1 - p - q} 
$$

This simplifies to:

$$
\mathrm{Cov}(X, Y) = \frac{pq}{(1 - p - q)^2}
$$

#### 4. Calculate the variances $\sigma_X^2$ and $\sigma_Y^2$

The variance of $X$ (and similarly $Y$) is:

$$
\sigma_X^2 = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

For a geometric distribution:

$$
\mathbb{E}[X^2] = \frac{p(1 - p)}{(1 - p - q)^2}
$$

Thus:

$$
\sigma_X^2 = \frac{p(1 - p)}{(1 - p - q)^2}, \quad \sigma_Y^2 = \frac{q(1 - q)}{(1 - p - q)^2}
$$

#### 5. Calculate the correlation coefficient $\rho_{XY}$

Finally, the correlation coefficient is:

$$
\rho_{XY} = \frac{\mathrm{Cov}(X, Y)}{\sigma_X \sigma_Y} = \frac{\frac{pq}{(1 - p - q)^2}}{\sqrt{\frac{p(1 - p)}{(1 - p - q)^2}} \sqrt{\frac{q(1 - q)}{(1 - p - q)^2}}}
$$

This simplifies to:

$$
\rho_{XY} = \sqrt{\frac{pq}{(1 - p)(1 - q)}}
$$

This is the correct expression for the correlation coefficient between $X$ and $Y$.

## **Knowledge**

随机行走 期望 几何分布 协方差 二项式

### 解题技巧和信息

这类题型考察了随机过程中的停步问题及其相关的期望和概率计算。重点在于理解概率分布的特性，并运用几何分布、协方差等知识求解相关概率和期望。

### 重点词汇

- Random walk 随机游动
- Expectation 期望
- Covariance 协方差
- Geometric distribution 几何分布
- Correlation coefficient 相关系数

### 参考资料

1. **Probability and Statistics** by DeGroot and Schervish, Chapter 4 - Random Variables.
2. **Introduction to Probability** by Bertsekas and Tsitsiklis, Chapter 7 - Random Walks and Markov Chains.
