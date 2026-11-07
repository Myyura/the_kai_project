---
sidebar_label: 2015年8月実施 プログラミング
tags:
  - Nagoya-University
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Programming.Dynamic-Memory-Allocation
  - Computer-Science.Programming.Pointers-and-Arrays
  - Computer-Science.Programming.Recursion
---

# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 プログラミング

## **Author**

祭音Myyura

## **Description**

外国人留学生は英語で解答してよい。

２分木は各頂点が高々２つの頂点を子に持つ根付き木である.
２分木の各頂点はデータを保持し, その子は左右で区別される.
以下では各頂点がデータとして整数を保持する２分木を考える.
図１に２分木の例を示す.

![図1：2分木の例](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/is/2016/is_201508_programming_figure1.png)

C言語プログラムでは以下に定義される構造体により２分木を表現することができる.

```c
struct vertex {
    int value;
    struct vertex *left;
    struct vertex *right;
};
```

この構造体は１つの頂点を表現しその頂点が保持する整数を格納するメンバ value, 左の子へのポインタを格納するメンバ left, 右の子へのポインタを格納するメンバ right から構成される.
この構造体で表現された頂点の左の子, 右の子が存在しない場合はメンバ left, right にそれぞれ値 NULL を代入する. 

ソースコード１は上述の構造体を利用して表現された２分木を取り扱うC言語プログラムである.
大域変数 tree は２分木を参照するポインタ変数であり, 宣言時の初期値を NULL とする.
すなわち, 頂点を持たない空の２分木を NULL で表す.
insert 関数, eliminate 関数はポインタ tree が指す２分木に対して引数で与えられた整数を保持する頂点をそれぞれ挿入, 削除する関数である.
create 関数は引数で与えられた整数を保持する頂点を作成する関数である. 
display 関数は引数で与えられたポインタが指す２分木 (もしくは２分部分木) に対して頂点が保持する整数を先行順で出力する関数であり, 再帰的に定義されている.

ソースコード１について以下の問いに答えよ.

\[1\] main 関数を 18 行目の末尾まで実行した時点, ならびに 19 行目の末尾まで実行した時点におけるポインタ tree が指す２分木を図 1 の記法に従いそれぞれ図示せよ.

\[2\] 21 行目の末尾まで実行した時点において tree が指す２分木が図1 (b)に示される２分木の根を参照するように 21 行目にデータの挿入・削除の操作を記述したい. 21行目の `[ 空欄 (ア) ]` に書くべき命令の列を１つ示せ. ただし, 命令の列は以下の条件を満たすものとする.

- 命令は insert(x); または eliminate(y); のみである. ただし, x および y は整数である.
- insert 関数や eliminate 関数の引数に与えられる整数には同じものは高々1回しか現れない.

\[3\] 三項演算子 ? : は「式1 ? 式2 : 式3」のように記述されて式を構成する.「式1」を評価した結果が 0 でない時は「式2」を, 0 である時は「式3」を評価した結果を式の値とする. 例えば, 式 `x <= 0 ? x+1 : x+2` を評価した値は x の値が -1 の時には 0 となり, 5 の時は 7 となる. この三項演算子を用いて, 53 行目から 56 行目のコード

```c
if (x < p->value)
    p = p->left;
else
    p = p->right;
```

と同様の動作をする代入文を以下の `[ 空欄 (イ) ]` を埋めて完成させよ.

```c
p = [ 空欄 (イ) ];
```

\[4\] ソースコード１の eliminate 関数の定義にはメモリへの不正アクセスを発生させる可能性がある. 例えば, 19 行目と次の行の間で eliminate(10); を実行した場合に不正アクセスが発生する. eliminate 関数の定義の１箇所に命令を追加してその問題を解決せよ. なお, 解答は「〇〇行目と次の行の間に△△を挿入」という形式で記すこと.

\[5\] ソースコード１の eliminate 関数では不要になったメモリを解放していない. このままで挿入・削除の実行を繰り返した場合にどのような問題が起こりうるかを説明せよ. さらに, 不要になったメモリを解放するように, eliminate 関数の定義の中の2箇所にそれぞれ命令を追加せよ. 解答は「〇〇行目と次の行の間に△△を挿入」という形式で記せ. また, メモリの解放には標準ライブラリ関数である free 関数を使用すること.

\[6\] 21 行目の末尾まで実行した時点でポインタ tree が指す２分木は図 1(b) になっている. このあと, 22 行目を実行した際に出力される文字列を示せ.

\[7\] display 関数を実行した際に数が大きい順に出力されるようその定義を変更したい. 以下の関数定義の中の `[ 空欄 (ウ) ]` ~ `[ 空欄 (オ) ]` を埋めて変更せよ. 頂点に保持される整数を出力する場合には printf("%d,", p->value) を記述すること.

```c
void display(struct vertex *p) {
    if (p == NULL) return;
    [ 空欄 (ウ) ];
    [ 空欄 (エ) ];
    [ 空欄 (オ) ];
    return;
}
```

\[8\] ２分木に指定した数が存在しているかどうか探索する member 関数を以下の要件を満たすように作成したい.

- 引数として整数 x を受け取る.
- ポインタ tree が指す２分木に x を保持する頂点が存在する場合には 1 を, そうでない場合には 0 を返す.

これらの条件を満たすように以下の関数定義の中の `[ 空欄 (カ) ]` ~ `[ 空欄 (ケ) ]` を埋めて member 関数の定義を完成させよ.

```c
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
```

<details>
<summary>Translation of technical terms</summary>

| 日本語 | English |
|---|---|
| 2分木 | binary tree |
| 頂点 | vertex |
| 子 | child |
| 根付き木 | rooted tree |
| C言語 | C programming language |
| 構造体 | structure |
| メンバ | member |
| ソースコード | source code |
| プログラム | program |
| 大域変数 | global variable |
| 格納する | store |
| 参照する | refer |
| ポインタ | pointer |
| 変数 | variable |
| 宣言 | declaration |
| 初期値 | initial value |
| 空 | empty |
| 引数 | argument |
| 挿入する | insert |
| 削除する | delete |
| 関数 | function |
| 部分木 | subtree |
| 先行順 | preorder |
| 出力する | print out |
| 再帰的に | recursively |
| 操作 | operation |
| 命令 | statement |
| 列 | sequence |
| 三項演算子 | ternary operator |
| 式 | expression |
| 代入文 | assignment statement |
| メモリ | memory |
| 不正アクセス | illegal access |
| 発生させる | raise |
| 実行する | execute |
| 解放する | free |
| 標準ライブラリ関数 | standard library function |
| 文字列 | string |
| 関数定義 | function definition |
| 探索する | search |

</details>

### ソースコード1：2分木を処理するC言語プログラム

```c showLineNumbers
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
            tree = q;
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

### 题目描述

外国留学生可以用英语作答。

二叉树是每个节点至多有两个孩子的有根树。二叉树的各个节点保存数据，且孩子区分左右。以下考虑每个节点保存一个整数的二叉树。图 1 给出了二叉树的例子。

在 C 语言程序中，可以用以下结构体表示二叉树。

```c
struct vertex {
    int value;
    struct vertex *left;
    struct vertex *right;
};
```

这个结构体表示一个节点，由保存该节点整数值的成员 `value`、保存左孩子指针的成员 `left` 和保存右孩子指针的成员 `right` 组成。如果节点不存在左孩子或右孩子，则分别将成员 `left` 或 `right` 的值设为 `NULL`。

上面的源代码 1 是处理用上述结构体表示的二叉树的 C 语言程序。全局变量 `tree` 是指向二叉树的指针变量，声明时的初始值为 `NULL`，即用 `NULL` 表示不含节点的空二叉树。`insert` 和 `eliminate` 分别向 `tree` 指向的二叉树中插入、删除保存给定整数参数的节点。`create` 创建保存给定整数参数的节点。`display` 对传入指针所指向的二叉树（或二叉子树），按先序输出各节点保存的整数，其定义采用递归。

关于源代码 1，回答以下问题。源代码及图 1 与上文相同。

#### \[1\]

按照图 1 的表示方法，分别画出 `main` 函数执行到第 18 行末尾以及第 19 行末尾时，指针 `tree` 所指向的二叉树。

#### \[2\]

希望在第 21 行写入数据的插入、删除操作，使执行到第 21 行末尾时，`tree` 指向的二叉树成为图 1(b) 所示的树。给出一组可以填入第 21 行空栏 (ア) 的语句序列。该序列必须满足以下条件。

- 语句只能是 `insert(x);` 或 `eliminate(y);`，其中 `x`、`y` 均为整数。
- 作为 `insert` 或 `eliminate` 参数的同一个整数，在该语句序列中至多出现一次。

#### \[3\]

三目运算符 `? :` 以“表达式 1 ? 表达式 2 : 表达式 3”的形式构成表达式。当“表达式 1”的求值结果不为 0 时，整个表达式的值为“表达式 2”的求值结果；为 0 时，则为“表达式 3”的求值结果。例如，表达式 `x <= 0 ? x+1 : x+2` 在 `x` 为 −1 时的值为 0，在 `x` 为 5 时的值为 7。

使用该三目运算符填写空栏 (イ)，完成与第 53～56 行代码具有相同作用的赋值语句。

```c
if (x < p->value)
    p = p->left;
else
    p = p->right;
```

```c
p = [ 空欄 (イ) ];
```

#### \[4\]

源代码 1 的 `eliminate` 函数可能引发非法内存访问。例如，在第 19 行与下一行之间执行 `eliminate(10);` 就会发生非法访问。在 `eliminate` 的定义中的一个位置添加一条语句，解决这个问题。答案须采用“在第〇〇行与下一行之间插入△△”的形式。

#### \[5\]

源代码 1 的 `eliminate` 函数没有释放不再使用的内存。说明在这种情况下反复执行插入、删除操作可能发生什么问题。然后，在 `eliminate` 的定义中的两个位置各添加一条语句，以释放不再使用的内存。答案须采用“在第〇〇行与下一行之间插入△△”的形式，并使用标准库函数 `free` 释放内存。

#### \[6\]

执行到第 21 行末尾时，指针 `tree` 所指向的二叉树为图 1(b)。写出随后执行第 22 行时输出的字符串。

#### \[7\]

希望修改 `display` 的定义，使其按数值从大到小的顺序输出。填写以下函数定义中的空栏 (ウ)～(オ)。输出节点所保存的整数时，使用 `printf("%d,", p->value)`。

```c
void display(struct vertex *p) {
    if (p == NULL) return;
    [ 空欄 (ウ) ];
    [ 空欄 (エ) ];
    [ 空欄 (オ) ];
    return;
}
```

#### \[8\]

希望编写函数 `member`，查找二叉树中是否存在指定的数，并满足以下要求。

- 接收整数参数 `x`。
- 如果 `tree` 指向的二叉树中存在保存 `x` 的节点，则返回 1；否则返回 0。

填写以下函数定义中的空栏 (カ)～(ケ)，使 `member` 满足上述条件。

```c
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
```

<details>
<summary>术语对照</summary>

| 日文 | 中文 |
|---|---|
| 2分木 | 二叉树 |
| 頂点 | 节点 |
| 子 | 孩子 |
| 根付き木 | 有根树 |
| C言語 | C语言 |
| 構造体 | 结构体 |
| メンバ | 成员 |
| ソースコード | 源代码 |
| プログラム | 程序 |
| 大域変数 | 全局变量 |
| 格納する | 存储 |
| 参照する | 引用 |
| ポインタ | 指针 |
| 変数 | 变量 |
| 宣言 | 声明 |
| 初期値 | 初始值 |
| 空 | 空 |
| 引数 | 参数 |
| 挿入する | 插入 |
| 削除する | 删除 |
| 関数 | 函数 |
| 部分木 | 子树 |
| 先行順 | 先序 |
| 出力する | 输出 |
| 再帰的に | 递归地 |
| 操作 | 操作 |
| 命令 | 语句 |
| 列 | 序列 |
| 三項演算子 | 三目运算符 |
| 式 | 表达式 |
| 代入文 | 赋值语句 |
| メモリ | 内存 |
| 不正アクセス | 非法访问 |
| 発生させる | 引发 |
| 実行する | 执行 |
| 解放する | 释放 |
| 標準ライブラリ関数 | 标准库函数 |
| 文字列 | 字符串 |
| 関数定義 | 函数定义 |
| 探索する | 查找 |

</details>

## **Kai**

### \[1\]

18 行目の実行後：

![18行目の実行後：根3、右の子12、12の左の子11と右の子18、18の左の子14](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/is/2016/is_201508_programming_after18.svg)

19 行目の実行後：

![19行目の実行後：根3、左の子2と右の子14、14の左の子11と右の子18](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/is/2016/is_201508_programming_after19.svg)

`eliminate(12)` では，左右の子を持つ頂点 12 の値を，右部分木の最小値 14 で置き換え，元の頂点 14 を取り除く。続く `insert(2)` で頂点 2 が根の左の子となる。3 は既に存在するため，`insert(3)` では木は変化しない。

### \[2\]

空欄 (ア) の一例は次のとおり。

```c
eliminate(11); insert(7); eliminate(6);
```

20 行目の実行後，根は 6 であり，左部分木は 2 とその右の子 5，右部分木は 14 とその左の子 11，右の子 18 からなる。

まず 11 を削除し，7 を 14 の左の子として挿入する。最後に根の 6 を削除すると，右部分木の最小値である 7 が根の値となり，元の頂点 7 が取り除かれる。これにより図 1(b) の木が得られる。引数は 11，7，6 で互いに異なる。

### \[3\]

空欄 (イ) は次の式である。

```c
x < p->value ? p->left : p->right
```

したがって，代入文は `p = x < p->value ? p->left : p->right;` となる。

### \[4\]

71 行目と次の行の間に `if (p == NULL) return;` を挿入する。

探索する値が存在しない場合，69 行目または 71 行目で `p` が `NULL` になることがある。72 行目の条件で `p->value` を参照する前に `NULL` を検査すれば，不正アクセスを防げる。

### \[5\]

削除した頂点のメモリを解放しないと，その領域を参照できなくなり，メモリリークが生じる。挿入・削除を繰り返すと使用メモリが増加し，やがてメモリ不足により新しい領域を確保できなくなる可能性がある。

- 86 行目と次の行の間に `free(p);` を挿入する。
- 98 行目と次の行の間に `free(q);` を挿入する。

子が高々一つの場合は，親のポインタまたは `tree` を付け替えた後に頂点 `p` を解放する。子が二つの場合は，`p` 自体は木に残し，その値を置き換えるために使った右部分木の最小値の頂点 `q` を，木から取り除いた後に解放する。

### \[6\]

根，左部分木，右部分木の順に出力するため，出力は次の文字列となる。

```text
7,2,5,14,18,
```

末尾にもコンマが付き，改行は出力されない。

### \[7\]

| 空欄 | 解答 |
|---|---|
| (ウ) | `display(p->right)` |
| (エ) | `printf("%d,", p->value)` |
| (オ) | `display(p->left)` |

このプログラムで構成される木は二分探索木であり，各頂点の値より大きい値は右部分木に，小さい値は左部分木にある。したがって，右部分木，頂点，左部分木の順にたどれば降順となる。

### \[8\]

| 空欄 | 解答 |
|---|---|
| (カ) | `p->value == x` |
| (キ) | `p->value > x` |
| (ク) | `p = p->left` |
| (ケ) | `p = p->right` |

頂点の値が `x` と等しければ 1 を返す。等しくない場合は大小関係に応じて左または右の子へ進む。探索先が `NULL` になれば該当する頂点は存在しないので，ループを抜けて 0 を返す。

## **Reference**

- [名古屋大学大学院情報科学研究科 情報システム学専攻 平成28年度博士課程（前期課程）入学試験問題（2015年8月6日実施、プログラミング：PDF 4～8ページ）](https://web.archive.org/web/20210425093032id_/http://www.is.nagoya-u.ac.jp/exam-old/d21508.pdf)
