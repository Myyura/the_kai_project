---
sidebar_label: "2017年8月実施 専門科目 [6]（Laplace モーメントと測度の一意性）"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Uniqueness-of-Measures-from-Laplace-Moments
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mu,\nu$ を $[0,\infty)$ 上の有限Borel測度とする。また，正の奇数全体を $\mathbb N_{\mathrm{odd}}$ とする。このとき，すべての $n\in\mathbb N_{\mathrm{odd}}$ に対し

$$
\int_{[0,\infty)}e^{-nx}\,d\mu(x)
=\int_{[0,\infty)}e^{-nx}\,d\nu(x)
$$

が成り立てば，2つの測度 $\mu,\nu$ は一致することを示せ。

### 题目描述

设 $\mu,\nu$ 为 $[0,\infty)$ 上的有限Borel测度，并记全体正奇数为 $\mathbb N_{\mathrm{odd}}$。证明：若对每个 $n\in\mathbb N_{\mathrm{odd}}$ 都有

$$
\int_{[0,\infty)}e^{-nx}\,d\mu(x)
=\int_{[0,\infty)}e^{-nx}\,d\nu(x),
$$

则两个测度 $\mu,\nu$ 相同。

## **Kai**

$[0,1]$ 上の有限測度 $\alpha,\beta$ を

$$
\begin{gathered}
\alpha(E)=\int_{[0,\infty)}\mathbf1_E(e^{-2x})e^{-x}\,d\mu(x),\\
\beta(E)=\int_{[0,\infty)}\mathbf1_E(e^{-2x})e^{-x}\,d\nu(x)
\end{gathered}
$$

で定める。仮定より、任意の整数 $k\ge0$ に対して

$$
\begin{gathered}
\int_0^1s^k\,d\alpha(s)=\int e^{-(2k+1)x}\,d\mu(x)\\
=\int e^{-(2k+1)x}\,d\nu(x)\\
=\int_0^1s^k\,d\beta(s).
\end{gathered}
$$

よって多項式の積分は一致する。Weierstrass の近似定理と測度の有限性により、すべての $h\in C([0,1])$ について $\int h\,d\alpha=\int h\,d\beta$。したがって有限 Borel 測度の一意性から $\alpha=\beta$ である。

任意の Borel 集合 $A\subset[0,\infty)$ について、変換 $s=e^{-2x}$ と非負関数の積分公式から

$$
\mu(A)=\int_{(0,1]}\mathbf1_A\!\left(-\tfrac12\log s\right)s^{-1/2}\,d\alpha(s).
$$

同じ公式が $\nu,\beta$ にも成り立つので、$\mu(A)=\nu(A)$。ゆえに $\boxed{\mu=\nu}$。

## **Reference**

- [京都大学公式問題（2018年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_senmon.pdf)
- [照合用参考解答（2018年度・専門科目 問題6、PDF 1–2ページ）](https://drive.google.com/file/d/1p45zSLvddYW09FsKE0ycCMExLWfELlhi/view?usp=sharing)
