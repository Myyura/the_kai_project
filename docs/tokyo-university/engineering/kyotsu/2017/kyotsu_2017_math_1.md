---
sidebar_label: '数学 第1問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2017年度 数学 第1問

## **Author**

## **Description**
I、以下の定積分を求めよ。

$$
\begin{align}
I = \int_2^4 \frac{\text{d}x}{\sqrt{(x-2)(4-x)}} \tag{1}
\end{align}
$$

II、以下の微分方程式の一般解と特異解を求めよ。

$$
\begin{align}
y = x \frac{\text{d}y}{\text{d}x} + \frac{\text{d}y}{\text{d}x} + \bigg(\frac{\text{d}y}{\text{d}x} \bigg)^2 \tag{2}
\end{align}
$$

III、以下の微分方程式の一般解を求めよ。

$$
\begin{align}
x^2 \frac{\text{d}^2y}{\text{d}x^2} - x \frac{\text{d}y}{\text{d}x} - 8y = x^2 \tag{3}
\end{align}
$$

## **Kai**
### (I)

$$
\begin{aligned}
I &= \int_2^4 \frac{\text{d}x}{\sqrt{(x-2)(4-2)}} \\
&=\int_2^4 \frac{\text{d}x}{\sqrt{1-(x-3)^2}} \\
&=\int_{-\pi /2}^{\pi /2} \frac{\cos\theta \text{d}\theta}{\sqrt{1-\sin^2 \theta}}  \qquad (\text{置換:} \quad x - 3 = \sin \theta) \\
&=\int_{-\pi /2}^{\pi /2} \text{d}\theta = \frac{\pi}{2} - (-\frac{\pi}{2}) = \pi
\end{aligned}
$$

### (II)

$$
\begin{aligned}
y = x \frac{\text{d}y}{\text{d}x} + \frac{\text{d}y}{\text{d}x} + \bigg(\frac{\text{d}y}{\text{d}x} \bigg)^2 \\
y = xy' + y' + (y')^2 \\
\end{aligned}
$$

$x\text{で微分して}$

$$
\begin{aligned}
y' = y' + xy'' + y'' + 2y'y''\\
y''(x + 1 + 2y') = 0
\end{aligned}
$$

#### (i)
$y'' = 0$ のとき,

$$
y = a + b
$$

となり,　式($2$)に代入すると,

$$
\begin{aligned}
ax + b &= a(x + 1) + a^2 \\
b &= a^2 + a
\end{aligned}
$$

である,　よって一般解 $y = ax + a^2 + a$ を得る。

#### (ii)

$x + 1 + 2y' = 0$ のとき,

$$
\begin{aligned}
y' &= -\frac{1}{2}(x + 1) \\
y &= -\frac{1}{4}x^2 - \frac{1}{2}x + C \\ 
\end{aligned}
$$

となり,　式($2$)に代入すると,

$$
\begin{aligned}
- \frac{1}{4}x^2 - \frac{1}{2}x + C &= (x + 1)(-\frac{1}{2}x - \frac{1}{2}) + (-\frac{1}{2}x - \frac{1}{2})^2 \\
C &= -\frac{1}{4}
\end{aligned}
$$

である,　よって特異解 $y = -\frac{1}{4}x^2 - \frac{1}{2}x - \frac{1}{4}$ を得る。

### (III)

$$
\begin{aligned}
x^2 \frac{\text{d}^2y}{\text{d}x^2} - x \frac{\text{d}y}{\text{d}x} - 8y = x^2 
\end{aligned}
$$

$x = e^{t}$ とおくと,

$$
\begin{aligned}
\frac{\text{d}x}{\text{d}t} &= e^{t} = x , \qquad \frac{\text{d}t}{\text{d}x} = \frac{1}{x} \\
x \frac{\text{d}y}{\text{d}x}&= x \frac{\text{d}y}{\text{d}t} \frac{\text{d}t}{\text{d}x} = \frac{\text{d}y}{\text{d}t} \\
\frac{\text{d}^2y}{\text{d}x^2} &= \frac{\text{d}}{\text{d}x} (\frac{1}{x} \frac{\text{d}y}{\text{d}t}) \\
&= - \frac{1}{x^2} \frac{\text{d}y}{\text{d}t} + \frac{1}{x} \frac{\text{d}}{\text{d}t}  \frac{\text{d}t}{\text{d}x} \frac{\text{d}y}{\text{d}t} \\
&= -\frac{1}{x^2} \frac{\text{d}y}{text{d}t} + \frac{1}{x^2} \frac{\text{d}^2y}{\text{d}t^2} \\
&\therefore  x^2\frac{\text{d}^2y}{\text{d}x^2} = \frac{\text{d}^2y}{\text{d}t^2} - \frac{\text{d}y}{\text{d}t} \\
\end{aligned}
$$

であるから,式($3$)は,

$$
\begin{align}
\frac{\text{d}^2y}{\text{d}t^2} - \frac{\text{d}y}{\text{d}t} - \frac{\text{d}y}{\text{d}t} - 8y &= e^{2t} \nonumber \\
\frac{\text{d}^2y}{\text{d}t^2} - 2\frac{\text{d}y}{\text{d}t} - 8y &= e^{2t} \tag{4}
\end{align}
$$

となる。特性方程式 $\lambda^2 - 2\lambda - 8 = 0$ の解は,

$$
(\lambda - 4)(\lambda + 2) = 0 \\
\therefore \lambda = -2 , \quad 4
$$

だから,　斉次の一般解は $y = C_{1}e^{-2t} + C_{2}e^{4t}$。

一方,　特解を $y = Ae^{2t}$ と予想して式($4$)に代入すると,

$$
\begin{aligned}
4Ae^{2t} &- 4Ae^{2t} - 8Ae^{2t} = e^{2t} \\
&\therefore A = -\frac{1}{8}
\end{aligned}
$$

となり,　特解 $y = -\frac{1}{8}e^{2t}$ を得る。よって求める一般解は,

$$
\begin{aligned}
y &= C_{1}e^{-2t} + C_{2}e^{4t} - \frac{1}{8}e^{2t} \\
&= C_{1}x^{-2} + C_{2}x^4 - \frac{1}{8}x \\
\end{aligned}
$$
