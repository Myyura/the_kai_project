---
sidebar_label: "2024年8月実施 専門科目 S-2"
tags:
  - Kyoto-University
  - Machine-Learning
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-2

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

We consider a problem of classifying a three-dimensional vector, where a value of each element is either 0 or 1, into either the class 1 or the class 2. Let $\boldsymbol{x} = (x(1), x(2), x(3)) \in \{0, 1\}^3$ be a vector. Assume that each element of $\boldsymbol{x}$ of the class $y=k$ ($k \in \{1, 2\}$) independently follows a Bernoulli distribution, and let $p(x(j) = 1 | y = k) = \mu^{(k)}(j)$ ($0 \le \mu^{(k)}(j) \le 1, \ j \in \{1, 2, 3\}$) be the probability of $x(j) = 1$. Let $\boldsymbol{\mu}^{(k)} = (\mu^{(k)}(1), \mu^{(k)}(2), \mu^{(k)}(3))$ be parameters of the class $k$.

Let $\mathcal{D} = \{(\boldsymbol{x}_1, y_1), (\boldsymbol{x}_2, y_2), \dots, (\boldsymbol{x}_N, y_N)\}$ be a data set consisting of $N$ data. Let $\boldsymbol{x}_i = (x_i(1), x_i(2), x_i(3))$ be the vector of the $i$-th data, and $y_i$ be the class of $\boldsymbol{x}_i$. We assume that $\boldsymbol{x}_i \ (i \in \{1, \dots, n\})$ of the class $y_i = k$ is independently observed from the aforementioned distribution whose parameter is $\boldsymbol{\mu}^{(k)}$.

(1) Let $p(y = k)$ be a prior probability for the class $k$. We determine an estimated class $\hat{y}$ of $\boldsymbol{x}$ by comparing the posterior probabilities. Namely, we set $\hat{y} = 1$ if $p(y = 1 | \boldsymbol{x}) \ge p(y = 2 | \boldsymbol{x})$; otherwise we set $\hat{y} = 2$. Show a rule that assigns $\boldsymbol{x}$ to an estimated class $\hat{y}$ by using $p(y = k)$ and $\mu^{(k)}(j)$.

(2) Let $\mathcal{D}^{(k)} = \{(\boldsymbol{x}_i, y_i) \in \mathcal{D} \mid y_i = k\} \ (k \in \{1, 2\})$ be a subset of the data set $\mathcal{D}$. By using $\mathcal{D}^{(k)}$, derive the maximum likelihood estimate $\hat{\boldsymbol{\mu}}^{(k)}$ of $\boldsymbol{\mu}^{(k)}$ from the data set $\mathcal{D}$.

(3) Assume that a data set $\mathcal{D}$ is given in Table 1. Compute the values of the maximum likelihood estimates $\hat{\boldsymbol{\mu}}^{(k)} \ (k \in \{1, 2\})$ from Table 1.

Table 1: A data set

| $i$ | $\boldsymbol{x}_i$ | $y_i$ |
| :---: | :---: | :---: |
| 1 | $(1, 0, 0)$ | 1 |
| 2 | $(1, 0, 1)$ | 1 |
| 3 | $(1, 1, 0)$ | 2 |
| 4 | $(0, 1, 0)$ | 1 |
| 5 | $(0, 0, 1)$ | 2 |

(4) Let prior probabilities be $p(y = 1) = \frac{3}{5}$ and $p(y = 2) = \frac{2}{5}$. Compute the estimated class $\hat{y}$ of $\boldsymbol{x} = (1, 1, 1)$ by substituting $\hat{\boldsymbol{\mu}}^{(k)}$ computed in (3) for $\boldsymbol{\mu}^{(k)}$ of the rule shown in (1).

(5) Let a prior probability $p(y = 1)$ be $q \ (0 \le q \le 1)$. We classify $\boldsymbol{x} = (1, 1, 1)$ by substituting $\hat{\boldsymbol{\mu}}^{(k)}$ computed in (3) for $\boldsymbol{\mu}^{(k)}$ of the rule shown in (1). Explain the relation between $q$ and an estimated class $\hat{y}$.