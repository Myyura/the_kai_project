---
sidebar_label: '2014年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Superscalar-Execution
  - Computer-Science.Security.Cross-Site-Scripting
  - Data-Science-Artificial-Intelligence.Machine-Learning.Support-Vector-Machine
  - Engineering.Mechanics-of-Materials.Strain-Gauge
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Computer-Science.Programming.Just-in-Time-Compilation
  - Electrical-Electronic.Digital-Logic.Pulse-Width-Modulation
  - Computer-Science.Graphics.Optical-Flow
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) スーパースカラ
2) クロスサイトスクリプティング
3) サポートベクターマシン
4) ひずみゲージ
5) 半加算器
6) 実行時コンパイラ (Just-in-time compiler)
7) PWM (pulse width modulation) 制御
8) オプティカルフロー

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Superscalar
2) Cross-site scripting
3) Support Vector Machine
4) Strain gauge
5) Half adder
6) Just-in-time compiler
7) PWM (pulse width modulation) control
8) Optical flow

## **Kai**
#### Half adder
A half adder is a combinational circuit with two bits as input and two bits as output. It takes A and B, and arithmetically compute the sum of A and B and the carry of this addition, where the sum $S=A\oplus B$ (the XOR operation) and $C=AB$ (the AND operation), i.e. it consists of a XOR gate and an AND gate. By connecting 2 half adders and an OR gate, we can build a full adder which also takes an input carry as well.
