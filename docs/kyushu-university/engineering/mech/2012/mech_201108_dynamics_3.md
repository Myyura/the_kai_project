---
sidebar_label: "2011年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Longitudinal-Vibration
---

# 九州大学 工学府 機械系専攻 2011年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図示のように、2本の一様な弾性棒が連結された系を考える。この系の長手方向の振動（縦振動）について以下の問いに答えよ。ただし、左右の棒の密度、縦弾性係数、断面積、長さは、それぞれ $\rho_1,E_1,A_1,L_1$ および $\rho_2,E_2,A_2,L_2$ であり、系の左端は固定端、系の右端は自由端とする。なお、密度 $\rho$、縦弾性係数 $E$、断面積 $A$ の一様な棒の縦振動の運動方程式と棒の軸力 $F(x,t)$ は、$t$ を時間、$x$ を長手方向座標、$u(x,t)$ を長手方向変位として次式で表される。（50点）

$$
\begin{aligned}
\frac{\partial^2u}{\partial t^2}&=c^2\frac{\partial^2u}{\partial x^2},\\
F&=EA\frac{\partial u}{\partial x},\\
c&=\sqrt{\frac E\rho}.
\end{aligned}
$$

![原題の連結された二本の弾性棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_dynamics-3-original.png)

**(1)** 図のように、静止状態における左右の棒の左端を原点としてとった長手方向座標をそれぞれ $x_1,x_2$ とし、左右の棒の長手方向変位をそれぞれ $u_1(x_1,t),u_2(x_2,t)$ とする。定常振動解を $u_1=X_1(x_1)\cos\omega t$、$u_2=X_2(x_2)\cos\omega t$ と仮定すると、$X_1(x_1),X_2(x_2)$ は次のように表される。

$$
\begin{aligned}
X_1(x_1)&=C_1\cos\frac{\omega x_1}{c_1}+D_1\sin\frac{\omega x_1}{c_1},\\
X_2(x_2)&=C_2\cos\frac{\omega x_2}{c_2}+D_2\sin\frac{\omega x_2}{c_2},\\
c_1&=\sqrt{\frac{E_1}{\rho_1}},\qquad c_2=\sqrt{\frac{E_2}{\rho_2}}.
\end{aligned}
$$

ここに、$C_1,D_1,C_2,D_2$ は任意の定数である。$X_1(x_1)$ が上のように表されることを示せ。

**(2)** 左側の棒の左端、左右の棒の連結部（左側の棒の右端かつ右側の棒の左端）、右側の棒の右端について、合計四つの境界条件を示せ。

**(3)** 系の振動数方程式を求めよ。

### 题目描述

考虑图示由两根均匀弹性杆连接成的系统，回答关于其轴向振动（纵振动）的问题。左右两杆的密度、纵向弹性模量、截面积和长度分别为 $\rho_1,E_1,A_1,L_1$ 与 $\rho_2,E_2,A_2,L_2$。系统左端固定，右端自由。密度为 $\rho$、纵向弹性模量为 $E$、截面积为 $A$ 的均匀杆，其纵振动运动方程、轴力 $F(x,t)$ 与波速由上式给出，其中 $t$ 为时间，$x$ 为轴向坐标，$u(x,t)$ 为轴向位移。（50分）

**(1)** 如图，以静止状态下每根杆的左端为原点，分别建立轴向坐标 $x_1,x_2$；两杆的轴向位移分别为 $u_1(x_1,t),u_2(x_2,t)$。假设稳态振动解为 $u_1=X_1(x_1)\cos\omega t$、$u_2=X_2(x_2)\cos\omega t$，则 $X_1,X_2$ 可表示为上列正弦、余弦组合，其中 $c_1=\sqrt{E_1/\rho_1}$、$c_2=\sqrt{E_2/\rho_2}$，$C_1,D_1,C_2,D_2$ 为任意常数。证明 $X_1(x_1)$ 可以表示为该形式。

**(2)** 针对左杆左端、两杆连接处（既为左杆右端，又为右杆左端）以及右杆右端，写出共四个边界条件。

**(3)** 求系统的频率方程。

## **Kai**

### (1)

代入すると $-\omega^2X_1=c_1^2X_1''$。定係数二階方程式の一般解は

$$
\boxed{X_1=C_1\cos\frac{\omega x_1}{c_1}+D_1\sin\frac{\omega x_1}{c_1}.}
$$

### (2)

$$
\boxed{\begin{gathered}
X_1(0)=0,\\
X_1(L_1)=X_2(0),\\
E_1A_1X_1'(L_1)=E_2A_2X_2'(0),\\
X_2'(L_2)=0.
\end{gathered}}
$$

### (3)

$q_i=\omega L_i/c_i$、$Z_i=E_iA_i/c_i$ とおく。外端条件を先に満たす形

$$
\begin{gathered}
X_1=D\sin(\omega x_1/c_1),\\
X_2=B\cos[\omega(L_2-x_2)/c_2]
\end{gathered}
$$

を用いると、連結条件は

$$
\begin{gathered}
D\sin q_1=B\cos q_2,\\
Z_1D\cos q_1=Z_2B\sin q_2.
\end{gathered}
$$

非自明解の条件より

$$
\boxed{\begin{gathered}
Z_1\cos q_1\cos q_2-Z_2\sin q_1\sin q_2=0\\
(\omega>0).
\end{gathered}}
$$

余弦がゼロでない場合は $\tan q_1\tan q_2=Z_1/Z_2$ と書けるが、上の積の式なら割り算で特別な根を落とさない。同じ材料・断面なら $\cos[\omega(L_1+L_2)/c]=0$ に帰着する。
