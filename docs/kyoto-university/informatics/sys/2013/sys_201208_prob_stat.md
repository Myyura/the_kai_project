---
sidebar_label: 2012年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
---
# 京都大学 情報学研究科 システム科学専攻 2012年8月実施 専門科目 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
$X_1,\ldots,X_n$（$n>2$）は独立で、共通の微分可能な分布関数 $F$ と密度 $f$ をもつ実確率変数とする。$Y=\max_iX_i,Z=\min_iX_i$ とおく。

(i) $P(Y\le y)=P(X_1\le y,\ldots,X_n\le y)$、$P(Z\ge z)=P(X_1\ge z,\ldots,X_n\ge z)$ を示せ。

(ii) $Y,Z$ の同時分布関数が

$$
G(y,z)=P(Y\le y)-P(Y\le y,Z>z)
=\begin{cases}F(y)^n-[F(y)-F(z)]^n,&y>z,\\F(y)^n,&y\le z\end{cases}
$$

であることを示し、同時密度 $g(y,z)$ を求めよ。

(iii) $W=Y-Z$ の分布関数は、$w\ge0$ に対して

$$
H(w)=n\int_{-\infty}^{\infty}f(z)[F(z+w)-F(z)]^{n-1}dz
$$

となることを示せ。

(iv) $X_i\sim U(0,1)$ の場合、$H(w)$ と、密度が最大となる $w$ を求めよ。

### 問題2
$X_1,\ldots,X_{n+1}$ は未知の平均 $\mu$、分散 $\sigma^2$ をもつ正規母集団からの独立標本とする。最初の $n$ 個の標本平均を $\overline X$、標本平方和を $S=\sum_{i=1}^n(X_i-\overline X)^2$ とする。

(i) $X_{n+1}-\overline X$ の分布を求めよ。

(ii) $\overline X$ と $(X_1-\overline X,\ldots,X_n-\overline X)$ が独立であることを示せ。

(iii) $S/\sigma^2\sim\chi^2_{n-1}$ を用いて、$\sigma^2$ の不偏推定量 $\widehat\sigma^2$ を作れ。

(iv) $X_{n+1}-\overline X$ と $\widehat\sigma^2$ が独立であることを示し、次の統計量の分布を述べよ。

$$
\frac{X_{n+1}-\overline X}{\widehat\sigma\sqrt{1+1/n}}.
$$

(v) 予測区間 $[\overline X-k\widehat\sigma,\overline X+k\widehat\sigma]$ が $X_{n+1}$ を含む確率が $1-\alpha$（$0<\alpha<1$）となる $k$ を求めよ。(iv) の分布の分位点を定義して用いてよい。

#### 题目描述

**问题1** 设 $n>2$ 个实随机变量 $X_i$ 独立同分布，共同分布函数 $F$ 可微、密度为 $f$；令 $Y=\max_iX_i$、$Z=\min_iX_i$。(i) 证明 $Y\le y$ 等价于所有 $X_i\le y$，$Z\ge z$ 等价于所有 $X_i\ge z$，并写出相应概率等式。(ii) 证明联合分布函数在 $y>z$ 时为 $F(y)^n-[F(y)-F(z)]^n$，在 $y\le z$ 时为 $F(y)^n$，并求联合密度。(iii) 证明极差 $W=Y-Z$ 在 $w\ge0$ 时的分布函数为

$$
H(w)=n\int_{-\infty}^{\infty}f(z)[F(z+w)-F(z)]^{n-1}dz.
$$

(iv) 若 $X_i\sim U(0,1)$，求 $H$ 及密度最大处的 $w$。

**问题2** 设 $X_1,\ldots,X_{n+1}$ 独立服从均值、方差未知的 $N(\mu,\sigma^2)$；令 $\overline X=n^{-1}\sum_{i=1}^nX_i$、$S=\sum_{i=1}^n(X_i-\overline X)^2$。(i) 求 $X_{n+1}-\overline X$ 的分布。(ii) 证明 $\overline X$ 与残差向量独立。(iii) 利用 $S/\sigma^2\sim\chi^2_{n-1}$ 构造方差的无偏估计 $\widehat\sigma^2$。(iv) 证明 $X_{n+1}-\overline X$ 与该估计独立，并求 $(X_{n+1}-\overline X)/(\widehat\sigma\sqrt{1+1/n})$ 的分布。(v) 用该分布的分位数求 $k$，使预测区间 $[\overline X-k\widehat\sigma,\overline X+k\widehat\sigma]$ 覆盖 $X_{n+1}$ 的概率等于 $1-\alpha$，$0<\alpha<1$。

## **Kai**

### 問題1
(i) 最大値が $y$ 以下であることはすべての値が $y$ 以下であることと同値であり、最小値についても同様である。

(ii) $\{Y\le y\}$ を $Z\le z$ と $Z>z$ に分ける。$y>z$ で $P(Y\le y,Z>z)=[F(y)-F(z)]^n$、$y\le z$ ならこの確率は零。従って所定の $G$ を得る。両変数で微分して

$$
\boxed{g(y,z)=\begin{cases}n(n-1)[F(y)-F(z)]^{n-2}f(y)f(z),&y>z,\\0,&y\le z.\end{cases}}
$$

(iii) $w\ge0$ に対し

$$
H(w)=\int_{-\infty}^{\infty}\int_z^{z+w}g(y,z)dy\,dz
=n\int_{-\infty}^{\infty}f(z)[F(z+w)-F(z)]^{n-1}dz.
$$

(iv) $0<w<1$ で $H(w)=n\int_0^{1-w}w^{n-1}dz+n\int_{1-w}^1(1-z)^{n-1}dz$。従って

$$
\boxed{H(w)=\begin{cases}0,&w\le0,\\nw^{n-1}-(n-1)w^n,&0<w<1,\\1,&w\ge1.\end{cases}}
$$

密度は $h(w)=n(n-1)w^{n-2}(1-w)$ であり、$n>2$ より最大となるのは $\boxed{w=(n-2)/(n-1)}$。

### 問題2
(i) 独立な正規変数の差なので $\boxed{X_{n+1}-\overline X\sim N(0,\sigma^2(1+1/n))}$。

(ii) $\operatorname{Cov}(\overline X,X_i-\overline X)=\sigma^2/n-\sigma^2/n=0$。全体は同時正規分布だから、無相関から独立性が従う。

(iii) $E[S/\sigma^2]=n-1$ より $\boxed{\widehat\sigma^2=S/(n-1)}$ は不偏である。

(iv) (ii) と $X_{n+1}$ の独立性より、$(X_{n+1},\overline X)$ は残差ベクトルと独立である。従ってその差は $S$ と独立。標準正規変数と独立なカイ二乗変数の比より

$$
\boxed{\frac{X_{n+1}-\overline X}{\widehat\sigma\sqrt{1+1/n}}\sim t_{n-1}}.
$$

(v) $t_{\nu,p}$ を自由度 $\nu$ の $t$ 分布の下側 $p$ 分位点と定義する。対称性より求める値は

$$
\boxed{k=\sqrt{1+\frac1n}\ t_{n-1,\,1-\alpha/2}}.
$$

