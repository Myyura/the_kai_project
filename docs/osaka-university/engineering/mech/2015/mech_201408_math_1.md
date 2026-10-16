---
sidebar_label: "2014年8月実施 問題1（数学）"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 数学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$n$ を自然数とする。対角成分がすべて $0$、その他の成分がすべて $1$ である $n$ 次正方行列を $A_n$ とし、その行列式を $\det A_n$ と表す。以下の問いに答えなさい。

1. $A_3$ を書きなさい。
2. $\det A_3$ を求めなさい。
3. $\det A_4$ を求めなさい。
4. $\det A_n$ を $n$ を用いて表し、その式がすべての自然数 $n$ に対して成り立つことを証明しなさい。

#### 题目描述

令 $n$ 为自然数，$A_n$ 为对角元全为 $0$、其余元素全为 $1$ 的 $n$ 阶方阵。

1. 写出 $A_3$。
2. 求 $\det A_3$。
3. 求 $\det A_4$。
4. 用 $n$ 表示 $\det A_n$，并证明该公式对所有自然数 $n$ 成立。

## **Kai**

### (1)

$$
\boxed{A_3=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}}.
$$

### (2)

第1行で展開すれば

$$
\det A_3
=-\begin{vmatrix}1&1\\1&0\end{vmatrix}
+\begin{vmatrix}1&0\\1&1\end{vmatrix}
=\boxed{2}.
$$

### (3)

$A_4$ の第2、第3、第4行から第1行を引き、その後、第1列に第2、第3、第4列を加えると

$$
\det A_4
=\begin{vmatrix}0&1&1&1\\1&-1&0&0\\1&0&-1&0\\1&0&0&-1\end{vmatrix}
=\begin{vmatrix}3&1&1&1\\0&-1&0&0\\0&0&-1&0\\0&0&0&-1\end{vmatrix}
=\boxed{-3}.
$$

### (4)

すべての成分が $1$ の行列を $J_n$ とすると、$A_n=J_n-I_n$ である。$\boldsymbol e=(1,\ldots,1)^{\mathsf T}$ に対して

$$
A_n\boldsymbol e=(n-1)\boldsymbol e.
$$

一方、成分の和が $0$ となるベクトル $\boldsymbol v$ については $J_n\boldsymbol v=\boldsymbol0$ なので

$$
A_n\boldsymbol v=-\boldsymbol v.
$$

この部分空間の次元は $n-1$ であり、$\boldsymbol e$ の張る1次元部分空間と直和をなす。したがって固有値は $n-1$ が1個、$-1$ が $n-1$ 個であり、その積から

$$
\boxed{\det A_n=(-1)^{n-1}(n-1)}.
$$

$n=1$ の場合も $A_1=(0)$ であり、右辺も $0$ となるため成立する。
