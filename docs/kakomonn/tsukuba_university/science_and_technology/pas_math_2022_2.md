---
comments: false
title: 筑波大学 理工情報生命学術院 数理物質科学研究群 数学学位プログラム 2022年度 [2]
tags:
  - Tsukuba-University
---
# 筑波大学 理工情報生命学術院 数理物質科学研究群 数学学位プログラム 2022年度 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)

$$
  \begin{aligned}
  D \boldsymbol{u}_1 = \boldsymbol{0}
  , \ \ 
  D \boldsymbol{u}_2 = \boldsymbol{0}
  \end{aligned}
$$

より、 $\boldsymbol{u}_1, \boldsymbol{u}_2 \in V$ がわかる。

### (2)

$$
  \begin{aligned}
  D \begin{pmatrix} a \\ b \\ c \\ d \end{pmatrix}
  = \begin{pmatrix} -2a+b+c+d \\ a-d \end{pmatrix}
  = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと $d=a, c=a-b$ が得られるので、 $V$ は2次元であることがわかる。

$\boldsymbol{u}_1, \boldsymbol{u}_2$ は、互いに実数倍ではないので、
1次独立であり、 (1) を考慮して、 $V$ の基底であることがわかる。

### (3)
まず、

$$
\begin{aligned}
L_A \left( \boldsymbol{u}_1 \right)
= \begin{pmatrix} 1 \\ -4 \\ 5 \\ 1 \end{pmatrix}
, \ \ \ \ 
L_A \left( \boldsymbol{u}_2 \right)
= \begin{pmatrix} -1 \\ 2 \\ -3 \\ -1 \end{pmatrix}
\end{aligned}
$$

であり、
$DL_A(\boldsymbol{u}_1) = \boldsymbol{0}, DL_A(\boldsymbol{u}_2) = \boldsymbol{0}$
すなわち
$L_A(\boldsymbol{u}_1), L_A(\boldsymbol{u}_2) \in V$
がわかる。

次に、任意の $\boldsymbol{v} \in V$ は、適当な実数 $s,t$ によって
$\boldsymbol{v} = s \boldsymbol{u}_1 + t \boldsymbol{u}_2$
と表されるので、この $\boldsymbol{v}$ について、
$L_A$ の線形性より、

$$
\begin{aligned}
L_A \left( \boldsymbol{v} \right)
&= s L_A \left( \boldsymbol{u}_1 \right)
+ t L_A \left( \boldsymbol{u}_2 \right)
\\
&\in V
\end{aligned}
$$

がわかり、これは $L_A(V) \subset V$ を意味する。

### (4)
(3) の計算より、

$$
\begin{aligned}
\varphi \left( \boldsymbol{u}_1 \right)
&= 5 \boldsymbol{u}_1 + 6 \boldsymbol{u}_2
\\
\varphi \left( \boldsymbol{u}_2 \right)
&= -3 \boldsymbol{u}_1 - 4 \boldsymbol{u}_2
\end{aligned}
$$

がわかるので、

$$
\begin{aligned}
\begin{pmatrix}
\varphi \left( \boldsymbol{u}_1 \right) &
\varphi \left( \boldsymbol{u}_2 \right)
\end{pmatrix}
=
\begin{pmatrix} \boldsymbol{u}_1 & \boldsymbol{u}_2 \end{pmatrix}
\begin{pmatrix} 5 & -3 \\ 6 & -4 \end{pmatrix}
\end{aligned}
$$

すなわち、

$$
\begin{aligned}
B = \begin{pmatrix} 5 & -3 \\ 6 & -4 \end{pmatrix}
\end{aligned}
$$

である。

### (5)
任意の $\boldsymbol{v} \in V$ は、適当な実数 $s,t$ によって
$\boldsymbol{v} = s \boldsymbol{u}_1 + t \boldsymbol{u}_2$
と表され、この $\boldsymbol{v}$ について、

$$
\begin{aligned}
\varphi \left( \boldsymbol{v} \right)
&= s \varphi \left( \boldsymbol{u}_1 \right)
+ t \varphi \left( \boldsymbol{u}_2 \right)
\\
&= (5s-3t) \boldsymbol{u}_1 + (6s-4t) \boldsymbol{u}_2
\end{aligned}
$$

となるので、 $\boldsymbol{v}$ が $\varphi$ の固有ベクトルになるのは、

$$
\begin{aligned}
5s-3t = \lambda s , \ \ 6s-4t = \lambda t
\end{aligned}
$$

をみたす実数 $\lambda \ (\ne 0)$ が存在するときである。
この条件は、

$$
\begin{aligned}
(5s-3t)t &= (6s-4t)s
\\
\therefore \ \ 
(2s-t)(s-t) &= 0
\end{aligned}
$$

と表されるので、 $2s=t$ または $s=t$ のとき、
$\boldsymbol{v}$ は $\varphi$ の固有ベクトルとなる。
したがって、例えば、

$$
\begin{aligned}
\boldsymbol{v}_1 &= \boldsymbol{u}_1 + \boldsymbol{u}_2
\\
\boldsymbol{v}_2 &= \boldsymbol{u}_1 + 2 \boldsymbol{u}_2
\end{aligned}
$$

は $V$ の基底であり、
この基底に関して $\varphi$ の表現行列は対角行列となる。
すなわち、題意の条件を満たす基底は存在する。