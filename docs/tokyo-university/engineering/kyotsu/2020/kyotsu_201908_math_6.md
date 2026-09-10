---
sidebar_label: '数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Absorbing-Random-Walk
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Discrete-Mathematics.Combinatorics.Binomial-Coefficient
---

# 東京大学 工学系研究科 2020年度 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問題

独立な $n$ 回の試行を行い、各回で $+1$ 点または $-1$ 点をそれぞれ確率 $1/2$ で得る。第 $k$ 回の得点を $X_k$、$S_k=\sum_{i=1}^kX_i$ とする。以下、$n\ge4$ は偶数、$t$ は $2\le t\le n$ を満たす偶数とする。

I. $P(S_4=0)$ を求めよ。

II. $P_n(t)=P(S_n=t)$ を求めよ。

III. $P_n^+(t)=P(S_1=1,S_n=t)$ を求めよ。

IV. $P_n^-(t)=P(S_1=-1,S_n=t)$ を求めよ。

V. $Q_n(t)=P(S_1>0,\ldots,S_{n-1}>0,S_n=t)$ とする。まず $P_n^+,P_n^-$ を用いて表し、次に $P_n$ を用いて表せ。

VI. $P(S_1>0,\ldots,S_n>0)$ を求めよ。

#### 题目描述

$n$ 次相互独立的试验中，每次以相同概率 $1/2$ 得到 $+1$ 或 $-1$ 分。令第 $k$ 次的得分为 $X_k$、$S_k=\sum_{i=1}^kX_i$。以下 $n\ge4$ 为偶数，$t$ 为满足 $2\le t\le n$ 的偶数。

I. 求 $P(S_4=0)$。

II. 令 $P_n(t)=P(S_n=t)$，求 $P_n(t)$。

III. 令 $P_n^+(t)=P(S_1=1,S_n=t)$，求 $P_n^+(t)$。

IV. 令 $P_n^-(t)=P(S_1=-1,S_n=t)$，求 $P_n^-(t)$。

V. 令 $Q_n(t)=P(S_1>0,\ldots,S_{n-1}>0,S_n=t)$。先用 $P_n^+,P_n^-$ 表示 $Q_n$，再用 $P_n$ 表示。

VI. 求 $P(S_1>0,\ldots,S_n>0)$。

## **Kai**

### I–IV.

$k=(n+t)/2$ とおく。これは $n$ 回中で $+1$ が出る回数である。直接数え上げて

$$
\boxed{P(S_4=0)=\frac{\binom42}{2^4}=\frac38},\qquad
\boxed{P_n(t)=2^{-n}\binom nk}.
$$

最初の符号を固定すると

$$
\boxed{P_n^+(t)=2^{-n}\binom{n-1}{k-1}=\frac{n+t}{2n}P_n(t)},
$$

$$
\boxed{P_n^-(t)=2^{-n}\binom{n-1}{k}=\frac{n-t}{2n}P_n(t)}.
$$

範囲外の二項係数は零とする。

### V.

最初に $+1$ へ進んだ後、終点に達する前に零へ戻る経路を考える。出発点から初めて零に戻る時点までを横軸について反射すると、最初に $-1$ へ進んで同じ終点に達する経路と一対一に対応する。したがって

$$
\boxed{Q_n(t)=P_n^+(t)-P_n^-(t)=\frac tnP_n(t)}.
$$

### VI.

正の偶数の終点について和をとり、二項係数の差を望遠和として計算すると

$$
\begin{aligned}
P(S_1>0,\ldots,S_n>0)
&=2^{-n}\sum_{k=n/2+1}^n
\left[\binom{n-1}{k-1}-\binom{n-1}{k}\right]\\
&=\boxed{2^{-n}\binom{n-1}{n/2}
=2^{-n-1}\binom n{n/2}}.
\end{aligned}
$$

