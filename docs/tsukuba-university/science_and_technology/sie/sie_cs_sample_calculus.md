---
sidebar_label: "情報理工学位プログラム 問題例 解析学"
tags:
  - Tsukuba-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Double-Integral
---

# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 問題例 解析学

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E8%A7%A3%E6%9E%90%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

**問1** $\displaystyle\lim_{x\to0}\frac{x^3}{x-\sin x}$ の答えを以下から選びなさい。

① $1$、② $2$、③ $3$、④ $6$、⑤ $0$、⑥ $-6$、⑦ $-3$、⑧ $-2$、⑨ $-1$

**問2** $\displaystyle\int_0^\infty\int_0^\infty\frac{dx\,dy}{(1+x^2)(1+y^2)}$ の答えを以下から選びなさい。

① $1$、② $\dfrac13$、③ $\dfrac14$、④ $0$、⑤ $\dfrac\pi4$、⑥ $\dfrac{\pi^2}4$、⑦ $\pi$、⑧ $2\pi$、⑨ $\pi^2$

### 题目描述

**问1** 从以下选项中选择 $\displaystyle\lim_{x\to0}\frac{x^3}{x-\sin x}$ 的答案。

① $1$、② $2$、③ $3$、④ $6$、⑤ $0$、⑥ $-6$、⑦ $-3$、⑧ $-2$、⑨ $-1$

**问2** 从以下选项中选择 $\displaystyle\int_0^\infty\int_0^\infty\frac{dx\,dy}{(1+x^2)(1+y^2)}$ 的答案。

① $1$、② $\dfrac13$、③ $\dfrac14$、④ $0$、⑤ $\dfrac\pi4$、⑥ $\dfrac{\pi^2}4$、⑦ $\pi$、⑧ $2\pi$、⑨ $\pi^2$

## **Kai**

### 問1

$\sin x=x-x^3/6+O(x^5)$ より、

$$
\begin{gathered}
\lim_{x\to0}\frac{x^3}{x-\sin x}
=\lim_{x\to0}\frac1{1/6+O(x^2)}\\
=\boxed{6\text{（④）}}.
\end{gathered}
$$

### 問2

被積分関数は非負で、各一変数積分は収束するから、

$$
\begin{gathered}
\int_0^\infty\int_0^\infty\frac{dx\,dy}{(1+x^2)(1+y^2)}
=\left([\arctan x]_0^\infty\right)^2\\
=\boxed{\frac{\pi^2}{4}\text{（⑥）}}.
\end{gathered}
$$

## **Reference**

- [大学公式問題（PDF 1ページ）](https://www.cs.tsukuba.ac.jp/admission/problem.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E8%A7%A3%E6%9E%90%E5%AD%A6.html)
