---
sidebar_label: "2022年8月実施 専門科目 問題4"
sidebar_position: 5
tags:
  - Tokyo-University
  - Computer-Architecture
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Answer the following questions on computer architecture.

(1) When the following program in C language was compiled and executed on a processor A, the output (a) was obtained. When the same program was compiled and executed on a processor B, the output (b) was obtained. Explain the reason why the difference occurred from the viewpoint of processor architecture.

```c
#include <stdio.h>

union my_uni {
	int v;
	char arr[4];
};

int main(){
	union my_uni val = {0x12345678};
	int i;
	for(i=0; i<4; i++){
		printf("0x%x\n", val.arr[i]);
	}
	return 0;
}
```

**Output (a):**
```
0x12
0x34
0x56
0x78
```

**Output (b):**
```
0x78
0x56
0x34
0x12
```

(2) Explain data-hazard and control-hazard on a pipeline processor with no forwarding mechanism, using a concrete example.

(3) Consider a 4-way set-associative cache memory that stores totally 32 kibibytes ($32 \times 2^{10}$ bytes) of data. The address width of the cache memory is 32 bits, and the cache line size (block size) is 64 bytes. Calculate the bit width of the cache index and that of a tag of the cache memory, respectively. Calculate also the total RAM capacity (the number of bits) for storing the tags of the cache memory.

(4) Consider a processor with an instruction cache and a data cache. Suppose that the CPI (cycles per instruction) of the processor is $C$ when there is no cache miss on both the instruction and data caches. When there is a cache miss on any of the caches, a cache miss penalty of $P$ clock cycles is additionally imposed. Suppose that when a program was executed on the processor, the ratio of the number of load/store instructions to the total number of executed instructions was $R_{ls}$. Suppose also that, for that program execution, the cache miss rate of the instruction cache was $R_i$, the cache miss rate of the data cache was $R_d$, and the IPC (instructions per cycle) of the processor was $I$. Express I in terms of $C$, $R_i$, $R_d$, $R_{ls}$, and $P$.

---

回答以下有关计算机体系结构的问题。

(1) 当在处理器 A 上编译并执行以下 C 语言程序时，输出 (a) 被获得。当在处理器 B 上编译并执行相同的程序时，输出 (b) 被获得。请从处理器架构的角度解释为什么会出现这种差异。

```c
#include <stdio.h>

union my_uni {
	int v;
	char arr[4];
};

int main(){
	union my_uni val = {0x12345678};
	int i;
	for(i=0; i<4; i++){
		printf("0x%x\n", val.arr[i]);
	}
	return 0;
}
```

**输出 (a):**
```
0x12
0x34
0x56
0x78
```

**输出 (b):**
```
0x78
0x56
0x34
0x12
```

(2) 使用具体的例子解释没有转发机制的流水线处理器上的数据冒险和控制冒险。

(3) 考虑一个 4 路组相连缓存，其总共存储了 32 kibibytes（$32 \times 2^{10}$ 字节）的数据。该缓存的地址宽度为 32 位，缓存行大小（块大小）为 64 字节。分别计算缓存索引的位宽和缓存的标签位宽。还要计算存储缓存标签的总 RAM 容量（位数）。

(4) 考虑一个具有指令缓存和数据缓存的处理器。假设处理器的 CPI（每指令周期数）在指令缓存和数据缓存都没有缓存未命中的情况下为 $C$。当任一缓存出现未命中时，会另外增加 $P$ 个时钟周期的缓存未命中惩罚。假设当程序在处理器上执行时，加载/存储指令的数量与执行的总指令数量的比率为 $R_{ls}$。还假设，在该程序执行中，指令缓存的缓存未命中率为 $R_i$，数据缓存的缓存未命中率为 $R_d$，处理器的 IPC（每周期指令数）为 $I$。用 $C$，$R_i$，$R_d$，$R_{ls}$ 和 $P$ 来表达 $I$。

## **Kai**
### (1)

**Explanation**:

The difference in output between processor A and processor B is due to the endianness of the processors.

- **Big-endian**: Processor A stores the most significant byte (MSB) at the lowest memory address. Therefore, the bytes of the integer `0x12345678` are stored as `0x12 0x34 0x56 0x78`.

- **Little-endian**: Processor B stores the least significant byte (LSB) at the lowest memory address. Therefore, the bytes of the integer `0x12345678` are stored as `0x78 0x56 0x34 0x12`.

In the given program, the union `my_uni` allows accessing the same memory location as both an integer and an array of characters. When printing the elements of the character array, the order of the bytes differs based on the processor's endianness.

- **Output (a)** corresponds to big-endian architecture.
- **Output (b)** corresponds to little-endian architecture.

### (2)

**Data Hazard**:

Data hazards occur when instructions that exhibit data dependencies are executed in a pipeline. There are three types of data hazards: Read After Write (RAW), Write After Read (WAR), and Write After Write (WAW). In a pipeline without forwarding, these hazards can cause stalls.

**Example**:
```assembly
ADD R1, R2, R3  // Instruction 1
SUB R4, R1, R5  // Instruction 2 (depends on the result of Instruction 1)
```

Instruction 2 needs the result of Instruction 1. Without forwarding, the pipeline must stall until the result of Instruction 1 is available.

**Control Hazard**:

Control hazards (or branch hazards) occur when the pipeline makes decisions based on the results of branch instructions.

**Example**:
```assembly
BEQ R1, R2, LABEL  // Branch if R1 == R2
NOP                // This instruction may need to be flushed if the branch is taken
LABEL:
```

If the branch is taken, the instruction after the branch (NOP in this case) needs to be flushed and the pipeline must fetch the correct instruction from the branch target.

### (3)

**Given**:
- Cache size: 32 KiB ($32 \times 2^{10}$ bytes)
- Cache line size: 64 bytes
- 4-way set-associative cache
- Address width: 32 bits

**Calculation**:

1. **Number of cache lines**:

$$
\text{Number of cache lines} = \frac{\text{Cache size}}{\text{Cache line size}} = \frac{32 \times 2^{10} \text{ bytes}}{64 \text{ bytes}} = 512 \text{ cache lines}
$$

2. **Number of sets**:

$$
\text{Number of sets} = \frac{\text{Number of cache lines}}{\text{Associativity}} = \frac{512}{4} = 128 \text{ sets}
$$

3. **Index bit width**:

$$
\text{Index bit width} = \log_2(\text{Number of sets}) = \log_2(128) = 7 \text{ bits}
$$

4. **Block offset bit width**:

$$
\text{Block offset bit width} = \log_2(\text{Cache line size}) = \log_2(64) = 6 \text{ bits}
$$

5. **Tag bit width**:

$$
\text{Tag bit width} = \text{Address width} - \text{Index bit width} - \text{Block offset bit width} = 32 - 7 - 6 = 19 \text{ bits}
$$

6. **Total RAM capacity for storing tags**:

$$
\text{Total tag storage} = \text{Number of sets} \times \text{Associativity} \times \text{Tag bit width} = 128 \times 4 \times 19 = 9728 \text{ bits}
$$

### (4)

**Given**:
- CPI without cache miss: $C$
- Cache miss penalty: $P$
- Ratio of load/store instructions: $R_{ls}$
- Cache miss rate of instruction cache: $R_i$
- Cache miss rate of data cache: $R_d$
- IPC (instructions per cycle): $I$

**Expression for IPC**:

The total CPI considering cache misses can be calculated as:

$$
\text{CPI} = C + R_i \times P + R_{ls} \times R_d \times P
$$

Since IPC is the inverse of CPI:

$$
I = \frac{1}{\text{CPI}} = \frac{1}{C + R_i \times P + R_{ls} \times R_d \times P}
$$

## **Knowledge**

字节序 数据冒险 控制冒险 缓存记忆 指令周期

### 重点词汇

- **Big-endian**: 大端序
- **Little-endian**: 小端序
- **Data hazard**: 数据冒险
- **Control hazard**: 控制冒险
- **Pipeline**: 流水线
- **Set-associative cache**: 组相联缓存
- **Cache miss penalty**: 缓存未命中惩罚
- **Instructions per cycle (IPC)**: 每周期指令数

### 参考资料

1. Computer Organization and Design by David A. Patterson and John L. Hennessy, Chap. 5
2. Computer Architecture: A Quantitative Approach by John L. Hennessy and David A. Patterson, Chap. 2
