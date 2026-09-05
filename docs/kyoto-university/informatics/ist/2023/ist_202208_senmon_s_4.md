---
sidebar_label: 2022年8月実施 専門科目 S-4
tags:
  - Kyoto-University
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory
---
# 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing), Passed, 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2022_ist.pdf)
Let $\Sigma = \{ 0, 1 \}$ be an alphabet for information sources. Assume that **irreducible and aperiodic** Markov information sources $S_1$ and $S_2$ consisting of finite numbers of states satisfy:

- \[C1\] neither $S_1$ nor $S_2$ outputs any sequence including $11$, and  
- \[C2\] $S_2$ does not output any sequence including $0000$.  

Answer all of the following subquestions from (1) to (5).

(1) Let $s_1, s_2, \dots, s_m$ be the states of $S_1$.
Draw the transition diagram of $S_1$.
Assume that $S_1$ should output $0$ with probability $p$ ($0 < p < 1$) when it is at state $s_1$. You must make the number of the states $m$ minimum.

(2) Let $t_1, t_2, \dots, t_n$ be the states of $S_2$. Draw the transition diagram of $S_2$.
Assume that $S_2$ should output $0$ with probability $p$ ($0 < p < 1$) when it is at state $t_1$ and with probability $q$ ($0 < q < 1$) when it is at state $t_2$.
You must make the number of the states $n$ minimum. Also explain the reason why your answer satisfies \[C1\] and \[C2\].

(3) Give the transition matrix of $S_2$.

(4) Let a probability distribution $(q_1, \dots, q_n) \ (0 \leq q_i \leq 1, q_1 + \cdots + q_n = 1)$ be on the states $(t_1, \dots, t_n)$.
When the distribution is stationary and $p = q$, represent each of $q_1, \dots, q_n$ with $p$.

(5) Show the entropy of $S_2$ with $p$ when the initial distribution is equal to the stationary distribution given in (4).


### 题目描述

信息源字母表为 $\Sigma=\{0,1\}$。有限状态、不可约且非周期的 Markov 信息源
$S_1,S_2$ 满足：

- C1：二者都不会输出含 `11` 的序列；
- C2：$S_2$ 还不会输出含 `0000` 的序列。

回答：

1. 设 $S_1$ 状态为 $s_1,\ldots,s_m$。画最少状态的转移图，并使在 $s_1$ 时以概率 $p$（$0<p<1$）输出 0。
2. 设 $S_2$ 状态为 $t_1,\ldots,t_n$。画最少状态的转移图，使在 $t_1$ 时以概率 $p$ 输出 0、在 $t_2$ 时以概率 $q$ 输出 0（$0<p,q<1$）；说明为何满足 C1、C2。
3. 写出 $S_2$ 的转移矩阵。
4. 状态分布为 $(q_1,\ldots,q_n)$。当其为平稳分布且 $p=q$ 时，用 $p$ 表示全部 $q_i$。
5. 初始分布取第 4 问平稳分布时，用 $p$ 表示 $S_2$ 的熵率。

## **Kai**
### (1)

![markov-s1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2023/kyoto-ist-2022-markov-s1.svg)

After output $1$, the next output must be forced to $0$. Since $s_1$ is stochastic for $0<p<1$, this requires a distinct state, so two states are minimal.

### (2)

![markov-s2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2023/kyoto-ist-2022-markov-s2.svg)

After an output $1$, the diagram enters $t_3$, whose next output is forced to be $0$, so \[C1\] holds. After three consecutive outputs $0$, it enters $t_4$, whose next output is forced to be $1$, so \[C2\] holds. Moreover, $t_1,t_2$ are stochastic because $0<p,q<1$, while a forced-$0$ state and a distinct forced-$1$ state are necessary; hence at least four states are required.

All four states communicate for $0<p,q<1$. The return cycles $t_3\to t_1\to t_3$ and $t_3\to t_1\to t_2\to t_3$ have lengths $2$ and $3$, so the chain is aperiodic.

### (3)

$$
\begin{pmatrix}
0 & p & 1-p & 0\\
0&0&1-q&q\\
1&0&0&0\\
0&0&1&0
\end{pmatrix}
$$

### (4)

$$
(q_{1},q_{2},q_{3},q_{4}) = \frac{1}{p^{2}+p+2}(1,p,1,p^{2})
$$

### (5)
Let $H(p)$ denote the entropy function

$$
H(p) = -p\log_{2}p-(1-p)\log_{2}(1-p)
$$

hence

$$
\begin{aligned}
 H(S_{2}) &= q_{1}H_{t_{1}}+q_{2}H_{t_{2}}+q_{3}H_{t_{3}}+q_{4}H_{t_{4}}\\
&= \frac{1}{p^{2}+p+2}\left(H_{t_{1}}+pH_{t_{2}}+H_{t_{3}}+p^{2}H_{t_{4}}\right) \\
&= \frac{1}{p^{2}+p+2}\left(H_{t_{1}}+pH_{t_{2}}\right)\\
&= \frac{1}{p^{2}+p+2}\left(H(p)+pH(q)\right)\\
&= \frac{H(p)}{p^{2}+p+2}(p+1)
\end{aligned}
$$
