---
sidebar_label: "2014年8月実施 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 九州大学 工学府 機械系専攻 2014年8月実施 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$A$ を $2\times2$ 正則対称行列、$I$ を $2\times2$ 単位行列、$\boldsymbol b$ を2次元ベクトル、$c$ を実数とする。ベクトル $\boldsymbol e_1$ および $\boldsymbol e_2$ を

$$
\boldsymbol e_1=\begin{bmatrix}1\\0\end{bmatrix},\qquad
\boldsymbol e_2=\begin{bmatrix}0\\1\end{bmatrix}
$$

と定義する。記号 $\|\cdot\|$ は $\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ で定義されるベクトルノルムを表すものとする。次の各問いに答えよ。（50点）

(1) すべての2次元ベクトル $\boldsymbol x$ について、$2\times2$ 行列 $P$ は

$$
\boldsymbol x^{\mathsf T}A\boldsymbol x-c\|\boldsymbol x\|^2
=\boldsymbol x^{\mathsf T}P\boldsymbol x
$$

を満たすとする。このとき、$P$ を $A,c$、および $I$ を用いて表せ。

(2) すべての2次元ベクトル $\boldsymbol x$ について、2次元ベクトル $\boldsymbol q$ および実数 $r$ は

$$
\boldsymbol x^{\mathsf T}A\boldsymbol x-2\boldsymbol b^{\mathsf T}\boldsymbol x
=(\boldsymbol x-\boldsymbol q)^{\mathsf T}A(\boldsymbol x-\boldsymbol q)-r
$$

を満たすとする。このとき、$\boldsymbol q$ および $r$ を $A$ および $\boldsymbol b$ を用いて表せ。

(3) $2\times2$ 実行列 $R$ は $R^{\mathsf T}R=I$ を満たすとする。この行列 $R$ と実数 $u$ および $v$ は

$$
A=R\begin{bmatrix}u&0\\0&v\end{bmatrix}R^{\mathsf T}
$$

を満たすとする。このとき、$AR\boldsymbol e_1-R\boldsymbol e_1u$ を求めよ。

(4) 行列 $A$ の固有値と固有ベクトルを求めよ。

#### 题目描述

设 $A$ 为 $2\times2$ 可逆对称矩阵，$I$ 为 $2\times2$ 单位矩阵，$\boldsymbol b$ 为二维向量，$c$ 为实数。定义向量

$$
\boldsymbol e_1=\begin{bmatrix}1\\0\end{bmatrix},\qquad
\boldsymbol e_2=\begin{bmatrix}0\\1\end{bmatrix}.
$$

符号 $\|\cdot\|$ 表示由 $\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ 定义的向量范数。回答以下各问。（50分）

(1) 对所有二维向量 $\boldsymbol x$，$2\times2$ 矩阵 $P$ 满足

$$
\boldsymbol x^{\mathsf T}A\boldsymbol x-c\|\boldsymbol x\|^2
=\boldsymbol x^{\mathsf T}P\boldsymbol x.
$$

用 $A,c,I$ 表示 $P$。

(2) 对所有二维向量 $\boldsymbol x$，二维向量 $\boldsymbol q$ 和实数 $r$ 满足

$$
\boldsymbol x^{\mathsf T}A\boldsymbol x-2\boldsymbol b^{\mathsf T}\boldsymbol x
=(\boldsymbol x-\boldsymbol q)^{\mathsf T}A(\boldsymbol x-\boldsymbol q)-r.
$$

用 $A$ 和 $\boldsymbol b$ 表示 $\boldsymbol q$ 和 $r$。

(3) 设 $2\times2$ 实矩阵 $R$ 满足 $R^{\mathsf T}R=I$，且该矩阵与实数 $u,v$ 满足

$$
A=R\begin{bmatrix}u&0\\0&v\end{bmatrix}R^{\mathsf T}.
$$

求 $AR\boldsymbol e_1-R\boldsymbol e_1u$。

(4) 求矩阵 $A$ 的特征值和特征向量。

## **Kai**

### (1)

$\|\boldsymbol x\|^2=\boldsymbol x^{\mathsf T}I\boldsymbol x$ より、

$$
\boxed{P=A-cI}
$$

と取れる。厳密には対称性を $P$ に要求していないため一意ではなく、$P=A-cI+K$、$K^{\mathsf T}=-K$ も同じ二次形式を与える。対称な代表が上の答えである。

### (2)

右辺を展開すると $\boldsymbol x^{\mathsf T}A\boldsymbol x-2\boldsymbol q^{\mathsf T}A\boldsymbol x+\boldsymbol q^{\mathsf T}A\boldsymbol q-r$。$A$ の対称性と正則性から

$$
\boxed{\boldsymbol q=A^{-1}\boldsymbol b,\qquad r=\boldsymbol b^{\mathsf T}A^{-1}\boldsymbol b}.
$$

### (3)

$$
AR\boldsymbol e_1=R\operatorname{diag}(u,v)\boldsymbol e_1=uR\boldsymbol e_1,
$$

したがって求める値は $\boxed{\boldsymbol0}$。

### (4)

同様に $AR\boldsymbol e_2=vR\boldsymbol e_2$。$u\ne v$ の場合、

$$
\begin{gathered}
\boxed{\lambda=u:\ c_1R\boldsymbol e_1,\qquad
\lambda=v:\ c_2R\boldsymbol e_2}\\
(c_1,c_2\ne0).
\end{gathered}
$$

$u=v$ の場合は $A=uI$ なので、すべての非零ベクトルが固有値 $u$ に属する。
