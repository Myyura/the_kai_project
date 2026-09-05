---
sidebar_label: "2017年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Differential-Equations.Fundamental-Matrix
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 力学系数学

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h30_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)
### 日本語版
$f(t), g(t), h(t)$ を $\mathbb{R}$ 上の連続関数として、

$$
A(t) = \begin{pmatrix}
f(t) & 0 \\ g(t) & h(t)
\end{pmatrix}
$$

とおき、$\mathbb{R}$ 上において2元連立線形微分方程式

$$
\begin{align}
\frac{d \boldsymbol{x}}{dt} = A(t) \boldsymbol{x}, \quad \boldsymbol{x} \in \mathbb{R}^2 \tag{1}
\end{align}
$$

を考える。$I$ を2次単位行列、

$$
F(t) = \int_0^t f(s)ds, \quad G(t) = \int_0^t g(s)ds, \quad H(t) = \int_0^t h(s)ds
$$

として、以下の問いに答えよ。ただし、$t \neq 0$ のとき $F(t) \neq H(t)$ が成立するものとする。

(i) $\Phi(0) = I$ を満たす式 (1) の基本行列 $\Phi(t)$ を求めよ。ここで、基本行列 $\Phi(t)$ とは、正則かつ $\frac{d}{dt} \Phi(t) = A(t) \Phi(t)$ を満たす2次正方行列のことをいう。

(ii) $t \neq 0$ のとき、行列 $\Psi(t) = \begin{pmatrix} F(t) & 0 \\ G(t) & H(t) \end{pmatrix}$ の対角化を行って、指数関数 $\exp \Psi(t)$ を求めよ。

(iii) $k \in \mathbb{R}$ をある定数として $\mathbb{R}$ 上で $G(t) = k(F(t) - H(t))$ が成立するとき、(ii) で求めた指数関数 $\exp \Psi(t)$ が式 (1) の基本行列となることを示せ。

(iv) (i) と (ii) を用いて、指数関数 $\exp \Psi(t)$ が式 (1) の基本行列とならない $f(t)$, $g(t)$, $h(t)$ の例をあげよ。

### English Version


### 题目描述

设 $f(t),g(t),h(t)$ 是 $\mathbb R$ 上的连续函数，

$$
A(t)=\begin{pmatrix}f(t)&0\\g(t)&h(t)\end{pmatrix},
$$

并在 $\mathbb R$ 上考虑线性微分方程组

$$
\frac{d\boldsymbol x}{dt}=A(t)\boldsymbol x,
\qquad \boldsymbol x\in\mathbb R^2. \tag{1}
$$

令 $I$ 为二阶单位矩阵，并定义

$$
F(t)=\int_0^t f(s)\,ds,\quad
G(t)=\int_0^t g(s)\,ds,\quad
H(t)=\int_0^t h(s)\,ds.
$$

假设 $t\ne0$ 时 $F(t)\ne H(t)$。回答：

1. 求满足 $\Phi(0)=I$ 的方程 (1) 的基本矩阵 $\Phi(t)$；基本矩阵指可逆且满足
   $\dfrac d{dt}\Phi(t)=A(t)\Phi(t)$ 的二阶方阵。
2. 当 $t\ne0$ 时，对

   $$
   \Psi(t)=\begin{pmatrix}F(t)&0\\G(t)&H(t)\end{pmatrix}
   $$

   作对角化，并求矩阵指数 $\exp\Psi(t)$。
3. 若存在常数 $k\in\mathbb R$，使所有 $t\in\mathbb R$ 上
   $G(t)=k(F(t)-H(t))$，证明第 2 问所得 $\exp\Psi(t)$ 是方程 (1) 的基本矩阵。
4. 结合前两问，给出一组 $f(t),g(t),h(t)$，使 $\exp\Psi(t)$ 不是方程 (1) 的基本矩阵。

## **Kai**
### (i)

$$
\begin{pmatrix}
x_1' & x_2' \\
x_3' & x_4'
\end{pmatrix}
=
\begin{pmatrix}
f(t) & 0 \\
g(t) & h(t)
\end{pmatrix}
\begin{pmatrix}
x_1 & x_2 \\
x_3 & x_4
\end{pmatrix}
$$

then we have

$$
\begin{aligned}
\frac{dx_1}{dt} &= x_1 f(t) \\
\frac{dx_2}{dt} &= x_2 f(t) \\
\frac{dx_3}{dt} &= x_1 g(t) + x_3 h(t) \\
\frac{dx_4}{dt} &= x_2 g(t) + x_4h(t)
\end{aligned}
$$

get the solutions:

$$
\begin{aligned}
x_1 &= e^{F(t)} \\
x_2 &= 0 \\
x_3 &= e^{H(t)}\int_0^t g(s)e^{F(s)-H(s)}\,ds \\
x_4 &= e^{H(t)}
\end{aligned}
$$

### (ii)
Consider $|\Psi(t) - I\lambda| = 0$, then we have $\lambda$ = $F(t), H(t)$.

For $\lambda = F(t)$, $\boldsymbol{\xi}^\top = [H(t) - F(t), -G(t)]$
For $\lambda = H(t)$, $\boldsymbol{\xi}^\top = [0,1]$

thus

$$
P(t) = \begin{pmatrix}
H(t)-F(t) & 0 \\
-G(t) & 1
\end{pmatrix},
P^{-1}(t) = 
\begin{pmatrix}
\frac{1}{H(t)-F(t)} & 0 \\
\frac{G(t)}{H(t)-F(t)} & 1
\end{pmatrix}
$$

then

$$
e^{\Psi(t)} = P(t)e^{\Lambda(t)}P^{-1}(t) = 
\begin{pmatrix}
e^{F(t)} & 0 \\
\frac{G(t)(e^{H(t)} - e^{F(t)})}{H(t)-F(t)} & e^{H(t)}
\end{pmatrix}
$$

### (iii)

$$
e^{\Psi(t)} = 
\begin{pmatrix}
e^{F(t)} & 0 \\
k(e^{F(t)} - e^{H(t)}) & e^{H(t)}
\end{pmatrix}
$$

$$
\frac{de^{\Psi (t)}}{dt} = 
\begin{pmatrix}
f(t)e^{F(t)} & 0 \\
k(f(t)e^{F(t)} - h(t)e^{H(t)}) & h(t)e^{H(t)}
\end{pmatrix}
$$

Since $g(t)=k(f(t)-h(t))$, direct multiplication gives

$$
A(t)e^{\Psi (t)} = \frac{de^{\Psi (t)}}{dt}
$$

thus $e^{\Psi (t)}$ is a fundamental matrix.

### (iv)

$$
f(t) = t, h(t) = t-1, g(t) = t^2
$$

Here $F(t)=t^2/2$, $H(t)=t^2/2-t$, and $G(t)=t^3/3$, so the hypothesis $F(t)\ne H(t)$ for $t\ne0$ holds. At $t=1$, the lower-left entry of $e^{\Psi(t)}$ is

$$
e^{-1/2}\frac{e-1}{3},
$$

whereas the lower-left entry of the fundamental matrix in (i) is

$$
e^{-1/2}\int_0^1 s^2e^s\,ds=e^{-1/2}(e-2).
$$

They are unequal, so $e^{\Psi(t)}$ is not a fundamental matrix of (1).
