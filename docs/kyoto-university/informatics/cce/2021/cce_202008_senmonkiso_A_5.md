---
sidebar_label: "2020年8月実施 専門基礎A [A-5]"
tags:
  - Kyoto-University
  - Information-Theory
---
# 京都大学 情報学研究科 通信情報システム専攻 2020年8月実施 専門基礎A \[A-5\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

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

## **Kai**
### (1)
#### (a)

$$
\begin{aligned}
H(S_A) &= \sum_i p_i \log_2 \frac{1}{p_i} \\
&= 0.7 \cdot \log_2 \frac{1}{0.7} + 0.3 \cdot \log_2 \frac{1}{0.3} \\
&= 0.86 \text{ bits/symbol}
\end{aligned}
$$


#### (b)
The symbol probabilities are:
*   $p(00) = 0.7 \times 0.7 = 0.49$
*   $p(01) = 0.7 \times 0.3 = 0.21$
*   $p(10) = 0.3 \times 0.7 = 0.21$
*   $p(11) = 0.3 \times 0.3 = 0.09$

**Construct Huffman Code:**

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
The expected code length per symbol decreases as block length $n$ increases.
According to Shannon's source coding theorem for the $n$-th extension of a discrete memoryless source (DMS), the average codeword length per source symbol satisfies:

$$
H(X) \le \frac{\bar{L}^n}{n} < H(X) + \frac{1}{n}
$$

As $n$ increases, the length per symbol will approach the entropy bound.

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

*   $H(A) = H(S_A) \approx 0.88 \text{ bits/symbol}$
*   $H(B) = -0.6 \log_2 0.6 - 0.4 \log_2 0.4 \approx 0.97 \text{ bits/symbol}$

Substitute into $H(S_X)$:

$$
\begin{aligned}
H(S_X) &= \frac{4}{7} \times 0.88 + \frac{3}{7} \times 0.97 \\
&\approx 0.50 + 0.41 \\
&= 0.91 \text{ bits/symbol}
\end{aligned}
$$

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
For $(15, 11)$ cyclic code:

*   $r = 15 - 11 = 4$.
*   $n = 2^r - 1 = 15$, $k = 2^r - 1 - r = 11$.
*   Since $g(x)$ is a primitive polynomial, the $(15, 11)$ cyclic code is a **Hamming code**.
*   Minimum distance $d_{\min} = 3$.

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
