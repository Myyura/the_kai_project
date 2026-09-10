---
sidebar_label: '数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Linear-Algebra.Unitary-Discrete-Fourier-Transform-Matrix
---

# 東京大学 工学系研究科 2018年度 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問題

周期 $T>0$ の関数 $f$ が次の複素 Fourier 級数に展開されるとする。

$$
f(t)=\sum_{n=-\infty}^{\infty}F_ne^{-i\omega_nt}.
$$

I. $\omega_n$ を $T,n$ で表せ。

II. $M$ を正の整数、$\Delta t=T/M$ とし、次を定義する。

$$
\widehat f(t)=\sum_{m=0}^{M-1}f(t)\delta(t-m\Delta t).
$$

任意の整数 $k$ に対して、次の値を $F_n$ で表せ。
$\displaystyle\lim_{\varepsilon\to0^+}\int_{-\varepsilon}^{T-\varepsilon}\widehat f(t)e^{i\omega_kt}\,dt$。

III. $F_n=0$（$n<0$ または $n\ge M$）のとき、$F_j$（$0\le j<M$）を標本値 $f(0),f(\Delta t),\ldots,f((M-1)\Delta t)$ で表せ。

IV. $f(l\Delta t)=(-1)^l$（$0\le l<M$）のとき、III の $F_j$ を求めよ。

#### 题目描述

设周期为 $T>0$ 的函数有复 Fourier 展开

$$
f(t)=\sum_{n=-\infty}^{\infty}F_ne^{-i\omega_nt}.
$$

I. 用 $T,n$ 表示 $\omega_n$。

II. 设 $M$ 为正整数、$\Delta t=T/M$，并定义

$$
\widehat f(t)=\sum_{m=0}^{M-1}f(t)\delta(t-m\Delta t).
$$

对任意整数 $k$，用 $F_n$ 表示
$\displaystyle\lim_{\varepsilon\to0^+}\int_{-\varepsilon}^{T-\varepsilon}\widehat f(t)e^{i\omega_kt}\,dt$。

III. 若 $F_n=0$（$n<0$ 或 $n\ge M$），用样本 $f(0),f(\Delta t),\ldots,f((M-1)\Delta t)$ 表示 $F_j$（$0\le j<M$）。

IV. 若 $f(l\Delta t)=(-1)^l$（$0\le l<M$），求 III 中的 $F_j$。

## **Kai**

### I.

$$
\boxed{\omega_n=\frac{2\pi n}{T}}.
$$

### II.

Dirac のデルタ関数の抽出性と有限等比級数の公式から

$$
\begin{aligned}
\sum_{m=0}^{M-1}f(m\Delta t)e^{2\pi ikm/M}
&=\sum_{n\in\mathbb Z}F_n\sum_{m=0}^{M-1}e^{2\pi i(k-n)m/M}\\
&=\boxed{M\sum_{\ell\in\mathbb Z}F_{k+\ell M}}.
\end{aligned}
$$

内側の和は $n\equiv k\pmod M$ のとき $M$、それ以外では零である。

### III.

周波数範囲の条件により II の和には $F_j$ だけが残るので、

$$
\boxed{F_j=\frac1M\sum_{m=0}^{M-1}f(m\Delta t)e^{2\pi ijm/M}}.
$$

### IV.

$$
F_j=\frac1M\sum_{l=0}^{M-1}(-e^{2\pi ij/M})^l.
$$

$M$ の偶奇によって場合分けすると

$$
\boxed{F_j=\begin{cases}
1,&M\text{ が偶数かつ }j=M/2,\\
0,&M\text{ が偶数かつ }j\ne M/2,\\
\dfrac{2}{M(1+e^{2\pi ij/M})},&M\text{ が奇数}.
\end{cases}}
$$

