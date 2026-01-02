---
sidebar_label: '2013年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) tf-idf
2) ZMP (Zero Moment Point)
3) 分散ハッシュ
4) 最短経路問題
5) ベイジアンネットワーク
6) キャリー・ルック・アヘッド
7) クロージャ(閉包)
8) 有限オートマトン

## **Description (English)**
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

## **Kai**
**Shortest path problem**

For a weighted graph $G=(V,E)$ with weight $w(\cdot\to\cdot)$, the shortest path problem asks for a path $p=(v_{i_1},v_{i_2},\dots,v_{i_{-1}})$ with minimum cost where the cost is the sum of every edge composing the path. For a single source $s$, we constrain $v_{i_1}=s$. For a single destination $t$, we constrain $v_{i_{-1}}=t$. 

Bellman-Ford, SPFA algorithm can tackle single-source shortest path to multiple destinations able to tackle negative edges and detect negative cycles; Dijkstra algorithm can do the same thing faster but unable to tackle negative edges or detect negative cycles; Floyd-Warshall algorithm computes shortest path from every vertex to every vertex in cubic time.