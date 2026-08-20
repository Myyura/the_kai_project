---
sidebar_label: '2013年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Data-Science.Term-Frequency-Inverse-Document-Frequency
  - Engineering.Robotics.Zero-Moment-Point
  - Computer-Science.Distributed-Systems.Distributed-Hashing
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Data-Science-Artificial-Intelligence.Machine-Learning.Bayesian-Network
  - Electrical-Electronic.Digital-Logic.Carry-Lookahead-Adder
  - Computer-Science.Programming.Closure
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) tf-idf
2) ZMP (Zero Moment Point)
3) 分散ハッシュ
4) 最短経路問題
5) ベイジアンネットワーク
6) キャリー・ルック・アヘッド
7) クロージャ(閉包)
8) 有限オートマトン

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) tf-idf
2) ZMP (Zero Moment Point)
3) Distributed hash
4) Shortest path problem
5) Bayesian network
6) Carry look-ahead
7) Closure
8) Finite automaton

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. tf-idf。
2. ZMP（零力矩点）。
3. 分布式哈希。
4. 最短路径问题。
5. 贝叶斯网络。
6. 超前进位。
7. 闭包（closure）。
8. 有限自动机。

## **Kai**
#### Shortest path problem
For a weighted graph $G=(V,E)$ with edge weight $w(\cdot\to\cdot)$, the shortest-path problem asks for a path $p=(v_{i_1},v_{i_2},\dots,v_{i_k})$ with minimum cost, where the cost is the sum of the weights of all edges composing the path. For a single-source problem, we constrain $v_{i_1}=s$. For a single-pair problem, we also constrain $v_{i_k}=t$.

Bellman--Ford (and its queue-based implementation commonly called SPFA) tackles single-source shortest paths with negative edges and can detect a reachable negative cycle; Dijkstra's algorithm does the same faster when all edge weights are nonnegative, but cannot handle negative edges or detect negative cycles; Floyd--Warshall computes shortest paths from every vertex to every vertex in cubic time, provided no negative cycle makes a distance undefined.

#### Carry look-ahead
Carry look-ahead is a method for adding two $n$-bit binary numbers in parallel. For every bit place, the carry includes two stages: Generate and Propagate. For bit $i$, define carry generation $g_i=A_iB_i$ and carry propagation $p_i=A_i+B_i$, where Boolean OR is $+$ and AND is juxtaposition. Then

$$
c_{i+1}=g_i+p_ic_i.
$$

The output carry is thus the generated carry or a propagated input carry. Carry look-ahead expands this recursive equation inline for each carry output. By this we can directly compute the carries from $A$, $B$, and $c_0$ instead of passing them through many **full adders**, in parallel with the circuit getting the sums.

#### Closure

A closure is a function together with the lexical environment containing its free variables. The captured variables remain accessible after the creating scope returns. For example, a function returning `lambda: count` can retain its own private `count` state.

#### Finite automaton

A DFA is a tuple $(Q,\Sigma,\delta,q_0,F)$ with finite state set $Q$, transition function $\delta:Q\times\Sigma\to Q$, initial state $q_0$, and accepting states $F$. It accepts a word exactly when the state reached after reading the whole word lies in $F$. DFAs recognize precisely the regular languages.
