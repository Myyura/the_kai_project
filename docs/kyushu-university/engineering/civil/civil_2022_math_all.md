---
sidebar_label: "2022年度 数学 (ALL)"
sidebar_position: 1
tags:
  - Kyushu-University
---
# 九州大学 工学府 土木工学専攻 2022年度 数学 (ALL)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 【問題 1】

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/engineering/civil_2022_math_all_p1.png" width="600" height="600" alt=""/>
</figure>

### 【問題 2】
#### (1)
曲面 $x=f(x,y)$ 上の点
$P(x,y,f(x,y)), Q(x+\Delta x, y, f(x+\Delta x, y, f(x+\Delta x, y)), R(x, y+\Delta y, f(x, y+\Delta y))$
を考えると、 $\Delta x, \Delta y$ の1次までで

$$
\begin{aligned}
\overrightarrow{PQ}
&\simeq \left( \Delta x, 0, \frac{\partial f}{\partial x} \Delta x \right)
= \left( 1, 0, \frac{\partial f}{\partial x} \right) \Delta x
\\
\overrightarrow{PR}
&\simeq \left( 0, \Delta y, \frac{\partial f}{\partial y} \Delta y \right)
= \left( 0, 1, \frac{\partial f}{\partial y} \right) \Delta y
\end{aligned}
$$

であり、これらのベクトル積とその大きさは

$$
\begin{aligned}
\overrightarrow{PQ} \times \overrightarrow{PR}
&= \left( - \frac{\partial f}{\partial x}, - \frac{\partial f}{\partial y}, 1 \right)
\Delta x \Delta y
\\
\left| \overrightarrow{PQ} \times \overrightarrow{PR} \right|
&= \left| \Delta x \Delta y \right|
\sqrt{ \left( \frac{\partial f}{\partial x} \right)^2
+ \left( \frac{\partial f}{\partial y} \right)^2 + 1 }
\\
&= \left| \Delta x \Delta y \right| \sqrt{ x^2 + y^2 + 1 }
\end{aligned}
$$

である。
よって、

$$
\begin{aligned}
S = 4 \iint_D dx dy \sqrt{x^2+y^2+1}
\end{aligned}
$$

がわかる。

#### (2)
$x = r \cos \theta, \ y = r \sin \theta$ によって2次元極座標 $(r, \theta)$ を導入すると、
$dxdy = r dr d \theta$ であり、次のように計算できる：

$$
\begin{aligned}
S
&= 4 \int_0^2 dr r \sqrt{r^2 + 1} \int_0^{\pi/2} d \theta
\\
&= \frac{2 \pi}{3} \left[ \left( r^2 + 1 \right)^{3/2} \right]_0^2
\\
&= \frac{2 \left( 5 \sqrt{5} - 1 \right) \pi}{3}
\end{aligned}
$$

### 【問題 3】
#### (1)

$$
\begin{align}
\frac{\partial f}{\partial x} &= y - x^3 \tag{a} \label{a}
\\
\frac{\partial f}{\partial y} &= x - \sin y \tag{b} \label{b}
\end{align}
$$

を満たす関数 $f(x,y)$ を求める。
式 ($\ref{a}$) より、

$$
\begin{align}
f(x,y) = xy - \frac{1}{4} x^4 + g(y) \tag{c} \label{c}
\end{align}
$$

なる関数 $g(y)$ が存在することがわかる。
($\ref{c}$) を ($\ref{b}$) に代入して整理すると、

$$
\begin{aligned}
\frac{dg}{dy} &= - \sin y
\\
\therefore \ \ 
g(y) &= \cos y + C
\ \ \ \ \ \ \ \ \text{ ( $C$ は任意定数 )}
\\
\therefore \ \ 
f(x,y) &= xy - \frac{1}{4} x^4 + \cos y + C
\ \ \ \ \ \ \ \ \text{ ( $C$ は任意定数 )}
\end{aligned}
$$

を得る。
よって、求める一般解は

$$
\begin{aligned}
xy - \frac{1}{4} x^4 + \cos y + C = 0
\ \ \ \ \ \ \ \ \text{ ( $C$ は任意定数 )}
\end{aligned}
$$

である。

#### (2)
式④が完全微分方程式であるための条件は、

$$
\begin{aligned}
\frac{\partial}{\partial y} Q(y) X(x,y) &= \frac{\partial}{\partial x} Q(y) Y(x,y)
\\
\frac{dQ}{dy} X + Q \frac{\partial X}{\partial y} &= Q \frac{\partial Y}{\partial x}
\\
\frac{1}{Q} \frac{dQ}{dy} &= \frac{1}{X}
\left( \frac{\partial Y}{\partial x} - \frac{\partial X}{\partial y} \right)
\end{aligned}
$$

なので、

$$
\begin{aligned}
Q(y) &= \exp \left( \int dy \frac{1}{X(x,y)}
\left( \frac{\partial Y}{\partial x} - \frac{\partial X}{\partial y} \right) \right)
\end{aligned}
$$

を得る。

#### (3)
(2) の $X(x,y),Y(x,y)$ は今の場合、

$$
\begin{aligned}
X(x,y) = xy^2 - y^3
, \ \ 
Y(x,y) = 1 - xy^2
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\frac{1}{X(x,y)} \left( \frac{\partial Y}{\partial x} - \frac{\partial X}{\partial y} \right)
&= \frac{-y^2 - (2xy-3y^2) }{xy^2 - y^3}
\\
&= - \frac{2}{y}
\end{aligned}
$$

であり、積分因子として

$$
\begin{aligned}
Q(y) = \frac{1}{y^2}
\end{aligned}
$$

を考えればよい。
このとき与えられた微分方程式は、

$$
\begin{aligned}
(x-y)dx + \left( \frac{1}{y^2} - x \right) dy = 0
\end{aligned}
$$

となり、 (1) と同じ方法を使って、一般解

$$
\begin{aligned}
f(x,y) = \frac{1}{2} x^2 - xy - \frac{1}{y} + C
\ \ \ \ \ \ \ \ \text{ ( $C$ は任意定数 )}
\end{aligned}
$$

を得る。

### 【問題 4】
#### (1)

$$
  \begin{aligned}
  A^2 &= \begin{pmatrix}
  0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
  \\
  A^3 &= \begin{pmatrix}
  0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
  \\
  A^n &= \begin{pmatrix}
  0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
  \ \ \ \ \ \ \ \ (n = 4, 5, 6, \cdots)
  \end{aligned}
$$

#### (2)
4次の単位行列を $E$ とすると、

$$
\begin{aligned}
B = bE+A
\end{aligned}
$$

であり、まず、

$$
\begin{aligned}
B^2
&= b^2 E + 2bA + A^2
\\
&= \begin{pmatrix}
b^2 & 2b & 1 & 0 \\ 0 & b^2 & 2b & 1 \\ 0 & 0 & b^2 & 2b \\ 0 & 0 & 0 & b^2 \end{pmatrix}
\end{aligned}
$$

がわかる。
また、

$$
\begin{aligned}
B^3
&= b^3 E + 3b^2A + 3bA^2 + A^3
\\
&= \begin{pmatrix}
b^3 & 3b^2 & 3b & 1 \\ 0 & b^3 & 3b^2 & 3b \\ 0 & 0 & b^3 & 3b^2 \\ 0 & 0 & 0 & b^3 \end{pmatrix}
\\
B^4
&= b^4 E + 4b^3A + 6b^2A^2 + 3bA^3 + A^4
\\
&= b^4 E + 4b^3A + 6b^2A^2 + 3bA^3
\\
&= \begin{pmatrix}
b^4 & 4b^3 & 6b^2 & 4b \\ 0 & b^4 & 4b^3 & 6b^2 \\ 0 & 0 & b^4 & 4b^3 \\ 0 & 0 & 0 & b^4
\end{pmatrix}
\end{aligned}
$$

から、 $n = 3, 4, 5, \cdots$ について

$$
\begin{aligned}
B^n
&= b^n E + nb^{n-1}A + \frac{n(n-1)}{2} b^{n-2}A^2 + nbA^3
\\
&= \begin{pmatrix}
b^n & nb^{n-1} & \frac{n(n-1)}{2}b^{n-2} & nb^{n-3} \\
0 & b^n & nb^{n-1} & \frac{n(n-1)}{2}b^{n-2} \\
0 & 0 & b^n & nb^{n-1} \\ 0 & 0 & 0 & b^n
\end{pmatrix}
\end{aligned}
$$

がわかる。

#### (3)
$C$ の固有値は $-2, 3$ であるから、次のように対角化できる：

$$
  \begin{aligned}
  \begin{pmatrix} -2 & 0 \\ 0 & 3 \end{pmatrix}
  \end{aligned}
$$

### 【問題 5】
平均は

$$
\begin{aligned}
\mu
&= \int_{- \infty}^\infty x f(x) dx
\\
&= 2 \int_0^1 \left( x - x^2 \right) dx
\\
&= 2 \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1
\\
&= \frac{1}{3}
\end{aligned}
$$

であり、分散は

$$
\begin{aligned}
\sigma^2
&= \int_{- \infty}^\infty (x - \mu)^2 f(x) dx
\\
&= \int_{- \infty}^\infty x^2 f(x) dx - \mu^2
\\
&= 2 \int_0^1 \left( x^2 - x^3 \right) dx - \mu^2
\\
&= 2 \left[ \frac{x^3}{3} - \frac{x^4}{4} \right]_0^1 - \frac{1}{9}
\\
&= \frac{1}{18}
\end{aligned}
$$

である。

### 【問題 6】

$$
  \begin{aligned}
  1.96 \cdot \frac{75}{\sqrt{9}} = 49
  \end{aligned}
$$

なので、求める95%信頼区間の下端は $500-49=451 \ \mathrm{N/mm^2}$ であり、
上端は $500+49=549 \ \mathrm{N/mm^2}$ である。