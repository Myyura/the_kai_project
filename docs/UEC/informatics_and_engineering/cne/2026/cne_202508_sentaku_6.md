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

D フリップフロップからなる LFSR1 の次状態は

$$
(X_0^+,X_1^+,X_2^+,X_3^+)
=(X_3,X_0,X_1\oplus X_3,X_2)
$$

である。初期状態 $1000$ から 16 CLK 後の状態を求めよ。初期時刻から順に数字 $0,1,2,3,4,5$ を表示する 7SEG1 について、入力と点灯出力 $a,\ldots,g$ の真理値表、および NOT、OR、NAND、XOR を各 1 個だけ用いた $b,g,c$ の回路を示せ。セグメントは $a$ が上、$b,c$ が右上・右下、$d$ が下、$e,f$ が左下・左上、$g$ が中央であり、出力 $1$ で点灯する。

LFSR2 は

$$
Y_0^+=\overline{Y_0},\qquad
(Y_1^+,Y_2^+,Y_3^+,Y_4^+)
=(Y_4,Y_1\oplus Y_4,Y_2\oplus Y_4,Y_3\oplus Y_4)
$$

で動作する。10 進カウンタとなる初期状態の条件を求めよ。最後に LFSR1、LFSR2、7SEG1、および $Y_0,\ldots,Y_4$ から数字 $0,\ldots,9$ を表示する 7SEG2 を直結し、$00$ から $59$ まで繰り返しカウントする接続と必要条件を示せ。

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
