---
sidebar_label: "2021年度 数理科学 II [7]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[7\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は2以上の整数とし、$\mu,\gamma$ は $\mu\ne0,\gamma>0$ を満たす実数とする。独立な実数値確率変数 $X_1,\ldots,X_n$ は平均 $\mu$、分散 $\gamma/\mu^2$ の正規分布に従う。パラメータ空間は $\Theta=\{(\mu,\gamma)\in\mathbb R^2\mid\mu\ne0,\gamma>0\}$ である。

(1) $(\mu,\gamma)$ の最尤推定量 $(\widehat\mu_n,\widehat\gamma_n)$ を求めよ。

(2) 任意の $(\mu,\gamma)\in\Theta$、$\varepsilon>0$ に対して

$$
P(|\widehat\mu_n-\mu|+|\widehat\gamma_n-\gamma|>\varepsilon)\longrightarrow0
$$

を示せ。

## **Kai**

### (1)
$\sigma^2=\gamma/\mu^2$ と再パラメータ化する。$\overline X_n=n^{-1}\sum X_i$、$S_n^2=n^{-1}\sum(X_i-\overline X_n)^2$ とおく。正規分布の尤度最大化より

$$
\boxed{\widehat\mu_n=\overline X_n,\qquad\widehat\gamma_n=\overline X_n^2S_n^2}.
$$

$n\ge2$ では $\overline X_n\ne0,S_n^2>0$ が確率 $1$ で成立するので、この組はほとんど確実に $\Theta$ に属する。

### (2)
大数の法則により

$$
\overline X_n\xrightarrow{P}\mu,\qquad
S_n^2=\frac1n\sum X_i^2-\overline X_n^2\xrightarrow{P}\frac\gamma{\mu^2}.
$$

連続写像定理から $\widehat\gamma_n\xrightarrow{P}\gamma$。したがって

$$
P(|\widehat\mu_n-\mu|+|\widehat\gamma_n-\gamma|>\varepsilon)
\le P(|\widehat\mu_n-\mu|>\varepsilon/2)+P(|\widehat\gamma_n-\gamma|>\varepsilon/2)\to0.
$$
