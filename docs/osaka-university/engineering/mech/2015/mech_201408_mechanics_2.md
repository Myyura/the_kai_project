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

水平右向きに $x$ 軸、鉛直上向きに $y$ 軸を取り、$(0,\ell)$ を通る水平レールを考える。質量 $m$ の物体 A はレール上を摩擦なく動く。A と、大きさを無視できる質量 $M$ のおもり B は、質量を無視できる長さ $\ell$ の棒で結ばれている。棒は A を支点として $xy$ 面内で自由に回転する。鉛直下向きから反時計回りに測った棒の角を $\theta$ とする。A の座標を $(x_A,\ell)$、系の重心 G の座標を $(x_G,y_G)$、重力加速度の大きさを $g$ とする。

1. A に働く鉛直抗力の上向き成分を $N$ とする。重心 G の並進と、G のまわりの回転の運動方程式を、$\ddot x_G,\ddot y_G,\ddot\theta,M,m,\ell,N,g,\theta$ で表せ。
2. 初期状態 $x_A=0,\theta=\theta_0$（$0<\theta_0<\pi/2$）から静かに拘束を外す。$\theta=0$ となるときの $\dot\theta,x_A,N$ を $M,m,\ell,g,\theta_0$ で表せ。
3. B に、その速度ベクトル $\boldsymbol v_B$ と逆向きの力 $-k\boldsymbol v_B$（$k>0$）が働く場合を考える。(2) と同じ初期状態から静かに放すと、やがて $\theta=0$ で静止した。このときの $x_A$ を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_mechanics_2-question-fig1.png)

#### 题目描述

以水平向右为 $x$ 轴、竖直向上为 $y$ 轴。质量为 $m$ 的滑块 A 可沿通过 $(0,\ell)$ 的水平轨道无摩擦运动。质量为 $M$ 的质点 B 通过长为 $\ell$、质量可忽略的刚杆与 A 连接，杆可绕 A 在平面内自由转动。杆与竖直向下方向的夹角按逆时针为正，记作 $\theta$。A 的坐标为 $(x_A,\ell)$，系统质心为 $(x_G,y_G)$，重力加速度为 $g$。

1. 设轨道对 A 的竖直向上支持力为 $N$，写出质心平动及绕质心转动的方程。
2. 从 $x_A=0,\theta=\theta_0$（$0<\theta_0<\pi/2$）静止释放，求杆到达竖直位置时的 $\dot\theta,x_A,N$。
3. 若 B 受到线性阻力 $-k\boldsymbol v_B$，其中 $k>0$，从相同初态释放并最终在 $\theta=0$ 静止，求最终的 $x_A$。

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
