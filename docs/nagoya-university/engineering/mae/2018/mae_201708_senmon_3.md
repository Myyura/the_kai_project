---
sidebar_label: "2017年8月実施 専門部門 問題3（機械力学）"
tags:
  - Nagoya-University
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Beats-in-Coupled-Oscillators
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

**問題3.**

**(1)** ばねとダンパが接続された質量 $m$ の台車を図1に示す。ばねとダンパの質量や，台車と地面との間の摩擦は，無視できる。$k_1,k_2$ はばね定数，$c_1,c_2$ は粘性減衰係数である。$u_1,y_1,y_2$ は変位であり，台車が静止しているとき変位は全て0とする。

![図1 ばねとダンパに接続された台車](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_3_original_figure_1.png)

**1)** $u_1$ と $y_2$ を0に固定したとき，台車の運動方程式を示せ。

**2)** 問1)で求めた運動方程式の特性方程式から特性根を示せ。また，減衰比は1未満と仮定し，特性根から自由振動の減衰固有角振動数と減衰比を求めよ。

**3)** $u_1$ と $y_2$ を0に固定しないとき，台車の運動方程式を示せ。

**4)** $y_2$ を0に固定しないとき，$u_1=A\sin(\omega t)$ を加えた。ここで，$A$ と $\omega$ は正の定数，$t$ は時刻である。$y_1$ の強制振動解の振幅を示せ。

**(2)** 伸縮とねじりの振動が同時に生じるばね振り子を図2に示す。釣り合いの位置からみて，伸縮の変位を $y$ で表し，ねじり角を $\theta$ で表す。このとき運動方程式は

$$
\begin{cases}
m\ddot y+k_yy+k_d\theta=0,\\
I\ddot\theta+k_dy+k_\theta\theta=0
\end{cases}
$$

で表されるとする。ここで，$m$ はおもりの質量，$I$ はねじり振動軸まわりのおもりの慣性モーメント，$k_y$ は伸縮のばね定数，$k_\theta$ はねじりのばね定数を表す。ばねは伸縮するとねじれるため，$k_d$ は伸縮とねじりとの連成を表す定数である。なお $k_d^2<k_yk_\theta$ であり，また $k_y$ と $k_\theta$ は

$$
\sqrt{\frac{k_y}{m}}=\sqrt{\frac{k_\theta}{I}}=\omega_n
\qquad(\omega_n\text{は定数})
$$

を満たすとする。

![図2 伸縮とねじりが連成するばね振り子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_3_original_figure_2.png)

**1)** 与えられた運動方程式をもとに特性方程式を示せ。

**2)** ばね振り子の固有角振動数を全て求めよ。解は $m,I,k_d,\omega_n$ を用いて表せ。

**3)** 伸縮の自由振動を観察したところ，振幅が徐々に小さくなっていき，振幅がほぼ0になると続いて徐々に大きくなり，ある程度大きくなると再び徐々に小さくなるという現象が見られた。うなりと考えられるこの現象の周期 $T$ を求めよ。

**4)** $k_d^2\ll k_yk_\theta$ の場合，$T\gg\dfrac{2\pi}{\omega_n}$ となることを示せ。

### 题目描述

**问题3.**

**(1)** 图1为连接了弹簧和阻尼器、质量为 $m$ 的小车。忽略弹簧和阻尼器的质量及小车与地面间的摩擦。$k_1,k_2$ 为弹簧常数，$c_1,c_2$ 为黏性阻尼系数。$u_1,y_1,y_2$ 为位移，令小车静止时所有位移均为0。

**1)** 当 $u_1,y_2$ 固定为0时，写出小车的运动方程。

**2)** 由第1)问运动方程的特征方程求特征根。假定阻尼比小于1，由特征根求自由振动的有阻尼固有角频率和阻尼比。

**3)** 当 $u_1,y_2$ 不固定为0时，写出小车的运动方程。

**4)** 当 $y_2$ 不固定为0时，施加 $u_1=A\sin(\omega t)$。其中 $A,\omega$ 为正常数，$t$ 为时间。给出 $y_1$ 的受迫振动解的振幅。

**(2)** 图2为同时发生伸缩与扭转振动的弹簧摆。以平衡位置为基准，用 $y$ 表示伸缩位移，$\theta$ 表示扭转角。设运动方程为

$$
\begin{cases}
m\ddot y+k_yy+k_d\theta=0,\\
I\ddot\theta+k_dy+k_\theta\theta=0.
\end{cases}
$$

其中 $m$ 为重物质量，$I$ 为重物绕扭振轴的转动惯量，$k_y$ 为伸缩弹簧常数，$k_\theta$ 为扭转弹簧常数。弹簧伸缩时也会扭转，$k_d$ 为表示伸缩与扭转耦合的常数。设 $k_d^2<k_yk_\theta$，且 $k_y,k_\theta$ 满足

$$
\sqrt{\frac{k_y}{m}}=\sqrt{\frac{k_\theta}{I}}=\omega_n,
\qquad\omega_n\text{为常数}.
$$

**1)** 根据给定运动方程写出特征方程。

**2)** 求弹簧摆的全部固有角频率，用 $m,I,k_d,\omega_n$ 表示。

**3)** 观察伸缩自由振动时，发现振幅逐渐减小至接近0后又逐渐增大，增大到一定程度后又逐渐减小。将此现象视为拍振，求其周期 $T$。

**4)** 当 $k_d^2\ll k_yk_\theta$ 时，证明 $T\gg\dfrac{2\pi}{\omega_n}$。

## **Kai**

### (1)

#### 1), 2)

$$
\boxed{m\ddot y_1+c_1\dot y_1+(k_1+k_2)y_1=0}.
$$

特性根と振動諸量は

$$
\boxed{s=-\frac{c_1}{2m}\pm i\frac{\sqrt{4m(k_1+k_2)-c_1^2}}{2m}},
$$

$$
\boxed{\omega_d=\sqrt{\frac{k_1+k_2}{m}-\frac{c_1^2}{4m^2}}},\qquad
\boxed{\zeta=\frac{c_1}{2\sqrt{m(k_1+k_2)}}}.
$$

#### 3)

台車および質量のない接続点の力のつり合いから

$$
\boxed{m\ddot y_1+c_1\dot y_1+(k_1+k_2)y_1-k_2y_2=k_1u_1+c_1\dot u_1},
$$

$$
\boxed{c_2\dot y_2+k_2y_2=k_2y_1}.
$$

#### 4)

$s=i\omega$ として後式から $Y_2=k_2Y_1/(k_2+c_2s)$ を消去すると

$$
\frac{Y_1}{U_1}=
\frac{(k_1+c_1s)(k_2+c_2s)}{(ms^2+c_1s+k_1+k_2)(k_2+c_2s)-k_2^2}.
$$

従って定常振幅は

$$
\boxed{
A\frac{\sqrt{(k_1^2+\omega^2c_1^2)(k_2^2+\omega^2c_2^2)}}{
\sqrt{\begin{gathered}\{k_2(k_1-m\omega^2)-\omega^2c_1c_2\}^2\\
+\omega^2\{c_2(k_1+k_2-m\omega^2)+c_1k_2\}^2\end{gathered}}}
}.
$$

### (2)

#### 1), 2)

調和解を代入した係数行列の行列式をゼロにして

$$
\boxed{(k_y-m\omega^2)(k_\theta-I\omega^2)-k_d^2=0}.
$$

$\delta=|k_d|/\sqrt{mI}$ とおくと、大小順に

$$
\boxed{\omega_-=\sqrt{\omega_n^2-\delta},\qquad
\omega_+=\sqrt{\omega_n^2+\delta}}.
$$

$k_d^2<k_yk_\theta$ によりいずれも実数である。$k_d$ の符号はモードの位相関係を変えるが、固有振動数の集合は変えない。

#### 3)

両モードが励起される場合のうなり周期は

$$
\boxed{T=\frac{2\pi}{\omega_+-\omega_-}}
\qquad(k_d\ne0).
$$

例えば $\cos\omega_-t+\cos\omega_+t=2\cos[(\omega_+-\omega_-)t/2]\cos[(\omega_++\omega_-)t/2]$ であり、振幅の絶対値が繰り返す周期が上式である。$k_d=0$ では両周波数が一致し、有限周期のうなりは生じない。

#### 4)

弱い連成では $\omega_+-\omega_-\simeq\delta/\omega_n$ なので

$$
\boxed{T\simeq\frac{2\pi\omega_n\sqrt{mI}}{|k_d|}},\qquad
\boxed{\frac{T}{2\pi/\omega_n}\simeq\frac{\sqrt{k_yk_\theta}}{|k_d|}\gg1}.
$$

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 4ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
