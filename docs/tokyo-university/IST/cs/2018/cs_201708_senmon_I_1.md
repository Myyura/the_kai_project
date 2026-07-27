---
sidebar_label: 2017年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
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

### 题目描述

考虑在带权有向图上用 Dijkstra 算法求最短路径。顶点集记为 $V$、顶点数为
$|V|$，边集记为 $E$、边数为 $|E|$。回答下列问题。

（1）画出一个 $|V|=3$ 的输入图，使 Dijkstra 算法不能正确求出最短路径。

（2）题中伪代码用数组 $c[v]$ 计算起点 $s$ 到各顶点 $v$ 的最短路径长度。填写空白
$\boxed{a}$，即写出从当前取出的顶点 $v$ 沿出边到达 $u$ 时应执行的松弛操作。

（3）以 $S$ 为起点，对题图运行该算法，展示 `while` 循环每次迭代时数组
$c$ 中各值的变化。

（4）分别用大 $O$ 记号给出整个算法运行过程中代码片段（i）和（ii）的总耗时。这里假设片段（i）每执行一次需 $O(|V|)$ 时间。

（5）若用优先队列（二叉堆）实现 $Q$ 以降低复杂度，再分别给出改进算法中片段（i）和（ii）的总耗时。

#### 考点

- **Dijkstra 算法的适用条件**：通过含负权边的反例理解贪心确定最短距离所需的非负权假设。
- **边松弛与执行跟踪**：填写距离更新语句，并逐轮跟踪暂定距离数组。
- **最短路复杂度**：比较顺序扫描与二叉堆实现优先队列时取最小值、删除和更新键值的总成本。

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
