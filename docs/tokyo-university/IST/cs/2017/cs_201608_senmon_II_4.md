---
sidebar_label: 2016年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Computer-Science.Operating-Systems.Central-Processing-Unit-Scheduling
  - Computer-Science.Operating-Systems.Shortest-Job-First-Scheduling
  - Computer-Science.Operating-Systems.Round-Robin-Scheduling
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題4

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Consider the problem of scheduling the five processes shown in Table 1. Assume that only one process is allowed to be executed at any instant, and the overhead of process context switches can be ignored. The execution time of each process is also known a priori. Table 2 summarizes the technical terms used in this problem.

**Table 1: Arrival time and execution time of the five processes**

| Process | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Arrival time | 0 ms | 30 ms | 40 ms | 40 ms | 80 ms |
| Execution time | 90 ms | 10 ms | 50 ms | 30 ms | 20 ms |

**Table 2: Technical terms used in this problem**

| Term | Definition |
|---|---|
| Turnaround time | Time interval from the arrival of the process to the completion of its execution (including the waiting time) |
| Waiting time | Total amount of time for which the process is waiting in the ready queue |
| Response time | Time interval from the arrival of the process to the beginning of its execution |

Answer the following questions.

(1) Answer the average turnaround time, average waiting time, and average response time when the processes are scheduled according to the First Come First Serve policy.

(2) Answer the average turnaround time, average waiting time, and average response time when the processes are scheduled according to the non-preemptive Shortest Job First policy.

(3) Answer the average turnaround time, average waiting time, and average response time when the processes are scheduled according to the preemptive Shortest Job First policy.

(4) Answer the average turnaround time, average waiting time, and average response time when the processes are scheduled according to the Round Robin policy where the time slice is 20 ms. Note that time slices are switched in the order of A, B, C, D, E, and that the next time slice starts immediately when the current process does not exhaust its time slice.

(5) Consider the scenario that the five processes shown in Table 1 arrive periodically. The arrival time of the first instance of each process is the arrival time shown in Table 1, and its following instances arrive repeatedly at the constant interval shown in Table 3. If these five processes are scheduled according to the preemptive Rate Monotonic policy, deadline misses occur. Answer when (at what time) the first deadline miss occurs, and to which process it occurs.

Here the Rate Monotonic policy is a scheduling policy that assigns higher priorities to processes with shorter periods; in case the periods are the same, higher priorities are given to processes that arrive earlier. A deadline miss is an event that a periodic process fails to complete its execution before the arrival of its next instance.

**Table 3: Inter-arrival time (period) of the five processes**

| Process | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Inter-arrival time (period) | 200 ms | 100 ms | 400 ms | 100 ms | 100 ms |

### 题目描述

单处理器调度如下五个进程，忽略上下文切换开销，执行时间均预先已知。

| 进程 | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| 到达时刻（ms） | 0 | 30 | 40 | 40 | 80 |
| 执行时间（ms） | 90 | 10 | 50 | 30 | 20 |

周转时间为到达至完成（含等待）的时间；等待时间为在就绪队列中的总时间；响应时间为到达至首次开始执行的时间。

（1）采用 FCFS 时，求平均周转、等待、响应时间。

（2）采用非抢占式 SJF 时，求上述三个平均值。

（3）采用抢占式 SJF 时，求上述三个平均值。

（4）采用时间片为 $20\rm\,ms$ 的轮转调度时，求上述三个平均值。时间片按 A、B、C、D、E 的顺序轮转；进程提前结束时下一个时间片立即开始。

（5）现令五个进程周期到达，首次到达时刻同上，周期如下。采用抢占式 Rate Monotonic 调度；周期越短优先级越高，周期相同时首次到达较早者优先级更高。截止期违约指周期进程在下一实例到达前未能完成执行。求第一次截止期违约的时刻和进程。

| 进程 | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| 周期（ms） | 200 | 100 | 400 | 100 | 100 |

## **Kai**
对每个进程，使用

$$
T_{\rm turn}=t_{\rm finish}-t_{\rm arrival},\qquad
T_{\rm wait}=T_{\rm turn}-T_{\rm exec},\qquad
T_{\rm resp}=t_{\rm first}-t_{\rm arrival}.
$$

### (1)
FCFS 的执行顺序为

$$
A[0,90),\ B[90,100),\ C[100,150),\ D[150,180),\ E[180,200).
$$

| 进程 | A | B | C | D | E | 平均 |
|---|---:|---:|---:|---:|---:|---:|
| 周转时间 | 90 | 70 | 110 | 140 | 120 | **106 ms** |
| 等待时间 | 0 | 60 | 60 | 110 | 100 | **66 ms** |
| 响应时间 | 0 | 60 | 60 | 110 | 100 | **66 ms** |

### (2)
非抢占式 SJF 的顺序为

$$
A[0,90),\ B[90,100),\ E[100,120),\ D[120,150),\ C[150,200).
$$

| 进程 | A | B | C | D | E | 平均 |
|---|---:|---:|---:|---:|---:|---:|
| 周转时间 | 90 | 70 | 160 | 110 | 40 | **94 ms** |
| 等待时间 | 0 | 60 | 110 | 80 | 20 | **54 ms** |
| 响应时间 | 0 | 60 | 110 | 80 | 20 | **54 ms** |

### (3)
抢占式 SJF（最短剩余时间优先）的执行区间为

$$
A[0,30),\ B[30,40),\ D[40,70),\ C[70,80),\ E[80,100),\ C[100,140),\ A[140,200).
$$

| 进程 | A | B | C | D | E | 平均 |
|---|---:|---:|---:|---:|---:|---:|
| 周转时间 | 200 | 10 | 100 | 30 | 20 | **72 ms** |
| 等待时间 | 110 | 0 | 50 | 0 | 0 | **32 ms** |
| 响应时间 | 0 | 0 | 30 | 0 | 0 | **6 ms** |

### (4)
跳过尚未到达或已经结束的进程，可得

$$
\begin{aligned}
&A[0,20),A[20,40),B[40,50),C[50,70),D[70,90),E[90,110),\\
&A[110,130),C[130,150),D[150,160),A[160,180),C[180,190),A[190,200).
\end{aligned}
$$

| 进程 | A | B | C | D | E | 平均 |
|---|---:|---:|---:|---:|---:|---:|
| 周转时间 | 200 | 20 | 150 | 120 | 30 | **104 ms** |
| 等待时间 | 110 | 10 | 100 | 90 | 10 | **64 ms** |
| 响应时间 | 0 | 10 | 10 | 30 | 10 | **12 ms** |

### (5)
固定优先级为

$$
B>D>E>A>C.
$$

到 $200\rm\,ms$ 为止的执行为

$$
\begin{aligned}
&A[0,30),B_1[30,40),D_1[40,70),A[70,80),E_1[80,100),\\
&A[100,130),B_2[130,140),D_2[140,170),A[170,180),E_2[180,200).
\end{aligned}
$$

进程 A 的首个实例只执行了 $30+10+30+10=80\rm\,ms$，还剩 $10\rm\,ms$，而其下一实例在 $200\rm\,ms$ 到达。因此第一次截止期违约发生在

$$
\boxed{t=200\rm\,ms，进程\ A}.
$$
