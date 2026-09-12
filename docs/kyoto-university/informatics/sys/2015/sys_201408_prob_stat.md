---
sidebar_label: 2014年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Gamma-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Lognormal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Box-Muller-Transform
---
# 京都大学 情報学研究科 システム科学専攻 2014年8月実施 専門科目 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
確率変数 $X$ の確率密度関数は

$$
f(x)=\begin{cases}\dfrac{x^{-1/2}e^{-x/\alpha}}{\sqrt{\pi\alpha}},&x>0,\\0,&x\le0,\end{cases}\qquad \alpha>0
$$

である。$\int_0^\infty x^{-1/2}e^{-x/\alpha}dx=\sqrt{\pi\alpha}$ を証明なしに用いてよい。

(1) $X$ の期待値を求めよ。

(2) $X$ の分散を求めよ。

(3) この分布からの無作為標本 $S=\{X_1,\ldots,X_n\}$ に基づく $\alpha$ の最尤推定量を求めよ。

(4) (3) の推定量は不偏推定量か。理由も述べよ。

### 問題2
(1) $X$ が標準正規分布に従うとき、$Y=e^X$ の確率密度関数を求めよ。

(2) $X$ は $(0,1)$ 上の一様分布に従う。$Y=f(X)$ の密度が

$$
p(y)=\begin{cases}\lambda e^{-\lambda y},&y>0,\\0,&y\le0\end{cases}\qquad(\lambda>0)
$$

となるような関数 $f$ を定めよ。

(3) $(X,Y)$ の同時密度を

$$
p(x,y)=\begin{cases}1/\pi,&x^2+y^2\le1,\\0,&x^2+y^2>1\end{cases}
$$

とする。次の変数変換による $Z,W$ は互いに独立で、それぞれ標準正規分布に従うことを示せ。

$$
Z=X\sqrt{\frac{-2\log(X^2+Y^2)}{X^2+Y^2}},\qquad
W=Y\sqrt{\frac{-2\log(X^2+Y^2)}{X^2+Y^2}}.
$$

#### 题目描述

**问题1** 随机变量 $X$ 的密度为

$$
f(x)=\begin{cases}x^{-1/2}e^{-x/\alpha}/\sqrt{\pi\alpha},&x>0,\\0,&x\le0,\end{cases}\quad\alpha>0.
$$

可使用 $\int_0^\infty x^{-1/2}e^{-x/\alpha}dx=\sqrt{\pi\alpha}$。(1) 求期望。(2) 求方差。(3) 根据该分布的随机样本 $S=\{X_1,\ldots,X_n\}$ 求 $\alpha$ 的最大似然估计量。(4) 判断其是否无偏并说明理由。

**问题2** (1) 若 $X$ 服从标准正态分布，求 $Y=e^X$ 的密度。(2) 若 $X\sim U(0,1)$，构造 $f$，使 $Y=f(X)$ 在 $y>0$ 时密度为 $\lambda e^{-\lambda y}$、在其余处为零，其中 $\lambda>0$。(3) 若 $(X,Y)$ 在单位圆盘上均匀分布，即圆盘内密度 $1/\pi$、外部为零，证明

$$
Z=X\sqrt{\frac{-2\log(X^2+Y^2)}{X^2+Y^2}},\quad
W=Y\sqrt{\frac{-2\log(X^2+Y^2)}{X^2+Y^2}}
$$

彼此独立且都服从标准正态分布。

## **Kai**

### 問題1
#### (1), (2)
部分積分により

$$
\int_0^\infty x^{1/2}e^{-x/\alpha}dx=\frac\alpha2\sqrt{\pi\alpha},\qquad
\int_0^\infty x^{3/2}e^{-x/\alpha}dx=\frac{3\alpha^2}{4}\sqrt{\pi\alpha}.
$$

従って $\boxed{E[X]=\alpha/2}$、$E[X^2]=3\alpha^2/4$ であり、$\boxed{V[X]=\alpha^2/2}$。

#### (3), (4)
対数尤度の $\alpha$ に依存する部分は

$$
\ell(\alpha)=-\frac n2\log\alpha-\frac1\alpha\sum_{j=1}^nX_j.
$$

$\ell'(\alpha)=0$ より

$$
\boxed{\widehat\alpha_{\rm ML}=\frac2n\sum_{j=1}^nX_j}.
$$

この点の前後で $\ell'$ は正から負へ変わる。また $E[\widehat\alpha_{\rm ML}]=(2/n)n(\alpha/2)=\alpha$ だから不偏である。

### 問題2
#### (1)
$x=\log y$、$dx/dy=1/y$ より

$$
\boxed{f_Y(y)=\begin{cases}\dfrac1{\sqrt{2\pi}\,y}e^{-(\log y)^2/2},&y>0,\\0,&y\le0.\end{cases}}
$$

#### (2)
例えば $\boxed{f(x)=-\lambda^{-1}\log(1-x)}$ とすれば、$y>0$ で

$$
P(Y\le y)=P(X\le1-e^{-\lambda y})=1-e^{-\lambda y}.
$$

これを微分すれば所定の密度になる。

#### (3)
$U=X^2+Y^2$、$\Theta=\arg(X+iY)$ とおく。極座標のヤコビアンより、$U\sim U(0,1)$、$\Theta\sim U(0,2\pi)$ は独立である。$R=\sqrt{-2\log U}$ とすると

$$
f_{R,\Theta}(r,\theta)=\frac r{2\pi}e^{-r^2/2}\qquad(r>0,\ 0\le\theta<2\pi).
$$

$Z=R\cos\Theta,\ W=R\sin\Theta$ のヤコビアンは $r$ なので

$$
f_{Z,W}(z,w)=\frac1{2\pi}e^{-(z^2+w^2)/2}
=\frac{e^{-z^2/2}}{\sqrt{2\pi}}\frac{e^{-w^2/2}}{\sqrt{2\pi}}.
$$

従って $Z,W$ は独立な標準正規変数である。原点および円周上の定義は確率零なので分布に影響しない。

