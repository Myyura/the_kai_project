---
sidebar_label: '2016年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Wavelet-Transform
  - Electrical-Electronic.Signal-Processing.Cepstrum
  - Data-Science-Artificial-Intelligence.Machine-Learning.Deep-Learning
  - Engineering.Robotics.Zero-Moment-Point
  - Computer-Science.Security.Secure-Sockets-Layer
  - Computer-Science.Security.Targeted-Email-Attack
  - Computer-Science.Graphics.Hough-Transform-for-Line-Detection
  - Computer-Science.Programming.Lambda-Expression
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**
Select four items out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1. **Wavelet transformation**
2. **Cepstrum**
3. **Deep Learning**
4. **ZMP (Zero Moment Point)**
5. **SSL (Secure Socket Layer)**
6. **Targeted e-mail attack**
7. **Hough transform**
8. **Lambda expression in computer programming**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 小波变换。
2. 倒谱。
3. 深度学习。
4. ZMP（零力矩点）。
5. SSL（安全套接层）。
6. 定向电子邮件攻击。
7. 霍夫变换。
8. 程序设计中的 Lambda 表达式。

## **Kai**
**Wavelet transformation**

In signal processing, the Fourier transform helps isolate and recognize stationary signals. The Short Time Fourier transform uses a rolling window of fixed size to add the time domain to the process and assist with non-stationary signals. But for STFT a narrow window has good time resolution but poor frequency resolution, while a wide window has poor time resolution and good frequency resolution. The wavelet transform improves on these ideas and uses translated and scaled copies of a mother wavelet as basis functions. It is possible to change the width and central frequency of the wavelet, i.e. “scaling”, and thereby obtain multiresolution time--frequency analysis.

**Cepstrum**

The cepstrum is essentially the spectrum of the log-magnitude spectrum. For a signal $x(t)$, the real cepstrum is $c(\tau)=F^{-1}[\log|F(x(t))|]$, where $F$ is the Fourier transform and $F^{-1}$ is the inverse Fourier transform. This concept is used a lot in speech recognition; mel-frequency cepstral coefficients use a discrete cosine transform of log mel-filterbank energies.

**Deep Learning**

Deep learning is a type of machine learning algorithms group which is defined by a neural-network type of architecture. This architecture “mimics” the way the human brain works in relation to pattern recognition. Each network is comprised of layers of inner nodes, and uses algorithms such as backpropagation with relation to an error function for the act of “learning”.

**ZMP (Zero Moment Point)**

(Also explained for 2014-Summer exam)

The ZMP is the point on the support plane at which the horizontal components of the moment of the ground-reaction and inertial forces are zero. For a walking robot with coplanar contacts, keeping the ZMP inside the support polygon is a standard dynamic-balance criterion; nonzero velocity and momentum are allowed.

**SSL (Secure Socket Layer)**

SSL, now superseded by TLS, establishes an authenticated encrypted channel. The handshake negotiates algorithms, normally authenticates the server by its certificate (client authentication is optional), and derives session keys. Record data is then protected with symmetric authenticated encryption, not public-key encryption for every message.

**Targeted e-mail attack**

Targeted e-mail attack is an attack in which the attacker targets through the e-mail channel and tries to persuade a victim to run specific actions. Some actions could be opening a link, downloading an attachment, installing software, or disclosing credentials. The motives behind such attacks could be stealing information, gaining control of the target machine, and more.

**Hough transform**

The Hough transform is used in computer vision in regard to edge/shape detection. It is a powerful algorithm which is insensitive to noise and disconnected lines/edges. This algorithm works in a parameter space rather than the image space and uses “voting” over an accumulator to determine shapes. For lines, an edge point $(x,y)$ votes for pairs $(\rho,\theta)$ satisfying $\rho=x\cos\theta+y\sin\theta$; peaks correspond to likely lines.

**Lambda expression in computer programming**
In programming languages, `lambda expressions` are a tool used to define inline anonymous functions. These functions do not need to have names and may capture variables from the lexical environment. For example, a sorting algorithm can receive `lambda x: x.score` as the function used to extract each object's comparison key.
