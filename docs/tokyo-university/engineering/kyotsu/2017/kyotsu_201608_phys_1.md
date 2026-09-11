---
sidebar_label: '2016年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Center-of-Mass-and-Angular-Momentum
---

# 東京大学 工学系研究科 2016年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $l$、質量 $M$、太さを無視できる一様な剛体棒 AB を水平面上に鉛直に立てる。下端 A の初期位置を原点とし、右向きを $x$ 軸、上向きを $y$ 軸とする。上端 B に $x$ 軸の正方向のごく小さい速度を与えると、棒は傾き始める。重心を G、重力加速度を $g$ とする。水平面との摩擦および空気抵抗は無視する。I〜IV では A が水平面から離れないとしてよい。

![滑らかな水平面上で倒れる棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_1_rod_audited.svg)

### I

G を通り $xy$ 平面に垂直な軸のまわりの慣性モーメントが $I=Ml^2/12$ であることを示せ。

### II

棒 AB と $y$ 軸のなす角を $\theta$ とする。$\theta$ は初期値 $0$ から増加する。A に作用する垂直抗力を $R$ として、並進運動と G のまわりの回転運動の方程式を導け。

### III

$\theta$ の微分方程式を導け。含まれる定数は $g,l$ のみとせよ。

### IV

B が水平面に触れる直前の棒の G のまわりの角速度と、B の速度を求めよ。

### V

B が水平面に触れるまで、A が水平面から離れないことを示せ。

#### 题目描述

长度为 $l$、质量为 $M$、粗细可忽略的均匀刚性杆 AB 竖立在水平面上。以下端 A 的初始位置为原点，向右为 $x$ 轴、向上为 $y$ 轴。给上端 B 一个沿 $x$ 正方向的无穷小初速度，使杆开始倾倒。杆的质心为 G，重力加速度为 $g$。忽略水平面摩擦和空气阻力。I—IV 中可假设 A 始终接触水平面。

I. 证明杆绕过 G 且垂直于 $xy$ 平面的轴的转动惯量为 $I=Ml^2/12$。

II. 令杆与 $y$ 轴的夹角为 $\theta$，其值从 $0$ 随时间增大。以 A 点的支持力为 $R$，推导平动和绕 G 转动的运动方程。

III. 推导 $\theta$ 的微分方程，其中只含常数 $g,l$。

IV. 求 B 刚要接触水平面时杆绕 G 的角速度和 B 点的速度。

V. 证明在 B 接触水平面之前，A 始终保持接触。

## **Kai**

### I

G を原点として棒に沿う座標を $s$ と取れば、

$$
I=\int_{-l/2}^{l/2}s^2\frac{M}{l}\,ds
=\boxed{\frac1{12}Ml^2}.
$$

### II

G の座標を $(x_G,y_G)$ とする。$\theta$ の増加方向の回転を正とすれば、

$$
\boxed{M\ddot x_G=0,\qquad M\ddot y_G=R-Mg,\qquad
I\ddot\theta=\frac l2R\sin\theta}.
$$

また、接触条件から $y_G=(l/2)\cos\theta$ である。

### III

接触条件を 2 回微分して、

$$
\ddot y_G=-\frac l2(\sin\theta\,\ddot\theta+\cos\theta\,\dot\theta^2).
$$

II の式から $R$ を消去すると、

$$
\boxed{(1+3\sin^2\theta)\ddot\theta
+3\sin\theta\cos\theta\,\dot\theta^2
-\frac{6g}{l}\sin\theta=0}.
$$

### IV

初期速度を零に近づける極限では $\dot x_G=0$。力学的エネルギー保存より、

$$
\frac12M\left(\frac l2\sin\theta\,\dot\theta\right)^2
+\frac12I\dot\theta^2
=\frac{Mgl}{2}(1-\cos\theta),
$$

すなわち

$$
\dot\theta^2=\frac{12g(1-\cos\theta)}{l(1+3\sin^2\theta)}.
$$

$\theta\to\pi/2$ において、

$$
\boxed{\omega=\dot\theta=\sqrt{\frac{3g}{l}}}\quad\text{（時計回り）}.
$$

$x_B=x_G+(l/2)\sin\theta$, $y_B=l\cos\theta$ だから、

$$
\boxed{\boldsymbol v_B=(0,-\sqrt{3gl})}.
$$

### V

III、IV の結果を $R=Mg+M\ddot y_G$ に代入する。$c=\cos\theta$ と置けば、

$$
\boxed{R=Mg\frac{3c^2-6c+4}{(4-3c^2)^2}
=Mg\frac{3(c-1)^2+1}{(4-3c^2)^2}>0}
\qquad(0\le\theta\le\pi/2).
$$

垂直抗力は常に正であり、A は水平面から離れない。

