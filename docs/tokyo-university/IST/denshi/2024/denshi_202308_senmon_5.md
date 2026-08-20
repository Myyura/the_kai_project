---
sidebar_label: "2023年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Computer-Science.Information-Theory.Markov-Source-Stationary-Distribution
  - Computer-Science.Information-Theory.Entropy-Rate
  - Computer-Science.Information-Theory.Block-vs-Run-Length-Source-Coding
  - Computer-Science.Information-Theory.Huffman-Coding
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2023年8月実施 専門 第5問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766), 祭音Myyura

## **Description**
The source $S$ is a first-order Markov information source outputting $0$ and $1$. $0$ is followed by $0$ with a probability of $0.9$ and $1$ is followed by $1$ with a probability of $0.6$. The following may be used. $\log_23 = 1.58 , \log_25 = 2.32$. For the calculations, two significant digits are sufficient.

(1) Show a state transition diagram of the source $S$.

(2) Obtain the probability of each $0$ and $1$ output from the source $S$.

(3) Obtain the entropy of the source $S$.

Assume the following four methods of coding to compress the output symbols of the source $S$.

a. fixed-length coding of fixed-length symbol sequences

b. variable-length coding of fixed-length symbol sequences

c. fixed-length coding of variable-length symbol sequences

d. variable-length coding of variable-length symbol sequences

Consider the fixed-length symbol sequences as $00 , 01 , 10$ and $11$ , and the variable-length symbol sequences as $000 , 001 , 01 ,$ and $1$ that are $0$'s run lengths up to length $3$. The variable-length coding is Huffman coding consisting of $0$ and $1$.

(4) Obatain the probability of each of the fixed-length symbol sequences of $00 , 01 , 10 ,$ and $11$.

(5) In the case b , show the Huffman code and obtain the average code length per symbol of the sources $S$ .

(6) Obtain the probability of each of the variable-length symbol sequences of $000 , 001 ,01 ,$ and $1$.

(7) In the case c , obtain the average code length per symbol of the source $S$ .

(8) Show the Huffman code for the case d and obtain the average code length per symbol of the source $S$.

(9) Arrange the methods of a , b , c , and d from the shortest to the longest in terms of the average code length. 
 
### 题目描述

信源 $S$ 是输出 $0,1$ 的一阶马尔可夫信息源：输出 $0$ 后下一个符号仍为 $0$ 的概率为 $0.9$，输出 $1$ 后下一个符号仍为 $1$ 的概率为 $0.6$。计算可使用 $\log_2 3=1.58$、$\log_2 5=2.32$，保留两位有效数字即可。

(1) 画出信源 $S$ 的状态转移图。

(2) 求 $S$ 输出 $0$、$1$ 的各自概率。

(3) 求信源 $S$ 的熵。

考虑用以下四种方法压缩 $S$ 的输出符号：

- a. 对固定长度符号串作定长编码；
- b. 对固定长度符号串作变长编码；
- c. 对变长符号串作定长编码；
- d. 对变长符号串作变长编码。

固定长度符号串取 $00,01,10,11$；变长符号串取 $000,001,01,1$，它们表示长度最多为 $3$ 的 $0$ 游程。变长编码采用由 $0,1$ 构成的霍夫曼码。

(4) 求固定长度符号串 $00,01,10,11$ 各自的概率。

(5) 对方法 b，给出霍夫曼码并求每个信源符号的平均码长。

(6) 求变长符号串 $000,001,01,1$ 各自的概率。

(7) 对方法 c，求每个信源符号的平均码长。

(8) 对方法 d，给出霍夫曼码并求每个信源符号的平均码长。

(9) 按平均码长从短到长排列方法 a、b、c、d。

## **Kai**
### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_5_p1.png" width="406" height="117" alt=""/>
</figure>

### (2)

$$
\left\{
\begin{aligned}
&0.9w_0 + 0.4w_1 = w_0 \\
&0.1w_0 + 0.6w_1 = w_1 \\
&w_0 + w_1 = 1
\end{aligned}
\right.
$$

$$
w_0 = 0.8 , w_1 = 0.2
$$

$$
\left\{
\begin{aligned}
P(0) = 0.8 \times 0.9 + 0.2 \times 0.4 \\
P(1) = 0.8 \times 0.1 + 0.2 \times 0.6 \\
\end{aligned}
\right.
$$

$$
P(0) = 0.8 , P(1) = 0.2
$$

### (3)

$$
\begin{aligned}
H(S) &= 0.8H_2(0.1)+0.2H_2(0.4) \\
&=0.8(\log 10-1.8\log3)
 +0.2(\log5-0.4-0.6\log3) \\
&\simeq 0.57\ \text{bit/symbol}
\quad(0.58\text{ with the supplied rounded logarithms}).
\end{aligned}
$$

### (4)

$$
\begin{aligned}
P(00) &= 0.8 \times 0.9 = 0.72 \\
P(01) &= 0.8 \times 0.1 = 0.08 \\
P(10) &= 0.2 \times 0.4 = 0.08 \\
P(11) &= 0.2 \times 0.6 = 0.12 \\
\end{aligned}
$$

### (5)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_5_p2.png" width="599" height="406" alt=""/>
</figure>

$$
\begin{aligned}
\overline{L} &= (0.72 \times 1 + 0.12 \times 2 + 0.16 \times 3) / 2 \\
&= (0.72 + 0.24 + 0.48) / 2 \\
&= 0.72
\end{aligned}
$$

### (6)

$$
\begin{aligned}
P(000) &= 0.8 \times 0.9 \times 0.9 = 0.648 \\
P(001) &= 0.8 \times 0.9 \times 0.1 = 0.072 \\
P(01) &= 0.8 \times 0.1 = 0.08 \\
P(1) &= 0.2 \\
\end{aligned}
$$

### (7)

$$
\begin{aligned}
\overline{L} &= \frac{2}{0.72 \times 3 + 0.08 \times 2 + 0.2 \times 1} \\
&= \frac{2}{2.52} \approx 0.794
\end{aligned}
$$

### (8)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_5_p3.png" width="680" height="250" alt=""/>
</figure>

$$
\begin{aligned}
\overline{L} &= \frac{0.648 \times 1 + 0.2 \times 2 + 0.152 \times 3}{2.52} \\
&= 0.597
\end{aligned}
$$

### (9)
d,b,c,a
