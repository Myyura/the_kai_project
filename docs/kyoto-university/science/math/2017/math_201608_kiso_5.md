---
sidebar_label: "2016年8月実施 基礎科目 [5]"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [5]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$p$ を正の実数とし、$f(t)$ を $\mathbb R$ 上の実数値連続関数で

$$
\int_0^\infty |f(t)|\,dt<\infty
$$

を満たすものとする。このとき $\mathbb R$ 上の常微分方程式

$$
\frac{dx}{dt}=-px+f(t)
$$

の任意の解 $x(t)$ に対し $\lim_{t\to\infty}x(t)=0$ が成り立つことを示せ。

#### 题目描述

设 $p>0$，连续函数 $f:\mathbb R\to\mathbb R$ 满足

$$
\int_0^\infty |f(t)|\,dt<\infty.
$$

证明微分方程 $x'(t)=-px(t)+f(t)$ 的任意解均满足 $\lim_{t\to\infty}x(t)=0$。

## **Kai**

積分因子 $e^{pt}$ を用いると、$t\ge0$ に対して

$$
x(t)=e^{-pt}x(0)+\int_0^t e^{-p(t-s)}f(s)\,ds.
$$

任意の $\varepsilon>0$ に対し、仮定から

$$
\int_T^\infty |f(s)|\,ds<\varepsilon
$$

となる $T>0$ を取れる。$t\ge T$ のとき

$$
\begin{aligned}
|x(t)|
&\le e^{-pt}|x(0)|
 +\int_0^T e^{-p(t-s)}|f(s)|\,ds
 +\int_T^t e^{-p(t-s)}|f(s)|\,ds\\
&\le e^{-pt}|x(0)|
 +e^{-p(t-T)}\int_0^T|f(s)|\,ds+\varepsilon.
\end{aligned}
$$

$p>0$ より初めの二項は $t\to\infty$ で $0$ に収束する。したがって $\limsup_{t\to\infty}|x(t)|\le\varepsilon$ であり、$\varepsilon>0$ は任意なので

$$
\boxed{\lim_{t\to\infty}x(t)=0}.
$$

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 7ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
