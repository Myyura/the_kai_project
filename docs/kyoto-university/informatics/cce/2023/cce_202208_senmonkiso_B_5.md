---
sidebar_label: "2022年8月実施 専門基礎B [B-5]"
tags:
  - Kyoto-University
  - Computer-Architecture
  - Cache
  - Branch-Prediction
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎B \[B-5\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
## **Description**
**Answer all the following questions.**

### (1)

32-bit word length and byte-addressing RISC processors P1, P2, and P3 have the instruction caches I1, I2, and I3, respectively. Answer the following questions. In the following questions, all addresses are expressed in hexadecimal and the cache replacement algorithm is LRU (Least Recently Used).

#### Table (a): Memory access sequence (A)

| Address | Value |
|---|---|
| address-1 | 00000000 |
| address-2 | 00000004 |
| address-3 | 00000008 |
| address-4 | 00000010 |
| address-5 | 00000024 |
| address-6 | 00000028 |
| address-7 | 00000030 |
| address-8 | 00000034 |
| address-9 | 00000048 |

#### Table (b): Memory access sequence (B)

| Address | Value |
|---|---|
| address-1 | 2c480000 |
| address-2 | 2c481000 |
| address-3 | 2c483000 |
| address-4 | 2c481000 |
| address-5 | 2c484000 |
| address-6 | 2c482000 |
| address-7 | 2c481000 |
| address-8 | 2c482000 |
| address-9 | 2c480000 |

(a) I1 is a 2-way set-associative cache of 32-byte blocks with a total data capacity of 4096 bytes (not including tags and flags). Processor P1 accesses the instruction words stored in the addresses shown in Table (a) from top to bottom. I1 is initially empty. Indicate whether the accesses are hit or miss for each of the addresses shown in Table (a).

(b) I2 is a 4-way set-associative cache of 32-byte blocks with a total data capacity of 4096 bytes (not including tags and flags). Processor P2 accesses the instruction words stored in the addresses shown in Table (b) from top to bottom. I2 is initially empty. Indicate whether the accesses are hit or miss for each of the addresses shown in Table (b).

(c) I3 is an N-way set associative cache with a total data size of 8192 bytes (not including tags and flags) and a block size of either 16, 32, 64, or 128 bytes. The associativity (N) is either 2, 4, or 8. Processor P3 accesses the instruction words stored at the addresses shown in Table (a) and Table (b) from top to bottom, and the cache hit rates are 4/9 for both. Memory access sequences (A) and (B) are independent, and I3 is empty at the start of each memory access sequence. Answer a combination of block size and associativity of I3. If the cache hit ratio of 4/9 cannot be achieved with the given associativity and block size, write “no solution”.

### (2)

Answer the following questions regarding computers.

(a) Most computers use separate caches for instruction and data. Explain why such configurations are taken.

(b) Explain how branch prediction improves performance of pipeline processors, giving examples with and without branch prediction.

## **Kai**
### (1)
#### (a) 

**Parameters:**
- Total Capacity: $4096$ bytes
- Block Size: $32$ bytes ($2^5$), so **Offset bits = 5**
- Associativity: $2$-way
- Number of Blocks ($N_{block}$): $4096 / 32 = 128 = 2^7$
- Number of Sets ($N_{set}$): $128 / 2 = 64 = 2^6$, so **Index bits = 6**

**Memory Access Sequence (A) Evaluation:**

| Access | Address (Hex) | Result | Note |
| :--- | :--- | :--- | :--- |
| address-1 | 00000000 | **Miss** | Compulsory miss, load into Block 0 of Set 0 |
| address-2 | 00000004 | **Hit** | Same block as address-1 |
| address-3 | 00000008 | **Hit** | Same block as address-1 |
| address-4 | 00000010 | **Hit** | Same block as address-1 |
| address-5 | 00000024 | **Miss** | Compulsory miss, load into Block 1 of Set 1 |
| address-6 | 00000028 | **Hit** | Same block as address-5 |
| address-7 | 00000030 | **Hit** | Same block as address-5 |
| address-8 | 00000034 | **Hit** | Same block as address-5 |
| address-9 | 00000048 | **Miss** | Compulsory miss, load into Block 2 of Set 2 |

#### (b) 

**Parameters:**
- Total Capacity: $4096$ bytes
- Block Size: $32$ bytes ($2^5$), so **Offset bits = 5**
- Associativity: $4$-way
- Number of Sets ($N_{set}$): $128 / 4 = 32 = 2^5$, so **Index bits = 5**

**Memory Access Sequence (B) Evaluation:**
*All addresses in Table (b) map to Set 0 because the index bits $[9:5]$ are zero for these specific strides.*

| Access | Address (Hex) | Result | Set 0 State (LRU Order) |
| :--- | :--- | :--- | :--- |
| address-1 | 2c480000 | **Miss** | {0x2c4800} |
| address-2 | 2c481000 | **Miss** | {0x2c4800, 0x2c4810} |
| address-3 | 2c483000 | **Miss** | {0x2c4800, 0x2c4810, 0x2c4830} |
| address-4 | 2c481000 | **Hit** | {0x2c4800, 0x2c4830, 0x2c4810} |
| address-5 | 2c484000 | **Miss** | {0x2c4800, 0x2c4830, 0x2c4810, 0x2c4840} |
| address-6 | 2c482000 | **Miss** | {0x2c4830, 0x2c4810, 0x2c4840, 0x2c4820} (0x2c4800 evicted) |
| address-7 | 2c481000 | **Hit** | {0x2c4830, 0x2c4840, 0x2c4820, 0x2c4810} |
| address-8 | 2c482000 | **Hit** | {0x2c4830, 0x2c4840, 0x2c4810, 0x2c4820} |
| address-9 | 2c480000 | **Miss** | Conflict miss, 0x2c4830 evicted |

#### (c) 

**Requirement:** Hit rate of $4/9$ for both Sequence (A) and (B).
- Total Size: $8192 = 2^{13}$ bytes.

**Analysis:**
1. **For Sequence (A):** To decrease the hit rate compared to (a), we need a smaller block size. Using **16-byte blocks (4 offset bits)**:
   - Hits occur at address 2, 3, 6, 8 (4 hits total). Rate = $4/9$.
2. **For Sequence (B):** To increase the hit rate, we need to prevent conflict misses. With 16-byte blocks, we have 5 unique blocks in the sequence. To keep them all in cache (assuming they map to the same set), we need an associativity $N \ge 5$.
3. **Associativity Options:** $N$ can be $2, 4, 8$. We choose **$N=8$**.

**Conclusion:**
- **Block Size: 16 bytes**
- **Associativity (N): 8**

### (2)
#### (a) 

Separate caches are used primarily to **eliminate structural hazards** in the pipeline.

In a pipelined processor, the **Instruction Fetch (IF)** stage and the **Memory Access (MEM)** stage may occur simultaneously. If a unified cache is used, these two stages would compete for the same hardware unit, causing a pipeline stall. Separate caches allow for parallel access, improving throughput.

#### (b) 

Branch prediction improves pipeline efficiency by **reducing the branch penalty**.

**Example: 5-stage Pipeline (IF, ID, EX, MEM, WB)**
- Without branch prediction, the branching outcome is typically known at the end of the **EX** (or ID) stage. This causes the pipeline to stall for approximately 2 cycles while waiting to determine the next instruction address.
- With branch prediction, if the prediction is correct, the pipeline fetches the target instruction immediately and runs smoothly as if there were no branch instructions, effectively eliminating the stall cycles.
