---
sidebar_label: "2017年度 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 大阪大学 工学研究科 機械工学専攻 2017年度 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の平面連成振り子を考える。2 つの振り子は、それぞれ長さ $\ell$ の棒と質量 $m$ のおもりからなり、支点から距離 $a$ の位置でばね定数 $k$ のばねにより接続されている。両振り子が鉛直下向きのとき、ばねは自然長である。振り子の支点と棒・ばねの接続点は回転支持とする。図2のように左右の振り子の鉛直方向からの傾斜角を $\theta_1,\theta_2$ とし、いずれも反時計回りを正とする。

水平方向に速さ $V$ の風が吹き、左のおもりにのみ、水平方向右向きの力 $c(V-\ell\dot\theta_1)^2$ が作用する。棒とばねの質量、おもりの大きさは無視する。各角は微小で、$\sin\theta_i\simeq\theta_i$、$\cos\theta_i\simeq1-\theta_i^2/2$ と近似できる。$V,c>0$ は定数、重力加速度を $g$ とし、

$$
|\ell\dot\theta_1|\ll V
<\sqrt{\frac{m(ka^2+mg\ell)}{(\sqrt2c\ell)^2}}
$$

を仮定する。

1. 系の運動エネルギー $T$ とポテンシャルエネルギー $U$ を求めよ。
2. 系の運動方程式を求めよ。

風を受けて静止したときの角度を $\theta_{10},\theta_{20}$ とし、それらからの相対変位角を $\phi_1,\phi_2$ とする。$\phi_1,\phi_2$ も微小で、反時計回りを正とする。

3. $\phi_1,\phi_2$ を用いて運動方程式を表せ。
4. 右の振り子に、$\theta_{20}$ を中心とする振幅一定・角振動数 $\omega$ の正弦波状の角運動を与え、定常振動に達したとする。$\phi_1$ の振幅が最大となる $\omega$ を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2017/mech_201608_dynamics_1-question-fig1.png)

#### 题目描述

图1的两个平面摆各由长为 $\ell$ 的无质量杆及质量为 $m$ 的物体组成，在距支点 $a$ 处由刚度为 $k$ 的弹簧连接。两摆均竖直向下时弹簧为自然长度，摆支点及杆与弹簧的连接均可转动。左右摆相对竖直方向的角度为 $\theta_1,\theta_2$，均以逆时针为正。

水平风速为 $V$，仅左侧物体受到向右的力 $c(V-\ell\dot\theta_1)^2$。忽略杆和弹簧的质量以及物体尺寸。角度微小，采用 $\sin\theta_i\simeq\theta_i$、$\cos\theta_i\simeq1-\theta_i^2/2$。$V,c>0$ 为常量，重力加速度为 $g$，且

$$
|\ell\dot\theta_1|\ll V
<\sqrt{\frac{m(ka^2+mg\ell)}{(\sqrt2c\ell)^2}}.
$$

1. 求动能 $T$ 和势能 $U$。
2. 求运动方程。

受风作用静止时的角度为 $\theta_{10},\theta_{20}$，相对它们的小角位移为 $\phi_1,\phi_2$，仍以逆时针为正。

3. 用 $\phi_1,\phi_2$ 表示运动方程。
4. 强制右摆绕 $\theta_{20}$ 作振幅固定、角频率为 $\omega$ 的正弦角运动。系统达到稳态后，求使左摆 $\phi_1$ 的振幅最大的 $\omega$。

## **Kai**

### (1)

微小角の二次まで残すと、ばねの伸びは $a(\theta_2-\theta_1)$ である。よって

$$
\boxed{T=\frac{m\ell^2}{2}(\dot\theta_1^2+\dot\theta_2^2)},
$$

$$
\boxed{U=\frac{mg\ell}{2}(\theta_1^2+\theta_2^2)
+\frac{ka^2}{2}(\theta_1-\theta_2)^2}.
$$

### (2)

右向きの風力は左振り子の正方向にモーメントを与える。速度の一次までとれば

$$
Q_1\simeq c\ell(V-\ell\dot\theta_1)^2
\simeq cV^2\ell-2cV\ell^2\dot\theta_1,
\qquad Q_2=0.
$$

$K=mg\ell+ka^2$ とおくと、Lagrange の方程式は

$$
\boxed{m\ell^2\ddot\theta_1+2cV\ell^2\dot\theta_1
+K\theta_1-ka^2\theta_2=cV^2\ell},
$$

$$
\boxed{m\ell^2\ddot\theta_2+K\theta_2-ka^2\theta_1=0}.
$$

### (3)

静止角は

$$
K\theta_{10}-ka^2\theta_{20}=cV^2\ell,
\qquad K\theta_{20}-ka^2\theta_{10}=0
$$

を満たす。参考として

$$
\theta_{10}=\frac{cV^2\ell K}{K^2-k^2a^4},\qquad
\theta_{20}=\frac{cV^2\ell ka^2}{K^2-k^2a^4}.
$$

$\theta_i=\theta_{i0}+\phi_i$ を (2) に代入して静的つり合いを差し引くと

$$
\boxed{m\ell^2\ddot\phi_1+2cV\ell^2\dot\phi_1
+K\phi_1-ka^2\phi_2=0},
$$

$$
\boxed{m\ell^2\ddot\phi_2+K\phi_2-ka^2\phi_1=0}.
$$

### (4)

右振り子の運動は外部から指定されるので、$\phi_2=B\cos\omega t$ として左側の式を解く。定常振幅を $A_1$ とすると

$$
\frac{A_1}{B}
=\frac{ka^2}{\sqrt{(K-m\ell^2\omega^2)^2
+(2cV\ell^2\omega)^2}}.
$$

分母の二乗を $\omega^2$ の関数として最小化すれば

$$
-2m\ell^2(K-m\ell^2\omega^2)+4c^2V^2\ell^4=0.
$$

よって

$$
\boxed{\omega=\sqrt{\frac{ka^2+mg\ell}{m\ell^2}
-\frac{2c^2V^2}{m^2}}}.
$$

原題の $V$ の上限により根号内は正であり、有限の正の角振動数で振幅が最大となる。
