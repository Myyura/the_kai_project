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
Read access to the elements in $A$ and $B$ is:
- $A$ Elements: $m\cdot n \cdot m$ reads
- $B$ Elements: $m\cdot n \cdot m$ reads

Therefore, in total there are $2(m\cdot n \cdot m)$ read operations.

### (2)

```python
# Here I assume that file can be weirdly formatted and matrix isn't defined in a single line.
def main():
    lines = []
    with open('2018-Summer/mat1.txt','r') as f:
        lines = f.readlines()

    rows = 0
    cols = 0

    cols_check = True
    rows_check = True
    for l in lines:
        sep_cnt = l.count(',')
        end_cnt = l.count('.')
        if sep_cnt > 0:
            rows += sep_cnt
            if cols_check:
                if l.find(',') > 0:
                    cols += len(l[:l.find(',')].strip().split(' '))
                cols_check = False
        else:
            if cols_check:
                cols += len(l.strip().split(' '))
        if end_cnt > 0:
            rows += 1
            break
        
    
    print(f"{rows} x {cols}")


if __name__ == "__main__":
    main()
```

### (3)

```python
# Here I assume matrix defined in a single line, so one line per matrix
from locale import atoi
import numpy as np

def get_mat_from_file(filename):
    mats = []
    lines = []
    with open(filename, 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        rows =  l.strip()[:-1].split(',')
        _r = len(rows)
        _c = len(rows[0].split(' '))
        mats.append(np.full((_r,_c),0))
        i = 0
        for ro in rows:
            j = 0
            for itm in ro.split(' '):
                mats[-1][i,j] = atoi(itm)
                j += 1
            i += 1
        
        return mats

def get_mul_mat_a_b(mat_a, mat_b):
    mat_c = np.matmul(mat_a,mat_b)
    return mat_c

def get_trace_for_mat(mat):
    return np.trace(mat)

def main():
    # According to the instructions there is no issues with using numpy
    mat_a = get_mat_from_file('2018-Summer/mat1.txt')[0]
    mat_b = get_mat_from_file('2018-Summer/mat2.txt')[0]
    mat_c = get_mul_mat_a_b(mat_a,mat_b)
    trc = get_trace_for_mat(mat_c)

    print(trc)
    

if __name__ == "__main__":
    main()
```

### (4)

```python
def lru_insert(elm, lru, s):
    if s == 0:
        return
    if len(lru) >= s:
        lru.pop()
    lru.insert(0,elm)

def lru_is_in(elm, lru):
    return elm in lru

def lru_refresh(elm,lru):
    lru.remove(elm)
    lru.insert(0,elm)

def main():
    cache_lru = []

    m, n, s = map(int, input().split())
    if m < 0 or n < 0 or s < 0:
        raise ValueError('m, n, and s must be nonnegative')

    rds = 0 # number of readings

    i = 0
    while i < m:
        j = 0
        while j < m:
            k = 0
            while k < n:
                if not lru_is_in((i+1)*n+k, cache_lru):
                    rds += 1
                    lru_insert((i+1)*n+k, cache_lru,s)
                else:
                    lru_refresh((i+1)*n+k, cache_lru)
                if not lru_is_in(-(k+1)*m-j, cache_lru):
                    rds += 1
                    lru_insert(-(k+1)*m-j, cache_lru,s)
                else:
                    lru_refresh(-(k+1)*m-j, cache_lru)
                k += 1
            j += 1
        i += 1
    print(rds)

if __name__ == "__main__":
    main()
```

### (5)

- `[blank 1]` - u
- `[blank 2]` - p
- `[blank 3]` - v
- `[blank 4]` - p
- `[blank 5]` - w
- `[blank 6]` - p

### (6)

```python
def lru_insert(elm, lru, s):
    if s == 0:
        return
    if len(lru) >= s:
        lru.pop()
    lru.insert(0,elm)

def lru_is_in(elm, lru):
    return elm in lru

def lru_refresh(elm,lru):
    lru.remove(elm)
    lru.insert(0,elm)

def main():
    cache_lru = []

    m, n, p, s = map(int, input().split())
    if p <= 0 or m % p or n % p or s < 0:
        raise ValueError('p must divide m and n, and s must be nonnegative')

    rds = 0 # number of readings

    u = 0
    while u < m:
        v = 0
        while v < m:
            w = 0
            while w < n:
                i = u
                while i < u+p:
                    j = v
                    while j < v+p:
                        k = w
                        while k < w+p:
                            if not lru_is_in((i+1)*n+k, cache_lru):
                                rds += 1
                                lru_insert((i+1)*n+k, cache_lru,s)
                            else:
                                lru_refresh((i+1)*n+k, cache_lru)
                            if not lru_is_in(-(k+1)*m-j, cache_lru):
                                rds += 1
                                lru_insert(-(k+1)*m-j, cache_lru,s)
                            else:
                                lru_refresh(-(k+1)*m-j, cache_lru)
                            k += 1
                        j += 1
                    i += 1
                w += p
            v += p
        u += p
    print(rds)

if __name__ == "__main__":
    main()
```

### (7)

```python
import math 

def lru_insert(elm, lru, s):
    if s == 0:
        return
    if len(lru) >= s:
        lru.pop()
    lru.insert(0,elm)

def lru_is_in(elm, lru):
    return elm in lru

def lru_refresh(elm,lru):
    lru.remove(elm)
    lru.insert(0,elm)

def get_p_options(m,n,s):
    return [x for x in range(1,min(m,n)+1) if m % x == 0 and n % x == 0]

'''
All common divisors must be checked: increasing p improves reuse only while the
working set fits the cache; a larger block may instead cause LRU thrashing.
'''
def main():
    m, n, s = map(int, input().split())
    if m <= 0 or n <= 0 or s < 0:
        raise ValueError('m and n must be positive, and s nonnegative')
    best_p = 1
    min_rds = float('inf')
    all_p = get_p_options(m,n,s)
    all_p.reverse()

    for p in all_p:
        cache_lru = []
        rds = 0 # number of readings
        go_on = True
        u = 0
        while u < m and go_on:
            v = 0
            while v < m and go_on:
                w = 0
                while w < n and go_on:
                    i = u
                    while i < u+p and go_on:
                        j = v
                        while j < v+p and go_on:
                            k = w
                            while k < w+p and go_on:
                                if not lru_is_in((i+1)*n+k, cache_lru):
                                    rds += 1
                                    lru_insert((i+1)*n+k, cache_lru,s)
                                else:
                                    lru_refresh((i+1)*n+k, cache_lru)
                                if not lru_is_in(-(k+1)*m-j, cache_lru):
                                    rds += 1
                                    lru_insert(-(k+1)*m-j, cache_lru,s)
                                else:
                                    lru_refresh(-(k+1)*m-j, cache_lru)
                                if rds > min_rds:
                                    go_on = False
                                k += 1
                            j += 1
                        i += 1
                    w += p
                v += p
            u += p
        if rds < min_rds or (rds == min_rds and p > best_p):
            best_p = p
            min_rds = rds
    
    print(f"best p={best_p} : {min_rds} readings")

if __name__ == "__main__":
    main()
```

For $m=200$, $n=150$, and $s=600$, the read counts for
$p=1,2,5,10,25,50$ are respectively
$6{,}030{,}000$, $5{,}257{,}500$, $2{,}400{,}000$, $1{,}200{,}000$,
$6{,}240{,}000$, and $6{,}120{,}000$. Therefore the answer is $\boxed{p=10}$.
