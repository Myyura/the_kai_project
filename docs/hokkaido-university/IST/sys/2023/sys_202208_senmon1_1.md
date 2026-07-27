---
sidebar_label: "2022年8月実施 専門科目1 問1 (応用数学I)"
tags:
  - Hokkaido-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 北海道大学 情報科学院 情報科学専攻 システム情報科学コース 2022年8月実施 専門科目1 問1 (応用数学I)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原 `Description` 未保存题干，无法唯一恢复所有设问。现有 `Kai` 仅能确认第 1-1 题涉及矩阵

$$
A=
\begin{pmatrix}
2&-1&2\\
-1&5&-1\\
2&-1&2
\end{pmatrix}.
$$

已保存解答完成了以下内容：

1. 求 $A$ 的特征值和相应单位特征向量。解答中确认特征值为 $0,3,6$，并分别给出单位特征向量。
2. 对与 $A$ 对应的二次型 $Q$，在

   $$
   \boldsymbol x^{\mathrm T}\boldsymbol x=1
   $$

   的条件下求最大值；保存的解答以 $A$ 的最大特征值处理该问题。

`Kai` 中只有“1-2)”标题而没有题干或解答，因而该部分无法可靠恢复，这里不臆造内容。

#### 考点

- **实对称矩阵的特征分解**：计算特征多项式并把各特征向量归一化。
- **Rayleigh 商与二次型极值**：在单位球面约束下，二次型最大值等于矩阵最大特征值。

## **Kai**
### 1-1)
#### (a)

$$
  \begin{align}
  A = \begin{pmatrix} 2 & -1 & 2 \\ -1 & 5 & -1 \\ 2 & -1 & 2 \end{pmatrix}
  \end{align}
$$

#### (b)
$A$ の固有値を $a$ とすると、

$$
\begin{align}
0
&= \det
\begin{pmatrix} 2-a & -1 & 2 \\ -1 & 5-a & -1 \\ 2 & -1 & 2-a \end{pmatrix}
\\
&= -a^3 + 9a^2 - 18a
\\
&= -a(a-3)(a-6)
\\
\therefore \ \ 
a &= 0, 3, 6
\end{align}
$$

である。
固有値 $a=0,3,6$ に属する大きさ $1$ の固有ベクトルは、それぞれ、

$$
\begin{align}
\frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\frac{1}{\sqrt{3}}
\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
, \ \ 
\frac{1}{\sqrt{6}}
\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
\end{align}
$$

である。

#### (c)
$A$ の最大の固有値は $6$ であるから、
$\boldsymbol{x}^T \boldsymbol{x} = 1$ のときの $Q$ の最大値は $6$ である。

### 1-2)
