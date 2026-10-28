---
sidebar_label: "2016年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
  - Mathematics.Real-Analysis.Almost-Everywhere-and-In-Measure-Convergence
---

# 東北大学 理学研究科 数学専攻 2016年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$\mu$ を $\mathbb R^n$ 上のルベーグ測度とし、可測集合 $\Omega\subset\mathbb R^n$ が $\mu(\Omega)<\infty$ を満たし、$f_k$（$k=1,2,3,\ldots$）と $f$ は $\Omega$ 上の2乗可積分関数であるとする。また、

$$
\int_\Omega|f_k|^2d\mu\le M\qquad(k=1,2,3,\ldots)
$$

を満たす定数 $M>0$ があるとし、$\mu$ に関して、ほとんどすべての点 $x\in\Omega$ において、

$$
\lim_{k\to\infty}f_k(x)=f(x)
$$

が成り立つとする。$r>0$ と $k=1,2,3,\ldots$ に対し、

$$
A_k(r)=\{x\in\Omega\mid|f_k(x)-f(x)|\ge r\}
$$

とおく。以下の問いに答えよ。

(1) 次の条件を満たす定数 $C>0$ が存在することを示せ。

任意の $r>0$ と $k=1,2,3,\ldots$ に対し、$\mu(A_k(r))\le C/r^2$ となる。

(2) 任意の $r>0$ に対し、$\displaystyle\lim_{k\to\infty}\int_{\Omega\setminus A_k(r)}|f_k-f|d\mu=0$ が成り立つことを示せ。

(3) $\displaystyle\lim_{k\to\infty}\int_\Omega|f_k-f|d\mu=0$ が成り立つことを示せ。

### 题目描述

设 $\mu$ 为 $\mathbb R^n$ 上的勒贝格测度，可测集 $\Omega\subset\mathbb R^n$ 满足 $\mu(\Omega)<\infty$，函数 $f_k$（$k=1,2,3,\ldots$）与 $f$ 均在 $\Omega$ 上平方可积。存在常数 $M>0$，使

$$
\int_\Omega|f_k|^2d\mu\le M\qquad(k=1,2,3,\ldots).
$$

此外，对 $\Omega$ 中关于 $\mu$ 几乎所有的 $x$，均有 $f_k(x)\to f(x)$。对 $r>0$ 及 $k=1,2,3,\ldots$，定义

$$
A_k(r)=\{x\in\Omega\mid|f_k(x)-f(x)|\ge r\}.
$$

回答下列问题。

(1) 证明存在常数 $C>0$，使任意 $r>0$ 和 $k=1,2,3,\ldots$ 均满足 $\mu(A_k(r))\le C/r^2$。

(2) 证明对任意 $r>0$，均有 $\displaystyle\lim_{k\to\infty}\int_{\Omega\setminus A_k(r)}|f_k-f|d\mu=0$。

(3) 证明 $\displaystyle\lim_{k\to\infty}\int_\Omega|f_k-f|d\mu=0$。

## **Kai**

### (1)

$M=\sup_k\int_\Omega|f_k|^2\,d\mu<\infty$ とおく。Fatou の補題より $\int_\Omega|f|^2\,d\mu\le M$ である。従って

$$
\int_\Omega|f_k-f|^2\,d\mu
\le2\int_\Omega|f_k|^2\,d\mu+2\int_\Omega|f|^2\,d\mu
\le4M.
$$

これから

$$
r^2\mu(A_k(r))\le\int_{A_k(r)}|f_k-f|^2\,d\mu\le4M.
$$

例えば $C=4M+1>0$ とすれば求める評価を満たす。

### (2)

$h_k=|f_k-f|\chi_{\Omega\setminus A_k(r)}$ とおく。$h_k\to0$ がほとんど至る所成立し、$0\le h_k\le r$ である。$\mu(\Omega)<\infty$ により定数関数 $r$ は可積分なので、優収束定理から

$$
\lim_{k\to\infty}\int_{\Omega\setminus A_k(r)}|f_k-f|\,d\mu
=\lim_{k\to\infty}\int_\Omega h_k\,d\mu=0.
$$

### (3)

(1) と Cauchy–Schwarz の不等式より、

$$
\int_{A_k(r)}|f_k-f|\,d\mu
\le\left(\int_\Omega|f_k-f|^2\,d\mu\right)^{1/2}
\mu(A_k(r))^{1/2}\le\frac{4M}{r}.
$$

従って (2) を用いると

$$
\limsup_{k\to\infty}\int_\Omega|f_k-f|\,d\mu\le\frac{4M}{r}.
$$

最後に $r\to\infty$ とすれば結論を得る。

## **Reference**

- [東北大学 2017年度・選択問題の公開保存資料（PDF 5ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#6491701d-4928-4c2e-8c2d-7aad8c3229e2)
