---
sidebar_label: "2024年8月実施 専門科目 S-5"
tags:
  - Kyoto-University
  - Automata-Theory
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-5

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

Consider deterministic finite state automata $(Q, \Sigma, \delta, q_0, F)$, where $Q$ is a finite set of states, $\Sigma$ is a finite set of characters, $\delta : Q \times \Sigma \to Q$ is a transition function, $q_0 \in Q$ is a start state, and $F \subseteq Q$ is a set of accept states. Also, $\epsilon \in \Sigma^*$ denotes the empty string.
Let $\Sigma = \{0, 1, 2, \dots, 9\}$. For $w \in \Sigma^*$, $n(w)$ returns an integer number represented by $w$. For example, $n(52) = 52$ and $n(068) = 68$. For $\epsilon$, we define $n(\epsilon) = 0$.

(1) Depict the state transition diagram of a deterministic finite state automaton $(|Q| \leq 2)$ that accepts $L_1 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod 2\}$.

(2) Depict the state transition diagram of a deterministic finite state automaton $(|Q| \leq 3)$ that accepts $L_2 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod 3\}$.

(3) Show $Q, \delta$, and $F$ of a deterministic finite state automaton that accepts $L_3 = \{w \in \Sigma^* \mid n(w) \equiv 0 \pmod k\}$ for any $k \geq 2$. You may use mod to describe $\delta$.

(4) Let $L_4 = \{w \in \Sigma^+ \mid h(w) \neq 0 \text{ or } w = 0\}$, where $h(w)$ returns the first character of string $w$. Show $Q, \delta$, and $F$ of a deterministic finite state automaton that accepts $L_3 \cap L_4$ for any $k \geq 2$. You may use mod to describe $\delta$.