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


[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065621id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2014-8-exam.pdf).
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

图 1 的系统每隔离散时间 $T$ 秒，把三条输入线到达的分组转发到一条输出线。若缓冲区非空，每个时隙先从中转发一个分组；随后输入分组到达并存入缓冲区。三条输入线在一个时隙内各自有分组到达的概率均为 $\lambda$（$0\le\lambda\le1$），所有分组等长，缓冲区最多存 3 个分组。超过容量而不能存入的到达分组会被丢弃，丢弃对象与输入线无关并随机选择。

1. 求一个时隙内三条输入线合计到达 $s$ 个分组的概率 $p(s)$，以及到达分组数的期望。
2. 以缓冲区分组数为状态，画状态转移图。
3. 说明如何计算缓冲区内分组数的稳态期望。
4. 说明如何计算缓冲区的分组丢弃概率。

再考虑修改后的系统：输入线 1 的分组比其他输入线分组具有更高的输出传输优先级，并且输入线 3 不再有分组到达。

5. 为计算缓冲区中来自输入线 2 的期望分组数以及该输入线分组的丢弃概率，恰当定义能够区分优先级的状态，并画出相应状态转移图。


## **Kai**

Use independent Bernoulli arrivals on different input lines and in different slots. Observe the buffer immediately **after** a slot's arrivals, and follow the stated service-then-arrival order. Excess new arrivals are selected uniformly for rejection; already buffered packets are not replaced by newer ones. These conventions determine the following transition model.

### (1) Arrival distribution

If $A$ is the number of arrivals in one slot, then

$$
\boxed{p_s=\Pr(A=s)=\binom3s\lambda^s(1-\lambda)^{3-s},\quad s=0,1,2,3,}
$$

and $\boxed{E[A]=3\lambda}$. The expectation only needs the marginal arrival probabilities. Independence is needed for the binomial distribution: if all three lines always arrive together, instead $p_0=1-\lambda,p_3=\lambda$, with $p_1=p_2=0$, despite exactly the same marginals.

### (2) Buffer-count state transitions

Let $Q_t\in\{0,1,2,3\}$ be the state after arrivals in slot $t$. After the next departure there are $r=(Q_t-1)^+$ packets, and

$$
\boxed{Q_{t+1}=\min\{3,(Q_t-1)^++A_{t+1}\}.}
$$

In state order $0,1,2,3$, the transition matrix is

$$
\boxed{P=\begin{pmatrix}
p_0&p_1&p_2&p_3\\
p_0&p_1&p_2&p_3\\
0&p_0&p_1&p_2+p_3\\
0&0&p_0&p_1+p_2+p_3
\end{pmatrix}.}
$$

Equivalently, this adjacency table specifies every arc of the state-transition graph; omitted destinations have zero probability:

| From | To 0 | To 1 | To 2 | To 3 |
| --- | --- | --- | --- | --- |
| 0 | $p_0$ | $p_1$ | $p_2$ | $p_3$ |
| 1 | $p_0$ | $p_1$ | $p_2$ | $p_3$ |
| 2 | 0 | $p_0$ | $p_1$ | $p_2+p_3$ |
| 3 | 0 | 0 | $p_0$ | $p_1+p_2+p_3$ |

Rows 0 and 1 coincide because service leaves an empty buffer in either case.

### (3) Expected occupancy

Solve the four stationary balance equations and normalization

$$
\boldsymbol\pi=\boldsymbol\pi P,\qquad
\sum_{q=0}^3\pi_q=1,\quad\pi_q\ge0.
$$

For $0<\lambda<1$ the finite chain is irreducible and aperiodic, giving a unique limiting distribution. The post-arrival mean is

$$
\boxed{E[Q]=\pi_1+2\pi_2+3\pi_3.}
$$

If occupancy is sampled just after service instead, its mean is $\pi_2+2\pi_3$; the sampling convention must be specified. For a transient rather than a steady-state expectation, propagate an initial row vector by $\boldsymbol\mu_t=\boldsymbol\mu_0P^t$ and use the same weighted sum. At $\lambda=0$ the stationary state is 0; at $\lambda=1$ it is 3.

### (4) Packet drop probability

Given state $q$ and $s$ arrivals, the number rejected is

$$
d(q,s)=\max\{0,(q-1)^++s-3\}.
$$

For $q=0,1$ no arrivals are dropped. For $q=2$, exactly one is dropped only when $s=3$; for $q=3$, one is dropped when $s=2$ and two when $s=3$. The mean loss per slot is consequently

$$
\overline D=\pi_2p_3+\pi_3(p_2+2p_3).
$$

For $\lambda>0$, the loss probability of a randomly chosen **arriving packet** is

$$
\boxed{P_{\mathrm{drop}}=\frac{\pi_2p_3+\pi_3(p_2+2p_3)}{3\lambda}.}
$$

This differs from the probability that a slot has any loss, $\pi_2p_3+\pi_3(p_2+p_3)$. A useful conservation check is $3\lambda(1-P_{\mathrm{drop}})=1-\pi_0$, because the right-hand side is the mean number transmitted per slot. At $\lambda=1$, the packet loss probability is $2/3$. At $\lambda=0$, there are no arrivals, so the conditional packet-loss probability has no sampled packet; it may be reported as zero by convention.

### (5) Priority for line 1; no line 3 arrivals

A total count alone cannot determine which class is served. Use state $(H,L)$, where $H$ counts line-1 packets and $L$ counts line-2 packets, with

$$
\mathcal S=\{(h,l):h,l\ge0,\ h+l\le3\}.
$$

There are ten states. If $H>0$, serve a high-priority packet; otherwise serve one low-priority packet if available. The state just after this service is

$$
(h',l')=\begin{cases}(h-1,l),&h>0,\\(0,(l-1)^+),&h=0.\end{cases}
$$

The complete graph is specified by the following service mapping and arrival arcs. Every state on one row has the listed post-service state:

| Current state(s) | Post-service state $r=(h',l')$ |
| --- | --- |
| $(0,0),(1,0),(0,1)$ | $(0,0)$ |
| $(2,0)$ | $(1,0)$ |
| $(1,1),(0,2)$ | $(0,1)$ |
| $(3,0)$ | $(2,0)$ |
| $(2,1)$ | $(1,1)$ |
| $(1,2),(0,3)$ | $(0,2)$ |

Put $a=(1-\lambda)^2$, $b=\lambda(1-\lambda)$, and $c=\lambda^2$. For each current state, draw its outgoing arcs as follows:

| Post-service occupancy | Destination after arrivals | Arc probability |
| --- | --- | --- |
| $h'+l'\le1$ | $(h',l')$ | $a$ |
| $h'+l'\le1$ | $(h'+1,l')$ | $b$ |
| $h'+l'\le1$ | $(h',l'+1)$ | $b$ |
| $h'+l'\le1$ | $(h'+1,l'+1)$ | $c$ |
| $h'+l'=2$ | $(h',l')$ | $a$ |
| $h'+l'=2$ | $(h'+1,l')$ | $b+c/2$ |
| $h'+l'=2$ | $(h',l'+1)$ | $b+c/2$ |

In the last case, simultaneous arrivals compete for one empty slot. Each is admitted with probability $1/2$, because **service priority does not change the stated random drop policy**. Starting empty, $H\le1$ always holds, so states with $H\ge2$ are transient/unreachable and may be removed from the working graph.

Build $P^{\mathrm{prio}}$ from these arcs, solve $\eta=\eta P^{\mathrm{prio}}$ with $\sum\eta_{h,l}=1$, and calculate the requested line-2 mean and its loss probability by

$$
\boxed{E[L]=\sum_{(h,l)\in\mathcal S}l\eta_{h,l},\qquad
P_{\mathrm{drop},2}=\frac\lambda2\sum_{h+l=3}\eta_{h,l}\quad(\lambda>0).}
$$

Indeed, line 2 loses a packet only when the pre-service buffer is full, both lines arrive, and line 2 loses the random admission choice. That event has mean loss $\lambda^2/2$ per full-buffer slot; divide by the arrival rate $\lambda$. Total mean occupancy, if also desired, is $\sum(h+l)\eta_{h,l}$. At $\lambda=1$, the stationary states $(1,2)$ and $(0,3)$ each have probability $1/2$, giving $E[L]=2.5$ and line-2 loss probability $1/2$.
