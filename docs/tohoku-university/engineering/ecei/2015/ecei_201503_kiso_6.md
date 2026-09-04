---
sidebar_label: 2015年3月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Norm
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 基礎科目 問題6 物理基礎2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

行列

$$
A=\begin{pmatrix}1&1&1\\1&1&-1\\1&-1&-1\end{pmatrix}
$$

および $B=A^3+3A^2+3A+E$ について考える。ただし $E$ は単位行列である。以下の問に答えよ。

(1) $A$ の固有値 $\lambda_1,\lambda_2,\lambda_3$（$\lambda_1<\lambda_2<\lambda_3$）と対応する正規化された固有ベクトル $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ を求めよ。

(2) $B\boldsymbol\alpha_1$ を $\lambda_1$ および $\boldsymbol\alpha_1$ を用いて表せ。

(3) $B$ の固有値 $\mu_1,\mu_2,\mu_3$（$\mu_1<\mu_2<\mu_3$）と対応する正規化された固有ベクトル $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ を求めよ。

(4) 実ベクトル $\boldsymbol x=x_1\boldsymbol\beta_1+x_2\boldsymbol\beta_2+x_3\boldsymbol\beta_3$ を考える。$|B\boldsymbol x|^2$ を $x_1,x_2,x_3,\mu_1,\mu_2,\mu_3$ を用いて表せ。ただし $|\boldsymbol x|$ はベクトル $\boldsymbol x$ の長さである。

(5) $|\boldsymbol x|=1$ のとき $|B\boldsymbol x|$ の最大値を求めよ。

### 题目描述

设

$$
A=\begin{pmatrix}1&1&1\\1&1&-1\\1&-1&-1\end{pmatrix},\qquad B=A^3+3A^2+3A+E,
$$

其中 $E$ 为单位矩阵。

1. 求 $A$ 的特征值 $\lambda_1<\lambda_2<\lambda_3$ 及相应单位特征向量 $\alpha_i$。
2. 用 $\lambda_1,\alpha_1$ 表示 $B\alpha_1$。
3. 求 $B$ 的特征值 $\mu_1<\mu_2<\mu_3$ 及相应单位特征向量 $\beta_i$。
4. 对实向量 $\boldsymbol x=x_1\beta_1+x_2\beta_2+x_3\beta_3$，用 $x_i,\mu_i$ 表示 $\lVert B\boldsymbol x\rVert^2$。
5. 求 $\lVert\boldsymbol x\rVert=1$ 时 $\lVert B\boldsymbol x\rVert$ 的最大值。

## **Kai**

### (1)

$$
\det(tE-A)=(t+2)(t-1)(t-2),
$$

故可取

$$
\boxed{\begin{aligned}
\lambda_1&=-2,&\alpha_1&=(-1,1,2)^T/\sqrt6,\\
\lambda_2&=1,&\alpha_2&=(1,-1,1)^T/\sqrt3,\\
\lambda_3&=2,&\alpha_3&=(1,1,0)^T/\sqrt2.
\end{aligned}}
$$

### (2)、(3)

$B=(A+E)^3$，所以

$$
\boxed{B\alpha_1=(\lambda_1+1)^3\alpha_1=-\alpha_1}.
$$

所有特征值及对应特征向量为

$$
\boxed{(\mu_1,\mu_2,\mu_3)=(-1,8,27),\qquad\beta_i=\alpha_i}.
$$

### (4)、(5)

因为 $\beta_i$ 标准正交，

$$
\boxed{\lVert B\boldsymbol x\rVert^2=\mu_1^2x_1^2+\mu_2^2x_2^2+\mu_3^2x_3^2
=x_1^2+64x_2^2+729x_3^2}.
$$

约束为 $x_1^2+x_2^2+x_3^2=1$，故

$$
\boxed{\max\lVert B\boldsymbol x\rVert=27},
$$

在 $\boldsymbol x=\pm\beta_3$ 时取到。
