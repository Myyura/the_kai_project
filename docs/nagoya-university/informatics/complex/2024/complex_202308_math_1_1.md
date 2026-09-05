---
sidebar_label: "2023年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e430ba234e241d162a59ab76f6efe083.pdf)

共通の定義（題意の要約）：$N\times N$ 行列 $X$ の $i$ 行 $j$ 列成分を $X_j^i$ と書き，

$$
\det X=\sum_{j_1=1}^N\cdots\sum_{j_N=1}^N
\epsilon_{j_1,\ldots,j_N}X_{j_1}^1\cdots X_{j_N}^N
$$

とする。$\epsilon$ は $(j_1,\ldots,j_N)$ が $(1,\ldots,N)$ の偶置換なら $1$，
奇置換なら $-1$，重複がある場合は $0$ である。



以下の行列 $F$ の行列式 $\det F$ を求めよ。

$$
F = \begin{pmatrix} 0 & 3 & 0 & 0 & 0 \\ 0 & 0 & 5 & 0 & 2 \\ 1 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 4 & 4 \\ 0 & 0 & 0 & 1 & 0 \end{pmatrix}
$$

### 题目描述

求矩阵

$$
F=
\begin{pmatrix}
0&3&0&0&0\\
0&0&5&0&2\\
1&0&1&0&0\\
0&0&1&4&4\\
0&0&0&1&0
\end{pmatrix}
$$

的行列式 $\det F$。

## **Kai**

To calculate the determinant of matrix $F$ , we can use cofactor expansion.

$$
\begin{aligned}
\det(F)
&= -3 \begin{vmatrix} 0 & 5 & 0 & 2 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 4 & 4 \\ 0 & 0 & 1 & 0 \end{vmatrix} \\
&= 3 \begin{vmatrix} 5 & 0 & 2 \\ 1 & 4 & 4 \\ 0 & 1 & 0 \end{vmatrix} \\
&= -3 \begin{vmatrix} 5 & 2 \\ 1 & 4 \end{vmatrix}
=-3(20-2)=-54.
\end{aligned}
$$

Therefore, $\det(F) = -54$ .
