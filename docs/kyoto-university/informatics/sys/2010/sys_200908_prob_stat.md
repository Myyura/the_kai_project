---
sidebar_label: 2009年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
---

# 京都大学 情報学研究科 システム科学専攻 2009年8月実施 確率統計

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$(X_1,X_2)$ の結合確率密度が $x_1>0,x_2>0$ で $f(x_1,x_2)=\frac14e^{-(x_1+x_2)/2}$、その他で $0$ である。$Y=(X_1-X_2)/2$ の確率密度を求めよ。

### 問2
$X_1,\ldots,X_n$ は独立に、母数 $\theta>0$ の指数分布 $f(x)=\theta^{-1}e^{-x/\theta}$（$x>0$、その他は $0$）に従う。

(i) $\widehat\theta=n^{-1}\sum_{i=1}^nX_i$ が不偏、すなわち $E[\widehat\theta]=\theta$ であることを示せ。

(ii) $E[e^{tX_i}]$ を求め、$Y=(2/\theta)\sum_{i=1}^nX_i$ のモーメント母関数を求めよ。$t$ は期待値の存在する範囲とする。

(iii) 自由度 $k$ の $\chi^2$ 分布に従う $Z$ は $Z=\sum_{i=1}^kW_i^2$ と表される。$W_i$ は互いに独立な平均 $0$、分散 $1$ の正規変数である。$E[e^{tW_i^2}]$ および $E[e^{tZ}]$ を求めよ。

(iv) $Y$ が $\chi^2$ 分布に従うことを示し、自由度を求めよ。

(v) $\Pr(Z>\chi^2_{\alpha,k})=\alpha$ と定義する。このとき

$$
\Pr\bigl(\chi^2_{1-\alpha/2,k}<Z<\chi^2_{\alpha/2,k}\bigr)=1-\alpha.
$$

これを用い、$\widehat\theta$ に基づく $\theta$ の信頼係数 $1-\alpha$ の信頼区間を示せ。

#### 题目描述

### 问1
$(X_1,X_2)$ 的联合密度在 $x_1,x_2>0$ 时为 $\frac14e^{-(x_1+x_2)/2}$，其余为 $0$。求 $Y=(X_1-X_2)/2$ 的密度。

### 问2
$X_1,\ldots,X_n$ 独立服从尺度参数 $\theta>0$ 的指数分布，密度为 $\theta^{-1}e^{-x/\theta}$（$x>0$，其他为 $0$）。

(i) 证明 $\widehat\theta=n^{-1}\sum_iX_i$ 无偏。

(ii) 求 $X_i$ 和 $Y=(2/\theta)\sum_iX_i$ 的矩母函数，$t$ 限于相应期望存在的范围。

(iii) 若 $Z=\sum_{i=1}^kW_i^2$，其中 $W_i$ 独立服从标准正态分布，求 $W_i^2$ 和 $Z$ 的矩母函数。

(iv) 证明 $Y$ 服从卡方分布并求自由度。

(v) 定义上尾分位数 $\Pr(Z>\chi^2_{\alpha,k})=\alpha$。利用 $\Pr(\chi^2_{1-\alpha/2,k}<Z<\chi^2_{\alpha/2,k})=1-\alpha$，给出基于 $\widehat\theta$ 的 $\theta$ 的 $1-\alpha$ 置信区间。

## **Kai**

### 問1
$Z=X_1$ とおけば $X_1=Z,X_2=Z-2Y$、ヤコビアンの絶対値は $2$。したがって

$$
f_Y(y)=\int_{\max(0,2y)}^\infty\frac12e^{y-z}\,dz
=\boxed{\frac12e^{-|y|}}\qquad(y\in\mathbb R).
$$

### 問2
(i) $E[X_i]=\int_0^\infty(x/\theta)e^{-x/\theta}\,dx=\theta$ より、$E[\widehat\theta]=\theta$。

(ii) 直接積分と独立性から

$$
M_{X_i}(t)=\frac1{1-\theta t}\quad(t<1/\theta),\qquad
M_Y(t)=\prod_{i=1}^nM_{X_i}(2t/\theta)=(1-2t)^{-n}\quad(t<1/2).
$$

(iii) ガウス積分より

$$
E[e^{tW_i^2}]=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty e^{-(1-2t)w^2/2}\,dw=(1-2t)^{-1/2}.
$$

よって $M_Z(t)=(1-2t)^{-k/2}$（$t<1/2$）。

(iv) モーメント母関数の一致より $Y\sim\chi^2_{2n}$。

(v) $Y=2n\widehat\theta/\theta$ を分位点の間にはさみ、正数の逆数をとると

$$
\boxed{\left(\frac{2n\widehat\theta}{\chi^2_{\alpha/2,2n}},\ \frac{2n\widehat\theta}{\chi^2_{1-\alpha/2,2n}}\right)}.
$$

