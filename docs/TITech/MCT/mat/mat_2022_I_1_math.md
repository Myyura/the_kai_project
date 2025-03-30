---
sidebar_label: "2022年度 第Iブロック [I-1] 数学"
sidebar_position: 1
tags:
  - TITech
---
# 東京工業大学 物質理工学院 材料系 2022年度 第Iブロック \[I-1\] 数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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