---
sidebar_label: "2025年度 第一期 数学 3"
tags:
  - Kobe-University
  - Differential-Equation
---
# 神戸大学 システム情報学研究科 2025年度 第一期 数学 3

## **Author**
祭音Myyura

## **Description**
独立変数 $x$，従属変数 $y$ に関する微分方程式

$$
\begin{align}
y'' + a(x)y' + b(x)y = 0 \tag{*}
\end{align}
$$

の二つの解 $y=y_1(x),y_2(x)$ に対し，ロンスキアン $W(x)$ を次式で定義する：

$$
W(x)=
\begin{vmatrix}
y_1(x) & y_2(x) \\
y_1'(x) & y_2'(x)
\end{vmatrix}
$$

(1) $W(x)$ が微分方程式

$$
   W' = -a(x)W
$$

を満たすことを示せ。

(2) $x \geq 0$ とする。$a(x), b(x)$ および微分方程式 $(*)$ の解の一つ $y_1(x)$ を

$$
   a(x)=-\frac{3x+4}{3x+1},\qquad
   b(x)=-\frac{6x+5}{3x+1},\qquad
   y_1(x)=e^{-x}
$$

で与える。また $y_2(0)=0,\ y_2'(0)=1$ とする。$W(x)$ と $y_2(x)$ を求めよ。

## **Kai**
### (1)

$$
W(x)=y_1y_2'-y_1'y_2
$$

なので

$$
W'(x)
= y_1'y_2' + y_1y_2'' - y_1''y_2 - y_1'y_2'
= y_1y_2'' - y_1''y_2.
$$

微分方程式 $(*)$ から

$$
y_j'' = -a(x)y_j' - b(x)y_j \quad (j=1,2)
$$

だから

$$
\begin{aligned}
W'
&= y_1(-a y_2' - b y_2) - (-a y_1' - b y_1)y_2 \\
&= -a(y_1y_2' - y_1'y_2) \\
&= -a(x)W.
\end{aligned}
$$

したがって $W'=-a(x)W$ が示された。

### (2)
#### まず (W(x))
(1) より

$$
W'=-aW,\qquad a(x)=-\frac{3x+4}{3x+1}.
$$

したがって

$$
\frac{W'}{W}=-a(x)=\frac{3x+4}{3x+1}.
$$

積分して

$$
\int \frac{W'}{W}dx = \int \frac{3x+4}{3x+1}dx
\quad\Rightarrow\quad
\ln W = x+\ln(3x+1)+C.
$$

よって

$$
W(x)=C e^{x}(3x+1).
$$

初期条件から定数 $C$ を決める。
$x=0$ のとき

$$
W(0)=
\begin{vmatrix}
1 & 0\\
-1& 1
\end{vmatrix}
=1.
$$

一方

$$
W(0)=C e^{0}(3\cdot 0+1)=C.
$$

ゆえに $C=1$ で

$$
\boxed{W(x)=e^{x}(3x+1)}.
$$

#### 次に $y_2(x)$
ロンスキアンの定義

$$
W = y_1y_2' - y_1'y_2
$$

に $y_1=e^{-x},\ y_1'=-e^{-x},\ W=e^{x}(3x+1)$ を代入すると

$$
e^{-x}y_2' - (-e^{-x})y_2
= e^{-x}(y_2'+y_2)
= e^{x}(3x+1).
$$

両辺に $e^{x}$ を掛けて

$$
y_2' + y_2 = e^{2x}(3x+1).
$$

これは一次線形微分方程式。解いていく：

$$
y_2' + y_2 = e^{2x}(3x+1).
$$

左辺の積分因子は $e^{x}$ なので

$$
(e^{x}y_2)' = e^{x}e^{2x}(3x+1)=e^{3x}(3x+1).
$$

積分すると

$$
e^{x}y_2 = \int e^{3x}(3x+1)dx + C
= x e^{3x} + C,
$$

よって

$$
y_2(x) = x e^{2x} + C e^{-x}.
$$

初期条件 $y_2(0)=0$ から

$$
0 = 0\cdot e^{0} + C e^{0} \Rightarrow C=0,
$$

したがって

$$
\boxed{y_2(x)=x e^{2x}}.
$$

（このとき $y_2'(x)=e^{2x}(2x+1)$ なので $y_2'(0)=1$ も満たしている。）
