---
sidebar_label: "2017年8月実施 数学A 第4問"
tags:
  - Tohoku-University
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Vector-Calculus.Surface-Integral
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学A 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

4. 図1に示すように，デカルト座標系 $(x,y,z)$ の基本ベクトルを $\boldsymbol i,\boldsymbol j,\boldsymbol k$，円筒座標系 $(r,\theta,z)$ の基本ベクトルを $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$ とする。ただし，基本ベクトルの大きさは1である。曲面 $S$ がデカルト座標系で

$$
S:\boldsymbol r=x\boldsymbol i+y\boldsymbol j+\sqrt{x^2+y^2+1}\,\boldsymbol k
\quad(x^2+y^2\le R^2)
$$

により与えられる。$\boldsymbol n$ を曲面 $S$ の単位法線ベクトルとするとき，以下の問いに答えよ。

**(1)** $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$ を $\boldsymbol i,\boldsymbol j,\boldsymbol k$ および $\theta$ を用いて表せ。

**(2)** 次の各ベクトルを円筒座標系で表せ。

$$
\frac{\partial\boldsymbol e_r}{\partial r},\quad
\frac{\partial\boldsymbol e_r}{\partial\theta},\quad
\frac{\partial\boldsymbol e_\theta}{\partial r},\quad
\frac{\partial\boldsymbol e_\theta}{\partial\theta},\quad
\frac{\partial\boldsymbol e_z}{\partial r},\quad
\frac{\partial\boldsymbol e_z}{\partial\theta}
$$

**(3)** 曲面 $S$ を円筒座標系で表せ。

**(4)** $\boldsymbol n$ を円筒座標系で求めよ。

**(5)** ベクトル場 $\boldsymbol A$ が

$$
\boldsymbol A=\theta z\boldsymbol e_\theta+\sqrt{2r^2+1}\,\boldsymbol e_z
$$

で与えられるとき，次の面積分を求めよ。

$$
\int_S\boldsymbol A\cdot\boldsymbol n\,dS
$$

![図1 デカルト座標系と円筒座標系の基本ベクトル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_math_A4_original_figure_1.png)

### 题目描述

4. 如图1，设笛卡尔坐标系 $(x,y,z)$ 的基向量为 $\boldsymbol i,\boldsymbol j,\boldsymbol k$，柱坐标系 $(r,\theta,z)$ 的基向量为 $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$。这些基向量的模均为1。曲面 $S$ 在笛卡尔坐标系中表示为

$$
S:\boldsymbol r=x\boldsymbol i+y\boldsymbol j+\sqrt{x^2+y^2+1}\,\boldsymbol k
\quad(x^2+y^2\le R^2).
$$

设 $\boldsymbol n$ 为曲面 $S$ 的单位法向量，回答下列问题。

**(1)** 用 $\boldsymbol i,\boldsymbol j,\boldsymbol k$ 和 $\theta$ 表示 $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$。

**(2)** 用柱坐标系表示下列各向量。

$$
\frac{\partial\boldsymbol e_r}{\partial r},\quad
\frac{\partial\boldsymbol e_r}{\partial\theta},\quad
\frac{\partial\boldsymbol e_\theta}{\partial r},\quad
\frac{\partial\boldsymbol e_\theta}{\partial\theta},\quad
\frac{\partial\boldsymbol e_z}{\partial r},\quad
\frac{\partial\boldsymbol e_z}{\partial\theta}
$$

**(3)** 用柱坐标系表示曲面 $S$。

**(4)** 用柱坐标系求 $\boldsymbol n$。

**(5)** 给定向量场

$$
\boldsymbol A=\theta z\boldsymbol e_\theta+\sqrt{2r^2+1}\,\boldsymbol e_z,
$$

求下列曲面积分。

$$
\int_S\boldsymbol A\cdot\boldsymbol n\,dS
$$

图1给出了笛卡尔坐标系及柱坐标系的各个基向量。

## **Kai**

### (1), (2)

$$
\boxed{\boldsymbol e_r=\cos\theta\boldsymbol i+\sin\theta\boldsymbol j,\quad
\boldsymbol e_\theta=-\sin\theta\boldsymbol i+\cos\theta\boldsymbol j,\quad
\boldsymbol e_z=\boldsymbol k}.
$$

従って

$$
\boxed{\partial_r\boldsymbol e_r=\partial_r\boldsymbol e_\theta=\partial_r\boldsymbol e_z=\boldsymbol0},
$$

$$
\boxed{\partial_\theta\boldsymbol e_r=\boldsymbol e_\theta,\quad
\partial_\theta\boldsymbol e_\theta=-\boldsymbol e_r,\quad
\partial_\theta\boldsymbol e_z=\boldsymbol0}.
$$

### (3), (4)

$$
\boxed{\boldsymbol r=r\boldsymbol e_r+\sqrt{r^2+1}\boldsymbol e_z,
\quad0\le r\le R,\quad0\le\theta<2\pi}.
$$

接ベクトルから

$$
\boldsymbol r_r=\boldsymbol e_r+\frac r{\sqrt{r^2+1}}\boldsymbol e_z,\qquad
\boldsymbol r_\theta=r\boldsymbol e_\theta,
$$

$$
\boldsymbol r_r\times\boldsymbol r_\theta
=-\frac{r^2}{\sqrt{r^2+1}}\boldsymbol e_r+r\boldsymbol e_z.
$$

原題では法線の向きが指定されていない。上向きに取れば

$$
\boxed{\boldsymbol n=\frac{-r\boldsymbol e_r+\sqrt{r^2+1}\boldsymbol e_z}{\sqrt{2r^2+1}}}.
$$

下向きなら全体の符号を逆にする。$r=0$ では連続延長により $\boldsymbol n=\boldsymbol e_z$。

### (5)

上向きの法線を用いる。$\boldsymbol e_\theta$ 成分は法線と直交するので

$$
\boldsymbol A\cdot(\boldsymbol r_r\times\boldsymbol r_\theta)=r\sqrt{2r^2+1}.
$$

従って

$$
\int_S\boldsymbol A\cdot\boldsymbol n\,dS
=2\pi\int_0^Rr\sqrt{2r^2+1}\,dr
=\boxed{\frac\pi3\left[(2R^2+1)^{3/2}-1\right]}.
$$

下向きの法線を選んだ場合は、この値の負号を取る。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 5ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
