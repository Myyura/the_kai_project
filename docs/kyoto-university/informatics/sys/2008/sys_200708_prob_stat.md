---
sidebar_label: 2007年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Markov-and-Chebyshev-Inequalities
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
  - Mathematics.Calculus.Gamma-Function
---

# 京都大学 情報学研究科 システム科学専攻 2007年8月実施 確率統計

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$F(x)=\Pr(Z\le x)$、$E[Z]=0$、$\operatorname{Var}(Z)=\sigma^2>0$ とする。

(i) $E[(tX+Y)^2]$ を $t$ の二次式と考えて、一般の確率変数に対する $(E[XY])^2\le E[X^2]E[Y^2]$ を示せ。

(ii) $X=Z-x$、$Y=1$（$Z\ge x$）、$Y=0$（$Z<x$）とする。$E[X^2],E[Y^2]$ を求め、$-x=E[X]\le E[XY]$ を示せ。

(iii) $x<0$ に対して $F(x)\le\sigma^2/(x^2+\sigma^2)$ を示せ。

(iv) $x\ge0$ に対して $F(x)\ge x^2/(x^2+\sigma^2)$ を示せ。

### 問2
平均 $0$、未知分散 $\sigma^2$ の正規母集団から独立標本 $X_1,\ldots,X_N$ をとる。

(i) $\widehat\sigma_1=c_1\sum_{i=1}^N|X_i|$ が $\sigma$ の不偏推定量となる $c_1$ を求めよ。

(ii) このときの $\operatorname{Var}(\widehat\sigma_1)$ を求めよ。

(iii) $\widehat\sigma_2=c_2\sqrt{\sum_{i=1}^NX_i^2}$ が不偏となる $c_2$ を求めよ。$W=\sigma^{-2}\sum_iX_i^2$ の密度およびガンマ関数は次で与えられる。

$$
g(w)=\frac{w^{N/2-1}e^{-w/2}}{2^{N/2}\Gamma(N/2)}\quad(w>0),\qquad
\Gamma(z)=\int_0^\infty e^{-t}t^{z-1}\,dt\quad(z>0).
$$

(iv) $\operatorname{Var}(\widehat\sigma_2)$ を求め、$N$ が大きいときの近似式および両推定量の優劣を述べよ。$\Gamma(z)\simeq\sqrt{2\pi}e^{-z}z^{z-1/2}$ を用いてよい。

#### 题目描述

### 问1
设 $F(x)=\Pr(Z\le x)$，$E[Z]=0$，$\operatorname{Var}(Z)=\sigma^2>0$。

(i) 将 $E[(tX+Y)^2]$ 看作 $t$ 的二次式，证明 $(E[XY])^2\le E[X^2]E[Y^2]$。

(ii) 令 $X=Z-x$，$Y=\mathbf1_{\{Z\ge x\}}$。求 $E[X^2],E[Y^2]$，并证明 $-x=E[X]\le E[XY]$。

(iii) 证明 $x<0$ 时 $F(x)\le\sigma^2/(x^2+\sigma^2)$。

(iv) 证明 $x\ge0$ 时 $F(x)\ge x^2/(x^2+\sigma^2)$。

### 问2
从 $N(0,\sigma^2)$ 取得 $N$ 个独立样本，$\sigma$ 未知。

(i) 求 $c_1$ 使 $\widehat\sigma_1=c_1\sum_i|X_i|$ 无偏。(ii) 求其方差。

(iii) 求 $c_2$ 使 $\widehat\sigma_2=c_2\sqrt{\sum_iX_i^2}$ 无偏。已知 $W=\sigma^{-2}\sum_iX_i^2$ 的密度为 $w^{N/2-1}e^{-w/2}/[2^{N/2}\Gamma(N/2)]$（$w>0$），$\Gamma(z)=\int_0^\infty e^{-t}t^{z-1}\,dt$。

(iv) 求 $\widehat\sigma_2$ 的方差及大 $N$ 近似，并比较两个估计量。可用斯特林公式 $\Gamma(z)\simeq\sqrt{2\pi}e^{-z}z^{z-1/2}$。

## **Kai**

### 問1
(i) $E[X^2]>0$ のとき、非負な二次式

$$
E[X^2]t^2+2E[XY]t+E[Y^2]\ge0
$$

の判別式は非正なので結論を得る。$E[X^2]=0$ ならば $X=0$ がほとんど確実に成立し、同じ不等式が成り立つ。

(ii) $F(x-)=\Pr(Z<x)$ と書くと

$$
E[X^2]=\sigma^2+x^2,\qquad E[Y^2]=\Pr(Z\ge x)=1-F(x-).
$$

$XY=\max(Z-x,0)\ge Z-x=X$ より $E[XY]\ge-x$。

(iii) $Y_+=\mathbf1_{\{Z>x\}}$ としても $XY_+=XY$。$x<0$ なので (i)、(ii) から

$$
x^2\le(E[XY_+])^2\le(\sigma^2+x^2)\{1-F(x)\}.
$$

整理すれば $\boxed{F(x)\le\sigma^2/(x^2+\sigma^2)}$。

(iv) $x>0$ で (iii) を $-Z$ と $-x$ に適用すると $\Pr(Z\ge x)\le\sigma^2/(x^2+\sigma^2)$。ゆえに

$$
\boxed{F(x)\ge\Pr(Z<x)\ge\frac{x^2}{x^2+\sigma^2}}.
$$

$x=0$ では $F(0)\ge0$ より自明である。

### 問2
(i) $E[|X_i|]=\sigma\sqrt{2/\pi}$ なので $\boxed{c_1=\sqrt{\pi/2}/N}$。

(ii) $\operatorname{Var}(|X_i|)=\sigma^2(1-2/\pi)$ と独立性より

$$
\boxed{\operatorname{Var}(\widehat\sigma_1)=\frac{(\pi-2)\sigma^2}{2N}}.
$$

(iii) ガンマ積分から $E[\sqrt W]=\sqrt2\,\Gamma((N+1)/2)/\Gamma(N/2)$。よって

$$
\boxed{c_2=\frac{\Gamma(N/2)}{\sqrt2\,\Gamma((N+1)/2)}}.
$$

(iv) $E[W]=N$ より

$$
\operatorname{Var}(\widehat\sigma_2)
=\sigma^2\left\{\frac{N\Gamma(N/2)^2}{2\Gamma((N+1)/2)^2}-1\right\}.
$$

スターリング展開から $c_2=N^{-1/2}(1+1/(4N)+O(N^{-2}))$ であり、

$$
\boxed{\operatorname{Var}(\widehat\sigma_2)=\frac{\sigma^2}{2N}+O(N^{-2})}.
$$

$\pi-2>1$ なので、十分大きい $N$ では $\widehat\sigma_2$ の方が分散が小さい。

