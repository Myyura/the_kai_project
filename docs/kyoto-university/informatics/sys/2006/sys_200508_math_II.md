---
sidebar_label: 2005年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Mean-Value-Theorem
  - Mathematics.Linear-Algebra.Matrix-Determinant
---

# 京都大学 情報学研究科 システム科学専攻 2005年8月実施 数学【II】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
微分可能な関数を成分とする行列の行列式 $F(x)=\det(f_{ij}(x))$ は、各行を順に微分した行列式の和として微分できる。すなわち、第 $i$ 行を $r_i(x)$ と書くと

$$
F'(x)=\sum_{i=1}^n\det\begin{pmatrix}r_1(x)\\\vdots\\r_i'(x)\\\vdots\\r_n(x)\end{pmatrix}.
$$

この公式を用いて、以下に答えよ。

(1) $g,h,r$ は閉区間 $[a,b]$ 上で連続、開区間 $(a,b)$ 上で微分可能とする。

$$
E(x)=\det\begin{pmatrix}g(a)&h(a)&r(a)\\g(b)&h(b)&r(b)\\g(x)&h(x)&r(x)\end{pmatrix}
$$

の微分を考えることにより、次を満たす $\xi\in(a,b)$ が存在することを示せ。

$$
\det\begin{pmatrix}g(a)&h(a)&r(a)\\g(b)&h(b)&r(b)\\g'(\xi)&h'(\xi)&r'(\xi)\end{pmatrix}=0.
$$

(2) $p,q,s$ は高々 3 次の多項式とし、次の $T(x)$ の 1 階および 2 階導関数を求めよ。

$$
T(x)=\det\begin{pmatrix}p(x)&q(x)&s(x)\\p'(x)&q'(x)&s'(x)\\p''(x)&q''(x)&s''(x)\end{pmatrix}.
$$

(3) (2) の $T(x)$ が高々 3 次の多項式であることを示せ。

### 問2
$a,b$ は実数、$n$ は正の整数とする。

(1) 方程式 $x^{2n+1}+ax+b=0$ の相異なる実根は高々三つであることを示せ。

(2) $n=1$ のとき、この方程式が相異なる三つの実根を持つための $a,b$ の必要十分条件を求めよ。

#### 题目描述

### 问1
设可微矩阵的各行为 $r_1(x),\ldots,r_n(x)$。行列式的导数等于将其中一行求导所得行列式之和：

$$
\frac{d}{dx}\det\begin{pmatrix}r_1\\\vdots\\r_n\end{pmatrix}
=\sum_{i=1}^n\det\begin{pmatrix}r_1\\\vdots\\r_i'\\\vdots\\r_n\end{pmatrix}.
$$

利用这一公式回答：

(1) $g,h,r$ 在 $[a,b]$ 连续、在 $(a,b)$ 可微。考虑

$$
E(x)=\det\begin{pmatrix}g(a)&h(a)&r(a)\\g(b)&h(b)&r(b)\\g(x)&h(x)&r(x)\end{pmatrix}
$$

的导数，证明存在 $\xi\in(a,b)$，使

$$
\det\begin{pmatrix}g(a)&h(a)&r(a)\\g(b)&h(b)&r(b)\\g'(\xi)&h'(\xi)&r'(\xi)\end{pmatrix}=0.
$$

(2) $p,q,s$ 是次数不超过 3 的多项式。求下列 $T(x)$ 的一阶、二阶导数。

$$
T(x)=\det\begin{pmatrix}p&q&s\\p'&q'&s'\\p''&q''&s''\end{pmatrix}.
$$

(3) 证明 $T(x)$ 是次数不超过 3 的多项式。

### 问2
设 $a,b\in\mathbb R$，$n$ 为正整数。

(1) 证明 $x^{2n+1}+ax+b=0$ 至多有三个互异实根。

(2) 当 $n=1$ 时，求恰有三个互异实根的充要条件。

## **Kai**

### 問1
(1) $E(x)=\det\begin{pmatrix}g(a)&h(a)&r(a)\\g(b)&h(b)&r(b)\\g(x)&h(x)&r(x)\end{pmatrix}$ とおく。$E(a)=E(b)=0$ なので、Rolle の定理から $E'(\xi)=0$ となる $\xi\in(a,b)$ が存在する。与式はこの等式にほかならない。

(2) 行ベクトル $v=(p,q,s)$ を用い、行が $u_1,u_2,u_3$ の行列式を $\det[u_1;u_2;u_3]$ と書く。同じ行を持つ行列式は $0$、また $v^{(4)}=0$ なので、

$$
\boxed{T'=\det[v;v';v^{(3)}],\qquad T''=\det[v;v'';v^{(3)}]}.
$$

(3) さらに $T^{(3)}=\det[v';v'';v^{(3)}]$、$T^{(4)}=0$。よって $T$ は高々 3 次である。

### 問2
(1) $f(x)=x^{2n+1}+ax+b$ とおくと $f''(x)=2n(2n+1)x^{2n-1}$ は実零点を一つしか持たない。$f$ に四つの相異なる実零点があれば、Rolle の定理を二度用いると $f''$ に少なくとも二つの相異なる実零点が生じ、矛盾する。

(2) $a\ge0$ なら $f(x)=x^3+ax+b$ は狭義単調増加なので実根は一つ。$a<0$ のとき $h=\sqrt{-a/3}$ とおくと、極大点は $-h$、極小点は $h$ である。三つの相異なる実根を持つ条件は

$$
f(-h)=b+2h^3>0,\qquad f(h)=b-2h^3<0.
$$

すなわち $b^2<4(-a/3)^3$。この不等式自体が $a<0$ を含むため、答えは $\boxed{4a^3+27b^2<0}$。
