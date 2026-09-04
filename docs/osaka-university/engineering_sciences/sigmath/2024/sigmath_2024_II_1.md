---
sidebar_label: "2024年度 数理科学 [II-1]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-1]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

実 $n\times n$ 行列 $A$ に対し、実数 $\lambda_j$ と線形独立な $p_j\in\mathbb R^n$ が存在して

$$
Ap_j=\lambda_jp_j\quad(j=1,\ldots,n),\qquad\lambda_1\ne0,\quad
\left|\frac{\lambda_j}{\lambda_1}\right|<1\quad(j=2,\ldots,n)
$$

を満たすとする。$\alpha_1>0$, $\alpha_j\in\mathbb R$（$j\ge2$）を任意に選び、

$$
x_0=\sum_{j=1}^n\alpha_jp_j,\qquad x_k=\frac{A^{2k}x_0}{\|A^{2k}x_0\|}\quad(k\in\mathbb N)
$$

とする。ノルムと内積は標準ユークリッドのものとする。このとき

$$
\lim_{k\to\infty}x_k=\frac{p_1}{\|p_1\|},\qquad
\lim_{k\to\infty}(Ax_k,x_k)=\lambda_1
$$

を示せ。

## **Kai**

$$
A^{2k}x_0=\lambda_1^{2k}\left(\alpha_1p_1+
\sum_{j=2}^n\alpha_j\left(\frac{\lambda_j}{\lambda_1}\right)^{2k}p_j\right)
=\lambda_1^{2k}(\alpha_1p_1+r_k)
$$

とおけば、$r_k\to0$。$\lambda_1^{2k}>0$ かつ $\alpha_1>0$ なので

$$
x_k=\frac{\alpha_1p_1+r_k}{\|\alpha_1p_1+r_k\|}
\longrightarrow\frac{\alpha_1p_1}{\alpha_1\|p_1\|}
=\boxed{\frac{p_1}{\|p_1\|}}.
$$

行列の作用と内積の連続性から

$$
\lim_{k\to\infty}(Ax_k,x_k)
=\frac{(Ap_1,p_1)}{\|p_1\|^2}=\boxed{\lambda_1}.
$$
