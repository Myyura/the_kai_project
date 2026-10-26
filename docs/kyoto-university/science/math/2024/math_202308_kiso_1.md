---
sidebar_label: "2023年8月実施 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年8月実施 基礎科目 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/index.html) refined with GPT 6 Astra)

## **Description**

$\mathbb R^2$ の部分集合 $D$ を

$$
D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0,\ (x^2+y^2)^2\le x^2+2y^2\}
$$

で定める。積分

$$
\iint_Dxy e^{1-x^2-y^2}\,dx\,dy
$$

の値を求めよ。

### 题目描述

定义 $\mathbb R^2$ 的子集 $D$ 为

$$
D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0,\ (x^2+y^2)^2\le x^2+2y^2\}.
$$

求积分

$$
\iint_Dxy e^{1-x^2-y^2}\,dx\,dy
$$

的值。

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
