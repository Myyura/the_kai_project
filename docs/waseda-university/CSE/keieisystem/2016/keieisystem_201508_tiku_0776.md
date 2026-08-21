---
sidebar_label: "2015年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の2つのベクトル $a$ , $b$ が直交する(orthogonal)ことを示せ. また, これらのベクトルに直交するベクトルの一般解(general solution)を示せ.

$$
a = \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}, b = \begin{bmatrix} 1 \\ 3 \\ 7 \end{bmatrix}
$$

### 题目描述

给定向量

$$
a=\begin{bmatrix}1\\2\\-1\end{bmatrix},
\qquad
b=\begin{bmatrix}1\\3\\7\end{bmatrix}.
$$

证明 $a$ 与 $b$ 正交，并求同时与这两个向量正交的向量的一般解。

## **Kai**

まず、 $a$ と $b$ が直交することを示す. ベクトルが直交するための条件は、内積が0となることである.

$$
a \cdot b = (1)(1) + (2)(3) + (-1)(7) = 1 + 6 - 7 = 0
$$

したがって、 $a$ と $b$ は直交する.

次に、 $a$ と $b$ の両方に直交するベクトル $v = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ を求める.
$v$ が $a$ と直交するための条件は、 $a \cdot v = 0$ である.

$$
a \cdot v = (1)(x) + (2)(y) + (-1)(z) = x + 2y - z = 0
$$

$v$ が $b$ と直交するための条件は、 $b \cdot v = 0$ である.

$$
b \cdot v = (1)(x) + (3)(y) + (7)(z) = x + 3y + 7z = 0
$$

これらの連立方程式を解く:

$$
\begin{cases} x + 2y - z = 0 \\ x + 3y + 7z = 0 \end{cases}
$$

第2式から第1式を引くと:

$$
y + 8z = 0 \Rightarrow y = -8z
$$

これを第1式に代入する:

$$
x + 2(-8z) - z = 0 \Rightarrow x - 16z - z = 0 \Rightarrow x = 17z
$$

したがって、 $v$ は次のようになる:

$$
v = \begin{bmatrix} 17z \\ -8z \\ z \end{bmatrix} = z \begin{bmatrix} 17 \\ -8 \\ 1 \end{bmatrix}
$$

ここで、 $z$ は任意のスカラーである. よって、一般解は

$$
v = t \begin{bmatrix} 17 \\ -8 \\ 1 \end{bmatrix}
$$

(ここで $t$ は任意のスカラー)
