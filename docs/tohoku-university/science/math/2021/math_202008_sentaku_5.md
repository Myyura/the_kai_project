---
sidebar_label: "2020年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は8題ある。3題を選択して解答すること。

$1$ より真に大きい二つの実数 $p,q$ が

$$
\frac1p+\frac1q=1
$$

を満たすとする。$\mathbb R$ 上のルベーグ可測関数 $f,g$ と $\mathbb R$ 上のルベーグ可測関数の列 $\{g_n\}_{n=1}^\infty$ が、次の条件 (i), (ii), (iii) をすべて満たすとする。

(i) $f$ は非負値で $\displaystyle\int_{\mathbb R}\{f(x)\}^p m(dx)<\infty$。

(ii) $\displaystyle\sup_{n\ge1}\int_{\mathbb R}|g_n(x)|^q m(dx)<\infty$。

(iii) $\displaystyle\lim_{n\to\infty}\int_{\mathbb R}|g_n(x)-g(x)|m(dx)=0$。

ただし、$m$ は $\mathbb R$ 上のルベーグ測度である。以下の問いに答えよ。

(1) $\displaystyle\sup_{n\ge1}\int_{\mathbb R}f(x)|g_n(x)|m(dx)<\infty$ が成り立つことを示せ。

(2) $\displaystyle\int_{\mathbb R}|g(x)|^q m(dx)<\infty$ が成り立つことを示せ。

(3) $\displaystyle\lim_{n\to\infty}\int_{\mathbb R}f(x)g_n(x)m(dx)=\int_{\mathbb R}f(x)g(x)m(dx)$ が成り立つことを示せ。

### 题目描述

试卷共8题，选择其中3题作答。

设实数 $p,q>1$ 满足 $1/p+1/q=1$。$\mathbb R$ 上的勒贝格可测函数 $f,g$ 及可测函数列 $\{g_n\}_{n=1}^\infty$ 满足以下所有条件，其中 $m$ 为 $\mathbb R$ 上的勒贝格测度。

(i) $f$ 非负，且 $\displaystyle\int_{\mathbb R}\{f(x)\}^p m(dx)<\infty$。

(ii) $\displaystyle\sup_{n\ge1}\int_{\mathbb R}|g_n(x)|^q m(dx)<\infty$。

(iii) $\displaystyle\lim_{n\to\infty}\int_{\mathbb R}|g_n(x)-g(x)|m(dx)=0$。

回答下列问题。

(1) 证明 $\displaystyle\sup_{n\ge1}\int_{\mathbb R}f(x)|g_n(x)|m(dx)<\infty$。

(2) 证明 $\displaystyle\int_{\mathbb R}|g(x)|^q m(dx)<\infty$。

(3) 证明 $\displaystyle\lim_{n\to\infty}\int_{\mathbb R}f(x)g_n(x)m(dx)=\int_{\mathbb R}f(x)g(x)m(dx)$。

## **Kai**

### (1)

$C=\|f\|_p$, $M=\sup_n\|g_n\|_q<\infty$ とする。Hölder の不等式より、

$$
\sup_n\int_{\mathbb R}f|g_n|\,dm
\le C M<\infty.
$$

### (2)

仮定 (iii) の $L^1$ 収束から、$g_{n_j}\to g$ がほとんど至る所成立する部分列を選べる。Fatou の補題より、

$$
\int_{\mathbb R}|g|^q\,dm
\le\liminf_{j\to\infty}\int_{\mathbb R}|g_{n_j}|^q\,dm
\le M^q<\infty.
$$

### (3)

(2) より $\|g\|_q\le M$ なので、$\|g_n-g\|_q\le2M$ である。任意の $K>0$ に対し、Hölder の不等式から

$$
\begin{aligned}
\int_{\mathbb R}f|g_n-g|\,dm
&\le 2M\left(\int_{\{f>K\}}f^p\,dm\right)^{1/p}
+K\|g_n-g\|_1.
\end{aligned}
$$

$K$ を固定して $n\to\infty$ とすれば第2項は消え、その後 $K\to\infty$ とすれば第1項も消える。従って $\int f|g_n-g|\,dm\to0$ であり、

$$
\left|\int_{\mathbb R}fg_n\,dm-\int_{\mathbb R}fg\,dm\right|
\le\int_{\mathbb R}f|g_n-g|\,dm\longrightarrow0.
$$

## **Reference**

- [東北大学 2021年度・選択問題の公開保存資料（2021(R3)sentaku.pdf、PDF 4ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#00780c04-2949-428e-88fc-f1b9b826b6f8)
