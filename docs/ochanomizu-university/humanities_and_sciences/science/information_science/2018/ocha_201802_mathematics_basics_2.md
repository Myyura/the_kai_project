---
sidebar_label: "2018年2月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Invariant-Subspace-and-Restricted-Operator
  - Mathematics.Linear-Algebra.Projection-Operator
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年2月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 【1】

$f:V\to V$ を線形空間 $V$ から $V$ への線形写像とする。また、$v\in V$ を

$$
f^k(v)=0,\qquad f^{k-1}(v)\ne0
$$

を満たすベクトルとする。ただし、$k$ はある自然数であり、$f^n(v)$ は $v$ に写像 $f$ を $n$ 回作用させたものである。次の各項目を示せ。

#### (1)

$k$ 個のベクトル $v,f(v),\ldots,f^{k-1}(v)$ は線形独立である。

#### (2)

$k$ 個のベクトル $v,f(v),\ldots,f^{k-1}(v)$ が生成する部分空間を $W$、$W$ の任意の要素を $w$ とする。このとき、$f(w)\in W$ である。

#### (3)

$W$ の任意の要素 $w$ に対して、$f^k(w)=0$ である。

### 【2】

$3$ 次元空間 $\mathbb R^3$ において、$P\subset\mathbb R^3$ を

$$
x-y-2z=0
$$

によって表される平面、

$$
L\subset\mathbb R^3
\quad\text{を}\quad
\begin{cases}
x=0,\\
y=-z
\end{cases}
$$

によって表される直線であるとする。以下の各問に答えよ。

#### (1)

点 $(x,y,z)^T\in L$ の $P$ への正射影 $(x',y',z')^T$ を求めよ。

#### (2)

点 $(x,y,z)^T\in P$ の $L$ への正射影 $(x',y',z')^T$ を求めよ。

### 题目描述

1. 已知线性映射的向量 $v$ 满足 $f^k(v)=0$、$f^{k-1}(v)\ne0$，证明其生成的长度为 $k$ 的链线性无关、生成空间在 $f$ 下不变，且 $f^k$ 在该空间上为零。
2. 在 $\mathbb R^3$ 中，求直线 $L:x=0,\ y=-z$ 上的点到平面 $P:x-y-2z=0$ 的正射影，以及平面上点到该直线的正射影。

## **Kai**

### 【1】

#### (1)

$$
\sum_{i=0}^{k-1}a_i f^i(v)=0
$$

と仮定する。非零の係数があるなら、その添字の最小値を $j$ とする。両辺に $f^{k-1-j}$ を作用させると、$i>j$ の項は $f^k(v)=0$ により消え、

$$
a_jf^{k-1}(v)=0
$$

を得る。$f^{k-1}(v)\ne0$ だから $a_j=0$ となり矛盾する。よって

$$
\boxed{v,f(v),\ldots,f^{k-1}(v)\text{ は線形独立である。}}
$$

#### (2)

$w\in W$ を

$$
w=\sum_{i=0}^{k-1}a_i f^i(v)
$$

と表せば

$$
f(w)=\sum_{i=0}^{k-2}a_i f^{i+1}(v)\in W.
$$

したがって $\boxed{f(W)\subset W}$ である。

#### (3)

上の表示から

$$
f^k(w)=\sum_{i=0}^{k-1}a_i f^{k+i}(v)=0.
$$

よって $\boxed{f^k|_W=0}$ である。

### 【2】

平面 $P$ の法線ベクトルを

$$
n=(1,-1,-2)^T
$$

とする。

#### (1)

$p=(x,y,z)^T\in L$ の $P$ への正射影は

$$
p'=p-\frac{p\cdot n}{n\cdot n}n
=p-\frac{x-y-2z}{6}
\begin{pmatrix}1\\-1\\-2\end{pmatrix}.
$$

$p\in L$ より $(x,y,z)=(0,t,-t)$ と書けるので

$$
\boxed{
\begin{pmatrix}x'\\y'\\z'\end{pmatrix}
=\begin{pmatrix}-t/6\\7t/6\\-2t/3\end{pmatrix}
=\begin{pmatrix}-y/6\\7y/6\\-2y/3\end{pmatrix}}.
$$

#### (2)

$L$ の方向ベクトルを $d=(0,1,-1)^T$ とする。$p=(x,y,z)^T\in P$ の $L$ への正射影は

$$
p'=\frac{p\cdot d}{d\cdot d}d
=\frac{y-z}{2}\begin{pmatrix}0\\1\\-1\end{pmatrix}.
$$

したがって

$$
\boxed{
\begin{pmatrix}x'\\y'\\z'\end{pmatrix}
=\begin{pmatrix}0\\(y-z)/2\\(z-y)/2\end{pmatrix}}.
$$
