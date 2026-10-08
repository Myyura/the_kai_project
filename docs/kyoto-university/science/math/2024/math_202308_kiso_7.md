---
sidebar_label: "2024年度 基礎科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Vandermonde-Determinant
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$n$ を正の整数とする。複素 $n$ 次正方行列全体の集合 $M_n(\mathbb C)$ を行列の和とスカラー倍により複素ベクトル空間とみなす。対角行列 $A\in M_n(\mathbb C)$ を

$$
A=\operatorname{diag}(1,2,\ldots,n)
$$

と定める。このとき、ある $B\in M_n(\mathbb C)$ が存在して

$$
\{A^iB^j\in M_n(\mathbb C)\mid i,j\in\{0,1,\ldots,n-1\}\}
$$

が $M_n(\mathbb C)$ の基底となることを示せ。ただし $A^0=B^0=E$（単位行列）とする。

#### 题目描述

设 $n$ 为正整数，$M_n(\mathbb C)$ 是所有 $n$ 阶复方阵组成的复向量空间。令 $A=\operatorname{diag}(1,2,\ldots,n)$。证明存在 $B\in M_n(\mathbb C)$，使

$$
\{A^iB^j\mid 0\le i,j\le n-1\}
$$

构成 $M_n(\mathbb C)$ 的一组基，其中 $A^0=B^0=E$。

## **Kai**

標準基底を $e_1,\ldots,e_n$ とし、巡回置換行列 $B$ を

$$
Be_k=e_{k+1}\ (1\le k<n),\qquad Be_n=e_1
$$

により定める。$n=1$ では $B=(1)$ とする。

$0\le j<n$ に対し、$B^j$ の非零成分は $r\equiv s+j\pmod n$ を満たす位置 $(r,s)$ にあり、そこで値 $1$ を取る。異なる $j$ の非零位置は互いに交わらない。

いま

$$
\sum_{j=0}^{n-1}\sum_{i=0}^{n-1}c_{ij}A^iB^j=0
$$

とする。$j$ を固定して、各行 $r=1,\ldots,n$ の $B^j$ が非零となる成分を比べると

$$
\sum_{i=0}^{n-1}c_{ij}r^i=0\qquad(r=1,\ldots,n).
$$

左辺の多項式は次数 $n-1$ 以下で相異なる $n$ 個の根を持つので恒等的に $0$ である。従ってすべての $c_{ij}=0$ であり、$n^2$ 個の行列 $A^iB^j$ は1次独立である。$\dim_{\mathbb C}M_n(\mathbb C)=n^2$ だから、これらは基底となる。

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 8ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
