---
sidebar_label: 2025年8月実施 選択問題 計算機の基本原理
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Digital-Logic.Shift-Register
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Electrical-Electronic.Digital-Logic.Counter-Circuit
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 選択問題 計算機の基本原理

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

D フリップフロップと排他的論理和ゲートからなる LFSR について、状態遷移と周期を求めよ。また、7 セグメント表示の真理値表と論理式を与え、2 つの LFSR で $00$ から $59$ までを表示する回路を構成せよ。

### 题目描述

给定两个线性反馈移位寄存器和七段数码管，求寄存器状态与周期、写出真值表和限定门电路，并说明如何连接成 $00$-$59$ 计数显示器。

## **Kai**

### 1.

状態遷移は

$$
1000\to0100\to0010\to0001\to1010\to0101\to1000
$$

となり、周期は $6$ である。$16\equiv4\pmod6$ より、

$$
\boxed{(X_0,X_1,X_2,X_3)=(1,0,1,0)}.
$$

### 2.

#### (i)

| $X_0$ | $X_1$ | $X_2$ | $X_3$ | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |

#### (ii)

NOT、OR、NAND、XOR をそれぞれ 1 個用いて、

$$
\boxed{
b=\overline{X_1X_3},\qquad
g=X_2\oplus X_3,\qquad
c=X_0+\overline{X_2}}
$$

とすればよい。

### 3.

条件は

$$
\boxed{(Y_1,Y_2,Y_3,Y_4)\neq(0,0,0,0)}.
$$

このとき $(Y_1,Y_2,Y_3,Y_4)$ の周期は $5$、$Y_0$ の周期は $2$ である。したがって全体の周期は

$$
\operatorname{lcm}(5,2)=\boxed{10}
$$

である。

### 4.

次のように接続する。

- LFSR1 の $X_0,\ldots,X_3$ を 7SEG1 へ接続する。
- LFSR2 の $Y_0,\ldots,Y_4$ を 7SEG2 へ接続する。
- LFSR2 を外部 CLK で動かし、$Y_1,\ldots,Y_4$ のうち任意の 1 本 $Y_i$ を LFSR1 の CLK に接続する。

LFSR2 は 10 CLK 中に $Y_i$ が 1 回だけ $0\to1\to0$ となる初期値とし、7SEG2 は $Y_i$ の $0\to1$ で表示が $0$ になるようデコーダを設計する。これにより 7SEG2 が 1 の位、7SEG1 が 10 の位となり、$00$ から $59$ までを繰り返し表示できる。
