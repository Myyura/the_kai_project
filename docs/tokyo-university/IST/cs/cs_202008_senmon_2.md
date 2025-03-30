---
sidebar_label: "2020年8月実施 専門科目 問題2"
sidebar_position: 31
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $\Sigma$ be the set $\{a, b\}$ of letters. For a word $w \in \Sigma^*$ and two languages $L_a, L_b \subseteq \Sigma^*$ over $\Sigma$, we define the language $w\{a \mapsto L_a, b \mapsto L_b\} \subseteq \Sigma^*$ as follows, by induction on $w$.

$$
\epsilon\{a \mapsto L_a, b \mapsto L_b\} = \{\epsilon\}
$$

$$
(aw)\{a \mapsto L_a, b \mapsto L_b\} = \{w_1 w_2 \mid w_1 \in L_a, w_2 \in w\{a \mapsto L_a, b \mapsto L_b\}\}
$$

$$
(bw)\{a \mapsto L_a, b \mapsto L_b\} = \{w_1 w_2 \mid w_1 \in L_b, w_2 \in w\{a \mapsto L_a, b \mapsto L_b\}\}
$$

Here, $\epsilon$ represents the empty word. For example, if $w = aba$, $L_a = \{b^n \mid n \geq 0\}$, and $L_b = \{a^n \mid n \geq 0\}$, then $w\{a \mapsto L_a, b \mapsto L_b\} = \{b^l a^m b^n \mid l, m, n \geq 0\}$. Furthermore, for languages $L, L_a, L_b \subseteq \Sigma^*$, we define $L\{a \mapsto L_a, b \mapsto L_b\}$ as $\bigcup_{w \in L} w\{a \mapsto L_a, b \mapsto L_b\}$. For example, if $L = \{a^n b \mid n \geq 0\}$, $L_a = \{ab\}$, and $L_b = \{a^n \mid n \geq 0\}$, then $L\{a \mapsto L_a, b \mapsto L_b\} = \{(ab)^m a^n \mid m, n \geq 0\}$.

Answer the following questions.

(1) Let $L = \{(ab)^m a^n \mid m, n \geq 0\}$, $L_a = \{bb\}$, and $L_b = \{ab, a\}$. Express $L\{a \mapsto L_a, b \mapsto L_b\}$ using a regular expression.

(2) Let $L' = \{a^m b^n \mid m \geq n \geq 0\}$, $L_a' = \{a^n \mid n \geq 0\}$, and $L_b' = \{a^m b^m \mid m \geq 0\}$. Express $\{w \in \Sigma^* \mid w\{a \mapsto L_a', b \mapsto L_b'\} \subseteq L'\}$ using a regular expression.

(3) Let $A_0 = (Q_0, \Sigma, \delta_0, q_{0,0}, F_0)$, $A_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$, and $A_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$ be deterministic finite automata, and for each $i \in \{0, 1, 2\}$, let $L_i$ be the language accepted by $A_i$. Here, $Q_i, \delta_i, q_{i,0}, F_i$ are the set of states, the transition function, the initial state, and the set of final states of $A_i$ ($i \in \{0, 1, 2\}$), respectively. Assume that the transition functions $\delta_i \in Q_i \times \Sigma \rightarrow Q_i$ ($i \in \{0, 1, 2\}$) are total. Give a non-deterministic finite automaton that accepts $L_0 \{a \mapsto L_1, b \mapsto L_2\}$, with a brief explanation. You may use $\epsilon$-transitions.

(4) For $A_i$ and $L_i$ ($i \in \{0, 1, 2\}$) in question (3), give a deterministic finite automaton that accepts $\{w \in \Sigma^* \mid w\{a \mapsto L_1, b \mapsto L_2\} \subseteq L_0\}$, with a brief explanation.

## **Kai**
### (1)

Given $L = \{(ab)^m a^n \mid m, n \geq 0\}$, $L_a = \{bb\}$, and $L_b = \{ab, a\}$:

$$
L\{a \mapsto L_a, b \mapsto L_b\} = (bb(ab+a))^*(bb)^*
$$

This expression represents the language where every $a$ in the original language is replaced by $bb$ and every $b$ is replaced by either $ab$ or $a$.

### (2)

Given $L' = \{a^m b^n \mid m \geq n \geq 0\}$, $L_a' = \{a^n \mid n \geq 0\}$, and $L_b' = \{a^m b^m \mid m \geq 0\}$, for $w \in \Sigma^*$, suppose $w' = w\{a \mapsto L_a', b \mapsto L_b'\}$.

Since $w' \subseteq L'$, we can express any element of $w'$, $w'_i$ as $a^x a^y b^y$ where $x, y \geq 0$. This implies that $w'$ contains $a^x$ followed by $a^y b^y$ for some $x, y \geq 0$.

Since all of the $b$ in $w'_i$ can only come from $b$ in $w$, we can reverse the substitution process to get $w = a^x b^y$, where $y$ can only be $0$ or $1$.

Therefore, the regular expression for $\{w \in \Sigma^* \mid w\{a \mapsto L_a', b \mapsto L_b'\} \subseteq L'\}$ is:

$$
a^*(\epsilon + b)
$$

### (3)

We will construct an NFA that accepts $L_0 \{a \mapsto L_1, b \mapsto L_2\}$ using $\epsilon$-transitions. The NFA will have the same structure as $A_0$, but the transitions will be replaced based on the input letter with the transitions from $A_1$ and $A_2$, and $\epsilon$-transitions will be used to connect the states.

For example, supposing the original transitions for the input letter $a$ in $A_0$ are $q_{0,0} \xrightarrow{a} q_{0,1}$, we will replace these transitions with the corresponding transitions from $A_1$:

$$
q_{0,0} \xrightarrow{\epsilon} q_{1,0} \xrightarrow{} \ldots \xrightarrow{} F_{1,i} \xrightarrow{\epsilon} q_{0,1}
$$

Similarly, for the input letter $b$, we will replace the transitions with the corresponding transitions from $A_2$.

The final states of the NFA will be those states where the original final states of $A_0$ are reached after the substitution process.

**Explanation:** Since the language $L_0 \{a \mapsto L_1, b \mapsto L_2\}$ is obtained by substituting the strings in $L_1$ and $L_2$ for $a$ and $b$ in the strings of $L_0$, the NFA needs to simulate this substitution process by transitioning to the corresponding states in $A_1$ and $A_2$ based on the input letter.

### (4)

To construct a DFA for $\{w \in \Sigma^* \mid w\{a \mapsto L_i, b \mapsto L_j\} \subseteq L_k\}$:

**Explanation:**
- We need to track the states of $A_i$, $A_j$, and $A_k$ simultaneously.
- The DFA will have states $(q_i, q_j, q_k)$, where $q_i \in Q_i$, $q_j \in Q_j$, and $q_k \in Q_k$.
- The initial state is $(q_{i0}, q_{j0}, q_{k0})$.
- The transition function will be defined as:
  - $(q_i, q_j, q_k) \xrightarrow{a} (\delta_i(q_i, a), q_j, \delta_k(q_k, w_{L_i}))$ for all $w_{L_i} \in L_i$.
  - $(q_i, q_j, q_k) \xrightarrow{b} (q_i, \delta_j(q_j, b), \delta_k(q_k, w_{L_j}))$ for all $w_{L_j} \in L_j$.
- The final states are those where the third component is a final state in $F_k$.

This DFA ensures that as we read $w$, we keep track of the corresponding states in $A_i$, $A_j$, and $A_k$ to ensure the substitution process results in strings that belong to $L_k$.

## **Knowledge**

语言替换 正则表达式 NFA DFA

### 难点解题思路

1. 语言替换的正则表达式表达形式，需要理解替换过程以及结果语言的模式。
2. 识别满足特定替换条件的字符串集合，需要考虑原语言和替换后的语言的关系。
3. 构造非确定性有限自动机 (NFA) 以处理语言替换，需要使用 $\epsilon$-transitions 连接不同自动机的状态。
4. 构造确定性有限自动机 (DFA) 来接受满足条件的字符串集合，需要同时跟踪多个自动机的状态。

### 解题技巧和信息

- 在处理语言替换问题时，理解每一步替换过程对最终结果的影响非常重要。
- 构造 NFA 和 DFA 时，注意状态之间的转换关系以及如何利用 $\epsilon$-transitions 连接不同语言的自动机。

### 重点词汇

- $\epsilon$-transitions: $\epsilon$-转换
- Regular Expression: 正则表达式
- Non-deterministic Finite Automaton (NFA): 非确定性有限自动机
- Deterministic Finite Automaton (DFA): 确定性有限自动机

### 参考资料

1. Michael Sipser, "Introduction to the Theory of Computation", Chapter 2
2. John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, "Introduction to Automata Theory, Languages, and Computation", Chapter 3
