---
sidebar_label: 2010年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Unbiased-Estimator
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 専門科目 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
$X,Y$ は独立な標準正規変数とする。一辺が $a>0$ の正方形 $[0,a]^2$ と、原点を中心に $(r,0)$ から $(0,r)$ に至る半径 $r$ の四分円を考える。図のように、円内・正方形外を $A,C$、正方形内・円外を $B$ とする。

![等面積の正方形と四分円、差領域 A、B、C](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2011/sys_201008_prob_stat_square_disk.svg)

(i) $A\cup C$ の面積と $B$ の面積が等しいとする。このとき $r$ を $a$ で表せ。

(ii) (i) のもとで、同時密度 $f(x,y)$ に対し $\iint_Bf<\iint_{A\cup C}f$ を示し、これから

$$
P(0<X<a,0<Y<a)<\frac14P(X^2+Y^2<r^2)
$$

を導け。

(iii) (ii) の右辺を計算し、$P(0<X<a)$ の上界を求めよ。

### 問題2
$\theta\ne0$ の互いに独立な不偏推定量 $X_1,\ldots,X_n$ が、正の分散 $\sigma_1^2,\ldots,\sigma_n^2$ をもつ。重み付き和 $\widehat\theta=\sum_i\lambda_iX_i$ を考え、$\sum_i\lambda_i=c$ とする。

(i) $c=1$ なら $\widehat\theta$ が不偏であることを示し、その分散を最小化する重みと最小分散を求めよ。

(ii) (i) を用いて $\sigma_1^2,\ldots,\sigma_n^2$ の算術平均が調和平均以上であることを示せ。

(iii) 一般の $c$ に対し平均二乗誤差 $J(c)=E[(\widehat\theta-\theta)^2]$ を最小化する重みと、その最小値 $J_{\rm opt}(c)$ を求めよ。

(iv) $J_{\rm opt}(c)$ を最小化する $c$ を求め、不偏の場合より平均二乗誤差が小さくなることを示せ。

#### 题目描述

**问题1** $X,Y$ 独立且均为标准正态变量。比较第一象限内的正方形 $[0,a]^2$（$a>0$）和半径 $r$ 的四分之一圆盘。图中圆内且正方形外的两部分记为 $A,C$，正方形内且圆外的部分记为 $B$。(i) 若 $A\cup C$ 与 $B$ 面积相等，求 $r$。(ii) 证明联合密度满足 $\iint_Bf<\iint_{A\cup C}f$，进而证明 $P(0<X<a,0<Y<a)<P(X^2+Y^2<r^2)/4$。(iii) 计算右边，求 $P(0<X<a)$ 的上界。

**问题2** 参数 $\theta\ne0$ 的独立无偏估计量 $X_i$ 有正方差 $\sigma_i^2$。考虑 $\widehat\theta=\sum_i\lambda_iX_i$，约束为 $\sum_i\lambda_i=c$。(i) 当 $c=1$ 时证明无偏，求最小方差权重和方差。(ii) 由此证明这些方差的算术平均不小于调和平均。(iii) 对一般 $c$ 求最小化均方误差的权重和 $J_{\rm opt}(c)$。(iv) 再优化 $c$，证明所得均方误差小于无偏估计的最小均方误差。

## **Kai**

### 問題1
(i) 二つの差領域の面積が等しいことは正方形と四分円の面積が等しいことと同値。従って $a^2=\pi r^2/4$ より $\boxed{r=2a/\sqrt\pi}$。

(ii) $f(x,y)=(2\pi)^{-1}e^{-(x^2+y^2)/2}$ は原点からの距離について厳密に減少する。$B$ では距離が $r$ より大きく、$A\cup C$ では小さい。同面積なので

$$
\iint_Bf<\frac{e^{-r^2/2}}{2\pi}|B|
=\frac{e^{-r^2/2}}{2\pi}|A\cup C|<\iint_{A\cup C}f.
$$

共通領域の積分を加え、円対称性を用いると所定の確率不等式を得る。

(iii) 極座標で $P(X^2+Y^2<r^2)=\int_0^r se^{-s^2/2}ds=1-e^{-r^2/2}$。独立性より左辺は $P(0<X<a)^2$ なので

$$
\boxed{P(0<X<a)<\frac12\sqrt{1-e^{-2a^2/\pi}}}.
$$

### 問題2
$S=\sum_i\sigma_i^{-2}$ とおく。

(i) $E[\widehat\theta]=\theta\sum_i\lambda_i=\theta$。コーシー・シュワルツ不等式から

$$
1=\left(\sum_i(\lambda_i\sigma_i)\sigma_i^{-1}\right)^2
\le\left(\sum_i\lambda_i^2\sigma_i^2\right)S.
$$

等号条件より $\boxed{\lambda_i=\sigma_i^{-2}/S}$、$\boxed{V_{\min}=1/S}$。

(ii) 等重み $\lambda_i=1/n$ の分散は $n^{-2}\sum_i\sigma_i^2\ge1/S$。従って $\boxed{n^{-1}\sum_i\sigma_i^2\ge n/S}$ となり、算術平均は調和平均以上である。

(iii) 偏りは $(c-1)\theta$ であり、分散の最小化は (i) と同様なので

$$
\boxed{\lambda_i=\frac{c\sigma_i^{-2}}S},\qquad
\boxed{J_{\rm opt}(c)=\frac{c^2}S+(c-1)^2\theta^2}.
$$

(iv) $c$ で微分すると $2c/S+2(c-1)\theta^2=0$。従って

$$
\boxed{c_* =\frac{S\theta^2}{1+S\theta^2}},\qquad
\boxed{J_{\rm opt}(c_*)=\frac{\theta^2}{1+S\theta^2}<\frac1S=J_{\rm opt}(1)}.
$$

