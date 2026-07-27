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

### 题目描述

> 缺失边界：原 `Description` 及本地 Git 历史均未保存题干和配图。`Kai` 只含问 1 的 (1)—(3)，问 2 只有空标题；原系统的几何名称以及问 2 的条件和设问均无法恢复。以下仅整理问 1 中由公式唯一确认的内容。

以 $t$ 表示时间，并以点号 $\dot{\ }$ 表示 $d/dt$。质量为 $m$ 的质点以 $x,\theta$ 为广义坐标，其笛卡尔坐标满足

$$
x=x,\qquad y=\alpha\sin\theta,\qquad z=-\alpha\cos\theta,
$$

其中 $\alpha$ 为给定长度参数，重力加速度为 $g$。回答问 1：

1. 写出质点的笛卡尔坐标 $x,y,z$。
2. 求拉格朗日量 $L(x,\theta,\dot x,\dot\theta)$。
3. 分别对广义坐标 $x$ 与 $\theta$ 写出拉格朗日方程和运动方程。

#### 考点

- 拉格朗日力学：把约束坐标 $y=\alpha\sin\theta$、$z=-\alpha\cos\theta$ 代入速度、动能与重力势能，构造二自由度系统的 $L=T-U$。
- 循环坐标与守恒动量：拉格朗日量不显含 $x$，因此其共轭动量 $p_x=m\dot x$ 守恒，并导出 $\ddot x=0$。
- 摆的非线性运动：对 $\theta$ 应用欧拉—拉格朗日方程，可得到 $\alpha\ddot\theta=-g\sin\theta$。

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
