---
sidebar_label: 2014年8月実施 専門科目 問題1 電気工学（制御数学）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 専門科目 問題1 電気工学（制御数学）

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 1 のような制御系がある。Fig. 1 (a)と Fig. 1 (b)に含まれる伝達関数 $G(s)$ は同一であり，

$$
G(s)=\frac{s+\sqrt3}{(s+1)^2}e^{-Ls}
$$

で与えられる。ここで，$L>0$ である。Fig. 1 (b)は，Fig. 1 (a)の系において $G(s)$ の前にゲイン要素 $K>0$ を挿入したものである。次の問に答えよ。必要があれば，$\log_{10}2\cong0.3,\log_{10}3\cong0.5$ と近似してよい。

(1) 周波数伝達関数 $G(j\omega)$ の絶対値 $|G(j\omega)|$ と位相角 $\angle G(j\omega)$ [rad] を求めよ。

(2) Fig. 1 (a)において，$|G(j\omega)|=1$ となる周波数，すなわちゲイン交差周波数を $\omega_c$ [rad/s] とする。$\omega_c$ を求めよ。

(3) Fig. 1 (a)において，位相余裕 $PM$ [rad] を $L$ で表せ。

(4) Fig. 1 (a)において，$\angle G(j\omega)=-\pi$ [rad] となる周波数，すなわち位相交差周波数を $\omega_\pi$ [rad/s] とする。$\omega_\pi=\sqrt3$ となるようなむだ時間 $L$ [s] の値を求めよ。

(5) Fig. 1 (a)において，$\omega_\pi=\sqrt3$ とする。ゲイン余裕 $GM$ [dB] を求めよ。

(6) Fig. 1 (b)において，$\omega_\pi=\sqrt3$ とする。目標値が単位ステップ関数であるときの定常偏差を $\varepsilon$ とする。$\varepsilon$ を $K$ で表せ。

(7) Fig. 1 (b)において，$\omega_\pi=\sqrt3$ とする。この制御系において $K$ を大きくしていくと，問(6)で得られた $\varepsilon$ は小さくなるが，安定性が悪くなる。安定性を損なわないときの $\varepsilon$ の下限を求めよ。

### 题目描述

系统 (a) 为单位负反馈系统，开环传递函数为

$$
G(s)=\frac{s+\sqrt3}{(s+1)^2}e^{-Ls},\qquad L>0.
$$

系统 (b) 在 $G(s)$ 前串联正增益 $K$，仍为单位负反馈。

1. 求 $|G(j\omega)|$ 和相位 $\arg G(j\omega)$。
2. 求系统 (a) 的增益交越频率 $\omega_c$。
3. 以 $L$ 表示系统 (a) 的相位裕度 $PM$。
4. 求使系统 (a) 的首次相位交越频率 $\omega_\pi=\sqrt3$ 的 $L$。
5. 在问 (4) 条件下，求系统 (a) 的增益裕度 $GM$（dB）。
6. 在同一 $L$ 下，求系统 (b) 单位阶跃输入的稳态误差 $\varepsilon$。
7. 在系统 (b) 保持稳定的条件下，求 $\varepsilon$ 的下确界。

## **Kai**

### (1)

对 $\omega\ge0$，取连续展开相位，

$$
\boxed{|G(j\omega)|=\frac{\sqrt{\omega^2+3}}{1+\omega^2}},\qquad
\boxed{\arg G(j\omega)=\arctan\frac\omega{\sqrt3}-2\arctan\omega-L\omega}.
$$

### (2)、(3)

$|G(j\omega_c)|=1$ 给出 $\omega_c^4+\omega_c^2-2=0$，故

$$
\boxed{\omega_c=1},\qquad
\boxed{PM=\pi+\frac\pi6-\frac\pi2-L=\frac{2\pi}3-L}.
$$

### (4)

在 $\omega_\pi=\sqrt3$ 处，

$$
\frac\pi4-\frac{2\pi}3-L\sqrt3=-\pi,
$$

故 $\boxed{L=7\pi/(12\sqrt3)}$。

### (5)

$$
|G(j\sqrt3)|=\frac{\sqrt6}4,\qquad
\boxed{GM=20\log_{10}\frac4{\sqrt6}\simeq4.26\,\mathrm{dB}}.
$$

使用题设近似对数可得约 $4\,\mathrm{dB}$。

### (6)

闭环稳定时，由终值定理，

$$
\boxed{\varepsilon=\frac1{1+KG(0)}=\frac1{1+\sqrt3K}}.
$$

### (7)

该 $L$ 下开环相位随 $\omega$ 严格递减，幅值亦严格递减，首次穿过负实轴时最先达到稳定边界。稳定条件为

$$
0<K<K_{\rm cr}=\frac4{\sqrt6}.
$$

因此

$$
\boxed{\varepsilon>\frac1{1+2\sqrt2},\qquad
\inf\varepsilon=\frac1{1+2\sqrt2}}.
$$

下确界只能在 $K\uparrow K_{\rm cr}$ 时逼近；等号对应临界稳定。
