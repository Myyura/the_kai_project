---
sidebar_label: "2022年度 基礎科目 [4]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Extrema
  - Mathematics.Calculus.Continuity-and-Differentiability
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mathbb R$ で定義された関数

$$
f(x)=\int_0^\infty|x+t\sin t|e^{-t}\,dt
$$

は最小値を持つことを示せ。

#### 题目描述

证明定义在 $\mathbb R$ 上的函数

$$
f(x)=\int_0^\infty|x+t\sin t|e^{-t}\,dt
$$

能取得最小值。

## **Kai**

$|x+t\sin t|\le |x|+t$ より $f(x)\le |x|+1<\infty$ である。また、逆三角不等式から

$$
|f(x)-f(y)|\le\int_0^\infty|x-y|e^{-t}\,dt=|x-y|.
$$

従って $f$ は連続である。一方、

$$
f(x)\ge\int_0^\infty(|x|-t)e^{-t}\,dt=|x|-1
$$

なので $f(x)\to\infty$ ($|x|\to\infty$)。特に $f(0)\le1$ であり、$|x|>3$ では $f(x)>2>f(0)$ である。連続関数 $f$ はコンパクト区間 $[-3,3]$ 上で最小値を取り、その値は $\mathbb R$ 全体での最小値でもある。

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 4ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)
