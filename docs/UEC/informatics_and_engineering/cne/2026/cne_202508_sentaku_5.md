---
sidebar_label: 2025年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Graph-Theory.Spanning-Tree
  - Discrete-Mathematics.Graph-Algorithms.Kruskal-Algorithm
  - Discrete-Mathematics.Graph-Algorithms.Depth-First-Search
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

非負の辺重みをもつ無向連結グラフを考える。与えられた 4 頂点グラフの最小重み Hamilton 閉路と Kruskal 法による最小全域木を求めよ。また、最小全域木を用いると、最小重み Hamilton 閉歩道の 2 近似解が得られることを示せ。

### 题目描述

对一个四顶点非负权无向连通图，求最小权 Hamilton 回路和 Kruskal 最小生成树；并证明最小生成树权重不超过最优 Hamilton 闭途，以及深度优先遍历给出 2 近似。

## **Kai**

### (1)

頂点 $b$ に接続する辺は $ab,bc$ のみであるから、Hamilton 閉路は

$$
a\to b\to c\to d\to a
$$

のみである。その重みは

$$
3+1+4+10=\boxed{18}.
$$

### (2)

辺を重み順に並べると

$$
bc(1),\ ac(2),\ ab(3),\ cd(4),\ ad(10)
$$

である。Kruskal 法では $bc,ac$ を追加し、閉路を作る $ab$ を除外し、$cd$ を追加する。したがって、

$$
\boxed{T=\{bc,ac,cd\}},\qquad \delta(T)=1+2+4=7.
$$

$ad$ も閉路を作るため追加しない。

### (3)

最小重み Hamilton 閉歩道の重みを $w^*$ とする。この閉歩道が用いる辺から閉路を順次除くと全域木 $T$ が得られる。辺重みは非負であるから、

$$
\delta(T)\leq w^*.
$$

よって最小全域木 $T^*$ について

$$
\boxed{\delta(T^*)\leq w^*}
$$

である。

### (4)

$T^*$ を深さ優先探索し、各辺を往復すれば、全頂点を通る閉歩道 $c^*$ を得る。各辺はちょうど 2 回通るから、

$$
\boxed{\delta(c^*)=2\delta(T^*)\leq2w^*}.
$$
