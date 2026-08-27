---
sidebar_label: 2025年8月実施 必須問題 線形代数
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 必須問題 線形代数

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\begin{pmatrix}
0&1&1&1\\
1&0&1&1\\
1&1&0&1\\
1&1&1&0
\end{pmatrix},\quad
u=\begin{pmatrix}4\\-1\\-5\\2\end{pmatrix},\quad
v=\begin{pmatrix}11\\-5\\1\\k\end{pmatrix}
$$

とする。$Au$、$A$ の固有値、3 次元固有空間 $V$ の指定基底、$Av\in V$ となる $k$、および $f(x)=Ax$ の基底 $(u,v)$ と指定基底に関する表現行列を求めよ。

### 题目描述

给定矩阵 $A$ 及向量 $u,v$，求 $Au$、$A$ 的特征值、三维特征空间的指定基，使 $Av$ 属于该空间的 $k$，以及线性映射 $x\mapsto Ax$ 在两组基下的表示矩阵。

## **Kai**

### (1)

$$
Au=
\begin{pmatrix}
-4\\1\\5\\-2
\end{pmatrix}.
$$

### (2)

$A=J-I$ であり、$J$ の固有値は $4,0,0,0$ である。したがって、

$$
\boxed{\lambda=3,-1,-1,-1}.
$$

### (3)

3 次元の固有空間は

$$
V=\left\{x\in\mathbb R^4\mid x_1+x_2+x_3+x_4=0\right\}
$$

である。よって各ベクトルの成分和を $0$ とおけば、

$$
\boxed{\alpha=\beta=\gamma=-1}.
$$

### (4)

$\boldsymbol 1^{\mathsf T}A=3\boldsymbol 1^{\mathsf T}$ より、$Av\in V$ の条件は $v\in V$ と同値である。したがって、

$$
11-5+1+k=0,\qquad \boxed{k=-7}.
$$

### (5)

$V$ の指定基底を

$$
\mathcal A=\left(
\begin{pmatrix}-1\\1\\0\\0\end{pmatrix},
\begin{pmatrix}-1\\0\\1\\0\end{pmatrix},
\begin{pmatrix}-1\\0\\0\\1\end{pmatrix}
\right)
$$

とする。$u,v\in V$ では $Ax=-x$ であるから、

$$
[Au]_{\mathcal A}=\begin{pmatrix}1\\5\\-2\end{pmatrix},\qquad
[Av]_{\mathcal A}=\begin{pmatrix}5\\-1\\7\end{pmatrix}.
$$

よって、求める表現行列は

$$
\boxed{
M=\begin{pmatrix}
1&5\\
5&-1\\
-2&7
\end{pmatrix}}
$$

である。
