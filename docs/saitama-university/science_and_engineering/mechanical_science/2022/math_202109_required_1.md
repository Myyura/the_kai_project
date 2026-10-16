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

次の問いに答えよ。

1. $f(x,y)=\log(x+y^2)$ の2階偏導関数 $f_{xx},f_{xy},f_{yy}$ を求めよ。
2. $f(x,y)=\sin x+\cos y+\sin(x+y)$ について、$|h|,|k|$ が十分小さいときの $f(\pi/3+h,\pi/3+k)$ の2次近似式を求めよ。
3. 曲面 $z=1/(x^2+y^2)$ の点 $(1,1,1/2)$ における接平面と法線を求めよ。
4. 円柱 $x^2+y^2=9$、$xy$ 平面、および平面 $x+z=3$ で囲まれた立体の体積を重積分で求めよ。

(2)は日本語題文の関数を採用する。原問題の英語題文では第2項が $\sin2y$ となっているため、その場合の近似式も解答に付記する。

#### 题目描述

1. 求 $f=\log(x+y^2)$ 的三个二阶偏导数。
2. 对 $f=\sin x+\cos y+\sin(x+y)$，求 $(\pi/3,\pi/3)$ 附近增量为 $(h,k)$ 的二阶近似。原卷英文版本把第二项写作 $\sin2y$，解答另列该版本。
3. 求曲面 $z=1/(x^2+y^2)$ 在 $(1,1,1/2)$ 处的切平面和法线。
4. 用重积分求圆柱 $x^2+y^2=9$、$z=0$ 与 $x+z=3$ 围成的体积。

## **Kai**

### (1)

実数値関数の定義域は $x+y^2>0$ である。1階偏導関数は $f_x=1/(x+y^2)$、$f_y=2y/(x+y^2)$ なので、

$$
\boxed{f_{xx}=-\frac1{(x+y^2)^2},\qquad
f_{xy}=-\frac{2y}{(x+y^2)^2},\qquad
f_{yy}=\frac{2(x-y^2)}{(x+y^2)^2}}.
$$

### (2)

展開点で

$$
f_0=\sqrt3+\frac12,\quad (f_x,f_y)_0=\left(0,-\frac{\sqrt3+1}{2}\right),\quad
(f_{xx},f_{xy},f_{yy})_0=\left(-\sqrt3,-\frac{\sqrt3}{2},-\frac{\sqrt3+1}{2}\right).
$$

したがって2変数のTaylor展開より

$$
\boxed{f\left(\frac\pi3+h,\frac\pi3+k\right)
=\sqrt3+\frac12-\frac{\sqrt3+1}{2}k
-\frac{\sqrt3}{2}h^2-\frac{\sqrt3}{2}hk-\frac{\sqrt3+1}{4}k^2
+O\bigl((|h|+|k|)^3\bigr)}.
$$

英語題文の $\widetilde f=\sin x+\sin2y+\sin(x+y)$ に従う場合は、同様に

$$
\widetilde f\left(\frac\pi3+h,\frac\pi3+k\right)
=\frac{3\sqrt3}{2}-\frac32k-\frac{\sqrt3}{2}h^2
-\frac{\sqrt3}{2}hk-\frac{5\sqrt3}{4}k^2
+O\bigl((|h|+|k|)^3\bigr).
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
