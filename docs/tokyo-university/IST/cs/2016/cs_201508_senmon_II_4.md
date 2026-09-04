---
sidebar_label: 2015年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Direct-Mapped-Cache-Conflict-and-Hit-Rate
  - Computer-Science.Computer-Architecture.Cache-Aware-Loop-and-Register-Reuse
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2015年8月実施 専門科目II 問題4

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Consider the following situation on cache. The cache has fixed-length block size of $L$ bytes, and is $W$-way set-associative or direct-mapped (i.e. $W=1$). Assume write-back cache with the LRU replacement policy.

We consider multiplication of two $N\times N$ matrices in this problem. The matrices are declared in C language as follows.

```c
float A[N][N], B[N][N], C[N][N];
```

Here the size of float is $4$ bytes, the matrices A, B, and C are allocated to contiguous areas of memory, and the format is row-major order (that is, the element that follows A[0][0] is A[0][1]). Assume that the address of the first element of A is aligned to the block size $L$. The computation (called “matrix multiplication” hereafter) is the following.

```c
for (i=0; i< N; i++)
  for (k=0; k< N; k++) {
    float a_ik = A[i][k];
    for (j=0; j< N; j++) {
      float b_kj = B[k][j];
      C[i][j] += a_ik * b_kj;
    }
  }
```

In calculating cache hit ratios, only the data access to the arrays A, B and C should be taken into account. Disregard access to the other data and instruction fetch.

Answer the following questions.

(1) Describe briefly why cache can accelerate computation in general.

(2) Assume that the cache capacity is $8192$ bytes, $L=64$ and $W=4$. Calculate the cache hit ratio (approximately) in matrix multiplication with $N=512$.

(3) Next, assume that the cache capacity is $2048$ bytes, $L=64$ and $W=1$. Calculate the cache hit ratio (approximately) in matrix multiplication with $N=512$.

(4) Assume the same conditions as Question (3). Describe one programming technique that speeds up the matrix multiplication, and explain the speed-up effect quantitatively, for example by calculating the cache hit ratio. (You can introduce your own assumptions, if you want, for example on the latencies and the bandwidths of the main memory and the cache.)

### 题目描述

缓存块大小为 $L$ 字节，采用 $W$ 路组相联（$W=1$ 为直接映射）、LRU 替换和写回。三个 $N\times N$ 的 `float` 矩阵 $A,B,C$ 在内存中依次相邻地连续排列，各矩阵内部按行优先，`float` 为 $4$ 字节，且 $A[0][0]$ 按 $L$ 对齐。矩阵乘法代码为

```c
for (i = 0; i < N; i++)
  for (k = 0; k < N; k++) {
    float a_ik = A[i][k];
    for (j = 0; j < N; j++) {
      float b_kj = B[k][j];
      C[i][j] += a_ik * b_kj;
    }
  }
```

只统计对 $A,B,C$ 的数据访问。

（1）简述缓存通常能够加速程序的原因。

（2）缓存容量为 $8192$ 字节、$L=64,W=4,N=512$ 时，近似求命中率。

（3）缓存容量为 $2048$ 字节、$L=64,W=1,N=512$ 时，近似求命中率。

（4）在（3）的条件下，给出一种加速该矩阵乘法的编程方法，并定量说明效果，例如计算命中率。必要时可对主存和缓存的延迟、带宽等作适当假设。

## **Kai**

计算中按 $A,B,C$ 依次相邻存放，假设写缺失会装入缓存（write allocate），并把 `C[i][j] += ...` 计为一次读和一次写。于是总访问次数为

$$
T=N^2+3N^3.
$$

### (1)

程序通常具有时间局部性和空间局部性。缓存用较小而快速的存储器保留近期访问的数据及其相邻数据，使多数访问不必等待高延迟的主存，从而降低平均访存时间。

### (2)

每块容纳 $64/4=16$ 个 `float`，缓存有
$8192/(64\cdot4)=32$ 组。每个矩阵占 $4N^2=2^{20}$ 字节，即 $16384$ 块，是组数的整数倍，所以 $A,B,C$ 的对应块映射到同一组。

四路组相联足以同时保留当前的 $A$ 块、$C$ 块以及新旧 $B$ 块。故：

- $A$ 顺序读取，每块仅首次缺失，缺失数为 $N^2/16$；
- 每个 $i$ 都顺序扫描整个 $B$，缺失数为 $N^3/16$；
- 固定 $i$ 后，$C$ 的一行在第一次 $k$ 扫描时装入并一直保留，读缺失数为 $N^2/16$；每次写均紧接在读后，均命中。

因此

$$
H_4=1-\frac{(N^3+2N^2)/16}{N^2+3N^3}.
$$

代入 $N=512$ 得

$$
\boxed{H_4\approx0.97910=97.91\%}.
$$

### (3)

此时仍有 $2048/64=32$ 组，但每组只有一块。内层循环中 $B[k][j]$ 与 $C[i][j]$ 映射到同一组：读 $B$ 后读 $C$ 会互相逐元素驱逐。因此每次 $B$ 读和每次 $C$ 读都缺失，紧随其后的 $C$ 写命中。内层扫描还会遍历全部组，使下一次 $A[i][k]$ 也缺失。

唯一的命中是 $N^3$ 次 $C$ 写，故

$$
H_1=\frac{N^3}{N^2+3N^3}=\frac{N}{3N+1}.
$$

代入 $N=512$ 得

$$
\boxed{H_1\approx0.33312=33.31\%}.
$$

### (4)

可在内存布局中让 $C$ 的首地址相对 $B$ **错开一个缓存块**。例如额外分配 $16$ 个 `float`，令实际使用的 $C$ 指针从偏移 $64$ 字节处开始，同时仍以步长 $N$ 索引。这样同一 $j$ 处的 $B,C$ 块映射到相邻组，不再逐元素冲突。

此时 $B,C$ 的每个连续块均为首次访问缺失、随后 $15$ 次命中；$C$ 写仍命中。内层循环仍遍历全部组，故 $A$ 每次读取缺失。缺失总数近似为

$$
M_{\rm skew}=N^2+\frac{N^3}{16}+\frac{N^3}{16}
=N^2+\frac{N^3}{8}.
$$

所以

$$
H_{\rm skew}
=1-\frac{N^2+N^3/8}{N^2+3N^3}
\approx\boxed{95.77\%}\qquad(N=512).
$$

主存缺失次数由约 $2.687\times10^8$ 降至约 $1.704\times10^7$；当缺失代价主导运行时间时，访存停顿可减少约 $15.8$ 倍。
