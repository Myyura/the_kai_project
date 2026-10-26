---
sidebar_label: "2021年9月実施 必修問題1"
tags:
  - Saitama-University
  - Mathematics.Calculus.Multivariable-Taylor-Expansion
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Calculus.Double-Integral
---

# 埼玉大学 理工学研究科 機械科学専攻 2021年9月実施 必修問題1

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E5%9F%BC%E7%8E%89%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B49%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%BF%85%E4%BF%AE%E5%95%8F%E9%A1%8C.html) refined with GPT 6 Astra)

## **Description**

(1) 次の関数の2階の偏微分 $\dfrac{\partial^2}{\partial x^2},\dfrac{\partial^2}{\partial x\partial y},\dfrac{\partial^2}{\partial y^2}$ を求めよ。

(Answer the second derivative $\dfrac{\partial^2}{\partial x^2},\dfrac{\partial^2}{\partial x\partial y},\dfrac{\partial^2}{\partial y^2}$ of the following function.)

$$
f(x,y)=\log(x+y^2)
$$

(2) 関数 $f(x,y)=\sin x+\cos y+\sin(x+y)$ について、$|h|$ と $|k|$ は十分小さいとして、$f\left(\dfrac\pi3+h,\dfrac\pi3+k\right)$ の2次近似式を求めよ。

(For the function $f(x,y)=\sin x+\sin2y+\sin(x+y)$, find a quadratic approximation of $f\left(\dfrac\pi3+h,\dfrac\pi3+k\right)$, where $h$ and $k$ are small enough.)

(3) 次の関数で表される曲面について、点 $\left(1,1,\dfrac12\right)$ における接平面と法線を求めよ。

(Find the tangent plane and normal at the point $\left(1,1,\dfrac12\right)$ for the curved surface represented by the following function.)

$$
z=\frac1{x^2+y^2}
$$

(4) 円柱 $x^2+y^2=9$ と $xy$ 平面および $x+z=3$ で囲まれた立体の体積を重積分を用いて求めなさい。

(Find the volume of the solid surrounded by the cylinder $x^2+y^2=9$, $xy$ plane and $x+z=3$ using multiple integrals.)

(2) は日本語題文の関数を採用する。原問題の英語題文では第2項が $\sin2y$ となっているため、その場合の近似式も解答に付記する。

### 题目描述

(1) 求下列函数的二阶偏导数 $\dfrac{\partial^2f}{\partial x^2},\dfrac{\partial^2f}{\partial x\partial y},\dfrac{\partial^2f}{\partial y^2}$。

$$
f(x,y)=\log(x+y^2)
$$

(2) 对于函数 $f(x,y)=\sin x+\cos y+\sin(x+y)$，设 $|h|,|k|$ 足够小，求 $f\left(\dfrac\pi3+h,\dfrac\pi3+k\right)$ 的二阶近似式。原卷英文题干中的函数为 $f(x,y)=\sin x+\sin2y+\sin(x+y)$，其余条件和求解要求相同。解答以日文版本为主，另附英文版本的近似式。

(3) 对下列函数表示的曲面，求其在点 $\left(1,1,\dfrac12\right)$ 处的切平面和法线。

$$
z=\frac1{x^2+y^2}
$$

(4) 用重积分求圆柱 $x^2+y^2=9$、$xy$ 平面以及平面 $x+z=3$ 所围立体的体积。

## **Kai**

### (1)

実数値関数の定義域は $x+y^2>0$ である。1階偏導関数は $f_x=1/(x+y^2)$、$f_y=2y/(x+y^2)$ なので、

$$
\boxed{\begin{gathered}
f_{xx}=-\frac1{(x+y^2)^2},\\
f_{xy}=-\frac{2y}{(x+y^2)^2},\\
f_{yy}=\frac{2(x-y^2)}{(x+y^2)^2}
\end{gathered}}.
$$

### (2)

展開点で

$$
\begin{gathered}
f_0=\sqrt3+\frac12,\\
(f_x,f_y)_0=\left(0,-\frac{\sqrt3+1}{2}\right),\\
(f_{xx},f_{xy},f_{yy})_0=\left(-\sqrt3,-\frac{\sqrt3}{2},-\frac{\sqrt3+1}{2}\right).
\end{gathered}
$$

したがって2変数のTaylor展開より

$$
\boxed{\begin{aligned}&f\left(\frac\pi3+h,\frac\pi3+k\right)\\
&=\sqrt3+\frac12-\frac{\sqrt3+1}{2}k\\
&\quad-\frac{\sqrt3}{2}h^2-\frac{\sqrt3}{2}hk-\frac{\sqrt3+1}{4}k^2\\
&\quad+O\bigl((|h|+|k|)^3\bigr)
\end{aligned}}.
$$

英語題文の $\widetilde f=\sin x+\sin2y+\sin(x+y)$ に従う場合は、同様に

$$
\begin{aligned}
&\widetilde f\left(\frac\pi3+h,\frac\pi3+k\right)\\
&=\frac{3\sqrt3}{2}-\frac32k-\frac{\sqrt3}{2}h^2\\
&\quad-\frac{\sqrt3}{2}hk-\frac{5\sqrt3}{4}k^2\\
&\quad+O\bigl((|h|+|k|)^3\bigr).
\end{aligned}
$$

### (3)

$z_x=z_y=-1/2$ が点 $(1,1)$ で成り立つ。よって接平面は

$$
z-\frac12=-\frac12(x-1)-\frac12(y-1),\qquad
\boxed{x+y+2z=3}.
$$

法線方向は $(1,1,2)$ であるから、法線は

$$
\boxed{(x,y,z)=\left(1,1,\frac12\right)+t(1,1,2)\quad(t\in\mathbb R)}.
$$

### (4)

底面 $D=\{x^2+y^2\le9\}$ 上の高さは $3-x\ge0$ である。極座標を用いると

$$
V=\iint_D(3-x)\,dx\,dy
=\int_0^{2\pi}\int_0^3(3-r\cos\theta)r\,dr\,d\theta
=\boxed{27\pi}.
$$

## **Reference**

- [大学公式問題（PDF 1ページ）](https://web.archive.org/web/20221204115617id_/http://www.mech.saitama-u.ac.jp/admission/archive/2021_09_hissyuu.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E5%9F%BC%E7%8E%89%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B49%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%BF%85%E4%BF%AE%E5%95%8F%E9%A1%8C.html)
