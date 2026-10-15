---
sidebar_label: "2015年度 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、長さ $L$、質量 $3m$ の一様な棒 OP の端 O を固定点に回転自由に取り付ける。棒の水平からの反時計回りの角度を $\theta$ とする。O には復元モーメント $-\alpha\theta$ を生じるねじりばね（$\alpha>0$）があり、さらに外力モーメント $\tau$ が作用する。P にはばね定数 $k>0$、自然長 $\ell_N$ のばねを介して質量 $m$ のおもりをつるす。ばねは常に鉛直方向を向くものとする。重力加速度を $g$ とし、摩擦、空気抵抗、おもりの大きさ、ばねの質量を無視する。

1. 棒が水平（$\theta=0$）で静止するときの外力モーメント $\tau_0$ と、ばねの長さ $\ell_0$ を求めよ。
2. ばねの長さを $\ell$ とし、$\bar\ell=\ell-\ell_0$ とおく。水平なつり合い状態付近での微小運動の運動方程式を求めよ。
3. $\tau=\tau_0+A\sin\omega t$（$A>0,\omega>0$）とする。棒が水平のまま静止し、$\bar\ell=B\sin(\omega t+\varphi)$ と振動するときの $\omega$ を求めよ。
4. $\tau=\tau_0-\beta\theta$（$\beta>0$）とする。ある固有振動で、$\bar\ell$ の振幅が $\theta$ の振幅の $\sqrt2L$ 倍になる。このときの $\beta$ と固有角振動数を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2015/mech_201408_dynamics_1-question-fig1.png)

#### 题目描述

图中均匀杆 OP 长 $L$、质量 $3m$，O 点固定且可自由转动。杆相对水平线的逆时针转角为 $\theta$。O 处扭簧产生恢复力矩 $-\alpha\theta$，其中 $\alpha>0$，并受到外加力矩 $\tau$。P 处通过刚度为 $k>0$、自然长度为 $\ell_N$ 的弹簧悬挂质量 $m$ 的物体，弹簧始终保持竖直。重力加速度为 $g$，忽略摩擦、空气阻力、物体尺寸和弹簧质量。

1. 杆水平静止时，求外加力矩 $\tau_0$ 及弹簧长度 $\ell_0$。
2. 弹簧长度为 $\ell$，令 $\bar\ell=\ell-\ell_0$，求水平平衡状态附近的小运动方程。
3. $\tau=\tau_0+A\sin\omega t$，其中 $A,\omega>0$。若杆始终水平静止，而 $\bar\ell=B\sin(\omega t+\varphi)$，求 $\omega$。
4. $\tau=\tau_0-\beta\theta$，$\beta>0$。某固有振动中，$\bar\ell$ 的振幅是 $\theta$ 振幅的 $\sqrt2L$ 倍，求 $\beta$ 及固有角频率。

## **Kai**

### (1)

おもりの静的つり合いから

$$
k(\ell_0-\ell_N)=mg,
\qquad
\boxed{\ell_0=\ell_N+\frac{mg}{k}}.
$$

棒には中央に重力 $3mg$、P に下向きのばね力 $mg$ が作用する。O まわりのモーメントのつり合いより

$$
\boxed{\tau_0=\frac{3mgL}{2}+mgL=\frac52mgL}.
$$

### (2)

棒の O まわりの慣性モーメントは $(3m)L^2/3=mL^2$ である。おもりの鉛直上向き座標は $L\sin\theta-\ell$ なので、微小運動の運動エネルギーは

$$
T_2=\frac12mL^2\dot\theta^2
+\frac m2(L\dot\theta-\dot{\bar\ell})^2.
$$

静的つり合いの項を取り除いた位置エネルギーは

$$
U_2=\frac\alpha2\theta^2+\frac k2\bar\ell^2.
$$

よって

$$
\boxed{2mL^2\ddot\theta-mL\ddot{\bar\ell}+\alpha\theta
=\tau-\tau_0},
$$

$$
\boxed{m\ddot{\bar\ell}-mL\ddot\theta+k\bar\ell=0}.
$$

### (3)

$\theta=0$ を第2式へ代入すると

$$
m\ddot{\bar\ell}+k\bar\ell=0.
$$

したがって

$$
\boxed{\omega=\sqrt{\frac km}}.
$$

このとき第1式から $-mL\ddot{\bar\ell}=A\sin\omega t$ となり、

$$
\bar\ell=\frac{A}{kL}\sin\omega t
$$

が両式を満たす。すなわち $B=A/(kL)$、$\varphi=0$ と選べる。

### (4)

$K_\theta=\alpha+\beta$ とおく。$\theta=\Theta\cos\omega t$、$\bar\ell=X\cos\omega t$ を代入すると

$$
\begin{pmatrix}
K_\theta-2mL^2\omega^2&mL\omega^2\\
mL\omega^2&k-m\omega^2
\end{pmatrix}
\begin{pmatrix}\Theta\\X\end{pmatrix}=0.
$$

振幅の条件は $|X/\Theta|=\sqrt2L$ である。符号付きの比を $r=X/(L\Theta)=\pm\sqrt2$ とおけば、第2行より

$$
\omega^2=\frac km\frac{r}{r-1}.
$$

第1行から

$$
\frac{K_\theta}{kL^2}
=\frac{r(2-r)}{r-1}=2.
$$

したがって

$$
\boxed{\beta=2kL^2-\alpha}.
$$

$\beta>0$ が要求されるので、実現条件は $\alpha<2kL^2$ である。2 つの固有角振動数は

$$
\boxed{\omega_-=\sqrt{(2-\sqrt2)\frac km}},\qquad
\boxed{\omega_+=\sqrt{(2+\sqrt2)\frac km}}.
$$

低周波側では $X/\Theta=-\sqrt2L$、高周波側では $X/\Theta=+\sqrt2L$ となる。したがって、いずれも振幅の大きさに関する条件を満たす。
