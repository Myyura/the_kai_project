---
sidebar_label: "2023年度 基礎科目 [4]"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$f(x)$ を $x\ge1$ で定義された実数値連続関数とし、$\lim_{x\to\infty}f(x)=1$ とする。このとき

$$
\lim_{n\to\infty}n\int_1^\infty\frac{\exp(-n/x)f(x)}{x^2}\,dx
$$

を求めよ。

#### 题目描述

设 $f(x)$ 是 $[1,\infty)$ 上的实值连续函数，且 $\lim_{x\to\infty}f(x)=1$。求

$$
\lim_{n\to\infty}n\int_1^\infty\frac{\exp(-n/x)f(x)}{x^2}\,dx.
$$

## **Kai**

$f$ は連続で無限遠に有限な極限を持つので有界である。$M=\sup_{x\ge1}|f(x)|<\infty$ とおく。$t=n/x$ と変数変換すると

$$
n\int_1^\infty\frac{e^{-n/x}f(x)}{x^2}\,dx
=\int_0^ne^{-t}f(n/t)\,dt.
$$

右辺の被積分関数を $t>n$ では $0$ として $(0,\infty)$ 全体に拡張する。各 $t>0$ でこれは $e^{-t}$ に収束し、絶対値は可積分関数 $Me^{-t}$ 以下である。よって優収束定理から、求める極限は

$$
\boxed{\int_0^\infty e^{-t}\,dt=1}.
$$

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 4ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
