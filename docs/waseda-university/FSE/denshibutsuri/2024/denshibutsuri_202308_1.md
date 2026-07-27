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

### 题目描述

> 缺失边界：原 `Description` 及本地 Git 历史均未保存题干和配图。`Kai` 含问 1 的 (1)—(4) 与问 2 的 (1)—(3)，但没有给出角度方向等完整图示说明，也没有说明问 2 中所跟踪质点在杆上的物理身份。以下只整理 `Kai` 中由公式和小问结构能够唯一确认的内容。

1. 问 1 涉及半径参数为 $a$ 的圆环与质量为 $m$ 的质点。以 $\theta$ 为广义坐标时，圆环中心的横坐标 $X$ 与质点坐标满足

   $$
   X=a\theta,\qquad
   x=a\theta-a\sin\theta,\qquad
   y=-a\cos\theta.
   $$

   在重力加速度为 $g$ 的条件下：
   1. 写出质点坐标 $x,y$。
   2. 求拉格朗日量 $L(\theta,\dot\theta)$。
   3. 求共轭动量 $p_\theta$ 以及哈密顿量 $H(\theta,p_\theta)$。
   4. 写出关于 $\theta,p_\theta$ 的哈密顿正则方程。
2. 问 2 涉及长度参数为 $a$、两端分别接触地面和墙面的杆。以 $\varphi(t)$ 表示其姿态，两个接触点的坐标满足

   $$
   X(t)=a\sin\varphi(t),\qquad
   Y(t)=a\cos\varphi(t).
   $$

   `Kai` 中参与动能和重力势能计算的质量为 $m$ 的点满足

   $$
   x(t)=\frac23X(t),\qquad y(t)=\frac13Y(t).
   $$

   对该系统：
   1. 用 $\varphi(t)$ 表示 $x(t),y(t)$。
   2. 求拉格朗日量 $L(\varphi,\dot\varphi)$。
   3. 由欧拉—拉格朗日方程求 $\varphi$ 的运动方程。

#### 考点

- 完整约束下的拉格朗日建模：把 $X=a\theta$ 及质点坐标关系代入，将问 1 的平面运动约化为单一广义坐标 $\theta$。
- 拉格朗日量：由坐标对时间求导得到动能，并与重力势能组合成 $L=T-U$；问 2 还需处理随 $\varphi$ 改变的等效动能系数。
- 共轭动量与哈密顿量：从 $p_\theta=\partial L/\partial\dot\theta$ 出发进行勒让德变换，再分别对 $p_\theta$ 与 $\theta$ 求偏导写出正则方程。
- 杆的几何约束：利用 $X=a\sin\varphi$、$Y=a\cos\varphi$ 以及给定分点比例，把接触约束转化为质点轨迹并推导非线性运动方程。

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
