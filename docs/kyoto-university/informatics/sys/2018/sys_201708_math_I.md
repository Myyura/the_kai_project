---
sidebar_label: 2017年8月実施 数学 I
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Orthogonal-Complement
---

# 京都大学 情報学研究科 システム科学専攻 2017年8月実施 数学 I

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1

行列

$$
A=\begin{pmatrix}1&-1&1\\1&0&-1\\-1&0&3\end{pmatrix}
$$

について答えよ。

(i) $A=PJP^{-1}$ となる正則行列 $P$ と、次の形の行列 $J$ が存在する。実数 $a,b$ と $P$ を求めよ。

$$
J=\begin{pmatrix}a&0&0\\0&b&1\\0&0&b\end{pmatrix}.
$$

(ii) $J^7,A^7$ を求めよ。

### 問2

3次元実数ベクトル空間の部分空間を

$$
S=\left\{\begin{pmatrix}x\\y\\z\end{pmatrix}\ \middle|\ 2x=2y=-z\right\}
$$

とする。

(i) $S$ の基底と $S$ への射影行列 $Q$ を求めよ。

(ii) $S$ の直交補空間 $T$ の基底と $T$ への射影行列 $R$ を求めよ。

(iii) $Q$ の行列式、$R$ の階数、$Q^2,QR$ を求めよ。

#### 题目描述

**问1** 对矩阵

$$
A=\begin{pmatrix}1&-1&1\\1&0&-1\\-1&0&3\end{pmatrix}
$$

（i）已知存在可逆矩阵 $P$ 使 $A=PJP^{-1}$，其中

$$
J=\begin{pmatrix}a&0&0\\0&b&1\\0&0&b\end{pmatrix}.
$$

求实数 $a,b$ 以及 $P$。（ii）求 $J^7,A^7$。

**问2** 在三维实向量空间中定义子空间

$$
S=\{(x,y,z)^T\mid 2x=2y=-z\}.
$$

（i）求 $S$ 的一组基和到 $S$ 的投影矩阵 $Q$。（ii）求 $S$ 的正交补 $T$ 的一组基和到 $T$ 的投影矩阵 $R$。（iii）求 $\det Q,\operatorname{rank}R,Q^2,QR$。


## **Kai**

### 問1

(i) 特性多項式は $(\lambda-2)(\lambda-1)^2$。次のベクトルは

$$
v_1=\begin{pmatrix}1\\0\\1\end{pmatrix},\quad
v_2=\begin{pmatrix}2\\1\\1\end{pmatrix},\quad
v_3=\begin{pmatrix}3\\0\\2\end{pmatrix}
$$

$Av_1=2v_1$、$Av_2=v_2$、$(A-I)v_3=v_2$ を満たす。よって

$$
\boxed{a=2,\quad b=1,\quad P=\begin{pmatrix}1&2&3\\0&1&0\\1&1&2\end{pmatrix}}.
$$

$\det P=-1\ne0$ であり $AP=PJ$ となる。

(ii) 大きさ2の Jordan ブロックは $(I+N)^7=I+7N$ ($N^2=0$) を満たすので

$$
\boxed{J^7=\begin{pmatrix}128&0&0\\0&1&7\\0&0&1\end{pmatrix}}.
$$

$A^7=PJ^7P^{-1}$ から

$$
\boxed{A^7=\begin{pmatrix}-239&113&367\\7&-6&-7\\-247&120&375\end{pmatrix}}.
$$

### 問2

(i) $w=(1,1,-2)^T$ とすると $S=\operatorname{span}\{w\}$ であり

$$
\boxed{Q=\frac{ww^T}{w^Tw}=\frac16\begin{pmatrix}1&1&-2\\1&1&-2\\-2&-2&4\end{pmatrix}}.
$$

(ii) $T=\{(x,y,z)^T\mid x+y-2z=0\}$ の基底として $(-1,1,0)^T,(2,0,1)^T$ がとれる。また

$$
\boxed{R=I-Q=\frac16\begin{pmatrix}5&-1&2\\-1&5&2\\2&2&2\end{pmatrix}}.
$$

(iii) $Q$ は階数1の直交射影なので

$$
\boxed{\det Q=0,\quad \operatorname{rank}R=2,\quad Q^2=Q,\quad QR=0}.
$$

