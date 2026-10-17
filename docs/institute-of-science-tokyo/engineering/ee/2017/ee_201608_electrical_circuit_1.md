---
sidebar_label: "2016年8月実施 電気回路1"
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Kirchhoff-Laws
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Damping
  - Mathematics.Differential-Equations.Laplace-Transform
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電気回路1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1.1に示す RLC 回路で $t=0$ にスイッチ SW を閉じた。ここに $t=0$ におけるコンデンサ電圧 $v_c$、インダクタ電流 $i_L$ はともに $0$ とする。

1) 回路方程式をもとにコンデンサ電圧 $v_c(t)$ のラプラス変換を表す式を導け。

2) 1) で求めたコンデンサ電圧 $v_c(t)$ のラプラス変換について、その極が互いに共役な複素数となるために抵抗 $R$ が満たすべき条件を求めよ。

3) 2) で求めた極が共役複素数となる場合に対して、ラプラス逆変換によりコンデンサ電圧 $v_c(t)$ の時間変化を表す式を求めよ。

4) 3) で求めたコンデンサ電圧 $v_c(t)$ の時間変化の概形を図示せよ。また代表的な値を図中に示せ。

![抵抗と並列LCからなる回路（図1.1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit1-original.png)

［逆ラプラス変換表］$\mathcal L^{-1}$ はラプラス逆変換を表す。$\mathrm u(t)$ は単位段関数。

$$
\mathcal L^{-1}\!\left[\frac1s\right]=\mathrm u(t),\qquad
\mathcal L^{-1}\!\left[\frac1{s+a}\right]=e^{-at}
$$

$$
\begin{aligned}
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2+b^2}\right]
&=\lambda e^{-at}\cos(bt)\\
&\quad+\frac1b(\mu-a\lambda)e^{-at}\sin(bt)
\end{aligned}
$$

$$
\begin{aligned}
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2-b^2}\right]
&=\lambda e^{-at}\cosh(bt)\\
&\quad+\frac1b(\mu-a\lambda)e^{-at}\sinh(bt)
\end{aligned}
$$

#### 题目描述

图1.1所示的 RLC 电路在 $t=0$ 时闭合开关 SW。设 $t=0$ 时的电容电压 $v_c$ 和电感电流 $i_L$ 均为 $0$。

1) 根据电路方程，推导表示电容电压 $v_c(t)$ 的拉普拉斯变换的表达式。

2) 对 1) 求得的电容电压 $v_c(t)$ 的拉普拉斯变换，求其极点为互为共轭的复数时电阻 $R$ 应满足的条件。

3) 对于 2) 中极点为共轭复数的情形，利用拉普拉斯逆变换，求表示电容电压 $v_c(t)$ 随时间变化的表达式。

4) 画出 3) 中电容电压 $v_c(t)$ 随时间变化的概略图，并在图中标出代表性数值。

［拉普拉斯逆变换表］$\mathcal L^{-1}$ 表示拉普拉斯逆变换，$\mathrm u(t)$ 为单位阶跃函数。

$$
\mathcal L^{-1}\!\left[\frac1s\right]=\mathrm u(t),\qquad
\mathcal L^{-1}\!\left[\frac1{s+a}\right]=e^{-at}
$$

$$
\begin{aligned}
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2+b^2}\right]
&=\lambda e^{-at}\cos(bt)\\
&\quad+\frac1b(\mu-a\lambda)e^{-at}\sin(bt)
\end{aligned}
$$

$$
\begin{aligned}
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2-b^2}\right]
&=\lambda e^{-at}\cosh(bt)\\
&\quad+\frac1b(\mu-a\lambda)e^{-at}\sinh(bt)
\end{aligned}
$$

## **Kai**

### 1)

キルヒホッフの法則から

$$
E=R\left(i_L+C\frac{dv_c}{dt}\right)+v_c,
\qquad v_c=L\frac{di_L}{dt}.
$$

ゼロ初期条件を用いてラプラス変換すると

$$
\frac Es=R\left(\frac{V_c(s)}{sL}+CsV_c(s)\right)+V_c(s).
$$

従って

$$
\boxed{V_c(s)=\frac{E}{RCs^2+s+R/L}
=\frac{E/(RC)}{s^2+s/(RC)+1/(LC)}}.
$$

### 2)

特性方程式の判別式が負となる条件は

$$
\frac1{R^2C^2}-\frac4{LC}<0,
\qquad \boxed{R>\frac12\sqrt{\frac LC}}.
$$

ここでは $R,L,C>0$ とした。

### 3)

$$
\alpha=\frac1{2RC},\qquad
\omega_d=\sqrt{\frac1{LC}-\frac1{4R^2C^2}}>0
$$

とおくと $V_c(s)=\{E/(RC)\}/\{(s+\alpha)^2+\omega_d^2\}$ なので

$$
\boxed{v_c(t)=\frac{E}{RC\omega_d}e^{-\alpha t}\sin(\omega_dt),\quad t\ge0}.
$$

### 4)

原点から傾き $E/(RC)$ で立ち上がり、$0$ に向かって減衰振動する。零点は $t=n\pi/\omega_d$、包絡線は $\pm E e^{-\alpha t}/(RC\omega_d)$ である。

![コンデンサ電圧の減衰振動と代表的な値](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit1-transient.svg)

図は $\alpha/\omega_d=1/4$ の場合の概形である。初期値 $v_c(0)=0$ と最終値 $v_c(\infty)=0$ を満たす。
