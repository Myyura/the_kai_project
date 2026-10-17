---
sidebar_label: "2023年8月実施 [6]"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Basics.Convolution-of-Independent-Random-Variables
---

# 東京農工大学 工学府 2023年8月実施 知能情報システム工学専攻 専門科目 [6]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E7%9F%A5%E8%83%BD%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2024%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_6.html) refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ。ただし，確率変数を大文字 $X$，実現値を小文字 $x$（$\in\mathbb{R}$）を用いて表す。また，$e$ は自然対数の底とする。解答欄には答えのみ示せ。

### [1]

確率密度関数 $f(x)$ に従う確率変数 $X$ に関する以下の問いに答えよ。

(1) 確率変数 $X$ の平均の計算式を，$x$ と $f(x)$ を用いて表せ。また，平均が $\mu_x$ で与えられるときの分散の計算式を，$x$，$\mu_x$，$f(x)$ を用いて示せ。

(2) 以下の確率密度関数 $f(x)$ に従う確率変数 $X$ の平均と分散を求めよ。

$$
f(x)=\begin{cases}|x|&(|x|\leq1),\\0&(|x|>1).\end{cases}
$$

### [2]

指数分布に関する以下の問いに答えよ。

(1) 指数分布の累積分布関数 $F(x)$ は以下の式で与えられる。確率密度関数 $f(x)$ を求めよ。ここで $\lambda$ は指数分布のパラメータであり，正の定数とする。

$$
F(x)=P\{X\leq x\}=\begin{cases}1-e^{-\lambda x}&(x\geq0),\\0&(x<0).\end{cases}
$$

(2) 互いに独立な確率変数 $X_1$ と $X_2$ が同一のパラメータ $\lambda$（正の定数）の指数分布に従うとき，$X=X_1-X_2$ の確率密度関数 $h(x)$ を求めよ。

(3) (2)で求めた確率密度関数 $h(x)$ に従う確率変数 $X$ の平均と分散を求めよ。

#### 题目描述

回答以下问题。用大写 $X$ 表示随机变量，小写 $x$（$\in\mathbb{R}$）表示其实现值。$e$ 为自然对数的底，答题栏只须写出答案。

**[1]** 对概率密度函数为 $f(x)$ 的随机变量 $X$，回答以下问题。

(1) 用 $x$ 和 $f(x)$ 表示随机变量 $X$ 的均值计算式。均值为 $\mu_x$ 时，用 $x$、$\mu_x$ 和 $f(x)$ 表示方差计算式。

(2) 求概率密度函数如下的随机变量 $X$ 的均值和方差：

$$
f(x)=\begin{cases}|x|&(|x|\leq1),\\0&(|x|>1).\end{cases}
$$

**[2]** 回答以下关于指数分布的问题。

(1) 指数分布的累积分布函数 $F(x)$ 如下。求概率密度函数 $f(x)$。其中 $\lambda$ 为指数分布的参数，是正常数。

$$
F(x)=P\{X\leq x\}=\begin{cases}1-e^{-\lambda x}&(x\geq0),\\0&(x<0).\end{cases}
$$

(2) 相互独立的随机变量 $X_1$、$X_2$ 均服从参数为 $\lambda$（正常数）的指数分布。求 $X=X_1-X_2$ 的概率密度函数 $h(x)$。

(3) 求服从第(2)问所得密度 $h(x)$ 的随机变量 $X$ 的均值和方差。

## **Kai**

### [1] (1)

各積分が存在するとき、

$$
\begin{gathered}
\boxed{\mu_x=E[X]=\int_{-\infty}^{\infty}xf(x)\,dx},\\
\boxed{\operatorname{Var}(X)=\int_{-\infty}^{\infty}(x-\mu_x)^2f(x)\,dx
=\int_{-\infty}^{\infty}x^2f(x)\,dx-\mu_x^2}.
\end{gathered}
$$

### [1] (2)

密度は偶関数なので $E[X]=0$ である。したがって

$$
\boxed{\begin{gathered}
E[X]=0,\\
\operatorname{Var}(X)=2\int_0^1x^3\,dx=\frac12
\end{gathered}}.
$$

### [2] (1)

分布関数を微分して、

$$
\boxed{f(x)=\begin{cases}\lambda e^{-\lambda x}&(x\ge0),\\0&(x<0).\end{cases}}
$$

一点 $x=0$ における密度の値は分布を変えない。

### [2] (2)

$X=X_1-X_2$ とおく。$X_2$ の実現値を $u$ とすれば，$X_1$ の実現値は $x+u$ である。$x+u\geq0$，$u\geq0$ を満たす領域で独立性を用いれば，

$$
\begin{aligned}
h(x)&=\int_{\max(0,-x)}^\infty f(x+u)f(u)\,du\\
&=\lambda^2e^{-\lambda x}\int_{\max(0,-x)}^\infty e^{-2\lambda u}\,du\\
&=\boxed{\frac\lambda2e^{-\lambda|x|}\quad(-\infty<x<\infty)}.
\end{aligned}
$$

### [2] (3)

密度の偶対称性から $E[X]=0$。分散は

$$
\boxed{\operatorname{Var}(X)=\lambda\int_0^\infty x^2e^{-\lambda x}\,dx=\frac2{\lambda^2}}.
$$

独立性より $\operatorname{Var}(X_1-X_2)=\operatorname{Var}(X_1)+\operatorname{Var}(X_2)$ としても同じ結果を得る。

## **Reference**

- [大学公式問題（9ページ）](https://web.tuat.ac.jp/~tkakomon/r6/7.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E7%9F%A5%E8%83%BD%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2024%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_6.html)
