---
sidebar_label: 2022年3月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Cayley-Hamilton-Theorem
  - Mathematics.Differential-Equations.Laplace-Transform
---
# 東北大学 工学研究科 電気・情報系 2022年3月実施 基礎科目 問題6 数学基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約

[大学公開の原題、14 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/202203kiso.pdf#page=14)

1. $A=\begin{pmatrix}1&2&0\\-1&-2&1\\0&0&1\end{pmatrix}$ とする。(a) 固有値と対応する固有ベクトルを求める。(b) $A^3+aA^2+bA+cE=O$ を満たす係数 $a,b,c$ を求める。(c) $A^4+A^3-A^2+4A-5E$ を計算する。$E$ は単位行列である。
2. $F(s)=\int_0^\infty e^{-st}f(t)\,dt$ とする。(a) $a>0$ に対して
   $$\mathcal L[f(at+b)](s)=\frac{e^{bs/a}}a\left[F(s/a)-\int_0^b e^{-st/a}f(t)\,dt\right]$$
   を示す。ただし $at+b\le0$ では $f(at+b)=0$ とする。(b) この関係を利用し、$f(t+2)-3f(t+1)+2f(t)=t$（$t\ge0$）および $f(t)=0$（$0\le t\le2$）から $F(s)$ を求める。

### 题目描述

1. 给定
   $$A=\begin{pmatrix}1&2&0\\-1&-2&1\\0&0&1\end{pmatrix},$$
   $E$ 为单位矩阵。求特征值和对应特征向量；求满足 $A^3+aA^2+bA+cE=O$ 的 $a,b,c$；计算 $A^4+A^3-A^2+4A-5E$。
2. 设 $F(s)=\int_0^\infty e^{-st}f(t)\,dt$。对 $a>0$，证明
   $$\mathcal L[f(at+b)](s)=\frac{e^{bs/a}}a\left[F(s/a)-\int_0^b e^{-st/a}f(t)\,dt\right],$$
   其中 $at+b\le0$ 时令 $f(at+b)=0$。再利用这一关系，由 $f(t+2)-3f(t+1)+2f(t)=t$（$t\ge0$）及 $f(t)=0$（$0\le t\le2$）求 $F(s)$。

## **Kai**
### (1)
#### (a)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} 1-\lambda & 2 & 0 \\ -1 & -2-\lambda & 1 \\ 0 & 0 & 1-\lambda \end{pmatrix}
\\
&= - \lambda (\lambda+1)(\lambda-1)
\\
\therefore \ \
\lambda &= 0, \pm 1
\end{aligned}
$$

である。

固有値 $-1$ に対応する固有ベクトルを求めるために、

$$
\begin{aligned}
\begin{pmatrix} 2 & 2 & 0 \\ -1 & -1 & 1 \\ 0 & 0 & 2 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x+y=0, z=0$ であるから、固有ベクトルは例えば、

$$
\begin{aligned}
\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
\end{aligned}
$$

である。

同様にして、固有値 $0,1$ に対応する固有ベクトルは、それぞれ、例えば、

$$
\begin{aligned}
\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}
, \ \
\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

である。

#### (b)
(a) で求めたように、 $A$ の固有多項式は $\lambda^3 - \lambda$ であるから、
ケーリー-ハミルトンの定理より、

$$
\begin{aligned}
A^3 - A = O
\end{aligned}
$$

が成り立つ。
つまり、

$$
\begin{aligned}
a=0, b=-1, c=0
\end{aligned}
$$

である。

#### ($c$)

$$
\begin{aligned}
A^4+A^3-A^2+4A-5E
&= (A^3-A)(A+E) + 5A - 5E
\\
&= 5A - 5E
\\
&= \begin{pmatrix} 0 & 10 & 0 \\ -5 & -15 & 5 \\ 0 & 0 & 0 \end{pmatrix}
\end{aligned}
$$

### (2)
#### (a)
$\tau = at+b$ とると、 $a \gt 0$ より $t \to \infty$ のとき $\tau \to \infty$ であるから、
次のように計算できる：

$$
\begin{aligned}
\mathcal{L} \left[ f(at+b) \right]
&= \int_0^\infty e^{-st} f(at+b) dt
\\
&= \int_b^\infty e^{-s(\tau-b)/a} f(\tau) \frac{d \tau}{a}
\\
&= \frac{e^{bs/a}}{a} \int_b^\infty e^{-s \tau /a} f(\tau) d \tau
\\
&= \frac{e^{bs/a}}{a} \left\{ \int_0^\infty e^{-s \tau /a} f(\tau) d \tau
- \int_0^b e^{-s \tau /a} f(\tau) d \tau \right\}
\\
&= \frac{e^{bs/a}}{a} \left\{ F \left( \frac{s}{a} \right)
- \int_0^b e^{-st /a} f(t) dt \right\}
\end{aligned}
$$

#### (b)
まず、

$$
\begin{aligned}
\mathcal{L} \left[ t \right]
&= \int_0^\infty e^{-st} t dt
\\
&= \int_0^\infty \left( - \frac{1}{s} e^{-st} \right)' t dt
\\
&= \left[ - \frac{1}{s} e^{-st} t \right]_0^\infty + \frac{1}{s} \int_0^\infty e^{-st} dt
\\
&= - \frac{1}{s^2} \left[ e^{-st} \right]_0^\infty
\\
&= \frac{1}{s^2}
\end{aligned}
$$

である。

よって、与えられた差分方程式をラプラス変換すると、(a)で得た式を使って、

$$
\begin{aligned}
e^{2s} \left\{ F(s) - \int_0^2 e^{-st} f(t) dt \right\}
-3e^{s} \left\{ F(s) - \int_0^1 e^{-st} f(t) dt \right\}
+ 2F(s)
= \frac{1}{s^2}
\end{aligned}
$$

さらに、 $0 \leq t \leq 2$ で $f(t)=0$ であることを使って整理すると、

$$
\begin{aligned}
\left( e^{2s} - 3 e^s + 2 \right) F(s) = \frac{1}{s^2}
\end{aligned}
$$

なので、

$$
\begin{aligned}
F(s)
&= \frac{1}{s^2 \left( e^{2s} - 3 e^s + 2 \right)}
\\
&= \frac{1}{s^2 \left( e^s -1 \right) \left( e^s -2 \right)}
\end{aligned}
$$

を得る。
