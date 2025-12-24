---
sidebar_label: '2021年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Greedy
  - Dynamic-Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

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

## **Kai**

### (1)

(1-1) $(x_1,x_2,x_3)=(2,1,2)$.



### (2)

