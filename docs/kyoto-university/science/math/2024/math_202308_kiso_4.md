---
sidebar_label: "2024年度 基礎科目 [4]"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題4

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/index.html) refined with GPT 6 Astra)

## **Description**

$r>0$ に対して $\rho_r(x)=\sin\bigl(r e^{-r^2x^2}\bigr)$ とする。$f:\mathbb R\to\mathbb R$ は有界連続関数とする。

1. 各 $r>0$ で広義積分 $\int_{-\infty}^{\infty}f(x)\rho_r(x)\,dx$ が収束することを示す。
2. $r\to\infty$ でこの積分が $0$ に収束することを示す。
3. さらに $f$ が原点で微分可能で $f(0)=0$ なら、$r\int_{-\infty}^{\infty}f(x)\rho_r(x)\,dx\to0$ を示す。

#### 题目描述

对 $r>0$ 令 $\rho_r(x)=\sin(re^{-r^2x^2})$，设 $f:\mathbb R\to\mathbb R$ 是有界连续函数。

1. 证明每个 $r>0$ 时 $\int_{\mathbb R}f(x)\rho_r(x)\,dx$ 收敛。
2. 证明该积分在 $r\to\infty$ 时趋于 $0$。
3. 若 $f$ 在原点可微且 $f(0)=0$，证明 $r\int_{\mathbb R}f(x)\rho_r(x)\,dx\to0$。

## **Kai**

$M=\sup_{x\in\mathbb R}|f(x)|<\infty$ と置く。以下では

$$
|\rho_r(x)|\le\min\{1,r e^{-r^2x^2}\}
$$

を用いる。

### (1)

$$
\int_{\mathbb R}|f(x)\rho_r(x)|\,dx
\le Mr\int_{\mathbb R}e^{-r^2x^2}\,dx=M\sqrt\pi<\infty.
$$

したがって絶対収束する。

### (2)

$\delta>0$ に対して積分を $|x|\le\delta$ と $|x|>\delta$ に分ける。前者の絶対値は $2M\delta$ 以下である。後者は、$u=rx$ と変換すると

$$
Mr\int_{|x|>\delta}e^{-r^2x^2}\,dx
=2M\int_{r\delta}^{\infty}e^{-u^2}\,du\longrightarrow0.
$$

よって積分の絶対値の上極限は $2M\delta$ 以下であり、$\delta\downarrow0$ とすれば結論を得る。

### (3)

$f(0)=0$ と原点での微分可能性により、ある $C,\delta>0$ について $|f(x)|\le C|x|$（$|x|\le\delta$）である。
十分大きな $r$ に対して $\varepsilon_r=r^{-3/4}<\delta$ と置く。原点付近は

$$
r\int_{|x|\le\varepsilon_r}|f(x)\rho_r(x)|\,dx
\le Cr\int_{-\varepsilon_r}^{\varepsilon_r}|x|\,dx
=Cr^{-1/2}\longrightarrow0.
$$

また $\int_a^\infty e^{-u^2}\,du\le e^{-a^2}/(2a)$（$a>0$）を使うと、残りの部分は

$$
\begin{aligned}
r\int_{|x|>\varepsilon_r}|f(x)\rho_r(x)|\,dx
&\le2Mr\int_{r\varepsilon_r}^{\infty}e^{-u^2}\,du\\
&\le Mr^{3/4}e^{-\sqrt r}\longrightarrow0.
\end{aligned}
$$

したがって、$r$ を掛けた積分も $0$ に収束する。

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 4ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
