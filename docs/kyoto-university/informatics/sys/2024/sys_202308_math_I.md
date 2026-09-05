---
sidebar_label: 2023年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Matrix-Trace
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Kernel-and-Image
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 数学【I】

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/68856211000000002201c8dd?xsec_token=ABj3Hdw0xF5JHzUtFSdmNnW7Q_3ETrH59pYtdEZQZu2FI=)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2023_sys.pdf)
### 問1
以下の設問に答えよ．

(i) 次式を満たす実数の組 $(x_1, x_2, x_3, x_4)$ が唯一存在するならば，その $x_3$ の値を示せ．等式を満たす実数の組が唯一でない場合は「唯一でない」，存在しない場合は「存在しない」と答えよ．

$$
x_1
\begin{bmatrix}
11 \\ 11 \\ -11 \\ -11
\end{bmatrix}
+
x_2
\begin{bmatrix}
12 \\ -12 \\ 12 \\ -12
\end{bmatrix}
+
x_3
\begin{bmatrix}
31 \\ 31 \\ 31 \\ 31
\end{bmatrix}
+
x_4
\begin{bmatrix}
41 \\ -41 \\ -41 \\ 41
\end{bmatrix}
=
\begin{bmatrix}
23 \\ -11 \\ -51 \\ 37
\end{bmatrix}
$$

(ii) 次の行列は重複を含め 4 つの固有値を有する．いま，それら 4 つの固有値の和が $23$ だという．これを満たすような実数の組 $(x, y)$ を，横軸を $x$ ，縦軸を $y$ とする座標平面にプロットせよ．

$$
\begin{bmatrix}
1 & -1 & 1 & 2.5 \\
-1 & 4 & -7 & 0.5 \\
1 & -7 & 4 & y \\
2.5 & 0.5 & y & x
\end{bmatrix}
$$

---

### 問2
以下の設問に答えよ．

(i) 次の行列 $A$ の行列式 $\det A$ の最大値を求めよ．ただし， $s$ と $t$ は実数とする．

$$
A = \begin{bmatrix}
1 & 1+s & 1 \\
1+s & 1 & 1+t \\
1 & 1+t & 1
\end{bmatrix}
$$

(ii) 次式を満たす実正方行列 $B$ は存在するか．理由とともに答えよ．

$$
B^2 =
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}
$$

---

### 問3
ベクトル $x$ と $y$ の内積が $x^T y$ で与えられる $3$ 次元実数ベクトル空間 $V$ における $2$ 次元部分空間 $V_1$ とその直交補空間 $V_2$ について考える． $V_1$ の基底は $a$ と $b$ ， $V_2$ の基底は $c$ であり， $a, c$ とは次式で与えられるとする．以下の設問に答えよ．

$$
a = \begin{bmatrix} 1 \\ 2 \\ k \end{bmatrix}, \quad
c = \begin{bmatrix} 1 \\ -1 \\ -1 \end{bmatrix}
$$

(i) 実数 $k$ を求めよ．さらに， $a$ と直交する基底 $b$ をひとつ求めよ．

(ii) 部分空間 $V_1$ への正射影 $p$ について，その射影行列 $P$ を求めよ．また， $P$ の階数（ランク）を求めよ．

(iii) 部分空間 $V_2$ への正射影 $q$ について，その射影行列 $Q$ を求めよ．また， $q$ の核（カーネル）を求めよ．

(iv) 次式で与えられる $x$ とのユークリッド距離 $d$ が最も小さくなる部分空間 $V_1$ の元 $y$ を， $a$ と設問 (i) で求めた $b$ の線形結合として求めよ．また，そのときの $d$ を求めよ．

$$
x = \begin{bmatrix} 3 \\ 4 \\ -1 \end{bmatrix}
$$

### 题目描述

回答以下三题。

1. 完成下列各问。

   1. 考虑实数未知量 $(x_1,x_2,x_3,x_4)$ 满足的向量方程

$$
x_1
\begin{bmatrix}
11\\11\\-11\\-11
\end{bmatrix}
+x_2
\begin{bmatrix}
12\\-12\\12\\-12
\end{bmatrix}
+x_3
\begin{bmatrix}
31\\31\\31\\31
\end{bmatrix}
+x_4
\begin{bmatrix}
41\\-41\\-41\\41
\end{bmatrix}
=
\begin{bmatrix}
23\\-11\\-51\\37
\end{bmatrix}.
$$

若满足方程的实数组唯一存在，给出该唯一解中 $x_3$ 的值；若解不唯一，回答“解不唯一”；若没有解，回答“无解”。

   2. 下列矩阵按代数重数计有四个特征值：

$$
\begin{bmatrix}
1&-1&1&2.5\\
-1&4&-7&0.5\\
1&-7&4&y\\
2.5&0.5&y&x
\end{bmatrix}.
$$

已知这四个特征值之和为 $23$。在以 $x$ 为横轴、$y$ 为纵轴的坐标平面上，画出所有满足条件的实数对 $(x,y)$。

2. 完成下列各问。

   1. 对任意实数 $s,t$，令

$$
A=
\begin{bmatrix}
1&1+s&1\\
1+s&1&1+t\\
1&1+t&1
\end{bmatrix}.
$$

求 $\det A$ 的最大值。
   2. 判断是否存在实 $2\times2$ 方阵 $B$ 满足

$$
B^2=
\begin{bmatrix}
0&1\\
0&0
\end{bmatrix},
$$

并说明理由。

3. 在三维实向量空间 $V$ 中采用内积
   $\boldsymbol{x}^{\mathrm T}\boldsymbol{y}$。设二维子空间 $V_1$ 的正交补为
   $V_2$；$\boldsymbol{a},\boldsymbol{b}$ 是 $V_1$ 的一组基，
   $\boldsymbol{c}$ 是 $V_2$ 的一组基，并且

$$
\boldsymbol{a}
=
\begin{bmatrix}
1\\2\\k
\end{bmatrix},
\qquad
\boldsymbol{c}
=
\begin{bmatrix}
1\\-1\\-1
\end{bmatrix}.
$$

   1. 求实数 $k$，并给出一个与 $\boldsymbol{a}$ 正交、且与
      $\boldsymbol{a}$ 共同构成 $V_1$ 一组基的向量
      $\boldsymbol{b}$。
   2. 设 $p$ 是到 $V_1$ 的正交投影。求其投影矩阵 $P$，并求
      $\operatorname{rank}P$。
   3. 设 $q$ 是到 $V_2$ 的正交投影。求其投影矩阵 $Q$，并求
      $\ker q$。
   4. 给定

$$
\boldsymbol{x}
=
\begin{bmatrix}
3\\4\\-1
\end{bmatrix},
$$

在 $V_1$ 中求与 $\boldsymbol{x}$ 的 Euclidean 距离最小的向量
$\boldsymbol{y}$；把 $\boldsymbol{y}$ 写成
$\boldsymbol{a}$ 与第 1 小问所取 $\boldsymbol{b}$ 的线性组合，并求该最小距离
$d$。

## **Kai**
### 問1 & 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_math_I_p1_p2.jpg" width="700" alt=""/>
</figure>

### 問3

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_math_I_p3.jpg" width="700" alt=""/>
</figure>
