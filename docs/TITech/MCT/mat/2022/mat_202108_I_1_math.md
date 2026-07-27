---
sidebar_label: "2021年8月実施 第Iブロック [I-1] 数学"
tags:
  - TITech
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Linear-Algebra.Commuting-Matrices
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 東京工業大学 物質理工学院 材料系 2021年8月実施 第Iブロック \[I-1\] 数学


## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

> **题面缺失边界：** 当前 Description 与全部本地 Git 历史版本均为空。以下只重建 Kai 能唯一确认的公式与分问；第 1 问原边界条件的具体给法没有留存，但其确定的积分常数和特解仍可确认。

1. Kai 可确认给定的是可分离变量方程，其分离形式为

   $$
   \frac{\mathrm dy}{y}
   =\frac{x-1}{x}\,\mathrm dx,
   $$

   即可等价写成

   $$
   \frac{\mathrm dy}{\mathrm dx}
   =\frac{x-1}{x}y.
   $$

   求通解，并使用题中边界条件求特解。边界条件本身无法恢复；Kai 唯一保留它给出的常数 $C=1/e$，因此目标特解为

   $$
   y=\frac{e^{x-1}}x.
   $$

2. Kai 可唯一确认本问要求计算二重积分

   $$
   I=
   \iint_{x^2+y^2/4\leq a^2}
   \sqrt{9a^2-x^2-\frac{y^2}{4}}\,
   \mathrm dx\,\mathrm dy,
   $$

   其中 $a>0$。可先令 $Y=y/2$，再在 $xY$ 平面使用极坐标。
3. 给定

   $$
   A=
   \begin{pmatrix}
   a&-2\\
   -2&3
   \end{pmatrix},
   \qquad
   B=
   \begin{pmatrix}
   1&b\\
   b&-2
   \end{pmatrix}.
   $$

   Kai 可确认三小问为：

   1. 用 $a,b$ 表示 $\det(AB)$。
   2. 已知 $A$ 的特征值为 $-1,4$，且 $AB=BA$，求 $a,b$。
   3. 已知

      $$
      \begin{pmatrix}1\\2\end{pmatrix},
      \qquad
      \begin{pmatrix}2\\-1\end{pmatrix}
      $$

      是 $B$ 的特征向量，求 $b$，并对正整数 $n$ 求 $B^n$。

#### 考点

- 可分离变量微分方程：分离并积分含 $x^{-1}$ 的一阶方程，再由仅存的边界结果确定特解。
- 变量代换与 Jacobian：把椭圆域线性缩放为圆域，再用极坐标计算含径向根式的二重积分。
- 矩阵乘积与交换性：使用行列式乘法、迹与特征值关系确定参数，并直接比较 $AB,BA$。
- 对称矩阵对角化与矩阵幂：由给定正交特征向量构造归一化矩阵，将 $B^n$ 化为特征值幂。

## **Kai**
### (1)
与えられた微分方程式は変数分離型であり、次のように一般解を求められる：

$$
\begin{aligned}
\frac{dy}{y}
&= \frac{x-1}{x} dx
\\
&= \left( 1 - \frac{1}{x} \right) dx
\\
\log |y|
&= x - \log x + C_0
\\
\therefore \ \ 
y &= \frac{C e^x}{x}
\end{aligned}
$$

ここで、 $C_0, C$ は積分定数である。

また、与えられた境界条件から $C=1/e$ となるので、

$$
\begin{aligned}
y &= \frac{e^{x-1}}{x}
\end{aligned}
$$

を得る。

### (2)
$Y=y/2$ とすると、 $dxdy = 2dxdY$ であり、与えられた積分範囲は $xY$ 平面上の原点を中心とする半径 $a$ の円である。

さらに、 $x,Y$ に対して極座標 $r, \theta$ を導入する：

$$
\begin{aligned}
x = r \cos \theta, \ \ Y = \frac{y}{2} = r \sin \theta
\end{aligned}
$$

$dxdY = r dr d \theta$ である。
以上の準備の下で、次のように計算できる：

$$
\begin{aligned}
I
&= 2 \pi \int_0^a \sqrt{9a^2 - r^2} r dr
\\
&= - \frac{2 \pi}{3} \left[ \left( 9a^2 - r^2 \right)^{3/2} \right]_0^a
\\
&= \frac{2}{3} \left( 16 \sqrt{2} - 27 \right) \pi a^3
\end{aligned}
$$

### (3)
#### &#9312;

$$
  \begin{aligned}
  \left| AB \right|
  &= \left| A \right| \left| B \right|
  \\
  &= (3a-4)(-2-b^2)
  \\
  &= -(3a-4)(b^2+2)
  \end{aligned}
$$

#### &#9313;
まず、固有値が $-1$ と $4$ ということはトレースが $3$ なので、 $a=0$ がわかる。
このとき、

$$
  \begin{aligned}
  AB = \begin{pmatrix} -2b & 4 \\ -2+3b & -2b-6 \end{pmatrix}
  , \ \ 
  BA = \begin{pmatrix} -2b & -2+3b \\ 4 & -2b-6 \end{pmatrix}
  \end{aligned}
$$

なので、 $AB=BA$ となるのは $b=2$ のときである。

#### &#9314;
与えられた2つのベクトルが $B$ の固有ベクトルになるのは、 $b=-2$ のときである：

$$
\begin{aligned}
B = \begin{pmatrix} 1 & -2 \\ -2 & -2 \end{pmatrix}
\end{aligned}
$$

与えられた2つの固有ベクトルを使って、

$$
\begin{aligned}
P = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
P^2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
, \ \ 
PBP = \begin{pmatrix} -3 & 0 \\ 0 & 2 \end{pmatrix}
\end{aligned}
$$

なので、次のように計算できる：

$$
\begin{aligned}
B^n
&= P \begin{pmatrix} -3 & 0 \\ 0 & 2 \end{pmatrix}^n P
\\
&= P \begin{pmatrix} (-3)^n & 0 \\ 0 & 2^n \end{pmatrix} P
\\
&= \frac{1}{5}
\begin{pmatrix} 2^{n+2} + (-3)^n & -2^{n+1} + 2 \cdot (-3)^n \\ -2^{n+1} + 2 \cdot (-3)^n & 2^n + 4 \cdot (-3)^n \end{pmatrix}
\end{aligned}
$$
