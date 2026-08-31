---
sidebar_label: "2018年8月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Parameterized-Diagonalizability
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年8月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]

$$
A=\begin{pmatrix}
a+3&-4&-4\\
1&a-2&-2\\
1&-1&a-1
\end{pmatrix}
$$

を考える。

1. $A$ が逆行列をもつための $a$ に関する必要十分条件を求めよ。
2. $A$ の固有値と固有ベクトルを求めよ。
3. 途中計算と用いた行列を示して $A$ を対角化せよ。

### [2]

線形変換

$$
T(x)=\begin{pmatrix}2&0\\1&8\end{pmatrix}x
$$

を考える。

1. 基底 $\left\{(6,-1)^{\mathsf T},(-3,1)^{\mathsf T}\right\}$ に関する $T$ の表現行列を求めよ。
2. $S$ を $\mathbb R^2$ の任意の基底に関する $T$ の表現行列とするとき、$\det S$ を求めよ。

### 题目描述

1. 对含参数矩阵 $A$，求可逆条件、特征值与特征向量，并完成对角化。
2. 求线性变换在指定基下的表示矩阵，并说明其在任意基下表示矩阵的行列式。

## **Kai**

### [1]

#### (1)

$$
\det A=a(a-1)(a+1).
$$

したがって

$$
\boxed{A\text{ が正則}\iff a\ne-1,0,1}.
$$

#### (2)

固有多項式は

$$
\det(\lambda I-A)
=(\lambda-a+1)(\lambda-a)(\lambda-a-1)
$$

である。各固有値と対応する固有空間は

$$
\begin{array}{c|c}
\lambda&\text{固有空間}\\ \hline
a-1&\operatorname{span}\{(1,1,0)^{\mathsf T}\}\\
a&\operatorname{span}\{(0,-1,1)^{\mathsf T}\}\\
a+1&\operatorname{span}\{(2,0,1)^{\mathsf T}\}
\end{array}
$$

である。

#### (3)

三つの固有値は任意の $a$ に対して相異なる。固有ベクトルを列に並べて

$$
P=\begin{pmatrix}
1&0&2\\
1&-1&0\\
0&1&1
\end{pmatrix},
\qquad
P^{-1}=\begin{pmatrix}
-1&2&2\\
-1&1&2\\
1&-1&-1
\end{pmatrix}
$$

とすると $\det P=1$ であり、

$$
\boxed{P^{-1}AP=\operatorname{diag}(a-1,a,a+1)}.
$$

したがって $A$ はすべての実数 $a$ について対角化可能である。

### [2]

#### (1)

基底ベクトルを列にもつ行列を

$$
Q=\begin{pmatrix}6&-3\\-1&1\end{pmatrix}
$$

とおく。標準基底での表現行列を $M=\begin{pmatrix}2&0\\1&8\end{pmatrix}$ とすると、求める行列は

$$
\boxed{Q^{-1}MQ=\begin{pmatrix}2&3\\0&8\end{pmatrix}}.
$$

#### (2)

基底を変えて得られる表現行列はすべて $M$ と相似であるから、行列式は不変である。よって

$$
\boxed{\det S=\det M=16}.
$$

