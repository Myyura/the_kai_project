---
sidebar_label: "2019年8月実施 数理科学 II [8]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[8\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X_1,X_2,\ldots$ は独立同分布の実数値確率変数で $E[X_1^4]<\infty$ とする。$\theta=E[X_1]$、$\overline X_n=n^{-1}\sum_{i=1}^nX_i$ とおく。

(1) $\lim_{n\to\infty}E[\overline X_n^2]$ を求めよ。

(2) $\lim_{n\to\infty}V[\overline X_n^2]$ を求めよ。

(3) $\overline X_n^2$ は $\theta^2$ の一致推定量か。理由も述べよ。

## **Kai**

### (1)
$\sigma^2=V[X_1]$ とおくと

$$
E[\overline X_n^2]=\theta^2+\frac{\sigma^2}{n}\longrightarrow\boxed{\theta^2}.
$$

### (2)
$Z_n=\overline X_n-\theta$、$\mu_j=E[(X_1-\theta)^j]$ とおく。独立性より

$$
E[Z_n^2]=\frac{\sigma^2}n,\quad E[Z_n^3]=\frac{\mu_3}{n^2},\quad
E[Z_n^4]=\frac{\mu_4+3(n-1)\sigma^4}{n^3}.
$$

ゆえに

$$
V[\overline X_n^2]
=\frac{4\theta^2\sigma^2}n+\frac{4\theta\mu_3}{n^2}
+\frac{\mu_4+(2n-3)\sigma^4}{n^3}\longrightarrow\boxed0.
$$

### (3)
大数の法則と連続写像定理により $\overline X_n^2\xrightarrow{P}\theta^2$。したがって一致推定量である。
