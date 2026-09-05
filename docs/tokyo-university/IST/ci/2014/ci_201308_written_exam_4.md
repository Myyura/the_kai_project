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

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065610id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2013-8-exam.pdf).

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

### (1) tf-idf

Term frequency–inverse document frequency weights a term by how common it is in one document and how distinctive it is across a collection. One convention is $\mathrm{tfidf}(w,d)=\mathrm{tf}(w,d)\log(N/\mathrm{df}(w))$, where $N$ is the number of documents and $\mathrm{df}(w)$ counts documents containing the term, not its total occurrences. A term frequent in one document but rare in the corpus receives a large weight, while one appearing in every document has zero unsmoothed idf. Document vectors can be normalized and compared with cosine similarity for retrieval. Count scaling, smoothing and normalization vary by implementation; the weights do not capture meaning or word order by themselves.

### (2) ZMP

The zero moment point is a point on a chosen support plane where the resultant moment has zero components tangent to that plane; a moment along its normal need not vanish. For a robot supported on a flat floor, the contact-force ZMP coincides with the center of pressure. Keeping the required ZMP within the support polygon is a useful condition against tipping, but friction, torque and contact constraints must also be satisfied. Under a constant-height center-of-mass model with negligible angular-momentum change, $x_{\mathrm{ZMP}}=x_c-(z_c/g)\ddot x_c$ and similarly for $y$. Thus dynamic acceleration matters, not just the static vertical projection of the center of mass. See the [robotics explanation of zero-tilting moment](https://scaron.info/robotics/zero-tilting-moment-point.html).

### (3) Distributed hash

A distributed hash table assigns keys to participating nodes using hashed identifiers, allowing a key to be located without a single server storing every key. For example, Chord arranges node and key identifiers on a ring and stores a key at its successor node. Routing fingers skip increasing distances around the ring, giving logarithmic lookup and routing-table bounds under the protocol's stated assumptions. Consistent hashing limits the fraction of keys reassigned when membership changes. Replication, failure detection and stabilization handle node loss and churn; hashing alone does not provide availability, consistency or authentication. See the authors' [Chord protocol description](https://people.csail.mit.edu/dln/papers/chord/abstract.html).

### (4) Shortest path problem

For a weighted graph $G=(V,E)$, find a path minimizing the sum of its edge weights; single-source, single-pair and all-pairs variants specify different endpoints. Bellman–Ford handles negative edges and detects a negative cycle reachable from the source in $O(|V||E|)$ time; a reachable negative cycle makes distances unbounded below only for targets reachable from that cycle. Dijkstra's correctness requires nonnegative edge weights and a binary-heap implementation takes $O((|V|+|E|)\log|V|)$. Floyd–Warshall computes all-pairs distances in $O(|V|^3)$ time and can expose negative cycles via negative diagonal entries. Queue-based Bellman–Ford, often called SPFA, has no generally better worst-case bound.

### (5) Bayesian network

A Bayesian network represents a joint distribution with a directed acyclic graph and one conditional distribution per node. If $\mathrm{Pa}(X_i)$ is the set of parents of $X_i$, the factorization is $P(X_1,\ldots,X_n)=\prod_iP(X_i\mid\mathrm{Pa}(X_i))$. For example, a common-cause graph $R\to W$ and $R\to T$ gives $P(R,W,T)=P(R)P(W\mid R)P(T\mid R)$, so $W$ and $T$ are conditionally independent given $R$ but may be dependent marginally. Inference combines evidence through summation or other algorithms and can be expensive in general graphs. Edges encode a probabilistic model; interpreting them causally requires additional assumptions beyond the factorization.

### (6) Carry look-ahead

For bit $i$, let $g_i=A_iB_i$ and $p_i=A_i\lor B_i$. Then $c_{i+1}=g_i\lor(p_ic_i)$. Expanding, for example,

$$
c_4=g_3\lor p_3g_2\lor p_3p_2g_1\lor p_3p_2p_1g_0\lor p_3p_2p_1p_0c_0.
$$

This computes carries from operand bits and the input carry without waiting for each ripple stage. The sum still uses $S_i=A_i\oplus B_i\oplus c_i$; the OR-based $p_i$ above must not be substituted for $A_i\oplus B_i$ in that sum. Hierarchical group generate/propagate or parallel-prefix circuits provide $O(\log n)$ carry depth using bounded-fan-in gates, at the cost of more wiring and logic. A flat expanded expression is not automatically constant-depth when gate fan-in is bounded.

### (7) Closure

A closure is a function together with the lexical environment that supplies its free variables. Captured bindings remain accessible when the enclosing call has returned; whether variables are captured by reference or value depends on the language. For example, in Python:

```python
def make_counter():
    count = 0
    def next_count():
        nonlocal count
        count += 1
        return count
    return next_count
```

Each call to `make_counter` creates a separate retained `count` binding. Calls to the returned function update that binding, allowing callbacks and stateful function objects without a global counter.

### (8) Finite automaton

A deterministic finite automaton is $(Q,\Sigma,\delta,q_0,F)$, where $Q$ and the input alphabet $\Sigma$ are finite, $\delta:Q\times\Sigma\to Q$ is the transition function, $q_0$ is the initial state and $F$ is the set of accepting states. It accepts a word precisely when the state after consuming the whole word belongs to $F$; the empty word is accepted when $q_0\in F$. A nondeterministic finite automaton may have multiple possible successors and epsilon transitions; subset construction gives an equivalent DFA, possibly with exponentially more states. Both recognize exactly the regular languages, such as binary strings with an even number of ones, but cannot recognize $\{a^nb^n:n\ge0\}$.
