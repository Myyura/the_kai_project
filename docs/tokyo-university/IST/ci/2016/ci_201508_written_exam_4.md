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
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20170611141448id_/http://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2015-8-exam.pdf).

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

## **Kai**
#### Synchronous circuits and asynchronous circuits

A synchronous sequential circuit updates its state at specified edges of a shared clock. Flip-flops hold the state, and combinational paths must satisfy setup and hold timing constraints. An asynchronous sequential circuit has no common global clock; state changes are coordinated by input events or local request/acknowledge handshakes. Both can operate reliably when their timing and protocol assumptions hold. Asynchronous design must account for hazards, completion detection and arbitration, while synchronous design must also handle clock skew and crossings between clock domains.

#### Backpropagation (error backpropagation)
For a differentiable feed-forward network, first compute all activations and the loss by a forward pass. Starting at the output, propagate the error backward by the chain rule:

$$
\delta^L=\nabla_{a^L}\mathcal L\odot\sigma'(z^L),\qquad
\delta^l=(W^{l+1})^T\delta^{l+1}\odot\sigma'(z^l).
$$

Then $\partial\mathcal L/\partial W^l=\delta^l(a^{l-1})^T$ and $\partial\mathcal L/\partial b^l=\delta^l$; an optimizer updates the parameters in the negative-gradient direction.

#### Autocorrelation function and power spectrum
For a wide-sense stationary signal $x(t)$, its autocorrelation is
$R_x(\tau)=\mathbb E[x(t+\tau)x^*(t)]$. The power spectral density is its Fourier transform,

$$
S_x(f)=\int_{-\infty}^{\infty}R_x(\tau)e^{-j2\pi f\tau}\,d\tau,
$$

by the Wiener--Khinchin theorem. Conversely, $R_x$ is the inverse Fourier transform of $S_x$, and the average power is $R_x(0)=\int S_x(f)\,df$.

#### Example of a network security protocol: TLS

For example, TLS 1.2 with a certificate-authenticated ephemeral Diffie–Hellman and AES-GCM cipher suite protects application data over a reliable transport. The client validates the server's certificate and its signature on the ephemeral key-exchange parameters. Both sides derive traffic keys from the shared secret, and Finished messages authenticate the handshake transcript. AES-GCM provides confidentiality and integrity for records; authenticated sequence numbers bind records to their order within the connection. Client-certificate authentication is optional. See [TLS 1.2](https://www.rfc-editor.org/rfc/rfc5246) and [AES-GCM cipher suites](https://www.rfc-editor.org/rfc/rfc5288).

#### Kinematics and inverse kinematics

Forward kinematics maps joint variables $q$ to end-effector pose $x=f(q)$ using the mechanism's geometry. Inverse kinematics solves $f(q)=x_d$ for a desired pose; solutions may be multiple, absent or continuous at a singular configuration. For a planar two-link arm, $x=l_1\cos q_1+l_2\cos(q_1+q_2)$ and $y=l_1\sin q_1+l_2\sin(q_1+q_2)$. Inverse kinematics starts from $\cos q_2=(x^2+y^2-l_1^2-l_2^2)/(2l_1l_2)$ and chooses the feasible elbow branch, subject to joint limits. The Jacobian $J=\partial f/\partial q$ relates joint velocities to end-effector velocity.

#### Concrete implementation of force control

For contact along one axis, measure the contact force $F_m$ and set the commanded position velocity to $\dot x_c=K(F_d-F_m)$, with $K>0$. Integrate this command and track $x_c$ with an inner position servo:

```text
Fd --> (+ sum -) --> K --> integrator --> position servo --> robot/contact --> F
           ^                                                               |
           +---------------------- force sensor <---------------------------+
```

Choose the positive axis into the contact. With an ideal inner servo and spring contact $F=k_e(x_c-x_e)$, $k_e>0$, the force follows $\dot F=k_eK(F_d-F)$, so a constant desired force is approached exponentially. In practice, gain selection includes the servo dynamics, sensor noise, delay and actuator limits.

#### Invariant features

An invariant feature takes the same value after a specified transformation, helping recognition despite nuisance changes in viewpoint or object placement. For planar translation, central image moments remove the centroid; normalization by $\mu_{00}^{1+(p+q)/2}$ removes uniform geometric scale. With $\eta_{pq}=\mu_{pq}/\mu_{00}^{1+(p+q)/2}$, the combination $\eta_{20}+\eta_{02}$ is also invariant to in-plane rotation. Such invariance concerns these specified transformations; it does not guarantee invariance to perspective deformation or illumination changes. Descriptors should retain enough information to distinguish the target classes.

#### Real-time capability

A real-time system's correctness depends on both its output and when that output becomes available. A hard real-time task must meet its deadline under the stated workload and execution assumptions; a soft real-time task can tolerate some misses with degraded quality. For example, periodic motor control needs bounded response time, while video playback may occasionally drop a frame. Design uses worst-case execution times, scheduling and bounded blocking to establish response-time guarantees. A low average runtime alone does not establish a deadline guarantee.
