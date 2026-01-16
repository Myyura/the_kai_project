---
sidebar_label: '2009年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Graph-Theory
  - Shortest-Path-Problem
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Given a directed graph $G = (V, E)$, we would like to find _all-pairs shortest path lengths_ which are the all shortest path lengths between every pair of vertices, where the size of the set $V, |V| = n$. Let $e_{uv}$ denote a directed edge from a vertex $u$ to a vertex $v$, and $\delta_{uv}$ denote the length of the edge $e_{uv}$. The graph $G$ may have a negative length edge but does not have any negative length cycle. The length of the edge from the vertex $u$ to the same vertex $u, \delta_{uu} = 0$, and when there exists no edge from the vertex $u$ to the vertex $v$, $\delta_{uv} = \infty$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_1_p1.png" width="350" alt=""/>
</figure>

Algorithm 1 on the next page outputs the _single-source shortest path lengths_. Let $s \in V$ be a single source vertex, the shortest path length from the vertex $s$ to a vertex $v \in V$ is stored in $d(v)$. Algorithm 2 outputs the all-pairs shortest path lengths table $D$, where the length of the shortest path from a vertex $u$ to a vertex $v$ is stored in $D(u, v)$. Each algorithm uses $d^{(k)}$ and $D^{(k)} (k = 0, 1, \dots)$ to store interim results, respectively. Answer the following questions.

(1) Apply Algorithm 1 to the graph $G_1 = (V_1, E_1)$ in Figure 1 to obtain the shortest path length from a single-source vertex $v_0$. Table 1 shows $d^{(0)}$ in Algorithm 1. Show the single-source path length $d^{(1)}, d^{(2)}, d^{(3)}$, and $d^{(4)}$ from the single-source vertex $v_0$.

(2) Apply Algorithm 2 to the graph $G_1 = (V_1, E_1)$ in Figure 1 to obtain the all-pairs shortest path lengths. Table 2 shows $D^{(0)}$ in Algorithm 2. Show the selected vertex $w \in V_1$ in the Main Loop and the corresponding table $D^{(1)}, D^{(2)}, D^{(3)}, D^{(4)}$, and $D^{(5)}$.

(3) To obtain all-pairs shortest path lengths, consider Algorithm 1-ALL which applies Algorithm 1 for all vertices in $V$ as a single-source vertex. Compare Algorithm 1-ALL and Algorithm 2.

Table 1: $d^{(0)}$ in Algorithm 1

| destination | |
| :--- | :--- |
| $v_0$ | 0 |
| $v_1$ | $\infty$ |
| $v_2$ | $\infty$ |
| $v_3$ | $\infty$ |
| $v_4$ | $\infty$ |

Table 2: $D^{(0)}$ in Algorithm 2

| source\destination | $v_0$ | $v_1$ | $v_2$ | $v_3$ | $v_4$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $v_0$ | 0 | 1 | $\infty$ | 5 | 9 |
| $v_1$ | $\infty$ | 0 | 1 | 3 | $\infty$ |
| $v_2$ | $\infty$ | $\infty$ | 0 | -1 | $\infty$ |
| $v_3$ | $\infty$ | 1 | $\infty$ | 0 | 1 |
| $v_4$ | 1 | $\infty$ | $\infty$ | $\infty$ | 0 |


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_1_p1.png" width="600" alt=""/>
</figure>
