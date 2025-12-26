---
sidebar_label: '2011年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2011年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

品物 $G_1, G_2, \dots, G_n$ はそれぞれ重量 $a_i$ で価値 $c_i$ (ここで $i=1, \dots, n$) を持つ。最大重量限界 $b$ のナップサックに出来るだけ合計価値が大きくなるように品物を詰める問題をナップサック問題といい、一般的に次のように定式化することができる。

[問題 A0]
最大化 $c_1 x_1+c_2 x_2+\dots+c_n x_n$
条件 $a_1 x_1+a_2 x_2+\dots+a_n x_n \le b$
$x_i\in\{1, 0\}$, $i=1, \dots, n$ ($G_i$ をナップサックに詰める時に $x_i=1$ となる)

ここで具体的なナップサック問題としては次の [問題 A1] を考える。

[問題 A1]
最大化 $14x_1+22x_2+30x_3+9x_4+12x_5$
条件 $2x_1+4x_2+6x_3+2x_4+3x_5 \le 9$
$x_1, \dots, x_5 \in \{1, 0\}$

最も直接的な解法は列挙法であり、全ての場合を生成して調べる。[問題 A1] の具体例では場合数 $2^5$ で十分計算可能な範囲であるが、品物数 $n$ の増大につれて、場合数は指数的に増大する。そこでここでは、(1) 分枝限定法 (branch and bound method) と (2) 動的計画法 (dynamic programming) の二つの方法により効率的探索を図ることを考える。

**(1) 分枝限定法による探索**

(1-1) 目的関数最大化を求める分枝限定法の動作について、以下の用語を使用して説明せよ。
「分枝操作」、「部分問題(子問題)」、「暫定値」、「上界値」、「限定操作」、「実行可能解」。

(1-2) ナップサック問題の場合、品物は単位重量当たりの価値の順にソートされていると都合良く、上記 [問題 A1] では、$G_1, G_2, \dots$ の順に単位重量当たりの価値が高くなっている。$x_i\in\{1, 0\}$ の条件を緩和し、$0 \le x_i \le 1$ とした緩和問題の解はこの場合には容易に求めることができ、$(x_1, x_2, x_3, x_4, x_5) = (1, 1, 0.5, 0, 0)$ の時、最大価値 $14+22+30\times 0.5=51$ を得ることができる。この推定値が $x_i\in\{1, 0\}$ の条件の場合の合計価値の上界を与える。この緩和問題による上界の計算は、部分問題でも同様に利用することができる。
[問題 A1] について、$x_1, x_2, \dots$ の順に、かつ $\{1\}, \{0\}$ の値の順に具体化していく縦型（深さ優先）探索において、上記の分枝限定法の探索を行い解を求めよ。
解答には探索木とナップサックに詰める品物 $\{x_i=1\text{となる}x_i\}$ と最大合計価値を示せ。

**(2) 動的計画法による計算**

同じナップサック問題の解を動的計画法によって求めることを考える。なお、ここでは一般性を失うことなく、一般化した [問題 A0] における $a_i, b, c_i$ は正の整数とする。そして次の関数 $F(j, k)$ を定める (ここで $j, k$ は整数で $0 \le j \le n, 0 \le k \le b$)。
$F(j, k)$ : 重量制限 $k$ 以下のなかに詰める品物の候補を $G_1, \dots, G_j$ に限定した時に得られる最大の合計価値

明らかに $F(0, k)$ は $0$ であり、[問題 A1] に対して $F(1, 0) = F(1, 1) = 0, F(1, 2) = F(1, 3) = \dots = F(1, 9) = 14$ となる。そして、[問題 A1] の最終的な最大合計価値は $F(5, 9)$ として求められ、[問題 A0] の最終的な最大合計価値は $F(n, k)$ として求められることになる。

(2-1) この $F(0, k)$ あるいは $F(1, k)$ から出発し、一般的な問題である [問題 A0] において $j$ を順次増やしながら最終的に $F(n, b)$ を計算する方法を得たい。$F(j-1, k)$ (ここで $0 \le k \le b$) が求められている場合、この $F(j-1, k)$ を用いて $F(j, k)$ を求める方法を式として示せ。但し $k$ が負の整数の時は便宜的に $F(j, k) = -\infty$ として式を得ることを可とする。

(2-2) 上記の結果を利用し、[問題 A1] に対して下に示す $F(j, k)$ の表を順次計算することにより、[問題 A1] を解け。
解答には数値を計算した $F(j, k)$ の表と、ナップサックに詰める品物、最大合計価値を示すこと。

[問題 A1] に対する $F(j, k)$ の表
| $j \setminus k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 14 | 14 | 14 | 14 | 14 | 14 | 14 | 14 |
| 2 | | | | | | | | | | |
| 3 | | | | | | | | | | |
| 4 | | | | | | | | | | |
| 5 | | | | | | | | | | |

## **Description (English)**
Items $G_1, G_2, \dots, G_n$ have weights $a_i$ and values $c_i$ (where $i=1, \dots, n$), respectively. The problem of packing items into a knapsack with a maximum weight capacity $b$ such that the total value is as large as possible is called the knapsack problem, which can generally be formulated as follows.

[Problem A0]
Maximize $c_1 x_1+c_2 x_2+\dots+c_n x_n$
Subject to $a_1 x_1+a_2 x_2+\dots+a_n x_n \le b$
$x_i\in\{1, 0\}$, $i=1, \dots, n$ ($x_i=1$ when item $G_i$ is packed into the knapsack)

As a specific knapsack problem, consider the following [Problem A1].

[Problem A1]
Maximize $14x_1+22x_2+30x_3+9x_4+12x_5$
Subject to $2x_1+4x_2+6x_3+2x_4+3x_5 \le 9$
$x_1, \dots, x_5 \in \{1, 0\}$

The most direct solution method is the enumeration method, where all cases are generated and examined. In the specific example of [Problem A1], the number of cases $2^5$ is well within the calculable range, but as the number of items $n$ increases, the number of cases increases exponentially. Therefore, here we consider efficient search using two methods: (1) the branch and bound method and (2) dynamic programming.

**(1) Search by the branch and bound method**

(1-1) Explain the operation of the branch and bound method for maximizing an objective function using the following terms: "branching operation," "subproblem (child problem)," "tentative value," "upper bound," "bounding operation," and "feasible solution."

(1-2) In the case of the knapsack problem, it is convenient if the items are sorted in the order of value per unit weight; in [Problem A1] above, the value per unit weight is higher in the order $G_1, G_2, \dots$. By relaxing the condition $x_i\in\{1, 0\}$ and setting $0 \le x_i \le 1$, the solution to the relaxed problem can be easily found in this case. When $(x_1, x_2, x_3, x_4, x_5) = (1, 1, 0.5, 0, 0)$, a maximum value of $14+22+30\times 0.5=51$ can be obtained. This estimate gives an upper bound on the total value for the condition $x_i\in\{1, 0\}$. This calculation of the upper bound by the relaxation problem can be similarly utilized for subproblems.
For [Problem A1], find the solution by performing a branch and bound search in a vertical (depth-first) search that instantiates $x_1, x_2, \dots$ in that order, and in the order of values $\{1\}, \{0\}$.
Show the search tree, the items packed in the knapsack $\{x_i \text{ such that } x_i=1\}$, and the maximum total value in your answer.

**(2) Calculation by dynamic programming**

Consider finding the solution to the same knapsack problem using dynamic programming. Here, without loss of generality, let $a_i, b,$ and $c_i$ in the generalized [Problem A0] be positive integers. Then, define the following function $F(j, k)$ (where $j$ and $k$ are integers such that $0 \le j \le n, 0 \le k \le b$).
$F(j, k)$: the maximum total value obtained when candidates for items to be packed within a weight limit $k$ are limited to $G_1, \dots, G_j$.

Clearly $F(0, k)$ is $0$, and for [Problem A1], $F(1, 0) = F(1, 1) = 0$ and $F(1, 2) = F(1, 3) = \dots = F(1, 9) = 14$. Then, the final maximum total value for [Problem A1] is found as $F(5, 9)$, and the final maximum total value for [Problem A0] will be found as $F(n, b)$.

(2-1) Starting from this $F(0, k)$ or $F(1, k)$, we want to obtain a method to finally calculate $F(n, b)$ while sequentially increasing $j$ in the general [Problem A0]. If $F(j-1, k)$ (where $0 \le k \le b$) has been found, show the method to find $F(j, k)$ using this $F(j-1, k)$ as a formula. However, if $k$ is a negative integer, it is permissible to obtain the formula by setting $F(j, k) = -\infty$ for convenience.

(2-2) Using the above results, solve [Problem A1] by sequentially calculating the table for $F(j, k)$ shown below for [Problem A1].
Show the table for $F(j, k)$ with calculated numerical values, the items packed in the knapsack, and the maximum total value in your answer.

Table of $F(j, k)$ for [Problem A1]
| $j \setminus k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 14 | 14 | 14 | 14 | 14 | 14 | 14 | 14 |
| 2 | | | | | | | | | | |
| 3 | | | | | | | | | | |
| 4 | | | | | | | | | | |
| 5 | | | | | | | | | | |