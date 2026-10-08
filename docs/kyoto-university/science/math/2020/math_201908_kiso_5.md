---
sidebar_label: "2020年度 基礎科目 問題5"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Beta-Function
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\alpha$ は $0<\alpha<1$ を満たす定数とする。このとき広義積分

$$
\int_0^\infty\frac{x^\alpha}{1+x^2}\,dx
$$

を求めよ。

#### 题目描述

设 $0<\alpha<1$。求反常积分 $\displaystyle\int_0^\infty\frac{x^\alpha}{1+x^2}\,dx$。

## **Kai**

$x\to0+$ では被積分関数は $O(x^\alpha)$、$x\to\infty$ では $O(x^{\alpha-2})$ なので、仮定より積分は収束する。

$t=x^2$ および $p=(\alpha+1)/2\in(0,1)$ と置くと、

$$
\int_0^\infty\frac{x^\alpha}{1+x^2}\,dx
=\frac12\int_0^\infty\frac{t^{p-1}}{1+t}\,dt
=\frac12B(p,1-p).
$$

ベータ関数とガンマ関数の関係、および反射公式を用いて

$$
B(p,1-p)=\Gamma(p)\Gamma(1-p)=\frac{\pi}{\sin(\pi p)}.
$$

したがって求める値は

$$
\boxed{\frac{\pi}{2\cos(\pi\alpha/2)}}.
$$

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 5–6ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
