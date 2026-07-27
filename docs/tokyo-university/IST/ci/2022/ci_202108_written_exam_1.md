---
sidebar_label: 2021年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Greedy-Algorithm
  - Computer-Science.Dynamic-Programming.Knapsack-Problem
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

Let $n$ and $r$ be positive integers. For $i=1,2,\dots,n$, let $f_i$ be a univariate real-valued function defined in the integer domain and let $f_i(x_i)$ be $-\infty$ for negative integer $x_i$. Any non-negative integer solution $(x_1,\dots,x_n)$ that satisfies $\sum_{i=1}^n x_i=r$ is called a feasible solution. In addition, a feasible solution that maximizes the objective function $\sum_{i=1}^n f_i(x_i)$ is called an optimal solution and the objective function value at the solution is called the optimal value. This problem is expressed as follows.

$$(P) \ \left| \ \begin{aligned} &\text{Maximize} && \sum_{i=1}^n f_i(x_i) \\ &\text{subject to} && \sum_{i=1}^n x_i=r \\ &&& x_i \text{ is a non-negative integer, } i=1,\dots,n \end{aligned} \right.$$

### (1)
For $i=1,2,\dots,n$ and non-negative integer $\alpha$, define the function $d_i(\alpha):=f_i(\alpha)-f_i(\alpha-1)$ and assume that $d_i(\alpha)$ is non-increasing in terms of $\alpha$. Apply the following greedy algorithm $\mathcal{A}_G$ to $(P)$.

> **Step 0:** For $i=1,2,\dots,n$, set $x_i\leftarrow 0$.
>
> **Step 1:** Repeat the following procedure for $r$ times: Let $\gamma$ be any index $i$ that maximizes $d_i(x_i+1)$ among $i=1,2,\dots,n$, and set $x_{\gamma}\leftarrow x_{\gamma}+1$.

Answer the following questions.

(1-1) Let $r=5,n=3$, and let $f_1,f_2,f_3$ take the following values. Notice that $d_1,d_2,d_3$ are non-increasing. Answer the solution obtained by the greedy algorithm $\mathcal{A}_G$.

| $\alpha$ | 0 | 1 | 2 | 3 | $\dots$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $f_1(\alpha)$ | 0 | 0 | -8 | -24 | $\dots$ |
| $f_2(\alpha)$ | -2 | 1 | -14 | -40 | $\dots$ |
| $f_3(\alpha)$ | 0 | -3 | -12 | -22 | $\dots$ |

(1-2) Let $(x_1^*,x_2^*,\dots,x_n^*)$ be a feasible solution. Show that it is an optimal solution of $(P)$ if and only if the following condition holds.

$$\max_{i=1,2,\dots,n}d_i(x_i^*+1)\le\min_{i=1,2,\dots,n}d_i(x_i^*)$$

(1-3) Show that the greedy algorithm $\mathcal{A}_G$ outputs an optimal solution of $(P)$.

### (2)

Unless the non-increasing assumption of (1) holds, the greedy algorithm $\mathcal{A}_G$ does not always output an optimal solution of $(P)$. To apply dynamic programming, we consider the following problem $(P_N^R)$ in which $n$ and $r$ in $(P)$ are replaced with $N\in\{1,2,\dots,n\}$ and $R\in\{0,1,\dots,r\}$, respectively.

$$(P_N^R) \ \left| \ \begin{aligned} &\text{Maximize} && \sum_{i=1}^N f_i(x_i) \\ &\text{subject to} && \sum_{i=1}^N x_i = R \\ &&& x_i \text{ is a non-negative integer, } i = 1, \dots, N \end{aligned} \right.$$

The optimal value of the problem is denoted by $g_N(R)$. Answer the following questions.

(2-1) Express $g_N(R)$ only with $g_{N-1}(c)$ and $f_N(c)$ for any non-negative integer $c$ in the case of $N\ge 2$.

(2-2) Write a pseudo-code of a dynamic programming algorithm within 15 lines to output the optimal value $g_n(r)$ of $(P)$. Hereafter, this algorithm is called $\mathcal{A}_D$.

(2-3) Show that the optimal value of $(P)$ is obtained by the dynamic programming algorithm $\mathcal{A}_D$.

(2-4) Answer the computational complexity of the dynamic programming algorithm $\mathcal{A}_D$ and the computational complexity of the greedy algorithm $\mathcal{A}_G$. Ignore the computational cost of calculating $f_1,\dots,f_n$.

### 题目描述

给定正整数 \(n,r\)。对 \(i=1,\ldots,n\)，\(f_i\) 是定义在整数域上的一元实值函数，并约定负整数 \(x_i\) 时 \(f_i(x_i)=-\infty\)。满足 \(x_i\) 为非负整数且 \(\sum_{i=1}^nx_i=r\) 的解为可行解；使 \(\sum_i f_i(x_i)\) 最大者为最优解，其目标值为最优值：
\[
(P)\quad
\begin{array}{ll}
\text{最大化}&\displaystyle\sum_{i=1}^nf_i(x_i)\\
\text{约束}&\displaystyle\sum_{i=1}^nx_i=r,\quad x_i\in\mathbb Z_{\ge0}.
\end{array}
\]

**1. 边际收益非增时的贪心算法**

定义
\[
d_i(\alpha)=f_i(\alpha)-f_i(\alpha-1)
\]
并假设对非负整数 \(\alpha\)，每个 \(d_i(\alpha)\) 随 \(\alpha\) 非增。算法 \(\mathcal A_G\)：

- 初始令所有 \(x_i=0\)。
- 重复 \(r\) 次：任选使 \(d_i(x_i+1)\) 最大的下标 \(\gamma\)，令 \(x_\gamma\leftarrow x_\gamma+1\)。

1. 当 \(r=5,n=3\) 且函数值如下时，求 \(\mathcal A_G\) 输出的解：

   | \(\alpha\) | 0 | 1 | 2 | 3 | \(\dots\) |
   | :--- | :---: | :---: | :---: | :---: | :---: |
   | \(f_1(\alpha)\) | 0 | 0 | -8 | -24 | \(\dots\) |
   | \(f_2(\alpha)\) | -2 | 1 | -14 | -40 | \(\dots\) |
   | \(f_3(\alpha)\) | 0 | -3 | -12 | -22 | \(\dots\) |

2. 对任一可行解 \((x_1^*,\ldots,x_n^*)\)，证明它最优当且仅当
   \[
   \max_i d_i(x_i^*+1)\le\min_i d_i(x_i^*).
   \]
3. 证明贪心算法 \(\mathcal A_G\) 必输出最优解。

**2. 一般情形的动态规划**

若边际收益非增假设不成立，贪心不一定最优。把 \(P\) 中 \(n,r\) 分别替换为 \(N\in\{1,\ldots,n\}\)、\(R\in\{0,\ldots,r\}\)，定义子问题
\[
(P_N^R)\quad
\begin{array}{ll}
\text{最大化}&\displaystyle\sum_{i=1}^Nf_i(x_i)\\
\text{约束}&\displaystyle\sum_{i=1}^Nx_i=R,\quad x_i\in\mathbb Z_{\ge0},
\end{array}
\]
其最优值记为 \(g_N(R)\)。

1. 当 \(N\ge2\) 时，只使用非负整数 \(c\) 对应的 \(g_{N-1}(c)\) 与 \(f_N(c)\) 写出 \(g_N(R)\) 的递推式。
2. 用不超过 15 行伪代码写动态规划算法 \(\mathcal A_D\)，输出 \(g_n(r)\)。
3. 证明 \(\mathcal A_D\) 得到 \(P\) 的最优值。
4. 分别给出 \(\mathcal A_D\) 与 \(\mathcal A_G\) 的计算复杂度，忽略计算各 \(f_i\) 的代价。

#### 考点

- **离散凹资源分配的贪心法**：按当前最大边际收益逐单位分配资源，并用交换条件刻画、证明全局最优。
- **资源分配动态规划**：以函数前缀数 \(N\) 和总资源 \(R\) 为状态，枚举第 \(N\) 项分配量合并子问题最优值。
- **复杂度比较**：分析逐轮扫描边际收益的贪心代价与三重枚举式动态规划代价。

## **Kai**

### (1)

(1-1) $(x_1,x_2,x_3)=(2,1,2)$.



### (2)
