---
sidebar_label: "2011年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 京都大学 情報学研究科 数理工学専攻 2011年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

n次正方行列 $A$ に対して適当な可逆行列 $P$ が存在して $P^{-1}AP$ が対角行列になるとき、 $A$ は $P$ により対角化可能という。 $A$ の固有値がすべて相異なるとき、 $A$ は対角化可能である。 $n$ 次正方行列 $A, B$ が同一の $P$ により対角化可能であるとき、 $A, B$ は同時対角化可能という。以下の問いに答えよ。ただし、以下に現れる行列は複素行列、ベクトルは複素ベクトルとする。

(i) $n$ 次正方行列 $A, B$ が同時対角化可能ならば、 $AB = BA$ が成り立つことを示せ。

(ii) $n$ 次正方行列 $A$ の固有値がすべて相異なり、かつ、 $n$ 次正方行列 $B$ との間に $AB = BA$ が成り立つとき、 $A, B$ は同時対角化可能であることを示せ。

(iii) $A, B$ を $n$ 次正方行列とする。行列 $A$ のある固有値 $\alpha$ に対応する固有ベクトルを $x (\neq 0)$ とおく。ある正の整数 $p (\leq n)$ について、 $B^k x (k = 0, 1, ..., p-1)$ は一次独立であるが、 $B^k x (k = 0, 1, ..., p)$ は一次従属であるとし、線形部分空間

$$
L_B(x) = \text{Span}\{x, Bx, ..., B^{p-1}x\}
$$

$$
= \{y \mid y = c_1x + c_2Bx + \cdots + c_pB^{p-1}x, \forall c_j \in \mathbb{C}\}
$$

を導入する。 $n$ 次正方行列 $A, B$ が $AB = BA$ を満たすとき、 $L_B(x)$ は写像 $B$ のもとでの不変部分空間となること、および、 $A, B$ は共通の固有ベクトル $z (\neq 0) \in L_B(x)$ をもつことを示せ。

(iv) $n$ 次正方行列 $A, B$ が共通の固有ベクトル $z \in L_B(x)$ をもつとき、 $z$ に対応する $A$ の固有値を $\alpha$ , $B$ の固有値を $\beta$ とする。このとき、和 $\alpha + \beta$ は行列 $A+B$ の固有ベクトル $z$ に対応する固有値を与え、積 $\alpha\beta$ は行列 $AB$ の固有ベクトル $z$ に対応する固有値を与えることを示せ。

### 题目描述

若对 $n$ 阶方阵 $A$ 存在可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵，则称 $A$ 可由 $P$ 对角化。已知当 $A$ 的全部特征值互不相同时，$A$ 可对角化。若两个 $n$ 阶方阵 $A,B$ 能由同一个矩阵 $P$ 对角化，则称 $A,B$ 可同时对角化。以下矩阵与向量均取在复数域上。

完成以下各问：

1. 证明：若 $n$ 阶方阵 $A,B$ 可同时对角化，则

   $$
   AB=BA.
   $$

2. 设 $A$ 的全部特征值互不相同，并且 $A$ 与 $n$ 阶方阵 $B$ 满足 $AB=BA$。证明 $A,B$ 可同时对角化。
3. 设 $x\neq0$ 是 $A$ 对应于某个特征值 $\alpha$ 的特征向量。对某个正整数 $p\leq n$，假设

   $$
   x,Bx,\ldots,B^{p-1}x
   $$

   线性无关，而

   $$
   x,Bx,\ldots,B^px
   $$

   线性相关。定义

   $$
   \begin{aligned}
   L_B(x)
   &=\operatorname{Span}\{x,Bx,\ldots,B^{p-1}x\}\\
   &=\left\{c_1x+c_2Bx+\cdots+c_pB^{p-1}x
   \mid c_j\in\mathbb C\right\}.
   \end{aligned}
   $$

   当 $AB=BA$ 时，证明 $L_B(x)$ 是线性映射 $B$ 的不变子空间，并证明 $A,B$ 在 $L_B(x)$ 中存在一个非零公共特征向量 $z$。
4. 设 $z\in L_B(x)$ 是 $A,B$ 的公共特征向量，分别对应特征值 $\alpha,\beta$。证明 $\alpha+\beta$ 是 $A+B$ 对应于 $z$ 的特征值，而 $\alpha\beta$ 是 $AB$ 对应于 $z$ 的特征值。

## **Kai**

### (i) 同時対角化可能なら可換

ある正則行列 $P$ と対角行列 $D_A,D_B$ により

$$
P^{-1}AP=D_A,\qquad P^{-1}BP=D_B
$$

と書ける。対角行列同士は可換なので、

$$
\begin{aligned}
AB&=PD_AD_BP^{-1}\\
&=PD_BD_AP^{-1}=BA
\end{aligned}
$$

である。

### (ii) $A$ の固有値がすべて相異なる場合

$A$ を

$$
P^{-1}AP=D_A=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

と対角化し、 $C=P^{-1}BP=(c_{ij})$ とおく。 $AB=BA$ から $D_AC=CD_A$ であり、成分を比較すると

$$
(\lambda_i-\lambda_j)c_{ij}=0
$$

を得る。 $i\neq j$ なら $\lambda_i\neq\lambda_j$ だから $c_{ij}=0$ である。したがって $C$ も対角行列であり、 $A,B$ は同じ $P$ で対角化できる。

### (iii) 不変部分空間と共通固有ベクトル

仮定された一次従属関係において $B^px$ の係数が $0$ なら、 $x,Bx,\ldots,B^{p-1}x$ までが一次従属となってしまう。したがって

$$
B^px\in\operatorname{Span}\{x,Bx,\ldots,B^{p-1}x\}=L_B(x).
$$

$y=\sum_{k=0}^{p-1}c_kB^kx\in L_B(x)$ に対して

$$
By=\sum_{k=0}^{p-1}c_kB^{k+1}x\in L_B(x)
$$

となるので、 $L_B(x)$ は $B$ 不変である。

また、 $Ax=\alpha x$ と $AB=BA$ から、すべての $k\geq0$ について

$$
A(B^kx)=B^k(Ax)=\alpha B^kx
$$

である。よって $A$ は $L_B(x)$ 上で $\alpha I$ として作用する。一方、複素ベクトル空間 $L_B(x)$ 上の線形写像 $B$ は固有ベクトル $z\neq0$ をもつ。この $z$ について

$$
Az=\alpha z,\qquad Bz=\beta z
$$

となるから、 $z$ は $A,B$ の共通固有ベクトルである。

### (iv) 和と積の固有値

共通固有ベクトル $z\neq0$ に対して $Az=\alpha z$ 、 $Bz=\beta z$ なら、

$$
(A+B)z=(\alpha+\beta)z
$$

および

$$
(AB)z=A(\beta z)=\alpha\beta z
$$

である。したがって $\alpha+\beta$ と $\alpha\beta$ は、それぞれ $A+B$ と $AB$ の $z$ に対応する固有値である。
