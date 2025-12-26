---
sidebar_label: '2023年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Let us consider a dataset that consists of $N$ data where each datum is represented in the form $\boldsymbol{x} = (x_1, x_2, ..., x_b) \quad (x_i \in \{0, 1\}, 1 \le i \le b)$ which is a bit string of length $b \ (b \ge 1)$. Each datum is assigned a unique data ID (identifier) which is a distinct integer. Let's build a system that searches for data close in distance to an arbitrary input datum (query datum). During a search, the system needs to enumerate the data IDs of all data that satisfy the condition. The distance between two data is defined by the Hamming distance between bit strings. The Hamming distance between two bit strings $\boldsymbol{x} = (x_1, x_2, ..., x_b)$ and $\boldsymbol{y} = (y_1, y_2, ..., y_b)$ is defined as follows.

$$
d(\boldsymbol{x}, \boldsymbol{y}) = \sum_{i=1}^b |x_i - y_i|
$$

Answer the following questions.

(1) The table below shows an example of the dataset in the case of $b=4$ and $N=3$.

| Data ID | $x_1$ | $x_2$ | $x_3$ | $x_4$ |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 0 | 1 | 1 | 1 |
| 2 | 1 | 0 | 0 | 1 |
| 3 | 0 | 0 | 1 | 0 |

Assume that a query datum $(1, 1, 0, 1)$ is given. Find the Hamming distance between the query datum and each datum.

Next, we consider a search algorithm using a lookup table. Assume that $b$ is an even number and that the bit strings of data are uniformly distributed. In the following questions, it is not necessary to consider the time complexity of building a lookup table.

(2) We want to search for data whose bit strings are identical to a given query datum. Here, let us consider a lookup table that takes a bit string as an input and outputs a list containing the data IDs of all data that have the bit string. Answer the average time complexity and the space complexity of a search using this lookup table.

(3) We consider an algorithm as follows. We divide a bit string into two bit strings of length $b/2$. We search for candidates by using the lookup table in the same manner as Question (2) for each divided bit string and then return the data IDs of all data matching the query datum. Answer the average time complexity and the space complexity of a search by this algorithm.

(4) By using the same data structure as Question (3), we consider an algorithm to search for data with a Hamming distance of 1 or less from a given query datum. Answer the average time complexity of a search by this algorithm.

Next, we consider the case where $2^b \gg N$. In this case, it is sometimes effective to perform a linear search by actually calculating the Hamming distance between the query datum and each datum. Therefore, let us consider designing a specialized digital circuit to compute the Hamming distance.

(5) Let us consider a 2-input 1-output digital circuit $H_1$ whose inputs are two 1-bit bit strings $\boldsymbol{x} = (x_1)$, $\boldsymbol{y} = (y_1) \quad (x_1, y_1 \in \{0, 1\})$ and output is $z \in \{0, 1\}$ which is the Hamming distance between $\boldsymbol{x}$ and $\boldsymbol{y}$. Draw a table representing the relation of $\boldsymbol{x}, \boldsymbol{y}$, and $z$. Also, draw $H_1$ by using necessary components among AND, OR, and NOT gates.

(6) Draw a 4-input 2-output digital circuit $H_2$ that outputs a binary representation of the Hamming distance between two 2-bit bit strings by using necessary components among AND, OR, NOT gates, and $H_1$.

(7) Draw an 8-input 3-output digital circuit $H_4$ that outputs a binary representation of the Hamming distance between two 4-bit bit strings by using necessary components among $H_2$, half adder $HA$, and OR gate.