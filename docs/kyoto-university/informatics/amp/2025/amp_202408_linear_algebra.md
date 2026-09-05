---
sidebar_label: "2024年8月実施 線形代数"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2024年8月実施 線形代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_amp.pdf)

以下の問いに答えよ。

(i) $n$ 次正方行列 $A$ は $n$ 個の線形独立な固有ベクトルの組 $x_1, x_2, ..., x_n$ を持つとする。このとき、行列 $A$ は対角化可能であることを示せ。

(ii) 行列 $A = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 1 & 2 \\ 0 & 1 & 1 \end{pmatrix}$ が対角化可能かどうか判定せよ。対角化可能な場合、 $P^{-1}AP$ が対角行列となるような正則行列 $P$ を一つ求めよ。

(iii) 次の行列式を計算せよ。

$$
\begin{vmatrix} 3 & 0 & 2 & 1 & 2 \\ -1 & 1 & 0 & 0 & 2 \\ 0 & 2 & 2 & 0 & 0 \\ 0 & 0 & 5 & 0 & 3 \\ -1 & 1 & 0 & 0 & 5 \end{vmatrix}
$$

(iv) 実数 $a$ を成分に含む行列 $A$ を $A = \begin{pmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{pmatrix}$ によって定める。行列 $A$ の階数が2となるような $a$ の値を全て求めよ。

(v) 次の $x, y, z, w$ を変数とする連立一次方程式を解け。

$$
\begin{cases} 2x + 6y - z - 2w = -1 \\ 3x + 9y + 2z - 3w = -5 \\ x + 3y - 4z - w = 3 \\ x + 3y - 2z - w = 1 \end{cases}
$$

### 题目描述

回答下列问题。

1. 设 $n$ 阶方阵 $A$ 有 $n$ 个线性无关的特征向量
   $\boldsymbol{x}_1,\ldots,\boldsymbol{x}_n$。证明 $A$ 可对角化。
2. 判断矩阵

$$
A=
\begin{pmatrix}
1&1&0\\
2&1&2\\
0&1&1
\end{pmatrix}
$$

是否可对角化。若可以，求一个可逆矩阵 $P$，使
$P^{-1}AP$ 为对角矩阵。
3. 计算行列式

$$
\begin{vmatrix}
3&0&2&1&2\\
-1&1&0&0&2\\
0&2&2&0&0\\
0&0&5&0&3\\
-1&1&0&0&5
\end{vmatrix}.
$$

4. 对实参数 $a$，定义

$$
A=
\begin{pmatrix}
a&1&1\\
1&a&1\\
1&1&a
\end{pmatrix}.
$$

求使 $\operatorname{rank}A=2$ 的全部 $a$。
5. 解关于 $x,y,z,w$ 的线性方程组

$$
\begin{cases}
2x+6y-z-2w=-1,\\
3x+9y+2z-3w=-5,\\
x+3y-4z-w=3,\\
x+3y-2z-w=1.
\end{cases}
$$

## **Kai**

### (i) 固有ベクトル基底による対角化

$Ax_i=\lambda_ix_i$ とし、

$$
P=(x_1\ x_2\ \cdots\ x_n),
\qquad
\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

とおく。 $x_1,\ldots,x_n$ は一次独立なので $P$ は正則であり、

$$
AP=(Ax_1\ \cdots\ Ax_n)=P\Lambda.
$$

したがって

$$
P^{-1}AP=\Lambda
$$

であり、 $A$ は対角化可能である。

### (ii) 与えられた行列の対角化

特性多項式は

$$
\det(A-\lambda I)
=-(\lambda-1)(\lambda+1)(\lambda-3).
$$

固有値 $1,-1,3$ は相異なるので $A$ は対角化可能である。対応する固有ベクトルを列に並べて

$$
P=
\begin{pmatrix}
1&1&1\\
0&-2&2\\
-1&1&1
\end{pmatrix}
$$

とすれば、 $\det P=-8\neq0$ であり、

$$
P^{-1}AP=
\begin{pmatrix}
1&0&0\\
0&-1&0\\
0&0&3
\end{pmatrix}.
$$

### (iii) 行列式

第 $4$ 列で展開すると、

$$
\det M
=-
\begin{vmatrix}
-1&1&0&2\\
0&2&2&0\\
0&0&5&3\\
-1&1&0&5
\end{vmatrix}.
$$

第 $4$ 行から第 $1$ 行を引けば上三角行列になり、

$$
\det M
=-\{(-1)\cdot2\cdot5\cdot3\}
=30.
$$

### (iv) 階数が $2$ となる $a$

行列式は

$$
\det A=(a-1)^2(a+2).
$$

したがって階数が $3$ 未満となる候補は $a=1,-2$ である。 $a=1$ では全成分が $1$ なので $\operatorname{rank}A=1$ である。一方 $a=-2$ では

$$
\det
\begin{pmatrix}
-2&1\\
1&-2
\end{pmatrix}
=3\neq0
$$

だから $\operatorname{rank}A\geq2$ であり、全体の行列式は $0$ なので $\operatorname{rank}A=2$ である。よって

$$
\boxed{a=-2}.
$$

### (v) 連立一次方程式

行基本変形により

$$
z=-1,\qquad x+3y-w=-1
$$

を得る。 $x=s$ 、 $y=t$ を自由変数とすれば $w=s+3t+1$ である。したがって

$$
\boxed{
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
=
\begin{pmatrix}s\\t\\-1\\s+3t+1\end{pmatrix}
=
s\begin{pmatrix}1\\0\\0\\1\end{pmatrix}
+t\begin{pmatrix}0\\1\\0\\3\end{pmatrix}
+\begin{pmatrix}0\\0\\-1\\1\end{pmatrix}
}
$$

ただし $s,t\in\mathbb R$ である。
