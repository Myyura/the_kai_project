---
sidebar_label: "2016年8月実施 数学コース 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Matrix-Trace
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Linear-Operator-on-Polynomial-Space
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2016年8月実施 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

次を示せ。

#### (i)

$A$ を $(m,n)$ 行列、$B$ を $(n,m)$ 行列とすると、$\operatorname{Tr}AB=\operatorname{Tr}BA$ が成り立つ。

#### (ii)

$A$ を $n$ 次実対称行列とする。$A$ の $(i,j)$ 成分を $a_{ij}$（$i,j=1,\ldots,n$）で表し、$A$ の固有値を $\alpha_i$（$i=1,\ldots,n$）で表すと、

$$
\sum_{i=1}^n\sum_{j=1}^n a_{ij}^2=\sum_{i=1}^n\alpha_i^2
$$

が成り立つ。

### (2)

$x$ について $2$ 次以下の実数係数多項式全体のなす線形空間を $V$ とする。写像 $T:V\to V$ を

$$
T(f(x))=2xf'(x)+f(1-x)
$$

によって定める。以下の問いに答えよ。

#### (i)

$T$ が $V$ の線形変換であることを示し、$V$ の基底 $1,x,x^2$ に関する $T$ の表現行列を求めよ。

#### (ii)

$T$ の固有多項式と固有値を求めよ。

#### (iii)

(i) で求めた行列の Jordan 標準形を求めよ。

#### (iv)

(iii) で求めた Jordan 標準形が $T$ の表現行列となるときの $V$ の基底を一組求めよ。

### 题目描述

1. 证明矩形矩阵的迹恒等式 $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$；并证明实对称矩阵所有元素的平方和等于所有特征值的平方和。
2. 在次数不超过 $2$ 的实系数多项式空间上定义

   $$
   T(f)(x)=2xf'(x)+f(1-x).
   $$

   证明 $T$ 线性，求其在基底 $1,x,x^2$ 下的矩阵、特征多项式与特征值、Jordan 标准形，以及使该 Jordan 标准形成为表示矩阵的一组基底。

## **Kai**

### (1)

#### (i)

$A=(a_{ij})$、$B=(b_{ji})$ とすれば

$$
\operatorname{Tr}(AB)
=\sum_{i=1}^m\sum_{j=1}^n a_{ij}b_{ji}
=\sum_{j=1}^n\sum_{i=1}^m b_{ji}a_{ij}
=\operatorname{Tr}(BA).
$$

#### (ii)

$A$ は実対称行列なので $A^T=A$ であり、ある直交行列 $Q$ により

$$
Q^TAQ=\operatorname{diag}(\alpha_1,\ldots,\alpha_n)
$$

と対角化できる。したがって

$$
\sum_{i,j=1}^n a_{ij}^2
=\operatorname{Tr}(A^TA)
=\operatorname{Tr}(A^2)
=\sum_{i=1}^n\alpha_i^2.
$$

### (2)

#### (i)

微分、変数置換および加法はいずれも線形であるから、$T$ は線形変換である。また

$$
T(1)=1,\qquad T(x)=1+x,\qquad T(x^2)=1-2x+5x^2.
$$

よって基底 $(1,x,x^2)$ に関する表現行列は

$$
M=\boxed{
\begin{pmatrix}
1&1&1\\
0&1&-2\\
0&0&5
\end{pmatrix}}.
$$

#### (ii)

$$
\chi_T(\lambda)=\det(\lambda I-M)=(\lambda-1)^2(\lambda-5).
$$

$\lambda=1$ の固有空間は $\langle1\rangle$、$\lambda=5$ の固有空間は $\langle8x^2-4x+1\rangle$ である。固有値と、それに対応する固有ベクトルとなる多項式の例は

$$
\boxed{
\lambda=1:\ 1,\qquad
\lambda=5: 8x^2-4x+1
}
$$

であり、それぞれの非零定数倍も固有ベクトルである。

#### (iii)

$\lambda=1$ の代数的重複度は $2$、幾何学的重複度は $1$ である。よって Jordan 標準形は

$$
\boxed{
J=\begin{pmatrix}
1&1&0\\
0&1&0\\
0&0&5
\end{pmatrix}}.
$$

#### (iv)

$$
T(1)=1,\qquad T(x)=1+x,\qquad
T(8x^2-4x+1)=5(8x^2-4x+1).
$$

したがって、求める基底の一例は

$$
\boxed{(1,\ x,\ 8x^2-4x+1)}.
$$
