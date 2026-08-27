---
sidebar_label: 2023年8月実施 選択問題 計算機の基本原理
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Electrical-Electronic.Digital-Logic.Signed-Addition-Subtraction-and-Overflow-Detection
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 選択問題 計算機の基本原理

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

5 ビットの 2 の補数表現を入力し、偶数なら $0$、奇数なら絶対値を出力する組合せ回路を構成せよ。また、指定された 7 状態の周期と零状態をもつ 3 ビット同期式順序回路について、状態遷移図、次状態論理式および D フリップフロップによる回路を示せ。

### 题目描述

设计一个组合电路：输入为五位二进制补码，偶数输出零，奇数输出其绝对值；并由给定的三位状态序列求状态转移、次态方程及 D 触发器实现。

## **Kai**

### 1.

#### (1)

正の奇数では絶対値は入力自身であるから、

$$
\boxed{d_3=b_3,\qquad d_2=b_2,\qquad d_1=b_1}.
$$

#### (2)

負の奇数の符号ビットと最下位ビットはともに $1$ である。よって、

$$
\boxed{b_4=1,\qquad b_0=1}.
$$

#### (3)

$b_0=1$ の負数の 2 の補数を取ると、反転後の最下位ビット $0$ に $1$ を加えた時点で加算が終わる。よって $d_3,d_2,d_1$ は $b_3,b_2,b_1$ の反転となる。正数では各ビットをそのまま用いるので、

$$
\boxed{
F_3=b_4\oplus b_3,\quad
F_2=b_4\oplus b_2,\quad
F_1=b_4\oplus b_1,\quad
F_0=1
}.
$$

#### (4)

よって出力は

$$
\boxed{
d_3=b_0(b_4\oplus b_3),\quad
d_2=b_0(b_4\oplus b_2),\quad
d_1=b_0(b_4\oplus b_1),\quad
d_0=b_0
}
$$

である。$d_3,d_2,d_1$ はそれぞれ XOR の出力と $b_0$ を AND に入力し、$d_0$ は $b_0$ を直結すればよい。

~~~mermaid
flowchart LR
  B4["b4"] --> X3["XOR"]
  B3["b3"] --> X3
  B4 --> X2["XOR"]
  B2["b2"] --> X2
  B4 --> X1["XOR"]
  B1["b1"] --> X1
  X3 --> A3["AND"]
  X2 --> A2["AND"]
  X1 --> A1["AND"]
  B0["b0"] --> A3
  B0 --> A2
  B0 --> A1
  A3 --> D3["d3"]
  A2 --> D2["d2"]
  A1 --> D1["d1"]
  B0 --> D0["d0"]
~~~

### 2.

#### (1)

状態遷移図は

~~~mermaid
flowchart LR
  S111["111"] --> S011["011"] --> S001["001"] --> S100["100"] --> S010["010"] --> S101["101"] --> S110["110"] --> S111
  S000["000"] --> S000
~~~

である。

#### (2)

各状態の遷移を比較すると、

$$
\boxed{
Q_1^+=Q_2\oplus Q_3,\qquad
Q_2^+=Q_1,\qquad
Q_3^+=Q_2
}.
$$

#### (3)

3 個の D フリップフロップを共通 CLK で駆動し、

$$
\boxed{D_1=Q_2\oplus Q_3,\qquad D_2=Q_1,\qquad D_3=Q_2}
$$

と接続する。

~~~mermaid
flowchart LR
  Q2["Q2"] --> X["XOR"]
  Q3["Q3"] --> X
  X --> F1["D-FF 1"]
  Q1["Q1"] --> F2["D-FF 2"]
  Q2 --> F3["D-FF 3"]
  C["CLK"] --> F1
  C --> F2
  C --> F3
  F1 --> Q1
  F2 --> Q2
  F3 --> Q3
~~~
