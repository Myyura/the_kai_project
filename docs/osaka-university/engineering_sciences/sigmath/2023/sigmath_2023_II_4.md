---
sidebar_label: "2023年度 数理科学 II [4]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$r>0$ とし、$B_r(x,y)=1$ ($|x-y|\le r$)、$0$ ($|x-y|>r$) とする。実数値連続関数 $f$ は $\int_{\mathbb R}|f(x)|\,dx<\infty$ を満たす。

(1) 各 $\alpha\in\mathbb R$ に対して $\{(x,y)\mid B_r(x,y)>\alpha\}$ は $\mathbb R^2$ の閉集合であることを示せ。

(2) $A_r[f](x)=(2r)^{-1}\int_{\mathbb R}B_r(x,y)f(y)\,dy$ とおく。各点で $|A_r[f](x)|<\infty$、かつ $\int_{\mathbb R}|A_r[f](x)|\,dx<\infty$ を示せ。

(3) 各 $x\in\mathbb R$ に対して $\lim_{r\downarrow0}A_r[f](x)=f(x)$ を示せ。

## **Kai**

### (1)
所定の集合は、$\alpha<0$ なら $\mathbb R^2$、$0\le\alpha<1$ なら $\{|x-y|\le r\}$、$\alpha\ge1$ なら空集合。いずれも閉集合である。

### (2)

$$
|A_r[f](x)|\le\frac1{2r}\int_{x-r}^{x+r}|f(y)|\,dy\le\frac{\|f\|_1}{2r}<\infty.
$$

Tonelli の定理から

$$
\int|A_r[f](x)|\,dx
\le\frac1{2r}\int|f(y)|\left(\int1_{\{|x-y|\le r\}}\,dx\right)dy
=\|f\|_1<\infty.
$$

### (3)

$$
|A_r[f](x)-f(x)|\le\frac1{2r}\int_{x-r}^{x+r}|f(y)-f(x)|\,dy
\le\sup_{|y-x|\le r}|f(y)-f(x)|\longrightarrow0
$$

であり、最後は $f$ の $x$ での連続性による。
