---
sidebar_label: "2023年度 数理科学 I [3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
  - Mathematics.Linear-Algebra
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 I \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$z$ は複素数とする。$P_1=\{-3\}$、$\mathbb C\setminus P_1$ 上の関数を $g_1(z)=-2/(z+3)$ とする。$n\ge2$ に対して、集合 $P_n$ と $\mathbb C\setminus P_n$ 上の関数 $g_n$ を

$$
P_n=\{z\in\mathbb C\setminus P_{n-1}\mid g_{n-1}(z)=-3\},
$$

$$
g_n(z)=\begin{cases}g_1(g_{n-1}(z))&z\notin P_{n-1},\ z\notin P_n,\\
0&z\in P_{n-1},\ z\notin P_n\end{cases}
$$

と定める。

(1) $P_2,g_2(z)$ を求めよ。

(2) 数列 $\{a_n\}_{n=1}^{\infty},\{b_n\}_{n=1}^{\infty},\{c_n\}_{n=1}^{\infty},\{d_n\}_{n=1}^{\infty}$ を

$$
\begin{pmatrix}a_1&b_1\\c_1&d_1\end{pmatrix}=\begin{pmatrix}0&-2\\1&3\end{pmatrix},\qquad
\begin{pmatrix}a_{n+1}&b_{n+1}\\c_{n+1}&d_{n+1}\end{pmatrix}
=\begin{pmatrix}0&-2\\1&3\end{pmatrix}\begin{pmatrix}a_n&b_n\\c_n&d_n\end{pmatrix}
$$

によって帰納的に定める。すべての $n\ge1$ に対して

$$
P_n=\{-d_n/c_n\},\qquad g_n(z)=\frac{a_nz+b_n}{c_nz+d_n}\quad(z\notin P_n)
$$

を証明せよ。

(3) $C$ を円 $|z|=3$ の反時計回りの周回とする。$\lim_{n\to\infty}2^n\int_Cg_n(z)\,dz$ を求めよ。

## **Kai**

### (1)
$-2/(z+3)=-3$ より

$$
\boxed{P_2=\{-7/3\},\qquad g_2(z)=-\frac{2z+6}{3z+7}}.
$$

この式は $z=-3$ でも $0$ となり、指定された定義と一致する。

### (2)
$M=\begin{pmatrix}0&-2\\1&3\end{pmatrix}$ とおく。行列の積または帰納法により

$$
M^n=\begin{pmatrix}2-2^n&2-2^{n+1}\\2^n-1&2^{n+1}-1\end{pmatrix},\qquad\det M^n=2^n.
$$

特に $c_n\ne0$ であり、分子・分母に共通零点はない。

$n$ で主張を仮定すると、$g_n(z)=-3$ は

$$
(a_n+3c_n)z+b_n+3d_n=c_{n+1}z+d_{n+1}=0
$$

と同値である。この零点は $-d_n/c_n$ と異なるので $P_{n+1}=\{-d_{n+1}/c_{n+1}\}$。また

$$
g_1(g_n(z))=\frac{-2(c_nz+d_n)}{(a_n+3c_n)z+b_n+3d_n}
=\frac{a_{n+1}z+b_{n+1}}{c_{n+1}z+d_{n+1}}.
$$

旧極 $z=-d_n/c_n$ では右辺が $0$ になり、延長の定義とも一致する。$n=1$ は明らかなので帰納法が完了する。

### (3)
$n\ge2$ では唯一の極は $-2-1/(2^n-1)$ で $|z|<3$ にある。留数は

$$
\operatorname{Res}(g_n)=-\frac{\det M^n}{c_n^2}=-\frac{2^n}{(2^n-1)^2}.
$$

よって

$$
2^n\int_Cg_n(z)\,dz=-2\pi i\frac{2^{2n}}{(2^n-1)^2}\longrightarrow\boxed{-2\pi i}.
$$
