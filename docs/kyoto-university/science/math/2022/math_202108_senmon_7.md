---
sidebar_label: "2022年度 専門科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Weak-and-Strong-Convergence
  - Mathematics.Functional-Analysis.Compact-Operators-and-Finite-Rank-Approximation
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

区間 $I=(0,1)$ に対し、$L^2(I)$ を $I$ 上の2乗可積分複素数値関数全体の空間とし、

$$
(f,g):=\int_I f(x)\overline{g(x)}\,dx,\qquad
\|f\|_2:=\sqrt{(f,f)},\qquad
\|f\|_1:=\int_I|f(x)|\,dx
$$

とする。このとき、以下の問に答えよ。

1. $L^2(I)$ の列 $\{f_n\}_{n=1}^\infty$ が $\|f_n\|_1\to0$, $\|f_n\|_2=1$ ($n\ge1$) を満たすとき、$\{f_n\}$ は $0$ に $L^2(I)$ で弱収束することを示せ。
2. $T:L^2(I)\to L^2(I)$ がコンパクト作用素であるとき、次を示せ。

$$
\forall\varepsilon>0,\ \exists C_\varepsilon>0;\quad
\forall f\in L^2(I),\quad
\|Tf\|_2\le\varepsilon\|f\|_2+C_\varepsilon\|f\|_1.
$$

#### 题目描述

设 $I=(0,1)$，$L^2(I)$ 是其上的复值平方可积函数空间，并定义

$$
(f,g)=\int_I f\overline g\,dx,\qquad \|f\|_2=\sqrt{(f,f)},\qquad \|f\|_1=\int_I|f|\,dx.
$$

1. 若 $f_n\in L^2(I)$ 满足 $\|f_n\|_1\to0$ 且 $\|f_n\|_2=1$，证明 $f_n$ 在 $L^2(I)$ 中弱收敛于 $0$。
2. 若 $T:L^2(I)\to L^2(I)$ 是紧算子，证明对每个 $\varepsilon>0$，存在 $C_\varepsilon>0$，使所有 $f\in L^2(I)$ 都满足

$$
\|Tf\|_2\le\varepsilon\|f\|_2+C_\varepsilon\|f\|_1.
$$

## **Kai**

### (1)

任意の $g\in L^2(I)$ に対し $g_M=g\,\mathbf1_{\{|g|\le M\}}$ とおく。$\|g-g_M\|_2\to0$ ($M\to\infty$) であり、

$$
|(f_n,g)|\le |(f_n,g_M)|+\|f_n\|_2\|g-g_M\|_2
\le M\|f_n\|_1+\|g-g_M\|_2.
$$

まず $n\to\infty$、次に $M\to\infty$ とすれば $(f_n,g)\to0$。よって $f_n\rightharpoonup0$ である。

### (2)

結論が成り立たないとすると、ある $\varepsilon_0>0$ に対し、各正整数 $n$ ごとに非零の $h_n$ が存在して

$$
\|Th_n\|_2>\varepsilon_0\|h_n\|_2+n\|h_n\|_1
$$

となる。$f_n=h_n/\|h_n\|_2$ と正規化すると

$$
\|f_n\|_2=1,\qquad
\|Tf_n\|_2>\varepsilon_0+n\|f_n\|_1.
$$

$\|Tf_n\|_2\le\|T\|$ より $\|f_n\|_1\le\|T\|/n\to0$ なので、(1) から $f_n\rightharpoonup0$ である。コンパクト性により $Tf_n$ は強収束部分列を持ち、その極限は弱収束極限 $0$ と一致する。これは $\|Tf_n\|_2>\varepsilon_0$ に矛盾する。

## **Reference**

- [京都大学公式問題（2022年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_senmon_for2022_honshi.pdf)
- [照合用参考解答（2022年度・専門科目 問題7、PDF 3ページ）](https://drive.google.com/file/d/13VP_uw-pTcypra8PZmwMvf1-TFGKwnMp/view)
