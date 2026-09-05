---
sidebar_label: "2019年8月実施 経済数学"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Gram-Matrix
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-to-Poisson-Convergence-via-Moment-Generating-Function
---
# 九州大学 経済学府 経済工学専攻 2019年8月実施 経済数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 題意の要約

出典：[九州大学 2020年度 経済数学](https://www.econ.kyushu-u.ac.jp/wp-content/uploads/2019/11/2020-1_keizaisuugaku.pdf)。
問1・問2の両方に解答し、それぞれで (1)、(2) の一方を選ぶ。

### 問1

#### (1)

$t\in\mathbb R$ とし、

$$
\boldsymbol x_1=\begin{pmatrix}2\\0\\1\end{pmatrix},\quad
\boldsymbol x_2=\begin{pmatrix}9\\0\\9\end{pmatrix},\quad
\boldsymbol x_3=\begin{pmatrix}1\\t\\8\end{pmatrix},\quad
\boldsymbol0_3=\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
X=(\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3).
$$

- (a) 3列が線形独立となる $t$ の条件を求める。
- (b) 任意の3次元ベクトル $\boldsymbol c$ について、$X^\top X\boldsymbol c=\boldsymbol0_3$ から $X\boldsymbol c=\boldsymbol0_3$ が従うことを、$X^\top X$ の正則性を仮定せず示す。$\top$ は転置を表す。
- (c) $X^\top X$ が正則となる $t$ の条件を求める。

#### (2)

$a>0$ とする。

- (a) $xz$ 平面内の曲線 $z=(x-a)^2$（$x\ge0$）を $z$ 軸のまわりに回転した曲面の式が $z=(\sqrt{x^2+y^2}-a)^2$ となることを示す。
- (b) $f(x,y)=(\sqrt{x^2+y^2}-a)^2$ の極値を求める。

### 問2

#### (1)

三角形 $ABC$ の辺 $BC,CA,AB$ の長さを $a,b,c$、面積を $S$ とする。
内部の点 $D$ から直線 $BC,CA,AB$ までの距離を順に $x,y,z$ とする。

- (a) $(x,y)$ の取り得る範囲を求める。
- (b) $x^2+y^2+z^2$ の極小値を求める。
- (c) (b) の値が最小値でもあることを示す。
- (d) $xyz$ の最大値を求める。

#### (2)

$n\in\mathbb N$、$0<p<1$、$t\in\mathbb R$、$\lambda>0$ とする。

- (a) $X\sim\operatorname{Bin}(n,p)$ の確率関数は $p_X(x)=\binom nx p^x(1-p)^{n-x}$（$x=0,\ldots,n$）。$E[e^{tX}]$ を求める。
- (b) $Y\sim\operatorname{Poisson}(\lambda)$ の確率関数は $p_Y(y)=e^{-\lambda}\lambda^y/y!$（$y=0,1,\ldots$）。$E[e^{tY}]$ を求める。
- (c) $n>\lambda$ とし、$Z_n\sim\operatorname{Bin}(n,\lambda/n)$ について $\lim_{n\to\infty}E[e^{tZ_n}]$ を求める。

### 题目描述

第 1、2 题都要作答；每题在 (1)、(2) 中任选一项。

**第 1 题 (1)**：令 $t\in\mathbb R$，并以

$$
\boldsymbol x_1=(2,0,1)^\top,\quad
\boldsymbol x_2=(9,0,9)^\top,\quad
\boldsymbol x_3=(1,t,8)^\top
$$

为列构成矩阵 $X$。

1. 求三个向量线性无关时 $t$ 的条件。
2. 不假设 $X^\top X$ 可逆，证明对任意三维向量 $\boldsymbol c$，若 $X^\top X\boldsymbol c=\boldsymbol0$，则 $X\boldsymbol c=\boldsymbol0$。
3. 求 Gram 矩阵 $X^\top X$ 可逆时 $t$ 的条件。

**第 1 题 (2)**：设 $a>0$。

1. 将 $xz$ 平面上的曲线 $z=(x-a)^2$（$x\ge0$）绕 $z$ 轴旋转，证明所得曲面为 $z=(\sqrt{x^2+y^2}-a)^2$。
2. 求函数 $f(x,y)=(\sqrt{x^2+y^2}-a)^2$ 的极值。

**第 2 题 (1)**：三角形 $ABC$ 的三边 $BC,CA,AB$ 长度依次为 $a,b,c$，面积为 $S$。内部点 $D$ 到这三条边所在直线的距离依次为 $x,y,z$。

1. 求 $(x,y)$ 的取值范围。
2. 求 $x^2+y^2+z^2$ 的极小值。
3. 证明该极小值也是最小值。
4. 求 $xyz$ 的最大值。

**第 2 题 (2)**：设 $n\in\mathbb N$、$0<p<1$、$\lambda>0$、$t\in\mathbb R$。

1. 对 $X\sim\operatorname{Bin}(n,p)$，求矩母函数 $E(e^{tX})$。
2. 对 $Y\sim\operatorname{Poisson}(\lambda)$，求矩母函数 $E(e^{tY})$。
3. 当 $n>\lambda$、$Z_n\sim\operatorname{Bin}(n,\lambda/n)$ 时，求 $\lim_{n\to\infty}E(e^{tZ_n})$。

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
(x,y,z)=(\rho\cos\theta,\rho\sin\theta,(\rho-a)^2),\qquad 0\le\theta<2\pi.
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
