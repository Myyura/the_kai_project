---
sidebar_label: "2020年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

A を零行列 $O$ ではない $n \times n$ 実行列 $(A \neq O)$ とし、 $\operatorname{rank} A$ を $A$ のランク (階数) とし、 $r = \operatorname{rank} A$ とおく。以下の問いに答えよ。ただし、同次連立1次方程式 $A \mathbf{x} = 0$ は $n-r$ 個の1次独立な解 $\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_{n-r}$ をもち、 $n-r$ 個を超える数の1次独立な解をもたないことは証明なしで使ってよい。

(i) $n \times n$ 実行列 $B$ が $A B = O$ を満たすとする。このとき

$$
\operatorname{rank} A + \operatorname{rank} B \leq n
$$

を示せ。

(ii) 行列 $A$ に対して、 $A B = O$ かつ

$$
\operatorname{rank} A + \operatorname{rank} B = n
$$

なる $n \times n$ 実行列 $B$ が存在することを示せ。

(iii) $n \times n$ 実行列 $B$ に対して

$$
\operatorname{rank}(A + B) \leq \operatorname{rank} A + \operatorname{rank} B
$$

を示せ。

(iv) $n \times n$ 実行列 $B$ に対して

$$
\operatorname{rank} A + \operatorname{rank} B \leq \operatorname{rank} AB + n
$$

を示せ。

### 题目描述

设 $A\ne O$ 是 $n\times n$ 实矩阵，$O$ 表示零矩阵，并记

$$
r=\operatorname{rank}A.
$$

可以不加证明地使用以下事实：齐次线性方程组

$$
A\boldsymbol{x}=\boldsymbol{0}
$$

有 $n-r$ 个线性无关解
$\boldsymbol{x}_1,\ldots,\boldsymbol{x}_{n-r}$，且不可能有超过
$n-r$ 个线性无关解。回答：

1. 若 $n\times n$ 实矩阵 $B$ 满足 $AB=O$，证明

$$
\operatorname{rank}A+\operatorname{rank}B\leq n.
$$

2. 对给定的 $A$，证明存在 $n\times n$ 实矩阵 $B$，同时满足

$$
AB=O
$$

和

$$
\operatorname{rank}A+\operatorname{rank}B=n.
$$

3. 对任意 $n\times n$ 实矩阵 $B$，证明

$$
\operatorname{rank}(A+B)
\leq
\operatorname{rank}A+\operatorname{rank}B.
$$

4. 对任意 $n\times n$ 实矩阵 $B$，证明

$$
\operatorname{rank}A+\operatorname{rank}B
\leq
\operatorname{rank}(AB)+n.
$$

## **Kai**

### (i) $AB=O$ の場合

$B$ の各列を $\boldsymbol b_j$ とする。 $AB=O$ から

$$
A\boldsymbol b_j=0
$$

なので、 $\operatorname{Im}B\subset\ker A$ である。したがって

$$
\operatorname{rank}B
\leq\dim\ker A
=n-\operatorname{rank}A,
$$

すなわち

$$
\operatorname{rank}A+\operatorname{rank}B\leq n.
$$

### (ii) 等号を実現する $B$

$r=\operatorname{rank}A$ とし、 $\ker A$ の基底を

$$
\boldsymbol x_1,\ldots,\boldsymbol x_{n-r}
$$

とする。これらと零列を並べて

$$
B=(\boldsymbol x_1\ \cdots\ \boldsymbol x_{n-r}\ 0\ \cdots\ 0)
$$

と定める。このとき $AB=O$ かつ $\operatorname{rank}B=n-r$ だから、

$$
\operatorname{rank}A+\operatorname{rank}B=n.
$$

### (iii) 和の階数

任意の $\boldsymbol x\in\mathbb R^n$ に対して

$$
(A+B)\boldsymbol x=A\boldsymbol x+B\boldsymbol x
\in\operatorname{Im}A+\operatorname{Im}B.
$$

よって

$$
\begin{aligned}
\operatorname{rank}(A+B)
&\leq\dim(\operatorname{Im}A+\operatorname{Im}B)\\
&\leq\operatorname{rank}A+\operatorname{rank}B.
\end{aligned}
$$

### (iv) Sylvester の不等式

線形写像 $A$ を $\operatorname{Im}B$ に制限する。この写像の核と像はそれぞれ

$$
\ker(A|_{\operatorname{Im}B})
=\ker A\cap\operatorname{Im}B
$$

および $\operatorname{Im}(AB)$ である。次元定理により、

$$
\operatorname{rank}B
=\dim(\ker A\cap\operatorname{Im}B)
+\operatorname{rank}(AB).
$$

ここで

$$
\dim(\ker A\cap\operatorname{Im}B)
\leq\dim\ker A
=n-\operatorname{rank}A.
$$

したがって

$$
\operatorname{rank}A+\operatorname{rank}B
\leq\operatorname{rank}(AB)+n
$$

を得る。
