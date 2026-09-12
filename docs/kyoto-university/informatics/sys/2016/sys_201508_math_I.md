---
sidebar_label: 2015年8月実施 数学 I
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Gram-Schmidt-Orthogonalization
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Unitary-Matrix
---

# 京都大学 情報学研究科 システム科学専攻 2015年8月実施 数学 I

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$A^*$ は複素行列 $A$ の共役転置、$u^T$ はベクトルの転置、$\|u\|$ はユークリッドノルムを表す。

### 問1

(i) 3次元ベクトル空間で、媒介変数 $p,q$ によって定義される平面

$$
\begin{pmatrix}2\\0\\1\end{pmatrix}
+p\begin{pmatrix}0\\-1\\1\end{pmatrix}
+q\begin{pmatrix}3\\1\\0\end{pmatrix}
$$

を考える。この平面を列ベクトル $\alpha,x$ を用いて $\alpha^Tx=1$ と表したとき、$\alpha$ の値を求めよ。

(ii) $x,y,\alpha$ は実数とする。不等式 $x^2+y^2+\alpha xy>0$ が $(x,y)=(0,0)$ を除くすべての組で成り立つための必要十分条件を、$\alpha$ の範囲として求めよ。

(iii) 正方複素行列 $A$ がユニタリ行列によって対角化されるなら $AA^*=A^*A$ となることを示せ。

### 問2

内積 $\langle v,x\rangle=v^Tx$ をもつ $N$ 次元実ベクトル空間 $V$ を考える。ベクトルはすべて列ベクトルとし、基底を $(a_1,\ldots,a_N)$ とする。

(i) $b_1=a_1/\|a_1\|$ とする。$b_1$ と直交する大きさ1のベクトル $b_2$ を $a_2,b_1$ の線形結合で表せ。さらに $b_1,b_2$ と直交する大きさ1のベクトル $b_3$ を $a_3,b_1,b_2$ の線形結合で表せ。

(ii) $V$ の $M$ 次元部分空間 $W$ の正規直交基底を $(b_1,\ldots,b_M)$ ($M<N$) とする。$v\in V$ の $W$ への正射影 $w$ を $w=Sv$ と表す行列 $S$ を求めよ。

(iii) この正射影について $\|w\|\le\|v\|$ を示せ。

#### 题目描述

记 $A^*$ 为复矩阵 $A$ 的共轭转置，$u^T$ 为向量转置，$\|u\|$ 为欧氏范数。

**问1** （i）给定三维空间中的平面

$$
\begin{pmatrix}2\\0\\1\end{pmatrix}+p\begin{pmatrix}0\\-1\\1\end{pmatrix}+q\begin{pmatrix}3\\1\\0\end{pmatrix}.
$$

若用列向量 $\alpha,x$ 将其写为 $\alpha^Tx=1$，求 $\alpha$。（ii）$x,y,\alpha$ 都为实数。求使 $x^2+y^2+\alpha xy>0$ 对除 $(0,0)$ 外一切 $(x,y)$ 成立的 $\alpha$ 的充要范围。（iii）证明若复方阵 $A$ 可被酉矩阵对角化，则 $AA^*=A^*A$。

**问2** 设 $V$ 是以内积 $\langle v,x\rangle=v^Tx$ 定义的 $N$ 维实向量空间，所有向量均为列向量，$(a_1,\ldots,a_N)$ 为其一组基。

（i）令 $b_1=a_1/\|a_1\|$，用 $a_2,b_1$ 的线性组合表示与 $b_1$ 正交的单位向量 $b_2$，再用 $a_3,b_1,b_2$ 的线性组合表示与 $b_1,b_2$ 都正交的单位向量 $b_3$。

（ii）$V$ 的 $M$ 维子空间 $W$（$M<N$）有标准正交基 $(b_1,\ldots,b_M)$。求将 $v\in V$ 正交投影为 $w\in W$ 的矩阵 $S$，即 $w=Sv$。（iii）证明 $\|w\|\le\|v\|$。


## **Kai**

### 問1

(i) $\alpha=(a_1,a_2,a_3)^T$ とおく。方向ベクトルに垂直で、基点との内積が $1$ なので

$$
-a_2+a_3=0,\quad3a_1+a_2=0,\quad2a_1+a_3=1.
$$

解いて $\boxed{\alpha=(-1,3,3)^T}$。

(ii) 平方完成すると

$$
x^2+y^2+\alpha xy=\left(x+\frac\alpha2y\right)^2+\left(1-\frac{\alpha^2}{4}\right)y^2.
$$

よって必要十分条件は $\boxed{-2<\alpha<2}$。

(iii) $A=U\Lambda U^*$、$U^*U=UU^*=I$、$\Lambda$ は対角行列とおく。すると

$$
AA^*=U\Lambda\Lambda^*U^*=U\Lambda^*\Lambda U^*=A^*A.
$$

### 問2

(i) Gram–Schmidt 法より

$$
c_2=a_2-(b_1^Ta_2)b_1,\qquad b_2=\frac{c_2}{\|c_2\|},
$$

$$
c_3=a_3-(b_1^Ta_3)b_1-(b_2^Ta_3)b_2,\qquad b_3=\frac{c_3}{\|c_3\|}.
$$

$a_1,a_2,a_3$ の一次独立性から分母は $0$ にならない。

(ii) $w=\sum_{j=1}^M(b_j^Tv)b_j$ より、$B=(b_1,\ldots,b_M)$ とおくと

$$
\boxed{S=\sum_{j=1}^Mb_jb_j^T=BB^T}.
$$

(iii) $v=w+(v-w)$、$w\perp(v-w)$ なので

$$
\|v\|^2=\|w\|^2+\|v-w\|^2\ge\|w\|^2.
$$

両辺の平方根をとればよい。

