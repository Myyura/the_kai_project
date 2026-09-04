---
sidebar_label: 2014年8月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Physics.Mechanics
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 基礎科目 問題5 物理基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 5 に示すように，長さ $L$ の一様で曲がりやすい綱が，その一部を水平の机上に置き，残りを机の端から鉛直下方に垂れた形で置かれている。綱の線密度を $\lambda$ とし垂れている部分の長さを $a$ とする。重力加速度を $g$ とする。また綱は伸びも縮みもしないものとする。以下の問に答えよ。必要に応じて次の式を用いよ。

$$
\frac12\frac d{dx}\left(\frac{dx}{dt}\right)^2=\frac{d^2x}{dt^2}
$$

(1) 机の表面が滑らかな場合を考える。綱が時刻 $t=0$ で初速度 $0$ ですべり落ち始めた。

- (a) 綱の垂れた部分の長さが $x$（$x>a$）になった。このときの綱の運動方程式を求め，その速度を求めよ。
- (b) 問(1)(a)の場合にエネルギー保存則が満たされていることを示せ。
- (c) 綱の先端が机の端を離れる時刻 $t$ を求めよ。

(2) 机の表面が粗い場合を考える。机と綱との間の静止摩擦係数および運動摩擦係数をそれぞれ $\mu,\mu'$ とする。

- (a) 綱がすべり落ちずにちょうどつりあいの限界にあるとき，垂れた部分の綱の長さを求めよ。
- (b) 綱がつりあいの限界の状態から静かにすべり落ち始めた。垂れた部分の長さが $x$（$x>a$）になるときの綱の速度を求めよ。
- (c) 綱の先端が机の端から離れるときの綱の速度を求めよ。

### 题目描述

一条均匀柔软不可伸长的绳子，总长 $L$、线密度 $\lambda$，部分平放桌面，其余从桌边竖直垂下。初始垂下长度为 $a$，重力加速度为 $g$。记运动中垂下长度为 $x$。

1. 桌面光滑，绳在 $t=0$ 从静止开始滑下。(a) 写出运动方程，并求垂下长度为 $x>a$ 时的速度；(b) 验证机械能守恒；(c) 求绳尾离开桌边的时刻。
2. 桌面粗糙，静摩擦系数、动摩擦系数为 $\mu,\mu'$。(a) 求恰要下滑时的临界垂下长度 $a$；(b) 从该临界状态以可忽略初速度开始滑下，求 $x>a$ 时的速度；(c) 求绳尾离桌时的速度。
可用 $\frac12\frac d{dx}(\frac{dx}{dt})^2=\frac{d^2x}{dt^2}$。

## **Kai**

### (1)

(a) 全绳动能为 $\lambda L\dot x^2/2$，沿绳方向的驱动力为 $\lambda gx$，故

$$
L\ddot x=gx,\qquad x(0)=a,\quad\dot x(0)=0.
$$

于是

$$
\boxed{x(t)=a\cosh\!\left(\sqrt{g/L}\,t\right)},\qquad
\boxed{v(x)=\sqrt{\frac gL(x^2-a^2)}}.
$$

(b) 以桌面为势能零点，

$$
U=-\frac12\lambda gx^2,\qquad
K+U=\frac12\lambda Lv^2-\frac12\lambda gx^2=-\frac12\lambda ga^2,
$$

为常量。

(c) 令 $x=L$，得

$$
\boxed{t=\sqrt{\frac Lg}\operatorname{arcosh}\frac La
=\sqrt{\frac Lg}\log\frac{L+\sqrt{L^2-a^2}}a}.
$$

### (2)

(a) 临界平衡时 $\lambda ga=\mu\lambda g(L-a)$，故

$$
\boxed{a=\frac{\mu L}{1+\mu}}.
$$

(b) 下滑后

$$
L\ddot x=g[x-\mu'(L-x)].
$$

从 $x=a,v=0$ 积分，

$$
\boxed{v^2(x)=\frac gL\left[(1+\mu')(x^2-a^2)-2\mu'L(x-a)\right]}.
$$

(c) 取 $x=L$ 并代入 $a$：

$$
\boxed{v(L)=\frac{\sqrt{gL(1+2\mu-\mu')}}{1+\mu}}.
$$
