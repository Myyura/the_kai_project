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

### [1]

(1) 確率密度関数 $f(x)$ を持つ連続確率変数 $X$ の平均と分散を、$f(x)$ を用いて表せ。

(2) $X$ の確率密度関数が次のとき、平均と分散を求めよ。

$$
f(x)=\begin{cases}|x|&(-1\le x\le1),\\0&\text{それ以外}.\end{cases}
$$

### [2]

(1) $\lambda>0$ とする。連続確率変数 $X$ の累積分布関数が

$$
F_X(x)=\begin{cases}1-e^{-\lambda x}&(x\ge0),\\0&(x<0)\end{cases}
$$

のとき、確率密度関数を求めよ。

(2) $X,Y$ が独立で、どちらも (1) の累積分布関数を持つとき、$X-Y$ の確率密度関数を求めよ。

(3) (2) の $X-Y$ の平均と分散を求めよ。

#### 题目描述

**[1]** (1) 用连续随机变量 $X$ 的概率密度 $f(x)$ 表示其均值和方差。(2) 当 $f(x)=|x|$（$-1\le x\le1$）、区间外为0时，计算均值和方差。

**[2]** (1) 设 $\lambda>0$，$X$ 的分布函数在 $x\ge0$ 时为 $1-e^{-\lambda x}$，在 $x<0$ 时为0，求概率密度。(2) 若 $X,Y$ 独立且均服从此分布，求 $X-Y$ 的密度。(3) 求 $X-Y$ 的均值和方差。

## **Kai**

### [1] (1)

各積分が存在するとき、

$$
\boxed{\mu=E[X]=\int_{-\infty}^{\infty}xf(x)\,dx},\qquad
\boxed{\operatorname{Var}(X)=\int_{-\infty}^{\infty}(x-\mu)^2f(x)\,dx
=\int_{-\infty}^{\infty}x^2f(x)\,dx-\mu^2}.
$$

### [1] (2)

密度は偶関数なので $E[X]=0$ である。したがって

$$
\boxed{E[X]=0,\qquad\operatorname{Var}(X)=2\int_0^1x^3\,dx=\frac12}.
$$

### [2] (1)

分布関数を微分して、

$$
\boxed{f_X(x)=\begin{cases}\lambda e^{-\lambda x}&(x\ge0),\\0&(x<0).\end{cases}}
$$

一点 $x=0$ における密度の値は分布を変えない。

### [2] (2)

$Z=X-Y$ とおく。$x=z+y\ge0$、$y\ge0$ を満たす領域で独立性を用いれば、

$$
\begin{aligned}
f_Z(z)&=\int_{\max(0,-z)}^\infty f_X(z+y)f_Y(y)\,dy\\
&=\lambda^2e^{-\lambda z}\int_{\max(0,-z)}^\infty e^{-2\lambda y}\,dy\\
&=\boxed{\frac\lambda2e^{-\lambda|z|}\quad(-\infty<z<\infty)}.
\end{aligned}
$$

### [2] (3)

密度の偶対称性から平均は0。分散は

$$
\boxed{\operatorname{Var}(Z)=\lambda\int_0^\infty z^2e^{-\lambda z}\,dz=\frac2{\lambda^2}}.
$$

独立性より $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$ としても同じ結果を得る。

## **Reference**

- [大学公式問題（9ページ）](https://web.tuat.ac.jp/~tkakomon/r6/7.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E7%9F%A5%E8%83%BD%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2024%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_6.html)
