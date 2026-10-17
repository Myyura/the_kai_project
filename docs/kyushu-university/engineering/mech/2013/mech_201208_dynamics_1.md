---
sidebar_label: "2012年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 工学府 機械系専攻 2012年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、半径 $a$、慣性モーメント $J$ の定滑車に糸をかけ、糸の一端に質量 $M$ のおもりが、他端に質量 $m$、半径 $r$、慣性モーメント $I=mk^2$ の円筒がつけられている。$k$ は円筒の回転半径である。糸は円筒に巻き付けられており、円筒の回転とともにたるみなくほどけ、その際円筒の半径は変化しないものとする。滑車は滑らかに回転し、糸と滑車の間に滑りはないものとする。また、重力加速度を $g$ とする。解答に際して与えられていない物理量は定義してから用いること。（50点）

**(1)** おもりの鉛直下向きの変位を $x$ として、おもりの運動方程式を求めよ。

**(2)** 円筒の鉛直下向きの変位を $y$ として、円筒の並進運動の運動方程式および回転の運動方程式をそれぞれ求めよ。

**(3)** 定滑車の回転の運動方程式を求めよ。

**(4)** 定滑車の質量が無視できるとき、おもりと円筒の加速度 $\ddot x,\ddot y$ を $M,m,r,k,g$ を用いて表せ。

**(5)** $M\gg m$ のとき、円筒が鉛直下向きに落下せずそのままの位置にとどまるための $k$ を求めよ。

![原題の定滑車・おもり・円筒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_dynamics-1-original.png)

#### 题目描述

如图，将线跨过半径为 $a$、转动惯量为 $J$ 的定滑轮，线的一端连接质量为 $M$ 的重物，另一端连接质量为 $m$、半径为 $r$、转动惯量为 $I=mk^2$ 的圆筒，其中 $k$ 为圆筒的回转半径。线绕在圆筒上，随圆筒转动无松弛地展开，过程中圆筒半径保持不变。滑轮光滑转动，线与滑轮之间没有滑动。重力加速度为 $g$。解答中若使用题目未给出的物理量，须先定义再使用。（50分）

**(1)** 以重物竖直向下的位移为 $x$，求重物的运动方程。

**(2)** 以圆筒竖直向下的位移为 $y$，分别求圆筒平动和转动的运动方程。

**(3)** 求定滑轮转动的运动方程。

**(4)** 当定滑轮的质量可忽略时，用 $M,m,r,k,g$ 表示重物和圆筒的加速度 $\ddot x,\ddot y$。

**(5)** 当 $M\gg m$ 时，求使圆筒不竖直下落、保持原位置的回转半径 $k$。

## **Kai**

円筒側の張力を $T_1$、おもり側を $T_2$、円筒のほどける向きの回転角を $\theta$、おもりが下がる向きの滑車角を $\phi$ とする。滑りなしより $r\theta=x+y$、$a\phi=x$。

### (1)

$$
\boxed{M\ddot x=Mg-T_2.}
$$

### (2)

$$
\boxed{\begin{gathered}
m\ddot y=mg-T_1,\\
mk^2\ddot\theta=T_1r,\\
r\ddot\theta=\ddot x+\ddot y.
\end{gathered}}
$$

### (3)

$$
\boxed{J\ddot\phi=a(T_2-T_1),\qquad
\frac{J}{a^2}\ddot x=T_2-T_1.}
$$

### (4)

$J=0$ では $T_1=T_2=T$。$D=Mr^2+(M+m)k^2$ とおくと

$$
T=\frac{2Mm k^2g}{D},
$$

$$
\boxed{\begin{gathered}
\ddot x=\frac{Mr^2+(M-m)k^2}{D}g,\\
\ddot y=\frac{Mr^2-(M-m)k^2}{D}g.
\end{gathered}}
$$

### (5)

(4) と同じく滑車の慣性を無視すると、$\ddot y=0$ より

$$
\boxed{k=r\sqrt{\frac{M}{M-m}}\simeq r\quad(M\gg m).}
$$

滑車の慣性 $J$ を保持する場合も示す。$\ddot y=0$ では $T_1=mg$、$(M+J/a^2)\ddot x=(M-m)g$ であり、円筒の回転式から

$$
\boxed{k=r\sqrt{\frac{M+J/a^2}{M-m}}
\simeq r\sqrt{1+\frac{J}{Ma^2}}.}
$$

$J/(Ma^2)$ も十分小さい極限では同じく $k\simeq r$ となる。
