---
sidebar_label: "2023年8月実施 物理 [2]"
tags:
  - Waseda-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Cyclic-Coordinate-and-Conserved-Momentum
  - Physics.Mechanics.Small-Angle-Pendulum
---
# 早稲田大学 基幹理工学研究科 材料科学専攻 2023年8月実施 物理 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

問題の要約 — [大学公表問題](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_zairyokagaku_2023_September2024_April_ippan_senmon.pdf)


### 問1

$x$ 軸を中心軸とする半径 $\alpha$ の半円筒面の内側で、質量 $m$ の質点が動く。重力は $-z$ 向きで、摩擦と空気抵抗は無視する。軸から質点への線分と鉛直下向きとの角を $\theta$ とする。

1. 位置 $(x,y,z)$ を $x,\theta$ で表す。
2. ラグランジアンを求める。
3. ラグランジュ方程式を書く。

$y=\alpha\sin\theta,\ z=-\alpha\cos\theta$ が角度の向きの規約を定める。

### 問2（一般の曲線に対する題意）

質点は $xy$ 平面内の指定された曲線上のみを動き、重力は $-y$ 向きとする。(1) $x$ を一般化座標にしたラグランジアン、(2) 共役運動量とハミルトニアン、(3) 正準方程式を求め、(4) ラグランジュ方程式との同値性を示す。


### 题目描述

【问题 1】

质量为 $m$ 的质点在以 $x$ 轴为轴线、半径为 $\alpha$ 的半圆柱面内侧运动。重力指向 $-z$，忽略摩擦和空气阻力。以轴到质点的连线相对竖直向下方向的夹角 $\theta$ 为广义坐标之一，方向约定为 $y=\alpha\sin\theta,\ z=-\alpha\cos\theta$。

1. 用 $x,\theta$ 写出质点的笛卡尔坐标。
2. 求 $L(x,\theta,\dot x,\dot\theta)$。
3. 对 $x,\theta$ 写出 Lagrange 方程与运动方程。

【问题 2】

质点被约束在 $xy$ 平面内的一条指定曲线上，重力指向 $-y$。以 $x$ 为广义坐标，求 Lagrangian、共轭动量和 Hamiltonian，写出 Hamilton 正则方程，并证明它们与 Lagrange 方程等价。

## **Kai**
時刻を $t$ で表し、微分 $d/dt$ をドット $\dot{}$ で表す。

### 問 1
#### (1)

$$
  \begin{align}
  x = x
  , \ \
  y = \alpha \sin \theta
  , \ \
  z = - \alpha \cos \theta
  \end{align}
$$

#### (2)

$$
  \begin{align}
  \dot{y} = \alpha \dot{\theta} \cos \theta
  , \ \
  \dot{z} = \alpha \dot{\theta} \sin \theta
  \end{align}
$$

なので、求めるラグランジアンは

$$
  \begin{align}
  L \left( x, \theta, \dot{x}, \dot{\theta} \right)
  &= \frac{1}{2} m \left( \dot{x}^2\ + \dot{y}^2 + \dot{z}^2 \right) - mgz
  \\
  &= \frac{1}{2} m \left( \dot{x}^2\ + \alpha^2 \dot{\theta}^2 \right)
  + mg \alpha \cos \theta
  \end{align}
$$

である。

#### (3)

$$
  \begin{align}
  \frac{d}{dt} \frac{\partial L}{\partial \dot{x}}
  &= \frac{d}{dt} m \dot{x}
  = m \ddot{x}
  ,\\
  \frac{\partial L}{\partial x}
  &= 0
  ,\\
  \frac{d}{dt} \frac{\partial L}{\partial \dot{\theta}}
  &= \frac{d}{dt} m \alpha^2 \dot{\theta}
  = m \alpha^2 \ddot{\theta}
  ,\\
  \frac{\partial L}{\partial \theta}
  &= - mg \alpha \sin \theta
  \end{align}
$$

なので、ラグランジュ方程式は

$$
  \begin{align}
  \ddot{x} = 0
  , \ \
  \alpha \ddot{\theta} = - g \sin \theta
  \end{align}
$$

となる。

### 問 2


曲線を $y=h(x)$ と書ける範囲で、$h$ が2回微分可能であると仮定する。

#### (1)

$$
L=\frac m2\{1+h'(x)^2\}\dot x^2-mgh(x).
$$

#### (2)

$$
p=m\{1+h'(x)^2\}\dot x,\qquad
H=\frac{p^2}{2m\{1+h'(x)^2\}}+mgh(x).
$$

#### (3)

$$
\dot x=\frac{p}{m(1+h'^2)},\qquad
\dot p=\frac{p^2h'h''}{m(1+h'^2)^2}-mgh'.
$$

#### (4)

ラグランジュ方程式は

$$
m(1+h'^2)\ddot x+mh'h''\dot x^2+mgh'=0.
$$

一方、$p=m(1+h'^2)\dot x$ を微分し、正準方程式に代入しても同じ式を得る。
