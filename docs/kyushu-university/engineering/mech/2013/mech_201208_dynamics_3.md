---
sidebar_label: "2012年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2012年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

線密度 $\rho$、長さ $l$ の一様な弦が壁と壁との間に張力 $T$ で張られている。長手方向の座標 $x$ を図のようにとり、弦の横変位を $u(x,t)$ と表す。以下の問いに答えよ。ただし、張力 $T$ は常に一定とする。（50点）

![原題の固定壁の間の弦と座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_dynamics-3-original.png)

**(1)** 弦の運動方程式を導出せよ。

**(2)** 前進波の波動解 $u(x,t)=f(\xi)$、$\xi=x-ct$ を考える。$c$ は弦を伝わる波の速さを表す。$c$ を求めよ。

**(3)** 弦の $r$ 次の固有角振動数 $\omega_r$ および固有モード $X_r(x)$ を求めよ。

**(4)** 左右の壁がそれぞれ $a\cos\Omega t$、$b\sin\Omega t$ で振動した。このときの定常振動解を求めよ。

![原題の両端加振](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_dynamics-3-excitation.png)

### 题目描述

线密度为 $\rho$、长度为 $l$ 的均匀弦，以张力 $T$ 张紧于两墙之间。沿弦长方向取坐标 $x$，横向位移记为 $u(x,t)$，坐标与位移正方向如图。回答下列问题，张力 $T$ 始终保持不变。（50分）

**(1)** 推导弦的运动方程。

**(2)** 考虑前进波解 $u(x,t)=f(\xi)$，其中 $\xi=x-ct$，$c$ 表示波在弦上传播的速度。求 $c$。

**(3)** 求弦的第 $r$ 阶固有角频率 $\omega_r$ 和固有振型 $X_r(x)$。

**(4)** 左右两墙分别按 $a\cos\Omega t$、$b\sin\Omega t$ 振动。求此时的稳态振动解。

## **Kai**

### (1)

微小区間の横方向合力は $T u_{xx}\,dx$、質量は $\rho\,dx$ なので

$$
\boxed{\rho u_{tt}=T u_{xx}.}
$$

### (2)

$u_{tt}=c^2f''$、$u_{xx}=f''$ より

$$
\boxed{c=\sqrt{T/\rho}.}
$$

### (3)

$X''+(\omega/c)^2X=0$ に $X(0)=X(l)=0$ を課すと

$$
\boxed{\begin{gathered}
\omega_r=\frac{r\pi c}{l},\\
X_r(x)\propto\sin\frac{r\pi x}{l},\\
r=1,2,\ldots.
\end{gathered}}
$$

### (4)

$q=\Omega/c$ とし、両端の加振を重ね合わせる。$\sin ql\ne0$ のとき

$$
\boxed{u(x,t)=a\frac{\sin[q(l-x)]}{\sin ql}\cos\Omega t
+b\frac{\sin(qx)}{\sin ql}\sin\Omega t.}
$$

各項は波動方程式を満たし、左右端ではそれぞれ指定の変位になる。$\Omega=r\pi c/l$ では共振し、$a,b$ の少なくとも一方が非零なら、有界な調和定常解は存在しない。
