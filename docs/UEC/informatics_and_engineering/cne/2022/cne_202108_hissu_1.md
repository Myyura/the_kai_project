---
sidebar_label: 2021年8月実施 必須問題 線形代数
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Kernel-and-Image
---

# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2021年8月実施 必須問題 線形代数

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\begin{pmatrix}
1&2&0\\
2&-1&2\\
0&2&1
\end{pmatrix}
$$

とし、$E$ を単位行列、$O$ を零行列とする。

1. $A$ の固有値をすべて求め、最大固有値の固有ベクトルを求めよ。
2. $aA^2+bA+cE=O$ ならば $a=b=c=0$ であることを示せ。
3. $A^3+sA^2+tA+uE=O$ を満たす $s,t,u$ を求めよ。
4. $A^5-4A^4+3A^3$ を求めよ。
5. $f(\boldsymbol x)=(A^5-4A^4+3A^3)\boldsymbol x$ と定める。$\dim\operatorname{Im}f$ と $\operatorname{Im}f$ の基底を求めよ。

### 题目描述

给定一个三阶实对称矩阵，求其特征值和特征向量，证明 $E,A,A^2$ 线性无关，利用特征多项式求矩阵多项式，并确定相应线性映射的像空间。

## **Kai**

### (1)

$$
\begin{aligned}
\det(\lambda E-A)
&=\lambda^3-\lambda^2-9\lambda+9\\
&=(\lambda+3)(\lambda-1)(\lambda-3).
\end{aligned}
$$

したがって固有値は

$$
\boxed{-3, 1, 3}.
$$

最大固有値 $3$ に対して、例えば

$$
\boxed{\begin{pmatrix}1\\1\\1\end{pmatrix}}
$$

が固有ベクトルである。

### (2)

固有値 $\lambda=-3,1,3$ に対応する固有ベクトルへ

$$
aA^2+bA+cE=O
$$

を作用させると、二次式 $a\lambda^2+b\lambda+c$ は相異なる 3 点 $-3,1,3$ で零となる。よってこの二次式は恒等的に零であり、

$$
\boxed{a=b=c=0}.
$$

### (3)

Cayley-Hamilton の定理より

$$
A^3-A^2-9A+9E=O.
$$

ゆえに

$$
\boxed{s=-1,\qquad t=-9,\qquad u=9}.
$$

### (4)

直接計算すると

$$
\boxed{
A^5-4A^4+3A^3=
\begin{pmatrix}
-108&216&-108\\
216&-432&216\\
-108&216&-108
\end{pmatrix}}.
$$

### (5)

(4) の行列の各列は $\begin{pmatrix}1&-2&1\end{pmatrix}^{\mathsf T}$ の定数倍であり、零行列ではない。したがって

$$
\boxed{\dim\operatorname{Im}f=1},
$$

基底の一つは

$$
\boxed{\left\{\begin{pmatrix}1\\-2\\1\end{pmatrix}\right\}}.
$$
