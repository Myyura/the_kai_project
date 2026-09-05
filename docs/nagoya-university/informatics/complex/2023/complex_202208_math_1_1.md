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

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/153686fd38b76aec8fe63b4c47663818.pdf)

相似変換の定義（題意の要約）：$Q^TQ=I$ を満たす実 $2\times2$ 行列 $Q$，
$\lambda>0$，$h\in\mathbb R^2$ による $r'=\lambda Qr+h$ を考える。
$\lambda=1$ のときは合同変換である。



任意の2次直交行列 $A$ は、 $-1 \leq a \leq 1$ の範囲の実数 $a$ によって定められる行列

(ア) $\begin{pmatrix} a & \mp \sqrt{1-a^2} \\ \pm \sqrt{1-a^2} & a \end{pmatrix}$ または $\begin{pmatrix} a & \pm \sqrt{1-a^2} \\ \pm \sqrt{1-a^2} & -a \end{pmatrix}$

(一つの行列の中の複号は同順) に限られることを証明せよ。つまり、 $A^T A = I$ を満たす 2次正方行列 $A$ は必ず(ア) に表示された行列のどれかに等しいことを証明せよ。

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



## **Kai**

Let the first column of $A$ be $u=(a,b)^T$. Orthogonality gives
$a^2+b^2=1$, hence $-1\le a\le1$ and $b=\pm\sqrt{1-a^2}$.
The second column must be a unit vector perpendicular to $u$.
In $\mathbb R^2$ the only two choices are $(-b,a)^T$ and $(b,-a)^T$.
Therefore

$$
\boxed{
A=\begin{pmatrix}a&-b\\b&a\end{pmatrix}
\quad\text{or}\quad
A=\begin{pmatrix}a&b\\b&-a\end{pmatrix},
\qquad b=\pm\sqrt{1-a^2}.
}
$$

This proves the two stated families, including $a=\pm1$ where $b=0$.
Conversely, direct multiplication gives $A^TA=I$ for both families.
Their determinants are $1$ and $-1$, respectively.
