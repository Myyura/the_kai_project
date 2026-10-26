---
sidebar_label: 2026年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Linked-List
  - Computer-Science.Data-Structures.Queue
  - Computer-Science.Data-Structures.Stack
  - Discrete-Mathematics.Graph-Algorithms.Breadth-First-Search
  - Discrete-Mathematics.Graph-Algorithms.Depth-First-Search
---

# 電気通信大学 情報理工学研究科 情報学専攻 2026年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

shank (co-authored with GPT 6.1 SOL)

## **Description**

### 問1

下記の C 言語のコードを用いて，以下の問いに答えなさい。なお，`malloc` は新しいメモリ領域を確保し，`free` はその領域を解放する関数とする。また，`NULL` はヌルポインタを表すものとする。

```c
typedef struct node {
    int value;
    struct node *next;
} Node;

typedef struct {
    Node *p1, *p2;
} Data;

typedef enum { MODE_1, MODE_2 } Mode;

void add(Data *d, int x, Mode mode) {
    Node *p = malloc(sizeof(Node));
    p->value = x;
    p->next = NULL;

    if (mode == MODE_1) {
        if (d->p2 == NULL) d->p1 = d->p2 = p;
        else { d->p2->next = p; d->p2 = p; }
    } else {
        p->next = d->p1;
        d->p1 = p;
        if (d->p2 == NULL) d->p2 = p;
    }
}

void init(Data *d) {  // 初期化
    d->p1 = d->p2 = NULL;
}

int get(Data *d) {  // d->p1 != NULL とする
    Node *p = d->p1;
    int x = p->value;
    d->p1 = p->next;

    if (d->p1 == NULL) d->p2 = NULL;
    // A行（↑）

    free(p);
    return x;
}
```

1. `init(&d)`, `add(&d, 1, MODE_1)`, `add(&d, 2, MODE_1)`, `add(&d, 3, MODE_1)` を順に実行した場合，`d.p1` 及び `d.p2` が指すノードの値（`value`）を答えなさい。
2. `init(&d)`, `add(&d, 1, MODE_2)`, `add(&d, 2, MODE_1)`, `add(&d, 3, MODE_1)`, `get(&d)`, `add(&d, 4, MODE_1)`, `get(&d)` を順に実行した場合，各 `get(&d)` の戻り値と，`d.p1` が指すノードの値（`value`）を答えなさい。
3. `init(&d)`, `add(&d, 1, MODE_1)`, `add(&d, 2, MODE_1)`, `add(&d, 3, MODE_2)`, `get(&d)` を順に実行した場合，`get(&d)` の戻り値を答えなさい。
4. `init(&d)`, `add(&d, 1, MODE_1)`, `add(&d, 2, MODE_1)`, `add(&d, 3, MODE_2)`, `add(&d, 4, MODE_2)`, `add(&d, 5, MODE_1)`, `get(&d)` を順に実行した場合，`get(&d)` の戻り値を答えなさい。
5. A行の `if` 文を削除した場合，(a)「`p2` の状態がどのようになるか」及び (b)「最後の要素を `get(&d)` により取り出した後，`add(&d, ..., MODE_1)` 実行時に，具体的にどのような問題が発生するか」について説明しなさい。

確保（allocate），解放（free），戻り値（return value）

### 問2

問1で示したコードに加えて，下記の C 言語のコードを用いて，以下の問いに答えなさい。なお，`adj` は有向グラフにおいて各頂点から直接たどれる頂点の並びを表す配列であり，`adj[v]` は頂点 `v` から直接たどれる頂点のリストを指す。また，`add_edge(u, v)` は，頂点 `u` から頂点 `v` への辺を追加する関数である。本問では，下記の初期化コードに従ってグラフが構築されているものとする。また `search(start, goal, mode)` は，`start` から探索を開始し，`goal` が見つかったときに値を返す関数である。

```c
#define N 6  // 頂点数

Node *adj[N] = {NULL};  // 頂点リスト

void add_edge(int u, int v) {
    Node *p = malloc(sizeof(Node));
    p->value = v;
    p->next = adj[u];
    adj[u] = p;
}

int empty(Data *d) {  // 空判定
    return d->p1 == NULL;
}
```

```c
// 初期化コード
add_edge(0, 2);
add_edge(0, 1);

add_edge(1, 5);
add_edge(1, 3);
add_edge(1, 2);

add_edge(2, 4);

add_edge(3, 5);

add_edge(4, 1);
add_edge(4, 5);
```

```c
int search(int start, int goal, Mode mode) {
    int visited[N] = {0}, dist[N], i, v, w;
    Data d;
    Node *p;

    init(&d);
    for (i = 0; i < N; i++) dist[i] = -1;

    add(&d, start, mode);
    visited[start] = 1;
    dist[start] = 0;

    while (!empty(&d)) {
        v = get(&d);  // C行

        if (v == goal) return dist[v];

        for (p = adj[v]; p != NULL; p = p->next) {
            w = p->value;
            if (!visited[w]) {
                visited[w] = 1;
                dist[w] = dist[v] + 1;
                add(&d, w, mode);  // B行
            }
        }
    }
    return -1;
}
```

1. `adj[0]` および `adj[1]` が指す頂点リストを先頭から順に示しなさい。
2. `search(0, 5, MODE_1)` の戻り値を答えなさい。また，B行が呼ばれる回数を答えなさい。
3. (2) を実行するとき，C行で `get(&d)` によって取り出される頂点を順に答えなさい。
4. `search(0, 5, MODE_2)` の戻り値を答えなさい。また，B行が呼ばれる回数を答えなさい。
5. 以上の結果を踏まえて，`search(0, 5, MODE_1)` の戻り値が表すものを，簡潔に答えなさい。

有向グラフ（directed graph），頂点（vertex）

#### 题目描述

##### 问1

使用上文问1给出的 C 语言代码，回答以下问题。其中，`malloc` 用于分配新的内存区域，`free` 用于释放该区域，`NULL` 表示空指针。代码中的 `init` 用于初始化；调用 `get` 时假定 `d->p1 != NULL`。本节沿用上文的全部结构体、枚举、函数定义及 A 行标记。

1. 按顺序执行 `init(&d)`、`add(&d, 1, MODE_1)`、`add(&d, 2, MODE_1)`、`add(&d, 3, MODE_1)` 后，写出 `d.p1` 和 `d.p2` 所指向节点的值（`value`）。
2. 按顺序执行 `init(&d)`、`add(&d, 1, MODE_2)`、`add(&d, 2, MODE_1)`、`add(&d, 3, MODE_1)`、`get(&d)`、`add(&d, 4, MODE_1)`、`get(&d)` 后，写出每次 `get(&d)` 的返回值，以及最终 `d.p1` 所指向节点的值（`value`）。
3. 按顺序执行 `init(&d)`、`add(&d, 1, MODE_1)`、`add(&d, 2, MODE_1)`、`add(&d, 3, MODE_2)`、`get(&d)` 时，写出 `get(&d)` 的返回值。
4. 按顺序执行 `init(&d)`、`add(&d, 1, MODE_1)`、`add(&d, 2, MODE_1)`、`add(&d, 3, MODE_2)`、`add(&d, 4, MODE_2)`、`add(&d, 5, MODE_1)`、`get(&d)` 时，写出 `get(&d)` 的返回值。
5. 如果删除 A 行的 `if` 语句，请说明：(a) `p2` 将处于什么状态；(b) 通过 `get(&d)` 取出最后一个元素后，再执行 `add(&d, ..., MODE_1)` 时，具体会发生什么问题。

术语：分配（allocate）、释放（free）、返回值（return value）。

##### 问2

在问1代码的基础上，使用上文问2给出的 C 语言代码回答以下问题。`adj` 是一个数组，用于表示有向图中从各顶点可以直接到达的顶点序列；`adj[v]` 指向从顶点 `v` 可以直接到达的顶点链表。`add_edge(u, v)` 用于添加从顶点 `u` 指向顶点 `v` 的边。本题中顶点数为 `N = 6`，图按照以下初始化代码构建，调用顺序与上文相同：

```c
add_edge(0, 2);
add_edge(0, 1);

add_edge(1, 5);
add_edge(1, 3);
add_edge(1, 2);

add_edge(2, 4);

add_edge(3, 5);

add_edge(4, 1);
add_edge(4, 5);
```

`search(start, goal, mode)` 从 `start` 开始搜索，并在找到 `goal` 时返回一个值。本节使用上文相同的 `add_edge`、`empty` 和 `search` 函数定义，以及 B 行、C 行标记。

1. 从链表头开始，按顺序写出 `adj[0]` 和 `adj[1]` 所指向的顶点链表。
2. 写出 `search(0, 5, MODE_1)` 的返回值，以及 B 行被调用的次数。
3. 执行 (2) 时，按顺序写出 C 行中通过 `get(&d)` 取出的顶点。
4. 写出 `search(0, 5, MODE_2)` 的返回值，以及 B 行被调用的次数。
5. 根据以上结果，简要说明 `search(0, 5, MODE_1)` 的返回值所表示的含义。

术语：有向图（directed graph）、顶点（vertex）。

## **Kai**

### 問1

`p1` は連結リストの先頭，`p2` は末尾を指す。`MODE_1` の `add` は末尾への追加，`MODE_2` の `add` は先頭への追加であり，`get` は常に先頭の要素を取り出す。

#### (1)

リストは先頭から $1\to2\to3$ となるので，`d.p1` の指す値は **1**，`d.p2` の指す値は **3** である。

#### (2)

最初の 3 回の `add` の後は $1\to2\to3$ である。各操作後のリストは次のようになる。

| 操作 | 戻り値 | 操作後のリスト（先頭から） |
| --- | --- | --- |
| 1 回目の `get(&d)` | $1$ | $2\to3$ |
| `add(&d, 4, MODE_1)` | — | $2\to3\to4$ |
| 2 回目の `get(&d)` | $2$ | $3\to4$ |

したがって，`get` の戻り値は順に **1，2**，最後に `d.p1` が指す値は **3** である。

#### (3)

`get` の直前のリストは $3\to1\to2$ なので，戻り値は **3** である。

#### (4)

`get` の直前のリストは $4\to3\to1\to2\to5$ なので，戻り値は **4** である。

#### (5)

(a) 最後のノードを取り出すと `p1` は `NULL` になるが，A 行がなければ `p2` はそのノードを指したままである。続く `free(p)` によってノードが解放されるため，`p2` は解放済み領域を指すダングリングポインタとなる。

(b) 次の `add(&d, ..., MODE_1)` は `p2 != NULL` と判断し，`d->p2->next = p` を実行しようとする。これは解放済み領域へのアクセスであり，未定義動作を引き起こす。また，空リスト用の分岐を通らないので `p1` を新しいノードに設定できず，リストの整合性も失われる。A 行は，空リストでは `p1` と `p2` の両方を `NULL` にするために必要である。

### 問2

#### (1)

`add_edge` は新しい隣接頂点をリストの先頭に追加するので，呼び出した順序とは逆順になる。

$$
\mathrm{adj}[0]:\ 1\to2,\qquad
\mathrm{adj}[1]:\ 2\to3\to5.
$$

#### (2)

`MODE_1` ではデータ構造が FIFO キューとなる。探索開始時の頂点 $0$ の追加は B 行によるものではない。B 行で追加される頂点を処理順に追うと，次のようになる。

| C 行で取り出した頂点 | B 行で追加される頂点 | 追加時に設定される距離 |
| --- | --- | --- |
| $0$ | $1,2$ | ともに $1$ |
| $1$ | $3,5$ | ともに $2$ |
| $2$ | $4$ | $2$ |
| $3$ | なし | — |
| $5$ | なし（直ちに戻る） | — |

したがって，戻り値は **2**，B 行の呼び出し回数は **5 回** である。

#### (3)

C 行で取り出される頂点は，順に

$$
\boxed{0,\ 1,\ 2,\ 3,\ 5}
$$

である。頂点 $5$ を取り出した時点で関数が戻るため，キューに残っている頂点 $4$ は取り出されない。

#### (4)

`MODE_2` では先頭への追加と先頭からの取り出しを行うため，LIFO スタックとなる。スタックを先頭から表示すると，探索は次のように進む。

| C 行で取り出した頂点 | B 行で追加される頂点（実行順） | 処理後のスタック（先頭から） |
| --- | --- | --- |
| $0$ | $1,2$ | $2\to1$ |
| $2$ | $4$ | $4\to1$ |
| $4$ | $5$ | $5\to1$ |
| $5$ | なし（直ちに戻る） | $1$ |

`visited` は取り出し時ではなく追加時に立つため，頂点 $4$ から隣接頂点 $1$ を調べても再追加されない。頂点 $5$ には $0\to2\to4\to5$ に沿って距離が設定される。よって，戻り値は **3**，B 行の呼び出し回数は **4 回** である。

#### (5)

`MODE_1` は幅優先探索であり，始点からの距離が小さい順に頂点を取り出す。したがって，戻り値は **頂点 0 から頂点 5 への最短有向路の辺数** を表し，本問では $0\to1\to5$ の **2** である。
