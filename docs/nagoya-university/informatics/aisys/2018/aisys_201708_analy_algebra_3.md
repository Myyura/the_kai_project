---
sidebar_label: "2017年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---
# 名古屋大学 情報学研究科 知能システム学専攻 2017年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

出典：[名古屋大学・2018年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/0418e4d9b838956c155278f11a9e0bbf.pdf)、解析・線形代数。導出過程も示す。


次の対称行列 $A$ について、以下の問いに答えよ。

$$
A = \begin{pmatrix} 5 & -3 \\  -3 & 5 \end{pmatrix}
$$

(a) $A$ のすべての固有値および各固有値に対する単位固有ベクトルを求めよ。

(b) $A$ を対角化する直交行列 $P = \begin{pmatrix} a & b \\  c & d \end{pmatrix}$ のうち $a=d$ のものを求め、 $A$ を対角化せよ。

(c) ある1次変換 $\begin{pmatrix} x \\ y \end{pmatrix} = U \begin{pmatrix} x' \\ y' \end{pmatrix}$ により、2次形式 $Q(x,y) = 5x^2 - 6xy + 5y^2$ を $x'y'$ の項を含まない2次形式に変形せよ。

(d) 2次曲線 $5x^2 - 6xy + 5y^2 = 8$ の概形を図示せよ。

### 题目描述

给定实对称矩阵

$$
A=\begin{pmatrix}5&-3\\-3&5\end{pmatrix}.
$$

1. 求 $A$ 的全部特征值，以及每个特征值对应的单位特征向量；
2. 在所有可将 $A$ 对角化的正交矩阵

   $$
   P=\begin{pmatrix}a&b\\c&d\end{pmatrix}
   $$

   中，求一个满足 $a=d$ 的矩阵，并写出 $A$ 的对角化结果；
3. 求一个一次变换

   $$
   \begin{pmatrix}x\\y\end{pmatrix}
   =
   U\begin{pmatrix}x'\\y'\end{pmatrix},
   $$

   将二次型

   $$
   Q(x,y)=5x^2-6xy+5y^2
   $$

   化为不含 $x'y'$ 项的二次型；
4. 画出二次曲线

   $$
   5x^2-6xy+5y^2=8
   $$

   的大致形状。

## **Kai**

解答：
(a) 固有値を求める。

$$
|A - \lambda I| = \begin{vmatrix} 5-\lambda & -3 \\  -3 & 5-\lambda \end{vmatrix} = (5-\lambda)^2 - 9 = \lambda^2 - 10\lambda + 16 = (\lambda - 2)(\lambda - 8) = 0
$$

固有値は $\lambda_1 = 2, \lambda_2 = 8$ である。

$\lambda_1 = 2$ のとき、 $\begin{pmatrix} 3 & -3 \\  -3 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ より、 $x = y$ 。単位固有ベクトルは $\pm\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 。

$\lambda_2 = 8$ のとき、 $\begin{pmatrix} -3 & -3 \\ -3 & -3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ より、 $x = -y$ 。単位固有ベクトルは $\pm\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ 。

(b) 固有値 $2,8$ に対応する単位固有ベクトルの符号を選び，

$$
P=
\begin{pmatrix}
\frac1{\sqrt2}&-\frac1{\sqrt2}\\
\frac1{\sqrt2}&\frac1{\sqrt2}
\end{pmatrix}
$$

とおく。このとき $P$ は直交行列で，確かに
$a=d=1/\sqrt2$ を満たす。また，

$$
\boxed{
P^TAP=
\begin{pmatrix}
2&0\\
0&8
\end{pmatrix}
}.
$$

(c) $U=P$ として
$\begin{pmatrix} x \\ y \end{pmatrix} = U \begin{pmatrix} x' \\ y' \end{pmatrix}$
とおけば、 $5x^2 - 6xy + 5y^2 = 2(x')^2 + 8(y')^2$ となる。

(d) $5x^2 - 6xy + 5y^2 = 8$ は、回転楕円である。
$\frac{(x')^2}{4} + \frac{(y')^2}{1} = 1$ であり、これは楕円を表す。

長軸は $y=x$ 方向で半径 $2$、短軸は $y=-x$ 方向で半径 $1$ である。長軸の端点は $(\sqrt2,\sqrt2)$ と $(-\sqrt2,-\sqrt2)$ である。

![二次曲線 5x² − 6xy + 5y² = 8 の回転楕円](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2018/nagoya-aisys2018-ellipse.svg)
