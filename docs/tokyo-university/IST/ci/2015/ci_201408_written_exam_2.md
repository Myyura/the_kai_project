---
sidebar_label: 2014年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Networks
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
  - Operations-Research.Queueing-Theory.Finite-Capacity-Queue
  - Operations-Research.Queueing-Theory.Packet-Loss
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Consider the system (shown in Fig. 1) that transfers the packets arriving from the three input lines to the output line every discrete time $T[\text{sec}]$. When there is any packet in the buffer, one packet in the buffer is transferred to the output line. Packets from the input lines arrive and are stored in the buffer. The packet arriving probability of three input lines are the same value $\lambda(0\leqq\lambda\leqq 1)$, all of arriving packets from input lines have the same size, and the maximum number of packets to be able to be stored in the buffer is three. Since the buffer cannot store the larger number of packets than its capacity, the arrived packet(s) that can not be stored in the buffer is(are) discarded. Here, the packet(s) to be discarded is(are) randomly selected regardless of the input line. Then, answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201408_2_p1.png" width="400" alt=""/>
</figure>

(1) Show the probability $p(s)$, where the number of arriving packets from three input lines is $s$ in $T[\text{sec}]$, and show the expected number of arriving packets.

(2) Show the state transition diagram, related with the number of packets in the buffer.

(3) Describe how to calculate the expected number of packets in the buffer.

(4) Describe how to calculate the probability of packet drop at the buffer.

Consider the modified system: the packets from input line 1 are given the transmission priority to the output line than the packets from other input lines, and no packet arrival from input line 3.

(5) Describe the state transition diagram with the definition of states, in order to calculate the expected number of packets in the buffer and the probability of packet drop at the buffer regarding the packets arriving from input line 2.

### 题目描述

图 1 的系统每隔离散时间 \(T\) 秒，把三条输入线到达的分组转发到一条输出线。若缓冲区非空，每个时隙先从中转发一个分组；随后输入分组到达并存入缓冲区。三条输入线在一个时隙内各自有分组到达的概率均为 \(\lambda\)（\(0\le\lambda\le1\)），所有分组等长，缓冲区最多存 3 个分组。超过容量而不能存入的到达分组会被丢弃，丢弃对象与输入线无关并随机选择。

1. 求一个时隙内三条输入线合计到达 \(s\) 个分组的概率 \(p(s)\)，以及到达分组数的期望。
2. 以缓冲区分组数为状态，画状态转移图。
3. 说明如何计算缓冲区内分组数的稳态期望。
4. 说明如何计算缓冲区的分组丢弃概率。

再考虑修改后的系统：输入线 1 的分组比其他输入线分组具有更高的输出传输优先级，并且输入线 3 不再有分组到达。

5. 为计算缓冲区期望分组数以及输入线 2 分组在缓冲区的丢弃概率，恰当定义能够区分优先级的状态，并画出相应状态转移图。
