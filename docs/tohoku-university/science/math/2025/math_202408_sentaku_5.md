---
sidebar_label: "2024年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
  - Mathematics.Real-Analysis.Almost-Everywhere-and-In-Measure-Convergence
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$m$ は閉区間 $I=[0,1]$ 上のルベーグ測度とし、$I$ のルベーグ可測部分集合の列 $\{A_n\}_{n=1}^\infty$ は、

$$
\lim_{n\to\infty}m(A_n)=0
$$

を満たすとする。また、$I$ の部分集合 $A$ が与えられたとき、

$$
\chi_A(x)=\begin{cases}1&(x\in A),\\0&(x\in I\setminus A)\end{cases}
$$

とおく。以下の問いに答えよ。

(1) 次の2つの条件 (i), (ii) を満たす $I$ のルベーグ可測部分集合の列 $\{B_n\}_{n=1}^\infty$ の例をあげよ。

(i) $\lim_{n\to\infty}m(B_n)=0$。

(ii) 「$I$ の上で $m$ に関してほとんど至るところ $\lim_{n\to\infty}\chi_{B_n}(x)=0$」は成り立たない。

(2) ルベーグ可測関数 $f:I\to\mathbb R$ は $\int_I|f(x)|m(dx)<\infty$ を満たすとする。このとき、

$$
\lim_{n\to\infty}\int_{A_n}|f(x)|m(dx)=0
$$

が成り立つことを示せ。

(3) $I$ 上の実数値ルベーグ可測関数 $g$ と $I$ 上の実数値ルベーグ可測関数の列 $\{g_k\}_{k=1}^\infty$ は次の (a), (b) を満たすとする。

(a) $\int_I|g(x)|m(dx)<\infty$ かつ任意の $k\in\mathbb Z_{>0}$ に対して $\int_I|g_k(x)|m(dx)<\infty$。

(b) $\lim_{k\to\infty}\int_I|g_k(x)-g(x)|m(dx)=0$。

このとき、

$$
\lim_{n\to\infty}\sup_{k\in\mathbb Z_{>0}}\int_{A_n}|g_k(x)|m(dx)=0
$$

が成り立つことを示せ。

### 题目描述

设 $m$ 为闭区间 $I=[0,1]$ 上的勒贝格测度，可测子集列 $\{A_n\}_{n=1}^\infty$ 满足 $m(A_n)\to0$。对 $A\subset I$，定义示性函数

$$
\chi_A(x)=\begin{cases}1&(x\in A),\\0&(x\in I\setminus A).
\end{cases}
$$

回答下列问题。$\mathbb Z_{>0}$ 表示正整数集合。

(1) 举出可测子集列 $\{B_n\}_{n=1}^\infty$，同时满足：

(i) $m(B_n)\to0$；

(ii) “$\chi_{B_n}(x)\to0$ 在 $I$ 上关于 $m$ 几乎处处成立”这一命题不成立。

(2) 设可测函数 $f:I\to\mathbb R$ 满足 $\int_I|f(x)|m(dx)<\infty$。证明

$$
\lim_{n\to\infty}\int_{A_n}|f(x)|m(dx)=0.
$$

(3) 设 $I$ 上的实值可测函数 $g$ 及实值可测函数列 $\{g_k\}_{k=1}^\infty$ 满足：

(a) $\int_I|g(x)|m(dx)<\infty$，且每个正整数 $k$ 都满足 $\int_I|g_k(x)|m(dx)<\infty$；

(b) $\lim_{k\to\infty}\int_I|g_k(x)-g(x)|m(dx)=0$。

证明

$$
\lim_{n\to\infty}\sup_{k\in\mathbb Z_{>0}}\int_{A_n}|g_k(x)|m(dx)=0.
$$

## **Kai**

### (1)

$n=2^j+l$（$j\ge0$, $0\le l<2^j$）と一意に表し、

$$
B_n=I\cap\left[\frac{l}{2^j},\frac{l+1}{2^j}\right)
$$

とおく。$m(B_n)=2^{-j}\to0$ である。一方、各 $x\in[0,1)$ は各段階 $j$ でちょうど一つの区間に属するので、$\chi_{B_n}(x)=1$ となる $n$ が無限個ある。従って $\chi_{B_n}(x)$ は $0$ に収束しない。端点 $1$ の有無は零集合の違いにすぎず、(ii) も満たす。

### (2)

$f\in L^1(I)$ なので $|f|$ はほとんど至る所有限であり、優収束定理から

$$
\lim_{M\to\infty}\int_{\{|f|>M\}}|f|\,dm=0.
$$

任意の $\varepsilon>0$ に対し、この積分が $\varepsilon/2$ 未満となる $M>0$ を固定する。すると

$$
\int_{A_n}|f|\,dm
\le M m(A_n)+\int_{\{|f|>M\}}|f|\,dm<\varepsilon
$$

が十分大きい $n$ について成立する。

### (3)

$\varepsilon>0$ をとる。$g_k\to g$ が $L^1$ 収束するので、ある $K\ge2$ に対し $k\ge K$ ならば $\|g_k-g\|_1<\varepsilon/2$ である。このとき

$$
\sup_{k\ge K}\int_{A_n}|g_k|\,dm
\le\frac{\varepsilon}{2}+\int_{A_n}|g|\,dm.
$$

(2) を $g,g_1,\ldots,g_{K-1}$ に適用すると、十分大きい $n$ では

$$
\int_{A_n}|g|\,dm<\frac{\varepsilon}{2},\qquad
\max_{1\le k<K}\int_{A_n}|g_k|\,dm<\varepsilon.
$$

従って $\sup_{k\ge1}\int_{A_n}|g_k|\,dm<\varepsilon$ となり、所望の極限が得られる。

## **Reference**

- [東北大学公式問題（2025年度・選択問題、PDF 6ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_sentaku.pdf)
- [L^2：2025年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#405e6ee5-c339-4b8a-97e4-829e1d55d81f)
