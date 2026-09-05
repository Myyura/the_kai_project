---
sidebar_label: "2023年8月実施 数1 [3]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 数1 [3]

## **Author**
Codex

## **Description**

### 題意の要約

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e430ba234e241d162a59ab76f6efe083.pdf)

次の行列について考える。

$$
B=\begin{pmatrix}-1&4&0\\-2&5&0\\-1&3&1\end{pmatrix}.
$$

1. 固有値を $\mu_1\ne\mu_2=\mu_3$ と区別して求める。
2. 定数倍を同一視すると独立な固有ベクトルは二つである。
   $\mu_1$ に対応する $w_1$ と，$\mu_2$ に対応する $w_2$ を，いずれも第3成分が $1$ となるように求める。
3. 単位行列を $I$ として，$(B-\mu_2I)w_3=w_2$ を満たす $w_3$ を求める。
4. $w_i=(w_i^1,w_i^2,w_i^3)^T$，$W=(w_1\ w_2\ w_3)$ としたときの $\widetilde B=W^{-1}BW$ を計算する。
5. $B^{2023}$ を求める。必要なら $P=2^{2023}$，$Q=3^{2023}$ の記号を使ってよい。

## **Kai**

### 1

$$
\det(\mu I-B)=(\mu-1)\{(\mu+1)(\mu-5)+8\}
=(\mu-3)(\mu-1)^2.
$$

よって $\boxed{\mu_1=3,\quad\mu_2=\mu_3=1}$。

### 2

$(B-3I)w_1=0$ から三成分が等しくなり，$(B-I)w_2=0$ から第1・第2成分が $0$ となる。したがって

$$
\boxed{w_1=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
w_2=\begin{pmatrix}0\\0\\1\end{pmatrix}}.
$$

### 3

$w_3=(u,v,z)^T$ とすると，条件は $-2u+4v=0$，$-u+3v=1$ である。
よって $u=2,v=1$，$z$ は任意であり，例えば

$$
\boxed{w_3=\begin{pmatrix}2\\1\\0\end{pmatrix}}
$$

と取れる。

### 4

上で選んだ $w_3$ に対して

$$
W=\begin{pmatrix}1&0&2\\1&0&1\\1&1&0\end{pmatrix},\qquad
W^{-1}=\begin{pmatrix}-1&2&0\\1&-2&1\\1&-1&0\end{pmatrix}.
$$

$Bw_1=3w_1$，$Bw_2=w_2$，$Bw_3=w_2+w_3$ より

$$
\boxed{\widetilde B=\begin{pmatrix}3&0&0\\0&1&1\\0&0&1\end{pmatrix}}.
$$

### 5

右下の Jordan ブロックを $I_2+N$ とすると $N^2=0$ なので，
$(I_2+N)^n=I_2+nN$。したがって非負整数 $n$ に対し

$$
B^n=W\begin{pmatrix}3^n&0&0\\0&1&n\\0&0&1\end{pmatrix}W^{-1}
=\begin{pmatrix}
2-3^n&2\cdot3^n-2&0\\
1-3^n&2\cdot3^n-1&0\\
-3^n+n+1&2\cdot3^n-n-2&1
\end{pmatrix}.
$$

$Q=3^{2023}$ とおけば

$$
\boxed{B^{2023}=\begin{pmatrix}
2-Q&2Q-2&0\\1-Q&2Q-1&0\\2024-Q&2Q-2025&1
\end{pmatrix}}.
$$
