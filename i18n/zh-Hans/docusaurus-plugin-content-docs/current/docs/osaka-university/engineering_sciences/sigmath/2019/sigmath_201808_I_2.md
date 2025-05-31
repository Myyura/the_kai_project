---
sidebar_label: "2018年8月実施 数理科学 I [2]"
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2018年8月実施 数理科学 I \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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