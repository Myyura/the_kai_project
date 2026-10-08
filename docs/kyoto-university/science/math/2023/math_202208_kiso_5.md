---
sidebar_label: "2023年度 基礎科目 [5]"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$x_0$ を正の実数とし、

$$
a_m(t)=\frac1{1+(t+1/m)^2}\qquad(t\ge0,\ m\text{ は正の整数})
$$

と定める。このとき常微分方程式の初期値問題

$$
\begin{cases}
x_m'(t)=a_m(t)x_m(t)^{1/2},&t\ge0,\\
x_m(0)=x_0
\end{cases}
$$

の解 $x_m:[0,\infty)\to\mathbb R$ は、$m\to\infty$ のとき、$[0,\infty)$ 上のある連続関数に一様収束することを示せ。

#### 题目描述

设 $x_0>0$，并定义 $a_m(t)=1/[1+(t+1/m)^2]$（$t\ge0$，$m$ 为正整数）。证明初值问题

$$
\begin{cases}x_m'(t)=a_m(t)\sqrt{x_m(t)},&t\ge0,\\x_m(0)=x_0\end{cases}
$$

的解在 $m\to\infty$ 时，在整个 $[0,\infty)$ 上一致收敛于某个连续函数。

## **Kai**

解は非減少であり $x_m(t)\ge x_0>0$ なので、$y_m=\sqrt{x_m}$ とおけば $y_m'=a_m/2$ である。従って

$$
y_m(t)=\sqrt{x_0}+\frac12\left(\arctan(t+1/m)-\arctan(1/m)\right),
\qquad x_m(t)=y_m(t)^2.
$$

この式は全区間 $[0,\infty)$ 上で初期値問題の解を与える。極限候補を

$$
y(t)=\sqrt{x_0}+\frac12\arctan t,\qquad
x(t)=\left(\sqrt{x_0}+\frac12\arctan t\right)^2
$$

とおく。$|(\arctan)'|\le1$ より、すべての $t\ge0$ に対し

$$
|y_m(t)-y(t)|\le\frac12\left(\frac1m+\frac1m\right)=\frac1m.
$$

また $0<y_m(t),y(t)\le\sqrt{x_0}+\pi/4$ であるから

$$
\sup_{t\ge0}|x_m(t)-x(t)|
\le\frac{2\sqrt{x_0}+\pi/2}{m}\longrightarrow0.
$$

よって $x_m$ は連続関数 $x$ に $[0,\infty)$ 上一様収束する。

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 5ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
