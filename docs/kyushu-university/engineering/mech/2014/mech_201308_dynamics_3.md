---
sidebar_label: "2013年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
---

# 九州大学 工学府 機械系専攻 2013年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、長さ $l$、張力 $T$、線密度 $\rho$ の弦がある。左端は壁に固定されており、右端では弦の先にリングが取り付けられて、リングは固定された剛体棒に沿って摩擦無く鉛直方向に動くことができる。弦の左端を原点 O として弦の長手方向に $x$ 座標をとり、座標 $x$ における弦の横方向変位を $u(x,t)$ とする。張力 $T$ は常に一定とし、変位 $u(x,t)$ は微小とする。リングの大きさ、および弦とリングに作用する重力の影響は無視できるものとし、以下の問いに答えよ。波の伝播速度 $c=\sqrt{T/\rho}$ を使用してよい。（50点）

**(1)** 微小要素の運動を考えることにより、弦の運動方程式を導出せよ。

**(2)** 弦の自由振動解を $u(x,t)=U(x)\cos\omega t$ と仮定したときの $U(x)$ の一般解を求めよ。

**(3)** リングの質量を無視できる場合、$r$ 次の固有角振動数 $\omega_r$ と固有モード $U_r$ を求めよ。

**(4)** リングの質量が $m$ である場合の振動数方程式を求めよ。

**(5)** リングの質量が0の場合の1次の固有角振動数 $\omega_1$ と、リングの質量がある場合の1次の固有角振動数 $\bar\omega_1$ の大小関係を求めよ。

![原題の左端固定・右端リング付き弦](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_dynamics-3-original.png)

#### 题目描述

如图，有一长度为 $l$、张力为 $T$、线密度为 $\rho$ 的弦。左端固定于墙壁，右端连接一圆环，圆环可沿固定刚杆无摩擦地竖直移动。以弦左端为原点 O，沿弦长取坐标 $x$，弦在坐标 $x$ 处的横向位移为 $u(x,t)$。张力 $T$ 恒定，位移 $u(x,t)$ 为微小量。忽略圆环大小，以及重力对弦和圆环的影响。回答下列问题，可使用波速 $c=\sqrt{T/\rho}$。（50分）

**(1)** 通过考虑微小弦元的运动，推导弦的运动方程。

**(2)** 假设弦的自由振动解为 $u(x,t)=U(x)\cos\omega t$，求 $U(x)$ 的通解。

**(3)** 圆环质量可忽略时，求第 $r$ 阶固有角频率 $\omega_r$ 和固有振型 $U_r$。

**(4)** 圆环质量为 $m$ 时，求频率方程。

**(5)** 比较圆环质量为零时的一阶固有角频率 $\omega_1$ 与圆环有质量时的一阶固有角频率 $\bar\omega_1$ 的大小。

## **Kai**

### (1)

弦の傾斜が小さいので、鉛直張力成分は $Tu_x$ である。微小区間にニュートンの運動法則を適用すると

$$
\rho\,\mathrm dx\,u_{tt}=T\{u_x(x+\mathrm dx,t)-u_x(x,t)\}.
$$

よって

$$
\boxed{u_{tt}=c^2u_{xx},\qquad c=\sqrt{T/\rho}.}
$$

### (2)

$u=U\cos\omega t$ を代入すると $U''+(\omega/c)^2U=0$。したがって

$$
\boxed{U(x)=C_1\sin\frac{\omega x}{c}+C_2\cos\frac{\omega x}{c}.}
$$

### (3)

左端固定条件は $U(0)=0$。無質量リングでは右端の鉛直力がゼロなので $U'(l)=0$。非自明な解には $\cos(\omega l/c)=0$ が必要であり、

$$
\boxed{\begin{gathered}
\omega_r=\frac{(2r-1)\pi c}{2l},\\
U_r(x)=C_r\sin\frac{(2r-1)\pi x}{2l},\\
r=1,2,\ldots.
\end{gathered}}
$$

$C_r$ は任意の非零定数である。

### (4)

リングに弦が及ぼす鉛直力は $-Tu_x(l,t)$ なので

$$
m u_{tt}(l,t)=-Tu_x(l,t).
$$

左端条件を満たす $U=C\sin(\omega x/c)$ を代入して

$$
\boxed{T\frac\omega c\cos\frac{\omega l}{c}
-m\omega^2\sin\frac{\omega l}{c}=0\quad(\omega>0).}
$$

同値な無次元表示は、$z=\omega l/c$、$\eta=m/(\rho l)$ とおくと

$$
\boxed{\cot z=\eta z.}
$$

### (5)

$\eta>0$ に対し、$0<z<\pi/2$ では $\cot z$ が $+\infty$ からゼロへ単調減少し、$\eta z$ はゼロから単調増加する。したがってこの区間に唯一の1次の根があり、

$$
\boxed{0<\bar\omega_1<\frac{\pi c}{2l}=\omega_1.}
$$

端部質量を付けると、同じ弦の復元力に対する慣性が増え、1次固有角振動数は低下する。
