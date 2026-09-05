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

題意の要約。

### [A-I]

一次元一質点系のラグランジアン $L(q,\dot q)$ は時刻に陽に依存しない。$t_1<t_2$ とし、$S[q]=\int_{t_1}^{t_2}L(q,\dot q)\,dt$、$\delta\dot q=d(\delta q)/dt$ とおく。$q(t_1),q(t_2)$ を固定して作用を停留させる。

1. 端点での $\delta q$ の条件を求める。
2. $L(q+\delta q,\dot q+\delta\dot q)$ を変分の一次まで展開する。
3. $\delta S=S[q+\delta q]-S[q]$ を $\delta\dot q$ を含まない形で表し、Euler–Lagrange 方程式を導く。

### [A-II]

一端を壁に固定したばね（ばね定数 $k$）の他端に質量 $m$ の質点をつなぐ。運動方向にはばねの力だけが働き、自然長からの伸びを $q$ とする。

1. ラグランジアンを求める。
2. Euler–Lagrange 方程式を求める。
3. $E(t)=(\partial L/\partial\dot q)\dot q-L$ を求め、その保存を示す。
4. $q(t)$ の一般解を求める。

### [B]

質量 $M$、軸の長さ $\ell$、軸まわりの慣性モーメント $I$ の軸対称なコマを考える。軸の下端を固定点 $O$ とし、静止直交座標系の原点とする。

最初は軸が $+z$ 方向で、上端から見て反時計回りに角速度 $\omega_1$ で高速回転している。

1. 角運動量ベクトルを求める。
2. 軸の上端に $+x$ 方向の撃力を加えるとき、$O$ まわりの力のモーメントの向きを答える。
3. 撃力の時間平均を $F$、作用時間を微小な $\Delta t$ とし、直後の角運動量を求める。
4. 直後に軸が $z$ 軸となす角を $\theta$ として、$\theta$ と $\omega_1$ の関係を求める。

次に、軸と $+z$ 軸の角度 $\alpha$ を一定に保ち、軸の上端から見て反時計回りに $\omega_2$ で高速自転しながら歳差運動をする。重心 $(X,Y,Z)$ は軸上で $O$ から距離 $R$ にあり、重力加速度は $-g\boldsymbol e_z$ である。

5. 重力の $O$ まわりのモーメントを求める。
6. 角運動量の大きさを $I\omega_2$、向きを $O$ から重心への向きとし、回転の運動方程式を立てる。
7. $t=0$ で重心が $xz$ 平面内の $x>0$ にあるとき、$(X,Y,Z)$ を求める。
8. 重心の回転角速度 $\Omega$ を求める。

出典：[九州大学 令和2年度 物理学I](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=2)。

![ばね振動子とコマの配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/science/phys/2020/kyushu-phys-2019-mechanics.svg)

### 题目描述

**A-I（Hamilton 原理）**：一维单质点系统的 Lagrangian 为 $L(q,\dot q)$，不显含时间。对作用量

$$
S[q]=\int_{t_1}^{t_2}L(q,\dot q)\,dt
$$

作固定端点的变分，其中 $\delta\dot q=d(\delta q)/dt$。

1. 写出端点处 $\delta q$ 的条件。
2. 将 $L(q+\delta q,\dot q+\delta\dot q)$ 展开到变分的一阶。
3. 将 $\delta S$ 改写成不含 $\delta\dot q$ 的形式，由驻值条件推导 Euler–Lagrange 方程。

**A-II（简谐振子）**：质量为 $m$ 的质点连接到弹性系数为 $k$、另一端固定的弹簧，运动方向上只受弹力。以相对自然长度的伸长量为 $q$。

1. 写出 Lagrangian。
2. 写出 Euler–Lagrange 运动方程。
3. 求 $E(t)=(\partial L/\partial\dot q)\dot q-L$ 并证明能量守恒。
4. 求 $q(t)$ 的通解。

**B（陀螺进动）**：轴对称陀螺质量为 $M$，轴长为 $\ell$，绕轴转动惯量为 $I$，轴下端固定于坐标原点 $O$。

开始时轴沿 $+z$ 方向，从轴上端看以角速度 $\omega_1$ 逆时针高速自转。

1. 求初始角动量向量。
2. 轴上端受到沿 $+x$ 方向的冲击力，判断相对于 $O$ 的力矩方向。
3. 设作用时间为微小的 $\Delta t$，平均力为 $F$，求作用后的角动量。
4. 求作用后陀螺轴与 $z$ 轴夹角 $\theta$ 和 $\omega_1$ 的关系。

再考虑陀螺轴与 $+z$ 轴保持夹角 $\alpha$，从轴上端看以 $\omega_2$ 逆时针高速自转，同时发生进动。重心 $(X,Y,Z)$ 位于轴上，距 $O$ 为 $R$，重力加速度为 $-g\boldsymbol e_z$。

5. 求重力相对于 $O$ 的力矩。
6. 将角动量大小取为 $I\omega_2$、方向取为从 $O$ 指向重心，建立转动方程。
7. 已知 $t=0$ 时重心在 $xz$ 平面内且 $X>0$，求 $X(t),Y(t),Z(t)$。
8. 求进动角速度 $\Omega$。

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
  \frac{d}{dt} \frac{\partial L}{\partial \dot q}
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
$I \omega_1 \boldsymbol{k} + \ell F \Delta t \boldsymbol{j}$

#### (4)

$$
  \begin{aligned}
  \cos \theta
  &= \frac{ \boldsymbol{k} \cdot
  \left( I \omega_1 \boldsymbol{k} + \ell F \Delta t \boldsymbol{j} \right)}
  {
  \left| I \omega_1 \boldsymbol{k} + \ell F \Delta t \boldsymbol{j} \right|}
  \\
  &= \frac{I \omega_1}{\sqrt{I^2 \omega_1^2 + \ell^2 F^2 \Delta t^2}}
  \end{aligned}
$$

#### (5)

$$
  \begin{aligned}
  \left( X \boldsymbol{i} + Y \boldsymbol{j} + Z \boldsymbol{k} \right)
  \times \left( - Mg \boldsymbol{k} \right)
  = Mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
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
  = Mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
  \end{aligned}
$$

あるいは成分で書けば

$$
  \begin{aligned}
  \dot{X} &= - \frac{MgR}{I \omega_2} Y
  \\
  \dot{Y} &= \frac{MgR}{I \omega_2} X
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
  \dot{\varphi} = \frac{MgR}{I \omega_2}
  \end{aligned}
$$

$t=0$ のとき $\varphi = 0$ であるから、次がわかる：

$$
  \begin{aligned}
  \varphi = \frac{MgRt}{I \omega_2}
  \end{aligned}
$$

まとめると、求める解は、

$$
  \begin{aligned}
  X &= R \sin \alpha \cos \frac{MgRt}{I \omega_2}
  \\
  Y &= R \sin \alpha \sin \frac{MgRt}{I \omega_2}
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
&= \frac{MgR}{I \omega_2}
\end{aligned}
$$
