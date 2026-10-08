---
sidebar_label: "2020年度 専門科目 問題6"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Bounded-Linear-Operator
  - Mathematics.Functional-Analysis.Compact-Integral-Operators
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

複素 Hilbert 空間 $L^2([0,1])$ のノルムを

$$
\|f\|=\left(\int_0^1|f(x)|^2\,dx\right)^{1/2}
$$

で表す。$[0,1]^2$ 上の Lebesgue 可測関数 $K$ は

$$
A=\sup_{x\in[0,1]}\int_0^1|K(x,y)|\,dy<\infty,
\qquad
B=\sup_{y\in[0,1]}\int_0^1|K(x,y)|\,dx<\infty
$$

を満たすとする。作用素 $T:L^2([0,1])\to L^2([0,1])$ を

$$
(Tf)(x)=\int_0^1K(x,y)f(y)\,dy
$$

で定める。

1. 任意の $f\in L^2([0,1])$ に対して $\|Tf\|\le\sqrt{AB}\|f\|$ を示せ。
2. $K(x,y)=1/\sqrt{|x-y|}$ のとき作用素 $T$ はコンパクトであることを示せ。

#### 题目描述

在复 Hilbert 空间 $L^2([0,1])$ 上采用通常的 $L^2$ 范数。设可测核 $K$ 满足

$$
A=\sup_x\int_0^1|K(x,y)|\,dy<\infty,
\qquad B=\sup_y\int_0^1|K(x,y)|\,dx<\infty,
$$

并定义 $(Tf)(x)=\int_0^1K(x,y)f(y)\,dy$。

1. 证明 $\|Tf\|\le\sqrt{AB}\|f\|$。
2. 当 $K(x,y)=|x-y|^{-1/2}$ 时，证明 $T$ 为紧算子。

## **Kai**

### (1)

Cauchy–Schwarz の不等式より、ほとんどすべての $x$ に対して

$$
\begin{aligned}
|Tf(x)|^2
&\le\left(\int_0^1|K(x,y)|^{1/2}|K(x,y)|^{1/2}|f(y)|\,dy\right)^2\\
&\le\left(\int_0^1|K(x,y)|\,dy\right)
\left(\int_0^1|K(x,y)||f(y)|^2\,dy\right)\\
&\le A\int_0^1|K(x,y)||f(y)|^2\,dy.
\end{aligned}
$$

右辺の $x$ に関する積分は有限であり、Tonelli の定理を用いると

$$
\|Tf\|^2
\le A\int_0^1|f(y)|^2\left(\int_0^1|K(x,y)|\,dx\right)dy
\le AB\|f\|^2.
$$

これにより $Tf$ がほとんど至る所で定義されて $L^2$ に属することも分かり、所望の評価を得る。

### (2)

対角集合の値は積分に影響しないので、そこで $K=0$ と定めてよい。$0<\varepsilon<1$ に対して

$$
K_\varepsilon(x,y)=
\begin{cases}
|x-y|^{-1/2}&|x-y|\ge\varepsilon,\\
0&|x-y|<\varepsilon
\end{cases}
$$

と置き、その積分作用素を $T_\varepsilon$ とする。$K_\varepsilon$ は有界であるから $L^2([0,1]^2)$ に属し、$T_\varepsilon$ は Hilbert–Schmidt 作用素、したがってコンパクト作用素である。

一方、任意の $x\in[0,1]$ に対して

$$
\int_0^1|K(x,y)-K_\varepsilon(x,y)|\,dy
\le2\int_0^\varepsilon t^{-1/2}\,dt=4\sqrt\varepsilon.
$$

$x,y$ を交換した評価も同様に成り立つため、(1) より

$$
\|T-T_\varepsilon\|_{\mathrm{op}}\le4\sqrt\varepsilon\longrightarrow0.
$$

コンパクト作用素の作用素ノルムに関する極限はコンパクトであるから、$T$ はコンパクトである。

## **Reference**

- [京都大学公式問題（2020年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_senmon_for2020.pdf)
- [照合用参考解答（2020年度・専門科目 問題6、PDF 1–3ページ）](https://drive.google.com/file/d/10upeyfZ8mq7YTmqu-jTKAehwFwgCszNS/view)
