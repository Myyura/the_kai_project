---
sidebar_label: "2024年7月実施 数理基礎 問題2"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年7月実施 数理基礎 問題2

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問3

2つの $n$ 次元実ベクトル $x, y$ に対し, $||x|| = ||y||, x \neq y$ であるものとする。ただし $||\cdot||$ はユークリッドノルムを表す。ここで、ベクトル $z = x - y$ と実数 $\alpha$ に対し、行列 $H$ を

$$
H = I_n - \frac{\alpha}{||z||^2} zz^T
$$

と定める。ただし $I_n$ は $n$ 次単位行列である。この行列 $H$ に対し $Hx = y$ が成立するとき、実数 $\alpha$ を求めよ。

### 题目描述

#### 小问3

设 $x,y$ 是两个 $n$ 维实向量，满足

$$
\lVert x\rVert=\lVert y\rVert,\qquad x\neq y,
$$

其中 $\lVert\cdot\rVert$ 为欧几里得范数。令

$$
z=x-y
$$

并对实数 $\alpha$ 定义

$$
H=I_n-\frac{\alpha}{\lVert z\rVert^2}zz^{\mathsf T},
$$

其中 $I_n$ 为 $n$ 阶单位矩阵。若 $Hx=y$，求 $\alpha$。

## **Kai**

### 小問3

Given $Hx = y$ , we have

$$
I_n x - \frac{\alpha}{||z||^2} zz^T x = y
$$

$$
x - \frac{\alpha}{||z||^2} z(z^T x) = y
$$

Since $z = x - y$ , we can write $x - y = \frac{\alpha}{||z||^2} z(z^T x)$ , so

$$
z = \frac{\alpha}{||z||^2} z(z^T x)
$$

Since $x\ne y$ , we have $z\ne0$ . Equality of the scalar multiples of this nonzero vector therefore gives

$$
1 = \frac{\alpha}{||z||^2} (z^T x)
$$

$$
\alpha = \frac{||z||^2}{z^T x}
$$

Also, since $z = x - y$ , $z^T = x^T - y^T$ . Thus $z^T x = (x^T - y^T) x = x^T x - y^T x = ||x||^2 - x^T y$ .
We have $||x|| = ||y||$ . Then
$||z||^2 = z^T z = (x - y)^T (x - y) = x^T x - x^T y - y^T x + y^T y = ||x||^2 + ||y||^2 - 2x^T y = 2||x||^2 - 2x^T y$ .
Therefore,

$$
\alpha = \frac{2||x||^2 - 2x^T y}{||x||^2 - x^T y} = \frac{2(||x||^2 - x^T y)}{||x||^2 - x^T y} = 2
$$

Thus, $\alpha = 2$ .
Now, we check if $Hx = y$ holds.

$$
Hx = I_n x - \frac{2}{||z||^2} zz^T x = x - \frac{2}{||z||^2} (x - y)((x - y)^T x) = x - \frac{2}{||z||^2} (x - y)(x^T x - y^T x) = x - \frac{2}{2||x||^2 - 2x^T y} (x - y)(||x||^2 - x^T y) = x - (x - y) = y
$$

Thus, $Hx = y$ holds when $\alpha = 2$ .
