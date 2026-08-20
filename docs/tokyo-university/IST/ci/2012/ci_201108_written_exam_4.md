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
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

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

## **Kai**

#### Kalman filter
Kalman filter is an optimal recursive algorithm giving a better estimate based on noisy sensor data and uncertain predicted data. It dynamically balances the uncertainty of the model against the noise of measurements, providing the minimum mean-square-error estimate for a linear system with correct covariances and zero-mean Gaussian noise.

At step $t$, Kalman filter uses the physical model to predict the current state by the state-transition and control matrices and vectors, getting a predicted current state; and uses the covariance at step $t-1$ to predict the current covariance matrix. Then it updates the state and covariance by the computed Kalman gain. Specifically, for $x_t=Fx_{t-1}+Bu_t+w_t$ and $z_t=Hx_t+v_t$, predict
$\hat x_t^-=F\hat x_{t-1}+Bu_t$ and $P_t^-=FP_{t-1}F^T+Q$. Then compute
$K_t=P_t^-H^T(HP_t^-H^T+R)^{-1}$ and update
$\hat x_t=\hat x_t^-+K_t(z_t-H\hat x_t^-)$ and $P_t=(I-K_tH)P_t^-$.

#### Monte Carlo method

For independent samples $X_1,\ldots,X_N\sim p$, estimate $E_p[f(X)]$ by
$\frac1N\sum_{i=1}^N f(X_i)$. The estimator converges by the law of large numbers, and its standard error is $O(N^{-1/2})$. This also estimates integrals by sampling from a suitable distribution.

#### Learning method of neural networks

For supervised classification, compute predictions by a forward pass, evaluate a loss such as cross-entropy, obtain all parameter gradients by backpropagation, and update the parameters by stochastic gradient descent. Repeat over training samples until a validation or convergence criterion is met.

#### Pipeline hazards

A data hazard occurs, for example, when `ADD R1,...` is immediately followed by an instruction reading `R1`; forwarding or a stall resolves it. A control hazard occurs after a conditional branch because the next program counter is unknown; prediction and, on a wrong prediction, pipeline flushing resolve it.
