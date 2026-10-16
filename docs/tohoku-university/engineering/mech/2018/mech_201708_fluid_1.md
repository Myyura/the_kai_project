---
sidebar_label: "2017年8月実施 流体力学 第1問"
tags:
  - Tohoku-University
  - Engineering.Fluid-Mechanics.Vorticity-and-Streamfunction
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 流体力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

$xy$ 平面内の非粘性・非圧縮性流体の二次元渦なし流れを考える。速度成分は

$$
u=ax^2+by^2+c,\qquad v=dxy
$$

であり、$a,b,c,d$ は定数である。

1. 連続の式が成り立つための係数条件を求めよ。
2. 渦なしのための係数条件を求めよ。
3. $d=2$ のとき、速度ポテンシャル $\phi$ と流れ関数 $\psi$ を $x,y,c$ で表せ。ただし $\phi(0,0)=\psi(0,0)=0$。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

平面内无黏、不可压、无旋流动的速度为 $u=ax^2+by^2+c,v=dxy$，各系数为常数。（1）求连续性条件。（2）求无旋条件。（3）当 $d=2$ 时，求速度势和流函数，令二者在原点均为零。

## **Kai**

### (1), (2)

非圧縮の連続式から

$$
u_x+v_y=(2a+d)x=0\quad\Longrightarrow\quad\boxed{d=-2a}.
$$

また渦度ゼロの条件から

$$
v_x-u_y=(d-2b)y=0\quad\Longrightarrow\quad\boxed{d=2b}.
$$

$c$ はいずれからも拘束されない。

### (3)

$d=2$ より $a=-1,b=1$ である。$u=\phi_x,v=\phi_y$ とすると

$$
\phi=-\frac{x^3}3+xy^2+cx+f(y).
$$

$\phi_y=2xy+f'(y)=v$ より $f$ は定数で、原点条件よりゼロ。従って

$$
\boxed{\phi=-\frac{x^3}3+xy^2+cx}.
$$

流れ関数を $u=\psi_y,v=-\psi_x$ で定義すると

$$
\psi=-x^2y+\frac{y^3}3+cy+g(x).
$$

$-\psi_x=2xy-g'(x)=v$ と原点条件から $g=0$、ゆえに

$$
\boxed{\psi=-x^2y+\frac{y^3}3+cy}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 13ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
