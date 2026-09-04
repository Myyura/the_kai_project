---
sidebar_label: "2021年度 数理科学 I [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\theta$ は実数とする。$X_1,X_2,\ldots$ は独立に区間 $[\theta-1/2,\theta+1/2]$ 上の一様分布に従う。

(1) $\widehat\theta_n=\max_{1\le i\le n}X_i-1/2$ が $\theta$ の最尤推定量の一つであることを示せ。

(2) $M_n=\max_{1\le i\le n}X_i$ の確率密度関数を求めよ。

(3) $\{n(\widehat\theta_n-\theta)\}$ が確率有界、すなわち任意の $\varepsilon>0$ に対してある $K>0$ が存在し $\sup_{n\ge1}P(|n(\widehat\theta_n-\theta)|>K)<\varepsilon$ となることを示せ。

## **Kai**

### (1)
尤度は $\max_iX_i-1/2\le\theta\le\min_iX_i+1/2$ で $1$、それ以外で $0$。この区間内の値はすべて最尤推定値なので、左端 $\widehat\theta_n$ も最尤推定量である。

### (2)
区間内部で $P(M_n\le x)=(x-\theta+1/2)^n$。したがって

$$
\boxed{f_{M_n}(x)=n(x-\theta+1/2)^{n-1}1_{(\theta-1/2,\theta+1/2)}(x)}.
$$

### (3)
$0\le\theta-\widehat\theta_n\le1$。$n>K$ なら

$$
P(n(\theta-\widehat\theta_n)>K)=\left(1-\frac Kn\right)^n\le e^{-K}.
$$

$n\le K$ では左辺は $0$。よって $K>\log(1/\varepsilon)$ を十分大きく選べばよい。
