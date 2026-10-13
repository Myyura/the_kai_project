---
sidebar_label: "航空宇宙システム学（午後）"
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.DC-Motor-Dynamics
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2022年度 航空宇宙システム学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)。図の条件は以下に文章で明記する。

慣性モーメント $J$ の回転系が、粘性減衰係数 $c$ の軸受で支えられている。時刻 $t$ の入力トルクを $\tau(t)$、角速度を $\omega(t)$ とし、$t<0$ では $\omega(t)=0$ とする。ラプラス変換をそれぞれ $T(s),\Omega(s)$ と表す。

**第1問** 運動方程式を記せ。

**第2問** トルクから角速度への伝達関数 $G(s)$ を求めよ。

**第3問** $G(s),sG(s)$ のベクトル軌跡を描け。

**第4問** 目標角速度との差を負帰還し、ゲイン $K_P$ で比例制御する。目標値から出力までの伝達関数とステップ応答を求めよ。

**第5問** 同様にゲイン $K_I$ で積分制御する。目標値から出力までの伝達関数を求め、ステップ応答の概形を描け。さらにトルクのラプラス変換 $T(s)$ を求めよ。

**第6問** トルクを与えるモータを電圧制御する。電圧・電流のラプラス変換を $E(s),I(s)$ とし、

$$
(Ls+R)I(s)=E(s)-K\Omega(s),\qquad T(s)=DI(s)
$$

とする。$L,R,K,D$ は正の定数である。電圧から角速度への伝達関数を求めよ。

**第7問** 第6問の系で目標角速度との偏差を負帰還し、ゲイン $K_I$ で積分制御する。制御の安定性を論じよ。

#### 题目描述

转动惯量为 $J$ 的旋转系统由黏性阻尼系数为 $c$ 的轴承支承。输入转矩为 $\tau(t)$，角速度为 $\omega(t)$，$t<0$ 时静止。两者的拉普拉斯变换为 $T(s),\Omega(s)$。

1. 写出运动方程。
2. 求转矩到角速度的传递函数 $G(s)$。
3. 画出 $G(s)$ 与 $sG(s)$ 的频率响应轨迹。
4. 对目标角速度误差作增益为 $K_P$ 的比例负反馈，求闭环传递函数及阶跃响应。
5. 改为增益 $K_I$ 的积分控制，求闭环传递函数，画阶跃响应概形，并求输入转矩的拉普拉斯变换。
6. 电动机满足 $(Ls+R)I=E-K\Omega,T=DI$，其中 $L,R,K,D>0$。求输入电压到角速度的传递函数。
7. 对第6问的系统实施增益 $K_I$ 的积分控制，讨论闭环稳定性。

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

![GとsGのベクトル軌跡。矢印は正周波数の増加方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/engineering/aero/2022/aero_2022_pm_systems_loci.svg)

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
1-e^{-\zeta x}\left[\cos(\sqrt{1-\zeta^2}\,x)+\dfrac\zeta{\sqrt{1-\zeta^2}}\sin(\sqrt{1-\zeta^2}\,x)\right],&0<\zeta<1,\\[5pt]
1-(1+x)e^{-x},&\zeta=1,\\[3pt]
1-e^{-\zeta x}\left[\cosh(\sqrt{\zeta^2-1}\,x)+\dfrac\zeta{\sqrt{\zeta^2-1}}\sinh(\sqrt{\zeta^2-1}\,x)\right],&\zeta>1.
\end{cases}
$$

不足減衰では振動して収束し、臨界減衰・過減衰では単調に収束する。

![積分制御のステップ応答。横軸は固有角周波数で規格化した時刻](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/engineering/aero/2022/aero_2022_pm_systems_step.svg)

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
