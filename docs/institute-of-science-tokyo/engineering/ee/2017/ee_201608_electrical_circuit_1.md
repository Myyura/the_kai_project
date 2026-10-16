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

図1.1の RLC 回路で $t=0$ にスイッチ SW を閉じる。初期コンデンサ電圧 $v_c(0)$ とインダクタ電流 $i_L(0)$ はともに $0$ とする。

![抵抗と並列LCからなる回路（図1.1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit1-original.png)

図：東京工業大学 電気電子系 2016年実施問題、図1.1（原図）。

1. 回路方程式に基づいて、コンデンサ電圧 $v_c(t)$ のラプラス変換を導け。
2. 1) の極が互いに共役な非実複素数となるための抵抗 $R$ の条件を求めよ。
3. 2) の条件下で、逆ラプラス変換により $v_c(t)$ を求めよ。
4. 3) の時間変化の概形を図示し、代表的な値を図中に示せ。

必要ならば以下の逆ラプラス変換を用いてよい。$\mathrm u(t)$ は単位段関数である。

$$
\begin{aligned}
\mathcal L^{-1}\!\left[\frac1s\right]&=\mathrm u(t),&
\mathcal L^{-1}\!\left[\frac1{s+a}\right]&=e^{-at},\\
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2+b^2}\right]
&=\lambda e^{-at}\cos bt+\frac{\mu-a\lambda}{b}e^{-at}\sin bt,\\
\mathcal L^{-1}\!\left[\frac{\lambda s+\mu}{(s+a)^2-b^2}\right]
&=\lambda e^{-at}\cosh bt+\frac{\mu-a\lambda}{b}e^{-at}\sinh bt.
\end{aligned}
$$

#### 题目描述

图示电路为直流电源 $E$ 经开关和电阻 $R$ 给并联电感 $L$、电容 $C$ 供电。初始电容电压和电感电流均为零，$t=0$ 合闸。1) 求电容电压的拉普拉斯变换；2) 求出现非实共轭极点的电阻条件；3) 在该条件下求电压时域表达式；4) 画出波形并标明代表值。可使用上面的逆变换表。

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
