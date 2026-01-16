---
sidebar_label: '2012年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Graph-Theory
  - Bipartite-Matching
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
An English conversation school plans to make pairs of students and teachers for private lessons. Given a set $S = \{s_1, s_2, \dots, s_n\}$ of students and a set $T = \{t_1, t_2, \dots, t_n\}$ of teachers, we make disjoint $n$ pairs of a student and a teacher, which we call a $p$-match. Answer the following questions:

(1) How many $p$-matches exist?

(2) For $n = 5$, given a list of preferable teachers by students (Table 1)
$$V = S \cup T$$
$$E = \{xy \mid x \in S, y \in T, x \text{ prefers } y.\}$$
draw a graph $G = (V, E)$, and show a $p$-match which maximizes the number of students who are fulfilled.

| Student | Teachers |
| :--- | :--- |
| $s_1$ | $t_1, t_3$ |
| $s_2$ | $t_2, t_4, t_5$ |
| $s_3$ | $t_1, t_3$ |
| $s_4$ | $t_3, t_5$ |
| $s_5$ | $t_1, t_3$ |

Table 1: List of Preferences

(3) Let the size of a set $|E| = m$. Show an algorithm to get a $p$-match which maximizes the number of students who are fulfilled and its complexity.

(4) For $n = 7$, given a ranked list of teachers by students (Table 2), show a $p$-match which minimizes the total sum of ranks.

(5) In addition to the ranked list of teachers by students, consider a ranked list of students by teachers. Given a $p$-match, if there exists no pair of student and teacher who would both get the higher rank than that of the current partner of the given $p$-match, then, this $p$-match is called an $s$-match. For $n = 7$, given a ranked list of students by teachers (Table 3) in addition to the Table 2, show an $s$-match.

| Ranking | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $s_1$ | $t_7$ | $t_1$ | $t_2$ | $t_6$ | $t_5$ | $t_4$ | $t_3$ |
| $s_2$ | $t_7$ | $t_1$ | $t_2$ | $t_3$ | $t_4$ | $t_5$ | $t_6$ |
| $s_3$ | $t_7$ | $t_5$ | $t_2$ | $t_6$ | $t_1$ | $t_4$ | $t_3$ |
| $s_4$ | $t_1$ | $t_4$ | $t_3$ | $t_6$ | $t_2$ | $t_5$ | $t_7$ |
| $s_5$ | $t_7$ | $t_3$ | $t_1$ | $t_2$ | $t_4$ | $t_5$ | $t_6$ |
| $s_6$ | $t_3$ | $t_7$ | $t_2$ | $t_1$ | $t_5$ | $t_4$ | $t_6$ |
| $s_7$ | $t_7$ | $t_3$ | $t_2$ | $t_6$ | $t_5$ | $t_4$ | $t_1$ |

Table 2: Rank of teachers by students

| Ranking | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $t_1$ | $s_1$ | $s_2$ | $s_3$ | $s_4$ | $s_5$ | $s_6$ | $s_7$ |
| $t_2$ | $s_1$ | $s_2$ | $s_4$ | $s_3$ | $s_7$ | $s_6$ | $s_5$ |
| $t_3$ | $s_3$ | $s_2$ | $s_1$ | $s_5$ | $s_6$ | $s_4$ | $s_7$ |
| $t_4$ | $s_2$ | $s_3$ | $s_1$ | $s_7$ | $s_4$ | $s_6$ | $s_5$ |
| $t_5$ | $s_1$ | $s_3$ | $s_4$ | $s_2$ | $s_5$ | $s_6$ | $s_7$ |
| $t_6$ | $s_1$ | $s_5$ | $s_3$ | $s_4$ | $s_2$ | $s_6$ | $s_7$ |
| $t_7$ | $s_3$ | $s_5$ | $s_1$ | $s_4$ | $s_2$ | $s_7$ | $s_6$ |

Table 3: Rank of students by teachers

(6) For $n$, show an algorithm to get an $s$-match and its complexity.

(7) We will develop a real software system for private lessons for an English conversation school. List possible study items (example: web reservation), and describe each item in two lines.