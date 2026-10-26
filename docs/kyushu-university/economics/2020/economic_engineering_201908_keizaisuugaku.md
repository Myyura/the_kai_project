---
sidebar_label: "2019年8月実施 経済数学"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Gram-Matrix
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Approximation-to-Binomial
---
# 九州大学 経済学府 経済工学専攻 2019年8月実施 経済数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

次の2問の両方について解答せよ。

### 問1

(1)、(2) の中から1つを選んで解答せよ。

#### (1)

3次元列ベクトル $\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3$ および $\boldsymbol0_3$ を次のように定義する。

$$
\boldsymbol x_1=\begin{pmatrix}2\\0\\1\end{pmatrix},\quad
\boldsymbol x_2=\begin{pmatrix}9\\0\\9\end{pmatrix},\quad
\boldsymbol x_3=\begin{pmatrix}1\\t\\8\end{pmatrix},\quad
\boldsymbol0_3=\begin{pmatrix}0\\0\\0\end{pmatrix}.
$$

ただし、$t$ は実数である。また、$3\times3$ 行列 $X$ を $X=(\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3)$ によって定義する。

(a) $\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3$ が1次独立になるのは $t$ がどのような値のときか答えよ。

(b) $\boldsymbol c$ を3次元列ベクトルとする。$X^{\mathsf T}$ が正則であるかどうかにかかわらず、$X^{\mathsf T}X\boldsymbol c=\boldsymbol0_3$ ならば、$X\boldsymbol c=\boldsymbol0_3$ であることを示せ。ただし、右肩の添え字 $\mathsf T$ は転置を意味する。

(c) 行列 $X^{\mathsf T}X$ が正則になるのは $t$ がどのような値のときか答えよ。

#### (2)

次の問いに答えよ。ただし、$a$ は正定数とする。

(a) 3次元ユークリッド空間 $\mathbb R^3$ 内の $xz$ 平面上の曲線 $z=(x-a)^2$（$x\ge0$）を $z$ 軸の周りに回転させた曲面が次のように書けることを示せ。

$$
z=\left(\sqrt{x^2+y^2}-a\right)^2.
$$

(b) 次の関数 $f$ の極値を求めよ。

$$
f(x,y)=\left(\sqrt{x^2+y^2}-a\right)^2.
$$

### 問2

(1)、(2) の中から1つを選んで解答せよ。

#### (1)

三角形 $ABC$ において、3つの辺 $BC,CA,AB$ の長さをそれぞれ $a,b,c$ とし、三角形の内部の点 $D$ から、3本の直線 $BC,CA,AB$ へ下した垂線の長さをそれぞれ $x,y,z$ とする。この三角形の面積を $S$ とおく。

(a) $x$ と $y$ の取りうる範囲を求めよ。

(b) $x^2+y^2+z^2$ の極小値を求めよ。

(c) (b) で求めた極小値が最小値になっていることを示せ。

(d) $xyz$ の最大値を求めよ。

#### (2)

$n$ を自然数とする。また、$p\in(0,1)$、$t\in\mathbb R$ および $\lambda>0$ を定数とする。

(a) 確率変数 $X$ は2項分布 $\operatorname{Bin}(n,p)$ に従っているとする。確率関数は

$$
p_X(x)={}_nC_xp^x(1-p)^{n-x},\qquad x=0,1,\ldots,n
$$

である。期待値 $E[\exp(tX)]$ を求めよ。

(b) 確率変数 $Y$ はポアソン分布 $\operatorname{Po}(\lambda)$ に従っているとする。確率関数は

$$
p_Y(y)=\exp(-\lambda)\frac{\lambda^y}{y!},\qquad y=0,1,\ldots
$$

である。期待値 $E[\exp(tY)]$ を求めよ。

(c) 確率変数 $Z_n$ は2項分布 $\operatorname{Bin}(n,\lambda/n)$ に従っているとする。ただし、$n>\lambda$ とする。極限 $\lim_{n\to\infty}E[\exp(tZ_n)]$ を求めよ。

### 题目描述

以下两大题都必须作答。

**问1** 在 (1)、(2) 中选一题作答。

**(1)** 定义三维列向量

$$
\boldsymbol x_1=\begin{pmatrix}2\\0\\1\end{pmatrix},\quad
\boldsymbol x_2=\begin{pmatrix}9\\0\\9\end{pmatrix},\quad
\boldsymbol x_3=\begin{pmatrix}1\\t\\8\end{pmatrix},\quad
\boldsymbol0_3=\begin{pmatrix}0\\0\\0\end{pmatrix}.
$$

其中 $t$ 为实数，定义 $3\times3$ 矩阵 $X=(\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3)$。

(a) 求使 $\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3$ 线性无关的 $t$ 的取值。

(b) 设 $\boldsymbol c$ 为三维列向量。无论 $X^{\mathsf T}$ 是否可逆，证明若 $X^{\mathsf T}X\boldsymbol c=\boldsymbol0_3$，则 $X\boldsymbol c=\boldsymbol0_3$。右上标 $\mathsf T$ 表示转置。

(c) 求使矩阵 $X^{\mathsf T}X$ 可逆的 $t$ 的取值。

**(2)** 回答下列问题，$a$ 为正常数。

(a) 将三维欧氏空间 $\mathbb R^3$ 中 $xz$ 平面上的曲线 $z=(x-a)^2$（$x\ge0$）绕 $z$ 轴旋转，证明所得曲面可写为

$$
z=\left(\sqrt{x^2+y^2}-a\right)^2.
$$

(b) 求函数 $f(x,y)=(\sqrt{x^2+y^2}-a)^2$ 的极值。

**问2** 在 (1)、(2) 中选一题作答。

**(1)** 三角形 $ABC$ 的边 $BC,CA,AB$ 的长度分别为 $a,b,c$。从三角形内部的点 $D$ 向三条直线 $BC,CA,AB$ 所作垂线的长度分别为 $x,y,z$，三角形面积记为 $S$。

(a) 求 $x,y$ 的取值范围。

(b) 求 $x^2+y^2+z^2$ 的极小值。

(c) 证明 (b) 中求出的极小值也是最小值。

(d) 求 $xyz$ 的最大值。

**(2)** 设 $n$ 为自然数，$p\in(0,1)$、$t\in\mathbb R$、$\lambda>0$ 为常数。

(a) 随机变量 $X$ 服从二项分布 $\operatorname{Bin}(n,p)$，概率质量函数为

$$
p_X(x)={}_nC_xp^x(1-p)^{n-x},\qquad x=0,1,\ldots,n.
$$

求期望 $E[\exp(tX)]$。

(b) 随机变量 $Y$ 服从泊松分布 $\operatorname{Po}(\lambda)$，概率质量函数为

$$
p_Y(y)=\exp(-\lambda)\frac{\lambda^y}{y!},\qquad y=0,1,\ldots.
$$

求期望 $E[\exp(tY)]$。

(c) 随机变量 $Z_n$ 服从二项分布 $\operatorname{Bin}(n,\lambda/n)$，其中 $n>\lambda$。求极限 $\lim_{n\to\infty}E[\exp(tZ_n)]$。

## **Kai**
### 問 1
#### (1)
##### (a)
$\det X = -9t$ なので、
$\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$ が1次独立になるのは、
$t \ne 0$ のときである。

##### (b)

$$
\begin{aligned}
\boldsymbol{c} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}
\end{aligned}
$$

とすると、

$$
\begin{aligned}
X \boldsymbol{c} = a \boldsymbol{x}_1 + b \boldsymbol{x}_2 + c \boldsymbol{x}_3
\end{aligned}
$$

なので、 $X \boldsymbol{c}$ は
$\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$ の1次結合で表される。

また、

$$
\begin{aligned}
X^T X \boldsymbol{c}
= \begin{pmatrix} \boldsymbol{x}_1^T (X \boldsymbol{c}) \\
\boldsymbol{x}_2^T (X \boldsymbol{c}) \\ \boldsymbol{x}_3^T (X \boldsymbol{c}) \end{pmatrix}
\end{aligned}
$$

と表されるので、 $X^T X \boldsymbol{c} = \boldsymbol{0}_3$ は、
$X \boldsymbol{c}$ が $\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$
のいずれとの内積も $0$ であることを意味する。

したがって、 $X^T X \boldsymbol{c} = \boldsymbol{0}_3$ ならば、
$X \boldsymbol{c} = \boldsymbol{0}_3$ である。

##### ($c$)

$$
  \begin{aligned}
  \det \left( X^T X \right)
  &= \left( \det X^T \right) \left( \det X \right)
  \\
  &= \left( \det X \right)^2
  \\
  &= 81t^2
  \end{aligned}
$$

なので、 $X^T X$ が正則なのは $t \ne 0$ のときである。

#### (2)
##### (a)

回転前の座標を $\rho\ge0$ とすると、回転後の点は

$$
\begin{gathered}
(x,y,z)=(\rho\cos\theta,\rho\sin\theta,(\rho-a)^2),\\
0\le\theta<2\pi.
\end{gathered}
$$

$\rho=\sqrt{x^2+y^2}$ より、曲面の式は
$z=(\sqrt{x^2+y^2}-a)^2$ となる。

##### (b)

$r=\sqrt{x^2+y^2}$ とおくと $f=(r-a)^2\ge0$ である。
$r=a$、すなわち円 $x^2+y^2=a^2$ 上の各点で最小値 $0$ を取る。

原点では $f(0,0)=a^2$ であり、$0<r<2a$ ならば

$$
f(x,y)-a^2=r(r-2a)<0.
$$

したがって原点は厳密な極大点で、極大値は $a^2$ である。
$r>0$ では $\nabla f=2(r-a)(x,y)/r$ なので、他の極値はない。
なお $r\to\infty$ で $f\to\infty$ のため、大域的な最大値は存在しない。

### 問 2
#### (1)
##### (a)

$D$ と3辺でできる三角形の面積を足すと、

$$
ax+by+cz=2S.
$$

$D$ は内部の点なので $x,y,z>0$ であり、

$$
\boxed{x>0,\qquad y>0,\qquad ax+by<2S.}
$$

逆に、この条件を満たす $(x,y)$ に対して
$z=(2S-ax-by)/c>0$ とおけば、正の重心座標
$(ax,by,cz)/(2S)$ が和 $1$ を持ち、対応する内部の点 $D$ が存在する。

##### (b)

制約 $ax+by+cz=2S$ の下で Lagrange の未定乗数法を使うと
$2x=\mu a,\ 2y=\mu b,\ 2z=\mu c$ となる。
したがって

$$
(x,y,z)=\frac{2S}{a^2+b^2+c^2}(a,b,c),
$$

における極小値は

$$
\boxed{\frac{4S^2}{a^2+b^2+c^2}}.
$$

##### (c)

Cauchy–Schwarz の不等式から

$$
(2S)^2=(ax+by+cz)^2
\le(a^2+b^2+c^2)(x^2+y^2+z^2).
$$

(b) の正の距離の組で等号が成り立つため、これは最小値である。

##### (d)

$ax,by,cz>0$ に相加相乗平均の不等式を適用すると、

$$
abc\,xyz\le\left(\frac{ax+by+cz}{3}\right)^3
=\left(\frac{2S}{3}\right)^3.
$$

$ax=by=cz=2S/3$ のとき等号が成り立つ。この点は三角形の重心であり、

$$
\boxed{\max xyz=\frac{8S^3}{27abc}}.
$$

#### (2)
##### (a)

$$
  \begin{aligned}
  E \left[ \exp (tX) \right]
  &= \sum_{x=0}^n \exp(tx) \cdot {}_n C_x p^x (1-p)^{n-x}
  \\
  &= \sum_{x=0}^n \ {}_n C_x \left( p e^t \right)^x (1-p)^{n-x}
  \\
  &= \left( 1 - p + p e^t \right)^n
  \end{aligned}
$$

##### (b)

$$
  \begin{aligned}
  E \left[ \exp (tY) \right]
  &= \sum_{y=0}^\infty \exp(ty) \cdot \exp(- \lambda) \frac{\lambda^y}{y!}
  \\
  &= \exp(- \lambda) \sum_{y=0}^\infty \frac{\left( \lambda e^t \right)^y}{y!}
  \\
  &= \exp(- \lambda) \cdot \exp \left( \lambda e^t \right)
  \\
  &= \exp \left( \lambda \left( e^t - 1 \right) \right)
  \end{aligned}
$$

##### ($c$)
(a) より、

$$
\begin{aligned}
E \left[ \exp \left( tZ_n \right) \right]
&= \left( 1 + \frac{\lambda \left( e^t - 1 \right)}{n} \right)^n
\end{aligned}
$$

なので、

$$
\begin{aligned}
\lim_{n \to \infty} E \left[ \exp \left( tZ_n \right) \right]
&= \exp \left( \lambda \left( e^t - 1 \right) \right)
\end{aligned}
$$

である。右辺は $\operatorname{Poisson}(\lambda)$ の積率母関数であり、$t=0$ の近傍で一致するので、$Z_n$ は $\operatorname{Poisson}(\lambda)$ に分布収束する。

## **Reference**

- [大学公式問題](https://www.econ.kyushu-u.ac.jp/wp-content/uploads/2019/11/2020-1_keizaisuugaku.pdf)
