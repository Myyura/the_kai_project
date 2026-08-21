---
sidebar_label: "2021年2月実施 概率统计"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年2月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。

(a) 連続確率変数Xが以下の確率密度関数をもつとする.

$$
f(x) = \begin{cases} 1 & 0 \leq x \leq 1, \\ 0 & \text{otherwise.} \end{cases}
$$

(1) Xの期待値E [X] と分散 Var[X] を求めよ.

(2) Y = 2X+1の確率密度関数を求めよ.

(3) Y = X^2の確率密度関数を求めよ.

(4) 連続確率変数YはXと同じ確率密度関数をもつとする。XとYが独立であるとき、X-Yの確率密度関数を求めよ.

(5) 連続確率変数YはXと同じ確率密度関数をもつとする。XとYが独立であるとき、確率 Pr(X≥ Y) を計算せよ.

(b) バスケットボールリーグの選手の身長を確率変数Xとする。Xは標準偏差 18cmをもつ正規分布に従うものとする。このリーグから無作為に81人の選手を選び身長を測ったところ、サンプル平均は195cmであった。このとき、このリーグの平均身長に対する95\%信頼区間を求めよ。なお、標準正規分布に従う確率変数Zに対して、確率 Pr(Z ≥ 1.96) ≈ 0.025となることを用いて良い。

### 题目描述

回答下列问题。

(a) 设连续随机变量 $X$ 的概率密度函数为

$$
f(x)=
\begin{cases}
1,&0\leq x\leq1,\\
0,&\text{其他情形}.
\end{cases}
$$

(1) 求 $X$ 的期望 $E[X]$ 与方差 $\operatorname{Var}[X]$。

(2) 求随机变量

$$
Y=2X+1
$$

的概率密度函数。

(3) 求随机变量

$$
Y=X^2
$$

的概率密度函数。

(4) 设连续随机变量 $Y$ 与 $X$ 具有相同的概率密度函数，且 $X,Y$ 相互独立。求 $X-Y$ 的概率密度函数。

(5) 设连续随机变量 $Y$ 与 $X$ 具有相同的概率密度函数，且 $X,Y$ 相互独立。计算

$$
\Pr(X\geq Y).
$$

(b) 以随机变量 $X$ 表示某篮球联赛球员的身高，并假设 $X$ 服从标准差为 $18\ \mathrm{cm}$ 的正态分布。从该联赛随机抽取 $81$ 名球员测量身高，所得样本均值为 $195\ \mathrm{cm}$。求该联赛球员平均身高的 $95\%$ 置信区间。可以使用：若随机变量 $Z$ 服从标准正态分布，则

$$
\Pr(Z\geq1.96)\approx0.025.
$$

## **Kai**

(a) (1)

$$
E[X] = \int_{-\infty}^{\infty} xf(x) dx = \int_0^1 x \cdot 1 dx = \left[ \frac{x^2}{2} \right]_0^1 = \frac{1}{2}
$$

$$
E[X^2] = \int_{-\infty}^{\infty} x^2f(x) dx = \int_0^1 x^2 \cdot 1 dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3}
$$

$$
Var[X] = E[X^2] - (E[X])^2 = \frac{1}{3} - \left(\frac{1}{2}\right)^2 = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}
$$

(2) Let $Y = 2X+1$ . $F_Y(y) = P(Y \leq y) = P(2X+1 \leq y) = P(X \leq \frac{y-1}{2}) = F_X(\frac{y-1}{2})$ .
Since $f_X(x) = 1$ for $0 \leq x \leq 1$ and $0$ otherwise,
$f_Y(y) = f_X(\frac{y-1}{2}) \cdot |\frac{dx}{dy}| = 1 \cdot \frac{1}{2} = \frac{1}{2}$ for $0 \leq \frac{y-1}{2} \leq 1$ , i.e., $1 \leq y \leq 3$ .
So,

$$
f_Y(y) = \begin{cases} \frac{1}{2} & 1 \leq y \leq 3, \\ 0 & \text{otherwise.} \end{cases}
$$

(3) Let $Y = X^2$ . $F_Y(y) = P(Y \leq y) = P(X^2 \leq y) = P(-\sqrt{y} \leq X \leq \sqrt{y})$ .
Since $0 \leq X \leq 1$ , $F_Y(y) = P(0 \leq X \leq \sqrt{y}) = F_X(\sqrt{y})$ .
Then, $f_Y(y) = f_X(\sqrt{y}) \cdot |\frac{dx}{dy}| = 1 \cdot \frac{1}{2\sqrt{y}} = \frac{1}{2\sqrt{y}}$ for $0<y<1$ .
So,

$$
f_Y(y) = \begin{cases} \frac{1}{2\sqrt{y}} & 0<y<1, \\ 0 & \text{otherwise.} \end{cases}
$$

The values assigned to a density at the endpoints do not affect the distribution; the formula $1/(2\sqrt y)$ itself is not defined at $y=0$ .

(4) Since X and Y are independent, and $f_X(x) = f_Y(x) = \begin{cases} 1 & 0 \leq x \leq 1, \\ 0 & \text{otherwise.} \end{cases}$ , let $Z = X-Y$ .  The probability density function of Z, $f_Z(z)$ is given by the convolution of $f_X(x)$ and $f_Y(-y)$ .

$$
f_Z(z) = \int_{-\infty}^{\infty} f_X(x) f_Y(x-z) dx
$$

If $0 \leq x \leq 1$ and $0 \leq x-z \leq 1$ , then $z \leq x \leq z+1$ .
Then, when $-1 \leq z \leq 0$ :

$$
f_Z(z) = \int_0^{z+1} 1 dx = z+1
$$

When $0 \leq z \leq 1$ :

$$
f_Z(z) = \int_z^1 1 dx = 1-z
$$

So,

$$
f_Z(z) = \begin{cases} 1+z & -1 \leq z \leq 0, \\ 1-z & 0 \leq z \leq 1, \\ 0 & \text{otherwise.} \end{cases}
$$

(5) $P(X \geq Y) = \int_0^1 \int_0^x f_X(x)f_Y(y) dy dx = \int_0^1 \int_0^x 1 \cdot 1 dy dx = \int_0^1 [y]_0^x dx = \int_0^1 x dx = [\frac{x^2}{2}]_0^1 = \frac{1}{2}$ .
(b) Given the sample mean $\bar{X} = 195$ cm, the sample size $n = 81$ , and the standard deviation $\sigma = 18$ cm.  The 95% confidence interval for the mean height is given by $\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$ , where $z_{\alpha/2}$ is the z-score corresponding to $\alpha/2$ . Since $P(Z \geq 1.96) \approx 0.025$ , we have $z_{0.025} = 1.96$ .
The confidence interval is $195 \pm 1.96 \cdot \frac{18}{\sqrt{81}} = 195 \pm 1.96 \cdot \frac{18}{9} = 195 \pm 1.96 \cdot 2 = 195 \pm 3.92$ .  Therefore, the 95% confidence interval for the mean height is $(191.08, 198.92)$ .
