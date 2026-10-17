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

問題3（解答用紙：青）

直交デカルト座標系（$xyz$ 座標系）において、$a$ を正の定数、$t$ を実数のパラメータとして、$(x,y,z)=(2\cos t,4\sin t,at)$ によって定められる曲線 C を考える。以下の問いに答えなさい。

(1) 曲線 C を $xy$ 平面に射影して得られる曲線の方程式を求めなさい。また、その概形を図示しなさい。

(2) 曲線 C の $t=0$ における接線の方程式を求めなさい。

(3) 曲線 C の $t=0$ における接線と $t=s$ における接線は、$0<s<2\pi$ のとき、同一平面上にないことを示しなさい。

#### 题目描述

问题3（使用蓝色答题纸）

在直角笛卡尔坐标系（$xyz$ 坐标系）中，设 $a$ 为正常数，$t$ 为实参数，考虑由 $(x,y,z)=(2\cos t,4\sin t,at)$ 确定的曲线 C。回答下列问题。

(1) 求将曲线 C 投影到 $xy$ 平面所得到的曲线方程，并画出其示意图。

(2) 求曲线 C 在 $t=0$ 处的切线方程。

(3) 证明当 $0<s<2\pi$ 时，曲线 C 在 $t=0$ 和 $t=s$ 处的两条切线不共面。

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
