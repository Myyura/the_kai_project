---
sidebar_label: "社会工学学位プログラム 2024年1月実施 数学 I"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2024年1月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の $3 \times 3$ の実対称行列 $A$ を考える。

$$
A = \begin{pmatrix}
-1 & -1 & 1 \\
-1 & 1 & -1 \\
1 & -1 & -1
\end{pmatrix}.
$$

また，線形写像 $f: \mathbb{R}^3 \to \mathbb{R}^3$ を $f(\mathbf{x}) = A\mathbf{x}$ と定義する。ここで， $\mathbf{x} \in \mathbb{R}^3$ は 3 次元列ベクトルである。
以下の問 (1)-(5) に答えよ。
(1) $f$ の合成写像 $g$ を次のように与える。

$$
g(\mathbf{x}) = f \circ f(\mathbf{x}) = f(f(\mathbf{x})).
$$

この合成写像は $g(\mathbf{x}) = B\mathbf{x}$ と表すことができる。行列 $B$ を行列 $A$ を用いて表せ。
(2) 以下の $v_1, v_2, v_3$ は行列 $A$ の固有ベクトルである。

$$
v_1 = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}.
$$

各ベクトルに対応する固有値をそれぞれ答えよ。
(3) 行列 $P$ を (2) の $v_1, v_2, v_3$ を用いて次のように定義する。

$$
P = (v_1, v_2, v_3) = \begin{pmatrix}
-1 & 1 & 1 \\
0 & 1 & -2 \\
1 & 1 & 1
\end{pmatrix}.
$$

この行列の逆行列 $P^{-1}$ は，ある行列 $X$ を用いて $P^{-1} = X {}^tP$ と表わされる。行列 $X$ を求めよ。ただし， ${}^tP$ は $P$ の転置行列である。
(4) 実数パラメータ $a, b, c$ を用いて, ベクトル $\mathbf{x}$ が $\mathbf{x} = av_1 + bv_2 + cv_3$ と表されるとき,

$$
A\mathbf{x} = PY \begin{pmatrix} a \\ b \\ c \end{pmatrix}
$$

を満たす行列 $Y$ を求めよ。ただし, $v_1, v_2, v_3$ および $P$ は (2)-(3) で用いたベクトルおよび行列である。

(5) $f$ を 5 回合成した写像 $h(\mathbf{x}) = f \circ f \circ f \circ f \circ f(\mathbf{x}) = f(f(f(f(f(\mathbf{x})))))$ は, (3) の行列 $P$ を用いて $h(\mathbf{x}) = (PZ {}^tP) \mathbf{x}$ と表すことができる。行列 $Z$ を求めよ。

### 题目描述

给定 $3\times3$ 实对称矩阵

$$
A=\begin{pmatrix}
-1&-1&1\\
-1&1&-1\\
1&-1&-1
\end{pmatrix},
$$

并定义线性映射

$$
f:\mathbb R^3\to\mathbb R^3,\qquad
f(\mathbf x)=A\mathbf x,
$$

其中 $\mathbf x$ 是三维列向量。回答下列问题：

1. 定义 $f$ 与自身的复合映射

   $$
   g(\mathbf x)=f\circ f(\mathbf x)=f(f(\mathbf x)).
   $$

   若 $g(\mathbf x)=B\mathbf x$，用 $A$ 表示矩阵 $B$。
2. 已知

   $$
   v_1=\begin{pmatrix}-1\\0\\1\end{pmatrix},\qquad
   v_2=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
   v_3=\begin{pmatrix}1\\-2\\1\end{pmatrix}
   $$

   都是 $A$ 的特征向量，分别求它们对应的特征值。
3. 令

   $$
   P=(v_1,v_2,v_3)
   =\begin{pmatrix}
   -1&1&1\\
   0&1&-2\\
   1&1&1
   \end{pmatrix}.
   $$

   已知 $P^{-1}$ 可写成

   $$
   P^{-1}=X\,{}^tP,
   $$

   其中 ${}^tP$ 是 $P$ 的转置矩阵。求矩阵 $X$。
4. 若实参数 $a,b,c$ 使

   $$
   \mathbf x=av_1+bv_2+cv_3,
   $$

   求满足

   $$
   A\mathbf x
   =PY\begin{pmatrix}a\\b\\c\end{pmatrix}
   $$

   的矩阵 $Y$。
5. 将 $f$ 连续复合五次，得到

   $$
   h(\mathbf x)
   =f\circ f\circ f\circ f\circ f(\mathbf x)
   =f(f(f(f(f(\mathbf x))))).
   $$

   已知可用第 3 问的 $P$ 写成

   $$
   h(\mathbf x)=(PZ\,{}^tP)\mathbf x.
   $$

   求矩阵 $Z$。

## **Kai**

(1)
$g(x)=f(f(x))$ であり， $f(x)=Ax$ なので

$$
g(x)=A(Ax)=A^2x
$$

よって $g(x)=Bx$ と書けば $B=A^2$ である。
実際に計算すると

$$
B=A^2=
\begin{pmatrix}
3 & -1 & -1\\
-1 & 3 & -1\\
-1 & -1 & 3
\end{pmatrix}.
$$

(2)
各ベクトルに対し $Av_i=\lambda_i v_i$ を計算する。

$$
Av_1=
\begin{pmatrix}2\\0\\-2\end{pmatrix}
=-2\begin{pmatrix}-1\\0\\1\end{pmatrix}
\Rightarrow \lambda_1=-2,
\quad
Av_2=
\begin{pmatrix}-1\\-1\\-1\end{pmatrix}
=-1\begin{pmatrix}1\\1\\1\end{pmatrix}
\Rightarrow \lambda_2=-1,
$$

$$
Av_3=
\begin{pmatrix}2\\-4\\2\end{pmatrix}
=2\begin{pmatrix}1\\-2\\1\end{pmatrix}
\Rightarrow \lambda_3=2.
$$

(3)
(2)より $v_1,v_2,v_3$ は互いに直交するので，

$$
P^{\mathsf T}P=
\mathrm{diag}(\|v_1\|^2,\|v_2\|^2,\|v_3\|^2)
=
\mathrm{diag}(2,3,6).
$$

したがって

$$
P^{-1}
=
\mathrm{diag}\!\left(\frac12,\frac13,\frac16\right)P^{\mathsf T}.
$$

ゆえに $P^{-1}=X\,{}^{\mathsf T}\!P$ を満たす行列は

$$
X=
\mathrm{diag}\!\left(\frac12,\frac13,\frac16\right).
$$

(4)
$x=av_1+bv_2+cv_3=P\begin{pmatrix}a\\b\\c\end{pmatrix}$ とすると

$$
Ax
=a(-2)v_1+b(-1)v_2+c(2)v_3
=
P
\begin{pmatrix}
-2 & 0 & 0\\
0 & -1 & 0\\
0 & 0 & 2
\end{pmatrix}
\begin{pmatrix}a\\b\\c\end{pmatrix}.
$$

よって

$$
Y=
\begin{pmatrix}
-2 & 0 & 0\\
0 & -1 & 0\\
0 & 0 & 2
\end{pmatrix}.
$$

(5)
$h(x)=f^{\circ 5}(x)=A^5x$ であり，

$$
A^5
=P\,\mathrm{diag}((-2)^5,(-1)^5,2^5)\,P^{-1}
=
P\,\mathrm{diag}(-32,-1,32)\,X\,P^{\mathsf T}.
$$

したがって $h(x)=(PZ\,{}^{\mathsf T}\!P)x$ の形にすると

$$
Z=\mathrm{diag}(-32,-1,32)\,X
=
\mathrm{diag}\!\left(
-16,\,-\frac13,\,\frac{16}{3}
\right).
$$
