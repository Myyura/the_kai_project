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

A stationary memoryless information source $S$ generates information symbols $A, B, C, D,$ and $E$ with probabilities $0.4, 0.2, 0.16, 0.16,$ and $0.08$, respectively. Answer the following questions.  
$\log_2 3 = 1.6$ and $\log_2 5 = 2.3$ may be used.

(a) Find a binary Huffman code of $S$.

(b) Describe the definition of instantaneous codes.

(c) Find the expected codeword length per symbol of the code in Question (a).

(d) Find the entropy of $S$.

### (2)

Answer the following questions related to channel coding. Let $C_1$ and $C_2$ be binary cyclic codes of length 15 with generator polynomials  
$G_1(x) = x^4 + x + 1$ and  
$G_2(x) = (x^4 + x + 1)(x^4 + x^3 + x^2 + x + 1)$, respectively.

(a) Determine whether

$$
x^{10} + x^9 + x^7 + x^6 + x^5 + x^3 + x^2 + 1
$$

is a codeword polynomial of $C_1$ or not.

(b) Find the codeword polynomial of $C_1$ for the message polynomial

$$
x^3 + x^2 + 1
$$

in a systematic form.

(c) Find the minimum distance of $C_1$.

(d) Find how many bit errors $C_1$ can correct.

(e) Explain the advantage(s) and disadvantage(s) of $C_2$ over $C_1$.

(f) Explain how to correct errors with $C_2$.

## **Kai**
### (1)
#### (a) 
Huffman Tree Structure:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_A_5_p1.png" width="450" alt=""/>
</figure>

#### (b) 
Instantaneous codes satisfy the **Prefix condition**, which ensures that no codeword is a prefix of another. This property allows the decoder to identify and decode each symbol uniquely and immediately upon its reception, without the need for a look-ahead or causing ambiguity.

#### (c)

$$
L = \sum_i P_i l_i = 0.4 \times 1 + 0.2 \times 3 + 0.16 \times 3 + 0.16 \times 3 + 0.08 \times 3 $$

$$
L = 2.2 \text{ bits / symbol}
$$

#### (d)
Entropy Calculation

$$
H(S) = \sum_i P_i \log_2 \frac{1}{P_i} = \frac{2}{5} \log_2 \frac{5}{2} + \frac{1}{5} \log_2 5 + \frac{8}{25} \log_2 \frac{25}{4} + \frac{2}{25} \log_2 \frac{25}{2}
$$

$$
H(S) \approx 2.1 \text{ bits / symbol}
$$

### (2)
#### (a) 
Check if the given polynomial is a codeword using polynomial division:

```text
                       x^6 + x^5 + x^2
                _____________________________________________
    x^4 + x + 1 | x^10 + x^9 + x^7 + x^6 + x^5 + x^3 + x^2 + 1
                  x^10       + x^7 + x^6
                  -----------------------
                         x^9       + x^5
                         x^9       + x^6 + x^5
                         -----------------------
                                   x^6       + x^3 + x^2 + 1
                                   x^6       + x^3 + x^2
                                   -----------------------
                                                           1  (Remainder)
```

**Conclusion:** Since the remainder is $1 \neq 0$, this is **not** a codeword polynomial.

#### (b)
Given $m(x) = x^3 + x^2 + 1$:

$$
C(x) = x^4 m(x) + r(x) = x^7 + x^6 + x^4 + x^2
$$

$$
\Rightarrow r(x) = x^2
$$

#### (c) 
$G_1(x)$ is a **primitive polynomial**, so $C_1$ is a Hamming code. For a Hamming code, the minimum distance is $d_{min} = 3$.

#### (d)

$$
2t + 1 \le d_{min} \Rightarrow 2t + 1 \le 3 \Rightarrow t = 1
$$

$C_1$ can correct up to **1 bit** error.

#### (e) 
$C_2$ has more parity bits compared to $C_1$. Therefore, $C_2$ can detect and correct more errors, but its **coding efficiency** (rate) is lower than $C_1$.

#### (f) 
1. Use $G_2(x)$ to derive the corresponding parity-check matrix $H$.
2. Calculate the syndrome $S = H R^T = H(m^T + e^T) = H e^T$.
3. Use a pre-calculated error mapping table or a decoding algorithm (like Meggitt decoding) to find the error pattern $e$ corresponding to the syndrome $S$.
4. Correct the error: $C = R + e$.
