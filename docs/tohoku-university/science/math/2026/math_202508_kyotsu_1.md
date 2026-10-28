---
sidebar_label: "2025年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---

# 東北大学 理学研究科 数学専攻 2025年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#d8c2a519-6f9a-4cb0-9cfb-b24436197f03) refined with GPT 6 Astra)

## **Description**

$n$ を $2$ 以上の整数とし、$A$ を複素数を成分とする $n$ 次正方行列とする。$\mathbb C$ 上 $1$ 次独立な列ベクトル $u_1,\ldots,u_n\in\mathbb C^n$ が

$$
Au_k=u_{k+1}\quad(1\le k\le n-1),\qquad Au_n=u_1
$$

を満たしているとする。以下の問いに答えよ。

(1) $A^n=I$ を示せ。ただし、$I$ は $n$ 次単位行列を表す。

(2) $c\in\mathbb C$ を $A$ の固有値とする。このとき、$c^n=1$ を示せ。

(3) $A$ の固有値をすべて求めよ。また、各固有値に対応する固有空間を $u_1,\ldots,u_n$ を用いて表せ。必要ならば、$1$ の原始 $n$ 乗根 $\zeta=e^{2\pi i/n}\in\mathbb C$（ただし、$i$ は虚数単位であるとする）を用いてもよい。

### 题目描述

设 $n$ 为不小于 $2$ 的整数，$A$ 为 $n$ 阶复方阵。假设在 $\mathbb C$ 上线性无关的列向量 $u_1,\ldots,u_n\in\mathbb C^n$ 满足

$$
Au_k=u_{k+1}\quad(1\le k\le n-1),\qquad Au_n=u_1.
$$

回答下列问题。

(1) 证明 $A^n=I$，其中 $I$ 为 $n$ 阶单位矩阵。

(2) 设 $c\in\mathbb C$ 为 $A$ 的特征值，证明 $c^n=1$。

(3) 求 $A$ 的全部特征值，并用 $u_1,\ldots,u_n$ 表示各特征值对应的特征空间。如有需要，可以使用 $1$ 的本原 $n$ 次单位根 $\zeta=e^{2\pi i/n}\in\mathbb C$，其中 $i$ 为虚数单位。

## **Kai**

### (1)

添字を $n$ を法として読むと、$A^ku_j=u_{j+k}$ である。したがって全ての $j$ について $A^nu_j=u_j$ となる。$u_1,\ldots,u_n$ は基底なので、

$$
A^n=I.
$$

### (2)

固有値 $c$ に対する非零固有ベクトル $v$ を取ると、(1) より

$$
v=A^nv=c^nv.
$$

よって $(c^n-1)v=0$ から $c^n=1$ である。

### (3)

$\zeta=e^{2\pi i/n}$ とおく。(2) より固有値の候補は $c=\zeta^m$、$m=0,\ldots,n-1$ である。各候補に対し

$$
v_m=\sum_{j=1}^n\zeta^{-m(j-1)}u_j
$$

とおく。基底に関する $u_1$ の係数が $1$ なので $v_m\ne0$ であり、$c^n=1$ を用いると $Av_m=\zeta^mv_m$ が確かめられる。したがって候補は全て固有値である。

さらに $v=\sum_{j=1}^na_ju_j$ が $Av=cv$ を満たすことは

$$
a_n=ca_1,\qquad a_{j-1}=ca_j\quad(2\le j\le n)
$$

と同値である。よって $a_j=c^{-(j-1)}a_1$ であり、対応する固有空間は

$$
\ker(A-\zeta^mI)=\mathbb C v_m\qquad(m=0,\ldots,n-1).
$$

## **Reference**

- [東北大学公式問題（2026年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2026_R8_kyotsu.pdf#page=2)
- [L^2：2026年度の解答](https://note.com/normalmath/n/n89152917de11#d8c2a519-6f9a-4cb0-9cfb-b24436197f03)
