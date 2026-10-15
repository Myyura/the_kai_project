---
sidebar_label: "2015年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 工学府 機械系専攻 2015年度 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平な一様円板（質量 $M$、半径 $R$）が中心を通る鉛直軸のまわりに摩擦なく回転できる。中心から距離 $r$ に質量 $m_1$ のおもり A を置く。円板の側面に巻いた伸び縮みしない軽い糸を、質量を無視できる滑車にかけ、他端に質量 $m_2$ のおもり B をつるす。時刻 $t=0$ に静止状態から放すと、$t=t_1>0$ で A が円板に対して滑り始める。糸はたるまずほどける。円板の角変位を $\theta$、B の下向き変位を $x$、重力加速度を $g$ とする。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/dynamics-1-original.png)

1. $t<t_1$ における、A を含む円板の鉛直軸まわりの慣性モーメントを求めよ。
2. $0<t<t_1$ における B と A を含む円板の運動方程式、および $\dot\theta,\ddot\theta$ を求めよ。
3. 同時刻の A の運動方程式を極座標成分で示せ。摩擦力の半径方向成分を $f_r$、円周方向成分を $f_\theta$ とする。
4. A と円板の静止摩擦係数 $\mu$ を求めよ。

#### 题目描述

水平匀质圆盘质量为 $M$、半径为 $R$，可绕中心竖直轴无摩擦转动。质量 $m_1$ 的物块 A 位于距轴 $r$ 处；绕在盘侧的轻质不可伸长绳经无质量滑轮悬挂质量 $m_2$ 的 B。系统从静止释放，绳始终绷紧，A 在 $t_1>0$ 时开始相对滑动。以圆盘转角 $\theta$ 和 B 向下位移 $x$ 为坐标，求滑动前转动惯量、运动方程、角速度和角加速度，再用极坐标写出 A 的运动方程并确定静摩擦系数。

## **Kai**

### (1)

A が円板と一体で回転する間は

$$
\boxed{I=\frac12MR^2+m_1r^2.}
$$

### (2)

糸の張力を $T$ とすると、ニュートンの運動方程式と拘束条件は

$$
m_2\ddot x=m_2g-T,\qquad I\ddot\theta=TR,\qquad x=R\theta.
$$

したがって、一定の角加速度を $\alpha$ と書けば

$$
\boxed{\ddot\theta=\alpha=\frac{m_2gR}{I+m_2R^2},\qquad
\dot\theta=\alpha t.}
$$

### (3)

半径の外向きを正にとる。滑り出す前は $r$ が一定なので、極座標での加速度は $-r\dot\theta^2\boldsymbol e_r+r\ddot\theta\boldsymbol e_\theta$。よって

$$
\boxed{f_r=-m_1r\dot\theta^2=-m_1r\alpha^2t^2,\qquad
f_\theta=m_1r\ddot\theta=m_1r\alpha.}
$$

鉛直方向では垂直抗力 $N=m_1g$ である。

### (4)

摩擦力の大きさは時間とともに増加し、$t_1$ で最大静止摩擦力に達する。

$$
\mu m_1g=\sqrt{f_r(t_1)^2+f_\theta(t_1)^2}
=m_1r\sqrt{\alpha^4t_1^4+\alpha^2}.
$$

ゆえに

$$
\boxed{\mu=\frac{r\alpha}{g}\sqrt{1+\alpha^2t_1^4},\qquad
\alpha=\frac{m_2gR}{(m_2+M/2)R^2+m_1r^2}.}
$$
