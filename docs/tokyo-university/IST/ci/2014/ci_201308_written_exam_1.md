---
sidebar_label: '2013年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Machine-Learning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
We consider a weather prediction system in which a single senior predictor predicts a weather probability distribution on the basis of $N$ predictors' prediction results. Below the system is described in details.
There are $N$ weather predictors, each of whom outputs a weather probability distribution once a day. Here the weather is a binary random variable taking a value 1 or 0 only (1 means "fine" while 0 means "not fine"). It is assumed that the weather is independent of a day.
Let the probability distribution that the $i$-th predictor outputs on the $t$-th day be $P_i^{(t)}(X)$ ($X \in \{1, 0\}$) where we let $0 < P_i^{(t)}(X) < 1$ ($X \in \{1, 0\}$). There is a senior predictor who aggregates the outputs of the $N$ predictors. On the $t$-th day, the senior predictor takes a weighted average over the probability distributions output by the $N$ predictors to output a weather probability distribution $\hat{P}^{(t)}(X)$ ($X \in \{1, 0\}$). Here the weight on the $i$-th predictor on the $t$-th day is denoted as $v_i^{(t)}$ ($\sum_{i=1}^N v_i^{(t)} = 1, v_i(t) > 0$ ($i = 1, \dots, N$)). That is, on the $t$-th day, $\hat{P}^{(t)}(X)$ is given by $\sum_{i=1}^N v_i^{(t)} P_i^{(t)}(X)$ (see Figure 1).
On the $t$-th day, after the senior predictor ouputs, the real outcome $x_t \in \{1, 0\}$ of the weather on the day is reported. This process goes on sequentially with respect to $t$.
In the above setting, answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201308_1_p1.png" width="300" alt=""/>
</figure>

(1) Assume that the senior predictor defines the weight $v_i^{(t)}$ of the $i$-th predictor on the $t$-th day so that the ratio of $v_i^{(t)}$s with respect to $i$ is equal to that of their corresponding likelihoods with respect to the sequence of the past $t-1$ data: $x^{t-1} = x_1 \dots x_{t-1}$. That is, when we denote the likelihood of the $i$-th predictor with respect to $x^{t-1}$ as $w_i^{(t-1)}$,

the following equation holds: For each $t$,
$$ v_1^{(t)} : \dots : v_N^{(t)} = w_1^{(t-1)} : \dots : w_N^{(t-1)}. $$
The likelihood of the $i$-th predictor with respect to $x^{t-1}$ is calculated as $w_i^{(t-1)} = \prod_{j=1}^{t-1} P_i^{(j)}(X = x_j)$, where we denote $P_i^{(j)}(X = x_j)$ as $P_i^{(j)}(x_j)$ and we set $P_i^{(0)}(x_0) = 1$ ($i = 1, \dots, N$).
In this setting, for each $i$, show a relation between $w_i^{(t)}$ and $w_i^{(t-1)}$, and derive a formula for calculating $v_i^{(t+1)}$ using $w_i^{(t-1)}$ and $P_i^{(t)}(x_t)$ ($i = 1, \dots, N$).

(2) Suppose that the senior predictor predicts the weather probability distribution sequentially with respect to $t$ for $T$ days. Then under the setting of $v_i^{(t)}$ as in (1), write an algorithm for the senior predictor to output a weather probability distribution and update the weights for predictors every day, and show the order of its computation time in terms of $N$ and $T$. Here the initial weight for each predictor is set as follows:
$$ v_1^{(0)} = \dots = v_N^{(0)} = 1/N. $$

(3) When the prediction is sequentially made for $T$ days, we define the cumulative predictive loss for the senior predictor with respect to the sequence $x^T = x_1 \dots x_T$ of observed real coutcome as follows:
$$ Loss(x^T) = \sum_{t=1}^T \left( -\log \hat{P}^{(t)}(x_t) \right). $$
Then write $Loss(x^T)$ as a function of $P_i^{(t)}(x_t)$ ($i = 1, \dots, N, t = 1, \dots, T$) and $N$. Here the logarithm is the natural logarithm.

(4) Prove that the senior predictor's cumulative loss for $T$ days defined in (3) is at most $\log N$ larger than the least cumulative loss over all $i$-th predictors for $T$ days. Here the cumulative loss for the $i$-th predictor for $T$ days is defined as $\sum_{t=1}^T (-\log P_i^{(t)}(x_t))$ ($i = 1, \dots, N$).