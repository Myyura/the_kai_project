---
sidebar_label: "2022年度 統計学・計量経済学 第2題 1"
tags:
  - Hitotsubashi-University
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Negative-Binomial-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Law-of-Large-Numbers
---
# 一橋大学 経済学研究科 2022年度 統計学・計量経済学 第2題 1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の (a) から (c) のすべてに答えよ。導出過程は省略しないこと。

### (a)
$X_1,X_2,X_3$ を独立な標準指数分布に従う確率変数とし、順序統計量を
$X_{(1)}\le X_{(2)}\le X_{(3)}$ とする。

1. $X_{(1)}$ の分布関数と密度関数を求めよ。
2. $X_{(2)}$ の分布関数と密度関数を求めよ。
3. $P(X_{(2)}\le\log2)$ を求めよ。

### (b)

$$
P(Y=y)=\binom{y+r-1}{r-1}p^r(1-p)^y\qquad(y=0,1,\ldots)
$$

について、$r$ を正の整数、$0<p<1$ とする。積率母関数を求め、$E[Y],V[Y]$ を求めよ。

### (c)
$X_1,\ldots,X_n$ を平均 $\mu$、分散 $\sigma^2$ の母集団からの無作為標本とする
（$|\mu|<\infty,\ 0<\sigma^2<\infty$）。
$\overline X_n=n^{-1}\sum_{i=1}^nX_i$ が $\mu$ に確率収束することを示せ。

## **Kai**

### (a)
$x>0$ とする。

#### (i)

$$
F_{X_{(1)}}(x)=1-P(X_1>x)^3=1-e^{-3x},
$$

$$
\boxed{f_{X_{(1)}}(x)=3e^{-3x}}.
$$

なお $x\le0$ では両者とも $0$ である。

#### (ii)
$F(x)=1-e^{-x}$ とおくと

$$
F_{X_{(2)}}(x)=F(x)^3+3F(x)^2(1-F(x))
=(1-e^{-x})^2(1+2e^{-x}),
$$

$$
\boxed{f_{X_{(2)}}(x)=6e^{-2x}(1-e^{-x})}.
$$

なお $x\le0$ では両者とも $0$ である。

#### (iii)

$$
\boxed{P(X_{(2)}\le\log2)=\left(1-\frac12\right)^2(1+1)=\frac12}.
$$

### (b)
$z=(1-p)e^t$ とおけば

$$
M_Y(t)=p^r\sum_{y=0}^{\infty}\binom{y+r-1}{r-1}z^y
=\boxed{\left(\frac{p}{1-(1-p)e^t}\right)^r},
$$

ただし $t<\log\dfrac1{1-p}$ である。$M_Y'(0),M_Y''(0)$ より

$$
\boxed{E[Y]=\frac{r(1-p)}p},\qquad
\boxed{V[Y]=\frac{r(1-p)}{p^2}}.
$$

### (c)

$$
E[\overline X_n]=\mu,\qquad V[\overline X_n]=\frac{\sigma^2}{n}.
$$

任意の $\varepsilon>0$ に対し、Chebyshev の不等式より

$$
P(|\overline X_n-\mu|\ge\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}\longrightarrow0.
$$

よって $\boxed{\overline X_n\xrightarrow{p}\mu}$ である。

## **Reference**

- [一橋大学 経済学研究科 過去の入試問題](https://www.econ.hit-u.ac.jp/jpn/page/examinee/graduate_admissions/past_exam.html)
- [一橋大学 2022年度修士課程入学試験「経済学」](https://www1.econ.hit-u.ac.jp/office/bosyu/kakomon/kakomon_s2022.pdf)
