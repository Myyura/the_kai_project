---
sidebar_label: '2011年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Operations-Research
  - Branch-And-Bound
  - Dynamic-Programming
  - Knapsack-Problem
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
Goods $G_1, G_2, \cdots, G_n$ have their weights $a_i$ and value $c_i$ ($i=1,\cdots,n$), respectively. The problem of packing the maximum total value of goods into a knapsack with a weight limit $b$ is called the knapsack problem, which can be generally formulated as

[Problem A0]
$$\begin{aligned} &\text{Maximize} &&c_1x_1+c_2x_2+\cdots+c_nx_n \\ &\text{Subject to} &&a_1x_1+a_2x_2+\cdots+a_nx_n \le b \\ & &&x_i \in \{1, 0\}, i=1, \cdots, n \text{ ($x_i=1$ when $G_i$ is packed into the knapsack.)} \end{aligned}$$

Here, we specifically consider the following knapsack problem [Problem A1].

[Problem A1]
$$\begin{aligned} &\text{Maximize} &&14x_1+22x_2+30x_3+9x_4+12x_5 \\ &\text{Subject to} &&2x_1+4x_2+6x_3+2x_4+3x_5 \le 9 \\ & &&x_1, \cdots, x_5 \in \{1, 0\} \end{aligned}$$

The most straightforward approach to this problem is the enumeration method, in which all the cases are generated and evaluated. Although the number of possible cases in [Problem A1] is $2^5$ and fully within a computable range, this number grows exponentially as the number of possible goods $n$ increases. Then, we here try to achieve efficient searches through two methods, namely, (1) the branch and bound method and (2) dynamic programming.

**(1) Search by the branch and bound method**

(1-1) Explain the behavior of the branch and bound method maximizing an objective function, using the following terms:
"branching operation", "sub-problems (child problems)", "incumbent value", "upper bound value", "bounding operation", and "feasible solution"

(1-2) In the knapsack problems, it is convenient if the goods are sorted according to the values per unit weight. In [Problem A1], $G_1, G_2, \cdots$ are sorted to have higher values per unit weight in this order. A solution of this relaxed problem, where the constraint $x_i \in \{1, 0\}$ is relaxed to $0 \le x_i \le 1$, can be easily obtained with the maximum value $14+22+30 \times 0.5=51$ when $(x_1, x_2, x_3, x_4, x_5)=(1, 1, 0.5, 0, 0)$. This estimate gives an upper bound of the total value for the original knapsack problem with $x_i \in \{1, 0\}$. Upper bound calculation by employing such relaxed problems can be used also for sub-problems.
In a depth-first search instantiating $x_1, x_2, \cdots$ to $\{1\}$ and $\{0\}$ in this order for [Problem A1], execute a search based on the above branch and bound method to find the solution.
Show the resultant search tree, the goods to be packed into the knapsack $\{x_i \text{ becoming } x_i=1\}$ and the maximum total value obtained.

**(2) Computation by dynamic programming**

We consider here to solve the same knapsack problem by employing dynamic programming. Without a loss of generality, we assume here that $a_i, b$ and $c_i$ in the general problem of [Problem A0] are positive integers. Then we define the following function $F(j,k)$ where $j$ and $k$ are integers with $0 \le j \le n$ and $0 \le k \le b$.

$F(j,k)$: The maximum total value when limiting the candidates of the goods to $G_1, \cdots, G_j$ which can be packed into the knapsack under the maximum weight constraint $k$.

Apparently, $F(0,k)$ is 0, and in [Problem A1], $F(1,0) = F(1,1) = 0$ and $F(1,2) = F(1,3) = \cdots\cdots = F(1,9) = 14$. Eventually, the final answer of the maximum total value for [Problem A1] can be obtained as $F(5,9)$, and the final answer for [Problem A0] can be obtained as $F(n,k)$.

(2-1) Starting from these $F(0,k)$ or $F(1,k)$, we want to get a method of eventually calculating $F(n,b)$ for the general problem of [Problem A0] by incrementing $j$ in sequence. When $F(j-1,k)$ where $0 \le k \le b$ are calculated, show a method of calculating $F(j,k)$ as an equation using these $F(j-1,k)$. Here, you can show the equation for convenience by letting $F(j,k) = -\infty$ when $k$ is a negative integer.

(2-2) Using the result of the above question, solve [Problem A1] by calculating cell values of the table shown below in sequence. Show the table with the calculated values $F(j,k)$, goods to be packed into the knapsack, and the maximum total value.

Table of $F(j, k)$ for [Problem A1]
| $j \setminus k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 14 | 14 | 14 | 14 | 14 | 14 | 14 | 14 |
| 2 | | | | | | | | | | |
| 3 | | | | | | | | | | |
| 4 | | | | | | | | | | |
| 5 | | | | | | | | | | |