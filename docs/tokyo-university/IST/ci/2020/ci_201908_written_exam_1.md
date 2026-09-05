---
sidebar_label: 2019年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Minimum-Cost-Polygon-Triangulation
  - Discrete-Mathematics.Combinatorics.Catalan-Number
  - Mathematics.Geometry
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[原題](https://www.i.u-tokyo.ac.jp/edu/course/ci/2019-8-exam.pdf)

### 日本語

点列 $v_0, v_1, \dots, v_{n-1}, v_0$ をこの順に結んでできる凸 $n$ 角形が与えられたとき、その凸 $n$ 角形の三角形分割とは、その内部を重なりなく三角形に分割する方法のことである。

まずは、凸 $n$ 角形の三角形分割の数を求める。その数を $C[n]$ と書く。例えば、$C[4]$ = 2 である。

(1) $C[5], C[6], C[7]$ の値を答えよ。

(2) $C[n]$ を $C[2], C[3], C[4], \dots, C[n-1]$ の各式を用いて書き表せ。ただし、$C[2] = 1, C[3] = 1$ とする。

(3) 任意の $n$ に対する $C[n]$ を求めるアルゴリズムは、以下のような疑似コードで表現できる。
$\textcircled{1}$ に当てはまるコードを答えよ。またこのアルゴリズムの計算量（オーダー）を答えよ。

```text
C[2] = 1; C[3] = 1;
for(i=4...n)
    C[i] = 0;
for(i=4...n)
    for(j=0...i-3)
        [        ①        ]
return C[n];
```

次に、凸 $n$ 角形のコスト最小三角形分割を求める。ここで、三角形分割のコストとは、構成する三角形のコストの和であるとし、三角形のコストとはその三角形を構成する辺のコストの和であるとする。
また、凸 $n$ 角形を構成する任意の $2$ 頂点 $v_i$ と $v_j$ を結ぶ辺のコスト $D[i,j] (=D[j,i])$ はすべて与えられているものとする。

(4) 与えられた凸 $n$ 角形のコスト最小三角形分割を求める問題を、小問題に分けて解いていくことを考える。
頂点 $v_i$ から時計回りに $m$ 個の頂点を訪問し、$v_i$ に戻ってくる経路によって囲まれる多角形について、コスト最小の三角形分割のコストを $E[i,m]$ と書くことにする（下図参照）。
ここで、$E[i',m']$ が $i' = 0, ..., n-1, m' = 2, ..., m-1$ についてすべて計算済みであるとして、$E[i,m]$ を $E[i',m']$ と $D[i,j]$ の式で表せ。ただし、$E[i,2] = 0 \ (i=0, ..., n-1)$ とする。またその状況を説明する図も付して示せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_1_p1.png" width="350" height="200" alt=""/>
</figure>

(5) 上記 (4) で得られた関係式を用いて、任意の凸 $n$ 角形の三角形分割の最小コストを求めるアルゴリズムの疑似コードを、10 行程度で示せ。またその計算量（オーダー）を答えよ。


### English
Given a convex n-gon made by connecting a point sequence $v_0, ..., v_{n-1}, v_0$ in this order, a triangulation of the convex n-gon is a way of dividing its interior into triangles without overlap.

First, we count the number of triangulations of a convex n-gon. We denote the number as $C[n]$: For example, $C[4]=2$.

$(1)$ Answer the values of $C[5]$, $C[6]$, and $C[7]$.

$(2)$ Represent $C[n]$ as a function of $C[2]$, $C[3]$, $C[4]$, ..., and $C[n-1]$. We define $C[2]=1$ and $C[3]=1$.

$(3)$ The following pseudo-code implements an algorithm for computing $C[n]$ for arbitrary $n$. Answer the code that fills [ ① ]. Also answer the computational complexity (order) of the algorithm.

```text
C[2] = 1; C[3] = 1;
for(i=4...n)
    C[i] = 0;
for(i=4...n)
    for(j=0...i-3)
        [        ①        ]
return C[n];
```

Next, we find the triangulation of a convex n-gon with a minimum cost. Here, the cost of a triangulation is defined as the sum of the cost of triangles in the triangulation, and the cost of a triangle is defined as the sum of the cost of the edges composing the triangle. Assume that all $D[i,j]$ ($=D[j,i]$), the costs of the edges connecting an arbitrary pair of vertices ($v_i, v_j$) of the n-gon, are given.

$(4)$ We consider solving the problem of finding a triangulation with a minimum cost by dividing the problem into subproblems. We denote $E[i,m]$ as the cost of triangulating a polygon made by a path starting from $v_i$, visiting $m$ vertices clockwise, and then coming back to $v_i$ (see the figure below). Assume that $E[i',m']$ are all given for $i'=0, ..., n-1$ and $m'=2, ..., m-1$. Represent $E[i, m]$ as a function of $E[i', m']$ and $D[i, j]$. We define $E[i, 2]=0$ $(i=0, ..., n-1)$. Also draw a figure explaining the situation.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_1_p1.png" width="350" height="200" alt=""/>
</figure>

$(5)$ Give approximately 10-line pseudo-code implementing an algorithm to compute the minimum cost of triangulating an arbitrary n-gon using the formula obtained in (4). Also answer the computational complexity (order) of the algorithm.

### 题目描述

按顺序连接 $v_0,v_1,\ldots,v_{n-1},v_0$ 得到凸 $n$ 边形。其三角剖分是用互不重叠的三角形恰好覆盖内部。记三角剖分数为 $C[n]$，例如 $C[4]=2$。

1. 求 $C[5],C[6],C[7]$。
2. 用 $C[2],C[3],\ldots,C[n-1]$ 表示 $C[n]$，约定 $C[2]=C[3]=1$。
3. 下列伪代码计算任意 $n$ 的 $C[n]$。填写空格 ①，并给出算法复杂度。

   ```text
   C[2] = 1; C[3] = 1;
   for(i=4...n)
       C[i] = 0;
   for(i=4...n)
       for(j=0...i-3)
           [        ①        ]
   return C[n];
   ```

接着求凸 $n$ 边形的最小成本三角剖分。一次剖分的成本为所含各三角形成本之和；三角形成本为其三条边成本之和。任意两个顶点 $v_i,v_j$ 间边成本 $D[i,j]=D[j,i]$ 全部已知。

4. 把问题分解为子问题。定义 $E[i,m]$：从 $v_i$ 出发按顺时针访问共 $m$ 个顶点并回到 $v_i$ 所围多边形的最小剖分成本，几何含义见原图。假设所有 $i'=0,\ldots,n-1$、$m'=2,\ldots,m-1$ 的 $E[i',m']$ 已算出，且 $E[i,2]=0$。用这些 $E$ 和 $D[i,j]$ 表示 $E[i,m]$，并配图说明分解情形。
5. 利用第 4 问递推式，用约 10 行伪代码给出任意凸 $n$ 边形最小剖分成本算法，并分析复杂度。

## **Kai**
### (1)
`C[4]=2`, `C[3]=1`, `C[2]=1`

`C[5]=5`

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_1_p2.png" width="376" height="76" alt=""/>
</figure>

`C[6]=14`

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_1_p3.png" width="381" height="94" alt=""/>
</figure>

`C[7]=42`

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_1_p4.png" width="384" height="337" alt=""/>
</figure>

### (2)
Based on the representation we can see that:

$$
\begin{aligned}
C[N] &= C[2]\cdot C[N-1]+ C[3]\cdot C[N-2]+...+C[3]\cdot C[N-2]+C[2]\cdot C[N-1] \\
C[N] &= \sum_{i=2}^{N-1} {C[i]\cdot C[N-i+1]}
\end{aligned}
$$

### (3)
To complete the code we must add:

```
C[i] = C[i] + C[j+2]*C[i-j-1]
```
This will allow the sum to equal the equation found in (2).

The algorithm performs $\Theta(n^2)$ arithmetic operations and stores $\Theta(n)$ integers. These bounds use unit-cost arithmetic; Catalan numbers grow with $n$, so arbitrary-precision bit costs are larger.


### (4)
The vertex indices in the definition are cyclic, so they are interpreted modulo $n$. For the non-wrapping notation below we write $v_i,\ldots,v_{i+m-1}$ with $i+m-1\le n-1$; a wrapping subproblem uses the same formula after reducing every vertex index modulo $n$.

In the figure given (a sub-polygon also a clockwisely arranged point sequence), any triangulation has a triangle including $(v_i, v_{i+m-1})$. This triangle has another node $v_k, ~k=i+1,i+2,\dots,i+m-2$. So we can traverse $v_k$.
在题目给的图（顺时针 sub-polygon）中，任意一种三角剖分必定有一个三角形包含 $(v_i, v_{i+m-1})$，这个三角形另有一个节点 $v_k, ~k=i+1,i+2,\dots,i+m-2$. 所以我们可以遍历 $v_k$.

For any $v_k$, the polygon is naturally divided into two clockwise point sequences: $v_i,\dots,v_k$ with $k-i+1$ vertices and $v_k,\dots,v_{i+m-1}$ with $i+m-k$ vertices which corresponds to `E[i,k-i+1]` and `E[k,i+m-k]` respectively.

Also, the triangulation cost in the sub-polygon $v_i,\dots,v_{i+m-1}$ has the created edge $(v_i, v_{i+m-1})$, which corresponds to `D[i,i+m-1]`; and two edges are connected when we choose $v_k$ corresponding to `D[i,k]` and `D[k,i+m-1]`.

So

$$
E[i,m]=\min_{k=i+1,\dots,i+m-2} \{E[i,k-i+1]+E[k,i+m-k]+D[i,k]+D[k,i+m-1]+D[i,i+m-1]\}.
$$

![The triangle at the base edge divides the polygon into left and right subproblems.](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci/2020/tokyo-ci-2019-triangulation.svg)

The triangle contributes all three edge costs. An internal diagonal occurs in two adjacent triangles and is therefore counted twice, exactly as required by the definition of cost.

### (5)

```pseudocode
E[i,m] = 2-D array with all infinity, size n*(n+1)
for i = 0 to n-1
  E[i,2] = 0
for m = 3 to n:
  for i = 0 to n-m:
    for k = i+1 to i+m-2:
      E[i,m] = min(E[i,m], E[i,k-i+1]+E[k,i+m-k]+D[i,k]+D[k,i+m-1]+D[i,i+m-1])
return E[0,n]
```
The time complexity is $\Theta(n^3)$ because of the 3-nested loop, and the space complexity is $\Theta(n^2)$.
