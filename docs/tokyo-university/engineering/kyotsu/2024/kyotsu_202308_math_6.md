---
sidebar_label: '2023年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Birth-Death-Process
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---

# 東京大学 工学系研究科 2023年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

充電器が一台ある電気自動車の充電ステーションを考える。到着した車両は到着順に並び、先頭車両だけが充電される。一定時間ごとに滞在車両数を観測する。

ある観測から次の観測までの間に、一台の車両が新たに到着する確率は $p$、先頭車両の充電が完了する確率は $q$ とする。$0<p,q<1$ かつ $p+q<1$ であり、$p,q$ は一定とする。この間に二台以上が到着することも、二台以上の充電が完了することもなく、到着と充電完了が同時に起こることもない。

充電中の車両を含めて $N\ge2$ 台まで待機でき、満車時に新たに到着した車両は並ばずに立ち去る。充電が完了した車両は直ちに立ち去る。

I. 現在 $0<i<N$ 台の車両がいるとする。次の観測まで、新たな到着も車両の退出も起こらない確率を求めよ。

定常状態において $i$ 台が滞在する確率を $\pi_i$（$0\le i\le N$）とする。

II. $\pi_i$ と $\pi_{i+1}$ の関係を求めよ（$0\le i\le N-1$）。

III. $\pi_i$ を $p,q,N$ で表せ。

IV. $p<q$ のとき、定常状態の滞在車両数の期待値を $p,q,N$ で表せ。

#### 题目描述

一座电动汽车充电站只有一台充电器。车辆按到达顺序排队，只有队首车辆充电。每隔固定时间观察站内车辆数。

相邻两次观察间，一辆新车到达的概率为 $p$，队首车辆完成充电的概率为 $q$，其中 $0<p,q<1$、$p+q<1$。每个观察间隔内不可能有两辆以上车到达或两辆以上车完成充电，且到达和充电完成不同时发生。车辆充电结束立即离开。

站内至多容纳 $N\ge2$ 辆车（包含充电中的车）；满员时新到车辆直接离开。

I. 已知当前有 $0<i<N$ 辆车，求下一观察间隔内既没有新车到达、也没有车辆离开的概率。

设平稳状态下有 $i$ 辆车的概率为 $\pi_i$（$0\le i\le N$）。

II. 求 $\pi_i$ 与 $\pi_{i+1}$ 的关系（$0\le i\le N-1$）。

III. 用 $p,q,N$ 表示 $\pi_i$。

IV. 当 $p<q$ 时，用 $p,q,N$ 表示平稳状态下站内车辆数的期望。

## **Kai**

### I

到着と退出は排反なので、求める確率は

$$
\boxed{1-p-q}.
$$

### II

定常状態では、状態集合 $\{0,\ldots,i\}$ からの流出確率と流入確率が等しい。境界を横切る遷移は $i\leftrightarrow i+1$ だけなので、

$$
\boxed{p\pi_i=q\pi_{i+1}}.
$$

### III

$\rho=p/q$ とおくと $\pi_i=\rho^i\pi_0$ である。$\sum_{i=0}^N\pi_i=1$ で正規化すると、

$$
\boxed{\pi_i=\begin{cases}
\displaystyle\frac{(1-\rho)\rho^i}{1-\rho^{N+1}},&p\ne q,\\[5pt]
\displaystyle\frac1{N+1},&p=q.
\end{cases}}
$$

### IV

有限等比級数の和を微分すると、

$$
\sum_{i=0}^Ni\rho^i=\rho\frac d{d\rho}\frac{1-\rho^{N+1}}{1-\rho}.
$$

したがって

$$
\boxed{\mathbb E[i]=\frac{\rho}{1-\rho}-\frac{(N+1)\rho^{N+1}}{1-\rho^{N+1}},\qquad\rho=\frac pq<1}.
$$

同値な形で書けば、

$$
\mathbb E[i]=\frac{\rho\{1-(N+1)\rho^N+N\rho^{N+1}\}}{(1-\rho)(1-\rho^{N+1})}.
$$

