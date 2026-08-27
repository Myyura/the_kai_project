---
sidebar_label: 2023年8月実施 必須問題 線形代数
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 必須問題 線形代数

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\begin{pmatrix}
-4&2&-1&-7\\
0&5&-3&0\\
0&4&-3&0\\
3&-2&1&6
\end{pmatrix},
\quad
p_1=\begin{pmatrix}1\\0\\0\\-1\end{pmatrix},
\quad
p_2=\begin{pmatrix}7\\1\\2\\-3\end{pmatrix},
\quad
p_3=\begin{pmatrix}9\\2\\4\\-1\end{pmatrix}
$$

とする。$\det A$、$p_3$ と $\operatorname{span}\{p_1,p_2\}$ の関係、各 $p_i$ が固有ベクトルとなるか、最小の該当固有値に対する固有空間の基底、および $A^np_3$ を求めよ。

### 题目描述

给定一个四阶矩阵及三个向量，求行列式，判断第三个向量是否属于前两个向量生成的子空间，判定各向量是否为特征向量，并求相应特征空间及 $A^np_3$。

## **Kai**

### (1)

行と列をともに $(1,4,2,3)$ の順に並べるとブロック上三角行列となる。したがって、

$$
\det A
=\det\begin{pmatrix}-4&-7\\3&6\end{pmatrix}
\det\begin{pmatrix}5&-3\\4&-3\end{pmatrix}
=(-3)(-3)=\boxed{9}.
$$

### (2)

$$
p_3=-5p_1+2p_2
$$

であるから、$\boxed{p_3\in V}$ である。

### (3)

直接計算すると

$$
Ap_1=3p_1,\qquad Ap_2=-p_2,
$$

である。よって

$$
\boxed{\alpha_1=3},\qquad \boxed{\alpha_2=-1}.
$$

一方、

$$
Ap_3=\begin{pmatrix}-29\\-2\\-4\\21\end{pmatrix}
$$

は $p_3$ の定数倍ではない。したがって $\boxed{\alpha_3\text{ は存在しない}}$。

### (4)

最小の固有値は $\alpha=-1$ である。$(A+I)x=0$ を解くと

$$
x_3=2x_2,\qquad 3x_1+7x_4=0.
$$

よって固有空間の基底の一例は

$$
\boxed{
\left\{
\begin{pmatrix}-7\\0\\0\\3\end{pmatrix},
\begin{pmatrix}0\\1\\2\\0\end{pmatrix}
\right\}}.
$$

### (5)

(2), (3) より

$$
\begin{aligned}
A^np_3
&=-5A^np_1+2A^np_2\\
&=-5\cdot3^np_1+2(-1)^np_2.
\end{aligned}
$$

したがって、

$$
\boxed{
A^np_3=
\begin{pmatrix}
-5\cdot3^n+14(-1)^n\\
2(-1)^n\\
4(-1)^n\\
5\cdot3^n-6(-1)^n
\end{pmatrix}}.
$$
