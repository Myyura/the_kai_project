---
sidebar_label: 2022年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Preorder-Tree-Traversal
  - Computer-Science.Data-Structures.Inorder-Tree-Traversal
  - Computer-Science.Data-Structures.Balanced-Binary-Search-Tree
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の二分探索木に関連する問に下記の C 言語のコードを参照して答えよ。

```c
// 木構造は以下で定義する
 typedef struct _Node_ {
   int d; // データ要素
   struct _Node_ *l; // 左部分木
   struct _Node_ *r; // 右部分木
 } Node;

Node* NewNode(int x)
{
    Node *p = malloc(sizeof(Node));
    p->d = x;
    p->l = p->r = NULL;
    return p;
}

Node *insertA(int x, Node *p) // 二分探索木へ挿入
{
    if(p == NULL){
        Node *q = NewNode(x);
        return q;
    }
    if(x < p->d)       p->l = insertA(x, p->l);
    else if(x > p->d)  p->r = insertA(x, p->r);
    return p;
}
```

コード中の `//` 以下の表記は、行末までコメントを表す。ノードを指すポインタが `NULL` であった場合はノードが無いことを表す。また関数 `malloc()` はノードの領域確保を行い、そのポインタを返す。

$N$ 個の要素を持つ配列 `C[]` 全体を二分探索木に格納する場合は、`p = NULL` の状態を初期状態とし、

```c
for(i = 0; i < N; i++){ p = insertA(C[i], p); }
```

という操作を行う。最終的に得られた `p` を根へのポインタとして扱う。

**1.** 配列 `C1[] = {4, 6, 2, 3, 5, 1, 7}` と `C2[] = {1, 7, 2, 6, 3, 5, 4}` とを格納した場合の、木を図示し、木の高さをそれぞれ答えよ。ただし、木の高さは 0 から数えるものとする。すなわち根ノードしかない木の場合、その高さは 0 となる。

**2.** 1. で構築した、それぞれの木に対して、前順（行きがけ）、中順（通りがけ）になぞりをかけノードの要素を順次出力していく。それぞれの木から得られる出力を答えよ。

**3.** 関数 `insertA()` を用いて構築される二分探索木はデータの格納順に依存する。データ $\{1,2,3,4\}$ の 4 つの要素に関して、あらゆる格納順を考え、関数 `insertA()` を用いて二分探索木を構築したとき、高さ 2 の木となる順列の個数と高さ 3 の木となる順列の個数をそれぞれ答えよ。

**4.** 二分探索木の高さは検索性能に強い影響を与える。いまデータが $N$ 個あった場合、関数 `insertA()` によって構築される二分探索木のうち、検索性能の意味で最良の木の高さと最悪の木の高さを $O(\cdot)$（ビッグ・オー）表記を用いて表せ。

さらに以下のようなコードを考える。

```c
Node *rot1(Node *p)
{
    Node *tmp = p->l;
    p->l = tmp->r;
    tmp->r = p;
    return tmp;
}

Node *rot2(Node *p)
{
    p->l = rot3(p->l);
    return rot1(p);
}

Node *rot3(Node *p)
{
    Node *tmp = p->r;
    p->r = tmp->l;
    tmp->l = p;
    return tmp;
}

Node *rot4(Node *p)
{
    p->r = rot1(p->r);
    return rot3(p);
}

Node *insertB(int x, Node *p) // 平衡木への挿入
{
    int b;
    if(p == NULL){
        Node *q = NewNode(x);
        return q;
    }
    if(x < p->d)       p->l = insertB(x, p->l);
    else if(x > p->d)  p->r = insertB(x, p->r);
    else return p;
    b = diff(p); // 右部分木と左部分木の高さの差を計算する
    if(b > 1){ // 右側の子の方が高い (+1 より大きい)
        if(diff(p->r) >= 0)  p = [ (A) ];
        else                 p = [ (B) ];
    }
    else if(b < -1){
        if(diff(p->l) <= 0)  p = [ (C) ];
        else                 p = [ (D) ];
    }
    return p;
}
```

ただし、関数 `diff(p)` は `p` で示されるノードの右左の部分木の高さの差を整数値で与える関数である。すなわち `diff(p)` ＝（`p` の右部分木（`p->r`）の高さ）−（`p` の左部分木（`p->l`）の高さ）を与える。

**5.** 配列 `D1[] = {4, 3, 2, 1}` を要素順に関数 `insertA()` を用いて構築した木構造の根へのポインタを `r1` とする。さらに `p1 = rot1(r1)` として得られる木構造（`p1` を根とする木構造）を図示せよ。同様に `D2[] = {4, 1, 3, 2}` に関して得られる木構造の根へのポインタを `r2` としたとき、`p2 = rot2(r2)` として得られる木構造を図示せよ。

**6.** 任意の部分木構造の高さの違いが一定の範囲にあるものを平衡木と呼ぶ。ここでは任意のノードにおいて左右の子の部分木の高さの差が 1 以内の平衡木を構築する関数 `insertB()` を考える。関数 `insertB()` 中では変数 `b` の値で左右の子の部分木の高さの差を取り調整する。この関数 `insertB()` 中の空欄（A）〜（D）に当てはまる語句を記述せよ。

二分探索木（Binary Search Tree）、部分木（Sub-tree）、ノード（Node）、配列（Array）、根（Root）、木の高さ（Tree height）、前順（Pre-order）、中順（In-order）、なぞり（Traverse）、平衡木（Balanced Tree）。

#### 题目描述

参照上方 C 语言代码，回答关于二叉搜索树的问题。结构体 `Node` 中，`d` 是数据元素，`l`、`r` 分别指向左、右子树；`NewNode()` 创建新节点，`insertA()` 将元素插入二叉搜索树。

代码中从 `//` 到行末的内容是注释。指向节点的指针为 `NULL` 表示节点不存在。`malloc()` 为节点分配存储空间并返回指针。

将含 $N$ 个元素的数组 `C[]` 全部存入二叉搜索树时，从 `p = NULL` 开始，执行

```c
for(i = 0; i < N; i++){ p = insertA(C[i], p); }
```

最终得到的 `p` 作为指向根节点的指针。

**1.** 分别画出按顺序存入数组 `C1[] = {4, 6, 2, 3, 5, 1, 7}`、`C2[] = {1, 7, 2, 6, 3, 5, 4}` 后的树，并给出各自的高度。高度从 0 开始计数，即只有根节点的树高度为 0。

**2.** 对第 1 问构建的每棵树，分别进行前序遍历和中序遍历，按遍历顺序输出节点元素。写出每棵树的两种输出序列。

**3.** 用 `insertA()` 构建的二叉搜索树依赖数据插入顺序。考虑数据 $\{1,2,3,4\}$ 的所有插入排列，分别求得到高度为 2 和高度为 3 的树的排列数。

**4.** 树高强烈影响查找性能。若有 $N$ 个数据，用大 O 记号表示 `insertA()` 所构建的树中，查找性能最好与最坏的树高。

进一步考虑上方 `rot1()`～`rot4()` 和 `insertB()` 的代码。`diff(p)` 返回节点 `p` 的右子树高度减左子树高度，即（`p->r` 的高度）−（`p->l` 的高度）。`insertB()` 中的注释表示计算该高度差，以及判断右子树是否更高（差大于 $+1$）。

**5.** 用 `insertA()` 按顺序插入 `D1[] = {4, 3, 2, 1}`，设所得树的根指针为 `r1`，画出执行 `p1 = rot1(r1)` 后以 `p1` 为根的树。同样，对 `D2[] = {4, 1, 3, 2}` 所得树的根指针 `r2`，画出执行 `p2 = rot2(r2)` 后的树。

**6.** 任意子树的高度差都在某个固定范围内的树称为平衡树。本题的 `insertB()` 构建的是每个节点左右子树高度差不超过 1 的平衡树；函数通过变量 `b` 检查并调整高度差。填写 `insertB()` 中空栏（A）～（D）应有的代码。

## **Kai**

### 1.

$C_1$ から得られる木は

~~~text
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
~~~

であり、

$$
\boxed{h(C_1)=2}.
$$

$C_2$ から得られる木は

~~~text
1
 \
  7
 /
2
 \
  6
 /
3
 \
  5
 /
4
~~~

であり、

$$
\boxed{h(C_2)=6}.
$$

### 2.

前順走査は根・左・右、中順走査は左・根・右の順である。したがって、

$$
\begin{array}{c|l|l}
&\text{前順}&\text{中順}\\ \hline
C_1&4,2,1,3,6,5,7&1,2,3,4,5,6,7\\
C_2&1,7,2,6,3,5,4&1,2,3,4,5,6,7
\end{array}
$$

### 3.

全 $4!=24$ 通りを分類すると、

$$
\boxed{\text{高さ }2:\ 16\text{ 通り}},\qquad
\boxed{\text{高さ }3:\ 8\text{ 通り}}.
$$

### 4.

最良の場合は高さが対数的、最悪の場合は一直線の木となる。よって、

$$
\boxed{h_{\min}=O(\log N)},\qquad
\boxed{h_{\max}=O(N)}.
$$

### 5.

$D_1=(4,3,2,1)$ の木に $\mathrm{rot1}$ を施すと、

~~~text
    3
   / \
  2   4
 /
1
~~~

となる。また、$D_2=(4,1,3,2)$ の木に $\mathrm{rot2}$ を施すと、

~~~text
    3
   / \
  1   4
   \
    2
~~~

となる。

### 6.

右部分木が高い場合、右の子も右寄りなら左単回転、左寄りなら右左二重回転を行う。左部分木が高い場合は対称である。したがって、

$$
\boxed{
\begin{aligned}
\text{(A)}&:\ \mathrm{rot3}(p),&
\text{(B)}&:\ \mathrm{rot4}(p),\\
\text{(C)}&:\ \mathrm{rot1}(p),&
\text{(D)}&:\ \mathrm{rot2}(p).
\end{aligned}}
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf)
