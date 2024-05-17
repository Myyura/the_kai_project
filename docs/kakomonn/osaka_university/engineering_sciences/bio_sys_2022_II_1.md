---
comments: false
title: 大阪大学 基礎工学研究科 生体システム工学 2022年度 II-1
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 生体システム工学 2022年度 II-1

## **Author**
Miyake

## **Description**

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