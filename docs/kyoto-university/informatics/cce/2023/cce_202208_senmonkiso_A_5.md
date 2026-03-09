---
sidebar_label: "2022年8月実施 専門基礎A [A-5]"
tags:
  - Kyoto-University
  - Information-Theory
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎A \[A-5\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
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

## **Kai**
### (1) 
Source $\rightarrow$ source encoder $\rightarrow$ channel encoder $\rightarrow$ Communication channel $\rightarrow$ channel decoder $\rightarrow$ source decoder $\rightarrow$ destination 

### (2)
#### (a)  
"Memoryless" means the current output is not related to previous ones.  
"stationary" means the output behaviour keeps the same over time. 

#### (b) construct the Huffman code:

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
= 1.668 \text{ bits/symbol}
$$

### (3)
#### (a) 

$$ 
\begin{bmatrix} 1-p & p \\ p & 1-p \end{bmatrix} 
$$

#### (b)  
$C = \max I(x; y) = \max H(y) - H(y|x)$  
$H(y|x) = H(1-p, p) = -[p \log_2 p + (1-p) \log_2 (1-p)]$  
$\max H(y)$ will be achieved when the output probability is uniform.  
$\max H(y) = H(\frac{1}{2}) = 1$. So that $C = 1 + p \log_2 p + (1-p) \log_2 (1-p).$ 

The graph: 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_A_5_p2.png" width="500" alt=""/>
</figure>

#### (c)  
The (7,4) Hamming code can correct 1 bit error.  
$P_{fail} = 1 - P_{success} = 1 - [(1-p)^7 + 7 \cdot p(1-p)^6]$ 

#### (d)  

$$
P_{total} = \begin{bmatrix} 1-p & p \\ p & 1-p \end{bmatrix} \begin{bmatrix} 1-q & q \\ q & 1-q \end{bmatrix} = \begin{bmatrix} (1-p)(1-q)+pq & (1-p)q+p(1-q) \\ p(1-q)+q(1-p) & p(q)+q(1-p) \end{bmatrix}
$$

This is still a BSC : $C = 1 - H(p(1-q) + q(1-p)).$
