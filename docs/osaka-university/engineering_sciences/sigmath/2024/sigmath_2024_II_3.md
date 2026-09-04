---
sidebar_label: "2024年度 数理科学 [II-3]"
tags:
  - Osaka-University
  - Mathematics.Functional-Analysis
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-3]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
X=\left\{f:\mathbb N\to\mathbb R\;\middle|\;\sum_{n=1}^\infty f(n)^2<\infty\right\},\qquad
\|f\|=\left(\sum_{n=1}^\infty f(n)^2\right)^{1/2}
$$

とする。

(1) $f,g\in X$ が $\|f\|=\|g\|=1$ を満たすとき $\sum_n f(n)g(n)$ が収束し、$|\sum_nf(n)g(n)|\le1$ となることを示せ。

(2) 任意の $f,g\in X$ に対し同級数の収束と $|\sum_nf(n)g(n)|\le\|f\|\|g\|$ を示せ。

(3) $f,g\in X$ なら $f+g\in X$ を示せ。

(4) $f_m,f\in X$ が (a) $\|f_m\|\to\|f\|$、(b) 任意の $g\in X$ に対して $\sum_n(f_m(n)-f(n))g(n)\to0$ を満たすとき、$\|f_m-f\|\to0$ を示せ。

## **Kai**

### (1)

$2|f(n)g(n)|\le f(n)^2+g(n)^2$ より

$$
\sum_{n=1}^N|f(n)g(n)|\le\frac12\sum_{n=1}^N\{f(n)^2+g(n)^2\}\le1.
$$

従って絶対値の部分和は単調増加かつ有界なので収束する。元の級数は絶対収束し、その和の絶対値も1以下である。

### (2)

$f=0$ または $g=0$ の場合は自明。それ以外では $f/\|f\|$, $g/\|g\|$ に(1)を適用して両辺に $\|f\|\|g\|$ を掛ければよい。

### (3)

$$
(f(n)+g(n))^2\le2f(n)^2+2g(n)^2
$$

より二乗和は有限であり、$f+g\in X$。

### (4)

内積を $\langle f,g\rangle=\sum_nf(n)g(n)$ と書く。(b)で $g=f$ とおけば $\langle f_m,f\rangle\to\|f\|^2$。従って

$$
\|f_m-f\|^2=\|f_m\|^2+\|f\|^2-2\langle f_m,f\rangle\longrightarrow0.
$$
