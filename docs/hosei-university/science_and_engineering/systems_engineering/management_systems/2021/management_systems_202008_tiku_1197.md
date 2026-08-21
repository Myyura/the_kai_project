---
sidebar_label: "2020年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[I] 3 次正方行列 $A$ を， $A = \begin{bmatrix} 2 & 2 & 1 \\ 4 & 0 & 1 \\ 1 & 1 & 3 \end{bmatrix}$ とする．

(1) ベクトル $\boldsymbol{x}_1 = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$ は $A$ の固有ベクトルである．対応する固有値 $\lambda_1$ を答えよ．

(2) $A$ は $\lambda_2 = 2$ を固有値にもつ． $\lambda_2$ に対する固有ベクトル $\boldsymbol{x}_2$ をひとつ求めよ．

(3) ベクトル $\boldsymbol{x}_3 = \begin{bmatrix} 9 \\ -19 \\ 2 \end{bmatrix}$ について， $A\boldsymbol{x}_3$ を求めよ．

(4) ベクトルの組 $\{\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3\}$ は $\mathbb{R}^3$ の基底になっている．ここで， $\boldsymbol{x}_1, \boldsymbol{x}_3$ はそれぞれ (1), (3) で与えたベクトルで， $\boldsymbol{x}_2$ は (2) で求めたベクトルである．
$A$ が定める線形写像を $F_A$ とする：

$$
F_A : \mathbb{R}^3 \longrightarrow \mathbb{R}^3; \quad \boldsymbol{x} \longmapsto F_A(\boldsymbol{x}) = A\boldsymbol{x}
$$

$F_A$ の，基底 $\{\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3\}$ に関する表現行列 $D$ を求めよ．すなわち， $\boldsymbol{x} \in \mathbb{R}^3$ が $\boldsymbol{x} = a\boldsymbol{x}_1 + b\boldsymbol{x}_2 + c\boldsymbol{x}_3$ ， $F_A(\boldsymbol{x}) = a'\boldsymbol{x}_1 + b'\boldsymbol{x}_2 + c'\boldsymbol{x}_3$ ( $a, b, c, a', b', c' \in \mathbb{R}$ ) と表されるとき，

$$
D \begin{bmatrix} a \\ b \\ c \end{bmatrix} = \begin{bmatrix} a' \\ b' \\ c' \end{bmatrix}
$$

となる 3 次正方行列 $D$ を求めよ．

### 题目描述

【I】给定三阶方阵

$$
A=\begin{bmatrix}
2&2&1\\
4&0&1\\
1&1&3
\end{bmatrix}.
$$

（1）向量

$$
\boldsymbol{x}_1=\begin{bmatrix}1\\1\\1\end{bmatrix}
$$

是 $A$ 的特征向量，求对应的特征值 $\lambda_1$。

（2）已知 $A$ 还具有特征值 $\lambda_2=2$，求一个与 $\lambda_2$ 对应的特征向量 $\boldsymbol{x}_2$。

（3）对向量

$$
\boldsymbol{x}_3=\begin{bmatrix}9\\-19\\2\end{bmatrix},
$$

求 $A\boldsymbol{x}_3$。

（4）向量组 $\{\boldsymbol{x}_1,\boldsymbol{x}_2,\boldsymbol{x}_3\}$ 是 $\mathbb{R}^3$ 的一组基，其中 $\boldsymbol{x}_1,\boldsymbol{x}_3$ 分别为（1）、（3）给出的向量，$\boldsymbol{x}_2$ 为（2）求得的向量。令 $F_A$ 为矩阵 $A$ 所定义的线性映射：

$$
F_A:\mathbb{R}^3\longrightarrow\mathbb{R}^3;\qquad
\boldsymbol{x}\longmapsto F_A(\boldsymbol{x})=A\boldsymbol{x}.
$$

求 $F_A$ 关于基 $\{\boldsymbol{x}_1,\boldsymbol{x}_2,\boldsymbol{x}_3\}$ 的表示矩阵 $D$。也就是说，当

$$
\boldsymbol{x}=a\boldsymbol{x}_1+b\boldsymbol{x}_2+c\boldsymbol{x}_3,
\qquad
F_A(\boldsymbol{x})=a'\boldsymbol{x}_1+b'\boldsymbol{x}_2+c'\boldsymbol{x}_3
$$

（$a,b,c,a',b',c'\in\mathbb{R}$）时，求满足

$$
D\begin{bmatrix}a\\b\\c\end{bmatrix}
=\begin{bmatrix}a'\\b'\\c'\end{bmatrix}
$$

的三阶方阵 $D$。

## **Kai**

## 解答

### (1)

直接計算すると

$$
A\boldsymbol{x}_1=
\begin{bmatrix}5\\5\\5\end{bmatrix}
=5\begin{bmatrix}1\\1\\1\end{bmatrix}.
$$

したがって

$$
\boxed{\lambda_1=5}.
$$

### (2)

$(A-2I)\boldsymbol{x}=0$ は

$$
\begin{bmatrix}
0&2&1\\
4&-2&1\\
1&1&1
\end{bmatrix}
\begin{bmatrix}x\\y\\z\end{bmatrix}=0
$$

である。これを解くと $x=y$ 、 $z=-2y$ となるので、例えば

$$
\boxed{\boldsymbol{x}_2=\begin{bmatrix}1\\1\\-2\end{bmatrix}}
$$

を取れる。

### (3)

行列積を計算すると

$$
A\boldsymbol{x}_3
=\begin{bmatrix}
2\cdot9+2(-19)+2\\
4\cdot9+2\\
9-19+3\cdot2
\end{bmatrix}
=\begin{bmatrix}-18\\38\\-4\end{bmatrix}
=-2\boldsymbol{x}_3.
$$

したがって

$$
\boxed{A\boldsymbol{x}_3=\begin{bmatrix}-18\\38\\-4\end{bmatrix}}.
$$

### (4)

(1)--(3) より

$$
A\boldsymbol{x}_1=5\boldsymbol{x}_1,\qquad
A\boldsymbol{x}_2=2\boldsymbol{x}_2,\qquad
A\boldsymbol{x}_3=-2\boldsymbol{x}_3.
$$

なお、列にこれらのベクトルを並べた行列の行列式は $-84\ne0$ なので、確かに基底である。したがって、この基底に関する各像の座標ベクトルを列に並べれば

$$
\boxed{D=
\begin{bmatrix}
5&0&0\\
0&2&0\\
0&0&-2
\end{bmatrix}}.
$$
