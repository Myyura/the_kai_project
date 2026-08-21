---
sidebar_label: "2019年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問いに答えよ。

(i) $4 \times 4$ 行列

$$
A = \begin{pmatrix}
-1 & 1 & 2 & 1 \\
4 & 1 & 3 & -1 \\
-7 & 2 & 3 & 4 \\
11 & -1 & 0 & -5
\end{pmatrix}
$$

のランク (階数) $r$ を求め, $\text{rank } B = r$ なる適当な $4 \times r$ 行列 $B$ , $\text{rank } C = r$ なる $r \times 4$ 行列 $C$ への分解 $A = BC$ を計算せよ。

(ii) $n$ 本の $m$ 次元列ベクトル $\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_n$ からなる $m \times n$ 行列

$$
A = \begin{pmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_n \end{pmatrix}
$$

のランク $r$ は $r < \min\{m, n\}$ であるものとする。このとき, 行列 $A$ は, $\text{rank } B = r$ なる適当な $m \times r$ 行列 $B$ , $\text{rank } C = r$ なる $r \times n$ 行列 $C$ を用いて

$$
A = BC
$$

と分解されることを示せ。

### 题目描述

回答下列问题。

1. 对矩阵

$$
A=
\begin{pmatrix}
-1&1&2&1\\
4&1&3&-1\\
-7&2&3&4\\
11&-1&0&-5
\end{pmatrix},
$$

求其秩 $r$，并具体求出一个 $4\times r$ 矩阵 $B$ 和一个
$r\times4$ 矩阵 $C$，使

$$
A=BC,
\qquad
\operatorname{rank}B
=\operatorname{rank}C=r.
$$

2. 设 $m\times n$ 矩阵

$$
A=
\begin{pmatrix}
\boldsymbol{a}_1&
\boldsymbol{a}_2&
\cdots&
\boldsymbol{a}_n
\end{pmatrix}
$$

由 $n$ 个 $m$ 维列向量组成，并且

$$
\operatorname{rank}A=r<\min\{m,n\}.
$$

证明存在适当的 $m\times r$ 矩阵 $B$ 与
$r\times n$ 矩阵 $C$，满足

$$
A=BC,
\qquad
\operatorname{rank}B
=\operatorname{rank}C=r.
$$

## **Kai**

### (i) 与えられた行列の階数分解

行基本変形により、

$$
A\longrightarrow
\begin{pmatrix}
1&0&\frac15&-\frac25\\
0&1&\frac{11}5&\frac35\\
0&0&0&0\\
0&0&0&0
\end{pmatrix}.
$$

したがって $\operatorname{rank}A=2$ であり、主列は第 $1,2$ 列である。そこで

$$
B=
\begin{pmatrix}
-1&1\\
4&1\\
-7&2\\
11&-1
\end{pmatrix},
\qquad
C=
\begin{pmatrix}
1&0&\frac15&-\frac25\\
0&1&\frac{11}5&\frac35
\end{pmatrix}
$$

とおく。直接乗法すると、

$$
BC=
\begin{pmatrix}
-1&1&2&1\\
4&1&3&-1\\
-7&2&3&4\\
11&-1&0&-5
\end{pmatrix}
=A.
$$

$B$ の二列は一次独立であり、 $C$ は $I_2$ を列として含むので、

$$
\operatorname{rank}B=\operatorname{rank}C=2.
$$

### (ii) 一般の階数分解

$\operatorname{rank}A=r$ とする。 $A$ の列から一次独立な $r$ 本

$$
\boldsymbol a_{i_1},\ldots,\boldsymbol a_{i_r}
$$

を選び、

$$
B=(\boldsymbol a_{i_1}\ \cdots\ \boldsymbol a_{i_r})
$$

とおく。これらは列空間の基底なので $\operatorname{rank}B=r$ である。

各列 $\boldsymbol a_j$ は一意に

$$
\boldsymbol a_j
=\sum_{k=1}^rc_{kj}\boldsymbol a_{i_k}
$$

と書ける。係数を $C=(c_{kj})\in\mathbb R^{r\times n}$ に並べれば、列ごとに比較して $A=BC$ である。さらに、選んだ列 $\boldsymbol a_{i_k}$ に対応する $C$ の列は標準基底であるため、 $C$ は $I_r$ を列として含む。したがって

$$
\operatorname{rank}C=r
$$

であり、求める階数分解が得られる。
