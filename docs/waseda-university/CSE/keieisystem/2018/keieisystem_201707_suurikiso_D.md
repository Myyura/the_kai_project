---
sidebar_label: "2017年7月実施 数理基礎 D"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Orthogonal-Decomposition
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 数理基礎 D

## **Author**
祭音Myyura

## **Description**

1. $\boldsymbol a_1=(1,0)^{\mathsf T}$、$\boldsymbol a_2=(1,1)^{\mathsf T}$ とする。
   1. $\boldsymbol a_2-\boldsymbol a_1(\boldsymbol a_2\cdot\boldsymbol a_1)$ が $\boldsymbol a_1$ と直交することを示せ。
   2. 線形独立な3ベクトル $\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3$ を直交化する方法を説明せよ。
2. 実2次正方行列 $X$ の相異なる固有値に対応する固有ベクトルは線形独立であることを示せ。

## **Kai**

### [小問 1-1]

$\boldsymbol a_2\cdot\boldsymbol a_1=1$ なので

$$
\boldsymbol a_2-\boldsymbol a_1(\boldsymbol a_2\cdot\boldsymbol a_1)
=\binom11-\binom10=\binom01.
$$

このベクトルと $\boldsymbol a_1$ の内積は0であるから、両者は直交する。

### [小問 1-2]

Gram--Schmidt の直交化法を用いる。まず

$$
\boldsymbol u_1=\boldsymbol b_1
$$

とし、順に

$$
\begin{aligned}
\boldsymbol u_2
&=\boldsymbol b_2
-\frac{\boldsymbol b_2\cdot\boldsymbol u_1}
{\boldsymbol u_1\cdot\boldsymbol u_1}\boldsymbol u_1,\\
\boldsymbol u_3
&=\boldsymbol b_3
-\frac{\boldsymbol b_3\cdot\boldsymbol u_1}
{\boldsymbol u_1\cdot\boldsymbol u_1}\boldsymbol u_1
-\frac{\boldsymbol b_3\cdot\boldsymbol u_2}
{\boldsymbol u_2\cdot\boldsymbol u_2}\boldsymbol u_2
\end{aligned}
$$

と定める。線形独立性から各 $\boldsymbol u_i$ は0でなく、$\boldsymbol u_1,\boldsymbol u_2,\boldsymbol u_3$ は互いに直交する。必要なら $\boldsymbol e_i=\boldsymbol u_i/\|\boldsymbol u_i\|$ として正規直交化する。

### [小問 2]

固有値 $\lambda_1\neq\lambda_2$ に対応する固有ベクトルを $\boldsymbol v_1,\boldsymbol v_2$ とする。

$$
c_1\boldsymbol v_1+c_2\boldsymbol v_2=\boldsymbol0
$$

と仮定し、左から $X$ を作用させると

$$
c_1\lambda_1\boldsymbol v_1+c_2\lambda_2\boldsymbol v_2=\boldsymbol0.
$$

元の式の $\lambda_2$ 倍を引けば

$$
c_1(\lambda_1-\lambda_2)\boldsymbol v_1=\boldsymbol0.
$$

$\lambda_1\neq\lambda_2$ かつ $\boldsymbol v_1\neq\boldsymbol0$ より $c_1=0$、したがって $c_2=0$ である。よって $\boldsymbol v_1,\boldsymbol v_2$ は線形独立である。
