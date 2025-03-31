---
sidebar_label: "2020年度 数学 第1問"
sidebar_position: 10
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2020年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
正方行列$A,B$を

$$
A=\begin{pmatrix}
1 & \sqrt{2} & 0 \\
\sqrt{2} & 1 & \sqrt{2} \\
0 & \sqrt{2} & 1\\
\end{pmatrix},
B=\begin{pmatrix}
0 &-\dfrac{2}{3} &\dfrac{1}{3} \\
\dfrac{2}{3} &0 &-\dfrac{2}{3} \\
-\dfrac{1}{3} &\dfrac{2}{3} &0 \\
\end{pmatrix}
$$

とする．また,行列$I$は単位行列とする．実正方行列$X$に対して,$\exp(X)$を

$$
\exp(X)=\sum_{k=0}^\infty(\frac{1}{k!}X^{k})=I+X+\frac{1}{2!}X^2+\frac{1}{3!}X^3+\ldots
$$

と定義するとき,以下の問いに答えよ．

(1)、$A$の全ての固有値と,それらに対応する固有ベクトルを求めよ．ただし,固有ベクトルとして、ノルムは1かつ第一要素は非負実数であるものを選べ．

(2)、非負整数$n$に対して,$A^{n}$を求めよ．

(3)、$\exp(A)$を求めよ．

(4)、$\alpha$を実数とするとき、$\exp(\alpha B)$が次式のように表せることを示せ．

$$
\exp(\alpha B)=I+(\sin\alpha)B+(1-\cos\alpha)B^2
$$

ただし、ケーリー・ハミルトンの定理を用いてもよい．

(5)、3次元実ベクトル$\alpha$が与えられたとき、3次元実ベクトル$x$に関する関数$f$を

$$
f(x)=\sum_{k=1}^{n}\left \Vert\exp(\frac{2\pi k}{n}B)\alpha-x \right \Vert ^2
$$

とおく．ただし、$n\ge2$とする．このとき、$x=(I+B^2)\alpha$において$f$が最小になることを示せ．

## **Kai**
### (1)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&=
\begin{vmatrix}
1 - \lambda & \sqrt{2} & 0 \\
\sqrt{2} & 1 - \lambda & \sqrt{2} \\
0 & \sqrt{2} & 1 - \lambda
\end{vmatrix}
\\
&=
(1 - \lambda)^3 - 2 (1 - \lambda) - 2 (1 - \lambda)
\\
&=
- ( \lambda + 1 ) ( \lambda - 1 ) ( \lambda - 3 )
\end{aligned}
$$

なので、 $\lambda = -1, 1, 3$ である。

固有値 $\lambda = -1$ に対応する固有ベクトルを求めるため、

$$
\begin{aligned}
\begin{pmatrix}
1 & \sqrt{2} & 0 \\
\sqrt{2} & 1 & \sqrt{2} \\
0 & \sqrt{2} & 1
\end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
- \begin{pmatrix} x \\ y \\ z \end{pmatrix}
\end{aligned}
$$

とおくと、 $y = - \sqrt{2} x = - \sqrt{2} z$ を得る。

固有値 $\lambda = 1$ に対応する固有ベクトルを求めるため、

$$
\begin{aligned}
\begin{pmatrix}
1 & \sqrt{2} & 0 \\
\sqrt{2} & 1 & \sqrt{2} \\
0 & \sqrt{2} & 1
\end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
\end{aligned}
$$

とおくと、 $y=0, x+z=0$ を得る。

固有値 $\lambda = 3$ に対応する固有ベクトルを求めるため、

$$
\begin{aligned}
\begin{pmatrix}
1 & \sqrt{2} & 0 \\
\sqrt{2} & 1 & \sqrt{2} \\
0 & \sqrt{2} & 1
\end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
3 \begin{pmatrix} x \\ y \\ z \end{pmatrix}
\end{aligned}
$$

とおくと、 $y = \sqrt{2} x = \sqrt{2} z$ を得る。

以上より、固有値 $\lambda = -1, 1, 3$
に対応する固有ベクトルは、次のように選べる：

$$
\begin{aligned}
\frac{1}{2}
\begin{pmatrix} 1 \\ - \sqrt{2} \\ 1 \end{pmatrix}
, \ \ 
\frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\frac{1}{2}
\begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \end{pmatrix}
.
\end{aligned}
$$

### (2)
上で求めた固有値・固有ベクトルを使って、次のようにおく：

$$
\begin{aligned}
V
=
\frac{1}{2}
\begin{pmatrix}
1 & \sqrt{2} & 1 \\
- \sqrt{2} & 0 & \sqrt{2} \\
1 & - \sqrt{2} & 1
\end{pmatrix}
, \ \ 
C
=
\begin{pmatrix}
-1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 3
\end{pmatrix}
.
\end{aligned}
$$

このとき、

$$
\begin{aligned}
V^{-1}
&=
\frac{1}{2}
\begin{pmatrix}
1 & - \sqrt{2} & 1 \\
\sqrt{2} & 0 & - \sqrt{2} \\
1 & \sqrt{2} & 1
\end{pmatrix}
\\
A &= V C V^{-1}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
A^n
&= V C^n V^{-1}
\\
&=
\frac{1}{4}
\begin{pmatrix}
1 & \sqrt{2} & 1 \\
- \sqrt{2} & 0 & \sqrt{2} \\
1 & - \sqrt{2} & 1
\end{pmatrix}
\begin{pmatrix}
(-1)^n & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 3^n
\end{pmatrix}
\begin{pmatrix}
1 & - \sqrt{2} & 1 \\
\sqrt{2} & 0 & - \sqrt{2} \\
1 & \sqrt{2} & 1
\end{pmatrix}
\\
&=
\frac{1}{4}
\begin{pmatrix}
(-1)^n + 2 + 3^n &
-\sqrt{2} \cdot (-1)^n + \sqrt{2} \cdot 3^n &
(-1)^n - 2 + 3^n \\
-\sqrt{2} \cdot (-1)^n + \sqrt{2} \cdot 3^n &
2 \cdot (-1)^n + 2 \cdot 3^n &
-\sqrt{2} \cdot (-1)^n + \sqrt{2} \cdot 3^n \\
(-1)^n - 2 + 3^n &
-\sqrt{2} \cdot (-1)^n + \sqrt{2} \cdot 3^n &
(-1)^n + 2 + 3^n
\end{pmatrix}
\end{aligned}
$$

を得る。

### (3)

$$
\begin{aligned}
\exp A
&=
\sum_{k=0}^\infty \frac{1}{k!} A^k
\\
&=
\frac{1}{4} \sum_{k=0}^\infty \frac{1}{k!}
\begin{pmatrix}
(-1)^k + 2 + 3^k &
-\sqrt{2} \cdot (-1)^k + \sqrt{2} \cdot 3^k &
(-1)^k - 2 + 3^k \\
-\sqrt{2} \cdot (-1)^k + \sqrt{2} \cdot 3^k &
2 \cdot (-1)^k + 2 \cdot 3^k &
-\sqrt{2} \cdot (-1)^k + \sqrt{2} \cdot 3^k \\
(-1)^k - 2 + 3^k &
-\sqrt{2} \cdot (-1)^k + \sqrt{2} \cdot 3^k &
(-1)^k + 2 + 3^k
\end{pmatrix}
\\
&=
\frac{1}{4}
\begin{pmatrix}
e^{-1} + 2e + e^3 &
-\sqrt{2} e^{-1} + \sqrt{2} e^3 &
e^{-1} - 2e + e^3 \\
-\sqrt{2} e^{-1} + \sqrt{2} e^3 &
2 e^{-1} + 2 e^3 &
-\sqrt{2} e^{-1} + \sqrt{2} e^3 \\
e^{-1} - 2e + e^3 &
-\sqrt{2} e^{-1} + \sqrt{2} e^3 &
e^{-1} + 2e + e^3
\end{pmatrix}
\end{aligned}
$$

### (4)
$B$ の固有多項式を $\varphi(x)$ とする：

$$
\begin{aligned}
\varphi(x) = \det (B - xI)
= -x^3 - x
.
\end{aligned}
$$

ケーリー・ハミルトンの定理より、

$$
\begin{aligned}
\varphi(B) &= -B^3 - B = 0
\\
\therefore \ \ 
B^3 &= - B
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\exp (\alpha B)
&=
I + \alpha B + \frac{1}{2!} (\alpha B)^2
+ \frac{1}{3!} (\alpha B)^3 + \frac{1}{4!} (\alpha B)^4
+ \cdots
\\
&=
I + \alpha B + \frac{1}{2!} \alpha^2 B^2
- \frac{1}{3!} \alpha^3 B - \frac{1}{4!} \alpha^4 B^2
+ \cdots
\\
&=
I + \left( \alpha - \frac{1}{3!} \alpha^3 \cdots \right) B
+ \left( \frac{1}{2!} \alpha^2 - \frac{1}{4!} \alpha^4 \cdots \right) B^2
\\
&=
I + \left( \sin \alpha \right) B
+ \left( 1 - \cos \alpha \right) B^2
\end{aligned}
$$

となる。

### (5)

$$
\begin{aligned}
f(x) &= \sum_{k=1}^n ||\exp \bigg( \frac{2k \pi}{n} B \bigg) a - x ||^2 \\
&= \sum_{k=1}^n \bigg( \exp \bigg( \frac{2k \pi}{n} B \bigg)a - x \bigg)^T \bigg( \exp \bigg( \frac{2k \pi}{n} B \bigg)a - x \bigg) \\
&= \sum_{k=1}^n \bigg( x^T x - 2a^T \exp \bigg( \frac{2k \pi}{n} B\bigg)^T x + a^T \exp \bigg( \frac{2k \pi}{n} B\bigg)^T \exp \bigg(\frac{2k \pi}{n} B \bigg) a \bigg) \\
&= \sum_{k=1}^n x^T x - 2a^T \bigg(\sum_{k=1}^n \exp \bigg(\frac{2k \pi}{n} B \bigg) \bigg)^T x + a^T \bigg(\sum_{k=1}^n \exp \bigg( \frac{2k \pi}{n} B\bigg)^T \exp \bigg(\frac{2k \pi}{n} B \bigg) \bigg) a
\end{aligned}
$$

$B$は反対称行列なので、$B^T = -B$、よって

$$
\begin{aligned}
\exp \bigg( \frac{2k \pi}{n} B\bigg)^T \exp \bigg(\frac{2k \pi}{n} B \bigg) &= \exp \bigg( \frac{2k \pi}{n} B^T\bigg) \exp \bigg(\frac{2k \pi}{n} B \bigg) \\
&= \exp \bigg(\frac{2k \pi}{n} (B^T + B) \bigg) \\
&= \exp \big(\frac{2k \pi}{n} O \big) = I
\end{aligned}
$$

また、(4)で得た

$$
\exp (\alpha B) = I + \left( \sin \alpha \right) B
+ \left( 1 - \cos \alpha \right) B^2
$$

に $\alpha = \frac{2k \pi}{n}$ を代入すると、

$$
\exp (\frac{2k \pi}{n} B) = I + \left( \sin \frac{2k \pi}{n} \right) B
+ \left( 1 - \cos \frac{2k \pi}{n} \right) B^2
$$

を得るので

$$
\begin{aligned}
\sum_{k=1}^n \exp \bigg(\frac{2k \pi}{n} B \bigg) &= \sum_{k=1}^n \bigg(I + \bigg( \sin \frac{2k \pi}{n} \bigg) B
+ \bigg( 1 - \cos \frac{2k \pi}{n} \bigg)B^2 \bigg) \\
&= \sum_{k=1}^n I + \bigg( \sum_{k=1}^n \sin \bigg( \frac{2k \pi}{n} \bigg) \bigg)B + \sum_{k=1}^n B^2 - \bigg( \sum_{k=1}^n \bigg(\cos \frac{2k \pi}{n} \bigg) \bigg) B^2 \\
&= nI + 0 + nB^2 - 0 = nI + nB^2
\end{aligned}
$$

がわかる。さらに、

$$
\begin{aligned}
(I + B^2)^T (1 + B^2) &= I + (B^2)^T + B^2 + (B^2)^T B^2 \\
&= I + (-B)^2 + B^2 + (-B^2)^2 \\
&= I + 2B^2 + B^4 \\
&= I + 2B^2 - B^2 \\
&= I + B^2
\end{aligned}
$$

となるので、

$$
\begin{aligned}
f(x) &= nx^Tx - 2na^T (I + B^2)^T x + na^Ta \\
&= n(x^Tx - 2a^T(I + B^2)^T x + a^Ta) \\
&= n(x^T x - 2a^T (I + B^2)^T x + a^T (I + B^2 + B^4)a) \\
&= n(x^T x - 2a^T (I + B^2)^T x + a^T(I + B^2)a + a^TB^4 a) \\
&= n(x^T x - 2a^T (I + B^2)^T x + a^T(I + B^2)^T(I + B^2)a + a^T(B^2)^TB^2a) \\
&= n(||x - (I+B^2)a||^2 + ||B^2a||^2)
\end{aligned}
$$

である。つまり、が最小値になるのは

$$
x = (I + B^2)a
$$

の時である。