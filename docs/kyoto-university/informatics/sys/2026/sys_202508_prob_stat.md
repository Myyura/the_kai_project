---
sidebar_label: 2025年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Bayesian-Statistics.Poisson-Gamma-Conjugacy
---
# 京都大学 情報学研究科 システム科学専攻 2025年8月実施 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$P(A)$ は事象 $A$ の確率、$E[X]$ は確率変数 $X$ の期待値を表す。解答では導出過程も示せ。

### 問題1
正の実数値を取る確率変数 $X$ の累積分布関数は

$$
F_X(x)=\exp\!\left[-\left(\frac xs\right)^{-\alpha}\right],\quad x>0,\quad\alpha>0,\ s>0
$$

である。

(1) $Y=1/X$ の累積分布関数 $F_Y(y)$ を $\alpha,s$ を用いて表せ。

(2) $X_1,\ldots,X_n$ が独立に $F_X$ に従うとき、$Z=\max\{X_1,\ldots,X_n\}$ の累積分布関数を $n,\alpha,s$ で表せ。

(3) $\alpha$ を既知とする。$Z$ を用いて $s$ の信頼区間 $S(Z)=(0,T(Z)]$ を構成する。$0<\beta<1$ に対し $P(s\in S(Z))=1-\beta$ となる関数 $T(z)$ を $z,n,\alpha,\beta$ で表せ。

### 問題2
$X$ は Gamma 分布に従い、密度は

$$
g(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x},\quad x>0,\quad\alpha,\beta>0.
$$

ここで $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt$ ($z>0$)、$\Gamma(z+1)=z\Gamma(z)$ である。$X=x$ の条件下で $Y_1,\ldots,Y_{n+1}$ は独立に Poisson$(x)$ に従い、

$$
P(Y_i=y\mid X=x)=\frac{e^{-x}x^y}{y!},\qquad y=0,1,\ldots
$$

とする。$\alpha,\beta$ は既知、$y_1,\ldots,y_n$ は観測された非負整数であり、$X$ の条件付き密度を $f(x\mid y_1,\ldots,y_n)$ と書く。

(1) この密度を $g(x;\widehat\alpha,\widehat\beta)$ と表し、$\widehat\alpha,\widehat\beta$ を求めよ。以後はこれらの記号を用いてよい。

(2) 条件付き密度を最大にする $x$ を求めよ。

(3) $E[X\mid y_1,\ldots,y_n]$ を求めよ。

(4) $E[Y_{n+1}\mid y_1,\ldots,y_n]$ を求めよ。

(5) $P(Y_{n+1}=y\mid y_1,\ldots,y_n)$ を求めよ。

#### 题目描述

$P(A)$ 表示事件概率，$E[X]$ 表示期望；解答须写推导过程。

问题 1：正值随机变量 $X$ 的累积分布函数为

$$
F_X(x)=\exp[-(x/s)^{-\alpha}],\quad x>0,\quad\alpha,s>0.
$$

（1）用 $\alpha,s$ 表示 $Y=1/X$ 的分布函数。

（2）$X_1,\ldots,X_n$ 独立同分布于 $F_X$，求最大值 $Z$ 的分布函数。

（3）已知 $\alpha$，用 $Z$ 构造 $s$ 的置信区间 $S(Z)=(0,T(Z)]$。给定 $0<\beta<1$，用 $z,n,\alpha,\beta$ 表示使 $P(s\in S(Z))=1-\beta$ 成立的 $T(z)$。

问题 2：$X$ 服从 Gamma 分布，其密度为

$$
g(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x},\quad x>0,\quad\alpha,\beta>0.
$$

其中 $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt$（$z>0$），满足 $\Gamma(z+1)=z\Gamma(z)$。给定 $X=x$，$Y_1,\ldots,Y_{n+1}$ 条件独立且服从 Poisson$(x)$：

$$
P(Y_i=y\mid X=x)=e^{-x}x^y/y!,\quad y=0,1,\ldots.
$$

已知参数 $\alpha,\beta$，观测值 $y_1,\ldots,y_n$ 为非负整数，将 $X$ 的后验密度记为 $f(x\mid y_1,\ldots,y_n)$。

（1）证明该密度可写为 $g(x;\widehat\alpha,\widehat\beta)$ 并求出两个新参数；以下可用此记号。

（2）求使后验密度最大的 $x$。

（3）求 $X$ 的后验期望。

（4）求 $Y_{n+1}$ 的后验预测期望。

（5）求后验预测概率 $P(Y_{n+1}=y\mid y_1,\ldots,y_n)$。

## **Kai**

### 問題1
(1) $y>0$ では $P(Y\le y)=P(X\ge1/y)=1-F_X(1/y)$。従って

$$
\boxed{F_Y(y)=\begin{cases}0,&y\le0,\\1-e^{-(sy)^\alpha},&y>0.\end{cases}}
$$

(2) 独立性より

$$
\boxed{F_Z(z)=\begin{cases}0,&z\le0,\\e^{-n(z/s)^{-\alpha}},&z>0.\end{cases}}
$$

(3) $U=Z/s$ は $P(U\le u)=e^{-nu^{-\alpha}}$ に従う。$q=(n/(-\log\beta))^{1/\alpha}$ とすれば $P(U\ge q)=1-\beta$ だから

$$
\boxed{T(z)=z\left(\frac{-\log\beta}{n}\right)^{1/\alpha}}.
$$

### 問題2
(1) Bayes の公式より

$$
f(x\mid\mathbf y)\propto x^{\alpha-1}e^{-\beta x}\prod_{i=1}^ne^{-x}x^{y_i}
=x^{\alpha+\sum_i y_i-1}e^{-(\beta+n)x}.
$$

Gamma 密度として正規化して

$$
\boxed{\widehat\alpha=\alpha+\sum_i y_i,\qquad\widehat\beta=\beta+n}.
$$

(2) 対数密度の微分は $(\widehat\alpha-1)/x-\widehat\beta$。従って $\widehat\alpha>1$ のとき

$$
\boxed{x_{\max}=(\widehat\alpha-1)/\widehat\beta}.
$$

$0<\widehat\alpha\le1$ では密度は $x>0$ 上で狭義単調減少し、最大点は存在しない。$x\downarrow0$ で上限に近づく（$\widehat\alpha<1$ なら発散）。

(3) Gamma 関数の漸化式により

$$
E[X\mid\mathbf y]=\frac{\Gamma(\widehat\alpha+1)}{\widehat\beta\Gamma(\widehat\alpha)}=\boxed{\frac{\widehat\alpha}{\widehat\beta}}.
$$

(4) $E[Y_{n+1}\mid X]=X$ と条件付き期待値の反復則より $\boxed{E[Y_{n+1}\mid\mathbf y]=\widehat\alpha/\widehat\beta}$。

(5) $X$ を積分消去して

$$
\begin{aligned}
P(Y_{n+1}=y\mid\mathbf y)
&=\frac{\widehat\beta^{\widehat\alpha}}{y!\Gamma(\widehat\alpha)}\int_0^\infty x^{y+\widehat\alpha-1}e^{-(\widehat\beta+1)x}\,dx\\
&=\boxed{\frac{\Gamma(y+\widehat\alpha)}{y!\Gamma(\widehat\alpha)}
\left(\frac{\widehat\beta}{\widehat\beta+1}\right)^{\widehat\alpha}
\left(\frac1{\widehat\beta+1}\right)^y},\quad y=0,1,\ldots.
\end{aligned}
$$

