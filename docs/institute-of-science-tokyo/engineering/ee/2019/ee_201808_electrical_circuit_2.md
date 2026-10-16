---
sidebar_label: "2018年8月実施 電気回路2"
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
  - Mathematics.Differential-Equations.Laplace-Transform
---
# 東京工業大学 工学院 電気電子系 2018年8月実施 電気回路2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図 2.1 の回路について以下の問に答えよ。インダクタンスを $L$、抵抗を $R$ とする。電圧源の電圧を $E_0$ とする。時刻を $t$ とし、接地を基準電位として電圧 $v_E(t),v_R(t)$ を図 2.1 のように定義する。時刻 $t<0$ ではスイッチ S は B 側に接続されているとし、$v_R(t)=0$ とする。

時刻 $t=0$ でスイッチ S を A 側に接続し、時刻 $t=a$ でスイッチ S を B 側に接続する。また、$u(t)$ を単位ステップ関数とする。時間関数 $f(t)$ のラプラス変換 $F(s)=\mathcal L[f(t)]$ に対して、

$$
F(s)e^{-as}=\mathcal L[f(t-a)u(t-a)]
$$

の関係が成り立つことを用いてよい。ただし、$e$ は自然対数の底である。

(1) 電圧 $v_E(t)$ を、単位ステップ関数 $u(t)$ を用いて表せ。

(2) 電圧 $v_E(t)$ をラプラス変換した $V_E(s)=\mathcal L[v_E(t)]$ を求めよ。

(3) 電圧 $v_R(t)$ をラプラス変換した $V_R(s)=\mathcal L[v_R(t)]$ を求めよ。

以下の問では $a=L/R$ とし、$L,R$ を用いずに答えよ。

(4) (3) の結果を用いて、電圧 $v_R(t)$ を求めよ。ただし、単位ステップ関数 $u(t)$ と $u(t-a)$ を用いよ。

(5) 時刻 $0\le t<a$ での電圧 $v_R(t)$ を、単位ステップ関数を用いずに表せ。

(6) 時刻 $a\le t$ での電圧 $v_R(t)$ を、単位ステップ関数を用いずに表せ。

以下の問では、スイッチ S を時刻 $t=nT$ で A 側に接続し、時刻 $t=nT+a$ で B 側に接続する操作を周期 $T$ で繰り返す場合について考える。ただし、$n$ は 0 以上の整数とする。また、$T=2a$ とする。

(7) 時刻 $nT$ での $v_R(t)$ の値を $v_{\mathrm{sat}}$ とする。十分時間が経った後、$v_{\mathrm{sat}}$ の値は一定値に収束する。このときの $v_{\mathrm{sat}}$ を $E_0,e$ により表せ。

![図2.1 スイッチで駆動するRL直列回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2019/ee_201808_circuit2-fig2-1.png)

図は東京工業大学 2019 年度大学院入試の原題より。

#### 题目描述

图 2.1 为电源电压 $E_0$、电感 $L$、电阻 $R$ 组成的串联回路。$v_E(t),v_R(t)$ 均以地为参考。$t<0$ 时开关接 B，且 $v_R=0$。在 $t=0$ 接 A，在 $t=a$ 接回 B。$u(t)$ 为单位阶跃函数，可使用拉普拉斯变换的时移公式 $\mathcal L[f(t-a)u(t-a)]=e^{-as}F(s)$。

(1) 用阶跃函数表示 $v_E(t)$。

(2) 求 $V_E(s)$。

(3) 求 $V_R(s)$。

以下令 $a=L/R$，结果中不使用 $L,R$。

(4) 根据第 (3) 问求 $v_R(t)$，使用 $u(t),u(t-a)$。

(5) 不使用阶跃函数，写出 $0\le t<a$ 时的 $v_R(t)$。

(6) 不使用阶跃函数，写出 $t\ge a$ 时的 $v_R(t)$。

(7) 将操作按周期 $T=2a$ 重复：$t=nT$ 接 A，$t=nT+a$ 接 B，$n$ 为非负整数。求充分长时间后，周期起点 $t=nT$ 处电压 $v_{\mathrm{sat}}$ 的收敛值，以 $E_0,e$ 表示。

## **Kai**

### (1)

$$
\boxed{v_E(t)=E_0[u(t)-u(t-a)]}.
$$

### (2)

$$
\boxed{V_E(s)=\frac{E_0}{s}(1-e^{-as})}.
$$

### (3)

$i=v_R/R$、$i(0^-)=0$ とし、回路方程式 $v_E-v_R=L\,di/dt$ をラプラス変換すると、

$$
V_E-V_R=\frac{Ls}{R}V_R.
$$

したがって、

$$
\boxed{V_R(s)=\frac{R}{Ls+R}V_E(s)
=\frac{E_0(1-e^{-as})}{s(1+Ls/R)}}.
$$

### (4)

$a=L/R$ とすると、

$$
\frac1{s(1+as)}=\frac1s-\frac1{s+1/a}.
$$

時移公式を用いて逆変換すれば、

$$
\boxed{v_R(t)=E_0\left[(1-e^{-t/a})u(t)
-(1-e^{-(t-a)/a})u(t-a)\right]}.
$$

### (5)

$$
\boxed{v_R(t)=E_0(1-e^{-t/a}),\qquad0\le t<a}.
$$

### (6)

$$
\boxed{v_R(t)=E_0(e-1)e^{-t/a},\qquad t\ge a}.
$$

### (7)

$v_n=v_R(nT)$ とする。A 側に接続してから時間 $a$ 後の電圧は

$$
w_n=E_0+(v_n-E_0)e^{-1}.
$$

B 側に接続してさらに時間 $a$ が経つと、

$$
v_{n+1}=e^{-1}w_n=e^{-2}v_n+E_0(e^{-1}-e^{-2}).
$$

$e^{-2}<1$ より収束し、極限は

$$
v_{\mathrm{sat}}=e^{-2}v_{\mathrm{sat}}+E_0(e^{-1}-e^{-2})
$$

を満たす。したがって、

$$
\boxed{v_{\mathrm{sat}}=\frac{E_0}{e+1}}.
$$
