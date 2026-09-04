---
sidebar_label: 2016年3月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Physics.Mechanics
  - Mathematics.Calculus.Triple-Integral
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 基礎科目 問題5 物理基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 5 に示すように，下向きに一定の力 $Mg$ を受けている半径 $a$ の等方的な剛体球が $\theta$ だけ傾いた面上で静止させられている。ここで，$M$ は球の質量，$g$ は重力加速度である。球は時刻 $t=0$ で静止状態から解放される。球と面との間の摩擦力 $F(\ne0)$ はトルク $T=Fa$ を生じさせる。その結果，球は面上を転がっていく。球は面上で滑らないと仮定し，解放後の球の運動に対する以下の問に答えよ。$\mu,v,\omega,I$ を，それぞれ，球と面の間の静止摩擦係数，球の重心の速さ，転がりの角速度の大きさ，転がりに対する球の慣性モーメントとせよ。

(1) $\omega$ は $v$ に比例する。$v/\omega$ の表現を求めよ。

(2) 静止位置から測られた球の下向きの変位距離を $h$ とする。（Fig. 5 を見よ。）球の全運動エネルギーは $E=\frac12Mv^2+\frac12I\omega^2$ で与えられる。$E$ を $h$ の関数として表せ。

(3) トルク $T$ は $T=I\frac{d\omega}{dt}$ で与えられる。$T$ の表現を求めよ。

(4) 面から球に対する垂直抗力 $N$ を求めよ。

(5) $F=T/a$ が球と面の間の摩擦力の最大値と等しくなる傾斜角 $\theta=\theta_{\mathrm{Max}}$ を決めよ。$\theta>\theta_{\mathrm{Max}}$ の傾斜角の面上では球は滑る。

(6) 球が均質と仮定して，$I$ を求めよ。ここで，デカルト（Cartesian）座標系に対し剛体の慣性テンソルの各成分 $I_{ij}$（$i,j=1,2,3$）は以下で与えられる。
$$
I_{ij}=\int\rho(x_1,x_2,x_3)\left[\delta_{ij}\sum_{k=1}^3x_k^2-x_ix_j\right]dx_1dx_2dx_3.
$$
ここで，$x_i$ は座標 $(x_1,x_2,x_3)$ の $i$ 成分，$\rho(x_1,x_2,x_3)$ は剛体の質量密度，$\delta_{ij}$ はクロネッカーのデルタである。

### 题目描述

质量为 $M$、半径为 $a$ 的各向同性刚体球置于倾角为 $\theta$ 的斜面上。球从静止释放，在不打滑的条件下滚动。记球心速率为 $v$，角速率为 $\omega$，绕球心转轴的转动惯量为 $I$，摩擦系数为 $\mu$，重力加速度为 $g$；球心下降高度为 $h$。

1. 求 $v/\omega$。
2. 用 $h$ 表示总动能 $E=Mv^2/2+I\omega^2/2$。
3. 摩擦力矩 $T=I\,d\omega/dt$，求 $T$。
4. 求斜面对球的支持力 $N$。
5. 求恰好开始打滑的倾角 $\theta_{\max}$。
6. 若球均匀，利用惯性张量的积分定义求 $I$：
   

$$
I_{ij}=\int\rho\left(\sum_kx_k^2\delta_{ij}-x_ix_j\right)dV.
$$

## **Kai**

### (1)–(2)

纯滚动条件为 $v=a\omega$，所以 $\boxed{v/\omega=a}$。静摩擦力的接触点瞬时速度为零，不做功，故

$$
\boxed{E=Mgh,\qquad v^2=\frac{2Mgh}{M+I/a^2}.}
$$

### (3)–(4)

设沿坡向下加速度为 $A$，静摩擦力大小为 $F$（沿坡向上），则

$$
MA=Mg\sin\theta-F,\qquad Fa=I\frac Aa.
$$

消去 $F$，得

$$
A=\frac{Ma^2g\sin\theta}{Ma^2+I},\qquad
\boxed{T=Fa=\frac{IMag\sin\theta}{Ma^2+I}.}
$$

法向无加速度，故 $\boxed{N=Mg\cos\theta}$。

### (5)

由 $F=\mu N$，

$$
\frac{IMg\sin\theta_{\max}}{Ma^2+I}=\mu Mg\cos\theta_{\max},
$$

因此

$$
\boxed{\theta_{\max}=\arctan\!\left[\mu\left(1+\frac{Ma^2}{I}\right)\right].}
$$

### (6)

球对称性使所有非对角项为零，三个对角项相等。令 $\rho=3M/(4\pi a^3)$，则

$$
I=I_{zz}=\rho\int_0^a r^4dr\int_0^\pi\sin^3\phi\,d\phi\int_0^{2\pi}d\varphi
=\frac{8\pi\rho a^5}{15}=\boxed{\frac25Ma^2}.
$$

均匀球于是满足 $A=5g\sin\theta/7$、$T=2Mag\sin\theta/7$，以及 $\theta_{\max}=\arctan(7\mu/2)$。
