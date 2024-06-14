---
comments: false
title: 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2017年8月実施 プログラミング
tags:
  - Nagoya-University
  - Queue
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2017年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
ソースコード１は整数の集まりを操作するためのデータ構造を扱うC言語プログラムである. このプログラムについて以下の問いに答えよ. 

(1) ソースコード１を実行した際に標準出力に出力される文字列を書け. 

(2) ポインタ head から参照される整数の集まりは, 関数 insert, top, eliminate が実現している操作の下でどのようなデータ構造をなしているか？下記の中から最も適切なものを１つ選択しよ. 

$$
\text{(a) LIFO    (b) FIFO    (c) ヒープ    (d) 2分木    (e) DAG}
$$

(3) 関数 top はポインタ head の値が NULL であるときに -1 を返す. この実装では, 保持されているデータが存在するかどうかを関数 top が返す値から必ずしも正しく判断できない. 正しく判断できない場合を３０文字（英語の場合は２０単語）以内で説明せよ. 

(4) ソースコード１では関数 insert によってデータ追加するときに全てのデータを走査する必要があり効率が悪い. 
これを改善する方法として, ポインタ head とは別の末端の要素のアドレスを保持するポインタ tail を導入して以下のように改変することが考えられる. 
以下の `[ 空欄 (ア) ]` ~ `[ 空欄 (ス) ]` を埋めて関数 insert, eliminate を完成させよ. 

- 11 行目に以下の文を追加する.

    CELL tail = NULL;

- 関数 insert, eliminate のソースコードを以下のように変更する. 

```text
void insert(int i) {
    CELL c = (CELL) malloc(sizeof(struct cell));
    c->num = i; c->next = NULL;
    if (tail != NULL) {
        [ 空欄 (ア) ] = [ 空欄 (イ) ];
    } else {
        [ 空欄 (ウ) ] = [ 空欄 (エ) ];
    }
    [ 空欄 (オ) ] = [ 空欄 (カ) ];
}

void eliminate() {
    if (head != NULL) {
        if ([ 空欄 (キ) ] != NULL) {
            [ 空欄 (ク) ] = [ 空欄 (ケ) ];
        } else {
            [ 空欄 (コ) ] = [ 空欄 (サ) ];
            [ 空欄 (シ) ] = [ 空欄 (ス) ];
        }
    }
}
```

(5) ソースコード１の関数 eliminate ではメモリ領域を解放すべきところ解放していない. 
適当な２行を追加して, 不要になったメモリ領域を解放するように修正せよ. 
なお, 解答は「〇〇行目と次の行の間に△△を挿入」という形式で記し, 追加する２行が連続していない場合は追加する行ごとに「〇〇行目と次の行の間に△△を挿入」という形式で記すこと. 
また, メモリ解放には標準ライブラリ関数である free を使用すること. 

(6) 保持するデータの個数の最大数を決められる場合には, ソースコード１のような動的にサイズが変化するデータ構造ではなく, 配列を用いても同様に処理を実現できる. 
ソースコード１の実行結果と一致するように, ソースコード２の中の `[ 空欄 (セ) ]` ~ `[ 空欄 (タ) ]` を埋めよ. 

#### <center> ソースコード１
```text
#include <stdio.h>
#include <stdlib.h>

struct cell {
    int num;
    struct cell *next;
};

typedef struct cell *CELL;
CELL head = NULL;

void insert(int i) {
    CELL c = (CELL) malloc(sizeof(struct cell));
    CELL tmp = head;
    c->num = i; c->next = NULL;

    if (head != NULL) {
        while (tmp->next != NULL) tmp = tmp->next;
        tmp->next = c;
    } else {
        head = c;
    }
}

int top() {
    if (head != NULL) {
        return head->num;
    } else {
        return -1;
    }
}

void eliminate() {
    if (head != NULL) {
        head = head->next;
    }
}

void display() {
    CELL tmp = head;
    while (tmp != NULL) {
        printf("%d;", tmp->num);
        tmp = tmp->next;
    }
    printf("\n");
}

int main() {
    insert(0); insert(4); insert(9); insert(3);
    display();
    printf("%d\n", top());
    eliminate(); eliminate(); insert(7); insert(2);
    display();
    return 0;
}
```

#### <center> ソースコード２
```text
#include <stdio.h>
#include <stdlib.h>

#define MAX 5

int ar[MAX];

int head = 0;
int cnt = 0;

void insert(int i) {
    if (cnt >= MAX) {
        printf("error\n");
        exit(1);
    }
    ar[[ 空欄 (セ) ]] = i;
    cnt++;
}

int top() {
    if (cnt > 0) {
        return ar[head];
    } else {
        return -1;
    }
}

void eliminate() {
    if (cnt > 0) {
        head = [ 空欄 (ソ) ];
        cnt--;
    }
}

void display() {
    int i = 0;
    while (i < cnt) {
        printf("%d;", ar[[ 空欄 (タ) ]]);
        i++;
    }
    printf("\n");
}

int main() {
    insert(0); insert(4); insert(9); insert(3);
    display();
    printf("%d\n", top());
    eliminate(); eliminate(); insert(7); insert(2);
    display();
    return 0;
}
```

## **Kai**
### (1)
```text
0;4;9;3;
0
9;3;7;2;
```

### (2)
(b) FIFO

### (3)
The case when `head != NULL` and `head->num` is -1.

### (4)
- \[ 空欄 (ア) \]: tail->next
- \[ 空欄 (イ) \]: c
- \[ 空欄 (ウ) \]: head
- \[ 空欄 (エ) \]: c
- \[ 空欄 (オ) \]: tail
- \[ 空欄 (カ) \]: c
- \[ 空欄 (キ) \]: head->next
- \[ 空欄 (ク) \]: head
- \[ 空欄 (ケ) \]: head->next
- \[ 空欄 (コ) \]: head
- \[ 空欄 (サ) \]: head->next
- \[ 空欄 (シ) \]: tail
- \[ 空欄 (ス) \]: NULL

### (5)
- insert `CELL tmp = head;` after line 34
- insert `free(tmp);` after line 35

### (6)
- \[ 空欄 (セ) \]: head + cnt
- \[ 空欄 (ソ) \]: head + 1
- \[ 空欄 (タ) \]: head + i
