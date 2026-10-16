---
sidebar_label: "2017年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 九州大学 工学府 機械系専攻 2017年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$、張力 $T$、線密度 $\rho$ の弦の両端が壁に固定されている。左端を原点、長手方向を $x$ とし、横変位を $u(x,t)$ とする。弦は空気中で単位長さ当たり $\nu(\partial u/\partial t)$ の抵抗力を受け、張力は一定である。$c=\sqrt{T/\rho}$、$\mu=\nu/\rho$ を用いてよい。（50 点）

![両端固定の弦（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-3-original.png)

1. 運動方程式を導出せよ。
2. 自由振動解を $u(x,t)=U(x)W(t)$ と仮定し、$U,W$ の微分方程式を求めよ。
3. $U$ の一般解を求めよ。
4. 振動するための $\nu$ または $\mu$ の条件と、そのときの $W$ の一般解を求めよ。
5. 境界条件から $r$ 次の固有モード $U_r$ を求めよ。
6. 自由振動の一般解と $r$ 次の減衰固有角振動数 $\omega_{dr}$ を求めよ。

#### 题目描述

两端固定弦长 $l$、张力 $T$、线密度 $\rho$，单位长度受到与横向速度相反的黏性阻力 $\nu u_t$。推导阻尼波动方程，以乘积分离变量，求空间与时间方程、振荡条件、固有模态、一般自由响应及各模态阻尼频率。

## **Kai**

### (1)

微小要素の力のつり合いから

$$
\rho u_{tt}\,dx=T u_{xx}\,dx-\nu u_t\,dx,
\qquad\boxed{u_{tt}+\mu u_t=c^2u_{xx}.}
$$

### (2)

分離定数を $-\omega^2$ とすると

$$
\frac{\ddot W+\mu\dot W}{W}=c^2\frac{U''}{U}=-\omega^2.
$$

よって

$$
\boxed{U''+\frac{\omega^2}{c^2}U=0,\qquad
\ddot W+\mu\dot W+\omega^2W=0.}
$$

### (3)

$$
\boxed{U(x)=A\cos(\omega x/c)+B\sin(\omega x/c).}
$$

### (4)

時間方程式の特性根は $\lambda=-\mu/2\pm\sqrt{\mu^2/4-\omega^2}$。したがって振動条件は

$$
\boxed{\mu<2\omega\quad(\nu<2\rho\omega),}
$$

その場合

$$
\boxed{W(t)=e^{-\mu t/2}
\left[C\cos\left(\sqrt{\omega^2-\mu^2/4}\,t\right)
+D\sin\left(\sqrt{\omega^2-\mu^2/4}\,t\right)\right].}
$$

### (5)

$U(0)=U(l)=0$ と非自明性から $A=0$、$\omega_rl/c=r\pi$（$r=1,2,\ldots$）。よって

$$
\boxed{U_r(x)=\sin\frac{r\pi x}{l},\qquad \omega_r=\frac{r\pi c}{l}.}
$$

$r=0$ は恒等的にゼロとなるため固有モードではない。

### (6)

各モードが不足減衰である場合、

$$
\boxed{u(x,t)=\sum_{r=1}^{\infty}
 e^{-\mu t/2}(A_r\cos\omega_{dr}t+B_r\sin\omega_{dr}t)
 \sin\frac{r\pi x}{l},}
$$

$$
\boxed{\omega_{dr}=\sqrt{\left(\frac{r\pi c}{l}\right)^2-\frac{\mu^2}{4}}.}
$$

全モードを不足減衰とする十分必要条件は $\mu<2\pi c/l$。より大きい減衰では、$\mu=2\omega_r$ のモードの時間因子を $(A_r+B_rt)e^{-\mu t/2}$、$\mu>2\omega_r$ のモードでは $A_re^{\lambda_{r+}t}+B_re^{\lambda_{r-}t}$ に置き換える。定数は初期変位・初速度で定まる。
