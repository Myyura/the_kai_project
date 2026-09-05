---
sidebar_label: "2018年8月実施 数理科学 I [2]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Subspace-Sum-and-Intersection-Dimension
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2018年8月実施 数理科学 I \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 参考問題

$\mathbb R^4$ の部分空間 $V$ が

$$
x_1=-x_3+2x_4,\qquad x_2=-x_3-2x_4
$$

で与えられ、部分空間 $W$ が基底

$$
w_1=(1,0,-5,-2)^{\mathsf T},\qquad w_2=(0,1,-2,-1)^{\mathsf T}
$$

を持つ場合を考える。$U=V+W$ と置く。

1. $V$ の次元と基底を求める。
2. $W$ の次元、$U$ の次元と基底を求める。

### 题目描述

设 $V,W$ 是 $\mathbb R^4$ 的子空间，$U=V+W$。

1. $V$ 由约束
   $$x_1=-x_3+2x_4,\qquad x_2=-x_3-2x_4$$
   定义，求 $V$ 的维数和一组基。
2. $W$ 的一组基为
   $$w_1=(1,0,-5,-2)^T,\qquad w_2=(0,1,-2,-1)^T.$$
   求 $W$ 的维数，以及 $U$ 的维数和一组基。

## **Kai**
### (1)
$V$ の定義における
$x_1, x_2, x_3, x_4$ に関する与えられた3つの式を整理すると、

$$
  \begin{aligned}
  x_1 &= - x_3 + 2 x_4
  \\
  x_2 &= - x_3 - 2 x_4
  \end{aligned}
$$

となるので、

$$
  \begin{aligned}
  \begin{pmatrix}
  x_1 \\ x_2 \\ x_3 \\ x_4
  \end{pmatrix}
  =
  \begin{pmatrix}
  - x_3 + 2 x_4 \\ - x_3 - 2 x_4 \\ x_3 \\ x_4
  \end{pmatrix}
  =
  x_3
  \begin{pmatrix}
  -1 \\ -1 \\ 1 \\ 0
  \end{pmatrix}
  + x_4
  \begin{pmatrix}
  2 \\ - 2 \\ 0 \\ 1
  \end{pmatrix}
  \end{aligned}
$$

となる。

したがって、$V$ は2次元で、

$$
  \begin{aligned}
  v_1 =
  \begin{pmatrix}
  -1 \\ -1 \\ 1 \\ 0
  \end{pmatrix}
  , \ \
  v_2 =
  \begin{pmatrix}
  2 \\ - 2 \\ 0 \\ 1
  \end{pmatrix}
  \end{aligned}
$$

はその基底である。

### (2)
(1) と同様に考えると、 $W$ も2次元で、

$$
  \begin{aligned}
  w_1 =
  \begin{pmatrix}
  1 \\ 0 \\ -5 \\ -2
  \end{pmatrix}
  , \ \
  w_2 =
  \begin{pmatrix}
  0 \\ 1 \\ -2 \\ -1
  \end{pmatrix}
  \end{aligned}
$$

はその基底である。

そこで、 $v_1, v_2, w_1, w_2$ について考えると、

$$
  \begin{aligned}
  w_1 = v_1 + v_2 + 3 w_2
  \end{aligned}
$$

が成り立ち、また、
$w_2$ は $v_1, v_2$ の線形結合で表すことができない。
したがって、 $U$ は3次元であり、
$v_1, v_2, w_2$ はその基底である。
