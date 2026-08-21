---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。

(a) 正規分布 $N(\mu, \sigma^2)$ は以下の確率密度関数を持つ。

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

(1) 確率変数Xが $N(\mu, \sigma^2)$ にしたがうとする。このとき, $Y = X + a$ は $N(\mu+a, \sigma^2)$ にしたがうことを示せ (aは定数).

(2) 確率変数 X が $N(\mu, \sigma^2)$ にしたがうとする。このとき、 $Z = bX$ は $N(b\mu, b^2\sigma^2)$ にしたがうことを示せ (bは0でない定数).

(3) 確率変数Xが $N(0,1)$ にしたがうとする。このとき, $U = |X|$ の期待値 $E[U]$ を求めよ。

(4) 確率変数Xが $N(0,1)$ にしたがうとする。このとき, $U = |X|$ の分散 $Var[U]$ を求めよ.

(b) ある工場で生産される製品は20\%で欠陥があることがわかっている。n個の製品をランダムに取り出して、取り出された不良品数の確率変数をXとする.

(1) $\hat{p} = X/n$ の期待値 $E[\hat{p}]$ と分散 $Var[\hat{p}]$ を求めよ.

(2) $n = 1600$ 個の製品をランダムに取り出したとき, $\hat{p} = X/n$ の95\%信頼区間を求めよ、なお、標準正規分布にしたがう確率変数Zに対して、確率 $Pr(Z \geq 1.96) \approx 0.025$ となることを用いて良い。

### 题目描述

回答下列问题。

(a) 正态分布 $N(\mu,\sigma^2)$ 的概率密度函数为

$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$

(1) 设随机变量 $X$ 服从 $N(\mu,\sigma^2)$。证明对常数 $a$，

$$
Y=X+a
$$

服从 $N(\mu+a,\sigma^2)$。

(2) 设随机变量 $X$ 服从 $N(\mu,\sigma^2)$。证明对非零常数 $b$，

$$
Z=bX
$$

服从 $N(b\mu,b^2\sigma^2)$。

(3) 设随机变量 $X$ 服从 $N(0,1)$，并令

$$
U=|X|.
$$

求 $U$ 的期望 $E[U]$。

(4) 在 (3) 的条件下，求 $U=|X|$ 的方差 $\operatorname{Var}[U]$。

(b) 已知某工厂生产的产品中有 $20\%$ 是次品。随机抽取 $n$ 件产品，以随机变量 $X$ 表示其中的次品数量。

(1) 令

$$
\widehat p=\frac Xn.
$$

求 $E[\widehat p]$ 与 $\operatorname{Var}[\widehat p]$。

(2) 随机抽取 $n=1600$ 件产品时，求

$$
\widehat p=\frac Xn
$$

的 $95\%$ 置信区间。可以使用：若随机变量 $Z$ 服从标准正态分布，则

$$
\Pr(Z\geq1.96)\approx0.025.
$$

## **Kai**

(a)
(1) Y = X+a
X ~ N(μ, σ²)
Y ~ N(μ+a, σ²)
Let $f_X(x)$ be the probability density function of X.

$$
f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

Then the pdf of Y is

$$
f_Y(y) = f_X(y-a) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(y-a-\mu)^2}{2\sigma^2}\right) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(y-(\mu+a))^2}{2\sigma^2}\right)
$$

This is the pdf of N(μ+a, σ²).

(2) Z = bX
X ~ N(μ, σ²)
Z ~ N(bμ, b²σ²)
Let $f_X(x)$ be the probability density function of X.

$$
f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

Then the pdf of Z is

$$
f_Z(z) = \frac{1}{|b|} f_X(\frac{z}{b}) = \frac{1}{|b|} \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(\frac{z}{b}-\mu)^2}{2\sigma^2}\right) = \frac{1}{|b|} \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(z-b\mu)^2}{2b^2\sigma^2}\right)
$$

$$
= \frac{1}{\sqrt{b^2}} \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left(-\frac{(z-b\mu)^2}{2b^2\sigma^2}\right) = \frac{1}{\sqrt{2\pi b^2\sigma^2}} \exp \left(-\frac{(z-b\mu)^2}{2b^2\sigma^2}\right)
$$

This is the pdf of N(bμ, b²σ²).

(3) U = |X|
X ~ N(0,1)

$$
E[U] = E[|X|] = \int_{-\infty}^{\infty} |x| f_X(x) dx = \int_{-\infty}^{\infty} |x| \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}} dx
$$

$$
= 2\int_{0}^{\infty} x \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}} dx = \frac{2}{\sqrt{2\pi}} \int_{0}^{\infty} x e^{-\frac{x^2}{2}} dx
$$

Let $u = \frac{x^2}{2}$ , $du = x dx$ .

$$
= \frac{2}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-u} du = \frac{2}{\sqrt{2\pi}} [-e^{-u}]_0^\infty = \frac{2}{\sqrt{2\pi}} (0 - (-1)) = \frac{2}{\sqrt{2\pi}} = \sqrt{\frac{2}{\pi}}
$$

$$
E[U] = \sqrt{\frac{2}{\pi}}
$$

(4) U = |X|
X ~ N(0,1)
$Var[U] = E[U^2] - (E[U])^2$
$E[U] = \sqrt{\frac{2}{\pi}}$ from (3)

$$
E[U^2] = E[X^2] = Var[X] + (E[X])^2 = 1 + 0^2 = 1
$$

Since X ~ N(0, 1), $E[X] = 0$ and $Var[X] = 1$ .

$$
Var[U] = 1 - (\sqrt{\frac{2}{\pi}})^2 = 1 - \frac{2}{\pi}
$$

(b)
(1) X ~ Bin(n, 0.2)
$\hat{p} = \frac{X}{n}$

$$
E[\hat{p}] = E[\frac{X}{n}] = \frac{1}{n} E[X] = \frac{1}{n} (n \times 0.2) = 0.2
$$

$$
Var[\hat{p}] = Var[\frac{X}{n}] = \frac{1}{n^2} Var[X] = \frac{1}{n^2} (n \times 0.2 \times (1-0.2)) = \frac{0.2 \times 0.8}{n} = \frac{0.16}{n}
$$

(2) For $n=1600$ ,

$$
E[\hat p]=0.2,\qquad
\operatorname{Var}(\hat p)=\frac{0.16}{1600}=0.0001,
$$

so the standard deviation of $\hat p$ is $0.01$ . Using the normal approximation,

$$
\frac{\hat p-0.2}{0.01}\approx N(0,1).
$$

Therefore, a central 95% probability interval for $\hat p$ is

$$
0.2\pm1.96(0.01)
=0.2\pm0.0196,
$$

that is,

$$
0.1804\leq\hat p\leq0.2196.
$$

The question gives no observed value of $X$ ; hence a data-dependent confidence interval for an unknown $p$ cannot be evaluated numerically from the stated information. The interval above is the requested normal-approximation range for the random estimator $\hat p$ under the given defect probability $p=0.2$ .
