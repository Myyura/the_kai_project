---
sidebar_label: 2022年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Networks.Internet-Protocol-Version-4-Subnetting
  - Computer-Science.Networks.Packetization-Delay
  - Computer-Science.Networks.Protocol-Throughput-and-Utilization
  - Computer-Science.Networks.Reliable-Data-Transfer
  - Computer-Science.Information-Theory.Minimum-Distance-Error-Correction
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
An IPv4 address, which indicates a location on the Internet, is a $32$ bits ($4$ Bytes) number. Each $8$ bits ($1$ Byte) is represented as a decimal number separated by a dot "." as in Figure 1. IP addresses are assigned to network interfaces (boundaries between nodes and physical links). An IP address consists of a network ID that identifies the network and an interface ID that identifies the interface. In the network notation, a network is expressed by a decimal notation of the IP address with "/" and a length of a network ID (number of bits), as shown in Figure 1.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202208_2_p1.png" height="600" alt="Figure 1"/>
</figure>

A network can be divided into subnets. Each subnet has a unique network ID. The network administrator assigns IP addresses from the range (block) of IP addresses with the subnet's network ID to the interfaces connecting to that subnet.

For example, 203.178.168.0/24 can be divided into 203.178.168.0/25, with IP addresses ranging from 203.178.168.0 to 203.178.168.127, and 203.178.168.128/25, with IP addresses ranging from 203.178.168.128 to 203.178.168.255. In addition, a subnet of 203.178.168.0/27 can be created. Suppose 203.178.168.0/25 and 203.178.168.0/27 are assigned to different subnets. In that case, the network administrator must avoid IP address duplication. The administrator assigns IP addresses to the interfaces connecting to the subnet of 203.178.168.0/25 from the range excluding 203.178.168.0/27 because 203.178.168.0/25 includes 203.178.168.0/27.

Answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202208_2_p2.png" height="400" alt="Figure 2"/>
</figure>


(1) How many uniquely identifiable IPv4 addresses exist in the Internet?

(2) Express in decimal representation the IPv4 address with the hexadecimal representation C0A864C8.

(3) What is the maximum number of IP addresses that can be assigned in a network with a network ID length of $20$ bits? However, the interface IDs are reserved when they are all $0$ or $1$. They are not assigned to interfaces.

(4) Assign network addresses to each of the six subnets (N1 to N6) in Figure 2 from 192.168.254.0/23.
The subnet assignment has the following constraints: IP addresses are assigned in ascending order from N1 to N6. IP addresses must be assigned on 250 interfaces in N1, IP addresses must be assigned on 120 interfaces in N2, and IP addresses must be assigned on 110 interfaces in N3. Note that the interfaces connected to N1 to N3 include those of the respective routers. A node with multiple interfaces connecting to different subnets is called a router here. In addition, we should assign IP addresses to the routers (R1 to R3)' interfaces in N4, N5 and N6. We have the same reserved IDs as in question (3). Answer the address range, such as 192.168.a.b - 192.168.d.e, to be assigned to each subnet.

A UDP packet is sent for a Voice-over IP application in a network shown in Figure 3. The packet consists of a 100-byte header and a $P$-byte payload (data part). The bottleneck in this network is between Router 1 and Router 2, with the bandwidth of 6M bits/sec.
  
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202208_2_p3.png" height="600" alt="Figure 3"/>
</figure>

(5) Consider sending digitally encoded voice data directly from the source node to the destination node. Suppose the data is encoded at a constant rate of 128 kbps and each packet is entirely filled before the source sends the packet into the network. The source node must wait until the payload is filled with data, and this delay is called packetization delay. When $P = 1000$ bytes, determine the packetization delay.

(6) If we want to keep packetization delay below 20 milliseconds for comfortable conversations, how should we change the packet size?

(7) Next, we want to send large files as quickly as possible. Payload throughput is called effective throughput. Express the maximum effective throughput using $P$ in an equation. Also, give the maximum effective throughput when $P = 100$ and $P = 1000$ bytes.

(8) On the Internet, routers may discard packets when necessary. When a router discards a packet with probability $s$, give the average number of hops for all packets sent by the source node in Figure 3 (including those that did not reach the destination). Delivering a packet to the next destination is called hopping. In Figure 3, when a packet reaches the destination node from the source node, it hops three times.

(9) The bit error rate of the transmission channel is $\alpha(0 \le \alpha < 1)$. The source node sends each bit three times to improve the error rate. For example, when it transmits 0, it sends 000, and when it transmits 1, it sends 111. When the receiver restores the original data by majority vote, express bit error rate after the restoration as an equation.

(10) In TCP/IP communication, since multiple processes are assumed to be running at the destination node, the destination port number is used to identify the destination process for the received packet. Why did the designers of TCP/IP choose an abstract identifier, the port number, which is independent of its process identifier? Answer two benefits of the port number.

### 题目描述

IPv4 地址是标识互联网位置的 32 位（4 字节）数，每 8 位用十进制表示并以点分隔。地址分配给网络接口，由标识网络的网络 ID 与标识接口的接口 ID 组成；网络写成“点分十进制地址/网络 ID 位数”。

网络可划分为各有唯一网络 ID 的子网，管理员从该子网地址块给接口分配地址。例如 `203.178.168.0/24` 可分为 `203.178.168.0/25`（`.0`～`.127`）与 `203.178.168.128/25`（`.128`～`.255`）。若另有 `203.178.168.0/27` 分给不同子网，则给 `/25` 分配接口地址时必须排除 `/27` 的范围，避免重叠。

1. 互联网中一共有多少个可唯一标识的 IPv4 地址？
2. 把十六进制 IPv4 地址 `C0A864C8` 写成点分十进制。
3. 网络 ID 长 20 位的网络最多能给多少个接口分配地址？接口 ID 全 0 与全 1 均保留、不能分配。
4. 从 `192.168.254.0/23` 为图 2 的六个子网 N1～N6 分配地址。按 N1 到 N6 使用递增地址：N1、N2、N3 分别需给 250、120、110 个接口分配地址，数量包含相应路由器接口；N4、N5、N6 还需给路由器 R1～R3 的相应接口分配地址。仍保留接口 ID 全 0、全 1。分别以 `192.168.a.b - 192.168.d.e` 形式写出各子网地址范围。

图 3 的网络为 VoIP 发送 UDP 包。每包有 100 字节首部和 $P$ 字节载荷；瓶颈是路由器 1 到路由器 2 的 $6\,\mathrm{Mbit/s}$ 链路。

5. 源端直接发送恒定 $128\,\mathrm{kbit/s}$ 编码的语音，必须等载荷完全填满才发包；等待时间称分组化时延。$P=1000$ 字节时求该时延。
6. 为使分组化时延低于 20 ms，应如何改变包大小？
7. 发送大文件时，把载荷吞吐率称为有效吞吐率。用 $P$ 表示最大有效吞吐率，并分别求 $P=100$、$P=1000$ 字节时的值。
8. 若每台路由器都以概率 $s$ 丢弃分组，求图 3 中源端发出的所有分组（包括未到终点者）的平均跳数。向下一节点交付一次称一跳；成功到达终点需 3 跳。
9. 信道比特错误率为 $\alpha$（$0\le\alpha<1$）。为降低错误，每位重复发送三次：0 发 `000`，1 发 `111`；接收端多数表决恢复。写出恢复后的比特错误率公式。
10. TCP/IP 假设目标节点同时运行多个进程，用目标端口号标识接收进程。说明为何采用独立于操作系统进程 ID 的抽象端口号，给出两个好处。
