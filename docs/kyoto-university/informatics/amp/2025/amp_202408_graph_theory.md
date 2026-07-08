---
sidebar_label: 2024年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Graph-Theory-Combinatorial-Optimization.Graph-Algorithms.Breadth-First-Search
  - Graph-Theory-Combinatorial-Optimization.Combinatorial-Optimization.Shortest-Path-Problem
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

```text
dist[v] = -1
dist[s] = 0
V_0 = {s}
queue = [s]

while queue not empty:
    u = pop_front(queue)
    for v in N(u):
        if dist[v] == -1:
            dist[v] = dist[u] + 1
            add v to V_{dist[v]}
            push_back(queue, v)

d_max = max dist[v]
```

Since graph is connected, we have $O(E) \geq O(V)$. Hence the time complexity is $O(|V| + |E|) = O(|E|)$.

### (ii)

```text
sigma[v] = 0 for all v
sigma[s] = 1

for i = 0 to d_max - 1:
    for u in V_i:
        for v in N(u):
            if dist[v] == dist[u] + 1:
                sigma[v] += sigma[u]
```

### (iii)

```text
a[v] = 0 for all v
a[s] = 1

for i = 0 to d_max - 1:
    for u in V_i:
        for v in N(u):
            if dist[v] == dist[u] + 1 and v not in U:
                a[v] += a[u]

return sigma[t] - a[t]
```

### (iv)

```text
best[v] = -infinity for all v
best[s] = 0

for i = 0 to d_max - 1:
    for u in V_i:
        for v in N(u):
            if dist[v] == dist[u] + 1:
                gain = 1 if v in U else 0
                best[v] = max(best[v], best[u] + gain)

return best[t] >= k
```
