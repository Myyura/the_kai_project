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

フェルマーの原理によると、2点を通る光はその間の可能な経路のうち要する時間が最短となる経路を通るという。この原理を用いて、媒質中における光路を導出することを考える。真空中の光速を $c$ とし、以下の問に答えよ。

### 問1

図1に示すように、$x$-$y$ 平面上の各点 $(x,y)$ に非一様な屈折率 $n(x,y)$ の媒質が分布し、光が媒質中の点 $\mathrm P_1(x_1,y_1)$ から出発し点 $\mathrm P_2(x_2,y_2)$ に至るとする。ただし、関数 $y(x)$ の導関数を $y'=dy/dx$ とする。

![図1：屈折率が非一様な媒質中における光路の例](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering_sciences/bio/2022/bio_sys_202108_II_1_fig1.png)

(ア) 光が曲線 $y=y(x)$ 上を通るのに要する時間を $T$ とする。$T$ は、

$$
T=\int_{x_1}^{x_2}L(x,y,y')\,dx\tag{1}
$$

の形で表すことができる。このとき

$$
L(x,y,y')=\frac{n(x,y)}c\sqrt{1+y'^2}\tag{2}
$$

であることを示せ。

(イ) フェルマーの原理により $T$ が最小となるときの光路を $y=\bar y(x)$ とする。ここで、$h(x_1)=0$ および $h(x_2)=0$ を満たす任意の関数 $h(x)$、微小量 $\epsilon$ を用いて、光路を $y(x)=\bar y(x)+\epsilon h(x)$ と表すとき、$\epsilon$ の微小変化に対して $T$ は停留値を取る。

$$
\int_{x_1}^{x_2}h(x)\left\{\frac d{dx}\left(\frac{\partial L}{\partial y'}\right)-\frac{\partial L}{\partial y}\right\}dx=0\tag{3}
$$

が成り立つことを示せ。

(ウ) 任意の関数 $h(x)$ に対して式 (3) が恒等的に成り立つためには、オイラー・ラグランジュ方程式

$$
\frac d{dx}\left(\frac{\partial L}{\partial y'}\right)-\frac{\partial L}{\partial y}=0\tag{4}
$$

が成立しなければならない。屈折率を一様、すなわち $n(x,y)=n_0$（定数）とするとき、本問におけるオイラー・ラグランジュ方程式を解き、その解が点 $\mathrm P_1$、$\mathrm P_2$ を通る直線となることを示せ。

### 問2

図2のように、$x$-$y$ 平面上の各点 $(x,y)$ に一様な屈折率をもつ2種類の媒質1および媒質2が、$x=x_0$ を境にして分布しているとする。光は媒質1中の点 $\mathrm P_1(x_1,y_1)$ から出発し、境界上の点 $(x_0,0)$ で屈折し、媒質2中の点 $\mathrm P_2(x_2,y_2)$ に至るとする。この光路を $y=y(x)$ とし、関数 $y(x)$ の導関数を $y'=dy/dx$ とする。媒質1および媒質2の屈折率は、それぞれ $n_1$（定数）および $n_2$（定数）であり、入射角を $\theta_1$、屈折角を $\theta_2$ とする。ただし、$x_1<x_0<x_2$、$y_1>0$、$y_2<0$ とする。

![図2：一様な屈折率をもつ2種類の媒質中の光路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering_sciences/bio/2022/bio_sys_202108_II_1_fig2.png)

(ア) $\sin\theta_1$ を $x_1<x<x_0$ における $y'$ を用いて表わせ。

(イ) 光が点 $\mathrm P_1$ から点 $\mathrm P_2$ に至るまでに要する時間を $T$ とする。$T$ を $c,n_1,n_2,x_0,x_1,x_2,x,y'$ を用いて表わせ。

(ウ) オイラー・ラグランジュ方程式からスネルの法則

$$
n_1\sin\theta_1=n_2\sin\theta_2\tag{5}
$$

を導出せよ。

### 题目描述

根据费马原理，经过两点的光在两点间所有可能路径中选择所需时间最短的路径。现利用该原理推导介质中的光路。设真空光速为 $c$，回答下列问题。

#### 问1

如图1，$x$-$y$ 平面各点 $(x,y)$ 分布着折射率不均匀、为 $n(x,y)$ 的介质。光从介质中的点 $\mathrm P_1(x_1,y_1)$ 出发，到达点 $\mathrm P_2(x_2,y_2)$。记函数 $y(x)$ 的导数为 $y'=dy/dx$。

(ア) 设光沿曲线 $y=y(x)$ 传播所需时间为 $T$，它可写为

$$
T=\int_{x_1}^{x_2}L(x,y,y')\,dx.
$$

证明

$$
L(x,y,y')=\frac{n(x,y)}c\sqrt{1+y'^2}.
$$

(イ) 根据费马原理，设使 $T$ 最小的光路为 $y=\bar y(x)$。取满足 $h(x_1)=h(x_2)=0$ 的任意函数 $h(x)$ 及微小量 $\epsilon$，将光路写为 $y(x)=\bar y(x)+\epsilon h(x)$；对于 $\epsilon$ 的微小变化，$T$ 取驻值。证明

$$
\int_{x_1}^{x_2}h(x)\left\{\frac d{dx}\left(\frac{\partial L}{\partial y'}\right)-\frac{\partial L}{\partial y}\right\}dx=0.
$$

(ウ) 要使上式对任意 $h(x)$ 恒成立，必须满足欧拉—拉格朗日方程

$$
\frac d{dx}\left(\frac{\partial L}{\partial y'}\right)-\frac{\partial L}{\partial y}=0.
$$

若折射率均匀，即 $n(x,y)=n_0$（常数），求解该方程并证明其解是通过 $\mathrm P_1,\mathrm P_2$ 的直线。

#### 问2

如图2，$x$-$y$ 平面上以 $x=x_0$ 为界分布着两种各自具有均匀折射率的介质1、2。光从介质1中的点 $\mathrm P_1(x_1,y_1)$ 出发，在边界点 $(x_0,0)$ 折射，最后到达介质2中的点 $\mathrm P_2(x_2,y_2)$。记光路为 $y=y(x)$、导数为 $y'=dy/dx$。介质1、2的折射率分别为常数 $n_1,n_2$，入射角和折射角分别为 $\theta_1,\theta_2$，且 $x_1<x_0<x_2$、$y_1>0$、$y_2<0$。

(ア) 用 $x_1<x<x_0$ 区间中的 $y'$ 表示 $\sin\theta_1$。

(イ) 设光从 $\mathrm P_1$ 到 $\mathrm P_2$ 的传播时间为 $T$，用 $c,n_1,n_2,x_0,x_1,x_2,x,y'$ 表示 $T$。

(ウ) 从欧拉—拉格朗日方程推导斯涅尔定律 $n_1\sin\theta_1=n_2\sin\theta_2$。

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
\begin{gathered}
L\left(x,\bar y+\epsilon h,\bar y'+\epsilon h'\right)
\\
\simeq L\left(x,\bar y,\bar y'\right)
+\epsilon h(x)\frac{\partial L}{\partial y}(x,\bar y,\bar y')
\\
{}+\epsilon h'(x)\frac{\partial L}{\partial y'}(x,\bar y,\bar y')
\end{gathered}
$$

である。端点固定より $h(x_1)=h(x_2)=0$ であり、

$$
\begin{gathered}
\int_{x_1}^{x_2}L\left(x,\bar y(x)+\epsilon h(x),\bar y'(x)+\epsilon h'(x)\right)\,dx
\\
{}-\int_{x_1}^{x_2}L\left(x,\bar y(x),\bar y'(x)\right)\,dx
\\
=\epsilon\int_{x_1}^{x_2}\left\{
\begin{aligned}
&h(x)\frac{\partial L}{\partial y}(x,\bar y(x),\bar y'(x))\\
&{}+h'(x)\frac{\partial L}{\partial y'}(x,\bar y(x),\bar y'(x))
\end{aligned}\right\}\,dx+o(\epsilon)
\\
=\epsilon\left[h(x)\frac{\partial L}{\partial y'}(x,\bar y(x),\bar y'(x))\right]_{x_1}^{x_2}
\\
{}+\epsilon\int_{x_1}^{x_2}\left\{
\begin{aligned}
&h(x)\frac{\partial L}{\partial y}(x,\bar y(x),\bar y'(x))\\
&{}-h(x)\frac d{dx}\frac{\partial L}{\partial y'}(x,\bar y(x),\bar y'(x))
\end{aligned}\right\}\,dx+o(\epsilon)
\\
=\epsilon\int_{x_1}^{x_2}h(x)\left\{
\begin{aligned}
&\frac{\partial L}{\partial y}(x,\bar y(x),\bar y'(x))\\
&{}-\frac d{dx}\frac{\partial L}{\partial y'}(x,\bar y(x),\bar y'(x))
\end{aligned}\right\}\,dx+o(\epsilon)
\end{gathered}
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

$$
\delta T=\left[\left.\frac{\partial L_1}{\partial y'}\right|_{x_0^-}-\left.\frac{\partial L_2}{\partial y'}\right|_{x_0^+}\right]h(x_0).
$$

$h(x_0)$ は任意なので、停留性は $\partial L_1/\partial y'=\partial L_2/\partial y'$ を要求する。ここで

$$
\frac{\partial L_i}{\partial y'}=\frac{n_i}{c}\frac{y'}{\sqrt{1+y'^2}}=-\frac{n_i}{c}\sin\theta_i.
$$

よって

$$
\boxed{n_1\sin\theta_1=n_2\sin\theta_2}.
$$

これで、設問の指定どおり Euler–Lagrange の変分計算から屈折則が得られる。

## **Reference**

- [大阪大学 基礎工学研究科 2022年度 生体システム工学II](https://www.me.es.osaka-u.ac.jp/msb/pdf/bio/r4_2.pdf)
