---
sidebar_label: '2013年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Computer-Architecture
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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