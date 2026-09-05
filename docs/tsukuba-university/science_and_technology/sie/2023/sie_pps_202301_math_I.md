---
sidebar_label: "社会工学学位プログラム 2023年1月実施 数学 I"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2023年1月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

実数 $a \in \mathbb{R}$ を含む次の3×3の実対称行列 $A$ を考える。

$$
A = \begin{pmatrix} a & -1 & -1 \\ -1 & a & -1 \\ -1 & -1 & a \end{pmatrix}
$$

以下の問 (1)-(6)に答えよ。ただし、単位行列は $I$ で表せ。

(1) 行列 $A$ の固有値は少なくとも1つが0である。このとき,行列 $A$ のランクが2以下となることを説明せよ。

(2) 問 (1) の条件下で、実数 $a$ を求めよ。ただし、条件を満足する実数 $a$ は2つあり、うち1つは2である。

以降では $a=2$ とした行列 $A$ を考える.

(3) 行列 $A$ の(重複も含め) 3つの固有値 $\lambda_1, \lambda_2, \lambda_3$ を求めよ。ただし、 $\lambda_1 \leq \lambda_2 \leq \lambda_3$ とする.

(4) ベクトル $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ をそれぞれ固有値 $\lambda_1, \lambda_2, \lambda_3$ に対応する固有ベクトルとする.ベクトル $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ を求めよ.

(5) 線形空間 $\mathbb{R}^3$ における線形変換 $f(\mathbf{x}) = A\mathbf{x}$ の核空間(零空間),像空間を,それぞれ問 (4) の固有ベクトル $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ を用いて表せ。

(6) 新たな3次実対称行列を $P = \frac{1}{\lambda_3}A$ と定義する。行列 $P$ はベクトル $\mathbf{x} \in \mathbb{R}^3$ をある部分空間 $U$ の最も近い点に写す「直交射影行列」であり,部分空間内のベクトル $\mathbf{x} \in U$ に対しては、その定義より $P\mathbf{x} = \mathbf{x}$ が成り立つ。
このとき,部分空間 $U$ を問 (4) で求めた固有ベクトルを用いて表せ。また,部分空間 $U$ の直交補空間への直交射影行列 $B$ を求めよ。

### 题目描述

对实数 $a\in\mathbb R$，考虑 $3\times3$ 实对称矩阵

$$
A=\begin{pmatrix}
a&-1&-1\\
-1&a&-1\\
-1&-1&a
\end{pmatrix}.
$$

以下以 $I$ 表示单位矩阵，回答下列问题：

1. 已知 $A$ 至少有一个特征值为 $0$，说明为什么此时 $\operatorname{rank}A\leq2$。
2. 在第 1 问的条件下求所有可能的 $a$。题面说明符合条件的实数共有两个，其中一个是 $2$。

以下各问固定取 $a=2$。

3. 求 $A$ 的三个特征值（含重数）$\lambda_1,\lambda_2,\lambda_3$，并按

   $$
   \lambda_1\leq\lambda_2\leq\lambda_3
   $$

   排列。
4. 分别求与 $\lambda_1,\lambda_2,\lambda_3$ 对应的特征向量 $\mathbf v_1,\mathbf v_2,\mathbf v_3$；当特征值重复时，应给出相应特征空间内可供后续各问使用的独立向量。
5. 对线性变换

   $$
   f:\mathbb R^3\to\mathbb R^3,\qquad f(\mathbf x)=A\mathbf x,
   $$

   分别用第 4 问的 $\mathbf v_1,\mathbf v_2,\mathbf v_3$ 表示其核空间与像空间。
6. 定义新的三阶实对称矩阵

   $$
   P=\frac{1}{\lambda_3}A.
   $$

   已知 $P$ 是把任意 $\mathbf x\in\mathbb R^3$ 映到某个子空间 $U$ 中最近点的直交投影矩阵，且按定义对 $\mathbf x\in U$ 有 $P\mathbf x=\mathbf x$。用第 4 问的特征向量表示 $U$，并求投影到 $U$ 的正交补空间 $U^\perp$ 上的直交投影矩阵 $B$。

## **Kai**

(1) 行列 A の固有値が少なくとも一つ0であるということは、 $det(A) = 0$ であることを意味する。
$det(A) = a(a^2 - 1) - (-1)(-a-1) + (-1)(1+a) = a^3 - a - a - 1 - 1 - a = a^3 - 3a - 2 = (a+1)(a^2-a-2) = (a+1)(a+1)(a-2) = (a+1)^2(a-2)$
したがって、 $det(A) = 0$ となるのは、 $a = -1, 2$ のとき。
$det(A) = 0$ であるとき、 $A$ は正則でないため, $A$ のランクは3未満。
固有値が0であるとき、少なくとも1つの列ベクトルは他の列ベクトルの線形結合で表現可能である。ランクが2以下である。

(2) 問(1)より、 $det(A) = (a+1)^2 (a-2) = 0$ であり、条件を満たす実数は $a=-1,\,2$ である。

(3) $a=2$ のとき

$$
A = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix}
$$

固有方程式は

$$
\begin{aligned}
\det(A-\lambda I)
&=\begin{vmatrix}2-\lambda&-1&-1\\-1&2-\lambda&-1\\-1&-1&2-\lambda\end{vmatrix}\\
&=(2-\lambda)\bigl((2-\lambda)^2-1\bigr)-2(3-\lambda)\\
&=-\lambda(\lambda-3)^2.
\end{aligned}
$$

従って、 $\lambda_1 = 0, \lambda_2 = 3, \lambda_3 = 3$ 。ただし、 $\lambda_1 \le \lambda_2 \le \lambda_3$ を満たす。

(4) $\lambda_1 = 0$ のとき、

$$
\begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$2x - y - z = 0, -x + 2y - z = 0, -x - y + 2z = 0$ から、 $x = y = z$ 。従って、 $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ 。
$\lambda_2 = \lambda_3 = 3$ のとき、

$$
\begin{pmatrix} -1 & -1 & -1 \\ -1 & -1 & -1 \\ -1 & -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-x - y - z = 0$ から、 $x + y + z = 0$ 。従って、 $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \mathbf{v}_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ と取れる。

(5) 核空間は $A\mathbf{x} = \mathbf{0}$ を満たす $\mathbf{x}$ の集合であるから、問(4)の結果より、核空間は $span\{\mathbf{v}_1\}$ である。
像空間は $A\mathbf{x}$ で表現されるベクトルの集合である。これは A の列ベクトルで生成される。 $A\mathbf{x}$ = $x_1 A_1 + x_2A_2 + x_3A_3$ なので、A の列空間を考えると、rank(A) = 2であるから、 $span\{\mathbf{v}_2, \mathbf{v}_3\}$ に対応する。

(6) $P = \frac{1}{3} A = \frac{1}{3} \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix} $ である。この行列は $\lambda_2=\lambda_3 = 3$ に対応するため、 $P \mathbf{v}_2 = \mathbf{v}_2$ , $P \mathbf{v}_3 = \mathbf{v}_3$ ,であり、 $U$ は $\mathbf{v}_2$ , $\mathbf{v}_3$ によって張られる空間である。
直交補空間は $\mathbf{v}_1$ で張られる空間である。したがって、直交射影行列 B は

$$
\dfrac{\mathbf{v}_1 \mathbf{v}_1^T}{\mathbf{v}_1^T\mathbf{v}_1}
= \begin{pmatrix} 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \end{pmatrix}
$$

である。
