---
sidebar_label: 2018年8月実施 数学 I
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Cayley-Hamilton-Theorem
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Companion-Matrix-for-Linear-Recurrences
---

# 京都大学 情報学研究科 システム科学専攻 2018年8月実施 数学 I

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1

行列 $A$ を次のようにおく。

$$
A=\begin{pmatrix}9&-26&24\\1&0&0\\0&1&0\end{pmatrix}.
$$

(i) $A$ の固有値をすべて求めよ。

(ii) $B=(A-I)((A-2I)(A-3I)(A-4I)+I)$ とする。ここで $I$ は3次単位行列である。$B$ の固有値をすべて求めよ。

(iii) $B^3-6B^2+11B$ を求めよ。

### 問2

最初の2項が $x_0=2,x_1=1$ で、それ以降は直前の2項の和として各項が定まる数列をリュカ数列という。最初の10項は $2,1,3,4,7,11,18,29,47,76$ である。以下の設問に答えよ。

(i) 次式を満たす2次正方行列 $A$ を求めよ。

$$
A\begin{pmatrix}x_n\\x_{n+1}\end{pmatrix}=\begin{pmatrix}x_{n+1}\\x_{n+2}\end{pmatrix}.
$$

(ii) $A$ の固有値 $\lambda_1,\lambda_2$ を求めよ。

(iii) 対応する固有ベクトル $v_1,v_2$ を $\lambda_1,\lambda_2$ を用いて表せ。

(iv) $v_1,v_2$ が直交することを示せ。

(v) $x_n=\lambda_1^n+\lambda_2^n$ を示せ。

#### 题目描述

**问1** 设

$$
A=\begin{pmatrix}9&-26&24\\1&0&0\\0&1&0\end{pmatrix}.
$$

（i）求 $A$ 的全部特征值。（ii）设 $I$ 为3阶单位矩阵，$B=(A-I)((A-2I)(A-3I)(A-4I)+I)$，求 $B$ 的全部特征值。（iii）求 $B^3-6B^2+11B$。

**问2** Lucas 数列由 $x_0=2,x_1=1,x_{n+2}=x_{n+1}+x_n$ 定义，其最初10项为 $2,1,3,4,7,11,18,29,47,76$。

（i）求满足下式的2阶方阵 $A$：

$$
A\begin{pmatrix}x_n\\x_{n+1}\end{pmatrix}=\begin{pmatrix}x_{n+1}\\x_{n+2}\end{pmatrix}.
$$

（ii）求 $A$ 的特征值 $\lambda_1,\lambda_2$。（iii）用它们表示对应特征向量 $v_1,v_2$。（iv）证明这两个向量正交。（v）证明 $x_n=\lambda_1^n+\lambda_2^n$。


## **Kai**

### 問1

(i)

$$
\det(\lambda I-A)=\lambda^3-9\lambda^2+26\lambda-24
=(\lambda-2)(\lambda-3)(\lambda-4).
$$

よって固有値は $2,3,4$。

(ii) Cayley–Hamilton の定理から $(A-2I)(A-3I)(A-4I)=0$。したがって $B=A-I$ であり、固有値は $1,2,3$。

(iii) $(B-I)(B-2I)(B-3I)=0$ より

$$
\boxed{B^3-6B^2+11B=6I}.
$$

### 問2

(i) 漸化式から $A=\begin{pmatrix}0&1\\1&1\end{pmatrix}$。

(ii) 特性方程式は $\lambda^2-\lambda-1=0$ なので

$$
\lambda_1=\frac{1+\sqrt5}{2},\qquad \lambda_2=\frac{1-\sqrt5}{2}.
$$

(iii) $\lambda_j^2=\lambda_j+1$ より $v_j=(1,\lambda_j)^T$ ととれる。

(iv) $v_1^Tv_2=1+\lambda_1\lambda_2=1-1=0$。

(v) $\lambda_1+\lambda_2=1$ なので $(2,1)^T=v_1+v_2$。したがって

$$
\begin{pmatrix}x_n\\x_{n+1}\end{pmatrix}
=A^n(v_1+v_2)=\lambda_1^nv_1+\lambda_2^nv_2.
$$

第1成分を比較して $\boxed{x_n=\lambda_1^n+\lambda_2^n}$。

