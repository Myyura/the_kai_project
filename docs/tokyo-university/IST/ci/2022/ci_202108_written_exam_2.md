---
sidebar_label: 2021年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Networks.Stop-and-Wait-Automatic-Repeat-Request
  - Computer-Science.Networks.Reliable-Data-Transfer
  - Computer-Science.Networks.Sliding-Window-Protocol
  - Computer-Science.Networks.Bandwidth-Delay-Product
  - Computer-Science.Networks.Available-Bandwidth-Estimation
  - Computer-Science.Networks.Protocol-Throughput-and-Utilization
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

Consider packet transfer between the computers shown in the figure.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202108_2_p1.png" width="450" alt=""/>
</figure>

First, we upload a very large file from a client node to the server node. Packets are not discarded in the communication links and routers on the packet transmission path. The server node checks whether the data in the received packet sent from the client node has a bit error. Let $\alpha$ ($0\le\alpha<1$) be the probability that one or more than one bit errors will occur in the data in the received packet. In addition, it is assumed that no bit error in the destination address part occurs.
In order to achieve error-free file transfer, the server node sends an ACK (Acknowledgement) packet, which indicates the detection result of a bit error in the packet sent by the client node, to the client node for each packet reception. Here, we assume that no bit error in the data part of the ACK packets occurs. If the received ACK packet indicates no bit error in the packet, the next packet is immediately sent after receiving the ACK packet to the server node. On the other hand, if the received ACK packet indicates there is bit error in the packet, the client node retransmits the packet which was not correctly received immediately after receiving the ACK packet. The size of the packet transferred from the client node to the server node is $m_1$ [bits], the size of the ACK packet is $m_2$ [bits], and we assume that the buffering delay of the packet in the routers is zero. This is referred to as Method 1. Also, in the following calculation, calculate the answers to three significant digits.

(1) Show the transmission period between the start of packet transfer from the client node and the reception of a corresponding ACK packet from the server node, regardless of whether the data in the packet from the client node to the server node has a bit error, with a mathematical formula. And, show the probability that an error-free packet transfer from the client node to the server node will succeed at the $n$-th time ($n\ge1$) with a mathematical formula.

(2) Show the average data transfer speed from the client node to the server node with a mathematical formula. Furthermore, in each case of $\{D_2=0.1\text{msec}, B_2=1\text{Gbits/sec}\}$ and $\{D_2=500\text{msec}, B_2=10\text{Mbits/sec}\}$, show the maximum transfer speed when $m_1=m_2=100$ [bits].

(3) In TCP (Transport Control Protocol), which is generally used on the Internet, the data transfer speed is improved by transferring packets in a pipeline fashion, without waiting for the reception of the ACK packets. The maximum amount of packets that can be transferred without waiting for the reception of an ACK packet (this is called the window size) is set to $64\text{ Kbytes}$. Show the maximum transfer speed when $m_1=m_2=100$ [bits] in the case of $\{D_2=0.1\text{msec}, B_2=1\text{Gbits/sec}\}$ and in the case of $\{D_2=500\text{msec}, B_2=10\text{Mbits/sec}\}$. Here, this method of transferring data with a window size of $64\text{ Kbytes}$ is referred to as Method 2.

(4) In both Methods 1 and 2, when there are multiple upload destination server candidates, it is desirable to know the available transfer speed and delay time for each server. Method 1 can be improved to predict the maximum available data transfer speed between the client node and the server node, based on the information of the arrival intervals of the ACK packets observed at the client node. Explain this method.

Next, we would like to simultaneously deliver the same $500\text{ Mbyte}$ video streaming playback files from the server node to $N$ client nodes. It is assumed that video streaming data is simultaneously distributed from the server node to each client node using Method 2, and a data transfer speed of $8\text{Mbits/sec}$ from the server node to each client node is required between the nodes for normal video playback. Here, $N\le 100$.

(5) Show $D_{2\text{max}}$, which is the maximum value of $D_2$ that enables normal video playback.

(6) Show two solutions to enable normal video playback even when $D_2$ is larger than $D_{2\text{max}}$. Note that the bandwidth $B_i$ and the propagation delay $D_i$ of the communication line, and the size of transferred packets, $m_1$ and $m_2$, cannot be changed.

### 题目描述

考虑原图所示多段通信线路和路由器之间的分组传输，图中给出各链路带宽 $B_i$ 与传播时延 $D_i$。以下数值答案取三位有效数字。

先从客户端向服务器上传一个很大的文件。路径上的链路和路由器不丢包，路由器排队时延为 0。服务器检查客户端数据包是否有比特错误；收到的数据部分至少一位错误的概率为 $\alpha$（$0\le\alpha<1$），目的地址部分不会出错。服务器每收到一包就返回 ACK，告知该包有无错误，ACK 数据部分不会出错。若 ACK 表示无错，客户端收到后立即发下一包；若表示有错，立即重传该包。客户端数据包大小为 $m_1$ 位，ACK 为 $m_2$ 位，称为方法 1。

1. 不论数据包是否出错，写出从客户端开始发送一包到收到相应 ACK 的周期公式；并写出第 $n$ 次尝试才成功无错送达的概率（$n\ge1$）。
2. 写出客户端到服务器平均数据传输速率公式。取 $m_1=m_2=100$ 位，分别对

   $$
   (D_2=0.1\,\mathrm{ms},B_2=1\,\mathrm{Gbit/s})
   $$

   和

   $$
   (D_2=500\,\mathrm{ms},B_2=10\,\mathrm{Mbit/s})
   $$

   求最大传输速率。
3. TCP 可不等待逐包 ACK 而流水发送；设最多可有 $64\,\mathrm{Kbyte}$ 未确认数据，此数称窗口大小。把该方式称为方法 2。在与第 2 问相同的两种 $(D_2,B_2)$ 及 $m_1=m_2=100$ 位条件下，分别求最大传输速率。
4. 方法 1、2 若有多个候选上传服务器，需要获知到各服务器的可用速率和时延。说明如何改进方法 1，使客户端能根据观察到的 ACK 到达间隔预测客户端—服务器间最大可用数据速率。

接着，服务器要同时向 $N$ 个客户端分发同一个 $500\,\mathrm{Mbyte}$ 视频文件，$N\le100$。各路流均用方法 2 同时发送；正常播放要求服务器到每个客户端的数据速率为 $8\,\mathrm{Mbit/s}$。

5. 求保证正常播放时 $D_2$ 可取的最大值 $D_{2\max}$。
6. 当 $D_2>D_{2\max}$ 时，提出两种仍可正常播放的方案。不得改变各链路 $B_i,D_i$ 以及包大小 $m_1,m_2$。

## **Kai**

Use store-and-forward routers, full-duplex links, independent packet errors, and negligible processing time. Write $D=D_1+D_2+D_3$ and $S=B_1^{-1}+B_2^{-1}+B_3^{-1}$. From the figure, $D_1=D_3=10^{-4}$ s and $B_1=B_3=10^9$ bit/s. Take $1\text{ Kbyte}=1024$ bytes.

### (1)

Each forward link takes $D_i+m_1/B_i$ and each return link takes $D_i+m_2/B_i$. Thus one attempt lasts

$$
\boxed{T=2D+(m_1+m_2)S}.
$$

Success on precisely the $n$-th attempt requires $n-1$ errors followed by one success:

$$
\boxed{\Pr(K=n)=\alpha^{n-1}(1-\alpha)}.
$$

### (2)

Since $\mathbb E[K]=1/(1-\alpha)$, delivering $m_1$ useful bits takes mean time $T/(1-\alpha)$. The average useful rate is

$$
\boxed{R_1=\frac{m_1(1-\alpha)}{2D+(m_1+m_2)S}}.
$$

The maximum occurs at $\alpha=0$. Substitution of $m_1=m_2=100$ gives:

| $D_2,B_2$ | $T$ (s) | Maximum useful rate |
| --- | ---: | ---: |
| $0.1$ ms, $1$ Gbit/s | $0.0006006$ | $1.67\times10^5$ bit/s |
| $500$ ms, $10$ Mbit/s | $1.0004204$ | $1.00\times10^2$ bit/s |

### (3)

Let $W=64\times1024\times8=524288$ bits. The window admits $q=\lfloor W/m_1\rfloor$ complete packets. With no errors, the maximum steady-state rate is

$$
\boxed{R_2=\min\left\{B_1,B_2,B_3,
\frac{m_1}{m_2}B_1,\frac{m_1}{m_2}B_2,
\frac{m_1}{m_2}B_3,\frac{q m_1}{T}\right\}}.
$$

The first three bounds are the data-path capacities; the next three ensure enough capacity to return one ACK per packet. The last bound allows at most $q$ packets per round-trip time. Using $W/T$ instead of $qm_1/T$ is the continuous-window approximation and gives the same three-significant-digit answers here:

$$
\boxed{8.73\times10^8\ \text{bit/s}},\qquad
\boxed{5.24\times10^5\ \text{bit/s}},
$$

respectively. Both cases are limited by the window.

### (4)

Replace one-at-a-time probing by sending pairs or short trains of packets back-to-back, and timestamp the ACKs returned for them. With no competing traffic, a bottleneck of rate $B$ spaces equal $m_1$-bit data packets by approximately $m_1/B$, so their ACK spacing $\Delta$ estimates $B\simeq m_1/\Delta$ when the return path does not introduce a larger spacing. The minimum observed send-to-ACK time estimates the unloaded round-trip time; subtract $(m_1+m_2)S$ if the propagation component alone is wanted.

To estimate available bandwidth with competing traffic, repeat trains at increasing offered rates. The point where arrival spacing persistently exceeds sending spacing, or round-trip delay begins to grow, estimates the rate that can be sustained. Multiple measurements are needed because cross traffic and ACK compression can distort individual samples; a single packet pair primarily estimates bottleneck capacity.

### (5)

Let the required per-client rate be $R=8\times10^6$ bit/s. With equal sharing, the forward capacity per client is bounded by

$$
C_N=\min\{B_1,B_2/N,B_3/N\}.
$$

For $m_1=m_2=100$, the ACK path imposes the same bounds. A feasible delay exists only if $C_N\ge R$. In particular, the shared middle link must satisfy $B_2\ge 8N\times10^6$ bit/s; $N\le100$ ensures the $1$ Gbit/s server link is sufficient.

Assuming these capacity conditions and an error-free path, $qm_1/T\ge R$ gives

$$
\boxed{D_{2\max}
=\frac{qm_1}{2R}-D_1-D_3
-\frac{m_1+m_2}{2}\left(\frac1{B_1}+\frac1{B_2}+\frac1{B_3}\right)}.
$$

With $q=5242$, this is $(0.0325623-100/B_2)$ seconds. For either $B_2=1$ Gbit/s or $B_2=10$ Mbit/s, subject to the capacity condition above,

$$
\boxed{D_{2\max}=32.6\ \text{ms}}
$$

to three significant digits. For other bandwidths, use the formula; for example, $B_2=8$ Mbit/s and $N=1$ give $32.5$ ms when the window holds only complete packets. The continuous-window approximation replaces $qm_1$ by $W$, giving $(0.0325678-100/B_2)$ seconds and $32.6$ ms for all $B_2\ge8$ Mbit/s. If $C_N<R$, no choice of $D_2$ can provide the required sustained per-client rate under Method 2.

### (6)

1. **Increase the effective window.** Use a larger TCP receive window, with window scaling, so that the allowed outstanding data is at least $RT$ bits per client (rounding up to complete packets). Alternatively, distribute each client's data among enough parallel connections that their total window reaches this value. This removes the delay-induced window restriction when the capacity conditions in (5) hold.
2. **Buffer before starting playback.** The file is finite, so download it in advance, entirely if necessary. More generally, for a constant delivered rate $0<C<R$ and a file of $L$ bits, preload at least $L(1-C/R)$ bits. Playback lasts $L/R$ seconds, and the remaining $CL/R$ bits then arrive during playback without an interruption. This allows a later playback start while keeping all link parameters and packet sizes unchanged.
