---
sidebar_label: "2016年度 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2016年度 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

二つの質量 $m$ の質点が長さ $2l/\sqrt5$ の剛体棒で結合され、その中心が長さ $l$、曲げ剛性 $EI$、円形断面の片持ちはり先端に直角に剛結されている。はりと棒の質量は無視する。図 1 のはり軸を $x$、剛体棒の方向を $y$、それらに垂直な方向を $z$ とする。（50 点）

![片持ちはりと剛体棒の二つの配置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/dynamics-2-original.png)

1. 図 1 ではり先端に $z$ 方向の初速度を与えた。$zx$ 面内の曲げ自由振動の固有角振動数と、先端変位・角変位の比を求めよ。
2. $xy$ 面内の曲げ自由振動について同様に求めよ。
3. 図 2 のように剛体棒を $xy$ 面内で傾けて剛結し、先端に $z$ 方向の初速度を与えた後の運動を、(1) と比較して論述せよ。新しい記号は意味を説明すること。

#### 题目描述

无质量悬臂梁长 $l$、圆截面、弯曲刚度 $EI$。梁端刚接一根长 $2l/\sqrt5$ 的无质量杆，两端各有质量 $m$。初态杆沿 $y$、梁沿 $x$。分别求面外和面内弯曲的频率及梁端位移与转角比例；再讨论杆在 $xy$ 面内倾斜后，给予梁端 $z$ 初速度所引起的运动变化。

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
\boxed{\omega_1=\sqrt{\frac{EI}{ml^3}},\quad y:\theta=3l:5,\qquad
\omega_2=\sqrt{\frac{15EI}{ml^3}},\quad y:\theta=l:-3.}
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
