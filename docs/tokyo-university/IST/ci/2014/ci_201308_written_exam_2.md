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
