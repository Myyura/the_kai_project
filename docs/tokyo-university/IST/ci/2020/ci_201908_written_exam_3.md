---
sidebar_label: '2019年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Select four items out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text.
If necessary, use examples or figures.

1. **Semaphore**
2. **A\* search algorithm**
3. **FPGA**
4. **Buffer overflow**
5. **LR parsing**
6. **IPv4 and IPv6**
7. **Stepping motor**
8. **Perceptron**

## **Kai**
#### Semaphore
Semaphore is an important **synchronization primitive** to coordinate the visits of different threads to shared memory, preventing the race condition 竞态. 

It is implemented as a counter with 2 atom operations: P (wait) and V (signal). It has an initial count $n$ representing how many resources we have. If a thread wants to execute P i.e. tries acquiring the resource, if the count is >0, the count decrements by 1 and the thread continues normally; otherwise (the count is zero), the thread sleeps and waits for the count to be >0; if a thread ends, it executes V to release the resource, incrementing the count by 1, and if there are threads waiting (usually in a queue), the system wakes one of them (usually the queue head).

Semaphores are more flexible than **Mutex** and thus can lead to less stable code, since it does not have an **ownership** mechanism like Mutex.

#### A* search algorithm
A shortest path finding algorithm from a single source to a goal, which can be seen as an extension of Dijkstra algorithm. 

A* selects a minimum weight node from the frontier, in which the weight is $f(n)=g(n)+h(n)$ where $g(n)$ is the **known distance (shortest known path length)** from source to $n$ and $h(n)$ is the heuristic function of how much still needed to complete. Let the source be $a$ and destination be $z$, then $g(n)=d(a,n)$ and $h(n):=h(n,z)$.

In A* Tree search, a heuristic function must be **admissible,** i.e. an optimistic estimate / lower bound of the actual shortest path length, such as Euclid or Manhattan distance, to find the optimal solution. $\forall u,v:h(u,v)\le d(u,v)$, where d is the shortest path length.

In A* Graph search, a heuristic function must be **consistent** to make the search optimal. **Consistency** is $\forall n,n’,\text{Cost}(n\to n’)+h(n’)\ge h(n)$ i.e. $h$ also optimistically estimates the cost by satisfying Triangle inequality.  

The time complexity depends on the heuristic function. The closer $h(n)$ is to the real distance, the faster the algorithm becomes.

#### FPGA
FPGA stands for field programmable gate array, it's an integrated circuit which allow to design custom digital logic. The FPGA is built from logic cells which are like lego bricks, it also gives access to RAM and clock signals. Cells are often grouped to blocks. Using an FPGA it is possible to develop a processor using the cells, which can be used for any specific task.

#### Buffer overflow

Buffer overflow is a security risk that can happen. The exploit happens when data overflows from a given buffer which was set for the data and thus overrides other information on the memory. When the data is larger than the allocated memory for the buffer and no protection was implemented, a buffer overflow can occure. Buffer overflow exploit can also be used to run melicious code.

#### LR Parsing

Related to compiler design.

#### IPv4 and IPv6

IPv4 and IPv6 are network addresses. Until recent years only IPv4 was used. The IP address is the global address of a device which is connected to the internet. Addresses like that exist for any device connected to the internet such as servers, private computers etc. IPv4 is a 32 bit (4 bytes) number, giving $2^{32}$ addresses. Because of the limited number of addresses and the growing number of connected devices IPv6 has been adopted. IPv6 uses 128bit addresses, meaning $2^{128}$ total addresses.

#### Stepping motor

Related to robotics, a stepping motor is an open loop controller. It allows to control movement and rotation. It charges different coils in the motor to make the wheel rotate, accuracy can be improved by imploementing half-stepping which is charging 2 sets of coils to create a half step.

#### Perceptron

In machine learning, a perceptron is a decision algorithm which takes several inputs and gives a single decision output. It does that by summing all inputs multiplied with the alocated weight for each and checking against a threshold.

$$
f=\begin{cases}
0 & \sum x_iw_i \leq b\\
1 & \sum x_iw_i > b
\end{cases}
$$