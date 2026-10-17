---
sidebar_label: "2021年8月実施 航空宇宙システム学（午後）"
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.DC-Motor-Dynamics
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 航空宇宙システム学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)

航空宇宙システム学（午後）

図1に示すように、時刻 $t$ において、粘性減衰トルクを発生させる軸受（粘性減衰係数は $c$）で支えられた慣性モーメント $J$ の回転系に、トルク $\tau(t)$ が働く。回転の角速度を $\omega(t)$ とする。時刻 $t<0$ において、$\omega(t)$ はゼロである。以下の設問に答えよ。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_systems_original_figure_1.png)

**第1問** 系の運動方程式を記せ。

**第2問** トルクから角速度への伝達関数 $G(s)$ を求めよ。$s$ はラプラス変換のパラメータで、トルクおよび角速度のラプラス変換をそれぞれ $T(s),\Omega(s)$ とする。

**第3問** $G(s)$ および $sG(s)$ のベクトル軌跡を描け。

**第4問** 目標角速度との偏差をフィードバックして、角速度を比例制御する。比例制御のゲインを $K_P$ とするとき、目標値から出力までの伝達関数およびステップ応答を求めよ。

**第5問** 目標角速度との偏差をフィードバックして、角速度を積分制御する。積分制御のゲインを $K_I$ とするとき、目標値から出力までの伝達関数を求めよ。また、ステップ応答のグラフの概略を描け。さらに、トルクのラプラス変換 $T(s)$ を求めよ。

**第6問** トルクを与えるためのモータを電圧で制御する。電圧、電流のラプラス変換をそれぞれ $E(s),I(s)$ とするとき、

$$
(Ls+R)I(s)=E(s)-K\Omega(s),\qquad T(s)=DI(s)
$$

の関係がある。ここで、$L,R,K,D$ は正の定数である。電圧から角速度への伝達関数を求めよ。

**第7問** 第6問において、目標角速度との偏差をフィードバックして、角速度を積分制御（ゲインは $K_I$）する。制御の安定性について議論せよ。

#### 题目描述

航空宇宙系统学（下午）

如图1，在时刻 $t$，转矩 $\tau(t)$ 作用于转动惯量为 $J$ 的旋转系统。该系统由产生黏性阻尼转矩的轴承支承，黏性阻尼系数为 $c$，角速度为 $\omega(t)$。在 $t<0$ 时，$\omega(t)=0$。回答下列问题。

**第1问** 写出系统运动方程。

**第2问** 求转矩到角速度的传递函数 $G(s)$。$s$ 为拉普拉斯变换参数，转矩和角速度的拉普拉斯变换分别为 $T(s),\Omega(s)$。

**第3问** 画出 $G(s)$ 和 $sG(s)$ 的向量轨迹。

**第4问** 将目标角速度与实际角速度的偏差反馈，对角速度实行比例控制。比例增益为 $K_P$。求从目标值到输出的传递函数及阶跃响应。

**第5问** 将角速度偏差反馈，实行增益为 $K_I$ 的积分控制。求从目标值到输出的传递函数，画出阶跃响应概略图，并求转矩的拉普拉斯变换 $T(s)$。

**第6问** 用电压控制提供转矩的电动机。电压、电流的拉普拉斯变换分别为 $E(s),I(s)$，满足

$$
(Ls+R)I(s)=E(s)-K\Omega(s),\qquad T(s)=DI(s).
$$

其中 $L,R,K,D$ 均为正常数。求电压到角速度的传递函数。

**第7问** 在第6问的系统中，将角速度偏差反馈，进行增益为 $K_I$ 的积分控制。讨论控制系统稳定性。

## **Kai**

### 第1・2問

$$
\boxed{J\dot\omega+c\omega=\tau},\qquad
\boxed{G(s)=\frac{\Omega(s)}{T(s)}=\frac1{Js+c}}.
$$

### 第3問

周波数を $\nu\ge0$ と書くと

$$
G(j\nu)=\frac{c-jJ\nu}{c^2+J^2\nu^2},\qquad
j\nu G(j\nu)=\frac{J\nu^2+jc\nu}{c^2+J^2\nu^2}.
$$

それぞれ

$$
\left(\Re G-\frac1{2c}\right)^2+(\Im G)^2=\frac1{4c^2},
$$

$$
\left(\Re(j\nu G)-\frac1{2J}\right)^2+[\Im(j\nu G)]^2=\frac1{4J^2}.
$$

$G$ は $1/c$ から原点へ下半円を進み、$j\nu G$ は原点から $1/J$ へ上半円を進む。負の周波数の軌跡は実軸に関する鏡像である。

![GとsGのベクトル軌跡。矢印は正周波数の増加方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_systems_loci.svg)

### 第4問

目標値を $\Omega_r(s)$ とすると

$$
\boxed{W_P(s)=\frac{\Omega}{\Omega_r}=\frac{K_P}{Js+c+K_P}}.
$$

振幅 $\omega_0$ のステップ目標に対して

$$
\boxed{\omega(t)=\frac{K_P}{c+K_P}\omega_0\left(1-e^{-(c+K_P)t/J}\right)}.
$$

定常偏差は $c\omega_0/(c+K_P)$ である。

### 第5問

制御器は $K_I/s$ なので

$$
\boxed{W_I(s)=\frac{K_I}{Js^2+cs+K_I}}.
$$

$\omega_n=\sqrt{K_I/J},\ \zeta=c/(2\sqrt{JK_I})$ とおく。正の $J,c,K_I$ に対して安定で、定常出力は $\omega_0$。$x=\omega_nt$ とするとステップ応答は

$$
\frac{\omega(t)}{\omega_0}=
\begin{cases}
1-e^{-\zeta x}\left[\begin{gathered}\cos(\sqrt{1-\zeta^2}\,x)\\+\dfrac\zeta{\sqrt{1-\zeta^2}}\sin(\sqrt{1-\zeta^2}\,x)\end{gathered}\right],&0<\zeta<1,\\[5pt]
1-(1+x)e^{-x},&\zeta=1,\\[3pt]
1-e^{-\zeta x}\left[\begin{gathered}\cosh(\sqrt{\zeta^2-1}\,x)\\+\dfrac\zeta{\sqrt{\zeta^2-1}}\sinh(\sqrt{\zeta^2-1}\,x)\end{gathered}\right],&\zeta>1.
\end{cases}
$$

不足減衰では振動して収束し、臨界減衰・過減衰では単調に収束する。

![積分制御のステップ応答。横軸は固有角周波数で規格化した時刻](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_systems_step.svg)

トルクについては $T=(Js+c)\Omega$ より

$$
\boxed{T(s)=\frac{K_I(Js+c)}{Js^2+cs+K_I}\Omega_r(s)}.
$$

ステップ入力なら $\Omega_r=\omega_0/s$ を代入する。定常トルクは $c\omega_0$ となる。

### 第6問

$I=(Js+c)\Omega/D$ を電気回路の式に代入して

$$
\boxed{\frac{\Omega(s)}{E(s)}
=\frac{D}{LJs^2+(Lc+RJ)s+Rc+DK}}.
$$

### 第7問

積分負帰還の特性多項式は

$$
LJs^3+(Lc+RJ)s^2+(Rc+DK)s+DK_I.
$$

ラウス表の第1列は

$$
LJ,\quad Lc+RJ,\quad
\frac{(Lc+RJ)(Rc+DK)-LJDK_I}{Lc+RJ},\quad DK_I.
$$

したがって漸近安定の必要十分条件は

$$
\boxed{0<K_I<\frac{(Lc+RJ)(Rc+DK)}{LJD}}.
$$

上限では $s=\pm j\sqrt{(Rc+DK)/(LJ)}$ の虚軸上の極が生じ、漸近安定ではない。上限を超えると不安定となる。第5問と異なり、電気系の遅れによって積分ゲインに上限が生じる。
