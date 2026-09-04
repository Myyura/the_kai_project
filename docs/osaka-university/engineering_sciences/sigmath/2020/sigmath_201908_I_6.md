---
sidebar_label: "2019年8月実施 数理科学 I [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Bayesian-Statistics.Poisson-Gamma-Conjugacy
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Negative-Binomial-Distribution
  - Mathematics.Calculus.Gamma-Function
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[6\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

正整数 $n$ と $\beta>0$ に対し、$Y$ は密度

$$
f(y)=\begin{cases}\dfrac{\beta^n}{\Gamma(n)}y^{n-1}e^{-\beta y}&y\ge0,\\0&y<0\end{cases}
$$

をもつ。$\Gamma(n)=\int_0^\infty x^{n-1}e^{-x}\,dx$、$\Gamma(n+1)=n\Gamma(n)$ である。また

$$
P(X=x\mid Y=y)=\frac{y^x}{x!}e^{-y},\qquad x=0,1,2,\ldots
$$

とし、$p=(\beta+1)^{-1}$ とおく。

(1) $P(X=x)=\binom{x+n-1}{x}p^x(1-p)^n$ を示せ。

(2) $E[X]$ を $p,n$ で表せ。

(3) $E[Y\mid X=x]$ を $p,n,x$ で表せ。

## **Kai**

### (1)
$\Gamma(n)=(n-1)!$ より

$$
\begin{aligned}
P(X=x)&=\frac{\beta^n}{x!\Gamma(n)}\int_0^\infty y^{x+n-1}e^{-(\beta+1)y}\,dy\\
&=\frac{\Gamma(x+n)\beta^n}{x!\Gamma(n)(\beta+1)^{x+n}}
=\boxed{\binom{x+n-1}{x}p^x(1-p)^n}.
\end{aligned}
$$

### (2)

$$
\boxed{E[X]=E[E[X\mid Y]]=E[Y]=\frac n\beta=\frac{np}{1-p}}.
$$

### (3)
ベイズの公式から、$Y\mid X=x$ は形状 $n+x$、率 $\beta+1$ のガンマ分布に従う。したがって

$$
\boxed{E[Y\mid X=x]=\frac{n+x}{\beta+1}=(n+x)p}.
$$
