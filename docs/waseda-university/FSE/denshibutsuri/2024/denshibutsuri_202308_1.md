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

### 問1

図1に示すような半径 (radius) $a$ の質量 (mass) の無視できる円環 (circle ring) 上に固定された質量 $m$ の質点 (point mass) の $xy$ 平面内での運動 (motion) について考える。はじめに円環の中心は原点 $(0,0)$ に、質点は $(0,-a)$ にあり、円環は摩擦 (friction) を受けず滑らずに $y=-a$ 上を回転して移動した。円環の中心と直線 $y=-a$ と円環との接点を結んだ線、円環の中心と質点を結んだ線、この二つの線の間の角を $\theta$ とおき、重力 (gravity) の向きは $-y$ 方向、重力加速度 (gravitational acceleration) の大きさを $g$ として、以下の問いに答えよ。

(1) 質点の直交座標 (rectangular coordinates) $(x,y)$ を $\theta$ を用いて表せ。

(2) $\theta$ を一般化座標 (generalized coordinate) として、質点のラグランジアン (Lagrangian) $L(\theta,\dot\theta)$ を示せ。

(3) $\theta$ に共役な (conjugate) 一般化運動量 (generalized momentum) $p_\theta$ を示し、ハミルトニアン (Hamiltonian) $H(\theta,p_\theta)$ を求めよ。

(4) 質点に対するハミルトンの正準方程式 (Hamilton’s canonical equations) を具体的に書き下せ。

![図1 転がる円環と質点の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/waseda-university/FSE/denshibutsuri/2024/denshibutsuri_202308_1_original_figure_1.png)

### 問2

図2に示すような、上端から $2/3$ の位置に質量 $m$ の質点を付けた長さ $a$ の棒 (rod) が壁と離れることなく、滑りながら倒れていく場合を考える。重力加速度を $g$ とし、重力は $-y$ 方向に働くものとする。棒の質量、太さおよび棒と壁の間の摩擦は無視できるものとして、以下の問いに答えよ。

(1) 図2に示す通り、時刻 $t$ における棒と $y$ 軸のなす角を $\varphi(t)$ とするとき、質点の座標 $(x(t),y(t))$ を $\varphi(t)$ を用いて表せ。

(2) 時刻 $t$ における質点のラグランジアンを $\varphi(t)$ を用いて表せ。

(3) 質点に対するラグランジュ方程式 (Lagrange’s equation) を使って、$\varphi(t)$ の微分方程式 (differential equation) となる運動方程式 (equation of motion) を書き下せ。

![図2 壁に接して滑る棒の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/waseda-university/FSE/denshibutsuri/2024/denshibutsuri_202308_1_original_figure_2.png)

#### 题目描述

**问1**

考虑图1所示的半径为 $a$、质量可忽略的圆环，以及固定在圆环上、质量为 $m$ 的质点在 $xy$ 平面内的运动。最初圆环的中心位于原点 $(0,0)$，质点位于 $(0,-a)$，圆环不受摩擦且不发生滑动，沿 $y=-a$ 旋转移动。将圆环中心与直线 $y=-a$ 和圆环的接触点的连线，以及圆环中心与质点的连线之间的夹角记为 $\theta$。重力方向为 $-y$ 方向，重力加速度的大小为 $g$。回答以下问题。

(1) 用 $\theta$ 表示质点的直角坐标 $(x,y)$。

(2) 以 $\theta$ 为广义坐标，写出质点的拉格朗日量 $L(\theta,\dot\theta)$。

(3) 写出与 $\theta$ 共轭的广义动量 $p_\theta$，并求哈密顿量 $H(\theta,p_\theta)$。

(4) 具体写出质点的哈密顿正则方程。

**问2**

如图2所示，长为 $a$ 的杆在距上端全长 $2/3$ 的位置固定了一个质量为 $m$ 的质点。考虑杆始终不离开墙面、边滑动边倒下的情况。设重力加速度为 $g$，重力沿 $-y$ 方向作用。忽略杆的质量、粗细以及杆与墙面之间的摩擦，回答以下问题。

(1) 如图2所示，将时刻 $t$ 杆与 $y$ 轴的夹角记为 $\varphi(t)$，用 $\varphi(t)$ 表示质点坐标 $(x(t),y(t))$。

(2) 用 $\varphi(t)$ 表示时刻 $t$ 质点的拉格朗日量。

(3) 利用质点的拉格朗日方程，写出关于 $\varphi(t)$ 的微分方程，即运动方程。

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

## **Reference**

- [大学公式問題（2023年9月・2024年4月入学、PDF 3ページ）](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_denshibutsuri_2023_September2024_April_ippan_senmon.pdf)
- [公開保存版（同名原卷）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/50e383d57ebcb2cbc3fed0cecf3c96e9c8b2564e/assets/past-papers/documents/d8eaa37cdee92c97b94fcef5616af0850be89bec31f2509188bdac72ebd2ec5f.pdf)
