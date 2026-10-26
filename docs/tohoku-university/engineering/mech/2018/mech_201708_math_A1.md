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

1. 以下の問いに答えよ。

**(1)** 次の関数の $x=0$ の近傍における3次までのテイラー展開を求めよ。

- a) $e^x\cos x$
- b) $\log_e(1+\sin x)$

**(2)** $C_1$ を点 $(0,0)$ と点 $(1,2)$ を結ぶ線分とするとき，次の $C_1$ に沿った線積分を求めよ。ただし，$s$ は $C_1$ の弧長変数である。

$$
\int_{C_1}(x^2-y)\,ds
$$

**(3)** $C_2$ を次の放物線の一部

$$
C_2:y=\frac12x^2\quad(0\le x\le1)
$$

とするとき，次の $C_2$ に沿った線積分を求めよ。ただし，$s$ は $C_2$ の弧長変数である。

$$
\int_{C_2}(x+1)\,ds
$$

### 题目描述

1. 回答下列问题。

**(1)** 求下列函数在 $x=0$ 附近展开至三次项的泰勒展开。

- a) $e^x\cos x$
- b) $\log_e(1+\sin x)$

**(2)** 设 $C_1$ 为连接点 $(0,0)$ 与 $(1,2)$ 的线段，求下列沿 $C_1$ 的线积分，其中 $s$ 为 $C_1$ 的弧长变量。

$$
\int_{C_1}(x^2-y)\,ds
$$

**(3)** 设 $C_2$ 为下列抛物线的一部分：

$$
C_2:y=\frac12x^2\quad(0\le x\le1).
$$

求下列沿 $C_2$ 的线积分，其中 $s$ 为 $C_2$ 的弧长变量。

$$
\int_{C_2}(x+1)\,ds
$$

## **Kai**

### (1)

#### a)

$$
\begin{gathered}
e^x\cos x=\left(1+x+\frac{x^2}2+\frac{x^3}6\right)\left(1-\frac{x^2}2\right)+O(x^4)\\
=\boxed{1+x-\frac{x^3}3+O(x^4)}.
\end{gathered}
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
