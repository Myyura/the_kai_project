---
sidebar_label: 2013年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
---
# 京都大学 情報学研究科 システム科学専攻 2013年8月実施 専門科目 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
既知の母平均 $\mu_0$ と未知の母分散 $v>0$ をもつ正規母集団 $N(\mu_0,v)$ から無作為標本 $X_1,\ldots,X_n$ を得る。母集団の密度は

$$
f_G(x;v)=\frac1{\sqrt{2\pi v}}\exp\left(-\frac{(x-\mu_0)^2}{2v}\right).
$$

(1) モーメント母関数 $M_X(t)=E[e^{tX}]$ を求めよ。

(2) (1) を用いて、母平均周りの $3$ 次と $4$ 次のモーメントを求めよ。$k$ 次モーメントは $E[(X-\mu_0)^k]$ をいう。

(3) $v$ の最尤推定量 $\widehat v$ を求めよ。

(4) $E[\widehat v]$ と $V[\widehat v]$ を求めよ。

(5) $\widehat v$ が不偏推定量であることを示せ。

### 問題2
(1) $X,Y,Z$ は互いに独立で、それぞれ $(0,1)$ 上の一様分布に従う。$XY$ と $Z^2$ の同時密度、および $P(XY<Z^2)$ を求めよ。

(2) $(X,Y)$ の同時密度は

$$
f(x,y)=\frac1{2\pi\sqrt{1-\rho^2}}\exp\left[-\frac{x^2-2\rho xy+y^2}{2(1-\rho^2)}\right],\qquad0\le\rho<1
$$

である。$X$ と $Z=(Y-\rho X)/\sqrt{1-\rho^2}$ は互いに独立で、それぞれ $N(0,1)$ に従うことを示せ。

(3) (2) の結果を用いて、(2) の分布における $P(X>0,Y>0)$ を $\rho$ で表せ。

#### 题目描述

**问题1** 从均值 $\mu_0$ 已知、方差 $v>0$ 未知的正态总体 $N(\mu_0,v)$ 抽取随机样本 $X_1,\ldots,X_n$；其密度为 $(2\pi v)^{-1/2}\exp[-(x-\mu_0)^2/(2v)]$。(1) 求矩母函数 $M_X(t)=E[e^{tX}]$。(2) 利用 (1) 求三阶、四阶中心矩 $E[(X-\mu_0)^3]$、$E[(X-\mu_0)^4]$。(3) 求 $v$ 的最大似然估计量 $\widehat v$。(4) 求其期望和方差。(5) 证明其无偏。

**问题2** (1) $X,Y,Z$ 独立且均服从 $U(0,1)$，求 $XY$ 与 $Z^2$ 的联合密度及 $P(XY<Z^2)$。(2) 若 $(X,Y)$ 的密度为

$$
f(x,y)=\frac{\exp[-(x^2-2\rho xy+y^2)/(2(1-\rho^2))]}{2\pi\sqrt{1-\rho^2}},\quad0\le\rho<1,
$$

证明 $X$ 与 $Z=(Y-\rho X)/\sqrt{1-\rho^2}$ 独立且均为标准正态变量。(3) 利用 (2) 将 $P(X>0,Y>0)$ 表为 $\rho$ 的函数。

## **Kai**

### 問題1
(1) 指数を平方完成して積分すると $\boxed{M_X(t)=\exp(\mu_0t+vt^2/2)}$。

(2) $M_{X-\mu_0}(t)=e^{vt^2/2}=1+vt^2/2+v^2t^4/8+\cdots$ より、$\boxed{E[(X-\mu_0)^3]=0}$、$\boxed{E[(X-\mu_0)^4]=3v^2}$。

(3) 対数尤度を微分して

$$
\ell'(v)=-\frac n{2v}+\frac1{2v^2}\sum_i(X_i-\mu_0)^2=0,
\qquad\boxed{\widehat v=\frac1n\sum_i(X_i-\mu_0)^2}.
$$

(4), (5) 独立性と (2) より

$$
\boxed{E[\widehat v]=v},\qquad
\boxed{V[\widehat v]=\frac1{n^2}\sum_i(3v^2-v^2)=\frac{2v^2}n}.
$$

従って不偏である。

### 問題2
#### (1)
$U=XY,V=Z^2$ とおく。$0<u,v<1$ で

$$
f_U(u)=\int_u^1\frac{dx}{x}=-\log u,\qquad f_V(v)=\frac1{2\sqrt v}.
$$

独立性から、同時密度は $\boxed{f_{U,V}(u,v)=-\log u/(2\sqrt v)}$（単位正方形内）、それ以外は零である。従って

$$
P(U<V)=\int_0^1\frac1{2\sqrt v}\int_0^v(-\log u)du\,dv
=\frac12\int_0^1v^{1/2}(1-\log v)dv
=\boxed{\frac59}.
$$

#### (2)
$y=\rho x+\sqrt{1-\rho^2}z$ のヤコビアンは $\sqrt{1-\rho^2}$。変換後は

$$
f_{X,Z}(x,z)=\frac1{2\pi}e^{-(x^2+z^2)/2}
=\frac{e^{-x^2/2}}{\sqrt{2\pi}}\frac{e^{-z^2/2}}{\sqrt{2\pi}}.
$$

従って独立な標準正規変数である。

#### (3)
$X>0,Y>0$ は $x>0,\ z>-\rho x/\sqrt{1-\rho^2}$ に対応する。$(X,Z)$ の分布は回転対称であり、領域の角度は $\pi/2+\arcsin\rho$。従って

$$
\boxed{P(X>0,Y>0)=\frac14+\frac{\arcsin\rho}{2\pi}}.
$$

