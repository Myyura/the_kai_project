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

[Official examination, archived Japanese PDF](https://web.archive.org/web/20200229153159id_/https://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2016-8-exam.pdf).
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

A Fourier transform describes a signal's global frequency content without locating when each feature occurs. The short-time Fourier transform adds time localization using a fixed window, with a tradeoff between time and frequency resolution. A wavelet transform instead analyzes the signal using translated and scaled copies of a mother wavelet, for example $W(a,b)=|a|^{-1/2}\int x(t)\psi^*((t-b)/a)\,dt$. Small scales resolve short, high-frequency features; large scales cover longer, lower-frequency structure. This provides multiresolution analysis of transients and other nonstationary signals. See [continuous wavelet transforms](https://pywavelets.readthedocs.io/en/latest/ref/cwt.html).

**Cepstrum**

The cepstrum is essentially the spectrum of the log-magnitude spectrum. For a signal $x(t)$, the real cepstrum is $c(\tau)=F^{-1}[\log|F(x(t))|]$, where $F$ is the Fourier transform and $F^{-1}$ is the inverse Fourier transform. A zero spectral magnitude requires a convention such as a positive floor before taking its logarithm. This concept is used a lot in speech recognition; mel-frequency cepstral coefficients use a discrete cosine transform of log mel-filterbank energies.

**Deep Learning**

Deep learning uses models with multiple layers of learned representations, typically neural networks that compose affine maps and nonlinear operations. Earlier layers may capture local or simple patterns, and later layers combine them into features useful for the objective. Parameters are commonly trained with backpropagation and a gradient-based optimizer; convolutional networks and transformers are examples. A model's architecture, data, objective and regularization affect what it learns and how well it generalizes.

**ZMP (Zero Moment Point)**

The ZMP is the point on a support plane where the two horizontal components of the moment of the resultant ground-contact wrench vanish. For a horizontal plane through the origin, with $F_z\ne0$, its coordinates are $x_Z=-M_y/F_z$ and $y_Z=M_x/F_z$. Under coplanar, non-slipping contact assumptions, the ZMP lying within the support polygon is a criterion for avoiding tipping; it does not by itself rule out sliding or other loss of balance. Dynamic motion and nonzero momentum are allowed.

**SSL (Secure Socket Layer)**

SSL is the historical predecessor of TLS, providing channel confidentiality and message integrity through a handshake and record protocol. The handshake negotiates algorithms, normally authenticates the server using a certificate, and establishes symmetric keys; client authentication is optional. In SSL 3.0, protected records combine symmetric encryption with a message authentication code. Public-key cryptography is used during suitable handshake modes, rather than separately encrypting every application message. SSL has been superseded by TLS; see the [historical SSL 3.0 specification](https://www.rfc-editor.org/rfc/rfc6101).

**Targeted e-mail attack**

Targeted e-mail attack is an attack in which the attacker targets through the e-mail channel and tries to persuade a victim to run specific actions. Some actions could be opening a link, downloading an attachment, installing software, or disclosing credentials. The motives behind such attacks could be stealing information, gaining control of the target machine, and more.

**Hough transform**

The Hough transform is used in computer vision in regard to edge/shape detection. It can combine votes from disconnected edge fragments and tolerate some missing or noisy points, although strong noise and unsuitable accumulator resolution can create false peaks. This algorithm works in a parameter space rather than the image space and uses “voting” over an accumulator to determine shapes. For lines, an edge point $(x,y)$ votes for pairs $(\rho,\theta)$ satisfying $\rho=x\cos\theta+y\sin\theta$; peaks correspond to likely lines. See [Hough line detection](https://docs.opencv.org/4.x/d9/db0/tutorial_hough_lines.html).

**Lambda expression in computer programming**
In programming languages, `lambda expressions` are a tool used to define inline anonymous functions. These functions do not need to have names and may capture variables from the lexical environment. For example, a sorting algorithm can receive `lambda x: x.score` as the function used to extract each object's comparison key.
