---
sidebar_label: "2024年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 A を次で定める。

$$
A = \begin{pmatrix} -7 & -3 & -12 \\ 0 & 2 & 0 \\ 4 & 1 & 7 \end{pmatrix}
$$

(1) A の固有値 $\lambda_1, \lambda_2, \lambda_3$ を求めよ、但し $\lambda_1 < \lambda_2 < \lambda_3$ とする。

(2) 固有値 $\lambda_1, \lambda_2, \lambda_3$ に対する固有ベクトル $v_1, v_2, v_3$ をそれぞれ一つ求めよ。

(3) 行列 A を対角化せよ。すなわち

$$
A = PDP^{-1}
$$

となるように対角行列 D, 正則行列 P, 及び P の逆行列を求めよ。

(4) 数列 $\{a_n\}_n, \{b_n\}_n, \{c_n\}_n$ を初期値 $a_0 = 1, b_0 = -1, c_0 = 0$ として漸化式

$$
\begin{cases}
a_{i+1} = -7a_i - 3b_i - 12c_i \\
b_{i+1} = 2b_i \\
c_{i+1} = 4a_i + b_i + 7c_i
\end{cases}
$$

で定める。このとき一般項 $a_n, b_n, c_n (n \geq 0)$ を求めよ。

### 题目描述

定义矩阵

$$
A=
\begin{pmatrix}
-7&-3&-12\\
0&2&0\\
4&1&7
\end{pmatrix}.
$$

（1）求 $A$ 的特征值 $\lambda_1,\lambda_2,\lambda_3$，其中规定 $\lambda_1<\lambda_2<\lambda_3$。

（2）对特征值 $\lambda_1,\lambda_2,\lambda_3$，分别求一个对应的特征向量 $v_1,v_2,v_3$。

（3）将矩阵 $A$ 对角化。也就是说，求对角矩阵 $D$、可逆矩阵 $P$ 及 $P$ 的逆矩阵，使

$$
A=PDP^{-1}.
$$

（4）数列 $\{a_n\}_n,\{b_n\}_n,\{c_n\}_n$ 的初值为

$$
a_0=1,\qquad b_0=-1,\qquad c_0=0,
$$

并满足递推关系

$$
\begin{cases}
a_{i+1}=-7a_i-3b_i-12c_i,\\
b_{i+1}=2b_i,\\
c_{i+1}=4a_i+b_i+7c_i.
\end{cases}
$$

求 $a_n,b_n,c_n\ (n\ge0)$ 的通项公式。

## **Kai**

解答

(1) A の固有値

固有値 $\lambda$ は、特性方程式 $\det(A - \lambda I) = 0$ の解である。ここで $I$ は単位行列である。

$$
A - \lambda I = \begin{pmatrix} -7-\lambda & -3 & -12 \\ 0 & 2-\lambda & 0 \\ 4 & 1 & 7-\lambda \end{pmatrix}
$$

行列式を計算する。第2行で展開するのが最も簡単である。

$$
\begin{aligned} \det(A - \lambda I) &= (2-\lambda) \begin{vmatrix} -7-\lambda & -12 \\ 4 & 7-\lambda \end{vmatrix} \\ &= (2-\lambda) [(-7-\lambda)(7-\lambda) - (-12)(4)] \\ &= (2-\lambda) [- (49 - \lambda^2) + 48] \\ &= (2-\lambda) [\lambda^2 - 1] \\ &= (2-\lambda) (\lambda - 1)(\lambda + 1) \end{aligned}
$$

特性方程式は $(2-\lambda)(\lambda - 1)(\lambda + 1) = 0$ であり、その解は $\lambda = -1, 1, 2$ である。

条件 $\lambda_1 < \lambda_2 < \lambda_3$ に従い、固有値は次のようになる。

$$
\lambda_1 = -1, \quad \lambda_2 = 1, \quad \lambda_3 = 2
$$

(2) 固有ベクトル

各固有値に対して、方程式 $(A - \lambda I)v = 0$ を解くことで固有ベクトル $v$ を求める。

i) $\lambda_1 = -1$ の場合:

$$
(A - (-1)I)v_1 = \begin{pmatrix} -6 & -3 & -12 \\ 0 & 3 & 0 \\ 4 & 1 & 8 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

連立方程式は、

$$
\begin{cases} -6x - 3y - 12z = 0 \\ 3y = 0 \\ 4x + y + 8z = 0 \end{cases}
$$

第2式より $y=0$ 。これを他の式に代入すると、 $ -6x - 12z = 0 \implies x + 2z = 0$ と $4x + 8z = 0 \implies x + 2z = 0$ となり、同じ条件が得られる。 $x = -2z$ である。 $z=1$ を選ぶと、 $x=-2$ となる。よって、固有ベクトルの一つは

$$
v_1 = \begin{pmatrix} -2 \\ 0 \\ 1 \end{pmatrix}
$$

ii) $\lambda_2 = 1$ の場合:

$$
(A - 1I)v_2 = \begin{pmatrix} -8 & -3 & -12 \\ 0 & 1 & 0 \\ 4 & 1 & 6 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

第2式より $y=0$ 。これを第3式に代入すると、 $4x + 6z = 0 \implies 2x + 3z = 0$ 。 $x = -\frac{3}{2}z$ である。 $z=-2$ を選ぶと、 $x=3$ となる。よって、固有ベクトルの一つは

$$
v_2 = \begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix}
$$

iii) $\lambda_3 = 2$ の場合:

$$
(A - 2I)v_3 = \begin{pmatrix} -9 & -3 & -12 \\ 0 & 0 & 0 \\ 4 & 1 & 5 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

連立方程式は、

$$
\begin{cases} -9x - 3y - 12z = 0 \quad (\div -3) \implies 3x+y+4z=0 \\ 4x + y + 5z = 0 \end{cases}
$$

第2式から第1式を引くと、 $(4x-3x) + (y-y) + (5z-4z) = 0 \implies x+z=0 \implies x=-z$ 。これを $x+z=0$ を $4x+y+5z=0$ に代入すると、 $4(-z)+y+5z=0 \implies y+z=0 \implies y=-z$ 。 $z=1$ を選ぶと、 $x=-1, y=-1$ となる。よって、固有ベクトルの一つは

$$
v_3 = \begin{pmatrix} -1 \\ -1 \\ 1 \end{pmatrix}
$$

(3) 行列の対角化

対角行列 $D$ は固有値を対角成分に持つ行列であり、正則行列 $P$ は対応する固有ベクトルを列ベクトルに持つ行列である。

$$
D = \begin{pmatrix} \lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \end{pmatrix} = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
$$

$$
P = \begin{pmatrix} v_1 & v_2 & v_3 \end{pmatrix} = \begin{pmatrix} -2 & 3 & -1 \\ 0 & 0 & -1 \\ 1 & -2 & 1 \end{pmatrix}
$$

次に、 $P$ の逆行列 $P^{-1}$ を求める。まず、 $P$ の行列式を計算する。

$$
\det(P) = -(-1) \begin{vmatrix} -2 & 3 \\ 1 & -2 \end{vmatrix} = 1 \cdot ((-2)(-2) - 3 \cdot 1) = 4 - 3 = 1
$$

$P^{-1} = \frac{1}{\det(P)} \text{adj}(P)$ であるから、 $P^{-1}$ は $P$ の余因子行列の転置行列（随伴行列）に等しい。

$$
P^{-1} = \text{adj}(P) = \begin{pmatrix} C_{11} & C_{21} & C_{31} \\ C_{12} & C_{22} & C_{32} \\ C_{13} & C_{23} & C_{33} \end{pmatrix} = \begin{pmatrix} -2 & -1 & -3 \\ -1 & -1 & -2 \\ 0 & -1 & 0 \end{pmatrix}
$$

(4) 一般項

与えられた漸化式は、ベクトル $x_i = \begin{pmatrix} a_i \\ b_i \\ c_i \end{pmatrix}$ を用いて次のように書ける。

$$
x_{i+1} = A x_i
$$

この一般解は $x_n = A^n x_0$ で与えられる。初期値は $x_0 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ である。

$A = PDP^{-1}$ を用いると、 $A^n = PD^nP^{-1}$ となる。したがって、

$$
x_n = PD^nP^{-1}x_0
$$

まず、 $P^{-1}x_0$ を計算する。

$$
P^{-1}x_0 = \begin{pmatrix} -2 & -1 & -3 \\ -1 & -1 & -2 \\ 0 & -1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} -2(1) - 1(-1) - 3(0) \\ -1(1) - 1(-1) - 2(0) \\ 0(1) - 1(-1) - 0(0) \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}
$$

次に、 $D^n (P^{-1}x_0)$ を計算する。

$$
D^n = \begin{pmatrix} (-1)^n & 0 & 0 \\ 0 & 1^n & 0 \\ 0 & 0 & 2^n \end{pmatrix} = \begin{pmatrix} (-1)^n & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2^n \end{pmatrix}
$$

$$
D^n(P^{-1}x_0) = \begin{pmatrix} (-1)^n & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2^n \end{pmatrix} \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -(-1)^n \\ 0 \\ 2^n \end{pmatrix} = \begin{pmatrix} (-1)^{n+1} \\ 0 \\ 2^n \end{pmatrix}
$$

最後に、 $x_n = P(D^n P^{-1}x_0)$ を計算する。

$$
x_n = \begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix} = \begin{pmatrix} -2 & 3 & -1 \\ 0 & 0 & -1 \\ 1 & -2 & 1 \end{pmatrix} \begin{pmatrix} (-1)^{n+1} \\ 0 \\ 2^n \end{pmatrix} = \begin{pmatrix} -2(-1)^{n+1} - 2^n \\ -2^n \\ (-1)^{n+1} + 2^n \end{pmatrix}
$$

$-2(-1)^{n+1} = 2(-1)(-1)^{n+1} = 2(-1)^{n+2} = 2(-1)^n$ および $(-1)^{n+1} = -(-1)^n$ を用いて整理すると、

$$
\begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix} = \begin{pmatrix} 2(-1)^n - 2^n \\ -2^n \\ -(-1)^n + 2^n \end{pmatrix}
$$

よって、一般項は以下の通り。

$$
a_n = 2(-1)^n - 2^n
$$

$$
b_n = -2^n
$$

$$
c_n = 2^n - (-1)^n
$$
