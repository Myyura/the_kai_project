---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
  - Graph-Theory
  - Shortest-Path-Problem
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目I 問題1

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs)

## **Description**
Consider the problem of finding the shortest paths in a weighted directed graph using Dijkstra’s algorithm. Denote the set of vertices as $V$, the number of vertices as $|V|$, the set of edges as $E$, and the number of edges as $|E|$.

Answer the following questions:

(1) Depict an example input data (with $|V| = 3$) for which Dijkstra’s algorithm does not correctly find the shortest paths.

(2) Below is a pseudo-code of the algorithm that computes the length $c[v]$ of the shortest path from the start node $s$ to each node $v$. Answer code to fill in the blank $\boxed{\ \ a\ \ }$.

```
Dijkstra(graph G = (V, E), start node s, length d(u, v) of each edge (u,v)) {
    c = an empty array; Q = an empty set;
    for (v in V)
        c[v] = ∞;
    c[s] = 0;
    for (v in V)
        add v to Q;
    while (Q is not empty) {
        v = a vertex v in Q that minimizes c[v];  // (i)
        remove v from Q;                          // (i)
        for (u in {destinations of edges outgoing from v})
            [  blank a  ]                               // (ii)
    }
}
```

(3) Consider the following graph with $S$ as the start node. Show how the values stored in the array $c$ change at each iteration of the `while` statement when the above algorithm is applied to the graph.


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/cs_201708_senmon_I_1_p1.png" width="200" height="200" alt=""/>
</figure>


(4) For each of the code fragments (i) and (ii) in the above pseudo-code, answer the total time spent in the code fragment during the whole run of the algorithm, using big $O$ notation. Here assume that it takes $O(|V|)$ time to execute code fragment (i) once.

(5) One can reduce the computational complexity of the algorithm by using a priority queue (binary heap) as $Q$. In that case, for each of the code fragments (i) and (ii) in the above pseudo-code, answer the total time spent in the code fragment during the whole run of the refined algorithm, using big $O$ notation.

## **Kai**
### (1)

```
s -- 3 -- a
 \       /
  4    -3
   \   /
     b
```

Dijkstra will find that the shortest path to $a$ is $3$, although it's $1$.

### (2)

```
if (c[v] + d(v,u) <= c[u]) {
    c[u] = c[v] + d(v,u);
}
```

### (3)

$$
\begin{array}{llll}
S & A     & B     & E     \\
\hline
0 & \infty & \infty & \infty \\
0 & 6     & 3     & 9     \\
0 & 5     & 3     & 9     \\
0 & 5     & 3     & 7     \\
0 & 5     & 3     & 7    
\end{array}
$$

### (4)
Each vertex is added to and removed from $Q$ exactly once.
Thus, (i) will run $|V|$ times, $O(|V|^2)$ in total.
It takes $O(1)$ to execute (ii) once.
In total, the for loop will iterate over all edges and every edge will be processed only once.
Hence, (ii) will execute $O(|E|)$ in total.


### (5)
We will keep vertices in a heap, ordered by $c[v]$.

- Building the heap takes $O(|V|)$
- Looking up a minimum takes $O(1)$ (i, line 1)
- Removing minimum takes  $O(\log|V|)$ (i, line 2)
- in (ii), we need to decrease key of an element in a heap. It takes $O(\log|V|)$

To conclude (i) takes  $O(|V|\log|V|)$. 
(ii) takes $O(|E|\log|V|)$