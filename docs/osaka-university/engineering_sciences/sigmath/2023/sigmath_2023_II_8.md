---
sidebar_label: "2023年度 数理科学 II [8]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[8\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数とする。独立同分布な実数値確率変数 $X_1,\ldots,X_n$ は $\mathbb R$ 上連続な密度 $f$ をもつ。指示関数 $I_A$ を $I_A(x)=1$ ($x\in A$)、$I_A(x)=0$ ($x\notin A$) と定め、$h>0,x\in\mathbb R$ に対して

$$
\widehat f_n(x;h)=\frac1{2nh}\sum_{i=1}^n I_{(x-h,x+h]}(X_i)
$$

と定める。

(1) $E[\widehat f_n(x;h)]$ と $V[\widehat f_n(x;h)]$ を求めよ。

(2) $h_n>0,h_n\to0$ のとき $\lim_nE[\widehat f_n(x;h_n)]$ を求めよ。

(3) $h_n\to0,nh_n\to\infty$ のとき、$\widehat f_n(x;h_n)$ は $f(x)$ の一致推定量であることを示せ。

## **Kai**

### (1)
$p_h=\int_{x-h}^{x+h}f(u)\,du$ とおくと指示変数は独立な $\operatorname{Bernoulli}(p_h)$ に従う。したがって

$$
\boxed{E[\widehat f_n(x;h)]=\frac{p_h}{2h},\qquad
V[\widehat f_n(x;h)]=\frac{p_h(1-p_h)}{4nh^2}}.
$$

### (2)
連続性から

$$
\left|\frac1{2h_n}\int_{x-h_n}^{x+h_n}f(u)\,du-f(x)\right|
\le\sup_{|u-x|\le h_n}|f(u)-f(x)|\to0.
$$

ゆえに極限は $\boxed{f(x)}$。

### (3)
(1) より

$$
V[\widehat f_n(x;h_n)]\le\frac1{2nh_n}\frac{p_{h_n}}{2h_n}\longrightarrow0
$$

である。 (2) からバイアスも $0$ に収束するので平均二乗誤差が $0$ に収束する。Markov の不等式により $\widehat f_n(x;h_n)\xrightarrow{P}f(x)$。
