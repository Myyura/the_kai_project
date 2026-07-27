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

#### 考点

- **超标量执行**：说明处理器每周期并行发射、执行多条指令所需的依赖检查与多执行单元。
- **跨站脚本攻击**：说明恶意脚本注入可信网页并在用户浏览器执行的机制与输出转义等防护。
- **支持向量机**：说明最大间隔分类、支持向量和核函数的作用。
- **应变片**：说明导体形变引起电阻变化，并通过电桥测量应变。
- **半加器**：说明两个输入位的和位、进位真值关系及 XOR、AND 实现。
- **即时编译**：说明运行时把中间代码或热点代码编译为本机代码的性能取舍。
- **PWM 控制**：说明以固定周期改变占空比来调节平均功率或执行器输出。
- **光流**：说明由连续图像亮度模式的表观运动估计像素速度场。

## **Kai**
#### Half adder
A half adder is a combinational circuit with two bits as input and two bits as output. It takes A and B, and arithmetically compute the sum of A and B and the carry of this addition, where the sum $S=A\oplus B$ (the XOR operation) and $C=AB$ (the AND operation), i.e. it consists of a XOR gate and an AND gate. By connecting 2 half adders and an OR gate, we can build a full adder which also takes an input carry as well.
