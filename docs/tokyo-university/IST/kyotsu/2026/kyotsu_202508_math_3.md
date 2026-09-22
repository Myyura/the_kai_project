---
sidebar_label: 2025年8月実施 数学 第3問
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Basics.Markov-and-Chebyshev-Inequalities
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function-of-Sum-of-Independent-Variables
  - Probability-Statistics.Probability-Basics.Chernoff-Bound
---
# 東京大学 情報理工学系研究科 2025年8月実施 数学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

数直線上を移動する点を考える．その動点の初期位置を $0$ とする．
動点は $1$ ステップで，プラスまたはマイナス方向へ $1$ 移動する確率がそれぞれ $1/2$ であるとする．
$n$ を正の整数とし，$n$ ステップ後の動点の位置を $P_n$ とする．また動点の移動は独立と仮定する．

確率変数 $X$ に対して，$E(X),V(X)$ をそれぞれ $X$ の期待値と分散とし，
$\Pr(X\ge k)$，および $\Pr(|X|\ge k)$ をそれぞれ $X\ge k$ を満たす確率，および $|X|\ge k$ を満たす確率とする．以下の問いに答えよ．

(1) $P_n$ の期待値を求めよ．

(2) $P_n$ の分散を求めよ．

(3) 任意の正の整数 $k$ に対して，$|P_n|\ge k$ を満たす確率が以下を満たすことを示せ．

$$
\Pr(|P_n|\ge k)\le\frac{V(P_n)}{k^2}.
$$

(4) 任意の $t>0$ と任意の正の整数 $k$ に対して，$P_n\ge k$ を満たす確率が以下を満たすことを示せ．

$$
\Pr(P_n\ge k)=\Pr(\exp(tP_n)\ge\exp(tk))
\le\frac{E(\exp(tP_n))}{\exp(tk)}.
$$

(5) 任意の $t>0$ に対して，$\exp(tP_n)$ の期待値が以下を満たすことを示せ．

$$
E(\exp(tP_n))\le\exp\left(\frac{t^2n}{2}\right).
$$

(6) 任意の正の整数 $k$ に対して，$P_n\ge k$ を満たす確率が以下を満たすことを示せ．

$$
\Pr(P_n\ge k)\le\exp\left(-\frac{k^2}{2n}\right).
$$

(7) $n=10^{10}$ ステップ終了後，$|P_n|\ge10^6$ である確率は $10^{-4}$ 未満になることを示せ．

#### 题目描述

一个动点从数轴原点出发，每步独立地以各 $1/2$ 的概率向正方向或负方向移动 $1$。
设正整数 $n$ 步后的位置为 $P_n$，$E(X)$ 和 $V(X)$ 分别表示随机变量 $X$ 的期望和方差。
回答下列问题。

（1）求 $P_n$ 的期望。

（2）求 $P_n$ 的方差。

（3）对任意正整数 $k$，证明

$$
\Pr(|P_n|\ge k)\le\frac{V(P_n)}{k^2}.
$$

（4）对任意 $t>0$ 和任意正整数 $k$，证明

$$
\Pr(P_n\ge k)=\Pr(\exp(tP_n)\ge\exp(tk))
\le\frac{E(\exp(tP_n))}{\exp(tk)}.
$$

（5）对任意 $t>0$，证明

$$
E(\exp(tP_n))\le\exp\left(\frac{t^2n}{2}\right).
$$

（6）对任意正整数 $k$，证明

$$
\Pr(P_n\ge k)\le\exp\left(-\frac{k^2}{2n}\right).
$$

（7）证明：经过 $n=10^{10}$ 步后，$|P_n|\ge10^6$ 的概率小于 $10^{-4}$。

## **Kai**

各ステップの変位を $X_i$ とおくと，$X_1,\ldots,X_n$ は独立で，
$\Pr(X_i=1)=\Pr(X_i=-1)=1/2$，$P_n=\sum_{i=1}^nX_i$ である．

### (1)

$E(X_i)=0$ より，

$$
\boxed{E(P_n)=\sum_{i=1}^nE(X_i)=0}.
$$

### (2)

$V(X_i)=E(X_i^2)-E(X_i)^2=1$ であるから，独立性より

$$
\boxed{V(P_n)=\sum_{i=1}^nV(X_i)=n}.
$$

### (3)

$\mathbf1_A$ を事象 $A$ の指示関数とする．
$P_n^2\ge k^2\mathbf1_{\{|P_n|\ge k\}}$ と (1) より，

$$
V(P_n)=E(P_n^2)\ge k^2\Pr(|P_n|\ge k).
$$

両辺を $k^2$ で割れば，所望の不等式を得る．

### (4)

$t>0$ より指数関数 $x\mapsto e^{tx}$ は狭義単調増加なので，
$\{P_n\ge k\}=\{e^{tP_n}\ge e^{tk}\}$ である．また

$$
e^{tP_n}\ge e^{tk}\mathbf1_{\{P_n\ge k\}}
$$

の両辺の期待値を取ると，

$$
\boxed{\Pr(P_n\ge k)=\Pr(e^{tP_n}\ge e^{tk})
\le e^{-tk}E(e^{tP_n})}.
$$

### (5)

独立性より

$$
E(e^{tP_n})=\prod_{i=1}^n E(e^{tX_i})
=\left(\frac{e^t+e^{-t}}2\right)^n=(\cosh t)^n.
$$

$j\ge0$ に対して $(2j)!\ge2^j j!$ なので，

$$
\cosh t=\sum_{j=0}^{\infty}\frac{t^{2j}}{(2j)!}
\le\sum_{j=0}^{\infty}\frac{(t^2/2)^j}{j!}
=e^{t^2/2}.
$$

よって $\boxed{E(e^{tP_n})\le e^{nt^2/2}}$ である．

### (6)

(4)，(5) より，任意の $t>0$ について

$$
\Pr(P_n\ge k)\le\exp\left(\frac n2t^2-kt\right).
$$

$$
\frac n2t^2-kt=\frac n2\left(t-\frac kn\right)^2-\frac{k^2}{2n}
$$

であるから，$t=k/n>0$ とすれば

$$
\boxed{\Pr(P_n\ge k)\le\exp\left(-\frac{k^2}{2n}\right)}.
$$

### (7)

$P_n$ と $-P_n$ は同じ分布に従うので，(6) より

$$
\Pr(|P_n|\ge k)=2\Pr(P_n\ge k)
\le2\exp\left(-\frac{k^2}{2n}\right).
$$

$n=10^{10}$，$k=10^6$ を代入すると上界は $2e^{-50}$ となる．
$e^{50}>50^3/3!>2\times10^4$ であるから，

$$
\boxed{\Pr(|P_{10^{10}}|\ge10^6)\le2e^{-50}<10^{-4}}.
$$

## **Knowledge**

独立な確率変数の和，期待値と分散，Markov の不等式，Chebyshev の不等式，積率母関数，Chernoff 境界．
