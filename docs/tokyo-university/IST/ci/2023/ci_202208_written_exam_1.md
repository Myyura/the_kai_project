---
sidebar_label: 2022年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Mathematics.Number-Theory
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
We are constructing a deterministic finite automaton (DFA) that judges whether the sum of two binary integers is a multiple of three or not.

(1) A DFA is represented by a directed graph called a state diagram. Figure 1 is an example of a state diagram. The states of a DFA are represented by the nodes of the graph. When a DFA in state $q$ reads a symbol $a$, it changes its state according to the outgoing edge labeled $a$ of the node corresponding to $q$. The set of allowed input symbols is a finite set, which is called its input alphabet. In the state graph of a DFA, each node has exactly one outgoing edge for each symbol in its input alphabet.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202208_1_p1.png" height="250" alt=""/>
</figure>

One of the states is the start state, which is indicated by the arrow labeled *start*. Some states are designated as final states, which are indicated by double circles. When a DFA $M$ in its start state will be in one of the final states after reading all symbols of a symbol string $w$ one-by-one from left to right, we say $M$ accepts $w$.

(1-1) Let $M_1$ be the DFA represented by Figure 1. The input alphabet of $M_1$ is $\{0, 1\}$.
Answer the state that $M_1$ will be in after reading the symbol string 0101110 starting in the start state.

(1-2) Answer the shortest symbol string starting with 0101110 that the DFA $M_1$ accepts.

(1-3) Construct a DFA $M_2$ that accepts a symbol string $w$ if and only if the length of $w$ is an even number, and draw its state diagram. $M_2$ must satisfy the following conditions.
+ (Condition 1) The number of states of $M_2$ is two.
+ (Condition 2) The input alphabet of $M_2$ is $\{0, 1\}$.

(2) Consider a string of symbols in $\{0, 1\}$ to be a binary number. Let $(x_{n-1}x_{n-2} \cdots x_0)_2$ denote the $n$-digit binary number whose $i$-th digit $(0 \le i < n)$ from the least significant digit is $x_i \in \{0, 1\}$. Let $\mathcal{V}(x_{n-1}x_{n-2} \cdots x_0)$ denote its value. When the string $x_{n-1}x_{n-2} \cdots x_0$ starts with a sequence of 0s, let $\mathcal{V}(x_{n-1}x_{n-2} \cdots x_0)$ denote the value of the string without the sequence of 0s. The string whose length is zero is called an empty string, denoted by $\varepsilon$. Let $\mathcal{V}(\varepsilon) = 0$. For example, $\mathcal{V}(0101110)$ is 46 in decimal.
For every binary number with an even number of digits $(x_{2n-1}x_{2n-2} \cdots x_0)_2$, show

$$ 
\mathcal{V}(x_{2n-1}x_{2n-2} \cdots x_0) \equiv \left( 2 \sum_{i=0}^{n-1} x_{2i+1} + \sum_{i=0}^{n-1} x_{2i} \right) \pmod 3. 
$$

Here, "$a \equiv b \pmod 3$" denotes the remainders of $a$ and $b$ are the same when they are divided by three. In what follows, we will omit " $\pmod 3$" and simply denote "$a \equiv b$."

(3) Consider $w$, a string of symbols in $\{0, 1\}$, to be a binary number $(w)_2$. Construct a DFA $M_3$ that accepts $w^R$, the string $w$ in reverse order, if and only if its length is an even number and

$$
 \mathcal{V}(w) \equiv 0 
 $$

holds, and draw its state diagram. $M_3$ must satisfy the following conditions.
+ (Condition 1) The number of states of $M_3$ is six.
+ (Condition 2) The input alphabet of $M_3$ is $\{0, 1\}$.

(4) Consider $w$, a string of symbols in $\{0, 1\}$, to be a binary number $(w)_2$. Construct a DFA $M_4$ that accepts $w^R$ if and only if

$$ 
\mathcal{V}(w) \equiv 0 
$$

holds regardless of the length of $w$, and draw its state diagram. $M_4$ must satisfy the following conditions.
+ (Condition 1) The number of states of $M_4$ is three.
+ (Condition 2) The input alphabet of $M_4$ is $\{0, 1\}$.

(5) Let
$$ 
\Sigma = \left\{ \binom{a}{b} \mid a, b \in \{0, 1\} \right\}. 
$$
For $w = \binom{x_{n-1}}{y_{n-1}} \binom{x_{n-2}}{y_{n-2}} \cdots \binom{x_0}{y_0}$, a string of symbols in $\Sigma$ with length $n$, construct a DFA $M_5$ that accepts $w^R$ if and only if

$$ 
\mathcal{V}(x_{n-1}x_{n-2} \cdots x_0) + \mathcal{V}(y_{n-1}y_{n-2} \cdots y_0) \equiv 0 
$$

holds, and draw its state diagram. $M_5$ must satisfy the following conditions.
+ (Condition 1) The number of states of $M_5$ is three.
+ (Condition 2) The input alphabet of $M_5$ is $\Sigma$.

### 题目描述

构造确定性有限自动机（DFA），判断两个二进制整数之和是否为 3 的倍数。

1. DFA 用称为状态图的有向图表示：结点为状态；处于 $q$ 时读入符号 $a$，沿 $q$ 的标号为 $a$ 的唯一出边转移。允许输入符号的有限集合称为输入字母表，每个状态对字母表中每个符号恰有一条出边。一个状态是以 `start` 箭头标出的初态，双圈表示终态。DFA 从初态自左向右逐符号读完串 $w$ 后若位于终态，就接受 $w$。
   1. 对图 1 的 DFA $M_1$，字母表为 $\{0,1\}$。从初态读完 `0101110` 后处于哪个状态？
   2. 求以 `0101110` 开头且被 $M_1$ 接受的最短符号串。
   3. 构造 DFA $M_2$，当且仅当串长为偶数时接受，并画状态图。要求恰有 2 个状态，字母表为 $\{0,1\}$。
2. 把 $\{0,1\}$ 串视为二进制数。记
   $(x_{n-1}\cdots x_0)_2$ 的从最低位起第 $i$ 位为 $x_i$，其数值为 $\mathcal V(x_{n-1}\cdots x_0)$。开头的连续 0 不影响数值；空串记为 $\varepsilon$，令 $\mathcal V(\varepsilon)=0$。例如 $\mathcal V(0101110)=46$。证明对任意偶数位二进制数

   $$
   \mathcal V(x_{2n-1}\cdots x_0)
   \equiv
   2\sum_{i=0}^{n-1}x_{2i+1}+\sum_{i=0}^{n-1}x_{2i}
   \pmod3.
   $$

   后文省略“$\pmod3$”，直接写 $\equiv$。
3. 把串 $w$ 视为二进制数 $(w)_2$，$w^R$ 表示逆序串。构造并画 DFA $M_3$，当且仅当 $w$ 长度为偶数且 $\mathcal V(w)\equiv0$ 时接受 $w^R$。要求恰有 6 个状态，字母表 $\{0,1\}$。
4. 构造并画 DFA $M_4$，不论 $w$ 长度为何，当且仅当 $\mathcal V(w)\equiv0$ 时接受 $w^R$。要求恰有 3 个状态，字母表 $\{0,1\}$。
5. 令

   $$
   \Sigma=\left\{\binom ab\mid a,b\in\{0,1\}\right\}.
   $$

   对长度 $n$ 的串

   $$
   w=\binom{x_{n-1}}{y_{n-1}}\binom{x_{n-2}}{y_{n-2}}\cdots\binom{x_0}{y_0},
   $$

   构造并画 DFA $M_5$，当且仅当

   $$
   \mathcal V(x_{n-1}\cdots x_0)+\mathcal V(y_{n-1}\cdots y_0)\equiv0
   $$

   时接受 $w^R$。要求恰有 3 个状态，输入字母表为 $\Sigma$。
