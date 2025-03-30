---
sidebar_label: "システム情報科学コース 2022年8月実施 専門科目1 問1 (応用数学I)"
sidebar_position: 5
tags:
  - Hokkaido-University
---
# 北海道大学 情報科学院 情報科学専攻 システム情報科学コース 2022年8月実施 専門科目1 問1 (応用数学I)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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
