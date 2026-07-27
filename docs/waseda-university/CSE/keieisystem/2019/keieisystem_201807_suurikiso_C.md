---
sidebar_label: "2018年7月実施 数理基礎 C"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Commuting-Matrices
  - Mathematics.Linear-Algebra.Block-Matrix-Inverse
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 C

## **Author**
祭音Myyura

## **Description**

1. $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ と可換な行列をすべて求めよ。原題には「$a,b,c$ は実数で $a\neq c$」とある。
2. $A,B$ が正則行列なら、$\begin{pmatrix}A&0\\C&B\end{pmatrix}$ も正則であり、

   $$
   \begin{pmatrix}A&0\\C&B\end{pmatrix}^{-1}
   =\begin{pmatrix}A^{-1}&0\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix}
   $$

   であることを示せ。
3. $A=\begin{pmatrix}0&-2&0\\1&2&1\\1&3&0\end{pmatrix}$ の固有値と対応する固有ベクトルを求めよ。

### 题目描述

1. 对矩阵

   $$
   M=\begin{pmatrix}a&b\\c&d\end{pmatrix},
   $$

   求出所有与 $M$ 可交换的矩阵。原题另写有“$a,b,c$ 为实数且 $a\ne c$”这一条件，其中没有列出 $d$。
2. 设 $A,B$ 均为可逆矩阵。证明分块矩阵

   $$
   \begin{pmatrix}A&0\\C&B\end{pmatrix}
   $$

   也可逆，并证明

   $$
   \begin{pmatrix}A&0\\C&B\end{pmatrix}^{-1}
   =\begin{pmatrix}A^{-1}&0\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix}.
   $$

3. 求矩阵

   $$
   A=\begin{pmatrix}0&-2&0\\1&2&1\\1&3&0\end{pmatrix}
   $$

   的全部特征值以及各自对应的特征向量。

#### 考点

- **可交换矩阵**：需要由 $XM=MX$ 刻画给定二阶矩阵的全部可交换矩阵，并留意原题条件中的变量遗漏。
- **分块矩阵求逆**：需要通过分块乘法验证下三角分块矩阵的可逆性及给定逆矩阵公式。
- **特征值与特征向量**：需要计算三阶矩阵的特征多项式，并分别求出各特征空间中的非零向量。

## **Kai**

### [小問 1]

原題は行列に $d$ を用いる一方で実数条件から $d$ を落としており、さらに $a\neq c$ だけでは行列が非スカラーであることも保証しない。このため、以下では表示された一般行列を文字どおり扱う。

$X=\begin{pmatrix}p&q\\r&s\end{pmatrix}$ とおくと、$XM=MX$ は

$$
\boxed{
cq=br,\qquad
b(p-s)+(d-a)q=0,\qquad
(a-d)r+c(s-p)=0
}
$$

と同値である。したがって、この3式を満たす $p,q,r,s$ が求める行列の完全な表示である。

特に $M$ がスカラー行列でなければ、2次正方行列の中心化代数は2次元であり、解は

$$
\boxed{X=\alpha I+\beta M\qquad(\alpha,\beta\in\mathbb R)}
$$

となる。$M=\lambda I$ なら任意の2次正方行列 $X$ が可換である。

### [小問 2]

右辺の候補を $N$ とおく。ブロック行列の積を計算すると

$$
\begin{aligned}
\begin{pmatrix}A&0\\C&B\end{pmatrix}N
&=\begin{pmatrix}
AA^{-1}&0\\
CA^{-1}-BB^{-1}CA^{-1}&BB^{-1}
\end{pmatrix}\\
&=\begin{pmatrix}I&0\\0&I\end{pmatrix}.
\end{aligned}
$$

逆順の積も同様に単位行列になる。よって表示された $N$ は逆行列であり、元のブロック行列は正則である。

### [小問 3]

特性多項式は

$$
\det(\lambda I-A)=(\lambda-1)(\lambda-2)(\lambda+1)
$$

である。したがって固有値と固有空間は

$$
\boxed{
\begin{array}{c|c}
\lambda & \text{対応する固有ベクトルの一例}\\ \hline
1&(-2,1,1)^{\mathsf T}\\
2&(-1,1,1)^{\mathsf T}\\
-1&(-2,-1,5)^{\mathsf T}
\end{array}}
$$

である。各ベクトルの0でない定数倍も同じ固有値に対応する。
