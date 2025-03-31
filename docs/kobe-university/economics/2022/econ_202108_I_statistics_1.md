---
sidebar_label: "2021年8月実施 第I期 統計学 第1問"
tags:
  - Kobe-University
---
# 神戸大学 経済学研究科 2021年8月実施 第I期 統計学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問いに答えなさい。

(1) 最初に 6 の目が出るまでサイコロを投げるとする。平均で何回投げる必要があるか求めなさい。(15点)

(2) 事象 $A$ と $B$ が $P(A) = \frac{1}{2}$ と $P(B^C) = \frac{1}{4}$ を満たすとする。$A$ と $B$ は排反になりうるかどうか説明しなさい。(15点)

(3) $X_1, X_2, \ldots, X_n$ は独立同一の分布に従う確率変数で、その累積分布関数を $F_X(x)$ とする。ある定数 $c$ について、確率変数 $Y_1, \ldots, Y_n$ を

$$
Y_i = 
\begin{cases} 
1 & X_i > c \text{ のとき} \\ 
0 & X_i \leq c \text{ のとき} 
\end{cases} 
$$

によって定義する。 $\sum_{i=1}^n Y_i$ の確率関数を求めなさい。(20点)


## **Kai**
### (1)
$k \ (=1, 2, \cdots)$ 回目に初めて 6 の目が出る確率は

$$
  \begin{aligned}
  \left( \frac{5}{6} \right)^{k-1} \cdot \frac{1}{6}
  \end{aligned}
$$

であるから、求める平均は

$$
  \begin{aligned}
  \frac{1}{6} \sum_{k=1}^\infty k \left( \frac{5}{6} \right)^{k-1}
  &= \frac{1}{6} \frac{1}{(1 - 5/6)^2}
  \\
  &= 6
  \end{aligned}
$$

である。

### (2)
$A$, $B$ は排反になりえない。
なぜなら、排反のとき $P(A \cup B) = P(A) + P(B)$ が成り立つが、
今の場合 $P(A)+P(B)=1/2+3/4=5/4 \gt 1$ となるからである。

### (3)
$Y_i =0,1$ となる確率はそれぞれ

$$
  \begin{aligned}
  P \left( Y_i = 0 \right) &= F_X(c)
  \\
  P \left( Y_i = 1 \right) &= 1 - F_X(c)
  \end{aligned}
$$

であるから、 $k = 0, 1, 2, \cdots, n$ として、求める確率関数は

$$
  \begin{aligned}
  P \left( \sum_{i=1}^n Y_i = k \right)
  &= {}_n C_k \ F_X(c)^{n-k} \left( 1 - F_X(c) \right)^k
  \end{aligned}
$$

である。