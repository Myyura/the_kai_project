---
sidebar_label: "2021年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$1\le p<\infty$ とし、$\mu$ を $\mathbb R^n$ 上のルベーグ測度とする。関数 $f:\mathbb R^n\to\mathbb R$ はルベーグ可測であり、$\int_{\mathbb R^n}|f(x)|^p\,d\mu(x)<\infty$ を満たすものとする。さらに $f$ の分布関数を

$$
\mu_f(\lambda)=\mu(\{x\in\mathbb R^n\mid |f(x)|>\lambda\})\qquad(\lambda>0)
$$

によって定義する。以下の問いに答えよ。

(1) 分布関数 $\mu_f(\lambda)$ が $\lambda>0$ について広義単調減少であることを示せ。

(2) 任意の $\lambda>0$ に対して、次が成り立つことを示せ。

$$
\lambda^p\mu_f(\lambda)\le\int_{\mathbb R^n}|f(x)|^p\,d\mu(x)
$$

(3) 次が成り立つことを示せ。

$$
\int_{\mathbb R^n}|f(x)|^p\,d\mu(x)
=p\int_0^\infty\lambda^{p-1}\mu_f(\lambda)\,d\lambda
$$

(4) 次が成り立つことを示せ。

$$
\lim_{\lambda\to\infty}\lambda^p\mu_f(\lambda)=0
$$

### 题目描述

设 $1\le p<\infty$，$\mu$ 为 $\mathbb R^n$ 上的勒贝格测度，可测函数 $f:\mathbb R^n\to\mathbb R$ 满足 $\int_{\mathbb R^n}|f(x)|^p\,d\mu(x)<\infty$。定义 $f$ 的分布函数

$$
\mu_f(\lambda)=\mu(\{x\in\mathbb R^n\mid |f(x)|>\lambda\})\qquad(\lambda>0).
$$

(1) 证明 $\mu_f$ 关于 $\lambda>0$ 单调不增。

(2) 证明对每个 $\lambda>0$，

$$
\lambda^p\mu_f(\lambda)\le\int_{\mathbb R^n}|f(x)|^p\,d\mu(x).
$$

(3) 证明

$$
\int_{\mathbb R^n}|f(x)|^p\,d\mu(x)
=p\int_0^\infty\lambda^{p-1}\mu_f(\lambda)\,d\lambda.
$$

(4) 证明 $\lim_{\lambda\to\infty}\lambda^p\mu_f(\lambda)=0$。

## **Kai**

### (1)

$0<\lambda_1<\lambda_2$ ならば $\{|f|>\lambda_2\}\subset\{|f|>\lambda_1\}$ である。測度の単調性より $\mu_f(\lambda_2)\le\mu_f(\lambda_1)$ となる。

### (2)

$\lambda>0$ に対し、

$$
\lambda^p\mu_f(\lambda)
=\int_{\{|f|>\lambda\}}\lambda^p\,d\mu
\le\int_{\{|f|>\lambda\}}|f|^p\,d\mu
\le\int_{\mathbb R^n}|f|^p\,d\mu.
$$

### (3)

各点で $|f(x)|^p=\int_0^\infty p\lambda^{p-1}\chi_{\{\lambda<|f(x)|\}}\,d\lambda$ である。被積分関数は非負なので Tonelli の定理より、

$$
\begin{aligned}
\int_{\mathbb R^n}|f|^p\,d\mu
&=\int_0^\infty p\lambda^{p-1}
\left(\int_{\mathbb R^n}\chi_{\{|f|>\lambda\}}\,d\mu\right)d\lambda\\
&=\int_0^\infty p\lambda^{p-1}\mu_f(\lambda)\,d\lambda.
\end{aligned}
$$

### (4)

$|f|^p$ は可積分なので $|f|<\infty$ がほとんど至る所成立する。従って $|f|^p\chi_{\{|f|>\lambda\}}\to0$ がほとんど至る所成立し、優関数として $|f|^p$ が使える。(2) の評価と優収束定理より、

$$
0\le\lambda^p\mu_f(\lambda)
\le\int_{\{|f|>\lambda\}}|f|^p\,d\mu\longrightarrow0
\qquad(\lambda\to\infty).
$$

## **Reference**

- [東北大学入学試験問題（2022年度・選択問題、PDF 4ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/f337b6d1a47d494cd8f448bb4f7c860024fc67959f11c7353e1dbfc786484c24.pdf)
- [L^2：2022年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#20d4ec43-cbc5-47dd-9e71-751a5a9919b1)
