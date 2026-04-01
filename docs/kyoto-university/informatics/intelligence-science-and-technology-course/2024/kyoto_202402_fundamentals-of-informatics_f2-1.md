---
sidebar_label: '2024-02 F2-1'
tags:
  - Kyoto-University
  - Informatics
  - Intelligence-Science-and-Technology-Course
  - Fundamentals-of-Informatics
  - Algorithms-and-Data-Structures
---

# Kyoto University Graduate School of Informatics  
## Intelligence Science and Technology Course  
### 2024-02 Fundamentals of Informatics F2-1

## Problem transcription

### Q1
We have the following weighted directed acyclic graph (DAG) `G1` that has seven nodes named `v1, v2, ..., v7`. The weight of all edges is equal to `1`.

From the scanned figure, the graph is read as having the directed edges

```text
v1->v2, v1->v3,
v2->v3, v2->v4, v2->v7,
v3->v4, v3->v5,
v4->v6,
v5->v6,
v6->v7.
```

1. List all of the shortest paths from `v1` to `v7`.
2. Answer the number of directed paths from `v1` to `v7`.

Suppose we have a simple connected weighted DAG `G = (V, E)` with a set of nodes `V` and a set of edges `E`. The weight of all edges is equal to `1`. For any node `v ∈ V`, let

```text
N(v) = { v' | (v', v) ∈ E }.
```

Note that `(v', v)` indicates an edge from `v'` to `v`. We suppose `vs ∈ V` is the only node whose `N(vs)` is an empty set.

3. For any node `v ∈ V - {vs}`, let `s(v)` denote the number of paths from `vs` to `v`, and let `s(vs) = 1`. Express `s(v)` using elements of `{s(v')}_{v' ∈ V - {vs}}`.
4. For any node `v ∈ V - {vs}`, let `d(v)` denote the length of the shortest path from `vs` to `v`, and let `d(vs) = 0`. Express `d(v)` using elements of `{d(v')}_{v' ∈ V - {vs}}`.

### Q2
Let `N` be the set of all non-negative integers and `N^3 = {(i, j, k) | i, j, k ∈ N}`. We define a total order `≼` of two elements in `N^3` as `(i, j, k) ≼ (s, t, u)` if and only if `(i-s, j-t, k-u) = (0,0,0)` or the rightmost non-zero component of `(i-s, j-t, k-u)` is negative.

For example,

```text
(4, 2, 3) ≼ (5, 2, 3),
(4, 2, 3) ≼ (5, 4, 3),
(4, 2, 3) ≼ (2, 3, 3).
```

For a given `N ∈ N`, consider the task of listing all elements in

```text
S_N = {(i, j, i^2 + j^2) ∈ N^3 | 0 <= i <= N, 0 <= j <= N}
```

following the order `≼`, that is, listing all elements in `S_N` as

```text
(0,0,0), (1,0,1), (0,1,1), ... , (in, jn, in^2 + jn^2),
(in+1, jn+1, in+1^2 + jn+1^2), ... , (N, N, 2N^2)
```

so that

```text
(in, jn, in^2 + jn^2) ≼ (in+1, jn+1, in+1^2 + jn+1^2)
```

holds for all `n = 1, 2, ..., (N+1)^2`.

Both Algorithm 1 and Algorithm 2 are for accomplishing the task with a min-heap `H` for keeping elements in `S_N`, where “min” means minimum in the order `≼`.

Algorithm 1:

```text
Let the heap H be empty;
for every j from 0 to N do
    for every i from 0 to N do
        Insert (i, j, i^2 + j^2) into H;
while H is not empty do
    Extract the root element from H, and output it;
end while
```

Algorithm 2:

```text
Let the heap H be empty;
for every j from 0 to N do
    Insert (0, j, j^2) into H;
while H is not empty do
    Extract the root element from H as (i', j', (i')^2 + (j')^2), and output it;
    if i' < N then
        Insert [blank] into H;
end while
```

Questions:

1. Draw the heap `H` of Algorithm 1 as a tree, not an array, obtained after executing part ① for the case `N = 2`. Also illustrate step by step how `H` is maintained in the first repetition of the while loop.
2. Fill the blank in Algorithm 2 so that the size of `H` is no more than `N + 1` in the while loop.
3. For the case `N = 2`, illustrate step by step how `H` is maintained in the first and second repetitions of the while loop in Algorithm 2.
4. Let `N >= 2`. Explain the reason why Algorithm 2 with your answer for (2) works as requested.

## Solutions

### Q1

#### (1) Shortest paths from `v1` to `v7`
Because there is a direct edge `v2 -> v7`, the path

```text
v1 -> v2 -> v7
```

has length `2`.

There is no direct edge `v1 -> v7`, so no path can have length `1`. Therefore the shortest-path length is `2`, and the only shortest path is

```text
v1 -> v2 -> v7.
```

#### (2) Number of directed paths from `v1` to `v7`
Let `s(vi)` denote the number of directed paths from `v1` to `vi`. Then:

```text
s(v1) = 1
s(v2) = s(v1) = 1
s(v3) = s(v1) + s(v2) = 2
s(v4) = s(v2) + s(v3) = 3
s(v5) = s(v3) = 2
s(v6) = s(v4) + s(v5) = 5
s(v7) = s(v2) + s(v6) = 6
```

Hence the number of directed paths from `v1` to `v7` is

```text
6.
```

#### (3) General recurrence for the number of paths
For any `v ∈ V - {vs}`, every path from `vs` to `v` must end with one incoming edge `(v', v)` where `v' ∈ N(v)`. Therefore

```text
s(v) = Σ_{v' ∈ N(v)} s(v').
```

with the base value

```text
s(vs) = 1.
```

#### (4) General recurrence for the shortest-path length
Since every edge has weight `1`, a shortest path to `v` must come from one predecessor `v' ∈ N(v)` and then use one extra edge. Therefore

```text
d(v) = 1 + min_{v' ∈ N(v)} d(v').
```

with the base value

```text
d(vs) = 0.
```

### Q2

The order `≼` compares triples by

1. increasing `k`,
2. then increasing `j`,
3. then increasing `i`.

This is because the rightmost non-zero component is checked first.

#### (1) Heap of Algorithm 1 for `N = 2`
The inserted elements are

```text
(0,0,0), (1,0,1), (2,0,4),
(0,1,1), (1,1,2), (2,1,5),
(0,2,4), (1,2,5), (2,2,8).
```

A min-heap after part ① can be drawn as

```text
                    (0,0,0)
                 /           \
           (1,0,1)           (2,0,4)
          /       \         /       \
     (0,1,1)   (1,1,2)  (2,1,5)   (0,2,4)
      /    \
 (1,2,5)  (2,2,8)
```

Now perform the first repetition of the while loop.

Step 1: extract the root `(0,0,0)` and move the last element `(2,2,8)` to the root.

```text
                    (2,2,8)
                 /           \
           (1,0,1)           (2,0,4)
          /       \         /       \
     (0,1,1)   (1,1,2)  (2,1,5)   (0,2,4)
      /
 (1,2,5)
```

Step 2: compare `(2,2,8)` with its children and swap with the smaller child `(1,0,1)`.

```text
                    (1,0,1)
                 /           \
           (2,2,8)           (2,0,4)
          /       \         /       \
     (0,1,1)   (1,1,2)  (2,1,5)   (0,2,4)
      /
 (1,2,5)
```

Step 3: compare `(2,2,8)` with its children and swap with `(0,1,1)`.

```text
                    (1,0,1)
                 /           \
           (0,1,1)           (2,0,4)
          /       \         /       \
     (2,2,8)   (1,1,2)  (2,1,5)   (0,2,4)
      /
 (1,2,5)
```

Step 4: compare `(2,2,8)` with its child `(1,2,5)` and swap once more.

```text
                    (1,0,1)
                 /           \
           (0,1,1)           (2,0,4)
          /       \         /       \
     (1,2,5)   (1,1,2)  (2,1,5)   (0,2,4)
      /
 (2,2,8)
```

This is the heap after the first extraction.

#### (2) Fill in the blank of Algorithm 2
After extracting `(i', j', (i')^2 + (j')^2)`, the next candidate with the same `j'` should be the successor in the same sorted list for fixed `j'`. Therefore the blank is

```text
(i' + 1, j', (i' + 1)^2 + (j')^2)
```

#### (3) Algorithm 2 for `N = 2`

Initial heap after the `for every j from 0 to N` part:

```text
        (0,0,0)
       /       \
  (0,1,1)   (0,2,4)
```

##### First repetition
Extract the root `(0,0,0)`.

Move the last element `(0,2,4)` to the root:

```text
        (0,2,4)
       /
  (0,1,1)
```

Heapify down by swapping with `(0,1,1)`:

```text
        (0,1,1)
       /
  (0,2,4)
```

Since `i' = 0 < 2`, insert

```text
(1,0,1).
```

After insertion and heap maintenance:

```text
        (1,0,1)
       /       \
  (0,2,4)   (0,1,1)
```

##### Second repetition
Extract the root `(1,0,1)`.

Move the last element `(0,1,1)` to the root:

```text
        (0,1,1)
       /
  (0,2,4)
```

This already satisfies the heap property.

Since `i' = 1 < 2`, insert

```text
(2,0,4).
```

After insertion:

```text
        (0,1,1)
       /       \
  (0,2,4)   (2,0,4)
```

This is the heap after the second repetition.

#### (4) Why Algorithm 2 works
For each fixed `j`, define the sequence

```text
Lj = (0, j, j^2), (1, j, 1 + j^2), ..., (N, j, N^2 + j^2).
```

For fixed `j`, this sequence is already sorted by `≼`, because the third component `i^2 + j^2` strictly increases as `i` increases.

Algorithm 2 initially inserts only the first element of each sequence `Lj`, so the heap size is exactly `N + 1`.

Whenever the minimum element `(i', j', (i')^2 + (j')^2)` is extracted, the only new candidate from the same sequence that can possibly come next is

```text
(i' + 1, j', (i' + 1)^2 + (j')^2),
```

and this successor is inserted only if `i' < N`.

Therefore:

- at any moment the heap contains at most one not-yet-output candidate from each `Lj`;
- the heap size is never more than `N + 1`;
- the root of the heap is always the smallest not-yet-output element in all of `S_N`.

Hence Algorithm 2 is exactly a `k`-way merge of the `N + 1` sorted sequences `L0, L1, ..., LN`, so it outputs all elements of `S_N` in the required order.
