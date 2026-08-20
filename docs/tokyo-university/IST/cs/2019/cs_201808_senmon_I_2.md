---
sidebar_label: "2018年8月実施 専門科目I 問題2"
tags:
  - Tokyo-University
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Operating-Systems.Page-Table
  - Computer-Science.Operating-Systems.Page-Replacement
  - Computer-Science.Computer-Architecture.Translation-Lookaside-Buffer
  - Computer-Science.Operating-Systems.Page-Faults-and-Loop-Order-Locality
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2018年8月実施 専門科目I 問題2

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs), 祭音Myyura

## **Description**
We consider a 32-bit machine with 32KB physical memory, upon which the operating system supports the paging functionality. The page size is 4KB, the virtual memory size is 4GB, and there is no cache memory. Answer the following questions. Note that 1KB is equivalent to 1024 bytes.

(1) Explain each of the following terms regarding the paging functionality, briefly:

- Page
- Page Table
- Page Replacement
- Page Fault
- Translation Look-aside Buffer (TLB)

(2) Obtain the physical address in hexadecimal corresponding to the virtual address of 2A0F (hexadecimal) when the following page table is given.

| Page number (decimal) | Frame number (binary) | Valid bit |
|------------------------|-----------------------|-----------|
| 0                      | 111                   | 1         |
| 1                      | 000                   | 0         |
| 2                      | 110                   | 1         |
| 3                      | 000                   | 0         |
| 4                      | 101                   | 1         |
| 5                      | 000                   | 0         |
| 6                      | 000                   | 0         |
| 7                      | 000                   | 0         |
| 8                      | 000                   | 0         |
| 9                      | 001                   | 1         |
| 10                     | 100                   | 1         |
| 11                     | 000                   | 1         |
| 12                     | 011                   | 1         |
| 13                     | 000                   | 0         |
| 14                     | 000                   | 0         |
| 15                     | 010                   | 1         |

(3) Obtain the number of page faults caused by executing each of the following two pieces of program code written in C language.

#### <center> Program Code 1:</center>

```text
for (j = 0; j < 1024; j++)
    for (i = 0; i < 1024; i++)
        sum += A[i * 1024 + j];
```

#### <center> Program Code 2:</center>

```text
for (i = 0; i < 1024; i++)
    for (j = 0; j < 1024; j++)
        sum += A[i * 1024 + j];
```

Note that each program code is executed under the following assumptions.

- `i`, `j`, and `sum` are 32-bit integer variables. `A` is a 32-bit integer 1-dimensional array with 1024 × 1024 elements. The values of `sum` and each element of `A` are all set.
- Program code optimization by a compiler is disabled.
- In the initial state, all the pages that are allocated for `A` are not valid. Any data (including the program code and the page table) other than `A` are allocated to some valid page, and it is never paged out.
- Page allocation for the start address of `A` is aligned with a page boundary.
- Page replacement is based on the Least Recently Used (LRU) policy.


### 题目描述

考虑一台采用分页机制的 32 位计算机：物理内存为 $32\text{ KB}$，页面大小为
$4\text{ KB}$，虚拟内存为 $4\text{ GB}$，且没有高速缓存。取
$1\text{ KB}=1024$ 字节。回答下列问题。

（1）简要解释与分页有关的术语：页面（Page）、页表（Page Table）、页面置换（Page Replacement）、缺页（Page Fault）和地址转换后备缓冲器（TLB）。

（2）给定题中页表，求十六进制虚拟地址 `2A0F` 对应的十六进制物理地址。页表中十进制页号 $0$ 至 $15$ 的“页框号/有效位”依次为：

| 页号 | 页框号（二进制） | 有效位 |
|---:|:---:|:---:|
| 0 | 111 | 1 |
| 1 | 000 | 0 |
| 2 | 110 | 1 |
| 3 | 000 | 0 |
| 4 | 101 | 1 |
| 5 | 000 | 0 |
| 6 | 000 | 0 |
| 7 | 000 | 0 |
| 8 | 000 | 0 |
| 9 | 001 | 1 |
| 10 | 100 | 1 |
| 11 | 000 | 1 |
| 12 | 011 | 1 |
| 13 | 000 | 0 |
| 14 | 000 | 0 |
| 15 | 010 | 1 |

（3）分别求执行以下两段 C 循环所产生的缺页次数：

```text
for (j = 0; j < 1024; j++)
    for (i = 0; i < 1024; i++)
        sum += A[i * 1024 + j];
```

```text
for (i = 0; i < 1024; i++)
    for (j = 0; j < 1024; j++)
        sum += A[i * 1024 + j];
```

计算时假定：`i`、`j`、`sum` 均为 32 位整数；`A` 是含
$1024\times1024$ 个 32 位整数的一维数组，所有值均已设置；禁用编译器优化；初始时分配给 `A` 的页面全部无效，而程序、页表等其他数据均位于不会被换出的有效页面；`A` 的起始地址按页边界对齐；页面置换采用 LRU。

## **Kai**
### (1)

- *Page* – instead of loading the whole program into the memory, we divide it into fixed-sized chunks called *pages* and we load some of them to fixed-size chunks of physical memory called *frames* We load to the memory only those pages that we currently need. Bonus: motivation: processes spend $90\%$ of their execution time accessing only $10\%$ of their space in the memory.
- *Page Table* – stores mapping between virtual and physical addresses. It's a region in a memory where we can look-up actual page physical address.
- *Page Replacement* - when we cannot allocate a page in a memory, we need to evict some page residing in the memory.
- *Page fault* – access to the page which is not in the memory
- *TLB* - fast, hardware supported cache memory speeding up address translation (accessing an address via page table requires two actual physical memory accesses).

### (2)

A page has $4\text{ KB}=4096=2^{12}$ bytes. Because the machine is byte-addressed, the lower $12$ bits of a virtual address are the offset and the remaining bits are the virtual page number:

$$
    2A0F_{16}=2\cdot 1000_{16}+A0F_{16}.
$$

Thus the page number is $2$, the offset is $A0F_{16}$, and the valid page-table entry gives frame $110_2=6$. The physical address is

$$
    6\cdot 1000_{16}+A0F_{16}=6A0F_{16}.
$$

### (3)
We can fit $1024$ integers into one page.
It is easier to look at $A$ as a $1024\times 1024$ 2-dimensional array, which elements are stored continuously in the memory, row-by-row.
We can fit one whole row into a page.
Since memory size is $32\text{KB}$ and page has $4\text{KB}$ then $8$ pages fit into the memory.
At least one frame is occupied by data other than $A$, so fewer than $1024$ rows of $A$ can be resident at once.

*Program 2* accesses $A$ row by row.
Each row occupies one initially invalid page. Its first access causes one page fault (*PF*) and its remaining $1023$ accesses hit, so there are

$$
    1024
$$

page faults in total.

*Program 1* accesses $A$ column by column.
The $1024$ successive accesses in a column touch $1024$ distinct pages. Since the memory holds at most $8$ pages, every page has been evicted before the next column accesses it, and the first column also starts with all pages invalid. Hence every array access faults:

$$
    1024\cdot 1024=2^{20}
$$

page faults in total.


This one was also solved in Silberschatz's *Operating Systems Concepts, 9th ed.,* Chapter 9.9.5.
