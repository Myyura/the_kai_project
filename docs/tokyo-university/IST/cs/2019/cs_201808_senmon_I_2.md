---
sidebar_label: "2018年8月実施 専門科目I 問題2"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2018年8月実施 専門科目I 問題2

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs)

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

#### <center> Program Code 1:

```text
for (j = 0; j < 1024; j++)
    for (i = 0; i < 1024; i++)
        sum += A[i * 1024 + j];
```

#### <center> Program Code 2:

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


## **Kai**
### (1)

- *Page* – instead of loading the whole program into the memory, we divide it into fixed-sized chunks called *pages* and we load some of them to fixed-size chunks of physical memory called *frames* We load to the memory only those pages that we currently need. Bonus: motivation: processes spend $90\%$ of their execution time accessing only $10\%$ of their space in the memory.
- *Page Table* – stores mapping between virtual and physical addresses. It's a region in a memory where we can look-up actual page physical address.
- *Page Replacement* - when we cannot allocate a page in a memory, we need to evict some page residing in the memory.
- *Page fault* – access to the page which is not in the memory
- *TLB* - fast, hardware supported cache memory speeding up address translation (accessing an address via page table requires two actual physical memory accesses).

### (2)

A page has $4 \text{KB} = 4 \cdot 1024 \text{B}$.
If we were to address every word (i.e. every $32 \text{b} = 4 \text{B}$) within a page, 
then there are $\frac{4\cdot 1024}{4}$ possible addresses.
To address them all we need $\log_2 1024 = 10$ bits.

Thus, lower $10$ bits of the virtual address make an offset within a page, and the rest of bits make index in the page table:

$$
    2A0F_{16} = 10.1010.0000.1111_2    
$$

Offset within a page: $10.0000.1111_2$,
Page number, PageTable[$1010_2$] = $100_2$.
Sanity check: this page is valid, yay.
The physical address corresponding to virtual $2A0F$ is:

$$
    1.00\: 10.0000.1111_2 = 120F_{16}
$$

### (3)
We can fit $1024$ integers into one page.
It is easier to look at $A$ as a $1024\times 1024$ 2-dimensional array, which elements are stored continuously in the memory, row-by-row.
We can fit one whole row into a page.
Since memory size is $32\text{KB}$ and page has $4\text{KB}$ then $8$ pages fit into the memory.
However, one page is reserved, so we can store total of $7$ rows of $A$ in the memory.

*Program 2* accesses $A$ row by row.
Thus, first $7$ rows will be accessed with no page fault (*PF*). $8$th and every following row row will cause PF.
Hence, there will be:

$$
    1024-8+1 = 1017
$$

page faults in total.

*Program 1* accesses $A$ column by column.
Every element of a column will land in a different page, thus
only first $7$ accesses to $A$ won't cause PF.
We got:

$$
    1024\cdot 1024 - 7 = 2^{20} - 7
$$

page faults in total.


This one was also solved in Silberschatz's *Operating Systems Concepts, 9th ed.,* Chapter 9.9.5.

