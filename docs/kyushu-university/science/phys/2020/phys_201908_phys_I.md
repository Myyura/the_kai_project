---
sidebar_label: "2019年8月実施 物理学 [I]"
tags:
  - Kyushu-University
  - Physics.Mechanics.Hamilton-Principle-and-Euler-Lagrange-Equation
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Gyroscopic-Precession
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[I\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原 Description 未录入文字；以下按现有解答可确认的分问整理。

**A-I（Hamilton 原理）**：对作用量

$$
S[q]=\int_{t_1}^{t_2}L(q,\dot q)\,dt
$$

及固定端点的变分 $q\mapsto q+\delta q$：

1. 写出端点处 $\delta q$ 满足的条件。
2. 将 $L(q+\delta q,\dot q+\delta\dot q)$ 展开到变分的一阶。
3. 由 $\delta S=0$ 推导 Euler–Lagrange 方程。

**A-II（简谐振子）**：质量为 $m$、弹性系数为 $k$ 的一维简谐振子，广义坐标为 $q$。

1. 写出 Lagrangian。
2. 由 Euler–Lagrange 方程推导运动方程。
3. 写出能量 $E(t)$ 并证明其守恒。
4. 求 $q(t)$ 的通解。

**B（陀螺进动）**：取 $\boldsymbol i,\boldsymbol j,\boldsymbol k$ 为 $x,y,z$ 正方向单位向量。现有解答所对应的装置为：刚体转动惯量 $I$，质心到固定点 O 的距离 $R$，质量 $m$，重力沿 $-\boldsymbol k$；质心位置为 $X\boldsymbol i+Y\boldsymbol j+Z\boldsymbol k$。先分析角速度为 $\omega_1$ 时，作用点臂长 $l$ 的力 $F$ 在短时间 $\Delta t$ 内造成的角动量改变及偏转角；再对自转角速度 $\omega_2$、轴与竖直方向夹角 $\alpha$ 的重陀螺：

1. 写出初始角动量；
2. 判断外力矩方向；
3. 写出冲量作用后的角动量；
4. 求新角动量与 $z$ 轴夹角；
5. 求重力矩；
6. 建立 $X,Y,Z$ 的运动方程；
7. 在 $t=0$ 时轴投影方位角为零的条件下求 $X(t),Y(t),Z(t)$；
8. 求进动角速度 $\Omega$。

#### 考点

- **Hamilton 原理与 Euler–Lagrange 方程**：在固定端点变分下分部积分，从作用量驻值推出运动方程。
- **Lagrangian 力学**：为简谐振子构造动能减势能，推导方程、守恒能量和一般运动。
- **角动量与力矩冲量**：用 $\Delta\boldsymbol L=\boldsymbol\tau\Delta t$ 判断短时外力对转轴的影响。
- **陀螺进动**：由重力矩建立质心方向矢量的旋转方程，求定倾角匀速进动及进动频率。

## **Kai**
### \[A-I\]
#### (1)

$$
  \begin{aligned}
  \delta q (t_1) = \delta q (t_2) = 0
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  L \left( q + \delta q, \dot{q} + \delta \dot{q} \right)
  \simeq
  L \left( q, \dot{q} \right)
  + \frac{\partial L \left( q, \dot{q} \right)}{\partial q} \delta q
  + \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}} \delta \dot{q}
  \end{aligned}
$$

#### (3)

$$
\begin{aligned}
\delta S[q]
&\simeq \int_{t_1}^{t_2} dt \left(
\frac{\partial L \left( q, \dot{q} \right)}{\partial q} \delta q
+ \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}} \delta \dot{q}
\right)
\\
&= \int_{t_1}^{t_2} dt \left(
\frac{\partial L \left( q, \dot{q} \right)}{\partial q} \delta q
+ \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}}
\frac{d}{dt} \delta q \right)
\\
&=
\left[
\frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}} \delta q
\right]_{t_1}^{t_2}
+ \int_{t_1}^{t_2} dt \left(
\frac{\partial L \left( q, \dot{q} \right)}{\partial q}
- \frac{d}{dt} \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}}
\right) \delta q
\\
&=
\int_{t_1}^{t_2} dt \left(
\frac{\partial L \left( q, \dot{q} \right)}{\partial q}
- \frac{d}{dt} \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}}
\right) \delta q
\end{aligned}
$$

任意の微小な仮想変位 $\delta q$ に対してこれが $0$ であるとして、
オイラー-ラグランジュ方程式

$$
\begin{aligned}
\frac{\partial L \left( q, \dot{q} \right)}{\partial q}
- \frac{d}{dt} \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}}
= 0
\end{aligned}
$$

を得る。

### \[A-II\]
#### (1)

$$
  \begin{aligned}
  L \left( q, \dot{q} \right)
  &= \frac{1}{2} m \dot{q}^2 - \frac{1}{2} k q^2
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \frac{\partial L}{\partial q} &= -kq
  \\
  \frac{d}{dt} \frac{\partial L}{\partial q}
  &= \frac{d}{dt} m \dot{q}
  = m \ddot{q}
  \end{aligned}
$$

なので、オイラー-ラグランジュ方程式は、

$$
  \begin{aligned}
  m \ddot{q} = -kq
  \end{aligned}
$$

となる。

#### (3)

$$
  \begin{aligned}
  E(t)
  &= m \dot{q}^2 - \left( \frac{1}{2} m \dot{q}^2 - \frac{1}{2} k q^2 \right)
  \\
  &= \frac{1}{2} m \dot{q}^2 + \frac{1}{2} k q^2
  \\
  \frac{d}{dt} E(t)
  &= m \dot{q} \ddot{q} + k q \dot{q}
  \\
  &= m \dot{q} \cdot \left(- \frac{k}{m} q \right) + k q \dot{q}
  \\
  &= 0
  \end{aligned}
$$

#### (4)
$\omega = \sqrt{k/m}$ として、

$$
  \begin{aligned}
  q(t) = A \sin \omega t + B \cos \omega t
  \end{aligned}
$$

ただし、 $A, B$ は積分定数である。

### \[B\]
x, y, z 軸の正の方向の単位ベクトルをそれぞれ
$\boldsymbol{i}, \boldsymbol{j}, \boldsymbol{k}$ とする。

#### (1)
$I \omega_1 \boldsymbol{k}$

#### (2)
$\boldsymbol{k} \times \boldsymbol{i} = \boldsymbol{j}$
なので、y 軸の正の方向である。

#### (3)
$I \omega_1 \boldsymbol{k} + lF \Delta t \boldsymbol{j}$

#### (4)

$$
  \begin{aligned}
  \cos \theta
  &= \frac{ \boldsymbol{k} \cdot
  \left( I \omega_1 \boldsymbol{k} + lF \Delta t \boldsymbol{j} \right)}
  {
  \left| I \omega_1 \boldsymbol{k} + lF \Delta t \boldsymbol{j} \right|}
  \\
  &= \frac{I \omega_1}{\sqrt{I^2 \omega_1^2 + l^2 F^2 \Delta t^2}}
  \end{aligned}
$$

#### (5)

$$
  \begin{aligned}
  \left( X \boldsymbol{i} + Y \boldsymbol{j} + Z \boldsymbol{k} \right)
  \times \left( - mg \boldsymbol{k} \right)
  = mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
  \end{aligned}
$$

#### (6)
O から重心に向かう単位ベクトルは、

$$
  \begin{aligned}
  \frac{X \boldsymbol{i} + Y \boldsymbol{j} + Z \boldsymbol{k}}{R}
  \end{aligned}
$$

と書けるから、求める運動方程式は、時間微分を $\dot{}$ で表して、

$$
  \begin{aligned}
  \frac{I \omega_2}{R}
  \left( \dot{X} \boldsymbol{i} + \dot{Y} \boldsymbol{j} + \dot{Z} \boldsymbol{k} \right)
  = mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
  \end{aligned}
$$

あるいは成分で書けば

$$
  \begin{aligned}
  \dot{X} &= - \frac{mgR}{I \omega_2} Y
  \\
  \dot{Y} &= \frac{mgR}{I \omega_2} X
  \\
  \dot{Z} &= 0
  \end{aligned}
$$

である。

#### (7)
まず、 $Z = R \cos \alpha$ はすぐにわかる。

次に、コマの軸をxy平面に射影したときのx軸からの角度を $\varphi$ とすると、

$$
  \begin{aligned}
  X &= R \sin \alpha \cos \varphi
  \\
  Y &= R \sin \alpha \sin \varphi
  \end{aligned}
$$

であるから、これを (6) の運動方程式に代入して、次を得る：

$$
  \begin{aligned}
  \dot{\varphi} = \frac{mg}{I \omega_2}
  \end{aligned}
$$

$t=0$ のとき $\varphi = 0$ であるから、次がわかる：

$$
  \begin{aligned}
  \varphi = \frac{mgt}{I \omega_2}
  \end{aligned}
$$

まとめると、求める解は、

$$
  \begin{aligned}
  X &= R \sin \alpha \cos \frac{mgt}{I \omega_2}
  \\
  Y &= R \sin \alpha \sin \frac{mgt}{I \omega_2}
  \\
  Z &= R \cos \alpha
  \end{aligned}
$$

である。

#### (8)
(7) より

$$
\begin{aligned}
\Omega
&= \dot{\varphi}
\\
&= \frac{mg}{I \omega_2}
\end{aligned}
$$
