---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題1

## **Author**

## **Description**
Let $\Sigma$ be a finite alphabet (i.e., a finite set of letters), and $\epsilon$ be the empty sequence. We define the `shuffle` $w_1 \otimes w_2 \subseteq \Sigma^*$ of two words $w_1, w_2 \in \Sigma^*$ as follows.

- For every $w \in \Sigma^*$,

$$
\epsilon \otimes w = w \otimes \epsilon = \{w\}.
$$

- For every $a, b \in \Sigma$ and $w_1, w_2 \in \Sigma^*$,

$$
(aw_1) \otimes (bw_2) = \{aw \mid w \in w_1 \otimes (bw_2)\} \cup \{bw \mid w \in (aw_1) \otimes w_2\}.
$$

Furthermore, for two languages $L_1, L_2 \subseteq \Sigma^*$, their shuffle $L_1 \otimes L_2 \subseteq \Sigma^*$ is defined by:

$$
L_1 \otimes L_2 = \bigcup_{w_1 \in L_1, w_2 \in L_2} w_1 \otimes w_2.
$$

For example, we have:

$$
\{ab, ba\} \otimes \{\epsilon, c\} = (ab \otimes \epsilon) \cup (ab \otimes c) \cup (ba \otimes \epsilon) \cup (ba \otimes c) = \{ab, cab, acb, abc, ba, cba, bca, bac\}.
$$

Answer the following questions.

(1) Compute $\{a, bb\} \otimes \{ab, cc\}$.

(2) Suppose that deterministic finite automata $\mathcal{A}_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$ and $\mathcal{A}_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$ accept languages $L_1$ and $L_2$, respectively. Here, $Q_i, \delta_i, q_{i,0},$ and $F_i$ are respectively the set of states, the transition function, the initial state, and the set of final states of $\mathcal{A}_i \ (i \in \{1, 2\})$. You may assume that the transition functions $\delta_i \in Q_i \times \Sigma \rightarrow Q_i\ (i \in \{1, 2\})$ are total functions. Give a non-deterministic automaton that accepts $L_1 \otimes L_2$.

(3) Prove the correctness of your answer for question (2) above.

(4) Let $L_3 = \{a^nb^n \mid n \geq 0\}$ and $L_4 = \{c^md^m \mid m \geq 0\}$. Prove that $L_3 \otimes L_4$ is not a context-free language. Here, you may use the pumping lemma for context-free languages.

## **Kai**
