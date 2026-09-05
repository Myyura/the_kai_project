---
sidebar_label: 2018年8月実施 専門科目 問題1 電気工学
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 専門科目 問題1 電気工学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

(3) Fig. 1(d) のような制御系がある。同図において、$r(t),e(t),y(t)$ はそれぞれ目標値、偏差、制御量を表す。次の問に答えよ。ただし、$K$ は定数（$K>0$）である。

(a) この制御系が安定であるための $K$ の値の範囲を求めよ。

(b) この制御系が安定で、かつ定常位置偏差が $0.1$ 以下であるための $K$ の値の範囲を求めよ。

### 題意の要約

[大学公開の原題、1–3 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201808senmon.pdf#page=1)

(1) 入力電圧から直列抵抗 $R$ を経て接地されたコンデンサ $C$ に接続し、コンデンサ電圧を出力とする。(a) 伝達関数を求める。(b) $R=C=1$ の全周波数 Nyquist 軌跡を描き、$\omega=0,1,\infty$ の点を示す。

(2) 同じ直列経路にコイル $L$ を追加する。(a) 伝達関数を求める。(b) $R=L=C=1$ のときのゲインと位相を求める。(c) 直流電源 $E$ をスイッチで接続し、十分時間が経過した後の出力を求める。

### 题目描述

(3) 考虑单位负反馈系统，比例增益 $K>0$，对象传递函数为

$$
P(s)=\frac1{(s+1)(s^2+3s+1)}.
$$

```mermaid
flowchart LR
  R[参考输入 r] -->|正| E((求和))
  E --> K[增益 K]
  K --> P["1 / ((s+1)(s²+3s+1))"]
  P --> Y[输出 y]
  Y -->|负反馈| E
```

(a) 求闭环稳定时 $K$ 的范围；(b) 求同时稳定且稳态位置误差不超过 $0.1$ 时 $K$ 的范围。

## **Kai**

### (1)

**(a)** 由阻抗分压，

$$
\boxed{G_1(s)=\frac1{1+RCs}}.
$$

**(b)** $R=C=1$ 时，$G_1(j\omega)=(1-j\omega)/(1+\omega^2)$。设实部为 $x$、虚部为 $y$，则

$$
\left(x-\frac12\right)^2+y^2=\frac14.
$$

全频率轨迹为圆心 $(1/2,0)$、半径 $1/2$ 的圆，原点为 $|\omega|\to\infty$ 的极限。$\omega$ 从 $-\infty$ 增至 $0$ 时沿上半圆从原点到 $(1,0)$，再沿下半圆返回原点；$\omega=1$ 对应 $(1/2,-1/2)$。

![RC 电路的 Nyquist 曲线](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei/2019/ecei_201808_nyquist.svg)

### (2)

**(a)** 串联 RLC 电路满足 $e=Ri+L\dot i+v$、$i=C\dot v$，故

$$
\boxed{G_2(s)=\frac1{LCs^2+RCs+1}}.
$$

**(b)** $R=L=C=1$ 时，

$$
\boxed{|G_2(j\omega)|=\frac1{\sqrt{(1-\omega^2)^2+\omega^2}}},\qquad
\boxed{\arg G_2(j\omega)=-\operatorname{atan2}(\omega,1-\omega^2)}.
$$

对 $\omega\ge0$，相位从 $0$ 连续下降，经 $\omega=1$ 时的 $-\pi/2$ 趋近 $-\pi$；使用普通 $\arctan$ 时须补上象限。

**(c)** 稳态电容断路，电流为零，电阻、电感压降均为零，故 $\boxed{v_0=E}$。

### (3)(a)

闭环特征多项式为

$$
p(s)=(s+1)(s^2+3s+1)+K=s^3+4s^2+4s+1+K.
$$

Routh 表为

$$
\begin{array}{c|cc}
s^3&1&4\\s^2&4&1+K\\s^1&(15-K)/4&0\\s^0&1+K&0
\end{array}
$$

首列全部为正且 $K>0$，得到 $\boxed{0<K<15}$。

### (3)(b)

单位阶跃输入对应的位置误差为

$$
e_{\mathrm{ss}}=\frac1{1+\lim_{s\to0}KP(s)}=\frac1{1+K}.
$$

由 $e_{\mathrm{ss}}\le0.1$ 得 $K\ge9$，与稳定条件取交集：

$$
\boxed{9\le K<15}.
$$
