---
sidebar_label: "2023年8月実施 数学 第1問"
sidebar_position: 16
tags:
  - Tokyo-University
  - Linear-Algebra
---
# 東京大学 情報理工学研究科 2023年8月実施 数学 第1問

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $\mathbb{R}^3$ be the set of the three-dimensional real column vectors and $\mathbb{R}^{3 \times 3}$ be the set of the three-by-three real matrices. Let $\mathbf{n}_1$, $\mathbf{n}_2$, and $\mathbf{n}_3 \in \mathbb{R}^3$ be linearly independent unit-length vectors and $\mathbf{n}_4 \in \mathbb{R}^3$ be a unit-length vector not parallel to $\mathbf{n}_1$, $\mathbf{n}_2$, or $\mathbf{n}_3$. Let $\mathbf{A}$ and $\mathbf{B}$ be square matrices defined as

$$
\mathbf{A} = \begin{pmatrix} 
\mathbf{n}_1^\mathrm{T} - \mathbf{n}_2^\mathrm{T} \\
\mathbf{n}_2^\mathrm{T} - \mathbf{n}_3^\mathrm{T} \\
\mathbf{n}_3^\mathrm{T} - \mathbf{n}_4^\mathrm{T}
\end{pmatrix}, 
\quad 
\mathbf{B} = \sum_{i=1}^{4} \mathbf{n}_i \mathbf{n}_i^\mathrm{T}.
$$

Here, $\mathbf{X}^\mathrm{T}$ and $\mathbf{x}^\mathrm{T}$ denote the transpose of a matrix $\mathbf{X}$ and a vector $\mathbf{x}$, respectively. Answer the following questions.

(1) Find the condition for $\mathbf{n}_4$ such that the rank of $\mathbf{A}$ is three.

(2) In the three-dimensional Euclidean space $\mathbb{R}^3$, consider four planes $\Pi_i = \{\mathbf{x} \in \mathbb{R}^3 \mid \mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i = 0\}$ $(d_i$ is a real number, and $i = 1, 2, 3, 4)$ that satisfy the following three conditions: (i) the rank of $\mathbf{A}$ is three, (ii) $\Omega = \{\mathbf{x} \in \mathbb{R}^3 \mid \mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i \geq 0, \, i = 1, 2, 3, 4\}$ is not the empty set, and (iii) there exists a sphere $\mathbf{C} (\mathbf{C} \subset \Omega)$ to which $\Pi_i$ $(i = 1, 2, 3, 4)$ are tangent. The position vector of the center of $\mathbf{C}$ is represented by $\mathbf{A}^{-1} \mathbf{u}$ using a vector $\mathbf{u} \in \mathbb{R}^3$. Express $\mathbf{u}$ using $d_i \, (i = 1, 2, 3, 4)$.

(3) Show that $\mathbf{B}$ is a positive definite symmetric matrix.

(4) Consider the point $\mathbf{P}$ from which the sum of squared distances to four planes $\{\mathbf{x} \in \mathbb{R}^3 \mid \mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i = 0\}$ $(d_i$ is a real number, and $i = 1, 2, 3, 4)$ is minimized. The position vector of $\mathbf{P}$ is represented by $\mathbf{B}^{-1} \mathbf{v}$ using a vector $\mathbf{v} \in \mathbb{R}^3$. Express $\mathbf{v}$ using $\mathbf{n}_i$ and $d_i \, (i = 1, 2, 3, 4)$.

(5) Let $l_i$ be a straight line through a point $Q_i$, the position vector of which is $\mathbf{x}_i \in \mathbb{R}^3$, parallel to $\mathbf{n}_i$ $(i = 1, 2, 3)$ in $\mathbb{R}^3$. Let $\mathbf{R}_i$ be the orthogonal projection of an arbitrary point $\mathbf{P}$, the position vector of which is $\mathbf{y} \in \mathbb{R}^3$, onto $l_i$. The position vector of $\mathbf{R}_i$ is represented by $\mathbf{y} - \mathbf{W}_i(\mathbf{y} - \mathbf{x}_i)$ using a matrix $\mathbf{W}_i \in \mathbb{R}^{3 \times 3}$. The identity matrix is denoted by $\mathbf{I} \in \mathbb{R}^{3 \times 3}$.

- (a) Express $\mathbf{W}_i$ using $\mathbf{n}_i$ and $\mathbf{I}$.
- (b) Show that $\mathbf{W}_i^\mathrm{T} \mathbf{W}_i = \mathbf{W}_i$.
- ($c$) Consider a plane $\Sigma = \{\mathbf{x} \in \mathbb{R}^3 \mid \mathbf{a}^\mathrm{T} \mathbf{x} = b\}$ $(\mathbf{a} \in \mathbb{R}^3$ is a non-zero vector, and $b$ is a real number). Let $\mathbf{S} \in \Sigma$ be the point from which the sum of squared distances to $l_1$, $l_2$, and $l_3$ is minimized. When $\mathbf{n}_1$, $\mathbf{n}_2$, and $\mathbf{n}_3$ are orthogonal to each other, the position vector of $\mathbf{S}$ is represented by $\left( \mathbf{I} - \frac{\mathbf{a}\mathbf{a}^\mathrm{T}}{\mathbf{a}^\mathrm{T}\mathbf{a}} \right) \mathbf{w} + \frac{\mathbf{a}b}{\mathbf{a}^\mathrm{T}\mathbf{a}}$. using a vector $\mathbf{w} \in \mathbb{R}^3$ which is independent of $\mathbf{a}$ and $b$. Express $\mathbf{w}$ using $\mathbf{W}_i$ and $\mathbf{x}_i \, (i = 1, 2, 3)$.


## **Kai**
### (1)

Given the matrix $\mathbf{A}$:

$$
\mathbf{A} = \begin{pmatrix} 
\mathbf{n}_1^\mathrm{T} - \mathbf{n}_2^\mathrm{T} \\
\mathbf{n}_2^\mathrm{T} - \mathbf{n}_3^\mathrm{T} \\
\mathbf{n}_3^\mathrm{T} - \mathbf{n}_4^\mathrm{T}
\end{pmatrix},
$$

we need to determine the conditions on $\mathbf{n}_4$ that ensure $\mathbf{A}$ has a rank of three.

Let's assume that the third row of matrix $\mathbf{A}$ can be written as a linear combination of the first two rows. Thus, we assume:

$$
\mathbf{n}_3^\mathrm{T} - \mathbf{n}_4^\mathrm{T} = \alpha (\mathbf{n}_1^\mathrm{T} - \mathbf{n}_2^\mathrm{T}) + \beta (\mathbf{n}_2^\mathrm{T} - \mathbf{n}_3^\mathrm{T}),
$$

where $\alpha$ and $\beta$ are some scalars. Substituting $\mathbf{n}_4$ as a linear combination of $\mathbf{n}_1$, $\mathbf{n}_2$, and $\mathbf{n}_3$, we have:

$$
\mathbf{n}_3^\mathrm{T} - (c_1 \mathbf{n}_1^\mathrm{T} + c_2 \mathbf{n}_2^\mathrm{T} + c_3 \mathbf{n}_3^\mathrm{T}) = \alpha (\mathbf{n}_1^\mathrm{T} - \mathbf{n}_2^\mathrm{T}) + \beta (\mathbf{n}_2^\mathrm{T} - \mathbf{n}_3^\mathrm{T}).
$$

Expanding and rearranging the equation, we get:

$$
\mathbf{n}_3^\mathrm{T} - c_1 \mathbf{n}_1^\mathrm{T} - c_2 \mathbf{n}_2^\mathrm{T} - c_3 \mathbf{n}_3^\mathrm{T} = \alpha \mathbf{n}_1^\mathrm{T} - \alpha \mathbf{n}_2^\mathrm{T} + \beta \mathbf{n}_2^\mathrm{T} - \beta \mathbf{n}_3^\mathrm{T}.
$$

Grouping like terms:

$$
(1 - c_3 + \beta) \mathbf{n}_3^\mathrm{T} - c_1 \mathbf{n}_1^\mathrm{T} - c_2 \mathbf{n}_2^\mathrm{T} = \alpha \mathbf{n}_1^\mathrm{T} + (\beta - \alpha) \mathbf{n}_2^\mathrm{T}.
$$

For this equation to hold for arbitrary vectors $\mathbf{n}_1$, $\mathbf{n}_2$, and $\mathbf{n}_3$, the coefficients of each vector must match:

1. **For $\mathbf{n}_1$**:

   $$
   -c_1 = \alpha.
   $$

2. **For $\mathbf{n}_2$**:

   $$
   -c_2 = \beta - \alpha.
   $$

3. **For $\mathbf{n}_3$**:

   $$
   1 - c_3 + \beta = 0.
   $$

Thus, we have the following system of equations:

$$
\alpha = -c_1,
$$

$$
\beta = \alpha - c_2 = -c_1 - c_2,
$$

$$
1 - c_3 + \beta = 0 \Rightarrow 1 - c_3 = -\beta.
$$

Substituting $\beta = -c_1 - c_2$ into the last equation:

$$
1 - c_3 = c_1 + c_2.
$$

So, the conditions under which the third row of $\mathbf{A}$ can be written as a linear combination of the first two rows (i.e., the matrix would not have full rank) are:

$$
c_1 + c_2 + c_3 = 1.
$$

### Conclusion for Full Rank

For the matrix $\mathbf{A}$ to have full rank (rank 3), **$\mathbf{n}_4$** must be such that the above condition **does not** hold. Therefore, the condition for the rank of $\mathbf{A}$ to be three is:

$$
c_1 + c_2 + c_3 \neq 1.
$$

### (2)

#### Problem Setup

We are given four planes in $\mathbb{R}^3$:

$$
\Pi_i = \{\mathbf{x} \in \mathbb{R}^3 \mid \mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i = 0\}, \quad i = 1, 2, 3, 4,
$$

where $\mathbf{n}_1, \mathbf{n}_2, \mathbf{n}_3$, and $\mathbf{n}_4$ are unit vectors, and $d_1, d_2, d_3,$ and $d_4$ are real numbers. The center of a sphere tangent to all four planes is represented as $\mathbf{A}^{-1} \mathbf{u}$, where $\mathbf{A}$ is a 3x3 matrix, and $\mathbf{u} \in \mathbb{R}^3$ is what we need to find.

#### Conditions

For the sphere to be tangent to each plane, the distance from the center of the sphere $\mathbf{A}^{-1} \mathbf{u}$ to each plane must satisfy:

$$
\mathbf{n}_i^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} = d_i + r, \quad i = 1, 2, 3, 4.
$$

We subtract the equations pairwise to eliminate $r$, yielding:

$$
\mathbf{n}_2^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} - \mathbf{n}_1^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} = d_2 - d_1,
$$

$$
\mathbf{n}_3^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} - \mathbf{n}_2^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} = d_3 - d_2,
$$

$$
\mathbf{n}_4^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} - \mathbf{n}_3^\mathrm{T} \mathbf{A}^{-1} \mathbf{u} = d_4 - d_3.
$$

These can be rewritten as:

$$
(\mathbf{n}_2^\mathrm{T} - \mathbf{n}_1^\mathrm{T}) \mathbf{A}^{-1} \mathbf{u} = d_2 - d_1,
$$

$$
(\mathbf{n}_3^\mathrm{T} - \mathbf{n}_2^\mathrm{T}) \mathbf{A}^{-1} \mathbf{u} = d_3 - d_2,
$$

$$
(\mathbf{n}_4^\mathrm{T} - \mathbf{n}_3^\mathrm{T}) \mathbf{A}^{-1} \mathbf{u} = d_4 - d_3.
$$

#### Matrix Representation

The matrix $\mathbf{A}$ is defined by the differences between the normals:

$$
\mathbf{A} = \begin{pmatrix}
\mathbf{n}_1^\mathrm{T} - \mathbf{n}_2^\mathrm{T} \\
\mathbf{n}_2^\mathrm{T} - \mathbf{n}_3^\mathrm{T} \\
\mathbf{n}_3^\mathrm{T} - \mathbf{n}_4^\mathrm{T}
\end{pmatrix}.
$$

Thus, we can write the system of equations in matrix form as:

$$
\mathbf{A} \mathbf{A}^{-1} \mathbf{u} = \begin{pmatrix}
d_2 - d_1 \\
d_3 - d_2 \\
d_4 - d_3
\end{pmatrix}.
$$

Simplifying, we find:

$$
\mathbf{u} = \begin{pmatrix}
d_2 - d_1 \\
d_3 - d_2 \\
d_4 - d_3
\end{pmatrix}.
$$

### (3)

The matrix $\mathbf{B}$ is defined as:

$$
\mathbf{B} = \sum_{i=1}^{4} \mathbf{n}_i \mathbf{n}_i^\mathrm{T}.
$$

First, we show that $\mathbf{B}$ is symmetric. Since each term $\mathbf{n}_i \mathbf{n}_i^\mathrm{T}$ is symmetric (as the outer product of a vector with itself is symmetric), their sum $\mathbf{B}$ is also symmetric.

Next, to prove that $\mathbf{B}$ is positive definite, we need to show that for any non-zero vector $\mathbf{x} \in \mathbb{R}^3$, the quadratic form $\mathbf{x}^\mathrm{T} \mathbf{B} \mathbf{x} > 0$.

$$
\mathbf{x}^\mathrm{T} \mathbf{B} \mathbf{x} = \mathbf{x}^\mathrm{T} \left( \sum_{i=1}^{4} \mathbf{n}_i \mathbf{n}_i^\mathrm{T} \right) \mathbf{x} = \sum_{i=1}^{4} (\mathbf{n}_i^\mathrm{T} \mathbf{x})^2.
$$

Since $\mathbf{n}_i$ are unit vectors and linearly independent, the sum $\sum_{i=1}^{4} (\mathbf{n}_i^\mathrm{T} \mathbf{x})^2$ is strictly positive for any non-zero $\mathbf{x}$, proving that $\mathbf{B}$ is positive definite.

### (4)

The sum of squared distances from a point $\mathbf{P}$ to the four planes is minimized when $\mathbf{P}$ is the point of orthogonal projection of the origin onto these planes. The squared distance from a point $\mathbf{P}$ with position vector $\mathbf{x}$ to the plane $\Pi_i$ is given by:

$$
\text{Distance}^2 = \left(\frac{\mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i}{\|\mathbf{n}_i\|}\right)^2.
$$

Since $\mathbf{n}_i$ are unit vectors ($\|\mathbf{n}_i\| = 1$), this simplifies to:

$$
\text{Distance}^2 = (\mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i)^2.
$$

The sum of squared distances to all four planes is:

$$
S(\mathbf{x}) = \sum_{i=1}^{4} (\mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i)^2.
$$

To minimize $S(\mathbf{x})$, we take the gradient with respect to $\mathbf{x}$ and set it equal to zero:

$$
\nabla S(\mathbf{x}) = 2 \sum_{i=1}^{4} (\mathbf{n}_i^\mathrm{T} \mathbf{x} - d_i) \mathbf{n}_i = 0.
$$

This equation can be rearranged into the form:

$$
\left(\sum_{i=1}^{4} \mathbf{n}_i \mathbf{n}_i^\mathrm{T}\right) \mathbf{x} = \sum_{i=1}^{4} d_i \mathbf{n}_i.
$$

The matrix $\mathbf{B}$ is defined as:

$$
\mathbf{B} = \sum_{i=1}^{4} \mathbf{n}_i \mathbf{n}_i^\mathrm{T},
$$

which is a $3 \times 3$ matrix. Therefore, the position vector $\mathbf{x}$ that minimizes the sum of squared distances can be expressed as:

$$
\mathbf{x} = \mathbf{B}^{-1} \sum_{i=1}^{4} d_i \mathbf{n}_i.
$$

Given that $\mathbf{P}$ is the point minimizing the sum of squared distances, its position vector is $\mathbf{B}^{-1} \mathbf{v}$, where $\mathbf{v}$ is defined by:

$$
\mathbf{v} = \sum_{i=1}^{4} d_i \mathbf{n}_i.
$$

### (5)
#### (a)
##### Orthogonal Projection onto a Line

Given a vector $\mathbf{y} \in \mathbb{R}^3$, the orthogonal projection of $\mathbf{y}$ onto a line in the direction of a unit vector $\mathbf{n}_i$ is calculated as follows:

1. **Dot Product Calculation**:
   - The scalar projection of $\mathbf{y}$ onto $\mathbf{n}_i$ is given by the dot product $\mathbf{n}_i^\mathrm{T} \mathbf{y}$.

2. **Vector Projection**:
   - The vector projection of $\mathbf{y}$ onto the line parallel to $\mathbf{n}_i$ is then:

$$
\text{Proj}_{\mathbf{n}_i}(\mathbf{y}) = (\mathbf{n}_i^\mathrm{T} \mathbf{y}) \mathbf{n}_i.
$$

3. **Matrix Representation**:
   - This vector projection can be represented in matrix form. Specifically, if we want to express this operation as a matrix multiplication where $\mathbf{W}_i \mathbf{y}$ gives the projection, then the matrix $\mathbf{W}_i$ must satisfy:

$$
\mathbf{W}_i \mathbf{y} = (\mathbf{n}_i^\mathrm{T} \mathbf{y}) \mathbf{n}_i.
$$

   - To express this operation using a matrix, note that:

$$
\mathbf{W}_i = \mathbf{n}_i \mathbf{n}_i^\mathrm{T}.
$$

   - This is because when $\mathbf{W}_i$ acts on a vector $\mathbf{y}$, it first computes the dot product $\mathbf{n}_i^\mathrm{T} \mathbf{y}$ (which is a scalar), and then multiplies this scalar by $\mathbf{n}_i$ to produce the vector projection.

#### (b)
We calculate:

$$
\mathbf{W}_i^\mathrm{T} \mathbf{W}_i = (\mathbf{n}_i \mathbf{n}_i^\mathrm{T})^\mathrm{T} (\mathbf{n}_i \mathbf{n}_i^\mathrm{T}) = \mathbf{n}_i \mathbf{n}_i^\mathrm{T} \mathbf{n}_i \mathbf{n}_i^\mathrm{T}.
$$

Since $\mathbf{n}_i^\mathrm{T} \mathbf{n}_i = 1$, we have:

$$
\mathbf{W}_i^\mathrm{T} \mathbf{W}_i = \mathbf{n}_i \mathbf{n}_i^\mathrm{T} = \mathbf{W}_i.
$$

#### ($c$)

We need to find the point $\mathbf{S} \in \Sigma$ that minimizes the sum of squared distances to three orthogonal lines.

The projection of a point $\mathbf{y}$ onto the line $l_i$ parallel to $\mathbf{n}_i$ is given by:

$$
\mathbf{R}_i = \mathbf{y} - \mathbf{W}_i(\mathbf{y} - \mathbf{x}_i),
$$

where $\mathbf{W}_i = \mathbf{n}_i \mathbf{n}_i^\mathrm{T}$ is the orthogonal projection matrix onto $l_i$.

##### Sum of Squared Distances

The distance from $\mathbf{y}$ to the line $l_i$ is:

$$
\|\mathbf{y} - \mathbf{R}_i\| = \|\mathbf{y} - (\mathbf{y} - \mathbf{W}_i(\mathbf{y} - \mathbf{x}_i))\| = \|\mathbf{W}_i(\mathbf{y} - \mathbf{x}_i)\|.
$$

The sum of squared distances from $\mathbf{y}$ to the three lines is:

$$
\sum_{i=1}^3 \|\mathbf{W}_i(\mathbf{y} - \mathbf{x}_i)\|^2.
$$

##### Objective Function for Minimization

The objective is to minimize the sum:

$$
S(\mathbf{y}) = \sum_{i=1}^3 (\mathbf{y} - \mathbf{x}_i)^\mathrm{T} \mathbf{W}_i^\mathrm{T} \mathbf{W}_i (\mathbf{y} - \mathbf{x}_i).
$$

Since $\mathbf{W}_i^\mathrm{T} \mathbf{W}_i = \mathbf{W}_i$ (as derived in part (b)), this simplifies to:

$$
S(\mathbf{y}) = \sum_{i=1}^3 (\mathbf{y} - \mathbf{x}_i)^\mathrm{T} \mathbf{W}_i (\mathbf{y} - \mathbf{x}_i).
$$

##### Setting Up the Minimization Problem

Expanding the quadratic form:

$$
S(\mathbf{y}) = \sum_{i=1}^3 \left[\mathbf{y}^\mathrm{T} \mathbf{W}_i \mathbf{y} - 2 \mathbf{y}^\mathrm{T} \mathbf{W}_i \mathbf{x}_i + \mathbf{x}_i^\mathrm{T} \mathbf{W}_i \mathbf{x}_i \right].
$$

To minimize $S(\mathbf{y})$, we take the derivative with respect to $\mathbf{y}$ and set it to zero:

$$
\nabla S(\mathbf{y}) = 2 \sum_{i=1}^3 \left[\mathbf{W}_i \mathbf{y} - \mathbf{W}_i \mathbf{x}_i \right] = 0.
$$

Simplifying:

$$
\sum_{i=1}^3 \mathbf{W}_i \mathbf{y} = \sum_{i=1}^3 \mathbf{W}_i \mathbf{x}_i.
$$

##### Solving for $\mathbf{y}$

Since $\mathbf{n}_1$, $\mathbf{n}_2$, and $\mathbf{n}_3$ are orthogonal, their corresponding $\mathbf{W}_i$ matrices satisfy:

$$
\sum_{i=1}^3 \mathbf{W}_i = \mathbf{I}.
$$

Thus:

$$
\mathbf{y} = \sum_{i=1}^3 \mathbf{W}_i \mathbf{x}_i.
$$

This $\mathbf{y}$ minimizes the sum of squared distances to the three lines, and we denote this $\mathbf{y}$ as $\mathbf{w}$:

$$
\mathbf{w} = \sum_{i=1}^3 \mathbf{W}_i \mathbf{x}_i.
$$

## **Knowledge**

矩阵秩 正定矩阵 最小二乘法 正交投影

### 难点思路

题目较难的部分是处理涉及到多平面的几何关系和正定矩阵的性质证明。特别是第 4 问中的最小二乘问题，需要对平面到点的距离公式有深刻理解。

### 解题技巧和信息

在解答此类问题时，明确矩阵的几何意义和代数性质非常关键。利用向量投影和最小二乘法的基本原理，可以有效地处理平面、直线和点之间的距离问题。

### 重点词汇

- Rank of a matrix: 矩阵的秩
- Positive definite matrix: 正定矩阵
- Orthogonal projection: 正交投影
- Least squares: 最小二乘法

### 参考资料

1. Gilbert Strang, *Linear Algebra and Its Applications*, 4th Edition, Section 6.5.
2. David C. Lay, *Linear Algebra and Its Applications*, 5th Edition, Chapter 7.
