---
sidebar_label: '2024年8月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 プログラミング

## **Author**
vv, [itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Answer the following questions by writing programs. The files needed for answering the questions are found in the USB flash drive. Store the programs in the USB flash drive before the examination ends.

In this problem, we represent matrices with $r$ rows and $c$ columns in various formats. The entry in the $i$-th row and $j$-th column in a matrix is denoted as the $(i, j)$ entry; the upper left entry of a matrix is the $(1, 1)$ entry, and the entry to the right of it is the $(1, 2)$ entry. We say that, for the $(i, j)$ entry, the row number is $i$ and the column number is $j$. Here, $1 \le i \le r$ and $1 \le j \le c$ hold. For any matrix given in this problem, all entries are integers between $-9$ and $9$, inclusive, no row or column has more than 10 non-zero entries, and the total number of non-zero entries is at most $10^6$.

> **Format 1** Format 1 is a number sequence that arranges the entries of a matrix in the row-major order. In the row-major order, the entries in upper rows precede those in lower rows, and entries to the left precede to the right in a row. For example, the matrix
>
> $$ \begin{pmatrix} 1 & -5 & 0 \\ 0 & 3 & 0 \end{pmatrix} $$
>
> is represented as
>
> `1, -5, 0, 0, 3, 0`
>
> in Format 1.

When a number sequence is stored in a file, the concatenated string of elements separated by commas is stored. For example, the file storing a sequence of the four elements, $2, 5, -3, 0$ contains the following string.

```
2,5,-3,0
```

(1) Number sequences representing matrices in Format 1 are stored in files. For each of the following matrices, find the row such that the sum of the entries is the largest, and write down on the answer sheet its row number and the sum of its entries. If there are two or more such rows, answer about one of them.

(a) The matrix with 6 rows and 4 columns stored in `data1a.txt`.
(b) The matrix with 100 rows and 150 columns stored in `data1b.txt`.


> **Format 2** Let $x_{ij}$ be the $(i, j)$ entry of a matrix. We define Format 2 as the number sequence where the three integers $i, j,$ and $x_{ij}$ for all $(i, j)$ such that $x_{ij} \neq 0$ are arranged in the row-major order. For example, the matrix
>
> $$ \begin{pmatrix} 1 & -5 & 0 \\ 0 & 3 & 0 \end{pmatrix} $$
>
> is represented as
>
> `1, 1, 1, 1, 2, -5, 2, 2, 3`
>
> in Format 2.

(2) Number sequences representing matrices in Format 2 are stored in files. For each of the following matrices, find the row such that the sum of the entries is the largest, and write down on the answer sheet its row number and the sum of its entries. If there are two or more such rows, answer about one of them.

(a) The matrix with 6 rows and 4 columns stored in `data2a.txt`.
(b) The matrix with 100 rows and 150 columns stored in `data2b.txt`.
(c) The matrix with $10^6$ rows and $10^6$ columns stored in `data2c.txt`.

> **Format 3** Let $n_i$ be the number of consecutive zeros immediately preceding the $i$-th element in the sequence of entries of a matrix arranged in the row-major order. Let $x_i$ be the value of the $i$-th element. We define Format 3 as the number sequence where the two integers $n_i$ and $x_i$ for all $i$ such that $x_i \neq 0$ are arranged in the ascending order of $i$. For example, the matrix
>
> $$ \begin{pmatrix} 1 & -5 & 0 \\ 0 & 3 & 0 \end{pmatrix} $$
>
> is represented as
>
> `0, 1, 0, -5, 2, 3`
>
> in Format 3.

(3) Number sequences representing matrices in Format 3 are stored in files. For each of **the matrices obtained by transposing the following matrices**, find the row such that the sum of the entries is the largest, and write down on the answer sheet its row number and the sum of its entries. If there are two or more such rows, answer about one of them.

(a) The matrix with 4 rows and 6 columns stored in `data3a.txt`.
(b) The matrix with 100 rows and 150 columns stored in `data3b.txt`.
(c) The matrix with $10^6$ rows and $10^6$ columns stored in `data3c.txt`.

## **Kai** (By vv)

```python
# the utils
from pathlib import Path

def find_biggest_gyou(board: list[list[float]], r: int, c: int) -> tuple[int, float]:
    best_row = 1
    best_sum = float("-inf")
    for i in range(r):
        current_sum = sum(board[i][j] for j in range(c))
        if current_sum > best_sum:
            best_sum = current_sum
            best_row = i + 1  # 题目要求行号从 1 开始
    return best_row, best_sum

def read_from_file(path: str) -> list[int]:
    """读取以逗号分隔的整数序列文件并返回整数列表。"""
    content = Path(path).read_text(encoding="utf-8").strip()
    if not content:
        return []

    tokens = (part.strip() for part in content.replace("\n", "").replace("\r", "").split(","))
    return [int(token) for token in tokens if token]

def board_init(r: int, c: int) -> list[list[float]]:
    board = [[0.0 for _ in range(c)] for _ in range(r)]
    return board
```

### (1)

```python
from pathlib import Path

import utils

def main():
    # 确立相对路径的base path，需要背
    base_dir = Path(__file__).resolve().parent

    data = utils.read_from_file(str(base_dir / 'data1a.txt'))
    r = 6
    c = 4
    board = [[0 for _ in range(c)] for _ in range(r)]

    for i in range(r):
        for j in range(c):
            board[i][j] = data[i * c + j]
    
    saidaiGyou = utils.find_biggest_gyou(board, r, c)
    print(saidaiGyou)
    
    # 第二小问
    data = utils.read_from_file(str(base_dir / 'data1b.txt'))
    r = 100
    c = 150
    board = [[0 for _ in range(c)] for _ in range(r)]

    for i in range(r):
        for j in range(c):
            board[i][j] = data[i * c + j]
    
    saidaiGyou = utils.find_biggest_gyou(board, r, c)
    print(saidaiGyou)

if __name__ == "__main__":
    main()
```

### (2)

```python
from collections import defaultdict
from pathlib import Path

import utils

def triple_tuple(data: list[int]) -> list[tuple[int, int, int]]:
    if len(data) % 3 != 0:
        raise ValueError("数据长度必须是 3 的倍数。")

    triples: list[tuple[int, int, int]] = []
    for idx in range(0, len(data), 3):
        row, col, value = data[idx : idx + 3]
        triples.append((row, col, value))
    return triples


def find_max_row_sum(triples: list[tuple[int, int, int]], r: int, c: int) -> tuple[int, int]:
    row_sums: defaultdict[int, int] = defaultdict(int)
    for row, col, value in triples:
        if not (1 <= row <= r):
            raise ValueError(f"行号 {row} 超出范围 1..{r}")
        if not (1 <= col <= c):
            raise ValueError(f"列号 {col} 超出范围 1..{c}")
        row_sums[row] += value

    best_row = 1
    best_sum = row_sums.get(1, 0)
    for row_idx in range(2, r + 1):
        total = row_sums.get(row_idx, 0)
        if total > best_sum:
            best_row = row_idx
            best_sum = total
    return best_row, best_sum


def solve_case(base_dir: Path, filename: str, r: int, c: int) -> tuple[int, int]:
    data = utils.read_from_file(str(base_dir/"data"/filename))
    triples = triple_tuple(data)
    return find_max_row_sum(triples, r, c)


def main():
    base_dir = Path(__file__).resolve().parent
    cases = [
        ("data2a.txt", 6, 4),
        ("data2b.txt", 100, 150),
        ("data2c.txt", 10**6, 10**6),
    ]

    for filename, r, c in cases:
        print(solve_case(base_dir, filename, r, c))

if __name__ == "__main__":
    main()
```

### (3)

```python
from pathlib import Path
import utils

def solve_format3(data: list[int], r: int, c: int) -> list[float]:
    if len(data) % 2 != 0:
        raise ValueError("数据长度必须是 2 的倍数。")

    row_sums = [0.0 for _ in range(r)]
    total_cells = r * c
    idx = 0

    for i in range(0, len(data), 2):
        zero_num = int(data[i])
        value = float(data[i + 1])
        if zero_num < 0:
            raise ValueError("零段长度不能为负数。")
        idx += zero_num
        if idx >= total_cells:
            raise ValueError("游标超出棋盘范围。")

        row = idx // c
        row_sums[row] += value
        idx += 1

    return row_sums

def solve_case(base_dir: Path, filename: str, r: int, c: int) -> tuple[int, float]:
    data = utils.read_from_file(str(base_dir/"data"/filename))
    row_sums = solve_format3(data, r, c)
    best_row = 1
    best_sum = row_sums[0]
    for row_idx in range(1, r):
        total = row_sums[row_idx]
        if total > best_sum:
            best_sum = total
            best_row = row_idx + 1
    return best_row, best_sum

def main():
    base_dir = Path(__file__).resolve().parent
    cases = [
        ("data3a.txt", 4, 6),
        ("data3b.txt", 100, 150),
        ("data3c.txt", 10**6, 10**6),
    ]
    for filename, r, c in cases:
        print(solve_case(base_dir, filename, r, c))

if __name__ == "__main__":
    main()
```