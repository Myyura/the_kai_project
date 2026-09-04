---
sidebar_label: "社会工学学位プログラム 2023年8月実施 数学 I"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2023年8月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\alpha \in \mathbb{R}$ とする。次の3つの4次元実ベクトルを考える。

$$
v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \\ 1 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \\ 1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 0 \\ -1 \\ \alpha \\ 0 \end{pmatrix}
$$

また, ベクトル $v_1, v_2, v_3$ を列ベクトルとする行列を $A = (v_1, v_2, v_3)$ とする。
以下の問(1)-(5)に答えよ。

(1) ベクトル $v_1, v_2, v_3$ が一次独立となるための $\alpha$ の条件を示せ。
(2) 行列 ${}^tAA$ に関する以下の(a)〜(c)のそれぞれについて, 記述が正しいか否かを理由とともに答えよ。ただし, ${}^tA$ は行列 $A$ の転置行列である。
(a) 行列 ${}^tAA$ は対角化可能である。
(b) 行列 ${}^tAA$ の $i$ 行 $j$ 列要素は $v_i$ と $v_j$ の内積である。
(c) $\alpha = -1$ のとき, 行列 ${}^tAA$ は正則行列である。
(3) $y = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ , $q = xv_1 + yv_2 + zv_3$ とする $(x, y, z \in \mathbb{R})$ 。2次形式 ${}^ty({}^tAA)y$ をベクトル $q$ を用いて表せ。
(4) ゼロベクトルでない任意の $y$ について ${}^ty({}^tAA)y > 0$ となる条件を $\alpha$ を用いて表せ。
(5) 互いに直交する3つの4次元実ベクトル $w_1, w_2, w_3$ を考える。ベクトルの長さはそれぞれ, $|w_1| = 3, |w_2| = 5, |w_3| = 2$ である。また, $w_1, w_2, w_3$ を列ベクトルとする行列を $B = (w_1, w_2, w_3)$ とする。行列 ${}^tBB$ の固有値をすべて求めよ。

### 题目描述

设 $\alpha\in\mathbb R$，考虑三个四维实向量

$$
v_1=\begin{pmatrix}1\\1\\0\\1\end{pmatrix},\qquad
v_2=\begin{pmatrix}1\\0\\-1\\1\end{pmatrix},\qquad
v_3=\begin{pmatrix}0\\-1\\\alpha\\0\end{pmatrix}.
$$

以它们为列向量组成 $4\times3$ 矩阵

$$
A=(v_1,v_2,v_3).
$$

回答下列问题：

1. 求 $v_1,v_2,v_3$ 线性无关时 $\alpha$ 所满足的条件，并给出推导。
2. 对矩阵 ${}^tAA$ 的下列陈述逐一判断正误并说明理由，其中 ${}^tA$ 表示 $A$ 的转置：

   1. ${}^tAA$ 可以对角化；
   2. ${}^tAA$ 的第 $i$ 行第 $j$ 列元素等于 $v_i$ 与 $v_j$ 的内积；
   3. 当 $\alpha=-1$ 时，${}^tAA$ 可逆。

3. 令

   $$
   \mathbf y=\begin{pmatrix}x\\y\\z\end{pmatrix},\qquad
   q=xv_1+yv_2+zv_3
   \quad(x,y,z\in\mathbb R).
   $$

   用向量 $q$ 表示二次型

   $$
   {}^t\mathbf y\,({}^tAA)\mathbf y.
   $$

4. 用 $\alpha$ 表示如下性质成立的必要充分条件：对任意非零向量 $\mathbf y$，都有

   $$
   {}^t\mathbf y\,({}^tAA)\mathbf y>0.
   $$

5. 另给定三个两两正交的四维实向量 $w_1,w_2,w_3$，其长度分别为

   $$
   |w_1|=3,\qquad |w_2|=5,\qquad |w_3|=2.
   $$

   令

   $$
   B=(w_1,w_2,w_3).
   $$

   求 ${}^tBB$ 的全部特征值。

## **Kai**

(1)
$c_1v_1+c_2v_2+c_3v_3=0$ とおくと，各成分から

$$
c_1+c_2=0,\qquad c_1-c_3=0,\qquad -c_2+\alpha c_3=0
$$

を得る。最初の2式より $c_2=-c_1,\ c_3=c_1$ なので，
第3式は $(1+\alpha)c_1=0$ となる。したがって
$\alpha\neq-1$ ならば $c_1=c_2=c_3=0$ である。
一方， $\alpha=-1$ のときは

$$
v_1-v_2+v_3=0
$$

となる。よって，一次独立であるための必要十分条件は

$$
\boxed{\alpha\neq-1}
$$

である。

(2)
(a)
$A^{\mathsf T}A$ は対称行列であるため，対角化可能である。
よって記述は正しい。

(b)
$A^{\mathsf T}A$ の $(i,j)$ 成分は
$v_i\cdot v_j$ である。
実際，

$$
A^{\mathsf T}A=
\begin{pmatrix}
v_1\cdot v_1 & v_1\cdot v_2 & v_1\cdot v_3\\
v_2\cdot v_1 & v_2\cdot v_2 & v_2\cdot v_3\\
v_3\cdot v_1 & v_3\cdot v_2 & v_3\cdot v_3
\end{pmatrix}
$$

となる。
したがって記述は正しい。

(c)
$\alpha=-1$ のとき，(1) より $v_1-v_2+v_3=0$ であるから
$A(1,-1,1)^{\mathsf T}=0$ である。したがって

$$
A^{\mathsf T}A(1,-1,1)^{\mathsf T}=0
$$

となり， $A^{\mathsf T}A$ は正則ではない。
よって記述は誤りである。

(3)

$$
q=xv_1+yv_2+zv_3
=
A
\begin{pmatrix}
x\\y\\z
\end{pmatrix}
$$

とおく。
このとき

$$
\begin{pmatrix}
x\\y\\z
\end{pmatrix}^{\mathsf T}
A^{\mathsf T}A
\begin{pmatrix}
x\\y\\z
\end{pmatrix}
=
(Ay)^{\mathsf T}(Ay)
=
\|q\|^2
=
q\cdot q
$$

が成り立つ。

(4)
$y\neq 0$ に対して

$$
y^{\mathsf T}A^{\mathsf T}Ay
=
\|Ay\|^2
>
0
$$

がすべての $y\neq0$ に対して成り立つことと，
$\ker A=\{0\}$ ，すなわち $A$ の階数が $3$ であることは同値である。
よって

$$
\alpha\neq -1
$$

が条件である。

(5)
$w_1,w_2,w_3$ が互いに直交するとする。

$$
B=(w_1,w_2,w_3)
$$

とおくと，

$$
B^{\mathsf T}B
=
\begin{pmatrix}
|w_1|^2 & 0 & 0\\
0 & |w_2|^2 & 0\\
0 & 0 & |w_3|^2
\end{pmatrix}
=
\begin{pmatrix}
9 & 0 & 0\\
0 & 25 & 0\\
0 & 0 & 4
\end{pmatrix}
$$

である。
したがって，
$B^{\mathsf T}B$ の固有値は
$9,25,4$ である。
