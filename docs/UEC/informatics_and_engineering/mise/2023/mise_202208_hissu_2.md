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

次の問いに答えよ。

1. 行列
   $$
   M=\begin{pmatrix}
   3&-2&5&-7\\
   -1&-1&0&-1\\
   1&-1&2&-3
   \end{pmatrix}
   $$
   が定める線形写像 $F:\mathbb R^4\to\mathbb R^3$ について、$\dim\ker F$ と、各ベクトルを長さ $1$ に正規化した $\operatorname{Im}F$ の基底を求めよ。
2. 連立一次方程式
   $$
   \begin{cases}
   x_1-x_2+x_3=2,\\
   -x_1+2x_2+x_3=2,\\
   x_2+ax_3=1,\\
   -x_1+x_2=a
   \end{cases}
   $$
   が一意解をもつための実数 $a$ の条件と、その解を求めよ。
3. 相異なる固有値 $k_1,k_2$ に対する固有ベクトルが $(1,3)^{\mathsf T}$、$(3,b)^{\mathsf T}$ の定数倍で与えられるとき、対角化の条件、正則行列 $P$、および $A$ と対角行列 $B$ の関係を求めよ。

### 题目描述

求给定线性映射的核维数和像空间的一组单位化基；求含参数超定线性方程组具有唯一解的条件与解；最后根据两条特征向量求矩阵可对角化的条件及对角化关系。

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
