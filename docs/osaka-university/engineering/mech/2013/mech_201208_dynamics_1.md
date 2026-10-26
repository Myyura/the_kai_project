---
sidebar_label: "2012年8月実施 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 大阪大学 工学研究科 機械工学専攻 2012年8月実施 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図に示すように、質量 $m$、長さ $\ell$ の一様な細い棒の上端が、水平に置かれたバネ定数 $k/2$ の2つのバネに取り付けられており、バネの他端は壁に固定されている。棒は上端を支点として紙面に平行な鉛直面内で自由に回転でき、棒の回転運動の支点は水平方向のみの運動が可能なように滑らかに束縛されている。このとき、以下の問いに答えなさい。ただし、重力加速度の大きさは $g$ とする。また、棒に垂直で、かつ、重心を通る軸周りの棒の慣性モーメントは $I=\ell^2m/12$ で与えられる。

(1) 平衡の位置からの支点の水平方向の変位 $x$ および棒の振れ角 $\theta$ を用いて、棒の重心の座標 $(X,Y)$ および速度 $(\dot X,\dot Y)$ をそれぞれ表しなさい。ただし、座標 $(X,Y)$ は平衡の位置における棒の重心位置を原点にとる。

(2) $x$ および $\theta$ を用いて運動エネルギー $T$ とポテンシャル $U$ を表しなさい。

(3) 平衡の位置からの微小運動に対して、ラグランジアン $L$ を求めなさい。

(4) 平衡の位置からの微小運動に対する運動方程式を求めなさい。

(5) $\omega_0$ を定数として、$k/m=g/\ell=\omega_0^2$ の関係が成り立つとき、平衡の位置からの微小運動に対する固有角振動数 $\omega_1$、$\omega_2$（$\omega_1<\omega_2$）を $\omega_0$ を用いて表しなさい。また、固有角振動数 $\omega_1$ のときの基準振動モードにおける振幅比を求めなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2013/mech_201208_dynamics_1_original_figure_1.png)

### 题目描述

问题1（使用红色答题纸）

如图，质量为 $m$、长度为 $\ell$ 的均匀细杆，其上端连接两根水平放置、弹簧常数均为 $k/2$ 的弹簧，弹簧的另一端固定于墙。杆可绕上端支点在平行于纸面的竖直平面内自由转动，该转动支点受到光滑约束，只能沿水平方向移动。重力加速度的大小为 $g$。杆绕过质心且垂直于杆的轴的转动惯量为 $I=\ell^2m/12$。回答下列问题。

(1) 用支点相对平衡位置的水平位移 $x$ 与杆的摆角 $\theta$，分别表示杆质心的坐标 $(X,Y)$ 和速度 $(\dot X,\dot Y)$。坐标原点取在杆处于平衡位置时的质心处。

(2) 用 $x$、$\theta$ 表示动能 $T$ 和势能 $U$。

(3) 求平衡位置附近微小运动的拉格朗日量 $L$。

(4) 求平衡位置附近微小运动的运动方程。

(5) 设 $\omega_0$ 为常数，且满足 $k/m=g/\ell=\omega_0^2$。用 $\omega_0$ 表示平衡位置附近微小运动的固有角频率 $\omega_1$、$\omega_2$（$\omega_1<\omega_2$），并求固有角频率为 $\omega_1$ 时相应简正振动模态的振幅比。

## **Kai**

### (1)

重心は上端から棒に沿って $\ell/2$ の位置にある。したがって

$$
\boxed{X=x+\frac\ell2\sin\theta},\qquad
\boxed{Y=\frac\ell2(1-\cos\theta)},
$$

$$
\boxed{\dot X=\dot x+\frac\ell2\cos\theta\,\dot\theta},\qquad
\boxed{\dot Y=\frac\ell2\sin\theta\,\dot\theta}.
$$

### (2)

重心の並進と重心まわりの回転を加えると

$$
\begin{aligned}
T&=\frac m2(\dot X^2+\dot Y^2)
+\frac12\frac{m\ell^2}{12}\dot\theta^2\\
&=\boxed{\frac m2\dot x^2
+\frac{m\ell}{2}\cos\theta\,\dot x\dot\theta
+\frac{m\ell^2}{6}\dot\theta^2}.
\end{aligned}
$$

つり合い位置を位置エネルギーの基準に選ぶ。左右のばねのエネルギーを加えれば

$$
\boxed{U=\frac k2x^2+\frac{mg\ell}{2}(1-\cos\theta)}.
$$

### (3)

変位・速度の二次まで残すと

$$
\boxed{\mathcal L=
\frac m2\dot x^2+\frac{m\ell}{2}\dot x\dot\theta
+\frac{m\ell^2}{6}\dot\theta^2
-\frac k2x^2-\frac{mg\ell}{4}\theta^2}.
$$

### (4)

Euler–Lagrange 方程式より

$$
\boxed{m\ddot x+\frac{m\ell}{2}\ddot\theta+kx=0},
$$

$$
\boxed{\frac{m\ell}{2}\ddot x+\frac{m\ell^2}{3}\ddot\theta
+\frac{mg\ell}{2}\theta=0}.
$$

### (5)

$x=X_0\cos\omega t$、$\theta=\Theta_0\cos\omega t$ とおく。固有値条件は

$$
\det\begin{pmatrix}
k-m\omega^2&-m\ell\omega^2/2\\
-m\ell\omega^2/2&mg\ell/2-m\ell^2\omega^2/3
\end{pmatrix}=0.
$$

$k/m=g/\ell=\omega_0^2$ を用いて整理すると

$$
\omega^4-10\omega_0^2\omega^2+6\omega_0^4=0.
$$

よって

$$
\boxed{\omega_1=\omega_0\sqrt{5-\sqrt{19}}},\qquad
\boxed{\omega_2=\omega_0\sqrt{5+\sqrt{19}}}.
$$

低い方のモードについて第1行から

$$
\frac{X_0}{\Theta_0}
=\frac{\ell\omega_1^2}{2(\omega_0^2-\omega_1^2)}
=\boxed{\frac{1+\sqrt{19}}{6}\ell}.
$$

比は正なので、$x$ と $\theta$ は同位相で振動する。
