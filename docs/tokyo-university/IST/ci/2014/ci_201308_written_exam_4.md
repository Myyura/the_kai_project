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
[itsuitsuki](https://github.com/itsuitsuki)

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

#### 考点

- **tf-idf**：说明词频与逆文档频率如何共同衡量词对某文档的区分度。
- **零力矩点**：说明双足机器人支撑面上合力矩水平分量为零的点及其稳定性判据。
- **分布式哈希**：说明用哈希把键和值分散定位到多节点，并处理节点加入、离开。
- **最短路径**：说明在带权图上最小化路径边权总和的问题及典型算法。
- **贝叶斯网络**：说明用有向无环图和条件概率表表示随机变量依赖并进行概率推断。
- **超前进位**：利用各位进位生成、传播信号并行计算进位，缩短加法器关键路径。
- **闭包**：说明函数携带其定义时词法环境，使离开原作用域后仍可访问自由变量。
- **有限自动机**：说明有限状态、输入符号和转移函数如何识别正则语言。

## **Kai**
#### Shortest path problem
For a weighted graph $G=(V,E)$ with weight $w(\cdot\to\cdot)$, the shortest path problem asks for a path $p=(v_{i_1},v_{i_2},\dots,v_{i_{-1}})$ with minimum cost where the cost is the sum of every edge composing the path. For a single source $s$, we constrain $v_{i_1}=s$. For a single destination $t$, we constrain $v_{i_{-1}}=t$. 

Bellman-Ford, SPFA algorithm can tackle single-source shortest path to multiple destinations able to tackle negative edges and detect negative cycles; Dijkstra algorithm can do the same thing faster but unable to tackle negative edges or detect negative cycles; Floyd-Warshall algorithm computes shortest path from every vertex to every vertex in cubic time.

#### Carry look-ahead
Carry look-ahead is a method adding 2 $n$-bit binary numbers in parallel. For every bit place, the carry includes two stages: Generate and Propagate. Carry generation is $c_{i,gen}:=A_iB_i$ in the $i$-th place adding $A$ and $B$, and carry propagation occurs when input carry is rippled to become output carry: $c_{i,prop}=A_i+B_i$ absorbing the carry from the last place.

The $c_{i,out}$ is equal to $c_{i_gen}+c_{i-1,out}c_{i,prop}$. Carry look-ahead is to expand this recursive equation in-line directly for the final carry output. By this we can directly compute the carry output from $A$ and $B$ instead of passing it through many **full adders,** parallel to the circuit getting the sums.
