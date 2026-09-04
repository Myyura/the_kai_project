---
sidebar_label: 2015年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Matrix-Multiplication-Algorithms
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2015年8月実施 専門科目I 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Given two $n$-dimensional integer vectors $x$ and $y$, let us write $x\doteq y$ if we have $x_i\equiv y_i\pmod 2$ for each $i\in[1,n]$. Here $x_i$ and $y_i$ denote the $i$-th elements of the vectors $x$ and $y$, respectively.
Likewise, given two $n\times n$ integer matrices $A$ and $B$, we write $A\doteq B$ if we have $a_{ij}\equiv b_{ij}\pmod 2$ for each $i,j\in[1,n]$. Here $a_{ij}$ and $b_{ij}$ denote the elements in the $i$-th row and the $j$-th column of the matrices $A$ and $B$, respectively.

In what follows, a vector all of whose elements are either $0$ or $1$ is referred to as a “0-1 vector”. A vector each of whose elements is chosen from $0$ and $1$, with equal probabilities and independently from the other elements, is referred to as a “random 0-1 vector”. The zero vector (i.e., the vector all of whose elements are $0$) is denoted by $o$; and the zero matrix (i.e., the matrix all of whose elements are $0$) is denoted by $O$.

Answer the following questions.

(1) Let $x\in\{0,1\}^3$ be a random 0-1 vector. Derive the probability with which

$$
\begin{pmatrix}
0&1&1\\
1&0&1\\
1&1&0
\end{pmatrix}\cdot x\doteq o
$$

holds.

(2) Let $A$ be an $n\times n$ integer matrix that does not satisfy $A\doteq O$, and $x\in\{0,1\}^n$ be a random 0-1 vector. Prove that the probability with which $A\cdot x\doteq o$ holds is no greater than $1/2$.

(3) Let $A$, $B$ and $C$ be $n\times n$ matrices that do not satisfy $A\cdot B\doteq C$, and $x\in\{0,1\}^n$ be a random 0-1 vector. Prove that the probability with which $A\cdot B\cdot x\doteq C\cdot x$ holds is no greater than $1/2$.

(4) Show an $O(n^2)$ algorithm that: takes three $n\times n$ integer matrices $A$, $B$ and $C$; always answers “SATISFIED” if the condition $A\cdot B\doteq C$ is satisfied; and answers “NOT SATISFIED”, with a probability greater than $9/10$, if the condition $A\cdot B\doteq C$ is not satisfied.

### 题目描述

向量、矩阵之间的等号均按元素模 $2$ 理解。随机 $0$-$1$ 向量是指各分量独立且等概率取 $0,1$ 的向量，零向量和零矩阵分别记为 $o,O$。回答下列问题。

（1）对随机向量 $x\in\{0,1\}^3$，求

$$
\begin{pmatrix}
0&1&1\\
1&0&1\\
1&1&0
\end{pmatrix}x=o
$$

成立的概率。

（2）设 $A$ 是不满足 $A=O$ 的 $n\times n$ 整数矩阵，$x\in\{0,1\}^n$ 为随机向量。证明 $Ax=o$ 的概率不超过 $1/2$。

（3）设 $A,B,C$ 是不满足 $AB=C$ 的 $n\times n$ 整数矩阵，$x\in\{0,1\}^n$ 为随机向量。证明 $ABx=Cx$ 的概率不超过 $1/2$。

（4）给出一个 $O(n^2)$ 随机算法：若 $AB=C$，总回答“成立”；若 $AB\ne C$，则以严格大于 $9/10$ 的概率回答“不成立”。

## **Kai**

以下计算均在域 $\mathbb F_2$ 上进行。

### (1)

三个方程分别给出 $x_2=x_3$、$x_1=x_3$、$x_1=x_2$，故只有
$x=(0,0,0)^\mathsf T,(1,1,1)^\mathsf T$ 两个解。因此

$$
\Pr(Ax=o)=\frac{2}{2^3}=\boxed{\frac14}.
$$

### (2)

取 $A$ 的一个非零行，并在该行中取系数为 $1$ 的位置 $j$。固定除 $x_j$ 外的所有分量后，该行与 $x$ 的内积形如

$$
x_j+c\pmod 2.
$$

由于 $x_j$ 等概率取 $0,1$，该内积为 $0$ 的条件概率恰为 $1/2$。事件 $Ax=o$ 还要求其余各行也为 $0$，故

$$
\boxed{\Pr(Ax=o)\le \frac12}.
$$

### (3)

令 $D=AB-C$。由 $AB\ne C$ 知 $D\ne O$，且

$$
ABx=Cx\iff Dx=o.
$$

由（2）立即得到所求概率不超过 $1/2$。

### (4)

独立重复以下检验 $4$ 次：随机生成 $x\in\{0,1\}^n$，依次计算

$$
y=Bx,\qquad z=Ay,\qquad t=Cx\pmod2.
$$

若某次 $z\ne t$，回答“不成立”；四次均相等时回答“成立”。每次只做三次矩阵向量乘法，故总时间为 $O(n^2)$。

若 $AB=C$，算法必定回答“成立”。若 $AB\ne C$，由（3），四次均未检出错误的概率至多为 $2^{-4}=1/16$，所以回答“不成立”的概率至少为

$$
1-\frac1{16}=\frac{15}{16}>\frac9{10}.
$$
