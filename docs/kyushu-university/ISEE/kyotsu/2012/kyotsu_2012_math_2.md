---
sidebar_label: "2012年度入学 数学 問2（微分方程式）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2012年度入学 数学 問2（微分方程式）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つの関数 $x(t)$ , $y(t)$ について、次の連立微分方程式を解け.

$$
\begin{cases}
\frac{dx}{dt} = -2x - y + \cos t \\
\frac{dy}{dt} = - \frac{dx}{dt} - 6x
\end{cases}
$$

### 题目描述

设 $x(t)$、$y(t)$ 为关于 $t$ 的函数，求下列非齐次联立微分方程的通解：

$$
\begin{cases}
\dfrac{dx}{dt}=-2x-y+\cos t,\\[2mm]
\dfrac{dy}{dt}=-\dfrac{dx}{dt}-6x.
\end{cases}
$$

## **Kai**

Let's rewrite the system of equations as:

$$
\begin{cases}
\frac{dx}{dt} = -2x - y + \cos t \\
\frac{dy}{dt} = - \frac{dx}{dt} - 6x
\end{cases}
$$

Substitute the first equation into the second one:

$$
\frac{dy}{dt} = - (-2x - y + \cos t) - 6x = 2x + y - \cos t - 6x = -4x + y - \cos t
$$

Now we have:

$$
\begin{cases}
\frac{dx}{dt} = -2x - y + \cos t \\
\frac{dy}{dt} = -4x + y - \cos t
\end{cases}
$$

Differentiate the first equation with respect to t:

$$
\frac{d^2x}{dt^2} = -2\frac{dx}{dt} - \frac{dy}{dt} - \sin t
$$

Substitute the first and second equations into this one:

$$
\frac{d^2x}{dt^2} = -2(-2x - y + \cos t) - (-4x + y - \cos t) - \sin t = 4x + 2y - 2\cos t + 4x - y + \cos t - \sin t = 8x + y - \cos t - \sin t
$$

From the first equation, we have $y = -\frac{dx}{dt} - 2x + \cos t$ . Substitute this into the above equation:

$$
\frac{d^2x}{dt^2} = 8x + (- \frac{dx}{dt} - 2x + \cos t) - \cos t - \sin t = 6x - \frac{dx}{dt} - \sin t
$$

$$
\frac{d^2x}{dt^2} + \frac{dx}{dt} - 6x = - \sin t
$$

This is a second-order linear non-homogeneous differential equation. Let's find the homogeneous solution first:

The characteristic equation is $r^2 + r - 6 = 0$ , which factors to $(r+3)(r-2) = 0$ . Thus, $r_1 = -3$ and $r_2 = 2$ .

The homogeneous solution is $x_h(t) = c_1e^{-3t} + c_2e^{2t}$ .

Now, let's find a particular solution. Since the right-hand side is $-\sin t$ , we can assume a particular solution of the form $x_p(t) = A\cos t + B\sin t$ .

$$
\frac{dx_p}{dt} = -A\sin t + B\cos t
$$

$$
\frac{d^2x_p}{dt^2} = -A\cos t - B\sin t
$$

Substitute these into the differential equation:

$$
(-A\cos t - B\sin t) + (-A\sin t + B\cos t) - 6(A\cos t + B\sin t) = -\sin t
$$

$$
(-A + B - 6A)\cos t + (-B - A - 6B)\sin t = -\sin t
$$

$$
(-7A + B)\cos t + (-A - 7B)\sin t = -\sin t
$$

So we have the system:

$$
\begin{cases}
-7A + B = 0 \\
-A - 7B = -1
\end{cases}
$$

From the first equation, $B = 7A$ . Substitute this into the second equation:

$$
-A - 7(7A) = -1 \implies -A - 49A = -1 \implies -50A = -1 \implies A = \frac{1}{50}
$$

Thus, $B = 7A = \frac{7}{50}$ .

The particular solution is $x_p(t) = \frac{1}{50}\cos t + \frac{7}{50}\sin t$ .

The general solution for x(t) is $x(t) = c_1e^{-3t} + c_2e^{2t} + \frac{1}{50}\cos t + \frac{7}{50}\sin t$ .

To find y(t), we use $y = -\frac{dx}{dt} - 2x + \cos t$ :

$$
\frac{dx}{dt} = -3c_1e^{-3t} + 2c_2e^{2t} - \frac{1}{50}\sin t + \frac{7}{50}\cos t
$$

$$
y(t) = -(-3c_1e^{-3t} + 2c_2e^{2t} - \frac{1}{50}\sin t + \frac{7}{50}\cos t) - 2(c_1e^{-3t} + c_2e^{2t} + \frac{1}{50}\cos t + \frac{7}{50}\sin t) + \cos t
$$

$$
y(t) = 3c_1e^{-3t} - 2c_2e^{2t} + \frac{1}{50}\sin t - \frac{7}{50}\cos t - 2c_1e^{-3t} - 2c_2e^{2t} - \frac{1}{25}\cos t - \frac{7}{25}\sin t + \cos t
$$

$$
y(t) = c_1e^{-3t} - 4c_2e^{2t}
- \frac{13}{50}\sin t + \frac{41}{50}\cos t
$$

Therefore:

$$
\begin{cases}
x(t) = c_1e^{-3t} + c_2e^{2t} + \frac{1}{50}\cos t + \frac{7}{50}\sin t \\
y(t) = c_1e^{-3t} - 4c_2e^{2t} - \frac{13}{50}\sin t + \frac{41}{50}\cos t
\end{cases}
$$
