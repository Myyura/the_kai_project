---
sidebar_label: 2005年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 京都大学 情報学研究科 システム科学専攻 2005年8月実施 数学【I】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
一次独立な三つのベクトル $x_1,x_2,x_3$ に対し、$y=\lambda_1x_1+\lambda_2x_2+\lambda_3x_3$ とする。$y-x_1,y-x_2,y-x_3$ が一次独立となるための $\lambda_1,\lambda_2,\lambda_3$ の必要十分条件を求めよ。

### 問2
次の行列の固有値をすべて求めよ。

$$
A=\begin{pmatrix}0&2&3&4\\1/2&0&-3/2&-2\\1/3&-2/3&0&-4/3\\1/4&-1/2&-3/4&0\end{pmatrix}.
$$

### 問3
$m\times n$ 実行列 $A$ に対し、$n$ 次元実ベクトル $x$ が $A^TAx=0$ を満たすとする。任意の $m$ 次元実ベクトル $c$ に対して $x$ と $A^Tc$ が直交することを示せ。

#### 题目描述

### 问1
设 $x_1,x_2,x_3$ 线性无关，$y=\lambda_1x_1+\lambda_2x_2+\lambda_3x_3$。求 $y-x_1,y-x_2,y-x_3$ 线性无关的充要条件。

### 问2
求矩阵的全部特征值：

$$
A=\begin{pmatrix}0&2&3&4\\1/2&0&-3/2&-2\\1/3&-2/3&0&-4/3\\1/4&-1/2&-3/4&0\end{pmatrix}.
$$

### 问3
设 $A$ 为 $m\times n$ 实矩阵，$x\in\mathbb R^n$ 满足 $A^TAx=0$。证明：对任意 $c\in\mathbb R^m$，$x$ 与 $A^Tc$ 正交。

## **Kai**

### 問1
$\lambda=(\lambda_1,\lambda_2,\lambda_3)^T$、$\mathbf1=(1,1,1)^T$ とおくと、三つのベクトルの $x_1,x_2,x_3$ に関する係数行列は $C=\lambda\mathbf1^T-I$。行列式補題より

$$
\det C=(-1)^3(1-\mathbf1^T\lambda)=\lambda_1+\lambda_2+\lambda_3-1.
$$

したがって必要十分条件は $\boxed{\lambda_1+\lambda_2+\lambda_3\ne1}$。

### 問2
$D=\operatorname{diag}(1,1/2,1/3,1/4)$、$v=(-1,1,1,1)^T$ とすると $D^{-1}AD=I-vv^T$。$v^Tv=4$ なので、$v$ 上の固有値は $1-4=-3$、$v^\perp$ 上の固有値は $1$。よって

$$
\boxed{1\text{（重複度 3）},\quad -3\text{（重複度 1）}}.
$$

### 問3
$\|Ax\|^2=x^TA^TAx=0$ より $Ax=0$。したがって任意の $c$ に対し $x^TA^Tc=(Ax)^Tc=0$。

