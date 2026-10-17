---
sidebar_label: "2014年8月実施 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図に示すように、空間内に固定された点 O に長さ $L$、質量 $3m$ の一様な細い棒が取り付けられている。棒は点 O を支点として鉛直面内を回転できるものとして、水平方向に対する棒の角度を $\theta$（反時計回りを正）とする。また、点 O には $\theta=0$ の状態を自然長とする回転ばね定数 $\alpha$（ただし $\alpha>0$）のばねが取り付けられており、棒に対して点 O まわりに $-\alpha\theta$ の復元トルクが働く。さらに、棒に対して点 O まわりに外部からの入力トルク $\tau$ を与えられるものとする。棒の他端 P には、ばね定数 $k$（ただし $k>0$）、自然長 $\ell_N$ のばねでつながれた質量 $m$ のおもりが吊り下げられている。おもりは常に点 P の鉛直下方にあるものとする。

このとき、$\theta=0$ で棒とおもりが静止した状態を保つには、入力トルク $\tau$ として一定値 $\tau_0$ を与えることが必要である。この状態でのばねの長さを $\ell_0$ とし、平衡状態の近傍での微小運動について、以下の問いに答えなさい。ただし、摩擦、空気抵抗、おもりの大きさ、ばねの質量は無視できるものとし、重力加速度の大きさを $g$ とする。

(1) $\tau_0$ および $\ell_0$ を求めなさい。

(2) ばねの長さを $\ell$ とし、$\bar\ell=\ell-\ell_0$ として、微小運動の運動方程式を求めなさい。

(3) $\tau=\tau_0+A\sin(\omega t)$ という入力トルクを与えたところ、棒は $\theta=0$ で静止し、おもりの運動は $\bar\ell(t)=B\sin(\omega t+\phi)$ で表される定常振動となったとする。このときの $\omega$ を求めなさい。ただし、$A,B,\omega,\phi$ は実数で、$A>0$、$\omega>0$ とし、$t$ は時刻とする。

(4) $\tau=\tau_0-\beta\theta$（ただし $\beta>0$）という入力トルクを与えるとする。基準振動の一つにおいて、$\bar\ell$ の振幅が $\theta$ の振幅の $\sqrt{2}L$ 倍となるように $\beta$ を定め、そのときの固有角振動数を求めなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_dynamics_1_original_figure_1.png)

#### 题目描述

问题1（使用红色答题纸）

如图，一根长为 $L$、质量为 $3m$ 的均匀细杆安装于空间中的固定点 O，可绕 O 点在竖直平面内转动。杆相对于水平方向的夹角为 $\theta$，以逆时针为正。O 点装有扭转弹簧常数为 $\alpha$（$\alpha>0$）的扭簧，以 $\theta=0$ 为自然状态，产生绕 O 点作用于杆的恢复力矩 $-\alpha\theta$。还可从外部施加绕 O 点的输入力矩 $\tau$。杆另一端 P 通过一根弹簧常数为 $k$（$k>0$）、自然长度为 $\ell_N$ 的弹簧悬挂质量为 $m$ 的重物。假定重物始终位于 P 点的竖直下方。

要使杆与重物在 $\theta=0$ 时保持静止，输入力矩必须取某一恒定值 $\tau_0$。设该状态的弹簧长度为 $\ell_0$，针对平衡状态附近的微小运动回答下列问题。忽略摩擦、空气阻力、重物的大小和弹簧质量，重力加速度的大小为 $g$。

(1) 求 $\tau_0$ 和 $\ell_0$。

(2) 将弹簧长度记为 $\ell$，令 $\bar\ell=\ell-\ell_0$，求微小运动的运动方程。

(3) 施加输入力矩 $\tau=\tau_0+A\sin(\omega t)$ 后，杆静止于 $\theta=0$，重物作 $\bar\ell(t)=B\sin(\omega t+\phi)$ 所表示的稳态振动。求此时的 $\omega$。其中 $A,B,\omega,\phi$ 为实数，$A>0$、$\omega>0$，$t$ 表示时刻。

(4) 施加输入力矩 $\tau=\tau_0-\beta\theta$（$\beta>0$）。确定 $\beta$，使某一个简正振动模态中 $\bar\ell$ 的振幅为 $\theta$ 振幅的 $\sqrt{2}L$ 倍，并求此时的固有角频率。

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
