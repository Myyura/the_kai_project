---
sidebar_label: "2024年度 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題1

## **Author**

[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

$$
D=\{(x,y)\in\mathbb R^2:x\ge0,\ y\ge0,\ (x^2+y^2)^2\le x^2+2y^2\}
$$

上の積分 $\iint_Dxy e^{1-x^2-y^2}\,dx\,dy$ を求める。

#### 题目描述

设 $D=\{(x,y)\in\mathbb R^2:x\ge0,\ y\ge0,\ (x^2+y^2)^2\le x^2+2y^2\}$。求 $\iint_D xy e^{1-x^2-y^2}\,dx\,dy$。

## **Kai**

極座標 $x=r\cos\theta,\ y=r\sin\theta$ を使うと、$0\le\theta\le\pi/2$、$0\le r^2\le1+\sin^2\theta$ である。$u=\sin^2\theta,\ v=r^2$ と変数変換すれば、

$$
\begin{aligned}
\iint_Dxy e^{1-x^2-y^2}\,dx\,dy
&=\frac14\int_0^1\int_0^{1+u}v e^{1-v}\,dv\,du\\
&=\frac14\int_0^1\bigl(e-(2+u)e^{-u}\bigr)\,du\\
&=\frac14\left(e-3+\frac4e\right).
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
