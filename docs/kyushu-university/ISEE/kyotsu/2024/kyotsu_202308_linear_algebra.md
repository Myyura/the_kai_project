---
sidebar_label: 2023年8月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年8月実施 線形代数

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
$m \times n$ 実行列 $A$ と $m$ 次元実ベクトル $\boldsymbol{b}$ に対して、

$$
S=\{\boldsymbol{x}\in\mathbb R^n\mid A\boldsymbol{x}=\boldsymbol b\},
\qquad f(\boldsymbol{x})=A\boldsymbol{x}
$$

とする。部分空間の判定条件 C1～C3 は証明なしに用いてよい。

(1) 次の $A$ に対し、$\ker f$ の次元と基底を1組求めよ。

$$
A=\begin{pmatrix}
2&0&2&0\\
0&8&24&24\\
0&2&6&6
\end{pmatrix}.
$$

(2) 一般に $\ker f$ が $\mathbb R^n$ の部分空間であることを示せ。

(3) $S$ が $\mathbb R^n$ の部分空間であるならば $\boldsymbol b=\boldsymbol0$ であることを示せ。

(4) $S$ が $\mathbb R^n$ の部分空間、$A$ が正方行列であるとする。$A$ が正則ならば $S=\{\boldsymbol0\}$ であることを示せ。

### 题目描述

给定 $m\times n$ 实矩阵 $A$ 和 $\boldsymbol b\in\mathbb R^m$，定义

$$
S=\{\boldsymbol x\in\mathbb R^n\mid A\boldsymbol x=\boldsymbol b\},
\qquad f(\boldsymbol x)=A\boldsymbol x.
$$

1. 对上述给定的 $A$，求 $\ker f$ 的维数及一组基。
2. 证明 $\ker f$ 是 $\mathbb R^n$ 的子空间。
3. 证明若 $S$ 是 $\mathbb R^n$ 的子空间，则 $\boldsymbol b=\boldsymbol0$。
4. 再设 $A$ 为方阵且可逆，证明 $S=\{\boldsymbol0\}$。

## **Kai**

### (1)

$\boldsymbol{x}=(p,q,r,s)^{\mathsf T}$ とくと、$A\boldsymbol{x}=\boldsymbol0$ より

$$
p=-r,\qquad q=-3r-3s.
$$

したがって

$$
\ker f
=\left\{
r\begin{pmatrix}-1\\-3\\1\\0\end{pmatrix}
+s\begin{pmatrix}0\\-3\\0\\1\end{pmatrix}
\middle|r,s\in\mathbb R
\right\}.
$$

よって $\dim\ker f=2$ であり、例えば

$$
\begin{pmatrix}-1\\-3\\1\\0\end{pmatrix},
\quad
\begin{pmatrix}0\\-3\\0\\1\end{pmatrix}
$$

が基底である。

### (2)

$A\boldsymbol0=\boldsymbol0$ より $\boldsymbol0\in\ker f$。また $\boldsymbol u,\boldsymbol v\in\ker f$ と $c\in\mathbb R$ に対し、

$$
A(\boldsymbol u+\boldsymbol v)=A\boldsymbol u+A\boldsymbol v=\boldsymbol0,
\qquad
A(c\boldsymbol u)=cA\boldsymbol u=\boldsymbol0.
$$

よって C1～C3 が成り立ち、$\ker f$ は $\mathbb R^n$ の部分空間である。

### (3)

$S$ が部分空間ならば $\boldsymbol0\in S$ であるから、

$$
\boldsymbol b=A\boldsymbol0=\boldsymbol0.
$$

### (4)

(3) より $\boldsymbol b=\boldsymbol0$。$\boldsymbol x\in S$ ならば $A\boldsymbol x=\boldsymbol0$ である。$A$ は正則なので

$$
\boldsymbol x=A^{-1}\boldsymbol0=\boldsymbol0.
$$

また $\boldsymbol0\in S$ であるから、$S=\{\boldsymbol0\}$ である。
