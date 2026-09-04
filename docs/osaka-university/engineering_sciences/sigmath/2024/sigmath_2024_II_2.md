---
sidebar_label: "2024年度 数理科学 [II-2]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
  - Mathematics.Calculus.Improper-Integral
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-2]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$0<\alpha<1$ とする。

(1) 次の等式を示せ。

$$
\int_0^\infty\{x^{\alpha-1}-(x+1)^{\alpha-1}\}\,dx
=\lim_{\lambda\downarrow0}\int_0^\infty\{x^{\alpha-1}-(x+1)^{\alpha-1}\}e^{-\lambda x}\,dx.
$$

(2) $\lambda>0$ に対して

$$
\int_0^\infty(x+1)^{\alpha-1}e^{-\lambda x}\,dx
=e^\lambda\frac{\Gamma(\alpha)}{\lambda^\alpha}-e^\lambda\int_0^1x^{\alpha-1}e^{-\lambda x}\,dx
$$

を示せ。ただし $\Gamma(\alpha)=\int_0^\infty x^{\alpha-1}e^{-x}\,dx$。

(3) (1)の左辺の積分値を求めよ。

## **Kai**

### (1)

$h(x)=x^{\alpha-1}-(x+1)^{\alpha-1}\ge0$ であり、$\lambda\downarrow0$ のとき $h(x)e^{-\lambda x}\uparrow h(x)$。従って単調収束定理より等式が成り立つ。

### (2)

$u=x+1$ とおき、続いて $v=\lambda u$ とおけば

$$
\begin{aligned}
\int_0^\infty(x+1)^{\alpha-1}e^{-\lambda x}\,dx
&=e^\lambda\int_1^\infty u^{\alpha-1}e^{-\lambda u}\,du\\
&=e^\lambda\left\{\frac{\Gamma(\alpha)}{\lambda^\alpha}-\int_0^1u^{\alpha-1}e^{-\lambda u}\,du\right\}.
\end{aligned}
$$

### (3)

(2)より、減衰因子を付けた差の積分は

$$
\frac{1-e^\lambda}{\lambda^\alpha}\Gamma(\alpha)
+e^\lambda\int_0^1x^{\alpha-1}e^{-\lambda x}\,dx.
$$

第1項は $O(\lambda^{1-\alpha})\to0$、第2項は $\int_0^1x^{\alpha-1}\,dx=1/\alpha$ に収束する。(1)から求める値は $\boxed{1/\alpha}$。
