---
sidebar_label: 2024年8月実施 数学 第2問
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Initial-Value-Problem
  - Mathematics.Differential-Equations.Integrating-Factor
  - Mathematics.Differential-Equations.Systems-of-ODEs
---
# 東京大学 情報理工学系研究科 2024年8月実施 数学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$t$ を実数の独立変数、$a(t),x(t),y(t)$ を実数値関数とする。

(1) $a(t)$ は連続な周期 $T$ の関数とする。次の初期値問題の解 $x(t)$ を求めよ。

$$
\frac{dx}{dt}=a(t)x(t),\qquad x(0)=x_0\ne0.
$$

(2) (1) の解 $x(t)$ が周期 $T$ の周期解となるための、$a(t)$ の必要十分条件を求めよ。

(3) $k$ を実定数として、次の連立常微分方程式の初期値問題を解け。

$$
\begin{cases}
\displaystyle\frac{dx}{dt}=-kx(t)+\sin t\cos t\,y(t),\\[2mm]
\displaystyle\frac{dy}{dt}=(-k+\sin t)y(t),
\end{cases}
\qquad x(0)=x_0\ne0,\quad y(0)=y_0\ne0.
$$

(4) (3) で $k>0$ のとき、$t\to\infty$ における $x(t),y(t)$ の収束の様子を簡潔に説明せよ。

(5) (3) で $k=0,\ x_0=2,\ y_0=1$ のとき、解軌道の概略図を $yx$ 平面上に描け。

#### 题目描述

设 $t$ 为实数自变量，$a(t),x(t),y(t)$ 为实值函数。

（1）设 $a(t)$ 连续且以 $T$ 为周期，求初值问题

$$
x'(t)=a(t)x(t),\qquad x(0)=x_0\ne0
$$

的解。

（2）求（1）的解 $x(t)$ 以 $T$ 为周期的关于 $a(t)$ 的充要条件。

（3）设 $k$ 为实常数，求初值问题

$$
\begin{cases}
x'(t)=-kx(t)+\sin t\cos t\,y(t),\\
y'(t)=(-k+\sin t)y(t),
\end{cases}
\qquad x(0)=x_0\ne0,\quad y(0)=y_0\ne0
$$

的解。

（4）当 $k>0$ 时，简要说明（3）的解在 $t\to\infty$ 时如何收敛。

（5）当 $k=0,\ x_0=2,\ y_0=1$ 时，在 $yx$ 平面上画出解轨迹的示意图。

## **Kai**

### (1)

積分因子を用いると

$$
\frac{d}{dt}\left[x(t)\exp\left(-\int_0^t a(s)\,ds\right)\right]=0.
$$

初期条件より

$$
\boxed{x(t)=x_0\exp\left(\int_0^t a(s)\,ds\right)}.
$$

### (2)

$a$ の周期性から

$$
\frac{x(t+T)}{x(t)}
=\exp\left(\int_t^{t+T}a(s)\,ds\right)
=\exp\left(\int_0^T a(s)\,ds\right).
$$

指数部は実数であり $x(t)\ne0$ なので、必要十分条件は

$$
\boxed{\int_0^T a(s)\,ds=0}.
$$

### (3)

まず第2式を解くと

$$
\boxed{y(t)=y_0e^{-kt+1-\cos t}}.
$$

これを第1式に代入し、積分因子 $e^{kt}$ を掛けると

$$
\frac{d}{dt}(e^{kt}x(t))
=y_0\sin t\cos t\,e^{1-\cos t}.
$$

ここで

$$
\frac{d}{dt}\bigl[(1+\cos t)e^{1-\cos t}\bigr]
=\sin t\cos t\,e^{1-\cos t}
$$

であるから、初期条件より

$$
\boxed{x(t)=e^{-kt}\left[x_0-2y_0+y_0(1+\cos t)e^{1-\cos t}\right]}.
$$

### (4)

$e^{1-\cos t}$ および $(1+\cos t)e^{1-\cos t}$ は有界な周期関数なので、

$$
|y(t)|\le |y_0|e^2e^{-kt},\qquad
|x(t)|\le\bigl(|x_0-2y_0|+2e^2|y_0|\bigr)e^{-kt}.
$$

したがって $k>0$ ならば、両者は有界な周期関数を因子として持ち、指数的に $0$ へ収束する。すなわち

$$
\boxed{(x(t),y(t))\longrightarrow(0,0)}.
$$

### (5)

この初期条件では

$$
y=e^{1-\cos t},\qquad x=(1+\cos t)e^{1-\cos t}.
$$

$\cos t=1-\log y$ を消去すると

$$
\boxed{x=y(2-\log y),\qquad 1\le y\le e^2}.
$$

横軸を $y$、縦軸を $x$ とする。

$$
\frac{dx}{dy}=1-\log y,\qquad
\frac{d^2x}{dy^2}=-\frac1y<0
$$

より、軌道は $(y,x)=(1,2)$ から $(e,e)$ で最大値を取り、$(e^2,0)$ に至る上に凸の曲線である。$0\le t\le\pi$ ではこの順に進み、$\pi\le t\le2\pi$ では同じ曲線を逆向きに戻る。以後、周期 $2\pi$ で往復する。

![横軸 y、縦軸 x の解軌道。t=0 から π で左端から右端へ進み、π から 2π で同じ曲線を戻る。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu/2025/kyotsu_202408_math_2_trajectory.svg)
