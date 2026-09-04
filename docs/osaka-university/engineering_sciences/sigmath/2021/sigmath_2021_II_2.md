---
sidebar_label: "2021年度 数理科学 II [2]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
\lim_{n\to\infty}\int_0^\infty\frac{dx}{(1+x^3)(1+x^n)}
$$

を求めよ。

## **Kai**

$x\ne1$ において $1/(1+x^n)$ は $0<x<1$ で $1$、$x>1$ で $0$ に収束する。また被積分関数は可積分関数 $(1+x^3)^{-1}$ で支配される。優収束定理より極限は

$$
\int_0^1\frac{dx}{1+x^3}.
$$

部分分数分解

$$
\frac1{1+x^3}=\frac1{3(x+1)}+\frac{-x+2}{3(x^2-x+1)}
$$

を積分して

$$
\boxed{\frac{\log2}{3}+\frac\pi{3\sqrt3}}.
$$
