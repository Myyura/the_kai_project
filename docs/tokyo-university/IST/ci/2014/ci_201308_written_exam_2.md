---
sidebar_label: 2013年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Operating-Systems.Page-Replacement
  - Computer-Science.Computer-Architecture.Performance-Analysis
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**


[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065610id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2013-8-exam.pdf).
Answer the following questions on virtual memory by paging.

The system consists of a processor, a main memory and a secondary storage (e.g. magnetic disks). The processor issues memory accesses using logical addresses. When the target of access is located in the main memory, the logical address is translated into the physical address by an address translation table. When the target of access is not located in the main memory, a page in the main memory is selected, and the selected page is swapped with the page in the secondary storage that contains the target of the access. The new physical address is then added to the address translation table.

Following is a glossary:
* Page miss ratio: Ratio of memory accesses where the targets are not in the memory among all the memory accesses.
* Page replacement algorithm: The algorithm that selects a page to be swapped into the secondary storage to assign a new page on the main memory.
* LRU (Least Recently Used): One of page replacement algorithms. A page that was accessed at the oldest time is selected for replacement.
* FIFO (First In First Out): One of page replacement algorithms. A page that was assigned to the main memory at the oldest time is selected for replacement.

(1) Assume that the access time of main memory is $Tm$ and the access time of secondary storage is $Ts$. The size of page is $4\text{KB}$, and no time is taken for all data transfer between the main memory and the secondary storage. Answer the page miss ratio and the average memory access time when the processor sequentially accesses the vector data. Here, the size of the vector is much larger than the size of main memory. Then, calculate the actual values when $Tm = 100\text{ns}$ and $Ts = 1\text{ms}$.

(2) Ordinary programs repeatedly access same memory data. In this case, the page replacement algorithm has large influence on the performance. LRU (Least Recently Used) and FIFO (First In First Out) are typical page replacement algorithms. Show an example of program structure where the LRU page replacement algorithm gives better performance than the FIFO algorithm.

(3) It is difficult to implement exact LRU algorithm for page replacement. For this reason, an approximation algorithm is used instead. Show an approximation algorithm of LRU for page replacement.

### 题目描述

回答分页虚拟内存问题。系统由处理器、主存和磁盘等辅存组成。处理器用逻辑地址访问内存：若目标页在主存，依据地址转换表得到物理地址；若不在主存，则选择一个主存页，与辅存中含目标数据的页进行交换，并把新的物理地址加入转换表。

- 缺页率：所有内存访问中，目标不在主存的访问比例。
- 页面置换算法：需要把新页调入主存时，选择被换出页的算法。
- LRU：换出最久未被访问的页面。
- FIFO：换出最早装入主存的页面。

1. 主存访问时间为 $T_m$，辅存访问时间为 $T_s$，页大小为 $4\,\mathrm{KB}$，并假定主存与辅存间传输整页数据本身不耗时。处理器顺序访问一个远大于主存的向量时，求缺页率和平均访存时间；再代入 $T_m=100\,\mathrm{ns}$、$T_s=1\,\mathrm{ms}$ 计算数值。
2. 普通程序会反复访问相同数据，置换策略会显著影响性能。给出一种程序访问结构，使 LRU 的性能优于 FIFO。
3. 精确 LRU 难以实现，实际常用近似算法。给出一种 LRU 近似页面置换算法。


## **Kai**

### (1) Sequential access

A page size in bytes does not by itself give the number of **memory accesses** per page. Let one access read an aligned vector element of $e$ bytes, where $e$ divides the page size $B=4096$ bytes. Assume a read-only stream, no prefetching, no interference, and that each new page is absent when first touched. Each page supplies $B/e$ consecutive accesses; only the first faults. Ignoring the negligible end-page effect for a long vector,

$$
\boxed{p_{\mathrm{miss}}=\frac e{4096}.}
$$

Assume a clean victim needs no disk write, and $T_s$ is the additional disk access latency to bring in a new page. The faulting access must still read its element from memory after the page arrives, so

$$
\boxed{T_{\mathrm{avg}}=(1-p)T_m+p(T_s+T_m)=T_m+pT_s.}
$$

With $T_m=100\,\mathrm{ns}$ and $T_s=1\,\mathrm{ms}=10^6\,\mathrm{ns}$:

| Explicit access-width assumption | Page miss ratio | Average access time |
| --- | --- | --- |
| One byte per access ($e=1$) | $1/4096\approx0.024414\%$ | $344.140625\,\mathrm{ns}$ |
| One four-byte element per access ($e=4$) | $1/1024\approx0.097656\%$ | $1076.5625\,\mathrm{ns}\approx1.07656\,\mu\mathrm{s}$ |
| One eight-byte element per access ($e=8$) | $1/512\approx0.195313\%$ | $2053.125\,\mathrm{ns}\approx2.05313\,\mu\mathrm{s}$ |

If every replacement writes a dirty victim and each disk read/write costs $T_s$, the average becomes $T_m+2pT_s$. If a convention instead defines $T_s$ as the **entire** miss-service time including the final memory access, use $(1-p)T_m+pT_s$. The omitted transfer time does not eliminate disk access latency or make the page/access unit ambiguity disappear.

### (2) A workload where LRU beats FIFO

Keep a small hot data structure in one page $A$ while scanning distinct cold pages $B,C,D,\ldots$. With two page frames, consider the concrete access sequence

```text
A, B, A, C, A, D, A
```

| Access | A | B | A | C | A | D | A | Total faults |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LRU | miss | miss | hit | miss | hit | miss | hit | 4 |
| FIFO | miss | miss | hit | miss | miss | miss | hit | 5 |

When $C$ is loaded, LRU evicts $B$ because $A$ was just reused. FIFO evicts $A$ because it was loaded first, even though its recent access makes it valuable. A loop that reads or updates hot metadata between successive cold-page reads has this structure. The example proves the requested advantage for this workload; it does not claim that LRU beats FIFO on every reference string.

### (3) Clock / second-chance replacement

Arrange the resident pages in a circular list and keep one reference bit $R$ per page plus a clock hand. Hardware sets $R=1$ whenever the page is accessed. On a page fault, inspect the page under the hand: if $R=1$, clear it and advance; if $R=0$, replace that page, set the new page's reference bit, and advance the hand for the next search. Thus a page accessed since its last inspection gets a second chance, while an unreferenced page can be evicted.

This needs one reference bit per frame and no exact ordering update on every memory reference, so it approximates recent use more cheaply than exact LRU. With no intervening accesses, at most one full pass clears the bits and the next inspected page is replaceable; it does not guarantee the exact least-recently-used victim. A dirty bit can additionally favor clean pages to reduce writeback cost. See the [OSTEP replacement-policy discussion](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf).
