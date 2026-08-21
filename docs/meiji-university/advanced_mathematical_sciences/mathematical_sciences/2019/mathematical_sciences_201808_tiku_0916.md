---
sidebar_label: "2018年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2018年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ , ベクトル $\mathbf{x}_0, \mathbf{x}_1, \dots$ を

$$
A = \begin{pmatrix} 3 & 5 & -1 \\ 0 & -2 & 0 \\ -1 & -1 & 3 \end{pmatrix}, \quad \mathbf{x}_0 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \mathbf{x}_{n+1} = A\mathbf{x}_n \quad (n=0, 1, \dots)
$$

で定めるとき、以下の問いに答えよ。

(1) $A$ の固有値を求めよ。

(2) $P^{-1}AP$ が対角行列となるような正則行列 $P$ を求めよ。条件を満たす $P$ は複数存在するが、どれか１つ求めればよい。

(3) 自然数 $n$ に対して, $A^n$ を求めよ。

(4) 自然数 $n$ に対して, $\mathbf{x}_n$ を求めよ。

### 题目描述

定义矩阵 $A$ 以及向量 $\mathbf{x}_0,\mathbf{x}_1,\dots$ 如下：

$$
A=\begin{pmatrix}3&5&-1\\0&-2&0\\-1&-1&3\end{pmatrix},\qquad
\mathbf{x}_0=\begin{pmatrix}1\\0\\1\end{pmatrix},\qquad
\mathbf{x}_{n+1}=A\mathbf{x}_n\quad(n=0,1,\dots).
$$

回答下列问题。

(1) 求 $A$ 的特征值。

(2) 求一个可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。满足条件的 $P$ 不唯一，写出任意一个即可。

(3) 对自然数 $n$，求 $A^n$。

(4) 对自然数 $n$，求 $\mathbf{x}_n$。

## **Kai**

(1) $A$ の固有値を求めよ。

$A$ の特性方程式 $\det(A - \lambda I) = 0$ を解く。

$$
\det(A - \lambda I) = \begin{vmatrix} 3-\lambda & 5 & -1 \\ 0 & -2-\lambda & 0 \\ -1 & -1 & 3-\lambda \end{vmatrix}
$$

第2行で余因子展開を行うと、

$$
\det(A - \lambda I) = (-2-\lambda) \begin{vmatrix} 3-\lambda & -1 \\ -1 & 3-\lambda \end{vmatrix}
$$

$$
= (-2-\lambda) \{ (3-\lambda)^2 - 1 \}
$$

$$
= (-2-\lambda) (\lambda^2 - 6\lambda + 9 - 1)
$$

$$
= (-2-\lambda) (\lambda^2 - 6\lambda + 8)
$$

$$
= -(\lambda+2)(\lambda-2)(\lambda-4)
$$

特性方程式は $-(\lambda+2)(\lambda-2)(\lambda-4) = 0$ となる。
したがって、 $A$ の固有値は $\lambda = -2, 2, 4$ である。

(2) $P^{-1}AP$ が対角行列となるような正則行列 $P$ を求めよ。

各固有値に対応する固有ベクトルを求める。

i) 固有値 $\lambda_1 = -2$ の場合:
$(A+2I)\mathbf{v} = \mathbf{0}$ を解く。

$$
\begin{pmatrix} 5 & 5 & -1 \\ 0 & 0 & 0 \\ -1 & -1 & 5 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

連立方程式 $5x+5y-z=0$ と $-x-y+5z=0$ から、 $z=0, y=-x$ を得る。固有ベクトルの一例は $\mathbf{v}_1 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$ 。

ii) 固有値 $\lambda_2 = 2$ の場合:
$(A-2I)\mathbf{v} = \mathbf{0}$ を解く。

$$
\begin{pmatrix} 1 & 5 & -1 \\ 0 & -4 & 0 \\ -1 & -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-4y=0$ より $y=0$ 。 $x-z=0$ より $x=z$ 。固有ベクトルの一例は $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ 。

iii) 固有値 $\lambda_3 = 4$ の場合:
$(A-4I)\mathbf{v} = \mathbf{0}$ を解く。

$$
\begin{pmatrix} -1 & 5 & -1 \\ 0 & -6 & 0 \\ -1 & -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-6y=0$ より $y=0$ 。 $-x-z=0$ より $x=-z$ 。固有ベクトルの一例は $\mathbf{v}_3 = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$ 。

これらの固有ベクトルを列ベクトルとする行列 $P$ を作る。

$$
P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \mathbf{v}_3 \end{pmatrix} = \begin{pmatrix} -1 & 1 & -1 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}
$$

この $P$ が求める正則行列である。このとき、 $P^{-1}AP = \begin{pmatrix} -2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$ とな

(3) 自然数 $n$ に対して, $A^n$ を求めよ。

$A$ の対角化を利用して、 $A^n = PD^n P^{-1}$ を計算する。ここで $D$ は固有値を対角成分に持つ対角行列である。

$$
D^n = \begin{pmatrix} (-2)^n & 0 & 0 \\ 0 & 2^n & 0 \\ 0 & 0 & 4^n \end{pmatrix}
$$

次に、 $P$ の逆行列 $P^{-1}$ を求める。
$\det(P) = -1(0) - 1(1) - 1(1) = -2$ 。

$$
P^{-1} = \frac{1}{\det(P)} \text{adj}(P) = -\frac{1}{2} \begin{pmatrix} 0 & -2 & 0 \\ -1 & -1 & -1 \\ 1 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 & 0 \\ 1/2 & 1/2 & 1/2 \\ -1/2 & -1/2 & 1/2 \end{pmatrix}
$$

よって、 $A^n$ は以下のように計算される。

$$
A^n = PD^n P^{-1} = \begin{pmatrix} -1 & 1 & -1 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} (-2)^n & 0 & 0 \\ 0 & 2^n & 0 \\ 0 & 0 & 4^n \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \\ 1/2 & 1/2 & 1/2 \\ -1/2 & -1/2 & 1/2 \end{pmatrix}
$$

$$
= \begin{pmatrix} -(-2)^n & 2^n & -4^n \\ (-2)^n & 0 & 0 \\ 0 & 2^n & 4^n \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \\ 1/2 & 1/2 & 1/2 \\ -1/2 & -1/2 & 1/2 \end{pmatrix}
$$

$$
= \begin{pmatrix} \frac{1}{2}(2^n+4^n) & -(-2)^n + \frac{1}{2}(2^n+4^n) & \frac{1}{2}(2^n-4^n) \\ 0 & (-2)^n & 0 \\ \frac{1}{2}(2^n-4^n) & \frac{1}{2}(2^n-4^n) & \frac{1}{2}(2^n+4^n) \end{pmatrix}
$$

(4) 自然数 $n$ に対して, $\mathbf{x}_n$ を求めよ。

$\mathbf{x}_n = A^n \mathbf{x}_0$ の関係がある。 Part (3) の結果を使っても計算できるが、ここではより簡潔な方法を用いる。
初期ベクトル $\mathbf{x}_0$ を固有ベクトルの線形結合で表現する: $\mathbf{x}_0 = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + c_3 \mathbf{v}_3$ 。
係数ベクトル $\mathbf{c} = \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix}$ は $\mathbf{c} = P^{-1} \mathbf{x}_0$ で求められる。

$$
\mathbf{c} = \begin{pmatrix} 0 & 1 & 0 \\ 1/2 & 1/2 & 1/2 \\ -1/2 & -1/2 & 1/2 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}
$$

よって $c_1=0, c_2=1, c_3=0$ となり、 $\mathbf{x}_0 = 0 \cdot \mathbf{v}_1 + 1 \cdot \mathbf{v}_2 + 0 \cdot \mathbf{v}_3 = \mathbf{v}_2$ となる。
これは、初期ベクトル $\mathbf{x}_0$ が固有値 $\lambda_2=2$ に対応する固有ベクトルであることを意味する。
したがって、次のように計算できる。

$$
\mathbf{x}_n = A^n \mathbf{x}_0 = A^n \mathbf{v}_2 = \lambda_2^n \mathbf{v}_2 = 2^n \mathbf{v}_2
$$

$$
\mathbf{x}_n = 2^n \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2^n \\ 0 \\ 2^n \end{pmatrix}
$$
