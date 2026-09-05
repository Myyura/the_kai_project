---
sidebar_label: 2021年8月実施 専門 第2問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Cache
  - Computer-Science.Computer-Architecture.Multi-Level-Cache
  - Computer-Science.Computer-Architecture.Performance-Analysis
  - Computer-Science.Computer-Architecture.Write-Back-Policy
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Operating-Systems.Page-Table
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2021年8月実施 専門 第2問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

Suppose a computer comprising memory hierarchy presented in Fig.

(1) Describe the characteristics of the cache and the characteristics of the auxiliary memory (secondary storage) in comparison with the main memory. Present a specific example of a memory device utilized for the cache and a specific example of a memory device utilized for the auxiliary memory.

(2) Suppose that the computer presented in Fig. achieved a CPI (Cycles Per Instruction) of 1.50 in executing a program A which induced no memory stalls, while the computer yielded an instruction cache miss rate of 1 % and a data cache miss rate of 4 % in executing another program B. In either case, no inputs or outputs to the auxiliary memory were observed, all the instructions were executed serially, and the branch prediction was not performed. Assume that 60 % of all the instructions of the program B were load-store instructions, and a penalty of 100 cycles was incurred for a cache miss. Find the CPI of the computer in executing the program B.

(3) Suppose that, in the case of (2), after secondary cache was installed between the cache and the main memory, the rate of accessing the main memory for the instruction fetch and the data load-store was reduced to 0.5 % in executing the program B. In this case, no inputs or outputs to the auxiliary memory were observed, all the instructions were executed serially, and the branch prediction was not performed. Assume that an access to the secondary cache incurred 10 cycles. Find the speedup ratio that the secondary cache achieved for the execution of the program B.

(4) A controller of virtual memory usually performs a write to the auxiliary memory in the write-back policy. Describe the adequacy of employing the write-back policy for the controller in terms of the execution speed of computers and the persistence of data.

(5) Suppose virtual memory where the virtual address length is 32 bits, the page size is 4096 bytes, and the page entry length is 4 bytes. Assume that the page table is structured with a single array. Find the size of the page table necessary for executing a program which invokes 100 concurrent processes.

(6) Briefly describe two effective approaches to reduce the size of the page table.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_202108_2_p1.png" width="400" alt=""/>
</figure>

### 题目描述

考虑具有上图所示存储层次的计算机，回答下列问题。

(1) 以主存为参照，说明缓存和辅助存储器（二级存储）的特性，并分别举出一种可用于缓存、辅助存储器的具体存储器件。

(2) 该计算机执行不产生内存停顿的程序 A 时，CPI 为 $1.50$；执行程序 B 时，指令缓存未命中率为 $1\%$，数据缓存未命中率为 $4\%$。两种情况下均没有与辅助存储器之间的输入输出，所有指令串行执行，且不采用分支预测。程序 B 中 $60\%$ 的指令为装载/存储指令，每次缓存未命中的罚时为 $100$ 周期。求执行程序 B 时的 CPI。

(3) 在 (2) 的缓存与主存之间加入二级缓存后，执行程序 B 时，取指和数据装载/存储访问主存的比率都降至 $0.5\%$。其余仍满足：没有辅助存储器 I/O、指令串行执行、不采用分支预测；访问二级缓存耗时 $10$ 周期。求二级缓存带来的加速比。

(4) 虚拟内存控制器通常采用写回策略向辅助存储器写数据。从计算机执行速度和数据持久性两方面，说明采用写回策略是否合适。

(5) 某虚拟内存的虚拟地址长 $32$ 位、页大小 $4096$ 字节、页表项长 $4$ 字节，且页表由单一数组构成。求运行一个同时创建 $100$ 个进程的程序所需页表总大小。

(6) 简要说明两种能有效减小页表大小的方法。

## **Kai**
### (1)

Cache is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere.
**Examples:** SRAM

Auxiliary memory is the retention of digital data via technology consisting of computer components and recording media.
**Examples:** SSD

In comparison with the main memory, cache has higher speed but smaller capacity. Auxiliary memory has slower speed and larger capacity, in addition, auxiliary memory is non-volatile.

### (2)
The CPI is calculated as : $\text{CPI} = \text{CPI}_{\text{ideal}} + \text{Stalls per Instruction}$
Given $\text{CPI}_{\text{ideal}} = 1.5$, Instruction Miss rate $= 1\%$, Data Miss rate $= 4\%$, Load/store frequency $= 60\%$, Miss Penalty $= 100 \text{ cycles}$.
Therefore $\text{CPI} = 1.5 + 1\% \cdot 100 + 4\% \cdot 60\% \cdot 100 = 1.5 + 1 + 2.4 = 4.9$

### (3)
Similar to (2),
$\text{CPI} = 1.5 + (1\% \cdot 10 + 0.5\% \cdot 100) + 60\% \cdot (4\% \cdot 10 + 0.5\% \cdot 100) = 2.64$

The clock period and instruction count are unchanged, so the requested speedup is

$$
\boxed{\frac{4.9}{2.64}=\frac{245}{132}\simeq1.86}.
$$

### (4)
Write-back keeps a modified page in main memory and writes it to its backing storage when necessary, for example during reclamation or a background flush. Repeated writes to the same page can be combined into one storage operation, reducing slow I/O and execution stalls.

For anonymous virtual-memory pages, swap preserves their contents across eviction so the running process can use them again; it does not by itself make process memory durable across a crash. For file-backed data that must persist, dirty pages must be written and the storage device's buffers flushed before durability can be relied on. Explicit synchronization and operating-system writeback provide this mechanism, while unflushed changes can be lost on failure.

### (5)
Virtual Address Space: $32 \text{ bits}$

Page Size: $4096 \text{ B} = 2^{12} \text{ B}$

Therefore VPN (Virtual Page Number) : $32 - 12 = 20$

The entries of Page Table : $2^{20}$.

Entry length: $4 \text{ B}$. Therefore size of one page table $= 2^{20} \times 4 \text{ B} = 4 \text{ MiB}$

Therefore, total size for 100 concurrent processes $= 100 \times 4 \text{ MiB} = 400 \text{ MiB}$

### (6)

1. Use a multilevel page table and allocate lower-level tables only for mapped parts of the address space. With a $10+10$ VPN split, one root table and one allocated leaf table require $(2^{10}+2^{10})\times4=8\ \mathrm{KiB}$. This saving assumes a sparse address space; a fully populated two-level table occupies $4\ \mathrm{MiB}+4\ \mathrm{KiB}$.
2. Increase the page size. For example, if the hardware supports $16\ \mathrm{KiB}$ pages, a flat table contains $2^{32-14}$ entries and occupies $1\ \mathrm{MiB}$ per process. The tradeoff is coarser allocation and potentially greater internal fragmentation.
