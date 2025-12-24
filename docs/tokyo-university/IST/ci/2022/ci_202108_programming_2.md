---
sidebar_label: '2021年8月実施 プログラミング 第2問'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 プログラミング 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

We store the daily numbers of newly infected people with some virus (*new infections*, below) in a text file in chronological order. The numbers are separated by colons (:). For example, when the numbers of new infections for 5 days are

`621 591 907 1121 1032`

the following text

`621:591:907:1121:1032`

is stored in a file.

### **Problem**

(1) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections on every day stored in the text file `infections.txt`. We define the following function
$$
ave(i)=\frac{1}{7}\sum_{k=-3}^3 x_{i+k}
$$
where $3\le i<n-3$.

Calculate the maximum and minimum values of $ave(i)$ and write them on the answer sheet. Furthermore, calculate the sum $\sum_{i=3}^{n-4}ave(i)$ and write it on the answer sheet. Round those values to 4 decimal places.

(2) Let $x_0,x_1,x_2,x_3,\dots,x_{m-1}$ and $y_0,y_1,y_2,y_3,\dots,y_{n-1}$ be the numbers of new infections stored in text files $x$ and $y$, respectively ($m\ge n$). We define $s(x,y)$, the similarity score between these two files, as
$$
s(x,y)=-\min_i\sum_{k=0}^{n-1}(x_{k+i}-y_k)^2
$$
where $0\le i\le m-n$.

Among arbitrary pairs of two files in the folder `data`, find the pair with the highest similarity score and write the two file names on the answer sheet. Furthermore, write the similarity score on the answer sheet. When more than one such pair is found, write all the pairs and their scores.

(3) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. These numbers are denoted by $\{x_i\}$.

We find the approximate formula $ai+k$ that has a good fit to these numbers $\{x_i\}$. For example, the approximate value for $x_3$ is $3a+k$. Here, $a$ and $k$ are the constants that minimize the error $\sum_{i=0}^{n-1}(ai+k-x_i)^2$ for $\{x_i\}$. They are calculated as follows.
$$
a=\frac{n\sum ix_i-\sum i\sum x_i}{n\sum i^2-(\sum i)^2}\\
k=\frac{\sum i^2\sum x_i-\sum ix_i\sum i}{n\sum i^2-(\sum i)^2}
$$
where $\sum$ represents $\sum_{i=0}^{n-1}$.

Calculate $a$ and $k$ rounded to 4 decimal places and write them on the answer sheet.

(4) Let $x_0,x_1,x_2,x_3,\dots,x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. For a given $s$, a sub-sequence $x_s,x_{s+1},x_{s+2},\dots,x_{s+30}$ of these numbers is denoted by $\{x_{s+i}\}$. Here, $0\le s<n-30$.

We find the approximate formula $ka^i$ that has a good fit to a sub-sequence $\{x_{s+i}\}$. For example, the approximate value of $x_{s+3}$ is $ka^3$. Here, $a$ and $k$ are the constants that minimize this error
$$
\sum_{i=0}^{30}(\log_e ka^i-\log_e(x_{s+i}+1))^2
$$
for $\{x_{s+i}\}$.

Find $s$ such that it maximizes the value of $a$ in the approximate formula $ka^i$ for $\{x_{s+i}\}$. Write the values of $s,a,k$ for such $s$ on the answer sheet. Round $a$ and $k$ to 4 decimal places. When more than one such $s$ is found, write the values of $s,a,k$ for every $s$.