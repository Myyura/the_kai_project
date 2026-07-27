---
sidebar_label: "2019年8月実施 数学 第3問"
tags:
  - Tokyo-University
  - Operations-Research.Decision-Analysis.Secretary-Problem-and-One-over-e-Rule
---
# 東京大学 情報理工学研究科 2019年8月実施 数学 第3問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
$n$ 人のアルバイト候補者を面接し、その中の最適任者を採用したい。
ただし、$n \geq 2$ とする。
候補者にはあらかじめ順位 $1$、順位 $2$、$\cdots$、順位 $n$ までの絶対的順位が定まっており、すでに面接した候補者についてはそれらの間の相対的順位が分かるものとする。
面接は一人ずつ行うが、候補者の現れる順序はランダムに決定され、事前には分からない。
採用プロセスでは、すでに面接した候補者の間での相対的順位に基づいて採否の決定が行われ、さらに以下の条件が課される。

- 各候補者の面接の直後に、その候補者の採否を決定する。
- ある候補者の採用が決まった時点で採用プロセスを終了する。
- 過去に不採用にした候補者を採用することはできない。
- $n - 1$ 回までの面接で採用しなかったときは、$n$ 番目の候補者を無条件で採用する。

アルバイトの採用において次のような戦略をとる。ただし、$1 \leq r \leq n$ とする。

* $r-1$ 回の面接までは無条件で候補者を不採用にする。
* 以降の面接では、候補者がその $r - 1$ 人の中での最良候補（相対的順位 $1$）よりも良ければ採用する。

この戦略で、絶対的順位 $1$ の候補者を採用する確率を $P_n(r)$ とする。
以下の問いに答えよ。

(1) $P_4(2)$ を求めよ。

(2) $P_{10}(3) = \frac{2}{10} \times \left( \frac{1}{2} + \frac{1}{3} + \cdot\cdot\cdot + \frac{1}{9} \right)$ となることを示せ。

(3) $n$ 人の候補者に対して、$k$ 回目の面接で絶対的順位 $1$ の候補者を採用する確率を求めよ。ただし、$r \leq k \leq n$ である。

(4) 以下の漸化式において、$A, B$ に入る式を求めよ。

$$
   P_n(r) = \boxed{\ \ \ A \ \ \ } + \boxed{\ \ \ B \ \ \ } \times P_{n}(r + 1)
$$

ただし、$A, B$ には $n, r$ と定数からなる式が入る。

(5) $q = r / n$ とする。
$n$ が十分大きいときに $P_n(r)$ は $-q \ln q$ で近似できることを説明せよ。
さらに、$-q \ln q$ の最大値を与える $q \in (0, 1]$ の値を求めよ。
ただし、$\ln$ は自然対数を表す。


### 题目描述

有 $n\ge2$ 名候选人，绝对排名为 $1$ 至 $n$。候选人以均匀随机顺序逐一面试；面试后只能得知已面试者之间的相对排名，并必须立即决定是否录用。一旦录用即结束，已拒绝者不能追回；若前
$n-1$ 人均未录用，则无条件录用最后一人。

采用阈值策略（$1\le r\le n$）：无条件拒绝前 $r-1$ 人；此后遇到比前
$r-1$ 人中最佳者更优秀的候选人就录用。记录用绝对排名第一者的概率为
$P_n(r)$。回答下列问题。

（1）求 $P_4(2)$。

（2）证明
$$
P_{10}(3)=\frac2{10}
\left(\frac12+\frac13+\cdots+\frac19\right).
$$

（3）对 $r\le k\le n$，求在第 $k$ 次面试时录用绝对第一名的概率。

（4）求递推式
$$
P_n(r)=\boxed A+\boxed B\,P_n(r+1)
$$
中的 $A,B$，它们仅由 $n,r$ 和常数组成。

（5）令 $q=r/n$。说明当 $n$ 足够大时
$P_n(r)$ 可由 $-q\ln q$ 近似，并求使其在 $q\in(0,1]$ 上最大的
$q$。

#### 考点

- **秘书问题**：把成功事件分解为最佳候选人的出现位置及此前样本最佳者的位置。
- **随机排列与条件概率**：计算第 $k$ 位成功录用全局最佳者的概率并求和。
- **概率递推**：比较阈值 $r$ 与 $r+1$ 的策略，建立动态关系。
- **$1/e$ 规则**：用调和和的积分近似得到 $-q\ln q$，再求连续最优阈值比例。

## **Kai**
### (1)
For the case of $n = 4$, $r = 2$, let event $A$ be the acception of the most suitable applicant, and $B_k$ be the event that the most suitable applicant appears in the $k$-th position. $k = 1, 2, 3, 4$.

$$
\begin{aligned}
P(A|B_1) &= 0 \\
P(A|B_2) &= 1 \\
P(A|B_3) &= \frac{1}{2} \\
P(A|B_4) &= \frac{1}{3} \\
\end{aligned}
$$

$$
P_4(2) = \sum_{k=1}^4 P(A|B_k) P(B_k) = \frac{1}{4} \times 1 + \frac{1}{4} \times \frac{1}{2} + \frac{1}{4} \times \frac{1}{3} = \frac{11}{24}
$$

### (2)

$$
P(A|B_k) = 
\begin{cases} 
0 & \text{if } k \leq 2 \\ 
\frac{2}{k-1} & \text{if } k > 2 
\end{cases}
$$

$$
\begin{aligned}
P_{10}(3) &= \sum_{k=1}^{10} P(A|B_k) P(B_k) \\
&= \frac{1}{10} \left( \frac{2}{2} + \frac{2}{3} + \cdots + \frac{2}{9} \right) \\
&= \frac{2}{10} \left( \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{9} \right)
\end{aligned}
$$

### (3)
（第 $k$ 次录用到最合适人选 $Q$ 的条件为：$Q$ 前面的 $k − 1$ 个人中的最合适的人选位于前
$r − 1$ 人当中，这样轮到 $Q$ 的时候就会被录用。）


$$
P = \frac{r-1}{k-1} \quad \quad k = r, r+1, \ldots, n
$$

### (4)

$$
P_n(r) = \frac{r-1}{n} \left( \frac{1}{r-1} + \frac{1}{r} + \cdots + \frac{1}{n-1} \right)
$$

$$
P_n(r+1) = \frac{r}{n} \left( \frac{1}{r} + \frac{1}{r+1} + \cdots + \frac{1}{n-1} \right)
$$

$$
\frac{r-1}{r} P_n(r+1) = \frac{r-1}{n} \left( \frac{1}{r} + \frac{1}{r+1} + \cdots + \frac{1}{n-1} \right) = P_n(r) - \frac{1}{n}
$$

$$
P_n(r) = \frac{r-1}{r} P_n(r+1) + \frac{1}{n}
$$

（思路上，当小白鼠从 $r$ 个人变为 $r − 1$ 个人时。如果最合适的人选 $Q$ 在第 $r + 1$ 位及之后，那么其位次信息都已包含在 $P_n(r + 1)$ 当中，此时还需要满足前 $r$ 人中最合适的人选不在第 $r$ 位，$Q$ 才能被录用。
如果 $Q$ 刚好在第 $r$ 位，那么他一定会被录用，概率为 $1/n$。同样可以得到相同的递推式。）

### (5)
When $n$ is large, we consider the Harmonic series

$$
1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} \sim \ln n
$$

$$
\begin{aligned}
P_n(r) &= \frac{r-1}{n} \left( \frac{1}{r-1} + \frac{1}{r} + \cdots + \frac{1}{n-1} \right) \\
&\approx \frac{r}{n} \left(\ln n - \left(1+\frac{1}{2}+\frac{1}{3}+\cdots + \frac{1}{r-2} \right) \right) \\
&\approx \frac{r}{n} \left( \ln n - \ln r \right) \\
&\approx -\frac{r}{n} \ln \frac{r}{n} \\
&= -q \ln q = f(q)
\end{aligned}
$$

$$
f'(q) = -\ln q -1 = 0 \qquad q = \frac{1}{e}
$$
