---
sidebar_label: "2017年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は8題ある。3題を選択して解答すること。

$(X,\mathcal M,\mu)$ を測度空間とし、$\mu$ は有限測度とする（すなわち、$\mu(X)<\infty$）。また、$f$ を $(X,\mathcal M)$ 上の実数値可測関数とする。以下の問いに答えよ。

(1) $\displaystyle\int_Xe^{|f|}d\mu<\infty$ とする。

(a) $0$ 以上の各整数 $n$ で $\displaystyle\int_X|f|^n d\mu<\infty$ が成り立つことを示せ。

(b) $\displaystyle\lim_{n\to\infty}\int_X\left(1+\frac fn\right)^n d\mu=\int_Xe^f d\mu$ を示せ。

(2) $2$ 以上の各整数 $n$ で $\displaystyle\int_X|f|^n d\mu\le(n-2)!$ が成り立つとする。

(a) $\displaystyle\int_X|f|d\mu<\infty$ を示せ。

(b) $\displaystyle\int_Xe^{|f|}d\mu<\infty$ を示せ。

### 题目描述

试卷共8题，选择其中3题作答。

设 $(X,\mathcal M,\mu)$ 为测度空间，$\mu$ 为有限测度，即 $\mu(X)<\infty$，$f$ 为 $(X,\mathcal M)$ 上的实值可测函数。回答下列问题。

(1) 假设 $\displaystyle\int_Xe^{|f|}d\mu<\infty$。

(a) 证明对每个非负整数 $n$，都有 $\displaystyle\int_X|f|^n d\mu<\infty$。

(b) 证明 $\displaystyle\lim_{n\to\infty}\int_X\left(1+\frac fn\right)^n d\mu=\int_Xe^f d\mu$。

(2) 假设对每个整数 $n\ge2$，都有 $\displaystyle\int_X|f|^n d\mu\le(n-2)!$。

(a) 证明 $\displaystyle\int_X|f|d\mu<\infty$。

(b) 证明 $\displaystyle\int_Xe^{|f|}d\mu<\infty$。

## **Kai**

### (1)(a)

$n=0$ のときは $\int_X1\,d\mu=\mu(X)<\infty$ である。任意の正整数 $n$ に対して $|f|^n/n!\le e^{|f|}$ なので、

$$
\int_X|f|^n\,d\mu\le n!\int_Xe^{|f|}\,d\mu<\infty.
$$

### (1)(b)

各点で $(1+f/n)^n\to e^f$ であり、

$$
\left|1+\frac fn\right|^n
\le\left(1+\frac{|f|}{n}\right)^n\le e^{|f|}.
$$

仮定により右辺は可積分だから、優収束定理によって

$$
\lim_{n\to\infty}\int_X\left(1+\frac fn\right)^n\,d\mu
=\int_Xe^f\,d\mu.
$$

### (2)(a)

$|f|\le1+|f|^2$ と $n=2$ の仮定より、

$$
\int_X|f|\,d\mu\le\mu(X)+\int_X|f|^2\,d\mu
\le\mu(X)+1<\infty.
$$

### (2)(b)

指数級数の非負部分和に単調収束定理を適用すると、

$$
\begin{aligned}
\int_Xe^{|f|}\,d\mu
&=\mu(X)+\int_X|f|\,d\mu
+\sum_{n=2}^\infty\frac1{n!}\int_X|f|^n\,d\mu\\
&\le\mu(X)+\int_X|f|\,d\mu
+\sum_{n=2}^\infty\frac1{n(n-1)}\\
&=\mu(X)+\int_X|f|\,d\mu+1<\infty.
\end{aligned}
$$

## **Reference**

- [東北大学 2018年度・選択問題の公開保存資料（PDF 4ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#ecd74d08-1d50-4324-bfed-d72c050e1fb4)
