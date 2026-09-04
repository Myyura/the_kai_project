---
sidebar_label: "2023年度 数理科学 I [5]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 I \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\alpha,\lambda$ は正の実数、$n$ は $n\alpha>2$ を満たす整数とする。独立な $X_1,\ldots,X_n$ は密度

$$
f(x;\lambda,\alpha)=\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}\quad(x>0)
$$

をもち、$x\le0$ では密度は0とする。ここで $\Gamma(\alpha)=\int_0^\infty x^{\alpha-1}e^{-x}\,dx$ である。$\alpha$ は既知とし、$\widehat\lambda=(n\alpha-1)/\sum_iX_i$ とおく。$S=\sum_iX_i$ の密度が $f(s;\lambda,n\alpha)$ であることを用いてよい。

(1) $\widehat\lambda$ は $\lambda$ の不偏推定量か。理由を述べよ。

(2) $V[\widehat\lambda]$ と $\{nE[(\partial_\lambda\log f(X_1;\lambda,\alpha))^2]\}^{-1}$ を比較せよ。

## **Kai**

### (1)
$k=n\alpha>2$ とする。ガンマ積分より

$$
E[S^{-1}]=\frac\lambda{k-1},\qquad E[S^{-2}]=\frac{\lambda^2}{(k-1)(k-2)}.
$$

したがって $E[\widehat\lambda]=(k-1)E[S^{-1}]=\lambda$ であり、不偏である。

### (2)

$$
V[\widehat\lambda]=(k-1)^2E[S^{-2}]-\lambda^2=\boxed{\frac{\lambda^2}{k-2}}.
$$

一方、スコアは $\alpha/\lambda-X_1$ で平均 $0$、分散 $\alpha/\lambda^2$。よって

$$
\left\{nE[(\partial_\lambda\log f)^2]\right\}^{-1}=\frac{\lambda^2}{n\alpha}=\frac{\lambda^2}k.
$$

$k>2$ なので $\boxed{V[\widehat\lambda]>\lambda^2/(n\alpha)}$。
