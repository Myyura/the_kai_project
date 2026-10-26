---
sidebar_label: "2023年8月実施 専門科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Compact-Operators-and-Finite-Rank-Approximation
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年8月実施 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$H$ をヒルベルト空間とし、$H_1,H_2,\ldots$ を互いに直交する $H$ の有限次元部分空間で、

$$
\left(\bigcup_{n=1}^\infty H_n\right)^\perp=\{0\}
$$

を満たすものとする。正整数 $n$ に対して $P_n$ を $H$ から $H_n$ への直交射影とし、整数 $n\le0$ に対しては $P_n=0$ とする。

有界線型作用素 $T:H\to H$ が次の2条件を満たすとする。

(i) $\lim_{n\to\infty}\|TP_n\|=0$。

(ii) $a_n=\sup_{k\ge1}\|P_{n+k}TP_k\|$ とするとき、$\sum_{n\in\mathbb Z}a_n<\infty$。

ここで作用素 $A$ に対して $\|A\|$ はその作用素ノルムとする。$n\in\mathbb Z$ に対して作用素 $S_n:H\to H$ を

$$
S_nx=\sum_{k=1}^\infty P_{n+k}TP_kx\qquad(x\in H)
$$

と定める。

1. $\|S_n\|\le a_n$ を示せ。
2. $S_n$ はコンパクト作用素であることを示せ。
3. $T$ はコンパクト作用素であることを示せ。

### 题目描述

设 $H$ 为希尔伯特空间，$H_1,H_2,\ldots$ 为 $H$ 中两两正交的有限维子空间，满足

$$
\left(\bigcup_{n=1}^{\infty}H_n\right)^\perp=\{0\}.
$$

对正整数 $n$，以 $P_n$ 表示从 $H$ 到 $H_n$ 的正交投影；对整数 $n\le0$，令 $P_n=0$。

假设有界线性算子 $T:H\to H$ 满足以下两个条件。

(i) $\lim_{n\to\infty}\|TP_n\|=0$。

(ii) 令 $a_n=\sup_{k\ge1}\|P_{n+k}TP_k\|$，则 $\sum_{n\in\mathbb Z}a_n<\infty$。

这里，对算子 $A$，$\|A\|$ 表示其算子范数。对 $n\in\mathbb Z$，定义算子 $S_n:H\to H$ 为

$$
S_nx=\sum_{k=1}^{\infty}P_{n+k}TP_kx\qquad(x\in H).
$$

(1) 证明 $\|S_n\|\le a_n$。

(2) 证明 $S_n$ 是紧算子。

(3) 证明 $T$ 是紧算子。

## **Kai**

仮定より $H$ は $H_k$ の直交直和の閉包であり、任意の $x\in H$ に対し

$$
x=\sum_{k=1}^\infty P_kx,\qquad
\|x\|^2=\sum_{k=1}^\infty\|P_kx\|^2
$$

が成り立つ。

### (1)

固定した $n$ に対し、$P_{n+k}TP_kx$ は $k$ ごとに互いに直交する。また

$$
\sum_{k=1}^\infty\|P_{n+k}TP_kx\|^2
\le a_n^2\sum_{k=1}^\infty\|P_kx\|^2=a_n^2\|x\|^2.
$$

従って $S_nx$ の級数は $H$ で収束し、$\|S_nx\|\le a_n\|x\|$、すなわち $\boxed{\|S_n\|\le a_n}$ である。

### (2)

$S_{n,N}=\sum_{k=1}^N P_{n+k}TP_k$ は有限階数作用素である。(1) と同じ直交性による評価から

$$
\|S_n-S_{n,N}\|
\le\sup_{k>N}\|P_{n+k}TP_k\|
\le\sup_{k>N}\|TP_k\|\longrightarrow0.
$$

従って $S_n$ は有限階数作用素の作用素ノルム極限であり、コンパクトである。

### (3)

$\sum_{n\in\mathbb Z}\|S_n\|\le\sum_{n\in\mathbb Z}a_n<\infty$ より、$S=\sum_{n\in\mathbb Z}S_n$ は作用素ノルムで収束する。(2) から $S$ はコンパクトである。

$x\in H_k$ に対しては $S_nx=P_{n+k}Tx$ なので

$$
Sx=\sum_{n\in\mathbb Z}P_{n+k}Tx
=\sum_{r=1}^\infty P_rTx=Tx.
$$

有限個の $H_k$ の元の和は $H$ に稠密であり、$S,T$ は有界であるから $S=T$。従って $T$ はコンパクトである。

## **Reference**

- [京都大学公式問題（2024年度・専門科目、PDF 6ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_senmon.pdf)
- [照合用参考解答（2024年度・専門科目 問題7、PDF 3–4ページ）](https://drive.google.com/file/d/1Mxkyt2TSa2v0VE5OeFfqzWYdh4iO10FS/view)
