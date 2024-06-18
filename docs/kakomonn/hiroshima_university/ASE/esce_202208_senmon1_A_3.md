---
comments: false
title: 広島大学 先進理工系科学研究科 電気システム制御プログラム 2022年8月実施 専門科目I A-3
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 電気システム制御プログラム 2022年8月実施 専門科目I A-3

## **Author**
Miyake

## **Description**
### 1.
事象 $A, B, C$ は独立で $P(A) = \frac{1}{3}, P(A \cap B) = \frac{1}{5}, P(A \cup C) = \frac{3}{7}$ を満たすとする。ただし、$P(D)$ は事象 $D$ の確率を表す。このとき、確率 $P(B), P(C)$ および条件付き確率 $P(A \cup B | C)$ を求めよ。

Suppose that independent events $A, B$ and $C$ satisfy $P(A) = \frac{1}{3}, P(A \cap B) = \frac{1}{5}$ and $P(A \cup C) = \frac{3}{7}$, where $P(D)$ stands for the probability of an event $D$. Find the probabilities $P(B)$, $P(C)$ and the conditional probability $P(A \cup B | C)$.

### 2.
確率変数 $X$ の確率密度関数が $f(x) = \exp\{-(ax^2 + bx + c)\}$ で与えられている。ただし、$a, b, c$ は実数で $a > 0$ とする。

(1). $X$ の期待値 $E(X)$ と分散 $V(X)$ をそれぞれ $a, b$ を用いて表せ。

(2). $E(X) = 1, V(X) = 3$ のとき $c$ の値を求めよ。

Suppose that a random variable $X$ has the probability density function $f(x) = \exp\{-(ax^2 + bx + c)\}$, where $a, b$ and $c$ are real numbers with $a > 0$.

(1). Express the expectation $E(X)$ and the variance $V(X)$ of $X$ by using $a$ and $b$.

(2). Determine the value of $c$ if $E(X) = 1$ and $V(X) = 3$.

## **Kai**
### 1.
事象 $A,B,C$ が独立であることから、

$$
  \begin{aligned}
  P(A \cap B) &= P(A)P(B),
  \\
  P(B \cap C) &= P(B)P(C),
  \\
  P(C \cap A) &= P(C)P(A),
  \\
  P(A \cap B \cap C) &= P(A)P(B)P(C)
  \end{aligned}
$$

が成り立つ。

(i)

$$
  \begin{aligned}
  P(B)
  &= \frac{P(A \cap B)}{P(A)}
  \\
  &= \frac{\frac{1}{5}}{\frac{1}{3}}
  \\
  &= \frac{3}{5}
  \end{aligned}
$$

(ii)

$$
  \begin{aligned}
  P(A \cup C)
  &= P(A) + P(C) - P(A \cap C)
  \\
  &= P(A) + P(C) - P(A)P(C)
  \\
  &= P(A) + (1-P(A)) P(C)
  \\
  \therefore \ \ 
  P(C)
  &= \frac{P(A \cup C) - P(A)}{1 - P(A)}
  \\
  &= \frac{\frac{3}{7} - \frac{1}{3}}{1 - \frac{1}{3}}
  \\
  &= \frac{1}{7}
  \end{aligned}
$$

(iii)

$$
  \begin{aligned}
  P((A \cup B) \cap C)
  &= P((A \cap C) \cup (B \cap C))
  \\
  &= P(A \cap C) + P(B \cap C) - P(A \cap B \cap C)
  \\
  &= P(A)P(C) + P(B)P(C) - P(A)P(B)P(C)
  \\
  &= \frac{11}{105}
  \\
  \therefore \ \ 
  P(A \cup B \mid C)
  &= \frac{P((A \cup B) \cap C)}{P(C)}
  \\
  &= \frac{\frac{11}{105}}{\frac{1}{7}}
  \\
  &= \frac{11}{15}
  \end{aligned}
$$

### 2.