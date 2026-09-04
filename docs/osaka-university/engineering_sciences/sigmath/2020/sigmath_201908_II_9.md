---
sidebar_label: "2019年8月実施 数理科学 II [9]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[9\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正整数、$\theta>0$ とする。独立な $X_1,\ldots,X_n$ は $[0,\theta]$ 上の一様分布に従い、$Z=\max_iX_i$ とおく。

(1) $\theta$ の最尤推定量 $\widehat\theta$ を求めよ。

(2) $0\le\beta\le1$ に対して $P(Z\le\beta\theta)$ を求めよ。

(3) $0<\alpha<1$ とする。$P(L\le\theta\le U)=1-\alpha$ かつ $L\le\widehat\theta\le U$ を満たす信頼区間を $Z,\alpha$ を用いて一つ構成せよ。

## **Kai**

### (1)
尤度 $L(\theta)=\theta^{-n}1_{\{\theta\ge Z\}}$ は $\theta\ge Z$ で減少するので $\boxed{\widehat\theta=Z}$。

### (2)
独立性により $\boxed{P(Z\le\beta\theta)=\beta^n}$。

### (3)

$$
\boxed{[L,U]=\left[Z,\frac{Z}{\alpha^{1/n}}\right]}.
$$

$Z\le\theta$ は確率 $1$ で成立する。また

$$
P\left(\theta\le\frac{Z}{\alpha^{1/n}}\right)
=P(Z\ge\alpha^{1/n}\theta)=1-\alpha.
$$

$0<\alpha^{1/n}<1$ より $L=\widehat\theta\le U$ も満たす。
