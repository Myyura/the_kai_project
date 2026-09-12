---
sidebar_label: 2006年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Linear-Unbiased-Combination
---

# 京都大学 情報学研究科 システム科学専攻 2006年8月実施 確率統計

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$(X_1,X_2)$ の結合密度を $f(x_1,x_2)=8x_1x_2$（$0<x_1<x_2<1$）、その他では $0$ とする。

(i) 各周辺密度を求め、独立かどうか述べよ。

(ii) $Y_1=X_1/X_2,Y_2=X_2$ とするとき、結合密度と各周辺密度を求め、独立かどうか述べよ。

### 問2
自由度 $k$ の $\chi^2$ 変数 $X$ の密度は

$$
f(x)=\frac{x^{k/2-1}e^{-x/2}}{2^{k/2}\Gamma(k/2)}\quad(x>0),\qquad
\Gamma(\alpha)=\int_0^\infty e^{-t}t^{\alpha-1}\,dt,
\quad\Gamma(\alpha+1)=\alpha\Gamma(\alpha).
$$

(i) $E[X]=k,\operatorname{Var}(X)=2k$ を示せ。

(ii) 正規母集団 $N(\mu_x,\sigma^2)$ からの独立標本 $x_1,\ldots,x_n$ に対し、$\bar x=n^{-1}\sum_ix_i,s_x^2=(n-1)^{-1}\sum_i(x_i-\bar x)^2$ と定義する。この定義から $E[s_x^2]=\sigma^2$ を示せ。

(iii) $s_x^2=\sigma^2Z/(n-1)$ とすると $Z\sim\chi^2_{n-1}$。別の独立な正規母集団 $N(\mu_y,\sigma^2)$ から独立標本 $y_1,\ldots,y_m$ をとり、同様に $s_y^2$ を定める。$s_y^2=\sigma^2W/(m-1)$、$W\sim\chi^2_{m-1}$ である。共通の分散の不偏推定量 $s_p^2=\lambda s_x^2+(1-\lambda)s_y^2$ の分散を最小にする $\lambda$ を求めよ。

#### 题目描述

### 问1
$(X_1,X_2)$ 在 $0<x_1<x_2<1$ 上的密度为 $8x_1x_2$，其余为 $0$。

(i) 求边缘密度并判断是否独立。

(ii) 令 $Y_1=X_1/X_2,Y_2=X_2$，求联合密度、各边缘密度并判断是否独立。

### 问2
自由度 $k$ 的卡方变量密度为 $x^{k/2-1}e^{-x/2}/[2^{k/2}\Gamma(k/2)]$（$x>0$），可用 $\Gamma(\alpha)=\int_0^\infty e^{-t}t^{\alpha-1}\,dt$ 及 $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$。

(i) 证明 $E[X]=k$、$\operatorname{Var}(X)=2k$。

(ii) 从 $N(\mu_x,\sigma^2)$ 取 $n$ 个独立样本，定义 $\bar x=n^{-1}\sum_ix_i$、$s_x^2=(n-1)^{-1}\sum_i(x_i-\bar x)^2$。从定义证明 $E[s_x^2]=\sigma^2$。

(iii) 已知 $(n-1)s_x^2/\sigma^2\sim\chi^2_{n-1}$。从另一个独立总体 $N(\mu_y,\sigma^2)$ 取 $m$ 个独立样本，同样定义 $s_y^2$，且 $(m-1)s_y^2/\sigma^2\sim\chi^2_{m-1}$。求使无偏估计 $s_p^2=\lambda s_x^2+(1-\lambda)s_y^2$ 方差最小的 $\lambda$。

## **Kai**

### 問1
(i) $0<x<1$ において

$$
f_{X_1}(x)=\int_x^18xx_2\,dx_2=4x(1-x^2),\qquad
f_{X_2}(x)=\int_0^x8x_1x\,dx_1=4x^3.
$$

その他では両者とも $0$。周辺密度の積は三角形の外でも正になり、結合密度と一致しないので独立ではない。

(ii) 逆変換は $x_1=y_1y_2,x_2=y_2$、ヤコビアンの絶対値は $y_2$。よって

$$
f_{Y_1,Y_2}(y_1,y_2)=8y_1y_2^3\quad(0<y_1,y_2<1).
$$

周辺密度は $f_{Y_1}(y)=2y$、$f_{Y_2}(y)=4y^3$（$0<y<1$、その他は $0$）。結合密度はその積に等しく、独立である。

### 問2
(i) ガンマ積分から $E[X^r]=2^r\Gamma(k/2+r)/\Gamma(k/2)$。$r=1,2$ を代入すると $E[X]=k$、$E[X^2]=k(k+2)$、したがって $\operatorname{Var}(X)=2k$。

(ii) 恒等式

$$
\sum_i(x_i-\bar x)^2=\sum_i(x_i-\mu_x)^2-n(\bar x-\mu_x)^2
$$

の期待値をとると、右辺は $n\sigma^2-n(\sigma^2/n)=(n-1)\sigma^2$。よって $E[s_x^2]=\sigma^2$。

(iii) (i) から $\operatorname{Var}(s_x^2)=2\sigma^4/(n-1)$、$\operatorname{Var}(s_y^2)=2\sigma^4/(m-1)$。標本間の独立性より

$$
\operatorname{Var}(s_p^2)=2\sigma^4\left(\frac{\lambda^2}{n-1}+\frac{(1-\lambda)^2}{m-1}\right).
$$

これは下に凸の二次式であり、微分して $\lambda/(n-1)=(1-\lambda)/(m-1)$。したがって

$$
\boxed{\lambda=\frac{n-1}{n+m-2}}.
$$

