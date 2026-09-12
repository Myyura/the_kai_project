---
sidebar_label: 2010年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Discrete-Mathematics.Combinatorics.Recurrence-Relation
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
(i) 実数 $x$ に対し $\sum_{m=0}^\infty(-x)^m$ が収束するとき、$(1+x)\sum_{m=0}^\infty(-x)^m$ を求めよ。$x^0=1$ とする。

(ii) $n\times n$ 実行列 $A$ が、ある自然数 $k$ に対し $A^k=O_n$ を満たすなら、$I_n+A$ が正則であることを示せ。

(iii) 次の $B$ の逆行列を $C$ の多項式で表せ。必要なら $5\times5$ の単位行列 $I_5$ を用いてよい。

$$
B=\begin{pmatrix}1&-1&0&0&0\\0&1&-1&0&0\\0&0&1&-1&0\\0&0&0&1&-1\\0&0&0&0&1\end{pmatrix},\quad
C=\begin{pmatrix}0&-1&0&0&0\\0&0&-1&0&0\\0&0&0&-1&0\\0&0&0&0&-1\\0&0&0&0&0\end{pmatrix}.
$$

### 問2
(i) 次の二つの行列の行列式を求めよ。

$$
\begin{pmatrix}1&1&0\\1&1&1\\0&1&1\end{pmatrix},\qquad
\begin{pmatrix}1&1&0&0\\1&1&1&0\\0&1&1&1\\0&0&1&1\end{pmatrix}.
$$

(ii) $d$ 次元実線形空間において、$2\le n\le d$ 個のベクトル $a_1,\ldots,a_n$ は線形独立とする。

$$
b_1=a_1+a_2,\quad b_k=a_{k-1}+a_k+a_{k+1}\ (k=2,\ldots,n-1),\quad b_n=a_{n-1}+a_n
$$

（中間の式は $n\ge3$ の場合）で定める $b_1,\ldots,b_n$ が線形独立となるか否か、理由も付けて答えよ。

#### 题目描述

**问1** (i) 对实数 $x$，若 $\sum_{m=0}^\infty(-x)^m$ 收敛，求 $(1+x)\sum_{m=0}^\infty(-x)^m$；规定 $x^0=1$。(ii) 若 $n$ 阶实矩阵满足 $A^k=0$，证明 $I_n+A$ 可逆。(iii) 设 $C$ 为仅紧邻主对角线的上对角线上元素为 $-1$、其余全零的 $5$ 阶矩阵，$B=I_5+C$，用 $C$ 的多项式表示 $B^{-1}$。

**问2** (i) 求 $3$ 阶和 $4$ 阶三对角矩阵的行列式；其主对角线和相邻两条对角线均为 $1$，其余为零。(ii) 在 $d$ 维实空间中，设 $2\le n\le d$ 个向量 $a_i$ 线性无关。令 $b_1=a_1+a_2$、$b_n=a_{n-1}+a_n$，中间项 $b_k=a_{k-1}+a_k+a_{k+1}$。判断这些 $b_i$ 何时线性无关并证明。

## **Kai**

### 問1
(i) 収束条件は $|x|<1$。等比級数の和より求める値は $\boxed1$。

(ii) 有限等比級数によって

$$
(I_n+A)\sum_{j=0}^{k-1}(-A)^j=I_n-(-A)^k=I_n.
$$

従って正則である。

(iii) $C^5=0$、$B=I_5+C$ より $\boxed{B^{-1}=I_5-C+C^2-C^3+C^4}$。

### 問2
(i) 直接展開すると両方とも $\boxed{-1}$。

(ii) $n$ 次の所定の三対角行列を $T_n$ とすると、$(b_1\ \cdots\ b_n)=(a_1\ \cdots\ a_n)T_n$。従って $b_i$ の独立性は $T_n$ の正則性と同値である。$d_n=\det T_n$ は

$$
d_0=1,\quad d_1=1,\quad d_n=d_{n-1}-d_{n-2},\qquad
 d_n=\frac{\sin((n+1)\pi/3)}{\sin(\pi/3)}.
$$

従って $d_n=0$ は $n\equiv2\pmod3$ と同値。答えは

$$
\boxed{n\not\equiv2\pmod3\text{ なら線形独立、}\quad n\equiv2\pmod3\text{ なら線形従属}}.
$$

