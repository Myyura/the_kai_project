---
sidebar_label: 2017年8月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Skew-Symmetric-Matrix
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2017年8月実施 線形代数

## **Author**
Zero

## **Description**
正方行列 $A$ が交代的であるとは，$A^{\top} = -A$ を満たすことである．ここで，$A^{\top}$ は $A$ の転置を表す．以下の各問に答えよ．

(1) 任意の $n$ 次正方行列 $A \in \boldsymbol{R}^{n \times n}$ と整数 $i,j(1 \le i,j \le n)$
に対し，ベクトルの組 $\boldsymbol{x,y}$ $\in \boldsymbol{R}^n$ が存在し，$\boldsymbol{x}^{\top}A\boldsymbol{y} = A_{ij}$ を満たすことを示せ．ただし，$A_{ij}$ は $A$ の $(i, j)$ 成分である．

(2) $n$ 次正方行列 $A \in \boldsymbol{R}^{n \times n}$ が交代的であるための必要十分条件は，

$$
\boldsymbol{y}^{\top
}A\boldsymbol{x} = -\boldsymbol{x}^{\top}A\boldsymbol{y}(\forall \boldsymbol{x,y} \in \boldsymbol{R}^n)
$$

が成り立つことであることを示せ．

(3) 交代的な行列 $A$ が固有値 $\lambda$ を持つとき，$A$ は $-\lambda$ も固有値として持つことを示せ．ヒント：任意の正方行列 $X$ の行列式 $|X|$ について，$|X| = |X^{\top}|$ が成り立つ．

### 题目描述

称方阵 $A$ 为反对称矩阵，当且仅当 $A^\top=-A$；其中 $A^\top$ 表示转置。回答下列问题：

1. 对任意 $A\in\mathbb R^{n\times n}$ 以及 $1\le i,j\le n$，证明存在 $\boldsymbol x,\boldsymbol y\in\mathbb R^n$，使
   $$
   \boldsymbol x^\top A\boldsymbol y=A_{ij},
   $$
   其中 $A_{ij}$ 是 $A$ 的第 $(i,j)$ 个元素。
2. 证明 $A\in\mathbb R^{n\times n}$ 为反对称矩阵的充要条件是
   $$
   \boldsymbol y^\top A\boldsymbol x
   =-\boldsymbol x^\top A\boldsymbol y
   \qquad(\forall\,\boldsymbol x,\boldsymbol y\in\mathbb R^n).
   $$
3. 证明若反对称矩阵 $A$ 具有特征值 $\lambda$，则 $-\lambda$ 也是其特征值。可使用任意方阵 $X$ 满足 $|X|=|X^\top|$。

#### 考点

- **反对称矩阵**：用标准基向量抽取矩阵元素，并证明双线性型恒等式与 $A^\top=-A$ 等价。
- **特征值成对性质**：结合特征多项式、转置行列式不变性和反对称条件，证明特征值关于零成对出现。

## **Kai** 
### (1)

$$
A = \begin{pmatrix}
A_{11} &  \cdots & A_{1n} \\
\vdots & \ddots &  \vdots \\
A_{n1} &  \cdots &A_{nn} \\
\end{pmatrix}
\qquad
\boldsymbol{x} = \begin{pmatrix}
x_1 \\ \vdots \\ x_n 
\end{pmatrix} 
\qquad
\boldsymbol{y} = \begin{pmatrix}
y_1 \\ \vdots \\y_n
\end{pmatrix}
$$

$$
\boldsymbol{x}^{\top} = \begin{pmatrix}
x_1 & \cdots & x_n
\end{pmatrix}
$$

$$
\boldsymbol{x}^{\top}A\boldsymbol{y} = \begin{pmatrix}
x_1 & \cdots & x_n
\end{pmatrix}
\begin{pmatrix}
A_{11} &  \cdots & A_{1n} \\
\vdots & \ddots &  \vdots \\
A_{n1} &  \cdots &A_{nn} \\
\end{pmatrix}
\begin{pmatrix}
y_1 \\ \vdots \\y_n
\end{pmatrix}
$$

$$
\begin{aligned}
\boldsymbol{x}^{\top}A\boldsymbol{y} &= \begin{pmatrix}
x_1A_{11} + \cdots + x_nA_{n1},\cdots,x_1A_n + x_nA_{nn}
\end{pmatrix}
\begin{pmatrix}
y_1 \\ \vdots \\y_n
\end{pmatrix} \\
&= x_1y_1A_{11} + \cdots + x_ny_1A_{n1} + \cdots + x_1y_nA_{1n} + \cdots + x_ny_nA_{nn} \\
&= \sum_{i = 1}^n \sum_{j = 1}^n x_i y_j A_{ij}
\end{aligned}
$$

$x_i = y_j = 1$ かつ $x_k = y_l = 0 \ (i \neq k, j \neq l, 1 \le k , l \le n)$ のとき、$\boldsymbol{x}^{\top}A\boldsymbol{y} = A_{ij}$ となる。

### (2)
充分性:

$$
\begin{aligned}
-\boldsymbol{x}^{\top}A\boldsymbol{y} &= \sum_{i = 1}^n \sum_{j = 1}^n x_i y_i A_{ij} \\
\boldsymbol{y}^{\top}A\boldsymbol{x} &= \sum_{i = 1}^n \sum_{j = 1}^n y_j x_i A_{ji} 
\end{aligned}
$$

$\boldsymbol{y}^{\top}A\boldsymbol{x} = -\boldsymbol{x}^{\top}A\boldsymbol{y}$ となると、$-A_{ij} = A_{ji}$ より、
$A^{\top} = -A$ となり,$A \in \boldsymbol{R}^{n \times n}$ が交代的である。

必要性:

$A \in \boldsymbol{R}^{n \times n}$ が交代的であるとき、$-A_{ij} = A_{ji}$ より、

$$
\begin{aligned}
\boldsymbol{y}^{\top}A\boldsymbol{x} &= \sum_{i = 1}^n \sum_{j = 1}^n y_jx_i A_{ji} \\
&= -\sum_{i = 1}^n \sum_{j = 1} x_iy_j A_{ij} \\
&= -\boldsymbol{x}^{\top}A\boldsymbol{y}
\end{aligned}
$$

以上から、必要十分条件である。

### (3)
固有値として持つから、

$$
A\boldsymbol{x} = \lambda \boldsymbol{x}
$$

$$
|A - \lambda E| = 0
$$

$|\boldsymbol{x}| = |\boldsymbol{x}^{\top}|$ より、

$$
|(A - \lambda E)^{\top}| = 0
$$

$$
|A^{\top} - \lambda E| = 0 \Leftrightarrow A^{\top}\boldsymbol{x} = \lambda \boldsymbol{x}
$$

$A$ は交代的であり、$A^{\top} = -A$

$$
\therefore -A\boldsymbol{x} = \lambda \boldsymbol{x}
$$

$$
A\boldsymbol{x} = -\lambda \boldsymbol{x} 
$$

よって、$-\lambda$ も固有値として持つ。
