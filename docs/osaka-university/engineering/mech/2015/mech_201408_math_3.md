---
sidebar_label: "2014年8月実施 問題3（数学）"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Cross-Product-Area-and-Scalar-Triple-Product-Volume
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 数学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$xyz$ 空間において、正の定数 $a$ と実数の媒介変数 $t$ により

$$
x=2\cos t,\qquad y=4\sin t,\qquad z=at
$$

と表される曲線 $C$ を考える。以下の問いに答えなさい。

1. 曲線 $C$ を $xy$ 平面上に射影した曲線の方程式を求め、その概形を描きなさい。
2. 曲線 $C$ 上の $t=0$ に対応する点における接線の方程式を求めなさい。
3. $0<s<2\pi$ とするとき、曲線 $C$ 上の $t=0$ および $t=s$ に対応する点における二つの接線が、同一平面上にないことを示しなさい。

#### 题目描述

设空间曲线 $C$ 的参数方程为 $(x,y,z)=(2\cos t,4\sin t,at)$，其中 $a>0$，$t\in\mathbb R$。

1. 求该曲线在 $xy$ 平面上的投影曲线方程，并画出概形。
2. 求 $t=0$ 对应点处的切线方程。
3. 对 $0<s<2\pi$，证明 $t=0$ 与 $t=s$ 两点处的切线不共面。

## **Kai**

### (1)

$t$ を消去すると

$$
\boxed{\frac{x^2}{4}+\frac{y^2}{16}=1}.
$$

これは原点を中心とし、$x$ 軸方向の半径が $2$、$y$ 軸方向の半径が $4$ の楕円である。

![曲線Cのxy平面への射影](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_math_3-solution-fig1.svg)

### (2)

位置ベクトルとその導関数を

$$
\boldsymbol p(t)=(2\cos t,4\sin t,at),\qquad
\boldsymbol p'(t)=(-2\sin t,4\cos t,a)
$$

とする。$\boldsymbol p(0)=(2,0,0)$、$\boldsymbol p'(0)=(0,4,a)$ なので接線は

$$
\boxed{(x,y,z)=(2,0,0)+\lambda(0,4,a),\quad\lambda\in\mathbb R}.
$$

同値な表示は $x=2$、$z=ay/4$ である。

### (3)

二つの接線が同一平面上にあるためには、二つの方向ベクトルと二つの接点を結ぶベクトルのスカラー三重積が $0$ でなければならない。この三重積は

$$
\begin{aligned}
T&=\det\bigl(\boldsymbol p'(0),\boldsymbol p'(s),\boldsymbol p(s)-\boldsymbol p(0)\bigr)\\
&=\begin{vmatrix}
0&-2\sin s&2\cos s-2\\
4&4\cos s&4\sin s\\
a&a&as
\end{vmatrix}\\
&=8a(s\sin s+2\cos s-2).
\end{aligned}
$$

ここで $q=s/2\in(0,\pi)$ とおくと

$$
s\sin s+2\cos s-2
=4\sin q\,(q\cos q-\sin q).
$$

$h(q)=q\cos q-\sin q$ とおけば $h(0)=0$ であり、$0<q<\pi$ では

$$
h'(q)=-q\sin q<0.
$$

したがって $h(q)<0$、$\sin q>0$ より $T<0$ となる。よって $T\ne0$ であり、二つの接線は同一平面上にない。
