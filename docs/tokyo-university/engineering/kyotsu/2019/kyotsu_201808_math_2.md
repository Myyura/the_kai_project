---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Permutation-Matrix-and-Minimal-Polynomial
---

# 東京大学 工学系研究科 2019年度 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
次の行列を考える。

$$
P=\begin{pmatrix}0&0&3/2\\2&0&0\\0&1/3&0\end{pmatrix}.
$$

1. すべての固有値と、それぞれに対応する単位固有ベクトルを求めよ。
2. $P^2,P^3$ を求めよ。

### II.
$a,b,c,d,e$ は実数とし、次の行列を考える。

$$
A=\begin{pmatrix}
0&0&c&0&0\\a&0&0&0&0\\0&b&0&0&0\\0&0&0&0&e\\0&0&0&d&0
\end{pmatrix}.
$$

ある正の整数 $m$ に対して $A^m=I$ となる必要十分条件を簡潔に述べよ。証明は不要である。

### III.
$M$ は、すべての成分が $0$ または $1$ であり、各行・各列にちょうど一つの $1$ をもつ $12$ 次正方行列とする。$M^{k_0}=I$ となる最小の正の整数を $k_0$ とする。このような $M$ 全体における $k_0$ の最大値を求めよ。証明は不要である。

#### 题目描述

##### I.
设

$$
P=\begin{pmatrix}0&0&3/2\\2&0&0\\0&1/3&0\end{pmatrix}.
$$

1. 求全部特征值及相应的单位特征向量。
2. 求 $P^2,P^3$。

##### II.
设 $a,b,c,d,e$ 均为实数，

$$
A=\begin{pmatrix}
0&0&c&0&0\\a&0&0&0&0\\0&b&0&0&0\\0&0&0&0&e\\0&0&0&d&0
\end{pmatrix}.
$$

简洁写出存在正整数 $m$ 使 $A^m=I$ 的充要条件，不必证明。

##### III.
$M$ 为 $12$ 阶矩阵，各元素为 $0$ 或 $1$，每行每列恰有一个 $1$。以 $k_0$ 表示使 $M^{k_0}=I$ 的最小正整数。求所有这类 $M$ 中 $k_0$ 的最大值，不必证明。

## **Kai**

### I.

1. 特性方程式は $\lambda^3=1$ である。$\omega=e^{2\pi i/3}$ とおけば

$$
\boxed{\lambda\in\{1,\omega,\omega^2\},\qquad
v_\lambda=\frac17\begin{pmatrix}3\lambda\\6\\2\lambda^2\end{pmatrix}}.
$$

$|\lambda|=1$ より $v_\lambda^*v_\lambda=(9+36+4)/49=1$ である。

2. 直接計算すると

$$
\boxed{P^2=\begin{pmatrix}0&1/2&0\\0&0&3\\2/3&0&0\end{pmatrix},\qquad P^3=I}.
$$

### II.

二つの対角ブロックはそれぞれ $B^3=abcI_3$、$C^2=deI_2$ を満たす。したがって必要十分条件は

$$
\boxed{abc\in\{1,-1\},\qquad de\in\{1,-1\}}.
$$

このとき $A^{12}=I$ が成り立つ。

### III.

置換を互いに素な巡回置換に分解すると、その位数は各巡回の長さの最小公倍数となる。長さの和が $12$ のとき、最大値は長さ $5,4,3$ の組で達成される。

$$
\boxed{\max k_0=\operatorname{lcm}(5,4,3)=60}.
$$

