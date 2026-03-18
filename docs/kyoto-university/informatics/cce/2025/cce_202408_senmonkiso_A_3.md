---
sidebar_label: "2024年8月実施 専門基礎A [A-3]"
tags:
  - Kyoto-University
  - Information-Theory
  - Entropy
  - Mutual-Information
  - Markov-Source
  - Additive-Binary-Channel
  - Channel-Capacity
---
# 京都大学 情報学研究科 通信情報システム専攻 2024年8月実施 専門基礎A \[A-3\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
Answer all the following questions.

### (1)

Consider a weather forecast which predicts the weather with two values: sunny and rainy. Let $X$ and $Y$ denote random variables which represent the actual weather and the forecasted weather, respectively. The joint probability distribution of $X$ and $Y$, $P_{XY}$, is given as shown in Table 1. Answer the following questions. Use Table 2 to calculate the logarithm.

#### Table 1: Joint probability distribution of $X$ and $Y$

| Actual weather $X$ / Forecasted weather $Y$ | Sunny | Rainy |
|---|---:|---:|
| Sunny | 0.45 | 0.20 |
| Rainy | 0.15 | 0.20 |

#### Table 2: Logarithm table

| Expression | Value |
|---|---:|
| $\log_2 3$  | 1.58 |
| $\log_2 5$  | 2.32 |
| $\log_2 7$  | 2.81 |
| $\log_2 11$ | 3.46 |
| $\log_2 13$ | 3.70 |
| $\log_2 17$ | 4.09 |
| $\log_2 19$ | 4.25 |

(a) Find the entropy of $X$, $H(X)$, and the entropy of $Y$, $H(Y)$.

(b) Find the conditional entropy $H(X|Y)$.

(c) Find the joint entropy $H(X,Y)$.

(d) Find the mutual information of $X$ and $Y$, $I(X;Y)$.

(e) Explain whether the above weather forecast is useful compared to the case of always predicting sunny, by using the forecast accuracy and the mutual information.

### (2)

Answer the following questions on additive binary communication channels. The entropy function $\mathcal{H}(x)$ may be used.

(a) Find the transition probability matrix of the Markov information source represented by the state transition diagram using probabilities $P$, $Q$ and states $s_0$, $s_1$ below. This state transition diagram shows, for example, that the probability of transition from state $s_0$ to state $s_1$ is $P$ and that 1 is output at that time.

The state transition diagram corresponds to:

- $s_0 \to s_0$: output $0$, probability $1-P$
- $s_0 \to s_1$: output $1$, probability $P$
- $s_1 \to s_0$: output $0$, probability $Q$
- $s_1 \to s_1$: output $1$, probability $1-Q$

(b) Find the stationary distribution of the Markov information sources in Question (a).

(c) Find the bit error rate of the additive binary communication channel whose error source $S_E$ is the Markov information source in Question (a).

(d) Find the communication channel capacity of the additive binary communication channel in Question (c).

## **Kai**
### (1) 

Given the joint distribution:

- $P(X=\text{Sunny},Y=\text{Sunny})=0.45$
- $P(X=\text{Sunny},Y=\text{Rainy})=0.20$
- $P(X=\text{Rainy},Y=\text{Sunny})=0.15$
- $P(X=\text{Rainy},Y=\text{Rainy})=0.20$

So the marginals are:

$$
P(X=\text{Sunny})=0.65,\quad P(X=\text{Rainy})=0.35
$$

$$
P(Y=\text{Sunny})=0.60,\quad P(Y=\text{Rainy})=0.40
$$

#### (a)

$$
\begin{aligned}
H(X)&=\sum_i p_i\log_2\frac{1}{p_i} \\
&=0.65\log_2\frac{1}{0.65}+0.35\log_2\frac{1}{0.35} \\
&=0.9315\ \text{bits/symbol}
\end{aligned}
$$

$$
\begin{aligned}
H(Y)&=\sum_i p_i'\log_2\frac{1}{p_i'} \\
&=0.6\log_2\frac{1}{0.6}+0.4\log_2\frac{1}{0.4} \\
&=0.972\ \text{bits/symbol}
\end{aligned}
$$

#### (b)

$$
H(X|Y)=\sum_i p(y_i)\,H(X|Y=y_i)
$$

$$
P(X|Y=\text{Sunny})=\left(\frac{0.45}{0.60},\frac{0.15}{0.60}\right)=\left(\frac{3}{4},\frac{1}{4}\right)
$$

$$
P(X|Y=\text{Rainy})=\left(\frac{0.20}{0.40},\frac{0.20}{0.40}\right)=\left(\frac{1}{2},\frac{1}{2}\right)
$$

$$
\begin{aligned}
H(X|Y)&=0.6\times H\left(\frac{3}{4},\frac{1}{4}\right)+0.4\times H\left(\frac{1}{2},\frac{1}{2}\right) \\
&=0.88\ \text{bits/symbol}
\end{aligned}
$$

### (c)

$$
\begin{aligned}
H(X,Y)&=\sum_{x,y}p(x,y)\log_2\frac{1}{p(x,y)} \\
&=0.45\log_2\frac{1}{0.45}+0.15\log_2\frac{1}{0.15}+0.4\log_2\frac{1}{0.2} \\
&=1.861\ \text{bits/symbol}
\end{aligned}
$$

### (d)

$$
I(X;Y)=H(X)-H(X|Y)=0.0425\ \text{bits/symbol}
$$

### (e) 
**Forecast accuracy:**

$$
\begin{aligned}
P(\hat X = X)&=P(X=\text{Sunny},Y=\text{Sunny})+P(X=\text{Rainy},Y=\text{Rainy}) \\
&=0.45+0.20=0.65
\end{aligned}
$$

**Always-sunny accuracy:**

$$
P(X=\text{Sunny})=0.65
$$

*   Forecast acc: 65%
*   Always sunny acc: 65%

Therefore, the given forecast does **not** improve the accuracy compared with always predicting sunny.

On the other hand, the mutual information is

$$
I(X;Y)\approx 0.04 \text{ bits},
$$

which is positive. This means that the forecast still contains some information about the actual weather. However, the amount of information is very small.

Hence, this forecast is **not useful in terms of prediction accuracy**, because it is no better than always predicting sunny, and it is **only weakly informative** in terms of mutual information.

### (2) 
#### (a) 

$$
\begin{bmatrix}
1-P & P \\
Q & 1-Q
\end{bmatrix}
$$

#### (b) 

$$
\begin{cases}
\pi_0 = (1-P)\pi_0 + Q\pi_1 \\
\pi_1 = P\pi_0 + (1-Q)\pi_1 \\
\pi_0 + \pi_1 = 1
\end{cases}
\quad\Rightarrow\quad
\begin{cases}
\pi_0 = \dfrac{Q}{P+Q} \\
\pi_1 = \dfrac{P}{P+Q}
\end{cases}
$$

#### (c)
For the additive channel, the error bit is $S_E=1$. In steady state:

$$
R_{\text{error}} = P(S_E=1)=\pi_1=\dfrac{P}{P+Q}
$$

### (d) 

$$
C = 1 - \bar H(S_E),
$$

where $\bar H(S_E)$ is the entropy rate of the Markov noise source.

With stationary probabilities $\pi_0=\dfrac{Q}{P+Q}$, $\pi_1=\dfrac{P}{P+Q}$, the entropy rate is

$$
\bar H(S_E)=\pi_0\,H(P)+\pi_1\,H(Q),
$$

so

$$
C = 1-\left(\frac{Q}{P+Q}H(P)+\frac{P}{P+Q}H(Q)\right),
$$
