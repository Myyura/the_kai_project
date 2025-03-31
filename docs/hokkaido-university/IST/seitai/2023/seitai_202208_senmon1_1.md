---
sidebar_label: "2022年8月実施 専門科目1 問1 (線形代数・ベクトル解析)"
tags:
  - Hokkaido-University
---
# 北海道大学 情報科学院 情報科学専攻 生体情報工学コース 2022年8月実施 専門科目1 問1 (線形代数・ベクトル解析)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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
Q = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
\end{aligned}
$$

によって $xy$ 平面を $xy$ 平面に変換することで、 $C$ の標準形が得られる。

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
= \frac{1}{\sqrt{2}} \begin{pmatrix} x+y \\ x-y \end{pmatrix}
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
\iint_S \frac{\boldsymbol{r}}{r^3} \cdot \boldsymbol{n} dS
&= \iint_{S_0} \frac{\boldsymbol{r}}{r^3} \cdot \boldsymbol{n}_0 dS_0
+ \left( \iint_{S_0} \frac{\boldsymbol{r}}{r^3} \cdot
\left( - \boldsymbol{n}_0 \right) dS_0
+ \iint_S \frac{\boldsymbol{r}}{r^3} \cdot \boldsymbol{n} dS \right)
\\
&= \frac{1}{\varepsilon^2} \cdot 4 \pi \varepsilon^2
+ \iiint_{V_0} \mathrm{div} \frac{\boldsymbol{r}}{r^3} dV_0
\\
&= 4 \pi
\end{aligned}
$$

がわかる。