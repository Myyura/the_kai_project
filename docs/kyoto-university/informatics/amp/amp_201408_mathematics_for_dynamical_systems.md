---
sidebar_label: "2014年8月実施 力学系数学"
sidebar_position: 34
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版
$a(t)$ を半無限区間 $[1, \infty)$ で定義された連続関数として、微分方程式

$$
\begin{align}
t \frac{d^2 x}{d t^2} + (t^2 - 1) a(t) \frac{dx}{dt} - t a(t) x = 0, \qquad t \geqq 1   \tag{1}
\end{align}
$$

を考える。$x = \frac{t^3}{t^2 + 1}$ を式 (1) のひとつの解とする。以下の問いに答えよ。

(i) 関数 $a(t)$ を求めよ。

(ii) 式 (1) で $x = \frac{t^3}{t^2 + 1} y$ とおく。$y$ が満たす微分方程式を求めよ。

(iii) (ii) で得られた微分方程式を解き、式 (1) の一般解を求めよ。

(iv) 式 (1) の解 $x(t)$ が半無限区間 $[1, \infty)$ において有界となるための、$t=1$ における初期値 $(x_0, v_0) = \left( x(1), \frac{dx}{dt} (1) \right)$ の必要十分条件を求めよ。

### English Version


## **Kai**
### (i)

$$
\frac{dx}{dt} = \frac{t^4 + 3t^2}{t^4 + 2t^2 + 1},\quad \frac{d^2x}{dt^2} = \frac{2t(3-t^2)}{(t^2 + 1)^3}
$$

and we get

$$
a(t) = \frac{2}{t^2 + 1}
$$

### (ii)
for solution $x_1, x_2$

$$
\begin{aligned}
    (x_1'x_2 - x_1 x_2')' &= x_1 ''x_2 - x_1 x_2'' \\
    &= -(t-\frac 1t )a(t)(x_1'x_2 - x_1 x_2')
\end{aligned}
$$

$x_2 = x_1 y$ , $x_2 ' = x_1 ' y + x_1 y_1 '$, then

$$
(x_1' x_1 y - x_1 (x_1 ' y + x_1 y'))' = -\frac{2(1-t^2)}{t(t^2 + 1)} x_1^2 y'
$$

and we obtain

$$
ty'' + 4y' = 0
$$

### (iii)
Let $y' = \mu$, then $t\mu ' = -4\mu$, we get $\mu = \frac {C}{t^4}$, $y = \frac{C_1}{t^3} + C_2$.

Let $C_1 = 1$ , $C_2 = 0$, we have

$$
\frac{t^3}{t^2 + 1}y = \frac{1}{t^2 + 1}
$$

since $\frac{1}{t^2 + 1}$ , $\frac{t^3}{t^2 + 1}$ is linear independent,

$$
\frac{C_1 + C_2 t^3}{t^2 + 1}
$$

is a general solution

### (iv)

$$
x(t) = \frac{C_1 + C_2 t^3}{t^2 + 1}
$$

$$
x'(t) = \frac{C_2 t^4 + 3C_2 t^2 - 2C_1 t}{(t^2 + 1)^2}
$$

$C_2 = 0$ is a necessary and sufficient condition.
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

obviously $x_0 = -v_0$ is necessary and sufficient.
