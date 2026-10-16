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

密度、縦弾性係数、断面積、長さが $(\rho_1,E_1,A_1,L_1)$ と $(\rho_2,E_2,A_2,L_2)$ の二本の一様な弾性棒を直列に連結する。左端は固定、右端は自由。各棒の左端からの局所座標を $x_1,x_2$、軸方向変位を $u_1,u_2$ とする。（50 点）

![直列に連結した二本の弾性棒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_dynamics-3-original.png)

一様棒の式 $u_{tt}=c^2u_{xx}$、$F=EAu_x$、$c=\sqrt{E/\rho}$ は用いてよい。

1. $u_i=X_i(x_i)\cos\omega t$ のとき、$X_i=C_i\cos(\omega x_i/c_i)+D_i\sin(\omega x_i/c_i)$、$c_i=\sqrt{E_i/\rho_i}$ となる。$X_1$ について示せ。
2. 左固定端、連結部、右自由端について合計四つの境界条件を示せ。
3. 系の振動数方程式を求めよ。

#### 题目描述

材料、截面积和长度不同的两根杆串联，左端固定、右端自由，各段坐标从自身左端起算。证明谐波空间解为正弦余弦组合，写位移与轴力的四个端部、连接条件，并推导特征频率方程。

## **Kai**

### (1)

代入すると $-\omega^2X_1=c_1^2X_1''$。定係数二階方程式の一般解は

$$
\boxed{X_1=C_1\cos\frac{\omega x_1}{c_1}+D_1\sin\frac{\omega x_1}{c_1}.}
$$

### (2)

$$
\boxed{X_1(0)=0,\quad X_1(L_1)=X_2(0),\quad
E_1A_1X_1'(L_1)=E_2A_2X_2'(0),\quad X_2'(L_2)=0.}
$$

### (3)

$q_i=\omega L_i/c_i$、$Z_i=E_iA_i/c_i$ とおく。外端条件を先に満たす形

$$
X_1=D\sin(\omega x_1/c_1),\qquad
X_2=B\cos[\omega(L_2-x_2)/c_2]
$$

を用いると、連結条件は

$$
D\sin q_1=B\cos q_2,\qquad
Z_1D\cos q_1=Z_2B\sin q_2.
$$

非自明解の条件より

$$
\boxed{Z_1\cos q_1\cos q_2-Z_2\sin q_1\sin q_2=0\qquad(\omega>0).}
$$

余弦がゼロでない場合は $\tan q_1\tan q_2=Z_1/Z_2$ と書けるが、上の積の式なら割り算で特別な根を落とさない。同じ材料・断面なら $\cos[\omega(L_1+L_2)/c]=0$ に帰着する。
