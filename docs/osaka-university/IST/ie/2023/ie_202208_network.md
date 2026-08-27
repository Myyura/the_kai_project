---
sidebar_label: 2022年8月実施 ネットワーク
tags:
  - Osaka-University
  - Computer-Science.Networks.Transmission-Control-Protocol-and-User-Datagram-Protocol
  - Computer-Science.Networks.Protocol-Throughput-and-Utilization
  - Computer-Science.Networks.Transmission-Control-Protocol-Congestion-Control
---
# 大阪大学 情報科学研究科 情報工学 2022年8月実施 ネットワーク

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

TCPについて答えよ。セグメントサイズを $\mathrm{MSS}$ bit、セグメントの送信開始からACK受信までを $R$ 秒、ふくそうウィンドウサイズを $W$ segmentとする。

- (1) TCPの最大送信レートを $\mathrm{MSS},R,W$ で表せ。
- (2) TCPがセグメント喪失を検出する方法を二つ述べよ。
- (3) ふくそう回避フェーズでは、喪失検出時に $W$ を半減し、喪失しなければ $R$ 秒ごとに1増加させる。$W=W_L$（$W_L$ は偶数）で喪失を検出し、再び $W_L$ となるまで喪失しないものとする。
  - (3-1) 半減後から再び $W_L$ となるまでの時間 $\tau$ を求めよ。
  - (3-2) $\tau$ の間に送信するセグメント数が $3W_L^2/8$ となることを示せ。
  - (3-3) セグメント喪失率を $p$、喪失検出間に送信するセグメント数の期待値を $1/p$ とする。平均送信レートが

$$
\sqrt{\frac32}\frac{\mathrm{MSS}}{R\sqrt p}
$$

で近似されることを示せ。

### 题目描述

设TCP段长为MSS bit、发送至ACK的时间为R、拥塞窗口为W段。求最大速率、列举两种丢包检测，并在AIMD锯齿模型下求恢复时间、周期发送段数及平均吞吐率近似式。

## **Kai**

### (1)

$R$ 秒ごとに最大 $W$ セグメントを送れるので

$$
\boxed{V_{\max}=\frac{W\,\mathrm{MSS}}{R}\ \mathrm{bit/s}}.
$$

### (2)

$$
\boxed{\text{再送タイマのタイムアウト}},\qquad
\boxed{\text{同一ACKの3回重複受信（3 duplicate ACKs）}}.
$$

### (3)

#### (3-1)

増加量は $W_L-W_L/2=W_L/2$ であり、1増加に $R$ 秒を要する。したがって

$$
\boxed{\tau=\frac{W_LR}{2}}.
$$

#### (3-2)

ウィンドウの鋸歯状変化を連続的に近似すると

$$
W(t)=\frac{W_L}{2}+\frac{t}{R}\qquad(0\le t\le\tau).
$$

よって送信セグメント数は

$$
\begin{aligned}
N
&=\int_0^\tau\frac{W(t)}{R}\,dt\\
&=\frac1R\left[\frac{W_Lt}{2}+\frac{t^2}{2R}\right]_0^\tau
=\boxed{\frac{3W_L^2}{8}}.
\end{aligned}
$$

#### (3-3)

$$
\frac{3W_L^2}{8}=\frac1p
\quad\Longrightarrow\quad
W_L=\sqrt{\frac{8}{3p}}.
$$

平均送信レートは

$$
\begin{aligned}
\bar V
&=\frac{N\,\mathrm{MSS}}{\tau}
=\frac{3W_L\,\mathrm{MSS}}{4R}\\
&=\boxed{\sqrt{\frac32}\frac{\mathrm{MSS}}{R\sqrt p}}.
\end{aligned}
$$
