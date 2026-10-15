---
sidebar_label: "2019年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Gyroscopic-Precession
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 九州大学 工学府 機械系専攻 2019年度 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

摩擦のない水平面上に、半径 $R$、質量 $m$、厚さを無視できる均質な円板 A、B と、その中心に垂直かつ剛に取り付けられた質量を無視できる長さ $d$ の軸からなる剛体がある。両円板は常に水平面に接触し、軸のまわりに一定角速度 $\alpha$、さらに重心 G を通る鉛直軸のまわりに一定角速度 $\beta$ で回転する。

G を原点、円板 B の中心へ向かう水平方向を $z$、鉛直上向きを $x$ とする直交座標系 G–$xyz$ をとる。この座標系自身も $x$ 軸まわりに角速度 $\beta$ で回転する。重力加速度を $g$ とする。ベクトル・テンソルはすべてこの座標系の成分で答えよ。各軸の単位ベクトルを $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$ としてよい。（50 点）

![二円板と回転座標系（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/dynamics-1-original.png)

1. 座標系の角速度 $\boldsymbol\Omega$ と剛体の角速度 $\boldsymbol\omega$ を求めよ。
2. G に関する慣性テンソルを $I_G=\operatorname{diag}(I,I,J)$ と書くとき、$I,J$ を求めよ。円板一個の極慣性モーメントは $I_p=mR^2/2$ である。平行軸・直交軸の定理に注意せよ。
3. G に関する角運動量 $\boldsymbol L$ を求めよ。
4. G まわりの運動方程式から、各軸まわりの力のモーメント $M_x,M_y,M_z$ を求めよ。一般のベクトルについて $d\boldsymbol P/dt=d^*\boldsymbol P/dt+\boldsymbol\Omega\times\boldsymbol P$ を用いてよい。$d^*/dt$ は回転座標系で観測する時間微分である。
5. 水平面から A、B に作用する垂直抗力 $N_A,N_B$ を上向き正として求めよ。

#### 题目描述

两个质量各为 $m$、半径 $R$ 的薄圆盘由长 $d$ 的无质量刚轴连接，在无摩擦水平面上始终保持接触。刚体绕自身轴以 $\alpha$ 转动，同时绕质心的竖直轴以 $\beta$ 转动。随动坐标的 $x$ 轴竖直向上，$z$ 轴由质心指向 B。求坐标系与刚体的角速度、质心惯性张量、角动量、外力矩，以及两盘所受法向力。给定单盘极惯性矩 $mR^2/2$，向量均用随动坐标分量表示。

## **Kai**

### (1)

$$
\boxed{\boldsymbol\Omega=\beta\boldsymbol e_x,\qquad
\boldsymbol\omega=\beta\boldsymbol e_x+\alpha\boldsymbol e_z.}
$$

### (2)

円板一個の直径まわりの慣性モーメントは $mR^2/4$ である。したがって

$$
\boxed{I=2\left(\frac{mR^2}{4}+m\frac{d^2}{4}\right)
=\frac{m(R^2+d^2)}2,\qquad J=2\frac{mR^2}{2}=mR^2.}
$$

### (3)

$$
\boxed{\boldsymbol L=I_G\boldsymbol\omega
=\frac{m(R^2+d^2)}2\beta\boldsymbol e_x+mR^2\alpha\boldsymbol e_z.}
$$

### (4)

回転座標系で $\boldsymbol L$ の成分は一定なので、$d^*\boldsymbol L/dt=0$。よって

$$
\boldsymbol M=\boldsymbol\Omega\times\boldsymbol L
=-mR^2\alpha\beta\boldsymbol e_y,
\qquad\boxed{M_x=M_z=0,\quad M_y=-mR^2\alpha\beta.}
$$

### (5)

重心の鉛直加速度はゼロであり、重力は G に関するモーメントをもたない。したがって

$$
N_A+N_B=2mg,\qquad \frac d2(N_B-N_A)=-mR^2\alpha\beta.
$$

これを解いて

$$
\boxed{N_A=mg+\frac{mR^2\alpha\beta}{d},\qquad
N_B=mg-\frac{mR^2\alpha\beta}{d}.}
$$

両円板が接触し続けるという条件は $R^2|\alpha\beta|\le gd$ に対応する。
