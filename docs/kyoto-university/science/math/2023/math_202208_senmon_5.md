---
sidebar_label: "2023年度 専門科目 [5]（無限積とリーマン和）"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Riemann-Sum
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 専門科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

関数 $f:[0,\infty)\to(-1,\infty)$ は連続であり、

$$
g(x)=\sup_{y\in[x,x+1]}|f(y)-f(x)|\qquad(x\ge0)
$$

とおくとき、

$$
\lim_{x\to\infty}f(x)=0,\qquad
\int_0^\infty\{|f(x)|+g(x)\}\,dx<\infty
$$

を満たすと仮定する。このとき、極限

$$
\lim_{n\to\infty}\prod_{k=1}^\infty
\left\{1+f\left(\frac{k}{n}\right)\right\}^{1/n}
$$

を求めよ。

#### 题目描述

设连续函数 $f:[0,\infty)\to(-1,\infty)$ 满足 $f(x)\to0$（$x\to\infty$）。记

$$
g(x)=\sup_{y\in[x,x+1]}|f(y)-f(x)|,
$$

并假设 $\int_0^\infty(|f(x)|+g(x))\,dx<\infty$。求

$$
\lim_{n\to\infty}\prod_{k=1}^\infty
\left\{1+f\left(\frac{k}{n}\right)\right\}^{1/n}.
$$

## **Kai**

$f$ の連続性と $f(x)\to0$ により、すべての $x\ge0$ で $1+f(x)\ge a$ となる定数 $a\in(0,1]$ が存在する。$h(x)=\log(1+f(x))$ とおくと、平均値の定理から

$$
|h(x)|\le\frac{|f(x)|}{a},\qquad
|h(y)-h(x)|\le\frac{|f(y)-f(x)|}{a}.
$$

よって $h\in L^1([0,\infty))$ である。各正整数 $n$ に対し、階段関数 $h_n$ を区間 $((k-1)/n,k/n]$ 上で

$$
h_n(x)=h(k/n)\qquad(k=1,2,\ldots)
$$

と定める。$x\le k/n\le x+1$ だから、ほとんどすべての $x$ で

$$
|h_n(x)-h(x)|\le\frac{g(x)}a,
\qquad
|h_n(x)|\le\frac{|f(x)|+g(x)}a
$$

を得る。後者の評価より各 $h_n$ は可積分であり、

$$
\frac1n\sum_{k=1}^\infty|h(k/n)|
=\int_0^\infty|h_n(x)|\,dx<\infty
$$

となる。したがって、問題の各無限積は正の値に収束し、その対数は $\int_0^\infty h_n(x)\,dx$ である。

また $h$ の連続性から $h_n(x)\to h(x)$ である。差の絶対値は可積分関数 $g/a$ で抑えられるので、優収束定理により

$$
\left|\frac1n\sum_{k=1}^\infty h(k/n)-\int_0^\infty h(x)\,dx\right|
\le\int_0^\infty|h_n(x)-h(x)|\,dx\longrightarrow0
$$

を得る。指数関数の連続性より、求める極限は

$$
\boxed{\exp\left(\int_0^\infty\log(1+f(x))\,dx\right)}
$$

である。

## **Reference**

- [京都大学公式問題（2023年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_senmon_for2023_honshi.pdf)
- [照合用参考解答（2023年度・専門科目 問題5、PDF 1–2ページ）](https://drive.google.com/file/d/1p_jIHofDw5w7POPqrk_45ylphjs8h4cx/view)
