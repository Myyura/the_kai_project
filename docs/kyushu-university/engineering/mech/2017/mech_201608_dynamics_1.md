---
sidebar_label: "2016年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 九州大学 工学府 機械系専攻 2016年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図 (a) に示すように、質量 $m$、長さ $2l$ で太さの無視できる一様な剛体棒が点 O まわりに自由に回転できるように支持されている。剛体棒の重心（中心）G を通り棒に垂直な軸まわりの慣性モーメントは $I_G=ml^2/3$ である。点 O と剛体棒の重心 G は一致している。剛体棒の右端はばね定数 $k$ のばねと粘性減衰係数 $c$ の減衰器で剛体棒に垂直に支持されており、剛体棒はばねの自然長で水平の位置にある。剛体棒の点 O まわりの角変位は微小であり、右端の上向き変位を $x$ とする。以下の問いに答えよ。重力加速度を $g$ とする。（50点）

**(1)** ニュートンの第二法則から $x$ に関する運動方程式を示し、減衰がない場合の固有角振動数 $\omega_n$ と臨界粘性減衰係数 $c_c$ を求めよ。

**(2)** $c=0$ として時間 $t=0$ における初期条件 $x=x_0,\ \dot{x}=0$ を与えた。点 O の支持部から剛体棒が受ける力を時間の関数 $F(t)$ として表せ。

次に、図 (b) に示すように剛体棒の支持点 O が棒の重心 G から左側に $l/3$ 移動した。剛体棒が静的平衡状態で水平になるように、ばねには予め伸び $\delta$ が与えられている。

**(3)** $\delta$ を求めよ。また、静的平衡状態からの右端の上向き変位を $x$ として、ニュートンの第二法則から $x$ に関する運動方程式を示せ。

**(4)** 図 (b) の系に対して上記 (2) と同一の問いに解答せよ。

![支持位置を変える剛体棒の原図 (a), (b)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_dynamics-1-original.png)

### 题目描述

如图 (a)，质量为 $m$、长度为 $2l$、粗细可忽略的均匀刚性杆可绕 O 点自由转动。杆绕通过重心（中心）G 且垂直于杆的轴的转动惯量为 $I_G=ml^2/3$。O 与 G 重合。杆右端由弹簧常数为 $k$ 的弹簧和黏性阻尼系数为 $c$ 的阻尼器沿垂直于杆的方向支承；弹簧处于自然长度时，杆水平。杆绕 O 的角位移微小，右端向上位移记为 $x$。重力加速度为 $g$。回答下列问题。（50分）

**(1)** 根据牛顿第二定律写出关于 $x$ 的运动方程，求无阻尼时的固有角频率 $\omega_n$ 和临界黏性阻尼系数 $c_c$。

**(2)** 令 $c=0$，在 $t=0$ 给予初始条件 $x=x_0,\ \dot{x}=0$。将杆从 O 点支承处受到的力表示为时间函数 $F(t)$。

接着如图 (b)，将支点 O 移至重心 G 左侧 $l/3$ 处。预先使弹簧伸长 $\delta$，使杆在静平衡状态下水平。

**(3)** 求 $\delta$。以杆右端从静平衡位置向上的位移为 $x$，根据牛顿第二定律写出关于 $x$ 的运动方程。

**(4)** 对图 (b) 的系统回答与 (2) 相同的问题。

## **Kai**

支持力は上向きを正とし、微小変位の一次までを扱う。

### (1)

$x=l\theta$ とすると、O まわりのモーメント式は

$$
\begin{gathered}
I_G\ddot\theta=-klx-cl\dot x,\\
\boxed{\frac m3\ddot x+c\dot x+kx=0.}
\end{gathered}
$$

したがって

$$
\boxed{\omega_n=\sqrt{\frac{3k}{m}},\qquad c_c=2\sqrt{\frac{mk}{3}}.}
$$

### (2)

$$
x(t)=x_0\cos\left(\sqrt{\frac{3k}{m}}t\right).
$$

G は固定されるので、鉛直方向の力のつり合いは $F-mg-kx=0$。よって

$$
\boxed{F(t)=mg+kx_0\cos\left(\sqrt{\frac{3k}{m}}t\right).}
$$

### (3)

O から G まで $l/3$、右端まで $4l/3$ である。静的つり合いから

$$
k\delta\frac{4l}{3}=mg\frac l3,
\qquad\boxed{\delta=\frac{mg}{4k}.}
$$

$I_O=I_G+m(l/3)^2=4ml^2/9$、$x=(4l/3)\theta$ であり、平衡位置まわりでは重力とばねの初期張力の定常モーメントが相殺される。したがって

$$
\boxed{\frac m4\ddot x+c\dot x+kx=0.}
$$

### (4)

$c=0$ では

$$
x(t)=x_0\cos\left(2\sqrt{\frac km}t\right),\qquad
 y_G=\frac x4.
$$

鉛直方向の運動方程式は

$$
\frac m4\ddot x=F+k(\delta-x)-mg.
$$

$\ddot x=-4kx/m$ と $k\delta=mg/4$ を代入すると、変動項が相殺されて

$$
\boxed{F(t)=\frac34mg.}
$$
