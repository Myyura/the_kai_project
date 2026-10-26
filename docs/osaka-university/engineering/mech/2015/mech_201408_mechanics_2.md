---
sidebar_label: "2014年8月実施 力学 問題2"
tags:
  - Osaka-University
  - Physics.Mechanics.Center-of-Mass-and-Angular-Momentum
  - Physics.Mechanics.Connected-Particles-and-Tension
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

図のように、原点 O、水平方向右向きに $x$ 軸、鉛直方向上向きに $y$ 軸をとった $xy$ 平面内に、座標 $(0,\ell)$ の点を通って $x$ 軸に平行なレールがある。レールには、質量 $m$ の物体 A が取り付けてあり、レール上を摩擦なく移動することができる。この物体 A に質量 $M$ のおもり B が質量の無視できる長さ $\ell$ の棒でつながれており、物体 A を支点として $xy$ 平面に垂直な軸の回りに自由に回転する。この棒の鉛直方向下向きからの回転角を図のように反時計回りに $\theta$ とする。この棒と物体 A およびおもり B からなる系の重心を G として、物体 A の座標を $(x_A,\ell)$、重心 G の座標を $(x_G,y_G)$、重力加速度の大きさを $g$ とする。おもり B の大きさは無視できるものとする。また、変数の上の $\dot{\ }$ は1階時間微分、$\ddot{\ }$ は2階時間微分を表すものとする。以下の問いに答えなさい。

(1) 物体 A に働く垂直抗力を、鉛直方向上向きを正として大きさ $N$ とする。この系の重心 G の並進の運動方程式と、回転角 $\theta$ の重心回りの運動方程式を、$\ddot x_G,\ddot y_G,\ddot\theta$ と $M,m,\ell,N,g,\theta$ を用いて表しなさい。

(2) 初期状態において物体 A とおもり B は、$x_A=0$、$\theta=\theta_0$（$0<\theta_0<\pi/2$）の位置に拘束されていた。この状態から静かに拘束を外すと、物体 A とおもり B からなる系は運動を始めた。$\theta=0$ となるときの $\dot\theta,x_A,N$ を $M,m,\ell,g,\theta_0$ を用いて表しなさい。

(3) この系において、おもり B に対して、おもり B の速度ベクトル $\boldsymbol v_B$ とは逆向きの力 $-k\boldsymbol v_B$ が働く場合を考える。ただし、$k$ は正の定数である。小問 (2) と同じ初期状態から静かに拘束を外して系を運動させると、やがて $\theta=0$ の状態で静止した。このときの $x_A$ を求めなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_mechanics_2_original_figure_1.png)

### 题目描述

问题2（使用白色答题纸）

如图，在以 O 为原点、水平向右为 $x$ 轴、竖直向上为 $y$ 轴的 $xy$ 平面内，有一条经过 $(0,\ell)$、平行于 $x$ 轴的轨道。质量为 $m$ 的物体 A 安装在轨道上，可无摩擦移动。质量为 $M$ 的重物 B 通过一根长为 $\ell$、质量可忽略的杆与 A 连接，可绕过 A 且垂直于 $xy$ 平面的轴自由转动。杆相对于竖直向下方向的转角如图，以逆时针为正，记为 $\theta$。杆、A 和 B 构成系统的质心为 G；A 的坐标为 $(x_A,\ell)$，G 的坐标为 $(x_G,y_G)$，重力加速度大小为 $g$。B 的大小可以忽略。变量上方的一点和两点分别表示一阶、二阶时间导数。回答下列问题。

(1) 以竖直向上为正，将 A 所受的法向支持力记为 $N$。用 $\ddot x_G,\ddot y_G,\ddot\theta$ 和 $M,m,\ell,N,g,\theta$ 表示系统质心 G 的平动方程，以及绕质心、关于转角 $\theta$ 的转动方程。

(2) 初始时 A、B 被约束在 $x_A=0$、$\theta=\theta_0$（$0<\theta_0<\pi/2$）的位置。从静止状态解除约束后系统开始运动。用 $M,m,\ell,g,\theta_0$ 表示 $\theta=0$ 时的 $\dot\theta,x_A,N$。

(3) 若 B 受到与其速度向量 $\boldsymbol v_B$ 方向相反的力 $-k\boldsymbol v_B$，其中 $k$ 为正常数，从与 (2) 相同的初始状态静止解除约束，系统最终停在 $\theta=0$。求最终的 $x_A$。

## **Kai**

### (1)

重心まわりの慣性モーメントは

$$
I_G=m\left(\frac{M\ell}{M+m}\right)^2
+M\left(\frac{m\ell}{M+m}\right)^2
=\frac{mM}{M+m}\ell^2.
$$

重力の重心まわりのモーメントは $0$ であり、鉛直抗力のモーメントは $-NM\ell\sin\theta/(M+m)$ である。したがって

$$
\boxed{(M+m)\ddot x_G=0},\qquad
\boxed{(M+m)\ddot y_G=N-(M+m)g},
$$

$$
\boxed{\frac{mM}{M+m}\ell^2\ddot\theta
=-\frac{M\ell}{M+m}N\sin\theta}.
$$

### (2)

外力の水平成分が $0$ なので、静止から放した系の $x_G$ は一定である。

$$
x_G=x_A+\frac{M\ell}{M+m}\sin\theta
=\frac{M\ell}{M+m}\sin\theta_0.
$$

よって $\theta=0$ では

$$
\boxed{x_A=\frac{M\ell}{M+m}\sin\theta_0}.
$$

水平運動量保存から、その瞬間

$$
\dot x_A=-\frac{M\ell}{M+m}\dot\theta,
\qquad \dot x_B=\frac{m\ell}{M+m}\dot\theta,
\qquad \dot y_B=0.
$$

力学的エネルギー保存より

$$
Mg\ell(1-\cos\theta_0)
=\frac12\frac{mM}{M+m}\ell^2\dot\theta^2.
$$

$\theta$ は減少しているから

$$
\boxed{\dot\theta=-\sqrt{\frac{2(M+m)g}{m\ell}(1-\cos\theta_0)}}.
$$

$y_G=\ell-M\ell\cos\theta/(M+m)$ を二回微分し、$\theta=0$ を代入すると

$$
N=(M+m)g+M\ell\dot\theta^2.
$$

したがって

$$
\boxed{N=(M+m)g\left[1+\frac{2M}{m}(1-\cos\theta_0)\right]}.
$$

### (3)

系の水平運動量を $P_x$ とすると、水平外力は B に働く抵抗 $-k\dot x_B$ だけである。ゆえに

$$
\dot P_x=-k\dot x_B,
\qquad P_x+kx_B=\text{一定}.
$$

初めも終わりも静止しているので $P_x=0$。従って B の初期・最終の水平座標は等しく、初期には $x_B=\ell\sin\theta_0$、最終には $\theta=0$ より $x_B=x_A$ である。よって

$$
\boxed{x_A=\ell\sin\theta_0}.
$$
