---
sidebar_label: "2023年度 数理科学 II [1]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $f(x)=1-x^2$ ($|x|\le1$)、$f(x)=0$ ($|x|>1$)、$g(x)=e^{-|x|}$ とする。$I_n=\int_{\mathbb R}f(x-n)g(x)\,dx$ に対して $I_n\to0$ を示せ。

(2) $F,G$ は実数値連続関数で $\int_{\mathbb R}|F|<\infty$、$\lim_{|x|\to\infty}G(x)=0$ を満たし、実数列 $a_n\to\infty$ とする。$J_n=\int_{\mathbb R}F(x-a_n)G(x)\,dx$ とおく。

(a) 各 $J_n$ は有限値であることを示せ。

(b) $J_n\to0$ を示せ。

## **Kai**

### (1)
$n\ge1$ のとき $f(x-n)$ の台は $[n-1,n+1]$ にあり、$0\le f\le1$。したがって

$$
0\le I_n\le\int_{n-1}^{n+1}e^{-x}\,dx\le2e^{-(n-1)}\longrightarrow0.
$$

### (2)
(a) $G$ は連続で無限遠で $0$ になるから有界である。$M=\sup|G|<\infty$ とすると

$$
\int|F(x-a_n)G(x)|\,dx\le M\int|F(u)|\,du<\infty.
$$

(b) $u=x-a_n$ と変換して $J_n=\int F(u)G(u+a_n)\,du$。各 $u$ で $G(u+a_n)\to0$、絶対値は可積分な $M|F(u)|$ 以下なので、優収束定理より $J_n\to0$。
