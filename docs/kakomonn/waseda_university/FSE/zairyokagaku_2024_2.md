---
comments: false
title: 早稲田大学 基幹理工学研究科 材料科学専攻 2024年度 物理 [2]
tags:
  - Waseda-University
---
# 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2024年度 物理 \[2\]

## **Author**
Miyake

## **Description**

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