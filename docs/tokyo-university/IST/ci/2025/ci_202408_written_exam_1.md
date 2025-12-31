---
sidebar_label: '2024年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Markov-Chain
  - Linear-Algebra
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第1問

## **Author**
祭音Myyura (with the help of an anonymous contributor), [itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Suppose that there are $N$ web pages. A user staying at a web page at time $t$ ($t \ge 0$) will move to one of the linked pages at time $t+1$ with equal probability. If there are no linked pages, the user will stay at the same page as time $t$. Let $p_n^{(t)}$ ($1 \le n \le N$) denote the probability of the user staying at the $n$-th page at time $t$, and $\boldsymbol{p}^{(t)} = (p_1^{(t)} \ p_2^{(t)} \dots p_N^{(t)})^\mathrm{T}$ denote the vector that summarizes them.

First, let us consider the case of $N = 3$ shown in Table 1. When there are three web pages shown in Table 1, the state transition diagram that represents a user's state is depicted as a graph in Figure 1. Each node in the graph shown in Figure 1 corresponds one-to-one to a page in Table 1, and an edge represents a transition between the pages from time $t$ to time $t+1$. The value appended to an edge shows the probability of the transition occurring. Note that when there are no linked pages and a user keeps staying at the same page, it is interpreted as a transition to the same page as time $t$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202408_1_p1.png" height="250" alt=""/>
</figure>

Answer the following questions.

(1) Given $\boldsymbol{p}^{(0)} = (1 \ 0 \ 0)^\mathrm{T}$, find $\boldsymbol{p}^{(1)}$ and $\boldsymbol{p}^{(2)}$.

(2) Represent $\boldsymbol{p}_1^{(t)}$ and $\boldsymbol{p}_2^{(t)}$ using $t$. $\boldsymbol{p}^{(0)}$ is the same as in Question (1).

(3) Find $\boldsymbol{p}^{(t)}$ when $t \to \infty$. $\boldsymbol{p}^{(0)}$ is the same as in Question (1).

Next, we introduce an operation called "jump" that occurs during a move between pages from time $t$ to time $t + 1$ with a constant probability $\alpha > 0$. When a jump occurs, the user moves to one of $N$ pages (including the current page) with equal probability. When a jump does not occur, the user moves to one of the linked pages with equal probability in the same manner as before (if there are no linked pages, the user will keep staying at the current page).

(4) We introduce the jump operation into the case in Table 1. Suppose that $\alpha = 1/3$. Draw a state transition diagram for this case. Also, find the transition probability matrix $A$ that satisfies the following equation

$$
\boldsymbol{p}^{(t+1)} = A\boldsymbol{p}^{(t)}.
$$

(5) When $\boldsymbol{p}^{(t+1)} = \boldsymbol{p}^{(t)} (= \boldsymbol{p})$, this $\boldsymbol{p}$ is called a stationary distribution. Find the stationary distribution in the case of Question (4).

Finally, we consider the transition probability matrix $R$ and stationary distribution of a general case where the jump operation is introduced. For answering the following questions, you can use the Perron–Frobenius theorem described below.

> **Perron–Frobenius theorem for positive matrices**
>
> A positive square matrix has a positive eigenvalue $k$ that satisfies the following. Here, a positive matrix is a matrix whose elements are all positive real numbers.
> 
> (i) For the absolute value of an arbitrary eigenvalue $\lambda$ other than $k$, $|\lambda| < k$ holds.
> 
> (ii) The eigenvalue $k$ is a simple root (i.e., has the multiplicity of 1), and there exists a positive eigenvector that belongs to the eigenvalue $k$. Here, a positive vector is a vector whose elements are all positive real numbers.
> 
> (iii) There are no positive eigenvectors that belong to eigenvalues other than $k$.

(6) Show that $R^\mathrm{T}$, the transpose of $R$, has 1 as an eigenvalue, and that this is the eigenvalue with the largest absolute value.

(7) Show that a stationary distribution exists uniquely. Here, you can assume the following fact as given; In general, a square matrix and its transpose have the same set of eigenvalues.

(8) Show that, by iteratively computing $\boldsymbol{p}^{(t)}$ following the equation $\boldsymbol{p}^{(t+1)} = R\boldsymbol{p}^{(t)}$, regardless of the initial probability distribution $\boldsymbol{p}^{(0)}$, $\boldsymbol{p}^{(t)}$ converges to the stationary distribution when $t \to \infty$. You can assume that $\boldsymbol{p}^{(0)}$ can be represented as a linear combination of eigenvectors, $\boldsymbol{p}^{(0)} = \sum_{i=1}^N c_i \boldsymbol{x}_i$. Here, $\boldsymbol{x}_i$ denotes the $i$-th eigenvalue of $R$ while $c_i$ is its coefficient.

## **Kai**
### (1)

$$
p^{(1)}=(0,1,0)^{T}, \ p^{(2)}=(0.5,0,0.5)^{T}
$$

### (2)
Let $M$ denote the transition matrix. Then we have

$$
M = \begin{pmatrix} 0 & 0.5 & 0 \\ 1 & 0 & 0 \\ 0 & 0.5 & 1 \end{pmatrix}
$$

and

$$
p^{(1)} = M p^{(0)}, \ p^{(2)} = M p^{(1)} = M^{2} p^{(0)}
$$

### (3)
The eigenvalues of $M$ are

$$
\det(\lambda I - M) = (\lambda - 1)(\lambda^2 - 0.5) = 0
$$

$$
\Rightarrow \lambda_1 = 1, \ \lambda_2 = \frac{\sqrt{2}}{2}, \ \lambda_3 = -\frac{\sqrt{2}}{2}
$$

and the corresponding eigenvectors are

$$
v_1 = (0,0,1)^{\top}, \ v_2 = (1-\sqrt{2}, -2+\sqrt{2}, 1)^{\top}, \ v_3=(1+\sqrt{2}, -2-\sqrt{2}, 1)^{\top}
$$

Hence we have

$$
\begin{aligned}
\lim_{t \to \infty} p^{(t)} &= \lim_{t \to \infty} M^t p^{(0)} \\
&= \lim_{t \to \infty} \{c_1 \cdot 1^t \cdot v_1 + c_2 \left(\frac{1}{\sqrt{2}}\right)^t v_2 + c_3 \left(-\frac{1}{\sqrt{2}}\right)^t v_3 \} \\
&= c_1 v_1 \\
&= (0,0,1)^{\top} \quad \text{(since $p^{t}$ is a probability distribution)}
\end{aligned}
$$

### (4)
When $\alpha = \frac{1}{3}$,

- If jump, $A = M$
- If not, Moves to any page with equal probability $\frac{1}{3}$

$$
\begin{aligned}
A &= (1-\alpha)M + \alpha \begin{bmatrix} 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \end{bmatrix} \\ &= \frac{2}{3} \begin{bmatrix} 0 & 0.5 & 0 \\ 1 & 0 & 0 \\ 0 & 0.5 & 1 \end{bmatrix} + \frac{1}{3} \begin{bmatrix} 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \\ 1/3 & 1/3 & 1/3 \end{bmatrix} \\ &= \begin{bmatrix} 0 & 3/9 & 0 \\ 6/9 & 0 & 0 \\ 0 & 3/9 & 6/9 \end{bmatrix} + \begin{bmatrix} 1/9 & 1/9 & 1/9 \\ 1/9 & 1/9 & 1/9 \\ 1/9 & 1/9 & 1/9 \end{bmatrix} \\ &= \frac{1}{9} \begin{bmatrix} 1 & 4 & 1 \\ 7 & 1 & 1 \\ 1 & 4 & 7 \end{bmatrix}
\end{aligned}
$$

### (5)
Let $p = (x, y, z)^{\top}$. Then, by solving $Ap = p$, i.e., the following equations

$$
\begin{cases}
9x = x + 4y + z \\ 9y = 7x + y + z \\ 9z = x + 4y + 7z \\ x + y + z = 1
\end{cases}
$$

we have

$$
p = \frac{1}{21} (4, 5, 12)^{\top}
$$

### (6)
Since $R$ is a transition probability matrix, we have

$$
\sum_{i} R_{ij} = 1 \quad \forall j
$$

hence

$$
R^{\top} \boldsymbol{1} = 1 \cdot \boldsymbol{1}
$$

which implies that $1$ is an eigenvalue of $R$.

Therefore, by the Perron Frobenius theorem, $1$ is the unique positive real eigenvalue with the largest absolute value as $R$ is a positive matrix.

### (7)
We prove it by contradiction.

Assume that there exists two different stationary distributions $p$ and $q$.
Then by (4) we have

$$
Rp = 1 \cdot p, \quad Rq = 1 \cdot q
$$

i.e., $p$ and $q$ are both eigenvectors corresponding to the eigenvalue $\lambda=1$.

(the Perron Frobenius theorem) Since for positive matrices, $1$ is a simple root, which means that the eigenspace for $\lambda=1$ is 1-dimensional. Hence

$$
p = cq
$$

Note that $p$ and $q$ are both probability distributions, i.e., $\sum p_i = \sum q_j = 1$. Thus $c = 1$, which is contradictory to the assumption that $p$ and $q$ are different.

Therefore the stationary distribution is unique.

### (8)
Expand the initial state $p^{(0)}$ in the eigenbasis of $R$:

$$
p^{(0)} = c_1 x_1 + \sum_{i=2}^{N} c_i x_i,
$$

where $x_1$ is the eigenvector associated with the eigenvalue $\lambda_1 = 1$, and each $x_i$ corresponds to $\lambda_i$.

Apply the matrix $R$ for $t$ steps:

$$
p^{(t)} = R^t p^{(0)} = c_1 (1)^t x_1 + \sum_{i=2}^{N} c_i (\lambda_i)^t x_i.
$$

By the Perron–Frobenius theorem, for all $i \ge 2$ we have $|\lambda_i| < 1$. Hence $\lim_{t \to \infty} (\lambda_i)^t = 0$, and therefore

$$
\lim_{t \to \infty} p^{(t)} = c_1 x_1.
$$

Now left-multiply both sides by $\boldsymbol{1}^T$ (the row vector of all ones, i.e., summing all components). Since total probability is conserved, $\boldsymbol{1}^T p^{(t)} = 1$ for all $t$. Thus,

$$
1 = \boldsymbol{1}^T (c_1 x_1) = c_1(\boldsymbol{1}^T x_1).
$$

Assuming $x_1$ is normalized so that its entries sum to $1$, we have $\boldsymbol{1}^T x_1 = 1$, which implies $c_1 = 1$. Therefore,

$$
\lim_{t \to \infty} p^{(t)} = x_1,
$$

i.e., the distribution converges to the unique stationary distribution.

