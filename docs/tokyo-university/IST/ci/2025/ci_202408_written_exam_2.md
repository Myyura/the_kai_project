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
The transmission delay is
$$
d_{trans}={1500\text{ bytes}\over 200\text{ kbps}}={1500\text{ bytes}/25\text{ kBps}}=60\text{ ms}.
$$

The time required is
$$
t = d_{trans} + d_{prop} = 60\text{ ms} + 250\text{ ms} = 310\text{ ms}.
$$

### (2)
The time required is one transmission delays for the data packet, and two one-way propagation delays (one for the data packet from the sender and one for the ACK from he receiver).
$$
t = 2*d_{prop} + {1500\text{ bytes}\over 200\text{ kbps}}=2*250 + 60 = 560\text{ ms}.
$$

The effective speed is
$$
\text{Effective Speed}={1500\text{ bytes}\over 560\text{ ms}}={150\over 7}\text{ kbps}\approx 21.5 \text{ kbps}.
$$

### (3)
Since
$$
\begin{aligned}
d_{trans} &= {P \text{ bytes}\over 200 \text{ kbps}}={P\over 25}\text{ ms},
\\
\text{Effective Speed}&={P\text{ bytes}\over {P\over 25}+2*250\text{ ms}}
\\
&={8P\text{ bits}\over {P\over 25}+500\text{ ms}}
\\
&={200P\over P+12500}\text{ kbps},
\end{aligned}
$$
when the line utilization is not less than 20% i.e. 0.2, we have
$$
{P\over B}\ge 0.2\implies {200P/(P+12500)\over 200}\ge 0.2\implies {P\ovver P+12500}\ge 0.2,
$$
where $P\ge 3125\text{ bytes}$.

### (4)
The time S takes to send $\omega$ packets to R (not until R receives) is the transmission delay, which is
$$
t_{S\to R}=d_{trans}={\omega \times 1500 \times 8 \text{ bits}\over 200\text{ kbps}}=60\omega\text{ ms}.
$$
Let the time S starts to send the first packet to R be $t=0$. Then the time S completes sending is $t=60\omega\text{ ms}$.

Also, R sends the acknowledgment packet for the first package from S at $t=310\text{ ms}$,
and the ACK arrives at S at $t=560\text{ ms}$ as calculated in (1) and (2).

Since the ACK arrival should be earlier than S completes sending $\omega$ packets,
$$
60\omega \ge 560\text{ ms}\implies \omega\ge {28\over 3}.
$$
Since $\omega$ is an integer, $\omega_{\min}=10$.

### (5)
Generally, the time of S to complete sending is ${\omega\times P\times 8\over B}$ for $P$ bytes, $\omega$ packets and bandwidth $B$ kbps.
The time of the ACK for the first packet to arrive is ${P\times 8\over B}+2d_{prop}$.
Hence
$$
\begin{aligned}
{8\omega P\over B}&\ge {8P\over B}+2d_{prop}
\\
{8(\omega-1)P\over B}&\ge 2d_{prop}
\\
\omega-1&\ge {2Bd_{prop}\over 8P}
\\
\omega_{\min}=\lceil {Bd_{prop}\over 4P} + 1\rceil.
\end{aligned}
$$

### (6)
The transmission delay for client 1,2,3 are respectively
$$
d_{trans}^1={4\times 10^5\text{ bytes}\over 500\text{ kbps}}=6400\text{ ms},\\
d_{trans}^2={4\times 10^5\text{ bytes}\over 250\text{ kbps}}=12800\text{ ms},\\
d_{trans}^3={4\times 10^5\text{ bytes}\over 800\text{ kbps}}=4000\text{ ms}.
$$

+ Client 1 requests at $t=0\text{ ms}$, the request packet arrives at $t=0+50=50\text{ ms}$;
+ Client 2 requests at $t=30\text{ ms}$, the request packet arrives at $t=30 + 110 =140\text{ ms}$;
+ Client 3 requests at $t=50\text{ ms}$, the request packet arrives at $t=50 + 60 =110\text{ ms}$.

So the queue is (first) 1,3,2 (last) at the server.

Server after a transmission delay and a preprocessing delay (5ms) completes pushing the packet into the communication channel (link). 
Hence the 
+ Server completes sending to client 1 at $t=50+5+6400=6455\text{ ms}$;
+ Server completes sending to client 3 at $t=6455+5+4000=10460\text{ ms}$;
+ Server completes sending to client 2 at $t=10460+5+12800=23265\text{ ms}$.

After a propagation delay, the client receives the file.
+ Client 1 receives at $t=6455+50=6505\text{ ms}$;
+ Client 2 receives at $t=23265+110=23375\text{ ms}$;
+ Client 3 receives at $t=10460+60=10520\text{ ms}$.

### (7)
Notice: the preprocessing delay changes to 15ms.
+ Client 1 receives at $t=0+50+15+6400+50=6505\text{ ms}$;
+ Client 2 receives at $t=30+110+15+12800+110=13065\text{ ms}$;
+ Client 3 receives at $t=50+60+15+4000+60=4185\text{ ms}$.

### (8)
The transmission delay is uniformly 
$$
d_{trans}={4\times 10^5\text{ bytes}\over 500\text{ kbps}}=6400\text{ ms}.
$$
+ Client 1 to client 12: no queueing;
  + Client 1: $t=0+50=50\text{ ms}$ arrival; server sends at $t=0+50+15+6400=6465\text{ ms}$ (next queueing request starts being preprocessed);
  + ...
  + Client 8: $t=70+50=120\text{ ms}$ arrival; server sends at $t=120+15+6400=6535\text{ ms}$;
  + ...
  + Client 12: server completes sending at $t=110+50+15+6400=6575\text{ ms}$.
+ Client 13 to client 20: waiting the processing Client 1,2,..,8 repsectively to end;
  + Client 13: $t=120+50=170\text{ ms}$ arrival; leaves the queue at $t=6465\text{ ms}$ when the request from 1 ends, server sends at $t=6465+15+6400=12880\text{ ms}$;
  + ...
  + Client 20: $t=190+50=240\text{ ms}$ arrival; leaves the queue at $t=6535\text{ ms}$ when the request from 8 ends, server sends at $t=6535+15+6400=12950\text{ ms}$;

Hence, client 20 completes receiving after a one-way propagation delay at $t=12950+50=13000\text{ ms}$.