---
sidebar_label: 2016年8月実施 数学 I
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Characteristic-Polynomial-Coefficients-from-Eigenvalues
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
---

# 京都大学 情報学研究科 システム科学専攻 2016年8月実施 数学 I

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$E$ は単位行列、$\operatorname{trace}(A)$ は正方行列 $A$ の対角要素の総和、$\operatorname{rank}(A)$ は階数とする。

### 問1

(i) 行列 $A$ に対して $A^i=E$ となる $1$ 以上の整数 $i$ が存在すれば、$A$ は正則であることを示せ。

(ii) $X$ を実数要素の2次正方行列とする。次式を満たす $X$ が存在するか判定し、存在すれば解の一つを求めよ。

$$
\begin{pmatrix}2&2\\4&3\end{pmatrix}X
+X\begin{pmatrix}1&1\\0&-1\end{pmatrix}
=\begin{pmatrix}0&2\\0&1\end{pmatrix}.
$$

(iii) $n$ 次正方行列 $A$ の固有値を $\lambda_1,\ldots,\lambda_n$ とすると、$\operatorname{trace}(A)=\lambda_1+\cdots+\lambda_n$ が成り立つことを示せ。

### 問2

実数要素の行列やベクトルを考える。

(i) $m\times n$ 行列 $P$ と $m$ 次元列ベクトル $q$ が与えられたとき、$Pr=q$ を満たす $n$ 次元ベクトル $r$ が存在するための必要十分条件を以下から選べ。必要十分条件でないものすべてに反例を挙げよ。

A. $\operatorname{rank}(P)=\min(m,n)$。

B. $\operatorname{rank}(P)=\operatorname{rank}(q)$。

C. $\operatorname{rank}(P)=\operatorname{rank}([P,q])$。ここで $[P,q]$ は $P$ と $q$ を並べた $m\times(n+1)$ 行列である。

(ii) $S$ が $m\times n$ 行列、$T$ が正則な $n$ 次正方行列のとき、$\operatorname{rank}(S)=\operatorname{rank}(ST)$ を示せ。

(iii) $U=\begin{pmatrix}a&1\\b&2\end{pmatrix}$ が $\operatorname{rank}(U)>\operatorname{rank}(U^2)$ を満たす実数 $a,b$ を求めよ。

#### 题目描述

用 $E$ 表示单位矩阵，$\operatorname{trace}(A)$ 表示方阵对角元素之和，$\operatorname{rank}(A)$ 表示秩。

**问1**

（i）若存在正整数 $i$ 使 $A^i=E$，证明 $A$ 可逆。

（ii）判断是否存在实2阶方阵 $X$ 满足

$$
\begin{pmatrix}2&2\\4&3\end{pmatrix}X+X\begin{pmatrix}1&1\\0&-1\end{pmatrix}
=\begin{pmatrix}0&2\\0&1\end{pmatrix},
$$

若存在，给出一个解。（iii）设 $n$ 阶方阵 $A$ 的特征值为 $\lambda_1,\ldots,\lambda_n$，证明 $\operatorname{trace}(A)=\sum_j\lambda_j$。

**问2** 所有矩阵和向量的元素均为实数。

（i）给定 $m\times n$ 矩阵 $P$ 和 $m$ 维列向量 $q$，以下哪个条件是存在 $n$ 维向量 $r$ 使 $Pr=q$ 的充要条件？对不是充要条件的每个选项给出反例。

A. $\operatorname{rank}(P)=\min(m,n)$；B. $\operatorname{rank}(P)=\operatorname{rank}(q)$；C. $\operatorname{rank}(P)=\operatorname{rank}([P,q])$，其中 $[P,q]$ 是增广矩阵。

（ii）若 $S$ 为 $m\times n$ 矩阵、$T$ 为可逆 $n$ 阶方阵，证明 $\operatorname{rank}(S)=\operatorname{rank}(ST)$。

（iii）求满足 $\operatorname{rank}(U)>\operatorname{rank}(U^2)$ 的实数 $a,b$，其中 $U=\begin{pmatrix}a&1\\b&2\end{pmatrix}$。


## **Kai**

### 問1

(i) $A^{i-1}$ は $A$ の両側逆行列なので正則である。

(ii) $X=\begin{pmatrix}x&y\\z&w\end{pmatrix}$ とおく。成分比較から

$$
3x+2z=0,\quad4x+4z=0,\quad
x+y+2w=2,\quad z+4y+2w=1.
$$

最初の2式より $x=z=0$。残りから $y=-1/3,w=7/6$。よって解は存在し、

$$
\boxed{X=\begin{pmatrix}0&-1/3\\0&7/6\end{pmatrix}}.
$$

(iii) 特性多項式 $\det(tE-A)$ における $t^{n-1}$ の係数を比較する。行列式の展開からは $-\sum_ja_{jj}$、$\prod_j(t-\lambda_j)$ からは $-\sum_j\lambda_j$ となるため、等式が従う。

### 問2

(i) 答えは **C**。$Pr=q$ が解をもつことは、$q$ が $P$ の列空間に属すること、すなわち増広しても階数が増えないことと同値である。

A の反例：$m=n=1,P=[0],q=[0]$ なら解をもつが、$\operatorname{rank}P=0\ne1$。

B の反例：$P=E_2,q=(1,0)^T$ なら解をもつが、$\operatorname{rank}P=2\ne1=\operatorname{rank}q$。

(ii) $\operatorname{rank}(ST)\le\operatorname{rank}S$。また $S=(ST)T^{-1}$ より逆向きの不等式も成り立つ。

(iii) $U$ が正則なら $U^2$ も正則なので条件を満たさない。$U\ne0$ だから $\operatorname{rank}U=1$、$U^2=0$ が必要十分である。

$$
U^2=\begin{pmatrix}a^2+b&a+2\\b(a+2)&b+4\end{pmatrix}=0
$$

から $\boxed{a=-2,\ b=-4}$。このとき実際に $\operatorname{rank}U=1$。

