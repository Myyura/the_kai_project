---
sidebar_label: "2023年度 基礎科目 [2]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Subspace-Sum-and-Intersection-Dimension
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題2

## **Author**

[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

$a$ を実数とし, 実 $2 \times 4$ 行列 $A, B$ を

$$
A = \begin{pmatrix}
1 & 0 & a & a+1 \\ 0 & 1 & 1 & 1
\end{pmatrix},
\ \ \ 
B = \begin{pmatrix}
0 & 0 & 1 & 1 \\ -1 & 3 & 3-a & 0
\end{pmatrix}
$$

と定める. これらを用いて, 線形写像 $f: \mathbb{R}^4 \rightarrow \mathbb{R}^2$, $g: \mathbb{R}^4 \rightarrow \mathbb{R}^2$ を $f(x) = Ax$, $g(x) = Bx \ \ (x \in \mathbb{R}^4 )$ と定義する. このとき,

$$
\text{dim}(\text{Ker}(f) \cap \text{Ker}(g)),\  \text{dim}(\text{Ker}(f) + \text{Ker}(g))
$$

を求めよ.

#### 题目描述

设 $a$ 为实数，定义两个实 $2\times4$ 矩阵

$$
A=
\begin{pmatrix}
1&0&a&a+1\\
0&1&1&1
\end{pmatrix},
\qquad
B=
\begin{pmatrix}
0&0&1&1\\
-1&3&3-a&0
\end{pmatrix}.
$$

由此定义线性映射

$$
f:\mathbb R^4\to\mathbb R^2,\quad f(x)=Ax,
$$

$$
g:\mathbb R^4\to\mathbb R^2,\quad g(x)=Bx.
$$

求

$$
\dim\bigl(\ker f\cap\ker g\bigr),
\qquad
\dim\bigl(\ker f+\ker g\bigr).
$$

## **Kai**

$\mathrm{Ker}(f)$ を求めるため

$$
\begin{aligned}
\begin{pmatrix} 1 & 0 & a & a+1 \\ 0 & 1 & 1 & 1 \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \\ \gamma \\ \delta \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\alpha &= -a \gamma - (a+1) \delta
, \\
\beta &= - \gamma - \delta
\end{aligned}
$$

となるので、

$$
\begin{aligned}
u_1 = \begin{pmatrix} -a \\ -1 \\ 1 \\ 0 \end{pmatrix}
, \ \ 
u_2 = \begin{pmatrix} -(a+1) \\ -1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

は $\mathrm{Ker}(f)$ の基底であることがわかる。

また、 $\mathrm{Ker}(g)$ を求めるため

$$
\begin{aligned}
\begin{pmatrix} 0 & 0 & 1 & 1 \\ -1 & 3 & 3-a & 0 \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \\ \gamma \\ \delta \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\delta &= - \gamma
, \\
\alpha &= 3 \beta + (3-a) \gamma
\end{aligned}
$$

となるので、

$$
\begin{aligned}
v_1 = \begin{pmatrix} 3 \\ 1 \\ 0 \\ 0 \end{pmatrix}
, \ \ 
v_2 = \begin{pmatrix} 3-a \\ 0 \\ 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

は $\mathrm{Ker}(g)$ の基底であることがわかる。

共通核は積み重ねた行列の核である。行基本変形により

$$
\begin{pmatrix}A\\B\end{pmatrix}
\sim
\begin{pmatrix}
1&0&a&a+1\\
0&1&1&1\\
0&0&1&1\\
0&0&0&a-2
\end{pmatrix}
$$

となる。したがって、

$$
\begin{aligned}
\mathrm{dim} \left( \mathrm{Ker}(f) \cap \mathrm{Ker}(g) \right)
&=\begin{cases}0&(a\ne2),\\1&(a=2),\end{cases}\\
\mathrm{dim} \left( \mathrm{Ker}(f) + \mathrm{Ker}(g) \right)
&=2+2-\mathrm{dim}\left(\mathrm{Ker}(f)\cap\mathrm{Ker}(g)\right)\\
&=\begin{cases}4&(a\ne2),\\3&(a=2)\end{cases}
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
