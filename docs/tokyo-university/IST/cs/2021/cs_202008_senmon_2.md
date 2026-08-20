---
sidebar_label: 2020年8月実施 専門科目 問題2
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Language-Substitution
  - Computer-Science.Formal-Languages.Epsilon-Nondeterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Regular-Language-Closure-Properties
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

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

### 题目描述

令 $\Sigma=\{a,b\}$。对 $w\in\Sigma^*$ 及语言
$L_a,L_b\subseteq\Sigma^*$，递归定义语言替换：

$$
\varepsilon\{a\mapsto L_a,b\mapsto L_b\}=\{\varepsilon\},
$$

$$
(aw)\{a\mapsto L_a,b\mapsto L_b\}
=\{w_1w_2\mid w_1\in L_a,\quad
w_2\in w\{a\mapsto L_a,b\mapsto L_b\}\},
$$

$$
(bw)\{a\mapsto L_a,b\mapsto L_b\}
=\{w_1w_2\mid w_1\in L_b,\quad
w_2\in w\{a\mapsto L_a,b\mapsto L_b\}\}.
$$

对语言 $L$，再定义

$$
L\{a\mapsto L_a,b\mapsto L_b\}
=\bigcup_{w\in L}w\{a\mapsto L_a,b\mapsto L_b\}.
$$

回答下列问题。

（1）令
$L=\{(ab)^ma^n\mid m,n\ge0\}$、
$L_a=\{bb\}$、
$L_b=\{ab,a\}$。用正则表达式表示
$L\{a\mapsto L_a,b\mapsto L_b\}$。

（2）令
$L'=\{a^mb^n\mid m\ge n\ge0\}$、
$L'_a=\{a^n\mid n\ge0\}$、
$L'_b=\{a^mb^m\mid m\ge0\}$。用正则表达式表示

$$
\{w\in\Sigma^*\mid
w\{a\mapsto L'_a,b\mapsto L'_b\}\subseteq L'\}.
$$

（3）设 DFA $A_i=(Q_i,\Sigma,\delta_i,q_{i,0},F_i)$ 识别语言
$L_i\ (i=0,1,2)$，且各 $\delta_i$ 均为全函数。构造识别
$L_0\{a\mapsto L_1,b\mapsto L_2\}$ 的 NFA 并简要说明；允许使用
$\varepsilon$ 转移。

（4）对同一组自动机，构造识别

$$
\{w\in\Sigma^*\mid
w\{a\mapsto L_1,b\mapsto L_2\}\subseteq L_0\}
$$

的 DFA，并简要说明。

## **Kai**
### (1)

Given $L = \{(ab)^m a^n \mid m, n \geq 0\}$, $L_a = \{bb\}$, and $L_b = \{ab, a\}$:

$$
L\{a \mapsto L_a, b \mapsto L_b\} = (bb(ab+a))^*(bb)^*
$$

This expression represents the language where every $a$ in the original language is replaced by $bb$ and every $b$ is replaced by either $ab$ or $a$.

### (2)

If an $a$ occurs after a $b$, choose nonempty substitutions for both; the result contains a $b$ before an $a$ and is not in $L'$.  Two occurrences of $b$ fail in the same way.  Thus there is at most one $b$, and it must be last.  Conversely, every substitution of $a^r$ or $a^rb$ has the form $a^M b^N$ with $M\ge N$.  Hence the required expression is

$$
a^*(\epsilon+b).
$$

### (3)

We construct an NFA accepting
$L_0\{a\mapsto L_1,b\mapsto L_2\}$ by replacing each transition of $A_0$ with an automaton for the language substituted for its label.

For every $a$-transition $q\xrightarrow{a}\delta_0(q,a)$ of $A_0$, take a private copy of $A_1$, add an $\epsilon$-transition from $q$ to its initial state, and add an $\epsilon$-transition from every accepting state of that copy to $\delta_0(q,a)$. Symbolically,

$$
q\xrightarrow{\epsilon}q_{1,0}
\xRightarrow{L_1}F_1
\xrightarrow{\epsilon}\delta_0(q,a).
$$

Do the same for every $b$-transition, using a private copy of $A_2$:

$$
q\xrightarrow{\epsilon}q_{2,0}
\xRightarrow{L_2}F_2
\xrightarrow{\epsilon}\delta_0(q,b).
$$

The initial state is $q_{0,0}$ and the accepting states are $F_0$. A path through a copy reads one word of $L_1$ or $L_2$, so simulating a word of $L_0$ reads precisely one of its substitutions. Hence the NFA accepts exactly
$L_0\{a\mapsto L_1,b\mapsto L_2\}$.

### (4)

Define relations on $Q_0$ by

$$
R_a=\{(p,q)\mid\exists x\in L_1:\delta_0^*(p,x)=q\},\qquad
R_b=\{(p,q)\mid\exists x\in L_2:\delta_0^*(p,x)=q\}.
$$

Each relation is computable by a product automaton $A_0\times A_1$ or
$A_0\times A_2$.

Use the DFA with state set $2^{Q_0}$, initial state $\{q_{0,0}\}$, and transition

$$
S\xrightarrow{c}\{q\mid \exists p\in S:(p,q)\in R_c\}
\quad(c\in\{a,b\}).
$$

Its accepting states are the subsets $S\subseteq F_0$.  After reading $w$, the current subset is exactly the set of states reachable in $A_0$ by all words in
$w\{a\mapsto L_1,b\mapsto L_2\}$; hence the acceptance condition is precisely the required inclusion in $L_0$.

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
