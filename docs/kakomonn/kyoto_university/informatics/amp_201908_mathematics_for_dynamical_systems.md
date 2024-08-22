---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

plug $x = e^t$ in:
$$te^t + (at + b)e^t + e^t = 0$$
get: $a = b = -1$

### (ii)

$\Phi(t) = u(t)e^t$, plug in, and we obtain that :
$$tu''(t) + (t-1)u'(t) = 0$$
by solving this equation, we attain:
$$u(t) = C_1(-(t+1)e^{-t} + C_2)$$
where $C_1$ and $C_2$ are 2 constant.
Let $C_1 = 1$, $C_2 = 0$,
get:
$$\Phi(t) = u(t)e^t = -t-1$$

### (iii)
$$\frac{d^2 \sigma(x(t))}{dt^2} = \frac{d\frac{ \sigma(x(t))}{dt}}{dt} = \sigma(\frac{d^2 x(t)}{dt^2})$$
$$t \frac{d^2 \sigma(x(t))}{dt^2} = \sigma(t)\sigma(\frac{d^2x(t)}{dt^2}) = \sigma(t \frac{d^2 x(t)}{dt^2})$$
$$-(t+1)\frac{d\sigma(x(t))}{dt} = \sigma(-(t+1)\frac{dx(t)}{dt})$$

And we obtain:
$$t \frac{d^2 \sigma(x(t))}{dt^2} - (t+1)\frac{d\sigma(x(t))}{dt} + \sigma(x(t)) = \sigma(0) = 0$$

### (iv)
$A(\sigma_i) = \begin{bmatrix}
1 & 0 \\
0 & c_i
\end{bmatrix}
$ is summetric