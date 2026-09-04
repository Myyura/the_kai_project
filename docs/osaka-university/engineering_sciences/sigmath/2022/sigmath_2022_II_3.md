---
sidebar_label: "2022年度 数理科学 II [3]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) 実数値関数列 $f_n$ は、ある $M>0$ に対して $|f_{n+1}(x)|\le M|f_n(x)|$ を全 $x\in\mathbb R,n\ge1$ で満たす。各 $x$ に対して $\sum_{n=1}^\infty f_n(x)/n!$ が収束することを示せ。

(2)

$$
g_n(x)=\begin{cases}(-1)^{n/2}\int_0^xt^n\,dt&n\text{ は偶数},\\
(-1)^{(n-1)/2}\int_0^xt^n\,dt&n\text{ は奇数}\end{cases}
$$

とする。$\sum_{n=1}^\infty g_n(\pi/2)/n!$ を求めよ。

## **Kai**

### (1)
帰納法より $|f_n(x)|\le M^{n-1}|f_1(x)|$。よって

$$
\sum_{n=1}^\infty\frac{|f_n(x)|}{n!}
\le\frac{|f_1(x)|}{M}(e^M-1)<\infty.
$$

### (2)
正弦・余弦の級数は $[0,\pi/2]$ 上一様収束するから項別積分できる。偶数 $n\ge2$ の和が $\cos t-1$、奇数 $n\ge1$ の和が $\sin t$ を与えるので

$$
\sum_{n=1}^\infty\frac{g_n(\pi/2)}{n!}
=\int_0^{\pi/2}(\cos t-1+\sin t)\,dt
=\boxed{2-\frac\pi2}.
$$
