---
sidebar_label: '2024年8月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

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