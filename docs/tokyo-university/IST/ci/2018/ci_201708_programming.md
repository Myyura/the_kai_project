---
sidebar_label: 2017年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Matrix-Multiplication-Algorithms
  - Computer-Science.Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2017年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**

[原題（日本語）](https://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2017-8-program.pdf)
Assume that matrix elements are non-negative integers and they are stored in main memory.

(1) When the algorithm below is used to multiply an $m \times n$ matrix $A$ and an $n \times m$ matrix $B$, how many times are these matrix elements in $A$ and $B$ read from the main memory? 
Write the total number of read operations on your answer sheet.  
Reading the same element twice is considered as two operations.  
Do not count accesses to matrix $C$ or other variables.

```pseudocode
var i = 0
while i < m begin
  var j = 0
  while j < m begin
    var d = 0
    var k = 0
    while k < n begin
      d = d + a[i, k] * b[k, j]
      k = k + 1
    end
    c[i, j] = d
    j = j + 1
  end
  i = i + 1
end
```

(2) When an $m \times n$ matrix is stored into a file, matrix elements are separated by a whitespace, rows are separated by a comma, and a period is written right after the last element in the last row.
For example, the following $3 \times 4$ matrix:

$$
\begin{pmatrix}
    0 & 1 & 2 & 3 \\
    4 & 5 & 6 & 7 \\
    8 & 9 & 10 & 11
\end{pmatrix}
$$

is written into a file as follows:

```text
0 1 2 3, 4 5 6 7, 8 9 10 11.
```

Answer the numbers of rows and columns in the matrix stored in file `mat1.txt` in the USB flash drive.
Write the answer in your answer sheet. Ignore all letters following a period in the file.

(3) Compute the trace (the sum of the main diagonal elements) of the product of the matrices $A$ and $B$ stored in file `mat1.txt` and `mat2.txt` in the USB flash drive.
Write the answer in your answer sheet.

(4) Once an element of a matrix is read from the main memory, it is saved in cache memory, and when the same element is required, the element is not read from the main memory as long as it is saved in the cache memory.
The cache memory can hold at most $s$ elements and it is managed in the LRU (Least Recently Used) scheme.
When the cache memory holds $s$ elements and a new element not included in the cache memory is required, the least recently used element is discarded from the cache memory.
Then the new element is read from the main memory and saved in the cache memory.

Under this circumstance, how many times are the elements of $m \times n$ matrix $A$ and $n \times m$ matrix $B$ read from the main memory while multiplying them in the algorithm shown in (1)?
Write a program that computes the total number of read operations for given $m,n$, and $s$.

(5) Suppose that $m$ and $n$ share a common divider $p$.
The algorithm for matrix multiplication is changed as below so that the number of read operations from the main memory will decrease when the cache memory mentioned in (4) is used.
Fill in each of the blanks $1$ to $6$ with a variable name. Write the answer in your answer sheet.

```text
var u = 0
while u < m begin
  var v = 0
  while v < m begin
    var w = 0
    while w < n begin
      var i = u
      while i < [blank 1] + [blank 2] begin
        var j = v
        while j < [blank 3] + [blank 4] begin
          var d = 0
          var k = w
          while k < [blank 5] + [blank 6] begin
            d = d + a[i, k] * b[k, j]
            k = k + 1
          end
          c[i, j] = c[i, j] + d
          j = j + 1
        end
        i = i + 1
      end
      w = w + p
    end
    v = v + p
  end
  u = u + p
end
```

(6) How many times are matrix elements in $A$ and $B$ read from the main memory during matrix multiplication in the algorithm shown in (5) with the cache memory mentioned in (4)?
Write a program that computes the total number of read operations for given $m,n,p$, and $s$.

(7) When computing matrix multiplication as in (6), which common divider $p$ of $m$ and $n$ minimizes the total number of read operations from the main memory on matrix elements in $A$ and $B$?
Write a program that computes such $p$ (if several, the maximum $p$ among them) for given $m,n$, and $s$.
Moreover, write the result of the computation in your answer sheet for $m=200$, $n=150$, and $s=600$.

### 题目描述

假设矩阵元素均为非负整数并存放在主存中。

1. 用下列算法把 $m\times n$ 矩阵 $A$ 与 $n\times m$ 矩阵 $B$ 相乘。求从主存读取 $A,B$ 元素的总次数；同一元素读两次计两次，不计对 $C$ 或其他变量的访问。

   ```text
   var i = 0
   while i < m begin
     var j = 0
     while j < m begin
       var d = 0
       var k = 0
       while k < n begin
         d = d + a[i, k] * b[k, j]
         k = k + 1
       end
       c[i, j] = d
       j = j + 1
     end
     i = i + 1
   end
   ```

2. 文件中的 $m\times n$ 矩阵以空格分隔元素、逗号分隔行，并在最后一行最后一个元素后写句点。例如

   $$
   \begin{pmatrix}0&1&2&3\\4&5&6&7\\8&9&10&11\end{pmatrix}
   $$

   写为 `0 1 2 3, 4 5 6 7, 8 9 10 11.`。读取 U 盘中的 `mat1.txt`，在答题纸上写出矩阵行、列数；忽略句点之后的所有字符。
3. U 盘的 `mat1.txt`、`mat2.txt` 分别存放 $A,B$。计算乘积的迹（主对角线元素之和），写在答题纸上。
4. 矩阵元素从主存读出后进入缓存；只要仍在缓存，再次需要时不读主存。缓存最多容纳 $s$ 个元素，采用 LRU：满时若要访问未缓存元素，就淘汰最久未使用者，再从主存读入新元素。编写程序，对给定 $m,n,s$，计算第 1 问算法中 $A,B$ 元素的主存读取总次数。
5. 假设 $m,n$ 有公因数 $p$。为减少缓存条件下的主存读取，把乘法改为如下分块算法；在空格 1～6 中各填一个变量名。

   ```text
   var u = 0
   while u < m begin
     var v = 0
     while v < m begin
       var w = 0
       while w < n begin
         var i = u
         while i < [空格1] + [空格2] begin
           var j = v
           while j < [空格3] + [空格4] begin
             var d = 0
             var k = w
             while k < [空格5] + [空格6] begin
               d = d + a[i, k] * b[k, j]
               k = k + 1
             end
             c[i, j] = c[i, j] + d
             j = j + 1
           end
           i = i + 1
         end
         w = w + p
       end
       v = v + p
     end
     u = u + p
   end
   ```

6. 在第 4 问的 LRU 缓存下，编写程序对给定 $m,n,p,s$ 计算第 5 问分块乘法读取 $A,B$ 元素的总次数。
7. 在第 6 问中，从 $m,n$ 的所有公因数里找出使读取总次数最小的 $p$；若有多个，取最大的 $p$。编写程序对给定 $m,n,s$ 求它，并在答题纸写出 $m=200,n=150,s=600$ 时的结果。

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2018-Summer) for the sample data files.

### (1)
There are $m^2n$ executions of the innermost multiplication, each reading one element from each matrix. The total is $\boxed{2m^2n}$.

### (2)
Keep only the text before the first period, split it at commas into rows, then split each row at whitespace. The row count and the common row length give $m,n$. For the linked sample `mat1.txt`, the answer is $3\times4$.

### (3)
Only the diagonal of $AB$ is needed:

$$
\operatorname{tr}(AB)=\sum_{i=0}^{m-1}\sum_{k=0}^{n-1}a_{ik}b_{ki}.
$$

This takes $O(mn)$ arithmetic operations and avoids storing $C$. Integer arithmetic preserves exactness. For the linked sample matrices, the three diagonal entries are $3,18,18$, hence the trace is $39$.

### (4)
Use disjoint addresses $in+k$ for $a_{ik}$ and $mn+km+j$ for $b_{kj}$. Traverse in the specified $i,j,k$ order, accessing $A$ before $B$. Maintain an ordered dictionary from least to most recently used address. On a hit, move the address to the end; on a miss, increment the read count, evict the first address if full, and insert the new address at the end. Initially the cache is empty. With $s=0$, all $2m^2n$ accesses miss.

### (5)
The six entries are $\boxed{u,p,v,p,w,p}$, respectively. The three inner index ranges cover a $p\times p$ block multiplication. Initialize all entries of $C$ to zero before accumulating the block contributions.

### (6)
Generate addresses in the exact order $u,v,w,i,j,k$ given by the blocked pseudocode and apply the same LRU procedure. Each common divisor $p$ visits every required triple $(i,j,k)$ once. The simulation takes expected $O(m^2n)$ time and $O(\min(s,2mn))$ cache space.

### (7)
Enumerate every positive divisor of $\gcd(m,n)$ and simulate its read count; minimize the pair `(count, -p)` to select the largest $p$ among ties. A larger block is not always better because its working set can exceed the cache capacity.

For $m=200$, $n=150$, and $s=600$:

| $p$ | Main-memory reads |
|---:|---:|
| 1 | 6,030,000 |
| 2 | 5,257,500 |
| 5 | 2,400,000 |
| 10 | 1,200,000 |
| 25 | 6,240,000 |
| 50 | 6,120,000 |

Thus $\boxed{p=10}$. If there are $d$ common divisors, the exhaustive search takes expected $O(d\,m^2n)$ time.

### Program

Save as `matrix.py`. Example commands are `python matrix.py 2 mat1.txt`, `python matrix.py 3 mat1.txt mat2.txt`, `python matrix.py 4 200 150 600`, `python matrix.py 6 200 150 10 600`, and `python matrix.py 7 200 150 600`.

```python
from collections import OrderedDict
from math import gcd
from pathlib import Path
import sys


def read_matrix(path):
    data = Path(path).read_text(encoding='utf-8').split('.', 1)[0]
    rows = [[int(value) for value in row.split()] for row in data.split(',')]
    if not rows or not rows[0] or any(len(row) != len(rows[0]) for row in rows):
        raise ValueError('a nonempty rectangular matrix is required')
    if any(value < 0 for row in rows for value in row):
        raise ValueError('matrix entries must be nonnegative')
    return rows


def product_trace(a, b):
    m, n = len(a), len(a[0])
    if len(b) != n or any(len(row) != m for row in b):
        raise ValueError('A must be m by n, B must be n by m')
    return sum(a[i][k] * b[k][i] for i in range(m) for k in range(n))


def addresses(m, n, p=None):
    if p is None:
        for i in range(m):
            for j in range(m):
                for k in range(n):
                    yield i * n + k
                    yield m * n + k * m + j
    else:
        for u in range(0, m, p):
            for v in range(0, m, p):
                for w in range(0, n, p):
                    for i in range(u, u + p):
                        for j in range(v, v + p):
                            for k in range(w, w + p):
                                yield i * n + k
                                yield m * n + k * m + j


def read_count(m, n, capacity, p=None):
    if m <= 0 or n <= 0 or capacity < 0:
        raise ValueError('m,n must be positive and capacity nonnegative')
    if p is not None and (p <= 0 or m % p or n % p):
        raise ValueError('p must be a positive common divisor')
    if capacity == 0:
        return 2 * m * m * n
    cache = OrderedDict()
    misses = 0
    for address in addresses(m, n, p):
        if address in cache:
            cache.move_to_end(address)
        else:
            misses += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
            cache[address] = None
    return misses


def best_block(m, n, capacity):
    common = gcd(m, n)
    candidates = [p for p in range(1, common + 1) if common % p == 0]
    counts = [(read_count(m, n, capacity, p), -p) for p in candidates]
    count, negative_p = min(counts)
    return -negative_p, count


def main():
    part = int(sys.argv[1])
    if part == 2:
        a = read_matrix(sys.argv[2])
        print(len(a), len(a[0]))
    elif part == 3:
        print(product_trace(read_matrix(sys.argv[2]), read_matrix(sys.argv[3])))
    elif part == 4:
        m, n, capacity = map(int, sys.argv[2:])
        print(read_count(m, n, capacity))
    elif part == 6:
        m, n, p, capacity = map(int, sys.argv[2:])
        print(read_count(m, n, capacity, p))
    elif part == 7:
        m, n, capacity = map(int, sys.argv[2:])
        print(*best_block(m, n, capacity))
    else:
        raise ValueError('choose part 2,3,4,6,7')


if __name__ == '__main__':
    main()
```
