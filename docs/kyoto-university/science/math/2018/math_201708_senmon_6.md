---
sidebar_label: "2018年度 専門科目 [6]（Laplace モーメントと測度の一意性）"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Uniqueness-of-Measures-from-Laplace-Moments
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mu,\nu$ を $[0,\infty)$ 上の有限 Borel 測度とし、$\mathbb N_{\mathrm{odd}}$ を正の奇数全体とする。すべての $n\in\mathbb N_{\mathrm{odd}}$ に対して

$$
\int_{[0,\infty)}e^{-nx}\,d\mu(x)
=\int_{[0,\infty)}e^{-nx}\,d\nu(x)
$$

が成り立つならば $\mu=\nu$ であることを示せ。

#### 题目描述

设 $\mu,\nu$ 是 $[0,\infty)$ 上的有限 Borel 测度。若对每个正奇数 $n$ 都有 $\int e^{-nx}\,d\mu=\int e^{-nx}\,d\nu$，证明两测度相同。

## **Kai**

$[0,1]$ 上の有限測度 $\alpha,\beta$ を

$$
\alpha(E)=\int_{[0,\infty)}\mathbf1_E(e^{-2x})e^{-x}\,d\mu(x),\qquad
\beta(E)=\int_{[0,\infty)}\mathbf1_E(e^{-2x})e^{-x}\,d\nu(x)
$$

で定める。仮定より、任意の整数 $k\ge0$ に対して

$$
\int_0^1s^k\,d\alpha(s)=\int e^{-(2k+1)x}\,d\mu(x)
=\int e^{-(2k+1)x}\,d\nu(x)=\int_0^1s^k\,d\beta(s).
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
