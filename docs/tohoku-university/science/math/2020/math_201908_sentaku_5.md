---
sidebar_label: "2019年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は8題ある。3題を選択して解答すること。

$\mu$ を $[0,\infty)$ 上の $\sigma$-有限なボレル測度とする。以下の問いに答えよ。

(1) $E$ を $[0,\infty)$ のボレル可測集合とし、$\chi_E$ を $E$ の定義関数とする。次を示せ。

$$
\mu(E)=\int_0^1\mu(\{x\in[0,\infty)\mid\chi_E(x)\ge\lambda\})d\lambda.
$$

(2) 任意の $t>0$ に対し、次が成り立つことを示せ。

$$
\int_{[0,\infty)}e^{-tx}d\mu(x)=\int_0^\infty te^{-ty}\mu([0,y])dy.
$$

(3) 次を満たす $\gamma>0$, $A\ge0$ が存在することを仮定する。

$$
\lim_{a\to\infty}\frac{\mu([0,a])}{a^\gamma}=A.
$$

このとき、次が成り立つことを示せ。

$$
\lim_{\substack{t>0\\t\to0}}t^\gamma\int_{[0,\infty)}e^{-tx}d\mu(x)
=A\int_0^\infty x^\gamma e^{-x}dx.
$$

### 题目描述

试卷共8题，选择其中3题作答。

设 $\mu$ 为 $[0,\infty)$ 上的 $\sigma$ 有限博雷尔测度。回答下列问题。

(1) 设 $E$ 为 $[0,\infty)$ 的博雷尔可测集，$\chi_E$ 为其示性函数。证明

$$
\mu(E)=\int_0^1\mu(\{x\in[0,\infty)\mid\chi_E(x)\ge\lambda\})d\lambda.
$$

(2) 证明对任意 $t>0$，都有

$$
\int_{[0,\infty)}e^{-tx}d\mu(x)=\int_0^\infty te^{-ty}\mu([0,y])dy.
$$

(3) 假设存在 $\gamma>0$ 和 $A\ge0$，满足

$$
\lim_{a\to\infty}\frac{\mu([0,a])}{a^\gamma}=A.
$$

证明

$$
\lim_{t\downarrow0}t^\gamma\int_{[0,\infty)}e^{-tx}d\mu(x)
=A\int_0^\infty x^\gamma e^{-x}dx.
$$

## **Kai**

### (1)

$0<\lambda\le1$ のとき $\{x\ge0:\chi_E(x)\ge\lambda\}=E$ である。従って

$$
\int_0^1\mu\bigl(\{x\ge0:\chi_E(x)\ge\lambda\}\bigr)\,d\lambda
=\int_0^1\mu(E)\,d\lambda=\mu(E).
$$

端点 $\lambda=0$ の値は積分に影響しない。

### (2)

$F(y)=\mu([0,y])$ とおく。非負関数に対する Tonelli の定理より、

$$
\begin{aligned}
\int_0^\infty t e^{-ty}F(y)\,dy
&=\int_{[0,\infty)}\left(\int_x^\infty t e^{-ty}\,dy\right)d\mu(x)\\
&=\int_{[0,\infty)}e^{-tx}\,d\mu(x).
\end{aligned}
$$

### (3)

(2) と変数変換 $u=ty$ により、

$$
t^\gamma\int_{[0,\infty)}e^{-tx}\,d\mu(x)
=\int_0^\infty e^{-u}t^\gamma F(u/t)\,du.
$$

仮定から、ある $a_0,C>0$ に対し $a\ge a_0$ ならば $F(a)\le Ca^\gamma$ となる。また、測度の単調性により全ての $a\ge0$ について

$$
F(a)\le F(a_0)+Ca^\gamma.
$$

従って $0<t\le1$ ならば

$$
0\le e^{-u}t^\gamma F(u/t)
\le e^{-u}\bigl(F(a_0)+Cu^\gamma\bigr),
$$

右辺は可積分である。各 $u>0$ において $t^\gamma F(u/t)\to Au^\gamma$ なので、優収束定理から

$$
\lim_{t\downarrow0}t^\gamma\int_{[0,\infty)}e^{-tx}\,d\mu(x)
=A\int_0^\infty u^\gamma e^{-u}\,du
=A\Gamma(\gamma+1).
$$

## **Reference**

- [東北大学 2020年度・選択問題の公開保存資料（sentaku2020(R2).pdf、PDF 4ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#f152e5ca-5a70-4c5f-9a23-1fb0bb4227e1)
