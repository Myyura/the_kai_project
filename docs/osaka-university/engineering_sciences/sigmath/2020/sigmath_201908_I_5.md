---
sidebar_label: "2019年8月実施 数理科学 I [5]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

独立な確率変数 $X_1,X_2,\ldots$ は、$\theta>0$ として密度

$$
f(x\mid\theta)=\begin{cases}\theta(1-x)^{\theta-1}&0<x<1,\\0&\text{その他}\end{cases}
$$

をもつ。$\overline X_n=n^{-1}\sum_{i=1}^nX_i$、$S_n=n^{-1}\sum_{i=1}^n(X_i-\overline X_n)^2$ とする。ただし $n=2,3,\ldots$ とし、$E[\cdot]$、$V[\cdot]$ は平均、分散を表す。

(1) $E[X_1],V[X_1]$ を求めよ。

(2) $S_n$ は $V[X_1]$ の不偏推定量か。理由も述べよ。

(3) $1/\overline X_n-1$ は $\theta$ の一致推定量か。理由も述べよ。

## **Kai**

### (1)
ベータ積分により

$$
E[X_1]=\frac1{\theta+1},\qquad E[X_1^2]=\frac2{(\theta+1)(\theta+2)}.
$$

よって

$$
\boxed{V[X_1]=\frac{\theta}{(\theta+1)^2(\theta+2)}}.
$$

### (2)
$S_n=n^{-1}\sum X_i^2-\overline X_n^2$ より

$$
E[S_n]=\frac{n-1}{n}V[X_1]\ne V[X_1].
$$

したがって不偏推定量ではない。

### (3)
大数の法則により $\overline X_n\xrightarrow{P}1/(\theta+1)>0$。連続写像定理から

$$
\frac1{\overline X_n}-1\xrightarrow{P}\theta,
$$

ゆえに一致推定量である。
