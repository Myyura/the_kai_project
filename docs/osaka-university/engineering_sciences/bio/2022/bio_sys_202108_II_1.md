---
sidebar_label: "2021年8月実施 II-1"
tags:
  - Osaka-University
  - Mathematics.Calculus.Calculus-of-Variations
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
---
# 大阪大学 基礎工学研究科 生体システム工学 2021年8月実施 II-1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文题干缺失，以下依据现有解答整理。设平面内光路写作 $y=y(x)$，介质折射率为 $n(x,y)$，真空光速为 $c$，光从 $P_1=(x_1,y_1)$ 传播到 $P_2=(x_2,y_2)$。

【问题 1：Fermat 原理与变分法】

1. 从微小弧长
   $$dl=\sqrt{1+y'^2}\,dx$$
   出发，证明传播时间可写为
   $$
   T[y]=\int_{x_1}^{x_2}\frac{n(x,y)}c\sqrt{1+y'^2}\,dx
   =\int_{x_1}^{x_2}L(x,y,y')\,dx.
   $$
2. 对端点固定的变分 $y=\bar y+\varepsilon h$，推导传播时间取驻值所满足的 Euler–Lagrange 方程
   $$
   \frac{\partial L}{\partial y}-\frac d{dx}\frac{\partial L}{\partial y'}=0.
   $$
3. 当折射率为常数 $n_0$ 时，证明该方程化为 $y''=0$，所以光路是连接 $P_1,P_2$ 的直线。

【问题 2：折射定律】

两均匀介质折射率分别为 $n_1,n_2$，光线在界面处折射，入射角与折射角为 $\theta_1,\theta_2$。

1. 用光路线段斜率表示 $\sin\theta_1$；
2. 将总传播时间写成光在两介质中传播时间之和；
3. 令折射点沿界面作微小变化，利用传播时间驻值条件推导 Snell 定律
   $$n_1\sin\theta_1=n_2\sin\theta_2.$$

## **Kai**
### (問 1)
#### (ア)
曲線 $y=y(x)$ 上の2点 $(x,y), (x+\Delta x, y+\Delta y)$
（ただし $0 \lt \Delta x \ll 1 $ ）を考えると、

$$
\begin{aligned}
\Delta y \simeq y'(x) \Delta x
\end{aligned}
$$

であり、この2点間の距離 $\Delta l$ は

$$
\begin{aligned}
\Delta l
&= \sqrt{\Delta x^2 + \Delta y^2}
\\
&\simeq \Delta x \sqrt{1 + y'(x)^2}
\end{aligned}
$$

である。
さらに、この2点の間を通るときの光の速さは $c / n(x,y)$ とみなせるので、
要する時間 $\Delta t$ は

$$
\begin{aligned}
\Delta t
&= \frac{\Delta l}{\frac{c}{n(x,y)}}
\\
&\simeq \frac{n(x,y)}{c} \Delta x \sqrt{1 + y'(x)^2}
\end{aligned}
$$

である。
よって、

$$
\begin{aligned}
T
&= \int_{x_1}^{x_2} \frac{n(x,y)}{c} \sqrt{1 + y'(x)^2} dx
\end{aligned}
$$

であり、題意のように書ける。

#### (イ)

$$
\begin{aligned}
L \left( x, \bar{y} + \epsilon h, \bar{y}' + \epsilon h' \right)
\simeq
L \left( x, \bar{y}, \bar{y}' \right)
+ \epsilon h(x) \frac{\partial L}{\partial y} (x,\bar{y},\bar{y}')
+ \epsilon h'(x) \frac{\partial L}{\partial y'} (x,\bar{y},\bar{y}')
\end{aligned}
$$

であるから、
$T$ が $y=\bar{y}(x)$ で停留値をとるための条件は

$$
\begin{aligned}
0
&= \int_{x_1}^{x_2}
L \left( x, \bar{y}(x) + \epsilon h(x), \bar{y}'(x) + \epsilon h'(x) \right) dx
- \int_{x_1}^{x_2} L \left( x, \bar{y}(x), \bar{y}'(x) \right) dx
\\
&\simeq \epsilon \int_{x_1}^{x_2}
\left\{ h(x) \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
+ h'(x) \frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx
\\
&= \epsilon \left[ h(x)
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right]_{x_1}^{x_2}
+ \epsilon \int_{x_1}^{x_2}
\left\{ h(x) \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
- h(x) \frac{d}{dx}
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx
\\
&=
\epsilon \int_{x_1}^{x_2} h(x)
\left\{ \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
- \frac{d}{dx}
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx
\end{aligned}
$$

であり、 (3) が成り立つことがわかる。

#### (ウ)
今の場合

$$
\begin{aligned}
L \left( x, y, y' \right)
&= \frac{n_0}{c} \sqrt{ 1 + y'^2 }
\end{aligned}
$$

であり、

$$
\begin{aligned}
\frac{d}{dx} \frac{\partial L}{\partial y'}
&= \frac{n_0}{c} \frac{d}{dx} \frac{y'}{\sqrt{ 1 + y'^2 }}
\\
&= \frac{n_0}{c} \frac{y''}{\left( 1 + y'^2 \right)^\frac{3}{2}}
, \\
\frac{\partial L}{\partial y} &= 0
\end{aligned}
$$

であるから、 (4) は

$$
\begin{aligned}
y''(x) = 0
\end{aligned}
$$

となり、これの解は点 $P_1, P_2$ を通る直線であることがわかる。

### (問 2)
#### (ア)
$x_1 \lt x \lt x_0$ において

$$
\begin{aligned}
y'
&= \frac{-y_1}{x_0-x_1}
\\
&= - \tan \theta_1
\end{aligned}
$$

であるから、 $0 \lt \theta_1 \lt \pi/2$ であることを考慮して、

$$
\begin{aligned}
\sin \theta_1
&= \frac{\tan \theta_1}{\sqrt{1 + \tan^2 \theta_1}}
\\
&= - \frac{y'}{\sqrt{1 + y'^2}}
\end{aligned}
$$

がわかる。

#### (イ)

$$
\begin{aligned}
T
&= \frac{n_1}{c} \int_{x_1}^{x_0} \sqrt{1 + y'^2} dx
+ \frac{n_2}{c} \int_{x_0}^{x_2} \sqrt{1 + y'^2} dx
\end{aligned}
$$

#### (ウ)
問題文の意図通りでないかもしれないが、次のようにして導くことができる。

屈折する点を $(x_0,y_0) \ (y_2 \lt y_0 \lt y_1)$ とする。
媒質 1 を通る時間 $T_1$ と媒質 2 を通る時間 $T_2$ は

$$
\begin{aligned}
T_1
&= \frac{n_1}{c} \sqrt{ (x_0-x_1)^2 + (y_0-y_1)^2 }
, \\
T_2
&= \frac{n_2}{c} \sqrt{ (x_2-x_0)^2 + (y_2-y_0)^2 }
\end{aligned}
$$

であるから、

$$
\begin{aligned}
T
&= T_1 + T_2
\\
&= \frac{n_1}{c} \sqrt{ (x_0-x_1)^2 + (y_0-y_1)^2 }
+ \frac{n_2}{c} \sqrt{ (x_2-x_0)^2 + (y_2-y_0)^2 }
\end{aligned}
$$

である。
停留性の条件

$$
\begin{aligned}
0
&= \frac{dT}{dy_0}
\\
&= \frac{n_1}{c} \frac{y_0-y_1}{\sqrt{ (x_0-x_1)^2 + (y_0-y_1)^2 }}
+ \frac{n_2}{c} \frac{y_0-y_2}{\sqrt{ (x_2-x_0)^2 + (y_2-y_0)^2 }}
\\
&= \frac{1}{c} \left( - n_1 \sin \theta_1 + n_2 \sin \theta_2 \right)
\end{aligned}
$$

から、スネルの法則

$$
\begin{aligned}
n_1 \sin \theta_1 &= n_2 \sin \theta_2
\end{aligned}
$$

が導かれる。
