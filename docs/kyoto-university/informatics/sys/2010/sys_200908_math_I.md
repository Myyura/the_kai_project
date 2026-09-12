---
sidebar_label: 2009年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Exponential
---

# 京都大学 情報学研究科 システム科学専攻 2009年8月実施 数学【I】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$n\times n$ 実行列 $A,B$ について、以下を証明せよ。上付きの $-1$ は逆行列を表す。

(i) $A+B$ が正則ならば $A(A+B)^{-1}B=B(A+B)^{-1}A$。

(ii) $A,B$ がともに正則ならば $A^{-1}+B^{-1}=A^{-1}(A+B)B^{-1}$。

(iii) $A,B,A+B$ がすべて正則ならば $(A^{-1}+B^{-1})^{-1}=A(A+B)^{-1}B$。

### 問2
$n\ge2$ とし、$n\times n$ 三重対角行列 $A_n$ の対角成分は $(n,n)$ 成分だけが $1$、残りが $2$、隣接する上下の成分は $-1$、その他の成分は $0$ とする。

(i) 次の逆行列を求めよ。

$$
A_2=\begin{pmatrix}2&-1\\-1&1\end{pmatrix},\qquad
A_3=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}.
$$

(ii) $A_n^{-1}$ を求め、実際に逆行列であることを示せ。

### 問3
$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ とする。

(i) $A=P\operatorname{diag}(\lambda_1,\lambda_2)P^{-1}$、$\lambda_1\ge\lambda_2$ を満たす実数 $\lambda_1,\lambda_2$ と行列 $P$ を求めよ。$P$ は一つ求めればよい。

(ii) 実数 $t$ について、(i) を用いて次を求めよ。ただし $I$ は単位行列である。

$$
\exp(tA)=\lim_{n\to\infty}\left(I+\frac{t}{n}A\right)^n.
$$

#### 题目描述

### 问1
设 $A,B$ 为 $n$ 阶实矩阵，证明：

(i) 若 $A+B$ 可逆，则 $A(A+B)^{-1}B=B(A+B)^{-1}A$。

(ii) 若 $A,B$ 都可逆，则 $A^{-1}+B^{-1}=A^{-1}(A+B)B^{-1}$。

(iii) 若 $A,B,A+B$ 都可逆，则 $(A^{-1}+B^{-1})^{-1}=A(A+B)^{-1}B$。

### 问2
$n\ge2$。三对角矩阵 $A_n$ 的主对角线除最后一项为 $1$ 外均为 $2$，紧邻主对角线两侧的元素均为 $-1$，其余为 $0$。

(i) 求 $A_2=\begin{pmatrix}2&-1\\-1&1\end{pmatrix}$ 和 $A_3=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}$ 的逆矩阵。

(ii) 求一般的 $A_n^{-1}$，并验证其确为逆矩阵。

### 问3
设 $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$。

(i) 求 $\lambda_1\ge\lambda_2$ 和一个可逆矩阵 $P$，使 $A=P\operatorname{diag}(\lambda_1,\lambda_2)P^{-1}$。

(ii) 对实数 $t$，利用 (i) 求 $\exp(tA)=\lim_{n\to\infty}(I+tA/n)^n$，其中 $I$ 为单位矩阵。

## **Kai**

### 問1
(i) $C=A+B$ とおくと、

$$
AC^{-1}B=(C-B)C^{-1}B=B-BC^{-1}B=BC^{-1}(C-B)=BC^{-1}A.
$$

(ii) 分配法則より $A^{-1}(A+B)B^{-1}=B^{-1}+A^{-1}$。

(iii) (ii) の右辺は正則行列の積であるから、(i) と併せて

$$
(A^{-1}+B^{-1})^{-1}=B(A+B)^{-1}A=A(A+B)^{-1}B.
$$

### 問2
(i)

$$
A_2^{-1}=\begin{pmatrix}1&1\\1&2\end{pmatrix},\qquad
A_3^{-1}=\begin{pmatrix}1&1&1\\1&2&2\\1&2&3\end{pmatrix}.
$$

(ii) 答えは $B=(b_{ij})$、$b_{ij}=\min(i,j)$ である。$b_{0j}=0$ とすれば、$i<n$ について

$$
(A_nB)_{ij}=2b_{ij}-b_{i-1,j}-b_{i+1,j}=\delta_{ij},
$$

最終行では $(A_nB)_{nj}=b_{nj}-b_{n-1,j}=\delta_{nj}$。よって $A_nB=I$ となり、$A_n^{-1}=B$。

### 問3
(i) 固有値は $1,-1$ であり、

$$
\lambda_1=1,\quad\lambda_2=-1,\quad
P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\quad P^{-1}=\frac12P.
$$

(ii) (i) の対角化を用いると

$$
\left(I+\frac tn A\right)^n
=P\begin{pmatrix}(1+t/n)^n&0\\0&(1-t/n)^n\end{pmatrix}P^{-1}
\longrightarrow P\begin{pmatrix}e^t&0\\0&e^{-t}\end{pmatrix}P^{-1}.
$$

したがって

$$
\boxed{\exp(tA)=\begin{pmatrix}\cosh t&\sinh t\\\sinh t&\cosh t\end{pmatrix}}.
$$

