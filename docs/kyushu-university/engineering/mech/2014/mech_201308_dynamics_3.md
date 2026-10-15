---
sidebar_label: "2014年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
---

# 九州大学 工学府 機械系専攻 2014年度 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$、一定張力 $T$、線密度 $\rho$ の弦の左端を壁に固定する。右端にはリングが付き、固定された鉛直の剛体棒に沿って摩擦なく上下できる。左端を原点 O、弦に沿う座標を $x$、微小な横変位を $u(x,t)$ とする。リングの大きさと弦・リングの重力は無視し、$c=\sqrt{T/\rho}$ を用いてよい。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/dynamics-3-original.png)

1. 微小要素の運動から弦の運動方程式を導出せよ。
2. $u(x,t)=U(x)\cos\omega t$ としたとき、$U(x)$ の一般解を求めよ。
3. リングの質量を無視できる場合、第 $r$ 次の固有角振動数 $\omega_r$ と固有モード $U_r$ を求めよ。
4. リングの質量が $m$ の場合の振動数方程式を求めよ。
5. リングが無質量の場合の1次固有角振動数 $\omega_1$ と、質量を持つ場合の1次固有角振動数 $\bar\omega_1$ の大小関係を求めよ。

#### 题目描述

弦长 $l$、恒定张力 $T$、线密度 $\rho$，左端固定，右端连接可沿竖直固定杆无摩擦上下移动的圆环。横向位移 $u(x,t)$ 很小，忽略圆环尺寸及弦和圆环的重力。推导波动方程及简谐空间解；先忽略圆环质量求各阶固有频率和模态，再令圆环质量为 $m$ 求频率方程，并比较有、无端部质量时的第一阶固有频率。

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
\boxed{\omega_r=\frac{(2r-1)\pi c}{2l},\qquad
U_r(x)=C_r\sin\frac{(2r-1)\pi x}{2l},\quad r=1,2,\ldots.}
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
