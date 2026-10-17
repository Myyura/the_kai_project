---
sidebar_label: "2015年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2015年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1に示すように、質量 $m$ の2つの質点が長さ $2l/\sqrt5$ の剛体棒で結合されており、剛体棒の中心は、長さ $l$、曲げ剛性 $EI$ の円形断面の片持ち弾性はりの先端に、はりの長手方向に対して直角に剛に結合されている。剛体棒および弾性はりの質量は無視できる。以下の問いに答えよ。文中にない記号は必ず意味を説明して使用すること。（50点）

**(1)** 図1の状態ではりの先端（剛体棒との結合部）に $z$ 方向の初速度を与え、$zx$ 面内の曲げ自由振動を励起させた。この自由振動の固有角振動数とその振動のパターン（はり先端の変位と角変位の比）を求めよ。

**(2)** $xy$ 平面内の曲げ自由振動について固有角振動数とその振動のパターンを求めよ。

**(3)** 図2に示すように、$xy$ 平面内で傾いた状態で剛体棒の中心をはり先端に剛に取り付けた。この状態ではりの先端（剛体棒との結合部）に $z$ 方向の初速度を与えた。この後の運動を (1) の場合と比較しつつ論述せよ。

![原題の図1・図2：片持ちはりと剛体棒の取付け方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_dynamics-2-original.png)

#### 题目描述

如图1，两个质量均为 $m$ 的质点由长度为 $2l/\sqrt5$ 的刚杆连接。刚杆中心与一根长为 $l$、弯曲刚度为 $EI$、圆形截面的悬臂弹性梁端部刚性连接，刚杆与梁轴向垂直。刚杆和弹性梁的质量均可忽略。回答下列问题，使用题目中没有给出的符号时，必须说明其意义。（50分）

**(1)** 在图1状态下，对梁端（与刚杆的连接处）施加沿 $z$ 方向的初速度，激发 $zx$ 平面内的弯曲自由振动。求其固有角频率及振动形式，即梁端位移与角位移之比。

**(2)** 对 $xy$ 平面内的弯曲自由振动，求固有角频率及振动形式。

**(3)** 如图2，使刚杆在 $xy$ 平面内倾斜，将其中心刚性连接于梁端，再向梁端（与刚杆的连接处）施加沿 $z$ 方向的初速度。与 (1) 比较，论述此后的运动。

## **Kai**

### (1)

$z$ 変位に伴う曲げ回転軸は $y$ 軸であり、質点はその軸上にあるため、この回転の慣性モーメントはゼロである。先端曲げモーメントはゼロ、並進質量は $2m$ なので

$$
2m\ddot z+\frac{3EI}{l^3}z=0,
\qquad\boxed{\omega=\sqrt{\frac{3EI}{2ml^3}}.}
$$

片持ちはりの先端荷重 $P$ に対する変位・傾きを $z=Pl^3/(3EI)$、$\theta_z=Pl^2/(2EI)$ と定義すれば

$$
\boxed{z:\theta_z=2l:3.}
$$

ここで $\theta_z$ は $z$ 変位の先端傾きであり、$z$ 軸まわりの回転角ではない。

### (2)

先端 $y$ 変位を $y$、同方向の傾きを $\theta$ とする。剛体棒の中心を通る $z$ 軸まわりの慣性モーメントは

$$
J=2m(l/\sqrt5)^2=\frac{2ml^2}{5}.
$$

はりの先端剛性行列を用いると

$$
\begin{pmatrix}2m&0\\0&2ml^2/5\end{pmatrix}
\begin{pmatrix}\ddot y\\\ddot\theta\end{pmatrix}
+\frac{EI}{l^3}\begin{pmatrix}12&-6l\\-6l&4l^2\end{pmatrix}
\begin{pmatrix}y\\\theta\end{pmatrix}=\boldsymbol0.
$$

$\lambda=ml^3\omega^2/(EI)$ とすると特性式は $(\lambda-1)(\lambda-15)=0$。したがって

$$
\boxed{\begin{gathered}
\omega_1=\sqrt{\frac{EI}{ml^3}},\\
y:\theta=3l:5,\\
\omega_2=\sqrt{\frac{15EI}{ml^3}},\\
y:\theta=l:-3.
\end{gathered}}
$$

### (3)

棒が $y$ 軸から $xy$ 面内で角度 $\alpha$ だけ傾くと、質点の $x$ 座標がゼロでなくなる。そのため $zx$ 曲げの回転にも慣性が生じ、さらに曲げ回転と $x$ 軸まわりのねじり回転が慣性を介して連成する。

具体的に $a=l/\sqrt5$、棒方向を $(\sin\alpha,\cos\alpha,0)$、$x,y$ 軸まわりの回転を $\psi,\beta$ とすると、両質点の $z$ 変位は

$$
z_\pm=z\pm a(\psi\cos\alpha-\beta\sin\alpha).
$$

したがって運動エネルギーには

$$
\mathcal T=m\dot z^2+ma^2(\dot\psi\cos\alpha-\dot\beta\sin\alpha)^2
$$

が現れ、一般の傾斜角では $\dot\psi\dot\beta$ の連成項がゼロでない。(1) の単一の曲げ振動とは異なり、曲げとねじりが組み合わさった固有モードが励起される。具体的な固有振動数には傾斜角とねじり剛性が必要である。
