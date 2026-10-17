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

### [A-I]

1次元の1質点系を考える。この系のラグランジアンを $L(q,\dot q)$ とし，$L(q,\dot q)$ は時刻 $t$ に陽に依存しないとする。ここで，$q$ は一般化座標であり，時刻 $t$ の関数である。時刻 $t=t_1,t_2$（$t_1<t_2$）に対して，作用 $S[q]$ を次式で定義する。

$$
S[q]=\int_{t_1}^{t_2}dt\,L(q,\dot q)
$$

変分原理（または，最小作用の原理）により，$q(t_1)$ と $q(t_2)$ を固定すれば，この系の時刻 $t$（$t_1<t<t_2$）の運動は，$S[q]$ が停留値をとるように決まる。$q$ の任意の微小な仮想変位を $\delta q$ と表す。また，対応する $\dot q$ の微小な仮想変位は，$\delta\dot q=d(\delta q)/dt$ である。

(1) $q$ を $S[q]$ に対して変分原理を満たす関数とする。$\delta q(t_1)$ と $\delta q(t_2)$ が満たす条件を書きなさい。

(2) $L(q+\delta q,\dot q+\delta\dot q)$ を $\delta q,\delta\dot q$ でべき展開し，$\delta q,\delta\dot q$ の2次以上の項を無視した表式を求めなさい。

(3) $S[q]$ の変分 $\delta S[q]$ を $\delta S[q]=S[q+\delta q]-S[q]$ で定義する。問（1）と問（2）の結果を用い，$\delta S[q]$ の表式を求めなさい。ただし，この表式は $\delta\dot q$ を含まない形とする。また，この結果を用いて，オイラー・ラグランジュ方程式を導きなさい。

### [A-II]

図1に示すように，バネの一端に質点がつながれており，他端は壁に固定されている。質点は1次元運動をし，その運動方向にはバネから受ける力のみが働くとする。質点の質量を $m$，バネのバネ定数を $k$ とする。質点の時刻 $t$ の位置をバネの自然長からの伸び $q$ で表し，この1質点系の一般化座標とする。

![図1 バネと質点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_I_figure_1.png)

(1) この系のラグランジアン $L(q,\dot q)$ を書きなさい。

(2) 問（1）の $L(q,\dot q)$ に対するオイラー・ラグランジュ方程式を求めなさい。

(3) $E(t)$ を次式で定義する。

$$
E(t)=\frac{\partial L(q,\dot q)}{\partial\dot q}\dot q-L(q,\dot q)
$$

問（1）の $L(q,\dot q)$ を用いて，$E(t)$ の表式を求めなさい。また，$E(t)$ が保存量であることを示しなさい。

(4) $q$ の一般解を求めなさい。

### [B]

軸対称なコマを考える。コマの質量を $M$，軸の長さを $\ell$，軸のまわりの慣性モーメントを $I$ とする。コマの軸の下端を原点 O とし，静止直交 $xyz$ 座標系を考える。

図2に示すように，コマの軸が $z$ 軸上にあり，コマの軸の上端から見て反時計回りに角速度 $\omega_1$ で高速回転している場合を考える。ただし，コマの軸の下端は，原点 O から動かないとする。

![図2 軸がz軸上にあるコマ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_I_figure_2.png)

(1) コマの角運動量ベクトルを求めなさい。

(2) コマの軸の上端に $x$ 軸の正の方向の撃力を加える。撃力の原点 O のまわりのモーメントの方向を答えなさい。

(3) 撃力は，短い時間 $\Delta t$ の間のみ働き，その大きさは時間平均で $F$ であったとする。撃力を受けた直後のコマの角運動量ベクトルを求めなさい。

(4) 撃力を受けた直後，コマの軸が $z$ 軸となす角を $\theta$ とする。問（3）の結果を用いて，角 $\theta$ と角速度 $\omega_1$ が満たす関係式を求めなさい。

図3に示すように，コマの軸が $z$ 軸と一定の角度 $\alpha$ を保って，コマの軸の上端から見て反時計回りに角速度 $\omega_2$ で高速回転しており，コマの軸の上端が水平面内で円運動をしている場合を考える。この運動は歳差運動と呼ばれる。ただし，コマの軸の下端は，原点 O から動かないとする。コマの重心の座標を $(X,Y,Z)$ とし，重心はコマの軸上で下端から距離 $R$ の位置にあるとする。また，重力加速度の大きさを $g$ とする。

![図3 歳差運動するコマ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_I_figure_3.png)

(5) コマの重心に働く重力の原点 O のまわりのモーメントを求めなさい。

(6) コマの角運動量の大きさは，問（1）の結果で $\omega_1$ を $\omega_2$ に置き換えたものと同じであるとする。また，コマの角運動量の向きは，原点 O から重心の方向であるとする。コマの重心が従う回転の運動方程式を求めなさい。

(7) 問（6）の結果から，重心の座標 $(X,Y,Z)$ を時刻 $t$ の関数として求めなさい。ただし，重心は $t=0$ で $xz$ 平面内の $x>0$ の位置にあったとする。

(8) 重心の回転運動の角速度 $\Omega$ を求めなさい。

#### 题目描述

**[A-I]**

考虑一维单质点系统。系统的拉格朗日量为 $L(q,\dot q)$，假设它不显含时间 $t$。其中 $q$ 是广义坐标，也是时间 $t$ 的函数。对于时刻 $t=t_1,t_2$（$t_1<t_2$），将作用量 $S[q]$ 定义为

$$
S[q]=\int_{t_1}^{t_2}dt\,L(q,\dot q).
$$

根据变分原理（或最小作用量原理），固定 $q(t_1)$ 和 $q(t_2)$ 后，系统在时刻 $t$（$t_1<t<t_2$）的运动由使 $S[q]$ 取驻值的条件决定。将 $q$ 的任意微小虚位移记作 $\delta q$，对应的 $\dot q$ 的微小虚位移为 $\delta\dot q=d(\delta q)/dt$。

(1) 设函数 $q$ 对作用量 $S[q]$ 满足变分原理。写出 $\delta q(t_1)$ 和 $\delta q(t_2)$ 所满足的条件。

(2) 将 $L(q+\delta q,\dot q+\delta\dot q)$ 按 $\delta q,\delta\dot q$ 作幂级数展开，忽略二次及更高次项，求其表达式。

(3) 定义 $S[q]$ 的变分为 $\delta S[q]=S[q+\delta q]-S[q]$。利用（1）、（2）的结果，求不含 $\delta\dot q$ 的 $\delta S[q]$ 表达式，并由此推导欧拉–拉格朗日方程。

**[A-II]**

如图1，弹簧的一端连接质点，另一端固定于墙上。质点作一维运动，沿运动方向只受到弹簧的力。质点质量为 $m$，弹簧劲度系数为 $k$。用弹簧相对于自然长度的伸长量 $q$ 表示质点在时刻 $t$ 的位置，并将它作为此单质点系统的广义坐标。

(1) 写出系统的拉格朗日量 $L(q,\dot q)$。

(2) 求（1）中的 $L(q,\dot q)$ 对应的欧拉–拉格朗日方程。

(3) 定义

$$
E(t)=\frac{\partial L(q,\dot q)}{\partial\dot q}\dot q-L(q,\dot q).
$$

利用（1）中的 $L(q,\dot q)$，求 $E(t)$ 的表达式，并证明 $E(t)$ 是守恒量。

(4) 求 $q$ 的通解。

**[B]**

考虑一个轴对称陀螺。其质量为 $M$，轴长为 $\ell$，绕自身轴的转动惯量为 $I$。以陀螺轴的下端为原点 O，建立静止直角坐标系 $xyz$。

如图2，陀螺轴位于 $z$ 轴上，从轴的上端看，陀螺以角速度 $\omega_1$ 沿逆时针方向高速旋转。假设轴的下端固定在原点 O。

(1) 求陀螺的角动量矢量。

(2) 在轴的上端沿 $x$ 轴正方向施加冲击力。回答此冲击力对原点 O 的力矩方向。

(3) 冲击力仅作用很短的时间 $\Delta t$，其大小的时间平均值为 $F$。求受到冲击后瞬间陀螺的角动量矢量。

(4) 设受到冲击后瞬间陀螺轴与 $z$ 轴的夹角为 $\theta$。利用（3）的结果，求角 $\theta$ 与角速度 $\omega_1$ 满足的关系式。

如图3，陀螺轴与 $z$ 轴保持固定夹角 $\alpha$，从轴的上端看，陀螺以角速度 $\omega_2$ 沿逆时针方向高速旋转，而轴的上端在水平面内作圆周运动。这种运动称为进动。假设轴的下端固定在原点 O。设质心坐标为 $(X,Y,Z)$，质心位于陀螺轴上、距轴下端 $R$ 处。重力加速度的大小为 $g$。

(5) 求作用于质心的重力对原点 O 的力矩。

(6) 假设陀螺的角动量大小等于将（1）的结果中 $\omega_1$ 换成 $\omega_2$ 所得的值，方向沿原点 O 指向质心。求质心所满足的转动运动方程。

(7) 根据（6）的结果，求质心坐标 $(X,Y,Z)$ 关于时间 $t$ 的函数。假设 $t=0$ 时质心位于 $xz$ 平面内 $x>0$ 的位置。

(8) 求质心转动的角速度 $\Omega$。

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
  &L \left( q + \delta q, \dot{q} + \delta \dot{q} \right)
  \\
  &\simeq
  L \left( q, \dot{q} \right)
  + \frac{\partial L \left( q, \dot{q} \right)}{\partial q} \delta q
  \\
  &\quad+ \frac{\partial L \left( q, \dot{q} \right)}{\partial \dot{q}} \delta \dot{q}
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
  &\left( X \boldsymbol{i} + Y \boldsymbol{j} + Z \boldsymbol{k} \right)
  \times \left( - Mg \boldsymbol{k} \right)
  \\
  &= Mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
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
  &\frac{I \omega_2}{R}
  \left( \dot{X} \boldsymbol{i} + \dot{Y} \boldsymbol{j} + \dot{Z} \boldsymbol{k} \right)
  \\
  &= Mg \left( - Y \boldsymbol{i} + X \boldsymbol{j} \right)
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

## **Reference**

- [大学公表の原題](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=2)
