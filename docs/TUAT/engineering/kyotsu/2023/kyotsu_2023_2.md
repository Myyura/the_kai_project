---
sidebar_label: "2023年度 [2]"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Mathematics.Calculus.Triple-Integral
---

# 東京農工大学 工学府 2023年度 共通数学 [2]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html) refined with GPT 6 Astra)

## **Description**

$0\le y\le1-x^2$、$x^2y+y^2\le z\le y$ によって表される立体の体積を求めよ。

#### 题目描述

求不等式 $0\le y\le1-x^2$、$x^2y+y^2\le z\le y$ 所表示的立体体积。

## **Kai**

$0\le y\le1-x^2$ より $-1\le x\le1$ である。また、この範囲で

$$
y-(x^2y+y^2)=y(1-x^2-y)\ge0
$$

なので、指定された上下限は矛盾しない。体積は

$$
\begin{aligned}
V&=\int_{-1}^1\int_0^{1-x^2}\int_{x^2y+y^2}^y dz\,dy\,dx\\
&=\int_{-1}^1\int_0^{1-x^2}y(1-x^2-y)\,dy\,dx\\
&=\frac16\int_{-1}^1(1-x^2)^3\,dx\\
&=\frac13\left(1-1+\frac35-\frac17\right)
=\boxed{\frac{16}{105}}.
\end{aligned}
$$

## **Reference**

- [大学公式問題（1ページ）](https://web.tuat.ac.jp/~tkakomon/r5/1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html)
