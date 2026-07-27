---
sidebar_label: '2011年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Feedback-and-Feedforward-Control
  - Electrical-Electronic.Control-Theory.Kalman-Filter
  - Computer-Science.Graphics.Edge-Line-Detection-in-Grayscale-Images
  - Probability-Statistics.Computational-Statistics.Monte-Carlo-Integration
  - Data-Science-Artificial-Intelligence.Machine-Learning.Neural-Network-Training-Methods
  - Computer-Science.Computer-Architecture.Pipeline-Hazards
  - Computer-Science.Computer-Architecture.Microprogrammed-Control
  - Computer-Science.Distributed-Systems.Client-Server-and-Peer-to-Peer-Comparison
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2011年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) フィードバック制御とフィードフォワード制御
2) カルマンフィルタ
3) 画像処理に於けるエッジ抽出法（具体例を２つ挙げて説明すること）
4) モンテカルロ法
5) ニューラルネットワークの学習方法（具体例を１つ挙げて説明すること）
6) パイプラインハザード（具体例を２つ挙げて説明すること）
7) マイクロプログラム制御
8) クライアントサーバーシステムと P2P システムの利害得失

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Feedback control and feedforward control
2) Kalman filter
3) Edge detection methods in image processing (Explain with two examples)
4) Monte Carlo method
5) Learning methods of neural networks (Explain with one example)
6) Pipeline hazards (Explain with two examples)
7) Microprogram (microcode) control
8) Merits and demerits of client-server systems and P2P systems

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。第 3、6 项须各举两个实例，第 5 项须举一个实例。

1. 反馈控制与前馈控制。
2. 卡尔曼滤波。
3. 图像处理中的边缘检测方法。
4. 蒙特卡洛方法。
5. 神经网络的学习方法。
6. 流水线冒险。
7. 微程序（微码）控制。
8. 客户端—服务器系统与 P2P 系统的优缺点。

#### 考点

- **反馈与前馈控制**：比较依据输出误差闭环修正与依据已知扰动、模型预先补偿的作用和局限。
- **卡尔曼滤波**：说明在线性高斯模型中交替进行状态预测和测量更新以获得递归最优估计。
- **灰度图像边缘检测**：用两种具体算子或方法说明如何从亮度梯度中定位边缘。
- **蒙特卡洛积分**：说明通过随机抽样和样本均值近似积分或期望，并分析随机误差。
- **神经网络训练**：以反向传播等实例说明由损失函数梯度更新权重的过程。
- **流水线冒险**：用两个具体例子解释结构、数据或控制依赖如何阻碍重叠执行及其处理方式。
- **微程序控制**：说明控制存储器中的微指令序列如何产生处理器数据通路控制信号。
- **客户端—服务器与 P2P**：比较集中管理、扩展性、容错、资源发现、安全和维护成本。

## **Kai**

#### Kalman filter
Kalman filter is an optimal recursive algorithm giving a better estimate based on noisy sensored data and uncertain predicted data. It dynamically balances the uncertainty of the model against the noise of measurements, providing the optimal estimate in real-time systems.

At step $t$, Kalman filter uses the physical model to predict current state by state transition and control matrix & vector, getting a predicted current state; and uses the covariance at $t-1$ step to predict the current covariance matrix. Then, it updates (posterior estimates) the state and the covariance by computed Kalman gain.
