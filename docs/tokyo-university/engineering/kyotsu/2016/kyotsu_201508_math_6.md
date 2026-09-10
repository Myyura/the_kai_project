---
sidebar_label: '2015年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Approximation-to-Binomial
  - Probability-Statistics.Probability-Basics.Sum-of-Independent-Poisson-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---

# 東京大学 工学系研究科 2015年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

会社は複数の工場 $i=1,2,\ldots$ を持つ。工場 $i$ の不良品発生確率を $P_i$ とし、無作為に抽出した $N_i$ 個を出荷する。各工場は互いに独立で、$P_i$ は十分小さい。工場 $i$ の出荷品に不良品がちょうど $k$ 個含まれる確率を $f(i,k)$ とする。

I. $f(i,k)$ を求めよ。

II. $\lambda_i=N_iP_i$ を定数に保ち、$N_i\to\infty$ のとき次の極限を示せ。

$$
f(i,k)\longrightarrow\frac{e^{-\lambda_i}\lambda_i^k}{k!}.
$$

以下の設問では、このポアソン分布を用いる。

III. 二つの工場のデータが次のとおりであるとき、出荷品全体に不良品がちょうど2個含まれる確率を求めよ。

| 工場 $i$ | $P_i$ | $N_i$ |
|---|---:|---:|
| 1 | 0.01 | 500 |
| 2 | 0.02 | 300 |

IV. III と同じ条件で、出荷品全体に不良品がちょうど $k$ 個含まれる確率を求めよ。

V. 五つの工場 $i=1,\ldots,5$ で $P_i=0.001i$ とし、各工場から同数 $N_c$ 個を出荷する。全不良品数の期待値が3以下となる $N_c$ の最大値を求めよ。

#### 题目描述

公司有多个工厂 $i=1,2,\ldots$。工厂 $i$ 的次品率为 $P_i$，随机抽取并发货 $N_i$ 件产品。各工厂相互独立，$P_i$ 充分小。记该厂发货中恰有 $k$ 件次品的概率为 $f(i,k)$。

I. 求 $f(i,k)$。

II. 保持 $\lambda_i=N_iP_i$ 为常数，证明当 $N_i\to\infty$ 时，

$$
f(i,k)\longrightarrow\frac{e^{-\lambda_i}\lambda_i^k}{k!}.
$$

以下按该泊松分布计算。

III. 两个工厂的数据如下，求全部发货中恰有两件次品的概率。

| 工厂 $i$ | $P_i$ | $N_i$ |
|---|---:|---:|
| 1 | 0.01 | 500 |
| 2 | 0.02 | 300 |

IV. 在 III 的条件下，求全部发货中恰有 $k$ 件次品的概率。

V. 对五个工厂 $i=1,\ldots,5$，设 $P_i=0.001i$，每厂发货件数均为 $N_c$。若总次品数的期望不超过 $3$，求 $N_c$ 的最大值。

## **Kai**

### I

独立な抽出より、二項分布に従う。

$$
\boxed{f(i,k)=\binom{N_i}{k}P_i^k(1-P_i)^{N_i-k},\quad0\le k\le N_i,}
$$

それ以外の $k$ に対する確率は0である。

### II

$k$ を固定して $P_i=\lambda_i/N_i$ を代入すると、

$$
f(i,k)=\frac{\lambda_i^k}{k!}
\prod_{j=0}^{k-1}\left(1-\frac j{N_i}\right)
\left(1-\frac{\lambda_i}{N_i}\right)^{N_i}
\left(1-\frac{\lambda_i}{N_i}\right)^{-k}
\longrightarrow\boxed{\frac{\lambda_i^ke^{-\lambda_i}}{k!}}.
$$

### III

$\lambda_1=5,\lambda_2=6$ より、

$$
\boxed{P(K_1+K_2=2)
=e^{-11}\left(\frac{5^2}2+5\cdot6+\frac{6^2}2\right)
=\frac{121}{2}e^{-11}.}
$$

### IV

畳み込みと二項定理により、

$$
\begin{aligned}
P(K_1+K_2=k)
&=e^{-11}\sum_{j=0}^k\frac{5^j6^{k-j}}{j!(k-j)!}\\
&=\frac{e^{-11}}{k!}\sum_{j=0}^k\binom kj5^j6^{k-j}
=\boxed{\frac{11^k}{k!}e^{-11}}.
\end{aligned}
$$

### V

期待値の線形性から、

$$
E[K]=\sum_{i=1}^5N_cP_i
=0.001N_c(1+2+3+4+5)=0.015N_c.
$$

$0.015N_c\le3$ より、$\boxed{N_{c,\max}=200}$。
