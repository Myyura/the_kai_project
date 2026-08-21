---
sidebar_label: "2020年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[I] 3次正方行列 $A$ を, $A = \begin{pmatrix} \frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{8} & \frac{3}{8} \end{pmatrix}$ とする。

(1) ベクトル $x = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ は $A$ の固有ベクトルである。対応する固有値 $\lambda_1$ を答えよ。

(2) $A$ は $\lambda_2 = 0$ を固有値にもつ。 $\lambda_2$ に対する固有ベクトル $y$ であって、第1成分が1であるものを求めよ。

(3) $a$ を実数とする。ベクトル $z = \begin{pmatrix} 4 \\ a \\ -3 \end{pmatrix}$ が $A$ の固有ベクトルになるような $a$ の値と, そのときの固有値 $\lambda_3$ を求めよ。

(4) ベクトル $c = \begin{pmatrix} 3 \\ -7 \\ 0 \end{pmatrix}$ を $x, y, z$ の1次結合で表せ。ここで $x$ は (1) で与えたベクトル, $y$ は (2) で求めたベクトル, $z$ は (3) で求めた $a$ の値を代入したベクトルである。

(5) $\lim_{n \to \infty} (A^n c)$ を求めよ。

### 题目描述

【I】给定三阶方阵

$$
A=
\begin{pmatrix}
\frac12&0&\frac12\\
\frac12&\frac14&\frac14\\
\frac12&\frac18&\frac38
\end{pmatrix}.
$$

（1）向量

$$
x=\begin{pmatrix}1\\1\\1\end{pmatrix}
$$

是 $A$ 的特征向量，求其对应的特征值 $\lambda_1$。

（2）已知 $A$ 还具有特征值 $\lambda_2=0$。求 $\lambda_2$ 对应的、第一分量为 $1$ 的特征向量 $y$。

（3）设 $a$ 为实数。求使向量

$$
z=\begin{pmatrix}4\\a\\-3\end{pmatrix}
$$

成为 $A$ 的特征向量的 $a$，并求此时对应的特征值 $\lambda_3$。

（4）将向量

$$
c=\begin{pmatrix}3\\-7\\0\end{pmatrix}
$$

表示为 $x,y,z$ 的线性组合。其中，$x$ 为（1）给出的向量，$y$ 为（2）求得的向量，$z$ 为在（3）中代入所求 $a$ 后的向量。

（5）求

$$
\lim_{n\to\infty}A^nc.
$$

## **Kai**

(1)
固有ベクトルの定義より、 $Ax = \lambda_1 x$ が成り立ちます。行列とベクトルの積を計算します。

$$
Ax = \begin{pmatrix} \frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{8} & \frac{3}{8} \end{pmatrix} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \cdot 1 + 0 \cdot 1 + \frac{1}{2} \cdot 1 \\ \frac{1}{2} \cdot 1 + \frac{1}{4} \cdot 1 + \frac{1}{4} \cdot 1 \\ \frac{1}{2} \cdot 1 + \frac{1}{8} \cdot 1 + \frac{3}{8} \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$

したがって、 $Ax = 1 \cdot x$ となり、対応する固有値は $\lambda_1 = 1$ です。

(2)
固有値 $\lambda_2 = 0$ に対応する固有ベクトルを $y = \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}$ とすると、方程式 $(A - \lambda_2 I)y = 0$ 、すなわち $Ay = 0$ を満たします。

$$
\begin{pmatrix} \frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{8} & \frac{3}{8} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

これは以下の連立方程式に等しいです。

$$
\begin{cases} \frac{1}{2} y_1 + \frac{1}{2} y_3 = 0 \\ \frac{1}{2} y_1 + \frac{1}{4} y_2 + \frac{1}{4} y_3 = 0 \\ \frac{1}{2} y_1 + \frac{1}{8} y_2 + \frac{3}{8} y_3 = 0 \end{cases}
$$

第1式より、 $y_1 + y_3 = 0 \Rightarrow y_3 = -y_1$ 。
これを第2式に代入すると、 $\frac{1}{2} y_1 + \frac{1}{4} y_2 - \frac{1}{4} y_1 = 0 \Rightarrow \frac{1}{4} y_1 + \frac{1}{4} y_2 = 0 \Rightarrow y_2 = -y_1$ 。
したがって、固有ベクトルは $y = \begin{pmatrix} k \\ -k \\ -k \end{pmatrix}$ ( $k \neq 0$ ) の形をしています。
問題の条件より、第1成分が1であるため、 $k=1$ 。よって、 $y = \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$ です。

(3)
ベクトル $z = \begin{pmatrix} 4 \\ a \\ -3 \end{pmatrix}$ が $A$ の固有ベクトルであるとき、ある固有値 $\lambda_3$ に対して $Az = \lambda_3 z$ が成り立ちます。

$$
Az = \begin{pmatrix} \frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{8} & \frac{3}{8} \end{pmatrix} \begin{pmatrix} 4 \\ a \\ -3 \end{pmatrix} = \begin{pmatrix} \frac{1}{2}(4) + \frac{1}{2}(-3) \\ \frac{1}{2}(4) + \frac{1}{4}(a) + \frac{1}{4}(-3) \\ \frac{1}{2}(4) + \frac{1}{8}(a) + \frac{3}{8}(-3) \end{pmatrix} = \begin{pmatrix} 2 - \frac{3}{2} \\ 2 + \frac{a}{4} - \frac{3}{4} \\ 2 + \frac{a}{8} - \frac{9}{8} \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ \frac{5+a}{4} \\ \frac{7+a}{8} \end{pmatrix}
$$

一方、 $\lambda_3 z = \lambda_3 \begin{pmatrix} 4 \\ a \\ -3 \end{pmatrix} = \begin{pmatrix} 4\lambda_3 \\ a\lambda_3 \\ -3\lambda_3 \end{pmatrix}$ 。
$Az = \lambda_3 z$ より、成分を比較すると

$$
\begin{cases} \frac{1}{2} = 4\lambda_3 & \cdots (i) \\ \frac{5+a}{4} = a\lambda_3 & \cdots (ii) \\ \frac{7+a}{8} = -3\lambda_3 & \cdots (iii) \end{cases}
$$

式(i)から、 $\lambda_3 = \frac{1}{8}$ 。
これを式(ii)に代入すると、 $\frac{5+a}{4} = \frac{a}{8} \Rightarrow 2(5+a) = a \Rightarrow 10 + 2a = a \Rightarrow a = -10$ 。
これを式(iii)に代入して検算すると、 $\frac{7-10}{8} = \frac{-3}{8}$ と $-3(\frac{1}{8}) = \frac{-3}{8}$ となり、成立します。
よって、 $a=-10$ 、固有値は $\lambda_3 = \frac{1}{8}$ です。このとき、ベクトル $z$ は $z = \begin{pmatrix} 4 \\ -10 \\ -3 \end{pmatrix}$ となります。

(4)
ベクトル $c = \begin{pmatrix} 3 \\ -7 \\ 0 \end{pmatrix}$ を $x, y, z$ の1次結合 $c = c_1 x + c_2 y + c_3 z$ で表します。

$$
\begin{pmatrix} 3 \\ -7 \\ 0 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix} + c_3 \begin{pmatrix} 4 \\ -10 \\ -3 \end{pmatrix}
$$

これは連立1次方程式 $ \begin{pmatrix} 1 & 1 & 4 \\ 1 & -1 & -10 \\ 1 & -1 & -3 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = \begin{pmatrix} 3 \\ -7 \\ 0 \end{pmatrix} $ を解くことに相当します。拡大係数行列を掃き出し法で解きます。

$$
\left( \begin{array}{ccc|c} 1 & 1 & 4 & 3 \\ 1 & -1 & -10 & -7 \\ 1 & -1 & -3 & 0 \end{array} \right) \xrightarrow[R_3 - R_1]{R_2 - R_1} \left( \begin{array}{ccc|c} 1 & 1 & 4 & 3 \\ 0 & -2 & -14 & -10 \\ 0 & -2 & -7 & -3 \end{array} \right) \xrightarrow{R_2 / (-2)} \left( \begin{array}{ccc|c} 1 & 1 & 4 & 3 \\ 0 & 1 & 7 & 5 \\ 0 & -2 & -7 & -3 \end{array} \right)
$$

$$
\xrightarrow[R_3 + 2R_2]{R_1 - R_2} \left( \begin{array}{ccc|c} 1 & 0 & -3 & -2 \\ 0 & 1 & 7 & 5 \\ 0 & 0 & 7 & 7 \end{array} \right) \xrightarrow{R_3 / 7} \left( \begin{array}{ccc|c} 1 & 0 & -3 & -2 \\ 0 & 1 & 7 & 5 \\ 0 & 0 & 1 & 1 \end{array} \right) \xrightarrow[R_2 - 7R_3]{R_1 + 3R_3} \left( \begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & 1 \end{array} \right)
$$

よって、 $c_1 = 1, c_2 = -2, c_3 = 1$ 。したがって、 $c = x - 2y + z$ です。

(5)
$A^n c$ を計算します。(4)の結果を用いると、

$$
A^n c = A^n (x - 2y + z) = A^n x - 2A^n y + A^n z
$$

$x, y, z$ はそれぞれ固有値 $\lambda_1=1, \lambda_2=0, \lambda_3=1/8$ に対応する固有ベクトルなので、 $A^n v = \lambda^n v$ の関係が成り立ちます。

$$
A^n x = \lambda_1^n x = 1^n x = x
$$

$$
A^n y = \lambda_2^n y = 0^n y = 0 \quad (\text{for } n \geq 1)
$$

$$
A^n z = \lambda_3^n z = (\frac{1}{8})^n z
$$

したがって、

$$
A^n c = x - 2(0) + (\frac{1}{8})^n z = x + (\frac{1}{8})^n z
$$

$n \to \infty$ の極限を考えると、

$$
\lim_{n \to \infty} A^n c = \lim_{n \to \infty} \left( x + (\frac{1}{8})^n z \right)
$$

$|\frac{1}{8}| < 1$ なので、 $\lim_{n \to \infty} (\frac{1}{8})^n = 0$ です。

$$
\lim_{n \to \infty} A^n c = x + 0 \cdot z = x = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$

よって、求める極限は $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ です。
