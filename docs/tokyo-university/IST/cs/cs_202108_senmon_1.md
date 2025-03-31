---
sidebar_label: "2021年8月実施 専門科目 問題1"
sidebar_position: 38
tags:
  - Tokyo-University
  - Operating-System
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Answer the following questions on operating systems.

(1) For the scheduling of five processes $P_0$, $P_1$, $P_2$, $P_3$, and $P_4$, the arrival time (ms) and the computation time (ms) of each process $P_i$ are denoted by $A_i$ and $C_i$, respectively. Also, assume that only one process is allowed to execute at any instant, and the overhead of context switches can be ignored. Obtain the average turnaround time and the average response time when the five processes are scheduled by the Preemptive Shortest Job First algorithm, where $A_0 = 35$, $A_1 = A_2 = A_3 = 25$, $A_4 = 0$, $C_0 = 10$, $C_1 = 15$, $C_2 = 20$, $C_3 = 30$, and $C_4 = 50$. Here, the turnaround time refers to the time interval from the arrival of the process to the completion of its execution, and the response time refers to the time interval from the arrival of the process to the beginning of its execution.

(2) Obtain the average turnaround time and the average response time when the five processes with the same arrival and computation times as those given in question (1) are scheduled by the Non-Preemptive Shortest Job First algorithm.

(3) Obtain the average turnaround time and the average response time when the five processes with the same arrival and computation times as those given in question (1) are scheduled by the Round Robin algorithm with the time slice 10 ms. The next time slice starts immediately when the current process does not exhaust its time slice. Also, a new process is added to the end of the Round Robin queue upon its arrival, and ties are broken in favor of the processes with shorter remaining computation times if multiple processes arrive at the end of the queue simultaneously.

(4) In real-world operating systems, the overhead of context switches cannot be ignored. Explain the pros and cons of the Round Robin algorithm from the viewpoint of CPU scheduling and memory management, when this overhead is considered.

(5) The Aging scheme is often used to determine process priorities in real-world operating systems. Explain the basic concept of the Aging scheme and its advantage over the classical static-priority scheme.

---

回答以下关于操作系统的问题。

(1) 对于五个进程 $P_0$、$P_1$、$P_2$、$P_3$ 和 $P_4$ 的调度，每个进程 $P_i$ 的到达时间（毫秒）和计算时间（毫秒）分别用 $A_i$ 和 $C_i$ 表示。同样，假设任何时刻只允许一个进程执行，并且可以忽略上下文切换的开销。当五个进程由抢占式最短作业优先算法调度时，求平均周转时间和平均响应时间，其中 $A_0 = 35$，$A_1 = A_2 = A_3 = 25$，$A_4 = 0$，$C_0 = 10$，$C_1 = 15$，$C_2 = 20$，$C_3 = 30$，$C_4 = 50$。这里，周转时间指的是从进程到达到执行完成的时间间隔，响应时间指的是从进程到达到开始执行的时间间隔。

(2) 当五个进程具有与问题（1）中给定的相同的到达时间和计算时间时，求它们在非抢占式最短作业优先算法调度下的平均周转时间和平均响应时间。

(3) 当五个进程具有与问题（1）中给定的相同的到达时间和计算时间时，求它们在时间片为 10 毫秒的轮转法调度下的平均周转时间和平均响应时间。下一个时间片在当前进程未用尽其时间片时立即开始。同样，新进程在到达时添加到轮转队列的末尾，并且如果多个进程同时到达队列末尾，则优先处理剩余计算时间较短的进程。

(4) 在实际操作系统中，无法忽略上下文切换的开销。解释在考虑这种开销时，轮转算法在 CPU 调度和内存管理方面的优缺点。

(5) 老化方案经常用于确定实际操作系统中的进程优先级。解释老化方案的基本概念及其相对于传统静态优先级方案的优势。

## **Kai**
### (1)

**Preemptive Shortest Job First (SJF) Algorithm:**

- **Process Information:**
  - $P_0$: $A_0 = 35$, $C_0 = 10$
  - $P_1$: $A_1 = 25$, $C_1 = 15$
  - $P_2$: $A_2 = 25$, $C_2 = 20$
  - $P_3$: $A_3 = 25$, $C_3 = 30$
  - $P_4$: $A_4 = 0$, $C_4 = 50$

- **Gantt Chart:**

```
| P4(0-25) | P1(25-40) | P0(40-50) | P2(50-70) | P4(70-95) | P3(95-125) |
```

- **Calculations:**
  - **Completion Time (CT)**:
    - $CT_0 = 50$
    - $CT_1 = 40$
    - $CT_2 = 70$
    - $CT_3 = 125$
    - $CT_4 = 95$

  - **Turnaround Time (TAT)**:
    - $TAT_0 = CT_0 - A_0 = 50 - 35 = 15$
    - $TAT_1 = CT_1 - A_1 = 40 - 25 = 15$
    - $TAT_2 = CT_2 - A_2 = 70 - 25 = 45$
    - $TAT_3 = CT_3 - A_3 = 125 - 25 = 100$
    - $TAT_4 = CT_4 - A_4 = 95 - 0 = 95$
    - **Average TAT** = $\frac{15 + 15 + 45 + 100 + 95}{5} = 54$

  - **Response Time (RT)**:
    - $RT_0 = 40 - 35 = 5$
    - $RT_1 = 25 - 25 = 0$
    - $RT_2 = 50 - 25 = 25$
    - $RT_3 = 95 - 25 = 70$
    - $RT_4 = 0 - 0 = 0$
    - **Average RT** = $\frac{5 + 0 + 25 + 70 + 0}{5} = 20$

### (2)

**Non-Preemptive Shortest Job First (SJF) Algorithm:**

- **Gantt Chart:**

```
| P4(0-50) | P0(50-60) | P1(60-75) | P2(75-95) | P3(95-125) |
```

- **Calculations:**
  - **Completion Time (CT)**:
    - $CT_0 = 60$
    - $CT_1 = 75$
    - $CT_2 = 95$
    - $CT_3 = 125$
    - $CT_4 = 50$

  - **Turnaround Time (TAT)**:
    - $TAT_0 = CT_0 - A_0 = 60 - 35 = 25$
    - $TAT_1 = CT_1 - A_1 = 75 - 25 = 50$
    - $TAT_2 = CT_2 - A_2 = 95 - 25 = 70$
    - $TAT_3 = CT_3 - A_3 = 125 - 25 = 100$
    - $TAT_4 = CT_4 - A_4 = 50 - 0 = 50$
    - **Average TAT** = $\frac{25 + 50 + 70 + 100 + 50}{5} = 59$

  - **Response Time (RT)**:
    - $RT_0 = 50 - 35 = 15$
    - $RT_1 = 60 - 25 = 35$
    - $RT_2 = 75 - 25 = 50$
    - $RT_3 = 95 - 25 = 70$
    - $RT_4 = 0 - 0 = 0$
    - **Average RT** = $\frac{15 + 35 + 50 + 70 + 0}{5} = 34$

### (3)

**Round Robin Algorithm (Time Slice = 10 ms):**

- **Process Information:**
  - $P_0$: $A_0 = 35$, $C_0 = 10$
  - $P_1$: $A_1 = 25$, $C_1 = 15$
  - $P_2$: $A_2 = 25$, $C_2 = 20$
  - $P_3$: $A_3 = 25$, $C_3 = 30$
  - $P_4$: $A_4 = 0$, $C_4 = 50$

- **Gantt Chart:**

```
| P4(0-10) | P4(10-20) | P4(20-30) | P1(30-40) | P2(40-50) | P3(50-60) | P4(60-70) | P0(70-80) | P1(80-85) | P2(85-95) | P3(95-105) | P4(105-115) | P3(115-125) |
```

- **Calculations:**
  - **Completion Time (CT)**:
    - $CT_0 = 80$
    - $CT_1 = 85$
    - $CT_2 = 95$
    - $CT_3 = 125$
    - $CT_4 = 115$

  - **Turnaround Time (TAT)**:
    - $TAT_0 = CT_0 - A_0 = 80 - 35 = 45$
    - $TAT_1 = CT_1 - A_1 = 85 - 25 = 60$
    - $TAT_2 = CT_2 - A_2 = 95 - 25 = 70$
    - $TAT_3 = CT_3 - A_3 = 125 - 25 = 100$
    - $TAT_4 = CT_4 - A_4 = 115 - 0 = 115$
    - **Average TAT** = $\frac{45 + 60 + 70 + 100 + 115}{5} = 78$

  - **Response Time (RT)**:
    - $RT_0 = 70 - 35 = 35$
    - $RT_1 = 30 - 25 = 5$
    - $RT_2 = 40 - 25 = 15$
    - $RT_3 = 50 - 25 = 25$
    - $RT_4 = 0 - 0 = 0$
    - **Average RT** = $\frac{35 + 5 + 15 + 25 + 0}{5} = 16$

### (4)

**Pros and Cons of Round Robin Algorithm:**

**From the Viewpoint of CPU Scheduling:**

- **Pros:**
  - **Fairness:** Ensures that each process gets an equal share of the CPU, avoiding starvation. This means no process is left waiting indefinitely while others are executed.
  - **Responsiveness:** Particularly suitable for time-sharing systems as it guarantees that all processes get CPU time frequently. This can improve the perceived responsiveness of the system, especially for interactive users.

- **Cons:**
  - **Context Switch Overhead:** Frequent context switches, especially with a small time slice, can lead to significant overhead. This overhead includes saving and restoring process states, which can reduce overall CPU efficiency.
  - **Increased Turnaround Time:** If the time slice is too small, processes may spend more time being switched in and out of the CPU rather than executing, increasing the average turnaround time. Long processes may take a disproportionately long time to complete.
  - **Poor Performance for Short Jobs:** Short processes may need to wait for a full cycle to get CPU time, which can be inefficient and reduce overall system performance.

**From the Viewpoint of Memory Management:**

- **Pros:**
  - **Predictable Memory Usage:** The consistent and cyclic nature of Round Robin can make memory usage patterns more predictable, aiding in efficient memory management and planning.

- **Cons:**
  - **High Context Switch Cost:** Each context switch requires saving the state of the current process and loading the state of the next process. This can involve a significant amount of memory operations, especially if the processes have large memory footprints. This can lead to increased memory access times and cache invalidation, further reducing efficiency.
  - **Increased Memory Bandwidth:** Frequent context switches can lead to increased demand on memory bandwidth as process states are repeatedly saved and restored. This can cause contention and delays in memory access for other processes or system components.
  - **Paging Overhead:** In systems with limited physical memory, frequent context switches can lead to increased paging activity if the working sets of multiple processes cannot fit in memory simultaneously. This can cause additional overhead and degrade system performance.

### (5)

**Aging Scheme:**

- **Concept:**
  - Aging gradually increases the priority of processes waiting in the queue for a long time to prevent starvation. This means that if a process has been waiting for too long, its priority will be increased to ensure it eventually gets CPU time.

- **Advantage:**
  - Overcomes the starvation problem present in static-priority schemes, ensuring that all processes eventually get executed. This is particularly useful in systems where certain processes might otherwise be perpetually postponed.

## **Knowledge**

PreemptiveSJF Non-PreemptiveSJF RoundRobin Aging ContextSwitch

### 解题技巧和信息

1. **Preemptive vs Non-Preemptive SJF:** Preemptive SJF allows switching to a shorter job, minimizing the average turnaround time but may cause more context switches.
2. **Round Robin:** Suitable for time-sharing but requires careful management of context switch overhead. Choose an appropriate time slice to balance between responsiveness and efficiency.
3. **Aging:** Prevents starvation by gradually increasing the priority of waiting processes, ensuring fair CPU allocation over time.

### 重点词汇

- Turnaround Time 周转时间
- Response Time 响应时间
- Context Switch 上下文切换
- Preemptive 抢占式
- Non-Preemptive 非抢占式
- Starvation 饥饿
- Aging 老化

### 参考资料

1. [Preemptive SJF Algorithm - Guru99](https://www.guru99.com/shortest-job-first-sjf-scheduling.html)
2. [Non-Preemptive SJF - Studytonight](https://www.studytonight.com/operating-system/shortest-job-first-scheduling)
3. [Round Robin Scheduling - GeeksforGeeks](https://www.geeksforgeeks.org/round-robin-scheduling-algorithm/)
