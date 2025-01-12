---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2024年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Graph-Theory
  - Shortest-Path-Problem
---
# 京都大学 情報学研究科 数理工学専攻 2024年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
有限集合 $A$ に属する要素の個数を $|A|$ と書く。
節点集合 $V$ および枝集合 $E$ からなる単純連結無向グラフ $G = (V, E)$ が与えられたものとする。
ただし $|V| \geq 3$ とする。
始点 $s \in V$ を一つ選ぶ。
任意の節点 $v \in V$ に対し、$s$ から $v$ への最短路における枝の本数を $\text{dist}(v)$ と書き、$s$ から $v$ への最短路の総数を $\sigma(v)$ と書く。
また、$d_{\text{max}} = \max_{v \in V} \text{dist}(v)$ とし、整数 $i = 0, 1, \ldots, d_{\text{max}}$ に対して $V_i = \{v \in V \mid \text{dist}(v) = i\}$ とする。以下の問いに答えよ。

(i) $d_{\text{max}}$ および $V_i, i = 0, 1, \ldots, d_{\text{max}}$ を、$O(|E|)$ 時間で計算する方法を示せ。

(ii) すべての $v \in V$ に対して $\sigma(v)$ を $O(|E|)$ 時間で計算する方法を示せ。

(iii) ある節点 $t \in V \setminus \{s\}$ と節点の部分集合 $U \subseteq V \setminus \{s, t\}$ に対して、$s$ から $t$ への最短路のうち、$U$ に属する節点を少なくとも１個通過するものの個数を $O(|E|)$ 時間で計算する方法を示せ。

(iv) ある節点 $t \in V \setminus \{s\}$、節点の部分集合 $U \subseteq V \setminus \{s, t\}$、整数 $1 \leq k \leq |U|$ に対して、$s$ から $t$ への最短路のうち、$U$ に属する節点を少なくとも $k$ 個通過するものが存在するかどうかを、$O(|E|)$ 時間で判定する方法を示せ。

## **Kai**
### (i)
Core idea: Use BFS starting from $s$ to calculate the shortest distance $\text{dist}(v)$ for all nodes $v \in V$.

```text
Input: Graph G = (V, E), starting node s
Output: d_max, V_i for i = 0, 1, ..., d_max

dist[v] = -1 for all v in V
dist[s] = 0
d_max = 0
V_i = [] (an empty list for each layer)
queue = [s]

while queue is not empty:
    u = queue.pop(0)
    for each neighbor v of u:
        if dist[v] == -1:  # v is unvisited
            dist[v] = dist[u] + 1
            d_max = max(d_max, dist[v])
            queue.append(v)

            V_i[dist[v]].append(v)

return d_max and V_i
```

Since graph is connected, we have $O(E) \geq O(V)$. Hence the time complexity is $O(|V| + |E|) = O(|E|)$.

### (ii)
Core idea: To calculate $\sigma(v)$, we can modify the standard BFS.
While traversing the graph, keep track of the number of shortest paths reaching each node $v$.
 

```text
Input: Graph G = (V, E), starting node s
Output: sigma[v] for all v in V

dist[v] = -1 for all v in V
dist[s] = 0
sigma[v] = 0 for all v in V
queue = [s]

while queue is not empty:
    u = queue.pop(0)
    for each neighbor v of u:
        if dist[v] == -1:  # v is unvisited
            dist[v] = dist[u] + 1
            queue.append(v)
        if dist[v] == dist[u] + 1:  # shortest path to v passes through u
            sigma[v] += sigma[u]

return sigma[v] for all v
```

### (iii)
Core idea: If a node $v$ is in one of shortest $s,t$-paths, then $\text{dist}(s,v) + \text{dist}(t,v) = \text{dist}(s,t)$.

```text
Input: Graph G = (V, E), source s, target t, subset U ⊆ V \ {s, t}
Output: Number of nodes in U that participate in any shortest path from s to t

dist_from_s[v] = ∞ for all v in V
Set dist_from_s[s] = 0
Perform BFS to compute dist_from_s[v] for all v in V

dist_to_t[v] = ∞ for all v in V
Set dist_to_t[t] = 0
Perform BFS to compute dist_to_t[v] for all v in V

participation_count = 0
for each u in U:
    if dist_from_s[u] + dist_to_t[u] == dist_from_s[t]:
        participation_count += 1

return participation_count
```

### (iv)
Core idea: Similar with (2), while traversing the graph, keep track of the number of nodes in $U$ encountered on the shortest paths reaching each node $v$.

```text
Input: Graph G = (V, E), source s, target t, subset U ⊆ V \ {s, t}, integer k
Output: True if there exists a shortest path from s to t with at least k nodes in U; otherwise False

dist = {v: ∞ for v ∈ V}  (Shortest distance to each node)
dist[s] = 0
queue = [(s, 0)]  (BFS queue: (node, count of nodes in U on path))
count = {v: -1 for v ∈ V}  (Tracks the max count of U nodes on shortest path to v)

While queue is not empty:
    Pop (u, u_count) from queue
    For each neighbor v of u:
        If dist[v] > dist[u] + 1:  (Found a shorter path to v)
            dist[v] = dist[u] + 1
            new_count = u_count + 1 if v ∈ U else u_count
            count[v] = new_count
            Push (v, new_count) into q
        Else if dist[v] == dist[u] + 1:  (Found another shortest path to v)
            new_count = u_count + 1 if v ∈ U else u_count
            If new_count > count[v]:  (Update count if this path has more nodes in U)
                count[v] = new_count
                Push (v, new_count) into q

If count[t] ≥ k, return True; otherwise, return False.
```
