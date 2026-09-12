---
sidebar_label: 2008年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Uniform-Endpoint-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
---

# 京都大学 情報学研究科 システム科学専攻 2008年8月実施 確率統計

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
独立なランダム振幅 $A$ と位相 $\phi$ をもつ $X(t)=A\sin(\omega t+\phi)$ を考える。$t$ は時間、$\omega$ は角周波数であり、$X(t)=Y\sin\omega t+Z\cos\omega t$ によって $Y,Z$ を定義する。

(i) $Y,Z$ を $A,\phi$ で表せ。

(ii) $A$ の確率密度が $p_A(x)=xe^{-x^2/2}$（$x>0$）で、$\phi$ が $(0,2\pi)$ の一様分布に従うとき、$Y,Z$ の同時確率密度および $X(t)$ の確率密度を求めよ。

(iii) $A$ が $(0,1)$ の一様分布、$\phi$ が $(0,2\pi)$ の一様分布に従うとき、$E[X(t)],E[X(t)^2]$ を求めよ。

### 問2
$X_1,\ldots,X_n$ を $(0,\theta)$ の一様分布からの独立標本とし、$Y_n=\max(X_1,\ldots,X_n)$ により未知母数 $\theta$ を推定する。

(i) $\Pr(Y_n\le x)=\Pr(X_1\le x,\ldots,X_n\le x)$ を示せ。

(ii) $Y_n$ の密度が $0<x<\theta$ で $p_{Y_n}(x)=nx^{n-1}/\theta^n$、その他で $0$ となることを示せ。

(iii) $E[Y_n]$ を求め、不偏推定量かどうか述べよ。

(iv) $E[Y_n^2]$ と平均二乗推定誤差 $E[(Y_n-\theta)^2]$ を求めよ。

(v) $c_nY_n$ の平均二乗推定誤差を最小にする定数 $c_n$ を求め、$Y_n$ に比べた改善量を述べよ。

#### 题目描述

### 问1
独立随机振幅 $A$ 和相位 $\phi$ 产生信号 $X(t)=A\sin(\omega t+\phi)=Y\sin\omega t+Z\cos\omega t$。$t$ 是时间，$\omega$ 为角频率。

(i) 用 $A,\phi$ 表示 $Y,Z$。

(ii) 若 $p_A(x)=xe^{-x^2/2}$（$x>0$），$\phi$ 在 $(0,2\pi)$ 上均匀分布，求 $Y,Z$ 的联合密度和 $X(t)$ 的密度。

(iii) 若 $A$ 在 $(0,1)$ 上均匀分布，$\phi$ 在 $(0,2\pi)$ 上均匀分布，求 $E[X(t)]$ 和 $E[X(t)^2]$。

### 问2
$X_1,\ldots,X_n$ 独立服从 $(0,\theta)$ 的均匀分布，以最大值 $Y_n$ 估计未知参数 $\theta$。

(i) 证明 $\Pr(Y_n\le x)=\Pr(X_1\le x,\ldots,X_n\le x)$。

(ii) 证明 $Y_n$ 的密度在 $0<x<\theta$ 上为 $nx^{n-1}/\theta^n$，其他为 $0$。

(iii) 求 $E[Y_n]$，判断是否无偏。

(iv) 求 $E[Y_n^2]$ 和 $E[(Y_n-\theta)^2]$。

(v) 求使 $c_nY_n$ 的均方误差最小的常数 $c_n$，并说明相对 $Y_n$ 的误差改善量。

## **Kai**

### 問1
(i) 加法定理より $Y=A\cos\phi$、$Z=A\sin\phi$。

(ii) 極座標変換のヤコビアンは $|\partial(y,z)/\partial(a,\phi)|=a$。よって

$$
p_{Y,Z}(y,z)=\frac1{2\pi}e^{-(y^2+z^2)/2}.
$$

$Y,Z$ は独立な標準正規変数であり、$\sin^2\omega t+\cos^2\omega t=1$ なので $X(t)\sim N(0,1)$。したがって $p_{X(t)}(x)=(2\pi)^{-1/2}e^{-x^2/2}$。

(iii) 位相について平均すると $E[\sin(\omega t+\phi)]=0$、$E[\sin^2(\omega t+\phi)]=1/2$。$E[A^2]=1/3$ より

$$
\boxed{E[X(t)]=0,\qquad E[X(t)^2]=\frac16}.
$$

### 問2
(i) 最大値が $x$ 以下である事象は、全標本が $x$ 以下である事象に等しい。

(ii) 独立性より $0<x<\theta$ で $\Pr(Y_n\le x)=(x/\theta)^n$。微分すると所望の密度を得る。

(iii)、(iv) 密度から一般に $E[Y_n^k]=n\theta^k/(n+k)$（$k>0$）なので

$$
E[Y_n]=\frac n{n+1}\theta,\quad E[Y_n^2]=\frac n{n+2}\theta^2,
\quad E[(Y_n-\theta)^2]=\frac{2\theta^2}{(n+1)(n+2)}.
$$

特に $Y_n$ は不偏ではない。

(v) $c$ に関する二次式を平方完成すると

$$
E[(cY_n-\theta)^2]
=\frac{n\theta^2}{n+2}\left(c-\frac{n+2}{n+1}\right)^2
+\frac{\theta^2}{(n+1)^2}.
$$

よって $\boxed{c_n=(n+2)/(n+1)}$。誤差の減少量は

$$
\frac{2\theta^2}{(n+1)(n+2)}-\frac{\theta^2}{(n+1)^2}
=\boxed{\frac{n\theta^2}{(n+1)^2(n+2)}}.
$$

