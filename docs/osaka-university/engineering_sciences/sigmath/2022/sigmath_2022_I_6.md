---
sidebar_label: "2022年度 数理科学 I [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 I \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は3以上の整数、$\theta>0$ は未知の実パラメータとする。独立な $X_1,\ldots,X_n$ は密度 $f(x\mid\theta)=\theta/x^2$ ($x\ge\theta$)、$0$ ($x<\theta$) をもつ。

(1) $\theta$ の最尤推定量 $\widehat\theta_n$ を求めよ。

(2) $\widehat\theta_n$ の分布関数を求めよ。

(3) $\widehat\theta_n$ は不偏推定量か。理由を述べよ。

(4) $\widehat\theta_n$ は一致推定量か。理由を述べよ。

## **Kai**

### (1)
尤度は $0<\theta\le\min_iX_i$ で $\theta^n\prod_iX_i^{-2}$ となり、$\theta$ に関して増加する。よって $\boxed{\widehat\theta_n=\min_iX_i}$。

### (2)
$x\ge\theta$ では $P(X_i>x)=\theta/x$。独立性より

$$
\boxed{P(\widehat\theta_n\le x)=\begin{cases}0&x<\theta,\\1-(\theta/x)^n&x\ge\theta.\end{cases}}
$$

### (3)
密度は $n\theta^nx^{-n-1}$ ($x>\theta$) だから

$$
E[\widehat\theta_n]=n\theta^n\int_\theta^\infty x^{-n}\,dx=\frac n{n-1}\theta\ne\theta.
$$

したがって不偏ではない。

### (4)
$\varepsilon>0$ に対し

$$
P(|\widehat\theta_n-\theta|>\varepsilon)
=\left(\frac\theta{\theta+\varepsilon}\right)^n\longrightarrow0.
$$

よって一致推定量である。
