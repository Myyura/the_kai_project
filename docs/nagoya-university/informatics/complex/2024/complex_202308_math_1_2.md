---
sidebar_label: "2023年8月実施 数1 [2]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 数1 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3×3行列

$$
A = \begin{pmatrix} 0 & -1 & 0 \\ 2 & -3 & 0 \\ -2 & -1 & 2 \end{pmatrix}
$$

について考える。

1) 行列Aの固有値は3つある。これらを $\lambda_1 \geq \lambda_2 \geq \lambda_3$ と書くことにする。 $\lambda_1, \lambda_2, \lambda_3$ を求めよ。

2) 行列Aの固有値 $\lambda_i$ に対応する固有ベクトル $\vec{v}_i$ で、第3成分が1となるものを $i = 1, 2, 3$ について求めよ。すなわち、固有ベクトルを

$$
\vec{v}_i \equiv \begin{pmatrix} v_i^1 \\ v_i^2 \\ v_i^3 \end{pmatrix}, \quad (i = 1, 2, 3)
$$

と書くとき、 $v_i^3 = 1$ となる $\vec{v}_i \ (i = 1, 2, 3)$ を求めよ。

3) 行列Vを

$$
V \equiv \begin{pmatrix} v_1^1 & v_2^1 & v_3^1 \\ v_1^2 & v_2^2 & v_3^2 \\ v_1^3 & v_2^3 & v_3^3 \end{pmatrix}
$$

と定義する。このとき $\tilde{A} = V^{-1}AV$ を求めよ。

### 题目描述

考察 $3\times3$ 矩阵

$$
A=
\begin{pmatrix}
0&-1&0\\
2&-3&0\\
-2&-1&2
\end{pmatrix}.
$$

1. $A$ 有三个特征值，按

   $$
   \lambda_1\ge\lambda_2\ge\lambda_3
   $$

   排列。求 $\lambda_1,\lambda_2,\lambda_3$；
2. 对 $i=1,2,3$，求特征值 $\lambda_i$ 对应且第三个分量等于 $1$ 的特征向量

   $$
   \vec v_i=
   \begin{pmatrix}v_i^1\\v_i^2\\v_i^3\end{pmatrix},
   \qquad v_i^3=1;
   $$

3. 定义

   $$
   V=
   \begin{pmatrix}
   v_1^1&v_2^1&v_3^1\\
   v_1^2&v_2^2&v_3^2\\
   v_1^3&v_2^3&v_3^3
   \end{pmatrix}.
   $$

   求 $\widetilde A=V^{-1}AV$。

## **Kai**

1) Characteristic polynomial: $|A - \lambda I| = \begin{vmatrix} -\lambda & -1 & 0 \\ 2 & -3-\lambda & 0 \\ -2 & -1 & 2-\lambda \end{vmatrix} = (2-\lambda)[(-\lambda)(-3-\lambda) - (-1)(2)] = (2-\lambda)(\lambda^2 + 3\lambda + 2) = (2-\lambda)(\lambda+1)(\lambda+2)$ . Therefore, the eigenvalues are $\lambda_1 = 2, \lambda_2 = -1, \lambda_3 = -2$ .

2) For $\lambda_1 = 2$ : $(A - 2I)\vec{v}_1 = 0 \Rightarrow \begin{pmatrix} -2 & -1 & 0 \\ 2 & -5 & 0 \\ -2 & -1 & 0 \end{pmatrix} \begin{pmatrix} v_1^1 \\ v_1^2 \\ v_1^3 \end{pmatrix} = 0$ . Since $v_1^3 = 1$ , we have $-2v_1^1 - v_1^2 = 0$ and $2v_1^1 - 5v_1^2 = 0$ . This gives $v_1^1 = 0, v_1^2 = 0$ . So $\vec{v}_1 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ .

For $\lambda_2 = -1$ : $(A + I)\vec{v}_2 = 0 \Rightarrow \begin{pmatrix} 1 & -1 & 0 \\ 2 & -2 & 0 \\ -2 & -1 & 3 \end{pmatrix} \begin{pmatrix} v_2^1 \\ v_2^2 \\ v_2^3 \end{pmatrix} = 0$ . Since $v_2^3 = 1$ , we have $v_2^1 - v_2^2 = 0$ and $-2v_2^1 - v_2^2 + 3 = 0$ . Thus $v_2^1 = v_2^2$ and $-3v_2^1 = -3$ , so $v_2^1 = 1$ . Then $\vec{v}_2 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .

For $\lambda_3 = -2$ : $(A + 2I)\vec{v}_3 = 0 \Rightarrow \begin{pmatrix} 2 & -1 & 0 \\ 2 & -1 & 0 \\ -2 & -1 & 4 \end{pmatrix} \begin{pmatrix} v_3^1 \\ v_3^2 \\ v_3^3 \end{pmatrix} = 0$ . Since $v_3^3 = 1$ , we have $2v_3^1 - v_3^2 = 0$ and $-2v_3^1 - v_3^2 + 4 = 0$ . Thus $v_3^2 = 2v_3^1$ and $-4v_3^1 + 4 = 0$ , so $v_3^1 = 1$ and $v_3^2 = 2$ . Then $\vec{v}_3 = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$ .

3) $V = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & 2 \\ 1 & 1 & 1 \end{pmatrix}$ であり、

$$
V^{-1}=\begin{pmatrix} -1 & 0 & 1 \\ 2 & -1 & 0 \\ -1 & 1 & 0 \end{pmatrix}.
$$

$V$ の各列は順に固有値 $2,-1,-2$ に対応する固有ベクトルなので、

$$
\tilde{A}=V^{-1}AV
=\begin{pmatrix} 2&0&0\\0&-1&0\\0&0&-2\end{pmatrix}.
$$
