---
sidebar_label: "2016年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Longitudinal-Vibration
---

# 九州大学 工学府 機械系専攻 2016年度 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

密度 $\rho$、縦弾性係数 $E$、長さ $l$ の弾性丸棒の両端が固定されている。左端からの座標を $x$、断面積を $A(x)$、長手方向の変位を $u(x,t)$ とする。$c=\sqrt{E/\rho}$ を用いてよい。（50 点）

![断面積が変化する両端固定棒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/dynamics-3-original.png)

1. 縦振動の運動方程式を導け。
2. $A(x)=A_0e^{-2\gamma x}$（$A_0,\gamma$ は定数）として書き直せ。
3. $u(x,t)=U(x)\sin\omega t$ としたときの $U$ の微分方程式と、境界条件を満たし得る一般解を求めよ。
4. $r$ 次の固有角振動数 $\omega_r$ を求めよ。
5. 一様断面の棒と固有角振動数の大小を比較せよ。

#### 题目描述

两端固定的非均匀截面弹性杆，密度、杨氏模量恒定。先推导纵振动方程，再令截面积为 $A_0e^{-2\gamma x}$，求分离后的空间方程、满足边界条件的模态及频率，并与均匀杆比较。

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
\boxed{U(x)=e^{\gamma x}(C\cos\beta x+D\sin\beta x),\qquad
\beta=\sqrt{\omega^2/c^2-\gamma^2}.}
$$

$\omega^2/c^2=\gamma^2$ の場合は $Y=C+Dx$、小さい場合は双曲線関数となり、どちらも両端条件を課すとゼロ解しか残らない。

### (4)

$U(0)=0$ より $C=0$、$U(l)=0$ より $\beta l=r\pi$（$r=1,2,\ldots$）。したがって

$$
\boxed{\omega_r=c\sqrt{\gamma^2+\left(\frac{r\pi}{l}\right)^2},\qquad
U_r(x)\propto e^{\gamma x}\sin\frac{r\pi x}{l}.}
$$

### (5)

一様断面では $\omega_r^{(0)}=cr\pi/l$。よって

$$
\boxed{\omega_r>\omega_r^{(0)}\quad(\gamma\ne0),}
$$

$\gamma=0$ では等しい。$r=0$ は非自明な固有モードを与えない。
