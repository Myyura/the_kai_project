---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$R$ を実数集合 (set of real numbers) とし、

$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 2 & -1 & 1 \\ 3 & 1 & 3 \\ 2 & -1 & 0 \end{bmatrix}
$$

とし、線形写像 (linear transformation) $f: R^3 \to R^4$ が

$$
f(\mathbf{x}) = A\mathbf{x}, \quad \mathbf{x} \in R^3
$$

と表せるとする。このとき、 $f(\mathbf{x}) = f(\mathbf{y})$ ならば $\mathbf{x} = \mathbf{y}$ であることを示せ。

### 题目描述

记实数集为 $\mathbb R$，令

$$
A=\begin{bmatrix}
1&1&2\\
2&-1&1\\
3&1&3\\
2&-1&0
\end{bmatrix},
$$

并定义线性映射

$$
f:\mathbb R^3\to\mathbb R^4,\qquad
f(\mathbf x)=A\mathbf x\quad(\mathbf x\in\mathbb R^3).
$$

证明：若 $f(\mathbf x)=f(\mathbf y)$，则 $\mathbf x=\mathbf y$。

## **Kai**

We want to show that if $f(\mathbf{x}) = f(\mathbf{y})$ , then $\mathbf{x} = \mathbf{y}$ . This is equivalent to showing that $f(\mathbf{x}) = A\mathbf{x}$ is injective (one-to-one).

If $f(\mathbf{x}) = f(\mathbf{y})$ , then $A\mathbf{x} = A\mathbf{y}$ .
Thus, $A\mathbf{x} - A\mathbf{y} = \mathbf{0}$ , which means $A(\mathbf{x} - \mathbf{y}) = \mathbf{0}$ .
Let $\mathbf{z} = \mathbf{x} - \mathbf{y}$ . We want to show that $A\mathbf{z} = \mathbf{0}$ implies $\mathbf{z} = \mathbf{0}$ .

In other words, we want to show that the kernel (null space) of $A$ is only the zero vector.  We can determine this by row reducing $A$ .

$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 2 & -1 & 1 \\ 3 & 1 & 3 \\ 2 & -1 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & -3 & -3 \\ 0 & -2 & -3 \\ 0 & -3 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & -2 & -3 \\ 0 & -3 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}
$$

Since the row reduced echelon form of $A$ has rank 3, which is the number of columns, the kernel of $A$ is $\{\mathbf{0}\}$ . Thus, $A\mathbf{z} = \mathbf{0}$ implies $\mathbf{z} = \mathbf{0}$ .  Since $\mathbf{z} = \mathbf{x} - \mathbf{y}$ , we have $\mathbf{x} - \mathbf{y} = \mathbf{0}$ , so $\mathbf{x} = \mathbf{y}$ .
