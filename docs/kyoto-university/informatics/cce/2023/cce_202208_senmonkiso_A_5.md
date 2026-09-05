---
sidebar_label: '2022年8月実施 専門基礎A [A-5]'
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Binary-Symmetric-Channel
  - Computer-Science.Information-Theory.Channel-Capacity
  - Computer-Science.Information-Theory.Minimum-Distance-Error-Correction
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎A \[A-5\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2022_cce.pdf)
Answer all the following questions.

(1) Consider a general communication system model, which consists of a source, destination, channel encoder, channel decoder, source encoder, source decoder, and communication channel. Draw this model as a block diagram.

(2) A stationary memoryless information source $S$ generates information symbols $A, B, C, D,$ and $E$ with probabilities $0.6, 0.16, 0.12, 0.08,$ and $0.04$ respectively. Answer the following questions. $\log_2 3 = 1.6$ and $\log_2 5 = 2.3$ may be used.

- (a) Describe the definitions of “memoryless” and “stationary”.
- (b) Find a binary Huffman code of $S$.
- (c) Find the expected codeword length per symbol of the code in Question (b).
- (d) Find the entropy of $S$.

(3) Let $C$ be a memoryless binary symmetric channel (BSC) with crossover probability $p$. Answer the following questions.

- (a) Show the channel matrix of $C$.
- (b) Show that the channel capacity of $C$ is given by $1 + p \log_2 p + (1 - p)\log_2(1 - p)$. In addition, graph it as a function of $p$.
- (c) Consider communications with $(7,4)$ Hamming code through $C$. Evaluate the probability of decoding failure assuming that any correctable errors are corrected.
- (d) Find the channel capacity of a cascade of two BSCs with crossover probabilities $p$ and $q$.

### 题目描述

回答全部问题。

1. 一个一般通信系统由信源、信宿、信道编码器、信道译码器、信源编码器、信源译码器和通信信道组成。画出其框图。
2. 平稳无记忆信源 $S$ 以概率 $0.6,0.16,0.12,0.08,0.04$ 产生符号 $A,B,C,D,E$。可使用 $\log_2 3=1.6$、$\log_2 5=2.3$。
   1. 说明“无记忆”和“平稳”的定义。
   2. 为 $S$ 构造一个二元 Huffman 码。
   3. 求该码的每符号平均码长。
   4. 求 $S$ 的熵。
3. 设 $C$ 为交叉概率 $p$ 的无记忆二元对称信道（BSC）。
   1. 写出 $C$ 的信道矩阵。
   2. 证明其信道容量为

      $$
      1+p\log_2p+(1-p)\log_2(1-p),
      $$

      并画出容量关于 $p$ 的图像。
   3. 通过 $C$ 使用 $(7,4)$ Hamming 码通信，假设所有可纠正错误都被纠正，求译码失败概率。
   4. 求交叉概率分别为 $p,q$ 的两个 BSC 串联后的信道容量。

## **Kai**
### (1) 

![Communication system block diagram](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce/2023/kyoto-cce-2022-communication-model.svg)
Source $\rightarrow$ source encoder $\rightarrow$ channel encoder $\rightarrow$ Communication channel $\rightarrow$ channel decoder $\rightarrow$ source decoder $\rightarrow$ destination 

### (2)
#### (a)  
"Memoryless" means that outputs at different times are independent.
"Stationary" means that their probability distribution does not change with time.

#### (b)
One Huffman code is

$$
A\mapsto0,\quad B\mapsto10,\quad C\mapsto110,\quad
D\mapsto1110,\quad E\mapsto1111.
$$

Its merge weights are $0.04+0.08=0.12$, $0.12+0.12=0.24$, $0.16+0.24=0.40$, and $0.40+0.60=1$.

The corresponding tree:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_A_5_p1.png" width="500" alt=""/>
</figure>

#### (c)  

$$
\bar{L} = \sum P_i L_i = 0.6 \times 1 + 0.16 \times 2 + 0.12 \times 3 + 0.08 \times 4 + 0.04 \times 4 = 1.76 \text{ bit/symbol}
$$

#### (d)  

$$
H(S) = \sum P_i \log_2 \frac{1}{P_i} = \frac{15}{25} \log_2 \frac{25}{15} + \frac{4}{25} \log_2 \frac{25}{4} + \frac{3}{25} \log_2 \frac{25}{3} + \frac{2}{25} \log_2 \frac{25}{2} + \frac{1}{25} \log_2 25
$$

$$
\approx 1.668 \text{ bits/symbol (using the supplied rounded logarithms)}
$$

Using accurate logarithms gives $H(S)\approx1.7095$ bits/symbol.

### (3)
#### (a) 

$$ 
\begin{bmatrix} 1-p & p \\ p & 1-p \end{bmatrix} 
$$

#### (b)  
$C = \max I(x; y) = \max H(y) - H(y|x)$  
$H(y|x) = H(1-p, p) = -[p \log_2 p + (1-p) \log_2 (1-p)]$  
A uniform input makes the output uniform for every $p\in[0,1]$, so the upper bound $H(y)\leq1$ is attainable.
$\max H(y) = H(\frac{1}{2}) = 1$. So that $C = 1 + p \log_2 p + (1-p) \log_2 (1-p).$ 

The graph: 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce/2023/kyoto-cce-2022-bsc-capacity.svg" width="500" alt=""/>
</figure>

#### (c)  
The (7,4) Hamming code can correct 1 bit error.  
$P_{fail} = 1 - P_{success} = 1 - [(1-p)^7 + 7 \cdot p(1-p)^6]$ 

#### (d)  

$$
P_{total} = \begin{bmatrix} 1-p & p \\ p & 1-p \end{bmatrix} \begin{bmatrix} 1-q & q \\ q & 1-q \end{bmatrix} = \begin{bmatrix} (1-p)(1-q)+pq & (1-p)q+p(1-q) \\ p(1-q)+q(1-p) & (1-p)(1-q)+pq \end{bmatrix}
$$

This is still a BSC : $C = 1 - H(p(1-q) + q(1-p)).$
