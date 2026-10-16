---
sidebar_label: "2016年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2016年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$、線密度 $\rho$、張力 $T$ の一様な弦と、質量 $m$、長さ $2l$ の細い一様な剛体棒が直線状に結合され、水平面内で微小振動する。弦の左端および棒の右端は壁に取り付けられ、棒の右端は摩擦なく自由に回転できる。弦の左端 O を原点、長手方向を $x$ とし、変位を $u(x,t)$ とする。棒の重心に $x$ と直交する周期外力 $f\cos\omega t$ が作用する。重力と張力の変動は無視する。（50 点）

![弦と右端支持の剛体棒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_dynamics-3-original.png)

1. 弦の波動方程式を導出せよ。
2. $x=0,l$ における境界条件を示せ。棒の重心まわりの慣性モーメント $I_G=ml^2/3$ を用い、右端まわりの回転方程式を考えてよい。
3. 強制振動の定常応答を求め、棒が静止する加振角振動数 $\omega\ne0$ を示せ。
4. 棒の質量を無視した 1 次共振周波数が、無視しない場合の 2 倍となるとき、$m$ を $\rho,l$ で表せ。

#### 题目描述

长 $l$ 的弦与长 $2l$、质量 $m$ 的杆相连，弦左端固定、杆右端铰支，在水平面内微振动。杆中心受横向周期力 $f\cos\omega t$。弦张力 $T$ 视为恒定、线密度为 $\rho$，忽略重力。求波动方程、包含杆转动的端点条件、稳态响应及杆不动的反共振频率；再求无质量杆模型的一阶频率恰为有质量杆模型两倍时的 $m$。

## **Kai**

### (1)

微小弦要素の横方向の運動方程式より

$$
\boxed{\rho u_{tt}=T u_{xx},\qquad c=\sqrt{T/\rho}.}
$$

### (2)

左端では $\boxed{u(0,t)=0}$。右端変位を $q(t)=u(l,t)$ とする。棒の右端に関する慣性モーメントは $I_O=I_G+ml^2=4ml^2/3$、回転角は $\theta=q/(2l)$ である。

弦が棒に与える力は一次まで $(-T,-Tu_x(l,t))$、棒の左端の支点からの位置は $(-2l,q)$ である。そのため、張力による復元モーメントには横成分だけでなく、水平成分による $Tq$ も含まれる。回転方程式は

$$
\frac{4ml^2}{3}\ddot\theta
=fl\cos\omega t-2lT u_x(l,t)-Tq.
$$

したがって

$$
\boxed{\frac m3u_{tt}(l,t)+T u_x(l,t)
+\frac{T}{2l}u(l,t)=\frac f2\cos\omega t.}
$$

### (3)

$\kappa=\omega/c$ とおき、$u(x,t)=A\sin(\kappa x)\cos\omega t$ を代入すると

$$
\boxed{u(x,t)=
\frac{(f/2)\sin(\kappa x)}
{T\kappa\cos(\kappa l)+\left(T/(2l)-m\omega^2/3\right)\sin(\kappa l)}
\cos\omega t.}
$$

分母がゼロの場合は共振であり、有界な調和定常解はない。棒が静止する条件は $u(l,t)=0$、すなわち

$$
\boxed{\omega=\frac{n\pi}{l}\sqrt{\frac T\rho},\qquad n=1,2,\ldots.}
$$

このとき分母は $T\kappa(-1)^n\ne0$ である。

### (4)

$z=\omega l/c$、$\mu=m/(\rho l)$ とおくと固有振動数の条件は

$$
z\cos z+\left(\frac12-\frac\mu3z^2\right)\sin z=0.
$$

$m=0$ の最小正根 $z_0$ は

$$
z_0\cot z_0=-\frac12,\qquad
\frac\pi2<z_0<\pi,\qquad z_0\simeq1.8365972.
$$

有質量の 1 次振動数がその半分なら $z=z_0/2$ なので

$$
\boxed{m=3\rho l\left[
\frac{\cot(z_0/2)}{z_0/2}+\frac{1}{2(z_0/2)^2}\right]
\simeq4.2752051\,\rho l.}
$$

張力の水平成分による幾何剛性 $T/(2l)$ をさらに省略する近似を採る場合は、(2) のその項を除く。この近似では無質量時の端が自由端となり、$z_0=\pi/2$、$m=12\rho l/\pi$ を得る。固定支点まわりに回転する棒の力のモーメントを一次まで保持するモデルとは区別する必要がある。
