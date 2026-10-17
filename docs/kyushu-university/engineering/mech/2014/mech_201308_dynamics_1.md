---
sidebar_label: "2013年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2013年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示すように、半径 $r$ の円板状の滑車の周囲に質量の無視できるロープが巻き付けられ、一端にはばね定数 $k$ のばねを介して質量 $2m$ の物体 A が、他端にはロープに直接質量 $m$ の物体 B が取り付けられている。滑車の回転中心まわりの慣性モーメントは $I=mr^2$ で表され、滑車とロープの間に滑りはなく、ロープは伸び縮みしないとする。まず、ロープにたるみがなくばねが自然長の状態で物体 A、B が動かないようにそれぞれ支持する。ある瞬間（時刻 $t=0$）にこれらの支持を静かに取り外すと系は運動し始めた。運動開始後の物体 A の鉛直下向き変位を $x_A$、物体 B の鉛直上向き変位を $x_B$ として以下の問いに答えよ。重力加速度を $g$ とする。（50点）

**(1)** ニュートンの運動の法則に基づいて系の運動方程式を求めよ。

**(2)** この系の固有角振動数および正規固有モード（M-正規固有モード）を求めよ。また、それぞれの固有モードがどのような運動を表すか物理的に説明せよ。

**(3)** 正規モード行列を用いたモード解析から $x_A,x_B$ を時間 $t$ の関数として表せ。

**(4)** ロープに作用する張力を時間 $t$ の関数として表し、最大値を求めよ。

![原題の滑車・ばね・二つの物体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_dynamics-1-original.png)

#### 题目描述

如图，质量可忽略的绳绕在半径为 $r$ 的圆盘形滑轮上。绳的一端经弹簧常数为 $k$ 的弹簧连接质量为 $2m$ 的物体 A，另一端直接连接质量为 $m$ 的物体 B。滑轮绕转动中心的转动惯量为 $I=mr^2$，绳与滑轮间不打滑，绳不伸缩。先分别支承 A、B，使绳无松弛、弹簧处于原长且两物体静止。在 $t=0$ 时轻轻撤去支承，系统开始运动。将运动开始后 A 竖直向下的位移记为 $x_A$、B 竖直向上的位移记为 $x_B$，重力加速度为 $g$。回答下列问题。（50分）

**(1)** 根据牛顿运动定律求系统的运动方程。

**(2)** 求系统的固有角频率和正规固有振型（按质量矩阵 M 归一化的固有振型），并从物理上说明各振型所表示的运动。

**(3)** 使用正规模态矩阵进行模态分析，将 $x_A,x_B$ 表示为时间 $t$ 的函数。

**(4)** 将绳中张力表示为时间 $t$ 的函数，并求其最大值。

## **Kai**

### (1)

ばね側と B 側の張力をそれぞれ $T_A,T_B$ とする。ばねの伸びは $x_A-x_B$、滑車の回転角は $x_B/r$ なので

$$
\begin{gathered}
2m\ddot x_A=2mg-T_A,\\
m\ddot x_B=T_B-mg,
\end{gathered}
$$

$$
\begin{gathered}
I\frac{\ddot x_B}{r}=(T_A-T_B)r,\\
T_A=k(x_A-x_B).
\end{gathered}
$$

$I=mr^2$ を代入して張力を消去すると

$$
\boxed{\begin{gathered}
\underbrace{\begin{pmatrix}2m&0\\0&2m\end{pmatrix}}_{\boldsymbol M}
\ddot{\boldsymbol x}+
\underbrace{k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}}_{\boldsymbol K}
\boldsymbol x=\begin{pmatrix}2mg\\-mg\end{pmatrix},\\
\boldsymbol x=\begin{pmatrix}x_A\\x_B\end{pmatrix}.
\end{gathered}}
$$

### (2)

$\det(\boldsymbol K-\omega^2\boldsymbol M)=0$ から

$$
\boxed{\begin{gathered}
\omega_0=0,\\
\boldsymbol\phi_0=\frac1{2\sqrt m}\begin{pmatrix}1\\1\end{pmatrix},\\
\omega_1=\sqrt{\frac km},\\
\boldsymbol\phi_1=\frac1{2\sqrt m}\begin{pmatrix}1\\-1\end{pmatrix}.
\end{gathered}}
$$

これらは $\boldsymbol\phi_i^T\boldsymbol M\boldsymbol\phi_j=\delta_{ij}$ を満たす。第0モードは $x_A=x_B$ でばねが伸縮せず、A と B は実空間では逆向きに動く。第1モードでは $x_A=-x_B$ でばねが伸縮し、A と B は実空間では同じ向きに動く。座標の正方向が互いに逆であることに注意する。

### (3)

$\boldsymbol\Phi=(\boldsymbol\phi_0,\boldsymbol\phi_1)$、$\boldsymbol x=\boldsymbol\Phi\boldsymbol\eta$ とおく。左から $\boldsymbol\Phi^T$ をかけると

$$
\ddot\eta_0=\frac{\sqrt m g}{2},\qquad
\ddot\eta_1+\omega_1^2\eta_1=\frac{3\sqrt m g}{2}.
$$

初期変位・初速度はともにゼロだから

$$
\begin{gathered}
\eta_0=\frac{\sqrt m g}{4}t^2,\\
\eta_1=\frac{3m^{3/2}g}{2k}(1-\cos\omega_1t).
\end{gathered}
$$

したがって

$$
\boxed{\begin{gathered}
x_A(t)=\frac{gt^2}{8}+\frac{3mg}{4k}(1-\cos\omega_1t),\\
x_B(t)=\frac{gt^2}{8}-\frac{3mg}{4k}(1-\cos\omega_1t).
\end{gathered}}
$$

### (4)

滑車に回転慣性があるため、左右の張力は等しくない。

$$
\boxed{\begin{gathered}
T_A(t)=k(x_A-x_B)\\
=\frac{3mg}{2}(1-\cos\omega_1t),
\end{gathered}}
$$

$$
\boxed{\begin{gathered}
T_B(t)=m(g+\ddot x_B)\\
=\frac{mg}{4}(5-3\cos\omega_1t).
\end{gathered}}
$$

最大値は $\omega_1t=(2j+1)\pi$（$j=0,1,\ldots$）で生じ、

$$
\boxed{T_{A,\max}=3mg,\qquad T_{B,\max}=2mg.}
$$

ロープ全体での最大張力は $3mg$ である。
