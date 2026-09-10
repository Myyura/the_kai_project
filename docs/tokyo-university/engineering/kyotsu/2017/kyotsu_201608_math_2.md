---
sidebar_label: '2016年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Simultaneous-Diagonalization-of-Commuting-Operators
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix-Square-Root
  - Mathematics.Linear-Algebra.Determinant-Maximization-at-Fixed-Trace
---

# 東京大学 工学系研究科 2016年8月実施 数学 第2問

## **Author**
祭音Myyura

## **Description**

出典：[公式2017年度数学試験](https://www.t.u-tokyo.ac.jp/hubfs/pdf/H29_suugaku_J.pdf)、第2問。

次の3次正方行列$A$に関する以下の問いに答えよ。

$$
\begin{aligned}
A = \begin{pmatrix}
3 & 0 & 1 \\ 
-1 & 2 & -1 \\
-2 & -2 & 1 \\ 
\end{pmatrix}
\end{aligned}
$$

### (I)
行列$A$の固有値を全て求めよ。

### (II)
行列$A^{n}$を求めよ。ただし,　$n$は自然数とする。

### (III)
3次正方行列$B$は対角化可能で,　$AB = BA$の関係を満たすものとする。行列$A$の任意の固有ベクトル$p$は,　行列$B$の固有ベクトルでもあることを示せ。

### (IV)
$B^2 = A$の関係を満たす3次正方行列$B$を求めよ。ただし,　行列$B$はその固有値が全て正となる対角化可能な行列とする。

### (V)
3次正方行列$X$は対角化可能で,　$AX = XA$の関係を満たすものとする。$\text{tr}(AX) = d$のとき,　$\text{det}(AX)$の最大値を$d$の関数として求めよ。ただし,　$d$は正の実数とし,　行列$X$の固有値全て正とする。また,　$\text{tr}(M)$は正方行列$M$のトレース　(主対角成分の和)　であり,　$\text{det}(M)$は行列$M$の行列式である。

#### 题目描述

给定三阶方阵

$$
A=\begin{pmatrix}
3&0&1\\
-1&2&-1\\
-2&-2&1
\end{pmatrix},
$$

回答以下问题：

1. 求 $A$ 的全部特征值。
2. 对自然数 $n$，求 $A^n$ 的显式表达式。
3. 设三阶方阵 $B$ 可对角化且满足 $AB=BA$，证明 $A$ 的任意特征向量也是 $B$ 的特征向量。
4. 求满足 $B^2=A$ 的三阶方阵 $B$，其中 $B$ 可对角化且全部特征值为正。
5. 设三阶方阵 $X$ 可对角化、满足 $AX=XA$，且全部特征值为正。已知 $\operatorname{tr}(AX)=d$，其中 $d>0$，求 $\det(AX)$ 关于 $d$ 的最大值。

## **Kai**

### I

$$
\det(\lambda I-A)=(\lambda-1)(\lambda-2)(\lambda-3),
$$

したがって固有値は $\boxed{1,2,3}$。

### II

各固有値に対応する固有ベクトルを列に並べると、

$$
P=\begin{pmatrix}1&2&1\\-1&-1&-1\\-2&-2&0\end{pmatrix},\qquad
P^{-1}=\frac12\begin{pmatrix}-2&-2&-1\\2&2&0\\0&-2&1\end{pmatrix},
$$

$$
A=P\operatorname{diag}(1,2,3)P^{-1}.
$$

ゆえに

$$
\boxed{A^n=\begin{pmatrix}
-1+2^{n+1}&-1+2^{n+1}-3^n&(3^n-1)/2\\
1-2^n&1-2^n+3^n&(1-3^n)/2\\
2-2^{n+1}&2-2^{n+1}&1
\end{pmatrix}.}
$$

### III

$Ap=\lambda p$ と $AB=BA$ より

$$
A(Bp)=B(Ap)=\lambda Bp.
$$

$A$ の固有値は相異なるので、その各固有空間は1次元である。したがって $Bp=cp$ と書ける（$Bp=0$ なら $c=0$）。よって $p$ は $B$ の固有ベクトルでもある。

### IV

$B^2=A$ なら $AB=B^3=BA$。III より $B$ も II の $P$ で対角化でき、その固有値は正なので $1,\sqrt2,\sqrt3$ である。よって

$$
\boxed{B=P\operatorname{diag}(1,\sqrt2,\sqrt3)P^{-1}}
$$

$$
=\begin{pmatrix}
-1+2\sqrt2&-1+2\sqrt2-\sqrt3&(\sqrt3-1)/2\\
1-\sqrt2&1-\sqrt2+\sqrt3&(1-\sqrt3)/2\\
2-2\sqrt2&2-2\sqrt2&1
\end{pmatrix}.
$$

### V

III より $P^{-1}XP=\operatorname{diag}(x_1,x_2,x_3)$（$x_i>0$）。したがって

$$
\operatorname{tr}(AX)=x_1+2x_2+3x_3=d,\qquad
\det(AX)=x_1(2x_2)(3x_3).
$$

相加相乗平均の不等式により

$$
\det(AX)\le\left(\frac{x_1+2x_2+3x_3}{3}\right)^3=\frac{d^3}{27}.
$$

$x_1=d/3,x_2=d/6,x_3=d/9$、すなわち $X=(d/3)A^{-1}$ で等号が成立するので、

$$
\boxed{\max\det(AX)=\frac{d^3}{27}.}
$$

