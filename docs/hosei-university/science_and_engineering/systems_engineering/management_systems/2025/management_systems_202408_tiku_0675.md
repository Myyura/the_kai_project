---
sidebar_label: "2024年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を $A = \begin{bmatrix} 7 & -5 & 15 \\ 3 & -1 & 9 \\ -1 & 1 & -1 \end{bmatrix}$ とする。

(1) $\mathbf{x} = \begin{bmatrix} -5 \\ -3 \\ 1 \end{bmatrix}$ とする。積 $A\mathbf{x}$ を求めよ。

(2) 3 次単位行列を $E_3$ で表す。連立 1 次方程式 $(A - 2E_3)\mathbf{y} = \mathbf{0}$ を解け。ここで, $\mathbf{y}$ は 3 次元変数ベクトルである。

(3) 行列 $A$ が対角化可能であるか論じよ。対角化可能であるときは, $A$ を対角化する正則行列 $P$ のひとつと，その $P$ により $A$ を対角化して得られる対角行列 $D$ を記せ。

### 题目描述

给定矩阵

$$
A=
\begin{bmatrix}
7&-5&15\\
3&-1&9\\
-1&1&-1
\end{bmatrix}.
$$

（1）令

$$
\mathbf{x}=
\begin{bmatrix}
-5\\-3\\1
\end{bmatrix}.
$$

求矩阵与向量的乘积 $A\mathbf{x}$。

（2）用 $E_3$ 表示三阶单位矩阵。解齐次线性方程组

$$
(A-2E_3)\mathbf{y}=\mathbf{0},
$$

其中 $\mathbf{y}$ 是三维变量向量。

（3）讨论矩阵 $A$ 是否可对角化。若可对角化，给出一个使 $A$ 对角化的可逆矩阵 $P$，以及由该 $P$ 得到的对角矩阵 $D$。

## **Kai**

(1) 積 $Ax$ を求めよ．

$$
Ax=
\begin{pmatrix}
7 & -5 & 15\\
3 & -1 & 9\\
-1 & 1 & -1
\end{pmatrix}
\begin{pmatrix}
-5\\
-3\\
1
\end{pmatrix}
=
\begin{pmatrix}
-5\\
-3\\
1
\end{pmatrix}
=x.
$$

したがって， $Ax=x$ であり， $x$ は固有値 $1$ に対応する固有ベクトルである．

(2) 3 次単位行列を $E_3$ とし，連立一次方程式 $(A-2E_3)y=0$ を解け．

$$
E_3=
\begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{pmatrix},
\qquad
A-2E_3=
\begin{pmatrix}
5 & -5 & 15\\
3 & -3 & 9\\
-1 & 1 & -3
\end{pmatrix}.
$$

$(A-2E_3)y=0$ は

$$
\begin{cases}
5y_1-5y_2+15y_3=0,\\
3y_1-3y_2+9y_3=0,\\
-y_1+y_2-3y_3=0
\end{cases}
$$

に等しく，いずれも

$$
-y_1+y_2-3y_3=0 \quad\Leftrightarrow\quad y_1=y_2-3y_3
$$

を表している．

よって

$$
y_2=s,\quad y_3=t \quad (s,t\in\mathbb{R})
$$

とおけば

$$
y_1=s-3t,
$$

従って解は

$$
y=
\begin{pmatrix}
y_1\\y_2\\y_3
\end{pmatrix}
=
\begin{pmatrix}
s-3t\\ s\\ t
\end{pmatrix}
=
s\begin{pmatrix}1\\1\\0\end{pmatrix}
+
t\begin{pmatrix}-3\\0\\1\end{pmatrix}.
$$

すなわち，固有値 $2$ に対応する固有ベクトルとして

$$
\begin{pmatrix}1\\1\\0\end{pmatrix},\quad
\begin{pmatrix}-3\\0\\1\end{pmatrix}
$$

を取ることができる．

(3) 行列 $A$ が対角化可能であるかを論じよ．対角化可能なら， $A$ を対角化する正則行列 $P$ の一つと，その $P$ により $A$ を対角化して得られる対角行列 $D$ を記せ．

固有値は

$$
\lambda=1 \quad(\text{固有ベクトル }x=(-5,-3,1)^T),
\qquad
\lambda=2 \quad(\text{固有ベクトル }(1,1,0)^T,\,(-3,0,1)^T)
$$

であり，3 つの線形独立な固有ベクトルをもつので， $A$ は対角化可能である．

例えば，これら 3 本の固有ベクトルを列に並べて

$$
P=
\begin{pmatrix}
-5 & 1 & -3\\
-3 & 1 & 0\\
1 & 0 & 1
\end{pmatrix}
$$

とおくと，

$$
P^{-1}AP=
\begin{pmatrix}
1 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2
\end{pmatrix}
=:D.
$$

したがって，一つの対角化は

$$
\boxed{
P=
\begin{pmatrix}
-5 & 1 & -3\\
-3 & 1 & 0\\
1 & 0 & 1
\end{pmatrix},\qquad
D=
\begin{pmatrix}
1 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2
\end{pmatrix}
}
$$

で与えられる．
