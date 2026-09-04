---
sidebar_label: "2020年2月実施 専門基礎科目 第3問"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年2月実施 専門基礎科目 第3問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3. 以下の問いに答えよ. [Solve the following problems.]

(a) 連続確率変数X,Yは以下の結合確率密度関数を持つとする. [Suppose that continuous random variables X and Y have the following joint probability density function.]

$$
f(x,y) = \frac{\sqrt{3}}{2\pi} e^{-x^2-y^2-xy}
$$

(1) Xの周辺確率密度関数 f(x)を求めよ。なお、以下の関係式 $\sqrt{\pi} = \int_{-\infty}^{\infty} e^{-z^2} dz$ を用いて良い。[Find the marginal probability density function f(x) of X. Here, you can use the following relation, $\sqrt{\pi} = \int_{-\infty}^{\infty} e^{-z^2} dz$ ]
(2) Xの実現値が与えられたときのYの条件付き確率密度関数 f(y|X = x) を求めよ. [Find the conditional probability density function f(y|X = x) of Y given the occurrence value x of X.]
(3) XとYは独立かどうか答えよ、理由も説明せよ. [Answer whether X and Y are independent or not. Give the reason.]

(b) 確率変数Xが平均 $\mu$ と分散 $\sigma^2$ を持つとする。このとき、任意の実数 $t>0$ について、チェビシェフの不等式が成り立つ. [Let X be a random variable with mean $\mu$ and variance $\sigma^2$ . Then, Chebyshev's inequality holds for any real value $t>0$.]

$$
Pr(|X - \mu| \geq t) \leq \frac{\sigma^2}{t^2}
$$

(1) 確率変数Yが平均700,分散100を持つとする。このとき、Yが500より大きく900より小さくなる確率は少なくともcである.cの値を求めよ. [Suppose that a random variable Y has mean 700 and variance 100. Then, the probability that Y is greater than 500 and smaller than 900 is at least c. Find the value of c.]
(2) $Z = (X_1+...+X_n)/n$ は独立同一分布である確率変数 $X_1,..., X_n$ の平均であり, $X_i$ $(i = 1,...,n)$ はどれも同じ平均 $\mu$ と分散 $\sigma^2$ を持つとする。Zについてチェビシェフの不等式を求めよ. [Let Z = $(X_1+...+ X_n)/n$ be the average of independent and identically distributed random variables $X_1,..., X_n$ , where any of $X_i$ $(i = 1,...,n)$ has the same mean $\mu$ and variance $\sigma^2$ . Find Chebyshev's inequality for Z.]

### 题目描述

3. 回答下列问题。

(a) 设连续随机变量 $X,Y$ 的联合概率密度函数为

$$
f(x,y)=\frac{\sqrt3}{2\pi}e^{-x^2-y^2-xy}.
$$

(1) 求 $X$ 的边缘概率密度函数 $f_X(x)$。可以使用关系式

$$
\sqrt\pi=\int_{-\infty}^{\infty}e^{-z^2}\,dz.
$$

(2) 在给定 $X$ 的实现值为 $x$ 时，求 $Y$ 的条件概率密度函数

$$
f_{Y\mid X}(y\mid X=x).
$$

(3) 判断 $X,Y$ 是否相互独立，并说明理由。

(b) 设随机变量 $X$ 的均值为 $\mu$、方差为 $\sigma^2$。已知对任意实数 $t>0$，Chebyshev 不等式成立：

$$
\Pr(|X-\mu|\geq t)\leq\frac{\sigma^2}{t^2}.
$$

(1) 设随机变量 $Y$ 的均值为 $700$、方差为 $100$。已知 $Y$ 大于 $500$ 且小于 $900$ 的概率至少为 $c$，求 $c$。

(2) 令

$$
Z=\frac{X_1+\cdots+X_n}{n}
$$

为相互独立且同分布的随机变量 $X_1,\dots,X_n$ 的平均值，其中每个 $X_i$（$i=1,\dots,n$）均具有相同的均值 $\mu$ 和方差 $\sigma^2$。写出关于 $Z$ 的 Chebyshev 不等式。

## **Kai**

(a)
(1) To find the marginal probability density function $f(x)$ , we need to integrate the joint probability density function $f(x,y)$ with respect to $y$ over the entire range.

$$
f(x) = \int_{-\infty}^{\infty} f(x,y) dy = \int_{-\infty}^{\infty} \frac{\sqrt{3}}{2\pi} e^{-x^2-y^2-xy} dy
$$

$$
f(x) = \frac{\sqrt{3}}{2\pi} e^{-x^2} \int_{-\infty}^{\infty} e^{-y^2-xy} dy = \frac{\sqrt{3}}{2\pi} e^{-x^2} \int_{-\infty}^{\infty} e^{-(y + \frac{x}{2})^2 + (\frac{x}{2})^2} dy
$$

$$
f(x) = \frac{\sqrt{3}}{2\pi} e^{-x^2 + \frac{x^2}{4}} \int_{-\infty}^{\infty} e^{-(y + \frac{x}{2})^2} dy = \frac{\sqrt{3}}{2\pi} e^{-\frac{3x^2}{4}} \sqrt{\pi}
$$

$$
f(x) = \frac{\sqrt{3}}{2\sqrt{\pi}} e^{-\frac{3x^2}{4}}
$$

(2) To find the conditional probability density function $f(y|X=x)$ , we use the formula $f(y|X=x) = \frac{f(x,y)}{f(x)}$

$$
f(y|X=x) = \frac{\frac{\sqrt{3}}{2\pi} e^{-x^2-y^2-xy}}{\frac{\sqrt{3}}{2\sqrt{\pi}} e^{-\frac{3x^2}{4}}} = \frac{1}{\sqrt{\pi}} e^{-x^2-y^2-xy + \frac{3x^2}{4}} = \frac{1}{\sqrt{\pi}} e^{-\frac{x^2}{4} - y^2 - xy}
$$

$$
f(y|X=x) = \frac{1}{\sqrt{\pi}} e^{-(y + \frac{x}{2})^2}
$$

(3) $X$ and $Y$ are not independent. If $X$ and $Y$ were independent, then $f(x,y) = f(x)f(y)$ . In this case, $f(x,y) = \frac{\sqrt{3}}{2\pi} e^{-x^2-y^2-xy}$ and $f(x) = \frac{\sqrt{3}}{2\sqrt{\pi}} e^{-\frac{3x^2}{4}}$ . Since the joint density function cannot be expressed as the product of the individual marginal density functions, $X$ and $Y$ are dependent.

(b)
(1) Given that $E[Y] = 700$ and $Var(Y) = 100$ , we want to find the value of $c$ such that $P(500 < Y < 900) \geq c$ . We can rewrite the probability as $P(500 < Y < 900) = P(-200 < Y - 700 < 200) = P(|Y - 700| < 200)$ .
Using Chebyshev's inequality, we have $P(|Y - \mu| \geq t) \leq \frac{\sigma^2}{t^2}$ . Thus,

$$
P(|Y - 700| \geq 200)
\leq \frac{100}{200^2}
=\frac{100}{40000}
=\frac{1}{400}.
$$

Therefore,

$$
P(500<Y<900)
=P(|Y-700|<200)
\geq 1-\frac{1}{400}
=\frac{399}{400}
=0.9975.
$$

So, $c=0.9975$ .

(2) Given $Z = \frac{X_1 + ... + X_n}{n}$ , where $X_i$ are i.i.d. with mean $\mu$ and variance $\sigma^2$ . Then $E[Z] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} \cdot n\mu = \mu$ , and $Var(Z) = \frac{1}{n^2} \sum_{i=1}^n Var(X_i) = \frac{1}{n^2} \cdot n\sigma^2 = \frac{\sigma^2}{n}$ .
Using Chebyshev's inequality for $Z$ , we have:
$P(|Z - \mu| \geq t) \leq \frac{Var(Z)}{t^2} = \frac{\sigma^2}{nt^2}$ .
