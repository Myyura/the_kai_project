---
sidebar_label: "2023年8月実施 専門科目 問題1"
sidebar_position: 50
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Given an integer $k > 0$, we define a language $L_k$ over an alphabet $\Sigma = \{a, b\}$ by:

$$
L_k = \{x_1 \ldots x_n \in \Sigma^* \mid n \in \mathbb{Z} \land n \geq k \land x_{n-k+1} = a\}
$$

Here, $\mathbb{Z}$ is the set of integers and $x_i \in \Sigma$. That is, $L_k$ is the language that consists of words whose $k$-th symbol from the last is $a$.

Answer the following questions.

(1) Give a non-deterministic finite automaton that accepts $L_3$.

(2) Describe $L_k$ using a regular expression. You may write the $i$-time concatenation of a regular expression $r$ as $r^i$.

(3) Is $L' = \bigcup_{k=1}^{\infty} L_{k^2}$ a regular language? If so, give a finite automaton that accepts $L'$. If not, prove that $L'$ is not regular. You may use the pumping lemma for regular languages.

(4) Prove that any deterministic finite automaton that accepts $L_k$ has at least $2^k$ states.

---

给定一个整数 $k > 0$，我们通过以下方式定义了一个字母表 $\Sigma = \{a, b\}$ 上的语言 $L_k$：

$$
L_k = \{x_1 \ldots x_n \in \Sigma^* \mid n \in \mathbb{Z} \land n \geq k \land x_{n-k+1} = a\}
$$

这里，$\mathbb{Z}$ 是整数集，并且 $x_i \in \Sigma$。也就是说，$L_k$ 是由那些倒数第 $k$ 个符号是 $a$ 的单词组成的语言。

回答以下问题。

(1) 给出一个接受 $L_3$ 的非确定性有限自动机。

(2) 使用正则表达式描述 $L_k$。你可以将正则表达式 $r$ 的 $i$ 次连接写为 $r^i$。

(3) $L' = \bigcup_{k=1}^{\infty} L_{k^2}$ 是正则语言吗？如果是，给出一个接受 $L'$ 的有限自动机。如果不是，证明 $L'$ 不是正则的。你可以使用正则语言的抽水引理。

(4) 证明任何接受 $L_k$ 的确定性有限自动机至少有 $2^k$ 个状态。

## **Kai**
### (1)

To construct an NFA that accepts $L_3$, we need to ensure that the third symbol from the end is 'a'. Here is the NFA:

- **States**: $q_0, q_1, q_2, q_3$
- **Alphabet**: $\Sigma = \{a, b\}$
- **Transitions**:
  - From $q_0$ (start state):
    - On reading any symbol $a$ or $b$, move to $q_0$ (this loop represents reading any number of symbols at the start).
    - On reading any symbol, move to $q_1$ (non-deterministically guess that we might be three symbols away from the end).
  - From $q_1$:
    - On reading any symbol $a$ or $b$, move to $q_2$.
  - From $q_2$:
    - On reading any symbol $a$ or $b$, move to $q_3$ (final state).
- **Final State**: $q_3$

This NFA accepts a string if it non-deterministically guesses that it is three symbols away from the end, and then checks if the third-to-last symbol is 'a'.

### (2)

To describe $L_k$ using a regular expression:

$$
L_k = \Sigma^*a\Sigma^{k-1}
$$

Here, $\Sigma^{k-1}$ represents any string of length $k-1$, followed by the symbol 'a', and then followed by any string of arbitrary length. This ensures that the $k$-th symbol from the end is 'a'.

### (3)

**Claim**: The language $L' = \bigcup_{k=1}^{\infty} L_{k^2}$ is **not** a regular language.

**Proof**:

To prove that $L'$ is not a regular language, we will use the **pumping lemma**. The pumping lemma states that if a language is regular, then any sufficiently long string in the language can be "pumped" — that is, a portion of the string can be repeated multiple times, and the resulting strings will still belong to the language.

#### String Selection

Let's consider a string $w$ carefully crafted to belong to $L_{k^2}$ for some integer $k$. For example, consider the string:

$$
w = b^{k^2-1}a b^{k^2-1}
$$

This string belongs to $L_{k^2}$ because the $k^2$-th symbol from the end is 'a', and all other characters are 'b'.

#### Pumping Lemma Application

Assume that $L'$ is a regular language. Then by the pumping lemma, there exists a pumping length $p$ such that any string $w$ with length at least $p$ can be decomposed as $w = xyz$, where:

- $|xy| \leq p$,
- $|y| > 0$, and
- $xy^iz \in L'$ for all $i \geq 0$.

Given that $|xy| \leq p$, the substring $xy$ is confined to the first $k^2$ characters, which consist entirely of 'b's followed by a single 'a' and another some 'b's. Thus, the substring $y$ consists of only 'b's (say $y = b^m$ for some $m > 0$).

#### Pumped String

Consider the string $w' = xy^2z$. After pumping, the string becomes:

$$
w' = b^{k^2-1}ab^{k^2 - 1 + m}
$$

Here, the block of 'b's after the 'a' has increased by $m$, shifting the position of the 'a' forward by $m$ positions. The length of $w'$ is now greater than $w$ by $m$.

#### Why $w'$ May not Belong to Any $L_{i^2}$

- **Original Position**: In the original string $w$, the 'a' was exactly at the $k^2$-th position from the end.
- **New Position**: After pumping, in $w'$, the 'a' is now at the $(k^2 + m)$-th position from the end.

For $w'$ to belong to any $L_{i^2}$, the position of 'a' from the end should be exactly $i^2$ for some integer $i$. However:

- For $\forall m \in (0, 2k+1)$,  $k^2 < k^2 + m < (k+1)^2$, meaning that $k^2 + m$ may not be a perfect square number, so $w'$ does not always belong to any $L_{i^2}$.
- Therefore, the string $w' \notin L_{i^2}$ for any $i$.

### (4)

**Claim**: Any DFA that accepts $L_k$ must have at least $2^k$ states.

**Proof**:

Consider the DFA accepting $L_k$. This DFA must remember the last $k$ symbols it has seen in order to determine whether the $k$-th symbol from the end is 'a'.

There are $2^k$ possible sequences of $k$ symbols over the alphabet $\Sigma = \{a, b\}$, and the DFA must distinguish between each of these sequences because each sequence can determine whether the current string belongs to $L_k$. Thus, the DFA must have a unique state for each possible sequence of $k$ symbols.

Therefore, the DFA must have at least $2^k$ states to correctly accept all strings in $L_k$.

## **Knowledge**

NFA DFA 正则语言 泵引理

语言的取并操作

### 重点词汇

- NFA: 非确定性有限自动机
- DFA: 确定性有限自动机
- Pumping Lemma: 抽象引理
- Regular Expression: 正则表达式

### 参考资料

1. "Introduction to the Theory of Computation" by Michael Sipser, Chap. 1, 2
2. "Automata Theory, Languages, and Computation" by Hopcroft, Motwani, and Ullman, Chap. 2
