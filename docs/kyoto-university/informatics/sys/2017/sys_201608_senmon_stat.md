---
sidebar_label: "2016年8月実施 専門科目 確率統計"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 システム科学専攻 2016年8月実施 専門科目 確率統計

## **Author**
uogxtc

## **Description**
### 問題1
下記の確率密度関数にしたがう確率変数 $X$ について、以下の設問に答えよ。
ただし、$\alpha > 0$, $\beta > 0$ はパラメータ（母数）である。

$$
f(x) = \begin{cases} 
\frac{\alpha x^{\alpha-1}}{\beta^\alpha} \exp \left( - \left( \frac{x}{\beta} \right)^\alpha \right) & (x > 0) \\
0 & (x \leq 0) 
\end{cases}
$$

(1) 確率変数 $X$ の平均を、以下のガンマ関数とパラメータを用いて表せ。

$$
\Gamma(\theta) = \int_0^\infty x^{\theta-1} e^{-x} dx \quad (\theta > 0)
$$

(2) 確率密度関数 $f(x)$ が規定する確率分布から、大きさ $n$ の無作為標本

$$
\{X_1, X_2, \ldots, X_n\}
$$

が得られたとする。このとき、パラメータ $\alpha = \alpha_0$ を既知として、パラメータ $\beta$ の最尤推定量を求めよ。

### 問題2
以下の設問に答えよ。

(1) $X_1, X_2, \ldots, X_n$ を、独立かつ同一の確率分布（確率密度関数を $f(x)$、累積分布関数を $F(x)$ とする）にしたがう確率変数とする。
このとき、$X_1, X_2, \ldots, X_n$ の最小値

$$
Z = \min(X_1, X_2, \ldots, X_n)
$$

もまた確率変数となるが、その確率密度関数 $g(z)$ を $f$ と $F$ を用いて表せ。

(2) 設問 (1) の $X_1, X_2, \ldots, X_n$ の確率分布が区間 $[0, b]$ の一様分布 $(b > 0)$ であるとき、

$$
Z = \min(X_1, X_2, \ldots, X_n)
$$

の期待値を求めよ。

### 問題3
以下の設問に答えよ。

(1) 半径 $a$ の円 $C$ 内に、2 点 $A,B$ を独立かつそれぞれ円 $C$ 内の一様分布にしたがうようにとる。
$AB$ 間の距離を $R$ としたとき、$R^2$ の期待値を求めよ。

(2) 設問 (1) において、点 $A$ を中心とし $AB$ 間の距離 $R$ を半径とする円が、円 $C$ 内に全て含まれる確率を求めよ。


## **Kai**
### 問題1
(Readers may refer to Weibull distribution.)

#### (1)
$$
\begin{aligned}
\mathbb{E}[X]&=\int_0^\infty xf(x)dx\\
&=\int_0^\infty\alpha\left(\frac x\beta\right)^\alpha e^{-\left(\frac x\beta\right)^\alpha}dx.
\end{aligned}
$$

Let $u=\left(\frac x\beta\right)^\alpha$ and we have

$$
\begin{aligned}
&\beta u^{1/\alpha}=x \\
&dx=\frac\beta\alpha u^{\frac1\alpha-1}du,
\end{aligned}
$$

Then

$$
\begin{aligned}
\mathbb{E}[X]&=\beta\int_{0}^{\infty}u^{\frac{1}{\alpha}}e^{-u}du\\
&=\beta\Gamma\left(\frac{1}{\alpha}+1\right).
\end{aligned}
$$

#### (2)
The likelihood function is

$$
L(\beta)=\prod_{i=1}^n\frac{\alpha_0X_i^{\alpha_0-1}}{\beta^{\alpha_0}}e^{-\left(\frac{x}{\beta}\right)^{\alpha_0}},
$$

from which we know that the log-likelihood function is

$$
\log L=n\log\alpha_{0}-n\alpha_{0}\log\beta+(\alpha_{0}-1)\sum_{i=1}^{n}\log X_{i}-\sum_{i=1}^{n}\left(\frac{X_{i}}{\beta}\right)^{\alpha_{0}}.
$$

By setting $\frac{\partial\log L}{\partial\beta}=0$, we get

$$
\begin{aligned}
&-\:\frac{n\alpha_{0}}{\beta}-\sum_{i=1}^{n}\left(\frac{X_{i}}{\beta}\right)^{\alpha_{0}-1} \left(-\frac{1}{\beta^{2}}\right)=0,\\
&\Rightarrow\quad\hat{\beta}=\left(\frac{\sum_{i-1}^{n}X_{i}^{\alpha_{0}-1}}{n\alpha_{0}}\right)^{1/\alpha_{0}}.
\end{aligned}
$$

### 問題2
#### (1)
(The problems of the CDF/PDF of min/max of $i.i.d.$ random variables are commonly seen in the exams.)

The cumulative distribution function (CDF, 累積分布関数) of $Z$ is as follows:

$$
\begin{aligned}
\Pr(Z<s)&=1-\Pr(Z\geq s)\\
&=1-\Pr(X_1\geq s,\ldots,X_n\geq s)\\
&=1-\prod_{i=1}^n\left(1-F(s)\right)\\
&=1-\left(1-F(s)\right)^n.
\end{aligned}
$$

The probability density function (PDF,確率密度関数) is

$$
f_Z(s)=\frac{d\Pr(Z<s)}{ds}=n(1-F(s))^{n-1}f(s).
$$

#### (2)
The PDF of $X_i$ is

$$
f(x)=\begin{cases}
1/b,&\text{if }\ 0<x<b \\
0,&\text{otherwise.}
\end{cases}
$$

Then,

$$
\begin{aligned}
\mathbb{E}[Z]&=\int_0^bxf_Z(x)dx\\
&=\int_0^b\frac nbx\left(1-\frac xb\right)^{n-1}dx\\
&(\text{let }y=1-\frac xb)\\
&=\int_0^1\frac nb\cdot(b-by)y^{n-1}(-b)dy\\
&=\frac b{n+1}.
\end{aligned}
$$

### 問題3
#### (1)
Suppose that $A$ = $(r_A, \theta _A)$ and $B$ = $(r_B,\theta_B)$,  where $r_A,r_B \sim \text{Unif}(0,a)$ and $\theta_A,\theta_B \sim \text{Unif} ( 0, 2\pi ).$ 

Then

$$
R^2=r_A^2+r_B^2-2r_Ar_B\cos(\theta_A-\theta_B),
$$

$$
\begin{aligned}
\mathbb{E}[R^{2}]&=\frac{1}{2a^{2}\pi}\int_{0}^{a}\int_{0}^{a}\int_{0}^{2\pi}(r_{A}^{2}+r_{B}^{2}-2r_{A}r_{B}\cos\theta)\ d\theta \cdot r_{A}dr_{A}\cdot r_{B}dr_{B}\\
&=a^{4}/4.
\end{aligned}
$$

#### (2)
The probability is

$$
\frac{1}{\pi a^2}\int_0^a2\pi r\cdot \frac{(a-r)^2}{a^2}dr.
$$

Here $\frac{2\pi r}{\pi a^2}$ is the probability that $A$ lies in a circle centered with $C$ of radius $r$.

Suppose that the distance between $A$ and the center of the circle is $r$.
Then $B$ needs to lies in a circle whose center is $A$ and radius is $(a-r)^2$.
The probability of this event is $\frac{(a-r)^{2}}{a^{2}}$ since the $A,B$ are uniformly distributed on the circle.