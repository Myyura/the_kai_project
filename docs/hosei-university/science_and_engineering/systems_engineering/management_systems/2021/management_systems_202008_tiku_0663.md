---
sidebar_label: "2020年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

【1】確率変数 $X$ に対し、必ず

$$
\sqrt{E[X^2]} \geq E[X]
$$

という関係が成り立つ理由を説明せよ。

【2】 $X_1, \dots, X_n$ は平均 $\mu$ の指数分布からの無作為標本である。このとき、以下の問いに答えよ。

(1) $E[X_i^2] (i=1, \dots, n)$ を $\mu$ を用いて表せ。

(2) $i \neq j$ のとき、 $E[X_i X_j]$ を $\mu$ を用いて表せ。

(3) $\overline{X}$ を標本平均としたとき、 $\frac{n}{n+1} \overline{X}^2$ が $\mu^2$ の不偏推定量であることを示せ。

### 题目描述

【1】对随机变量 $X$，说明为何必有

$$
\sqrt{E[X^2]}\ge E[X].
$$

【2】设 $X_1,\dots,X_n$ 是来自均值为 $\mu$ 的指数分布的随机样本。回答下列问题。

（1）用 $\mu$ 表示 $E[X_i^2]\ (i=1,\dots,n)$。

（2）当 $i\ne j$ 时，用 $\mu$ 表示 $E[X_iX_j]$。

（3）令 $\overline X$ 为样本均值，证明

$$
\frac{n}{n+1}\overline X^2
$$

是 $\mu^2$ 的无偏估计量。

## **Kai**

【1】Jensenの不等式より、 $\phi(x) = \sqrt{x}$ は凹関数であるから、

$$
E[\phi(X)] \leq \phi(E[X])
$$

が成り立つ。ここで、 $X$ を $X^2$ に置き換えると、

$$
E[\sqrt{X^2}] \leq \sqrt{E[X^2]}
$$

が得られる。 $\sqrt{X^2} = |X|$ であるから、

$$
E[|X|] \leq \sqrt{E[X^2]}
$$

が成り立つ。さらに、 $|E[X]| \leq E[|X|]$ であるから、

$$
|E[X]| \leq \sqrt{E[X^2]}
$$

が成り立つ。また常に $E[X]\leq |E[X]|$ であるから、

$$
E[X]\leq |E[X]|\leq \sqrt{E[X^2]}
$$

が成り立つ。よって $E[X]$ の符号によらず、

$$
\sqrt{E[X^2]} \geq E[X]
$$

が成り立つ。

【2】
(1) 指数分布の確率密度関数は $f(x) = \frac{1}{\mu} e^{-\frac{x}{\mu}}$ である。したがって、 $E[X_i] = \mu$ 、 $V[X_i] = \mu^2$ である。また、 $V[X_i] = E[X_i^2] - (E[X_i])^2$ より、 $E[X_i^2] = V[X_i] + (E[X_i])^2 = \mu^2 + \mu^2 = 2\mu^2$ 。

(2) $X_i$ と $X_j$ は独立であるから、 $E[X_i X_j] = E[X_i] E[X_j] = \mu \cdot \mu = \mu^2$ 。

(3) $\overline{X} = \frac{1}{n} \sum_{i=1}^n X_i$ である。したがって、 $E[\overline{X}] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} n \mu = \mu$ 、 $V[\overline{X}] = \frac{1}{n^2} \sum_{i=1}^n V[X_i] = \frac{1}{n^2} n \mu^2 = \frac{\mu^2}{n}$ である。 $E[\overline{X}^2] = V[\overline{X}] + (E[\overline{X}])^2 = \frac{\mu^2}{n} + \mu^2 = \frac{n+1}{n} \mu^2$ である。したがって、 $E[\frac{n}{n+1} \overline{X}^2] = \frac{n}{n+1} E[\overline{X}^2] = \frac{n}{n+1} \frac{n+1}{n} \mu^2 = \mu^2$ である。よって、 $\frac{n}{n+1} \overline{X}^2$ は $\mu^2$ の不偏推定量である。
