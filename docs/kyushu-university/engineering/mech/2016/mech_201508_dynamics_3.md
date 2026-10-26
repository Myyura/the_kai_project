---
sidebar_label: "2015年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Longitudinal-Vibration
---

# 九州大学 工学府 機械系専攻 2015年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、両端が固定された、密度 $\rho$、縦弾性係数 $E$、長さ $l$ の弾性丸棒がある。弾性丸棒の長手方向に左端を原点とする座標 $x$ をとり、縦振動を考える。断面積 $A(x)$ は $x$ の関数であり、座標 $x$、時刻 $t$ における弾性丸棒の長手方向変位を $u(x,t)$ とする。以下の問いに答えよ。ただし、$c=\sqrt{E/\rho}$ を使用してよい。（50点）

**(1)** 座標 $x$ における弾性丸棒の縦振動の運動方程式を導出せよ。

**(2)** $A(x)=A_0e^{-2\gamma x}$ として (1) の運動方程式を書き直せ。ただし、$A_0,\gamma$ は定数とする。

**(3)** $u(x,t)=U(x)\sin\omega t$ と仮定したとき、$U(x)$ が満たすべき微分方程式を求めよ。また、境界条件を満たし得る $U(x)$ の一般解を求めよ。

**(4)** $r$ 次の固有角振動数 $\omega_r$ を求めよ。

**(5)** 断面積が一様な場合と比較して、固有角振動数の大小関係を求めよ。

![原題の両端固定された変断面丸棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_dynamics-3-original.png)

### 题目描述

如图，有一密度为 $\rho$、纵向弹性模量为 $E$、长度为 $l$、两端固定的弹性圆杆。以左端为原点，沿杆轴向取坐标 $x$，考虑纵振动。截面积 $A(x)$ 随 $x$ 变化，坐标 $x$、时刻 $t$ 处的轴向位移为 $u(x,t)$。回答下列问题，可使用 $c=\sqrt{E/\rho}$。（50分）

**(1)** 推导弹性圆杆在坐标 $x$ 处纵振动的运动方程。

**(2)** 令 $A(x)=A_0e^{-2\gamma x}$，改写 (1) 的运动方程，其中 $A_0,\gamma$ 为常数。

**(3)** 假设 $u(x,t)=U(x)\sin\omega t$，求 $U(x)$ 应满足的微分方程，并求能够满足边界条件的 $U(x)$ 通解。

**(4)** 求第 $r$ 阶固有角频率 $\omega_r$。

**(5)** 与截面积均匀的情况比较，判断固有角频率的大小关系。

## **Kai**

### (1)

軸力は $N=EA(x)u_x$。微小要素の運動量収支から

$$
\boxed{\rho A(x)u_{tt}=\frac{\partial}{\partial x}\left(EA(x)u_x\right).}
$$

### (2)

$A'/A=-2\gamma$ なので

$$
\boxed{u_{tt}=c^2(u_{xx}-2\gamma u_x).}
$$

### (3)

$$
U''-2\gamma U'+\frac{\omega^2}{c^2}U=0.
$$

$U=e^{\gamma x}Y$ とおくと $Y''+(\omega^2/c^2-\gamma^2)Y=0$。両端で $Y=0$ の非自明解があるためには $\omega^2/c^2>\gamma^2$ が必要である。このとき

$$
\boxed{\begin{gathered}
U(x)=e^{\gamma x}(C\cos\beta x+D\sin\beta x),\\
\beta=\sqrt{\omega^2/c^2-\gamma^2}.
\end{gathered}}
$$

$\omega^2/c^2=\gamma^2$ の場合は $Y=C+Dx$、小さい場合は双曲線関数となり、どちらも両端条件を課すとゼロ解しか残らない。

### (4)

$U(0)=0$ より $C=0$、$U(l)=0$ より $\beta l=r\pi$（$r=1,2,\ldots$）。したがって

$$
\boxed{\begin{gathered}
\omega_r=c\sqrt{\gamma^2+\left(\frac{r\pi}{l}\right)^2},\\
U_r(x)\propto e^{\gamma x}\sin\frac{r\pi x}{l}.
\end{gathered}}
$$

### (5)

一様断面では $\omega_r^{(0)}=cr\pi/l$。よって

$$
\boxed{\omega_r>\omega_r^{(0)}\quad(\gamma\ne0),}
$$

$\gamma=0$ では等しい。$r=0$ は非自明な固有モードを与えない。
