---
sidebar_label: "2014年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 工学府 機械系専攻 2014年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、水平に設置した一様な円板が、中心を通る鉛直軸まわりに滑らかに回転できる。円板の中心から半径 $r$ の位置に質量 $m_1$ のおもり A をのせている。円板の側面には伸縮しない糸が巻いてあり、質量の無視できる滑車を介して糸の端に質量 $m_2$ のおもり B をつるしている。円板の質量を $M$、半径を $R$ とする。はじめに円板を静止させておき、時刻 $t=0$ で静かに放すと、時刻 $t=t_1\;(>0)$ でおもり A が円板に対して滑りはじめた。糸は円板の回転とともにたるみなくほどけ、糸の質量は無視できるものとする。円板の回転角変位を $\theta$、おもり B の下向き変位を $x$ とし、重力加速度を $g$ とする。以下の問いに答えよ。（50点）

**(1)** $t<t_1$ のとき、おもり A を含めた円板の鉛直軸まわりの慣性モーメントを求めよ。

**(2)** 時刻 $t\;(0<t<t_1)$ における、おもり B と円板（おもり A を含む）の運動方程式を求め、円板の角速度 $\dot\theta$ と角加速度 $\ddot\theta$ を求めよ。

**(3)** 時刻 $t\;(0<t<t_1)$ における、おもり A の運動方程式を極座標で成分表示せよ。ただし、摩擦力の半径方向成分を $f_r$、円周方向成分を $f_\theta$ とする。

**(4)** おもり A と円板との間の静止摩擦係数 $\mu$ を求めよ。

![原題の水平円板と二つのおもり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_dynamics-1-original.png)

#### 题目描述

如图，一均匀圆盘水平放置，可以绕通过其中心的竖直轴光滑转动。在距圆盘中心 $r$ 处放置质量为 $m_1$ 的物体 A。圆盘侧面绕有不可伸缩的线，线经过质量可忽略的滑轮，末端悬挂质量为 $m_2$ 的物体 B。圆盘质量为 $M$、半径为 $R$。起初使圆盘静止，在 $t=0$ 时轻轻释放；到 $t=t_1\;(>0)$ 时，A 开始相对圆盘滑动。线随圆盘转动无松弛地展开，线的质量可忽略。圆盘转角为 $\theta$，B 向下的位移为 $x$，重力加速度为 $g$。回答下列问题。（50分）

**(1)** 在 $t<t_1$ 时，求包含 A 在内的圆盘绕竖直轴的转动惯量。

**(2)** 在 $0<t<t_1$ 时，求 B 以及圆盘（包括 A）的运动方程，并求圆盘角速度 $\dot\theta$ 和角加速度 $\ddot\theta$。

**(3)** 在 $0<t<t_1$ 时，用极坐标分量表示 A 的运动方程。摩擦力的径向分量记为 $f_r$，周向分量记为 $f_\theta$。

**(4)** 求 A 与圆盘之间的静摩擦系数 $\mu$。

## **Kai**

### (1)

A が円板と一体で回転する間は

$$
\boxed{I=\frac12MR^2+m_1r^2.}
$$

### (2)

糸の張力を $T$ とすると、ニュートンの運動方程式と拘束条件は

$$
\begin{gathered}
m_2\ddot x=m_2g-T,\\
I\ddot\theta=TR,\\
x=R\theta.
\end{gathered}
$$

したがって、一定の角加速度を $\alpha$ と書けば

$$
\boxed{\ddot\theta=\alpha=\frac{m_2gR}{I+m_2R^2},\qquad
\dot\theta=\alpha t.}
$$

### (3)

半径の外向きを正にとる。滑り出す前は $r$ が一定なので、極座標での加速度は $-r\dot\theta^2\boldsymbol e_r+r\ddot\theta\boldsymbol e_\theta$。よって

$$
\boxed{\begin{gathered}
f_r=-m_1r\dot\theta^2=-m_1r\alpha^2t^2,\\
f_\theta=m_1r\ddot\theta=m_1r\alpha.
\end{gathered}}
$$

鉛直方向では垂直抗力 $N=m_1g$ である。

### (4)

摩擦力の大きさは時間とともに増加し、$t_1$ で最大静止摩擦力に達する。

$$
\begin{gathered}
\mu m_1g=\sqrt{f_r(t_1)^2+f_\theta(t_1)^2}\\
=m_1r\sqrt{\alpha^4t_1^4+\alpha^2}.
\end{gathered}
$$

ゆえに

$$
\boxed{\begin{gathered}
\mu=\frac{r\alpha}{g}\sqrt{1+\alpha^2t_1^4},\\
\alpha=\frac{m_2gR}{(m_2+M/2)R^2+m_1r^2}.
\end{gathered}}
$$
