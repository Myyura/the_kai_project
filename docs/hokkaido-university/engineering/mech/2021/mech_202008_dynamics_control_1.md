---
sidebar_label: "2020年8月実施 機械力学・制御工学 問1"
tags:
  - Hokkaido-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 機械力学・制御工学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図1(a)のように，回転軸 O まわりに回転する半径 $R$，質量 $M$ の一様な円板がある。この回転軸は円板の中心 O を通り円板と垂直である。回転軸 O から鉛直上方に距離 $a$ 離れた点 E および回転軸 O からそれぞればね定数 $k_1$ および $k_2$ のばねが水平に配置され，点 A および点 B において壁に接続している。このとき，ばねは自然長の状態で円板は静止している。また，円板の下端は床と接触しており円板は床に対して滑りのない純転がり運動を行うものとする。円板と床の間に発生する摩擦力は $F$ とする。図1(b)のように，円板を水平方向右向きに微小変位 $x$ だけ移動させると円板は右回りに微小角 $\theta$ だけ回転した。このとき静かに手を離すと円板は床から離れることなく水平方向に振動を始めた。以下の問いに答えなさい。

![図1 円板と2本のばね](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_dynamics_control_1_original_figure_1.png)

(1) 円板の回転軸 O まわりの慣性モーメント $I$ は $MR^2/2$ で表される。これを導出しなさい。

(2) 円板の水平方向の並進運動に関する運動方程式を求めなさい。

(3) 円板の回転運動に関する運動方程式を求めなさい。

(4) 円板の運動全体に関する運動方程式を $\theta$ について求めなさい。このとき，摩擦力 $F$ は用いずに示しなさい。

(5) 円板の運動の固有振動数 $\omega_0$ を求めなさい。

(6) 図2(a)のように，ばね定数 $k_1$ のばねを点 D（円板の上端）から水平に配置し点 A′ において壁に接続させた。続いて，図2(b)のように水平方向右向きに微小変位 $x$ だけ移動させると円板は右回りに微小角 $\theta$ だけ回転した後，静かに手を離すと水平方向に振動を始めた。このとき得られる円板の固有振動数 $\omega_1$ は (5) で求めた固有振動数 $\omega_0$ の $1.5$ 倍となった。$k_1=k_2$ としたとき，距離 $a$ を $R$ を用いて求めなさい。

![図2 ばねの取付点を円板上端へ移した場合](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_dynamics_control_1_original_figure_2.png)

### 题目描述

如图1(a)，半径为 $R$、质量为 $M$ 的均匀圆盘绕转轴 O 转动。转轴经过圆盘中心 O，且垂直于圆盘。自 O 点正上方距离 $a$ 的 E 点以及 O 点，分别水平设置弹簧常数为 $k_1,k_2$ 的弹簧，在 A、B 两点与墙连接。此时弹簧均为自然长度，圆盘静止。圆盘下端与地面接触，假定圆盘相对地面做无滑动的纯滚动，圆盘与地面间的摩擦力记为 $F$。如图1(b)，将圆盘向右水平移动微小位移 $x$，圆盘顺时针转过微小角 $\theta$。此时轻轻松手，圆盘保持与地面接触并开始水平振动。回答下列问题。

(1) 圆盘绕 O 轴的转动惯量为 $I=MR^2/2$，推导这一结果。

(2) 求圆盘水平平动的运动方程。

(3) 求圆盘转动的运动方程。

(4) 求圆盘整体运动关于 $\theta$ 的运动方程，表达式中不得使用摩擦力 $F$。

(5) 求圆盘运动的固有频率 $\omega_0$。

(6) 如图2(a)，将弹簧常数为 $k_1$ 的弹簧改为从 D 点（圆盘顶端）水平设置，并在 A′ 点与墙连接。再如图2(b)，将圆盘向右水平移动微小位移 $x$，圆盘顺时针转过微小角 $\theta$ 后，轻轻松手，使其开始水平振动。此时圆盘的固有频率 $\omega_1$ 为 (5) 所求 $\omega_0$ 的 $1.5$ 倍。令 $k_1=k_2$，用 $R$ 表示距离 $a$。

## **Kai**

### (1)

面密度 $M/(\pi R^2)$ の同心円環を積分すると

$$
\boxed{I=\int_0^Rr^2\frac{M}{\pi R^2}2\pi r\,dr=\frac12MR^2}.
$$

### (2), (3)

摩擦力 $F$ を右向き正とする。ばねの微小伸びはそれぞれ $x+a\theta$ と $x$ だから

$$
\boxed{M\ddot x=-k_1(x+a\theta)-k_2x+F}.
$$

時計回りを正とする中心まわりのモーメントは

$$
\boxed{I\ddot\theta=-k_1a(x+a\theta)-FR}.
$$

### (4), (5)

滑りなしの拘束 $x=R\theta$ と並進の式を使って $F$ を消去すると

$$
\boxed{\frac32MR^2\ddot\theta+
[k_1(R+a)^2+k_2R^2]\theta=0},
$$

$$
\boxed{\omega_0=\sqrt{\frac{2[k_1(R+a)^2+k_2R^2]}{3MR^2}}}.
$$

運動エネルギー $\tfrac12(I+MR^2)\dot\theta^2$ とばねエネルギー $\tfrac12[k_1(R+a)^2+k_2R^2]\theta^2$ からも同じ式を得る。

### (6)

上端に移すと $R+a$ が $2R$ になる。$k_1=k_2=k$ より

$$
\frac{\omega_1^2}{\omega_0^2}
=\frac{5R^2}{(R+a)^2+R^2}=\frac94.
$$

$a>0$ を満たす根は

$$
\boxed{a=\frac{\sqrt{11}-3}{3}R\simeq0.106R}.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 4ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
