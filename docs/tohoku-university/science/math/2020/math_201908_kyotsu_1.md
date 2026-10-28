---
sidebar_label: "2019年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Minimal-Polynomial
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#688fb428-a61c-4577-966d-1fb5fe361414) refined with GPT 6 Astra)

## **Description**

$\mathbb R$ は実数全体のなす集合を表す。

$n$ を自然数とし、$V$ を $X=\{1,2,\ldots,2n\}$ から $\mathbb R$ への写像全体のなす実ベクトル空間とする。ただし、$f,g\in V$ と $c\in\mathbb R$ に対し、和 $f+g$ とスカラー倍 $cf$ は

$$
(f+g)(x)=f(x)+g(x),\qquad (cf)(x)=cf(x)\qquad(x\in X)
$$

と定める。また、$x\in X$ に対して $v_x\in V$ を

$$
v_x(y)=\begin{cases}1&(y=x)\\0&(y\ne x)\end{cases}\qquad(y\in X)
$$

と定め、写像 $T:V\to V$ を

$$
(T(f))(x)=\begin{cases}\displaystyle\sum_{y=n+1}^{2n}f(y)&(x\le n)\\[4pt]\displaystyle\sum_{y=1}^{n}f(y)&(x\ge n+1)\end{cases}\qquad(x\in X)
$$

と定める。以下の問いに答えよ。

(1) $v_1,\ldots,v_{2n}$ は $V$ の基底であることを示せ。

(2) $T$ は線形写像であることを示せ。

(3) $V$ の基底 $v_1,\ldots,v_{2n}$ に関する $T$ の表現行列 $A$ を求めよ。また、$n\ge2$ のとき $A$ の最小多項式は $t^3-n^2t\in\mathbb R[t]$ であることを示せ。

### 题目描述

$\mathbb R$ 表示实数集。

设 $n$ 为自然数，$V$ 为从 $X=\{1,2,\ldots,2n\}$ 到 $\mathbb R$ 的所有映射组成的实向量空间。对 $f,g\in V$ 和 $c\in\mathbb R$，加法与数乘定义为

$$
(f+g)(x)=f(x)+g(x),\qquad (cf)(x)=cf(x)\qquad(x\in X).
$$

对 $x\in X$，定义 $v_x\in V$ 为

$$
v_x(y)=\begin{cases}1&(y=x)\\0&(y\ne x)\end{cases}\qquad(y\in X).
$$

定义映射 $T:V\to V$ 为

$$
(T(f))(x)=\begin{cases}\displaystyle\sum_{y=n+1}^{2n}f(y)&(x\le n)\\[4pt]\displaystyle\sum_{y=1}^{n}f(y)&(x\ge n+1)\end{cases}\qquad(x\in X).
$$

回答下列问题。

(1) 证明 $v_1,\ldots,v_{2n}$ 是 $V$ 的一组基。

(2) 证明 $T$ 是线性映射。

(3) 求 $T$ 关于基 $v_1,\ldots,v_{2n}$ 的表示矩阵 $A$，并证明当 $n\ge2$ 时，$A$ 的最小多项式为 $t^3-n^2t\in\mathbb R[t]$。

## **Kai**

### (1)

$f\in V$ は各点での値によって定まり、

$$
f=\sum_{j=1}^{2n}f(j)v_j
$$

と表せる。また $\sum_jc_jv_j=0$ を $k\in X$ で評価すると $c_k=0$ となる。よって $v_1,\ldots,v_{2n}$ は $V$ の基底である。

### (2)

任意の $f,g\in V$ と $a,b\in\mathbb R$ に対し、定義中の和の線形性より、全ての $x\in X$ について

$$
T(af+bg)(x)=aT(f)(x)+bT(g)(x).
$$

したがって $T$ は線形写像である。

### (3)

$j\le n$ のとき $T(v_j)=\sum_{i=n+1}^{2n}v_i$、$j>n$ のとき $T(v_j)=\sum_{i=1}^{n}v_i$ である。全成分が $1$ の $n$ 次行列を $J_n$ と書けば、求める表現行列は

$$
A=\begin{pmatrix}O&J_n\\J_n&O\end{pmatrix}.
$$

以下では $n\ge2$ とする。$J_n^2=nJ_n$ より $A^3=n^2A$ が成り立つ。一方、$\mathbf1={}^t(1,\ldots,1)\in\mathbb R^n$ に対して

$$
A\begin{pmatrix}\mathbf1\\\mathbf1\end{pmatrix}
=n\begin{pmatrix}\mathbf1\\\mathbf1\end{pmatrix},\qquad
A\begin{pmatrix}\mathbf1\\-\mathbf1\end{pmatrix}
=-n\begin{pmatrix}\mathbf1\\-\mathbf1\end{pmatrix}.
$$

また $n\ge2$ なので、例えば $w={}^t(1,-1,0,\ldots,0)$ は非零で $J_nw=0$ を満たし、$A{}^t(w,0)=0$ となる。したがって $n,-n,0$ は全て固有値であり、最小多項式はこれらを根にもつ。以上から

$$
m_A(t)=t(t-n)(t+n)=t^3-n^2t.
$$

## **Reference**

- [東北大学原問題の公開保存版（2020年度・共通問題、kyotsu2020(R2).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度の解答](https://note.com/normalmath/n/n89152917de11#688fb428-a61c-4577-966d-1fb5fe361414)
