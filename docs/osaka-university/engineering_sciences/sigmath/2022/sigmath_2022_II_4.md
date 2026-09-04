---
sidebar_label: "2022年度 数理科学 II [4]"
tags:
  - Osaka-University
  - Mathematics.Functional-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ を自然数とし、$\mathcal M_n$ を $n$ 次実正方行列全体とする。$y=(y_1,\ldots,y_n)^T\in\mathbb R^n$ に対し $|y|=(\sum_{j=1}^ny_j^2)^{1/2}$ と定め、このユークリッドノルムを用いて

$$
\|A\|=\sup_{|x|=1}|Ax|,\qquad d(A,B)=\|A-B\|
$$

と定める。$O,I$ は零行列と単位行列である。

(1) $d$ が距離であることを示せ。

(2) $\|AB\|\le\|A\|\|B\|$ を示せ。

(3) $\|A\|<1$ とし、$B_k=I+\sum_{j=1}^kA^j$ とおく。(a) $A^k\to O$、(b) $B_k$ の極限が存在して $(I-A)^{-1}$ に等しいことを示せ。$(\mathcal M_n,d)$ の完備性は用いてよい。

## **Kai**

### (1)
単位球面はコンパクトなので $\|A\|$ は有限。非負性・対称性は明らかである。$\|A-B\|=0$ なら各標準基底 $e_j$ に対して $(A-B)e_j=0$、ゆえに $A=B$。

また $|(A-C)x|\le|(A-B)x|+|(B-C)x|$ について $|x|=1$ の上限をとると三角不等式を得る。

### (2)
任意の $y$ について $|Ay|\le\|A\||y|$。よって $|ABx|\le\|A\|\|B\||x|$ であり、$|x|=1$ の上限をとればよい。

### (3)
$r=\|A\|<1$ とおく。

(a) (2) より $\|A^k\|\le r^k\to0$。

(b) $\ell>k$ なら

$$
\|B_\ell-B_k\|\le\sum_{j=k+1}^\ell r^j\le\frac{r^{k+1}}{1-r}\to0.
$$

完備性より $B_k\to B$ が存在する。一方

$$
(I-A)B_k=B_k(I-A)=I-A^{k+1}\longrightarrow I.
$$

(2) により行列積は連続なので $(I-A)B=B(I-A)=I$。ゆえに $B=(I-A)^{-1}$。
