---
sidebar_label: 2017年8月実施 専門科目 問題1 電気工学（問1）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 専門科目 問題1 電気工学（問1）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

(1) Fig. 1(a) のような制御系がある。同図において、$R(s)$ は目標値、$E(s)$ は偏差、$C(s)$ は制御量、$K$ は正の定数である。次の問に答えよ。

(a) 目標値 $R(s)$ が単位ステップ関数である場合、偏差 $E(s)$ を求めよ。

(b) 定常位置偏差 $\varepsilon_p$ が $0.1$ 未満となるゲイン $K$ の範囲を求めよ。

(c) 開ループ周波数伝達関数 $G_o(j\omega)$ を求めよ。

(d) 位相交差角周波数を求めよ。

(e) この制御系が安定であるためのゲイン $K$ の値の範囲を求めよ。

### 题目描述

(1) 单位负反馈系统的前向传递函数为

$$
G_0(s)=\frac K{(s+1)(s+3)(s+5)},\qquad K>0.
$$

$R(s),E(s),C(s)$ 分别为目标输入、误差与输出。求：(a) 单位阶跃输入时的 $E(s)$；(b) 稳态位置误差 $\varepsilon_p<0.1$ 的 $K$ 范围；(c) 开环频率传递函数 $G_0(j\omega)$；(d) 相位交越频率；(e) 闭环稳定的 $K$ 范围。

```mermaid
flowchart LR
 R["R(s)"] --> S(("+ / −")) --> K["K"] --> G["1/((s+1)(s+3)(s+5))"] --> C["C(s)"]
 C -->|"负反馈"| S
```

## **Kai**

### (a)、(b)

$$
\boxed{E(s)=\frac{(s+1)(s+3)(s+5)}{s\{(s+1)(s+3)(s+5)+K\}}}.
$$

在闭环稳定的前提下，终值定理给出

$$
\varepsilon_p=\frac{15}{15+K}<0.1\iff K>135.
$$

结合 (e)，能实际达到该稳态误差的范围为 $\boxed{135<K<192}$。

### (c)、(d)

$$
\boxed{G_0(j\omega)=\frac K{15-9\omega^2+j(23\omega-\omega^3)}}.
$$

正频率处相位达到 $-\pi$ 时，分母虚部为零且实部为负。由 $23\omega-\omega^3=0$ 得

$$
\boxed{\omega_{pc}=\sqrt{23}},\qquad G_0(j\omega_{pc})=-K/192.
$$

### (e)

闭环特征多项式为 $s^3+9s^2+23s+15+K$。Routh 第一列为

$$
1,\quad9,\quad\frac{192-K}{9},\quad15+K.
$$

故 $\boxed{0<K<192}$。
