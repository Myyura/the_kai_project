---
sidebar_label: "2013年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Computer-Architecture
  - Virtual-Memory
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

## **Kai**
### (1)

**Temporal locality:** The principle stating that if a data location is referenced then it will tend to be referenced again soon.
**Spatial locality:** The locality principle stating that if a data location is referenced, data locations with nearby addresses will tend to be referenced soon.

### (2)

The table containing the virtual to physical address translations in a virtual memory system. The table, which is stored in memory, is typically indexed by the virtual page number; each entry in the table contains the physical page number for that virtual page if the page is currently in memory.

### (3)

**Translation-Lookaside Buffer (TLB):** A cache that keeps track of recently used address mappings to try to avoid an access to the page table.

A TLB miss occurs when no entry in the TLB matches a virtual address. A TLB miss can indicate one of two possibilities:
1. The page is present in memory i.e. Page Table, and we need only create the missing TLB entry.
2. The page is not present in memory i.e. Page Table, and we need to transfer control to the operating system to deal with a page fault.

### (4)

**Page fault:** An event that occurs when an accessed page is not present in main memory.
**Process:**
*   **Exception:** Address translation fails $\rightarrow$ Hardware triggers a Page Fault Exception.
*   **Trap:** Trap to OS Kernel $\rightarrow$ Save current process state $\rightarrow$ Block the current process.
*   **Eviction:** Check if physical memory is full ($\rightarrow$ if full, select a victim page using specific policy $\rightarrow$ Evict the victim page to disk (write back if dirty)).
*   **Disk I/O:** Locate the missing page on Secondary Storage $\rightarrow$ Initiate DMA transfer to load page into physical memory.
*   **Context Switch:** While waiting for Disk I/O, OS schedules another process to run.
*   **Update:** Disk interrupt signals completion $\rightarrow$ OS updates Page Table and TLB.
*   **Restart:** Restore process state $\rightarrow$ Restart the instruction that caused the fault.

### (5)

| TLB miss by hardware | Page fault by both hardware & software |
| :--- | :--- |
| ① A frequent event which need high speed. | ① Involves disk I/O, leading the overhead of software to be negligible compared to the disk latency. |
| ② Will lead to find in memory which can be easy to implement by hardware. | ② Will lead to alarm the OS kernel and need complex controlling rather than hardware. |
| ③ Evicting policy is simple which is just the mapping implemented by gates. | ③ Have more complex evicting policy like LRU. |
