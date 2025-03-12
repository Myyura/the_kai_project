---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 確率・統計
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
$\Omega = \{(x, y) \in \mathbb{R}^2 \mid 0 \le x \le 1, 0 \le y \le 1 \}$ とする. 連続確率変数の対 $(X, Y)$ の同時密度関数は

$$
f(x, y) = \frac{1}{C} (e^{-x} + e^{-y}) \ \ \ (x, y) \in \Omega
$$

で与えられるものとする. ただし $C > 0$ は正規化定数である. 以下の各問に答えよ.

(1) $C$ の値を求めよ.

(2) $X$ と $Y$ は独立か否か, 理由と共に答えよ.

(3) $Y = 0$ の条件の下での $X$ の期待値を求めよ.

## **Kai**
### (1)

$$
  \begin{aligned}
  1
  &=
  \iint_\Omega f(x,y) dx dy
  \\
  &=
  \frac{1}{C} \left\{
  \int_0^1 e^{-x} dx \int_0^1 dy
  + \int_0^1 dx \int_0^1 e^{-y} dy
  \right\}
  \\
  &=
  \frac{1}{C} \frac{2(e-1)}{e}
  \\
  \therefore \ \ 
  C &= \frac{2(e-1)}{e}
  \end{aligned}
$$

### (2)
$X,Y$ の周辺確率密度関数をそれぞれ $f_X(x), f_Y(y)$ とすると、

$$
  \begin{aligned}
  f_X(x)
  &=
  \int_0^1 f(x,y) dy
  \\
  &=
  \frac{1}{C} \int_0^1 (e^{-x} + e^{-y}) dy
  \\
  &=
  \frac{e}{2(e-1)} e^{-x} + \frac{1}{2}
  \\
  f_Y(y)
  &=
  \frac{e}{2(e-1)} e^{-y} + \frac{1}{2}
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  f(x,y) \ne f_X(x) f_Y(y)
  \end{aligned}
$$

であるから、$X$ と $Y$ は独立ではない。

### (3)
$Y=0$ の条件の下での $X$ の確率密度関数を $f_{X \mid Y=0} (x)$
とすると、

$$
  \begin{aligned}
  f_{X \mid Y=0} (x)
  &=
  \frac{f(x,0)}{f_Y(0)}
  \\
  &=
  \frac{e(e^{-x} + 1)}{2e-1}
  \end{aligned}
$$

であるから、求める期待値は、

$$
  \begin{aligned}
  E(X \mid Y=0)
  &=
  \int_0^1 x f_{X \mid Y=0} (x) dx
  \\
  &=
  \frac{e}{2e-1} \int_0^1 x (e^{-x} + 1) dx
  \\
  &=
  \frac{3e-4}{2(2e-1)}
  \end{aligned}
$$

である。