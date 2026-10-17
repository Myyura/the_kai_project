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

試験問題は【問題1】から【問題6】の計6問です。すべての問題を解答してください。

### 【問題1】（15点）

関数 $y=x\log x$ の概形を、解答用紙に与えられた範囲内で示せ。この際、以下の2点に注意して作図すること。

- 図中の範囲内に極値あるいは変曲点があるかを調べた上で、存在する場合にはその座標の値を図中と解答欄に示せ。ない場合には「なし」と示すこと。
- $x$ 軸との交点は必ず求めること。また、この点での接線を、破線の直線で示し、この傾きの値を図中と解答欄に示せ。

![問題1の作図範囲](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/civil/2022/civil_202108_math_all_grid.png)

### 【問題2】（15点）

双曲面 $z=f(x,y)=xy$ が円柱面 $x^2+y^2=4$ により切り取られる部分の表面積 $S$ を、以下の手順により求めよ。

(1) 求めるべき図形は原点に対して対称であることを使えば、$x\ge0,y\ge0$ の部分の表面積の4倍として評価できる。この部分領域を $D=\{(x,y)\le4,\ x\ge0,\ y\ge0\}$ として与えることにし、求めるべき表面積 $S$ を与える式を2重積分の形として $x,y$ を使って表せ（答えは $S=\text{○○}$ の形で解答すること）。このとき、2重積分の領域は部分領域 $D$ を使って与えること。

(2) (1) で与えた式を領域積分し、表面積 $S$ の値を求めよ。（(1) の結果を使わずに、そのまま求めても良い。）

### 【問題3】（24点）

1階の常微分方程式①を考える。以下の (1)～(3) の問いに答えよ。

$$
X(x,y)\,dx+Y(x,y)\,dy=0.\tag{①}
$$

(1) 式①が $\partial X/\partial y=\partial Y/\partial x$ を満たすとき、完全微分方程式（または完全微分形）という。完全微分方程式②の一般解を求めよ。

$$
(y-x^3)\,dx+(x-\sin y)\,dy=0.\tag{②}
$$

(2) 式①が完全微分方程式でない場合、式③のように両辺に $x,y$ の関数 $P(x,y)\ne0$ を乗じると完全微分方程式になることがある。このとき、$P(x,y)$ を積分因子（または積分因数）という。もし、積分因子が式④に示すように $y$ のみの関数 $Q(y)$ であるとき、$Q(y)$ は、$X,Y,x,y$ を用いてどのように表されるか、示せ。

なお、例えば、$X(x,y)$ の $y$ による偏微分は、$\partial X/\partial y$ のように表してよい。

$$
P(x,y)X(x,y)\,dx+P(x,y)Y(x,y)\,dy=0.\tag{③}
$$

$$
Q(y)X(x,y)\,dx+Q(y)Y(x,y)\,dy=0.\tag{④}
$$

(3) 微分方程式⑤は、$y$ のみの関数を積分因子として持つことがあらかじめ分かっている。(2) の結果を用いて、式⑤の一般解を求めよ。

$$
(xy^2-y^3)\,dx+(1-xy^2)\,dy=0.\tag{⑤}
$$

### 【問題4】（30点）

以下の (1)～(3) の問いに答えよ。

(1) 次の行列 $A$ について、$n$ 乗 $A^n$ を求めよ。$n$ は2以上の整数とする。

$$
A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
$$

(2) 次の行列 $B$ について、$n$ 乗 $B^n$ を求めよ。$n$ は2以上の整数、$b\ne0$ とする。

$$
B=\begin{pmatrix}b&1&0&0\\0&b&1&0\\0&0&b&1\\0&0&0&b\end{pmatrix}.
$$

(3) 次の行列 $C$ を対角化せよ。

$$
C=\begin{pmatrix}13&-30\\5&-12\end{pmatrix}.
$$

### 【問題5】（8点）

確率密度が以下の $f(x)$ で与えられる連続分布について、平均と分散を求めよ。

$$
f(x)=\begin{cases}2(1-x)&(0\le x\le1),\\0&(x<0,\ x>1).\end{cases}
$$

### 【問題6】（8点）

A工場で製造された鉄筋から無作為に9本を選び、引張強度を測定したところ、標本平均 $\bar X$ は $500\,\mathrm{N/mm^2}$ であった。A工場で製造される鉄筋の引張強度は正規分布に従い、引張強度の母標準偏差 $\sigma$ が $75\,\mathrm{N/mm^2}$ であることが分かっているとき、A工場で製造される鉄筋の引張強度の母平均 $\mu$ の95%信頼区間を求めよ。解答にあたり、下の附表を参照してよい。

![標準正規分布の両側の陰影部分](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/civil/2022/civil_202108_math_all_normal_tail.png)

附表：陰影部の面積の和が $\alpha$ となる $z$ の値

| $\alpha$ | $z$ |
| --- | --- |
| 0.01 | 2.576 |
| 0.02 | 2.326 |
| 0.05 | 1.960 |
| 0.10 | 1.645 |
| 0.20 | 1.282 |

#### 题目描述

试卷共6题，全部作答。

**问题1（15分）** 在答题纸给出的范围内画出 $y=x\log x$ 的概形，注意以下两点。

- 判断图中范围内是否有极值点或拐点，若存在，在图中及答题栏标明坐标；不存在时写“无”。
- 必须求出与 $x$ 轴的交点，用虚线画出该点处的切线，并在图中及答题栏标明斜率。

作图范围见原图，两轴均为 $-0.5$ 到 $2.5$。

**问题2（15分）** 按以下步骤，求双曲面 $z=f(x,y)=xy$ 被圆柱面 $x^2+y^2=4$ 截取部分的表面积 $S$。

(1) 利用图形关于原点的对称性，可将面积算作 $x\ge0,y\ge0$ 部分的4倍。原文将这部分区域记为 $D=\{(x,y)\le4,\ x\ge0,\ y\ge0\}$。用 $x,y$ 将表面积 $S$ 表示为二重积分，答案写成 $S=\text{○○}$ 的形式，积分区域使用 $D$ 表示。

(2) 计算 (1) 中的区域积分，求 $S$ 的值。也可以不使用 (1) 的结果直接求解。

**问题3（24分）** 考虑一阶常微分方程①，回答 (1)～(3)。

$$
X(x,y)\,dx+Y(x,y)\,dy=0.
$$

(1) 当式①满足 $\partial X/\partial y=\partial Y/\partial x$ 时，称为恰当微分方程（全微分形式）。求式②的通解：

$$
(y-x^3)\,dx+(x-\sin y)\,dy=0.
$$

(2) 若式①不是恰当方程，有时像式③那样在两边乘以 $x,y$ 的非零函数 $P(x,y)$ 后可变为恰当方程，称 $P(x,y)$ 为积分因子。若积分因子像式④那样只依赖 $y$，记为 $Q(y)$，请用 $X,Y,x,y$ 表示 $Q(y)$。

例如，$X(x,y)$ 对 $y$ 的偏导数可以写作 $\partial X/\partial y$。

式③、④分别为

$$
P(x,y)X(x,y)\,dx+P(x,y)Y(x,y)\,dy=0,
$$

$$
Q(y)X(x,y)\,dx+Q(y)Y(x,y)\,dy=0.
$$

(3) 已知微分方程⑤具有只依赖 $y$ 的积分因子，利用 (2) 的结果求其通解：

$$
(xy^2-y^3)\,dx+(1-xy^2)\,dy=0.
$$

**问题4（30分）** 回答 (1)～(3)。

(1) 对以下矩阵 $A$ 求 $A^n$，其中 $n$ 为不小于2的整数。

$$
A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
$$

(2) 对以下矩阵 $B$ 求 $B^n$，其中 $n$ 为不小于2的整数，$b\ne0$。

$$
B=\begin{pmatrix}b&1&0&0\\0&b&1&0\\0&0&b&1\\0&0&0&b\end{pmatrix}.
$$

(3) 对角化矩阵

$$
C=\begin{pmatrix}13&-30\\5&-12\end{pmatrix}.
$$

**问题5（8分）** 求概率密度为下式的连续分布的均值和方差。

$$
f(x)=\begin{cases}2(1-x)&(0\le x\le1),\\0&(x<0,\ x>1).\end{cases}
$$

**问题6（8分）** 从A工厂生产的钢筋中随机抽取9根，测得抗拉强度样本均值 $\bar X=500\,\mathrm{N/mm^2}$。已知该厂钢筋抗拉强度服从正态分布，总体标准差 $\sigma=75\,\mathrm{N/mm^2}$，求总体均值 $\mu$ 的95%置信区间。可以参考上方附图及附表；表中 $z$ 对应两侧阴影面积之和为 $\alpha$。

## **Kai**
### 【問題 1】

定義域は $x>0$ であり、

$$
y'=\log x+1,\qquad y''=\frac1x>0.
$$

したがって、$0<x<e^{-1}$ で減少、$x>e^{-1}$ で増加し、極小点は $(e^{-1},-e^{-1})$、極大点と変曲点はない。$x$ 軸との交点は $(1,0)$、そこでの接線の傾きは $1$ で、接線は $y=x-1$ となる。また $\lim_{x\to0+}x\log x=0$ だが、原点はグラフに含まれない。

![y=x log x と交点での接線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/civil/2022/kyushu-civil-202108-log-curve.svg)

### 【問題 2】

原文の領域の表記 $D=\{(x,y)\le4,\ x\ge0,\ y\ge0\}$ は、円柱面の条件から $D=\{(x,y):x^2+y^2\le4,\ x\ge0,\ y\ge0\}$ と解釈する。

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
\begin{gathered}
B^n=b^nE+nb^{n-1}A+\frac{n(n-1)}2b^{n-2}A^2
\\
{}+\frac{n(n-1)(n-2)}6b^{n-3}A^3
\\
=\begin{pmatrix}
b^n&nb^{n-1}&\frac{n(n-1)}2b^{n-2}&\frac{n(n-1)(n-2)}6b^{n-3}\\
0&b^n&nb^{n-1}&\frac{n(n-1)}2b^{n-2}\\
0&0&b^n&nb^{n-1}\\0&0&0&b^n
\end{pmatrix}
\end{gathered}
$$

がわかる。

#### (3)

$\det(\lambda I-C)=(\lambda+2)(\lambda-3)$ である。固有値 $-2,3$ に対する固有ベクトルとして、それぞれ $(2,1)^{\mathsf T},(3,1)^{\mathsf T}$ を取れる。したがって、

$$
\begin{gathered}
P=\begin{pmatrix}2&3\\1&1\end{pmatrix},\\
P^{-1}=\begin{pmatrix}-1&3\\1&-2\end{pmatrix},\\
P^{-1}CP=\begin{pmatrix}-2&0\\0&3\end{pmatrix}.
\end{gathered}
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

## **Reference**

- [大学公式問題](https://civil.kyushu-u.ac.jp/civil_wp/wp-content/uploads/r04_nyushi02.pdf)
