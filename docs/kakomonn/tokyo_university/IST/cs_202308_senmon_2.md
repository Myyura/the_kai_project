---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題2
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Consider a processor $P$ with a direct-mapped data cache that stores 256 bytes of data in total. The cache line size (block size) of the data cache is 16 bytes. Through the data cache, the processor $P$ reads data from the memory by the load-word instruction `lw` and writes data to the memory by the store-word instruction `sw`. The address and data bit-widths of the load-word/store-word instructions are 32. When the bit representation of a memory address is $a_{31}a_{30}\ldots a_0$, the index and the offset of the data cache are $a_7a_6a_5a_4$ and $a_3a_2a_1a_0$, respectively. The processor $P$ has 32 integer registers from ``x0`` to ``x31``, and ``x0`` is the zero register that always keeps the value 0.

The following program $S$ applies the average filter with size 3 to the one-dimensional array $A$ with head address `0x1000` and size 402 and stores the result on the one-dimensional array $B$ with head address `0x2000` and size 400. Each element of the arrays $A$ and $B$ is a 32-bit signed integer. The behavior of each instruction is described as a comment (the description after #) in the program, where `memory[addr]` represents a memory access to the address `addr`. The initial values of the registers `x5`, `x6`, and `x7` are `0x1640`, `0x1000`, and `0x2000`, respectively.

```
Instruction  0)    addi x2, x0, 3     # x2 <- x0 + 3
Instruction  1)    Loop: lw x3, 0(x6)  # x3 <- memory[x6 + 0]
Instruction  2)    lw x9, 4(x6)        # x9 <- memory[x6 + 4]
Instruction  3)    add x8, x8, x9      # x8 <- x8 + x9
Instruction  4)    lw x9, 8(x6)        # x9 <- memory[x6 + 8]
Instruction  5)    add x8, x8, x9      # x8 <- x8 + x9
Instruction  6)    div x8, x8, x2      # x8 <- x8 / x2
Instruction  7)    sw x8, 0(x7)        # memory[x7 + 0] <- x8
Instruction  8)    addi x6, x6, 4      # x6 <- x6 + 4
Instruction  9)    addi x7, x7, 4      # x7 <- x7 + 4
Instruction 10)    blt x6, x5, Loop    # if x6 < x5, goto Loop
```

Answer the following questions:

(1) Calculate the cache hit rate up to three places of decimals for the execution of the program $S$ on the processor $P$. Suppose that every cache line of the data cache is invalid when the execution of the program starts, and there is no prefetcher.

(2) Calculate the IPC (instructions per cycle) up to three places of decimals for the execution of the program $S$ on the processor $P$. Suppose that the processor $P$ has an instruction memory with no access delay, and there is no delay on the instruction fetch, instruction decode, data forwarding, and write-back to the register file. The processor starts at most one instruction execution for every clock cycle. Until the instruction completes, the processor does not start the subsequent instructions. The processor executes each of ``add``, ``addi``, and ``blt`` instructions in one clock cycle, and executes ``div`` instruction in four clock cycles. The processor executes each of `lw` and ``sw`` instructions in one clock cycle in case of cache hits and four clock cycles in case of cache misses.

(3) Consider a modification to the data cache to improve the cache hit rate for the execution of the program $S$. Explain the modification with the reason why the cache hit rate is improved. Note that the data cache capacity should not be modified.

(4) Explain a software-level optimization of the program $S$, using a concrete example, for improving the cache hit rate without any modification to the processor $P$ or the data cache.

---

考虑一个处理器 $P$，它有一个直接映射的数据缓存，总共存储 256 字节的数据。数据缓存的缓存行大小（块大小）为 16 字节。通过数据缓存，处理器 $P$ 通过加载字指令 ``lw`` 从内存读取数据，并通过存储字指令 ``sw`` 将数据写入内存。加载字/存储字指令的地址和数据位宽为 32。当一个内存地址的位表示为 $a_{31}a_{30}\ldots a_0$ 时，数据缓存的索引和偏移量分别为 $a_7a_6a_5a_4$ 和 $a_3a_2a_1a_0$。处理器 $P$ 有 32 个整数寄存器，从 $x0$ 到 $x31$，其中 $x0$ 是始终保持值 0 的零寄存器。

下面的程序 $S$ 将大小为 3 的均值滤波应用于一维数组 $A$（头地址为 0x1000，大小为 402），并将结果存储在一维数组 $B$（头地址为 0x2000，大小为 400）上。数组 $A$ 和 $B$ 的每个元素都是 32 位有符号整数。每条指令的行为在程序中的注释（# 之后的描述）中描述，其中 $\mathrm{memory}[\mathrm{addr}]$ 表示对地址 $\mathrm{addr}$ 的内存访问。寄存器 $x5$、$x6$ 和 $x7$ 的初始值分别为 0x1640、0x1000 和 0x2000。

```
指令  0)    addi x2, x0, 3     # x2 <- x0 + 3
指令  1)    Loop: lw x3, 0(x6)  # x3 <- memory[x6 + 0]
指令  2)    lw x9, 4(x6)        # x9 <- memory[x6 + 4]
指令  3)    add x8, x8, x9      # x8 <- x8 + x9
指令  4)    lw x9, 8(x6)        # x9 <- memory[x6 + 8]
指令  5)    add x8, x8, x9      # x8 <- x8 + x9
指令  6)    div x8, x8, x2      # x8 <- x8 / x2
指令  7)    sw x8, 0(x7)        # memory[x7 + 0] <- x8
指令  8)    addi x6, x6, 4      # x6 <- x6 + 4
指令  9)    addi x7, x7, 4      # x7 <- x7 + 4
指令 10)    blt x6, x5, Loop    # if x6 < x5, goto Loop
```

回答以下问题：

(1) 计算程序 $S$ 在处理器 $P$ 上执行的缓存命中率，保留到小数点后三位。假设当程序执行开始时，数据缓存的每一行都是无效的，并且没有预取器。

(2) 计算程序 $S$ 在处理器 $P$ 上执行的 IPC（每周期指令数），保留到小数点后三位。假设处理器 $P$ 具有无访问延迟的指令存储器，并且指令提取、指令解码、数据转发和寄存器文件的写回没有延迟。处理器最多在每个时钟周期启动一条指令的执行。在指令完成之前，处理器不会启动后续指令。处理器在一个时钟周期内执行每条 ``add``、``addi`` 和 ``blt`` 指令，并在四个时钟周期内执行 ``div`` 指令。处理器在缓存命中情况下在一个时钟周期内执行每条 ``lw`` 和 ``sw`` 指令，而在缓存未命中情况下在四个时钟周期内执行。

(3) 考虑对数据缓存进行修改以提高程序 $S$ 执行的缓存命中率。解释修改的内容以及缓存命中率提高的原因。注意数据缓存容量不应修改。

(4) 解释程序 $S$ 的一种软件级优化，使用一个具体的例子，在不对处理器 $P$ 或数据缓存进行任何修改的情况下提高缓存命中率。

## **Kai**
### (1)

**Cache Parameters:**
- Cache size: 256 bytes
- Block size: 16 bytes
- Number of cache lines: $256 / 16 = 16$ lines

**Memory Address Breakdown:**
- Address size: 32 bits
- Offset bits (block size of 16 bytes): 4 bits (i.e., $a_3a_2a_1a_0$)
- Index bits (16 lines): 4 bits (i.e., $a_7a_6a_5a_4$)
- Tag bits: Remaining bits (i.e., $a_{31}a_{30}\ldots a_8$)

#### Cache Access Analysis

**Arrays A and B:**
- **Array $A$** starts at address 0x1000.
- **Array $B$** starts at address 0x2000.
- Both $A$ and $B$ map to the same index in the cache due to the identical lower address bits.

#### Detailed Analysis of the First Four Loops

1. **Loop 1 (Iteration 0):**
   - Access $A[0]$ (address 0x1000), Cache Line 0: Miss
   - Access $A[1]$ (address 0x1004), Cache Line 0: Hit
   - Access $A[2]$ (address 0x1008), Cache Line 0: Hit
   - Write $B[0]$ (address 0x2000), Cache Line 0: Miss

2. **Loop 2 (Iteration 1):**
   - Access $A[1]$ (address 0x1004), Cache Line 0: Miss (replaced by B$0$)
   - Access $A[2]$ (address 0x1008), Cache Line 0: Hit
   - Access $A[3]$ (address 0x100C), Cache Line 0: Hit
   - Write $B[1]$ (address 0x2004), Cache Line 0: Miss

3. **Loop 3 (Iteration 2):**
   - Access $A[2]$ (address 0x1008), Cache Line 0: Miss (replaced by B$1$)
   - Access $A[3]$ (address 0x100C), Cache Line 0: Hit
   - Access $A[4]$ (address 0x1010), Cache Line 1: Miss (crosses to a new cache line)
   - Write $B[2]$ (address 0x2008), Cache Line 0: Miss

4. **Loop 4 (Iteration 3):**

   - Access $A[3]$ (address 0x100C), Cache Line 0: Miss (replaced by B$$2$$

)

   - Access $A[4]$ (address 0x1010), Cache Line 1: Hit
   - Access $A[5]$ (address 0x1014), Cache Line 1: Hit
   - Write $B[3]$ (address 0x200C), Cache Line 0: Miss

#### Summary of the First Four Loops

- **Total Accesses**: 16 accesses (4 per loop)
- **Total Cache Misses**: 9 misses
- **Total Cache Hits**: 7 hits
- **Hit Rate for the First Four Loops**:

$$
\text{Hit Rate} = \frac{7}{16} = 0.4375
$$

#### Analysis of Subsequent Loops

Assuming the same pattern continues, the subsequent 96 loops (24 groups of 4 loops) will follow the same pattern:

1. **Loop 1 in each group**: 3 hits, 1 miss
2. **Loop 2 in each group**: 2 hits, 2 misses
3. **Loop 3 in each group**: 1 hit, 3 misses
4. **Loop 4 in each group**: 2 hits, 2 misses

#### Total Cache Misses and Hits for All Loops

**Total Cache Misses for 96 Loops**: $99 \times (1+2+3+2) = 792$ misses

**Total Cache Hits for 96 Loops**: $99 \times (3+2+1+2) = 792$ hits

#### Final Cache Hit Rate Calculation

1. **Total Accesses**: $4 \times 400 = 1600$ accesses
2. **Total Cache Misses**: $9 + 792 = 801$ misses
3. **Total Cache Hits**: $7 + 792 = 799$ hits
4. **Final Hit Rate**:

$$
\text{Hit Rate} = \frac{799}{1600} = 0.499
$$

#### Conclusion

- The final cache hit rate for the entire program is approximately **49.9%**.

### (2)

Given the cache hit rate of approximately 49.9 %:

1. **Instruction Breakdown**:
   - `addi`: 1 cycle
   - `lw/sw`: 1 cycle (hit) or 4 cycles (miss)
   - `div`: 4 cycles
   - `blt`: 1 cycle

2. **Cycle Calculation per Iteration**:
   - **Total Basic Cycles for all instructions** :$10$ cycles
   - **Total Additional Cycles for `lw` and `sw` instruction**: $4 \times 0.499 \times 3 = 5.988$ cycles
   - **Other Additional Cycles**: 3 cycles (for the `div` instruction)

3. **Total Cycles per Iteration**:

$$
10 + 5.988 + 3 = 18.988 \text{ cycles per iteration}
$$

4. **Total Cycles for 400 Iterations**:

$$
400 \times 18.988 = 7595.2 \text{ cycles}
$$

5. **Total Instructions**:
   - $1 + 10 × 400= 4001 instructions$
6. **IPC**:

$$
\text{IPC} = \frac{4001}{7595.2} \approx 0.527
$$

### (3)

**Modification**: Use a 2-way set associative cache instead of a direct-mapped cache.

**Reason**:
A **2-way set associative** cache allows each index to map to two cache lines, which would enable both arrays $A$ and $B$ to coexist in the cache without conflict. This reduces the conflict misses, significantly improving the hit rate.

### (4)

**Optimization**: Array padding.

**Example**: Introduce padding in array $B$ to offset its starting address such that it does not map to the same cache lines as array $A$.

**Explanation**:
By adding a small padding (e.g., 16 bytes) to the start of array $B$, the memory addresses of $B$'s elements will map to different cache lines than the corresponding elements in $A$. This reduces the conflict between $A$ and $B$, leading to fewer cache misses and a higher hit rate.

---

## **Knowledge**

Cache IPC 指令集

### 难点思路

本题的难点在于正确分析缓存访问的冲突问题，以及提出有效的硬件和软件优化方案来减少这些冲突。直接映射缓存的冲突失效是此题的核心问题。

### 解题技巧和信息

1. **Direct-Mapped Cache**: 在处理大量连续数据时容易产生冲突失效，集合关联缓存可以有效缓解这一问题。
2. **IPC Calculation**: 注意由于缓存失效引起的指令执行延迟对 IPC 的影响。
3. **Array Padding**: 是解决数组访问冲突问题的有效软件优化方法。

### 重点词汇

1. Cache Line 缓存行
2. Direct-Mapped Cache 直接映射缓存
3. Hit Rate 命中率
4. Instruction Per Cycle (IPC) 每周期指令数
5. Array Padding 数组填充

### 参考资料

1. Hennessy, J. L., & Patterson, D. A. (2017). *Computer Architecture: A Quantitative Approach*. Chapter 2.
2. Patterson, D. A., & Hennessy, J. L. (2013). *Computer Organization and Design: The Hardware/Software Interface*. Chapter 5.
