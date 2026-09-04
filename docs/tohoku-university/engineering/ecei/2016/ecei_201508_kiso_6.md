---
sidebar_label: 2015年8月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Physics.Quantum-Mechanics.Pauli-Matrices
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 基礎科目 問題6 物理基礎2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

パウリ行列
$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
$$
に関して，以下の問に答えよ。$i$ は虚数単位である。

(1) $\sigma_x$ の固有値と対応する固有ベクトルを全て求めよ。

(2) $\sigma_j\sigma_k=-\sigma_k\sigma_j$（$j,k=x,y,z;\ j\ne k$）を示せ。

(3) $(\boldsymbol n\cdot\boldsymbol\sigma)^2=I$ を示せ。但し，$I$ は単位行列であり，$\boldsymbol\sigma=(\sigma_x\ \sigma_y\ \sigma_z)$ は $\sigma_x,\sigma_y,\sigma_z$ を成分とするベクトルであり，$\boldsymbol n=(n_x\ n_y\ n_z)$ は実数 $n_x,n_y,n_z$ を成分とする単位ベクトルであり，$\boldsymbol n\cdot\boldsymbol\sigma=n_x\sigma_x+n_y\sigma_y+n_z\sigma_z$ である。

(4) 次の関係式を証明せよ：
$$
\exp\left(-i\frac{\boldsymbol n\cdot\boldsymbol\sigma}{2}\theta\right)
=I\cos\frac\theta2-i(\boldsymbol n\cdot\boldsymbol\sigma)\sin\frac\theta2.
$$
ここで，$\theta$ は任意の実数である。但し，行列の指数関数は次のように定義される：
$$
\exp(X)=\sum_{n=0}^{\infty}\frac1{n!}X^n.
$$
ここで，$X$ は任意の正方行列であり，$X^0$ は単位行列 $I$ を表すものとする。

(5) $(U_1)^{-1}(\boldsymbol n_1\cdot\boldsymbol\sigma)U_1$ と $(U_2)^{-1}(\boldsymbol n_1\cdot\boldsymbol\sigma)U_2$ をパウリ行列の線形結合で表せ。ここで，
$$
U_l=\exp\left(-i\frac{\boldsymbol n_l\cdot\boldsymbol\sigma}{2}\theta\right)\quad(l=1,2),\qquad
\boldsymbol n_1=(0\ 0\ 1),\quad\boldsymbol n_2=(1\ 0\ 0)
$$
である。但し，$(U_l)^{-1}$ は $U_l$ の逆行列である。

### 题目描述

给定泡利矩阵

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

1. 求 $\sigma_x$ 的全部特征值及相应特征向量。
2. 证明 $\sigma_j\sigma_k=-\sigma_k\sigma_j$（$j\ne k$）。
3. 对实单位向量 $\boldsymbol n$，证明 $(\boldsymbol n\cdot\boldsymbol\sigma)^2=I$。
4. 由矩阵指数的幂级数定义证明
   

$$
e^{-i\theta\boldsymbol n\cdot\boldsymbol\sigma/2}=I\cos\frac\theta2-i(\boldsymbol n\cdot\boldsymbol\sigma)\sin\frac\theta2.
$$

5. 令 $U_j=e^{-i\theta\boldsymbol n_j\cdot\boldsymbol\sigma/2}$，$\boldsymbol n_1=(0,0,1)$、$\boldsymbol n_2=(1,0,0)$。把 $U_1^{-1}(\boldsymbol n_1\cdot\boldsymbol\sigma)U_1$ 与 $U_2^{-1}(\boldsymbol n_1\cdot\boldsymbol\sigma)U_2$ 写成泡利矩阵的线性组合。

## **Kai**

### (1)

$\det(\lambda I-\sigma_x)=\lambda^2-1$。两组归一化特征向量为

$$
\boxed{\lambda=1:\ \frac1{\sqrt2}\binom11,\qquad\lambda=-1:\ \frac1{\sqrt2}\binom1{-1}.}
$$

相应非零倍数给出全部特征向量。

### (2)

直接相乘得 $\sigma_x\sigma_y=i\sigma_z$、$\sigma_y\sigma_z=i\sigma_x$、$\sigma_z\sigma_x=i\sigma_y$；交换次序后符号相反，结论成立。

### (3)

由 $\sigma_j^2=I$ 和 (2)，

$$
(\boldsymbol n\cdot\boldsymbol\sigma)^2=\sum_jn_j^2I+\sum_{j<k}n_jn_k(\sigma_j\sigma_k+\sigma_k\sigma_j)=I.
$$

### (4)

令 $N=\boldsymbol n\cdot\boldsymbol\sigma$。由 $N^{2k}=I,N^{2k+1}=N$，将指数级数分为偶数项和奇数项：

$$
e^{-i\theta N/2}=I\sum_{k\ge0}\frac{(-1)^k(\theta/2)^{2k}}{(2k)!}-iN\sum_{k\ge0}\frac{(-1)^k(\theta/2)^{2k+1}}{(2k+1)!},
$$

即得所证式。

### (5)

$U_1$ 与 $\sigma_z$ 可交换，故

$$
\boxed{U_1^{-1}\sigma_zU_1=\sigma_z.}
$$

令 $c=\cos(\theta/2),s=\sin(\theta/2)$，则

$$
U_2^{-1}\sigma_zU_2=(cI+is\sigma_x)\sigma_z(cI-is\sigma_x)
=(c^2-s^2)\sigma_z+2cs\sigma_y.
$$

因此

$$
\boxed{U_2^{-1}\sigma_zU_2=\cos\theta\,\sigma_z+\sin\theta\,\sigma_y.}
$$
