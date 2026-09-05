---
sidebar_label: 2013年8月実施 専門 第2問
tags:
  - Tokyo-University
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Computer-Architecture
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2013年8月実施 専門 第2問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

Answer the following questions on virtual memory.

(1) Locality of reference can be divided into temporal locality and spatial locality. Explain these two types of locality.

(2) Explain what a page table is.

(3) Explain what a Translation Lookaside Buffer (TLB) is, and how a TLB miss is related to the page table.

(4) Suppose a page fault occurs during the execution of a load instruction. Explain the process from the address calculation of the instruction until the restart of the instruction after the page fault handling.

(5) Some processors handle a TLB miss by hardware. On the other hand, it is exceptional to handle a page fault only by hardware. Discuss the reason for such a difference.

### 题目描述

回答下列关于虚拟内存的问题。

(1) 访问局部性可分为时间局部性与空间局部性，解释这两种局部性。

(2) 解释什么是页表。

(3) 解释什么是地址转换后备缓冲器（Translation Lookaside Buffer，TLB），以及 TLB 未命中与页表之间的关系。

(4) 假设执行一条装载指令时发生缺页。从该指令进行地址计算开始，说明地址转换、缺页处理，直至处理完成后重新执行该指令的全过程。

(5) 某些处理器用硬件处理 TLB 未命中，而完全只用硬件处理缺页却很少见。讨论造成这一差异的原因。

## **Kai**
### (1)

- **Temporal locality:** The principle stating that if a data location is referenced then it will tend to be referenced again soon.
- **Spatial locality:** The locality principle stating that if a data location is referenced, data locations with nearby addresses will tend to be referenced soon.

### (2)

The table containing the virtual to physical address translations in a virtual memory system. The table, which is stored in memory, is typically indexed by the virtual page number; each entry in the table contains the physical page number for that virtual page if the page is currently in memory.

### (3)

**Translation-Lookaside Buffer (TLB):** A cache that keeps track of recently used address mappings to try to avoid an access to the page table.

A TLB miss means that the required translation is not cached in the TLB. The page table is then consulted, by a hardware page walker or a software handler. If it contains a valid resident mapping with suitable permissions, that mapping can fill the TLB. If the mapping is nonresident, invalid, or disallows the access, the processor raises the corresponding exception; a TLB miss alone does not imply a page fault.

### (4)

For a valid but nonresident page, the sequence is:

1. The load computes its effective virtual address from its operands. The MMU separates the virtual page number and page offset and checks the TLB.
2. On a TLB miss, the page-table lookup finds that the page is not resident. The processor saves the faulting address and instruction state and traps to the operating system.
3. The operating system checks that the address and access are legal, then obtains a free physical frame. If necessary, it selects a victim, writes it back if dirty, and invalidates the old mapping and any stale TLB entries.
4. The page is read from its backing file or swap storage. While I/O is pending, the process can block and another process can run. A demand-zero page can instead be initialized without disk I/O.
5. When the page is ready, the operating system installs the resident page-table entry and performs the required translation-cache synchronization. The TLB is either filled explicitly or refilled on the next access.
6. The faulting instruction is restarted. Its address now translates to the new frame plus the original page offset, and the load completes.

An illegal address or access is reported to the process rather than being repaired and restarted. Page faults are not limited to disk-backed nonresident pages; permission checks and lazy memory allocation can also cause them.

### (5)

A hardware TLB miss handler performs a regular, architecture-defined page-table walk and fills a small cache, so it can be implemented efficiently in hardware. Page-fault handling requires operating-system policy and state: checking mappings and permissions, allocating physical frames, reclaiming pages, consulting files or swap, performing I/O, and scheduling processes. These decisions depend on the operating system and workload. Hardware detects the fault; software supplies this flexible policy. When storage I/O is needed, its latency also dominates the software handler's overhead.
