---
sidebar_label: "2021年度 数理科学 II [3]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\mathbb R$ 上の非負ルベーグ可測関数 $f_k$ は $\sum_{k=1}^\infty\int_{\mathbb R}f_k(x)\,dx<\infty$ を満たす。$g(x)=\sum_{k=1}^\infty f_k(x)$ とおく。

(1) $\int_{\mathbb R}g(x)\,dx<\infty$ を示せ。

(2) $\lim_{n\to\infty}\int_{\mathbb R}|g(x)-\sum_{k=1}^nf_k(x)|\,dx=0$ を示せ。

## **Kai**

### (1)
$g_n=\sum_{k=1}^nf_k$ とおくと $0\le g_n\uparrow g$。単調収束定理より

$$
\int g=\lim_{n\to\infty}\int g_n=\sum_{k=1}^\infty\int f_k<\infty.
$$

したがって $g$ はほとんど至る所有限である。

### (2)
非負性と (1) より

$$
\int|g-g_n|=\int(g-g_n)=\sum_{k=n+1}^\infty\int f_k\longrightarrow0.
$$
