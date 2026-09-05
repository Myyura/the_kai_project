---
sidebar_label: "2017年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Affine-Transformation
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h30_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)

複素数を成分とする $n \times n$ 行列 $A = (a_{i,j})_{1\leq i,j \leq n}$ と $B = (b_{i,j})_{1\leq i,j \leq n}$ は、それぞれ、非対角成分が全て非零の三重対角行列と対角行列である。すなわち、行列成分 $a_{i,j}, b_{i,j} \in \mathbb{C}$ は

$a_{i,j} = 0 ( |i-j| > 1 ), \quad a_{i,j} \neq 0 ( |i-j| = 1 ), \quad b_{i,j} = 0 ( |i-j| \geq 1 )$

を満たす。ここで、同一の正則行列 $P$ を用いた相似変換 $A \mapsto P^{-1}AP, B \mapsto P^{-1}BP$ によって行列 $A$ と $B$ は、それぞれ、対角行列と非対角成分が全て非零の三重対角行列に変換されるものとする。行列 $A$ の固有値を $\lambda_i$ , 単位行列を $I$ , 零行列を $O$ で表す。このとき、以下の問いに答えよ。

(i) $c_0, c_1, ..., c_{n-1}$ を定数とする。

$$
\sum_{k=0}^{n-1} c_k A^k = O
$$

が成立するのは $c_0 = c_1 = ... = c_{n-1} = 0$ のときのみであることを示せ。

(ii) 行列 $A$ の固有値は全て相異なることを示せ。

(iii) $i, j \in \{1, 2, ..., n \}$ とし、行列 $E_i$ を

$$
E_i = \prod_{\substack{1 \leq k \leq n \\ k \neq i}} \frac{1}{\lambda_i - \lambda_k} (A - \lambda_k I)
$$

で定める。このとき、

$$
\sum_{k=1}^{n} E_k = I, \qquad E_i E_j = \delta_{i,j} E_i
$$

$$
E_i B E_j = O ( |i-j| > 1 ), \qquad E_i B E_j \neq O ( |i-j| = 1 )
$$

が成り立つことを示せ。ただし、 $\delta_{i,j} = \begin{cases} 1 & (i=j) \\ 0 & (i \neq j) \end{cases}$ とする。

### 题目描述

设

$$
A=(a_{ij})_{1\leq i,j\leq n},
\qquad
B=(b_{ij})_{1\leq i,j\leq n}
$$

是复数域上的 $n\times n$ 矩阵。矩阵 $A$ 是所有相邻非对角元均非零的三对角矩阵，而
$B$ 是对角矩阵，即

$$
a_{ij}=0\quad(|i-j|>1),
\qquad
a_{ij}\ne0\quad(|i-j|=1),
$$

$$
b_{ij}=0\quad(|i-j|\geq1).
$$

假设存在同一个可逆矩阵 $P$，使相似变换

$$
A\longmapsto P^{-1}AP,
\qquad
B\longmapsto P^{-1}BP
$$

分别把 $A$ 变成对角矩阵、把 $B$ 变成所有相邻非对角元均非零的三对角矩阵。记
$A$ 的特征值为 $\lambda_i$，单位矩阵为 $I$，零矩阵为 $O$。回答：

1. 对任意常数 $c_0,c_1,\ldots,c_{n-1}$，证明

$$
\sum_{k=0}^{n-1}c_kA^k=O
$$

成立当且仅当

$$
c_0=c_1=\cdots=c_{n-1}=0.
$$

2. 证明 $A$ 的所有特征值两两不同。
3. 对 $i,j\in\{1,2,\ldots,n\}$，定义

$$
E_i
=
\prod_{\substack{1\leq k\leq n\\k\ne i}}
\frac{1}{\lambda_i-\lambda_k}
(A-\lambda_kI).
$$

证明

$$
\sum_{k=1}^nE_k=I,
\qquad
E_iE_j=\delta_{ij}E_i,
$$

以及

$$
E_iBE_j=O\quad(|i-j|>1),
\qquad
E_iBE_j\ne O\quad(|i-j|=1),
$$

其中

$$
\delta_{ij}
=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
$$

## **Kai**

### (i) $I,A,\ldots,A^{n-1}$ の一次独立性

$e_1=(1,0,\ldots,0)^T$ とする。三重対角構造から、 $A^ke_1$ の第 $k+1$ 成分は

$$
\prod_{m=1}^k a_{m+1,m}\neq0
$$

であり、第 $k+2$ 成分以降はすべて $0$ である。途中の成分は $0$ になる場合もあるが、この第 $k+1$ 成分は必ず非零である。したがって

$$
e_1,Ae_1,\ldots,A^{n-1}e_1
$$

を列に並べた行列は非零の対角成分をもつ上三角行列となり、これらのベクトルは一次独立である。

もし $\sum_{k=0}^{n-1}c_kA^k=O$ なら、両辺を $e_1$ に作用させて

$$
\sum_{k=0}^{n-1}c_kA^ke_1=0
$$

を得る。上の一次独立性から $c_0=\cdots=c_{n-1}=0$ である。

### (ii) 固有値がすべて相異なること

任意の固有値 $\lambda$ に対して $A-\lambda I$ を考える。第 $1$ 行と第 $n$ 列を除いた $(n-1)\times(n-1)$ 小行列は、対角成分

$$
a_{2,1},a_{3,2},\ldots,a_{n,n-1}
$$

がすべて非零の三角行列である。よって

$$
\operatorname{rank}(A-\lambda I)\geq n-1
$$

であり、固有空間の次元は $1$ 以下である。

題設の相似変換により $A$ は対角化可能なので、各固有値の代数的重複度と幾何学的重複度は等しい。したがって各固有値の代数的重複度も $1$ であり、 $A$ は相異なる $n$ 個の固有値をもつ。

### (iii) スペクトル射影

固有値の番号は、題設の $P^{-1}AP$ の対角成分の順に取る。最後の隣接関係はこの順序についての主張であり、任意の並べ替えで保たれるものではない。

題設の正則行列 $P$ によって

$$
A'=P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

とし、 $B'=P^{-1}BP$ とおく。多項式

$$
q_i(t)=\prod_{k\neq i}\frac{t-\lambda_k}{\lambda_i-\lambda_k}
$$

は $q_i(\lambda_j)=\delta_{ij}$ を満たす。したがって

$$
E_i'=P^{-1}E_iP=q_i(A')
$$

は第 $(i,i)$ 成分だけが $1$ の対角行列である。よって

$$
\sum_{i=1}^nE_i'=I,
\qquad
E_i'E_j'=\delta_{ij}E_i'
$$

であり、元の基底に戻せば

$$
\sum_{i=1}^nE_i=I,
\qquad
E_iE_j=\delta_{ij}E_i
$$

を得る。

また、 $e_i$ を標準基底とすると、

$$
E_i'B'E_j'=b_{ij}'e_ie_j^T.
$$

$B'$ は非対角成分がすべて非零の三重対角行列だから、

$$
\begin{cases}
E_i'B'E_j'=O,&|i-j|>1,\\
E_i'B'E_j'\neq O,&|i-j|=1.
\end{cases}
$$

相似変換を戻すことにより、同じ結論が $E_iBE_j$ に対して成立する。
