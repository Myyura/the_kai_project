---
sidebar_label: "2023年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/17b639d81a91ac5dca245f353c6a2378.pdf)

以下の図に示す線形写像 $f: \mathbb{R}^3 \to \mathbb{R}^3$ について考える。 $A', B', C', D', P'$ はそれぞれ点 $A, B, C, D, P$ を写像 $f$ で移した点である。点 $P'$ の座標を求めよ。

![線形写像による点 A、B、C、D、P とその像の対応](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/informatics/aisys/2024/aisys_202308_analy_algebra_3_linear_map.svg)

図中の座標は次のとおりである。

$$
\begin{aligned}
A&=(4,2,2),&A'&=(1,1,1),\\
B&=(5,6,5),&B'&=(1,2,1),\\
C&=(6,7,3),&C'&=(2,2,1),\\
D&=(5,3,0),&D'&=(2,1,1),\\
P&=(10,6,0).
\end{aligned}
$$

### 题目描述

考察上图所示的线性映射

$$
f:\mathbb R^3\to\mathbb R^3
$$

图中的 $A',B',C',D',P'$ 分别是 $A,B,C,D,P$ 在 $f$ 下的像。求点 $P'$ 的坐标。

图中已知点的坐标为：

$$
\begin{aligned}
A&=(4,2,2),&A'&=(1,1,1),\\
B&=(5,6,5),&B'&=(1,2,1),\\
C&=(6,7,3),&C'&=(2,2,1),\\
D&=(5,3,0),&D'&=(2,1,1),\\
P&=(10,6,0).
\end{aligned}
$$

## **Kai**

線形写像 $f:\mathbb{R}^3\to\mathbb{R}^3$ により，点 $P$ の像 $P'$ の座標を求める．
各点を原点からの位置ベクトルで表し，

$$
\mathbf{a}=
\begin{pmatrix}
4\\2\\2
\end{pmatrix},
\quad
\mathbf{b},\quad
\mathbf{c},\quad
\mathbf{d}=
\begin{pmatrix}
5\\3\\0
\end{pmatrix},
\quad
\mathbf{p}=
\begin{pmatrix}
10\\6\\0
\end{pmatrix}
$$

とする．また，

$$
f(\mathbf{a})=\mathbf{a'}=
\begin{pmatrix}
1\\1\\1
\end{pmatrix},
\qquad
f(\mathbf{d})=\mathbf{d'}=
\begin{pmatrix}
2\\1\\1
\end{pmatrix}
$$

が与えられているものとする．

点 $P$ と点 $D$ の座標を比較すると，

$$
\mathbf{p}
=
\begin{pmatrix}
10\\6\\0
\end{pmatrix}
=
2
\begin{pmatrix}
5\\3\\0
\end{pmatrix}
=2\mathbf{d}
$$

が成り立つ．すなわち，

$$
\mathbf{p}=2\mathbf{d}
$$

である．

$f$ は線形写像であるから，

$$
f(c\mathbf{v})=c f(\mathbf{v})
$$

が任意のスカラー $c$ とベクトル $\mathbf{v}$ に対して成り立つ．よって，

$$
\mathbf{p'}
=f(\mathbf{p})
=f(2\mathbf{d})
=2f(\mathbf{d})
=2\mathbf{d'}
$$

となる．

$\mathbf{d'}$ の値を代入すると，

$$
\mathbf{p'}
=
2
\begin{pmatrix}
2\\1\\1
\end{pmatrix}
=
\begin{pmatrix}
4\\2\\2
\end{pmatrix}
$$

を得る．

したがって，点 $P'$ の座標は

$$
(4,\,2,\,2)
$$

である．
