---
sidebar_label: 2021年8月実施 選択問題 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Cayley-Hamilton-Theorem
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 電気通信大学 情報理工学研究科 基盤理工学専攻 2021年8月実施 選択問題 基礎数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

行列

$$
A=\begin{pmatrix}1&2&0\\2&-1&2\\0&2&1\end{pmatrix}
$$

について固有値・固有ベクトル、$E,A,A^2$ の一次独立性、Cayley--Hamilton の関係式および
$A^{15}-4A^{14}+3A^{13}$ を求めよ。さらに、二変数関数

$$
f(x,y)=3x^2-12xy+y^3+6y^2-15y-3
$$

の極値と、次の重積分を求めよ。

$$
\iint_{D_1}\frac{dx\,dy}{5-\sqrt{x^2+y^2}},
\qquad D_1=\{(x,y)\mid1\le x^2+y^2\le16\},
$$

$$
\iint_{D_2}(x^2-y^2)^2\,dx\,dy,
\qquad D_2=\{(x,y)\mid2\le x+y\le3,\ -1\le x-y\le1\}.
$$

### 题目描述

研究一个三阶实对称矩阵的谱、Cayley–Hamilton 关系和高次幂；再求二元函数的极值以及极坐标、线性换元下的二重积分。

## **Kai**

### (1)

#### (a)

固有値と対応する固有ベクトルは

$$
\begin{array}{c|c}
\lambda&\text{固有ベクトル}\\ \hline
3&(1,1,1)^{\mathsf T}\\
1&(1,0,-1)^{\mathsf T}\\
-3&(1,-2,1)^{\mathsf T}
\end{array}
$$

である。したがって最大固有値は $\boxed{3}$、対応する固有ベクトルは
$\boxed{(1,1,1)^{\mathsf T}}$ である。

#### (b)

$aA^2+bA+cE=O$ とする。各固有ベクトルに作用させると、多項式

$$
p(\lambda)=a\lambda^2+b\lambda+c
$$

は相異なる 3 点 $3,1,-3$ で $0$ となる。$\deg p\le2$ より $p\equiv0$ であり、

$$
\boxed{a=b=c=0}.
$$

#### (c)

特性多項式は

$$
(\lambda-3)(\lambda-1)(\lambda+3)
=\lambda^3-\lambda^2-9\lambda+9.
$$

Cayley--Hamilton の定理より、

$$
A^3-A^2-9A+9E=O.
$$

したがって、

$$
\boxed{s=-1,\qquad t=-9,\qquad u=9}.
$$

#### (d)

$$
A^{15}-4A^{14}+3A^{13}
=A^{13}(A-E)(A-3E)
$$

は固有値 $-3$ の固有空間上でのみ $24(-3)^{13}$ 倍となる。よって、

$$
\boxed{
A^{15}-4A^{14}+3A^{13}
=4(-3)^{13}
\begin{pmatrix}
1&-2&1\\
-2&4&-2\\
1&-2&1
\end{pmatrix}}.
$$

### (2)

$$
f(x,y)=3x^2-12xy+y^3+6y^2-15y-3
$$

とする。$f_x=f_y=0$ から停留点は

$$
(10,5),\qquad(-2,-1)
$$

である。Hesse 行列式は $36(y-2)$ なので、$(-2,-1)$ は鞍点、$(10,5)$ は極小点である。したがって、

$$
\boxed{\text{極小値 }f(10,5)=-103},
\qquad
\boxed{\text{極大値なし}}.
$$

### (3)

#### (a)

極座標に変換すると、

$$
\begin{aligned}
\iint_D\frac{dx\,dy}{5-\sqrt{x^2+y^2}}
&=2\pi\int_1^4\frac{r}{5-r}\,dr\\
&=\boxed{20\pi\log2-6\pi}.
\end{aligned}
$$

#### (b)

$u=x+y,\ v=x-y$ とおくと $dx\,dy=\frac12\,du\,dv$、
$x^2-y^2=uv$ である。よって、

$$
\begin{aligned}
\iint_D(x^2-y^2)^2\,dx\,dy
&=\frac12\int_2^3u^2\,du\int_{-1}^1v^2\,dv\\
&=\boxed{\frac{19}{9}}.
\end{aligned}
$$
