---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2017年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

$
\begin{bmatrix}
x_1' & x_2' \\
x_3' & x_4'
\end{bmatrix}
$ = $
\begin{bmatrix}
f(t) & 0 \\
g(t) & h(t)
\end{bmatrix}
$ $\boldsymbol{x}$
then we have
$$\frac{dx_1}{dt} = x_1 f(t), \frac{dx_2}{dt} = x_2 f(t), \frac{dx_3}{dt} = x_1 g(t) + x_3 h(t), \frac{dx_4}{dt} = x_2 g(t) + x_4h(t)$$
get the solutions:
$$x_1 = e^{F(t)}, x_2 = 0, x_3 = e^{H(t)}\int \frac{g(t)e^{H(t)}}{e^{F(t)}}dt, x_4 = e^{H(t)}$$

### (ii)
consider $|\Psi(t) - I\lambda| = 0$, then $\lambda$ = $F(t)$, $H(t)$
$\lambda = F(t)$, $\boldsymbol{\xi}^\top = [H(t) - F(t), -G(t)]$
$\lambda = H(t)$, $\boldsymbol{\xi}^\top = [0,1]$
thus 
$$
P(t) = \begin{bmatrix}
H(t)-F(t) & 0 \\
-G(t) & 1
\end{bmatrix}, P^{-1}(t) = 
\begin{bmatrix}
\frac{1}{H(t)-F(t)} & 0 \\
\frac{G(t)}{H(t)-F(t)} & 1
\end{bmatrix}
$$

then
$$
e^{\Psi(t)} = P(t)e^{\Lambda(t)}P^{-1}(t) = 
\begin{bmatrix}
e^{F(t)} & 0 \\
\frac{G(t)(e^{F(t)} - e^{H(t)})}{H(t)-F(t)} & e^{H(t)}
\end{bmatrix}
$$

### (iii)

$$e^{\Psi(t)} = 
\begin{bmatrix}
e^{F(t)} & 0 \\
k(e^{H(t)} - e^{F(t)}) & e^{H(t)}
\end{bmatrix}$$

$$
\frac{e^{\Psi (t)}}{dt} = 
\begin{bmatrix}
f(t)e^{F(t)} & 0 \\
k(h(t)e^{H(t)} - f(t)e^{F(t)}) & h(t)e^{H(t)}
\end{bmatrix}
$$

and $$A(t)e^{\Psi (t)} = \frac{e^{\Psi (t)}}{dt}$$
thus $e^{\Psi (t)}$ is a fundamental matrix.

### (iv)

Let $f(t) = t$, $h(t) = t-1$, $g(t) = t^2$