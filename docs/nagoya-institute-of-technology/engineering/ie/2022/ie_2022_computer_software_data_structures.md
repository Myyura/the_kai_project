---
sidebar_label: "2022年度 計算機ソフトウェア（データ構造とアルゴリズム）"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Binary-Search-Tree-Insertion-and-Deletion
  - Computer-Science.Data-Structures.Preorder-Tree-Traversal
  - Computer-Science.Data-Structures.Balanced-Binary-Search-Tree
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 工学専攻 情報工学系 2022年度 計算機ソフトウェア（データ構造とアルゴリズム）

## **Author**
GPT-5.6 Sol, 祭音Myyura

## **Description**

題意の要約。

問題26「計算機ソフトウェア」の設問 I について答えよ。

図1は、各節点に整数値を持つ次の二分探索木である。

```text
                 9
              /     \
             5       13
           /   \    /  \
          2     7  10  14
           \   / \   \
            3 6   8   11
```

節点は次の `Node` クラスで表され、整数値は `key` に格納される。

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

### (1)

図1の根を `traverse` に渡したとき、標準出力に表示される内容を答えよ。

### (2)

二分探索木への挿入と削除を行う次のプログラムについて、空欄 A--H を Java のコードで埋めよ。重複値の挿入および木に存在しない値の削除は行われないものとする。また、部分木の最小値と最大値を返す `minValue(root)`、`maxValue(root)` を利用できる。

```java
Node insert(Node root, int x) {
    if (root == null) {
        root = new Node(x);
        return root;
    }
    if (x < root.key) root.left = [ A ];
    else if (x > root.key) root.right = [ B ];
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

### (3)

図1の木に整数値 $4$ を持つ節点を挿入した直後の木と、続いて整数値 $9$ を持つ節点を削除した直後の木を、それぞれ図示せよ。

### (4)

節点総数を $N$ とする二分探索木の探索について、最良の場合と最悪の場合の計算量を Big-$\Theta$ 記法で答え、それぞれが一般にどのような形の木であるかを簡潔に述べよ。

### (5)

各節点を根とする部分木の高さがほぼ平衡している二分探索木を平衡探索木と呼ぶ。代表例を一つ挙げ、その名称と平衡条件を簡潔に答えよ。

出典：[名古屋工業大学 2022年度 原問題](https://web.archive.org/web/20220308060755/https://www.nitech.ac.jp/examination/test/files/2022_08_joho.pdf)。

## **Kai**

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
