---
sidebar_label: "2016年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Ripple-vs-Synchronous-Counter-Propagation-Delay
  - Electrical-Electronic.Digital-Logic.Synchronous-Decade-and-Up-Down-Counter
  - Electrical-Electronic.Digital-Logic.Karnaugh-Map-Minimization
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2016年8月実施 専門 第2問


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Let us consider a falling-edge-triggered JK flip-flop as shown in Fig.1. This JK flip-flop is reset to $(Q,\overline{Q}) = (0,1)$ when $RST = 1$. Answer the following questions.

(1) Let us assume a 4-bit counter as shown in Fig.2, and the input signals shown in Fig.3 are given to the counter. Show a time chart of the outputs $Q_0-Q_3$. Here, let us assume that all the $J$ and $K$ terminals are connected to 1, and the delay of each JK flip-flop, $\tau$ , cannot be neglected.

(2) Modify the circuit in Fig.2 so that the outputs $Q_0-Q_3$ change simultaneously, and show its schematic. (Such a circuit is called a parallel counter or a synchronous counter.)

(3) Let us design a parallel decimal counter. A decimal counter is a circuit that starts counting from ($Q_3Q_2Q_1Q_0$) = (0000) up to ($Q_3Q_2Q_1Q_0$) = (1001) and then returns to ($Q_3Q_2Q_1Q_0$) = (0000) in the next state. Show a state transition diagram and a Karnaugh map of the counter.

(4) Show a schematic of a parallel decimal counter by using the results in (3).

(5) Modify the circuit in (2) to an up/down counter and show its schematic. An up/down counter is a counter whose operation mode can be changed either to count-up or count-down by a control signal $UP/\overline{DOWN}$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2017_2_p1.png" width="700" height="700" alt=""/>
</figure>

### 题目描述

考虑图 1 所示下降沿触发 JK 触发器。当 $RST=1$ 时，触发器复位为 $(Q,\overline Q)=(0,1)$。图 2、图 3 及所用符号均见上图，回答下列问题。

(1) 对图 2 的 $4$ 位计数器输入图 3 所示信号，画出输出 $Q_0$～$Q_3$ 的时序图。假设所有 $J$、$K$ 端均接 $1$，且每个 JK 触发器的延迟 $\tau$ 不可忽略。

(2) 修改图 2 的电路，使 $Q_0$～$Q_3$ 同时变化，并画出电路图。这种电路称为并行计数器或同步计数器。

(3) 设计一个并行十进制计数器：从 $(Q_3Q_2Q_1Q_0)=(0000)$ 计数到 $(1001)$，下一状态返回 $(0000)$。画出其状态转移图和卡诺图。

(4) 利用 (3) 的结果，画出并行十进制计数器的电路图。

(5) 把 (2) 的电路改造成加/减计数器并画出电路图。该计数器通过控制信号 $UP/\overline{DOWN}$ 在向上计数和向下计数两种模式间切换。

## **Kai**
### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2017_2_p2.png" width="700" height="350" alt=""/>
</figure>

Let $t_n$ be the time of the $n$-th falling input edge after reset. For $i=0,1,2,3$, $Q_i$ toggles precisely when $n$ is a multiple of $2^i$, at time $t_n+(i+1)\tau$. The clock period is assumed long enough for the ripple to settle.

### (2)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2017_2_p3.png" width="700" height="225" alt=""/>
</figure>

### (3)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2017_2_p4.png" width="600" height="185" alt=""/>
</figure>

|$Q_3$|$Q_2$|$Q_1$|$Q_0$|$Q_3'$|$Q_2'$|$Q_1'$|$Q_0'$|
|-|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|1|
|0|0|0|1|0|0|1|0|
|0|0|1|0|0|0|1|1|
|0|0|1|1|0|1|0|0|
|0|1|0|0|0|1|0|1|
|0|1|0|1|0|1|1|0|
|0|1|1|0|0|1|1|1|
|0|1|1|1|1|0|0|0|
|1|0|0|0|1|0|0|1|
|1|0|0|1|0|0|0|0|

The unused states 1010–1111 are don’t-cares. Rows and columns are in Gray-code order.

$Q_0'$
|$Q_3Q_2$\\$Q_1Q_0$|00|01|11|10|
|-|-|-|-|-|
|00|1|0|0|1|
|01|1|0|0|1|
|11|x|x|x|x|
|10|1|0|x|x|

$Q_0' = \overline{Q_0}$

$Q_1'$
|$Q_3Q_2$\\$Q_1Q_0$|00|01|11|10|
|-|-|-|-|-|
|00|0|1|0|1|
|01|0|1|0|1|
|11|x|x|x|x|
|10|0|0|x|x|

$Q_1' = Q_1\overline{Q_0} + \overline{Q_3}\,\overline{Q_1}Q_0$

$Q_2'$
|$Q_3Q_2$\\$Q_1Q_0$|00|01|11|10|
|-|-|-|-|-|
|00|0|0|1|0|
|01|1|1|0|1|
|11|x|x|x|x|
|10|0|0|x|x|

$Q_2' = Q_2\overline{Q_1} + Q_2\overline{Q_0} + \overline{Q_2}Q_1Q_0$

$Q_3'$
|$Q_3Q_2$\\$Q_1Q_0$|00|01|11|10|
|-|-|-|-|-|
|00|0|0|0|0|
|01|0|0|1|0|
|11|x|x|x|x|
|10|1|0|x|x|

$Q_3' = Q_3\overline{Q_0} + Q_2Q_1Q_0$

### (4)
Use the common falling-edge clock and reset of (2). The required JK inputs are

$$
\begin{aligned}
J_0&=K_0=1,\\
J_1&=Q_0\overline{Q_3},&K_1&=Q_0,\\
J_2&=K_2=Q_0Q_1,\\
J_3&=Q_0Q_1Q_2,&K_3&=Q_0.
\end{aligned}
$$

With $Q_i^+=J_i\overline{Q_i}+\overline{K_i}Q_i$, these connections produce the ten transitions in (3).

![Synchronous decimal JK counter](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi/2017/tokyo-denshi-2016-mod10.svg)

### (5)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2017_2_p7.png" width="700" height="325" alt=""/>
</figure>

Writing $U=UP/\overline{DOWN}$, the toggle inputs in (5) are

$$
J_0=K_0=1,\qquad
J_i=K_i=U\prod_{j=0}^{i-1}Q_j+\overline U\prod_{j=0}^{i-1}\overline{Q_j}
\quad(i=1,2,3).
$$

Thus $U=1$ counts up modulo 16, while $U=0$ counts down modulo 16.
