---
sidebar_label: 2016年3月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Rotation-Matrix
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 基礎科目 問題6 物理基礎2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 6 に示すように $[111]$ 方向を回転軸とする回転操作 $C_3$（反時計回りに $2\pi/3$ 回転）および $C_3^{-1}$（時計回りに $2\pi/3$ 回転）を考える。$3$ 次元空間中の位置ベクトルを $\boldsymbol r=x\boldsymbol i+y\boldsymbol j+z\boldsymbol k$（$\boldsymbol i,\boldsymbol j,\boldsymbol k$ は $3$ 次元直交座標系の各軸方向の単位ベクトル）とし，関数 $f_m$（$m=1,2,3$）をそれぞれ $f_1(\boldsymbol r)=yz,\ f_2(\boldsymbol r)=zx,\ f_3(\boldsymbol r)=xy$ とする。この時，$C_3f_m(\boldsymbol r)=f_m(C_3^{-1}\boldsymbol r)$，すなわち $C_3f_m(x\boldsymbol i+y\boldsymbol j+z\boldsymbol k)=f_m(y\boldsymbol i+z\boldsymbol j+x\boldsymbol k)$ が成り立つ。以下の問に答えよ。ただし $i$ は虚数単位である。

(1) 以下の式中の $\alpha,\beta,\gamma$ に当てはまる関数を $f_1(\boldsymbol r),f_2(\boldsymbol r),f_3(\boldsymbol r)$ の中から答えよ。
$$
C_3f_1(\boldsymbol r)=\alpha,\quad C_3f_2(\boldsymbol r)=\beta,\quad C_3f_3(\boldsymbol r)=\gamma.
$$

(2) 関数 $f_1,f_2,f_3$ を基底として $C_3$ 操作を表す行列 $D_f$ を求めよ。ただし，$(C_3f_1,C_3f_2,C_3f_3)=(f_1,f_2,f_3)D_f$ である。

(3) 関数 $g_1,g_2,g_3$ を $f_1,f_2,f_3$ の線形結合
$$
g_1=\frac1{\sqrt6}(2f_1-f_2-f_3),\quad g_2=\frac1{\sqrt2}(f_2-f_3),\quad g_3=\frac1{\sqrt3}(f_1+f_2+f_3)
$$
と定義する。$f_1,f_2,f_3$ を $g_1,g_2,g_3$ へ移す基底変換行列 $S$ を求めよ。ただし，$(g_1,g_2,g_3)=(f_1,f_2,f_3)S$ である。

(4) $S$ が直交行列であることを示し，$S$ の逆行列 $S^{-1}$ を求めよ。

(5) 関数 $g_1,g_2,g_3$ を基底とする場合，$C_3$ 操作を表す行列 $D_g$（$=S^{-1}D_fS$）は
$$
D_g=\begin{pmatrix}\cos(2\pi/3)&-\sin(2\pi/3)&0\\\sin(2\pi/3)&\cos(2\pi/3)&0\\0&0&1\end{pmatrix}
$$
と表されることを導け。

(6) 関数 $h_1,h_2,h_3$ を $g_1,g_2,g_3$ の線形結合
$$
h_1=\frac1{\sqrt2}(g_1-ig_2),\quad h_2=\frac1{\sqrt2}(g_1+ig_2),\quad h_3=g_3
$$
と定義する。$g_1,g_2,g_3$ を $h_1,h_2,h_3$ へ移す基底変換行列 $T$ とその逆行列 $T^{-1}$ を求めよ。

(7) 関数 $h_1,h_2,h_3$ を基底とする場合，$C_3$ 操作を表す行列を $D_h$ とする。この時 $C_3$ を $N$ 回繰り返す操作を表す行列 $(D_h)^N$ は
$$
(D_h)^N=\begin{pmatrix}e^{2\pi iN/3}&0&0\\0&e^{-2\pi iN/3}&0\\0&0&1\end{pmatrix}
$$
と表されることを導け。ただし $N$ は $0$ もしくは正の整数である。

### 题目描述

三维空间中，$C_3$ 表示绕 $[111]$ 轴逆时针转动 $2\pi/3$，$C_3^{-1}$ 表示反向转动。对函数采用 $C_3f(\boldsymbol r)=f(C_3^{-1}\boldsymbol r)$，且

$$
C_3^{-1}(x,y,z)=(y,z,x).
$$

令 $f_1=yz,f_2=zx,f_3=xy$。

1. 从 $f_1,f_2,f_3$ 中确定 $C_3f_1,C_3f_2,C_3f_3$。
2. 求矩阵 $D_f$，使 $(C_3f_1,C_3f_2,C_3f_3)=(f_1,f_2,f_3)D_f$。
3. 定义 $g_1=(2f_1-f_2-f_3)/\sqrt6$、$g_2=(f_2-f_3)/\sqrt2$、$g_3=(f_1+f_2+f_3)/\sqrt3$。求换基矩阵 $S$，使 $(g_1,g_2,g_3)=(f_1,f_2,f_3)S$。
4. 证明 $S$ 正交，求 $S^{-1}$。
5. 推导 $D_g=S^{-1}D_fS=\operatorname{diag}(R(2\pi/3),1)$，其中 $R(\phi)=\begin{pmatrix}\cos\phi&-\sin\phi\\\sin\phi&\cos\phi\end{pmatrix}$。
6. 令 $h_1=(g_1-ig_2)/\sqrt2,h_2=(g_1+ig_2)/\sqrt2,h_3=g_3$，求换基矩阵 $T$ 及其逆。
7. 以 $h_j$ 为基底时，证明 $N$ 次转动的矩阵为 $\operatorname{diag}(e^{2\pi iN/3},e^{-2\pi iN/3},1)$，$N\ge0$。

## **Kai**

### (1)–(2)

代入 $(x,y,z)\mapsto(y,z,x)$ 得

$$
C_3f_1=f_2,\qquad C_3f_2=f_3,\qquad C_3f_3=f_1,
$$

故

$$
\boxed{D_f=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.}
$$

### (3)–(4)

按各 $g_j$ 的系数列写得

$$
\boxed{S=\begin{pmatrix}
2/\sqrt6&0&1/\sqrt3\\-1/\sqrt6&1/\sqrt2&1/\sqrt3\\-1/\sqrt6&-1/\sqrt2&1/\sqrt3
\end{pmatrix}.}
$$

三列均为单位向量且两两内积为零，因此 $S^\mathsf TS=I$，$\boxed{S^{-1}=S^\mathsf T}$。

### (5)

直接相乘：

$$
\boxed{D_g=S^\mathsf TD_fS=
\begin{pmatrix}-1/2&-\sqrt3/2&0\\\sqrt3/2&-1/2&0\\0&0&1\end{pmatrix}
=\begin{pmatrix}\cos(2\pi/3)&-\sin(2\pi/3)&0\\\sin(2\pi/3)&\cos(2\pi/3)&0\\0&0&1\end{pmatrix}.}
$$

### (6)

$$
\boxed{T=\begin{pmatrix}1/\sqrt2&1/\sqrt2&0\\-i/\sqrt2&i/\sqrt2&0\\0&0&1\end{pmatrix},\qquad
T^{-1}=T^\dagger=\begin{pmatrix}1/\sqrt2&i/\sqrt2&0\\1/\sqrt2&-i/\sqrt2&0\\0&0&1\end{pmatrix}.}
$$

### (7)

由 $D_h=T^{-1}D_gT$，得

$$
D_h=\operatorname{diag}(e^{2\pi i/3},e^{-2\pi i/3},1).
$$

对角矩阵的幂只需逐项取幂，因此

$$
\boxed{D_h^N=\operatorname{diag}(e^{2\pi iN/3},e^{-2\pi iN/3},1).}
$$
