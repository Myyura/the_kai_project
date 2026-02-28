---
sidebar_label: "2021年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Computer-Architecture
  - Operating-System
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

### (4)
Write-back: A scheme that handles writes by updating values only to the block in the cache, then writing the modified block to the lower level of the hierarchy when the block is replaced.

**Adequacy:** Since writing to auxiliary memory is extremely slow. Using a write-through policy would force the processor to wait for the disk write to complete on every memory write, causing unacceptable performance degradation.

**Speed:** Therefore, we use write-back policy. The data is written to the auxiliary memory only when the page is evicted. This decouples the CPU speed from the slow disk speed.

**Persistence:** Write-back risks data loss if power fails before eviction. However, for execution speed, it is the only viable option. Persistence is managed via explicit sync calls or OS flushes.

### (5)
Virtual Address Space: $32 \text{ bits}$

Page Size: $4096 \text{ B} = 2^{12} \text{ B}$

Therefore VPN (Virtual Page Number) : $32 - 12 = 20$

The entries of Page Table : $2^{20}$.

Entry length: $4 \text{ B}$. Therefore size of one page table $= 2^{20} \times 4 \text{ B} = 4 \text{ MB}$

Therefore, total size for 100 concurrent processes $= 100 \times 4 \text{ MB} = 400 \text{ MB}$

### (6)
① Use multi-level page table. For example, 2-level for (5), if use $\text{1-VPN} = 10$, $\text{2-VPN} = 10$
The minimal size: $(2^{10} + 2^{10}) \cdot 4\text{B} = 2^{13}\text{B} = 8\text{KB} \ll 4\text{MB} \text{ (in 5)}$

② Use huge page. For example, page size be $16\text{KB} = 2^{14}\text{B}$, VPN will be $18$
The minimal size: $(2^{18}) \cdot 4\text{B} = 2^{20}\text{B} = 1\text{MB} \ll 4\text{MB} \text{ (in 5)}$
