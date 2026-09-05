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

For a phrase that starts at a fixed time in the stationary source, the probabilities are

$$
(P(000),P(001),P(01),P(1))=(0.648,0.072,0.08,0.2).
$$

For continuous, non-overlapping parsing into these phrases, the phrase boundaries have a different stationary distribution. Let $q$ be the probability that the symbol immediately before a phrase is $0$. A phrase ends in $0$ exactly when it is $000$, so

$$
q=0.9^3q+0.4(0.9)^2(1-q),\qquad q=\frac{324}{595}.
$$

The probability that the next phrase begins in $0$ is then

$$
a=0.9q+0.4(1-q)=\frac{80}{119}.
$$

Consequently the long-run phrase probabilities for continuous compression are

$$
\boxed{(p_{000},p_{001},p_{01},p_1)
=\frac1{595}(324,36,40,195)}.
$$

### (7)

Under continuous parsing, the mean number of source symbols in a phrase is

$$
\mathbb E[\ell]=\frac{3(324+36)+2(40)+195}{595}
=\frac{271}{119}.
$$

Case c uses two bits per phrase, giving

$$
\boxed{\overline L_c=\frac{2}{\mathbb E[\ell]}
=\frac{238}{271}\simeq0.88\ \mathrm{bit/symbol}}.
$$

If each phrase is instead independently started with the source's stationary symbol distribution, the probabilities in the first line of (6) give $2/2.52\simeq0.79$ bit/symbol for that model.

### (8)

The Huffman merges for continuous parsing have weights
$36+40=76$, $76+195=271$, and $271+324=595$. One code is

| Phrase | Probability | Code |
|---|---|---|
| $000$ | $324/595$ | $0$ |
| $1$ | $195/595$ | $10$ |
| $01$ | $40/595$ | $110$ |
| $001$ | $36/595$ | $111$ |

Thus

$$
\boxed{\overline L_d
=\frac{324+2(195)+3(40+36)}{3(324+36)+2(40)+195}
=\frac{942}{1355}\simeq0.70\ \mathrm{bit/symbol}}.
$$

For the independently restarted phrase model, the same code gives
$(0.648+2(0.2)+3(0.152))/2.52\simeq0.60$ bit/symbol.

### (9)

For continuous parsing, the lengths are approximately
$d=0.70$, $b=0.72$, $c=0.88$, and $a=1$ bit/symbol. Therefore

$$\boxed{d<b<c<a}.$$

The ordering is the same under the independently restarted phrase model.
