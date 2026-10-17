---
sidebar_label: "2018年8月実施 統計学・計量経済学 第2題 1"
tags:
  - Hitotsubashi-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Negative-Binomial-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---

# 一橋大学 経済学研究科 2018年8月実施 統計学・計量経済学 第2題 1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%B8%80%E6%A9%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2019%E5%B9%B4%E5%BA%A6_%E7%B5%8C%E6%B8%88%E5%AD%A6_3_%E7%B5%B1%E8%A8%88%E5%AD%A6%E3%83%BB%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

以下の統計学関係の問題 (a)、(b)、(c)、(d) のすべてに答えよ。いずれの問題においても特に断りのない限り導出過程は省略しないこと。

成功確率 $p$ の互いに独立なベルヌーイ試行を無限回行うとする。このとき、$r$ 回の成功が観測されるまでに発生した失敗の回数を $X$ とする。$X=x$ の確率を $P(x)$ で表す。$r$ は自然数であり、$x$ は非負の整数である。以下の (a)–(c) では、$r$ と $p$ は固定されているものとする。

(a) $P(x)$ を求めよ。

(b) $X$ の期待値と分散を求めよ。

(c) $X=x$ が観測されたときの、$p$ の最尤推定値を求めよ。ここで $r$ は既知とする。

(d) $r\to\infty$ かつ $r(1-p)\to\lambda$ のとき、$X$ はどういう分布に収束するか。$P(x)$ の極限をもとに説明せよ。ここで $\lambda$ は固定された正の定数とする。

#### 题目描述

回答下列统计学问题 (a)、(b)、(c)、(d) 中的全部问题。除非另有说明，每问均不得省略推导过程。

无限次进行成功概率为 $p$、相互独立的伯努利试验。设观测到 $r$ 次成功之前发生的失败次数为 $X$，以 $P(x)$ 表示 $X=x$ 的概率。$r$ 为自然数，$x$ 为非负整数。在下列 (a)–(c) 中，$r,p$ 固定。

(a) 求 $P(x)$。

(b) 求 $X$ 的期望和方差。

(c) 已知 $r$，观测到 $X=x$ 时，求 $p$ 的最大似然估计值。

(d) 当 $r\to\infty$ 且 $r(1-p)\to\lambda$ 时，$X$ 收敛于什么分布？根据 $P(x)$ 的极限说明。这里 $\lambda$ 为固定的正常数。

## **Kai**

### (a)

第 $r+x$ 回が成功し、それ以前の $r+x-1$ 回には成功 $r-1$ 回と失敗 $x$ 回が含まれる。よって

$$
\boxed{\begin{gathered}
P(x)=\binom{r+x-1}{x}p^r(1-p)^x\\
(x=0,1,2,\ldots)
\end{gathered}}.
$$

これは失敗回数を数える定義の負の二項分布である。以下では $0<p\le1$ とする。

### (b)

隣り合う成功の間に生じる失敗回数を $Y_1,\ldots,Y_r$ とすると、独立同分布で $X=\sum_jY_j$。$q=1-p$ とおけば $P(Y_j=k)=pq^k$ である。等比級数を微分して、

$$
\begin{gathered}
\sum_{k\ge0}kq^k=\frac q{(1-q)^2},\\
\sum_{k\ge0}k(k-1)q^k=\frac{2q^2}{(1-q)^3}.
\end{gathered}
$$

したがって $E[Y_j]=q/p$、$E[Y_j(Y_j-1)]=2q^2/p^2$ より $\operatorname{Var}(Y_j)=q/p^2$。独立性を用いて

$$
\boxed{\begin{gathered}
E[X]=\frac{r(1-p)}p,\\
\operatorname{Var}(X)=\frac{r(1-p)}{p^2}
\end{gathered}}.
$$

### (c)

定数項を除く対数尤度は $\ell(p)=r\log p+x\log(1-p)$。$x>0$ なら

$$
\begin{gathered}
\ell'(p)=\frac rp-\frac x{1-p}=0\\
\Longrightarrow\\
\boxed{\hat p=\frac r{r+x}}.
\end{gathered}
$$

$\ell''(p)=-r/p^2-x/(1-p)^2<0$ なので最大である。$x=0$ では尤度 $p^r$ は単調増加し、$p=1$ を許すなら同じ式で $\hat p=1$。母数空間を開区間 $0<p<1$ とした場合には、$x=0$ で最大値は達成せず $p\to1$ に上限を持つ。

### (d)

$q_r=1-p_r$ とおくと $rq_r\to\lambda$、$q_r\to0$。固定した $x$ に対し、

$$
\begin{aligned}
P_r(x)&=\frac{r(r+1)\cdots(r+x-1)}{x!}\,q_r^x(1-q_r)^r\\
&=\frac{(rq_r)^x}{x!}\prod_{j=0}^{x-1}\left(1+\frac jr\right)(1-q_r)^r
\longrightarrow\frac{\lambda^x}{x!}e^{-\lambda}.
\end{aligned}
$$

$x=0$ では積を1とする。極限の確率の総和は1であるため、

$$
\boxed{X\ \xrightarrow{d}\ \operatorname{Poisson}(\lambda)}.
$$

## **Reference**

- [大学公式問題（16ページ（実施日：2018年8月30日））](https://www1.econ.hit-u.ac.jp/office/bosyu/kakomon/kakomon_s2019.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%B8%80%E6%A9%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2019%E5%B9%B4%E5%BA%A6_%E7%B5%8C%E6%B8%88%E5%AD%A6_3_%E7%B5%B1%E8%A8%88%E5%AD%A6%E3%83%BB%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6.html)
