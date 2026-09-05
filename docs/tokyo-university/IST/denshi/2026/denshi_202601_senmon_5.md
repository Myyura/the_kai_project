---
sidebar_label: 2026年1月実施 専門 第5問
tags:
  - Tokyo-University
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Channel-Capacity
  - Computer-Science.Information-Theory.Cyclic-Redundancy-Check
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2026年1月実施 専門 第5問

## **Author**
[瑞穂](https://github.com/LiRunyi2001)

## **Description**

*Recalled statement.*
(1) For a binary source $S$ with $p(0)=0.9$ and $p(1)=0.1$, find $H(S)$ and the entropy of its second extension $H(S^2)$. Give a Huffman code and its mean length.

(2) Find the stationary probabilities of the source shown in a transition diagram.

(3) Find the channel capacity in the two cases recalled as “not stable $S$” and “stable $S$”.

(4) Give a transition matrix involving error probability $p$ and mean error length $l$.

(5) Explain CRC and its “capacity” for

$$
G(x)=x^{16}+x^{12}+x^5+1.
$$

### 题目描述

对二元信源求熵、二阶扩展熵与霍夫曼码；对给定转移图求平稳概率；求两种信道的容量及涉及错误概率 $p$、平均错误长度 $l$ 的转移矩阵；说明生成多项式为 $x^{16}+x^{12}+x^5+1$ 的 CRC。

## **Kai**

### (1)

All logarithms below are base $2$. The single-symbol entropy is

$$
H(S)=-0.9\log_2 0.9-0.1\log_2 0.1\simeq0.468996\ \mathrm{bit}.
$$

A Huffman code for the two single symbols is $0\mapsto0$, $1\mapsto1$, with mean length $1$ bit per source symbol.

If $S$ is memoryless, the second-extension probabilities are $0.81,0.09,0.09,0.01$ for $00,01,10,11$, respectively. Independence gives

$$
H(S^2)=2H(S)\simeq0.937991\ \mathrm{bit/pair}.
$$

The Huffman merges have weights $0.01+0.09=0.10$, $0.10+0.09=0.19$, and $0.19+0.81=1$. One code is:

| Pair | Probability | Code |
|---|---|---|
| $00$ | $0.81$ | $0$ |
| $01$ | $0.09$ | $10$ |
| $10$ | $0.09$ | $110$ |
| $11$ | $0.01$ | $111$ |

Thus the mean length is $0.81+2(0.09)+3(0.10)=1.29$ bit/pair, or $0.645$ bit/source symbol. If the source has memory, the two marginal probabilities alone do not determine $H(S^2)$: one needs the joint probabilities, or equivalently $H(X_2\mid X_1)$.

### (2)

Without the diagram, numerical stationary probabilities cannot be determined. For a two-state Markov source with

$$
P=\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix},\qquad a+b>0,
$$

the equations $\pi P=\pi$ and $\pi_0+\pi_1=1$ yield

$$
\boxed{\pi_0=\frac b{a+b},\qquad \pi_1=\frac a{a+b}}.
$$

If $a=b=0$, every initial distribution is stationary.

### (3)

A channel capacity cannot be inferred from source probabilities alone. For a memoryless binary symmetric channel with crossover probability $p$, the answer is

$$
C=1-H_2(p).
$$

Indeed, $I(X;Y)=H(Y)-H(Y\mid X)\le1-H_2(p)$, and an equiprobable input attains equality.

For an additive binary channel $Y_i=X_i\oplus E_i$ with stationary, ergodic noise independent of the input, the capacity per use is instead

$$
C=1-\overline H(E),\qquad
\overline H(E)=\lim_{n\to\infty}\frac1nH(E_1,\ldots,E_n).
$$

To see the bound, $I(X^n;Y^n)=H(Y^n)-H(E^n)\le n-H(E^n)$; independent uniform input makes $Y^n$ uniform and attains it.

### (4)

If the intended model is a two-state Markov error indicator $E_i\in\{0,1\}$, with stationary error fraction $p\in(0,1)$ and mean length $l$ of a run of $1$'s, write

$$
a=P(E_{i+1}=1\mid E_i=0),\qquad
b=P(E_{i+1}=0\mid E_i=1).
$$

A run of errors has geometric length, so $l=1/b$. Stationary flow gives $(1-p)a=pb$. Hence

$$
\boxed{P=\begin{pmatrix}
1-\dfrac{p}{l(1-p)}&\dfrac{p}{l(1-p)}\\[4pt]
\dfrac1l&1-\dfrac1l
\end{pmatrix}}.
$$

The parameters must satisfy $l\ge1$ and $p\le l/(l+1)$ so all entries are probabilities. In the stationary ergodic case, this model has entropy rate

$$
\overline H(E)=(1-p)H_2\!\left(\frac{p}{l(1-p)}\right)
+pH_2\!\left(\frac1l\right).
$$

Other meanings of $l$, or a hidden-state error model, require a different matrix.

### (5)

A cyclic redundancy check appends a polynomial remainder over $\mathrm{GF}(2)$. For a $k$-bit message polynomial $M(x)$, let

$$
R(x)=x^{16}M(x)\bmod G(x),\qquad
T(x)=x^{16}M(x)+R(x).
$$

Then $G$ divides $T$. The receiver divides the received polynomial by $G$ and reports an error when the remainder is nonzero. An error polynomial $E(x)$ is undetected exactly when $G\mid E$.

For the given generator:

- There are $16$ redundancy bits; for a $k$-bit payload the code rate is $k/(k+16)$.
- Every nonzero burst of length at most $16$ is detected. After removing its leading power of $x$, its degree is below $16$, so it cannot be divisible by $G$; $G(0)=1$ permits removing that power.
- Every odd-weight error is detected. Over $\mathrm{GF}(2)$, $G(1)=0$, so $x+1$ divides $G$, whereas an odd-weight error has $E(1)=1$.
- Every two-bit error is detected for total codeword length at most $32767$. In fact, the multiplicative order of $x$ modulo $G$ is $32767$, so $G$ cannot divide $1+x^d$ for $1\le d<32767$.

These properties describe redundancy and error-detection capability. The polynomial alone does not specify a Shannon channel capacity. Source: the CRC-16/CCITT entry in [Koopman's polynomial table](https://users.ece.cmu.edu/~koopman/crc/crc16.html).
