---
sidebar_label: "2018年8月実施 数学コース 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Invariant-Subspace-and-Restricted-Operator
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2018年8月実施 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

1. $n$ 次複素正方行列 $A=(a_{ij})$ の行列式 $\det A$ の定義を述べよ。
2. 次の行列の行列式を求め、計算方法も説明せよ。ただし $a,b,c,d,e,f\in\mathbb C$ とする。

$$
A=\begin{pmatrix}
0&0&a&0&0&0\\
0&0&0&0&0&b\\
0&c&0&0&0&0\\
0&0&0&0&d&0\\
e&0&0&0&0&0\\
0&0&0&f&0&0
\end{pmatrix}.
$$

### (2)

$M_3(\mathbb R)$ を $3$ 次実正方行列全体のベクトル空間とし、

$$
S=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix},
\qquad
V=\{X\in M_3(\mathbb R)\mid X^{\mathsf T}S+SX=0\}
$$

とおく。

1. $V$ の基底と次元を求めよ。
2. $H=\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix}$ とし、$T(X)=HX-XH$ と定める。$X\in V$ ならば $T(X)\in V$ であることを示せ。
3. $T$ の $V$ への制限を $\widetilde T$ とする。$\widetilde T$ の固有値と各固有空間を求めよ。

### 题目描述

1. 写出行列式的排列定义，并计算一个每行每列仅有一个可能非零元素的六阶行列式。
2. 求满足 $X^{\mathsf T}S+SX=0$ 的矩阵空间的基与维数；证明交换子映射 $T(X)=HX-XH$ 保持该空间，并求限制映射的特征值与特征空间。

## **Kai**

### (1)

#### 1.

$S_n$ を $\{1,\ldots,n\}$ の置換全体とすると、

$$
\boxed{
\det A=\sum_{\sigma\in S_n}
\operatorname{sgn}(\sigma)
\prod_{i=1}^n a_{i,\sigma(i)}
}
$$

である。

#### 2.

零でない可能性のある積を与える置換は

$$
(\sigma(1),\ldots,\sigma(6))=(3,6,2,5,1,4)
$$

だけである。この列の転倒数は $9$ なので符号は $-1$ である。したがって

$$
\boxed{\det A=-abcdef}.
$$

### (2)

#### 1.

$X=(x_{ij})$ とおく。$X^{\mathsf T}S+SX=0$ を成分ごとに解くと、

$$
X=\begin{pmatrix}
0&p&q\\
p&0&r\\
q&-r&0
\end{pmatrix}
\qquad(p,q,r\in\mathbb R)
$$

を得る。よって

$$
B_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix},\quad
B_2=\begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix},\quad
B_3=\begin{pmatrix}0&0&0\\0&0&1\\0&-1&0\end{pmatrix}
$$

は $V$ の基底であり、

$$
\boxed{\dim V=3}.
$$

#### 2.

$X=pB_1+qB_2+rB_3$ に対して直接計算すると、

$$
T(X)=HX-XH
=\begin{pmatrix}
0&0&r\\
0&0&q\\
r&-q&0
\end{pmatrix}
=rB_2+qB_3\in V.
$$

したがって $T(V)\subset V$ である。

#### 3.

基底 $(B_1,B_2,B_3)$ に関する $\widetilde T$ の表現行列は

$$
[\widetilde T]_B=
\begin{pmatrix}
0&0&0\\
0&0&1\\
0&1&0
\end{pmatrix}.
$$

よって固有値と固有空間は

$$
\begin{array}{c|c}
\lambda&\operatorname{Ker}(\widetilde T-\lambda I)\\ \hline
0&\operatorname{span}\{B_1\}\\
1&\operatorname{span}\{B_2+B_3\}\\
-1&\operatorname{span}\{B_2-B_3\}
\end{array}
$$

である。
