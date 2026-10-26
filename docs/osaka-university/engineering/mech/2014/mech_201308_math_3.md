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

問題3（解答用紙：青）

直交デカルト座標系（$xy$ 座標系）において、関数 $f(x,y)$ と領域 $D$ が、それぞれ

$$
f(x,y)=xy
$$

および、

$$
D:\ 5x^2-6xy+5y^2\le8
$$

と与えられたとき、以下の問いに答えなさい。

(1) 領域 $D$ を原点を中心として反時計回りに $45^\circ$ 回転させる。この領域を $D'$ とするとき、$D'$ を表す式を示しなさい。

(2) 新たに直交デカルト座標系（$st$ 座標系）を導入し、$xy$ 座標系から $st$ 座標系への線形写像を考える。これにより、領域 $D$ が、

$$
\bar D:\ s^2+t^2\le1
$$

で表される領域 $\bar D$ に写像されるとき、$xy$ 座標系における任意の点の座標 $(x,y)$ と、これに対応する点の $st$ 座標系における座標 $(s,t)$ の関係を1つ示しなさい。

(3) $\displaystyle\int_D f(x,y)\,dx\,dy$ を求めなさい。

### 题目描述

问题3（使用蓝色答题纸）

在直角笛卡尔坐标系（$xy$ 坐标系）中，函数 $f(x,y)$ 和区域 $D$ 分别为

$$
f(x,y)=xy,\qquad D:\ 5x^2-6xy+5y^2\le8.
$$

回答下列问题。

(1) 将区域 $D$ 绕原点逆时针旋转 $45^\circ$，得到区域 $D'$。给出表示 $D'$ 的式子。

(2) 引入新的直角笛卡尔坐标系（$st$ 坐标系），考虑从 $xy$ 坐标系到 $st$ 坐标系的线性映射，使区域 $D$ 映射到

$$
\bar D:\ s^2+t^2\le1.
$$

给出任一点在 $xy$ 坐标系中的坐标 $(x,y)$ 与对应点在 $st$ 坐标系中的坐标 $(s,t)$ 之间的一种关系。

(3) 求 $\displaystyle\int_D f(x,y)\,dx\,dy$。

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
\begin{gathered}
\iint_{s^2+t^2\le1}s^2\,ds\,dt
=\iint_{s^2+t^2\le1}t^2\,ds\,dt\\
=\int_0^1r^3\,dr\int_0^{2\pi}\cos^2\theta\,d\theta\\
=\frac\pi4.
\end{gathered}
$$

よって求める積分は

$$
\boxed{\iint_Dxy\,dx\,dy=\frac{3\pi}{4}}.
$$
