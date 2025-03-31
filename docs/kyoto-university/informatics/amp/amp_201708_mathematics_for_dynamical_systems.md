---
sidebar_label: "2017年8月実施 力学系数学"
sidebar_position: 26
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
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
\boldsymbol{x}
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
x_3 &= e^{H(t)}\int \frac{g(t)e^{H(t)}}{e^{F(t)}}dt \\
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
\frac{G(t)(e^{F(t)} - e^{H(t)})}{H(t)-F(t)} & e^{H(t)}
\end{pmatrix}
$$

### (iii)

$$
e^{\Psi(t)} = 
\begin{pmatrix}
e^{F(t)} & 0 \\
k(e^{H(t)} - e^{F(t)}) & e^{H(t)}
\end{pmatrix}
$$

$$
\frac{de^{\Psi (t)}}{dt} = 
\begin{pmatrix}
f(t)e^{F(t)} & 0 \\
k(h(t)e^{H(t)} - f(t)e^{F(t)}) & h(t)e^{H(t)}
\end{pmatrix}
$$

and

$$
A(t)e^{\Psi (t)} = \frac{de^{\Psi (t)}}{dt}
$$

thus $e^{\Psi (t)}$ is a fundamental matrix.

### (iv)

$$
f(t) = t, h(t) = t-1, g(t) = t^2
$$
