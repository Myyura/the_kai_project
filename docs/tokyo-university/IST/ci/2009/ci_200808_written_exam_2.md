---
sidebar_label: '2008年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Digital-Circuit
  - Synchronous-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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