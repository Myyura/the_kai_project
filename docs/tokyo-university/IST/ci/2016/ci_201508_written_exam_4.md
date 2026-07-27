---
sidebar_label: '2015年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Engineering.Robotics.Forward-and-Inverse-Kinematics-of-Serial-Manipulator
  - Engineering.Robotics.Force-Control-Implementation
  - Computer-Science.Graphics.Invariant-Image-Features
  - Data-Science-Artificial-Intelligence.Machine-Learning.Backpropagation
  - Electrical-Electronic.Signal-Processing.Autocorrelation-and-Power-Spectral-Density
  - Electrical-Electronic.Digital-Logic.Synchronous-Circuit
  - Electrical-Electronic.Digital-Logic.Asynchronous-Circuit
  - Computer-Science.Security.Network-Security-Protocols
  - Computer-Science.Operating-Systems.Real-Time-Systems
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 筆記試験 第4問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) **運動学と逆運動学**
2) **力制御の具体的な実現方法（ブロック図を用いて説明せよ）**
3) **不変特徴量**
4) **バックプロパゲーション（誤差逆伝播法）**
5) **自己相関関数とパワースペクトル**
6) **同期回路と非同期回路**
7) **ネットワークセキュリティープロトコルの例（１つ）**
8) **リアルタイム性**

### English (AI translated)
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

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。第 2 项须使用框图，第 7 项须举一个协议实例。

1. 运动学与逆运动学。
2. 力控制的一种具体实现方法。
3. 不变特征量。
4. 反向传播（误差反传）法。
5. 自相关函数与功率谱。
6. 同步电路与异步电路。
7. 网络安全协议。
8. 实时性。

#### 考点

- **串联机械臂正、逆运动学**：说明关节变量与末端位姿之间的正向映射和反求过程。
- **力控制实现**：用框图说明力传感、期望力比较、控制器及执行器构成的闭环。
- **不变图像特征**：说明对平移、旋转、尺度或光照变化保持稳定的特征及用途。
- **反向传播**：说明用链式法则把输出误差逐层传回并计算网络权重梯度。
- **自相关与功率谱**：说明信号时移相关性及其傅里叶变换与功率谱密度的关系。
- **同步与异步电路**：比较有统一时钟的状态更新与由局部事件驱动的状态变化。
- **网络安全协议**：以 TLS、IPsec 等一个实例说明其认证、机密性和完整性机制。
- **实时系统**：说明计算正确性还取决于在截止时间内完成，以及硬、软实时的差别。

## **Kai**
#### Synchronous circuits and asynchronous circuits
Synchronous circuits and asynchronous circuits are both sequential circuits. In synchronous circuits, there is a unified global CLK signal, usually a DFF as the basic unit, its sequential analysis would be easy (setup time and hold time check), and it is relatively more stable.

In asynchronous circuits, usually a latch works as the basic unit, and there is no global clocks, the operations are triggered by events such as input signal changes. The sequential analysis is difficult, and the circuit is relatively more unstable.
