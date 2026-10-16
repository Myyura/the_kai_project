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

半径 $a$、慣性モーメント $J$ の定滑車に糸をかけ、一端に質量 $M$ のおもり、他端に質量 $m$、半径 $r$、慣性モーメント $I=mk^2$ の円筒を付ける。$k$ は円筒の回転半径である。糸は円筒に巻き付けられ、回転とともにたるまずほどけ、円筒半径は変わらない。滑車は滑らかに回り、糸との滑りはない。重力加速度を $g$ とする。（50 点）

![定滑車と糸を巻いた円筒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_dynamics-1-original.png)

1. おもりの下向き変位を $x$ として、その運動方程式を求めよ。
2. 円筒の下向き変位を $y$ として、並進と回転の方程式を求めよ。
3. 定滑車の回転方程式を求めよ。
4. 定滑車の質量を無視するとき、$\ddot x,\ddot y$ を $M,m,r,k,g$ で表せ。
5. $M\gg m$ のとき、円筒が落下せず同じ位置にとどまるための $k$ を求めよ。

#### 题目描述

有转动惯量的定滑轮两侧分别连接重物和绕线圆筒，圆筒下降时放线。求重物、圆筒及滑轮方程；滑轮无质量时求两加速度；重物远重于圆筒时求使圆筒保持原高度的回转半径。

## **Kai**

円筒側の張力を $T_1$、おもり側を $T_2$、円筒のほどける向きの回転角を $\theta$、おもりが下がる向きの滑車角を $\phi$ とする。滑りなしより $r\theta=x+y$、$a\phi=x$。

### (1)

$$
\boxed{M\ddot x=Mg-T_2.}
$$

### (2)

$$
\boxed{m\ddot y=mg-T_1,\qquad mk^2\ddot\theta=T_1r,
\qquad r\ddot\theta=\ddot x+\ddot y.}
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
\boxed{\ddot x=\frac{Mr^2+(M-m)k^2}{D}g,\qquad
\ddot y=\frac{Mr^2-(M-m)k^2}{D}g.}
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
