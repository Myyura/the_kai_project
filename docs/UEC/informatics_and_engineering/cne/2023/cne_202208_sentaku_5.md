---
sidebar_label: 2022年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Data-Structures.Priority-Queue
  - Discrete-Mathematics.Graph-Algorithms.Dijkstra-Algorithm
  - Computer-Science.Programming.Recursion
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

空の二分最小ヒープへ $10,8,2,5,3,6$ の順に挿入した結果を根から幅優先順の配列で示し、根を取り出す手順を説明せよ。

また、頂点集合 $V=\{0,1,2,3,4\}$、重み付き無向辺

$$
01:4,\quad02:2,\quad12:3,\quad13:2,\quad14:4,\quad23:6,\quad34:1
$$

からなるグラフに、始点 $s=0$ として次の Dijkstra 法を適用し、最短距離の確定順を求めよ。

```text
1  d[s] = 0; 他の頂点 v では d[v] = ∞
2  // 経路復元時には、すべての p[v] を NULL で初期化
3  Q = V
4  while Q ≠ ∅:
5      d[u] が最小の頂点 u を Q から取り出す
6      u に隣接する各頂点 v ∈ Q について:
7          if d[v] > d[u] + w(u,v):
8              d[v] = d[u] + w(u,v)
9              // 経路復元時には p[v] = u
```

行 2、9 を追加した先行頂点配列 $p$ から、終点から始点まで最短経路を逆順出力する再帰関数を示せ。最後に、行 6 の $v\in Q$ を $v\in V$ として $Q$ をヒープで実装するとき、各行で必要なヒープ操作を示せ。

### 题目描述

求二叉最小堆依次插入后的数组及删除根节点的步骤；在给定图上执行 Dijkstra 算法，递归逆序输出最短路，并指出改用堆后各行需要的堆操作。

## **Kai**

### (1)

各要素を挿入するたびに親と比較して上方へ移動する。最終的に、

$$
\boxed{A=(2,3,6,10,5,8)}.
$$

### (2)

根の値を保存し、末尾ノードを根へ移して末尾を削除する。その後、左右の子のうち値が小さい方と比較し、親の方が大きければ交換する。この操作をヒープ条件が回復するまで下向きに繰り返し、保存した値を返す。

### (3)

頂点 $0$ からの最短距離が確定する順は、

$$
\boxed{0:0,\quad 2:2,\quad 1:4,\quad 3:6,\quad 4:7}.
$$

### (4)

到達可能であることを仮定すれば、次の再帰関数で逆順に出力できる。

```c
void print_reverse(int s, int v, int p[]) {
    printf("%d ", v);
    if (v != s) print_reverse(s, p[v], p);
}
```

### (5)

必要なヒープ操作は次のとおりである。

| 行 | 処理 | ヒープ操作 |
|---:|---|---|
| 3 | $V$ の全頂点を $Q$ に入れる | ノードの追加 |
| 4 | $Q\ne\varnothing$ を判定する | ヒープが空かどうかの確認 |
| 5 | 最小の $d[u]$ をもつ頂点を取り出す | 根ノードの取出し |
| 8 | $d[v]$ を小さい値に変更する | ノードの値の更新 |

行 8 の更新後には、頂点 $v$ を親方向へ移動してヒープ条件を回復する。
