---
sidebar_label: "2021年8月実施 数学 (ALL)"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Surface-Area-by-Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Differential-Equations.Exact-Differential-Equation
  - Mathematics.Differential-Equations.Integrating-Factor
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Normal-Mean-Confidence-Interval-with-Known-Variance
---
# 九州大学 工学府 土木工学専攻 2021年8月実施 数学 (ALL)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

題意の要約。

### 問題 1

$y=x\log x$（$\log$ は自然対数）のグラフを描く。両軸の表示範囲は $-0.5$ から $2.5$ とする。極値と変曲点については座標を示し、存在しなければ「なし」とする。$x$ 軸との交点、その点での接線（破線）、および接線の傾きも示す。

### 問題 2

曲面 $z=f(x,y)=xy$ のうち、円柱 $x^2+y^2=4$ の内部にある部分の面積を $S$ とする。

1. 曲面上の点 $P=(x,y,f(x,y))$、$Q=(x+\Delta x,y,f(x+\Delta x,y))$、$R=(x,y+\Delta y,f(x,y+\Delta y))$ を用いて面積要素を求め、
   $$
   D=\{(x,y):x^2+y^2\le4,\ x\ge0,\ y\ge0\},\qquad
   S=4\iint_D\sqrt{x^2+y^2+1}\,dx\,dy
   $$
   を導く。
2. 極座標により $S$ を計算する。

### 問題 3

1. 完全微分方程式 $(y-x^3)\,dx+(x-\sin y)\,dy=0$ の一般解を求める。
2. $X(x,y)\,dx+Y(x,y)\,dy=0$ に $y$ のみの関数 $Q(y)\ne0$ を掛けて完全微分方程式にできるとき、$Q$ を $X,Y$ とその偏導関数で表す。
3. 方程式 $(xy^2-y^3)\,dx+(1-xy^2)\,dy=0$ は $y$ のみの積分因子を持つ。(2) を用いて一般解を求める。

### 問題 4

$n\ge2$ は整数、$b\ne0$ とする。

1. 次の $A$ について $A^n$ を求める。
   $$
   A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
   $$
2. 次の $B$ について $B^n$ を求める。
   $$
   B=\begin{pmatrix}b&1&0&0\\0&b&1&0\\0&0&b&1\\0&0&0&b\end{pmatrix}.
   $$
3. $C=\begin{pmatrix}13&-30\\5&-12\end{pmatrix}$ を対角化する。

### 問題 5

確率密度

$$
f(x)=\begin{cases}2(1-x),&0\le x\le1,\\0,&x<0\text{ または }x>1\end{cases}
$$

に従う確率変数の平均と分散を求める。

### 問題 6

工場 A の鉄筋から無作為に 9 本を選び、引張強度の標本平均 $\bar X=500\,\mathrm{N/mm^2}$ を得た。母集団は正規分布に従い、母標準偏差は既知で $\sigma=75\,\mathrm{N/mm^2}$ である。母平均 $\mu$ の 95% 信頼区間を求める。標準正規変数 $Z$ に対して $P(|Z|>z)=\alpha$ となる値は次表を用いる。

| $\alpha$ | $z$ |
| --- | --- |
| 0.01 | 2.576 |
| 0.02 | 2.326 |
| 0.05 | 1.960 |
| 0.10 | 1.645 |
| 0.20 | 1.282 |

出典：[九州大学 令和4年度 土木工学専攻 数学](https://civil.kyushu-u.ac.jp/civil_wp/wp-content/uploads/r04_nyushi02.pdf)。

### 题目描述

**问题 1**：画出 $y=x\ln x$ 的图像，横纵轴显示范围均为 $[-0.5,2.5]$。标明极值点和拐点的坐标，不存在时注明“无”；还需标出与 $x$ 轴的交点、在该点处的切线（虚线）及其斜率。

**问题 2**：求曲面 $z=f(x,y)=xy$ 位于圆柱 $x^2+y^2=4$ 内部的部分的面积。

1. 由曲面上相邻的三个点 $P,Q,R$ 推导面积元 $dS=\sqrt{1+f_x^2+f_y^2}\,dx\,dy$，从而得到

$$
S=4\iint_D\sqrt{x^2+y^2+1}\,dx\,dy,\qquad
D=\{(x,y):x^2+y^2\le4,\ x\ge0,\ y\ge0\}.
$$

2. 使用极坐标计算面积 $S$。

**问题 3**：

1. 求完全微分方程 $(y-x^3)\,dx+(x-\sin y)\,dy=0$ 的通解。
2. 对 $X(x,y)\,dx+Y(x,y)\,dy=0$，推导仅依赖 $y$ 的非零积分因子 $Q(y)$ 的公式。
3. 用第 2 问的方法求 $(xy^2-y^3)\,dx+(1-xy^2)\,dy=0$ 的通解。

**问题 4**：设整数 $n\ge2$、$b\ne0$，令

$$
A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix},\qquad
B=bE+A,\qquad C=\begin{pmatrix}13&-30\\5&-12\end{pmatrix}.
$$

依次求 $A^n$、$B^n$，并将 $C$ 对角化。

**问题 5**：随机变量的密度为 $f(x)=2(1-x)$（$0\le x\le1$），区间外为 $0$。求其期望与方差。

**问题 6**：从正态总体随机抽取 9 根钢筋，抗拉强度样本均值为 $500\,\mathrm{N/mm^2}$，已知总体标准差为 $75\,\mathrm{N/mm^2}$。求总体均值的 95% 置信区间，可使用上方给出的标准正态分布双侧分位数表。

## **Kai**
### 【問題 1】

定義域は $x>0$ であり、

$$
y'=\log x+1,\qquad y''=\frac1x>0.
$$

したがって、$0<x<e^{-1}$ で減少、$x>e^{-1}$ で増加し、極小点は $(e^{-1},-e^{-1})$、極大点と変曲点はない。$x$ 軸との交点は $(1,0)$、そこでの接線の傾きは $1$ で、接線は $y=x-1$ となる。また $\lim_{x\to0+}x\log x=0$ だが、原点はグラフに含まれない。

![y=x log x と交点での接線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/engineering/civil/2022/kyushu-civil-2021-log-curve.svg)

### 【問題 2】
#### (1)
曲面 $z=f(x,y)$ 上の点
$P=(x,y,f(x,y))$, $Q=(x+\Delta x,y,f(x+\Delta x,y))$, $R=(x,y+\Delta y,f(x,y+\Delta y))$
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
\frac{\partial f}{\partial x} &= y - x^3 \tag{a}
\\
\frac{\partial f}{\partial y} &= x - \sin y \tag{b}
\end{align}
$$

を満たす関数 $f(x,y)$ を求める。
式 ($a$) より、

$$
\begin{align}
f(x,y) = xy - \frac{1}{4} x^4 + g(y) \tag{c}
\end{align}
$$

なる関数 $g(y)$ が存在することがわかる。
($c$) を ($b$) に代入して整理すると、

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

を得る。ただし右辺の被積分関数が $y$ のみの関数となることが必要である。

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

を考えればよい。ただし $y\ne0$ とする。
このとき与えられた微分方程式は、

$$
\begin{aligned}
(x-y)dx + \left( \frac{1}{y^2} - x \right) dy = 0
\end{aligned}
$$

となり、 (1) と同じ方法を使って、一般解

$$
\begin{aligned}
\frac{1}{2} x^2 - xy - \frac{1}{y} + C = 0
\ \ \ \ \ \ \ \ \text{ ( $C$ は任意定数 )}
\end{aligned}
$$

を得る。なお、積分因子を掛ける前の方程式には特異解 $y=0$ もある。

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
&= b^4 E + 4b^3A + 6b^2A^2 + 4bA^3 + A^4
\\
&= b^4 E + 4b^3A + 6b^2A^2 + 4bA^3
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
&= b^n E + nb^{n-1}A + \frac{n(n-1)}{2} b^{n-2}A^2
+ \frac{n(n-1)(n-2)}{6}b^{n-3}A^3
\\
&= \begin{pmatrix}
b^n & nb^{n-1} & \frac{n(n-1)}{2}b^{n-2} & \frac{n(n-1)(n-2)}{6}b^{n-3} \\
0 & b^n & nb^{n-1} & \frac{n(n-1)}{2}b^{n-2} \\
0 & 0 & b^n & nb^{n-1} \\ 0 & 0 & 0 & b^n
\end{pmatrix}
\end{aligned}
$$

がわかる。

#### (3)

$\det(\lambda I-C)=(\lambda+2)(\lambda-3)$ である。固有値 $-2,3$ に対する固有ベクトルとして、それぞれ $(2,1)^{\mathsf T},(3,1)^{\mathsf T}$ を取れる。したがって、

$$
P=\begin{pmatrix}2&3\\1&1\end{pmatrix},\qquad
P^{-1}=\begin{pmatrix}-1&3\\1&-2\end{pmatrix},\qquad
P^{-1}CP=\begin{pmatrix}-2&0\\0&3\end{pmatrix}.
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
