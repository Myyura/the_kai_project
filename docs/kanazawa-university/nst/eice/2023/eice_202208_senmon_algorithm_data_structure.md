---
sidebar_label: 2022年8月実施 専門科目 アルゴリズムとデータ構造
tags:
  - Kanazawa-University
  - Computer-Science.Data-Structures-Algorithms.Linked-List
  - Computer-Science.Data-Structures-Algorithms.Queue
  - Computer-Science.Data-Structures-Algorithms.Tower-of-Hanoi
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 専門科目 アルゴリズムとデータ構造

## **Author**
祭音Myyura

## **Description**

以下の設問に答えなさい。

### 問1
図1は，線形リストを用いてデータの集まりを操作する処理を，C 言語の記法に則り記述している。

```c
#include <stdio.h>
#include <stdlib.h>

struct nd {
    char data;
    struct nd *next;
};

struct tag {
    struct nd *head;
    struct nd *tail;
};

void input(char data, struct tag *list) {
    struct nd *new = malloc(sizeof(struct nd));
    new->data = data;
    new->next = NULL;

    if (list->head == NULL && list->tail == NULL) {
        list->head = new;
        list->tail = new;
    } else {
        list->tail->next = new;
        list->tail = new;
    }
}

char output(struct tag *list) {
    struct nd *tmp;
    char data = '\0';

    if (list->head != NULL) {
        data = list->head->data;
        tmp = list->head;
        list->head = list->head->next;
        if (list->head == NULL) list->tail = NULL;
        free(tmp);
    }

    return data;
}

int main(void) {
    struct tag list;
    char x;

    list.head = NULL; list.tail = NULL;  // ①
    input('a', &list);                   // ②
    input('b', &list);                   // ③
    input('c', &list);                   // ④
    x = output(&list);                   // ⑤
    x = output(&list);                   // ⑥

    return 0;
}
```

(1) 図1のプログラムを実行すると，プログラム中の ①〜⑥ の処理によって，線形リストの構造がどのように変化するか，①〜⑥ の各処理が終了した直後の構造を，図を用いて説明しなさい。

(2) 図1に示す input と output の二つの操作を持つデータ構造の名称を答えなさい。

(3) このデータ構造は配列でも実現できるが，線形リストを用いた場合との違いを説明しなさい。

(4) このようなデータ構造は，どのようなデータ処理で利用されているか，一例を挙げなさい。

### 問2
図2は固定された 3 本の棒 A, B, C のいずれかに，中心に穴が空いた大きさの異なる $n$ 枚の円盤すべてを大きい円盤が下となるように重ねた様子を表している。図2の例では 3 枚の円盤を，棒 A に重ねている。

これら $n$ 枚の円盤を以下のルールに従って，移動することとする。

一回の移動では，1 枚の円盤を必ず棒 A〜C のいずれかに移動する。
動かせる円盤は，一番上の円盤だけとする。動かす円盤は，どの棒から選んでもよい。
小さい円盤の上に大きな円盤を重ねてはならない。

$n$ 枚のうち $m$ 番目に小さい円盤 $(1\leq m\leq n)$ が棒 $X$ の一番上にあるとき，その円盤を棒 $Y$ に移動する操作を

`move(m,X,Y)`

$n$ 枚の円盤すべてを棒 $X$ から棒 $Y$ に最小回数で移動する操作を

`trans(n,X,Y)`

と定義する。ただし $X,Y$ は，棒 A, B, C の任意の2つを表す。

(1) 図2に示した 3 枚の円盤に対し，$\mathrm{trans}(3,A,B)$ を行う手順を，$\mathrm{move}(m,X,Y)$ を用いて示しなさい。

(2) $\mathrm{trans}(n,X,Y)$ に必要な移動回数を $a_n$ としたとき，$a_1$ の値および $n\geq 2$ における $a_n$ と $a_{n-1}$ の関係式を求めなさい。

(3) (2) で求めた関係式を用いて $a_n$ を $n$ で表しなさい。

## **Kai**
### 問1
#### (1)

① 実行直後

```
list.head = NULL
list.tail = NULL

head
 ↓
NULL

tail
 ↓
NULL
```

まだノードは存在しない。

② input('a', &list) 実行直後

```
head ─┐
      ↓
    +---+------+
    | a | NULL |
    +---+------+
      ↑
tail ─┘
```

データ 'a' を持つノードが 1 個作られる。head と tail は同じノードを指す。

③ input('b', &list) 実行直後

```
head
 ↓
+---+------+     +---+------+
| a | next | ──> | b | NULL |
+---+------+     +---+------+
                   ↑
                  tail
```

④ input('c', &list) 実行直後

```
head
 ↓
+---+------+     +---+------+     +---+------+
| a | next | ──> | b | next | ──> | c | NULL |
+---+------+     +---+------+     +---+------+
                                      ↑
                                     tail
```

⑤ x = output(&list) 実行直後

```
head
 ↓
+---+------+     +---+------+
| b | next | ──> | c | NULL |
+---+------+     +---+------+
                   ↑
                  tail
```

⑥ x = output(&list) 実行直後

```
head ─┐
      ↓
    +---+------+
    | c | NULL |
    +---+------+
      ↑
tail ─┘
```

#### (2)

- キュー
- FIFO
- 待ち行列

#### (3)
配列でキューを実現する場合，データを格納する領域をあらかじめ確保しておく必要がある。そのため，配列の大きさを超えるデータを格納することはできない。

一方，線形リストを用いた場合は，必要に応じてノードを動的に確保するため，メモリが許す範囲でデータ数を増減できる。

また，配列で単純に先頭要素を削除すると，残りの要素を前に詰める処理が必要になる場合がある。これに対して，線形リストでは `head` の指す位置を次のノードに変更すればよいので，先頭からの取り出しを効率よく行うことができる。

ただし，線形リストでは各ノードに `next` ポインタが必要であり，ポインタ分のメモリが余分に必要となる。また，各ノードがメモリ上に連続して配置されるとは限らないため，配列のような添字による直接アクセスはできない。

#### (4)
キューは，先に到着したデータを先に処理する場面で利用される。

例として，プリンタの印刷待ち行列が挙げられる。複数の印刷要求が発生したとき，先に送られた印刷データから順に処理するため，キューが利用される。

ほかにも，以下のような処理で利用される。

- OS におけるプロセスの待ち行列
- ネットワーク通信におけるパケットのバッファ
- 幅優先探索における探索待ち頂点の管理

### 問2
#### (1)
3 枚の円盤を棒 A から棒 B へ移動する。
補助の棒として C を用いる。

手順は次の通りである。

```
move(1, A, B)
move(2, A, C)
move(1, B, C)
move(3, A, B)
move(1, C, A)
move(2, C, B)
move(1, A, B)
```

したがって，`trans(3,A,B)` は上の 7 回の `move` によって実現できる。

#### (2)
まず，円盤が 1 枚の場合は，その 1 枚を棒 $X$ から棒 $Y$ に移動すればよい。
したがって，

$$
a_1 = 1
$$

である。

次に，$n$ 枚の円盤を棒 $X$ から棒 $Y$ に移動する場合を考える。残りの棒を $Z$ とする。
$n$ 枚の円盤を移動するには，次の 3 段階が必要である。

- 上の $n-1$ 枚を棒 $X$ から棒 $Z$ に移動する。
- 一番大きい円盤を棒 $X$ から棒 $Y$ に移動する。
- 棒 $Z$ にある $n-1$ 枚を棒 $Y$ に移動する。

したがって，必要な移動回数は

$$
a_n = a_{n-1} + 1 + a_{n-1} = 2a_{n-1} + 1 \quad (n \ge 2)
$$

となる。

#### (3)

$$
a_n = 2^n - 1
$$
