---
sidebar_label: '2020年8月実施 専門基礎A [A-5]'
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Huffman-Coding
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Cyclic-Code
  - Computer-Science.Information-Theory.Minimum-Distance-Error-Correction
  - Computer-Science.Information-Theory.Channel-Coding-Theorem
---
# 京都大学 情報学研究科 通信情報システム専攻 2020年8月実施 専門基礎A \[A-5\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura

## **Description**
Answer all the following questions.

### (1)

$S_A$ and $S_B$ are independent and stationary memoryless information sources.  
$S_A$ generates information symbols $0$ and $1$ with probabilities $0.7$ and $0.3$, respectively, while $S_B$ generates $0$ and $1$ with probabilities $0.6$ and $0.4$, respectively.
Answer the following questions. $\log_2 3 = 1.6$, $\log_2 5 = 2.3$, and $\log_2 7 = 2.8$ may be used.

(a) Find the value of the entropy of $S_A$.

(b) Consider the $n$th extension of $S_A$. Find a binary Huffman code for the second extension ($n=2$) of $S_A$ and the expected codeword length per symbol.

(c) Compare the entropy in Question (a) and the expected codeword length per symbol in Question (b). Explain which should be larger and the reason.

(d) Explain whether the expected codeword length per symbol in Question (b) increases or decreases as $n$ in Question (b) increases and the reason.

(e) An information source $S_X$ has two states and generates information symbols by following $S_A$ and $S_B$ when its state is $s_A$ and $s_B$, respectively.  
$S_X$ transits from a state to the other state when it generates $1$. Draw the state diagram of $S_X$.

(f) Find the stationary distribution of $S_X$ in Question (e).

(g) Find the value of the entropy of $S_X$ in Question (e). Round down to one decimal place.

### (2)

Answer the following questions related to channel coding. Let $C$ be the binary cyclic code of length $15$ that has generator polynomial

$$
G(x) = x^4 + x + 1.
$$

(a) Determine whether $x^{10} + x^7 + x^4 + x^3 + x^2 + x + 1$ is a codeword polynomial of $C$ or not.

(b) Find the codeword polynomial for the message polynomial $x^5 + x^3 + x$ in a systematic form.

(c) Find the minimum distance of $C$.

(d) Find the maximum number of error bits corrected by $C$.

(e) Consider communications with $C$ through a memoryless binary symmetric channel with crossover probability $p$. Evaluate the probability of decoding failure assuming that any correctable errors are corrected.

(f) Explain the channel coding theorem.

### 题目描述

回答全部问题。

1. $S_A,S_B$ 是彼此独立的平稳无记忆信息源。$S_A$ 以概率 $0.7,0.3$ 产生符号 $0,1$，$S_B$ 以概率 $0.6,0.4$ 产生符号 $0,1$。可使用
   $\log_2 3=1.6$、$\log_2 5=2.3$、$\log_2 7=2.8$。
   1. 求 $S_A$ 的熵。
   2. 考虑 $S_A$ 的 $n$ 次扩展。为二次扩展（$n=2$）构造二元 Huffman 码，并求每个原始符号的平均码长。
   3. 比较第 1 小问的熵与第 2 小问的平均码长，说明哪个更大及原因。
   4. 当扩展次数 $n$ 增大时，每个符号的平均码长会增大还是减小？说明原因。
   5. 信息源 $S_X$ 有状态 $s_A,s_B$；处于相应状态时分别按 $S_A,S_B$ 产生符号，每当产生 $1$ 就转移到另一个状态。画出 $S_X$ 的状态图。
   6. 求 $S_X$ 的平稳分布。
   7. 求 $S_X$ 的熵，并向下取到一位小数。
2. 回答信道编码问题。设 $C$ 为长度 $15$、生成多项式

   $$
   G(x)=x^4+x+1
   $$

   的二元循环码。
   1. 判断
      $x^{10}+x^7+x^4+x^3+x^2+x+1$ 是否为 $C$ 的码字多项式。
   2. 求消息多项式 $x^5+x^3+x$ 的系统形式码字多项式。
   3. 求 $C$ 的最小距离。
   4. 求 $C$ 最多能纠正的错误比特数。
   5. 通过交叉概率为 $p$ 的无记忆二元对称信道使用 $C$ 通信，假设所有可纠正错误均被纠正，求译码失败概率。
   6. 说明信道编码定理。

## **Kai**
### (1)
#### (a)

$$
\begin{aligned}
H(S_A) &= \sum_i p_i \log_2 \frac{1}{p_i} \\
&= 0.7 \cdot \log_2 \frac{1}{0.7} + 0.3 \cdot \log_2 \frac{1}{0.3} \\
&\approx 0.8813 \text{ bits/symbol}.
\end{aligned}
$$

(Using the supplied rounded logarithms gives $0.86$.)


#### (b)
The symbol probabilities are:
*   $p(00) = 0.7 \times 0.7 = 0.49$
*   $p(01) = 0.7 \times 0.3 = 0.21$
*   $p(10) = 0.3 \times 0.7 = 0.21$
*   $p(11) = 0.3 \times 0.3 = 0.09$

**Construct Huffman Code:**
One valid code is

$$
00\mapsto0,\qquad 01\mapsto10,\qquad
10\mapsto110,\qquad 11\mapsto111.
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_A_5_p1.png" width="450" alt=""/>
</figure>

**Average Code Length ($\bar{L}$):**

$$
\begin{aligned}
\bar{L} &= 1 \times 0.49 + 2 \times 0.21 + 3 \times 0.21 + 3 \times 0.09 \\
&= 0.49 + 0.42 + 0.63 + 0.27 \\
&= 1.81 \text{ bits/sequence}
\end{aligned}
$$

**Average Code Length per Symbol ($\bar{L}_s$):**

$$
\bar{L}_s = \frac{\bar{L}}{2} = \frac{1.81}{2} = 0.905 \text{ bits/symbol}
$$

#### (c) 
$H(S_A) < \bar{L}_s$.

According to **Shannon's source coding theorem**, the entropy of a source provides the ultimate lower bound on the average length of any lossless code for that source.

The source $S_A$ doesn't meet with dyadic distribution (powers of $1/2$), so the Huffman coding will never reach the lower bound exactly.

#### (d)
It need not decrease monotonically: here $\bar L_2/2=0.905$, whereas the optimal Huffman value for $n=3$ is $\bar L_3/3=2.726/3\approx0.9087$. However, for every $n$,

$$
H(S_A)\le \frac{\bar L_n}{n}<H(S_A)+\frac1n.
$$

Thus the redundancy per symbol tends to zero and $\bar L_n/n\to H(S_A)$.

#### (e)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_A_5_p2.png" width="450" alt=""/>
</figure>

#### (f) 
Let the stationary probabilities be $\pi_a, \pi_b$.

$$
\begin{cases}
\pi_a = 0.7\pi_a + 0.4\pi_b \\
\pi_b = 0.3\pi_a + 0.6\pi_b \\
\pi_a + \pi_b = 1
\end{cases}
\Rightarrow
\begin{cases}
0.3\pi_a = 0.4\pi_b \\
\pi_a + \pi_b = 1
\end{cases}
\Rightarrow
\begin{cases}
\pi_a = \frac{4}{7} \\
\pi_b = \frac{3}{7}
\end{cases}
$$

#### (g)

$$
H(S_X) = \pi_a H(A) + \pi_b H(B)
$$

The two conditional entropies are

* $H(S_A)\approx0.8813$ bits/symbol;
* $H(S_B)=-0.6\log_2 0.6-0.4\log_2 0.4\approx0.9710$ bits/symbol.

Substituting these values and the stationary probabilities gives

$$
\begin{aligned}
H(S_X)
&=\frac47H(S_A)+\frac37H(S_B)\\
&\approx\frac47(0.8813)+\frac37(0.9710)\\
&\approx0.9197\ \text{bits/symbol}.
\end{aligned}
$$

Rounded down to one decimal place, the answer is $\boxed{0.9}$ bits/symbol.

---

### (2)
#### (a) 
A polynomial is a codeword if it is divisible by the generator polynomial $g(x)$.

$$
(x^{10} + x^7 + x^4 + x^3 + x^2 + x + 1) \equiv 0 \pmod{g(x)}
$$

So this is a codeword polynomial.

#### (b)
The systematic form is given by $c(x) = x^r m(x) + r(x)$.
Given message $m(x) = x^5 + x^3 + x$. Degree of $g(x)$ is $r=4$.

1.  **Shift**: $x^r m(x) = x^4 (x^5 + x^3 + x) = x^9 + x^7 + x^5$.
2.  **Modulo**: $x^9 + x^7 + x^5 \equiv x^2 + x + 1 \pmod{g(x)}$.
    *   So remainder $r(x) = x^2 + x + 1$.
3.  **Codeword**: $c(x) = x^9 + x^7 + x^5 + x^2 + x + 1$.

#### (c)
For the $(15,11)$ cyclic code:

* $r=15-11=4$;
* $n=2^r-1=15$ and $k=2^r-1-r=11$;
* since $g(x)=x^4+x+1$ is primitive of degree $4$, this is the binary cyclic Hamming code.

For completeness, let $\alpha$ be a root of $g(x)$. Its order is $15$. A weight-two codeword would have the form $x^j(1+x^\ell)$ with $1\le\ell\le14$, and divisibility by $g$ would imply $\alpha^\ell=1$, a contradiction. Weight one is also impossible, while $g(x)$ itself is a weight-three codeword. Hence

$$
d_{\min}=3.
$$

#### (d)

$$
N_{\text{error}} \le \left\lfloor \frac{d_{\min} - 1}{2} \right\rfloor = \left\lfloor \frac{3 - 1}{2} \right\rfloor = 1
$$

The maximum number of correctable error bits is **1**.

#### (e)
Probability of error occurring in a codeword (assuming correction of 1 bit):

$$
P_{\text{error}} = 1 - (1-p)^{15} - 15p(1-p)^{14}
$$

(This represents the probability of having 2 or more errors).

#### (f)

*   **Achievability**: For any data transmission rate $R < C$ (channel capacity), it is possible to design a coding scheme that allows for communication with an arbitrarily low probability of error.
*   **Converse**: If $R > C$, it is impossible to achieve arbitrarily low probability of error.
