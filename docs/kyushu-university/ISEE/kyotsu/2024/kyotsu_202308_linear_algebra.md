---
sidebar_label: "2023年8月実施 線形代数"
tags:
  - Kyushu-University
  - Linear-Algebra
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年8月実施 線形代数

## **Author**
Casablanca, [Miyake](https://miyake.github.io/exams/index.html)

## **Description**
$m \times n$ 実行列 $A$ と $m$ 次元実ベクトル $\boldsymbol{b}$ に対して, $S = \{\boldsymbol{x} \in \mathbb{R}| A\boldsymbol{x} = \boldsymbol{b}\},f(\boldsymbol{x}) = A\boldsymbol{x}$ を定義する。このとき、以下の問いに答えよ。ただし、以下の事実は証明なしに用してよい。

事実。 $\mathbb{R}$ 上のベクトル空間 (線形空間) $V$ の部分集合 $W$ が　の部分空間である必要十分条件は以下の条件が満たされることである。

- C1: $0 \in W$.
- C2: $u,v \in W$ ならば $\boldsymbol{u} + \boldsymbol{v} \in W$.
- C3: $u \in W$, $c \in \mathbb{R}$ ならば $c\boldsymbol{u} \in W$.

(1) $A = \begin{bmatrix} 2 & 0 & 2 & 0 \\ 0 & 8 & 24 & 24 \\ 0 & 2 & 6 & 6 \end{bmatrix}$ であるとき, $f$ の核 $\text{Ker}(f)$ の次元と基底を一組求めよ。

(2) 一般に $\text{Ker}(f)$ が $\mathbb{R}^n$ の部分空間であることを示せ。

(3) $S$ が $\mathbb{R}^n$ の部分空間であるとき, $\boldsymbol{b} = \boldsymbol{0}$ であることを示せ。

(4) $S$ が $\mathbb{R}^n$ の部分空間, $A$ が正方行列であるとする。このとき, $A$ が正則行列であるならば, $S = \{\boldsymbol{0}\}$ であることを示せ。

## **Kai** - By Casablanca
### (1)
Consider $A\vec{x} = 0$

$$
\begin{bmatrix}
2 & 0 & 2 & 0 \\
0 & 8 & 24 & 24 \\
0 & 2 & 6 & 6 \\
\end{bmatrix} \vec{x} = 0 
\qquad 
\vec{x} = \begin{bmatrix}
-u \\ -3u - 3v \\ u \\ v \\
\end{bmatrix}
= u
\begin{bmatrix}
-1 \\ -3 \\ 1 \\ 0 \\
\end{bmatrix} 
+ v
\begin{bmatrix}
0 \\ -3 \\ 0 \\ 1
\end{bmatrix}
$$

thus dimention of the kernel is $2$, $a$ basis is $\begin{bmatrix}-1 \\ -3 \\ 1 \\ 0 \\\end{bmatrix}$, $\begin{bmatrix}0 \\ -3 \\ 0 \\ 1 \\\end{bmatrix}$

### (2)
For convenience, let $\vec{x_1} = \begin{bmatrix}-1 & -3 & 1 & 0\end{bmatrix}^{\top} ,\vec{x_2} = \begin{bmatrix}0 & -3 & 0 & 1\end{bmatrix}^{\top}$

- C1: $A\vec{0} = 0$ , thus $0 \in \text{Ker}(f)$
- C2: if $A\vec{m} = 0, A\vec{n} = 0$, then $A (\vec{m} + \vec{n}) = A\vec{m} + A\vec{n} = 0$, that is, $\vec{m},\vec{n} \in \text{Ker}(f) \Rightarrow \vec{m} + \vec{n} \in \text{Ker}(f)$
- C3: if $A\vec{m} = 0, A(c\vec{m}) = c, A\vec{m} = 0$, that is, $\vec{m} \in \text{Ker}(f) \Rightarrow c \vec{m} \in \text{Ker}(f)$

C1, C2, C3 holds all, hence $\text{Ker}(f)$ is a subspace.

### (3)
If $\vec{b} = \vec{0}$,

- for C1, $A\vec{0} = \vec{0},\vec{0} \in S$
- for C2, $A\vec{m} = 0, A\vec{n} = 0 \Rightarrow A(\vec{m} + \vec{n}) = 0 \Rightarrow \vec{m} + \vec{n} \in S$
- for C3, $A\vec{m} = 0 \Rightarrow A(c\vec{m}) = 0 \Rightarrow c\vec{m} \in S$

If $\vec{b} \neq \vec{0}$, then $A\vec{0} = \vec{0}$ can't hold.
Thus $\vec{b} = \vec{0}$.

### (4)
Suppose that $A$ is invertible.

(i) It's trivial that $\vec{0} \in S$.

(ii) Assume that $\vec{v} \neq 0,\vec{v} \in S$, then $A\vec{v} = 0$.
We have

$$
A^{-1} (A\vec{v}) = A^{-1}0 = 0 \Rightarrow \vec{v} = 0
$$

a contradiction.

Hence $S = \{\vec{0}\}$.

## **Kai** - By Miyake
### (1)
$p,q,r,s \in \mathbb{R}$ について

$$
  \begin{aligned}
  A \begin{pmatrix} p \\ q \\ r \\ s \end{pmatrix}
  = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

が成り立つとすると

$$
  \begin{aligned}
  p+r=0, \ \ q+3r+3s=0
  \end{aligned}
$$

となるので、

$$
  \begin{aligned}
  \mathrm{Ker}(f)
  = \left\{ 
  \begin{pmatrix} -r \\ -3r-3s \\ r \\ s \end{pmatrix}
  \middle| r, s \in \mathbb{R}
  \right\}
  \end{aligned}
$$

がわかる。よって、 $\mathrm{Ker}(f)$ の次元は $2$ であり、例えば

$$
  \begin{aligned}
  \begin{pmatrix} -1 \\ -3 \\ 1 \\ 0 \end{pmatrix}
  , \ \ 
  \begin{pmatrix} 0 \\ -3 \\ 0 \\ 1 \end{pmatrix}
  \end{aligned}
$$

は基底となる。

### (2)
$\mathrm{Ker}(f)$ が与えられた条件 C1, C2, C3 を満たすことを確認すればよい。

(C1 の確認)

$$
  \begin{aligned}
  A \boldsymbol{0} = \boldsymbol{0}
  \end{aligned}
$$

なので $\boldsymbol{0} \in \mathrm{Ker}(f)$ がわかる。

(C2 の確認)

$\boldsymbol{u}, \boldsymbol{v} \in \mathrm{Ker}(f)$ とすると

$$
  \begin{aligned}
  A \boldsymbol{u} = A \boldsymbol{v} = \boldsymbol{0}
  \end{aligned}
$$

であり、このとき

$$
  \begin{aligned}
  f( \boldsymbol{u} + \boldsymbol{v} )
  &= A( \boldsymbol{u} + \boldsymbol{v} )
  \\
  &= A \boldsymbol{u} + A \boldsymbol{v}
  \\
  &= \boldsymbol{0} + \boldsymbol{0}
  \\
  &= \boldsymbol{0}
  \end{aligned}
$$

となるので、$\boldsymbol{u} + \boldsymbol{v} \in \mathrm{Ker}(f)$ がわかる。

(C3 の確認)

$\boldsymbol{u} \in \mathrm{Ker}(f)$ とすると

$$
  \begin{aligned}
  A \boldsymbol{u} = \boldsymbol{0}
  \end{aligned}
$$

であり、このとき、 $c \in \mathrm{R}$ について

$$
  \begin{aligned}
  f( c \boldsymbol{u} )
  &= A c \boldsymbol{u}
  \\
  &= c A \boldsymbol{u}
  \\
  &= c \boldsymbol{0}
  \\
  &= \boldsymbol{0}
  \end{aligned}
$$

となるので、

$c \boldsymbol{u} \in \mathrm{Ker}(f)$ がわかる。

### (3)
$S$ が $\mathbb{R}^n$ の部分空間であるとき、$\boldsymbol{0} \in S$ であるから

$$
  \begin{aligned}
  A \boldsymbol{0} = \boldsymbol{b}
  \end{aligned}
$$

が成り立つ。

これの左辺は $\boldsymbol{0}$ であるから右辺も $\boldsymbol{0}$ もであり、

$$
  \begin{aligned}
  \boldsymbol{b} = \boldsymbol{0}
  \end{aligned}
$$

がわかる。

### (4)
$S$ が $\mathbb{R}^n$ の部分空間であるとき、C1 から $\boldsymbol{0} \in S$ であり、(3) から $\boldsymbol{b} = \boldsymbol{0}$ である。

よって、 $\boldsymbol{x} \in S$ とすると、

$$
  \begin{aligned}
  A \boldsymbol{x} = \boldsymbol{0}
  \end{aligned}
$$

であるが、 $A$ が正則行列のとき逆行列 $A^{-1}$ が存在し、

$$
  \begin{aligned}
  A^{-1} A \boldsymbol{x} &= A^{-1} \boldsymbol{0}
  \\
  \therefore \ \ 
  \boldsymbol{x} &= \boldsymbol{0}
  \end{aligned}
$$

が得られる。

$\boldsymbol{x} \in S$ から $\boldsymbol{x} = \boldsymbol{0}$ が得られたので

$$
  \begin{aligned}
  S = \left\{ \boldsymbol{0} \right\}
  \end{aligned}
$$

である。