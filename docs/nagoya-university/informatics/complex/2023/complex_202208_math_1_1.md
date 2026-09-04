---
sidebar_label: "2022年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

任意の2次直交行列 $A$ は、 $-1 \leq a \leq 1$ の範囲の実数 $a$ によって定められる行列

(ア) $\begin{pmatrix} a & \pm \sqrt{1-a^2} \\ \pm \sqrt{1-a^2} & a \end{pmatrix}$ または $\begin{pmatrix} a & \pm \sqrt{1-a^2} \\ \pm \sqrt{1-a^2} & -a \end{pmatrix}$

(一つの行列の中の複合は同順) に限られることを証明せよ。つまり、 $A^T A = I$ を満たす 2次正方行列 $A$ は必ず(ア) に表示された行列のどれかに等しいことを証明せよ。

### 题目描述

证明任意 $2$ 阶正交矩阵 $A$ 都可由某个满足 $-1\le a\le1$ 的实数 $a$ 表示为下列两族之一。令

$$
b=\sqrt{1-a^2},\qquad \varepsilon\in\{1,-1\},
$$

则

$$
A=
\begin{pmatrix}
a&-\varepsilon b\\
\varepsilon b&a
\end{pmatrix}
\quad\text{或}\quad
A=
\begin{pmatrix}
a&\varepsilon b\\
\varepsilon b&-a
\end{pmatrix}. \tag{ア}
$$

也就是说，证明每个满足 $A^{\mathsf T}A=I$ 的 $2\times2$ 实矩阵都属于式 (ア) 所列的四种符号组合。

原始 Description 的第一族复号在纯文本中显示为同号；但由 $A^{\mathsf T}A=I$ 以及 Kai 的四种情况可唯一确定，该族两个非对角元应取相反符号。上式用 $\varepsilon$ 消除了这一排版歧义。

## **Kai**

Let $A = \begin{pmatrix} p & q \\ r & s \end{pmatrix}$ . Since $A$ is an orthogonal matrix, $A^T A = I$ .

So, $\begin{pmatrix} p & r \\ q & s \end{pmatrix} \begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ .

This implies:

1.  $p^2 + r^2 = 1$
2.  $q^2 + s^2 = 1$
3.  $pq + rs = 0$

From (1), let $p = a$ . Then $r = \pm \sqrt{1 - a^2}$ .
From (2), let $q = b$ . Then $s = \pm \sqrt{1 - b^2}$ .

Substituting into (3), we get $ab + (\pm \sqrt{1-a^2})(\pm \sqrt{1-b^2}) = 0$ .
So, $ab = \mp \sqrt{(1-a^2)(1-b^2)}$ .

Squaring both sides, $a^2 b^2 = (1-a^2)(1-b^2) = 1 - a^2 - b^2 + a^2 b^2$ .
Thus, $1 - a^2 - b^2 = 0$ , or $a^2 + b^2 = 1$ .
So, $b = \pm \sqrt{1 - a^2}$ .

Then $s = \pm \sqrt{1 - b^2} = \pm \sqrt{1 - (1 - a^2)} = \pm \sqrt{a^2} = \pm a$ .

If $q = \sqrt{1 - a^2}$ , then $ab + rs = a\sqrt{1-a^2} + r s = 0$ . Thus $rs = -a\sqrt{1-a^2}$ .
Case 1: If $r = \sqrt{1-a^2}$ , then $s = -a$ . Thus $A = \begin{pmatrix} a & \sqrt{1-a^2} \\ \sqrt{1-a^2} & -a \end{pmatrix}$ .
Case 2: If $r = -\sqrt{1-a^2}$ , then $s = a$ . Thus $A = \begin{pmatrix} a & \sqrt{1-a^2} \\ -\sqrt{1-a^2} & a \end{pmatrix}$ .

If $q = -\sqrt{1 - a^2}$ , then $ab + rs = -a\sqrt{1-a^2} + rs = 0$ . Thus $rs = a\sqrt{1-a^2}$ .
Case 3: If $r = \sqrt{1-a^2}$ , then $s = a$ . Thus $A = \begin{pmatrix} a & -\sqrt{1-a^2} \\ \sqrt{1-a^2} & a \end{pmatrix}$ .
Case 4: If $r = -\sqrt{1-a^2}$ , then $s = -a$ . Thus $A = \begin{pmatrix} a & -\sqrt{1-a^2} \\ -\sqrt{1-a^2} & -a \end{pmatrix}$ .

Therefore, putting $b=\sqrt{1-a^2}$ and $\varepsilon=\pm1$ , every such matrix has one of the two forms

$$
\boxed{
\begin{pmatrix}
a&-\varepsilon b\\
\varepsilon b&a
\end{pmatrix}
\quad\text{or}\quad
\begin{pmatrix}
a&\varepsilon b\\
\varepsilon b&-a
\end{pmatrix}
}.
$$

The first family has opposite off-diagonal signs and determinant $1$ ; the second has equal off-diagonal signs and determinant $-1$ . These are exactly the four cases listed above.
