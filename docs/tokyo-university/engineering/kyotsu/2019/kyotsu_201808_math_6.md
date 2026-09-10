---
sidebar_label: '数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Weighted-Sum-of-Independent-Bernoulli-Variables
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
  - Probability-Statistics.Stochastic-Processes.Pattern-Probability-in-Markov-Sequence
---

# 東京大学 工学系研究科 2019年度 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$X_1,\ldots,X_n$ は $0,1$ を値とする確率変数とし、$n\ge4$ とする。

### I.
各 $X_k$ は独立で、$P(X_k=1)=p$、$P(X_k=0)=1-p$ とする。

1. $\sum_{k=1}^nX_k$ の期待値と分散を求めよ。
2. $X_n\cdots X_2X_1$ を $n$ 桁の2進整数 $Y$ とみなす。$Y$ の期待値と分散を求めよ。

### II.
次に $X_k$ を順に生成する。$P(X_1=1)=p$ とし、$X_k$ が直前の $X_{k-1}$ と同じ値をとる確率は $q$、異なる値をとる確率は $1-q$ とする。

1. $r_k=P(X_k=1)$ の漸化式を求め、$r_k$ を $p,q,k$ で表せ。
2. $P(X_1=1,X_2=0,X_3=1,X_4=0)$ を求めよ。
3. $P(X_3=1\mid X_1=0,X_2=1,X_4=1)$ を求めよ。

#### 题目描述

$X_1,\ldots,X_n$ 取值为 $0,1$，$n\ge4$。

##### I.
假设各 $X_k$ 相互独立，且 $P(X_k=1)=p$、$P(X_k=0)=1-p$。

1. 求 $\sum_{k=1}^nX_k$ 的期望与方差。
2. 将 $X_n\cdots X_2X_1$ 视为 $n$ 位二进制整数 $Y$，求 $Y$ 的期望与方差。

##### II.
现在依次生成 $X_k$：$P(X_1=1)=p$，且每次 $X_k$ 与 $X_{k-1}$ 相同的概率为 $q$，不同的概率为 $1-q$。

1. 令 $r_k=P(X_k=1)$，求递推关系及 $r_k$ 关于 $p,q,k$ 的表达式。
2. 求 $P(X_1=1,X_2=0,X_3=1,X_4=0)$。
3. 求 $P(X_3=1\mid X_1=0,X_2=1,X_4=1)$。

## **Kai**

### I.

1. 独立性より

$$
\boxed{E\left[\sum_{k=1}^nX_k\right]=np,\qquad
\operatorname{Var}\left(\sum_{k=1}^nX_k\right)=np(1-p)}.
$$

2. $Y=\sum_{k=1}^n2^{k-1}X_k$ より

$$
\boxed{E[Y]=p(2^n-1),\qquad
\operatorname{Var}(Y)=\frac{p(1-p)}3(4^n-1)}.
$$

### II.

1. 全確率の公式から

$$
r_{k+1}=qr_k+(1-q)(1-r_k)=(2q-1)r_k+1-q,\qquad r_1=p.
$$

したがって

$$
\boxed{r_k=\frac12+\left(p-\frac12\right)(2q-1)^{k-1}}.
$$

2. 指定された列では3回値が変わるので、確率は $\boxed{p(1-q)^3}$ である。

3. 条件事象に含まれる列は $0111$ と $0101$ の二つである。したがって

$$
\boxed{P(X_3=1\mid X_1=0,X_2=1,X_4=1)
=\frac{(1-p)(1-q)q^2}{(1-p)(1-q)[q^2+(1-q)^2]}
=\frac{q^2}{q^2+(1-q)^2}}.
$$

この条件付き確率は $p<1,q<1$ のとき定義される。$p=1$ または $q=1$ では条件事象の確率が零になる。
