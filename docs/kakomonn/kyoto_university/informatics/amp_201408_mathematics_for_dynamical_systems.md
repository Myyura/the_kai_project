---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2014年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

$$\frac{dx}{dt} = \frac{t^4 + 3t^2}{t^4 + 2t^2 + 1},\quad \frac{d^2x}{dt^2} = \frac{2t(3-t^2)}{(t^2 + 1)^3}$$
and we get
$$a(t) = \frac{2}{t^2 + 1}$$

### (ii)

for solution $x_1, x_2$
$$
\begin{aligned}
    (x_1'x_2 - x_1 x_2')' &= x_1 ''x_2 - x_1 x_2'' \\
    &= -(t-\frac 1t )a(t)(x_1'x_2 - x_1 x_2')
\end{aligned}
$$

$x_2 = x_1 y$ , $x_2 ' = x_1 ' y + x_1 y_1 '$
then
$$(x_1' x_1 y - x_1 (x_1 ' y + x_1 y'))' = -\frac{2(1-t^2)}{t(t^2 + 1)} x_1^2 y'$$
and we obtain
$$ty'' + 4y' = 0$$

### (iii)

Let $y' = \mu$, then $t\mu ' = -4\mu$, we get $\mu = \frac {C}{t^4}$, $y = \frac{C_1}{t^3} + C_2$
and let $C_1 = 1$ , $C_2 = 0$
$$\frac{t^3}{t^2 + 1}y = \frac{1}{t^2 + 1}$$
since $\frac{1}{t^2 + 1}$ , $\frac{t^3}{t^2 + 1}$ is linear independent
$\frac{C_1 + C_2 t^3}{t^2 + 1}$ is a general solution

### (iv)
$$x(t) = \frac{C_1 + C_2 t^3}{t^2 + 1}$$
$$x'(t) = \frac{C_2 t^4 + 3C_2 t^2 - 2C_1 t}{(t^2 + 1)^2}$$
$C_2 = 0$ is a necessary and sufficient condition
And by solving:

$$
\begin{bmatrix}
    x(1)\\ \frac{dx}{dt}(1)
\end{bmatrix} = 
\begin{bmatrix}
    \frac{C_1 + C_2}{2} \\
    \frac{-2C_1 + 4C_2}{4}
\end{bmatrix} = 
\begin{bmatrix}
    x_0 \\ v_0
\end{bmatrix}
$$

we get
$$
\begin{aligned} 
    &C_1 = \frac 23 (2x_0 - v_0) \\
    &C_2 = \frac 23 (x_0 + v_0)
\end{aligned}
$$

obviously $x_0 = -v_0$ is necessary and sufficient