---
sidebar_label: "2012年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2012年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $3m$、長さ $l$ の一様な棒 A と、質量 $m$、長さ $l$ の一様な棒 B がある。棒 A は点 $O_A$ を中心に鉛直下向きに、棒 B は点 $O_B$ を中心に鉛直上向きに支持されている。棒 A、B の鉛直軸からの回転角度を図に示すように $\theta_A,\theta_B$ とし、$\theta_A=\theta_B=0$ のとき棒 A の下端と棒 B の上端は同じ高さにある。棒 A の下端と棒 B の上端はばね定数 $k_1$ のばねで連結され、さらに棒 A の下端はばね定数 $k_2$ のばねで基礎に水平に支持されている。$\theta_A=\theta_B=0$ のとき2つのばねは自然長である。棒の運動は微小とし、重力加速度を $g$ として以下の問いに答えよ。（50点）

**(1)** 棒 A の点 $O_A$ まわりの回転に関する運動方程式を、点 $O_A$ まわりの力のモーメントの関係から求めよ。

**(2)** 棒 B の点 $O_B$ まわりの回転に関する運動方程式を、点 $O_B$ まわりの力のモーメントの関係から求めよ。

**(3)** $k_1=mg/l$ であるとし、$k_2$ を $k_2=\alpha k_1$ と表す。静的平衡点が安定であるための $\alpha$ の条件を求めよ。

**(4)** $k_1=mg/l$、$k_2=k_1/2$ のときの系の運動を説明せよ。

![原題の二本の棒と連結ばね](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_dynamics-2-original.png)

### 题目描述

有一根质量为 $3m$、长度为 $l$ 的均匀杆 A，及一根质量为 $m$、长度为 $l$ 的均匀杆 B。杆 A 以 $O_A$ 为转动中心向竖直下方悬挂，杆 B 以 $O_B$ 为转动中心向竖直上方支承。两杆相对竖直轴的转角如图记为 $\theta_A,\theta_B$。在 $\theta_A=\theta_B=0$ 时，A 的下端与 B 的上端等高。这两端由弹簧常数为 $k_1$ 的弹簧连接，A 的下端还由弹簧常数为 $k_2$ 的弹簧水平连接至基础。在两转角均为零时，两根弹簧均处于原长。杆作微小运动，重力加速度为 $g$。回答下列问题。（50分）

**(1)** 从关于 $O_A$ 点的力矩关系，求杆 A 绕 $O_A$ 转动的运动方程。

**(2)** 从关于 $O_B$ 点的力矩关系，求杆 B 绕 $O_B$ 转动的运动方程。

**(3)** 令 $k_1=mg/l$，并将 $k_2$ 写为 $k_2=\alpha k_1$。求静平衡点稳定所需的 $\alpha$ 条件。

**(4)** 说明 $k_1=mg/l$、$k_2=k_1/2$ 时系统的运动。

## **Kai**

### (1)

両端の水平変位は $l\theta_A,l\theta_B$。$I_A=(3m)l^2/3=ml^2$ より

$$
\boxed{ml^2\ddot\theta_A+
\left[(k_1+k_2)l^2+\frac32mgl\right]\theta_A-k_1l^2\theta_B=0.}
$$

### (2)

$I_B=ml^2/3$ であり、直立棒の重力は不安定化モーメントとなる。

$$
\boxed{\frac13ml^2\ddot\theta_B-k_1l^2\theta_A+
\left(k_1l^2-\frac12mgl\right)\theta_B=0.}
$$

### (3)

剛性行列は

$$
K=mgl\begin{pmatrix}\alpha+5/2&-1\\-1&1/2\end{pmatrix}.
$$

質量行列は正定値なので、全固有振動数が正となる条件は $K$ が正定値であること。右下要素は正であり

$$
\begin{gathered}
\det K=(mgl)^2\left(\frac\alpha2+\frac14\right)>0\\
\Longleftrightarrow\\
\boxed{\alpha>-\frac12.}
\end{gathered}
$$

通常の正のばね定数 $k_2$ はこの条件を満たす。$\alpha=-1/2$ では零固有振動数があり、一般初速度に対してドリフトが生じる。

### (4)

$\alpha=1/2$ は安定領域にある。$z=\omega^2l/g$ とすると

$$
\begin{gathered}
(3-z)(1/2-z/3)-1=0,\\
z_\pm=\frac{9\pm\sqrt{57}}4>0.
\end{gathered}
$$

よって二つの固有モードの振動が重ね合わさる。

$$
\boxed{\begin{gathered}
\omega_\pm=\sqrt{\frac gl\frac{9\pm\sqrt{57}}4},\\
\boldsymbol\phi_\pm\propto(1,3-z_\pm)^T.
\end{gathered}}
$$

低次では両棒端が同方向、高次では反対方向に動く。一般解は各モードの正弦・余弦の線形結合である。
