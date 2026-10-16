---
sidebar_label: "2024年度 [2]"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Mathematics.Calculus.Surface-Area-by-Double-Integral
---

# 東京農工大学 工学府 2024年度 共通数学 [2]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2024%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html) refined with GPT 6 Astra)

## **Description**

$D=\{(x,y)\mid x^2+y^2\le1,\ x\ge0\}$ とする。$(x,y)\in D$ における曲面 $z=xy+1$ の面積を求めよ。

#### 题目描述

设 $D=\{(x,y)\mid x^2+y^2\le1,\ x\ge0\}$。求曲面 $z=xy+1$ 在 $D$ 上的面积。

## **Kai**

$z_x=y$、$z_y=x$ より、面積要素は

$$
dS=\sqrt{1+z_x^2+z_y^2}\,dx\,dy=\sqrt{1+x^2+y^2}\,dx\,dy.
$$

極座標 $x=r\cos\theta$、$y=r\sin\theta$ を用いると、$0\le r\le1$、$-\pi/2\le\theta\le\pi/2$ である。したがって

$$
\begin{aligned}
S&=\int_{-\pi/2}^{\pi/2}\int_0^1r\sqrt{1+r^2}\,dr\,d\theta\\
&=\frac\pi3\left[(1+r^2)^{3/2}\right]_0^1
=\boxed{\frac{\pi(2\sqrt2-1)}3}.
\end{aligned}
$$

## **Reference**

- [大学公式問題（1ページ）](https://web.tuat.ac.jp/~tkakomon/r6/1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2024%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html)
