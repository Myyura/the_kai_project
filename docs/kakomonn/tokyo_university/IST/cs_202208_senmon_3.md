---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題3
tags:
  - Tokyo-University
  - Operating-System
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題3

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
In an operating system, a page replacement algorithm should be designed to reduce the number of page faults. To evaluate the algorithm, we count the number of page faults caused by running the algorithm on a particular string of memory references, called a "reference string". Here, each memory reference is represented by a page number.

Answer the following questions.

(1) An optimal page replacement algorithm replaces a page that will not be used in future for the longest period of time. Assuming that three page frames are available and they are empty in the initial state, give the number of page faults caused by running the optimal page replacement algorithm on the following reference string.

   Reference string: $7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1$

(2) The optimal page replacement algorithm is difficult to implement, because it requires future knowledge of the reference string. As an alternative of the optimal page replacement algorithm, the Least Recently Used (LRU) algorithm replaces a page that has not been used for the longest period of time. Assuming that three page frames are available and they are empty in the initial state, give the number of page faults caused by running the LRU algorithm on the reference string used in question (1).

(3) Under the assumption that you can use a counter supported by hardware and it is associated with a field contained by each entry of the page table, describe how to implement the LRU algorithm from the following standpoints.

   - When is the counter incremented?
   - When is the value of the counter copied to the page table field?
   - How is the page to be replaced selected?

(4) Explain a drawback of the LRU algorithm from the practical implementation point of view.

(5) Under the assumption that each entry of the page table has a reference bit, describe how to implement an LRU-approximation algorithm.

---

在操作系统中，页面置换算法应设计为减少缺页的数量。为了评估算法，我们计算运行该算法时，由于特定的内存引用字符串（称为“引用字符串”）导致的缺页数。这里，每个内存引用都由页面编号表示。

回答以下问题。

(1) 最优页面置换算法会替换在将来最长时间内不会使用的页面。假设有三个页面框可用，并且在初始状态下它们是空的，给出在以下引用字符串上运行最优页面置换算法导致的缺页数。

   引用字符串: $7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1$

(2) 最优页面置换算法难以实现，因为它需要对引用字符串的未来有了解。作为最优页面置换算法的替代方案，最近最少使用（LRU）算法替换未使用时间最长的页面。假设有三个页面框可用，并且在初始状态下它们是空的，给出在问题（1）中使用的引用字符串上运行 LRU 算法导致的缺页数。

(3) 在假设你可以使用由硬件支持的计数器，并且它与页表的每个条目中的字段相关联的情况下，从以下角度描述如何实现 LRU 算法。

   - 计数器何时递增？
   - 计数器的值何时复制到页表字段？
   - 如何选择要替换的页面？

(4) 从实际实现的角度解释 LRU 算法的一个缺点。

(5) 假设页表的每个条目都有一个引用位，描述如何实现 LRU 近似算法。

## **Kai**
### (1)

The **Optimal Page Replacement Algorithm** replaces the page that will not be used for the longest period of time in the future. Given that we have 3 page frames and an empty initial state, we will simulate the algorithm on the reference string.

- **Reference string**: $7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1$

#### Simulation

1. **Page frames**: `[empty, empty, empty]`
   Reference: 7 → **Page fault**, load 7 → `[7, empty, empty]`

2. **Page frames**: `[7, empty, empty]`
   Reference: 0 → **Page fault**, load 0 → `[7, 0, empty]`

3. **Page frames**: `[7, 0, empty]`
   Reference: 1 → **Page fault**, load 1 → `[7, 0, 1]`

4. **Page frames**: `[7, 0, 1]`
   Reference: 2 → **Page fault**, replace 7 with 2 (7 is not used for the longest time) → `[2, 0, 1]`

5. **Page frames**: `[2, 0, 1]`
   Reference: 0 → No page fault (0 is already in memory)

6. **Page frames**: `[2, 0, 1]`
   Reference: 3 → **Page fault**, replace 1 with 3 (1 is not used for the longest time) → `[2, 0, 3]`

7. **Page frames**: `[2, 0, 3]`
   Reference: 0 → No page fault (0 is already in memory)

8. **Page frames**: `[2, 0, 3]`
   Reference: 4 → **Page fault**, replace 2 with 4 (2 is not used for the longest time) → `[4, 0, 3]`

9. **Page frames**: `[4, 0, 3]`
   Reference: 2 → **Page fault**, replace 4 with 2 (4 is not used for the longest time) → `[2, 0, 3]`

10. **Page frames**: `[2, 0, 3]`
    Reference: 3 → No page fault (3 is already in memory)

11. **Page frames**: `[2, 0, 3]`
    Reference: 0 → No page fault (0 is already in memory)

12. **Page frames**: `[2, 0, 3]`
    Reference: 3 → No page fault (3 is already in memory)

13. **Page frames**: `[2, 0, 3]`
    Reference: 2 → No page fault (2 is already in memory)

14. **Page frames**: `[2, 0, 3]`
    Reference: 1 → **Page fault**, replace 3 with 1 (3 is not used for the longest time) → `[2, 0, 1]`

15. **Page frames**: `[2, 0, 1]`
    Reference: 2 → No page fault (2 is already in memory)

16. **Page frames**: `[2, 0, 1]`
    Reference: 0 → No page fault (0 is already in memory)

17. **Page frames**: `[2, 0, 1]`
    Reference: 1 → No page fault (1 is already in memory)

18. **Page frames**: `[2, 0, 1]`
    Reference: 7 → **Page fault**, replace 2 with 7 (2 is not used for the longest time) → `[7, 0, 1]`

19. **Page frames**: `[7, 0, 1]`
    Reference: 0 → No page fault (0 is already in memory)

20. **Page frames**: `[7, 0, 1]`
    Reference: 1 → No page fault (1 is already in memory)

**Total number of page faults**: 9

### (2)

The **Least Recently Used (LRU) Algorithm** replaces the page that has not been used for the longest time. We simulate this with 3 page frames and the same reference string.

#### Simulation

1. **Page frames**: `[empty, empty, empty]`
   Reference: 7 → **Page fault**, load 7 → `[7, empty, empty]`

2. **Page frames**: `[7, empty, empty]`
   Reference: 0 → **Page fault**, load 0 → `[7, 0, empty]`

3. **Page frames**: `[7, 0, empty]`
   Reference: 1 → **Page fault**, load 1 → `[7, 0, 1]`

4. **Page frames**: `[7, 0, 1]`
   Reference: 2 → **Page fault**, replace 7 (7 is least recently used) with 2 → `[2, 0, 1]`

5. **Page frames**: `[2, 0, 1]`
   Reference: 0 → No page fault (0 is already in memory)

6. **Page frames**: `[2, 0, 1]`
   Reference: 3 → **Page fault**, replace 1 (1 is least recently used) with 3 → `[2, 0, 3]`

7. **Page frames**: `[2, 0, 3]`
   Reference: 0 → No page fault (0 is already in memory)

8. **Page frames**: `[2, 0, 3]`
   Reference: 4 → **Page fault**, replace 2 (2 is least recently used) with 4 → [4, 0, 3]

9. **Page frames**: [4, 0, 3]
   Reference: 2 → **Page fault**, replace 3 (3 is least recently used) with 2 → [4, 0, 2]

10. **Page frames**: [4, 0, 2]
    Reference: 3 → **Page fault**, replace 0 (0 is least recently used) with 3 → [4, 3, 2]

11. **Page frames**: [4, 3, 2]
    Reference: 0 → **Page fault**, replace 4 (4 is least recently used) with 0 → [0, 3, 2]

12. **Page frames**: [0, 3, 2]
    Reference: 3 → No page fault (3 is already in memory)

13. **Page frames**: [0, 3, 2]
    Reference: 2 → No page fault (2 is already in memory)

14. **Page frames**: [0, 3, 2]
    Reference: 1 → **Page fault**, replace 3 (3 is least recently used) with 1 → [0, 1, 2]

15. **Page frames**: [0, 1, 2]
    Reference: 2 → No page fault (2 is already in memory)

16. **Page frames**: [0, 1, 2]
    Reference: 0 → No page fault (0 is already in memory)

17. **Page frames**: [0, 1, 2]
    Reference: 1 → No page fault (1 is already in memory)

18. **Page frames**: [0, 1, 2]
    Reference: 7 → **Page fault**, replace 2 (2 is least recently used) with 7 → [0, 1, 7]

19. **Page frames**: [0, 1, 7]
    Reference: 0 → No page fault (0 is already in memory)

20. **Page frames**: [0, 1, 7]
    Reference: 1 → No page fault (1 is already in memory)

**Total number of page faults**: 12

### (3)

To implement the LRU algorithm using hardware support, such as a counter, we can consider the following points:

1. **When is the counter incremented?**
   - The counter is incremented with each memory reference. Each time the CPU accesses a memory page, the global counter is incremented by 1.

2. **When is the value of the counter copied to the page table field?**
   - Whenever a page is accessed (either loaded into a frame or accessed while already in a frame), the current value of the counter is copied into the corresponding page table entry. This value represents the "time" of the most recent access.

3. **How is the page to be replaced selected?**
   - When a page needs to be replaced, the algorithm selects the page with the smallest counter value in its page table entry. This value indicates that the page was accessed the least recently.

### (4)

One major drawback of the LRU algorithm from a practical implementation point of view is **its high overhead in maintaining the access order**. Keeping track of the exact order of memory accesses requires additional hardware support (e.g., counters or stacks) or complex data structures (e.g., linked lists), which can be expensive in terms of both space and time. Furthermore, frequent updating of these structures during each memory access can degrade overall system performance.

### (5)

An LRU-approximation algorithm can be implemented using a **reference bit** in each page table entry. This method is less accurate but much more practical than a true LRU.

1. **Each page table entry has a reference bit**, which is initially set to 0.

2. **On each memory access**, the reference bit of the accessed page is set to 1.

3. **When a page needs to be replaced**, the system scans through the pages to find one with a reference bit of 0. Pages with a reference bit of 1 have their bit cleared to 0 during this scan, allowing pages that haven’t been used recently to be found in subsequent scans.

4. This approach, often known as the **Clock algorithm** (or Second Chance algorithm), gives a page a “second chance” before being replaced, providing a good approximation of true LRU with much lower overhead.

## **Knowledge**

操作系统 页面置换算法 LRU 分页

### 解题技巧和信息

- **最优页面置换算法**: 需要未来的访问信息，实际中难以实现，但它提供了理想情况下的最小页面错误数，用于评价其他算法。
- **LRU 算法**: 基于过去的使用历史选择页面，硬件支持通常涉及计数器或栈，然而它的开销较大。
- **LRU 近似算法**: 通过引用位实现的近似 LRU，减少了实现的复杂性和开销，常见的方法包括时钟算法。

### 重点词汇

- **Page Fault**: 页面错误
- **Page Frame**: 页面框架
- **Page Replacement Algorithm**: 页面置换算法
- **Least Recently Used (LRU)**: 最近最少使用
- **Counter**: 计数器
- **Reference Bit**: 引用位

### 参考资料

1. **Operating System Concepts** by Abraham Silberschatz, Peter B. Galvin, Greg Gagne, Chapter 9: Virtual Memory, Section on Page Replacement Algorithms.
2. **Modern Operating Systems** by Andrew S. Tanenbaum, Chapter 3: Memory Management, Section on Page Replacement.
