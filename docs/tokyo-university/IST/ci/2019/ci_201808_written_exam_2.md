---
sidebar_label: 2018年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Computer-Science.Computer-Architecture.Hamming-Weight
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Computer-Science.Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第2問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

### 日本語

太陽光発電システムについて考えよう。ソーラーパネルの維持管理のため、以下のような運用規則が定められているとする。  

- (i) $n$ 枚のパネルが一つのグループとして維持管理される。  
- (ii) パネルはグループごとに定期的に点検される。  
- (iii) パネルの状態は各グループごとに $n$ ビットデータとして報告される。

ここで各ビットは対応するパネルに不具合があれば $1$、不具合がなければ $0$ とする。
不具合のあるパネルの数、すなわちビットデータの $1$ の個数 $k$ を数える “population count” 問題を考えよう。以下の設問に答えよ。  

まず、ソフトウェアによる解法を考えよ。ここでは、$0 < n \leq 32$、$0 \leq k < \log_2 n$ とする。  
四則演算、論理演算、シフト演算、および表引きには $1$ 単位時間かかるとする。単純化のため、インデックスの足し算やループで用いる比較演算の演算時間はゼロとする。  

(1) 単純な方式として各ビットの値をチェックし、$1$ の個数の総和を求める方式が考えられる。この方式の疑似コードを書き、その計算時間を答えよ。

(2) 実際、表引き操作を行うことで上述の方式 (1) を高速化できる。その計算時間を答えよ。 

(3) 方式 (1) より高速かつ方式 (2) よりストレージを必要としない方式の擬似コードを示せ。その計算時間を答えよ。

ハードウェアによる解決を考えよう。ここでは、入力はビット列、出力は $2$ 進数とする。  

(4) 入力 $3$ ビットの population count 論理回路 $P_3$ の真理値表を書け。AND、OR、NOT ゲートを用いて $P_3$ を設計せよ。

(5) 入力 $6$ ビットの population count 論理回路 $P_6$ を論理回路 $P_3$ を利用して作成せよ。必要に応じて、追加で AND、OR、NOT ゲートを使っても良い。* 

(6) 入力 $n$ ビットの population count 論理回路 $P_n$ を考える時、$n$ が増えると遅延が問題となる。この問題を解決する方法を述べよ。 

### English
Let us consider a solar power generation system. Assume that we have operational rules to maintain solar panels as follows; (i) A set of $n$ panels are maintained at the same time as a group. (ii) Each group of panels is periodically examined. (iii) For each group, status of panels is reported as $n$ bit data, where each bit is set to $1$ if the corresponding panel is malfunctioning, and $0$ otherwise. Consider the "population count" problem where we count the total number of malfunctioning panels, i.e., the number $k$ of $1$s in the $n$ bit data. Answer the following questions.

First, let us consider a software solution. Here, $0 < n \le 32, 0 \le k < \log_2 n$. Assume that an arithmetic operation, a logical operation, a shift operation, and a table lookup takes $1$ unit time. For simplicity, assume that increments of indices and comparisons for loops take zero time.

(1) A naive method is to check the value of each bit and compute the total sum of the number of $1$s. Write down a pseudo-code of this method and answer its computation time.

(2) You can actually improve the computation time of the method (1) via table lookups. Answer its computation time.

(3) Write down a pseudo-code of a method which is faster than the method (1) and requires less storage than the method (2). Answer its computation time.

Let us consider a hardware solution. Here, input is a bit sequence and output is a binary number.

(4) Write down the truth table of a population count logic circuit $P_3$, where the input is $3$ bit. Design $P_3$ using AND, OR, and NOT gates.

(5) Using logic circuits $P_3$, design a population count logic circuit $P_6$, where the input is $6$ bit. You may also use additional AND, OR, and NOT gates, if needed.

(6) To design a population count logic circuit $P_n$, where the input is $n$ bit, latency becomes an issue as $n$ increases. Answer a solution of this latency problem.


### 题目描述

太阳能板按以下规则维护：$n$ 块板为一组，定期按组检查，每组状态以 $n$ 位数据报告；对应板故障时该位为 1，否则为 0。目标是统计其中 1 的个数，即 population count（汉明重量）。

先考虑软件方法。题设给定 $0<n\le32$、$0\le k<\log_2n$。一次算术运算、逻辑运算、移位或查表均耗时 1；忽略数组下标加法及循环比较的时间。

1. 写出逐位检查并累加 1 的简单伪代码，给出计算时间。
2. 用查表加速第 1 问，给出计算时间。
3. 给出一种比第 1 问快、又不需要第 2 问查表存储空间的方法，写伪代码并给出计算时间。

再考虑硬件，输入为位串，输出为二进制数。

4. 写出三位输入 population count 电路 $P_3$ 的真值表，并仅用 AND、OR、NOT 门设计电路。
5. 使用 $P_3$ 构造六位输入电路 $P_6$；必要时可增加 AND、OR、NOT 门。
6. 对一般 $n$ 位 $P_n$，随着 $n$ 增大，传播延迟成为问题。说明降低延迟的方法。

## **Kai**
### (1)
```
k = 0
i = 0
while i < n:
    k = k + (1 & status) // (2 time units)
    status = status >> 1 // shift to the right (1 time unit)
    i = i + 1 // 0 time units since we ignore loop index increments
return k
```

Time complexity is $O(n)$ since every bit is examined once. Each iteration uses one AND, one addition, and one shift, so the exact computation time is $3n$ units (96 only when $n=32$).

### (2)
We tear apart the 32 bit number into 4 chunks of 8 bits each. We then use a lookup table of size $2^{8}=256$ to find the population count of each chunk and sum them up.
```
k = lookup_table[(status & 0xFF000000) >> 24] + lookup_table[(status & 0x00FF0000) >> 16] +
    lookup_table[(status & 0x0000FF00) >> 8] + lookup_table[status & 0x000000FF]
```
The lookup table is pre-computed and contains 256 entries (tractable). This will cause $O(1)$ time complexity since we are only going over 4 chunks. 
Exact computation time would be $4+4+3+3=14$ units of time (4 lookups, 4 AND operations, 3 shifts, 3 additions).

Alternatively, a table indexed by the entire $n$-bit status has $2^n$ entries and answers with exactly one lookup. This is the fastest lookup solution but is the storage-heavy method against which (3) is naturally compared.

### (3)
(Brian Kernighan's algorithm)

```
k = 0
while status != 0:
    status = status & (status - 1) // (2 time units)
    k = k + 1 // (1 time unit)
return k
```
`status = status & (status - 1)` operation removes the lowest set bit (the rightmost 1) from `status`. Thus, the loop runs exactly `k` times where `k` is the number of set bits in `status`.
This takes exactly $3k$ units and $O(k)=O(\log n)$ time under the stated condition $k<\log_2 n$. For $n=32$, strict inequality gives $k\le4$, hence at most 12 units.

### (4)
#### tomfluff's solution
Let us use AND, OR and NOT to define a new gate called XOR.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_2_p1.png" width="270" height="95" alt=""/>
</figure>

Using XOR, AND, OR and NOT we will creatre `P3` as follows:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_2_p2.png" width="413" height="155" alt=""/>
</figure>

The truth table for it would be:

|In0|In1|In2|Out0|Out1|
|-|-|-|-|-|
|0|0|0|0|0|
|0|0|1|1|0|
|0|1|0|1|0|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|1|
|1|1|0|0|1|
|1|1|1|1|1|

For inputs $a,b,c$, the outputs satisfy

$$
Out0=a\oplus b\oplus c,\qquad
Out1=(a\land b)\lor(a\land c)\lor(b\land c),
$$

where $u\oplus v=(u\land\neg v)\lor(\neg u\land v)$ uses only the allowed gates.

### (5)
For `P6` the logic will be as follows:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_2_p3.png" width="433" height="186" alt=""/>
</figure>

If the two $P_3$ outputs are $(h_0,l_0)$ and $(h_1,l_1)$, let $c_0=l_0\land l_1$. The three output bits are

$$
z_0=l_0\oplus l_1,\quad
z_1=h_0\oplus h_1\oplus c_0,\quad
z_2=(h_0h_1)\lor(h_0c_0)\lor(h_1c_0).
$$

### (6)
#### itsuitsuki's solution
The latency problem comes from ripple carry adders used in $P_n$ circuit. To solve this, we can use carry look-ahead adders for $n$ bits instead of ripple carry adders. 

In ripple carry adders (sequential), the next adder must wait for the carry bit from the previous adder, which causes propagation delay. In carry look-ahead adders (parallel), carry bits are calculated in advance using generate and propagate functions, allowing the final carry, and all the sum bits to be added simultaneously, significantly reducing latency.

#### tomfluff's solution
<u>Note:</u> I am not sure about my answer, I think propogation delay is correct but not sure. The question itself isn't clear as well. Should I solve the latency problem or give a reason. Not clear.

Since any of the $n/3$ elements could contribute to the actual sum, there would be a large number of gates which need the data from the last gates available. That is, there would be many in-line gates which would need to wait for the correct value to propogate forward.

Arrange the $P_3$/carry-save compressors in a balanced tree, reducing the operands in $O(\log n)$ stages, and use a carry-lookahead or parallel-prefix adder for the final addition. This avoids a linear chain of propagation delays.
