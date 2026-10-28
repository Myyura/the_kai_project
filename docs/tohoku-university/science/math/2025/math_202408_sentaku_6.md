---
sidebar_label: "2024年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Weak-and-Strong-Convergence
  - Mathematics.Functional-Analysis.Banach-Space
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$(X,\|\cdot\|)$ を実バナッハ空間とする。以下の問いに答えよ。

(1) 弱収束する点列 $\{x_n\}_{n=1}^\infty\subset X$ は有界列であることを示せ。

(2) 点列 $\{x_n\}_{n=1}^\infty\subset X$ が $x\in X$ に弱収束するならば、次が成り立つことを示せ。

$$
\|x\|\le\liminf_{n\to\infty}\|x_n\|.
$$

(3) $(X,\|\cdot\|)$ は次の条件 $(*)$ を満たすとする。

$(*)$ 任意の $\varepsilon>0$ に対してある $\delta>0$ が存在し、

$$
y,z\in X,\ \|y\|\le1,\ \|z\|\le1,\ \|y-z\|>\varepsilon
\quad\text{ならば}\quad
\left\|\frac{y+z}{2}\right\|<1-\delta.
$$

点列 $\{x_n\}_{n=1}^\infty\subset X$ は次の2つの条件 (i), (ii) を満たすとする。

(i) $\{x_n\}_{n=1}^\infty$ は $x\in X$ に弱収束する。

(ii) $\limsup_{n\to\infty}\|x_n\|\le\|x\|$。

このとき、$\{x_n\}_{n=1}^\infty$ は $x$ に強収束することを示せ。

### 题目描述

设 $(X,\|\cdot\|)$ 为实巴拿赫空间，回答下列问题。

(1) 证明弱收敛序列 $\{x_n\}_{n=1}^\infty\subset X$ 必有界。

(2) 若 $x_n$ 弱收敛于 $x\in X$，证明

$$
\|x\|\le\liminf_{n\to\infty}\|x_n\|.
$$

(3) 假设空间满足条件 $(*)$：对任意 $\varepsilon>0$，存在 $\delta>0$，使

$$
y,z\in X,\ \|y\|\le1,\ \|z\|\le1,\ \|y-z\|>\varepsilon
\quad\Longrightarrow\quad
\left\|\frac{y+z}{2}\right\|<1-\delta.
$$

设序列 $\{x_n\}\subset X$ 满足：

(i) $x_n$ 弱收敛于 $x\in X$；

(ii) $\limsup_{n\to\infty}\|x_n\|\le\|x\|$。

证明 $x_n$ 强收敛于 $x$。

## **Kai**

### (1)

各 $n$ について $\Phi_n\in X^{**}$ を $\Phi_n(f)=f(x_n)$（$f\in X^*$）と定める。Hahn–Banach の定理による自然な埋め込みの等長性から $\|\Phi_n\|=\|x_n\|$ である。弱収束より各 $f\in X^*$ について $\sup_n|\Phi_n(f)|<\infty$ となる。$X^*$ は Banach 空間なので、一様有界性原理を適用して

$$
\sup_n\|x_n\|=\sup_n\|\Phi_n\|<\infty
$$

を得る。

### (2)

$x=0$ の場合は明らかである。$x\ne0$ の場合、Hahn–Banach の定理から $\|f_0\|=1$, $f_0(x)=\|x\|$ を満たす $f_0\in X^*$ をとれる。従って

$$
\|x\|=\lim_n f_0(x_n)\le\liminf_n\|x_n\|.
$$

### (3)

(2) と仮定より $\|x_n\|\to\|x\|=:r$ である。$r=0$ なら直ちに強収束するので、以下 $r>0$ とする。十分大きい $n$ について

$$
y_n=\frac{x_n}{\|x_n\|},\qquad y=\frac{x}{r}
$$

とおけば、$y_n\rightharpoonup y$ かつ $\|y_n\|=\|y\|=1$ である。$y_n$ が $y$ に強収束しなければ、ある $\varepsilon_0>0$ と部分列について $\|y_{n_j}-y\|\ge\varepsilon_0$ となる。条件 $(*)$ を $\varepsilon_0/2$ に適用すると、この部分列に共通な $\delta>0$ が存在して

$$
\left\|\frac{y_{n_j}+y}{2}\right\|\le1-\delta.
$$

一方、$(y_{n_j}+y)/2\rightharpoonup y$ なので、(2) により

$$
1=\|y\|\le\liminf_j\left\|\frac{y_{n_j}+y}{2}\right\|\le1-\delta,
$$

となって矛盾する。従って $y_n\to y$ であり、

$$
\|x_n-x\|\le\|x_n\|\,\|y_n-y\|+|\|x_n\|-r|\longrightarrow0.
$$

## **Reference**

- [東北大学公式問題（2025年度・選択問題、PDF 7ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_sentaku.pdf)
- [L^2：2025年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#bff03761-b4bf-4e27-85ab-44f310395bfe)
