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

2017年10月・2018年4月入学対象、2017年8月実施。

デカルト座標 $(x,y,z)$ の単位基本ベクトルを $\boldsymbol i,\boldsymbol j,\boldsymbol k$、円筒座標 $(r,\theta,z)$ の単位基本ベクトルを $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$ とする。$\theta$ は $+x$ 方向から $+y$ 方向へ測る角である。曲面 $S$ は

$$
\boldsymbol r=x\boldsymbol i+y\boldsymbol j+\sqrt{x^2+y^2+1}\boldsymbol k,
\qquad x^2+y^2\le R^2
$$

で与えられ、$\boldsymbol n$ をその単位法線とする。

1. $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$ を $\boldsymbol i,\boldsymbol j,\boldsymbol k,\theta$ で表せ。
2. 各基本ベクトルの $r,\theta$ による偏微分を円筒座標系で表せ。
3. 曲面 $S$ を円筒座標系で表せ。
4. $\boldsymbol n$ を円筒座標系で求めよ。
5. $\boldsymbol A=\theta z\boldsymbol e_\theta+\sqrt{2r^2+1}\boldsymbol e_z$ のとき、$\int_S\boldsymbol A\cdot\boldsymbol n\,dS$ を求めよ。

![デカルト座標と円筒座標の基本ベクトル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_matha4.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

直角坐标的单位基向量为 $\boldsymbol i,\boldsymbol j,\boldsymbol k$，柱坐标的单位基向量为 $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_z$，$\theta$ 从 $+x$ 向 $+y$ 计量。曲面为 $z=\sqrt{x^2+y^2+1}$、$x^2+y^2\le R^2$，单位法线为 $\boldsymbol n$。（1）用直角坐标基和 $\theta$ 表示柱坐标基。（2）求三个基向量分别对 $r,\theta$ 的偏导。（3）用柱坐标表示曲面。（4）求单位法线。（5）对 $\boldsymbol A=\theta z\boldsymbol e_\theta+\sqrt{2r^2+1}\boldsymbol e_z$，求通量积分 $\int_S\boldsymbol A\cdot\boldsymbol n\,dS$。

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
