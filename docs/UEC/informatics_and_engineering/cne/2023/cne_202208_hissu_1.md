---
sidebar_label: 2022年8月実施 必須問題 線形代数
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 必須問題 線形代数

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

実数 $a$ に対して

$$
A=\begin{pmatrix}
-1&1+a&-2\\
0&1&0\\
4&1-a&5
\end{pmatrix}
$$

とし、$E$ を 3 次単位行列とする。固有値と固有空間、$(E-A)^2$ が定める線形変換の核・像の次元を求め、$A$ が対角化可能となる条件およびその場合の $A^n$ を求めよ。

### 题目描述

给定含实参数 $a$ 的三阶矩阵，求其特征值与特征空间、由最小特征值定义的线性变换的核与像的维数，并判断可对角化条件及计算矩阵幂。

## **Kai**

### (1)

$$
\begin{aligned}
\det(\lambda E-A)
&=(\lambda-1)
\det\begin{pmatrix}\lambda+1&2\\-4&\lambda-5\end{pmatrix}\\
&=(\lambda-1)^2(\lambda-3).
\end{aligned}
$$

したがって固有値は

$$
\boxed{1\text{（重複度 2）},\qquad 3\text{（重複度 1）}}.
$$

### (2)

最大固有値は $\lambda_1=3$ である。$(A-3E)x=0$ より

$$
y=0,\qquad 2x+z=0.
$$

よって固有空間の基底は

$$
\boxed{\left\{\begin{pmatrix}1\\0\\-2\end{pmatrix}\right\}}.
$$

### (3)

最小固有値は $\lambda_2=1$ であり、直接計算すると

$$
(E-A)^2
=4\begin{pmatrix}
-1&-1&-1\\
0&0&0\\
2&2&2
\end{pmatrix}.
$$

この行列の階数は $1$ である。階数・退化次数定理より、

$$
\boxed{\dim\operatorname{Ker}f=2,\qquad
\dim\operatorname{Im}f=1}.
$$

### (4)

固有値 $1$ の固有空間について、$(A-E)x=0$ は

$$
-2x+(1+a)y-2z=0,\qquad
4x+(1-a)y+4z=0
$$

であり、両式から $(a+3)y=0$ を得る。$a\ne-3$ では固有空間は 1 次元、$a=-3$ では式が 1 本だけとなり 2 次元である。したがって、

$$
\boxed{A\text{ が対角化可能}\iff a=-3}.
$$

### (5)

$a=-3$ とし、$P=(A-E)/2$ とおくと $P^2=P$、$A=E+2P$ である。よって

$$
A^n=(E-P)+3^nP=E+(3^n-1)P.
$$

したがって、

$$
\boxed{
A^n=\begin{pmatrix}
2-3^n&1-3^n&1-3^n\\
0&1&0\\
2\cdot3^n-2&2\cdot3^n-2&2\cdot3^n-1
\end{pmatrix}}
$$

である。
