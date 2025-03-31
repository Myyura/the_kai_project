---
sidebar_label: "2022年1月実施 専門科目I 問題1"
sidebar_position: 2
tags:
  - Hiroshima-University
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

## **Kai** 
### (1)

$$
A = A^2
$$

$$
A = E \text{ or } O
$$

$$
\begin{aligned}
&\begin{vmatrix}
1-\lambda & & & \\
 & 1-\lambda & & \\
 & & \ddots & \\
 & & & 1-\lambda \\
\end{vmatrix} = 0&,
\begin{vmatrix}
-\lambda & & \\
 & -\lambda & \\
 & & -\lambda \\
\end{vmatrix} = 0 \\
&\text{all } \lambda = 1
&\text{all } \lambda = 0
\end{aligned}
$$

### (2)
Assume that $B$ is an invertible matrix, w.l.o.g we assume that $k = 2$, then we have

$$
\left\{
\begin{aligned}
&BB^{-1} = E \\
&B^2 = O
\end{aligned}
\right.
$$

$$
\begin{aligned}
B \cdot B \cdot B ^{-1} &= O \cdot B^{-1} \\
B \cdot E &= O \\
B &= O
\end{aligned}
$$

which is contradictory to the fact that $B \neq O$.
Therefore, $B$ is not an invertible matirx.

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