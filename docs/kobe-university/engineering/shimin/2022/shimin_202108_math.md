---
sidebar_label: "2021年8月実施 専門科目 数学"
tags:
  - Kobe-University
---
# 神戸大学 工学研究科 市民工学専攻 2021年8月実施 専門科目 数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
### 1.
確率変数 $X$ の確率密度関数 $f(x)$ が次式で与えられているとき，以下の問に答えなさい. ただし，$k$ は定数とする．

$$
f(x) = \left\{ \begin{aligned} &kx(5-x) &(0 \leq x \leq 5) \\ &0 &(0 < x, 5 < x) \end{aligned} \right.
$$

(1) $k$ の値を求めなさい．

(2) $X \geq 3$ となる確率を求めなさい．

(3) 期待値 $E(X)$ と分散 $V(X)$ を求めなさい．

### 2.
行列 $\boldsymbol{A} = \begin{pmatrix} 0 & 2 & 0 \\ 1 & a & 1 \\ 0 & 0 & 1 \end{pmatrix}$ に関して，ある行列 $\boldsymbol{P}$ を用い $\boldsymbol{P}^{-1} \boldsymbol{A} \boldsymbol{P} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}$ のように計算されるとき，以下の問に答えなさい．

(1) $a$ の値を求めなさい．

(2) 行列 $\boldsymbol{P}$ を求めなさい．

### 3.
$f(x, y) = \frac{x + 5y}{x^2 + 2y^2 + 1}$ とするとき，$xy$ 平面上で，原点 $(0, 0)$ から点 $(1, 1)$ に至る線分 $C: y=x$ に沿う $f$ の線積分の値 $\int_C f(x,y) ds$ を求めなさい．

### 4.
以下の常微分方程式の一般解を求めなさい．

$$
3x \frac{dy}{dx} = x + 5y
$$

## **Kai**
### 1.
#### (1)
確率密度関数の規格化の条件より、

$$
  \begin{aligned}
  1
  &= \int_{- \infty}^\infty f(x) dx
  \\
  &= k \int_0^5 x(5-x) dx
  \\
  &= k \left[ \frac{5}{2} x^2 - \frac{x^3}{3} \right]_0^5
  \\
  &= k \frac{125}{6}
  \\
  \therefore \ \ 
  k &= \frac{6}{125}
  \end{aligned}
$$

がわかる。

#### (2)
求める確率は、

$$
  \begin{aligned}
  P \left( X \geq 3 \right)
  &= \int_3^\infty f(x) dx
  \\
  &= 1 - \int_{-\infty}^3 f(x) dx
  \\
  &= 1 - \frac{6}{125} \int_0^3 x(5-x) dx
  \\
  &= \frac{44}{125}
  \end{aligned}
$$

である。

#### (3)

$$
  \begin{aligned}
  E \left( X \right)
  &= \int_{- \infty}^\infty x f(x) dx
  \\
  &= \frac{6}{125} \int_0^5 x^2 (5-x) dx
  \\
  &= \frac{5}{2}
  \\
  E \left( X^2 \right)
  &= \int_{- \infty}^\infty x^2 f(x) dx
  \\
  &= \frac{6}{125} \int_0^5 x^3 (5-x) dx
  \\
  &= \frac{15}{2}
  \\
  V \left( X \right)
  &= E \left( X^2 \right) - E \left( X \right)^2
  \\
  &= \frac{5}{4}
  \end{aligned}
$$

### 2.
#### (1)
$\mathrm{tr} A = \mathrm{tr} (P^{-1}AP)$が成り立つので、 $a=-1$ がわかる。

#### (2)
$3$ 次の単位行列を $E$ とする。
$A$ の固有値を $\lambda$ とすると、

$$
  \begin{aligned}
  0
  &= \det \left( A - \lambda E \right)
  \\
  &= -(\lambda-1)^2(\lambda+2)
  \\
  \therefore \ \ 
  \lambda &= 1, -2
  \end{aligned}
$$

がわかる。

固有値 $\lambda=1$ に属する固有ベクトルを求めるため、

$$
  \begin{aligned}
  \left( A - E \right) \begin{pmatrix} x \\ y \\ z \end{pmatrix} =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $x=2y,z=0$ がわかるので、固有ベクトルとして、

$$
  \begin{aligned}
  \boldsymbol{u} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}
  \end{aligned}
$$

を得る。

固有値 $\lambda=1$ に属する一般化固有ベクトルを求めるため、

$$
  \begin{aligned}
  \left( A - E \right) \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  = \boldsymbol{u}
  \end{aligned}
$$

とおくと、 $-x+2y=2, z=3$ がわかるので、

$$
  \begin{aligned}
  \boldsymbol{v} = \begin{pmatrix} -2 \\ 0 \\ 3 \end{pmatrix}
  \end{aligned}
$$

とすればよい。

固有値 $\lambda=-2$ に属する固有ベクトルを求めるため、

$$
  \begin{aligned}
  \left( A + 2E \right) \begin{pmatrix} x \\ y \\ z \end{pmatrix} =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $x+y=0,z=0$ がわかるので、固有ベクトルとして、

$$
  \begin{aligned}
  \boldsymbol{w} = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
  \end{aligned}
$$

を得る。

以上より、

$$
\begin{aligned}
  Q
  &= \begin{pmatrix} \boldsymbol{u} & \boldsymbol{v} & \boldsymbol{w} \end{pmatrix}
  \\
  &= \begin{pmatrix}
  2 & -2 &  1 \\
  1 &  0 & -1 \\
  0 &  3 &  0
  \end{pmatrix}
  \end{aligned}
$$

とおくと、

$$
  \begin{aligned}
  Q^{-1} A Q
  &= \begin{pmatrix}
  1 & 1 &  0 \\
  0 & 1 &  0 \\
  0 & 0 & -2
  \end{pmatrix}
  \end{aligned}
$$

が成り立ち、これは求める $P$ の条件を満たす。
つまり、

$$
  \begin{aligned}
  P
  &= \begin{pmatrix}
  2 & -2 &  1 \\
  1 &  0 & -1 \\
  0 &  3 &  0
  \end{pmatrix}
  \end{aligned}
$$

とすればよい（一意的ではない）。

### 3.

$$
  \begin{aligned}
  \int_C f(x,y) ds
  &= \sqrt{2} \int_0^1 f(x,x) dx
  \\
  &= \sqrt{2} \int_0^1 \frac{6x}{3x^2+1} dx
  \\
  &= \sqrt{2} \left[ \log \left( 3x^2+1 \right) \right]_0^1
  \\
  &= 2 \sqrt{2} \log 2
  \end{aligned}
$$

### 4.
まず、 $3xdy/dx=5y$ を考えると、

$$
  \begin{aligned}
  \frac{dy}{y} = \frac{5}{3x}
  \end{aligned}
$$

なので、積分定数を $A$ として、一般解は $y = A x^{5/3}$ である。
そこで、 $B(x)$ を適当な関数として、
$y = B(x) x^{5/3}$ を与えられた微分方程式に代入すると、

$$
  \begin{aligned}
  \frac{dB(x)}{dx} &= \frac{1}{3} x^{-5/3}
  \\
  \therefore \ \ 
  B(x) &= - \frac{1}{2} x^{-2/3} + C
  \ \ \ \ \text{( $C$ は積分定数 )}
  \end{aligned}
$$

を得るので、求める一般解は、

$$
  \begin{aligned}
  y(x)
  &= \left( - \frac{1}{2} x^{-2/3} + C \right) x^{5/3}
  \\
  &= - \frac{x}{2} + C x^{5/3}
  \ \ \ \ \text{( $C$ は積分定数 )}
  \end{aligned}
$$

であることがわかる。