---
sidebar_label: 2022年1月実施 専門科目I 問題1
tags:
  - Hiroshima-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年1月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
$A,B,C,P,Q$ を $n$ 次の正方行列とする。また, $E$ と $O$ それぞれ $n$ 次の単位行列と零行列とする。

(1) $A$ が $A^2=A$ を満たすとき, $A$ の固有値はすべて $0$ または $1$ であることを証明せよ。

(2) $B \neq O$ とし, ある整数 $k \ge 2$ に対して $B^k = O$ が成り立つとする。このとき, $B$ は正則行列でないことを証明せよ。

(3) $n$ 次正方行列 $M = [m_{ij}]$ のトレースを , $\text{tr}M = \sum_{i=1}^n m_{ii}$ と定義する。 すべての $n$ 次正方行列 $X$ に対して $\text{tr}(CX) = 0$ ならば $C = O$ であることを証明せよ。

(4) $PQ - QP = E$ となるような正方行列 $P,Q$ は存在しないことを証明せよ。

---------------------------

Let $A, B, C, P$ and $Q$ be $n$-dimensional square matrices.
Let $E$ and $O$ be $n$-dimensional identity and zero matrices, respectively.

(1) When $A$ satisfies $A^2=A$, prove eigenvalues of $A$ are either $0$ or $1$.

(2) Suppose $B \neq O$ and $B^k = O$ for some integer $k \ge 2$. Prove $B$ is not an invertible matrix.

(3) The trace of an $n$-dimensional square matrix $M=[m_{ij}]$ is defined by $\text{tr}M = \sum_{i=1}^n m_{ii}$.
Prove $C=O$ when $\text{tr}(CX) = 0$ for any $n$-dimensional square matrix $X$.

(4) Prove that there are no square matrices $P,Q$ such that $PQ-QP=E$.

### 题目描述

设 $A,B,C,P,Q$ 均为 $n$ 阶方阵，$E$ 和 $O$ 分别为 $n$ 阶单位矩阵与零矩阵。

1. 若 $A^2=A$，证明 $A$ 的每个特征值都是 $0$ 或 $1$。
2. 设 $B\ne O$，且对某个整数 $k\ge2$ 有 $B^k=O$；证明 $B$ 不可逆。
3. 对 $n$ 阶方阵 $M=[m_{ij}]$，定义

   $$
   \operatorname{tr}M=\sum_{i=1}^n m_{ii}.
   $$

   若对每个 $n$ 阶方阵 $X$ 都有 $\operatorname{tr}(CX)=0$，证明 $C=O$。
4. 证明不存在满足 $PQ-QP=E$ 的方阵 $P,Q$。

## **Kai** 
### (1)

Let $Av=\lambda v$ with $v\neq0$. Since $A^2=A$,

$$
\lambda^2v=A^2v=Av=\lambda v.
$$

Hence $\lambda(\lambda-1)=0$, so every eigenvalue satisfies

$$
\boxed{\lambda=0\ \text{or}\ 1}.
$$

### (2)
If $B$ were invertible, multiplying $B^k=O$ by $(B^{-1})^k$ would give

$$
E=(B^{-1})^kB^k=O,
$$

a contradiction. Therefore, $B$ is not invertible.

### (3)
Assume that $C \neq O$, i.e., there exists an non-zero element $c_{ij}$ of $C$.

Consider a standard basis matrix $E_{ij}$ (The matrix $E_{ij}$ has $1$ at $(i,j)$ and $0$ at all other positions).

Then we have

$$
\text{tr} (CE_{ji}) = c_{ij} \neq 0
$$

which is a contradiction.

### (4)
Since $\text{tr} (PQ) = \text{tr} (QP)$, we have

$$
\text{tr} (PQ - QP) = \text{tr} (PQ) - \text{tr} (QP) = 0 \neq \text{tr} (E)
$$

Therefore, there are no square matrices $P, Q$ such that $PQ - QP = E$.
