---
sidebar_label: "2018年8月実施 午前の部 [2]"
tags:
  - Nagoya-University
  - Linear-Algebra
---
# 名古屋大学 多元数理科学研究科 2018年8月実施 午前の部 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
行列

$$
T = \begin{pmatrix}
  0 & 1 & 0\\
  0 & 0 & 1\\
  1 & 0 & 0
\end{pmatrix}
$$

に対して次に答えよ．

(1) $U^{-1}TU$ が対角行列になるユニタリ行列 $U$ を求めよ．

(2) $3$ 次の複素行列で $T$ と交換可能な行列全体は $3$ 次元複素ベクトル空間をなすことを示せ．

(3) $3$ 次の複素行列で $T$ および

$$
S = \begin{pmatrix}
  1 & 0 & 0 \\
  0 & 2 & 0 \\
  0 & 0 & 3
\end{pmatrix}
$$

と交換可能な行列をすべて求めよ．答だけでなく根拠も述べること．

## **Kai**
### (1)
$T$ の固有値を $t$ とすると、

$$
  \begin{aligned}
  0
  &= \det \begin{pmatrix}
  -t & 1 & 0 \\ 0 & -t & 1 \\ 1 & 0 & -t \end{pmatrix}
  \\
  &= - t^3 + 1
  \\
  &= -(t-1)(t^2+t+1)
  \\
  \therefore \ \ 
  t &= 1, \frac{-1 \pm \sqrt{3} i}{2}
  \\
  &= 1, \omega, \omega^2
  \ \ \ \ \ \ \ \ \left( \omega = \frac{-1 + \sqrt{3} i}{2} \right)
  \end{aligned}
$$

である。
固有値 $t=1$ に属する固有ベクトルを求めるため

$$
  \begin{aligned}
  \begin{pmatrix}
  -1 & 1 & 0 \\ 0 & -1 & 1 \\ 1 & 0 & -1 \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $x=y=z$ を得る。
固有値 $t=\omega$ に属する固有ベクトルを求めるため

$$
  \begin{aligned}
  \begin{pmatrix}
  -\omega & 1 & 0 \\ 0 & -\omega & 1 \\ 1 & 0 & -\omega
  \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $y = \omega x, z = \omega^2 x$ を得る。
固有値 $t=\omega^2$ に属する固有ベクトルを求めるため

$$
  \begin{aligned}
  \begin{pmatrix}
  -\omega^2 & 1 & 0 \\ 0 & -\omega^2 & 1 \\ 1 & 0 & -\omega^2
  \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $y = \omega^2 x, z = \omega x$ を得る。
そこで、

$$
  \begin{aligned}
  U
  &= \frac{1}{\sqrt{3}} \begin{pmatrix}
  1 & 1 & 1 \\ 1 & \omega & \omega^2 \\ 1 & \omega^2 & \omega
  \end{pmatrix}
  \\
  &= \frac{1}{\sqrt{3}} \begin{pmatrix}
  1 & 1 & 1 \\
  1 & \frac{-1+\sqrt{3}i}{2} & \frac{-1-\sqrt{3}i}{2} \\
  1 & \frac{-1-\sqrt{3}i}{2} & \frac{-1+\sqrt{3}i}{2}
  \end{pmatrix}
  \end{aligned}
$$

とおくと、これはユニタリ行列であり、

$$
  \begin{aligned}
  U^{-1} T U
  &= \begin{pmatrix}
  1 & 0 & 0 \\ 0 & \omega & 0 \\ 0 & 0 & \omega^2
  \end{pmatrix}
  \\
  &= \begin{pmatrix}
  1 & 0 & 0 \\
  0 & \frac{-1+\sqrt{3}i}{2} & 0 \\
  0 & 0 & \frac{-1-\sqrt{3}i}{2}
  \end{pmatrix}
  \end{aligned}
$$

となる。

### (2)
3次の複素行列

$$
  \begin{aligned}
  A
  &= \begin{pmatrix}
  a_{11} & a_{12} & a_{13} \\
  a_{21} & a_{22} & a_{23} \\
  a_{31} & a_{32} & a_{33}
  \end{pmatrix}
  \end{aligned}
$$

を考えると、

$$
  \begin{aligned}
  TA
  &= \begin{pmatrix}
  a_{21} & a_{22} & a_{23} \\
  a_{31} & a_{32} & a_{33} \\
  a_{11} & a_{12} & a_{13}
  \end{pmatrix}
  \\
  AT
  &= \begin{pmatrix}
  a_{13} & a_{11} & a_{12} \\
  a_{23} & a_{21} & a_{22} \\
  a_{33} & a_{31} & a_{32}
  \end{pmatrix}
  \end{aligned}
$$

となるので、 $AT=TA$ のとき

$$
  \begin{aligned}
  a_{11} = a_{22} = a_{33},
  a_{12} = a_{23} = a_{31},
  a_{13} = a_{21} = a_{32}
  \end{aligned}
$$

である。
よって、 $T$ と交換可能な任意の行列は適当な複素数 $a,b,c$ を使って

$$
  \begin{aligned}
  \begin{pmatrix} a & b & c \\ c & a & b \\ b & c & a \end{pmatrix}
  \end{aligned}
$$

と書け、逆に、このように書ける行列は $T$ と交換可能である。
よって、 $T$ と交換可能な3次の複素行列の全体は

$$
  \begin{aligned}
  \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
  ,
  \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}
  ,
  \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}
  \end{aligned}
$$

を基底とする3次元複素ベクトル空間をなす。

### (3)
3次の複素行列

$$
  \begin{aligned}
  A =
  \begin{pmatrix} a & b & c \\ c & a & b \\ b & c & a \end{pmatrix}
  \end{aligned}
$$

を考えると、

$$
  \begin{aligned}
  SA &= \begin{pmatrix}
  a & b & c \\ 2c & 2a & 2b \\ 3b & 3c & 3a \end{pmatrix}
  \\
  AS &= \begin{pmatrix}
  a & 2b & 3c \\ c & 2a & 3b \\ b & 2c & 3a \end{pmatrix}
  \end{aligned}
$$

となるので、 $AS=SA$ のとき

$$
  \begin{aligned}
  b=c=0
  \end{aligned}
$$

である。
よって、 $S$ と交換可能な任意の行列は適当な複素数 $a$ を使って

$$
  \begin{aligned}
  a \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
  \end{aligned}
$$

と書け、逆に、このように書ける行列は $S$ と交換可能である。
よって、 $T$ および $S$ と交換可能な3次の複素行列の全体は

$$
  \begin{aligned}
  a \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
  \ \ \ \ \ \ \ \ ( a \text{ は任意の複素数 } )
  \end{aligned}
$$

である。