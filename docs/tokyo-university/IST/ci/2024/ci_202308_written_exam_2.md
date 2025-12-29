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

## **Kai**

### (1)

$$
d(\text{data}_1,\text{query})=2,d(\text{data}_2,\text{query})=1,d(\text{data}_3,\text{query})=4.
$$

### (2)

Given we have $N$ data points, for every data point, the probability it is the same as the query is $2^{-b}$. Expected data ID list length is

$$
E[L]=E[\sum_i I_i]=\sum_i E[I_i]=N\cdot2^{-b}
$$

where $I_i$ is the indicator RV that the $i$-th data is the same as the query.

Hence the time complexity is $O(N\cdot 2^{-b})$ for the output list. If we count the indexing, with a $b$-bit index, the time complexity is totally $O(b+{N\over 2^b})$. Otherwise, it is $O({N\over 2^b})$.

The space complexity is $O(N+2^b)$ since there are $2^b$ lists (including empty ones) or $O(2^b)$ non-empty lists, and $N$ data IDs.

### (3)

The space complexity becomes $O(2N+2\cdot 2^{b/2})=O(N+2^{b/2})$ since there are 2 tables, each with $2^{b/2}$ indices and $N$ IDs.

The time complexity is $O(b+{N\over 2^{b/2}})$ or $O({N\over 2^{b/2}})$.

### (4)

First we find a list $L_1$ from $T_1$ for finding a match for the first $b/2$ bits with expected $N/2^b$ length by executing (3), and verify by computing Hamming distance for every datum with $O(b)$ time. We find the sequences with Hamming distance $\le 1$ and the first-$b/2$ bits same as the query.

Then we find a list $L_2$ from $T_2$ and execute the same. We thus get all sequences with Hamming distance $\le1$.

Finding 2 lists takes time $O(b+{N\over 2^{b/2}})$ and verifying takes $O(b\cdot {N\over 2^{b/2}})$. So the average time complexity is $O(b\cdot {N\over 2^{b/2}})$.

### (5)

| $x$  | $y$  | $z$ (Distance) |
| ---- | ---- | -------------- |
| 0    | 0    | 0              |
| 0    | 1    | 1              |
| 1    | 0    | 1              |
| 1    | 1    | 0              |



$z=(\lnot x\land y)\lor(x\land\lnot y)$

`z=OR(AND(NOT(x), y), AND(x, NOT(y)))`

### (6)

In (5), we have constructed $H_1$. Let the XOR operation be $\oplus$, we find $x\oplus y=H_1(x,y)$.

Since

$$
z=H_1(x_1,y_1)+H_1(x_2,y_2)
$$

the lower bit $z_2$ is the sum mod $2$:

$$
z_2=H_1(x_1,y_1)\oplus H_1(x_2,y_2)=H_1(H_1(x_1,y_1),H_1(x_2,y_2))
$$

the higher bit $z_1$ is the carry:

$$
z_2=H_1(x_1,y_1)\and H_1(x_2,y_2)
$$

So the circuit is

`z2=H1(H1(x1,y1),H1(x2,y2))`

`z1=AND(H1(x1,y1),H1(x2,y2))`

### (7)

$$
(z_1,z_2,z_3)=H_4=\underbrace{H_2((x_1,x_2),(y_1,y_2))}_{(A_1,A_2)}+\underbrace{H_2((x_3,x_4),(y_3,y_4))}_{(B_1,B_2)}
$$

A **half adder** is a module taking input $A,B$ and output $S,C$ as the sum mod 2 and the carry.

| A    | B    | S    | C    |
| ---- | ---- | ---- | ---- |
| 0    | 0    | 0    | 0    |
| 0    | 1    | 1    | 0    |
| 1    | 0    | 1    | 0    |
| 1    | 1    | 0    | 1    |



$(A_1,A_2)$ and $(B_1,B_2)$ can be `00,01,10`.

$z_3$ is the sum-mod-2 from a half adder adding $A_2,B_2$.

$z_2$ is the S from a half adder wrapping the carry of `HA(A2,B2)` and the S of `HA(A1,B1)`

$z_1$ is the final carry of `A1+B1+HA(A2,B2)[C]`. When it is 1, the configuration is like `11,01` or `10,10`. So the C of `HA(A1,B1)` must be considered in `10,10` case; and the carry when `11+01` i.e. `HA(HA(A2,B2)[C],HA(A1,B1)[S])` is also considered (the sum of which is $z_2$).

`A1,A2=H2(x1,y1,x2,y2)`

`B1,B2=H2(x3,y3,x4,y4)`

`z3,c3=HA(A2,B2)` (sum,carry)

`s2,c2=HA(A1,B1)`

`z2,c1=HA(c3,s2)`

`z1=OR(c1,c2)`

