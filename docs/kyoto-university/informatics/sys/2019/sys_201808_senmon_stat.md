---
sidebar_label: 2018年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Estimator-Consistency
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Hypergeometric-Distribution
---
# 京都大学 情報学研究科 システム科学専攻 2018年8月実施 専門科目 確率統計

## **Author**
[uogxtc](https://zhuanlan.zhihu.com/p/697551899), 祭音Myyura

## **Description**

### 問題1
確率変数 $Z_i = (X_i, Y_i), i = 1, \ldots, n$ は独立に次のように定義される確率分布に従う。
各 $X_i, Y_i$ は $0$ または $1$ を値にとり、 $P(X_i = 1) = \alpha$, $P(Y_i = 1 | X_i) = \beta X_i$ とする（一般に $X_i$ と $Y_i$ は独立ではない）。
ただし $n$ は正の整数、 $0 < \alpha < 1$, $0 < \beta < 1$ は未知パラメータである。
このとき以下の設問に答えなさい。

(1) 同時確率 $P(X_i = x, Y_i = y)$ を $(x, y)$ の取りうるすべての値について求めなさい。ただし $\alpha, \beta$ を用いること。

(2) $Z_i, i = 1, \ldots, n$ をすべて用いて、 $\alpha, \beta$ の最尤推定量 $\hat{\alpha}_n, \hat{\beta}_n$ を求めなさい。

(3) 制約条件 $\alpha + \beta = 1$ を仮定する。このとき、 $Z_i, i = 1, \ldots, n$ をすべて用いて、 $\alpha$ の最尤推定量 $\hat{\alpha}_n$ を求めなさい。

(4) 設問 (3) の $\hat{\alpha}_n$ は極限 $n \to \infty$ においてある値に確率収束する。その値を求めなさい。

### 問題2
袋の中に $N$ ($N = 1, 2, \ldots$) 個のボールがあり、そのうち $m$ ($m \in \{0, 1, \ldots, N\}$) 個は赤色、残りは白色である。
袋から、ランダムかつ同時に $n$ ($n \in \{1, \ldots, N\}$) 個取り出した際にその中で赤色であるボールの個数を確率変数 $X$ ($X \in \{0, 1, \ldots, n\}$) で表すことにする。以下の設問 (1), (2) に答えなさい。

(1) $X = k$ ($k = 0, 1, \ldots, n$) となる確率 $P(X = k)$ を求めなさい。

(2) 確率変数 $X$ の期待値を求めなさい。

袋の中に白いボールが多数入っている。
その個数が分からないので未知パラメータ $N$ とおき、これを以下の手続きで見積もることにした。まず、袋の中からランダムかつ同時に $m$ 個を取り出し赤く塗った。それらを袋に戻しよくかき混ぜた。
その後、今度は袋の中からランダムかつ同時に $n$ 個のボールを取り出したところ、そのうち $k$ ($k \in \{0, 1, \ldots, n\}$) 個が赤く塗られていた。
$N, m, n$ は正の整数である。以下の設問 (3) ~ (5) に答えなさい。

(3) $N$ に関する尤度 $L(N)$ を求めなさい。

(4) 設問 (3) の $L(N)$ について、 $L(N)/L(N-1)$（ただし $N = 2, 3, \ldots$）を計算しなさい。

(5) $N$ の最尤推定値を求めなさい。ただし $k \geq 1$ とする。

#### 题目描述

1. 随机向量 $Z_i=(X_i,Y_i)$（$i=1,\ldots,n$）相互独立并服从如下分布：$X_i,Y_i$ 均只取 0 或 1，

$$
   P(X_i=1)=\alpha,\qquad
   P(Y_i=1\mid X_i)=\beta X_i,
$$

   因而一般而言 $X_i,Y_i$ 并不独立。这里 $n$ 为正整数，$0<\alpha<1$、$0<\beta<1$ 为未知参数。

   （1）对 $(x,y)$ 的所有可能取值，用 $\alpha,\beta$ 求联合概率 $P(X_i=x,Y_i=y)$。

   （2）使用全部 $Z_1,\ldots,Z_n$，求 $\alpha,\beta$ 的最大似然估计量 $\hat\alpha_n,\hat\beta_n$。

   （3）加入约束 $\alpha+\beta=1$。使用全部 $Z_1,\ldots,Z_n$，求 $\alpha$ 的最大似然估计量 $\hat\alpha_n$。

   （4）第（3）问的 $\hat\alpha_n$ 在 $n\to\infty$ 时依概率收敛到某个值，求该极限值。

2. 一个袋中共有 $N$ 个球，其中 $m$ 个红球，其余为白球；$N=1,2,\ldots$，$m\in\{0,1,\ldots,N\}$。从中随机且同时抽取 $n$ 个球，$n\in\{1,\ldots,N\}$，令红球数为 $X\in\{0,1,\ldots,n\}$。

   （1）对 $k=0,1,\ldots,n$，求 $P(X=k)$。

   （2）求 $E[X]$。

   现有一个装有许多白球的袋子，球的总数未知，记为参数 $N$，并按如下程序估计它：先随机且同时取出 $m$ 个球，涂成红色后放回并充分混合；随后再次随机且同时抽取 $n$ 个球，发现其中 $k$ 个被涂红，其中 $k\in\{0,1,\ldots,n\}$。$N,m,n$ 均为正整数。

   （3）求关于 $N$ 的似然函数 $L(N)$。

   （4）对 $N=2,3,\ldots$，计算 $L(N)/L(N-1)$。

   （5）在 $k\geq1$ 的条件下求 $N$ 的最大似然估计值。


## **Kai**

### 問題1

(1) 条件付き確率の積より

$$
P(X_i=x,Y_i=y)=\begin{array}{c|cc}
&y=0&y=1\\\hline
x=0&1-\alpha&0\\
x=1&\alpha(1-\beta)&\alpha\beta
\end{array}.
$$

(2) $S_X=\sum_iX_i,S_Y=\sum_iY_i$ とおく。実現可能な標本では

$$
L(\alpha,\beta)=\alpha^{S_X}(1-\alpha)^{n-S_X}
\beta^{S_Y}(1-\beta)^{S_X-S_Y}.
$$

対数尤度の微分から、内部解は

$$
\boxed{\widehat\alpha_n=\frac{S_X}{n},\qquad \widehat\beta_n=\frac{S_Y}{S_X}}.
$$

$S_X=0$ なら尤度は $\beta$ に依存しない。推定値が $0$ または $1$ となる標本では、指定された開パラメータ空間内に最大値はなく、境界で上限に近づく。

(3) $\beta=1-\alpha$ の下では

$$
\log L=(2S_X-S_Y)\log\alpha+(n-S_X+S_Y)\log(1-\alpha),
$$

したがって内部解は

$$
\boxed{\widehat\alpha_n=\frac{2S_X-S_Y}{n+S_X}}.
$$

この値が端点なら (2) と同様に開区間内で最大値は存在しない。

(4) 大数の法則により $S_X/n\xrightarrow{p}\alpha$、$S_Y/n\xrightarrow{p}\alpha(1-\alpha)$。したがって

$$
\widehat\alpha_n\xrightarrow{p}\frac{2\alpha-\alpha(1-\alpha)}{1+\alpha}=\boxed\alpha.
$$

### 問題2

(1) 組合せの数を数えると

$$
\boxed{P(X=k)=\frac{\binom mk\binom{N-m}{n-k}}{\binom Nn}}.
$$

範囲外の二項係数は $0$ とする。

(2) 取り出した各球が赤い確率は $m/N$ なので、期待値の線形性から $\boxed{E[X]=nm/N}$。

(3)

$$
\boxed{L(N)=\frac{\binom mk\binom{N-m}{n-k}}{\binom Nn}},\qquad N\ge N_{\min}=m+n-k.
$$

(4) $N>N_{\min}$ では

$$
\boxed{\frac{L(N)}{L(N-1)}=\frac{(N-m)(N-n)}{N(N-m-n+k)}}.
$$

(5) この比と $1$ の大小は $mn-kN$ の符号に一致する。$c=mn/k$ とおけば、$N<c$ では増加、$N>c$ では減少する。よって

$$
\boxed{\widehat N=\lfloor mn/k\rfloor}.
$$

ただし $c$ が整数かつ $c-1\ge N_{\min}$ なら、$c-1$ と $c$ の両方が最尤推定値である。$c=N_{\min}$ なら $c$ のみが実現可能である。

