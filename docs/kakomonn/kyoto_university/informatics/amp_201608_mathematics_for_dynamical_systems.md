---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2016年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2016年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版
$n$ を自然数、$ij$ 成分が

$$
a_{ij}(t) = \begin{cases}
&1 &(\text{for } i=j) \\
&t &(\text{for } i=j+1) \\
&0 &\text{otherwise}
\end{cases}
$$

の $n$ 次正方行列を $A(t)$ として、$t > 0$ において $n$ 元連立線形微分方程式

$$
\frac{dx}{dt} = \frac{1}{t} A(t) x, \quad x \in \mathbb{R}^n
$$

を考える。以下の問いに答えよ。

(i) $n = 1$ のとき一般解を求めよ。

(ii) $n = 2$ のとき一般解を求めよ。

(iii) 任意の自然数 $n$ に対して一般解を求めよ。

### English Version


## **Kai**
### (i)

$$
\frac{dx}{dt} = \frac{x}{t}
$$

$$
x = kt, \quad k \text{ is a constant}
$$

### (ii)

$$
\frac {dx}{dt}
 = \begin{bmatrix}
\frac 1t & 0 \\
1 & \frac 1t
\end{bmatrix} x
$$

then

$$
\frac{dx_1}{dt} = \frac 1t x_1 \Rightarrow x_i = kt
$$

$$
\frac{dx_2}{dt} = x_2 + \frac{x_2}{t} \Rightarrow kt^2 + mt
$$

thus

$$
\boldsymbol{x}(t) = [kt, kt^2 + mt]^\top
$$

### (iii)

$$
\frac{dx}{dt} = 
\begin{bmatrix}
\frac 1t & 0 &0 & \cdots &0 \\
1 & \frac 1t &0 &\cdots & 0 \\
0 & 1 & \frac 1t & \cdots &0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 &0 & \cdots &\frac 1t
\end{bmatrix}
$$

$$
x_1 = c_1 t, \text{and } \frac{dx_{k+1}}{dt} = x_k + \frac {x_{k+1}}{t}
$$

then we get

$$
x_{k+1} = u(t)t
$$

thus

$$
x_{k+1} = (\int \frac{x_k}{t} dt + C)t
$$

$$
x_{k} = \sum_{i=1}^{k} \frac{c_i}{(i-1)!} t^i
$$

Therefore

$$
\boldsymbol{x}(t) = [x_1, x_2, \ldots, x_n]^\top
$$
