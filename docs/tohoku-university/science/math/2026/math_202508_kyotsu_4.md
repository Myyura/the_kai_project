---
sidebar_label: "2025年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2025年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$\mathbb{R}^2$ の部分集合

$$
D=\{(x,y)\in\mathbb{R}^2\mid 1<x+y<2,\ 0<x\le1,\ 0<y\le1\}
$$

における広義重積分

$$
I=\iint_D\frac{1}{xy\log(x+y-1)}\,dx\,dy
$$

の値を求めよ．

### 题目描述

设 $\mathbb{R}^2$ 的子集

$$
D=\{(x,y)\in\mathbb{R}^2\mid 1<x+y<2,\ 0<x\le1,\ 0<y\le1\}.
$$

求广义二重积分

$$
I=\iint_D\frac{1}{xy\log(x+y-1)}\,dx\,dy
$$

的值。

## **Kai**

$u=x+y,\ v=x-y$ とおくと

$$
x=\frac{u+v}{2},\qquad y=\frac{u-v}{2},\qquad
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\frac12.
$$

領域は $1<u<2,\ u-2\le v\le2-u$ に移る．被積分関数は負であるので，まずその絶対値を非負関数として積分する．固定した $1<u<2$ に対し

$$
\begin{aligned}
\int_{u-2}^{2-u}\frac{dv}{u^2-v^2}
&=\frac1{2u}\left[\log\frac{u+v}{u-v}\right]_{u-2}^{2-u}\\
&=-\frac{\log(u-1)}{u}.
\end{aligned}
$$

したがって，非負関数の積分に対する変数変換と Tonelli の定理により

$$
\begin{aligned}
\iint_D\left|\frac1{xy\log(x+y-1)}\right|\,dx\,dy
&=\int_1^2\frac{-2}{\log(u-1)}
  \left(\int_{u-2}^{2-u}\frac{dv}{u^2-v^2}\right)du\\
&=\int_1^2\frac2u\,du=2\log2<\infty.
\end{aligned}
$$

よって広義積分は絶対収束し，符号を戻して

$$
\boxed{I=-2\log2}.
$$

## **Reference**

- [東北大学公式問題（2026年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2026_R8_kyotsu.pdf)
- [L^2：2026年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#0c7bbb55-b851-4513-98ac-f3f2950360e6)
