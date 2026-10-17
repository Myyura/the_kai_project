---
sidebar_label: "2019年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2019年8月実施 機械力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図のように質量 $m$、半径 $r$、中心軸まわりの慣性モーメント $mr^2/2$ の円柱 1 と円柱 2 が水平な床の上にあり、ばね定数 $k$ のばねで円柱 1 と円柱 2 の中心軸が結合されている。$t=0$ でばねは自然長であり、$t>0$ のとき円柱 1 にトルク $N=N_0+\bar N\sin\Omega t$（$N_0$ および $\bar N$ は定数）がかかるものとする。円柱 1 の水平方向変位を $x_1$、回転角を $\theta_1$ とし、円柱 2 の水平方向変位を $x_2$、回転角を $\theta_2$ とする。円柱と床は滑らないものとして、以下の問いに答えよ。（50点）

**(1)** 円柱 1 に床からかかる摩擦力を $f_1$、円柱 2 にかかる摩擦力を $f_2$ とする。$f_1,f_2$ の方向を図中に記入し、円柱 1、円柱 2 の並進の運動方程式を求めよ。

**(2)** 円柱 1、円柱 2 に関する回転の運動方程式を求めよ。

**(3)** $N=0$ のときの固有角振動数 $\omega_1,\omega_2\ (\omega_1<\omega_2)$ と $x_1,x_2$ に関する固有モード $\boldsymbol X_1,\boldsymbol X_2$ を求めよ。

**(4)** $\boldsymbol X_1,\boldsymbol X_2$ に関するモード座標 $\xi_1,\xi_2$ を定義し、各モード座標に関する非連成の方程式を求めよ。

**(5)** 時刻 $t$ における重心の変位 $x_G(t)$ を求めよ。ただし、$x_1(0)=x_2(0)=0,\ \dot x_1(0)=\dot x_2(0)=0$ とする。

![二つの円柱とトルク・変位の正方向の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_dynamics_2_figure_1.png)

#### 题目描述

如图，圆柱 1、2 均有质量 $m$、半径 $r$、绕中心轴的转动惯量 $mr^2/2$，置于水平地面上，两中心轴由弹簧常数为 $k$ 的弹簧连接。$t=0$ 时弹簧为自然长度，$t>0$ 时圆柱 1 受到转矩 $N=N_0+\bar N\sin\Omega t$，其中 $N_0,\bar N$ 为常数。圆柱 1 的水平位移和转角分别为 $x_1,\theta_1$，圆柱 2 的水平位移和转角分别为 $x_2,\theta_2$。圆柱与地面不滑动。回答下列问题。（50分）

**(1)** 地面对圆柱 1、2 的摩擦力分别为 $f_1,f_2$。在图中标明 $f_1,f_2$ 的方向，并求两圆柱平动的运动方程。

**(2)** 求两圆柱转动的运动方程。

**(3)** 当 $N=0$ 时，求固有角频率 $\omega_1,\omega_2\ (\omega_1<\omega_2)$，以及关于 $x_1,x_2$ 的固有振型 $\boldsymbol X_1,\boldsymbol X_2$。

**(4)** 定义对应于 $\boldsymbol X_1,\boldsymbol X_2$ 的模态坐标 $\xi_1,\xi_2$，求各模态坐标的解耦方程。

**(5)** 求时刻 $t$ 的重心位移 $x_G(t)$。初始条件为 $x_1(0)=x_2(0)=0,\ \dot x_1(0)=\dot x_2(0)=0$。

## **Kai**

### (1)

摩擦力 $f_1,f_2$ は右向きを正として定義する。実際の向きは得られた値の符号で決まる。

![円柱に作用する力と正方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_dynamics2.svg)

$$
\boxed{\begin{gathered}
m\ddot x_1=-k(x_1-x_2)+f_1,\\
m\ddot x_2=k(x_1-x_2)+f_2
\end{gathered}}.
$$

### (2)

$I=mr^2/2$、$x_i=r\theta_i$ より

$$
\boxed{\frac{mr^2}{2}\ddot\theta_1=N-rf_1,\qquad
\frac{mr^2}{2}\ddot\theta_2=-rf_2}.
$$

摩擦力を消去すると

$$
\frac{3m}{2}\binom{\ddot x_1}{\ddot x_2}
+k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\binom{x_1}{x_2}
=\binom{N/r}{0}.
$$

なお $f_1=2N/(3r)+k(x_1-x_2)/3$、$f_2=-k(x_1-x_2)/3$ である。

### (3)

$$
\det\left[k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}
-\frac{3m\omega^2}{2}I\right]=0
$$

より

$$
\begin{gathered}
\boxed{\omega_1=0,\quad\boldsymbol X_1=\binom11},\\
\boxed{\omega_2=2\sqrt{\frac{k}{3m}},\quad\boldsymbol X_2=\binom1{-1}}.
\end{gathered}
$$

$\omega_1=0$ はばねを伸縮させない剛体並進モードである。

### (4)

$$
\begin{gathered}
\binom{x_1}{x_2}=\xi_1\binom11+\xi_2\binom1{-1},\\
\xi_1=\frac{x_1+x_2}{2},\\
\xi_2=\frac{x_1-x_2}{2}.
\end{gathered}
$$

二つの運動方程式を加減して

$$
\boxed{3m\ddot\xi_1=\frac Nr,\qquad
3m\ddot\xi_2+4k\xi_2=\frac Nr}.
$$

### (5)

重心変位は $x_G=\xi_1$。初期条件 $x_G(0)=\dot x_G(0)=0$ の下で積分すると

$$
\boxed{x_G(t)=\frac{N_0t^2}{6mr}
+\frac{\bar N}{3mr\Omega^2}(\Omega t-\sin\Omega t)}.
$$

重心の絶対位置は初期位置にこの変位を加えたものである。$\Omega=0$ では極限を取り、第2項は $0$ となる。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
