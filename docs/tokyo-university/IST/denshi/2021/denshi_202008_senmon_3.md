---
sidebar_label: 2020年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Data-Structures.Union-Find-Data-Structure
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2020年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

There are $N$ objects moving on a field. When two objects $a$ and $b$ come into contact with each other at a time $t$, a triplet $(t, a, b)$ is recorded. Once two objects have been in contact they participate in an equivalence relation and belong to the same equivalence class. At the beginning each equivalence class includes a single object. When its object is in contact with an object in another class, these classes merge into one equivalence class.
Answer the following questions.

(1) The pseudo code in the next page shows an union-find algorithm that keeps track of the equivalent class of each object. The function `init` initializes the array `parant` that records the equivalence classes (ignore the array `sizes` in this question). Every time the above mentioned triplet is recorded, the function `union` is executed and it updates the array `parent`. When $N$ equals 6, show the content of the array `parent` after the following triplets have been recorded.

$$
(1, 0, 3), (2, 4, 2), (3, 1, 5), (4, 0, 1)
$$

(2) Describe the order of the worst-case time complexity of the function `find` and `union` with reasons.

(3) Consider recording the number of objects in each equivalence class using the array `sizes`. Fill in (X) and (Y) in the pseudo code so that the function `size` returns the number of objects in the equivalence class including the designated object $a$. You can write multiple lines in (X) and (Y).

(4) The time complexity of the function `find` and `union` can be improved by modifying the function `union` using the array `sizes`. Modify and show the code (X) in the pseudo code. Describe the order of the worst-case time complexity of the improved `union` function with reasons.

(5) Consider finding the time when the designated objects $a$ and $b$ became equivalent. Describe how to modify the algorithm and explain the procedure of the function that finds the time. Describe the order of the worst-case time complexity of the function with reasons.

Union-find algorithm:

```c
int parent[N];
int sizes[N];

void init() {
    for (int i = 0; i < N; ++i) {
        parent[i] = i;
        sizes[i] = 1;
    }
}

int find(int i) {
    while (parent[i] != i) {
        i = parent[i];
    }
    return i;
}

void union(int a, int b) {
    int i = find(a);
    int j = find(b);
    parent[i] = j;
    (X)
}

int size(int a) {
    (Y)
}
```

### 题目描述

场地上有 $N$ 个移动物体。物体 $a,b$ 在时刻 $t$ 接触时，记录三元组 $(t,a,b)$。任意两个物体一旦接触过，就进入同一等价关系、属于同一等价类。初始时每个等价类只含一个物体；某类中的物体与另一类中的物体接触时，两类合并。

(1) 下页伪代码给出跟踪各物体等价类的并查集算法。`init` 初始化记录等价类的数组 `parent`；本问忽略 `sizes`。每记录一个上述三元组就执行 `union` 更新 `parent`。当 $N=6$，依次记录

$$
(1,0,3),\ (2,4,2),\ (3,1,5),\ (4,0,1)
$$

后，写出数组 `parent` 的内容。

(2) 分别说明函数 `find`、`union` 的最坏时间复杂度阶，并给出理由。

(3) 用数组 `sizes` 记录每个等价类所含物体数。填写伪代码中的 (X)、(Y)，使 `size(a)` 返回含指定物体 $a$ 的等价类大小；(X)、(Y) 均可填写多行。

(4) 利用 `sizes` 修改 `union` 中的 (X)，以改善 `find`、`union` 的时间复杂度。写出修改后的代码，并说明改进后 `union` 的最坏时间复杂度阶及理由。

(5) 需要查询指定物体 $a,b$ 在什么时刻成为等价。说明应如何修改算法以及查询函数的过程，并给出该函数的最坏时间复杂度阶及理由。

题目给出的并查集代码为：

```c
int parent[N];
int sizes[N];

void init() {
    for (int i = 0; i < N; ++i) {
        parent[i] = i;
        sizes[i] = 1;
    }
}

int find(int i) {
    while (parent[i] != i) {
        i = parent[i];
    }
    return i;
}

void union(int a, int b) {
    int i = find(a);
    int j = find(b);
    parent[i] = j;
    (X)
}

int size(int a) {
    (Y)
}
```

#### 考点

- 并查集：要求跟踪父指针数组、分析退化树的复杂度，并用按大小合并控制树高、维护集合规模及附加合并时间信息。

## **Kai**
### (1)

| Time \ Node | 0 | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | 0 | 1 | 2 | 3 | 4 | 5 |
| **1** | 3 | 1 | 2 | 3 | 4 | 5 |
| **2** | 3 | 1 | 2 | 3 | 2 | 5 |
| **3** | 3 | 5 | 2 | 3 | 2 | 5 |
| **4** | 3 | 5 | 2 | 5 | 2 | 5 |

### (2)
$O(N)$

**Reason:** Union and find operation must traverse a chain in the worst case when tree is a list.

### (3)

**X:** `sizes[j] += sizes[i];`

**Y:** `return sizes[find(a)];`

### (4)

```cpp
void union(int a, int b) {
    int i = find(a);
    int j = find(b);
    if (i == j) {
        return;
    } else if (sizes[i] > sizes[j]) {
        parent[j] = i;
        sizes[i] += sizes[j];
    } else {
        parent[i] = j;
        sizes[j] += sizes[i];
    }
}
```

**Complexity:** $O(\log N)$

**Reason:** By always attaching the smaller tree to the root of the larger tree, the depth of any node only increases when it is merged into a tree of equal or larger size, which guarantees the tree height is at most logarithmic with respect to $N$.

### (5)

① Initialize a time array, when $union(a,b)$ occurs at time $t$, if we link $a \rightarrow b$, we store `Time[a] = t`, the union will be $union(t, a, b)$

② To find the connection time for $a$ and $b$, which is a LCA question.
Find the paths from $a$ to the root and $b$ to the root.
Identify the lowest Common Ancestor (LCA) of $a$ and $b$.
The time they became connected is the $\max(\text{Time}[a], \text{Time}[b])$.

**Complexity:** $O(\log N)$

**Reason:** Since union by size is used, the depth of the tree is $O(\log N)$. Finding the root and traversing paths take logarithmic time.
