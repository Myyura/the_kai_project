---
sidebar_label: 2021年8月実施 選択問題 確率統計
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
---

# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2021年8月実施 選択問題 確率統計

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\beta>0$ とし、感染症の発症間隔 $X$ の密度を

$$
f_X(x)=\beta^2xe^{-\beta x}\qquad(x>0)
$$

とする。

1. $X$ の積率母関数 $\varphi(\theta)=E[e^{\theta X}]$ を求めよ。
2. $E[X]$ と $V[X]$ を求めよ。
3. 独立標本 $x_1,\ldots,x_n$ から $\beta$ の最尤推定値を求めよ。

さらに、$Y$ は $X$ と独立で

$$
f_Y(y)=\beta e^{-\beta y}\qquad(y>0)
$$

に従い、$Z=X+Y$ とする。

4. $Z$ の密度を求めよ。
5. $\beta=1$ のとき $P(Z\ge2)$ を $e=2.7$ として有効数字 2 桁で求めよ。

### 题目描述

给定形状参数为 2 的 Gamma 型发病间隔分布，求矩母函数、期望、方差和参数的极大似然估计；再与同率参数的独立指数变量相加，求和的密度及尾概率。

## **Kai**

### (1)

$$
\begin{aligned}
\varphi(\theta)
&=\beta^2\int_0^\infty xe^{-(\beta-\theta)x}\,dx\\
&=\boxed{\left(\frac{\beta}{\beta-\theta}\right)^2}
\qquad(\theta<\beta).
\end{aligned}
$$

### (2)

$X$ は形状 $2$、率 $\beta$ の Gamma 分布なので

$$
\boxed{E[X]=\frac2\beta,\qquad V[X]=\frac2{\beta^2}}.
$$

### (3)

対数尤度は定数項を除いて

$$
\ell(\beta)=2n\log\beta-\beta\sum_{i=1}^nx_i.
$$

したがって

$$
\ell'(\beta)=\frac{2n}{\beta}-\sum_{i=1}^nx_i=0
$$

より

$$
\boxed{\hat\beta=\frac{2n}{\sum_{i=1}^nx_i}}.
$$

### (4)

畳み込みにより、$z>0$ に対して

$$
\begin{aligned}
f_Z(z)
&=\int_0^z\beta^2xe^{-\beta x}\,
\beta e^{-\beta(z-x)}\,dx\\
&=\boxed{\frac{\beta^3z^2}{2}e^{-\beta z}}.
\end{aligned}
$$

$z\le0$ では $f_Z(z)=0$ である。

### (5)

$Z$ は形状 $3$、率 $1$ の Gamma 分布なので

$$
\begin{aligned}
P(Z\ge2)
&=e^{-2}\left(1+2+\frac{2^2}{2}\right)\\
&=\frac5{2.7^2}
\doteq\boxed{0.69}.
\end{aligned}
$$
