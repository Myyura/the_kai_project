---
sidebar_label: "2016年8月実施 専門科目 [7]（正則関数と稠密性）"
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Identity-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Orthogonal-Function-Systems
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$L^2(\mathbb R)$ を $\mathbb R$ 上2乗可積分な関数全体のなすHilbert空間とするとき，以下の問に答えよ。

(i) $g\in L^2(\mathbb R)$ とし，$z\in\mathbb C$ に対して

$$
F(z)=\int_{-\infty}^{\infty}e^{-x^2+zx}g(x)\,dx
$$

と定める。このとき，$F(z)$ は $\mathbb C$ 上正則であることを示せ。

(ii) 正の整数 $n$ に対して，$\mathbb R$ 上の関数 $f_n(x)$ を $f_n(x)=e^{-x^2+x/n}$ と定める。このとき，$\{f_n\}_{n=1}^\infty$ の線型結合全体は $L^2(\mathbb R)$ で稠密であることを示せ。

### 题目描述

令 $L^2(\mathbb R)$ 为 $\mathbb R$ 上全体平方可积函数构成的Hilbert空间，回答下列问题。

(i) 对 $g\in L^2(\mathbb R)$ 和 $z\in\mathbb C$，定义

$$
F(z)=\int_{-\infty}^{\infty}e^{-x^2+zx}g(x)\,dx.
$$

证明 $F(z)$ 在 $\mathbb C$ 上全纯。

(ii) 对正整数 $n$，定义 $\mathbb R$ 上的函数 $f_n(x)=e^{-x^2+x/n}$。证明 $\{f_n\}_{n=1}^\infty$ 的全体线性组合在 $L^2(\mathbb R)$ 中稠密。

## **Kai**

### (i)

任意の $R>0$ と整数 $k\ge0$ に対して、Cauchy–Schwarz の不等式より

$$
\begin{aligned}
&\int_{\mathbb R}|x|^ke^{-x^2+R|x|}|g(x)|\,dx\\
&\quad\le\|g\|_2\left(\int_{\mathbb R}|x|^{2k}e^{-2x^2+2R|x|}\,dx\right)^{1/2}\\
&\quad<\infty.
\end{aligned}
$$

これは $|z|\le R$ における被積分関数とその $z$ 微分の可積分な共通優関数を与える。したがって積分の下で微分でき、

$$
F'(z)=\int_{\mathbb R}xe^{-x^2+zx}g(x)\,dx.
$$

$R$ は任意だから $F$ は整関数である。

### (ii)

$h\in L^2(\mathbb R)$ がすべての $f_n$ と直交するとする。(i) の $g$ に $\overline h$ を用いると、整関数 $F$ は $F(1/n)=0$ を満たす。零点列 $1/n$ は $\mathbb C$ 内の $0$ に集積するので、恒等定理から $F\equiv0$。

$q(x)=e^{-x^2}\overline{h(x)}$ は Cauchy–Schwarz の不等式より $L^1(\mathbb R)$ に属し、任意の $\xi\in\mathbb R$ について

$$
\widehat q(\xi)=\int_{\mathbb R}q(x)e^{-i\xi x}\,dx=F(-i\xi)=0.
$$

$L^1$ 関数の Fourier 変換の一意性から $q=0$、したがって $h=0$ がほとんど至る所で成り立つ。直交補空間が $\{0\}$ なので、求める稠密性が従う。

## **Reference**

- [京都大学公式問題（2017年度・専門科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_senmon.pdf)
- [照合用参考解答（2017年度・専門科目 問題7、PDF 4–5ページ）](https://drive.google.com/file/d/1xnUh9xGXnMMcRus6tdwrh0cB_C3JNoi6/view)
