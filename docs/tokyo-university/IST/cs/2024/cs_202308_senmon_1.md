---
sidebar_label: 2023年8月実施 専門科目 問題1
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Nondeterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Regular-Expression
  - Computer-Science.Formal-Languages.Pumping-Lemma
  - Computer-Science.Formal-Languages.Automata-State-Complexity
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

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

### 题目描述

给定整数 $k>0$，在字母表 $\Sigma=\{a,b\}$ 上定义

$$
L_k
=\{x_1\cdots x_n\in\Sigma^*
\mid n\ge k,\ x_{n-k+1}=a\}.
$$

也就是说，$L_k$ 由倒数第 $k$ 个字符为 $a$ 的字符串构成。回答下列问题。

（1）构造识别 $L_3$ 的 NFA。

（2）用正则表达式表示 $L_k$；正则表达式 $r$ 的 $i$ 次连接可记作
$r^i$。

（3）判断

$$
L'=\bigcup_{k=1}^{\infty}L_{k^2}
$$

是否为正则语言。若是，给出识别它的有限自动机；若不是，证明其非正则性。可以使用正则语言泵引理。

（4）证明任何识别 $L_k$ 的 DFA 都至少具有 $2^k$ 个状态。

## **Kai**
### (1)

To construct an NFA accepting $L_3$, let it guess the `a` that is three symbols from the end.

- **States:** $q_0,q_1,q_2,q_3$.
- **Initial state:** $q_0$.
- **Accepting state:** $q_3$.
- **Transitions:** from $q_0$, loop on both $a,b$, and on input $a$ also move nondeterministically to $q_1$:

$$
\delta(q_0,a)=\{q_0,q_1\},\qquad
\delta(q_0,b)=\{q_0\},
$$

  From $q_1$ and $q_2$, consume exactly two further symbols:

$$
\delta(q_1,c)=\{q_2\},\qquad
\delta(q_2,c)=\{q_3\}\qquad(c\in\{a,b\}).
$$

There are no outgoing transitions from $q_3$. Thus a run accepts exactly when the guessed `a` has two symbols after it.

### (2)

To describe $L_k$ using a regular expression:

$$
L_k = \Sigma^*a\Sigma^{k-1}
$$

Here $\Sigma^*$ is an arbitrary prefix, the displayed $a$ is the selected symbol, and $\Sigma^{k-1}$ is a suffix of exactly $k-1$ symbols. Thus the $k$-th symbol from the end is $a$.

### (3)

The language is not regular.  If it were, then

$$
L'\cap ab^*=\{ab^{k^2-1}\mid k\ge1\}
$$

would be regular.  Let $p$ be its pumping length and take
$s=ab^{p^2-1}$.  Write $s=xyz$ with $|xy|\le p$ and
$0<|y|\le p$.

If $y$ contains $a$, then $xz\notin ab^*$.  Otherwise $y=b^r$ for some
$1\le r\le p$, and

$$
xy^2z=ab^{p^2+r-1}.
$$

Since $p^2<p^2+r<(p+1)^2$, this word is not in the language.  Both cases contradict the pumping lemma.

### (4)

**Claim**: Any DFA that accepts $L_k$ must have at least $2^k$ states.

**Proof**:

The automaton must retain enough information about the last $k$ input symbols to decide which symbol will be $k$-th from the end when the input stops. Formally, all length-$k$ words must reach different states.

Consider two distinct words $u,v\in\Sigma^k$.  Let $i$ be a position at which they differ.  Appending $b^{i-1}$ makes their $i$-th symbols the $k$-th symbols from the end, so exactly one of
$ub^{i-1}$ and $vb^{i-1}$ lies in $L_k$.  Thus all $2^k$ words in
$\Sigma^k$ are pairwise Myhill--Nerode distinguishable, and every DFA for
$L_k$ has at least $2^k$ states.

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
