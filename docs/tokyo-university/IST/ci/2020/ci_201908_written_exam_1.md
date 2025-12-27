---
sidebar_label: '2019年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Dynamic-Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
点列 $v_0, v_1, \dots, v_{n-1}, v_0$ をこの順に結んでできる凸 $n$ 角形が与えられたとき、その凸 $n$ 角形の三角形分割とは、その内部を重なりなく三角形に分割する方法のことである。

まずは、凸 $n$ 角形の三角形分割の数を求める。その数を $C[n]$ と書く。例えば、$C[4]$ = 2 である。

(1) $C[5], C[6], C[7]$ の値を答えよ。

(2) $C[n]$ を $C[2], C[3], C[4], \dots, C[n-1]$ の各式を用いて書き表せ。ただし、$C[2] = 1, C[3] = 1$ とする。

(3) 任意の $n$ に対する $C[n]$ を求めるアルゴリズムは、以下のような疑似コードで表現できる。
$①$ に当てはまるコードを答えよ。またこのアルゴリズムの計算量（オーダー）を答えよ。

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


## **Description (English)**
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


### (4)
Based on the assumptions:

$$
E[i,m]=E[i,i'-i]+E[i'+1,m-(i'-i)]+D(i,i')+D(i',i'+1)+D(i'+1,i)
$$

Basically, we choose an arbitrary triangle $(i,i',i'+1)$ and using the fact all the other information is known. Then we look at the cost of the shape left of the triangle and right of it and combine with the cost of the triangle itself.

### (5)
The following cose assumes (based on no. 4) that $E[i',m']$ and $D(i,j)$ are given.

```
minimum_cost = +infinity
for (i=1...n-2)
    local_cost = E[0,i+1]+E[i+1,n-i+1]+D(0,i)+D(i,i+1)+D(i+1,i)
    minimal_cost = min(local_cost, minimal_cost)
return minimal_cost
```

In this code we go over all possible divisions of the shape n-gon into 2 subshapes and compute the minimum for these with the addition of the dividing edge. This uses the formula acquired in (4).

The time complexity for this, assuming that the information is known as stated in (4) is $O(n)$.