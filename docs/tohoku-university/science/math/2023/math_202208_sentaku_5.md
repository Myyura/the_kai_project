---
sidebar_label: "2022年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
  - Mathematics.Real-Analysis.Almost-Everywhere-and-In-Measure-Convergence
---

# 東北大学 理学研究科 数学専攻 2022年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$m$ は $\mathbb R$ 上のルベーグ測度とする。$\mathbb R$ 上の非負値ルベーグ可測関数 $f$ は $\int_{\mathbb R}f(x)m(dx)<\infty$ を満たすものとする。以下の問いに答えよ。

(1) 正の実数 $R$ に対して

$$
f_R(x)=\begin{cases}\min\{f(x),R\}&(|x|\le R),\\0&(|x|>R)
\end{cases}
$$

とおく。このとき、任意の正の実数 $\varepsilon$ に対してある正の実数 $R$ が存在して

$$
\int_{\mathbb R}\{f(x)-f_R(x)\}m(dx)<\varepsilon
$$

が成り立つことを示せ。

(2) $\mathbb R$ 上の非負値ルベーグ可測関数の列 $\{g_n\}_{n=1}^\infty$ は次の条件 $(*)$ を満たすものとする。

$(*)$ 正の実数 $\delta$ とルベーグ可測集合 $A\subset\mathbb R$ に対して、$A$ が有限な測度 $m(A)<\infty$ を持つならば

$$
\lim_{n\to\infty}m\bigl(\{x\in\mathbb R\mid g_n(x)>\delta\}\cap A\bigr)=0
$$

が成り立つ。

このとき、ルベーグ可測集合 $A\subset\mathbb R$ が、有限な測度 $m(A)<\infty$ を持つならば

$$
\lim_{n\to\infty}\int_A\min\{g_n(x),1\}m(dx)=0
$$

が成り立つことを示せ。

(3) $\mathbb R$ 上の非負値ルベーグ可測関数の列 $\{g_n\}_{n=1}^\infty$ は (2) で定めた条件 $(*)$ を満たすものとする。このとき

$$
\lim_{n\to\infty}\int_{\mathbb R}\min\{g_n(x),1\}f(x)m(dx)=0
$$

が成り立つことを示せ。

### 题目描述

设 $m$ 为 $\mathbb R$ 上的勒贝格测度，非负可测函数 $f$ 满足 $\int_{\mathbb R}f(x)m(dx)<\infty$。回答下列问题。

(1) 对 $R>0$，定义

$$
f_R(x)=\begin{cases}\min\{f(x),R\}&(|x|\le R),\\0&(|x|>R).
\end{cases}
$$

证明任意 $\varepsilon>0$ 都存在 $R>0$，使

$$
\int_{\mathbb R}\{f(x)-f_R(x)\}m(dx)<\varepsilon.
$$

(2) 设 $\mathbb R$ 上的非负可测函数列 $\{g_n\}_{n=1}^\infty$ 满足条件 $(*)$：对任意 $\delta>0$ 和满足 $m(A)<\infty$ 的勒贝格可测集 $A\subset\mathbb R$，均有

$$
\lim_{n\to\infty}m\bigl(\{x\in\mathbb R\mid g_n(x)>\delta\}\cap A\bigr)=0.
$$

证明每个有限测度的勒贝格可测集 $A\subset\mathbb R$ 都满足

$$
\lim_{n\to\infty}\int_A\min\{g_n(x),1\}m(dx)=0.
$$

(3) 设非负可测函数列 $\{g_n\}$ 满足 (2) 的条件 $(*)$。证明

$$
\lim_{n\to\infty}\int_{\mathbb R}\min\{g_n(x),1\}f(x)m(dx)=0.
$$

## **Kai**

### (1)

$0\le f_R\le f$ であり、$f$ が有限な各点で $f_R(x)\to f(x)$ となる。従って $0\le f-f_R\le f\in L^1(\mathbb R)$ に優収束定理を適用すれば、

$$
\lim_{R\to\infty}\int_{\mathbb R}(f-f_R)\,dm=0.
$$

これから指定された $\varepsilon$ に対する $R$ が存在する。

### (2)

$0<\delta<1$ とすると、

$$
\begin{aligned}
\int_A\min\{g_n,1\}\,dm
&\le\delta m(A)+m\bigl(A\cap\{g_n>\delta\}\bigr).
\end{aligned}
$$

仮定 $(*)$ より右辺第2項は $0$ に収束する。従って左辺の上極限は $\delta m(A)$ 以下である。$m(A)<\infty$ なので、さらに $\delta\downarrow0$ とすれば結論を得る。

### (3)

$0\le\min\{g_n,1\}\le1$ と $0\le f_R\le R\chi_{[-R,R]}$ より、

$$
\begin{aligned}
0\le\int_{\mathbb R}\min\{g_n,1\}f\,dm
&\le R\int_{[-R,R]}\min\{g_n,1\}\,dm
+\int_{\mathbb R}(f-f_R)\,dm.
\end{aligned}
$$

$\varepsilon>0$ に対し (1) によって第2項が $\varepsilon$ 未満となる $R$ を固定する。この $R$ に (2) を適用すれば第1項は $0$ に収束する。よって左辺の上極限は $\varepsilon$ 以下であり、$\varepsilon$ の任意性から極限は $0$ である。

## **Reference**

- [東北大学公式問題（2023年度・選択問題、PDF 4ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_sentaku.pdf)
- [L^2：2023年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#2f2fcbe8-9c09-448f-8286-8ee10abdb8bd)
