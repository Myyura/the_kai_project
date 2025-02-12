---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題3
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題3

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $\Sigma_1 = \{a, b\}$ and $\Sigma_2 = \{t, f\}$. For a word $w \in \Sigma_1^*$, we write $|w|$ for the length of $w$. We also write $\epsilon$ for the empty word (i.e., the word of length 0). For a word $w \in \Sigma_1^*$, we define the function $f_w \in \Sigma_1^{*} \to \Sigma_2^{*}$ by:

$$
f_w(w') = \{x_1 \cdots x_{|w'|} \in \Sigma_2^{*} \mid x_i = \begin{cases} 
t & \text{if } w' = uwv \text{ for some } u, v \in \Sigma_1^* \text{ such that } |u| = i - 1 \\
f & \text{otherwise}
\end{cases} \text{ for each } i \in \{1, \ldots, |w'|\} \}.
$$

In other words, $f_w(w')$ is the word obtained from $w'$ by replacing the start position of each subword that matches $w$ with $t$ and any other position with $f$. For example, $f_{aa}(baaab) = fttff$ and $f_{ab}(abbab) = ttttt$. Furthermore, we extend the function $f_w$ to the function $f_w^*$ that maps a language over $\Sigma_1$ to a language over $\Sigma_2$ by the following definition:

$$
f_w^*(L) = \{f_w(w') \mid w' \in L \}.
$$

For example, $f_{ab}^* (\{(abb)^n \mid n \geq 0 \}) = \{(tff)^n \mid n \geq 0 \}$.

Answer the following questions.

(1) Compute $f_{aba}(babababa)$.

(2) Express $f_{aba}(\Sigma_1^*)$ by using a regular expression.

(3) Suppose that a word $w \in \Sigma_1^*$ (where $|w| > 0$) and a deterministic finite automaton $A = (Q, \Sigma_1, \delta, q_0, F)$ are given, and that $L$ is the language accepted by $A$. Here, $Q, \Sigma_1, \delta, q_0, F$ are respectively the set of states, the transition function, the initial state, and the set of accepting states of $A$. Assume that the transition function $\delta \in Q \times \Sigma_1 \to Q$ is total. Give a non-deterministic finite automaton that accepts $f_w^*(L)$, with a brief explanation. You may use $\epsilon$-transitions.

(4) If the following proposition is true, then give a proof sketch (it suffices to show a pushdown automaton that accepts $f_w^*(L)$ or a context-free grammar that generates $f_w^*(L)$, with a brief explanation). Otherwise, give a counterexample.

   Proposition: "For every word $w \in \Sigma_1^*$, if $L \subseteq \Sigma_1^*$ is a context-free language, then $f_w^*(L)$ is also a context-free language."

---

设 $\Sigma_1 = \{a, b\}$ 和 $\Sigma_2 = \{t, f\}$。对于一个单词 $w \in \Sigma_1^*$，我们用 $|w|$ 表示 $w$ 的长度。我们也用 $\epsilon$ 表示空字（即长度为 0 的字）。对于一个单词 $w \in \Sigma_1^*$，我们定义函数 $f_w \in \Sigma_1^* \to \Sigma_2^{*}$ 如下：

$$
f_w(w') = \{x_1 \cdots x_{|w'|} \in \Sigma_2^{*} \mid x_i = \begin{cases} 
t & \text{if } w' = uwv \text{ for some } u, v \in \Sigma_1^* \text{ such that } |u| = i - 1 \\
f & \text{otherwise}
\end{cases} \text{ for each } i \in \{1, \ldots, |w'|\} \}.
$$

换句话说，$f_w(w')$ 是从 $w'$ 获得的单词，通过用 $t$ 替换每个匹配 $w$ 的子单词的起始位置，并用 $f$ 替换其他任何位置。例如，$f_{aa}(baaab) = fttff$ 和 $f_{ab}(abbab) = ttttt$。此外，我们将函数 $f_w$ 扩展为函数 $f_w^*$，该函数将 $\Sigma_1$ 上的语言映射到 $\Sigma_2$ 上的语言，定义如下：

$$
f_w^*(L) = \{f_w(w') \mid w' \in L \}.
$$

例如，$f_{ab}^* (\{(abb)^n \mid n \geq 0 \}) = \{(tff)^n \mid n \geq 0 \}$。

回答以下问题。

(1) 计算 $f_{aba}(babababa)$。

(2) 使用正则表达式表示 $f_{aba}(\Sigma_1^*)$。

(3) 假设一个单词 $w \in \Sigma_1^*$（其中 $|w| > 0$）和一个确定性有限自动机 $A = (Q, \Sigma_1, \delta, q_0, F)$ 已给出，且 $L$ 是 $A$ 接受的语言。这里，$Q, \Sigma_1, \delta, q_0, F$ 分别是状态集、转移函数、初始状态和接受状态集。假设转移函数 $\delta \in Q \times \Sigma_1 \to Q$ 是完全的。给出一个接受 $f_w^*(L)$ 的非确定性有限自动机，并简要解释。您可以使用 $\epsilon$-转换。

(4) 如果以下命题为真，则给出一个证明草图（证明接受 $f_w^*(L)$ 的下推自动机或生成 $f_w^*(L)$ 的上下文无关文法即可，简要说明）。否则，给出一个反例。

   命题：“对于每个单词 $w \in \Sigma_1^*$，如果 $L \subseteq \Sigma_1^*$ 是一个上下文无关语言，则 $f_w^*(L)$ 也是一个上下文无关语言。”

## **Kai**
### (1)

Let's analyze the string `babababa` and mark the positions where "aba" appears as a subword:

```
b a b a b a b a
  ^ ^ ^
      ^ ^ ^
          ^ ^ ^
```

Now, let's replace these starting positions with 't' and the rest with 'f':

$$
f_{aba}(babababa) = ftftftff
$$

### (2)

To construct this regular expression, we need to consider all possible ways `aba` can appear in a string:

1. The string might start with `aba`: $(tf)^*$
2. There might be any number of a's or b's before `ab`: $(f^*tf)^*$
3. The string might end with any number of a's or b's: $f^*$

Combining these, we get:

$$
(f^*tf)^*f^*
$$

Therefore, $f_{ab}(\Sigma_1^*) = (f^*tf)^*f^*$

## (3)

Let $A = (Q, \Sigma_1, \delta, q_0, F)$ be the given DFA that accepts $L$. Let $w_n \in \Sigma_1$ be the $n$-th figure of word $w$. We can construct an NFA $A' = (Q', \Sigma_2, \delta', q_0', F')$ that accepts $f_w^*(L)$ as follows:

1. $Q' = Q \times \{0, 1, …, |w|\}$
2. $q_0' = (q_0, 0)$
3. $F' = \{(q, i) \mid q \in F, 0 \leq i \leq |w|\}$
4. For the transition function $\delta'$:
   - For each $(q, i) \in Q'$ and $\lambda \in \Sigma_1$:
     - If $i < |w|$ and $\lambda = w_{i+1}$:
	     - Add $\epsilon$-transition from $(q, i)$ to $(\delta(q, \lambda), i+1)$
     - If $i < |w|$ and $\lambda \neq w_{i+1}$:
	     - Add $f$-transition from $(q, i)$ to $(\delta(q, \lambda), 0)$
     - If $i = |w|$:
	     - Add $t$-transition from $(q, i)$ to $(\delta(q, \lambda), 0)$

This NFA simulates the DFA $A$ while keeping track of potential matches of $w$ during each of the transitions in $A$. When a complete match is found, it accepts 't', otherwise 'f'.

### (4)

This proposition is true. We can prove it by constructing a pushdown automaton (PDA) that accepts $f_w^*(L)$, using a similar approach to the NFA construction in Question 3.

**Proof Sketch**:
Let $M = (Q, \Sigma_1, \Gamma, \delta, q_0, Z_0, F)$ be a PDA that accepts $L$. Let $w_n \in \Sigma_1$ be the $n$-th symbol of word $w$. We can construct a PDA $M' = (Q', \Sigma_2, \Gamma, \delta', q_0', Z_0, F')$ that accepts $f_w^*(L)$ as follows:

1. $Q' = Q \times \{0, 1, …, |w|\}$
2. $q_0' = (q_0, 0)$
3. $F' = \{(q, i) \mid q \in F, 0 \leq i \leq |w|\}$
4. For the transition function $\delta'$:
   - For each $((q, i), \lambda, \gamma) \in Q' \times (\Sigma_2 \cup \{\epsilon\}) \times \Gamma$:
     - If $i < |w|$ and $\lambda = w_{i+1}$:
       - For each $(p, \alpha) \in \delta(q, \lambda, \gamma)$, add $((p, i+1), \alpha)$ to $\delta'((q, i), \epsilon, \gamma)$
     - If $i < |w|$ and $\lambda \neq w_{i+1}$:
       - For each $(p, \alpha) \in \delta(q, \lambda, \gamma)$, add $((p, 0), \alpha)$ to $\delta'((q, i), f, \gamma)$
     - If $i = |w|$ and $a = t$:
       - For each $\lambda \in \Sigma_1$ and $(p, \alpha) \in \delta(q, \lambda, \gamma)$, add $((p, 0), \alpha)$ to $\delta'((q, i), t, \gamma)$

**Explanation**:

- Similar to the NFA construction in Question 3, the state $(q, i)$ represents that we are in state $q$ of the original PDA and have matched $i$ symbols of $w$.
- The $\epsilon$-transitions simulate the original PDA's transitions for matching the next symbol of $w$.
- The $f$-transition occurs for positions where $w$ is not matched, resetting the match counter to 0.
- The $t$-transition occurs when we complete a match of $w$, also resetting the match counter to 0.

This PDA $M'$ simulates the computations of $M$ while keeping track of occurrences of $w$ and outputting the corresponding string in $\Sigma_2^*$. Therefore, $f_w^*(L)$ is context-free.

**Note**: The key difference between this construction and the one in Question 3 is that we're now working with a PDA instead of a DFA, which allows us to handle the stack operations necessary for context-free languages. However, the core idea of tracking partial matches of $w$ remains the same.

## **Knowledge**

DFA NFA PDA 正则表达式 上下文无关语言 下推自动机

### 难点思路

1. 理解函数 $f_w$ 和 $f_w^*$ 的定义及其在字符串和语言上的作用。
2. 构造接受 $f_w^*(L)$ 的非确定性有限自动机，需要巧妙地结合原 DFA 和模式匹配。
3. 将 NFA 构造的思路扩展到 PDA，以证明 $f_w^*(L)$ 的上下文无关性。

### 解题技巧和信息

1. 在处理形式语言问题时，尝试从简单的例子开始，然后推广到一般情况。
2. 在构造自动机或文法时，考虑如何将问题的不同方面（如这里的 PDA 转换和模式匹配）结合起来。
3. 对于复杂的语言操作，考虑如何使用现有的形式语言工具（如 NFA、PDA）来模拟这些操作。
4. 注意识别问题之间的联系，如第三问和第四问之间的关系，可以帮助简化解题过程。
5. 在扩展 NFA 到 PDA 时，要注意保持状态转换的基本结构，同时增加对栈操作的处理。

### 重点词汇

- deterministic finite automaton (DFA) 确定性有限自动机
- non-deterministic finite automaton (NFA) 非确定性有限自动机
- pushdown automaton (PDA) 下推自动机
- context-free grammar (CFG) 上下文无关文法
- regular expression 正则表达式
- $\epsilon$-transition $\epsilon$-转换

### 参考资料

1. Introduction to Automata Theory, Languages, and Computation by John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman. Chapter 2 (Finite Automata), Chapter 3 (Regular Expressions and Languages), Chapter 5 (Context-Free Grammars and Languages), Chapter 6 (Pushdown Automata)
2. Formal Languages and Automata Theory by C. K. Nagpal. Chapters on Regular Languages, Context-Free Languages, and Pushdown Automata
