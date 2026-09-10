---
sidebar_label: '2024年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Geometric-Distribution
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
---

# 東京大学 工学系研究科 2024年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の手順で $0$ または $1$ を取る確率変数の列を生成する。生成された $n$ 番目の変数を $X_n$ とする。

- $X_1$ は、確率 $2/3$ で $0$、確率 $1/3$ で $1$ となる。
- 各 $n\ge1$ について、$X_n=0$ なら確率 $p$ で、$X_n=1$ なら確率 $q$ で手順を終了する。ただし $0<p,q<1$ は一定とする。
- 終了しなかった場合、確率 $2/3$ で $X_{n+1}=0$、確率 $1/3$ で $X_{n+1}=1$ とし、繰り返す。

$n=\ell$ で終了すると、長さ $\ell$ の列 $(X_1,\ldots,X_\ell)$ が生成され、それ以降の変数は生成されない。

I. 整数 $k\ge1$ に対し、

$$
P_k=\begin{pmatrix}
\Pr(X_{n+k}=0\mid X_n=0)&\Pr(X_{n+k}=1\mid X_n=0)\\
\Pr(X_{n+k}=0\mid X_n=1)&\Pr(X_{n+k}=1\mid X_n=1)
\end{pmatrix}
$$

とする。

1. $P_1,P_2$ を $p,q$ で表せ。
2. $P_3$ を $P_1$ を用いて表せ。
3. $P_k=\gamma_kP_1$ と表すとき、実数 $\gamma_k$ を求めよ。

II. $m\ge2$ とする。$n=m$ より前に手順が終了していないとき、$X_m=0$ と $X_m=1$ の確率をそれぞれ求めよ。

III. 列の長さ $\ell$ の期待値と分散を求めよ。必要ならば $|r|<1$ に対する次式を用いてよい。

$$
\sum_{m=1}^{\infty}mr^{m-1}=\frac1{(1-r)^2},\qquad
\sum_{m=1}^{\infty}m^2r^{m-1}=\frac{1+r}{(1-r)^3}.
$$

IV. 整数 $k\ge1$ に対し、$\Pr(X_n=0\mid X_{n+k}=1)$ を求めよ。

#### 题目描述

按下述步骤生成取值为 $0$ 或 $1$ 的随机数列，已生成的第 $n$ 个变量记为 $X_n$。

- 首先生成 $X_1$，其中 $\Pr(X_1=0)=2/3$、$\Pr(X_1=1)=1/3$。
- 每次生成 $X_n$ 后，若 $X_n=0$，以概率 $p$ 结束；若 $X_n=1$，以概率 $q$ 结束，其中 $0<p,q<1$ 为常数。
- 若未结束，则以概率 $2/3$ 令 $X_{n+1}=0$，以概率 $1/3$ 令 $X_{n+1}=1$，继续上述步骤。

若在 $n=\ell$ 时结束，生成的数列长度为 $\ell$，以后不再生成变量。

I. 对整数 $k\ge1$，定义

$$
P_k=\begin{pmatrix}
\Pr(X_{n+k}=0\mid X_n=0)&\Pr(X_{n+k}=1\mid X_n=0)\\
\Pr(X_{n+k}=0\mid X_n=1)&\Pr(X_{n+k}=1\mid X_n=1)
\end{pmatrix}.
$$

1. 用 $p,q$ 表示 $P_1,P_2$。
2. 用 $P_1$ 表示 $P_3$。
3. 若 $P_k=\gamma_kP_1$，求实数 $\gamma_k$。

II. 对 $m\ge2$，在过程于 $n=m$ 之前尚未结束的条件下，分别求 $X_m=0$ 和 $X_m=1$ 的概率。

III. 求长度 $\ell$ 的期望和方差。可使用 $|r|<1$ 时

$$
\sum_{m=1}^{\infty}mr^{m-1}=\frac1{(1-r)^2},\qquad
\sum_{m=1}^{\infty}m^2r^{m-1}=\frac{1+r}{(1-r)^3}.
$$

IV. 对 $k\ge1$，求 $\Pr(X_n=0\mid X_{n+k}=1)$。

## **Kai**

### I

手順が終了した後には新たな値は生成されない。したがって

$$
\boxed{P_1=\frac13\begin{pmatrix}2(1-p)&1-p\\2(1-q)&1-q\end{pmatrix}}.
$$

ここで、

$$
r=\frac{2(1-p)+(1-q)}3=1-\frac{2p+q}{3}.
$$

$u=(1-p,1-q)^T$、$v=(2/3,1/3)^T$ とおけば、$P_1=uv^T$、$v^Tu=r$ である。よって

$$
\boxed{P_2=rP_1,\qquad P_3=r^2P_1,\qquad\gamma_k=r^{k-1}}.
$$

### II

$X_m$ が生成されるという条件のもとでは、指定された分布で新たに抽出されるので、

$$
\boxed{\Pr(X_m=0\mid\ell\ge m)=\frac23,\qquad
\Pr(X_m=1\mid\ell\ge m)=\frac13}.
$$

### III

新たな変数を生成するごとに、終了確率は $\alpha=(2p+q)/3=1-r$ である。よって

$$
\Pr(\ell=m)=\alpha r^{m-1}\quad(m\ge1),
$$

すなわち、$\ell$ は $1$ から始まる幾何分布に従う。したがって

$$
\boxed{\mathbb E[\ell]=\frac3{2p+q},\qquad
\operatorname{Var}(\ell)=\frac{3(3-2p-q)}{(2p+q)^2}}.
$$

### IV

$X_n$ が生成された条件のもとでは、その事前確率は $2/3,1/3$ である。I と Bayes の公式から、

$$
\begin{aligned}
\Pr(X_n=0\mid X_{n+k}=1)
&=\frac{\frac23\,r^{k-1}\frac{1-p}{3}}
{\frac23\,r^{k-1}\frac{1-p}{3}+\frac13\,r^{k-1}\frac{1-q}{3}}\\
&=\boxed{\frac{2(1-p)}{3-2p-q}}.
\end{aligned}
$$

