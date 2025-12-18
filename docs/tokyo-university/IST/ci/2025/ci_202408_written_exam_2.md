---
sidebar_label: '2024年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Network
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
We transmit data via packet switching between sender S and receiver R connected as shown in Figure 1. Assume that one-way propagation delay $d_{prop}$ is 250 ms and bandwidth $B$ is 200 kbps. Ignore packet losses and assume that the packets are not fragmented during transmission. The communication is full-duplex. The prefix “k” represents $10^3$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202408_2_p1.png" width="500" alt=""/>
</figure>

Answer the following questions.

(1) Assume that the packet size is 1500 bytes. Calculate the time from the moment S starts sending a packet to the moment R completely receives the packet. Note that the time required to push all the bits of a packet into the communication channel is referred to as *transmission delay*, and the time asked in this question is the sum of the transmission delay and the one-way propagation delay.

(2) Assume that the packet size is 1500 bytes. Consider a communication method where each time R completes receiving a packet, R sends an acknowledgment packet to S, then S sends the next packet immediately after S receives the acknowledgement packet. The acknowledgment packet is small enough that we can ignore its transmission delay. Calculate the effective speed in this setting. Provide your answer in kbps and round it to one decimal place. Note that *effective speed* refers to the value obtained by dividing the transmitted data size by the time from the moment S starts sending the first packet to the moment S receives the acknowledgment packet for the last packet.

(3) We define *line utilization* as the ratio of effective speed to bandwidth. Let's consider improving line utilization by increasing the packet size. Answer the minimum packet size $P$ that gives line utilization of 20% or more. Additionally, express line utilization as an equation in terms of the packet size $P$. Note that the unit of $P$ is bytes.

We adopt the following communication method to improve communication efficiency with a fixed packet size. Sender S continuously sends $\omega$ packets, and then checks whether the acknowledgment packet for the first packet has arrived at S at the time $\omega$ packets have been sent. If the packet has arrived, then S sends the next packet. Otherwise, S waits for the arrival of the acknowledgement packet, then S sends the next packet immediately after the arrival. Subsequent packets will be processed in the same way.

(4) Calculate the minimum value of $\omega$ such that the communication method described above fully utilizes the bandwidth. Assume that the packet size is 1500 bytes. Also, depict the communication in this case in a sequence diagram. Note that “fully utilize the bandwidth” refers to the situation that S is always pushing packets into the communication channel until all the packets have been sent.

(5) Express the minimum value of $\omega$ as an equation in terms of one-way propagation delay $d_{prop}$ (in ms), bandwidth $B$ (in kbps), and packet size $P$ (in bytes) such that the communication method described above fully utilizes the bandwidth. Note that the smallest integer greater than or equal to a real number $x$ is denoted by $\lceil x \rceil$.

Consider a network that transmits data via packet switching as shown in Figure 2. The server stores a file of size $4 \times 10^5$ bytes, and each client acquires the file via the network. First, a client sends a packet that requests the file to the server, and then the server sends the file to the client after receiving the request. Note that the communication between the server and a client is full-duplex. Also, the server and each client are connected by a dedicated communication channel, and therefore its bandwidth is not affected by other communication channels. The packet that requests a file is small enough that we can ignore its transmission delay.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202408_2_p2.png" width="500" alt=""/>
</figure>

Answer the following questions. Note that time $t$ is the elapsed time measured from the moment Client 1 sends a file request packet.

(6) Assume that the server can process only one file request packet at a time. When the server receives a file request packet from a client, the server sends the file to the client. Assume that it takes 5 ms from the moment when the server starts processing a file request packet to the moment it starts sending the file, and that the server completes processing the file request packet when it completes sending the file. When a new file request packet arrives from another client while the server is processing a file request packet, the new file request packet is stored in a queue. The server starts processing the file request packet at the head of the queue immediately after it completes processing the current file request packet. Each client sends a file request packet to the server at times shown in Table 1. The configuration of the network each client is connected to is shown in Table 1. Answer the time when Client 1, 2, and 3 complete receiving the file, respectively.

**Table 1 File request time and network configuration of clients**

| | File request time | Propagation delay between a client and the server (one-way) | Bandwidth |
| :--- | :--- | :--- | :--- |
| Client 1 | $t=0$ ms | 50 ms | 500 kbps |
| Client 2 | $t=30$ ms | 110 ms | 250 kbps |
| Client 3 | $t=50$ ms | 60 ms | 800 kbps |

From now on, we improve the server and make it possible for the server to process file request packets from multiple clients concurrently by multi-threading. The server starts a thread each time it receives a file request, and each thread is dedicated to file transmission to a client after the start. Assume that it takes 15 ms from the moment when the server starts processing a file request packet to the moment it starts sending the file after starting a thread. A thread terminates immediately after it completes sending the file.

(7) Assume that a sufficient number of threads can run without interfering with each other on the server. The configuration of the network each client is connected to is shown in Table 1. Answer the time when Client 1, 2, and 3 complete receiving the file, respectively.

(8) Assume that there are $20$ clients connected to the server with an identical configuration as shown in Table $2$. Client $1$, Client $2$, ..., and Client $20$ request the file in this order with $10 \text{ ms}$ intermission.

**Table 2 Network configuration of clients**

| Propagation delay between a client and the server (one-way) | Bandwidth |
| :--- | :--- |
| $50 \text{ ms}$ | $500 \text{ kbps}$ |

Assume that the maximum number of file transmission threads that can run concurrently on the server is $12$. When a file request packet arrives but already $12$ threads are running and the server cannot start a new thread, the file request packet is stored in a queue. When one of the threads terminates, the server immediately starts processing the file request packet at the head of the queue. Answer the time when the server starts processing the file request packet from Client $20$, and the time when Client $20$ completes receiving the file.

## **Kai**
### (1)
