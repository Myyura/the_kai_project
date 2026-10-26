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

図のように、長さ $l$、張力 $T$、線密度 $\rho$ の弦があり、両端は壁に固定されている。左端を原点とし弦の長手方向に座標 $x$ をとり、座標 $x$ における弦の横方向変位を $u(x,t)$ とする。弦は空気中にあり、単位長さあたり $\nu(\partial u/\partial t)$ の抵抗力を受けるものとする。張力 $T$ は常に一定とする。$c=\sqrt{T/\rho},\ \mu=\nu/\rho$ を使用してよい。（50点）

**(1)** 弦の運動方程式を導出せよ。

**(2)** 弦の自由振動解を $u(x,t)=U(x)\cdot W(t)$ と仮定したとき、$U$ と $W$ が満たす微分方程式をそれぞれ求めよ。

**(3)** $U$ の一般解を求めよ。

**(4)** 弦が振動するときの $\nu$ もしくは $\mu$ に関する条件と、振動するときの $W$ の一般解を求めよ。

**(5)** 境界条件を考慮して、$r$ 次の固有モード $U_r$ を求めよ。

**(6)** 弦の自由振動の一般解と $r$ 次の減衰固有角振動数 $\omega_{dr}$ を求めよ。

![両端固定の弦の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-3-original.png)

### 题目描述

如图，长度为 $l$、张力为 $T$、线密度为 $\rho$ 的弦两端固定于墙壁。以左端为原点，沿弦长度方向取坐标 $x$；坐标 $x$ 处的横向位移为 $u(x,t)$。弦处于空气中，单位长度受到大小为 $\nu(\partial u/\partial t)$ 的阻力。张力 $T$ 始终恒定。可使用 $c=\sqrt{T/\rho},\ \mu=\nu/\rho$。（50分）

**(1)** 推导弦的运动方程。

**(2)** 假设自由振动解为 $u(x,t)=U(x)\cdot W(t)$，分别求 $U,W$ 满足的微分方程。

**(3)** 求 $U$ 的通解。

**(4)** 求弦发生振动时 $\nu$ 或 $\mu$ 应满足的条件，以及发生振动时 $W$ 的通解。

**(5)** 考虑边界条件，求第 $r$ 阶固有振型 $U_r$。

**(6)** 求弦自由振动的通解和第 $r$ 阶阻尼固有角频率 $\omega_{dr}$。

## **Kai**

### (1)

微小要素の力のつり合いから

$$
\begin{gathered}
\rho u_{tt}\,dx=T u_{xx}\,dx-\nu u_t\,dx,\\
\boxed{u_{tt}+\mu u_t=c^2u_{xx}.}
\end{gathered}
$$

### (2)

分離定数を $-\omega^2$ とすると

$$
\frac{\ddot W+\mu\dot W}{W}=c^2\frac{U''}{U}=-\omega^2.
$$

よって

$$
\boxed{\begin{gathered}
U''+\frac{\omega^2}{c^2}U=0,\\
\ddot W+\mu\dot W+\omega^2W=0.
\end{gathered}}
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
\boxed{W(t)=e^{-\mu t/2}\left[\begin{gathered}
C\cos\left(\sqrt{\omega^2-\mu^2/4}\,t\right)\\
+D\sin\left(\sqrt{\omega^2-\mu^2/4}\,t\right)
\end{gathered}\right].}
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
