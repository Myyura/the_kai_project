---
sidebar_label: 2024年8月実施 専門科目 S-2
tags:
  - Kyoto-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Naive-Bayes
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-2

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_ist.pdf)

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

### 题目描述

考虑把三维二元向量 $\boldsymbol{x}=(x^{(1)},x^{(2)},x^{(3)})$ 分类到类别 $y\in\{1,2\}$ 的问题。给定类别 $k$ 时，各分量相互独立且服从 Bernoulli 分布：

$$
p(x^{(j)}=1\mid y=k)=\mu_j^{(k)},\qquad j=1,2,3.
$$

现有数据集 $\mathcal{D}=\{(\boldsymbol{x}_i,y_i)\}$，回答下列问题。

1. 使用类别先验概率以及参数 $\boldsymbol{\mu}^{(k)}$，推导比较后验概率的分类规则；若两个类别的后验概率相同，则规定分类为类别 1。
2. 对每一个类别的样本子集，推导各参数 $\mu_j^{(k)}$ 的最大似然估计量。
3. 对下表数据计算两个类别的参数估计 $\hat{\boldsymbol{\mu}}^{(1)}$ 与 $\hat{\boldsymbol{\mu}}^{(2)}$，并计算第（1）问所需的分类规则：

   | $i$ | $\boldsymbol{x}_i$ | $y_i$ |
   | :---: | :---: | :---: |
   | 1 | $(1,0,0)$ | 1 |
   | 2 | $(1,0,1)$ | 1 |
   | 3 | $(1,1,0)$ | 2 |
   | 4 | $(0,1,0)$ | 1 |
   | 5 | $(0,0,1)$ | 2 |

4. 令先验概率 $p(y=1)=\frac35$、$p(y=2)=\frac25$，把第（3）问求得的参数估计代入第（1）问的规则，求 $\boldsymbol{x}=(1,1,1)$ 的预测类别 $\hat y$。
5. 改令 $p(y=1)=q$，其中 $0\leq q\leq1$。仍使用第（3）问的参数估计对 $\boldsymbol{x}=(1,1,1)$ 分类，说明 $q$ 与预测类别 $\hat y$ 之间的关系。

## **Kai**
### (1)
For $k=1,2$, define the unnormalized posterior score

$$
g_k(\boldsymbol x)=p(y=k)\prod_{j=1}^3
\begin{cases}
\mu^{(k)}(j),&x(j)=1,\\
1-\mu^{(k)}(j),&x(j)=0.
\end{cases}
$$

When $g_1+g_2>0$, Bayes' formula gives $p(y=k\mid\boldsymbol x)=g_k/(g_1+g_2)$. Hence select class $1$ if $g_1\ge g_2$, and class $2$ otherwise. The product formulation also handles parameters $0$ or $1$ without taking logarithms of zero. If both scores vanish, the observation has zero model probability and its posterior is undefined; a classifier must specify a separate fallback rule.

### (2)
Let $N_k=|\mathcal D^{(k)}|>0$ and $a_{kj}=\sum_{i:y_i=k}x_i(j)$. The class likelihood factors as

$$
L_k=\prod_{j=1}^3\mu^{(k)}(j)^{a_{kj}}
(1-\mu^{(k)}(j))^{N_k-a_{kj}}.
$$

Each factor is maximized at

$$
\boxed{\hat\mu^{(k)}(j)=\frac{a_{kj}}{N_k}}.
$$

This follows by differentiating the concave log-likelihood for $0<a_{kj}<N_k$; all-zero or all-one observations give the endpoint maxima $0$ or $1$. If $N_k=0$, the likelihood contains no information about that class's parameters, so every parameter vector maximizes it.

### (3)
The class-1 samples are rows $1,2,4$ and the class-2 samples are rows $3,5$, giving

$$
\boxed{\hat{\boldsymbol\mu}^{(1)}=(2/3,1/3,1/3),\qquad
\hat{\boldsymbol\mu}^{(2)}=(1/2,1/2,1/2)}.
$$

### (4)
For $\boldsymbol x=(1,1,1)$,

$$
g_1=\frac35\cdot\frac{2}{27}=\frac2{45},
\qquad g_2=\frac25\cdot\frac18=\frac1{20}.
$$

Since $g_1<g_2$, the answer is $\hat y=2$. The normalized posterior probabilities are $8/17$ and $9/17$.

### (5)
The score comparison is

$$
\frac{2q}{27}\ge\frac{1-q}{8}
\quad\Longleftrightarrow\quad q\ge\frac{27}{43}.
$$

Thus $\hat y=1$ for $27/43\le q\le1$, and $\hat y=2$ for $0\le q<27/43$. Equality belongs to class $1$ by the specified tie rule.
