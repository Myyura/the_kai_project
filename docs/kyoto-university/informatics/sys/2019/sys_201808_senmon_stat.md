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

### 题目描述

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
#### (1)
The joint probability is given by

$$
\Pr(X_i=x,Y_i=y)=\Pr(Y_i=y\mid X_i=x)\Pr(X_i=x),
$$

and we easily obtain that

$$
\begin{aligned}
&\mathrm{Pr}(X_{i}=1,Y_{i}=1)=\beta\alpha,\\
&\mathrm{Pr}(X_{i}=1,Y_{i}=0)=(1-\beta)\alpha,\\
&\mathrm{Pr}(X_{i}=0,Y_{i}=1)=0,\\
&\mathrm{Pr}(X_{i}=0,Y_{i}=0)=1-\alpha,
\end{aligned}
$$

Thus $Y_i\le X_i$ almost surely, and the four probabilities above give the joint pmf on $\{0,1\}^2$.

#### (2)
Put

$$
S_X=\sum_{i=1}^nX_i,
\qquad
S_Y=\sum_{i=1}^nY_i.
$$

For data in the support, $S_Y\le S_X$ and the likelihood is

$$
L(\alpha,\beta)
=\alpha^{S_X}(1-\alpha)^{n-S_X}
\beta^{S_Y}(1-\beta)^{S_X-S_Y}.
$$

Therefore,

$$
\boxed{
\hat\alpha_n=\frac{S_X}{n},
\qquad
\hat\beta_n=\frac{S_Y}{S_X}
}.
$$

The second estimator is unique when $S_X>0$; if $S_X=0$, the likelihood does not depend on $\beta$. The displayed ratios are interior MLEs when they lie in $(0,1)$; at an endpoint, the likelihood has only a supremum in the stated open parameter space.

#### (3)
Under $\beta=1-\alpha$, the log-likelihood, up to an additive constant, is

$$
\log L=(2S_X-S_Y)\log\alpha+(n-S_X+S_Y)\log(1-\alpha).
$$

Let $\frac{\partial\log L}{\partial\alpha}=0$ and then we get

$$
\hat{\alpha}_n=\frac{2S_X-S_Y}{n+S_X}.
$$

This is the interior MLE; if the displayed value is $0$ or $1$, the likelihood has only a supremum in the stated open parameter space.

#### (4)
When $n \to \infty$,

$$
\frac{S_X}{n}\xrightarrow{p}\alpha,
\qquad
\frac{S_Y}{n}\xrightarrow{p}\alpha\beta.
$$

Since $\beta=1-\alpha$,

$$
\hat\alpha_n\xrightarrow{p}
\frac{2\alpha-\alpha\beta}{1+\alpha}=\alpha.
$$

### 問題2
#### (1)
(Readers may refer to hypergeometric distribution, 超几何分布，超幾何分布.)

$$
\Pr(X=k)=\frac{\binom{m}{k}\binom{N-m}{n-k}}{\binom{N}{n}}.
$$

#### (2)

$$
\mathbb{E}[X]=\sum_k\Pr(X=k)\cdot k
$$

Note that

$$
\begin{aligned}
k\binom{m}{k}&=\frac{m!}{(k-1)!(m-k)!}\\
&=\frac{(m-1)!m}{(k-1)!(m-k)!}\\
&=m\binom{m-1}{k-1}.
\end{aligned}
$$

Then

$$
k \cdot \Pr(X=k)=\frac{m\binom{m-1}{k-1}\binom{N-m}{n-k}}{\binom{N}{n}}=\frac{m\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\frac{N}{n}\binom{N-1}{n-1}}.
$$

The expectation becomes

$$
\begin{aligned}
\mathbb{E}[X]& =\sum_{k=1}^n\frac{mn}{N}\bigg[\frac{\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\binom{N-1}{n-1}}\bigg] \\
&=\frac{mn}N\underbrace{\sum_{k=1}^n\left[\frac{\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\binom{N-1}{n-1}}\right]}_{=1,\text{ as all probabilities sum to 1.}} \\
&=\frac{mn}{N}.
\end{aligned}
$$

#### (3)
(For (3) and (4), readers may refer to Mark-recapture method, 標識再捕法.)

The likelihood is

$$
L(N)=\underbrace{\Pr(X=k)}_{\text{ function of } n,k \text{ and parameterized by }N}=\frac{\binom{m}{k}\binom{N-m}{n-k}}{\binom{N}{n}}.
$$

#### (4)

$$
\begin{aligned}
\frac{L(N)}{L(N-1)}& =\frac{\binom{N-m}{n-k}}{\binom{N-m-1}{n-k}}\cdot\frac{\binom{N-1}{n}}{\binom{N}{n}} \\
&=\frac{N-m}{N-m-n+k}\cdot\frac{N-n}{N}.
\end{aligned}
$$

This ratio is used for $N>N_{\min}:=m+n-k$; $N_{\min}$ is the smallest feasible value of $N$.

#### (5)
$L(N)$ is positive.

When $L(N)/L(N-1) \leq 1$,

$$
\begin{aligned}
&\frac{N-m}{N-m-n+k} \cdot \frac{N-n}{N}\leq1,\\
&\Rightarrow\quad N \geq \frac{mn}{k},
\end{aligned}
$$

$L(N)$ monotonely decreases.

When $L(N)/L(N-1) \geq 1$, i.e.,

$$
N \leq \frac{mn}{k},
$$

$L(N)$ monotonely increases.

Let $c=mn/k$. If $c\notin\mathbb Z$, the unique maximum likelihood estimate is

$$
\boxed{\hat N=\lfloor c\rfloor}.
$$

If $c\in\mathbb Z$ and $c-1\ge N_{\min}$, then $L(c-1)=L(c)$ and both $c-1$ and $c$ are maximum likelihood estimates. If $c=N_{\min}$, only $c$ is feasible.
