---
sidebar_label: "2024年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Commuting-Matrices
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#5d90e881-fab5-490e-9496-74025b3b5d0c) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。

$n$ は正の整数とし、$M_n(\mathbb R)$ で $n$ 次実正方行列全体のなす実ベクトル空間を表す。$A\in M_n(\mathbb R)$ に対し、

$$
Z(A)=\{X\in M_n(\mathbb R)\mid AX=XA\}
$$

とおく。以下の問いに答えよ。

(1) 任意の $A\in M_n(\mathbb R)$ に対し、$Z(A)$ は $M_n(\mathbb R)$ の部分ベクトル空間であることを示せ。

(2) $n=2$、$A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ のとき、$Z(A)$ の次元を求めよ。

(3) $A\in M_n(\mathbb R)$ が相異なる $n$ 個の実固有値を持つとき、$Z(A)$ の次元を求めよ。

### 题目描述

试卷共 $4$ 道题，全部作答。

设 $n$ 为正整数，$M_n(\mathbb R)$ 表示全体 $n$ 阶实方阵构成的实向量空间。对 $A\in M_n(\mathbb R)$，令

$$
Z(A)=\{X\in M_n(\mathbb R)\mid AX=XA\}.
$$

回答下列问题。

(1) 证明对任意 $A\in M_n(\mathbb R)$，$Z(A)$ 都是 $M_n(\mathbb R)$ 的向量子空间。

(2) 当 $n=2$、$A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ 时，求 $Z(A)$ 的维数。

(3) 当 $A\in M_n(\mathbb R)$ 有 $n$ 个互不相同的实特征值时，求 $Z(A)$ 的维数。

## **Kai**

### (1)

$O\in Z(A)$ である。また $X,Y\in Z(A)$、$s,t\in\mathbb R$ に対して

$$
A(sX+tY)=sAX+tAY=sXA+tYA=(sX+tY)A.
$$

よって $Z(A)$ は $M_n(\mathbb R)$ の部分空間である。

### (2)

$X=\begin{pmatrix}x&y\\z&w\end{pmatrix}$ とおくと

$$
AX-XA=\begin{pmatrix}0&-y\\z&0\end{pmatrix}.
$$

したがって $Z(A)$ は全ての実対角行列からなり、

$$
Z(A)=\mathbb R\begin{pmatrix}1&0\\0&0\end{pmatrix}
\oplus\mathbb R\begin{pmatrix}0&0\\0&1\end{pmatrix},\qquad
\dim Z(A)=2.
$$

### (3)

相異なる実固有値を $\lambda_1,\ldots,\lambda_n$ とする。ある $P\in\mathrm{GL}_n(\mathbb R)$ により

$$
P^{-1}AP=D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

と対角化できる。写像 $X\mapsto P^{-1}XP$ は $Z(A)$ から $Z(D)$ への線形同型である。$Y=(y_{ij})$ に対し

$$
DY=YD\iff (\lambda_i-\lambda_j)y_{ij}=0\quad(1\le i,j\le n).
$$

固有値が相異なるので、これは $Y$ が対角行列であることと同値である。ゆえに

$$
\dim Z(A)=\dim Z(D)=n.
$$

## **Reference**

- [東北大学公式問題（2025年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_kyotsu.pdf#page=2)
- [L^2：2025年度の解答](https://note.com/normalmath/n/n89152917de11#5d90e881-fab5-490e-9496-74025b3b5d0c)
