---
sidebar_label: 2016年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Nondeterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Regular-Language-Closure-Properties
  - Computer-Science.Formal-Languages.Regular-Language-Decision-Problems
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目I 問題1

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs), 祭音Myyura

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

### 题目描述

对有限字母表 $\Sigma$ 上的语言 $L\subseteq\Sigma^*$，若存在有限自动机
$\mathcal{A}$ 使 $L=\mathcal{L}(\mathcal{A})$，则称 $L$ 为正则语言，其中

$$
\mathcal{L}(\mathcal{A})
=\{w\in\Sigma^*\mid w\text{ 被 }\mathcal{A}\text{ 接受}\}.
$$

回答下列问题。

（1）固定 $\Sigma=\{a,b\}$。对语言

$$
L_1=\{w\in\Sigma^*\mid w\text{ 中存在某个字符出现至少两次}\},
$$

构造一个状态数不超过 $4$ 的 NFA $\mathcal{A}_1$，满足
$\mathcal{L}(\mathcal{A}_1)=L_1$。

（2）设 $\Sigma$ 为有限字母表。证明任意有限语言
$L=\{w_1,\ldots,w_n\}\subseteq\Sigma^*$ 都是正则语言，其中 $n$ 可以为非负整数。

（3）仍令 $\Sigma=\{a,b\}$。针对第（1）问的 $L_1$，构造一个状态数不超过
$5$ 的 DFA $\mathcal{A}_2$，使

$$
\mathcal{L}(\mathcal{A}_2)=\Sigma^*\setminus L_1.
$$

（4）给出并简要说明一个判定过程：输入一个 NFA $\mathcal{A}$，输出其语言
$\mathcal{L}(\mathcal{A})$ 是否为无限集。

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
We construct a finite automaton accepting $L$. One construction is an $\epsilon$-NFA with $n$ branches, the $i$-th branch spelling exactly $w_i$; every $\epsilon$-NFA has an equivalent DFA.

The DFA can also be constructed explicitly. Start with the path recognizing $w_1$: it has $|w_1|+1$ states, its transitions are labeled by the successive letters of $w_1$, and its last state is accepting. For each $w_i$ with $i\geq2$, follow the already constructed transitions along its longest existing prefix, then attach a new path labeled by the remaining suffix. Mark the state reached after every complete $w_i$ as accepting.

Finally, send each missing transition to one nonaccepting dead state, which has a self-loop for every letter of $\Sigma$. The resulting finite prefix-trie DFA accepts exactly $L$. If $n=0$, the one-state nonaccepting DFA recognizes $\varnothing$.

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
View $\mathcal A$ as a directed transition graph. Its language is infinite iff some state $q$ satisfies all three conditions:

1. $q$ is reachable from an initial state;
2. $q$ lies on a directed cycle;
3. an accepting state is reachable from $q$.

Indeed, such a cycle can be repeated arbitrarily often. Conversely, any accepting run of length at least the number of states repeats a state and contains such a cycle. Reachability and strongly connected components can be computed by graph search.
