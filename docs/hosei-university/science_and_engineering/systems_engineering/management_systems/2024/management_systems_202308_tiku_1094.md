---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を次で定める。

$$
A = \begin{pmatrix} 2 & 0 & 0 \\ 1 & \frac{3}{2} & 1 \\ 1 & -\frac{1}{2} & 0 \end{pmatrix}
$$

(1) $A$ の固有値 $\lambda_1, \lambda_2, \lambda_3$ を求めよ、但し $\lambda_1 < \lambda_2 < \lambda_3$ とする。

(2) 固有値 $\lambda_1, \lambda_2, \lambda_3$ に対する固有ベクトル $v_1, v_2, v_3$ をそれぞれ一つ求めよ。

(3) $W$ を

$$
W = \left\{ \begin{pmatrix} 0 \\ y \\ z \end{pmatrix} \mid y, z \in \mathbb{R} \right\}
$$

で定義される部分ベクトル空間とする。 $v \in W$ ならば $Av \in W$ であることを示せ。

(4) $a, b, c \in \mathbb{R}$ として $a_n, b_n, c_n$ を

$$
A^n \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix}
$$

により定める。

$$
\lim_{n \to \infty} |a_n| < \infty, \quad \lim_{n \to \infty} b_n = -4
$$

のとき $\lim_{n \to \infty} c_n$ を求めよ。

### 题目描述

定义矩阵

$$
A=
\begin{pmatrix}
2&0&0\\
1&\frac32&1\\
1&-\frac12&0
\end{pmatrix}.
$$

（1）求 $A$ 的特征值 $\lambda_1,\lambda_2,\lambda_3$，其中规定 $\lambda_1<\lambda_2<\lambda_3$。

（2）对特征值 $\lambda_1,\lambda_2,\lambda_3$，分别求一个对应的特征向量 $v_1,v_2,v_3$。

（3）定义子向量空间

$$
W=
\left\{
\begin{pmatrix}0\\y\\z\end{pmatrix}
\,\middle|\,y,z\in\mathbb{R}
\right\}.
$$

证明：若 $v\in W$，则 $Av\in W$。

（4）给定 $a,b,c\in\mathbb{R}$，通过

$$
A^n
\begin{pmatrix}a\\b\\c\end{pmatrix}
=
\begin{pmatrix}a_n\\b_n\\c_n\end{pmatrix}
$$

定义 $a_n,b_n,c_n$。若

$$
\lim_{n\to\infty}|a_n|<\infty,
\qquad
\lim_{n\to\infty}b_n=-4,
$$

求 $\displaystyle\lim_{n\to\infty}c_n$。

## **Kai**

(1) $A$ の固有値を求めるために、特性方程式 $\det(A - \lambda I) = 0$ を解く。

$$
\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 0 & 0 \\ 1 & \frac{3}{2}-\lambda & 1 \\ 1 & -\frac{1}{2} & -\lambda \end{vmatrix} = 0
$$

第1行で余因子展開を行うと、

$$
(2-\lambda) \left| \begin{matrix} \frac{3}{2}-\lambda & 1 \\ -\frac{1}{2} & -\lambda \end{matrix} \right| = 0
$$

$$
(2-\lambda) \left( (\frac{3}{2}-\lambda)(-\lambda) - (1)(-\frac{1}{2}) \right) = 0
$$

$$
(2-\lambda) \left( -\frac{3}{2}\lambda + \lambda^2 + \frac{1}{2} \right) = 0
$$

$$
(2-\lambda) (\lambda^2 - \frac{3}{2}\lambda + \frac{1}{2}) = 0
$$

$$
(2-\lambda) (\lambda - 1) (\lambda - \frac{1}{2}) = 0
$$

よって、固有値は $\lambda = 2, 1, \frac{1}{2}$ である。
条件 $\lambda_1 < \lambda_2 < \lambda_3$ より、

$$
\lambda_1 = \frac{1}{2}, \quad \lambda_2 = 1, \quad \lambda_3 = 2
$$

(2) 各固有値に対応する固有ベクトルを求める。
固有ベクトルを $v = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ として、方程式 $(A - \lambda I)v = 0$ を解く。

$\lambda_1 = \frac{1}{2}$ の場合:

$$
(A - \frac{1}{2}I)v = \begin{pmatrix} \frac{3}{2} & 0 & 0 \\ 1 & 1 & 1 \\ 1 & -\frac{1}{2} & -\frac{1}{2} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

第1行より $\frac{3}{2}x = 0 \implies x=0$ 。
第2行に代入すると $y+z=0 \implies y=-z$ 。
したがって、固有ベクトルは $k \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$ ( $k \neq 0$ ) の形をしている。一つ選んで、 $v_1 = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$ とする。

$\lambda_2 = 1$ の場合:

$$
(A - I)v = \begin{pmatrix} 1 & 0 & 0 \\ 1 & \frac{1}{2} & 1 \\ 1 & -\frac{1}{2} & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

第1行より $x=0$ 。
第2行に代入すると $\frac{1}{2}y+z=0 \implies y=-2z$ 。
したがって、固有ベクトルは $k \begin{pmatrix} 0 \\ -2 \\ 1 \end{pmatrix}$ ( $k \neq 0$ ) の形をしている。一つ選んで、 $v_2 = \begin{pmatrix} 0 \\ -2 \\ 1 \end{pmatrix}$ とする。

$\lambda_3 = 2$ の場合:

$$
(A - 2I)v = \begin{pmatrix} 0 & 0 & 0 \\ 1 & -\frac{1}{2} & 1 \\ 1 & -\frac{1}{2} & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

連立方程式は $x - \frac{1}{2}y + z = 0$ と $x - \frac{1}{2}y - 2z = 0$ である。
両式の差をとると $3z=0 \implies z=0$ 。
これを一方の式に代入すると $x - \frac{1}{2}y = 0 \implies y=2x$ 。
したがって、固有ベクトルは $k \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ ( $k \neq 0$ ) の形をしている。一つ選んで、 $v_3 = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ とする。

(3) $v \in W$ とする。このとき、 $v$ は $v = \begin{pmatrix} 0 \\ y \\ z \end{pmatrix}$ ( $y, z \in \mathbb{R}$ ) と書ける。
$Av$ を計算すると、

$$
Av = \begin{pmatrix} 2 & 0 & 0 \\ 1 & \frac{3}{2} & 1 \\ 1 & -\frac{1}{2} & 0 \end{pmatrix} \begin{pmatrix} 0 \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2(0) + 0(y) + 0(z) \\ 1(0) + \frac{3}{2}(y) + 1(z) \\ 1(0) - \frac{1}{2}(y) + 0(z) \end{pmatrix} = \begin{pmatrix} 0 \\ \frac{3}{2}y + z \\ -\frac{1}{2}y \end{pmatrix}
$$

$y' = \frac{3}{2}y + z$ , $z' = -\frac{1}{2}y$ とおくと、 $y, z \in \mathbb{R}$ なので $y', z' \in \mathbb{R}$ である。
したがって、 $Av = \begin{pmatrix} 0 \\ y' \\ z' \end{pmatrix}$ となり、 $Av$ の第1成分は0である。
よって、 $Av \in W$ が示された。

(4) 初期ベクトル $v_0 = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ を固有ベクトル $v_1, v_2, v_3$ の線形結合で表す。

$$
v_0 = c_1 v_1 + c_2 v_2 + c_3 v_3
$$

ここで $c_1, c_2, c_3$ は定数である。
このとき、 $\begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix} = A^n v_0 = A^n(c_1 v_1 + c_2 v_2 + c_3 v_3)$ となる。
$A v_i = \lambda_i v_i$ より $A^n v_i = \lambda_i^n v_i$ なので、

$$
\begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix} = c_1 \lambda_1^n v_1 + c_2 \lambda_2^n v_2 + c_3 \lambda_3^n v_3
$$

固有値と固有ベクトルを代入すると、

$$
\begin{pmatrix} a_n \\ b_n \\ c_n \end{pmatrix} = c_1 \left(\frac{1}{2}\right)^n \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix} + c_2 (1)^n \begin{pmatrix} 0 \\ -2 \\ 1 \end{pmatrix} + c_3 (2)^n \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}
$$

各成分を書き出すと、

$$
a_n = c_3 (2)^n
$$

$$
b_n = -c_1 \left(\frac{1}{2}\right)^n - 2c_2 + 2c_3 (2)^n
$$

$$
c_n = c_1 \left(\frac{1}{2}\right)^n + c_2
$$

与えられた条件を使って $c_1, c_2, c_3$ を決定する。
条件1: $\lim_{n \to \infty} |a_n| < \infty$
$a_n = c_3 (2)^n$ であり、 $\lim_{n \to \infty} (2)^n = \infty$ なので、この極限が有限であるためには $c_3 = 0$ でなければならない。

$c_3=0$ を代入すると、

$$
a_n = 0
$$

$$
b_n = -c_1 \left(\frac{1}{2}\right)^n - 2c_2
$$

$$
c_n = c_1 \left(\frac{1}{2}\right)^n + c_2
$$

条件2: $\lim_{n \to \infty} b_n = -4$
$n \to \infty$ のとき、 $\left(\frac{1}{2}\right)^n \to 0$ なので、

$$
\lim_{n \to \infty} b_n = \lim_{n \to \infty} \left( -c_1 \left(\frac{1}{2}\right)^n - 2c_2 \right) = -2c_2
$$

よって、 $-2c_2 = -4 \implies c_2 = 2$ 。

求めたいのは $\lim_{n \to \infty} c_n$ である。

$$
\lim_{n \to \infty} c_n = \lim_{n \to \infty} \left( c_1 \left(\frac{1}{2}\right)^n + c_2 \right) = c_1(0) + c_2 = c_2
$$

$c_2=2$ なので、

$$
\lim_{n \to \infty} c_n = 2
$$
