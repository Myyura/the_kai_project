---
sidebar_label: "2023年度 専門科目 [6]（積分作用素のコンパクト性）"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Compact-Operators-and-Finite-Rank-Approximation
  - Mathematics.Functional-Analysis.Bounded-Linear-Operator
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実 Banach 空間 $L^1([0,\infty))$ のノルムを $\|f\|_1=\int_0^\infty|f(x)|\,dx$ とする。$f\in L^1([0,\infty))$ に対して作用素 $H_f:L^1([0,\infty))\to L^1([0,\infty))$ を

$$
(H_fg)(x)=\int_0^\infty f(x+y)g(y)\,dy
$$

で定める。

(1) 作用素ノルムについて $\|H_f\|\le\|f\|_1$ を示せ。

(2) $H_f$ がコンパクト作用素であることを示せ。

#### 题目描述

在实 Banach 空间 $L^1([0,\infty))$ 上，对给定的 $f\in L^1$ 定义 $(H_fg)(x)=\int_0^\infty f(x+y)g(y)\,dy$。

(1) 证明 $\|H_f\|\le\|f\|_1$；(2) 证明 $H_f$ 是紧算子。

## **Kai**

### (1)

Tonelli の定理から

$$
\begin{aligned}
\|H_fg\|_1
&\le\int_0^\infty|g(y)|\int_0^\infty|f(x+y)|\,dx\,dy\\
&=\int_0^\infty|g(y)|\int_y^\infty|f(s)|\,ds\,dy
\le\|f\|_1\|g\|_1.
\end{aligned}
$$

この評価は積分がほとんどすべての $x$ で定義されることも示す。よって $\boxed{\|H_f\|\le\|f\|_1}$。

### (2)

まず $f\in C_c([0,\infty))$ とし、$x\ge R$ なら $f(x)=0$ となる $R>0$ を取る。$[0,R]$ を長さ $\delta$ 以下の区間 $I_j$ に分割し、$x_j\in I_j$ を選ぶ。

$$
(K_\delta g)(x)=\sum_j\mathbf1_{I_j}(x)\int_0^R f(x_j+y)g(y)\,dy
$$

は有限階数作用素である。$f$ の一様連続性による連続度を $\omega_f$ とすると、$x\in I_j$ では $|f(x+y)-f(x_j+y)|\le\omega_f(\delta)$。両作用素の核は $x>R$ または $y>R$ で消えるので

$$
\|(H_f-K_\delta)g\|_1\le R\omega_f(\delta)\|g\|_1.
$$

したがって $H_f$ は有限階数作用素の作用素ノルム極限であり、コンパクトである。

一般の $f\in L^1$ については、$C_c([0,\infty))$ の稠密性から $\|f-f_m\|_1\to0$ となる $f_m\in C_c([0,\infty))$ を取る。(1) により

$$
\|H_f-H_{f_m}\|=\|H_{f-f_m}\|\le\|f-f_m\|_1\longrightarrow0.
$$

コンパクト作用素全体は作用素ノルムについて閉じているので、$H_f$ もコンパクトである。

## **Reference**

- [京都大学公式問題（2023年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_senmon_for2023_honshi.pdf)
- [照合用参考解答（2023年度・専門科目 問題6、PDF 3–4ページ）](https://drive.google.com/file/d/1p_jIHofDw5w7POPqrk_45ylphjs8h4cx/view)
