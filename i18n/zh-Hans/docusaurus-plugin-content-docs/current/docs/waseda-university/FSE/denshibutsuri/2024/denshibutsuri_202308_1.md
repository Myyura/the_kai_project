---
sidebar_label: "2023年8月実施 力学 (その1) [1]"
tags:
  - Waseda-University
---
# 早稲田大学 基幹理工学研究科 電子物理システム学専攻 2023年8月実施 力学 (その1) \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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