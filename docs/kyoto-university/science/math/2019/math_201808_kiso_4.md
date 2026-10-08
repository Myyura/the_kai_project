---
sidebar_label: "2019年度 基礎科目 問題4"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Mean-Value-Theorem
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$f$ は $\mathbb R$ 上の実数値 $C^1$ 級関数で、任意の $x\in\mathbb R$ に対して $f(x+1)=f(x)$ を満たすとする。このとき以下の二条件は同値であることを示せ。

- (A) 広義積分 $\displaystyle\int_1^\infty\frac{1}{x^{1+f(x)^2}}\,dx$ が収束する。
- (B) $f(x)=0$ となる $x\in\mathbb R$ が存在しない。

#### 题目描述

设实值函数 $f\in C^1(\mathbb R)$ 满足 $f(x+1)=f(x)$。证明以下两条件等价：

- (A) 反常积分 $\displaystyle\int_1^\infty x^{-1-f(x)^2}\,dx$ 收敛。
- (B) $f$ 在 $\mathbb R$ 上没有零点。

## **Kai**

まず (B) を仮定する。連続性と周期性より、

$$
m=\min_{0\le x\le1}|f(x)|>0.
$$

$x\ge1$ なら $0<x^{-1-f(x)^2}\le x^{-1-m^2}$ であり、右辺は $[1,\infty)$ 上可積分だから (A) が成り立つ。

逆に $f$ が零点をもつとする。周期性より $z\in[0,1)$ で $f(z)=0$ となるものを取れる。また、$f'$ も周期的なので $M=\sup_{x\in\mathbb R}|f'(x)|<\infty$ であり、平均値の定理より

$$
|f(n+z+t)|=|f(z+t)|\le M|t|\qquad(n\in\mathbb Z)
$$

である。十分大きい整数 $n$ に対して $h_n=(\log(n+2))^{-1/2}<1$ と置く。区間 $I_n=[n+z,n+z+h_n]$ は互いに交わらず、$x\in I_n$ なら

$$
x\le n+2,\qquad
f(x)^2\log x\le M^2h_n^2\log(n+2)=M^2.
$$

したがって

$$
\int_{I_n}x^{-1-f(x)^2}\,dx
\ge\frac{e^{-M^2}}{(n+2)\sqrt{\log(n+2)}}.
$$

右辺を $n$ について加えた級数は積分判定法により発散する。よって (A) は成り立たない。以上により (A) と (B) は同値である。

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 4–5ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
