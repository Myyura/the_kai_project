---
sidebar_label: 2018年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Discrete-Mathematics.Graph-Algorithms.Breadth-First-Search
  - Mathematics.Linear-Algebra.Matrix-Limit
  - Mathematics.Fourier-Analysis.Convolution
  - Computer-Science.Programming
  - Computer-Science.Graphics
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**

[原題（日本語）](https://www.i.u-tokyo.ac.jp/edu/course/ci/2018-8-exam.pdf)

### 日本語

$n \times n$ 点（ピクセル）からなる $2$ 次元 $256$ 階調グレースケール画像について考える。
なお、各点は、縦横斜めの近傍点とつながっているものとする（下図参照）。
各ピクセル $p$ は `Pixel` という型で表現し、その輝度は `p.brightness` と表現する。
画像は、$n \times n$ の `Pixel` の配列 `P` として与えられる。擬似コード内では、基本的なデータ構造を適宜利用してよい。
計算量については、$n$ の関数として示せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p1.png" width="185" alt=""/>
</figure>

(1) 黒い背景に白い物体がいくつか写っているとする（下図参照）。
そのうちの1つの物体の面積を求める方法として、以下のような方法が考えられる。

「ある閾値に対して、それよりも明るい点のみを残し、それ以外の点を考慮からはずす。残っている点から一つ選び、その点を含む連結領域の大きさ（点の数）を計算する。」

この計算を再帰呼び出しによって行うアルゴリズムを 20 行以内の擬似コードで示し、その計算量を $O$ 記法を用いて答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p2.png" width="165" height="165" alt=""/>
</figure>

(2) 以下のような方法で、白い背景の画像に写っている黒い曲線を抽出することを考える（下図参照）。自己交差はないものとする。

「両端の $2$ 点（与えられているものとする）を連結する点列のうち、点列上の点の明るさの合計が最小になるものを求める。」

この計算を効率よく行うアルゴリズムを 20 行以内の擬似コードで示し、その計算量を $O$ 記法を用いて答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p3.png" width="165" height="165" alt=""/>
</figure>

(3) 画像を点列で左右に分割する方法として（下図参照）、以下のような方法が考えられる。

「画像の上端と下端を結び、各行につき 1 点を経由するような連結された点列を考える。そのような点列のうち、点の明るさの合計が最小になるような点列を求める。」

この計算を効率よく行うアルゴリズムを 20 行以内の擬似コードで示し、その計算量を $O$ 記法を用いて答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p4.png" width="165" height="165" alt=""/>
</figure>

(4) 画像をぼかす方法として、以下のような処理が考えられる。

「各内部点（近傍を 8 つ持つ点）について、その 8 近傍点の輝度の平均値を計算する。すべての内部点についてこの平均値を計算した後、すべての内部点の輝度を対応する平均値へと同時に変更する。」

ここで、内部点の元の輝度を並べたベクトルを `x`、変更後の輝度を 1 列に並べたベクトルを `x'`、外部点（画像中の点のうち、内部点以外の点）の輝度を並べたベクトルを `b` として、`x`, `x'`, `b` の関係を行列を使って表現しなさい。
適切に行列を定義して、`x`, `x'`, `b` の関係式を示せ。

(5) (4) における処理を画像に対して無限回適用すると、画像の輝度 `x` は $x^\text{inf}$ に収束する。
$x^\text{inf}$ を、(4) で定義した行列を用いて解析的な式で表せ。ただし、式に極限は含まないものとする。

### English
Consider a 256-level 2-dimensional gray-scale image with $n \times n$ points (pixels). Assume that each point is connected to vertical, horizontal, and diagonal neighbors as shown on the right. We represent each pixel $p$ using a type Pixel and its brightness as $p.\text{brightness}$. An image is given as an $n \times n$ array $P$ of Pixels. You can use basic data structures in a pseudo-code. Computational complexity should be given as a function of $n$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p1.png" width="185" alt=""/>
</figure>


(1) Assume that we have multiple white objects in a black background as shown on the right. We consider the method of computing the area of one of the white objects as follows.

"We keep points that are brighter than a given threshold and ignore the rest. We then pick a point from the remaining points and compute the size (number of points) of the connected region containing the point."

Give a pseudo-code (equal or less than 20 lines) of an algorithm that executes the computation using recursion and answer its computational complexity using the big-$O$ notation.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p2.png" width="165" height="165" alt=""/>
</figure>

(2) We consider the problem of detecting a black curve in a white background (as shown on the right) as follows. Assume that there is no self-intersection.

"Consider a connected point sequence that connects two end points (assume that the end points are given). Among such point sequences, we would like to obtain one with the minimum total brightness (sum of point brightness on a sequence) along this sequence."

Give a pseudo-code (equal or less than 20 lines) of an algorithm that executes the computation efficiently and answer its computational complexity using the big-$O$ notation.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p3.png" width="165" height="165" alt=""/>
</figure>

(3) We consider the problem of dividing an image into left and right at a point sequence (as shown on the right) as follows.

"Consider a point sequence that connects top and bottom of the image, containing a single point in each row. Among such point sequences, we would like to obtain one with the minimum total brightness."

Give a pseudo-code (equal or less than 20 lines) of an algorithm that executes the computation efficiently and answer its computational complexity using the big-$O$ notation.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p4.png" width="165" height="165" alt=""/>
</figure>

(4) We blur an image by applying the following operation to the image.

"For each internal point (a point that has 8 neighbors), we compute the average of brightness of its 8 neighbors. Once we have computed this average for all the internal points, we update the brightness of each internal point to the corresponding average."

We define three vector representations, $x, x',$ and $b$ where $x$ is a vector listing the original brightness of internal points, $x'$ is a vector listing the updated brightness of the internal points, and $b$ is a vector listing the brightness of the external points (the points of the image other than the internal points). We want to represent the relationship between $x, x',$ and $b$ using matrices. Define matrices appropriately and give an equation that describes the relationship using the matrices.

(5) The brightness of the points $x$ converges to $x^{\text{inf}}$ after applying the operation defined in (4) for an infinite number of times. Write down an analytic formula for $x^{\text{inf}}$ using the matrices defined in (4). Do not use limit in the formula.

### 题目描述

考虑一幅由 $n\times n$ 像素组成的 256 级灰度图。每个像素与横、竖、斜方向的相邻像素相连，即内部点有 8 个邻点。像素 $p$ 的类型为 `Pixel`，亮度为 `p.brightness`；整图以 `Pixel` 二维数组 `P` 给出。伪代码可使用基本数据结构，复杂度均写成 $n$ 的函数。

1. 图像为黑色背景上的若干白色物体。给定阈值，先仅保留亮度高于阈值的点，再任选一个保留点，计算包含它的连通区域像素数作为某个物体面积。用不超过 20 行伪代码给出递归算法，并用 $O$ 记号分析复杂度。
2. 从白色背景中提取一条无自交黑曲线。已知两个端点，在连接二者的所有相邻像素序列中，求沿途像素亮度总和最小者。用不超过 20 行伪代码给出高效算法并分析复杂度。
3. 用一条连接图像上、下边界且每行恰经过一个像素的连通点列把图像分为左右两部分；在所有此类点列中，求像素亮度和最小者。用不超过 20 行伪代码给出高效算法并分析复杂度。
4. 定义一次模糊操作：对每个内部点计算其 8 个邻点亮度平均值，全部算完后同时把所有内部点改为对应平均值。把原内部点亮度列为向量 `x`，更新后为 `x'`，边界等非内部点亮度列为 `b`。恰当定义矩阵并写出 `x`、`x'`、`b` 的关系式。
5. 无限重复第 4 问后，内部亮度 `x` 收敛为 $x^{\mathrm{inf}}$。用第 4 问矩阵写出不含极限符号的解析表达式。

## **Kai**
### (1)
Grayscale image, represented by $n\times n$ array of names `P` of `Pixels`. Each pixel `p` has `p.brightness` which is a 256-level value.

<u>Algorithm:</u>

Given a group of points `G` and a given point `p=(i,j)` we will check on a copy of the points:
1. If the current pixel does not exists in the remaining group we return 0.
2. Else, we mark it as visited.
3. We will call on all neighbores we find recursively with the modified data (the visited point).
4. we will add the number found by the recursion to 1 and continue.

The recursive search reaches exactly the connected component containing the starting pixel.

- `P`: a copy of the array, by reference
- `pi`, `pj`: index i and j of the current pixel
- `th`: the threshold
```
function size_of_area(P, pi, pj, th, visited):
    if pi < 0 or pi >= n or pj < 0 or pj >= n: return 0
    if visited[pi,pj] or P[pi,pj].brightness <= th: return 0
    visited[pi,pj] = true
    val = 1
    for di = -1 to 1:
        for dj = -1 to 1:
            if di != 0 or dj != 0:
                val += size_of_area(P, pi+di, pj+dj, th, visited)
    return val
```

Call the function with an $n\times n$ all-false `visited` array.

The worst-case time and space are $O(n^2)$, since each of the $n^2$ pixels is visited at most once.

### (2)
Using a single-source shortest-path algorithm, we find the minimum-brightness path from `p1` to `p2`. All weights are nonnegative, so Dijkstra's algorithm applies.

Let us define:
- `PQ`: minimum priority queue of `(distance, pixel)` pairs.
- `W`: weight array for all pixels.

```
function lowest_sum_of_connection(P, p1, p2):
    W[*] = infinity; prior[*] = null
    W[p1] = p1.brightness
    PQ = [(W[p1], p1)]
    while PQ not empty:
        (d, u) = PQ.pop_min()
        if d != W[u]: continue
        if u == p2: return path_from_prior(prior, p2)
        for each valid eight-neighbor v of u:
            nd = d + v.brightness
            if nd < W[v]:
                W[v] = nd; prior[v] = u
                PQ.insert((nd, v))

```
Time complexity is $O(n^2\cdot log\space n)$ since there are at most $O(n^2)$ inserts to the PQ and each insert takes $O(log\space n)$.

### (3)
Because the path contains exactly one pixel in each row, the graph is acyclic from one row to the next and dynamic programming is more efficient than general SSSP.

```
function best_vertical_partition(P):
    for j = 0 to n-1: W[0,j] = P[0,j].brightness
    for i = 1 to n-1:
        for j = 0 to n-1:
            q = argmin W[i-1,q] over valid q in {j-1,j,j+1}
            W[i,j] = P[i,j].brightness + W[i-1,q]
            prior[i,j] = q
    j = argmin W[n-1,j]
    return path obtained by following prior from (n-1,j)
```
The time and path-reconstruction space are $O(n^2)$.

#### Alternative: Dijkstra's algorithm with a super-source

Add a vertex $s$ with an edge of weight `P[0,j].brightness` to every
top-row pixel `(0,j)`. For each pixel `(i,j)` with $i<n-1$, add edges to
the valid pixels `(i+1,j-1)`, `(i+1,j)`, and `(i+1,j+1)`, assigning each
edge the brightness of its destination. A shortest path from $s$ to the
last row is then a minimum-brightness vertical partition.

```
function best_vertical_partition_dijkstra(P):
    W[*] = infinity; prior[*] = null
    W[s] = 0
    PQ = [(0, s)]
    while PQ not empty:
        (d, u) = PQ.pop_min()
        if d != W[u]: continue
        for each outgoing edge (u,v) of weight c:
            if d + c < W[v]:
                W[v] = d + c
                prior[v] = u
                PQ.insert((W[v], v))
    j = argmin W[n-1,j]
    return path obtained by following prior from (n-1,j), omitting s
```

The graph has $n^2+1$ vertices and $O(n^2)$ edges, so a binary-heap
implementation takes $O(n^2\log n)$ time and $O(n^2)$ space.

### (4)
Assuming an image such as the internal points (blue) are all pixels in range $(i,j),\space i\in[1,n-2],\space j\in[1,n-2]$. And the external points (red) are on the edges of the pixel matrix.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201808_1_p5.png" width="300" height="300" alt=""/>
</figure>

We define $x'=\frac{1}{8}\mathbf{A}x+\frac{1}{8}\mathbf{B}b$ for vectors $x$ and $b$. Such that:
- $\mathbf{A}$ is a ${0,1}$ matrix of dimension $(n-2)^2\times (n-2)^2$, with $A_{uv}=1$ exactly when internal pixels $u,v$ are neighbors.
- $\mathbf{B}$ is a ${0,1}$ matrix of dimension $(n-2)^2\times 2(2n-2)$, with $B_{uv}=1$ exactly when internal pixel $u$ and boundary pixel $v$ are neighbors.

### (5)
When the method in (4) is repeated, the boundary vector $b$ remains fixed and its values propagate through the internal pixels. In particular, when $b=\mathbf 0$, the internal vector converges to $\mathbf 0$.

At the fixed point,

$$
x^{\mathrm{inf}}=\frac18(Ax^{\mathrm{inf}}+Bb).
$$

For $n\ge3$, every internal pixel can reach the fixed boundary in at most $n$ neighbor steps. The averaging matrix $Q=A/8$ is substochastic, and every row sum of $Q^n$ is at most $1-8^{-n}<1$, because at least one such path leaves the interior. Hence $\rho(Q)<1$, so $8I-A$ is invertible. The averages here are real-valued; no intermediate rounding is applied. Therefore

$$
\boxed{x^{\mathrm{inf}}=(8I-A)^{-1}Bb}.
$$
