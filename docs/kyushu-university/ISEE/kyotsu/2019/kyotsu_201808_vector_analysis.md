---
sidebar_label: "2018年8月実施 ベクトル解析"
tags:
  - Kyushu-University
  - Vector-Calculus
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年8月実施 ベクトル解析

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
直交座標系において, $x, y, z$ 軸方向の単位ベクトルをそれぞれ $\boldsymbol{i}, \boldsymbol{j}, \boldsymbol{k}$ とする．次の各問に答えよ．

(1) スカラー場 $\phi$ を $\phi = e^{xz} \sin y + e^{x} \cos y$. ベクトル場 $\boldsymbol{A}$ を $\boldsymbol{A} = (2x - z) \boldsymbol{i} - 2 \boldsymbol{j} + 2\boldsymbol{k}$ で定める．点 $(1, 0, 1)$ における $\phi$ の勾配の $\boldsymbol{A}$ 方向成分を求めよ．

(2) ベクトル場 $\boldsymbol{A} = z\boldsymbol{i} -3\boldsymbol{j} +4xy\boldsymbol{k}$ について，次の面 $S$ に対する $\boldsymbol{A}$ の面積分を計算せよ．

- $S: 6x + 3y + z = 3, \ \ \ \ (x \ge 0, y \ge 0, z \ge 0)$

## **Kai**
### (1)

$$
  \begin{aligned}
  \mathrm{grad} \phi
  = \left(z e^{xz} \sin y + e^x \cos y \right) \boldsymbol{i}
  + \left(e^{xz} \cos y - e^x \sin y \right) \boldsymbol{j}
  + x e^{xz} \sin y \boldsymbol{k}
  \end{aligned}
$$

であり、点 $(1,0,1)$ において、

$$
  \begin{aligned}
  \mathrm{grad} \phi
  &= e \boldsymbol{i} + e \boldsymbol{j}
  \\
  \boldsymbol{A}
  &= \boldsymbol{i} - 2 \boldsymbol{j} + 2 \boldsymbol{k}
  \\
  \left| \boldsymbol{A} \right|
  &= 3
  \end{aligned}
$$

なので、点 $(1,0,1)$ における $\phi$ の勾配の $\boldsymbol{A}$ 方向成分は

$$
  \begin{aligned}
  \mathrm{grad} \phi \cdot \frac{\boldsymbol{A}}{| \boldsymbol{A} |}
  &= - \frac{e}{3}
  \end{aligned}
$$

である。

### (2)
$S$ 上の点の位置ベクトルは
$\boldsymbol{r} = x \boldsymbol{i} + y \boldsymbol{j} + (-6x-3y+3) \boldsymbol{k}$
と書け、このとき、

$$
  \begin{aligned}
  \frac{\partial \boldsymbol{r}}{\partial x}
  &= \boldsymbol{i} -6 \boldsymbol{k}
  \\
  \frac{\partial \boldsymbol{r}}{\partial y}
  &= \boldsymbol{j} -3 \boldsymbol{k}
  \\
  \frac{\partial \boldsymbol{r}}{\partial x} \times
  \frac{\partial \boldsymbol{r}}{\partial y}
  &= 6 \boldsymbol{i} + 3 \boldsymbol{j} + \boldsymbol{k}
  \end{aligned}
$$

である。
また、 $S$ 上で
$\boldsymbol{A} = (-6x-3y+3) \boldsymbol{i} - 3 \boldsymbol{j} + 4xy \boldsymbol{k}$
なので、

$$
  \begin{aligned}
  \boldsymbol{A} \cdot
  \left(
  \frac{\partial \boldsymbol{r}}{\partial x} \times
  \frac{\partial \boldsymbol{r}}{\partial y}
  \right)
  &= 4xy-36x-18y+9
  \end{aligned}
$$

である。
点 $(x, y, -6x-3y+3)$ が $S$ にあるのは、
$0 \leq x \leq 1/2$ かつ $0 \leq y \leq -2x+1$ のときであるから、
求める面積分は

$$
  \begin{aligned}
  &\int_0^\frac{1}{2} dx \int_0^{-2x+1} dy \left( 4xy-36x-18y+9 \right)
  \\
  &= 4 \int_0^\frac{1}{2} dx \left( 2x^3+7x^2-4x \right)
  \\
  &= - \frac{17}{24}
  \end{aligned}
$$

である。