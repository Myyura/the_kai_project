---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 問題1
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 問題1

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs)

## **Description**
A language $L \subseteq \Sigma^*$ over a finite alphabet $\Sigma$ is said to be *regular* if there exists a finite automaton $\mathcal{A}$ such that $L = \mathcal{L}(\mathcal{A})$. Here

$$
\mathcal{L}(\mathcal{A}) = \{ w \in \Sigma^* \mid w \text{ is accepted by } \mathcal{A} \}.
$$

Answer the following questions:

(1) We fix an alphabet $\Sigma$ by $\Sigma = \{a, b\}$. For the language $L_1$ below, present a *nondeterministic finite automaton* (NFA) $\mathcal{A}_1$ such that: $\mathcal{L}(\mathcal{A}_1) = L_1$, and the number of states of $\mathcal{A}_1$ is not greater than $4$.

$$
L_1 = \{ w \in \Sigma^* \mid \text{there is a character } l \in \Sigma \text{ that occurs more than once in } w \}.
$$

(2) Assume that $\Sigma$ is a finite alphabet. Prove the following: any finite language $L = \{w_1, \ldots, w_n\} \subseteq \Sigma^*$ is regular. Here $n$ is a nonnegative integer.

(3) We fix an alphabet $\Sigma$ by $\Sigma = \{a, b\}$. For the language $L_1$ in Question (1), present a *deterministic finite automaton* (DFA) $\mathcal{A}_2$ such that: $\mathcal{L}(\mathcal{A}_2) = \Sigma^* \setminus L_1$, and the number of states of $\mathcal{A}_2$ is not greater than $5$. Here $\Sigma^* \setminus L_1$ denotes the complement of $L_1 \subseteq \Sigma^*$.

(4) Give a decision procedure for the following problem, and explain it briefly.

- **Input:** Nondeterministic finite automaton $\mathcal{A}$.
- **Output:** Whether the language $\mathcal{L}(\mathcal{A})$ is an infinite set or not.

## **Kai**
### (1)
$\Sigma = \{a,b\}$. 
Give NFA $\mathcal{A}_1$ with no more than $4$ states recognizing $L_1 = \{w\in \Sigma \:|\: \exists l\in \Sigma \: |w|_l > 1\}$.

$$
\begin{array}{ll||l|l}
  &    & a     & b     \\
  \hline
s & q_0 & q_0,q_1 & q_0,q_2 \\
  & q_1 & q_3  & q_1    \\
  & q_2 & q_2  & q_3   \\
* & q_3 & q_3  & q_3  
\end{array}
$$

### (2)
Prove: if $\Sigma$ is finite alphabet, then any finite language $L = \{w_1,\cdots,w_n\} \subseteq \Sigma^*$ is regular, $n\in \mathbb{N}$.

That is we should construct a finite automaton accepting $L$.
We can construct a $\epsilon$-NFA containing $n$ "branches", each recognizing $w_i$.
Now, for every $\epsilon$-NFA, there must exist equivalent DFA recognizing the same language.

We can also construct the DFA explicitly.
Start with automaton (NFA) recognizing $w_1$: there are $|w_1|+1$ states, the last one is accepting and transitions are labeled with next letters of $w_1$.
For $w_i$ ($i=2,\cdots,n$) try to traverse the automaton as far as you can, i.e. until transition for symbol $w_{ij}$ exist.
If we can go no further, that is we read the longest common prefix of $w_i$ and some $w_k$, $k<i$, then we make a new branch from a current state.
This branch consist of states and transitions labeled $w_{i,j+1}\cdots w_{i, |w_i|}$.

Now we need to assure that we constructed a DFA.
For every state missing some transitions on some letters, add those transition leading to a "dead state", i.e. nonaccepting state with a self-loop labeled $\Sigma$.

### (3)
Give DFA recognizing complement of $L_1$ from (Q1), i.e $L_2 = \Sigma^* \setminus L_1$.

Obviously $L_2 = \{w\in \Sigma \:|\: \forall l\in \Sigma \: |w|_l \leq 1\} = \{\epsilon, a, b, ab, ba\}$.

$$
\begin{array}{ll||l|l}
    &    & a  & b  \\
    \hline
s,* & q_1 & q_2 & q_3 \\
*   & q_2 & q_5 & q_4 \\
*   & q_3 & q_4 & q_5 \\
*   & q_4 & q_5 & q_5 \\
    & q_5 & q_5 & q_5
\end{array}
$$

### (4)
Given NFA $\mathcal{A}$, decide whether  $\mathcal{L(A)}$ is empty or not.
% For every NFA $\mathcal{A}$, there exist equivalent DFA $\mathcal{D}$, that is, $\mathcal{L(A)} = \mathcal{L(D)}$ (subset construction).
% Let's examine such DFA $\mathcal{D}$.
Since language of $\mathcal{A}$ is regular, then from pumping lemma we can "pump" words longer than some $N$ – pumping lemma constant.
That is, if $\mathcal{L(A)}$ has some word longer than $N$, then $\mathcal{L(A)}$ is infinite.
We just need to check every possible word $w$: $N < w \leq 2N$.
If any such word is accepted by $\mathcal{A}$, then $\mathcal{L(A)}$ is infinite.
We don't need to check words longer of $2N$: if a word is longer than $2N$, then from PL, we can iterative reduce its length, so $w$ has length shorter than $2N$.

How to choose $N$? We know that for every NFA $\mathcal{A}$, there exist equivalent DFA $\mathcal{D}$, that is, $\mathcal{L(A)} = \mathcal{L(D)}$ (subset construction).
We don't need to construct such DFA.
All we know is that, $\mathcal{D}$ might have exponentially more states than $\mathcal{A}$.
Take $N = |\Sigma|^{|Q_D|} + 42$, where $Q_D$ is set of $\mathcal{D}$'s states.