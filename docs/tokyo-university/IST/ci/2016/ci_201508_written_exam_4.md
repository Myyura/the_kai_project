---
sidebar_label: '2015年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 筆記試験 第4問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) **運動学と逆運動学**
2) **力制御の具体的な実現方法（ブロック図を用いて説明せよ）**
3) **不変特徴量**
4) **バックプロパゲーション（誤差逆伝播法）**
5) **自己相関関数とパワースペクトル**
6) **同期回路と非同期回路**
7) **ネットワークセキュリティープロトコルの例（１つ）**
8) **リアルタイム性**

## **Description (English) | AI Translated**
Select four items out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) **Kinematics and Inverse Kinematics**
2) **Concrete implementation method of force control (Explain using a block diagram)**
3) **Invariant features**
4) **Backpropagation (Error Backpropagation Method)**
5) **Autocorrelation function and power spectrum**
6) **Synchronous circuits and asynchronous circuits**
7) **Example of a network security protocol (one example)**
8) **Real-time capability (Real-time property)**

## **Kai**
#### Synchronous circuits and asynchronous circuits
Synchronous circuits and asynchronous circuits are both sequential circuits. In synchronous circuits, there is a unified global CLK signal, usually a DFF as the basic unit, its sequential analysis would be easy (setup time and hold time check), and it is relatively more stable.

In asynchronous circuits, usually a latch works as the basic unit, and there is no global clocks, the operations are triggered by events such as input signal changes. The sequential analysis is difficult, and the circuit is relatively more unstable.