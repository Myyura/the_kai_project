---
sidebar_label: 2021年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Queue
  - Discrete-Mathematics.Graph-Algorithms.Breadth-First-Search
---

# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2021年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

要素数の上限が `max` の循環キューを配列 `queue[max+1]` で表す。`head` は先頭、`tail` は末尾の次の位置を表し、初期値はともに 0 である。整数を追加する `put` と、先頭要素を取り出す `get` を書け。空キューと満杯時の処理は不要である。

### 問2

頂点を $1,\ldots,N$、辺を $N+1,\ldots,N+M$ と番号付けし、配列 `number` と `next` で有向グラフの隣接リストを表す。`next[i]` は頂点 $i$ の最初の辺、`number[k]` は辺 $k$ の終点、`next[k]` は同じリストの次の辺を表し、末尾は 0 とする。

図の頂点は $1,\ldots,5$、辺は順に

$$
(1,3),(1,5),(2,1),(2,3),(3,4),(4,1),(5,4)
$$

であり、辺番号は $6,\ldots,12$ である。

1. このグラフの `number` と `next` を示せ。隣接リスト内の順序は任意とする。
2. 辺配列 `E[k].s`, `E[k].t` からこの表現を構成する `construct` の本体を書け。
3. 空のキューへ始点を入れて訪問済みにし、取り出した頂点の隣接リストを順に走査して、未訪問の頂点を訪問済みにしてキューへ入れる幅優先探索 `visit(1)` を行う。キューから取り出される頂点順を答えよ。

### 题目描述

用长度为容量加一的数组实现循环队列；再用顶点项和边项共用的两个数组表示有向图的邻接表，编写从边表建立邻接表的代码，并给出从顶点 1 开始的广度优先搜索出队顺序。

## **Kai**

### 問1

```c
void put(int v) {
    queue[tail] = v;
    tail = (tail + 1) % (max + 1);
}

int get(void) {
    int v = queue[head];
    head = (head + 1) % (max + 1);
    return v;
}
```

### 問2

#### (ア)

各隣接リストを問題文の辺順に並べると、次の表になる。頂点行の `number` は使用しないので 0 とした。

| $k$ | `number[k]` | `next[k]` |
|---:|---:|---:|
| 1 | 0 | 6 |
| 2 | 0 | 8 |
| 3 | 0 | 10 |
| 4 | 0 | 11 |
| 5 | 0 | 12 |
| 6 | 3 | 7 |
| 7 | 5 | 0 |
| 8 | 1 | 9 |
| 9 | 3 | 0 |
| 10 | 4 | 0 |
| 11 | 1 | 0 |
| 12 | 4 | 0 |

#### (イ)

各辺を対応する隣接リストの先頭へ挿入すればよい。

```c
void construct(struct edge E[M+1]) {
    for (int k = 1; k <= N+M; k++) {
        number[k] = 0;
        next[k] = 0;
    }
    for (int k = 1; k <= M; k++) {
        int e = N + k;
        number[e] = E[k].t;
        next[e] = next[E[k].s];
        next[E[k].s] = e;
    }
}
```

#### (ウ)

(ア) の隣接順を用いると、出隊順は

$$
\boxed{1,3,5,4}
$$

であり、頂点 2 は到達不能である。頂点 1 のリストを逆順にした場合は $1,5,3,4$ となる。
