---
sidebar_label: 2024年8月実施 専門科目 S-5
tags:
  - Kyoto-University
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Product-Automaton
  - Computer-Science.Formal-Languages.Regular-Language-Closure-Properties
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-5

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_ist.pdf)

Consider deterministic finite state automata $(Q, \Sigma, \delta, q_0, F)$, where $Q$ is a finite set of states, $\Sigma$ is a finite set of characters, $\delta : Q \times \Sigma \to Q$ is a transition function, $q_0 \in Q$ is a start state, and $F \subseteq Q$ is a set of accept states. Also, $\epsilon \in \Sigma^*$ denotes the empty string.
Let $\Sigma = \{0, 1, 2, \dots, 9\}$. For $w \in \Sigma^*$, $n(w)$ returns an integer number represented by $w$. For example, $n(52) = 52$ and $n(068) = 68$. For $\epsilon$, we define $n(\epsilon) = 0$.

(1) Depict the state transition diagram of a deterministic finite state automaton $(|Q| \leq 2)$ that accepts $L_1 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod 2\}$.

(2) Depict the state transition diagram of a deterministic finite state automaton $(|Q| \leq 3)$ that accepts $L_2 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod 3\}$.

(3) Show $Q, \delta$, and $F$ of a deterministic finite state automaton that accepts $L_3 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod k\}$ for any $k \geq 2$. You may use mod to describe $\delta$.

(4) Let $L_4 = \{w \in \Sigma^+ \mid h(w) \neq 0 \text{ or } w = 0\}$, where $h(w)$ returns the first character of string $w$. Show $Q, \delta$, and $F$ of a deterministic finite state automaton that accepts $L_3 \cap L_4$ for any $k \geq 2$. You may use mod to describe $\delta$.

### 题目描述

考虑确定性有限自动机 $(Q,\Sigma,\delta,q_0,F)$，其中 $Q$ 是有限状态集，$\Sigma$ 是有限字符集，$\delta:Q\times\Sigma\to Q$ 是转移函数，$q_0\in Q$ 是初始状态，$F\subseteq Q$ 是接受状态集；$\epsilon\in\Sigma^*$ 表示空串。

令 $\Sigma=\{0,1,2,\ldots,9\}$。对 $w\in\Sigma^*$，$n(w)$ 表示字符串 $w$ 所代表的十进制整数，允许前导零，例如 $n(52)=52$、$n(068)=68$，并规定 $n(\epsilon)=0$。

1. 画出一个状态数满足 $|Q|\leq2$、接受语言

   $$
   L_1=\{w\in\Sigma^*\mid n(w)\equiv0\pmod2\}
   $$

   的确定性有限自动机状态转移图。
2. 画出一个状态数满足 $|Q|\leq3$、接受语言

   $$
   L_2=\{w\in\Sigma^*\mid n(w)\equiv0\pmod3\}
   $$

   的确定性有限自动机状态转移图。
3. 对任意 $k\geq2$，给出接受

   $$
   L_3=\{w\in\Sigma^*\mid n(w)\equiv0\pmod k\}
   $$

   的确定性有限自动机的 $Q,\delta,F$；描述 $\delta$ 时可以使用取模运算。
4. 定义

   $$
   L_4=\{w\in\Sigma^+\mid h(w)\ne0\ \text{或}\ w=0\},
   $$

   其中 $h(w)$ 返回字符串 $w$ 的首字符。对任意 $k\geq2$，给出接受 $L_3\cap L_4$ 的确定性有限自动机的 $Q,\delta,F$；描述 $\delta$ 时可以使用取模运算。

## **Kai**
### (1)
Use states $r_0,r_1$ for the remainder modulo $2$. The start state $r_0$ is accepting, including the empty string. Reading an even digit leads to $r_0$ from either state; reading an odd digit leads to $r_1$.

![DFA for divisibility by 2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2025/kyoto-ist-2024-dfa-mod2.svg)

### (2)
Use states $r_0,r_1,r_2$ for the remainder modulo $3$, starting and accepting at $r_0$. Since $10\equiv1\pmod3$, a digit with remainder $d$ changes state $r_i$ to $r_{(i+d)\bmod3}$.

![DFA for divisibility by 3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2025/kyoto-ist-2024-dfa-mod3.svg)

The edge labels are $A=\{0,3,6,9\}$, $B=\{1,4,7\}$, and $C=\{2,5,8\}$.

### (3)
Let

$$
Q=\{r_0,\ldots,r_{k-1}\},\quad q_0=r_0,\quad F=\{r_0\},
\qquad\delta(r_i,d)=r_{(10i+d)\bmod k}.
$$

Induction on the number of read digits shows that the current index is $n(w)\bmod k$, proving the recognized language is $L_3$.

### (4)
Add three states $s,z,\bot$ distinct from all remainder states:

$$
Q=\{s,z,\bot\}\cup\{r_0,\ldots,r_{k-1}\},
\qquad q_0=s,\qquad F=\{z,r_0\}.
$$

Here $s$ is the initial state, $z$ means the complete prefix is the single character `0`, and $\bot$ is a rejecting sink. Define

$$
\begin{aligned}
\delta(s,0)&=z,\\
\delta(s,d)&=r_{d\bmod k} &&(d=1,\ldots,9),\\
\delta(z,d)&=\bot &&(d=0,\ldots,9),\\
\delta(\bot,d)&=\bot &&(d=0,\ldots,9),\\
\delta(r_i,d)&=r_{(10i+d)\bmod k} &&(d=0,\ldots,9).
\end{aligned}
$$

The empty word ends at rejecting $s$, the single zero ends at accepting $z$, and any longer word starting with zero reaches $\bot$. A word starting with a nonzero digit is accepted precisely when its value is divisible by $k$. Hence the language is $L_3\cap L_4$.
