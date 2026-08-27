---
sidebar_label: 2024年8月実施 選択問題 計算機の基本原理
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Electrical-Electronic.Digital-Logic.Moore-Machine-State-Minimization-and-Encoding
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 計算機の基本原理

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 入力 $I_1,I_2,I_3$ に対応するボタン番号を $O_1O_2$ の二進数で出力し、同時入力時には最大番号を優先するエンコーダについて、真理値表、簡単化した論理式、回路を求めよ。
2. $\mathrm{Reset}=1$ の間、出力 $1,0,0$ を各 1 CLK ずつ繰り返す Moore 型順序回路を、状態
   $$
   S_0=00,\qquad S_1=01,\qquad S_2=10
   $$
   で設計せよ。$\mathrm{Reset}=0$ では $S_0$ とし、アクティブ・ローのクリア端子をもつ D フリップフロップを用いる。

### 题目描述

设计一个三输入优先编码器，给出真值表、最简逻辑式和门电路；再设计输出周期为 $1,0,0$ 的 Moore 状态机，推导次态方程并用带低有效清零端的 D 触发器实现。

## **Kai**

### 1.

#### (1)

| $I_1$ | $I_2$ | $I_3$ | $O_1$ | $O_2$ |
|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

#### (2)

真理値表を簡単化すると、

$$
\boxed{O_1=I_2\lor I_3},
\qquad
\boxed{O_2=I_3\lor(I_1\land\overline{I_2})}.
$$

#### (3)

上式をそのまま AND、OR、NOT ゲートで実現すればよい。

~~~mermaid
flowchart LR
  I2["I2"] --> OR1["OR"]
  I3["I3"] --> OR1
  OR1 --> O1["O1"]

  I2 --> NOT2["NOT"]
  I1["I1"] --> AND2["AND"]
  NOT2 --> AND2
  AND2 --> OR2["OR"]
  I3 --> OR2
  OR2 --> O2["O2"]
~~~

### 2.

#### (1)

$S_1$ の出力だけを $1$ とする。状態遷移は

~~~mermaid
flowchart LR
  S0["S0 / Out=0"] -->|"Reset=1"| S1["S1 / Out=1"]
  S1 -->|"Reset=1"| S2["S2 / Out=0"]
  S2 -->|"Reset=1"| S0
  S0 -->|"Reset=0"| S0
  S1 -->|"Reset=0"| S0
  S2 -->|"Reset=0"| S0
~~~

である。

#### (2)

未使用状態 $AB=11$ を don't care として簡単化すると、

$$
\boxed{A^+=\mathrm{Reset}\,B},
$$

$$
\boxed{
B^+=\mathrm{Reset}\,\overline A\,\overline B
},
\qquad
\boxed{\mathrm{Out}=B}.
$$

#### (3)

2 個の D フリップフロップの入力を

$$
D_A=\mathrm{Reset}\,B,\qquad
D_B=\mathrm{Reset}\,\overline A\,\overline B
$$

とし、両方のアクティブ・ロー・クリア端子に $\mathrm{Reset}$ を接続する。出力は $B$ から取り出す。

~~~mermaid
flowchart LR
  R["Reset"] --> GA["AND"]
  B["B"] --> GA
  GA --> FFA["D-FF A"]
  FFA --> A["A"]

  R --> GB["AND"]
  A --> NA["NOT"]
  B --> NB["NOT"]
  NA --> GB
  NB --> GB
  GB --> FFB["D-FF B"]
  FFB --> B
  B --> OUT["Out"]

  R -. "active-low clear" .-> FFA
  R -. "active-low clear" .-> FFB
~~~
