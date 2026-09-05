---
sidebar_label: "2018年8月実施 解析・線形代数 [2]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 名古屋大学 情報学研究科 知能システム学専攻 2018年8月実施 解析・線形代数 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

出典：[名古屋大学・2019年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e71e2adef95ac6ee904f160a89c4888f.pdf)、解析・線形代数。導出過程も示す。


次の行列 $P$ について、以下の問いに答えよ。

$$
P = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}
$$

(a) 行列 $P$ の固有値と単位固有ベクトルを求めよ。

(b) 行列 $P$ を対角化せよ。

(c) $q = \begin{pmatrix} x \\ y \end{pmatrix}$ とするとき、 $q' P q = 1$ を満たす座標平面上の点 $(x, y)$ の軌跡を描け. ただし、 $q'$ は $q$ の転置を表す。

### 题目描述

给定矩阵

$$
P=\begin{pmatrix}5&2\\2&2\end{pmatrix}.
$$

1. 求 $P$ 的全部特征值及相应的单位特征向量；
2. 将 $P$ 对角化；
3. 令

   $$
   \boldsymbol q=\begin{pmatrix}x\\y\end{pmatrix}.
   $$

   画出坐标平面上所有满足

   $$
   \boldsymbol q'P\boldsymbol q=1
   $$

   的点 $(x,y)$ 的轨迹，其中 $\boldsymbol q'$ 表示 $\boldsymbol q$ 的转置。

## **Kai**

(a) まず、固有値を求める。

$$
|P - \lambda I| = \begin{vmatrix} 5-\lambda & 2 \\ 2 & 2-\lambda \end{vmatrix} = (5-\lambda)(2-\lambda) - 4 = \lambda^2 - 7\lambda + 10 - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 1)(\lambda - 6) = 0
$$

よって、固有値は $\lambda_1 = 1$ と $\lambda_2 = 6$ である。

次に、固有ベクトルを求める。
$\lambda_1 = 1$ のとき、

$$
(P - I)v_1 = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$4x + 2y = 0$ より $y = -2x$ 。
単位固有ベクトルは $v_1 = \frac{1}{\sqrt{1^2 + (-2)^2}} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 \\ -2 \end{pmatrix}$ 。

$\lambda_2 = 6$ のとき、

$$
(P - 6I)v_2 = \begin{pmatrix} -1 & 2 \\ 2 & -4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$-x + 2y = 0$ より $x = 2y$ 。
単位固有ベクトルは $v_2 = \frac{1}{\sqrt{2^2 + 1^2}} \begin{pmatrix} 2 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ 。

(b) $P$ を対角化するには、固有ベクトルを並べた行列 $S$ を作る。

$$
S = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}
$$

このとき、 $S^{-1} = S^T = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$ である。
よって、 $S^{-1}PS = \begin{pmatrix} 1 & 0 \\ 0 & 6 \end{pmatrix}$ となり、 $P$ は対角化された。

(c) $q' P q = \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 5x + 2y \\ 2x + 2y \end{pmatrix} = 5x^2 + 2xy + 2xy + 2y^2 = 5x^2 + 4xy + 2y^2 = 1$ 。
$q=S\begin{pmatrix}x'\\y'\end{pmatrix}$ とおけば

$$
(x')^2+6(y')^2=1
$$

となる。したがって，原点を中心とし，半軸の長さが $1$ と
$1/\sqrt6$ の楕円である。長軸方向は
$\frac1{\sqrt5}(1,-2)^T$ ，短軸方向は
$\frac1{\sqrt5}(2,1)^T$ である。

![二次曲線 5x² + 4xy + 2y² = 1 の回転楕円](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2019/nagoya-aisys2019-ellipse.svg)
