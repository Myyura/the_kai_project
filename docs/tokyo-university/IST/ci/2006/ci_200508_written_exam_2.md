---
sidebar_label: '2005年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Locality-of-Reference
  - Computer-Science.Computer-Architecture.Sequential-Access-Cache-Hit-Rate
  - Computer-Science.Computer-Architecture.Two-Way-Set-Associative-Cache-Datapath
  - Computer-Science.Computer-Architecture.Cache-Hit-Rate-Optimization
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2005年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

プロセッサのキャッシュメモリに関する以下の問いに解答せよ．

(1) キャッシュメモリにより，プログラムの実行が高速化する理由を 5 行以内で述べよ．

(2) プロセッサは，命令キャッシュとデータキャッシュを別個に持ち，おのおののキャッシュのブロックサイズは 32 バイトであると仮定する．十分に大きい整数 $N$ に対して，32 ビットのデータを構成要素とするベクトル $A$ の各要素を定数倍するプログラムを実行するときの，データキャッシュのヒット率を求めよ．

プログラム例 (C 言語で記述する場合)
```c
for(i = 0; i < N; i = i + 1)
    A[i] = k * A[i];
```

(3) メモリ，比較器，マルチプレクサ，レジスタ (flip-flop) などを用いて，2 way set associative のキャッシュメモリのブロック図を示せ．

(4) キャッシュメモリのヒット率を向上させるハードウェア技術およびプログラミング技法を合わせて 5 個示し，おのおのを 2 行以内で記述せよ．

### English
Answer the following questions about a cache memory in a processor.

(1) Describe the reason within five lines why cache memory increases execution speed of programs.

(2) Suppose that the processor has an instruction cache and a data cache, the size of a cache block is 32 bytes. Calculate the cache hit ratio of a program that multiplies each element of a vector $A$ whose size is sufficiently large $N$ and whose elements are 32-bit long.

Example of the program (written in C programming language)
```c
for(i=0; i < N; i = i + 1)
    A[i] = k * A[i];
```

(3) Show a block-diagram of a 2-way set associative cache memory, using memories, comparators, multiplexers, registers (flop-flops) etc.

(4) Describe five methods to increase cache hit ratio both in hardware technology and programming techniques. Each item should be described within two lines.

### 题目描述

回答以下关于处理器高速缓存的问题。

1. 在五行以内说明高速缓存能够加快程序执行的原因。
2. 假设处理器分别设有指令缓存与数据缓存，两者的缓存块大小均为 32 字节。向量 $A$ 的元素是 32 位数据，长度 $N$ 足够大；运行下面的 C 程序，把每个元素乘以常数 $k$。求该程序的数据缓存命中率。

```c
for(i = 0; i < N; i = i + 1)
    A[i] = k * A[i];
```

3. 使用存储器、比较器、多路选择器、寄存器（触发器）等部件，画出二路组相联高速缓存的框图。
4. 合计列出五种提高缓存命中率的硬件技术或编程方法，每种方法用不超过两行说明。
