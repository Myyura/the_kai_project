---
sidebar_label: "2016年9月実施 数理基礎 C"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 数理基礎 C

## **Author**
祭音Myyura

## **Description**

### [小問 C1]

次の行列のランクを求めよ。

$$
\begin{pmatrix}
2&4&6&2\\
2&1&x+3&-1\\
3&x+1&4&-2
\end{pmatrix}
$$

### [小問 C2]

次の行列の固有値と固有ベクトルをすべて求めよ。

$$
\begin{pmatrix}
6&1&1\\
0&4&1\\
0&0&2
\end{pmatrix}
$$

### [小問 C3]

$E$ を単位行列とする。$E+A$ が正則となる行列 $A$ に対して

$$
B=(E-A)(E+A)^{-1}
$$

とおく。$E+B$ が正則であることを示し、

$$
A=(E-B)(E+B)^{-1}
$$

を示せ。

## **Kai**

### [小問 C1]

第1・第2・第4列からなる3次小行列式は $6x$、第1・第3・第4列からなるものは $-10x$ である。したがって $x\neq0$ ならランクは3である。

$x=0$ ではすべての3次小行列式が $0$ になる。一方、左上の2次小行列式は

$$
\begin{vmatrix}2&4\\2&1\end{vmatrix}=-6\neq0
$$

なのでランクは $2$ である。よって

$$
\boxed{
\operatorname{rank}A=
\begin{cases}
2&(x=0),\\
3&(x\neq0).
\end{cases}}
$$

### [小問 C2]

上三角行列なので固有値は対角成分

$$
\boxed{\lambda=6,4,2}
$$

である。それぞれの固有空間は

$$
\begin{aligned}
\lambda=6&:\quad
\operatorname{span}\left\{\begin{pmatrix}1\\0\\0\end{pmatrix}\right\},\\
\lambda=4&:\quad
\operatorname{span}\left\{\begin{pmatrix}1\\-2\\0\end{pmatrix}\right\},\\
\lambda=2&:\quad
\operatorname{span}\left\{\begin{pmatrix}1\\4\\-8\end{pmatrix}\right\}.
\end{aligned}
$$

### [小問 C3]

定義から

$$
\begin{aligned}
E+B
&=\{(E+A)+(E-A)\}(E+A)^{-1}\\
&=2(E+A)^{-1}.
\end{aligned}
$$

$E+A$ は正則なので、$E+B$ も正則であり

$$
(E+B)^{-1}=\frac12(E+A)
$$

となる。また

$$
E-B=\{(E+A)-(E-A)\}(E+A)^{-1}
=2A(E+A)^{-1}.
$$

したがって

$$
(E-B)(E+B)^{-1}
=2A(E+A)^{-1}\frac12(E+A)
=\boxed{A}.
$$
