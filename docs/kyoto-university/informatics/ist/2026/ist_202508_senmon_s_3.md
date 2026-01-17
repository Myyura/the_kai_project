---
sidebar_label: "2025年8月実施 専門科目 S-3"
tags:
  - Kyoto-University
  - Information-Theory
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-3

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Answer the following questions. All logarithms are base 2 ($\log_2$). For calculations, you must use $\log_2 3 = 1.6$ and $\log_2 5 = 2.3$. Also, round to two decimal places if necessary.

**Q.1** Consider a memoryless stationary source $S$ defined by the alphabet $A = \{a, b, c, d, e, f\}$, where each symbol occurs independently. Their probabilities of occurrence are $P(a) = 0.30, P(b) = 0.25, P(c) = 0.15, P(d) = 0.10, P(e) = 0.10, \text{and } P(f) = 0.10$.

(1) Calculate the entropy $H(S)$.

(2) Design a binary Huffman code based on the above probabilities. Draw a Huffman tree (code tree for an instantaneous code).

(3) Calculate the average code length $L$ of the binary Huffman code in (2).

**Q.2** Consider a first-order Markov source $M$ defined by the alphabet $A' = \{a, b, c\}$, where the symbols themselves represent the states, and the following transition probability matrix $P$.
$$ P = \begin{bmatrix} 0.60 & 0.15 & 0.25 \\ 0.10 & 0.65 & 0.25 \\ 0.10 & 0.15 & 0.75 \end{bmatrix} $$
For example, if the current symbol is $a$, the probabilities that the next symbol will be $a, b, \text{or } c$ are $0.60, 0.15, \text{and } 0.25$, respectively.

(1) Calculate the stationary distribution $\boldsymbol{\pi} = (\pi_a, \pi_b, \pi_c)$ of this Markov process. Considering a memoryless source $S'$ based on the stationary distribution, calculate its entropy $H(S')$.

(2) Calculate the entropy rate (entropy per symbol) $H(M)$ of the Markov source $M$.

(3) Compare the magnitudes of $H(S')$ and $H(M)$, and explain the reason for their difference.

**Q.3** Variable-length blocks are created by concatenating one or more characters from the set $A = \{a, b, c, d, e, f\}$. Let the set of five variable-length blocks $A'' = \{ab, ba, cab, dabf, e\}$ be an alphabet in which each element represents a single symbol. For this set $A''$, consider a memoryless stationary source $W$ in which each symbol occurs independently. The probabilities of occurrence for each variable-length block are $P(ab) = 0.25, P(ba) = 0.25, P(cab) = 0.20, P(dabf) = 0.15, \text{and } P(e) = 0.15$.

(1) Evaluate the coding efficiency of the source $W$ at the character level. First, design a binary Huffman code for $W$, and calculate the average code length per block ($L_{\text{block}}$). Furthermore, calculate the average code length per character for this code. Here, the average code length per character is defined as $L_{\text{char}} = L_{\text{block}}/n_{\text{block}}$, where $n_{\text{block}}$ is the average number of characters in $A$ per source symbol of the variable-length block information source. For example, the block $ba$ consists of two characters in $A$, so its number of characters is 2.

(2) After determining the probability distribution of the characters generated from $W$, consider the average code length of a (binary) Huffman code for a memoryless source that follows this distribution. Discuss the magnitude difference (i.e., which is larger) between the average code length obtained here and the average code length per character found in (1), and explain its cause.