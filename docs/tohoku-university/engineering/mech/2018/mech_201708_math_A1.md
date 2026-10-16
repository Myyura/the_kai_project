---
sidebar_label: "2017年8月実施 数学A 第1問"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Vector-Calculus.Scalar-Line-Integral
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学A 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

1. 次の関数の $x=0$ の近傍における3次までのテイラー展開を求めよ。a) $e^x\cos x$、b) $\log_e(1+\sin x)$。
2. $C_1$ を $(0,0)$ と $(1,2)$ を結ぶ線分、$s$ をその弧長変数とする。$\int_{C_1}(x^2-y)\,ds$ を求めよ。
3. $C_2:y=x^2/2$（$0\le x\le1$）とし、$s$ を弧長変数とする。$\int_{C_2}(x+1)\,ds$ を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

（1）求 $e^x\cos x$ 和 $\log_e(1+\sin x)$ 在零点附近的三阶泰勒展开。（2）$C_1$ 为从 $(0,0)$ 至 $(1,2)$ 的线段，$s$ 为弧长，求 $\int_{C_1}(x^2-y)ds$。（3）$C_2$ 为 $y=x^2/2$、$0\le x\le1$ 的抛物线段，求 $\int_{C_2}(x+1)ds$。

## **Kai**

### (1)

#### a)

$$
e^x\cos x=\left(1+x+\frac{x^2}2+\frac{x^3}6\right)\left(1-\frac{x^2}2\right)+O(x^4)
=\boxed{1+x-\frac{x^3}3+O(x^4)}.
$$

#### b)

$\sin x=x-x^3/6+O(x^5)$ を $\log(1+u)=u-u^2/2+u^3/3+O(u^4)$ に代入して

$$
\boxed{\log(1+\sin x)=x-\frac{x^2}2+\frac{x^3}6+O(x^4)}.
$$

### (2)

$(x,y)=(t,2t)$、$0\le t\le1$ とおけば $ds=\sqrt5\,dt$。従って

$$
\int_{C_1}(x^2-y)\,ds=\sqrt5\int_0^1(t^2-2t)\,dt
=\boxed{-\frac{2\sqrt5}{3}}.
$$

### (3)

$dy/dx=x$ より $ds=\sqrt{1+x^2}\,dx$。したがって

$$
\int_{C_2}(x+1)\,ds=\int_0^1(x+1)\sqrt{1+x^2}\,dx.
$$

原始関数は

$$
\frac{(1+x^2)^{3/2}}3+\frac12\left[x\sqrt{1+x^2}+\log\left(x+\sqrt{1+x^2}\right)\right].
$$

上下限を代入して

$$
\boxed{\frac{7\sqrt2}{6}-\frac13+\frac12\log(1+\sqrt2)}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 2ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
