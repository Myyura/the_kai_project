---
sidebar_label: "2017年8月実施 確率・統計 [1]–[3]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報学研究科 情報システム学専攻 2017年8月実施 確率・統計 [1]–[3]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), [思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### \[1\]


ある事象が2分間に平均1回発生する場合、10分間でその事象が3回発生する確率を有効数字2桁で求めなさい。ただし、その事象の生起回数の確率はポアソン分布に従うものとし、 $e^{-1} = 0.37, e^{-2} = 0.14, e^{-3} = 0.050, e^{-4} = 0.018, e^{-5} = 0.0067$ とする。


### \[2\]


統計学的仮説検定の手順を、帰無仮説および有意水準という用語を説明した上で、それらを用いて300字程度 (about 250 words for English)で説明しなさい。


### \[3\]


互いに独立な確率変数 $X$ と $Y$ がともに正規分布 $N(\mu, \sigma^2)$ に従うとする。この確率密度関数は $\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ で表される。このとき、以下の問いに答えなさい。

(1) 確率変数 $X$ のモーメント母関数（積率母関数）は $e^{tX}$ の期待値、つまり $E[e^{tX}]$ で定義される。 $X$ のモーメント母関数を $\mu$ と $\sigma$ を使って表しなさい。

(2) 確率変数 $Z$ を $Z = X + Y$ とする。 $Z$ のモーメント母関数を求め、 $Z$ も正規分布に従うことを示しなさい。


[出典：名古屋大学 入学試験問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e9164ea5d375e4176f1a5300f9ee458d.pdf)

### 题目描述

#### [1]

某事件平均每 $2$ 分钟发生 $1$ 次，且给定时间内的发生次数服从 Poisson 分布。求该事件在 $10$ 分钟内恰好发生 $3$ 次的概率，结果保留两位有效数字。可使用

$$
e^{-1}=0.37,\quad e^{-2}=0.14,\quad e^{-3}=0.050,\quad
e^{-4}=0.018,\quad e^{-5}=0.0067.
$$

#### [2]

先解释“原假设”和“显著性水平”这两个术语，再使用它们说明统计假设检验的完整步骤。篇幅约为 $300$ 字；若用英语作答，则约为 $250$ 词。

#### [3]

相互独立的随机变量 $X,Y$ 均服从正态分布 $N(\mu,\sigma^2)$，其概率密度函数为

$$
\frac1{\sqrt{2\pi\sigma^2}}
\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$

1. 随机变量 $X$ 的矩母函数定义为

   $$
   M_X(t)=E[e^{tX}].
   $$

   用 $\mu,\sigma$ 表示 $M_X(t)$；
2. 定义 $Z=X+Y$。求 $Z$ 的矩母函数，并由此证明 $Z$ 也服从正态分布。

## **Kai**

### \[1\]

ポアソン分布の確率質量関数は以下のように表される。

$$
P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

ここで、Xは事象の発生回数、kは具体的な発生回数、 $\lambda$ は平均発生回数である。

問題文より、2分間に平均1回発生するので、10分間では平均 $\frac{1}{2} \times 10 = 5$ 回発生する。したがって、 $\lambda = 5$ である。

10分間で3回発生する確率は、 $k=3$ として、

$$
P(X=3) = \frac{5^3 e^{-5}}{3!} = \frac{125 e^{-5}}{6}
$$

問題文より、 $e^{-5} = 0.0067$ であるから、

$$
P(X=3) = \frac{125 \times 0.0067}{6} = \frac{0.8375}{6} \approx 0.13958
$$

有効数字2桁で求めると、0.14となる。

したがって、答えは0.14である。

### \[2\]

統計的仮説検定では、母集団について検証の対象となる帰無仮説と、それに対立する仮説を定める。有意水準は、帰無仮説が正しいのに棄却する第一種過誤の確率の上限として、標本を見る前に設定する。次に、データと仮説に適した検定統計量を選び、帰無仮説の下での分布を求める。観測値から統計量を計算し、その分布において観測値と同程度以上に極端な結果が得られる確率であるp値を求める。p値が有意水準以下なら帰無仮説を棄却し、それより大きければ棄却しない。ただし、棄却しないことは帰無仮説が正しいことの証明ではなく、棄却する十分な証拠がないことを意味する。

### \[3\]

#### (1)
求めるモーメント母関数 $M_X(t)$ は、

$$
\begin{aligned}
M_X(t)
&=
E \left[ e^{tX} \right]
\\
&=
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty e^{tx} e^{- \frac{(x - \mu)^2}{2 \sigma^2}} dx
\\
&=
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty
e^{ - \frac{x^2 - 2 ( \mu + \sigma^2 t ) x + \mu^2}{2 \sigma^2}}
dx
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}} \cdot
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty
e^{- \frac{(x - (\mu + \sigma^2 t))^2}{2 \sigma^2}} dx
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\end{aligned}
$$

となる。

#### (2)
求めるモーメント母関数 $M_Z(t)$ は、

$$
\begin{aligned}
M_Z(t)
&=
E \left[ e^{tZ} \right]
\\
&=
E \left[ e^{t(X+Y)} \right]
\\
&=
E \left[ e^{tX} \right] E \left[ e^{tY} \right]
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\cdot
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\\
&=
e^{2 \mu t + \sigma^2 t^2}
\end{aligned}
$$

となる。
したがって、
$Z$ は正規分布 $N(2 \mu, 2 \sigma^2)$ に従うことがわかる。
