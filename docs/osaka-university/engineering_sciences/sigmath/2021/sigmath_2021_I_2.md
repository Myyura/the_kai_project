---
sidebar_label: "2021年度 数理科学 I [2]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$a\in\mathbb R$ とし、

$$
A=\begin{pmatrix}-a-2&-3a-3&-a-1\\a+1&3a+2&a+1\\-a-1&-3a-3&-a-2\end{pmatrix}
$$

とおく。(1) $A$ が正則でないための必要十分条件を求めよ。

(2) $A$ が正則でないとき、$B=P^{-1}AP$ を満たす対角行列 $B$ と正則行列 $P$ の組を一つ求めよ。

(3) 自然数 $n$ に対し、$A$ が正則でないときの $A^n$ を求めよ。

## **Kai**

### (1)
$\det A=a$ なので、必要十分条件は $\boxed{a=0}$。

### (2)
$a=0$ において、固有値 $-1$ に対する固有ベクトルとして $(-3,1,0)^T,(-1,0,1)^T$、固有値 $0$ に対して $(1,-1,1)^T$ がとれる。よって

$$
\boxed{P=\begin{pmatrix}-3&-1&1\\1&0&-1\\0&1&1\end{pmatrix},\quad B=\operatorname{diag}(-1,-1,0)}.
$$

$\det P=-1\ne0$ である。

### (3)
$n\ge1$ なら $B^n=(-1)^{n-1}B$。したがって

$$
\boxed{A^n=(-1)^{n-1}\begin{pmatrix}-2&-3&-1\\1&2&1\\-1&-3&-2\end{pmatrix}}.
$$
