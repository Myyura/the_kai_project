---
sidebar_label: "京都大学 情報学研究科 システム科学専攻 2026年8月実施 確率統計"
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Conditional-Expectation-and-Rao-Blackwell-Theorem
  - Probability-Statistics.Probability-Basics.Linear-Combination-of-Independent-Normals
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Bayesian-Statistics.Bayesian-Inference
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 京都大学 情報学研究科 システム科学専攻 2026年8月実施 確率統計

## **Author**
[AnonTokyo #83056](https://github.com/cdc95-04)

## **Description**
以下の問題において，$E(X)$ は確率変数 (random variable) $X$ の期待値 (expected value)，$V(X)$ は分散 (variance) を表す。$N(\mu,\sigma^2)$ は期待値 $\mu$，分散 $\sigma^2$ の正規分布 (normal distribution) を表す。

### 問題 1

$n$ は 2 以上の整数 (integer) とする。確率変数 $X_1,\ldots,X_n$ は独立で，$X_i\sim N(\mu,1)$，$i=1,\ldots,n$ とする。ただし，$\mu$ は未知パラメータである。また，

$$
\bar X=\frac{1}{n}\sum_{i=1}^n X_i
$$

とする。さらに，

$$
R=X_1-\bar X
$$

とおく。なお，確率変数の組 $(Y,Z)$ が二変量正規分布 (bivariate normal distribution) にしたがうとき，$Y$ と $Z$ が無相関 (uncorrelated) ならば独立 (independent) であることを用いてよい。以下の設問に答えよ。

(1) $E(R)$ および $V(R)$ を求めよ。

(2) $R$ と $\bar X$ が無相関であることを示せ。

(3) $U=X_1^2-1$ とする。$E(U)$ および条件付き期待値 (conditional expectation) $E(U\mid\bar X=x)$ を求めよ。

### 問題 2

$n$ を正の整数とし，既知の定数 $a_1,\ldots,a_n$ は $\sum_{i=1}^n a_i^2=1$ を満たすとする。確率変数 $X$ は $X\sim N(0,\sigma^2)$ であり，$\sigma^2>0$ は未知パラメータとする。$X=x$ が与えられたとき，確率変数 $Y_1,\ldots,Y_n$ は独立 (independent) に正規分布にしたがい，$Y_i\sim N(xa_i,\tau^2)$，$i=1,\ldots,n$ である。ただし $\tau^2>0$ は既知の定数とする。ここで $Z=\sum_{i=1}^n a_iY_i$ とおき，$Y_1=y_1,\ldots,Y_n=y_n$ が観測されたときの $Z$ の値を $z=\sum_{i=1}^n a_iy_i$ とおく。以下の設問に答えよ。

(1) $X=x$ が与えられたときの $Z$ の条件付き確率分布 (conditional probability distribution) を求めよ。

(2) $W=Z-X$ とおく。$X=x$ が与えられたときの $W$ の条件付き確率分布が $x$ によらないことを示せ。この結果により，$W$ と $X$ は独立であることがわかる。このことを用いて $Z$ のしたがう確率分布を求めよ。

(3) $Y_1=y_1,\ldots,Y_n=y_n$ が与えられたときの $X$ の条件付き確率密度関数 (conditional probability density function) を $f(x\mid y_1,\ldots,y_n)$ とする。$f(x\mid y_1,\ldots,y_n)$ を最大 (maximum) にする $x$ の値 $\hat x$ を，$z,\sigma^2,\tau^2$ を用いて表せ。

(4) 設問 (2) で求めた $Z$ の確率分布の確率密度関数 (probability density function) を $h(z;\sigma^2)$ とする。$Z=z$ を観測したとき，$h(z;\sigma^2)$ を最大にする $\sigma^2$ の値 $\hat\sigma^2$ を，$z,\tau^2$ を用いて表せ。ただし $\sigma^2>0$ の範囲で最大値をとらない場合は $\hat\sigma^2=0$ と定める。

(5) 設問 (3) で求めた $\hat x$ の式において，$\sigma^2$ を設問 (4) の $\hat\sigma^2$ で置き換えた値を，$z,\tau^2$ を用いて表せ。

## **Kai**
### 問題 1
#### (1) $R$ の期待値と分散

$E(X_1)=E(\bar X)=\mu$ なので

$$
\boxed{E(R)=0}.
$$

また，$V(X_1)=1$，$V(\bar X)=1/n$，$\operatorname{Cov}(X_1,\bar X)=1/n$ だから

$$
V(R)=V(X_1)+V(\bar X)-2\operatorname{Cov}(X_1,\bar X)
=1+\frac1n-\frac2n
=\boxed{1-\frac1n}.
$$

#### (2) 無相関の証明

$$
\operatorname{Cov}(R,\bar X)
=\operatorname{Cov}(X_1-\bar X,\bar X)
=\frac1n-\frac1n=0.
$$

従って $R$ と $\bar X$ は無相関である。また，両者は独立正規変数の線形結合であるから同時正規分布に従う。問題文の性質より両者は独立でもある。

#### (3) $U$ の期待値・条件付き期待値

$E(X_1^2)=V(X_1)+[E(X_1)]^2=1+\mu^2$ なので

$$
\boxed{E(U)=\mu^2}.
$$

$X_1=\bar X+R$ かつ $R$ と $\bar X$ は独立である。従って

$$
\begin{aligned}
E(U\mid\bar X=x)
&=E[(x+R)^2-1]\\
&=x^2+2xE(R)+E(R^2)-1\\
&=\boxed{x^2-\frac1n}.
\end{aligned}
$$

### 問題 2
#### (1) $Z\mid X=x$ の分布

条件付きの $Y_i$ は独立正規変数なので，$Z$ も正規分布に従う。$\sum_i a_i^2=1$ より

$$
E(Z\mid X=x)=\sum_i a_i(xa_i)=x,
$$

$$
V(Z\mid X=x)=\tau^2\sum_i a_i^2=\tau^2.
$$

ゆえに

$$
\boxed{Z\mid X=x\sim N(x,\tau^2)}.
$$

#### (2) $W$ の独立性と $Z$ の周辺分布

$W=Z-X$ なので，条件付き分布は

$$
W\mid X=x\sim N(0,\tau^2)
$$

であり，$x$ に依存しない。従って $W$ と $X$ は独立で，$W\sim N(0,\tau^2)$ である。$Z=X+W$ は独立な正規変数の和であるから，

$$
\boxed{Z\sim N(0,\sigma^2+\tau^2)}.
$$

#### (3) 条件付き密度の最大点

ベイズの定理より，$x$ に依存しない正の定数を省略して

$$
\begin{aligned}
f(x\mid y_1,\ldots,y_n)
&\propto\exp\!\left[-\frac{x^2}{2\sigma^2}-\frac1{2\tau^2}\sum_i(y_i-a_ix)^2\right]\\
&\propto\exp\!\left[-\frac12\left(\frac1{\sigma^2}+\frac1{\tau^2}\right)x^2+\frac z{\tau^2}x\right].
\end{aligned}
$$

指数部を $x$ で微分すると，極大条件は

$$
-\left(\frac1{\sigma^2}+\frac1{\tau^2}\right)x+\frac z{\tau^2}=0.
$$

よって

$$
\boxed{\hat x=\frac{\sigma^2}{\sigma^2+\tau^2}z}.
$$

#### (4) $\sigma^2$ の最尤推定

(2) より

$$
h(z;\sigma^2)=\frac{1}{\sqrt{2\pi(\sigma^2+\tau^2)}}
\exp\!\left[-\frac{z^2}{2(\sigma^2+\tau^2)}\right].
$$

対数尤度の微分は

$$
\frac{\partial\log h}{\partial\sigma^2}
=\frac{z^2-\sigma^2-\tau^2}{2(\sigma^2+\tau^2)^2}.
$$

$z^2>\tau^2$ なら内部の極大点は $\sigma^2=z^2-\tau^2$ である。$z^2\le\tau^2$ なら $\sigma^2>0$ の内部で最大値を取らず，問題文の定義により 0 とする。従って

$$
\boxed{\hat\sigma^2=\max\{z^2-\tau^2,0\}}.
$$

#### (5) 代入推定値

(3) の式に (4) の値を代入すると

$$
\boxed{
\hat x_{\mathrm{plug\text{-}in}}=
\begin{cases}
z-\dfrac{\tau^2}{z},&|z|>\tau,\\[5pt]
0,&|z|\le\tau.
\end{cases}}
$$

となる。$z=0$ も下段に含まれるため，零除算は生じない。
