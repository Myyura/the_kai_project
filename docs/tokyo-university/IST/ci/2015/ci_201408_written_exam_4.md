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
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

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

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 超标量处理器。
2. 跨站脚本攻击。
3. 支持向量机。
4. 应变片。
5. 半加器。
6. 即时编译器（JIT）。
7. PWM（脉宽调制）控制。
8. 光流。

## **Kai**
#### Half adder
A half adder is a combinational circuit with two bits as input and two bits as output. It takes $A$ and $B$, and arithmetically computes the sum of $A$ and $B$ and the carry of this addition, where the sum $S=A\oplus B$ (the XOR operation) and $C=AB$ (the AND operation), i.e. it consists of an XOR gate and an AND gate. By connecting two half adders and an OR gate, we can build a full adder which also takes an input carry as well.

#### Superscalar

A superscalar processor can issue and execute more than one instruction per clock cycle using multiple functional units. It checks data and structural dependencies, and may use register renaming and out-of-order scheduling. The achieved throughput is limited by dependencies, branches, and available units.

#### Support Vector Machine

For binary classification, an SVM chooses the separating hyperplane with maximum margin; only the closest training points, the support vectors, determine it. Soft-margin SVMs allow violations through slack variables. A kernel replaces inner products to obtain nonlinear decision boundaries.

#### Just-in-time compiler

A JIT compiler translates bytecode or an intermediate representation into native code during execution. Runtime profiles identify hot code and enable specialization and optimization; the cost is compilation delay and extra memory. Managed runtimes such as Java and .NET commonly use JIT compilation.
