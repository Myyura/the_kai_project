---
sidebar_label: '数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Linear-Algebra.Rotation-Matrix-and-Axis-Angle
  - Mathematics.Calculus.Definite-Integral
---

# 東京大学 工学系研究科 2019年度 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
曲面 $S_1:x^2+2y^2-z^2=0$ 上の点 $A(2,0,2)$ における法線と接平面 $T$ の方程式を求めよ。

### II.
実数の媒介変数 $u,v$（$0\le v<2\pi$）によって、曲面 $S_2$ を次のように定める。

$$
\begin{cases}
x=\dfrac1{\sqrt2}\cosh u\cos v,\\
y=\dfrac12\cosh u\sin v-\dfrac1{\sqrt2}\sinh u,\\
z=\dfrac12\cosh u\sin v+\dfrac1{\sqrt2}\sinh u.
\end{cases}
$$

$S_2$ を $x$ 軸の周りに $-\pi/4$ 回転した曲面を $S_3$ とする。正方向の回転は、$y$ 軸の正方向を $z$ 軸の正方向へ向けるものとする。

1. この回転を表す行列 $R$ を求めよ。
2. 媒介変数を消去して $S_3$ の方程式を求めよ。
3. 媒介変数を消去して $S_2$ の方程式を求めよ。

### III.
$S_3$ と平面 $z=1$、$z=-1$ に囲まれた立体を $V$ とする。

1. $V$ を $xz$ 平面で切った断面の面積を求めよ。
2. $V$ を I の平面 $T$ で切った断面の面積を求めよ。

#### 题目描述

##### I.
曲面 $S_1:x^2+2y^2-z^2=0$ 上有点 $A(2,0,2)$。求 $A$ 处的法线与切平面 $T$ 的方程。

##### II.
实参数 $u,v$（$0\le v<2\pi$）定义曲面 $S_2$：

$$
\begin{cases}
x=\dfrac1{\sqrt2}\cosh u\cos v,\\
y=\dfrac12\cosh u\sin v-\dfrac1{\sqrt2}\sinh u,\\
z=\dfrac12\cosh u\sin v+\dfrac1{\sqrt2}\sinh u.
\end{cases}
$$

将 $S_2$ 绕 $x$ 轴旋转 $-\pi/4$ 得 $S_3$；正向旋转使 $y$ 轴正向转向 $z$ 轴正向。

1. 求此次旋转的矩阵 $R$。
2. 消去参数，求 $S_3$ 的方程。
3. 消去参数，求 $S_2$ 的方程。

##### III.
令 $V$ 为 $S_3$ 与 $z=1$、$z=-1$ 所围成的立体。

1. 求 $V$ 被 $xz$ 平面截得的截面积。
2. 求 $V$ 被 I 中的平面 $T$ 截得的截面积。

## **Kai**

### I.

$\nabla(x^2+2y^2-z^2)|_A=(4,0,-4)$ より

$$
\boxed{\text{法線： }y=0,\ x+z=4;\qquad T:x=z}.
$$

### II.

1. 回転行列は

$$
\boxed{R=\begin{pmatrix}1&0&0\\0&1/\sqrt2&1/\sqrt2\\0&-1/\sqrt2&1/\sqrt2\end{pmatrix}}.
$$

2. 回転後の媒介変数表示は

$$
(x,y,z)=\left(\frac{\cosh u\cos v}{\sqrt2},\frac{\cosh u\sin v}{\sqrt2},\sinh u\right),
$$

したがって

$$
\boxed{S_3:2x^2+2y^2-z^2=1}.
$$

3. $S_3$ の式の $y,z$ をそれぞれ $(y+z)/\sqrt2,(-y+z)/\sqrt2$ に置き換えると

$$
\boxed{S_2:4x^2+y^2+z^2+6yz=2}.
$$

### III.

1. $y=0$ の断面は $-1\le z\le1$、$|x|\le\sqrt{(1+z^2)/2}$ である。したがって

$$
\boxed{A_1=\int_{-1}^1\sqrt{2(1+z^2)}\,dz
=2+\sqrt2\log(1+\sqrt2)}.
$$

2. 平面 $x=z$ 上の断面は $x^2+2y^2\le1$ を満たし、これは $|z|\le1$ も保証する。$xy$ 平面への正射影の面積は $\pi/\sqrt2$、面積の倍率は $\sqrt2$ なので、

$$
\boxed{A_2=\pi}.
$$

![回転の向きと二つの断面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2019/math_4_sections.svg)
