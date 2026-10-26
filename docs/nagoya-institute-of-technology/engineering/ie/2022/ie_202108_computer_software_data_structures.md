---
sidebar_label: "2021年8月実施 計算機ソフトウェア（データ構造とアルゴリズム）"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Preorder-Tree-Traversal
  - Computer-Science.Data-Structures.Balanced-Binary-Search-Tree
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 工学専攻 情報工学系 2021年8月実施 計算機ソフトウェア（データ構造とアルゴリズム）

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**I**　次の (1)〜(5) の問いについて答えよ。

(1) 図1は整数値を各節点に持つ二分探索木である。また，図2は図1のような二分探索木に対して各節点を走査するための Java のプログラムの一部である。二分木の節点は図中の `Node` クラスによって表され，節点の持つ整数値が変数 `key` に対応している。与えられた節点を根とする部分木に対して走査を行う手続きである `traverse` メソッドに対して，図1の二分探索木の根を指定した場合に標準出力に表示される内容を答えよ。

(2) 図3は図2に加えて二分探索木を操作するための Java のプログラムの一部である。与えられた節点を根とする部分木に対して整数値 $x$ を持つ節点を挿入する `insert` メソッド，同様に整数値 $x$ を持つ節点を削除する `delete` メソッドに関して，図3の空欄AからHに対応する処理を Java のコードで答えよ。なお，重複した整数値が挿入される操作，および木に存在しない整数値を削除する操作は行われないと仮定してよい。その他，`root` を根とする部分木から最小または最大の整数値を返却するメソッド `int minValue(Node root)` と `int maxValue(Node root)` が利用できるものとする。

(3) 図1の二分探索木に対して新たに整数値4を持つ節点が挿入された場合，続いて整数値9を持つ節点が削除された場合の二分探索木をそれぞれ図1の表記にならって図示せよ。

(4) 二分探索木の節点の総数を $N$ とした場合に，探索に必要な計算量のオーダーについて最良の場合と最悪の場合についてそれぞれいくらになるか Big-$\Theta$ 表記で答えよ。また最良と最悪の場合とは一般的にどのような二分探索木か簡潔に答えよ。

(5) 二分探索木のうち，各節点においてその節点を根とする全ての部分木の高さがほぼ平衡しているものを平衡探索木と呼ぶ。代表的な平衡探索木の一例を挙げ，名称とともにその条件を簡潔に答えよ。

![図1：整数値を各節点に持つ二分探索木](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2022/ie_202108_computer_software_data_structures_figure_1.png)

```java
class Node {
    int key;
    Node left, right;
    public Node(int x) {
        key = x;
        left = right = null;
    }
}

void traverse(Node root) {
    if (root != null) {
        System.out.print(root.key + ",");
        traverse(root.left);
        traverse(root.right);
    }
}
```

図2：二分探索木の節点を表すクラスと木の走査を行うメソッドの定義

```java
Node insert(Node root, int x) {
    if (root == null) {
        root = new Node(x);
        return root;
    }
    if (x < root.key) root.left = [ A ];
    else (x > root.key) root.right = [ B ];
    return root;
}

Node delete(Node root, int x) {
    if (root == null) [ C ];
    if (x < root.key) root.left = [ D ];
    else if (x > root.key) root.right = [ E ];
    else {
        if ([ F ]) return root.right;
        else if ([ G ]) return root.left;
        root.key = [ H ];
        root.right = delete(root.right, root.key);
    }
    return root;
}
```

図3：二分探索木に節点を挿入および削除するメソッドの定義

### 题目描述

**I**　回答以下 (1) 至 (5) 问。

(1) 图1为各结点存储整数值的二叉搜索树。图2是用于遍历此类二叉搜索树各结点的部分 Java 程序。结点由图中的 `Node` 类表示，结点所存的整数值对应变量 `key`。`traverse` 方法遍历以给定结点为根的子树。将图1的根结点传入该方法时，标准输出显示什么内容？

(2) 图3是在图2基础上操作二叉搜索树的部分 Java 程序。`insert` 方法将整数值为 $x$ 的结点插入以给定结点为根的子树；`delete` 方法删除其中整数值为 $x$ 的结点。请用 Java 代码填入图3空格 A 至 H。可假设不会插入重复整数，也不会删除树中不存在的整数。此外，可以使用返回以 `root` 为根的子树最小或最大整数值的方法 `int minValue(Node root)` 和 `int maxValue(Node root)`。

(3) 在图1二叉搜索树中插入整数值为4的结点，随后删除整数值为9的结点。请仿照图1分别画出这两次操作后的树。

(4) 设二叉搜索树的结点总数为 $N$，用 Big-$\Theta$ 记法分别给出查找在最好与最坏情况下所需的复杂度阶，并简要说明最好、最坏情况一般对应什么样的二叉搜索树。

(5) 如果一棵二叉搜索树的每个结点所对应的各子树高度大致平衡，则称为平衡搜索树。请举出一种有代表性的平衡搜索树，并简要说明其名称与平衡条件。

![图1：各结点存储整数值的二叉搜索树](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2022/ie_202108_computer_software_data_structures_figure_1.png)

```java
class Node {
    int key;
    Node left, right;
    public Node(int x) {
        key = x;
        left = right = null;
    }
}

void traverse(Node root) {
    if (root != null) {
        System.out.print(root.key + ",");
        traverse(root.left);
        traverse(root.right);
    }
}
```

图2：表示二叉搜索树结点的类与遍历方法定义

```java
Node insert(Node root, int x) {
    if (root == null) {
        root = new Node(x);
        return root;
    }
    if (x < root.key) root.left = [ A ];
    else (x > root.key) root.right = [ B ];
    return root;
}

Node delete(Node root, int x) {
    if (root == null) [ C ];
    if (x < root.key) root.left = [ D ];
    else if (x > root.key) root.right = [ E ];
    else {
        if ([ F ]) return root.right;
        else if ([ G ]) return root.left;
        root.key = [ H ];
        root.right = delete(root.right, root.key);
    }
    return root;
}
```

图3：向二叉搜索树插入或删除结点的方法定义

## **Kai**

図3の `insert` には `else (x > root.key)` と印刷されているが，Java の構文としては `else if (x > root.key)` が必要である。以下はこの解釈で解答する。

### (1)

この手続きは「根、左部分木、右部分木」の順にたどる先行順走査である。したがって、出力は

```text
9,5,2,3,7,6,8,13,10,11,14,
```

となる。

### (2)

挿入では大小関係に応じて左右の部分木へ再帰する。削除対象が子を二つ持つ場合は、右部分木の最小値、すなわち中間順走査での後継値に置き換える。よって、

```java
[ A ] insert(root.left, x)
[ B ] insert(root.right, x)
[ C ] return null
[ D ] delete(root.left, x)
[ E ] delete(root.right, x)
[ F ] root.left == null
[ G ] root.right == null
[ H ] minValue(root.right)
```

である。

### (3)

$4$ は $9,5,2,3$ の順に比較され、$3$ の右の子として挿入される。

```text
                 9
              /     \
             5       13
           /   \    /  \
          2     7  10  14
           \   / \   \
            3 6   8   11
             \
              4
```

次に $9$ を削除する。左右の子を持つため、右部分木の最小値 $10$ で根を置き換え、元の $10$ を削除する。

```text
                10
              /     \
             5       13
           /   \    /  \
          2     7  11  14
           \   / \
            3 6   8
             \
              4
```

### (4)

ここでの「最良の場合」「最悪の場合」は、検索キーがたまたま根にあるかどうかではなく、節点数 $N$ の木の形に対する最大探索時間、すなわち木の高さの最良・最悪を比較するものと解釈する。探索が末端まで及ぶ場合の時間は、その木の高さに比例するため、

- 最良の場合：高さが $\Theta(\log N)$ の平衡に近い木であり、探索は $\boxed{\Theta(\log N)}$。
- 最悪の場合：全節点がほぼ片側だけにつながる木であり、高さは $N-1$、探索は $\boxed{\Theta(N)}$。

なお、木の形を固定した上で一回の探索そのものの最良ケースを問うなら、検索値が根にある場合の $\Theta(1)$ であり、上の $\Theta(\log N)$ とは評価対象が異なる。

### (5)

代表例は **AVL 木** である。各節点 $v$ について、左部分木と右部分木の高さを $h_L(v),h_R(v)$ とすると、

$$
\boxed{|h_L(v)-h_R(v)|\le 1}
$$

を満たす。挿入・削除後に必要なら回転を行い、この条件を保つ。

## **Reference**

- [公式原題（公式サイトの保存版）](https://web.archive.org/web/20220308060755/https://www.nitech.ac.jp/examination/test/files/2022_08_joho.pdf)
