---
sidebar_label: 2018年8月実施 専門科目 問題1 電気工学（制御・問3）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 専門科目 問題1 電気工学（制御・問3）

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

(3) Fig. 1(d) のような制御系がある。同図において、$r(t),e(t),y(t)$ はそれぞれ目標値、偏差、制御量を表す。次の問に答えよ。ただし、$K$ は定数（$K>0$）である。

(a) この制御系が安定であるための $K$ の値の範囲を求めよ。

(b) この制御系が安定で、かつ定常位置偏差が $0.1$ 以下であるための $K$ の値の範囲を求めよ。

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
