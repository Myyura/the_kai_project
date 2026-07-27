---
sidebar_label: 2012年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Discrete-Mathematics.Graph-Theory.Bipartite-Matching
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
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

### 题目描述

某英语会话学校要为一对一课程把学生和教师配对。给定学生集合 \(S=\{s_1,\ldots,s_n\}\) 与教师集合 \(T=\{t_1,\ldots,t_n\}\)，把每名学生与每名教师各使用一次，组成 \(n\) 个互不相交的学生—教师对；称这样的完整配对为 \(p\)-匹配。

1. 一共有多少种 \(p\)-匹配？
2. 当 \(n=5\) 时，学生可接受的教师如下。令
   \[
   V=S\cup T,\qquad
   E=\{xy\mid x\in S,\ y\in T,\ x\text{ 喜欢 }y\}.
   \]
   画出图 \(G=(V,E)\)，并给出一个让“分配到可接受教师”的学生人数最多的 \(p\)-匹配。

   | 学生 | 可接受教师 |
   | :--- | :--- |
   | \(s_1\) | \(t_1,t_3\) |
   | \(s_2\) | \(t_2,t_4,t_5\) |
   | \(s_3\) | \(t_1,t_3\) |
   | \(s_4\) | \(t_3,t_5\) |
   | \(s_5\) | \(t_1,t_3\) |

3. 设 \(|E|=m\)。给出求上述满意学生数最大的 \(p\)-匹配的算法，并分析复杂度。
4. 当 \(n=7\) 时，学生对教师的完整名次如下。给出一个使所有学生所得教师名次之和最小的 \(p\)-匹配。

   | 学生 \ 名次 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
   | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
   | \(s_1\) | \(t_7\) | \(t_1\) | \(t_2\) | \(t_6\) | \(t_5\) | \(t_4\) | \(t_3\) |
   | \(s_2\) | \(t_7\) | \(t_1\) | \(t_2\) | \(t_3\) | \(t_4\) | \(t_5\) | \(t_6\) |
   | \(s_3\) | \(t_7\) | \(t_5\) | \(t_2\) | \(t_6\) | \(t_1\) | \(t_4\) | \(t_3\) |
   | \(s_4\) | \(t_1\) | \(t_4\) | \(t_3\) | \(t_6\) | \(t_2\) | \(t_5\) | \(t_7\) |
   | \(s_5\) | \(t_7\) | \(t_3\) | \(t_1\) | \(t_2\) | \(t_4\) | \(t_5\) | \(t_6\) |
   | \(s_6\) | \(t_3\) | \(t_7\) | \(t_2\) | \(t_1\) | \(t_5\) | \(t_4\) | \(t_6\) |
   | \(s_7\) | \(t_7\) | \(t_3\) | \(t_2\) | \(t_6\) | \(t_5\) | \(t_4\) | \(t_1\) |

5. 再给出教师对学生的名次表。若某个 \(p\)-匹配中不存在这样一对尚未配在一起的学生与教师：二者都比起当前搭档更偏好对方，则称该匹配为 \(s\)-匹配。结合上表和下表，为 \(n=7\) 给出一个 \(s\)-匹配。

   | 教师 \ 名次 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
   | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
   | \(t_1\) | \(s_1\) | \(s_2\) | \(s_3\) | \(s_4\) | \(s_5\) | \(s_6\) | \(s_7\) |
   | \(t_2\) | \(s_1\) | \(s_2\) | \(s_4\) | \(s_3\) | \(s_7\) | \(s_6\) | \(s_5\) |
   | \(t_3\) | \(s_3\) | \(s_2\) | \(s_1\) | \(s_5\) | \(s_6\) | \(s_4\) | \(s_7\) |
   | \(t_4\) | \(s_2\) | \(s_3\) | \(s_1\) | \(s_7\) | \(s_4\) | \(s_6\) | \(s_5\) |
   | \(t_5\) | \(s_1\) | \(s_3\) | \(s_4\) | \(s_2\) | \(s_5\) | \(s_6\) | \(s_7\) |
   | \(t_6\) | \(s_1\) | \(s_5\) | \(s_3\) | \(s_4\) | \(s_2\) | \(s_6\) | \(s_7\) |
   | \(t_7\) | \(s_3\) | \(s_5\) | \(s_1\) | \(s_4\) | \(s_2\) | \(s_7\) | \(s_6\) |

6. 对一般 \(n\)，给出求 \(s\)-匹配的算法及其复杂度。
7. 若要真正开发英语会话学校的一对一课程软件系统，列出可能需要研究或实现的项目（例如 Web 预约），每项用两行说明。

#### 考点

- **二分图匹配**：把学生偏好边构成二分图，用最大匹配最大化分到可接受教师的学生数，并分析关于顶点、边数的复杂度。
- **带权完美匹配**：把名次作为边权，求总名次最小的学生—教师一一配对。
- **稳定匹配**：识别阻塞对，并用延迟接受算法构造稳定匹配、分析其时间复杂度。
