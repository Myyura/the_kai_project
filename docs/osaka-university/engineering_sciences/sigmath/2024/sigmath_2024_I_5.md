---
sidebar_label: "2024年度 数理科学 [I-5]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Estimator-Consistency
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-5]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n\ge1$, $d\ge2$ を整数とする。$X_{i,j}$（$i=1,\ldots,n$, $j=1,\ldots,d$）は互いに独立で、$X_{i,j}\sim N(\mu_i,\sigma^2)$、$\mu_i\in\mathbb R$, $\sigma^2>0$ とする。

(1) $(\mu_1,\ldots,\mu_n,\sigma^2)$ の最尤推定量 $(\hat\mu_1,\ldots,\hat\mu_n,\hat\sigma_n^2)$ を求め、実際に尤度を最大化することを確認せよ。

(2) $\hat\sigma_n^2$ は $\sigma^2$ の不偏推定量か。(3) $d$ を固定して $n\to\infty$ とするとき、$\hat\sigma_n^2$ は $\sigma^2$ の一致推定量か。各々理由を述べよ。

## **Kai**

### (1)

$\bar X_i=d^{-1}\sum_jX_{i,j}$ とおく。

$$
\sum_{i,j}(X_{i,j}-\mu_i)^2
=\sum_{i,j}(X_{i,j}-\bar X_i)^2+d\sum_i(\bar X_i-\mu_i)^2
$$

より、任意の分散について尤度は $\hat\mu_i=\bar X_i$ で最大となる。$S=\sum_{i,j}(X_{i,j}-\bar X_i)^2$ とし、$v=\sigma^2$ に関する対数尤度を考えると

$$
\ell(v)=-\frac{nd}2\log(2\pi v)-\frac S{2v},\qquad
\ell'(v)=\frac{S-ndv}{2v^2}.
$$

$S>0$ は確率1で成立し、導関数は $v=S/(nd)$ で正から負へ変わる。よって

$$
\boxed{\hat\mu_i=\bar X_i,\qquad\hat\sigma_n^2=\frac1{nd}\sum_{i,j}(X_{i,j}-\bar X_i)^2}.
$$

### (2)

$S/\sigma^2\sim\chi^2_{n(d-1)}$ より

$$
E[\hat\sigma_n^2]=\boxed{\frac{d-1}{d}\sigma^2}\ne\sigma^2.
$$

従って不偏ではない。

### (3)

$$
\operatorname{Var}(\hat\sigma_n^2)=\frac{2(d-1)}{nd^2}\sigma^4\longrightarrow0.
$$

チェビシェフの不等式から $\hat\sigma_n^2\xrightarrow{P}(d-1)\sigma^2/d$。$d$ は固定されているので、$\sigma^2$ の一致推定量ではない。
