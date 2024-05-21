---
comments: false
title: 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2015年8月実施 プログラミング
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2015年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
２分木は各頂点が高々２つの頂点を子に持つ根付き木である。２分木の各項点はデータを保持し, その子は左右で区別される.
以下では各頂点がデータとして整数を保持する２分木を考える.
図１に２分木の例を示す.

```text
                    (12)                                (7)
                  /      \                            /     \
                (5)      (17)                       (2)    (14)
               /   \                                  \       \ 
             (1)   (9)                                (5)     (18)
```

#### <center> 図１: 2分木の例

C言語プログラムでは以下に定義される構造体により２分木を表現することができる.

    struct vertex {
        int value;
        struct vertex *left;
        struct vertex *right;
    };

この構造体は１つの頂点を表現しその頂点が保持する整数を格納するメンバ value, 左の子へのポインタを格納するメンバ left, 右の子へのポインタを格納するメンバ right から機成される.
この構造体で表現された頂点の左の子, 右の子が存在しない場合はメンバ left, right にそれぞれ値 NULL を代入する。

ソースコード１は上述の構造体を利用して表現された２分木を取り扱うC言語プログラムである.
大域変数 tree は２分木を参照するポインタ変数であり, 宣言時の初期値を NULL とする.
すなわち, 頂点を持たない空の２分木を NULL で表す.
insert 関数, eliminate 関数はポインタ tree が指す２分木に対して引数で与えられた整数を保持する頂点をそれぞ挿入, 削除する関数である.
create 関数は引数で与えられた整数を保持する頂点を作成する関数である. 
display 関数は引数で与えられたポインタが指す２分木 (もしくは２分部分木) に対して頂点が保持する整数を先行順で出力する関数であり, 再帰的に定義されている.

ソースコード１について以下の問いに答えよ.

\[1\] main 関数を 18 行目の末尾まで実行した時点, ならびに 19 行目の末尾まで実行した時点におけるポインタ tree が指す２分木を図 1 の記法に従いそれぞれ図示せよ.

\[2\] 21 行目の末尾まで実行した時点において tree が指す２分木が図1 (b)に示される２分木の根を参照するように 21 行目にデータの挿入・削除の操作を記述したい. 21行目の `[ 空欄 (ア) ]` に書くべき命令の列を１つ示せ. ただし, 命令の列は以下の条件を満たすものとする.

- 命令は insert(x); または eliminate(x); のみである. ただし, x および y は整数である.
- insert 関数や eliminate 関数の引数に与えられる整数には同じものは高々1回しか現れない.

\[3\] 三項演算子 ? : は「式1 ? 式2 : 式3」」のように記述されて式を構成する.「式1」を評価した結果が 0 でない時は「式2」を, 0 である時は「式3」を評価した結果を式の値とする. 例えば, 式 `x <= 0 ? x+1 : x+2` を評価した値は x の値が -1 の時には 0 となり, 5 の時は 7 となる. この三項演算子を用いて, 53 行目から 58 行目のコード

    if (x < p->value)
        p = p->left;
    else
        p = p->right;

と同様の動作をする代入文を以下の `[ 空欄 (イ) ]` を埋めて完成させよ.

    p = [ 空欄 (イ) ]


\[4\] ソースコード１の eliminate 関数の定義にはメモり不正アクセスを発生させる可能性がある. 例えば, 19 行目と次の行の間で eliminate(10); を実行した場合に不正アクセスが発生する. eliminate 関数の定義の１箇所に命令を追加してその問題を解決せよ. なお, 解答は「〇〇行目と次の行の間に△△を挿入」という形式で記すこと.

\[5\] ソースコード１の eliminate 関数では不要になったメモリを解放していない. このままで挿入・削除の実行を繰り返した場合にどのような問題が起こりうるかを説明せよ. さらに, 不要になったメモリを解放するように, eliminate 関数の定義の中の2箇所にそれぞれ命令を追加せよ. 解答は「〇〇行目と次の行の間に△△を挿入」という形式で記せ. また, メモリの解放には標準ライブラリ関数である free 関数を使用すること.

\[6\] 21 行目の末尾まで実行した時点でポインタ tree が指す２分木は図 1(b) になっている。このあと, 2 行目を実行した際に出力される文字列を示せ.

\[7\] display 関数を実行した際に数が大きい順に出力されるようその定義を変更したい. 以下の関数定義の中の `[ 空欄 (ウ) ]` ~ `[ 空欄 (オ) ]` を埋めて変更せよ, 頂点に保持される整数を出力する場合には printf("%d,", p->value) を記述すること.

    void display(struct vertex *p) {
        if (p == NULL) return;
        [ 空欄 (ウ) ];
        [ 空欄 (エ) ];
        [ 空欄 (オ) ];
        return;
    }


\[8\] ２分木に指定した数が存在しているかどうか探索する member 関数を以下の要件を満たすように作成したい.

- 引数として整数 x を受け取る.
- ポインタ tree が指す２分木に x を保持する頂点が存在する場合には 1 を, そうでない場合には 0 を返す.

これらの条件を満たすように以下の関数定義の中の `[ 空欄 (カ) ]` ~ `[ 空欄 (ケ) ]` を埋めて member 関数の定義を完成させよ.

    int member(int x) {
        struct vertex *p;
        p = tree;
        while (p != NULL) {
            if ([ 空欄 (カ) ]) return 1;
            if ([ 空欄 (キ) ])
                [ 空欄 (ク) ];
            else
                [ 空欄 (ケ) ];
        }
        return 0;
    }


#### <center> ソースコード 1: 2分木を処理するC言語プログラム

```text
#include <stdio.h>
#include <stdlib.h>

struct vertex {
    int value;
    struct vertex *left;
    struct vertex *right;
};

struct vertex *tree = NULL;

struct vertex *create(int x);
void insert(int x);
void eliminate(int x);
void display(struct vertex *p);

int main() {
    insert(3); insert(12); insert(18); insert(11); insert(14);
    eliminate(12); insert(2); insert(3);
    insert(6); eliminate(3); insert(5);
    [ 空欄 (ア) ]
    display(tree);
    return 0;
}

struct vertex *create(int x) {
    struct vertex *p;
    p = (struct vertex *) malloc(sizeof(struct vertex));
    p->value = x;
    p->left = NULL;
    p->right = NULL;
    return p;
}

void insert (int x) {
    struct vertex *p;

    if (tree == NULL) {
        tree = create(x);
        return;
    }

    p = tree;
    do {
        if (p->value == x) break;
        else if (x < p->value && p->left == NULL ) {
            p->left = create(x);
            break;
        } else if (p->value < x && p->right == NULL) {
            p->right = create(x);
            break;
        }
        if (x < p->value)
            p = p->left;
        else
            p = p->right;
    } while (1);
    return;
}

void eliminate(int x) {
    struct vertex *f, *p, *q;

    p = tree;
    if (p == NULL) return;
    do {
        f = p;
        if (x < p->value)
            p = p->left;
        else if (p->value < x)
            p = p->right;
    } while (x != p->value);

    if (p->left == NULL || p->right == NULL) {
        if (p->right == NULL)
            q = p->left;
        else
            q = p->right;
        if (p == tree)
            tree == q;
        else {
            if (f->left == p)
                f->left = q;
            else
                f->right = q;
        }
    } else {
        q = p->right;
        f = q;
        while (q->left != NULL) {
            f = q;
            q = q->left;
        }
        p->value = q->value;
        if (q == f)
            p->right = q->right;
        else
            f->left = q->right;
    }
    return;
}

void display(struct vertex *p) {
    if (p == NULL) return;
    printf("%d,", p->value);
    display(p->left);
    display(p->right);
    return;
}
```

## **Kai**
### \[1\]

```text
                (3)                                    (3)
                   \                                /       \
                   (12)                           (2)       (14)
                 /      \                                  /    \
              (11)      (18)                            (11)    (18)
                       /                                 
                     (14)                             
```

### \[2\]
- [ 空欄 (ア) ]、 eliminate(11), insert(7), eliminate(6);

### \[3\]
- [ 空欄 (イ) ]、 x < p->value ? p->left : p->right;

### \[4\]
Insert `if (p == NULL) return;` after line 71.

### \[5\]
Insert `free(p)` after line 86.

Insert `free(q)` after line 98.

### \[6\]
7, 2, 5, 14, 18

### \[7\]
- [ 空欄 (ウ) ]、 display(p->left);
- [ 空欄 (エ) ]、 printf("%d,", p->value);
- [ 空欄 (オ) ]、 display(p->right);

### \[8\]
- [ 空欄 (カ) ]、 p->value == x
- [ 空欄 (キ) ]、 p->value > x
- [ 空欄 (ク) ]、 p = p->left
- [ 空欄 (ケ) ]、 p = p->right
