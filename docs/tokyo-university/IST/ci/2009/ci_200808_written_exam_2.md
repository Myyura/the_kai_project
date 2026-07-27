---
sidebar_label: 2008年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Synchronous-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Consider an $N$ digit decimal counter specified as follows:

a. A one digit decimal is represented by 4 bits.

b. The counter is synchronous and has a clock CK, $4N$ bit outputs $Z_i$ where $i=0,\dots,4N-1$.

c. The initial value of the counter is 0, namely, $Z_i=0$ where $i=0,\dots,4N-1$.

d. The value of the counter increases by 1 at every input of the clock. When the value of the counter reaches the maximum value, the next clock input sets the output to be 0.

For example, the following figure depicts the input (the clock CK) and the output ($Z_0\sim Z_{15}$) representing a decimal number with $N=4$ digits.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200808_2_p1.png" width="550" alt=""/>
</figure>

(1) Draw a table or a diagram showing the state-transition for the case $N=1$.

(2) Construct the logic circuit of the counter for the case $N=1$ using AND, OR, NOT gates and D flip-flops.

(3) Construct the logic circuit of the counter for the case $N=4$ using 4 counters based on (2) with AND, OR and NOT gates.

(4) For a given $N$, describe a method to construct the logic circuit of the counter whose delay time is $O(\log N)$. Approximate the delay time by the number of AND, OR and NOT gates between the output and the input of D flip-flops.

### 题目描述

设计一个满足下列规格的 \(N\) 位十进制计数器。

- 每一位十进制数用 4 位二进制表示。
- 计数器为同步电路，输入为时钟 \(CK\)，输出为 \(4N\) 位 \(Z_i\)（\(i=0,\ldots,4N-1\)）。
- 初值为 0，即所有 \(Z_i=0\)。
- 每输入一个时钟，计数值加 1；达到最大值后，下一个时钟使输出回到 0。

原文图示给出了 \(N=4\) 时的时钟输入与 \(Z_0\sim Z_{15}\) 输出。

1. 对 \(N=1\) 画出状态转移表或状态转移图。
2. 仅用与门、或门、非门和 D 触发器构造 \(N=1\) 的计数器逻辑电路。
3. 使用四个由第 2 问得到的计数器模块，再配合与门、或门、非门，构造 \(N=4\) 的计数器逻辑电路。
4. 对一般的 \(N\)，说明如何构造延迟为 \(O(\log N)\) 的计数器逻辑电路。延迟以 D 触发器输出到输入之间经过的与、或、非门数量近似衡量。

#### 考点

- **同步时序电路设计**：从十进制计数状态转移推导 D 触发器次态逻辑，并组合多个数位处理进位与循环归零。
- **组合逻辑延迟优化**：用树形前缀或分层进位逻辑把跨 \(N\) 位的进位条件深度从线性降低到 \(O(\log N)\)。
