---
sidebar_label: "2024年度 基礎科目 [5]"
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$a$ を正の実数とする。次の広義積分の値を求めよ。

$$
\int_{-\infty}^\infty\frac{(\cos x-1)(x+1)}{x(x^2+a^2)}\,dx.
$$

#### 题目描述

设 $a>0$。计算反常积分

$$
\int_{-\infty}^\infty\frac{(\cos x-1)(x+1)}{x(x^2+a^2)}\,dx.
$$

## **Kai**

$x=0$ の近くでは $\cos x-1=O(x^2)$、無限遠では被積分関数は $O(x^{-2})$ なので、積分は絶対収束する。

$$
\frac{(\cos x-1)(x+1)}{x(x^2+a^2)}
=\frac{\cos x-1}{x^2+a^2}+\frac{\cos x-1}{x(x^2+a^2)}.
$$

第2項は奇関数であるため、その全実軸上の積分は $0$ である。上半平面の半円路で $e^{iz}/(z^2+a^2)$ に留数定理を用いると

$$
\int_{-\infty}^\infty\frac{e^{ix}}{x^2+a^2}\,dx
=2\pi i\frac{e^{-a}}{2ia}=\frac\pi a e^{-a}.
$$

また $\int_{-\infty}^\infty dx/(x^2+a^2)=\pi/a$ である。従って求める積分は

$$
\boxed{\frac\pi a(e^{-a}-1)}.
$$

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 5ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
