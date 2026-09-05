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

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065550id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2011-8-exam.pdf).

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

All eight items are covered below; only four are required in the examination.

### (1) Feedback control and feedforward control

Feedback uses the measured output to correct the error between the desired and actual behavior, for example $u=K(r-y)$ in a speed controller. It can reject unmeasured disturbances and model errors, but sensor noise, delay and excessive gain may degrade performance or destabilize the loop. Feedforward computes an input from the reference or a measured disturbance and a plant model, for example adding the predicted gravity torque to a robot arm's drive. It acts before an output error develops but cannot correct an unknown disturbance or model error by itself. Combining a feedforward nominal input with feedback correction gives both anticipatory action and error correction.

### (2) Kalman filter

The Kalman filter recursively estimates the state of a linear stochastic system. Under a Gaussian initial state and independent, zero-mean Gaussian process and measurement noise with known covariances, it gives the conditional mean and thus the minimum mean-square-error estimate. Without Gaussianity, the usual assumptions still give the best linear estimator, but need not give the optimal estimator among all nonlinear ones.

For $x_t=Fx_{t-1}+Bu_t+w_t$ and $z_t=Hx_t+v_t$, predict

$$
\hat x_t^-=F\hat x_{t-1}+Bu_t,\qquad P_t^-=FP_{t-1}F^T+Q.
$$

Then update using

$$
K_t=P_t^-H^T(HP_t^-H^T+R)^{-1},\quad
\hat x_t=\hat x_t^-+K_t(z_t-H\hat x_t^-),\quad
P_t=(I-K_tH)P_t^-.
$$

These formulas balance model prediction and sensor information by their uncertainties; the displayed inverse assumes a nonsingular innovation covariance.

### (3) Edge detection: Sobel and Canny

Edges are rapid spatial intensity changes that often mark object boundaries. **Sobel** convolves a grayscale image with derivative kernels such as

$$
G_x=\begin{pmatrix}-1&0&1\\-2&0&2\\-1&0&1\end{pmatrix},\qquad G_y=G_x^T,
$$

then thresholds the magnitude $\sqrt{(G_x*I)^2+(G_y*I)^2}$ to detect large gradients. **Canny** first smooths with a Gaussian, computes gradients, suppresses nonmaxima along the gradient direction to thin edges, and uses high/low thresholds with connectivity-based hysteresis to retain weak edges connected to strong ones. Smoothing and thresholds trade noise suppression against localization and faint-edge detection. These stages are described in the [OpenCV Canny documentation](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html).

### (4) Monte Carlo method

For independent identically distributed samples $X_i\sim p$, estimate $E_p[f(X)]$ by $\hat\mu=N^{-1}\sum_i f(X_i)$. Under integrability it converges by the law of large numbers; if $\operatorname{Var}_p f=\sigma^2<\infty$, it is unbiased with standard error $\sigma/\sqrt N$. For example, with $X_i$ uniform on $[0,1]$, the mean of $X_i^2$ estimates $\int_0^1x^2\,dx=1/3$, with variance $4/(45N)$. General integrals can use importance sampling $f(X)/p(X)$ where the support and moment conditions hold. Randomness does not guarantee a small error for one particular finite sample.

### (5) Learning methods of neural networks

In supervised learning, a forward pass produces predictions, a loss measures disagreement with targets, backpropagation computes parameter derivatives by the chain rule, and stochastic gradient descent updates the parameters. For example, a binary classifier with a sigmoid output $p=\sigma(w^Th+b)$ and cross-entropy loss has output-layer gradients $\partial L/\partial w=(p-y)h$ and $\partial L/\partial b=p-y$; gradients are also propagated into the hidden layers generating $h$. Repeat mini-batch updates with a chosen learning rate, and monitor a separate validation set for model selection or early stopping. This optimizes the training objective, without generally guaranteeing a global optimum or good generalization.

### (6) Pipeline hazards

A **data hazard** occurs when `ADD R1,...` is followed by an instruction reading `R1` before the add has written its result; forwarding from a later stage or stalling until the value becomes available resolves the dependency. A **control hazard** occurs after a conditional branch because the correct next program counter is not yet known; the processor can stall or predict the direction and target, then flush incorrectly fetched instructions if the prediction was wrong. These are two distinct examples requested by the question. A structural hazard, such as two stages contending for one memory port, is another category.

### (7) Microprogram control

A microprogrammed control unit implements each machine instruction as a sequence of microinstructions held in a control store. Each microinstruction selects datapath actions such as register transfers, ALU operations and memory access, and a microsequencer selects the next microaddress using the instruction opcode and condition flags. For instance, a load may execute microsteps for address calculation, a memory read and destination-register writeback. This simplifies implementing complex instruction behavior and can permit fixes in writable control stores. Its control-store access and sequencing overhead must be balanced against the speed and fixed logic of hardwired control; not every processor or every instruction uses microcode.

### (8) Client-server and P2P systems

In a client-server design, designated servers provide services and clients request them. Central administration, consistent policies and data management are convenient, but server capacity can bottleneck and failures require replication or failover; central logical roles do not require a single physical machine. In peer-to-peer systems, peers can both request and supply resources, allowing distributed storage or bandwidth to grow with participation and reducing dependence on one service node. Peer churn, discovery, trust, consistency and access control are more difficult. P2P systems can still use centralized directories or trackers, and are not automatically anonymous or failure-proof. The preferable design depends on workload and administrative requirements.
