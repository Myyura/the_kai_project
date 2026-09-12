---
sidebar_label: 2014年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Skew-Symmetric-Matrix
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 京都大学 情報学研究科 システム科学専攻 2014年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
以下の設問に答えよ。

(1) 次の行列の階数を求めよ。ただし、$x$ は実数である。

$$
A=\begin{pmatrix}1&x&x\\x&1&x\\x&x&1\end{pmatrix}.
$$

(2) すべての要素が整数である正則行列 $A$ を考える。$A^{-1}$ のすべての要素が整数ならば、$A$ の行列式は $1$ か $-1$ のいずれかになることを証明せよ。

(3) $A^{\mathrm T}=-A$ を満たす実行列 $A$ を考える。この行列の固有値 $\lambda$ とそれに関する固有ベクトル $x$ に対して、$A^{\mathrm T}\overline{x}=\overline{\lambda}x$ の関係が知られている。この関係を用いて、行列 $A$ の固有値は純虚数になることを証明せよ。ただし、$A^{\mathrm T}$ は転置、$\overline{\lambda}$ は複素共役である。

### 問題2
$\mathbb R^3$ の部分空間 $V,W$ を

$$
V=\{(x,y,z)^{\mathrm T}\in\mathbb R^3\mid x+2y+z=0,\ x+y=0\},
\qquad W=\{(x,y,z)^{\mathrm T}\in\mathbb R^3\mid -x+y+2z=0\}
$$

とする。以下の設問には理由も示せ。

(1) $V$ の次元を求めよ。

(2) $V\cap W$ の次元を求めよ。

(3) $V+W$ の次元を求めよ。

(4) $W$ の直交補空間 $U$ の基底を求めよ。ただし、基底の第一要素は $1$ とする。

(5) $W\cup U$ が $\mathbb R^3$ の部分空間であるか否かを示せ。

#### 题目描述

**问题1**

(1) 求实参数矩阵 $A=\begin{pmatrix}1&x&x\\x&1&x\\x&x&1\end{pmatrix}$ 的秩。

(2) 设可逆矩阵 $A$ 的所有元素都是整数，且 $A^{-1}$ 的所有元素也都是整数。证明 $\det A=1$ 或 $-1$。

(3) 设实矩阵 $A$ 满足 $A^{\mathrm T}=-A$。设 $\lambda$ 是特征值、$x$ 是对应特征向量。利用题面给出的关系 $A^{\mathrm T}\overline{x}=\overline\lambda x$，证明 $A$ 的特征值是纯虚数；$A^{\mathrm T}$ 表示转置，横线表示复共轭。

**问题2**

设

$$
V=\{(x,y,z)^{\mathrm T}\in\mathbb R^3:x+2y+z=0,\ x+y=0\},\quad
W=\{(x,y,z)^{\mathrm T}\in\mathbb R^3:-x+y+2z=0\}.
$$

求 (1) $\dim V$、(2) $\dim(V\cap W)$、(3) $\dim(V+W)$、(4) $W$ 的正交补空间 $U$ 的一个基（该基向量第一分量取 $1$）；(5) 判断 $W\cup U$ 是否为 $\mathbb R^3$ 的子空间。各问均说明理由。

## **Kai**

### 問題1
#### (1)
$A=(1-x)I+x\boldsymbol1\boldsymbol1^{\mathrm T}$ の固有値は $1+2x,1-x,1-x$ である。従って

$$
\boxed{\operatorname{rank}A=\begin{cases}1,&x=1,\\2,&x=-\frac12,\\3,&x\ne1,-\frac12.\end{cases}}
$$

#### (2)
行列式の定義から $\det A,\det A^{-1}\in\mathbb Z$ であり、その積は $1$ である。従って $\boxed{\det A=\pm1}$。

#### (3)
$Ax=\lambda x$ を共役転置すると、$x^*A^{\mathrm T}=\overline\lambda x^*$ となる。$A^{\mathrm T}=-A$ より

$$
\lambda\|x\|^2=x^*Ax=-\overline\lambda\|x\|^2.
$$

$x\ne0$ だから $\lambda=-\overline\lambda$、すなわち $\boxed{\operatorname{Re}\lambda=0}$ である。

### 問題2
#### (1)–(3)
$V=\operatorname{span}\{(-1,1,-1)^{\mathrm T}\}$ なので $\dim V=1$。この基底ベクトルは $W$ に属するため $V\subset W$ であり、$W$ を定める独立な条件は一つである。従って

$$
\boxed{\dim V=1,\qquad\dim(V\cap W)=1,\qquad\dim(V+W)=2}.
$$

#### (4)
$W$ の法線ベクトルは $(-1,1,2)^{\mathrm T}$ である。第一要素を $1$ にすると、求める基底は $\boxed{\{(1,-1,-2)^{\mathrm T}\}}$。

#### (5)
$w=(1,1,0)^{\mathrm T}\in W$、$u=(1,-1,-2)^{\mathrm T}\in U$ とする。$w+u=(2,0,-2)^{\mathrm T}$ は $W$ にも $U$ にも属さない。加法で閉じないので、$\boxed{W\cup U\text{ は部分空間ではない}}$。

