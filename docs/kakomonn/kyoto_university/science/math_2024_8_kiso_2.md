---
comments: false
description: 京都大学 大学院 理学研究科 数学・数理解析専攻 2024年度 基礎科目 \[2\]
keywords: Kyoto-University, 2024-8
---

## Source
京都大学 大学院 理学研究科 数学・数理解析専攻 2024年度 基礎科目 \[2\]

## Description

## Kai
### (i)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{align}
0
&= \begin{vmatrix}
a-1-\lambda & 0 & 0 \\ 1 & -a-\lambda & 1 \\ 2a & -2a & a+1-\lambda
\end{vmatrix}
\\
&= (a-1-\lambda)
\begin{vmatrix} -a-\lambda & 1 \\ -2a & a+1-\lambda \end{vmatrix}
\\
&= -(\lambda-a+1)(\lambda^2 - \lambda - a(a-1))
\\
&= -(\lambda-a+1)(\lambda - a)(\lambda + a - 1)
\\
\therefore \ \ 
\lambda &= a-1, a, -a+1
\end{align}
$$

である。

### (ii)

$A$ を列基本変形すると、次のようにできる：

$$
\begin{align}
\begin{pmatrix}
a-1 & 0 & 0 \\ 0 & 1 & 0 \\ a-1 & a+1 & a(a-1)
\end{pmatrix}
.
\end{align}
$$

これを構成する3つの列ベクトルの1次独立性に注目すると、$A$ のランクは、$a=1$ のときは $1$ , $a=0$ のときは $2$ , その他のときは $3$であることがわかる。