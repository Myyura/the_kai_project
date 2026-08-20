---
sidebar_label: 2021年8月実施 専門科目 問題3
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Finite-State-Transduction
  - Computer-Science.Formal-Languages.Epsilon-Nondeterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Context-Free-Language-Closure-Properties
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題3

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

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

### 题目描述

令 $\Sigma_1=\{a,b\}$、$\Sigma_2=\{t,f\}$，$|w|$ 表示字符串长度，
$\varepsilon$ 为空串。对固定 $w\in\Sigma_1^*$，定义
$f_w:\Sigma_1^*\to\Sigma_2^*$：对输入
$w'$ 的每个位置 $i=1,\ldots,|w'|$，若 $w$ 从该位置开始作为
$w'$ 的子串出现，则输出第 $i$ 位为 $t$，否则为 $f$。例如
$f_{aa}(baaab)=fttff$，
$f_{ab}(abbab)=ttttt$。对语言 $L\subseteq\Sigma_1^*$，进一步定义

$$
f_w^*(L)=\{f_w(w')\mid w'\in L\}.
$$

例如

$$
f_{ab}^*(\{(abb)^n\mid n\ge0\})
=\{(tff)^n\mid n\ge0\}.
$$

回答下列问题。

（1）计算 $f_{aba}(babababa)$。

（2）用正则表达式表示 $f_{aba}(\Sigma_1^*)$。

（3）给定非空字符串 $w\in\Sigma_1^*$ 和 DFA
$A=(Q,\Sigma_1,\delta,q_0,F)$，其中 $\delta$ 为全函数，且 $A$ 识别语言
$L$。构造识别 $f_w^*(L)$ 的 NFA 并简要说明；允许使用
$\varepsilon$ 转移。

（4）判断命题“对每个 $w\in\Sigma_1^*$，若
$L\subseteq\Sigma_1^*$ 是上下文无关语言，则 $f_w^*(L)$ 也是上下文无关语言”是否成立。若成立，给出证明概要（构造相应 PDA 或 CFG 并简述即可）；若不成立，给出反例。

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

Two occurrences of `aba` cannot start at consecutive positions, and the last two output symbols are always $f$.  Conversely, every such output word is realizable.  Hence

$$
f_{aba}(\Sigma_1^*)
=\varepsilon+f+(f+tf)^*(\varepsilon+t)ff.
$$

### (3)

Put $r=|w|-1$.  Construct an $\varepsilon$-NFA whose main states are
$(q,u)$, where $q\in Q$ and $u\in\Sigma_1^{\le r}$ is a buffer of guessed input symbols.  Its initial state is $(q_0,\varepsilon)$.

For each guessed $c\in\Sigma_1$:

- if $|u|<r$, take an $\varepsilon$-transition to
  $(\delta(q,c),uc)$;
- if $|u|=r$, consume $t$ when $uc=w$, and consume $f$ otherwise, then move to
  $(\delta(q,c),\operatorname{suffix}_r(uc))$.

From every $(q,u)$ with $q\in F$, the automaton may stop guessing and enter a finite chain that consumes $f^{|u|}$ and accepts.  Thus it guesses some $x\in L$, checks every length-$|w|$ window, and accepts exactly $f_w(x)$.  The state set is finite, so this is an NFA for $f_w^*(L)$.

### (4)

The proposition is true.  For $w\ne\varepsilon$, replace the DFA component in (3) by a PDA for $L$; the finite buffer is kept in the control state, and the PDA stack is unchanged except when simulating a guessed input symbol.  This PDA accepts exactly $f_w^*(L)$.

For $w=\varepsilon$, $f_w(x)=t^{|x|}$, which is the homomorphic image obtained by mapping both $a$ and $b$ to $t$.  Context-free languages are closed under homomorphism.

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
