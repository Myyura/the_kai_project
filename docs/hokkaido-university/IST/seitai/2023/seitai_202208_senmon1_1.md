---
sidebar_label: "2022年8月実施 専門科目1 問1 (線形代数・ベクトル解析)"
tags:
  - Hokkaido-University
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Vector-Calculus.Gradient-Divergence-and-Curl
  - Mathematics.Vector-Calculus.Divergence-Theorem
  - Mathematics.Vector-Calculus.Surface-Integral
---
# 北海道大学 情報科学院 情報科学専攻 生体情報工学コース 2022年8月実施 専門科目1 問1 (線形代数・ベクトル解析)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

題意の要約。出典：[大学公開原卷の保存版（PDF 2ページ）](https://web.archive.org/web/20230627090739id_/https://www.ist.hokudai.ac.jp/examinfo/files/seitai01.pdf)。

### 1. 二次曲線
$C:3x^2+2xy+3y^2=1$ を考える。

(1) 左辺を実対称行列による二次形式で表す。

(2) 原点を中心とする座標軸の回転によって $C$ を $XY$ 座標で標準形に直す。二通りの標準形と、それぞれの $(x,y)$ から $(X,Y)$ への一次変換を求める。

### 2. 実対称行列
実対称行列の固有値が実数であることを証明する。

### 3. ベクトル解析
$\boldsymbol r=(x,y,z)$、$r=|\boldsymbol r|$ とする。

(1) $r\ne0$ において $\operatorname{div}(\boldsymbol r/r^3)=0$ を証明する。

(2) 原点が面上にない閉曲面 $S$ と外向き単位法線 $\boldsymbol n$ に対し、原点が $S$ の外部にある場合と内部にある場合について、それぞれ次の積分を求める。

$$
\iint_S\frac{\boldsymbol r}{r^3}\cdot\boldsymbol n\,dS.
$$

### 题目描述

**1. 二次曲线**：考虑 $3x^2+2xy+3y^2=1$。

1. 将左侧写成实对称矩阵对应的二次型。
2. 通过绕原点的坐标轴旋转化为标准形，给出两种标准形以及各自从 $(x,y)$ 到 $(X,Y)$ 的线性变换。两种形式为 $2X^2+4Y^2=1$ 和 $4X^2+2Y^2=1$；相应坐标变换必须是旋转。

**2. 实对称矩阵**：证明实对称矩阵的全部特征值都是实数。

**3. 向量分析**：令 $\boldsymbol r=(x,y,z)$、$r=\sqrt{x^2+y^2+z^2}$。

1. 证明在 $r\ne0$ 时，$\operatorname{div}(\boldsymbol r/r^3)=0$。
2. 对原点不在其上的闭曲面 $S$，取外向单位法向量 $\boldsymbol n$，分别在原点位于曲面外部、内部时计算

$$
\iint_S\frac{\boldsymbol r}{r^3}\cdot\boldsymbol n\,dS.
$$

## **Kai**
### 1.
#### (1)

$$
  \begin{aligned}
  \begin{pmatrix} x & y \end{pmatrix}
  \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}
  \begin{pmatrix} x \\ y \end{pmatrix}
  \end{aligned}
$$

#### (2)
(1) で求めた行列

$$
\begin{aligned}
A =
\begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}
\end{aligned}
$$

の固有値を $a$ とすると、

$$
\begin{aligned}
0 &= \det \begin{pmatrix} 3-a & 1 \\ 1 & 3-a \end{pmatrix}
\\
&= a^2 - 6a + 8
\\
&= (a-2)(a-4)
\\
\therefore \ \
a &= 2, 4
\end{aligned}
$$

である。
固有値 $a=2$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
\begin{pmatrix} u \\ v \end{pmatrix}
&= \begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと $u+v=0$ であり、
固有値 $a=4$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} u \\ v \end{pmatrix}
&= \begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと $u=v$ である。
よって、行列

$$
\begin{aligned}
P = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}
, \ \ 
Q = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}
\end{aligned}
$$

は $P^TP=Q^TQ=I$ および $\det P=\det Q=1$ を満たす回転行列である。それぞれの逆行列で座標を変換すると、$C$ の標準形が得られる。

(i) $C$ は

$$
\begin{aligned}
\begin{pmatrix} x & y \end{pmatrix}
P P^{-1} A P P^{-1}
\begin{pmatrix} x \\ y \end{pmatrix}
&= 1
\end{aligned}
$$

と書けるので、

$$
\begin{aligned}
\begin{pmatrix} X \\ Y \end{pmatrix}
&= P^{-1} \begin{pmatrix} x \\ y \end{pmatrix}
= \frac{1}{\sqrt{2}} \begin{pmatrix} x-y \\ x+y \end{pmatrix}
\end{aligned}
$$

と変換することで、標準形

$$
\begin{aligned}
2X^2 + 4Y^2 = 1
\end{aligned}
$$

を得る。

(ii) $C$ は

$$
\begin{aligned}
\begin{pmatrix} x & y \end{pmatrix}
Q Q^{-1} A Q Q^{-1}
\begin{pmatrix} x \\ y \end{pmatrix}
&= 1
\end{aligned}
$$

と書けるので、

$$
\begin{aligned}
\begin{pmatrix} X \\ Y \end{pmatrix}
&= Q^{-1} \begin{pmatrix} x \\ y \end{pmatrix}
= \frac{1}{\sqrt{2}} \begin{pmatrix} x+y \\ -x+y \end{pmatrix}
\end{aligned}
$$

と変換することで、標準形

$$
\begin{aligned}
4X^2 + 2Y^2 = 1
\end{aligned}
$$

を得る。

### 2.
実対称行列 $B$ の固有値を $b$ とし、それに属する固有ベクトルを
$\boldsymbol{v}$ とする：

$$
\begin{aligned}
B \boldsymbol{v} = b \boldsymbol{v}
.
\end{aligned}
$$

複素数の複素共役を $*$ で表し、
行列・ベクトルのエルミート共役を $\dagger$ で表すと、次が成り立つ：

$$
\begin{aligned}
\boldsymbol{v}^\dagger B^\dagger &= b^* \boldsymbol{v}^\dagger
.
\end{aligned}
$$

$B$ は実対称行列であり $B^\dagger = B$ であるから、次のように書ける：

$$
\begin{aligned}
\boldsymbol{v}^\dagger B &= b^* \boldsymbol{v}^\dagger
.
\end{aligned}
$$

そこで、
$\boldsymbol{v}^\dagger B \boldsymbol{v}$ は、次の2通りに計算できる：

$$
\begin{aligned}
\boldsymbol{v}^\dagger B \boldsymbol{v}
&= \boldsymbol{v}^\dagger \left( B \boldsymbol{v} \right)
\\
&= b \boldsymbol{v}^\dagger \boldsymbol{v}
, \\
\boldsymbol{v}^\dagger B \boldsymbol{v}
&= \left( \boldsymbol{v}^\dagger B \right) \boldsymbol{v}
\\
&= b^* \boldsymbol{v}^\dagger \boldsymbol{v}
.
\end{aligned}
$$

$\boldsymbol{v}$ はゼロベクトルでないから
$\boldsymbol{v}^\dagger \boldsymbol{v} \ne 0$ であり、
$b = b^*$ すなわち $b$ は実数であることがわかる。

### 3.
#### (1)
$r \ne 0$ のとき、

$$
\begin{aligned}
\frac{\partial}{\partial x} r
&= \frac{\partial}{\partial x} \sqrt{x^2+y^2+z^2}
\\
&= \frac{x}{r}
\\
\therefore \ \ 
\frac{\partial}{\partial x} \frac{x}{r^3}
&= \frac{r^3 - x \cdot 3 r^2 \cdot \frac{x}{r}}{r^6}
\\
&= \frac{1}{r^3} - \frac{3x^2}{r^5}
\end{aligned}
$$

であり、同様にして、

$$
\begin{aligned}
\frac{\partial}{\partial y} \frac{y}{r^3}
&= \frac{1}{r^3} - \frac{3y^2}{r^5}
,\\
\frac{\partial}{\partial z} \frac{z}{r^3}
&= \frac{1}{r^3} - \frac{3z^2}{r^5}
\end{aligned}
$$

である。
よって、

$$
\begin{aligned}
\mathrm{div} \frac{\boldsymbol{r}}{r^3}
&=
\frac{\partial}{\partial x} \frac{x}{r^3}
+ \frac{\partial}{\partial y} \frac{y}{r^3}
+ \frac{\partial}{\partial z} \frac{z}{r^3}
\\
&= 0
\end{aligned}
$$

がわかる。

#### (2)
閉曲面 $S$ で囲まれる部分を $V$ で表す。

##### (場合 I)
ガウスの発散定理より、

$$
\begin{aligned}
\iint_S \frac{\boldsymbol{r}}{r^3} \cdot \boldsymbol{n} dS
&= \iiint_V \mathrm{div} \frac{\boldsymbol{r}}{r^3} dV
\\
&= 0
\ \ \ \ \ \ \ \ ( \because \text{ (1) } )
\end{aligned}
$$

がわかる。

##### (場合 II)
原点を中心とする半径 $\varepsilon$ の球面を $S_0$ とする。
ただし、 $\varepsilon$ は十分小さく、 $S_0$ は $V$ の内部にあるとする。
また、 $S_0$ に囲まれる部分を $V_0$ とし、
$V$ から $V_0$ を除いた部分を $V_1$ とする。
さらに、 $S_0$ の外向きの単位法線ベクトルを $\boldsymbol{n}_0$ とする。
このとき、

$$
\begin{aligned}
0
&=\iiint_{V_1}\operatorname{div}\frac{\boldsymbol r}{r^3}\,dV\\
&=\iint_S\frac{\boldsymbol r}{r^3}\cdot\boldsymbol n\,dS
-\iint_{S_0}\frac{\boldsymbol r}{r^3}\cdot\boldsymbol n_0\,dS_0.
\end{aligned}
$$

したがって、

$$
\iint_S\frac{\boldsymbol r}{r^3}\cdot\boldsymbol n\,dS
=\frac1{\varepsilon^2}\,4\pi\varepsilon^2=4\pi.
$$

がわかる。
