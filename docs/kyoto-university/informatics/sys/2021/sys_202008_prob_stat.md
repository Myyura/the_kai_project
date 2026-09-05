---
sidebar_label: 2020年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Simultaneous-Confidence-Intervals
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6875d3410000000012017c0d?xsec_token=ABH-3QKy295U0QA4TRmU6eScR1Xpag2dMEXtGdrbeYRJ4=), 祭音Myyura

## **Description**
### 問題1
確率変数 $X_{ij}, \ i = 1, \ldots, m, \ j = 1, \ldots, n$ は独立に正規分布に従い、$X_{ij} \sim N(\mu_i, 1)$ とする。
ただし、$N(\mu, \sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表す。
ここで $n, m$ は正の整数、$\mu_i$ は未知パラメータである。
また、$X \sim N(0, 1)$ の分布関数 $P(X \le x) = \Phi(x)$ で表す。
以下の設問に答えなさい。その導出過程も示すこと。

(1) $X_{i1}, \ldots, X_{in}$ をすべて用いて $\mu_i$ の最尤推定量 $\hat{\mu}_i$ を求めよ。

(2) $\hat{\mu}_i$ が $\mu_i$ の不偏推定量であることを示せ。

(3) 各 $i = 1, \ldots, m$ において、帰無仮説 $H_0: \mu_i = 0$、
対立仮説 $H_1: \mu_i > 0$ の仮説検定を有意水準 $\alpha\ (0 < \alpha < 1)$ で行いたい。
そのために定数 $d_i > 0$ を定めておき、$\hat{\mu}_i > d_i$ のとき帰無仮説を棄却する。定数 $d_i$ を求めよ。

(4) 各 $i = 1, \ldots, m$ において、ある定数 $c_i > 0$ を用いて
$\mu_i$ の信頼区間

$$
S_i = [\hat{\mu}_i - c_i, \hat{\mu}_i + c_i]
$$

を定める。これが $P(\mu_i \in S_i) = 1 - \alpha \ (0 < \alpha < 1)$ を満たすようにしたい。定数 $c_i$ を求めよ。

(5) 上記の $S_i$ が

$$
P(\mu_i \in S_i, \ i = 1, \ldots, m) = 1 - \alpha
$$

を満たすようにしたい。
$c_i = c,\ i = 1, \ldots, m$ として、定数 $c > 0$ を求めよ。

### 問題2
$X_1, X_2, \ldots, X_n$ を互いに独立で、同一の確率密度関数に従う実数値確率変数とし、対応する確率密度関数・確率分布関数をそれぞれ $f_X(x), F_X(x)$ とする。
また、

$$
Y = \max { X_1, X_2, \ldots, X_n }
$$

とする。以下の設問に答えなさい。

(1) $Y$ の確率分布関数 $F_Y(y)$ および確率密度関数 $f_Y(y)$ を $f_X, F_X, n$ を用いて表せ。


以下の設問では、$X_i$ は区間 $[0, \theta], \theta > 0$ 上の一様分布に従うものとする。

(2) $\hat{\theta} = aY$ が $\theta$ の不偏推定量となるように、$a$ を $n$ を用いて表せ。

(3) $\theta$ の最尤推定量 $\hat{\theta}^{ML}$ を求めよ。

(4) $\hat{\theta}$ および $\hat{\theta}^{ML}$ の平均二乗誤差を求め、
どちらの推定量のほうが小さい平均二乗誤差を与えるか答えよ。
ただし、$\hat{\theta}$ は (2) で求めた不偏推定量である。

(5) $\theta$ の信頼区間として

$$
S = [Y, bY], \quad b > 1
$$

の形を考える。$0 < \alpha < 1$ に対して、$P(\theta \in S) = 1 - \alpha$ となるように $b$ を設定せよ。

### 题目描述

1. 随机变量

   $$
   X_{ij},\qquad i=1,\ldots,m,\quad j=1,\ldots,n
   $$

   相互独立且满足 $X_{ij}\sim N(\mu_i,1)$，其中 $N(\mu,\sigma^2)$ 表示均值为 $\mu$、方差为 $\sigma^2$ 的正态分布；$n,m$ 为正整数，$\mu_i$ 为未知参数。标准正态分布函数记为

   $$
   \Phi(x)=P(X\leq x),\qquad X\sim N(0,1).
   $$

   回答下列问题并写出推导过程。

   （1）使用 $X_{i1},\ldots,X_{in}$ 的全部观测，求 $\mu_i$ 的最大似然估计量 $\hat\mu_i$。

   （2）证明 $\hat\mu_i$ 是 $\mu_i$ 的无偏估计量。

   （3）对每个 $i=1,\ldots,m$，希望在显著性水平 $\alpha$（$0<\alpha<1$）下检验

   $$
   H_0:\mu_i=0,\qquad H_1:\mu_i>0.
   $$

   预先取常数 $d_i>0$，当 $\hat\mu_i>d_i$ 时拒绝原假设。求 $d_i$。

   （4）对每个 $i=1,\ldots,m$，用常数 $c_i>0$ 定义 $\mu_i$ 的置信区间

   $$
   S_i=[\hat\mu_i-c_i,\hat\mu_i+c_i].
   $$

   求使 $P(\mu_i\in S_i)=1-\alpha$ 的 $c_i$。

   （5）现要求上述区间同时满足

   $$
   P(\mu_i\in S_i,\ i=1,\ldots,m)=1-\alpha.
   $$

   令所有 $c_i=c$，求常数 $c>0$。

2. 设实值随机变量 $X_1,\ldots,X_n$ 相互独立同分布，其密度函数与分布函数分别为 $f_X(x),F_X(x)$，并令

   $$
   Y=\max\{X_1,X_2,\ldots,X_n\}.
   $$

   （1）用 $f_X,F_X,n$ 表示 $Y$ 的分布函数 $F_Y(y)$ 和密度函数 $f_Y(y)$。

   以下各问进一步假设 $X_i$ 服从区间 $[0,\theta]$ 上的均匀分布，其中 $\theta>0$。

   （2）若 $\hat\theta=aY$，求使其成为 $\theta$ 的无偏估计量时由 $n$ 表示的 $a$。

   （3）求 $\theta$ 的最大似然估计量 $\hat\theta^{ML}$。

   （4）分别求第（2）问无偏估计量 $\hat\theta$ 与 $\hat\theta^{ML}$ 的均方误差，并判断哪一个较小。

   （5）考虑形如

   $$
   S=[Y,bY],\qquad b>1
   $$

   的 $\theta$ 的置信区间。对 $0<\alpha<1$，求使 $P(\theta\in S)=1-\alpha$ 的 $b$。

## **Kai**
### 問題1

(1) 対数尤度は定数を除いて $-\frac12\sum_j(X_{ij}-\mu_i)^2$。微分して $\boxed{\hat\mu_i=\bar X_i=n^{-1}\sum_jX_{ij}}$ を得る。

(2) $E[\bar X_i]=n^{-1}\sum_j\mu_i=\mu_i$ より不偏である。また $\sqrt n(\hat\mu_i-\mu_i)\sim N(0,1)$。

(3) 帰無仮説の下で $P(\hat\mu_i>d_i)=1-\Phi(\sqrt n d_i)$ なので

$$d_i=\frac{\Phi^{-1}(1-\alpha)}{\sqrt n}.$$

$d_i>0$ を満たす解が存在するのは $0<\alpha<1/2$ のときに限る。

(4) $P(\mu_i\in S_i)=2\Phi(\sqrt n c_i)-1$ より

$$c_i=\frac{\Phi^{-1}(1-\alpha/2)}{\sqrt n}.$$

(5) 各標本平均は独立なので、同時被覆確率は $[2\Phi(\sqrt n c)-1]^m$。これを $1-\alpha$ とおけば

$$\boxed{c=\frac1{\sqrt n}\Phi^{-1}\left(\frac{1+(1-\alpha)^{1/m}}2\right)}.$$

### 問題2

(1) 独立性より $F_Y(y)=F_X(y)^n$、微分して $f_Y(y)=nF_X(y)^{n-1}f_X(y)$。

(2) 一様分布の場合、$f_Y(y)=ny^{n-1}/\theta^n$ ($0<y<\theta$)。従って

$$E[Y]=\frac n{n+1}\theta,\qquad a=\frac{n+1}{n}.$$

(3) 尤度は $\theta\geq Y$ で $\theta^{-n}$、それ以外で $0$。従って $\boxed{\hat\theta^{ML}=Y}$。

(4) $E[Y^2]=n\theta^2/(n+2)$ より

$$\operatorname{MSE}(\hat\theta)=\operatorname{Var}\left(\frac{n+1}nY\right)=\frac{\theta^2}{n(n+2)},$$

$$\operatorname{MSE}(\hat\theta^{ML})=E[(Y-\theta)^2]=\frac{2\theta^2}{(n+1)(n+2)}.$$

両者の差（後者から前者を引いた値）は $\theta^2(n-1)/[n(n+1)(n+2)]$。従って $n>1$ では不偏推定量のほうが小さく、$n=1$ では等しい。

(5) $Y\leq\theta$ は確率 $1$ で成り立ち、

$$P(Y\leq\theta\leq bY)=P(Y\geq\theta/b)=1-b^{-n}.$$

従って $\boxed{b=\alpha^{-1/n}}$。
