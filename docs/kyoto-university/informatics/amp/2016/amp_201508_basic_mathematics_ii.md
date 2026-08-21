---
sidebar_label: "2015年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$A = (a_{ij})$ を $n \times n$ 実対称行列とし，任意の非零な $n$ 次元実ベクトル $\mathbf{x} (\neq \mathbf{0})$ とその転置 $\mathbf{x}^T$ によって定まる 2 次形式 $\mathbf{x}^T A \mathbf{x}$ は正であるとする。以下の問いに答えよ。

(i) 行列 $A$ の対角成分 $a_{ii} (i = 1, \dots, n)$ は全て正であることを示せ。

(ii) 行列 $A$ の固有値 $\lambda_i (i = 1, \dots, n)$ は全て正であることを示せ。

(iii) 行列 $A$ は正則であることを示せ。

(iv) $n \ge 3$ のとき行列 $A$ の第 $i_1, i_2, \dots, i_r$ 行，第 $i_1, i_2, \dots, i_r$ 列 $(1 \le i_1 < i_2 < \dots < i_r \le n)$ を取り出して作った $r \times r (1 < r < n)$ 行列 $A_r$ について考える。例えば， $r = 2$ のとき

$$
A_2 = \begin{pmatrix}
a_{i_1 i_1} & a_{i_1 i_2} \\
a_{i_2 i_1} & a_{i_2 i_2}
\end{pmatrix}
$$

である。任意の非零な $r$ 次元実ベクトル $\mathbf{x}_r$ によって定まる 2 次形式 $\mathbf{x}_r^T A_r \mathbf{x}_r$ は正であることを示せ。

(v) 任意の $n \times n (n \ge 2)$ 実行列 $B$ に対して $B^T B$ は実対称行列となる。 $B^T B = (b_{ij})$ とおき，対角成分 $b_{ii} (i = 1, \dots, n)$ は全て正であると仮定する。そのような $B$ に対して，任意の非零な $n$ 次元実ベクトル $\mathbf{x}$ について 2 次形式 $\mathbf{x}^T B^T B \mathbf{x}$ は正となるか，理由をつけて答えよ。

### 题目描述

设 $A=(a_{ij})$ 是 $n\times n$ 实对称矩阵，并假设对任意非零实向量 $\boldsymbol x\in\mathbb R^n$ 都有

$$
\boldsymbol x^TA\boldsymbol x>0,
$$

其中上标 $T$ 表示转置。完成以下各问：

1. 证明 $A$ 的全部对角元均为正，即

   $$
   a_{ii}>0\qquad(i=1,\ldots,n).
   $$

2. 证明 $A$ 的全部特征值 $\lambda_i\ (i=1,\ldots,n)$ 均为正。
3. 证明 $A$ 可逆。
4. 设 $n\geq3$，从 $A$ 中同时选取第 $i_1,i_2,\ldots,i_r$ 行和第 $i_1,i_2,\ldots,i_r$ 列，其中

   $$
   1\leq i_1<i_2<\cdots<i_r\leq n,\qquad 1<r<n,
   $$

   得到 $r\times r$ 主子矩阵 $A_r$。例如 $r=2$ 时

   $$
   A_2=
   \begin{pmatrix}
   a_{i_1i_1}&a_{i_1i_2}\\
   a_{i_2i_1}&a_{i_2i_2}
   \end{pmatrix}.
   $$

   证明对任意非零 $\boldsymbol x_r\in\mathbb R^r$，

   $$
   \boldsymbol x_r^TA_r\boldsymbol x_r>0.
   $$

5. 对任意 $n\times n$ 实矩阵 $B$（$n\geq2$），$B^TB$ 是实对称矩阵。记 $B^TB=(b_{ij})$，并假设其全部对角元 $b_{ii}$ 均为正。判断是否必然对每个非零 $\boldsymbol x\in\mathbb R^n$ 都有

   $$
   \boldsymbol x^TB^TB\boldsymbol x>0,
   $$

   并说明理由。

## **Kai**

### (i) 対角成分

$e_i$ を第 $i$ 標準基底ベクトルとする。 $e_i\neq0$ なので、仮定から

$$
a_{ii}=e_i^TAe_i>0.
$$

したがってすべての対角成分は正である。

### (ii) 固有値

$A$ は実対称行列なので、固有値は実数で、実固有ベクトルを選べる。 $Ax=\lambda x$ 、 $x\neq0$ とすると、

$$
0<x^TAx=\lambda x^Tx=\lambda\|x\|^2.
$$

$\|x\|^2>0$ だから $\lambda>0$ である。よって $A$ の固有値はすべて正である。

### (iii) 正則性

(ii) より $0$ は $A$ の固有値ではない。したがって

$$
\det A=\prod_{i=1}^n\lambda_i>0
$$

であり、 $A$ は正則である。

### (iv) 主部分行列

$x_r=(\xi_1,\ldots,\xi_r)^T\neq0$ とする。 $n$ 次元ベクトル $x$ の第 $i_k$ 成分を $\xi_k$ 、その他の成分を $0$ と定めると $x\neq0$ であり、

$$
x^TAx=x_r^TA_rx_r.
$$

左辺は仮定により正だから、

$$
x_r^TA_rx_r>0.
$$

したがって任意の主部分行列 $A_r$ も正定値である。

### (v) $B^TB$ の場合

結論は、必ずしも正にはならない。任意の $x$ に対して

$$
x^TB^TBx=\|Bx\|^2\geq0
$$

であるが、すべての $x\neq0$ で狭義に正となるためには $\ker B=\{0\}$ 、すなわち $B$ が正則でなければならない。

$B^TB=(b_{ij})$ の対角成分は

$$
b_{ii}=\|Be_i\|^2
$$

なので、 $b_{ii}>0$ は $B$ の各列が非零であることしか保証しない。例えば

$$
B=
\begin{pmatrix}
1&1\\
1&1
\end{pmatrix},
\qquad
B^TB=
\begin{pmatrix}
2&2\\
2&2
\end{pmatrix}
$$

では対角成分は正であるが、 $x=(1,-1)^T$ に対して

$$
x^TB^TBx=\|Bx\|^2=0.
$$
