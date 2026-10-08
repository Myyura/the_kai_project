---
sidebar_label: "2017年8月実施 基礎科目 [5]"
tags:
  - Kyoto-University
  - Mathematics.Abstract-Algebra.Group-Homomorphisms-and-Quotient-Groups
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [5]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$p$ を素数とし、$\mathbb F_p=\mathbb Z/p\mathbb Z$ を位数 $p$ の有限体とする。行列の乗法による群 $G$ を

$$
G=\left\{
\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix}
\ \middle|\ a,b,c\in\mathbb F_p
\right\}
$$

で定める。このとき、$G$ から乗法群 $\mathbb C^\times=\mathbb C\setminus\{0\}$ への準同型写像の個数を求めよ。

#### 题目描述

设 $p$ 为素数，$\mathbb F_p=\mathbb Z/p\mathbb Z$。对矩阵乘法构成的群

$$
G=\left\{
\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix}
\ \middle|\ a,b,c\in\mathbb F_p
\right\},
$$

求从 $G$ 到乘法群 $\mathbb C^\times$ 的群同态的个数。

## **Kai**

問題の行列を $g(a,b,c)$ と書くと、

$$
g(a,b,c)g(a',b',c')
=g(a+a',\,b+b'+ac',\,c+c')
$$

である。写像

$$
\pi:G\to(\mathbb F_p^2,+),
\qquad \pi(g(a,b,c))=(a,c)
$$

は全射準同型で、核は $H=\{g(0,b,0)\mid b\in\mathbb F_p\}$ である。商群 $G/H$ は可換なので、交換子部分群 $[G,G]$ は $H$ に含まれる。

逆に、交換子を $[u,v]=uvu^{-1}v^{-1}$ と定めると、

$$
[g(1,0,0),g(0,0,b)]=g(0,b,0)
$$

であり、$H\subset[G,G]$ も成り立つ。よって

$$
G/[G,G]\simeq(\mathbb F_p^2,+).
$$

$\mathbb C^\times$ は可換群であるから、任意の準同型 $G\to\mathbb C^\times$ はこの商群を経由する。$\mathbb F_p^2$ の二つの標準基底の像は、それぞれ $1$ の $p$ 乗根から選べ、独立に $p$ 通りずつある。

具体的には、$\zeta=e^{2\pi i/p}$ とすると、すべての準同型は

$$
g(a,b,c)\longmapsto \zeta^{ra+sc},
\qquad r,s\in\mathbb F_p
$$

の形であり、相異なる $(r,s)$ は相異なる準同型を定める。したがって個数は $\boxed{p^2}$ である。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 7ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
