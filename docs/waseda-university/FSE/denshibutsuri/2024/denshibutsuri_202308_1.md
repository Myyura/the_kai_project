---
sidebar_label: "2023年8月実施 力学 (その1) [1]"
tags:
  - Waseda-University
  - Physics.Mechanics.Lagrangian-and-Hamiltonian-for-Holonomic-Constraints
---
# 早稲田大学 基幹理工学研究科 電子物理システム学専攻 2023年8月実施 力学 (その1) \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

問題の要約 — [大学公表問題](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_denshibutsuri_2023_September2024_April_ippan_senmon.pdf)


### 問1

質量を無視できる半径 $a$ の円環に質量 $m$ の質点を固定し、円環を直線 $y=-a$ に沿って滑らずに転がす。初めの中心は原点、質点は $(0,-a)$ にある。下図では右向きの転がり角を $\theta$ とする。重力による位置エネルギーを $mgy$ とし、摩擦による散逸は考えない。

1. 質点の位置を $\theta$ で表す。
2. $\theta$ を一般化座標とするラグランジアンを求める。
3. 共役運動量とハミルトニアンを求める。
4. 正準方程式を書く。

### 問2

長さ $a$ の質量のない棒の上端から $2a/3$ の位置に質量 $m$ の質点を固定する。棒の両端はそれぞれ壁と床に接したまま滑り、鉛直な壁との角を $\varphi$ とする。重力は下向き、摩擦は無視する。

1. 質点の位置を $\varphi(t)$ で表す。
2. ラグランジアンを求める。
3. $\varphi$ の運動方程式を導く。

![円環と壁に沿って滑る棒の座標を示す独自の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/waseda_university/FSE/denshibutsuri/2024/waseda-2023-denshi-mechanics.svg)


### 题目描述

【问题 1】

在半径为 $a$、质量可忽略的圆环上固定质量为 $m$ 的质点，使圆环沿直线 $y=-a$ 无滑动滚动。初始圆心为原点、质点位于 $(0,-a)$，向右滚动角为 $\theta$，重力势能为 $mgy$，忽略摩擦耗散。

1. 用 $\theta$ 写出质点坐标，几何关系为 $X=a\theta$、$x=a\theta-a\sin\theta$、$y=-a\cos\theta$。
2. 求 Lagrangian $L(\theta,\dot\theta)$。
3. 求共轭动量 $p_\theta$ 和 Hamiltonian $H(\theta,p_\theta)$。
4. 写出 Hamilton 正则方程。

【问题 2】

长度为 $a$ 的无质量杆上，距上端 $2a/3$ 处固定质量为 $m$ 的质点。杆的两端分别贴着竖直墙面与水平地面无摩擦滑动，杆与竖直墙面的夹角为 $\varphi$，重力向下。接触点坐标满足 $X=a\sin\varphi$、$Y=a\cos\varphi$，质点坐标为 $x=2X/3$、$y=Y/3$。

1. 用 $\varphi(t)$ 表示质点坐标。
2. 求 $L(\varphi,\dot\varphi)$。
3. 用 Euler–Lagrange 方程导出 $\varphi$ 的运动方程。

## **Kai**
### 問 1
#### (1)
円環の中心の x 座標は

$$
  \begin{aligned}
  X = a \theta
  \end{aligned}
$$

であり、質点の座標は

$$
  \begin{aligned}
  x
  &= X - a \sin \theta
  = a \theta - a \sin \theta
  ,\\
  y
  &= - a \cos \theta
  \end{aligned}
$$

である。

#### (2)

$$
  \begin{aligned}
  \dot{x} &= a \dot{\theta} - a \dot{\theta} \cos \theta
  , \\
  \dot{y} &= a \dot{\theta} \sin \theta
  \end{aligned}
$$

なので、求めるラグランジアンは

$$
  \begin{aligned}
  L \left( \theta, \dot{\theta} \right)
  &= \frac{1}{2} m \left( \dot{x}^2\ + \dot{y}^2 \right) - mgy
  \\
  &= ma^2 \dot{\theta}^2 ( 1 - \cos \theta ) + mga \cos \theta
  \end{aligned}
$$

である。

#### (3)

以下のルジャンドル変換と正準方程式は $1-\cos\theta>0$ の範囲で成り立つ。$\theta=2k\pi$ では速度の係数が零になり、この座標による変換は特異になる。

$$
  \begin{aligned}
  p_\theta
  &= \frac{\partial L}{\partial \dot{\theta}}
  \\
  &= 2ma^2 \dot{\theta} ( 1 - \cos \theta )
  ,\\
  H \left( \theta, p_\theta \right)
  &= \dot{\theta} p_\theta - L
  \\
  &= 2ma^2 \dot{\theta}^2 ( 1 - \cos \theta )
  - ma^2 \dot{\theta}^2 ( 1 - \cos \theta ) - mga \cos \theta
  \\
  &= ma^2 \dot{\theta}^2 ( 1 - \cos \theta ) - mga \cos \theta
  \\
  &= \frac{p_\theta^2}{4ma^2 ( 1 - \cos \theta )} - mga \cos \theta
  \end{aligned}
$$

#### (4)

$$
  \begin{aligned}
  \dot{\theta}
  &= \frac{\partial H}{\partial p_\theta}
  = \frac{p_\theta}{2ma^2(1 - \cos \theta)}
  ,\\
  \dot{p}_\theta
  &= - \frac{\partial H}{\partial \theta}
  = \frac{p_\theta^2 \sin \theta}{4ma^2 (1 - \cos \theta)^2} - mga \sin \theta
  \end{aligned}
$$

### 問 2
#### (1)
時刻 $t$ において、棒と床が接触している点の x 座標を $X(t)$ とし、
棒と壁が接触している点の y 座標を $Y(t)$ とすると、

$$
  \begin{aligned}
  X(t) = a \sin \varphi (t)
  , \ \
  Y(t) = a \cos \varphi (t)
  \end{aligned}
$$

なので、

$$
  \begin{aligned}
  x(t) &= \frac{2}{3} X(t) = \frac{2}{3} a \sin \varphi (t)
  ,\\
  y(t) &= \frac{1}{3} Y(t) = \frac{1}{3} a \cos \varphi (t)
  \end{aligned}
$$

である。

#### (2)

$$
  \begin{aligned}
  \dot{x} (t) &= \frac{2}{3} a \dot{\varphi}(t) \cos \varphi (t)
  ,\\
  \dot{y} (t) &= - \frac{1}{3} a \dot{\varphi}(t) \sin \varphi (t)
  \end{aligned}
$$

なので、求めるラグランジアンは

$$
  \begin{aligned}
  L \left( \varphi, \dot{\varphi} \right)
  &= \frac{1}{2} m \left( \dot{x}^2 + \dot{y}^2 \right) - mgy
  \\
  &= \frac{1}{18} m a^2 \dot{\varphi}^2
  \left( 4 \cos^2 \varphi + \sin^2 \varphi \right)
  - \frac{1}{3} mga \cos \varphi
  \\
  &= \frac{1}{18} m a^2 \dot{\varphi}^2 \left( 3 \cos^2 \varphi + 1 \right)
  - \frac{1}{3} mga \cos \varphi
  \end{aligned}
$$

である。

#### (3)

$$
  \begin{aligned}
  \frac{d}{dt} \frac{\partial L}{\partial \dot{\varphi}}
  &= \frac{d}{dt} \frac{1}{9} m a^2 \dot{\varphi}
  \left( 3 \cos^2 \varphi + 1 \right)
  \\
  &= \frac{1}{9} m a^2 \left(
  \ddot{\varphi} \left( 3 \cos^2 \varphi + 1 \right)
  - 6 \dot{\varphi}^2 \cos \varphi \sin \varphi
  \right)
  ,\\
  \frac{\partial L}{\partial \varphi}
  &= - \frac{1}{3} ma^2 \dot{\varphi}^2 \cos \varphi \sin \varphi
  + \frac{1}{3} mga \sin \varphi
  \end{aligned}
$$

なので、求める運動方程式は

$$
  \begin{aligned}
  \ddot{\varphi} \left( 3 \cos^2 \varphi + 1 \right)
  - 6 \dot{\varphi}^2 \cos \varphi \sin \varphi
  &=
  - 3 \dot{\varphi}^2 \cos \varphi \sin \varphi
  + 3 \frac{g}{a} \sin \varphi
  \end{aligned}
$$

$$
  \begin{aligned}
  \therefore \ \
  \ddot{\varphi} \left( 3 \cos^2 \varphi + 1 \right)
  - 3 \dot{\varphi}^2 \cos \varphi \sin \varphi
  - 3 \frac{g}{a} \sin \varphi
  &= 0
  \end{aligned}
$$

である。
