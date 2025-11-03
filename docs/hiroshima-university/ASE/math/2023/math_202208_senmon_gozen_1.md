---
sidebar_label: "2022年8月実施 専門科目 午前 [1]"
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 数学プログラム 2022年8月実施 専門科目 午前 \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
次の (A), (B) のすべての問に答えよ.

### (A)
$a$ を実定数とし, 実行列 $A = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 3 & 1 \\ 0 & 1 & a \end{pmatrix}$ を考える. 以下の問に答えよ.

(1). $A$ の階数が $2$ となるような $a$ の値を求めよ.

(2). $a$ を (1) で求めた値とする. $x, y, z$ を未知数, $p, q, r$ を定数とする. 実線形方程式

$$
A \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} p \\ q \\ r \end{pmatrix}
$$

が解をもつための必要十分条件を $p, q, r$ を用いて表し, それが成り立つときの一般解を $r$ を用いない形で求めよ.

### (B)
有限次元実線形空間 $V$ 上の線形写像 $A : V \rightarrow V$ は $A^3 = I$（ただし, $I$ は $V$ 上の恒等写像）を満たすとする.
$B = (I + A + A^2)/3, C = I - B, X = \text{Ker}\  B, Y = \text{Ker}\  C$ とする. 以下の問に答えよ.
ただし, 写像の合成を積とみなし, 線形写像 $T : V \rightarrow V$ に対してその核を $\text{Ker}\  T$ と表す.

(1). $BC = CB = O$ を示せ. ただし, $O$ は $V$ 上の零値写像（すべての $V$ の元を $V$ の零ベクトルに写す写像）である.

(2). $V = X \oplus Y$ を示せ. ただし, $\oplus$ はベクトル空間の直和を表す.

(3). $W = \{ u + A(v) \in V \mid u, v \in X \}$ は $X$ の部分空間であり, かつ $A(W) \subset W$ となることを示せ.

(4). $V$ の次元が奇数ならば, $A$ は 1 を固有値にもつことを示せ.

## **Kai**
### (A)
#### (1)
$A$ は次のように行基本変形できる：

$$
  \begin{aligned}
  \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & a \end{pmatrix}
  \\
  \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & a-1 \end{pmatrix}
  \end{aligned}
$$

よって、 $A$ の階数が $2$ となるのは $a=1$ のときである。

#### (2)
与えられた方程式の拡大係数行列

$$
  \begin{aligned}
  \begin{pmatrix} 1 & 1 & 0 & p \\ 2 & 3 & 1 & q \\ 0 & 1 & 1 & r \end{pmatrix}
  \end{aligned}
$$

は、次のように行基本変形できる：

$$
  \begin{aligned}
  \begin{pmatrix} 1 & 1 & 0 & p \\ 0 & 1 & 1 & -2p+q \\ 0 & 1 & 1 & r \end{pmatrix}
  \\
  \begin{pmatrix} 1 & 0 & -1 & 3p-q \\ 0 & 1 & 1 & -2p+q \\ 0 & 0 & 0 & 2p-q+r \end{pmatrix}
  \end{aligned}
$$

よって、与えられた方程式が解をもつための必要十分条件は $2p-q+r=0$ である。

このとき、

$$
  \begin{aligned}
  \begin{cases} x-z = 3p-q, \\ y+z= -2p+q \end{cases}
  \end{aligned}
$$

となるので、一般解は、 $t$ を任意の実数として、

$$
  \begin{aligned}
  \begin{cases} x = 3p-q+t, \\ y = -2p+q-t, \\ z = t \end{cases}
  \end{aligned}
$$

と表せる。

### (B)
#### (1)

$$
  \begin{aligned}
  B^2
  &= \frac{1}{9} \left( I + 2A + 3A^2 + 2A^3 + A^4 \right)
  \\
  &= \frac{1}{9} \left( 3I + 3A + 3A^2 \right)
  \ \ \ \ \ \ \ \ ( \because A^3=I )
  \\
  &= B
  \end{aligned}
$$

なので、

$$
  \begin{aligned}
  BC
  &= B(I-B)
  \\
  &= B - B^2
  \\
  &= O
  , \\
  CB
  &= (I-B)B
  \\
  &= B - B^2
  \\
  &= O
  \end{aligned}
$$

がわかる。

#### (2)
$V$ の零ベクトルを $0_V$ とする。

まず、 $x \in X, x \ne 0_V$ を考えると

$$
  \begin{aligned}
  Cx
  &= x - Bx
  \\
  &= x
  \\
  &\ne 0_V
  \end{aligned}
$$

なので $x \notin Y$ であり、
$y \in Y, y \ne 0_V$ を考えると

$$
  \begin{aligned}
  By
  &= y - Cy
  \\
  &= y
  \\
  &\ne 0_V
  \end{aligned}
$$

なので $y \notin X$ である。

よって、

$$
  \begin{align}
  X \cap Y = \left\{ 0_V \right\}
  \tag{*} \label{*}
  \end{align}
$$

である。

さらに、任意の $v \in V$ は

$$
  \begin{aligned}
  v &= Cv + Bv
  \end{aligned}
$$

と表せるが、 $BC=CB=O$ から $Cv \in X, Bv \in Y$ である。
このことと ($*$) から

$$
  \begin{aligned}
  V = X \oplus Y
  \end{aligned}
$$

が言える。

#### (3)
(i) 任意の $w \in W$ は適当な $u,v \in X$ を使って

$$
  \begin{aligned}
  w = u + Av
  \end{aligned}
$$

と表せ、

$$
  \begin{aligned}
  Bw
  &= Bu + BAv
  \\
  &= Bu + ABv
  \\
  &= O
  \ \ \ \ \ \ \ \ ( \because u, v \in X )
  \end{aligned}
$$

なので、 $w \in X$ であり、 $W \subset X$ がわかる。
また、任意の実数 $a,b$ と任意の

$$
  \begin{aligned}
  w_1 &= u_1 + Av_1 \in W
  \ \ \ \ ( u_1, v_1 \in X )
  \\
  w_2 &= u_2 + Av_2 \in W
  \ \ \ \ ( u_2, v_2 \in X )
  \end{aligned}
$$

について、

$$
  \begin{aligned}
  aw_1 + bw_2
  &= a(u_1 + Av_1) + b(u_2 + Av_2)
  \\
  &= (au_1+bu_2) + A (av_1+bv_2)
  \end{aligned}
$$

であるが、 $au_1+bu_2, av_1+bv_2 \in X$ なので、

$$
  \begin{aligned}
  aw_1 + bw_2 \in W
  \end{aligned}
$$

が言え、 $W$ が実線形空間であることがわかる。
以上より、 $W$ は $X$ の（線形）部分空間であることがわかる。

(ii) 任意の $w \in W$ は適当な $u,v \in X$ を使って

$$
  \begin{aligned}
  w = u + Av
  \end{aligned}
$$

と表せ、

$$
  \begin{aligned}
  Aw
  &= Au + A^2v
  \\
  &= A^2v + Au
  \\
  &\in W
  \ \ \ \ \ \ \ \
  ( \because BA^2v = A^2Bv = O \text{ より } A^2v \in X )
  \end{aligned}
$$

なので、 $A(W) \subset W$ である。

#### (4)