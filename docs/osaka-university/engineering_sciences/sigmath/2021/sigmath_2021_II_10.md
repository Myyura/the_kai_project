---
sidebar_label: "2021年度 数理科学 II [10]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[10\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数とする。独立な $X_1,\ldots,X_n$ は平均 $\mu>0$ の指数分布、すなわち $f(x;\mu)=\mu^{-1}e^{-x/\mu}$ ($x>0$) に従う。

(1) $2X_i/\mu\sim\chi^2_2$ を用い、$W=(2/\mu)\sum_{i=1}^nX_i$ の分布を求めよ。ただし、自由度 $n$ のカイ二乗分布の密度は

$$
g(x;n)=\begin{cases}
\dfrac{x^{n/2-1}e^{-x/2}}{\Gamma(n/2)2^{n/2}}&x>0,\\
0&x\le0,
\end{cases}
$$

であり、$\Gamma(a)=\int_0^\infty x^{a-1}e^{-x}\,dx$ ($a>0$) はガンマ関数である。

$0<\alpha<1$、$\mu_0>0$ とする。

(2) $H_0:\mu=\mu_0$、$H_1:\mu<\mu_0$ の有意水準 $\alpha$ の検定について、$W_0=(2/\mu_0)\sum_iX_i$ による棄却域を定めよ。

(3) $10$ 個の製品の平均寿命は $400$ 時間、表示寿命は $500$ 時間であった。$H_0:\mu=500$、$H_1:\mu<500$ を有意水準 $5\%$ で検定し、結論を述べよ。$\chi_m^2(a)$ は上側 $100a\%$ 点として、次を用いてよい。

| $m$ | 9 | 10 | 18 | 20 |
|---|---:|---:|---:|---:|
| $\chi_m^2(0.05)$ |16.92|18.31|28.87|31.41|
| $\chi_m^2(0.95)$ |3.33|3.94|9.39|10.85|

## **Kai**

### (1)
独立なカイ二乗変数の和では自由度が加算されるので $\boxed{W\sim\chi^2_{2n}}$。

### (2)
対立仮説では寿命の和が小さくなるので下側で棄却する。したがって

$$
\boxed{R=\{W_0\le\chi^2_{2n}(1-\alpha)\}}.
$$

帰無仮説下でこの確率は $\alpha$ である。

### (3)

$$
W_0=\frac2{500}(10\cdot400)=16,\qquad\chi^2_{20}(0.95)=10.85.
$$

$16>10.85$ なので帰無仮説は棄却されない。平均寿命が $500$ 時間を下回ると結論するには、有意水準 $5\%$ で十分な証拠がない。
