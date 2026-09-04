---
sidebar_label: "2024年度 数理科学 [II-8]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Law-of-Large-Numbers
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-8]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数とする。実数値確率変数 $X_1,\ldots,X_n$ は独立同分布で、密度は

$$
f(x;\mu)=\frac1{\sqrt{1+\mu^2}+1}
\exp\left(\frac\mu{\sqrt{1+\mu^2}+1}x-|x|\right),\qquad x\in\mathbb R,\quad\mu\in\mathbb R
$$

とする。$\bar X_n=n^{-1}\sum_iX_i$ について、次の問いに理由を付して答えよ。

(1) $\bar X_n$ は $\mu$ の不偏推定量か。

(2) $\bar X_n^2$ は $\mu^2$ の不偏推定量か。

(3) $n\to\infty$ のとき、$\bar X_n^3$ は $\mu^3$ の一致推定量か。

## **Kai**

$s=\sqrt{1+\mu^2}$, $a=s+1$, $b=\mu/a$ とおく。$|b|<1$, $1-b^2=2/a$ であり、密度は $x\ge0$ で $a^{-1}e^{-(1-b)x}$、$x<0$ で $a^{-1}e^{(1+b)x}$ と表される。

### (1)

$$
E[X_i]=\frac1a\left\{\frac1{(1-b)^2}-\frac1{(1+b)^2}\right\}
=\frac{4b}{a(1-b^2)^2}=ab=\mu.
$$

従って $\boxed{E[\bar X_n]=\mu}$ であり、不偏推定量である。

### (2)

同様に

$$
E[X_i^2]=\frac2a\left\{\frac1{(1-b)^3}+\frac1{(1+b)^3}\right\}
=2\mu^2+s+1,
$$

より $\operatorname{Var}(X_i)=\mu^2+s+1=s(s+1)>0$。したがって

$$
\boxed{E[\bar X_n^2]=\mu^2+\frac{s(s+1)}n>\mu^2}
$$

であり、不偏ではない。

### (3)

$E|X_i|<\infty$ なので大数の法則から $\bar X_n\xrightarrow{P}\mu$。関数 $x\mapsto x^3$ は連続であるから $\boxed{\bar X_n^3\xrightarrow{P}\mu^3}$。従って一致推定量である。
