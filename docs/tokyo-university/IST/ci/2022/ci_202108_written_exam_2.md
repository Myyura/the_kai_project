---
sidebar_label: '2021年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

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

## **Kai**

