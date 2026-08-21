---
sidebar_label: "2022年8月実施 微分方程"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Initial-Value-Problem
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 微分方程

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

被食者と捕食者の個体数をそれぞれ $x$ , $y$ として、これらの時間変化をモデル化した、次の2次元非線形力学系について考えよう。ただし、 $a, b, c, d > 0$ とし、 $x, y > 0$ の解を考えることとする。

$$
\frac{dx}{dt} = ax - bxy
$$

$$
\frac{dy}{dt} = -cy + dxy
$$

1) この力学系において $V(x, y) = c \ln x + a \ln y - dx - by$ は時間によらず一定であることを示せ。ただし、 $\ln$ は自然対数を表す。

2) この力学系の不動点 $(x_0, y_0)$ を求めよ。

3) 1)の結果、および、2)で求めた不動点まわりの $\frac{dx}{dt}, \frac{dy}{dt}$ の符号を考えることにより、 $xy$ 平面上での解軌道 $(x, y)$ の振る舞いを説明し、 $(x_0, \frac{y_0}{2}), (x_0, \frac{y_0}{3}), (x_0, \frac{y_0}{4})$ の3つの初期値から始まる解軌道を描け。

### 题目描述

以 $x,y$ 分别表示被捕食者和捕食者的种群数量，考察二维非线性动力系统

$$
\frac{dx}{dt}=ax-bxy,
\qquad
\frac{dy}{dt}=-cy+dxy,
$$

其中 $a,b,c,d>0$，且只考虑 $x,y>0$ 的解。

1. 证明

   $$
   V(x,y)=c\ln x+a\ln y-dx-by
   $$

   沿该系统的解不随时间变化，其中 $\ln$ 表示自然对数；
2. 求该系统的不动点 $(x_0,y_0)$；
3. 利用第 1 问的结论以及第 2 问所得不动点周围 $dx/dt,dy/dt$ 的符号，说明解轨道 $(x,y)$ 在 $xy$ 平面上的行为，并画出分别从

   $$
   \left(x_0,\frac{y_0}{2}\right),\qquad
   \left(x_0,\frac{y_0}{3}\right),\qquad
   \left(x_0,\frac{y_0}{4}\right)
   $$

   三个初始值出发的解轨道。

## **Kai**

1) $\frac{dV}{dt} = \frac{\partial V}{\partial x} \frac{dx}{dt} + \frac{\partial V}{\partial y} \frac{dy}{dt}$

$$
\frac{\partial V}{\partial x} = \frac{c}{x} - d
$$

$$
\frac{\partial V}{\partial y} = \frac{a}{y} - b
$$

$$
\frac{dV}{dt} = (\frac{c}{x} - d)(ax - bxy) + (\frac{a}{y} - b)(-cy + dxy) = ac - \frac{bcxy}{x} - adx + bdxy - \frac{acy}{y} + bcy + adx -bdxy = ac - bcy - adx + bdxy -ac + bcy + adx -bdxy = 0
$$

Therefore, V(x,y) is a constant.

2) To find the fixed point, we need to solve $\frac{dx}{dt} = 0$ and $\frac{dy}{dt} = 0$ .

$$
ax - bxy = 0 \implies x(a - by) = 0
$$

$$
-cy + dxy = 0 \implies y(-c + dx) = 0
$$

Since $x, y > 0$ , we have

$$
a - by = 0 \implies y = \frac{a}{b}
$$

$$
-c + dx = 0 \implies x = \frac{c}{d}
$$

So the fixed point is $(x_0, y_0) = (\frac{c}{d}, \frac{a}{b})$ .

3) $x_0=c/d,\ y_0=a/b$ と書けば

$$
x'=bx(y_0-y),\qquad y'=dy(x-x_0).
$$

したがって、 $(x_0,y_0)$ の右下では右上、右上では左上、左上では左下、左下では右下へ進む。よって軌道の向きは反時計回りである。

また

$$
V_{xx}=-\frac{c}{x^2}<0,\qquad
V_{yy}=-\frac{a}{y^2}<0,\qquad V_{xy}=0
$$

なので、 $V$ は $(x_0,y_0)$ で狭義の最大値をとる。正の第1象限の境界または無限遠では $V\to-\infty$ であるから、平衡点以外の等位線 $V(x,y)=C$ は $(x_0,y_0)$ を囲む閉曲線となる。解はこの等位線上を反時計回りに周期運動する。

指定された初期値に対応する3軌道は

$$
V(x,y)=V\left(x_0,\frac{y_0}{j}\right),
\qquad j=2,3,4
$$

という3本の閉曲線である。いずれも点 $(x_0,y_0/j)$ では右向きに出発し、 $j$ が大きいほど保存量が小さいため外側の大きな閉軌道となる。
