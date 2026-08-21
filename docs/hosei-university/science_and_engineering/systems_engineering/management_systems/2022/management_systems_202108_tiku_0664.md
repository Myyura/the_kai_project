---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2次の正方行列 $A$ と3次の正方行列 $B$ を次の様に定める。

$$
A = \begin{pmatrix} 3 & -2 \\ 4 & -3 \end{pmatrix}, B = \begin{pmatrix} 3 & -2 & 0 \\ 4 & -3 & 3 \\ 0 & 0 & 2 \end{pmatrix}
$$

(1) $A$ の固有値をすべて求めよ。
(2) (1) で求めた固有値に対する固有ベクトルをそれぞれ一つ求めよ。
(3) 3次元列ベクトル空間 $R^3$ およびその部分集合 $W$ を

$$
R^3 = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} | x, y, z \in R \right\}, W = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in R^3 | z = 0 \right\}
$$

と定義する。このとき $w \in W$ ならば $Bw \in W$ を示せ。
(4) $B$ の固有値をすべて求め、そのそれぞれに対する固有ベクトルを求めよ。

### 题目描述

定义二阶方阵 $A$ 和三阶方阵 $B$：

$$
A=\begin{pmatrix}3&-2\\4&-3\end{pmatrix},
\qquad
B=\begin{pmatrix}
3&-2&0\\
4&-3&3\\
0&0&2
\end{pmatrix}.
$$

（1）求 $A$ 的全部特征值。

（2）对（1）求得的每个特征值，各求一个对应的特征向量。

（3）定义三维实列向量空间 $\mathbb{R}^3$ 及其子集 $W$：

$$
\mathbb{R}^3=
\left\{\begin{pmatrix}x\\y\\z\end{pmatrix}\,\middle|\,x,y,z\in\mathbb{R}\right\},
\qquad
W=
\left\{\begin{pmatrix}x\\y\\z\end{pmatrix}\in\mathbb{R}^3\,\middle|\,z=0\right\}.
$$

证明：若 $w\in W$，则 $Bw\in W$。

（4）求 $B$ 的全部特征值，并对每个特征值求出相应的特征向量。

## **Kai**

(1) $A$ の固有値を求める。

$$
\det(A - \lambda I) = \begin{vmatrix} 3 - \lambda & -2 \\ 4 & -3 - \lambda \end{vmatrix} = (3 - \lambda)(-3 - \lambda) - (-2)(4) = \lambda^2 - 9 + 8 = \lambda^2 - 1 = 0
$$

よって、 $\lambda = \pm 1$ が固有値である。

(2) $\lambda = 1$ のとき、

$$
(A - I)v = \begin{pmatrix} 2 & -2 \\ 4 & -4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$2x - 2y = 0$ より $x = y$ 。固有ベクトルは $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ となる。
$\lambda = -1$ のとき、

$$
(A + I)v = \begin{pmatrix} 4 & -2 \\ 4 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$4x - 2y = 0$ より $y = 2x$ 。固有ベクトルは $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ となる。

(3) $w = \begin{pmatrix} x \\ y \\ 0 \end{pmatrix} \in W$ とする。

$$
Bw = \begin{pmatrix} 3 & -2 & 0 \\ 4 & -3 & 3 \\ 0 & 0 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ 0 \end{pmatrix} = \begin{pmatrix} 3x - 2y \\ 4x - 3y \\ 0 \end{pmatrix}
$$

$Bw$ の第3成分は0なので、 $Bw \in W$ である。

(4) $B$ の固有値を求める。

$$
\det(B - \lambda I) = \begin{vmatrix} 3 - \lambda & -2 & 0 \\ 4 & -3 - \lambda & 3 \\ 0 & 0 & 2 - \lambda \end{vmatrix} = (2 - \lambda) \begin{vmatrix} 3 - \lambda & -2 \\ 4 & -3 - \lambda \end{vmatrix} = (2 - \lambda)(\lambda^2 - 1) = (2 - \lambda)(\lambda - 1)(\lambda + 1) = 0
$$

よって、 $\lambda = 2, 1, -1$ が固有値である。

$\lambda = 2$ のとき、

$$
(B - 2I)v = \begin{pmatrix} 1 & -2 & 0 \\ 4 & -5 & 3 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$x - 2y = 0$ , $4x - 5y + 3z = 0$ 。 $x = 2y$ より、 $8y - 5y + 3z = 0$ , $3y + 3z = 0$ , $z = -y$ 。固有ベクトルは $\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$ となる。

$\lambda = 1$ のとき、

$$
(B - I)v = \begin{pmatrix} 2 & -2 & 0 \\ 4 & -4 & 3 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$2x - 2y = 0$ , $4x - 4y + 3z = 0$ , $z = 0$ 。 $x = y$ より、 $4x - 4x = 0$ 。固有ベクトルは $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ となる。

$\lambda = -1$ のとき、

$$
(B + I)v = \begin{pmatrix} 4 & -2 & 0 \\ 4 & -2 & 3 \\ 0 & 0 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$4x - 2y = 0$ , $4x - 2y + 3z = 0$ , $3z = 0$ 。 $y = 2x$ , $z = 0$ 。固有ベクトルは $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ となる。
