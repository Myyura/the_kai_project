---
sidebar_label: "2024年度 数学 問4"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
---
# 九州大学 工学府 機械系専攻 2024年度 数学 問4

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$m$ 個の点 $(x_k,y_k)$ を二次多項式

$$
f(x)=a_0+a_1x+a_2x^2
$$

で最小二乗近似する。

$$
F=\sum_{k=1}^m\{y_k-f(x_k)\}^2,\qquad
\boldsymbol a=\begin{pmatrix}a_0\\a_1\\a_2\end{pmatrix},\qquad
\boldsymbol b=
\begin{pmatrix}
\sum y_k\\
\sum y_kx_k\\
\sum y_kx_k^2
\end{pmatrix}
$$

とする。$\partial F/\partial a_0=\partial F/\partial a_1=\partial F/\partial a_2=0$ を $M\boldsymbol a=\boldsymbol b$ と表すとき、$M$ を求めよ。

### (2)

点 $A(-1,1),B(0,3),C(1,6),D(2,0)$ について、次の問に答えよ。

1. (1) の行列は

   $$
   M=\begin{pmatrix}4&2&6\\2&6&8\\6&8&18\end{pmatrix}
   $$

   である。$M=LL^{\mathsf T}$ となる下三角行列 $L$ を求めよ。
2. 4 点を近似する二次多項式を求めよ。

## **Kai**

### (1)

$j=0,1,2$ に対して

$$
\frac{\partial F}{\partial a_j}
=-2\sum_{k=1}^m x_k^j
\left(y_k-\sum_{i=0}^2a_ix_k^i\right)=0.
$$

したがって

$$
\boxed{
M=
\begin{pmatrix}
m&\sum x_k&\sum x_k^2\\
\sum x_k&\sum x_k^2&\sum x_k^3\\
\sum x_k^2&\sum x_k^3&\sum x_k^4
\end{pmatrix}}.
$$

### (2)

#### (2-1)

対角成分を正に取ると

$$
\boxed{
L=\begin{pmatrix}
2&0&0\\
1&\sqrt5&0\\
3&\sqrt5&2
\end{pmatrix}}
$$

であり、実際に $LL^{\mathsf T}=M$ となる。

#### (2-2)

$$
\boldsymbol b=
\begin{pmatrix}10\\5\\7\end{pmatrix}.
$$

$L\boldsymbol z=\boldsymbol b$、$L^{\mathsf T}\boldsymbol a=\boldsymbol z$ の順に解くと

$$
\boldsymbol z=
\begin{pmatrix}5\\0\\-4\end{pmatrix},\qquad
\boldsymbol a=
\begin{pmatrix}9/2\\2\\-2\end{pmatrix}.
$$

よって

$$
\boxed{f(x)=\frac92+2x-2x^2}.
$$

## **Reference**
- [九州大学 機械系専攻 過去の入試問題](https://www.mech.kyushu-u.ac.jp/exam/exam02/exam02_past)
- [2024年度 数学 公式問題 PDF](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2024/03/2024-Math.pdf)
