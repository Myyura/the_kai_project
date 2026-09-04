---
sidebar_label: "2023年度 数理科学 I [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 I \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\theta>0$ とする。独立な $X_1,\ldots,X_n$ は密度

$$
f(x;\theta)=\begin{cases}\theta^{-1}x^{1/\theta-1}&0<x<1,\\0&\text{その他}\end{cases}
$$

をもつ。

(1) $\theta$ の最尤推定量 $\widehat\theta_n$ を求めよ。

(2) $\widehat\theta_n$ は不偏推定量か。理由を述べよ。

(3) $E[(\widehat\theta_n-\theta)^2]$ を求めよ。

## **Kai**

### (1)
$S=-\sum_i\log X_i>0$ とおく。定数項を除く対数尤度は $-n\log\theta-S/\theta$。微分すると $(S-n\theta)/\theta^2$ であるから

$$
\boxed{\widehat\theta_n=-\frac1n\sum_{i=1}^n\log X_i}.
$$

### (2)
$Y_i=-\log X_i$ と変換すると、その密度は $\theta^{-1}e^{-y/\theta}$ ($y>0$)。したがって $E[Y_i]=\theta,V[Y_i]=\theta^2$ であり、$E[\widehat\theta_n]=\theta$。よって不偏である。

### (3)
不偏性と独立性より

$$
\boxed{E[(\widehat\theta_n-\theta)^2]=V[\widehat\theta_n]=\frac{\theta^2}n}.
$$
