---
sidebar_label: 2022年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Box-Muller-Transform
  - Data-Science-Artificial-Intelligence.Machine-Learning.Gaussian-Mixture-Model
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/68844c9f000000001d00cc46?xsec_token=ABJ6e6OUxI1XWfgsOiU5PPpD1dju1zjonhKby9ek9Hnc4=), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2022_sys.pdf)
以下の問題において，$\log x$ は $x$ の自然対数を表し，$P(A)$ は事象 $A$ の確率を表す。
また，$N(\mu,\sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表し，$X \sim N(0,1)$ の累積分布関数 $P(X \le x)$ を $\Phi(x)$ で表す。
正規分布に関する次の性質を解答に用いてよい。
確率変数 $Z_1,\dots,Z_n$ が独立に正規分布 $Z_i \sim N(\mu_i,\sigma_i^2), i=1,\dots,n$ にしたがうとき，$Z_1 + \dots + Z_n$ は正規分布にしたがう。また，定数 $a,b$ に対して，$a Z_1 + b$ は正規分布にしたがう。

### 問題1
確率変数 $X_1, \dots, X_m, Y_1, \dots, Y_n$ は独立に正規分布にしたがい，
$X_i \sim N(\mu,1),\ i = 1,\dots,m$,
$Y_j \sim N(\eta,1),\ j = 1,\dots,n$ とする。
実数 $\mu,\eta$ は未知のパラメータである。
$X_1, \dots, X_m$ の標本平均を $\overline{X}$,
$Y_1, \dots, Y_n$ の標本平均を $\overline{Y}$ とおく。
このとき、以下の設問に答えよ。ただし、$\Phi(x)$ および $p = \Phi(x)$ の逆関数を $x = \Phi^{-1}(p)$ とする。

(1) $\overline{X}$ のしたがう確率分布を求めよ。

(2) 帰無仮説 $H_0: \mu = 0$、対立仮説 $H_1: \mu = \mu_1, \mu_1 > 0$ の仮説検定を有意水準 $\alpha$ ($0<\alpha<1$) で行いたい。そのために定数 $c$ を定めておき、$\overline{X} > c$ のとき $H_0$ を棄却する。定数 $c$ を $m, \alpha$ を用いて表せ。

(3) 設問 (2) における検出力 $\beta$ を求め、$\mu_1, m, \alpha$ を用いて表せ。ここで検出力とは、対立仮説のもとで帰無仮説を棄却する確率である。

(4) 帰無仮説 $H_0: \mu = \eta = 0$、対立仮説 $H_1: \mu = \mu_1, \eta = \eta_1, \mu_1 > 0, \eta_1 > 0$ の仮説検定を有意水準 $\alpha$ ($0<\alpha<1$) で行いたい。定数 $d$ を定めておき、検定統計量 $T = (\sqrt{m}\cos\theta)\overline{X} + (\sqrt{n}\sin\theta) \overline{Y}$ が $T > d$ のとき $H_0$ を棄却する。ただし、$\theta \in [0,\pi/2]$ は事前に定めておく定数とする。定数 $d$ を求めよ。

(5) 設問 (4) における検出力 $\beta$ を求め、$\mu_1, \eta_1, m, n, \alpha, \theta$ を用いて表せ。また、$\beta$ を最大にするように $\theta$ を定めたい。$\beta$ の最大値と、そのときの $\cos\theta$ を求めよ。

### 問題2
以下の設問に答えよ。

(1) 任意の確率変数 $X, Y$ に対する累積分布関数 $F_{X,Y}(x,y) = P(X \le x, Y \le y)$ は、$x_1 < x_2, y_1 < y_2$ を満たす任意の $x_1, x_2, y_1, y_2$ に対して

$$
F_{X,Y}(x_2,y_2) + F_{X,Y}(x_1,y_1) - F_{X,Y}(x_1,y_2) - F_{X,Y}(x_2,y_1) \geq 0
$$

を満たす。その理由を述べよ。

(2) $X_1$ と $X_2$ を $(0,1)$ 上の一様分布にしたがう独立な確率変数とする。

$$
Y_1 = \sqrt{-2 \log X_1} \cos(2\pi X_2), \quad Y_2 = \sqrt{-2 \log X_1} \sin (2\pi X_2)
$$

によって定義される確率変数 $Y_1, Y_2$ の確率密度関数 $f_{Y_1,Y_2}(y_1,y_2)$ を求めよ。

(3) $Y$ は $0,1$ を値にとる確率変数で、$P(Y=0) = P(Y=1) = 1/2$ とする。
また、$X$ を $Y=1$ のとき $N(0,1)$、$Y=0$ のとき $N(\mu,1)$ にしたがう確率変数とする。
$f_{X|Y}(x|y)$ を $Y=y$ で条件付けられた $X$ の条件付き確率密度関数、
$f_X(x)$ を $X$ の確率密度関数とする。

(3-1) $f_{X|Y}(x|y)$ および $f_X(x)$ を求めよ。

(3-2) $Y$ は観測できず、$f_X$ からの独立な確率変数 $X_1,\dots,X_n$ のみが観測されるとする。
このとき、$\mu$ の最尤推定量 $\hat{\mu}$ の満たすべき方程式（$\mu$ の陰関数表示）を次の形

$$
\hat{\mu} = \sum_{i=1}^n X_i p_i(\hat{\mu}, \mathbf{X})
$$

で表現したときの $p_i(\hat{\mu},X)$ を求めよ。
ただし $\mathbf{X} = (X_1,\dots,X_n)$ であり、また $\sum_{i=1}^n p_i(\hat{\mu},X) = 1$, $p_i(\hat{\mu},X) \ge 0$ を満たすものとする。

(3-3) $n=1$ のとき、設問 (3-2) の $\hat{\mu}$ を求めよ。また、この $\hat{\mu}$ が $\mu$ の不偏推定量であるか否かを理由を付して答えよ。ただし $\mu \ne 0$ とする。

### 题目描述

以下 $\log x$ 表示自然对数，$P(A)$ 表示事件 $A$ 的概率，$N(\mu,\sigma^2)$ 表示均值为 $\mu$、方差为 $\sigma^2$ 的正态分布。标准正态分布函数记为

$$
\Phi(x)=P(X\leq x),\qquad X\sim N(0,1).
$$

可以使用如下性质：若 $Z_1,\ldots,Z_n$ 相互独立且 $Z_i\sim N(\mu_i,\sigma_i^2)$，则 $Z_1+\cdots+Z_n$ 服从正态分布；对常数 $a,b$，$aZ_1+b$ 也服从正态分布。

1. 随机变量 $X_1,\ldots,X_m,Y_1,\ldots,Y_n$ 相互独立，并满足

   $$
   X_i\sim N(\mu,1)\quad(i=1,\ldots,m),\qquad
   Y_j\sim N(\eta,1)\quad(j=1,\ldots,n),
   $$

   其中 $\mu,\eta$ 为未知实参数。两组样本均值分别记为 $\bar X,\bar Y$；$\Phi^{-1}(p)$ 表示 $\Phi(x)=p$ 的反函数。

   （1）求 $\bar X$ 的概率分布。

   （2）希望在显著性水平 $\alpha$（$0<\alpha<1$）下检验

   $$
   H_0:\mu=0,\qquad
   H_1:\mu=\mu_1,\quad\mu_1>0.
   $$

   预先取常数 $c$，当 $\bar X>c$ 时拒绝 $H_0$。用 $m,\alpha$ 表示 $c$。

   （3）求第（2）问检验的功效 $\beta$，并用 $\mu_1,m,\alpha$ 表示。这里功效是备择假设成立时拒绝原假设的概率。

   （4）希望在显著性水平 $\alpha$ 下检验

   $$
   H_0:\mu=\eta=0,\qquad
   H_1:\mu=\mu_1,\ \eta=\eta_1,\quad
   \mu_1>0,\ \eta_1>0.
   $$

   对预先选定的 $\theta\in[0,\pi/2]$，定义

   $$
   T=(\sqrt m\cos\theta)\bar X
     +(\sqrt n\sin\theta)\bar Y.
   $$

   预先取常数 $d$，当 $T>d$ 时拒绝 $H_0$。求 $d$。

   （5）求第（4）问检验的功效 $\beta$，并用 $\mu_1,\eta_1,m,n,\alpha,\theta$ 表示。再选择使 $\beta$ 最大的 $\theta$，求 $\beta$ 的最大值以及此时的 $\cos\theta$。

2. 回答下列问题。

   （1）任意随机变量 $X,Y$ 的联合分布函数

   $$
   F_{X,Y}(x,y)=P(X\leq x,Y\leq y)
   $$

   对任意 $x_1<x_2$、$y_1<y_2$ 都满足

   $$
   F_{X,Y}(x_2,y_2)+F_{X,Y}(x_1,y_1)
   -F_{X,Y}(x_1,y_2)-F_{X,Y}(x_2,y_1)\geq0.
   $$

   说明原因。

   （2）设 $X_1,X_2$ 相互独立且均服从区间 $(0,1)$ 上的均匀分布。定义

   $$
   Y_1=\sqrt{-2\log X_1}\cos(2\pi X_2),\qquad
   Y_2=\sqrt{-2\log X_1}\sin(2\pi X_2).
   $$

   求联合密度 $f_{Y_1,Y_2}(y_1,y_2)$。

   （3）随机变量 $Y$ 只取 0、1，且

   $$
   P(Y=0)=P(Y=1)=\frac12.
   $$

   给定 $Y=1$ 时 $X\sim N(0,1)$，给定 $Y=0$ 时 $X\sim N(\mu,1)$。记 $f_{X\mid Y}(x\mid y)$ 为给定 $Y=y$ 时 $X$ 的条件密度，$f_X(x)$ 为 $X$ 的边缘密度。

   1. 求 $f_{X\mid Y}(x\mid y)$ 与 $f_X(x)$。
   2. 假设 $Y$ 不可观测，只观测到来自 $f_X$ 的独立样本 $X_1,\ldots,X_n$。把 $\mu$ 的最大似然估计量所满足的隐式方程写成

      $$
      \hat\mu
      =\sum_{i=1}^nX_i\,p_i(\hat\mu,\mathbf X),
      $$

      其中 $\mathbf X=(X_1,\ldots,X_n)$，且

      $$
      \sum_{i=1}^np_i(\hat\mu,\mathbf X)=1,\qquad
      p_i(\hat\mu,\mathbf X)\geq0.
      $$

      求 $p_i(\hat\mu,\mathbf X)$。
   3. 当 $n=1$ 且 $\mu\ne0$ 时，求第 2 小问中的 $\hat\mu$；说明该估计量是否为 $\mu$ 的无偏估计量，并给出理由。

## **Kai**
### 問題1
#### (1)

$$
\overline{X} \sim N(\mu, \frac{1}{m})
$$

#### (2)
$P(\overline{X} > c \mid H_0) = \alpha$, $S \sim N(0,1)$ とおくと、

$$
P(\overline{X} > c \mid H_0) = P(\frac{1}{\sqrt{m}}S > c) = P(S > \sqrt{m}c) = 1 - \Phi(\sqrt{m}c) = \alpha
$$

$$
\Rightarrow \sqrt{m}c = \Phi^{-1}(1-\alpha) \Rightarrow c = \frac{1}{\sqrt{m}} \Phi^{-1}(1-\alpha)
$$

#### (3)

$$
\begin{aligned}
    \beta &= P(\overline{X} > c \mid H_1) = P(\mu_1 + \frac{1}{\sqrt{m}}S > c) \\
    &= P(S > \Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m}) \\
    &= 1 - \Phi(\Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m})
\end{aligned}
$$

#### (4)
$\overline{Y} \sim N(\eta, \frac{1}{n})$、再生性より、

$$
T \sim N(\mu \sqrt{m} \cos \theta + \eta \sqrt{n} \sin \theta, \cos^2 \theta + \sin^2 \theta) = N(\mu \sqrt{m} \cos \theta + \eta \sqrt{n} \sin \theta, 1)
$$

$\mu = \eta = 0$ のとき、

$$
T \sim N(0, 1)
$$

よって、

$$
P(T > d \mid H_0) = P(S > d) = 1 - \Phi(d) = \alpha \Rightarrow d = \Phi^{-1}(1-\alpha)
$$

#### (5)

$$
\begin{aligned}
    \beta &= P(T > d \mid H_1) = P(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta + S > \Phi^{-1}(1-\alpha)) \\
    &= P(S > \Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m} \cos \theta - \eta_1 \sqrt{n} \sin \theta) \\
    &= \Phi(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta - \Phi^{-1}(1-\alpha))
\end{aligned}
$$

$$
\frac{\partial \beta}{\partial \theta} = \phi(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta - \Phi^{-1}(1-\alpha))(-\mu_1 \sqrt{m} \sin \theta + \eta_1 \sqrt{n} \cos \theta)
$$

$$
\frac{\partial \beta}{\partial \theta} = 0 \Rightarrow \tan \theta = \frac{\eta_1 \sqrt{n}}{\mu_1 \sqrt{m}}
$$

$\theta \in [0, \frac{\pi}{2}]$ より、

$$
\sin \theta = \frac{\eta_1 \sqrt{n}}{\sqrt{n \eta_1^2 + m \mu_1^2}}, \cos \theta = \frac{\mu_1 \sqrt{m}}{\sqrt{n \eta_1^2 + m \mu_1^2}}
$$

$$
\beta_{\max} = \Phi(\sqrt{n \eta_1^2 + m \mu_1^2} - \Phi^{-1} (1-\alpha))
$$


### 問題2
#### (1)

左辺は包除原理によって $P(x_1<X\le x_2,\ y_1<Y\le y_2)$ に等しく、非負である。

#### (2)

極座標 $R=\sqrt{-2\log X_1}$、$\Theta=2\pi X_2$ を用いる。$R,\Theta$ は独立であり、

$$
f_R(r)=r e^{-r^2/2}\quad(r>0),\qquad
f_\Theta(\theta)=\frac1{2\pi}\quad(0<\theta<2\pi).
$$

変換 $(r,\theta)\mapsto(y_1,y_2)=(r\cos\theta,r\sin\theta)$ のヤコビアンの絶対値は $r$ である。従って、平面上のほとんどすべての点で

$$
\boxed{f_{Y_1,Y_2}(y_1,y_2)
=\frac1{2\pi}e^{-(y_1^2+y_2^2)/2}}.
$$

#### (3-1)

$\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ とおくと、

$$
f_{X\mid Y}(x\mid y)=\phi(x-(1-y)\mu),\qquad
f_X(x)=\frac{\phi(x)+\phi(x-\mu)}2.
$$

#### (3-2)

対数尤度と、各観測値が平均 $\mu$ の成分から生じた条件付き確率を

$$
\ell(\mu)=\sum_{i=1}^n\log\frac{\phi(X_i)+\phi(X_i-\mu)}2,
\qquad
r_i(\mu)=\frac{\phi(X_i-\mu)}{\phi(X_i)+\phi(X_i-\mu)}
$$

とおく。微分すると

$$
\ell'(\mu)=\sum_{i=1}^n r_i(\mu)(X_i-\mu).
$$

従って最尤推定量は

$$
\boxed{p_i(\hat\mu,\mathbf X)=
\frac{r_i(\hat\mu)}{\sum_{j=1}^nr_j(\hat\mu)}}
$$

を用いた所定の方程式を満たす。各重みは正で、総和は $1$ である。停留点が複数ある場合は、そのうち尤度を最大にするものを選ぶ。

#### (3-3)

$n=1$ では $\phi(X_1)+\phi(X_1-\mu)$ は $\mu=X_1$ のとき最大になるから、$\hat\mu=X_1$ である。一方、

$$
E[\hat\mu]=E[X_1]=\tfrac12\cdot0+\tfrac12\mu=\frac\mu2\ne\mu
\qquad(\mu\ne0).
$$

従って不偏推定量ではない。
