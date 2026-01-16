---
sidebar_label: '2014年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Network
  - Probability-And-Statistics
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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