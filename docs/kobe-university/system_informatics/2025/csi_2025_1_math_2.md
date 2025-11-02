---
sidebar_label: "2025年度 第一期 数学 2"
tags:
  - Kobe-University
  - Complex-Analysis
---
# 神戸大学 システム情報学研究科 2025年度 第一期 数学 2

## **Author**
祭音Myyura

## **Description**
複素関数 $f(z)=e^{z/4},\ g(z)=e^{z}+1$ を考える。
また，$R$ を正の実定数とし，複素平面上の始点 $-R$ から終点 $R$ に至る線分を $C_1$，始点 $R$ から終点 $R+2\pi i$ に至る線分を $C_2$，
始点 $R+2\pi i$ から終点 $-R+2\pi i$ に至る線分を $C_3$，始点 $-R+2\pi i$ から終点 $-R$ に至る線分を $C_4$ とする。
そして $C=C_1\cup C_2\cup C_3\cup C_4$ とおく（反時計回りの長方形経路）。

(1) $g(z)=0$ を満たす複素数をすべて求めよ。

(2) (1) で求めた複素数が $\frac{f(z)}{g(z)}$ の $1$ 位の極であることを用いて，複素積分 $\int_C \frac{f(z)}{g(z)}dz$ の値を求めよ。

(3) $\lim_{R\to\infty}\int_{C_2} \frac{f(z)}{g(z)}dz=0$ および $\lim_{R\to\infty}\int_{C_4} \frac{f(z)}{g(z)} dz=0$ を示せ。

(4) (2) と (3) の結果を用いて，積分 $\int_{-\infty}^{\infty}\frac{e^{x/4}}{e^x+1} dx$ の値を求めよ。

## **Kai**
### (1)
$e^{z}+1=0\iff e^{z}=-1=e^{i(2k+1)\pi}\ (k\in\mathbb Z)$。
指数関数の周期性より

$$
\boxed{z=(2k+1)\pi i\quad(k\in\mathbb Z), } .
$$

### (2)
(1) の各点は $g(z)$ の単純零点なので，$\frac{f}{g}$ はそこで $1$ 位の極をもつ。
長方形領域 $0<\text{Im} z<2\pi$ に含まれる極は $z_0=\pi i$ のみ。

単純零点 $z_0$ における留数は

$$
\operatorname{Res}\left(\frac{f}{g},z_0\right)=\frac{f(z_0)}{g'(z_0)}
=\frac{e^{z_0/4}}{e^{z_0}}=e^{-3z_0/4}.
$$

ゆえに

$$
\int_C \frac{f(z)}{g(z)} dz
=2\pi i  e^{-3\pi i/4}.
\tag{★}
$$

### (3)
$C_2:\ z=R+iy\ (0\le y\le 2\pi)$ とおくと

$$
\left|\frac{f(z)}{g(z)}\right|
=\frac{|e^{R/4}e^{iy/4}|}{|e^{R}e^{iy}+1|}
\le \frac{e^{R/4}}{e^{R}-1}
=O(e^{-3R/4}).
$$

$C_2$ の長さは $2\pi$ なので $\int_{C_2}\frac{f}{g} dz\to 0 \ (R \to \infty)$。

同様に $C_4:\ z=-R+iy$ では

$$
\left|\frac{f(z)}{g(z)}\right|
=\frac{e^{-R/4}}{|e^{-R}e^{iy}+1|}
\leq \frac{e^{-R/4}}{1 - e^{-R}} \to 0 \ (R \to \infty),
$$

よって $\int_{C_4}\frac{f}{g} dz\to 0 \ (R \to \infty)$。

### (4)
経路積分を $4$ 辺に分ける。

$C_1:\ z=x\ (-R\le x\le R)$ では

$$
\int_{C_1}\frac{f}{g}dz=\int_{-R}^{R}\frac{e^{x/4}}{e^x+1}dx=:I_R.
$$

$C_3:\ z=x+2\pi i\ (R\to -R)$。$dz=dx$ かつ向きは逆なので

$$
\int_{C_3}\frac{f}{g}dz
=-\int_{-R}^{R}\frac{e^{(x+2\pi i)/4}}{e^{x+2\pi i}+1}dx
=-i\int_{-R}^{R}\frac{ e^{x/4}}{e^{x}+1}dx
=-iI_R,
$$

(3) より $\int_{C_2}\to0,\ \int_{C_4}\to0$。したがって

$$
\int_C\frac{f}{g}dz
=\lim_{R\to\infty}\bigl(I_R- i I_R\bigr)
=(1-i)I,
\quad
I:=\int_{-\infty}^{\infty}\frac{e^{x/4}}{e^x+1}dx .
$$

これと (★) を等置すると

$$
(1-i)I
=2\pi ie^{-3\pi i/4}
=2\pi i\cdot \frac{-1-i}{\sqrt2}
=\sqrt2\pi(1-i).
$$

両辺を $1-i$ で割って

$$
\boxed{
\int_{-\infty}^{\infty}\frac{e^{x/4}}{e^x+1}dx
=\sqrt{2}\pi }.
$$
