---
sidebar_label: "2013年8月実施 問題3（数学）"
tags:
  - Osaka-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Linear-Algebra.Rotation-Matrix
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 数学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

直交デカルト座標系（$xy$ 座標系）において、関数 $f(x,y)=xy$ と領域 $D:5x^2-6xy+5y^2\le8$ を考える。以下の問いに答えなさい。

1. 領域 $D$ を原点を中心に反時計回りに $45^\circ$ 回転して得られる領域を $D'$ とする。領域 $D'$ を数式で示しなさい。
2. 新たな直交デカルト座標系（$st$ 座標系）を考える。$xy$ 座標系から $st$ 座標系への線形写像により、領域 $D$ が領域 $\overline D:s^2+t^2\le1$ に写されるとき、その写像の関係式を一つ示しなさい。
3. 次の積分を求めなさい。

   $$
   \iint_D f(x,y)\,dx\,dy.
   $$

#### 题目描述

在直角坐标系中，设 $f(x,y)=xy$、$D:5x^2-6xy+5y^2\le8$。

1. 将区域 $D$ 绕原点逆时针旋转 $45^\circ$ 得到 $D'$，写出 $D'$ 的表达式。
2. 给出一个从 $xy$ 坐标到 $st$ 坐标的线性映射，使 $D$ 映为单位圆盘 $\overline D:s^2+t^2\le1$。
3. 计算 $\iint_D xy\,dx\,dy$。

## **Kai**

### (1)

回転後の座標を $(X,Y)$ とすると

$$
\begin{pmatrix}X\\Y\end{pmatrix}
=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix},\qquad
x=\frac{X+Y}{\sqrt2},\quad y=\frac{-X+Y}{\sqrt2}.
$$

これを領域の不等式に代入すれば $8X^2+2Y^2\le8$ となる。したがって、回転後の平面の座標を再び $(x,y)$ と書けば

$$
\boxed{D':x^2+\frac{y^2}{4}\le1}.
$$

### (2)

(1) の $X,Y$ に対して $s=X$、$t=Y/2$ とおけばよい。すなわち

$$
\boxed{s=\frac{x-y}{\sqrt2},\qquad t=\frac{x+y}{2\sqrt2}}.
$$

このとき $5x^2-6xy+5y^2=8(s^2+t^2)$ であり、確かに $D$ は単位円盤に写る。

### (3)

(2) の逆変換と Jacobian は

$$
x=\frac{s}{\sqrt2}+\sqrt2t,\qquad
y=-\frac{s}{\sqrt2}+\sqrt2t,\qquad
\left|\frac{\partial(x,y)}{\partial(s,t)}\right|=2.
$$

また $xy=-s^2/2+2t^2$ なので

$$
\iint_Dxy\,dx\,dy
=\iint_{s^2+t^2\le1}(-s^2+4t^2)\,ds\,dt.
$$

単位円盤の対称性と極座標表示から

$$
\iint_{s^2+t^2\le1}s^2\,ds\,dt
=\iint_{s^2+t^2\le1}t^2\,ds\,dt
=\int_0^1r^3\,dr\int_0^{2\pi}\cos^2\theta\,d\theta
=\frac\pi4.
$$

よって求める積分は

$$
\boxed{\iint_Dxy\,dx\,dy=\frac{3\pi}{4}}.
$$
