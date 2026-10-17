---
sidebar_label: "2023年度 基礎科目 問題1"
tags:
  - Nagasaki-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Taylor-Series
---

# 長崎大学 工学研究科 総合工学専攻 情報工学コース・海洋未来科学コース 2023年度 基礎科目 問題1

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE.html) refined with GPT 6 Astra)

## **Description**

$f(x)=\tan x$ とし、$f(x)$ の $n$ 次導関数を $f^{(n)}(x)$ とする。以下の問いに答えよ。

(1) $f^{(1)}(x)$、$f^{(2)}(x)$、$f^{(3)}(x)$ をそれぞれ求めよ。

(2) $\displaystyle\lim_{x\to0}\frac{f(x)-x}{x^3}$ を求めよ。

#### 题目描述

设 $f(x)=\tan x$，记 $f(x)$ 的 $n$ 阶导数为 $f^{(n)}(x)$。回答以下问题。

(1) 分别求 $f^{(1)}(x)$、$f^{(2)}(x)$、$f^{(3)}(x)$。

(2) 求 $\displaystyle\lim_{x\to0}\frac{f(x)-x}{x^3}$。

## **Kai**

### (1)

商の微分法と合成関数の微分法から、

$$
\begin{gathered}
\boxed{f^{(1)}(x)=\frac1{\cos^2x}},\\
\boxed{f^{(2)}(x)=\frac{2\sin x}{\cos^3x}}.
\end{gathered}
$$

さらに

$$
\begin{aligned}
f^{(3)}(x)
&=\frac{2\cos x}{\cos^3x}+\frac{6\sin^2x}{\cos^4x}\\
&=\boxed{\frac{2(1+2\sin^2x)}{\cos^4x}}.
\end{aligned}
$$

以上は $\cos x\ne0$ の範囲で成り立つ。

### (2)

$f(0)=0$、$f'(0)=1$、$f''(0)=0$、$f^{(3)}(0)=2$ なので、Taylor 展開は

$$
\begin{gathered}
f(x)=x+\frac{2}{3!}x^3+o(x^3)\\
=x+\frac{x^3}3+o(x^3).
\end{gathered}
$$

したがって

$$
\boxed{\lim_{x\to0}\frac{f(x)-x}{x^3}=\frac13}.
$$

## **Reference**

- [大学公式問題（2023年度、PDF 1ページ）](https://www.eng.nagasaki-u.ac.jp/wp-content/uploads/2024/03/07_R5hakasezenki_joho_kiso.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE.html)
