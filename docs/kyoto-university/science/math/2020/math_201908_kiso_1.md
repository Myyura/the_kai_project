---
sidebar_label: "2020年度 基礎科目 問題1"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Triple-Integral
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の積分を計算せよ。

$$
\iiint_D xyz\,dx\,dy\,dz.
$$

ただし、$D=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2\le1,\ x\ge0,\ y\ge0,\ z\ge0\}$ とする。

#### 题目描述

设 $D=\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2\le1,\ x,y,z\ge0\}$。计算 $\displaystyle\iiint_D xyz\,dx\,dy\,dz$。

## **Kai**

領域の内部で $u=x^2,v=y^2,w=z^2$ と変数変換すると、

$$
xyz\,dx\,dy\,dz=\frac18\,du\,dv\,dw.
$$

変換後の領域は $u,v,w\ge0,\ u+v+w\le1$ である。よって

$$
\begin{aligned}
\iiint_D xyz\,dx\,dy\,dz
&=\frac18\int_0^1\int_0^{1-u}\int_0^{1-u-v}dw\,dv\,du\\
&=\frac1{16}\int_0^1(1-u)^2\,du\\
&=\boxed{\frac1{48}}.
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
