---
sidebar_label: '2019年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 東京大学 工学系研究科 2019年8月実施 物理学1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

外半径 $2r$、内半径 $r$、質量 $3m$ の円筒と、その内部に隙間なく収まる半径 $r$、質量 $m$ の円柱からなる物体 A を考える。両者は同じ一様な材料の剛体で、中心軸を共有し、円柱は円筒内で回転できる。

I. 中心軸まわりの円筒と円柱の慣性モーメント $I_T,I_C$ を、導出過程とともに求めよ。

II. 傾斜角 $\theta$ の斜面 PQ は粗く、水平面 QR は摩擦がない。A は接触を保ったまま両面の間を滑らかに移り、その際のエネルギー損失はない。水平面上での中心軸の高さを零とし、重力加速度を $g$ とする。以下では $I_T,I_C$ を用いてよい。

1. 円筒と円柱の間の摩擦を無視する。両者を回転させず、中心軸の高さが $h$ の斜面上に静かに置くと、円筒は斜面を滑らずに転がり下りた。水平面に達した直後の重心速度 $v_1$、円筒と円柱の角速度 $\omega_{T1},\omega_{C1}$ を求めよ。
2. 円筒と円柱の間に大きさ $f$ の動摩擦力が働く場合を考える。同じ初期状態から、円筒は斜面を滑らずに転がるが、円柱は円筒と異なる角速度で滑りながら回転した。
   - (i) 斜面下向きを $x$、斜面に垂直な外向きを $y$ とする。重心速度を $v$、両者の角速度を $\omega_T,\omega_C$、相互作用の合力の成分を $N_x,N_y$、斜面から円筒に働く垂直抗力と摩擦力を $N_{PQ},F_{PQ}$ とする。① 円筒の $x,y$ 方向の運動方程式、回転の運動方程式および $v$ と $\omega_T$ の関係式を示せ。② 円柱についても並進と回転の運動方程式を示せ。
   - (ii) 水平面に達した直後の速度を $v_Q,\omega_{TQ},\omega_{CQ}$ とする。やがて円筒と円柱の角速度が等しくなった。① このときの重心速度 $v_R$ と共通角速度 $\omega_R$ を求めよ。② 水平面上での動摩擦によるエネルギー損失を求めよ。
![同軸円筒と円柱、および斜面と水平面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2020/kyotsu_201908_phys_1_rolling_audited.svg)

#### 题目描述

物体 A 由外半径 $2r$、内半径 $r$、质量 $3m$ 的圆筒及嵌入其中的半径 $r$、质量 $m$ 的圆柱组成。二者为同种均匀材料制成的刚体，共轴且间隙可忽略，圆柱可在圆筒内转动。

I. 推导二者关于中心轴的转动惯量 $I_T,I_C$。

II. 倾角为 $\theta$ 的斜面 PQ 有摩擦，水平面 QR 无摩擦。物体保持接触并平滑地从斜面进入水平面，过渡中无能量损失。以水平面上的中心轴高度为零，重力加速度为 $g$，答案可使用 $I_T,I_C$。

1. 忽略圆筒与圆柱间的摩擦。从中心轴高度 $h$ 处静止释放，圆筒沿斜面纯滚动。求刚到水平面时的质心速度 $v_1$ 和角速度 $\omega_{T1},\omega_{C1}$。
2. 二者间存在大小为 $f$ 的动摩擦力。同样从静止释放，圆筒沿斜面纯滚动，圆柱相对圆筒滑动且二者角速度不同。
   - (i) 取沿斜面向下为 $x$、垂直斜面向外为 $y$。记质心速度为 $v$、角速度为 $\omega_T,\omega_C$，二者相互作用合力的分量为 $N_x,N_y$，斜面对圆筒的支持力和摩擦力为 $N_{PQ},F_{PQ}$。① 列出圆筒的两个平动方程、转动方程及 $v$ 与 $\omega_T$ 的约束。② 列出圆柱的平动与转动方程。
   - (ii) 刚到水平面时的速度为 $v_Q,\omega_{TQ},\omega_{CQ}$，最终角速度相等。① 求最终质心速度 $v_R$ 与共同角速度 $\omega_R$。② 求水平面上内摩擦造成的能量损失。

## **Kai**

### I.

軸方向の長さを $\ell$、密度を $\rho=m/(\pi r^2\ell)$ とする。半径 $s$ の薄い円筒殻を積分して

$$
I_T=2\pi\rho\ell\int_r^{2r}s^3\,ds=\boxed{\frac{15}{2}mr^2},\qquad
I_C=2\pi\rho\ell\int_0^r s^3\,ds=\boxed{\frac12mr^2}.
$$

### II.1

円柱に軸まわりのトルクが働かないので $\omega_{C1}=0$。円筒の転がり条件とエネルギー保存より

$$
v_1=2r\omega_{T1},\qquad
4mgh=\frac12(4m)v_1^2+\frac12I_T\omega_{T1}^2.
$$

したがって

$$
\boxed{v_1=\sqrt{\frac{8mgh}{4m+I_T/(4r^2)}}
=\frac8{\sqrt{47}}\sqrt{gh}},\qquad
\boxed{\omega_{T1}=\frac{v_1}{2r},\quad\omega_{C1}=0}.
$$

### II.2(i)

角速度は斜面を下る転がりの向きを正とする。$N_x,N_y$ は円筒から円柱に働く合力の成分、$F_{PQ}$ は斜面上向きの摩擦力の大きさと定める。

① 円筒について

$$
\boxed{\begin{aligned}
3m\dot v&=3mg\sin\theta-N_x-F_{PQ},\\
0&=N_{PQ}-3mg\cos\theta-N_y,\\
I_T\dot\omega_T&=2rF_{PQ}-rf,\\
v&=2r\omega_T.
\end{aligned}}
$$

② 円柱について

$$
\boxed{\begin{aligned}
m\dot v&=mg\sin\theta+N_x,\\
0&=N_y-mg\cos\theta,\\
I_C\dot\omega_C&=rf.
\end{aligned}}
$$

### II.2(ii)

① 水平面は摩擦がないので水平運動量が保存される。また重心まわりの外力のトルクは零である。よって

$$
\boxed{v_R=v_Q},\qquad
I_T\omega_{TQ}+I_C\omega_{CQ}=(I_T+I_C)\omega_R,
$$

$$
\boxed{\omega_R=\frac{I_T\omega_{TQ}+I_C\omega_{CQ}}{I_T+I_C}
=\frac{15\omega_{TQ}+\omega_{CQ}}{16}}.
$$

水平面上では転がり条件 $v_R=2r\omega_R$ を課す必要はない。

② 並進エネルギーは変わらないから、失われるエネルギーは

$$
\begin{aligned}
\Delta E&=\frac12I_T\omega_{TQ}^2+\frac12I_C\omega_{CQ}^2
-\frac12(I_T+I_C)\omega_R^2\\
&=\boxed{\frac{I_TI_C}{2(I_T+I_C)}(\omega_{TQ}-\omega_{CQ})^2
=\frac{15mr^2}{64}(\omega_{TQ}-\omega_{CQ})^2}.
\end{aligned}
$$

