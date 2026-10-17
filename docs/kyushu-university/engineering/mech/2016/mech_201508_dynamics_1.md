---
sidebar_label: "2015年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2015年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、質量 $2m$ の物体 A と質量 $m$ の物体 B が、ばね定数 $6k$ および $4k$ の質量の無視できるばねで鉛直方向に連結されている。物体 B の上には質量 $m$ の物体 C が固定されており、物体 B と一体となって動く。静的平衡状態から下向きに物体 A を $d$ だけ、物体 B を $2d$ だけ押し込んで静止させたのちに静かに放して自由振動させた。静的平衡状態からの物体 A の変位を $x_1$、物体 B の変位を $x_2$（いずれも鉛直下向きを正）とする。重力加速度を $g$ とし、各物体は鉛直方向にのみ動くものとして、以下の問いに答えよ。（50点）

**(1)** 自由振動しているときの系の運動方程式を求めよ。

**(2)** 系の固有角振動数および固有モードを求めよ。

**(3)** 自由振動の開始時刻を $t=0$ として、$t>0$ における $x_1$ および $x_2$ を時間の関数として表せ。

**(4)** 物体 C が物体 B の上に固定されずに置かれている場合について考える。物体 B と物体 C の間に作用する内力を $F$（物体同士が押し合う向きを正）として物体 B と一体となって運動しているときの物体 C の運動方程式を導出し、自由振動時における内力 $F$ を時間の関数として表せ。さらに、自由振動時に物体 C が物体 B から離れない $d$ の範囲を求めよ。

![原題の鉛直ばね系と重ねた物体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_dynamics-1-original.png)

#### 题目描述

如图，质量为 $2m$ 的物体 A 和质量为 $m$ 的物体 B 通过弹簧常数为 $6k$、$4k$ 的无质量弹簧沿竖直方向连接。B 上固定有质量为 $m$ 的物体 C，与 B 一起运动。从静平衡状态将 A 向下压 $d$、B 向下压 $2d$，保持静止后轻轻释放，使其自由振动。A、B 相对静平衡位置的位移分别为 $x_1,x_2$，均以竖直向下为正。重力加速度为 $g$，各物体只沿竖直方向运动。回答下列问题。（50分）

**(1)** 求自由振动时系统的运动方程。

**(2)** 求固有角频率和固有振型。

**(3)** 以自由振动开始时刻为 $t=0$，将 $t>0$ 时的 $x_1,x_2$ 表示为时间函数。

**(4)** 考虑 C 不固定、仅放置于 B 上的情况。设 B、C 之间的内力为 $F$，两物体相互挤压的方向为正。推导 C 与 B 一起运动时 C 的运动方程，并将自由振动时的内力 $F$ 表示为时间函数。进一步求自由振动过程中 C 不离开 B 所需的 $d$ 范围。

## **Kai**

### (1)

静的平衡を原点とすると、重力とばねの静的な力が相殺される。

$$
\boxed{\begin{gathered}
2m\ddot x_1+10kx_1-4kx_2=0,\\
2m\ddot x_2-4kx_1+4kx_2=0.
\end{gathered}}
$$

### (2)

$$
\begin{gathered}
\det\begin{pmatrix}10k-2m\omega^2&-4k\\-4k&4k-2m\omega^2\end{pmatrix}
=4(m\omega^2-k)(m\omega^2-6k)\\
=0.
\end{gathered}
$$

よって

$$
\boxed{\begin{gathered}
\omega_1=\sqrt{k/m},\\
\boldsymbol\phi_1=(1,2)^T,\\
\omega_2=\sqrt{6k/m},\\
\boldsymbol\phi_2=(-2,1)^T.
\end{gathered}}
$$

### (3)

初期変位 $(d,2d)^T$ は第 1 モードに一致し、初速度はゼロなので

$$
\boxed{x_1=d\cos\omega_1t,\qquad x_2=2d\cos\omega_1t.}
$$

### (4)

下向きを正とする C の運動方程式は $m\ddot x_2=mg-F$。したがって

$$
\boxed{F(t)=mg-m\ddot x_2=mg+2kd\cos\omega_1t.}
$$

接触を保つ条件は全時刻で $F\ge0$。$d\ge0$ より

$$
\boxed{0\le d\le\frac{mg}{2k}.}
$$

等号では一瞬だけ接触力がゼロとなるが、必要接触力は負にならないため離脱しない。
