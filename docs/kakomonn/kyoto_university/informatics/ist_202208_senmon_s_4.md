---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing), Passed, 祭音Myyura

## **Description**
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


## **Kai**
### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202208_senmon_s_4_p1.png" width="400" alt=""/>
</figure>

### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202208_senmon_s_4_p2.png" width="400" alt=""/>
</figure>

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
