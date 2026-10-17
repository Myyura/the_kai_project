---
sidebar_label: 2025年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2025年8月実施 必須問題（数学）問2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の設問に答えよ。

**（1）** 次の $x,y,z$ に関する連立 1 次方程式が解を持つとき、$c$ の値と $x,y,z$ の一般解を求めよ。

$$
\begin{cases}x+2y+3z=4,\\x+3y+6z=10,\\x+4y+9z=c.\end{cases}
$$

**（2）** 行列 $A$ が以下のように与えられている。

$$
A=\begin{pmatrix}3&-1&-2\\2&0&-4\\-1&1&4\end{pmatrix}
$$

正則行列 $P$ によって $P^{-1}AP$ を対角化できるならば、行列 $P$ と対角行列を求めよ。対角化できないならば、できない理由を示せ。

**（3）** $\boldsymbol P,\boldsymbol Q$ を 3 次元座標、$\boldsymbol e$ を 3 次元単位ベクトルとする。直線 $L$ を、点 $\boldsymbol P$ を通り、方向ベクトルが $\boldsymbol e$ の直線とする。平面 $\pi$ を、点 $\boldsymbol Q$ を通り、直線 $L$ に垂直な平面とする。このとき、直線 $L$ と平面 $\pi$ の交点 $\boldsymbol R$ を $\boldsymbol P,\boldsymbol Q,\boldsymbol e$ を用いて表せ。ただし、二つのベクトル $\boldsymbol a,\boldsymbol b$ の内積を $\boldsymbol a\cdot\boldsymbol b$ と書くものとする。

キーワード：連立 1 次方程式 simultaneous linear equations、行列 matrix、正則行列 regular matrix、対角化 diagonalization、対角行列 diagonal matrix、3 次元座標 three dimensional coordinate、3 次元単位ベクトル three dimensional unit vector、方向ベクトル direction vector、内積 inner product。

#### 题目描述

回答下列问题。

**（1）** 当下列关于 $x,y,z$ 的线性方程组有解时，求 $c$ 的值及 $x,y,z$ 的通解。

$$
\begin{cases}x+2y+3z=4,\\x+3y+6z=10,\\x+4y+9z=c.\end{cases}
$$

**（2）** 给定矩阵

$$
A=\begin{pmatrix}3&-1&-2\\2&0&-4\\-1&1&4\end{pmatrix}.
$$

若可以利用可逆矩阵 $P$ 使 $P^{-1}AP$ 成为对角矩阵，求 $P$ 及所得对角矩阵；若不能对角化，说明原因。

**（3）** 设 $\boldsymbol P,\boldsymbol Q$ 为三维坐标，$\boldsymbol e$ 为三维单位向量。直线 $L$ 通过点 $\boldsymbol P$，方向向量为 $\boldsymbol e$；平面 $\pi$ 通过点 $\boldsymbol Q$，并垂直于直线 $L$。用 $\boldsymbol P,\boldsymbol Q,\boldsymbol e$ 表示 $L$ 与 $\pi$ 的交点 $\boldsymbol R$。两向量 $\boldsymbol a,\boldsymbol b$ 的内积记为 $\boldsymbol a\cdot\boldsymbol b$。

## **Kai**

### (1)

拡大係数行列を行基本変形すると

$$
\left(\begin{array}{ccc|c}
1&2&3&4\\1&3&6&10\\1&4&9&c
\end{array}\right)
\sim
\left(\begin{array}{ccc|c}
1&0&-3&-8\\0&1&3&6\\0&0&0&c-16
\end{array}\right).
$$

したがって $c=16$ である。$z=t$ とおけば

$$
\boxed{(x,y,z)=(3t-8,-3t+6,t)\quad(t\in\mathbb R)}.
$$

### (2)

$$
\det(A-\lambda I)=(3-\lambda)(2-\lambda)^2
$$

より、固有値は $2,3$ である。対応する固有空間は

$$
\begin{gathered}
E_2=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\0\end{pmatrix},
\begin{pmatrix}2\\0\\1\end{pmatrix}
\right\},\\
E_3=\operatorname{span}\left\{
\begin{pmatrix}-1\\-2\\1\end{pmatrix}
\right\}.
\end{gathered}
$$

よって

$$
P=\begin{pmatrix}1&2&-1\\1&0&-2\\0&1&1\end{pmatrix}
$$

とおけば $\det P\ne0$ であり、

$$
\boxed{P^{-1}AP=\begin{pmatrix}2&0&0\\0&2&0\\0&0&3\end{pmatrix}}.
$$

### (3)

交点を $R=P+te$ とおく。平面の法線ベクトルは $e$ なので

$$
(R-Q)\mathbin{\cdot}e=0.
$$

$e\mathbin{\cdot}e=1$ より $t=(Q-P)\mathbin{\cdot}e$ となる。したがって

$$
\boxed{R=P+\{(Q-P)\mathbin{\cdot}e\}e}.
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_5_m_mandatory202508.pdf)
