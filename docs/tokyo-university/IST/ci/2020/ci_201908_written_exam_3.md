---
sidebar_label: '2019年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description (English)**
Select four items out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text.
If necessary, use examples or figures.

1. **Semaphore**
2. **A* search algorithm**
3. **FPGA**
4. **Buffer overflow**
5. **LR parsing**
6. **IPv4 and IPv6**
7. **Stepping motor**
8. **Perceptron**

## **Kai**
### Semaphore
Semaphore relates to multi thread programming. The semaphor is a unit of data which all operations on it are atomic, meaning that they are thread safe. It can be used like a lock as well and is accessed with the interface functions `wait()` and `post()`. Semaphores are more flexible than mutex and thus can lead to less stable code.

### A* search algorithm
A* is a search algorithm for shortest path which is somewhat an extension of Dijkstra. The A* algorithm incoporates a sense of "how close are we" to the target. The A* algorithm uses a heuristic measurement for each node as how far it is from the end goal. It uses the distance from the start to the node and the distance from the node to the target to compute a number which will be the number used in the minimum priority queue.

### FPGA
FPGA stands for field programmable gate array, it's an integrated circuit which allow to design custom digital logic. The FPGA is built from logic cells which are like lego bricks, it also gives access to RAM and clock signals. Cells are often grouped to blocks. Using an FPGA it is possible to develop a processor using the cells, which can be used for any specific task.

### Buffer overflow
Buffer overflow is a security risk that can happen. The exploit happens when data overflows from a given buffer which was set for the data and thus overrides other information on the memory. When the data is larger than the allocated memory for the buffer and no protection was implemented, a buffer overflow can occure. Buffer overflow exploit can also be used to run melicious code.

### LR Parsing
Related to compiler design.

### IPv4 and IPv6
IPv4 and IPv6 are network addresses. Until recent years only IPv4 was used. The IP address is the global address of a device which is connected to the internet. Addresses like that exist for any device connected to the internet such as servers, private computers etc. IPv4 is a 32 bit (4 bytes) number, giving $2^{32}$ addresses. Because of the limited number of addresses and the growing number of connected devices IPv6 has been adopted. IPv6 uses 128bit addresses, meaning $2^{128}$ total addresses.

### Stepping motor
Related to robotics, a stepping motor is an open loop controller. It allows to control movement and rotation. It charges different coils in the motor to make the wheel rotate, accuracy can be improved by imploementing half-stepping which is charging 2 sets of coils to create a half step.

### Perceptron
In machine learning, a perceptron is a decision algorithm which takes several inputs and gives a single decision output. It does that by summing all inputs multiplied with the alocated weight for each and checking against a threshold.

$$
f=\begin{cases}
0 & \sum x_iw_i \leq b\\
1 & \sum x_iw_i > b
\end{cases}
$$