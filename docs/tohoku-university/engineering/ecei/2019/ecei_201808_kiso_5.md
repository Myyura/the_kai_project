---
sidebar_label: 2018年8月実施 基礎科目 問題5 物理基礎
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Physics.Mechanics
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 基礎科目 問題5 物理基礎

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

ガスを放出し、質量を失いながら $x$–$y$ 面内を動く、ある物体の運動を考察する。時刻 $t$ における物体の質量 $m$ は次のように書ける。

$$
m=m_0-\int_0^t\alpha(t')\,dt'
$$

ここで $m_0$ は $m$ の初期値、即ち $t=0$ における $m$ であり、$\alpha=-dm/dt$ である。物体の速度を $\boldsymbol v$、放出されたガスの物体に対する相対速度を $\boldsymbol u$ で表す。いま、$\boldsymbol u$ は $\boldsymbol v$ に垂直であり、また $|\boldsymbol u|$ は時間的に不変で初期値 $u_0$ に等しいとする。具体的には、$\boldsymbol v$ を $\boldsymbol v=(v\cos\phi,v\sin\phi)$ と表したとき、$\boldsymbol u$ は $\boldsymbol u=(u_0\sin\phi,-u_0\cos\phi)$ と書けるとする。ここで $v=|\boldsymbol v|$ であり、$\phi$ は $\boldsymbol v$ と $x$ 軸の間の角度である（Fig. 5）。$\alpha,v,\phi$ の初期値としては、$\alpha_0,v_0,\phi_0$ を用いよ。

(1) 時刻 $t$ における物体（質量 $m$、速度 $\boldsymbol v$）は、無限小時間 $\delta t$ の後、二つの部分に分離するとみなせる。一つは質量が減少した物体で、その質量と速度は $m+\delta m$（$\delta m<0$）、$\boldsymbol v+\delta\boldsymbol v$ である。もう一つは放出されたガスで、その質量と速度は $-\delta m$、$\boldsymbol v+\boldsymbol u$ である。即ち、この系の時間 $\delta t$ における運動量変化は

$$
\delta\boldsymbol p=[(m+\delta m)(\boldsymbol v+\delta\boldsymbol v)-\delta m(\boldsymbol v+\boldsymbol u)]-m\boldsymbol v
$$

と書ける。運動方程式 $d\boldsymbol p/dt=0$ から、以下の式を導出せよ。

$$
m\frac{d\boldsymbol v}{dt}=-\alpha\boldsymbol u
$$

(2) $v$ と $\phi$ が以下の関係に従うことを示せ。

$$
v=v_0,\qquad\frac{d\phi}{dt}=\frac{\alpha u_0}{mv_0}
$$

(3) $\alpha$ が時間的に不変であるとする。このとき、$\phi$ を $t$ の関数として示せ。また、物体の軌道を説明せよ。

(4) 物体の軌道が円であるとする。このとき、$\alpha$ を $t$ の関数として示せ。

### 题目描述

物体在 $xy$ 平面中喷气运动，质量 $m(t)=m_0-\int_0^t\alpha(t')\,dt'$，其中 $\alpha=-\dot m>0$。速度 $\boldsymbol v=(v\cos\phi,v\sin\phi)$，排出气体相对物体的速度为 $\boldsymbol u=(u_0\sin\phi,-u_0\cos\phi)$，$u_0>0$ 为常数。初值为 $\alpha_0,v_0,\phi_0$。

(1) 由动量守恒及

$$
\delta\boldsymbol p=(m+\delta m)(\boldsymbol v+\delta\boldsymbol v)-\delta m(\boldsymbol v+\boldsymbol u)-m\boldsymbol v
$$

导出 $m\dot{\boldsymbol v}=-\alpha\boldsymbol u$。

(2) 证明 $v=v_0$ 及 $\dot\phi=\alpha u_0/(mv_0)$。

(3) 当 $\alpha=\alpha_0$ 恒定时，求 $\phi(t)$ 并描述轨迹。

(4) 若轨迹为圆，求 $\alpha(t)$。

## **Kai**

### (1)

舍去二阶小量，$\delta\boldsymbol p=m\delta\boldsymbol v-\boldsymbol u\delta m=0$。除以 $\delta t$ 并取极限：

$$
\boxed{m\dot{\boldsymbol v}=\dot m\boldsymbol u=-\alpha\boldsymbol u}.
$$

### (2)

因 $\boldsymbol v\cdot\boldsymbol u=0$，有 $\frac d{dt}(v^2)=0$，故 $v=v_0$。再比较法向分量：

$$
mv_0\dot\phi=\alpha u_0,\qquad \boxed{\dot\phi=\frac{\alpha u_0}{mv_0}}.
$$

### (3)

在 $0\le t<m_0/\alpha_0$ 上，$m=m_0-\alpha_0t$，故

$$
\boxed{\phi(t)=\phi_0+\frac{u_0}{v_0}\log\frac{m_0}{m_0-\alpha_0t}}.
$$

为描述轨迹，令 $z=x+iy,\ T=m_0/\alpha_0,\ q=1-t/T,\ \beta=u_0/v_0$。积分 $\dot z=v_0e^{i\phi}$ 得

$$
z(t)=z(0)+\frac{v_0Te^{i\phi_0}}{1-i\beta}\left(1-q^{1-i\beta}\right).
$$

设 $z_*=z(0)+v_0Te^{i\phi_0}/(1-i\beta)$，则

$$
|z-z_*|=\frac{v_0T}{\sqrt{1+\beta^2}}q,\qquad \arg(z-z_*)=\text{常数}-\beta\log q.
$$

因此轨迹是向 $z_*$ 卷入的对数螺线；$t\to T^-$ 时半径趋于零。

### (4)

圆周运动的速率为常数，故角速度也为常数，从而 $\alpha/m=\alpha_0/m_0$。解

$$
\dot m=-\frac{\alpha_0}{m_0}m
$$

得到

$$
\boxed{\alpha(t)=\alpha_0e^{-\alpha_0t/m_0}},\qquad m(t)=m_0e^{-\alpha_0t/m_0}.
$$

圆半径为 $m_0v_0^2/(\alpha_0u_0)$。
