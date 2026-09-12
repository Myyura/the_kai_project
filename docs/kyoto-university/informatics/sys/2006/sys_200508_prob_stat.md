---
sidebar_label: 2005年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
---

# 京都大学 情報学研究科 システム科学専攻 2005年8月実施 確率統計

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$a>0$ に対し、標準正規分布の上側確率を

$$
Q(a)=\frac1{\sqrt{2\pi}}\int_a^{\infty}e^{-x^2/2}\,dx
$$

とする。独立な標準正規確率変数 $X,Y$ を用いて、以下に答えよ。

(i) $Q(a)^2=P(X\ge a,Y\ge a)$ を示せ。

(ii) $P(X\ge a,Y\ge a)<\tfrac14P(X^2+Y^2\ge2a^2)$ を示せ。

(iii) $P(X^2+Y^2\ge2a^2)$ を求め、$Q(a)$ の上界を与えよ。

### 問2
$X_1,\ldots,X_N$（$N>1$）は独立同分布で、平均 $\mu$、分散 $\sigma^2$ とする。

(i) 定数 $g_1,\ldots,g_N$ が $\sum_i g_i=1$ を満たすとき、$\hat\mu=\sum_i g_iX_i$ が $\mu$ の不偏推定量であることを示せ。

(ii) この不偏推定量の分散を最小にする $g_1,\ldots,g_N$ を求めよ。

(iii) $\hat\sigma^2=k\sum_{i=1}^{N-1}(X_{i+1}-X_i)^2$ が $\sigma^2$ の不偏推定量となるように、定数 $k$ を定めよ。

#### 题目描述

### 问1
对 $a>0$，定义标准正态分布的上尾概率

$$
Q(a)=\frac1{\sqrt{2\pi}}\int_a^\infty e^{-x^2/2}\,dx.
$$

设 $X,Y$ 为独立的标准正态随机变量。

(i) 证明 $Q(a)^2=P(X\ge a,Y\ge a)$。

(ii) 证明 $P(X\ge a,Y\ge a)<\tfrac14P(X^2+Y^2\ge2a^2)$。

(iii) 求 $P(X^2+Y^2\ge2a^2)$，并给出 $Q(a)$ 的上界。

### 问2
$X_1,\ldots,X_N$（$N>1$）独立同分布，均值为 $\mu$，方差为 $\sigma^2$。

(i) 若常数 $g_i$ 满足 $\sum_i g_i=1$，证明 $\hat\mu=\sum_i g_iX_i$ 是 $\mu$ 的无偏估计量。

(ii) 求使该无偏估计量的方差最小的全部权重 $g_i$。

(iii) 确定常数 $k$，使 $\hat\sigma^2=k\sum_{i=1}^{N-1}(X_{i+1}-X_i)^2$ 为 $\sigma^2$ 的无偏估计量。

## **Kai**

### 問1
(i) 独立性から $P(X\ge a,Y\ge a)=P(X\ge a)P(Y\ge a)=Q(a)^2$。

(ii) $D=\{x\ge a,y\ge a\}$ は $C=\{x\ge0,y\ge0,x^2+y^2\ge2a^2\}$ に含まれ、$C\setminus D$ は正の面積を持つ。結合密度は至る所で正であり、四象限の対称性から

$$
P((X,Y)\in D)<P((X,Y)\in C)=\tfrac14P(X^2+Y^2\ge2a^2).
$$

![正規分布の上側確率を比較する領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2006/sys_200508_prob_stat_tail.svg)

(iii) 極座標により

$$
P(X^2+Y^2\ge2a^2)=\frac1{2\pi}\int_0^{2\pi}\!d\theta\int_{\sqrt2a}^{\infty}e^{-r^2/2}r\,dr=e^{-a^2}.
$$

(i)、(ii) より $\boxed{Q(a)<\tfrac12e^{-a^2/2}}$。

### 問2
(i) $E[\hat\mu]=\sum_i g_iE[X_i]=\mu\sum_i g_i=\mu$。

(ii) 独立性と Cauchy–Schwarz の不等式より

$$
\operatorname{Var}(\hat\mu)=\sigma^2\sum_i g_i^2\ge\frac{\sigma^2}{N}\left(\sum_i g_i\right)^2=\frac{\sigma^2}{N}.
$$

$\sigma^2>0$ のとき等号条件は $\boxed{g_i=1/N\ (i=1,\ldots,N)}$。$\sigma^2=0$ ならば、和が $1$ のすべての重みで分散は $0$ となる。

(iii) 独立性より $E[(X_{i+1}-X_i)^2]=2\sigma^2$。したがって $E[\hat\sigma^2]=2k(N-1)\sigma^2$ であるから、$\boxed{k=1/\{2(N-1)\}}$ とすればよい。

