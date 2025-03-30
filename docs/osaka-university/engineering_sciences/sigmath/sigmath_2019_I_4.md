---
sidebar_label: "2019年度 数理科学 I [4]"
sidebar_position: 3
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年度 数理科学 I \[4\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)

$$
  \begin{aligned}
  \lim_{t \ \downarrow \ 0} \frac{d^2 y(t)}{dt^2}
  &=
  \lim_{t \ \downarrow \ 0} \left( 2 x(t) - 2 \right)
  = -2
  \\
  \lim_{t \to \infty} \frac{d^2 y(t)}{dt^2}
  &=
  \lim_{t \to \infty} \left( 2 x(t) - 2 \right)
  = 0
  \end{aligned}
$$

### (2)
(D) の2番目の式を $t$ で2回微分して、1番目の式を使うと、

$$
  \begin{aligned}
  \frac{d^4 y(t)}{dt^4} - 2 \cdot \left( - 2 y(t) \right) &= 0
  \\
  \therefore \ \ 
  \frac{d^4 y(t)}{dt^4} + 4 y(t) &= 0
  \end{aligned}
$$

を得る。

### (3)
$y(t) = e^{kt}$ を (2) で得た微分方程式に代入すると、
特性方程式

$$
  \begin{aligned}
  k^4 + 4 = 0
  \end{aligned}
$$

を得る。
したがって、特性根は、

$$
  \begin{aligned}
  k = 1+i, 1-i, -1+i, -1-i
  \end{aligned}
$$

である。

### (4)
(2) で得た微分方程式の独立な特殊解は、 (3) より、

$$
  \begin{aligned}
  e^{(1+i)t}, e^{(1-i)t}, e^{(-1+i)t}, e^{(-1-i)t}
  \end{aligned}
$$

であるが、実数値関数の

$$
  \begin{aligned}
  e^t \sin t, e^t \cos t, e^{-t} \sin t, e^{-t} \cos t
  \end{aligned}
$$

も同様である。
したがって、実数解 $y(t)$ は、実数 $A, B, C, D$ を使って、

$$
  \begin{aligned}
  y(t) =
  A e^t \sin t + B e^t \cos t + C e^{-t} \sin t + D e^{-t} \cos t
  \end{aligned}
$$

と書ける。

条件 $\lim_{t \to \infty} y(t) = 0$ より $A=B=0$ であり、
条件 $\lim_{t \ \downarrow \ 0} y(t) = 0$ より $D=0$
であることがわかる。
よって、

$$
  \begin{aligned}
  y(t) = C e^{-t} \sin t
  \end{aligned}
$$

となり、

$$
  \begin{aligned}
  \frac{dy(t)}{dt} &= C e^{-t} (\cos t - \sin t)
  \\
  \frac{d^2 y(t)}{dt^2} &= -2C e^{-t} \cos t
  \end{aligned}
$$

となる。

ここで、条件
$\lim_{t \ \downarrow \ 0} d^2 y(t) / dt^2 = -2$ より $C=1$
がわかり、

$$
  \begin{aligned}
  y(t) &= e^{-t} \sin t
  \\
  \frac{d^2 y(t)}{dt^2} &= -2 e^{-t} \cos t
  \end{aligned}
$$

を得る。
これは、条件
$\lim_{t \to \infty} d^2 y(t) / dt^2 = 0$ を満たす。

また、このとき、

$$
  \begin{aligned}
  x(t)
  &=
  \frac{1}{2} \frac{d^2 y(t)}{dt^2} + 1
  \\
  &=
  - e^{-t} \cos t + 1
  \end{aligned}
$$

となる。

以上より、求める実数解 $x(t), y(t)$ は、

$$
  \begin{aligned}
  x(t) &= - e^{-t} \cos t + 1
  \\
  y(t) &= e^{-t} \sin t
  \end{aligned}
$$

である。