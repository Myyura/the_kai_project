---
sidebar_label: '2014年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
---

# 東京大学 工学系研究科 2014年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$n$ 個の実変数を成分とする列ベクトル $\boldsymbol x$ の2次形式を $f=\boldsymbol x^TA\boldsymbol x$ と表す。ただし $A$ は実対称行列である。

I. 次の2次形式

$$
f=6x_1^2+6x_2^2+5x_3^2-4x_2x_3+4x_3x_1-2x_1x_2
$$

を表す3次対称行列 $A$ を求めよ。

II. $A\boldsymbol u_i=\lambda_i\boldsymbol u_i$ とする。$\lambda_j\ne\lambda_k$ のとき $\boldsymbol u_j\perp\boldsymbol u_k$ を示せ。

III. $\boldsymbol u_i$ は正規直交基底をなし、$U=(\boldsymbol u_1\ \cdots\ \boldsymbol u_n)$ とする。$\|\boldsymbol x\|=\|U\boldsymbol x\|$ を示せ。

IV. $\boldsymbol y=U^T\boldsymbol x$ とおく。$f$ を $y_i,\lambda_i$ で表せ。計算過程も示せ。

V. $\|\boldsymbol x\|=1$ の条件の下で、I の2次形式の最大値と、それを与えるすべての $\boldsymbol x$ を求めよ。

#### 题目描述

对 $n$ 个实变量组成的列向量 $\boldsymbol x$，二次型写成 $f=\boldsymbol x^TA\boldsymbol x$，其中 $A$ 为实对称矩阵。

I. 求二次型

$$
f=6x_1^2+6x_2^2+5x_3^2-4x_2x_3+4x_3x_1-2x_1x_2
$$

对应的三阶对称矩阵 $A$。

II. 设 $A\boldsymbol u_i=\lambda_i\boldsymbol u_i$，证明 $\lambda_j\ne\lambda_k$ 时 $\boldsymbol u_j\perp\boldsymbol u_k$。

III. 设 $\boldsymbol u_i$ 构成标准正交基，$U=(\boldsymbol u_1\ \cdots\ \boldsymbol u_n)$。证明 $\|\boldsymbol x\|=\|U\boldsymbol x\|$。

IV. 令 $\boldsymbol y=U^T\boldsymbol x$，用 $y_i,\lambda_i$ 表示 $f$，写出计算过程。

V. 在 $\|\boldsymbol x\|=1$ 下，求 I 中二次型的最大值及取等号时的全部 $\boldsymbol x$。

## **Kai**

### I

交差項の係数は対応する行列成分の2倍なので、

$$
\boxed{A=\begin{pmatrix}6&-1&2\\-1&6&-2\\2&-2&5\end{pmatrix}.}
$$

### II

$A^T=A$ より、

$$
\lambda_j\boldsymbol u_j^T\boldsymbol u_k
=(A\boldsymbol u_j)^T\boldsymbol u_k
=\boldsymbol u_j^TA\boldsymbol u_k
=\lambda_k\boldsymbol u_j^T\boldsymbol u_k.
$$

よって $(\lambda_j-\lambda_k)\boldsymbol u_j^T\boldsymbol u_k=0$ となり、直交性が従う。

### III

$U^TU=I$ より、

$$
\|U\boldsymbol x\|^2=\boldsymbol x^TU^TU\boldsymbol x
=\boldsymbol x^T\boldsymbol x=\|\boldsymbol x\|^2.
$$

### IV

$\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ とおくと $A=U\Lambda U^T$ である。したがって

$$
\boxed{f=\boldsymbol x^TU\Lambda U^T\boldsymbol x
=\boldsymbol y^T\Lambda\boldsymbol y=\sum_{i=1}^n\lambda_i y_i^2.}
$$

### V

$$
\det(\lambda I-A)=(\lambda-3)(\lambda-5)(\lambda-9).
$$

IV と $\sum y_i^2=1$ より $f\le9$。最大固有値 $9$ の固有空間は $\operatorname{span}\{(1,-1,1)^T\}$ なので、

$$
\boxed{f_{\max}=9,\qquad \boldsymbol x=\pm\frac1{\sqrt3}(1,-1,1)^T.}
$$

