---
sidebar_label: '2023年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Spectral-Decomposition-of-Hermitian-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Matrix-Power
---

# 東京大学 工学系研究科 2023年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実対称行列

$$
A=\begin{pmatrix}0&1&2\\1&0&2\\2&2&3\end{pmatrix}
$$

について、以下の問いに答えよ。

I. 異なるすべての固有値 $\lambda_1<\cdots<\lambda_r$ を求めよ。

II. 各固有空間 $W(\lambda_i)$ を求めよ。

III. 正規直交基底 $\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3$ を求めよ。ただし各ベクトルは II のいずれかの固有空間に属するものとする。

IV. スペクトル分解 $A=\sum_{i=1}^r\lambda_iP_i$ を求めよ。ただし $P_i$ は $W(\lambda_i)$ への射影行列とする。

V. 正整数 $n$ に対し $A^n$ を求めよ。

#### 题目描述

给定实对称矩阵

$$
A=\begin{pmatrix}0&1&2\\1&0&2\\2&2&3\end{pmatrix}.
$$

I. 求全部不同的特征值 $\lambda_1<\cdots<\lambda_r$。

II. 求各特征空间 $W(\lambda_i)$。

III. 求一组标准正交基 $\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3$，各向量均属于 II 中某个特征空间。

IV. 求谱分解 $A=\sum_{i=1}^r\lambda_iP_i$，其中 $P_i$ 为向 $W(\lambda_i)$ 的投影矩阵。

V. 对正整数 $n$，求 $A^n$。

## **Kai**

### I、II

$$
\det(\lambda I-A)=(\lambda+1)^2(\lambda-5),
$$

よって

$$
\boxed{\lambda_1=-1,\qquad\lambda_2=5}.
$$

同次方程式を解くと、

$$
\boxed{W(-1)=\{(x,y,z)^T:x+y+2z=0\},\qquad W(5)=\operatorname{span}\{(1,1,2)^T\}}.
$$

### III

例えば次のように取れる。

$$
\boxed{\boldsymbol b_1=\frac1{\sqrt2}(1,-1,0)^T,\quad
\boldsymbol b_2=\frac1{\sqrt3}(1,1,-1)^T,\quad
\boldsymbol b_3=\frac1{\sqrt6}(1,1,2)^T}.
$$

最初の二つは $W(-1)$、最後は $W(5)$ に属し、互いに直交してノルムはすべて $1$ である。

### IV、V

$$
P_2=\boldsymbol b_3\boldsymbol b_3^T=\frac16\begin{pmatrix}1&1&2\\1&1&2\\2&2&4\end{pmatrix},\qquad
P_1=I-P_2=\frac16\begin{pmatrix}5&-1&-2\\-1&5&-2\\-2&-2&2\end{pmatrix}.
$$

よって

$$
\boxed{A=-P_1+5P_2}.
$$

$P_i^2=P_i$、$P_1P_2=P_2P_1=0$ より、

$$
\boxed{A^n=\frac{(-1)^n}{6}\begin{pmatrix}5&-1&-2\\-1&5&-2\\-2&-2&2\end{pmatrix}
+\frac{5^n}{6}\begin{pmatrix}1&1&2\\1&1&2\\2&2&4\end{pmatrix}}.
$$

