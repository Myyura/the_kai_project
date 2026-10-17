---
sidebar_label: 2022年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2022年8月実施 必須問題（数学）問2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の設問に答えよ。

**（1）** $\mathbb R^n$ を $n$ 次元の実数空間とし、線形写像 $F:\mathbb R^4\to\mathbb R^3$ が次式で定義されている。

$$
F:\begin{bmatrix}x\\y\\z\\w\end{bmatrix}\mapsto
\begin{bmatrix}3&-2&5&-7\\-1&-1&0&-1\\1&-1&2&-3\end{bmatrix}
\begin{bmatrix}x\\y\\z\\w\end{bmatrix}
$$

線形写像 $F$ の核 $\operatorname{Ker}F$ の次元の数を答えよ。さらに、線形写像 $F$ の像 $\operatorname{Im}F$ の基底を 1 組求めよ。なお、基底はそれぞれ大きさを 1 に正規化したものとすること。

**（2）** 次の $x_1,x_2,x_3$ に関する連立 1 次方程式が一意解をもつとき、定数 $a$ が満たすべき条件と、そのときの解 $x_1,x_2,x_3$ を求めよ。

$$
\begin{cases}
x_1-x_2+x_3=2,\\
-x_1+2x_2+x_3=2,\\
x_2+ax_3=1,\\
-x_1+x_2=a.
\end{cases}
$$

**（3）** 定数 $a_{11},a_{12},a_{21},a_{22}$ によって次式のように行列 $A$ が定義されている。

$$
A=\begin{bmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{bmatrix}
$$

行列 $A$ の固有値は $k_1,k_2$ であり、$k_1\ne k_2$ とし、それぞれの固有値に対応する固有ベクトル $v_1,v_2$ は任意定数 $t$ を用いて次式で与えられるとする。

$$
v_1=\begin{bmatrix}1\\3\end{bmatrix}t,
\qquad v_2=\begin{bmatrix}3\\b\end{bmatrix}t
$$

このとき、行列 $A$ が対角化可能であるための条件式を求めよ。また、行列 $A$ を対角化することで得られる行列を $B$ とし、行列 $B$ の対角要素が $k_1,k_2$ となる場合について、対角化に用いる正則行列 $P$ を求め、行列 $A$ と行列 $B$ の関係を $P$ を用いて表現せよ。

キーワード：次元 dimension、実数空間 real space、線形写像 linear mapping、定義 definition、核 kernel、像 image、基底 basis、正規化 normalization、連立 1 次方程式 simultaneous linear equations、一意解 unique solution、定数 constant、条件 condition、解 solution、行列 matrix、固有値 eigenvalue、固有ベクトル eigenvector、任意定数 arbitrary constant、対角化可能 diagonalizable、対角化 diagonalization、対角要素 diagonal element、正則行列 regular matrix。

#### 题目描述

回答下列问题。

**（1）** 设 $\mathbb R^n$ 为 $n$ 维实空间，线性映射 $F:\mathbb R^4\to\mathbb R^3$ 定义为

$$
F:\begin{bmatrix}x\\y\\z\\w\end{bmatrix}\mapsto
\begin{bmatrix}3&-2&5&-7\\-1&-1&0&-1\\1&-1&2&-3\end{bmatrix}
\begin{bmatrix}x\\y\\z\\w\end{bmatrix}.
$$

回答 $F$ 的核 $\operatorname{Ker}F$ 的维数，并求像 $\operatorname{Im}F$ 的一组基。每个基向量都须归一化为长度 1。

**（2）** 若下列关于 $x_1,x_2,x_3$ 的线性方程组有唯一解，求常数 $a$ 应满足的条件，以及此时的解 $x_1,x_2,x_3$。

$$
\begin{cases}
x_1-x_2+x_3=2,\\
-x_1+2x_2+x_3=2,\\
x_2+ax_3=1,\\
-x_1+x_2=a.
\end{cases}
$$

**（3）** 由常数 $a_{11},a_{12},a_{21},a_{22}$ 定义矩阵

$$
A=\begin{bmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{bmatrix}.
$$

设 $A$ 的特征值为 $k_1,k_2$，且 $k_1\ne k_2$，对应的特征向量用任意常数 $t$ 表示为

$$
v_1=\begin{bmatrix}1\\3\end{bmatrix}t,
\qquad v_2=\begin{bmatrix}3\\b\end{bmatrix}t.
$$

求矩阵 $A$ 可对角化的条件式。再设 $A$ 对角化后得到的矩阵为 $B$，其对角元素依次为 $k_1,k_2$，求对角化所用的可逆矩阵 $P$，并用 $P$ 表示 $A$ 与 $B$ 的关系。

## **Kai**

### (1)

$M$ の第 $j$ 列を $m_j$ とすると、

$$
m_3=m_1-m_2,\qquad m_4=m_2-m_3.
$$

$m_1,m_2$ は一次独立なので $\operatorname{rank}M=2$ である。階数・退化次数定理より

$$
\boxed{\dim\ker F=4-2=2}.
$$

また、$\lVert m_1\rVert=\sqrt{11}$, $\lVert m_2\rVert=\sqrt6$ であるから、

$$
\boxed{
\left\{
\frac1{\sqrt{11}}\begin{pmatrix}3\\-1\\1\end{pmatrix},
\frac1{\sqrt6}\begin{pmatrix}-2\\-1\\-1\end{pmatrix}
\right\}
}
$$

は $\operatorname{Im}F$ の正規化された基底である。

### (2)

第 $4$ 式と第 $3$ 式より

$$
x_1=x_2-a,\qquad x_2=1-ax_3.
$$

これを第 $1$ 式に代入すると $x_3=a+2$ となる。さらに第 $2$ 式へ代入すると

$$
3-a^2=2.
$$

したがって、一意解をもつための条件は

$$
\boxed{a=\pm1}.
$$

それぞれの解は

$$
\boxed{
\begin{array}{c|ccc}
a&x_1&x_2&x_3\\ \hline
1&-3&-2&3\\
-1&3&2&1
\end{array}
}.
$$

### (3)

二本の固有ベクトルを列にもつ行列を

$$
P=\begin{pmatrix}1&3\\3&b\end{pmatrix}
$$

とおくと、

$$
\det P=b-9.
$$

したがって対角化の条件は

$$
\boxed{b\ne9}.
$$

このとき

$$
B=\begin{pmatrix}k_1&0\\0&k_2\end{pmatrix}
$$

とおけば $AP=PB$ であり、

$$
\boxed{P^{-1}AP=B},
\qquad
\boxed{A=PBP^{-1}}.
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202208.pdf)
