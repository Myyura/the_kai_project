---
sidebar_label: '2012年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Rotation-Matrix
---

# 東京大学 工学系研究科 2012年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

静止直交座標系 $xyz$ において、点 $P_0$ は楕円上を

$$
(x_0,y_0,z_0)=\bigl(a(-b+\cos t),\ a\sqrt{1-b^2}\sin t,\ 0\bigr),\qquad a>0,\ 0<b<1
$$

と運動する。楕円と点を、$y$ 軸のまわりに正の $z$ 軸が正の $x$ 軸に向かう向きへ角度 $\theta$ 回転して、点 $P_1$ を得る。
$0<\theta<\pi/2$ かつ $(1+b)\cos^2\theta<1-b$ とする。
さらに原点を共有する回転直交座標系 $XYZ$ を考える。$Z$ 軸は $z$ 軸と一致し、$X$ 軸は $x$ 軸から反時計回りに角度 $t$ をなす。

I. $P_1$ の静止座標を求めよ。

II. $P_1$ の回転座標 $(X_1,Y_1,Z_1)$ を求めよ。

III. $0<t<2\pi$ で $Y_1=0$ となる $t$ と対応する座標をすべて求めよ。

IV. $XY$ 平面への投影軌跡を、$t=k\pi/4$（$k=0,\ldots,7$）の点を示しながら描け。

#### 题目描述

静止坐标系中，点 $P_0$ 沿椭圆作参数运动

$$
(x_0,y_0,z_0)=\bigl(a(-b+\cos t),\ a\sqrt{1-b^2}\sin t,\ 0\bigr),
\qquad a>0,\quad0<b<1.
$$

将椭圆和点绕 $y$ 轴旋转 $\theta$ 得 $P_1$；旋转方向使正 $z$ 轴朝正 $x$ 轴转动。设
$0<\theta<\pi/2$ 且 $(1+b)\cos^2\theta<1-b$。
另取绕 $z$ 轴转动的坐标系 $XYZ$，$Z=z$，$X$ 轴从 $x$ 轴逆时针转过 $t$。

I. 求 $P_1$ 在静止坐标系中的坐标。

II. 求其在旋转坐标系中的坐标 $(X_1,Y_1,Z_1)$。

III. 求 $0<t<2\pi$ 内全部满足 $Y_1=0$ 的时刻及对应坐标。

IV. 画出其在 $XY$ 平面上的投影轨迹，标明 $t=k\pi/4$（$k=0,\ldots,7$）的点。

## **Kai**

$c=\cos\theta,h=\sin\theta,s=\sqrt{1-b^2}$ とおく。与えられた条件は $(1+b)c<s$ と同値である。

### I–II

$y$ 軸のまわりの回転により、

$$
\boxed{(x_1,y_1,z_1)=a\bigl(c(\cos t-b),\ s\sin t,\ h(b-\cos t)\bigr)}.
$$

座標軸がさらに $t$ だけ回転するので、座標変換は
$X_1=x_1\cos t+y_1\sin t,\ Y_1=-x_1\sin t+y_1\cos t$ である。従って、

$$
\boxed{\begin{aligned}
X_1&=a[s+(c-s)\cos^2t-bc\cos t],\\
Y_1&=a\sin t[(s-c)\cos t+bc],\\
Z_1&=ah(b-\cos t).
\end{aligned}}
$$

### III

$Y_1=0$ は $\sin t=0$ または $\cos t=-bc/(s-c)$ と同値である。
$0<bc/(s-c)<1$ より $t_*=\arccos[-bc/(s-c)]$ とおくと、求める時刻と座標はすべて次の通りである。

$$
\boxed{\begin{array}{c|c}
t& (X_1,Y_1,Z_1)\\\hline
\pi&(a(1+b)c,\ 0,\ a(1+b)h)\\
t_*,\ 2\pi-t_*&(as,\ 0,\ abhs/(s-c))
\end{array}}.
$$

### IV

投影は $X$ 軸に関して対称で、$t_*$ と $2\pi-t_*$ は同じ交点に対応する。ここで、
$L_-=(s+c-\sqrt2bc)/2$、$L_+=(s+c+\sqrt2bc)/2$、
$B_+=(s-c)/2+bc/\sqrt2$、$B_-=-(s-c)/2+bc/\sqrt2$。
指定された八点は次の通りである。

| $k$ | $X_1/a$ | $Y_1/a$ |
|---|---|---|
| 0 | $(1-b)c$ | $0$ |
| 1 | $L_-$ | $B_+$ |
| 2 | $s$ | $bc$ |
| 3 | $L_+$ | $B_-$ |
| 4 | $(1+b)c$ | $0$ |
| 5 | $L_+$ | $-B_-$ |
| 6 | $s$ | $-bc$ |
| 7 | $L_-$ | $-B_+$ |

![投影軌跡と八つの媒介変数の点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_math_4_orbit.svg)

図は条件を満たす $a=1,b=0.4,\theta=1$ の例で、数字 $k$ は $t=k\pi/4$ に対応する。一般の点の位置は上表で与えられる。
