---
sidebar_label: "2022年1月実施 専門科目II 問題2"
sidebar_position: 21
tags:
  - Hiroshima-University
  - Minimum-Spanning-Tree
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年1月実施 専門科目II 問題2


## **Author**
祭音Myyura

## **Description**
以下の問いに答えよ。

(1) Table 1 は鳥取 (Tr)、島根 (S)、岡山 (O)、広島 (H)、山口 (Y)、徳島 (Tk)、愛媛 (E) の7つの各都市間の距離を表す。
都市を頂点とし、距離を都市間の辺の重みとしたグラフ $G$ の最小全域木を求めよ。

(2) 各辺の重みがすべて異なる任意のサイズの重み付き連結グラフ $G$ において、最小全域木を求めるアルゴリズムを説明せよ。

(3) (2) で述べたアルゴリズムで求められる部分グラフが最小全域木であることを証明せよ。

(4) (2) で述べたアルゴリズムの計算時間複雑性を理由とともに示せ。

(5) 重み付き連結グラフ $G$ において、各辺の重みがすべて異なっている時、$G$ は唯一の最小全域木を持つことを証明せよ。

--------------------------------------------------------

Answer the following questions

(1) Table 1 shows the distances between the seven cities of Tottori (Tr), Shimane (S), Okayama (O), Hiroshima (H), Yamaguchi (Y), Tokushima (Tk), and Ehime (E): Find the minimum spanning tree of graph $G$ with the cities as nodes and the distances as weights of the edges between the cities.

(2) Describe an algorithm to find the minimum spanning tree in a weighted connected graph $G$ of any size where all edges have distinct weights.

(3) Prove that the subgraph obtained by the algorithm described in (2) is the minimum spanning tree.

(4) Show the time complexity of the algorithm described in (2) with reasons.

(5) In a weighted connected graph $G$, prove that $G$ has a unique minimum spanning tree when all edges have distinct weights.

#### **Table 1**

||Tr|S|O|H|Y|Tk|E|
|-|-|-|-|-|-|-|-|
|Tr|-|108|97|204|292|162|229|
|S|108|-|121|131|203|298|183|
|O|97|121|-|139|233|88|141|
|H|204|131|139|-|94|197|78|
|Y|292|203|233|94|-|258|126|
|Tk|162|298|88|197|258|-|168|
|E|229|183|141|78|126|168|-|


## **Kai**
### (1)
<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/is_202201_senmon_II_2_p1.png" width="400" height="400" alt=""/>
</figure>

### (2)
([Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm))

Step 1: Determine an arbitrary vertex as the starting vertex of the MST.

Step 2: Follow steps 3 to 5 till there are vertices that are not included in the MST (known as fringe vertex).

Step 3: Find edges connecting any tree vertex with the fringe vertices.

Step 4: Find the minimum among these edges.

Step 5: Add the chosen edge to the MST if it does not form any cycle.

Step 6: Return the MST and exit

### (3)
Let $V$, $E$, $w$ denote the vertex set, the edge set and edge weights of $G$.

It is trivial that the subgraph obtained by Prim's algorithm is a tree. Let $T$ denote the subgraph.

Let $T^*$ denote a minimum spanning tree of graph $G$. If $T^* = T$, then $T$ is a minimum spanning tree.
Otherwise, let $e$ be the first edge added during the construction of tree $T$ that is not in tree $T^*$, and $V'$ be the set of vertices connected by the edges added before edge $e$.
Then one endpoint of $e$ is in set $V'$ and the other is not.
Since $T^*$ is connected, there exists an edge $f \neq e \in T^*$ such that one endpoint of $f$ is in set $V'$ and the other is not.
Hence at the iteration when edge $e$ was added to $T$, edge $f$ is also one of alternatives.
Since edge $f$ was not chosen, we know that

$$
w(f) \geq w(e)
$$

Let $T_1 = T^* \setminus \{f\} + \{e\}$.
Since $w(T_1) = w(T^*) - w(f) + w(e) \leq w(T^*)$, $T_1$ is also a minimum spanning tree which contains edge $e$ and all the edges added before it during the construction of set $V'$.
Repeat the steps above and we will eventually obtain a minimum spanning tree of graph $G$ that is identical to tree $T$, which shows that $T$ is a minimum spanning tree.

### (4)
If we use an adjacent list graph representation and a binary heap to find an edge of minimum weight, then the worst-case time complexity is $O(|E| \log |E|) = O(|E| \log |V|)$

### (5)
Assume the contrary, that there are two different MSTs $A$ and $B$.

Since $A \neq B$, there is at least one edge that belongs to one but not the other.
Among such edges, let $e_1$ be the one with least weight; this choice is unique because the edge weights are all distinct.
W.l.o.g, assume $e_1 \in A$.

As $B$ is an MST, $\{e_1\} \cup B$ must contain a cycle $C$ with $e_1$.
As a tree, $A$ contains no cycles, therefore $C$ must have an edge $e_2$ that is not in $A$.
Since $e_1$ was chosen as the unique lowest-weight edge among those belonging to exactly one of $A$ and $B$, the weight of $e_2$ must be greater than the weight of $e_1$.
As $e_1$ and $e_2$ are part of the cycle $C$, replacing $e_2$ with $e_1$ in $B$ therefore yields a spanning tree with a smaller weight, which contradicts the assumption that $B$ is an MST.
