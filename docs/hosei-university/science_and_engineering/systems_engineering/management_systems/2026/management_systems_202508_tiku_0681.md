---
sidebar_label: "2025年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

行列 $A$ を次で定める。

$$
A = \begin{bmatrix} 4 & 4 & -1 \\ -6 & -5 & 0 \\ -6 & -4 & -1 \end{bmatrix}
$$

(1) $A$ の固有値 $\lambda_1, \lambda_2, \lambda_3$ を求めよ。ただし $\lambda_1 < \lambda_2 < \lambda_3$ とする。

(2) 固有値 $\lambda_1, \lambda_2, \lambda_3$ に対する固有ベクトル $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ をそれぞれ一つ求めよ。

(3) 行列 $A$ を対角化せよ。すなわち $A$ を

$$
A = PDP^{-1}
$$

という形に表すときの $P$ と $D$ を求めよ。ここで $D$ は対角行列、 $P$ は正則行列とする。

(4) 上の $P$ に対して $P$ の逆行列 $P^{-1}$ を求めよ。

(5) $A^n \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$ を求めよ。

### 题目描述

定义矩阵

$$
A=
\begin{bmatrix}
4&4&-1\\
-6&-5&0\\
-6&-4&-1
\end{bmatrix}.
$$

（1）求 $A$ 的特征值 $\lambda_1,\lambda_2,\lambda_3$，其中规定 $\lambda_1<\lambda_2<\lambda_3$。

（2）对特征值 $\lambda_1,\lambda_2,\lambda_3$，分别求一个对应的特征向量 $\mathbf v_1,\mathbf v_2,\mathbf v_3$。

（3）将矩阵 $A$ 对角化。也就是说，在

$$
A=PDP^{-1}
$$

中求 $P$ 与 $D$，其中 $D$ 为对角矩阵，$P$ 为可逆矩阵。

（4）对上一问求得的 $P$，求其逆矩阵 $P^{-1}$。

（5）求

$$
A^n
\begin{bmatrix}
0\\1\\0
\end{bmatrix}.
$$

## **Kai**

(1) 固有値を求める。

$$
\det(\lambda I-A)
=(\lambda+2)(\lambda+1)(\lambda-1)
$$

したがって，大小関係を考慮すると

$$
\boxed{\lambda_1=-2,\qquad \lambda_2=-1,\qquad \lambda_3=1}.
$$

(2) 固有ベクトルを求める。

各固有値について $(A-\lambda I)v=0$ を解くと，例えば

$$
\lambda_1=-2:\quad
\mathbf v_1=\begin{pmatrix}-1\\2\\2\end{pmatrix},
\qquad
\lambda_2=-1:\quad
\mathbf v_2=\begin{pmatrix}-2\\3\\2\end{pmatrix},
\qquad
\lambda_3=1:\quad
\mathbf v_3=\begin{pmatrix}-1\\1\\1\end{pmatrix}
$$

を取ることができる。

(3)

$$
P =
\begin{pmatrix}
-1 & -2 & -1\\
2 & 3 & 1\\
2 & 2 & 1
\end{pmatrix},
\qquad
D =
\begin{pmatrix}
-2 & 0 & 0\\
0 & -1 & 0\\
0 & 0 & 1
\end{pmatrix},
$$

とおけば $A=PDP^{-1}$ である。

(4)

$$
P^{-1} =
\begin{pmatrix}
1 & 0 & 1\\
0 & 1 & -1\\
-2 & -2 & 1
\end{pmatrix}.
$$

(5)

$P^{-1}(0,1,0)^{\mathsf T}=(0,1,-2)^{\mathsf T}$ なので，

$$
A^n\begin{pmatrix}0\\1\\0\end{pmatrix}
=
\begin{pmatrix}
2-2(-1)^n\\
3(-1)^n-2\\
2(-1)^n-2
\end{pmatrix}.
$$
