---
sidebar_label: 2021年2・3月実施 基礎科目 問題2 電気回路
tags:
  - Tohoku-University
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Damping
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 東北大学 工学研究科 電気・情報系 2021年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
Fig.2 のようにインダクタ $L$, 抵抗 $R$, コンデンサ $C$ の直列回路がある。コンデンサ $C$ が充電され、その電圧は $E_0$ である。時刻 $t = 0$ でスイッチ $S$ を閉じた。$t \geq 0$ の範囲で以下の問に答えよ。

(1) コンデンサ $C$ の電荷 $q(t)$ に関する回路の基本式を微分方程式として記述せよ。

(2) 問(1)の微分方程式で電荷の特解を $q_s(t) = e^{st}$ と仮定して $s$ に関する特性方程式を記述し、その根を求めよ。

(3) 問(2)の特性方程式で $R^2 = 4L/C$ の場合、時刻 $t$ における電荷の一般解 $q(t)$ は式(2A)のように導出できる。このとき電流 $i(t)$ を求め、電流波形の概形(極値を含む)を描け。

$$
\begin{align}
q(t) = CE_0e^{-\frac{R}{2L}t}(1 + \frac{Rt}{2L}) \tag{2A}
\end{align}
$$

(4) 問(3)の場合に、$0 \leq t \leq \infty$ の間に抵抗 $R$ で消費されるエネルギーを求め、このエネルギーが時刻 $t = 0$ でコンデンサ $C$ に蓄えられていた静電エネルギーと等しいことを示せ。必要であれば式(2B)を使用せよ。

$$
\begin{align}
\int_0^{\infty}e^{-at}t^{n - 1}dt = \frac{(n - 1)!}{a^n} \tag{2B}
\end{align}
$$

ただし、$a$ は実数、$n$ は整数とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202103_kiso_2_electrical_circuit.png" width="400"/>
</figure>

### 题目描述

如图 2，电感 $L$、电阻 $R$、电容 $C$ 串联。电容预先充电至电压 $E_0$，在 $t=0$ 闭合开关 $S$。对 $t\ge0$ 回答：

1. 以电容电荷 $q(t)$ 为变量，写出电路微分方程及初始条件。
2. 令特解 $q_s(t)=e^{st}$，写出关于 $s$ 的特征方程并求根。
3. 当 $R^2=4L/C$（临界阻尼）时，已知
   $$
   q(t)=CE_0e^{-\frac{R}{2L}t}\left(1+\frac{Rt}{2L}\right).
   $$
   求电流 $i(t)$，并画出含极值位置的波形概图。
4. 求 $0\le t<\infty$ 内电阻消耗的能量，并证明它等于 $t=0$ 时电容储存的静电能。必要时可用
   $$
   \int_0^\infty e^{-at}t^{n-1}\,dt=\frac{(n-1)!}{a^n}.
   $$

## **Kai**
### (1)

图示电流从电容正极板流出，因此 $i=-q'$。由 Kirchhoff 电压定律，

$$
\boxed{Lq''+Rq'+\frac qC=0,\qquad q(0)=CE_0,\quad q'(0)=0}.
$$

### (2)

代入 $q_s=e^{st}$，得到

$$
\boxed{Ls^2+Rs+\frac1C=0,\qquad s_\pm=\frac{-R\pm\sqrt{R^2-4L/C}}{2L}}.
$$

### (3)

令 $\alpha=R/(2L)>0$。对给定电荷求导，并利用 $R^2=4L/C$：

$$
\boxed{i(t)=-q'(t)=CE_0\alpha^2te^{-\alpha t}=\frac{E_0}{L}te^{-\alpha t}}.
$$

$$
i'(t)=\frac{E_0}{L}e^{-\alpha t}(1-\alpha t).
$$

电流从零增大，在

$$
\boxed{t_{\max}=\frac{2L}{R},\qquad i_{\max}=\frac{2E_0}{eR}}
$$

处达到唯一最大值，再单调衰减至零。

![临界阻尼放电电流](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei/2021/ecei_202103_current.svg)

### (4)

电阻耗能为

$$
\begin{aligned}
W&=R\int_0^\infty i(t)^2\,dt
=\frac{RE_0^2}{L^2}\int_0^\infty t^2e^{-(R/L)t}\,dt\\
&=\frac{RE_0^2}{L^2}\frac{2}{(R/L)^3}
=\frac{2LE_0^2}{R^2}
=\boxed{\frac12CE_0^2}.
\end{aligned}
$$

这等于电容的初始储能；最后电容电压和电感电流均趋于零。
