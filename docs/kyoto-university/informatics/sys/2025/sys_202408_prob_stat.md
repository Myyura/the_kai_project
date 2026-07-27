---
sidebar_label: 2024年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Unbiased-Estimator
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Pareto-Distribution
  - Computer-Science.Information-Theory.Kullback-Leibler-Divergence
  - Computer-Science.Information-Theory.Renyi-Entropy
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/688805310000000023004466?xsec_token=ABtHY7I1RxAUjhEZPeviabmyl25PBJsqTKCU1yTe5ns54=)

## **Description**
以下の問題において，$E(X)$ は確率変数 $X$ の期待値，$V(X)$ は分散を表す。$N(\mu, \sigma^2)$ は期待値 $\mu$，分散 $\sigma^2$ の正規分布を表す。$\log x$ は自然対数を表す。

### 問題1
既知の定数 $x_1, \ldots, x_n$ は区間 $I = \left[\frac{1}{2}, 2\right]$ に含まれるとし，既知の $g(x) > 0$ は $I$ 上の連続関数とする。確率変数 $Y_1, \ldots, Y_n$ は独立に正規分布にしたがい，

$$
Y_i \sim N(\theta x_i, g(x_i)), \quad i = 1, \ldots, n
$$

である。ただし，実数 $\theta$ は未知パラメータである。定数 $w_1, \ldots, w_n$ を用いて，$\theta$ の推定量

$$
\hat{\theta} = \sum_{i=1}^n w_i Y_i
$$

とする。以下の設問に答えよ。

(1) 推定量 $\hat{\theta}$ の期待値 $E(\hat{\theta})$ と分散 $V(\hat{\theta})$ を求めよ。

(2) $\hat{\theta}$ が不偏推定量となるための $w_1, \ldots, w_n$ についての必要十分条件を示せ。

(3) $\hat{\theta}$ が不偏推定量となる条件のもとで，$\hat{\theta}$ の分散を最小にする $w_1, \ldots, w_n$ を求めよ。

(4) $\theta$ の最尤推定量 $\hat{\theta}_{\mathrm{ML}}$ を求めよ。

(5) $g(x) = 1 + x^4$ とする。設問 (3) で求めた $w_1, \ldots, w_n$ を用いるとき，$\hat{\theta}$ の推定精度を最大とするように，$x_1, \ldots, x_n$ の値を設定せよ。

### 問題2
$X$ を実数値確率変数とする。$f(x)$ を $X$ の確率分布の確率密度関数とし、$f(x)$ は実数 $b$ および $\alpha$ を用いて次のように与えられるとする。

$$
f(x) = 
\begin{cases}
\alpha b^\alpha x^{-(1+\alpha)}, & x \geq b \\
0, & x < b
\end{cases}
$$

ただし、$b, \alpha$ はそれぞれ $b > 0$, $\alpha > 1$ を満たす。以下の設問に答えよ。

(1) 確率変数 $X$ の期待値を求めよ。

(2) $Y = \log \frac{X}{b}$ とする。$Y$ がしたがう確率分布の確率密度関数を求めよ。

(3) $f(x)$ に対し、次のような関係を満たす確率密度関数 $g(x)$ を考える。

$$
f(x) = \frac{g(x)^\alpha}{\int_b^\infty g(s)^\alpha \, ds}
$$

ただし、$x < b$ のとき $g(x) = 0$ とする。$x \geq b$ における $g(x)$ を求めよ。

(4) $f(x)$ と設問 (3) で与えた $g(x)$ に対して $D[f \| g]$ を次のように定義する。

$$
D[f \| g] = \int_b^\infty f(x) \log \frac{f(x)}{g(x)} \, dx
$$

このとき $D[f \| g]$ を次に定義される $H$ と $R$，および $\alpha$ を用いて表せ。

$$
H = -\int_b^\infty f(x) \log f(x) \, dx
$$

$$
R = \frac{1}{1 - \alpha} \log \int_b^\infty g(x)^\alpha \, dx
$$

### 题目描述

以下 $E(X),V(X)$ 分别表示随机变量 $X$ 的期望和方差，$N(\mu,\sigma^2)$ 表示均值为 $\mu$、方差为 $\sigma^2$ 的正态分布，$\log x$ 表示自然对数。

1. 已知常数 $x_1,\ldots,x_n$ 均属于区间

   $$
   I=\left[\frac12,2\right],
   $$

   已知函数 $g(x)>0$ 在 $I$ 上连续。随机变量 $Y_1,\ldots,Y_n$ 相互独立，且

   $$
   Y_i\sim N(\theta x_i,g(x_i)),
   \qquad i=1,\ldots,n,
   $$

   其中实数 $\theta$ 为未知参数。对常数 $w_1,\ldots,w_n$，考虑估计量

   $$
   \hat\theta=\sum_{i=1}^nw_iY_i.
   $$

   （1）求 $E(\hat\theta)$ 与 $V(\hat\theta)$。

   （2）给出 $\hat\theta$ 为无偏估计量时 $w_1,\ldots,w_n$ 的充要条件。

   （3）在无偏约束下，求使 $V(\hat\theta)$ 最小的 $w_1,\ldots,w_n$。

   （4）求 $\theta$ 的最大似然估计量 $\hat\theta_{\mathrm{ML}}$。

   （5）令 $g(x)=1+x^4$。使用第（3）问所得权重时，应如何设置 $x_1,\ldots,x_n$，才能使 $\hat\theta$ 的估计精度最高？

2. 设实随机变量 $X$ 的密度为

   $$
   f(x)=
   \begin{cases}
   \alpha b^\alpha x^{-(1+\alpha)}&(x\geq b),\\
   0&(x<b),
   \end{cases}
   $$

   其中 $b>0,\alpha>1$。

   （1）求 $E(X)$。

   （2）令

   $$
   Y=\log\frac Xb.
   $$

   求 $Y$ 的概率密度函数。

   （3）考虑满足

   $$
   f(x)=
   \frac{g(x)^\alpha}
        {\displaystyle\int_b^\infty g(s)^\alpha\,ds}
   $$

   的概率密度函数 $g(x)$，并规定 $x<b$ 时 $g(x)=0$。求 $x\geq b$ 时的 $g(x)$。

   （4）对上述 $f,g$，定义

   $$
   D[f\|g]
   =
   \int_b^\infty
   f(x)\log\frac{f(x)}{g(x)}\,dx.
   $$

   再定义

   $$
   H=-\int_b^\infty f(x)\log f(x)\,dx,
   $$

   $$
   R=\frac1{1-\alpha}
   \log\int_b^\infty g(x)^\alpha\,dx.
   $$

   用 $H,R,\alpha$ 表示 $D[f\|g]$。

#### 考点

- **异方差正态线性模型**：计算线性估计量的均值和方差，并写出无偏约束。
- **最小方差无偏估计与广义最小二乘**：用 Lagrange 乘数得到逆方差加权，并与最大似然估计对照。
- **最优实验设计**：通过最大化单个设计点提供的 Fisher 信息选择 $x_i$。
- **Pareto 分布与变量变换**：计算均值，并识别对数尺度下的指数分布。
- **Escort 分布、KL 散度与 Rényi 熵**：由幂次归一化关系求密度，并推导三种信息量之间的恒等式。

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_prob_stat_p1.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_prob_stat_p2.jpg" width="700" alt=""/>
</figure>
