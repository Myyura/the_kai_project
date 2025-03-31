---
sidebar_label: '2016年8月実施 筆記試験 第3問'
sidebar_position: 13
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff)

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

## **Kai**
### Wavelet transformation
In signal processing. The Fourier transform help isolate and recognize stationairy signals. The Short Time Fourier transform uses a rolling window of fixed size to add the time domain to the process and assist with non-stationairy signals. But for STFT a narrow window will have good time resolution but poor frequency resolution, while a wide window will have poor time resolution and good frequency resolution. The Wavelet transform improves on these ideas and uses a wavelet with changable "size" as the basis function. It is possible to change the width and central frequency of the wavelet, i.e. "scaling". 

### Cepstrum
The Cepstrum is essentially the spectrum of the spectrum and is defined generally by $C(x(t))=F^{-1}[log[F(x(t))]]$. Where $F$ is the Fourier transform and $F^{-1}$ is the inverse Fourier transform, for a signal $x(t)$. This concept is used a lot in speech recognition (with the cosign transform to replace Fourier).

### Deep Learning
Deep learning is a type of machine learning algorithms group which is defined by a neural network type of architecture. This architecture "mimics" the way the human brain works in relation to pattern recognition. Each network in comprised of layers of inner nodes, and uses algorithms such as Backpropogation with relation to an error function for the act of "learning".

### ZMP (Zero Moment Point)
(Also explained for 2014-Summer exam)

The ZMP is a concept which is used in robotics and especially with walk/run/jump actions. For a stable body it needs $velocity=0$ but on top of that it also needs $momentum=0$. Meaning, that the inertia of the body is 0, otherwise it would develop speed. The ZMP is the point with relation to the center of mass (CoM) which would give zero momentum and make the body stable.

### SSL (Secure Socket Layer)
In networking, SSL is a security mechanism which enables an encrypted connection between a client and a server. It works by a mutual "handshake" between the client and the server through authentication of certificates. The connection itself is using the public-key private-key encryption (prime numbers and modulation) to encrypt the communication.

### Targeted e-mail attack
Targeted email attack is an attack which the attacker targets though the email channel, and tries to persuade a victim to run specific actions. Some actions could be: opening a link, downloading an attachment or installing software. The motives behind such attacks could be stealing information, gaining control of the target machine and more.

### Hough transform
The Hough transform is used in computer vision in regards to edge/shape detection. It is a very powerful algorithm which is insensitive to noise and disconnected lines/edges. This algorithm works in another parameter space which is not the image space and uses "voting" over a vote matrix to determine the edges. In the general case, given the $\phi$ table of a shape we can detect this shape in an image.

### Lambda expression in computer programming
In programming languages `lambda expressions` are a tool used to define inline functions. These functions do not need to have headers and are defined inline. An example for one use of lambda expression could be when a sorting algorithm requires a function which given two objects outputs `-1,0,1` depending on which is larger.