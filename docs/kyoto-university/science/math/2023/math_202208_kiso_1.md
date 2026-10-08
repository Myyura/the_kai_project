---
sidebar_label: "2023年度 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/index.html) refined with GPT 6 Astra)

## **Description**

領域

$$
D=\left\{(x,y,z)\in\mathbb R^3:\frac14\le x^2+y^2-2yz+4z^2\le1\right\}
$$

について、$\iiint_D\log(x^2+y^2-2yz+4z^2)\,dx\,dy\,dz$ を計算する。

#### 题目描述

设 $D=\{(x,y,z)\in\mathbb R^3:\tfrac14\le x^2+y^2-2yz+4z^2\le1\}$。求三重积分

$$
\iiint_D\log(x^2+y^2-2yz+4z^2)\,dx\,dy\,dz.
$$

## **Kai**

$u=x,\ v=y-z,\ w=\sqrt3z$ と置くと、二次形式は $u^2+v^2+w^2$ となり、$dx\,dy\,dz=du\,dv\,dw/\sqrt3$ である。変換後の領域は半径 $1/2$ と $1$ の球にはさまれた部分なので、球座標により

$$
\begin{aligned}
\iiint_D\log(x^2+y^2-2yz+4z^2)\,dx\,dy\,dz
&=\frac{4\pi}{\sqrt3}\int_{1/2}^1r^2\log r^2\,dr\\
&=\frac{4\pi}{\sqrt3}\left[\frac23r^3\log r-\frac29r^3\right]_{1/2}^1\\
&=\frac{\pi}{9\sqrt3}(3\log2-7).
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
