---
sidebar_label: "2022年8月実施 第1期 土木工学基礎 問1"
tags:
  - Utsunomiya-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Indefinite-Integral
---

# 宇都宮大学 地域創生科学研究科 社会デザイン科学専攻 土木工学プログラム 2022年8月実施 第1期 土木工学基礎 問1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

(1) 次の関数を $x$ で微分しなさい。

$$
y=x\sqrt{x}
$$

(2) 次の不定積分を求めなさい。

$$
\int\frac{1}{\sqrt{2x-x^2}}\,dx
$$

#### 题目描述

(1) 对以下函数关于 $x$ 求导：

$$
y=x\sqrt{x}.
$$

(2) 求以下不定积分：

$$
\int\frac{1}{\sqrt{2x-x^2}}\,dx.
$$

## **Kai**

### (1)

$y=x^{3/2}$ より $\boxed{dy/dx=\frac32\sqrt{x}}$。

### (2)

実数範囲では $0<x<2$。$2x-x^2=1-(x-1)^2$ なので、$u=x-1$ と置換すれば

$$
\begin{gathered}
\int\frac{dx}{\sqrt{2x-x^2}}
=\int\frac{du}{\sqrt{1-u^2}}\\
=\boxed{\arcsin(x-1)+C}.
\end{gathered}
$$

## **Reference**

- [宇都宮大学公式問題（PDF 3頁）](https://admission.utsunomiya-u.ac.jp/docs/2023doboku.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html)
