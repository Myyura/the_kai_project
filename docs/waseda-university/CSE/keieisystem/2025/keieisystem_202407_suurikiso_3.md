---
sidebar_label: "2024年7月実施 数理基礎 問題3"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年7月実施 数理基礎 問題3

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問1

2次元のデータ $(x_i, y_i)$ $(i = 1, 2, \dots, n)$ に対して、次の回帰モデルを仮定する。

$$
y_i = \beta x_i^2 + \epsilon_i, \quad \epsilon_i \sim N(0, \sigma^2)
$$

このとき, $\beta$ の最小二乗推定量を導け。

#### 小問2

あるコインの表が出る確率を $P$ , 裏が出る確率を $1-P$ とする。帰無仮説を $H_0: P = 0.5$ , 対立仮説を $H_1: P \neq 0.5$ と設定した検定を考える。このコインを4回投げるとき, 「4回とも表」または「4回とも裏」だった場合に帰無仮説を棄却するという検定方式を採用する。このとき, 有意水準を求めよ。また, $P = 0.8$ のとき検出力を求めよ。

#### 小問3

確率変数Xがポアソン分布に従うとする。ポアソン分布の確率関数は次の通りである。

$$
p(x) = \frac{\lambda^x}{x!} \exp(-\lambda)
$$

このとき、期待値 $E[X(X-1)]$ を求めよ。

#### 小問4

次の関数が確率密度関数となるように、定数 $a$ の値を定めよ。

$$
f(x) = a \exp \left\{-\frac{(x-4)^2}{50}\right\}
$$

### 题目描述

#### 小问1

对二维数据 $(x_i,y_i)$（$i=1,2,\ldots,n$），假设回归模型

$$
y_i=\beta x_i^2+\epsilon_i,
\qquad
\epsilon_i\sim N(0,\sigma^2).
$$

推导 $\beta$ 的最小二乘估计量。

#### 小问2

某硬币正面朝上的概率为 $P$，反面朝上的概率为 $1-P$。考虑假设检验

$$
H_0:P=0.5,\qquad H_1:P\neq0.5.
$$

将硬币投掷 $4$ 次；若结果为“$4$ 次全是正面”或“$4$ 次全是反面”，则拒绝 $H_0$。求该检验的显著性水平，并求 $P=0.8$ 时的检验功效。

#### 小问3

设随机变量 $X$ 服从泊松分布，其概率质量函数为

$$
p(x)=\frac{\lambda^x}{x!}\exp(-\lambda),
\qquad x=0,1,2,\ldots.
$$

求阶乘矩

$$
E[X(X-1)].
$$

#### 小问4

确定常数 $a$，使定义在实数轴上的函数

$$
f(x)=a\exp\left\{-\frac{(x-4)^2}{50}\right\}
$$

成为概率密度函数。

## **Kai**

### 小問1

最小二乗推定量(Least Squares Estimator, LSE)を求める。
残差二乗和(Residual Sum of Squares, RSS)を最小化する $\beta$ を求める。

$$
RSS(\beta) = \sum_{i=1}^n (y_i - \beta x_i^2)^2
$$

$\beta$ で微分して0とおく。

$$
\frac{dRSS}{d\beta} = \sum_{i=1}^n 2(y_i - \beta x_i^2)(-x_i^2) = 0
$$

$$
\sum_{i=1}^n (y_i - \beta x_i^2)x_i^2 = 0
$$

$$
\sum_{i=1}^n y_i x_i^2 - \beta \sum_{i=1}^n x_i^4 = 0
$$

$$
\beta \sum_{i=1}^n x_i^4 = \sum_{i=1}^n y_i x_i^2
$$

$$
\hat{\beta} = \frac{\sum_{i=1}^n y_i x_i^2}{\sum_{i=1}^n x_i^4}
$$

ただし、この一意な推定量が存在するためには

$$
\sum_{i=1}^n x_i^4>0
$$

すなわち、少なくとも1つの $x_i$ が0でないことが必要である。すべての $x_i=0$ の場合、 $RSS(\beta)=\sum_i y_i^2$ は $\beta$ に依存しないため、任意の $\beta$ が最小化し、 $\beta$ は識別できない。

よって, $\sum_i x_i^4>0$ の条件下で $\beta$ の最小二乗推定量は

$$
\hat{\beta} = \frac{\sum_{i=1}^n y_i x_i^2}{\sum_{i=1}^n x_i^4}
$$

### 小問2

有意水準 $\alpha$ は, $H_0$ が正しいとき (つまり $P = 0.5$ のとき) に帰無仮説を棄却する確率である。\\
4回とも表となる確率は $\left(\frac{1}{2}\right)^4 = \frac{1}{16}$ \\
4回とも裏となる確率は $\left(\frac{1}{2}\right)^4 = \frac{1}{16}$ \\
したがって, 有意水準は $\alpha = \frac{1}{16} + \frac{1}{16} = \frac{2}{16} = \frac{1}{8} = 0.125$ \\
次に, $P = 0.8$ のときの検出力を求める。検出力は, $H_1$ が正しいとき (つまり $P = 0.8$ のとき) に帰無仮説を棄却する確率である。\\
4回とも表となる確率は $(0.8)^4 = 0.4096$ \\
4回とも裏となる確率は $(0.2)^4 = 0.0016$ \\
したがって, 検出力は $0.4096 + 0.0016 = 0.4112$ \\
まとめると、
有意水準: 0.125
検出力 (P=0.8): 0.4112

### 小問3

解：

$$
E[X(X-1)] = \sum_{x=0}^{\infty} x(x-1) p(x)
$$

$$
= \sum_{x=0}^{\infty} x(x-1) \frac{\lambda^x}{x!} e^{-\lambda}
$$

注意： $x=0$ と $x=1$ の時、 $x(x-1)=0$ 。だから、和は $x=2$ から始まる。

$$
= \sum_{x=2}^{\infty} x(x-1) \frac{\lambda^x}{x!} e^{-\lambda}
$$

$$
= e^{-\lambda} \sum_{x=2}^{\infty} \frac{x(x-1) \lambda^x}{x(x-1)(x-2)!}
$$

$$
= e^{-\lambda} \sum_{x=2}^{\infty} \frac{\lambda^x}{(x-2)!}
$$

$$
= e^{-\lambda} \lambda^2 \sum_{x=2}^{\infty} \frac{\lambda^{x-2}}{(x-2)!}
$$

$y=x-2$ とおくと、 $x=2$ の時、 $y=0$ 。だから、和は $y=0$ から始まる。

$$
= e^{-\lambda} \lambda^2 \sum_{y=0}^{\infty} \frac{\lambda^y}{y!}
$$

$$
= e^{-\lambda} \lambda^2 e^{\lambda}
$$

$$
= \lambda^2
$$

したがって、

$$
E[X(X-1)] = \lambda^2
$$

### 小問4

確率密度関数であるためには、以下の条件を満たす必要があります。

1. $f(x) \geq 0$ for all $x$
2. $\int_{-\infty}^{\infty} f(x) dx = 1$

与えられた関数は $f(x) = a \exp \left\{-\frac{(x-4)^2}{50}\right\}$ です。これはガウス関数（正規分布の密度関数）の形をしています。 $a>0$ であれば、 $f(x)\geq 0$ は満たされます。

次に、積分条件を適用します。

$$
\int_{-\infty}^{\infty} a \exp \left\{-\frac{(x-4)^2}{50}\right\} dx = 1
$$

変数を変換します。 $u = x - 4$ とすると、 $du = dx$ であり、積分範囲は $-\infty$ から $\infty$ のままです。

$$
\int_{-\infty}^{\infty} a \exp \left\{-\frac{u^2}{50}\right\} du = 1
$$

ここで、ガウス積分の公式 $\int_{-\infty}^{\infty} e^{-kx^2} dx = \sqrt{\frac{\pi}{k}}$（$k>0$）を利用します。この場合、指数の係数は $k=\frac{1}{50}$ であり、求める規格化定数 $a$ とは別です。

$$
\int_{-\infty}^{\infty} \exp \left\{-\frac{u^2}{50}\right\} du = \sqrt{\frac{\pi}{\frac{1}{50}}} = \sqrt{50\pi} = 5\sqrt{2\pi}
$$

したがって、

$$
a \cdot 5\sqrt{2\pi} = 1
$$

$$
a = \frac{1}{5\sqrt{2\pi}} = \frac{1}{5\sqrt{2\pi}} \cdot \frac{\sqrt{2\pi}}{\sqrt{2\pi}} = \frac{\sqrt{2\pi}}{10\pi}
$$

$$
a = \frac{1}{5\sqrt{2\pi}}
$$
