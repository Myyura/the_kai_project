---
sidebar_label: "2021年8月実施 II-1"
tags:
  - Osaka-University
  - Mathematics.Calculus.Calculus-of-Variations
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
---
# 大阪大学 基礎工学研究科 生体システム工学 2021年8月実施 II-1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 原題に基づく要約（日本語）

[公式原題](https://www.me.es.osaka-u.ac.jp/msb/pdf/bio/r4_2.pdf)

平面内の光路を $y=y(x)$ とし、屈折率を $n(x,y)$、真空中の光速を $c$ とする。光は $P_1=(x_1,y_1)$ から $P_2=(x_2,y_2)$ へ進む。

### 問1

1. 微小弧長 $dl=\sqrt{1+y'^2}\,dx$ を用い、伝播時間が
   $$T[y]=\int_{x_1}^{x_2}\frac{n(x,y)}c\sqrt{1+y'^2}\,dx=\int_{x_1}^{x_2}L(x,y,y')\,dx$$
   と書けることを示す。
2. 端点固定の変分 $y=\bar y+\varepsilon h$ から、停留条件 $\partial L/\partial y-d(\partial L/\partial y')/dx=0$ を導く。
3. $n=n_0$ が定数ならば、この式が $y''=0$ となり、光路が両端点を結ぶ直線となることを示す。

### 問2

$x=x_0$ を境界とする屈折率 $n_1,n_2$ の一様媒質を考える。光は $P_1$ から $(x_0,0)$ を経て $P_2$ へ進み、$x_1<x_0<x_2,\ y_1>0>y_2$ とする。入射角 $\theta_1$ と屈折角 $\theta_2$ は水平方向の法線から測る。

1. 光路の傾きを用いて $\sin\theta_1$ を表す。
2. 全伝播時間を各媒質での時間の和で表す。
3. Euler–Lagrange 方程式と界面での変分条件から $n_1\sin\theta_1=n_2\sin\theta_2$ を導く。

### 题目描述

设平面内光路写作 $y=y(x)$，介质折射率为 $n(x,y)$，真空光速为 $c$，光从 $P_1=(x_1,y_1)$ 传播到 $P_2=(x_2,y_2)$。

【问题 1：Fermat 原理与变分法】

1. 从微小弧长

   $$
   dl=\sqrt{1+y'^2}\,dx
   $$

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

两均匀介质折射率分别为 $n_1,n_2$，界面为 $x=x_0$。光从 $P_1$ 经 $(x_0,0)$ 到达 $P_2$，且 $x_1<x_0<x_2,\ y_1>0>y_2$。入射角与折射角 $\theta_1,\theta_2$ 从水平方向的法线量起。

1. 用光路线段斜率表示 $\sin\theta_1$；
2. 将总传播时间写成光在两介质中传播时间之和；
3. 利用 Euler–Lagrange 方程及界面处的变分条件推导 Snell 定律

   $$
   n_1\sin\theta_1=n_2\sin\theta_2.
   $$

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

である。端点固定より $h(x_1)=h(x_2)=0$ であり、

$$
\begin{aligned}
&\int_{x_1}^{x_2}
L \left( x, \bar{y}(x) + \epsilon h(x), \bar{y}'(x) + \epsilon h'(x) \right) dx
- \int_{x_1}^{x_2} L \left( x, \bar{y}(x), \bar{y}'(x) \right) dx
\\
&= \epsilon \int_{x_1}^{x_2}
\left\{ h(x) \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
+ h'(x) \frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx+o(\epsilon)
\\
&= \epsilon \left[ h(x)
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right]_{x_1}^{x_2}
+ \epsilon \int_{x_1}^{x_2}
\left\{ h(x) \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
- h(x) \frac{d}{dx}
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx
+o(\epsilon)
\\
&=
\epsilon \int_{x_1}^{x_2} h(x)
\left\{ \frac{\partial L}{\partial y} (x,\bar{y}(x),\bar{y}'(x))
- \frac{d}{dx}
\frac{\partial L}{\partial y'} (x,\bar{y}(x),\bar{y}'(x)) \right\} dx+o(\epsilon)
\end{aligned}
$$

である。$T$ の停留性と $h$ の任意性より、Euler–Lagrange 方程式が成り立つ。

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

であるから、Euler–Lagrange 方程式は

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
各媒質内では Euler–Lagrange 方程式が成り立つ。界面で連続な変分 $h$ を取り、端点を固定すると、部分積分で残る界面項は

$$\delta T=\left[\left.\frac{\partial L_1}{\partial y'}\right|_{x_0^-}-\left.\frac{\partial L_2}{\partial y'}\right|_{x_0^+}\right]h(x_0).$$

$h(x_0)$ は任意なので、停留性は $\partial L_1/\partial y'=\partial L_2/\partial y'$ を要求する。ここで

$$\frac{\partial L_i}{\partial y'}=\frac{n_i}{c}\frac{y'}{\sqrt{1+y'^2}}=-\frac{n_i}{c}\sin\theta_i.$$

よって

$$\boxed{n_1\sin\theta_1=n_2\sin\theta_2}.$$

これで、設問の指定どおり Euler–Lagrange の変分計算から屈折則が得られる。

## **Reference**

- [大阪大学 基礎工学研究科 2022年度 生体システム工学II](https://www.me.es.osaka-u.ac.jp/msb/pdf/bio/r4_2.pdf)
