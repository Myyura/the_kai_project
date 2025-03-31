---
sidebar_label: "2022年8月実施 専門科目 問題1"
sidebar_position: 46
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $\Sigma$ be the set $\{a, b\}$ of letters. For a language $L \subseteq \Sigma^*$ over $\Sigma$, we define $\Gamma(L)$ as follows.

$$
\Gamma(L) = \{v \in \Sigma^* \mid \exists w \in \Sigma^* \cdot (|v| = |w| \land vw \in L)\}.
$$

Here, $|x|$ denotes the length of the string $x$. For example, if $L_1 = \{aa, ba, abb, abbb\}$, then $\Gamma(L_1) = \{a, b, ab\}$.

Answer the following questions.

(1) Let $L_2 = \{(ab)^n \mid n \geq 0\}$. Express $\Gamma(L_2)$ using a regular expression.

(2) Let $L_3 = \{a^n b^n a^m b^m \mid n \geq 0, m \geq 0\}$. Give a context-free grammar that generates $\Gamma(L_3)$.

(3) Let $\mathcal{M} = (Q, \Sigma, \delta, q_0, F)$ be a deterministic finite automaton, and let $L_{\mathcal{M}}$ be the language accepted by $\mathcal{M}$. Here, $Q$, $\Sigma$, $\delta$, $q_0$, and $F$ are the set of states, the transition function, the initial state, and the set of final states of $\mathcal{M}$, respectively. You may assume that the transition function $\delta : Q \times \Sigma \to Q$ is total. Give a finite automaton that accepts $\Gamma(L_{\mathcal{M}})$, with a brief explanation.

(4) If the proposition given below is true, then give how to construct a context-free grammar that generates $\Gamma(L)$, from a context-free grammar that generates $L$ (you may use push-down automata instead of context-free grammars), with a brief explanation. Otherwise, give a counterexample, with a brief explanation.

   **Proposition:** "For every context-free language $L \subseteq \Sigma^*$, $\Gamma(L)$ is a context-free language."

---

设 $\Sigma$ 为字母集 $\{a, b\}$。对于 $\Sigma$ 上的语言 $L \subseteq \Sigma^*$，我们定义 $\Gamma(L)$ 如下。

$$
\Gamma(L) = \{v \in \Sigma^* \mid \exists w \in \Sigma^* \cdot (|v| = |w| \land vw \in L)\}.
$$

这里，$|x|$ 表示字符串 $x$ 的长度。例如，如果 $L_1 = \{aa, ba, abb, abbb\}$，那么 $\Gamma(L_1) = \{a, b, ab\}$。

回答以下问题。

(1) 设 $L_2 = \{(ab)^n \mid n \geq 0\}$。用正则表达式表示 $\Gamma(L_2)$。

(2) 设 $L_3 = \{a^n b^n a^m b^m \mid n \geq 0, m \geq 0\}$。给出生成 $\Gamma(L_3)$ 的上下文无关文法。

(3) 设 $\mathcal{M} = (Q, \Sigma, \delta, q_0, F)$ 为一个确定性有限自动机，并且设 $L_{\mathcal{M}}$ 为 $\mathcal{M}$ 接受的语言。这里，$Q$, $\Sigma$, $\delta$, $q_0$, 和 $F$ 分别为 $\mathcal{M}$ 的状态集合、字母表、转移函数、初始状态和终止状态集合。可以假设转移函数 $\delta : Q \times \Sigma \to Q$ 是全定义的。给出一个接受 $\Gamma(L_{\mathcal{M}})$ 的有限自动机，并简要解释。

(4) 如果以下命题为真，请给出如何从生成 $L$ 的上下文无关文法构造生成 $\Gamma(L)$ 的上下文无关文法（可以使用下推自动机代替上下文无关文法），并简要解释。否则，请给出一个反例，并简要解释。

   **命题:** " 对于每个上下文无关语言 $L \subseteq \Sigma^*$，$\Gamma(L)$ 是一个上下文无关语言。"

## **Kai**
### (1)

Let $L_2 = \{(ab)^n \mid n \geq 0\}$. The language $L_2$ consists of strings of even length formed by repeating the substring "ab".

**Solution**:
To find $\Gamma(L_2)$, consider what $\Gamma(L)$ does. For each string $v \in \Gamma(L_2)$, there exists a string $w$ of the same length such that $vw \in L_2$.

Given that $L_2$ consists of strings of the form $(ab)^n$, the possible strings $v$ must have lengths that can be paired with some $w$ such that their concatenation results in a string from $L_2$.

The key observation is that $v$ can be any prefix of strings from $L_2$. This gives us the possible regular expression:

$$
\Gamma(L_2) = (a + b)^*
$$

This is because for any string $v$ formed from letters $a$ and $b$, there is a corresponding $w$ such that $vw \in L_2$ as long as the length condition is satisfied.

### (2)

Let $L_3 = \{a^n b^n a^m b^m \mid n \geq 0, m \geq 0\}$. This language consists of strings where the numbers of $a$s and $b$s are matched in pairs.

**Solution**:
To generate $\Gamma(L_3)$, consider the strings that can form the beginning of valid strings in $L_3$. Specifically, $\Gamma(L_3)$ includes any prefix of $L_3$ that can be completed to a string in $L_3$. Therefore, $\Gamma(L_3)$ includes strings of the form $a^p b^q a^r b^s$ where $0 \leq p \leq n$, $0 \leq q \leq n$, $0 \leq r \leq m$, and $0 \leq s \leq m$.

A context-free grammar $G = (V, \Sigma, R, S)$ generating $\Gamma(L_3)$ can be defined as follows:

- **Variables**: $S, A, B, C, D$
- **Alphabet**: $\Sigma = \{a, b\}$
- **Rules**:
  - $S \rightarrow AB \mid \epsilon$
  - $A \rightarrow aA \mid B$
  - $B \rightarrow bB \mid C$
  - $C \rightarrow aC \mid D$
  - $D \rightarrow bD \mid \epsilon$

- **Start Symbol**: $S$

This grammar generates strings in the form of prefixes of the strings in $L_3$.

### (3)

Let $\mathcal{M} = (Q, \Sigma, \delta, q_0, F)$ be a deterministic finite automaton (DFA) that accepts a language $L_{\mathcal{M}}$. We need to construct a DFA $\mathcal{M}'$ that accepts $\Gamma(L_{\mathcal{M}})$.

**Solution**:
To construct $\mathcal{M}'$, consider that $\Gamma(L_{\mathcal{M}})$ consists of strings $v$ such that there exists some $w$ with $|v| = |w|$ and $vw \in L_{\mathcal{M}}$.

- **States**: The states of $\mathcal{M}'$ will be pairs of states from $Q \times Q$, representing the DFA being in a state corresponding to the prefixes $v$ and $w$ of equal length.
- **Transitions**: For each $(p, q) \in Q \times Q$ and for each letter $a \in \Sigma$, if $\delta(p, a) = p'$ and $\delta(q, a) = q'$, then $(p, q) \xrightarrow{a} (p', q')$.
- **Start State**: The start state is $(q_0, q_0)$.
- **Final States**: A pair $(p, q)$ is a final state if there exists some $p' \in Q$ and $q' \in F$ such that $(p, q)$ transitions to $(p', q')$ by some string.

This DFA $\mathcal{M}'$ accepts exactly the strings in $\Gamma(L_{\mathcal{M}})$ by simulating the original DFA on both halves of the string in parallel.

### (4)

**Proposition**: "For every context-free language $L \subseteq \Sigma^*$, $\Gamma(L)$ is a context-free language."

**Solution**:
The proposition is **false**. A counterexample can be constructed as follows:

Consider the context-free language $L = \{a^n b^n c^n \mid n \geq 1\}$, which is known to be context-free. However, $\Gamma(L)$ would include strings like $a^p b^q c^r$ where $p, q, r$ do not necessarily follow the strict condition $p = q = r$. The language $\Gamma(L)$ can be shown to be non-context-free because it requires balancing different parts of the string in a way that a context-free grammar cannot generally handle.

This counterexample demonstrates that $\Gamma(L)$ is not necessarily context-free even if $L$ is.

## **Knowledge**

RegularExpression ContextFreeGrammar DeterministicFiniteAutomaton ContextFreeLanguage

### 解题技巧和信息

1. **Constructing Regular Expressions**: Understanding the structure of the language is crucial to forming the correct regular expression.
2. **Designing CFGs**: Consider the form of prefixes when designing CFGs for $\Gamma(L)$.
3. **DFA Construction**: For automaton-based constructions, consider pairs of states to account for parallel processing of string halves.
4. **Non-context-free Languages**: Remember that some operations can lead to languages that are not context-free even if the original language is.

### 重点词汇

- **Prefix**: 前缀
- **Context-free grammar (CFG)**: 上下文无关文法
- **Deterministic finite automaton (DFA)**: 确定性有限自动机
- **Regular expression**: 正则表达式

### 参考资料

1. Hopcroft, J.E., Motwani, R., Ullman, J.D. (2006). *Introduction to Automata Theory, Languages, and Computation*. Addison-Wesley. Chapter 2, 5.
2. Sipser, M. (2012). *Introduction to the Theory of Computation*. Cengage Learning. Chapter 2, 4.
