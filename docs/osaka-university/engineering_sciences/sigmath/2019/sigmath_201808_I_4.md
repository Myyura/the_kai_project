---
sidebar_label: "2018年8月実施 数理科学 I [4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Differential-Equations.Higher-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Boundary-Conditions-at-Infinity
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2018年8月実施 数理科学 I \[4\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文题干缺失。根据现有解答，实函数 $x(t),y(t)$（$t>0$）满足
$$
x''(t)=-2y(t),\qquad y''(t)=2x(t)-2,
$$
以及边界条件
$$
\lim_{t\downarrow0}x(t)=0,\quad
\lim_{t\to\infty}x(t)=1,\quad
\lim_{t\downarrow0}y(t)=0,\quad
\lim_{t\to\infty}y(t)=0.
$$

1. 求 $y''(t)$ 在 $t\downarrow0$ 与 $t\to\infty$ 时的极限。
2. 消去 $x(t)$，证明 $y$ 满足四阶方程
   $$y^{(4)}+4y=0.$$
3. 求该四阶方程的特征根。
4. 利用边界条件求 $x(t),y(t)$ 的实值解。

#### 考点

- **耦合常微分方程组**：通过微分与代入消去一个未知函数。
- **高阶常系数微分方程**：求复特征根并组成实值通解。
- **边值条件**：排除发散项并确定剩余积分常数。
- **渐近行为**：由函数极限推导导数表达式的端点极限。

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
