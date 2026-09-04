---
sidebar_label: 2017年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Cache-Address-Mapping
  - Computer-Science.Computer-Architecture.Cache
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題4

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Answer the following questions regarding cache memory of a microprocessor with 32-bit memory-addressing.

(1) Consider cache memory with a capacity of $2^{15}$ bytes and a block size of 64 bytes. The cache memory uses a full associative scheme, a two-way set-associative scheme, or a direct mapping scheme. For each of those schemes, obtain the bit length for each of a tag, an index, and an offset.

(2) Consider cache memory with a capacity of 64 bytes and a block size of 8 bytes. Obtain the number of cache hits, when the hexadecimal memory addresses below are accessed by 4-byte read operations in this order, in case that the cache memory uses a full associative scheme, a two-way set-associative scheme, and a direct mapping scheme, respectively. Assume that the cache memory is empty at the beginning, and the cache block is replaced based on the LRU (Least Recently Used) algorithm.

```text
0x20, 0x48, 0x40, 0x4C, 0x58, 0x80, 0xB8, 0xC8, 0x40,
0x44, 0x48, 0x4C, 0x50, 0x54, 0x58, 0x30, 0x28
```

### 题目描述

考虑内存地址宽度为 $32$ bit 的微处理器缓存。

（1）缓存数据容量为 $2^{15}$ bytes，块大小为 $64$ bytes。对全相联、2 路组相联和直接映射三种方式，分别求地址中 tag、index、offset 的位数。

（2）缓存数据容量为 $64$ bytes，块大小为 $8$ bytes，初始为空且采用 LRU 替换。依次对下列十六进制地址执行 4-byte 读操作，分别求三种映射方式的命中次数：

```text
0x20, 0x48, 0x40, 0x4C, 0x58, 0x80, 0xB8, 0xC8, 0x40,
0x44, 0x48, 0x4C, 0x50, 0x54, 0x58, 0x30, 0x28
```

## **Kai**

### （1）

块内偏移恒为 $\log_2 64=6$ bit，共有 $2^{15}/2^6=2^9$ 个缓存行。

| 映射方式 | tag | index | offset |
|---|---:|---:|---:|
| 全相联 | $26$ | $0$ | $6$ |
| 2 路组相联 | $18$ | $8$ | $6$ |
| 直接映射 | $17$ | $9$ | $6$ |

其中 2 路组相联共有 $2^8$ 组，直接映射共有 $2^9$ 组。

### （2）

按块号 $\lfloor\text{address}/8\rfloor$ 模拟 LRU，命中/未命中序列为：

| 映射方式 | 访问结果（H：命中，M：未命中） | 命中次数 |
|---|---|---:|
| 全相联 | `MMMHMMMMHHHHMHHMM` | $7$ |
| 2 路组相联 | `MMMHMMMMHHHHMHHMM` | $7$ |
| 直接映射 | `MMMHMMMMMHMHMHHMM` | $5$ |

所有地址均为 4-byte 对齐，且一次读操作不会跨越 8-byte 块。
