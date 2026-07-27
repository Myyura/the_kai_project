---
sidebar_label: 2019年8月実施 専門科目II 問題2
tags:
  - Hiroshima-University
  - Computer-Science.Data-Structures.Tree-Data-Structure
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2019年8月実施 専門科目II 問題2


## **Author**
samparker, 祭音Myyura

## **Description**
子の数に制約のない根付き木を $2$ 分木によって表す方法として、左子・右兄弟表現がある。
2 分木の各節点 $x$ は、キー $x.key$ の他に、親 $x.p$ と左端の子 $x.lc$、すぐ右の兄弟 $x.rs$ の３つのポインタを持つ。
親や左端の子、すぐ右の兄弟がいない節点では、それぞれのポインタ $p, lc, rs$ の値は $\text{null}$ とする。
例えば、図 1 (a) の根付き木を上述の表現の二分木で表すと図 1 (b) のようになる。

(1) 根付き木の節点の数を $n$、枝の数を $m$ とする。$m$ と $n$ の関係を書け。

(2) 図 2 の根付き木を、左子・右兄弟表現の 2 分木で表せ。ポインタ $p$ は省略せよ。

(3) 根付き木の根 $x$ が与えられたとき、一番左下の子孫の $key$ を出力する手続きの擬似コード **Print-Leftmost**($x$) を示す。空欄 $\boxed{\ A  \ }$ と $\boxed{\ B \ }$ を適切に埋めよ。

(4) 根付き木の根 $x$ が与えられたとき、すべての節点の $key$ を出力する手続き **Tree-Walk**($x$) を擬似コードで書け。ただし、節点を出力する順序は問わない。

(5) (4) の手続き **Tree-Walk**($x$) の時間計算量をオーダー表記で書け。

---

There is the left-child, right-sibling representation that uses a binary tree to represent a rooted tree with arbitrary number of children. Each vertex $x$ of the binary tree contains a key $x.key$, a parent pointer $x.p$, a pointer to the leftmost child $x.lc$, and a pointer to the sibling immediately to its right $x.rs$.
We assume that, in case of no parent, no child, or no sibling, the value of the pointer $p, lc,$ or $rs$ is null, respectively.
For example, a rooted tree shown in Fig. 1 (a) is represented by a binary tree of the above representation as shown in Fig. 1 (b).

(1) We assume that a rooted tree has $n$ vertices and $m$ edges. Describe the relationship between $m$ and $n$.

(2) Draw a binary tree of the left-child, right-sibling representation, to represent a rooted tree shown in Fig. 2. The pointer $p$ should not be drawn.

(3) The pseudo code **Print-Leftmost**($x$) is a procedure that prints the key of the leftmost descendant of a tree rooted at a given node $x$. Fill the blanks $\boxed{\ A  \ }$ and $\boxed{\ B  \ }$.

(4) Write a pseudo code of the procedure **Tree-Walk**($x$) that prints keys of all vertices in a tree rooted at a given node $x$. The order of vertices to print is not the matter.

(5) Show the execution time of **Tree-Walk**($x$) using big-O notation.

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/is_201908_senmon_II_2_p1.png" width="602" height="420" alt=""/>
</figure>

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/is_201908_senmon_II_2_p2.png" width="455" height="530" alt=""/>
</figure>

### 题目描述

用二叉树表示子节点数不受限制的有根树时，可采用“左孩子—右兄弟”表示法。二叉树中的每个节点 $x$ 除键值 $x.key$ 外，还含有三个指针：父节点 $x.p$、最左孩子 $x.lc$ 和紧邻的右兄弟 $x.rs$；相应节点不存在时，对应指针值为 $\mathrm{null}$。图 1(a) 与图 1(b) 给出了普通有根树及其这种二叉树表示的示例。

1. 若有根树有 $n$ 个节点、$m$ 条边，写出 $m$ 与 $n$ 的关系。
2. 将图 2 中的有根树画成左孩子—右兄弟表示的二叉树，省略父指针 $p$。
3. 给定有根树的根 $x$，伪代码 `Print-Leftmost(x)` 输出最左下方后代的 `key`；填写图中的空白 $\boxed{A}$、$\boxed{B}$。
4. 编写伪代码 `Tree-Walk(x)`，输出以 $x$ 为根的树中所有节点的 `key`，输出顺序不限。
5. 用大 $O$ 记号写出 `Tree-Walk(x)` 的运行时间。

相关树结构、伪代码空白和待转换的树均见图 1、图 2。

#### 考点

- 树形数据结构：理解左孩子—右兄弟表示法，完成指针遍历伪代码，并按节点数分析整棵树遍历的复杂度。

## **Kai**
### (1)
$n = m + 1$

### (2)

```text
                            2
                        /
                       5
                   /       \
                  13        8
                        /       \
                       16       10
                         \    /
                         18  25
                           \   \
                           21  27
```

### (3)

- $\boxed{\ A \ }:\ \text{null}$
- $\boxed{\ B \ }: \ x.lc$

### (4)

```text
Tree-Walk(x)
    if (x != null) then
        print(x.key)
        Tree-Walk(x.lc)
        Tree-Walk(x.rs)
```

### (5)
$O(n)$
