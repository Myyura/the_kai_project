---
sidebar_label: "2021年度 数理科学 II [9]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[9\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\mu>0$ とし、独立な $X_1,\ldots,X_n$ は密度

$$
f(x;\mu)=\begin{cases}\dfrac\mu{\sqrt{2\pi x^3}}\exp\left\{-\dfrac12\left(\sqrt x-\dfrac\mu{\sqrt x}\right)^2\right\}&x>0,\\0&x\le0\end{cases}
$$

をもつ。$\alpha=1/\mu+1/\mu^2$ とおく。

(1) $\alpha$ の最尤推定量 $\widehat\alpha$ を求めよ。調和平均 $S_n=(n^{-1}\sum_iX_i^{-1})^{-1}$ を用いてよい。

(2) $t<\mu^2/2$ について

$$
E[e^{t/X_1}]=\frac\mu{\sqrt{\mu^2-2t}}\exp(\mu-\sqrt{\mu^2-2t})
$$

を示せ。

(3) $\widehat\alpha$ は $\alpha$ の不偏推定量であることを示せ。

## **Kai**

### (1)
定数項を除く対数尤度は

$$
\ell(\mu)=n\log\mu+n\mu-\frac{n\mu^2}{2S_n}.
$$

$\ell''(\mu)=-n/\mu^2-n/S_n<0$ なので、唯一の最大点は

$$
\widehat\mu=\frac{S_n+\sqrt{S_n^2+4S_n}}2.
$$

スコア方程式より $1/\widehat\mu+1/\widehat\mu^2=1/S_n$。ゆえに

$$
\boxed{\widehat\alpha=\frac1n\sum_{i=1}^n\frac1{X_i}}.
$$

### (2)
$a=\sqrt{\mu^2-2t}>0$ とおくと、$x>0$ で

$$
e^{t/x}f(x;\mu)=\frac\mu a e^{\mu-a}f(x;a).
$$

両辺を積分し、$f(\cdot;a)$ の積分が $1$ であることを用いれば所定の式を得る。

### (3)
(2) の母関数を $t=0$ で微分して

$$
E[X_1^{-1}]=\left.\frac d{dt}E[e^{t/X_1}]\right|_{t=0}
=\frac1\mu+\frac1{\mu^2}=\alpha.
$$

よって $E[\widehat\alpha]=\alpha$。
