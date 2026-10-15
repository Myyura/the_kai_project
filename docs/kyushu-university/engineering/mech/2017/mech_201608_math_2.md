---
sidebar_label: "2017年度 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Matrix-Operations
  - Mathematics.Linear-Algebra.Matrix-Rank
---

# 九州大学 工学府 機械系専攻 2017年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$\boldsymbol a,\boldsymbol b,\boldsymbol c$ を零ベクトルでない $n$ 次元列ベクトルとする。$n\times n$ 行列 $K$ を $K=\boldsymbol a\boldsymbol a^{\mathsf T}$ と定義する。スカラー $p,q,r,s$ をそれぞれ $p=\boldsymbol a^{\mathsf T}\boldsymbol a$、$q=\boldsymbol a^{\mathsf T}\boldsymbol b$、$r=\boldsymbol a^{\mathsf T}\boldsymbol c$、$s=\boldsymbol b^{\mathsf T}\boldsymbol c$ と定義する。以下の問いに答えよ。（50点）

1. $K\boldsymbol a=\kappa_1\boldsymbol a$ を満たすスカラー $\kappa_1$ を、$p,q,r,s$ のうち必要なものを用いて表せ。
2. $(\boldsymbol b+\boldsymbol c)^{\mathsf T}K(\boldsymbol a+\boldsymbol c)$ を、$p,q,r,s$ のうち必要なものを用いて表せ。
3. $\begin{bmatrix}\boldsymbol a^{\mathsf T}\\\boldsymbol c^{\mathsf T}\end{bmatrix}\begin{bmatrix}\boldsymbol a&\boldsymbol b\end{bmatrix}$ を、$p,q,r,s$ のうち必要なものを用いて表せ。
4. $\boldsymbol c^{\mathsf T}\left(\begin{bmatrix}\boldsymbol a&\boldsymbol b\end{bmatrix}\begin{bmatrix}\boldsymbol a^{\mathsf T}\\\boldsymbol c^{\mathsf T}\end{bmatrix}-K\right)\boldsymbol b$ を、$p,q,r,s$ のうち必要なものを用いて表せ。
5. $K$ のランクを求めよ。

#### 题目描述

对外积矩阵 $K=\boldsymbol a\boldsymbol a^{\mathsf T}$，利用给定的四个内积 $p,q,r,s$ 计算特征值、三个矩阵乘积及秩。

## **Kai**

### (1)

$$
K\boldsymbol a=\boldsymbol a(\boldsymbol a^{\mathsf T}\boldsymbol a)=p\boldsymbol a
\quad\Longrightarrow\quad\boxed{\kappa_1=p}.
$$

### (2)

$$
(\boldsymbol b+\boldsymbol c)^{\mathsf T}\boldsymbol a\,
\boldsymbol a^{\mathsf T}(\boldsymbol a+\boldsymbol c)
=\boxed{(q+r)(p+r)}.
$$

### (3)

$$
\boxed{\begin{pmatrix}p&q\\r&s\end{pmatrix}}.
$$

### (4)

括弧内は $\boldsymbol a\boldsymbol a^{\mathsf T}+\boldsymbol b\boldsymbol c^{\mathsf T}-K=\boldsymbol b\boldsymbol c^{\mathsf T}$ なので

$$
\boldsymbol c^{\mathsf T}\boldsymbol b\,
\boldsymbol c^{\mathsf T}\boldsymbol b=\boxed{s^2}.
$$

### (5)

$KX=\boldsymbol a(\boldsymbol a^{\mathsf T}X)$ より、像は $\operatorname{span}\{\boldsymbol a\}$ に含まれる。また $\boldsymbol a\ne0$ より $p>0$、$K\boldsymbol a=p\boldsymbol a\ne0$ なので像の次元は1。従って $\boxed{\operatorname{rank}K=1}$。
