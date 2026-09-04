---
sidebar_label: 2014年3月実施 専門科目 問題4 計算機1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 専門科目 問題4 計算機1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

クロックに同期して，各時刻 $t=1,2,\ldots$ に2つの1ビット信号 $x_t,y_t\in\{0,1\}$ を受け取り，2つの1ビット信号 $z_t,b_t\in\{0,1\}$ を出力する順序回路を考える。各時刻 $t$ において，

$$
(x_tx_{t-1}\cdots x_2x_1)_2-(y_ty_{t-1}\cdots y_2y_1)_2=(z_tz_{t-1}\cdots z_2z_1)_2-b_t\cdot2^t
$$

が成り立つとする。ただし $(\ )_2$ は2進数の値を表す。

(1) $(x_3x_2x_1)_2=3$ かつ $(y_3y_2y_1)_2=5$ のとき，$z_3,z_2,z_1,b_3$ の値をそれぞれ求めよ。

(2) 各時刻 $t$ において，$x_t-y_t=z_t-2b_t+b_{t-1}$ であることを証明せよ。

(3) $x_t,y_t,b_{t-1}$ に関する $z_t$ と $b_t$ の真理値表を書け。

(4) $z_t$ と $b_t$ を $x_t,y_t,b_{t-1}$ に関する最簡積和形（最小論理和形）の論理式で表せ。

### 题目描述

同步时序电路在时刻 $t=1,2,\ldots$ 接收位 $x_t,y_t$，输出位 $z_t,b_t$，满足

$$
(x_tx_{t-1}\cdots x_1)_2-(y_ty_{t-1}\cdots y_1)_2
=(z_tz_{t-1}\cdots z_1)_2-b_t2^t.
$$

1. 当 $(x_3x_2x_1)_2=3$、$(y_3y_2y_1)_2=5$ 时，求 $z_3,z_2,z_1,b_3$。
2. 证明 $x_t-y_t=z_t-2b_t+b_{t-1}$。
3. 写出关于 $x_t,y_t,b_{t-1}$ 的 $z_t,b_t$ 真值表。
4. 将 $z_t,b_t$ 写为最简与或式。

## **Kai**

### (1)

$3-5=-2=6-8$，故 $\boxed{(z_3,z_2,z_1,b_3)=(1,1,0,1)}$。

### (2)

把时刻 $t$ 的等式减去时刻 $t-1$ 的等式，再除以 $2^{t-1}$，即得

$$
x_t-y_t=z_t-2b_t+b_{t-1}.
$$

初始借位 $b_0=0$。

### (3)

令 $x=x_t,y=y_t,b=b_{t-1}$。

| $x$ | $y$ | $b$ | $z_t$ | $b_t$ |
|---|---|---|---|---|
|0|0|0|0|0|
|0|0|1|1|1|
|0|1|0|1|1|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|0|
|1|1|0|0|0|
|1|1|1|1|1|

### (4)

$$
\boxed{z_t=\bar x\bar yb\lor\bar xy\bar b\lor x\bar y\bar b\lor xyb},
$$

$$
\boxed{b_t=\bar xy\lor\bar xb\lor yb}.
$$
