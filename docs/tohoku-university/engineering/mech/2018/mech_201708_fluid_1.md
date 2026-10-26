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

1. $xy$ 平面において，非粘性・非圧縮性流体の2次元渦無し流れを考える。この流れの $x$ 方向の速度成分 $u$，$y$ 方向速度成分 $v$ が

$$
u=ax^2+by^2+c,\qquad v=dxy\qquad(a,b,c,d:\text{定数})
$$

と与えられるとき，以下の問いに答えよ。

**(1)** 連続の式が成り立つために，$a,b,c,d$ が満たすべき条件を求めよ。

**(2)** 流れが渦無しであるために，$a,b,c,d$ が満たすべき条件を求めよ。

**(3)** $d=2$ のとき，速度ポテンシャル $\phi(x,y)$ と流れ関数 $\psi(x,y)$ を $x,y,c$ を用いて表せ。ただし，$\phi(0,0)=\psi(0,0)=0$ であるものとする。

### 题目描述

1. 在 $xy$ 平面中考虑无黏、不可压缩流体的二维无旋流。设流动在 $x$ 方向的速度分量 $u$ 和 $y$ 方向的速度分量 $v$ 为

$$
u=ax^2+by^2+c,\qquad v=dxy\qquad(a,b,c,d:\text{常数}).
$$

回答下列问题。

**(1)** 求连续性方程成立时 $a,b,c,d$ 应满足的条件。

**(2)** 求流动无旋时 $a,b,c,d$ 应满足的条件。

**(3)** 当 $d=2$ 时，用 $x,y,c$ 表示速度势 $\phi(x,y)$ 和流函数 $\psi(x,y)$。设 $\phi(0,0)=\psi(0,0)=0$。

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
