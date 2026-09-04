---
sidebar_label: 2017年8月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Simultaneous-Diagonalization-of-Commuting-Operators
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Complex-Analysis.Residue-Theorem
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 基礎科目 問題6 数学基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

(1) 対称行列 $A=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$ および $B=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}$ について考える。次の問に答えよ。

(a) $A$ および $B$ の固有値をすべて求めよ。

(b) $A$ および $B$ の各々の固有値に対応する固有空間の次元を求めよ。

(c) $D$ および $F$ を 3 次対角行列とする。$P^{-1}AP=D$ および $P^TBP=F$ を同時に満たす直交行列 $P$ と、対角行列 $D$ および $F$ を求めよ。ここで、$P^T$ は $P$ の転置行列を表す。

(2) $n$ 次正方行列 $G$ および $H$ を考える。$G$ および $H$ が共通の正則行列によって対角化されるとき、$GH=HG$ であることを示せ。

(3) 次の問に答えよ。

(a) 関数 $f(t)$ のラプラス変換を $\mathcal L[f(t)]=F(s)$ とする。$\mathcal L[f(t-a)]=F(s)e^{-as}$ であることを示せ。ただし、$t<0$ のとき、$f(t)=0$ とする。

(b) 関数

$$
g_1(t)=\begin{cases}t&(0\le t<1)\\1&(1\le t<2)\\t-1&(2\le t)\end{cases}
$$

のラプラス変換を求めよ。

(c) 留数定理を用いて関数 $G_2(s)=\dfrac1{(s+1)(s+2)^2}$ の逆ラプラス変換を求めよ。

### 题目描述

1. 设
   

$$
A=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\quad
   B=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}.
$$

   (a) 求两矩阵全部特征值；(b) 求各特征空间的维数；(c) 求正交矩阵 $P$ 及对角矩阵 $D,F$，使 $P^{-1}AP=D,P^TBP=F$。
2. 证明：若两个 $n\times n$ 方阵 $G,H$ 可由同一可逆矩阵对角化，则 $GH=HG$。
3. (a) 设 $\mathcal L[f](s)=F(s)$，$f(t)=0$（$t<0$），证明对时间延迟 $a\ge0$ 有 $\mathcal L[f(t-a)]=e^{-as}F(s)$。
   (b) 求
   

$$
g_1(t)=\begin{cases}t,&0\le t<1,\\1,&1\le t<2,\\t-1,&t\ge2\end{cases}
$$

   的 Laplace 变换；(c) 用留数求 $G_2(s)=1/((s+1)(s+2)^2)$ 的逆 Laplace 变换。

## **Kai**

### (1)

$A$ 的特征值为 $1,-1$，特征空间分别为

$$
E_A(1)=\operatorname{span}\{(1,1,0)^T,(0,0,1)^T\},\quad
E_A(-1)=\operatorname{span}\{(1,-1,0)^T\},
$$

维数分别为 $2,1$。

$B=J-I$，其中 $J$ 全部元素为 $1$，故

$$
E_B(2)=\operatorname{span}\{(1,1,1)^T\},\quad
E_B(-1)=\{x:x_1+x_2+x_3=0\},
$$

维数分别为 $1,2$。

取公共正交归一特征向量为列：

$$
\boxed{P=\begin{pmatrix}
1/\sqrt3&1/\sqrt6&1/\sqrt2\\
1/\sqrt3&1/\sqrt6&-1/\sqrt2\\
1/\sqrt3&-2/\sqrt6&0
\end{pmatrix}},
$$

$$
\boxed{D=\operatorname{diag}(1,1,-1),\qquad F=\operatorname{diag}(2,-1,-1)}.
$$

### (2)

设 $G=S\Lambda S^{-1},H=S\Gamma S^{-1}$，$\Lambda,\Gamma$ 为对角矩阵，则

$$
GH=S\Lambda\Gamma S^{-1}=S\Gamma\Lambda S^{-1}=HG.
$$

### (3)

**(a)** 令 $u=t-a$，利用 $f(u)=0$（$u<0$），得

$$
\int_0^\infty e^{-st}f(t-a)\,dt=e^{-as}\int_{-a}^\infty e^{-su}f(u)\,du=e^{-as}F(s).
$$

**(b)** 用阶跃函数 $u$ 写成

$$
g_1(t)=t-(t-1)u(t-1)+(t-2)u(t-2),
$$

故 $\boxed{G_1(s)=(1-e^{-s}+e^{-2s})/s^2}$（$\Re s>0$）。

**(c)** 对 $e^{st}G_2(s)$，$s=-1$ 的留数为 $e^{-t}$，$s=-2$ 的留数为

$$
\left[\frac d{ds}\frac{e^{st}}{s+1}\right]_{s=-2}=-(t+1)e^{-2t}.
$$

因此 $\boxed{g_2(t)=e^{-t}-(1+t)e^{-2t}\quad(t\ge0)}$。
