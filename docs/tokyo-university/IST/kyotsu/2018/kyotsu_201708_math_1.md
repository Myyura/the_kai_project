---
sidebar_label: "2017年8月実施 数学 第1問"
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
  - Mathematics.Linear-Algebra.Moore-Penrose-Pseudoinverse
---
# 東京大学 情報理工学研究科 2017年8月実施 数学 第1問

## **Author**
Zero, [etsurin](https://zhuanlan.zhihu.com/p/561992447), 祭音Myyura

## **Description**
次の連立一次方程式を解く問題を考える．

$$
Ax=b
$$

ここで, $A\in R^{m\times n},b\in R^m$ は与えられた定数の行列とべクトルであり, $x\in R^n$ は未知ベクトルである．以下の問いに答えよ．

(1)、
$\bar{A}=(A|b)$ のように，行列 $A$ の最後の列の後ろに1列追加した $m\times (n+1)$ 行列を作る．例えば,
$A=\left (\begin{array}{cccc}
1&0&-1\\
1&1&0\\
0&1&1\\
\end{array}\right),
b=\left (\begin{array}{cccc}
2\\
4\\
2\\
\end{array}\right)$
の場合には,
$\bar{A}=\left (\begin{array}{cccc}
1&0&-1&2\\
1&1&0&4\\
0&1&1&2\\
\end{array}\right)$となる．この例の $\bar{A}$ の第 $i$ 列ベクトルを $a_{i}(i=1,2,3,4)$ とする. 

(i)、$a_{1},a_{2},a_{3}$ のうち線形独立なベクトルの最大個数を求めよ．

(ii)、$a_{4}$ が $a_{1},a_{2},a_{3}$ の線形和で表されることを, $a_{4}=x_{1}a_{1}+x_{2}a_{2}+a_{3}$ となるスカラー $x_{1},x_{2}$ を求めることで示せ．

(iii)、$a_{1},a_{2},a_{3},a_{4}$ のうち線形独立なベクトルの最大個数を求めよ．

(2)、任意の $m,n,A,b$ 対して, $\text{rank}(\bar{A})=\text{rank}(A)$ のとき連立一次方程式の解が存在することを示せ．

(3)、$\text{rank}(\bar{A})>\text{rank}(A)$ ならば解は存在しない.$m>n$, $\text{rank}(A)=n$, $\text{rank}(\bar{A})>\text{rank}(A)$ のとき, 連立一次方程式の右辺と左辺と差のノルムの２乗 $\Vert b-Ax\Vert ^2$ を最小にする $x$ を求めよ．

(4)、$m<n,\text{rank}(A)=m$ のとき，どのような $b$ に対しても連立一次方程式を満たす解が複数存在する．解のうちで $\Vert x \Vert ^2$ を最小にする $x$ を，連立一次方程式を制約条件として，ラグランジュ乗数法を用いて求めよ．

(5)、任意 $m,n,A$ に対して，以下の4つの式を満たす $P\in R^{n\times m}$ が唯一に決まることを示せ．

$$
\begin{aligned}
APA=A \\
PAP=P \\
(AP)^T=AP \\
(PA)^T=PA
\end{aligned}
$$

(6)、(3)て求めた $x$ と(4)で求めた $x$ が，いずれも $x=Pb$ の形で表せることを示せ．

### 题目描述

考虑线性方程组

$$
Ax=b,
$$

其中 $A\in\mathbb R^{m\times n}$、$b\in\mathbb R^m$ 已知，
$x\in\mathbb R^n$ 未知。把 $b$ 作为末列接在 $A$ 后得到增广矩阵
$\bar A=(A\mid b)$。回答下列问题。

（1）对

$$
A=\begin{pmatrix}1&0&-1\\1&1&0\\0&1&1\end{pmatrix},
\qquad
b=\begin{pmatrix}2\\4\\2\end{pmatrix},
$$

记 $\bar A$ 的列为 $a_1,a_2,a_3,a_4$。

- （i）求 $a_1,a_2,a_3$ 中线性无关向量的最大个数。
- （ii）求标量 $x_1,x_2$，使
  $a_4=x_1a_1+x_2a_2+a_3$，从而证明 $a_4$ 是前三列的线性组合。
- （iii）求四个列向量中线性无关向量的最大个数。

（2）对任意 $m,n,A,b$，证明若
$\operatorname{rank}(\bar A)=\operatorname{rank}(A)$，则方程组有解。

（3）若
$m>n$、
$\operatorname{rank}(A)=n$ 且
$\operatorname{rank}(\bar A)>\operatorname{rank}(A)$，方程组无精确解。求使
$\|b-Ax\|^2$ 最小的 $x$。

（4）若 $m<n$ 且 $\operatorname{rank}(A)=m$，则对任意 $b$ 都有多个解。
以 $Ax=b$ 为约束，用拉格朗日乘子法求其中使 $\|x\|^2$ 最小的解。

（5）证明对任意 $m,n,A$，满足

$$
APA=A,\quad PAP=P,\quad
(AP)^{\mathsf T}=AP,\quad
(PA)^{\mathsf T}=PA
$$

的 $P\in\mathbb R^{n\times m}$ 唯一确定。

（6）证明第（3）、（4）问所得解均可写成 $x=Pb$。

## **Kai**
### (1)
#### (i)

$$
\left (\begin{array}{cccc}
1&0&-1\\
1&1&0\\
0&1&1\\
\end{array}\right) \rightarrow
\left (\begin{array}{cccc}
1&0&-1\\
0&1&1\\
0&1&1\\
\end{array}\right) \rightarrow
\left (\begin{array}{cccc}
1&0&-1\\
0&1&1\\
0&0&0\\
\end{array}\right)
$$

There are 2 linearly independent vectors in $a_{1},a_{2},a_{3}$

#### (ii)

$$
a_{4}=3a_{1}+a_{2}+a_{3}
$$

$$
x_{1}=3,x_{2}=1
$$

#### (iii)

$$
a_4 = 2a_1 + 2a_2, \ \text{rank}(\overline{A}) = 2
$$

### (2)
Assuming that $\text{rank}(\overline{A}) = \text{rank}(A)=r$ and there is no solution with $Ax=b$.

Hence the vector $b$, i.e. $a_{n+1}$, cannot be represented as a linear combination of $(a_{1},a_{2},\ldots,a_{n})$.

Hence,

$$
\text{rank}(\overline{A}) =r+1> \text{rank}(A)
$$

which is contradictory to the fact that $\text{rank}(\bar{A}) = \text{rank}(A)$.

Therefore, for any $m,n,A,b$, when $\text{rank}(\overline{A}) = \text{rank}(A)$ the equation $Ax=b$ has a solution.

### (3)

$$
\begin{aligned}
\mathcal{L} &= \| Ax - b \|^2 = (b-Ax)^T(b-Ax) \\
&= b^Tb - x^TA^Tb - b^TAx + x^T A^T A x
\end{aligned}
$$

$$
\begin{aligned}
  \frac{\partial \mathcal{L}}{\partial x} &= -A^Tb - A^Tb + (A^TA + (A^TA)^T)x \\
  &= 2A^T Ax - 2A^Tb \\
  &= 0
\end{aligned}
$$

Therefore,

$$
x=(A^TA)^{-1}A^Tb.
$$

Since $A$ has full column rank, $A^TA$ is positive definite. The objective has positive-definite Hessian $2A^TA$, so this stationary point is the unique global minimum.

### (4)

$$
\mathcal{L}(x,\lambda)=x^Tx-\lambda^T(Ax-b)
$$

$$
\begin{aligned}
\frac{\partial L(x,\lambda)}{\partial x} &= 2x-A^T\lambda = 0 \\
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial L(x,\lambda)}{\partial \lambda} &= -(Ax-b) =0
\end{aligned}
$$

$$
\therefore x = \frac{A^T \lambda}{2} \qquad AA^T \lambda = 2b
$$

Hence

$$
\lambda = 2(AA^T)^{-1}b
$$

Finally

$$
x=A^T(AA^T)^{-1}b.
$$

The matrix $AA^T$ is positive definite because $A$ has full row rank. Every other solution is $x+z$ with $Az=0$. As $x$ lies in the range of $A^T$, $x^Tz=0$, and $\|x+z\|^2=\|x\|^2+\|z\|^2$. Thus this is the unique minimum-norm solution.

### (5)
Let $A=U\Sigma V^T$ be a singular value decomposition and define

$$
P=V\Sigma^+U^T,
$$

where $\Sigma^+\in\mathbb R^{n\times m}$ is the transposed rectangular diagonal matrix with every nonzero singular value replaced by its reciprocal and all other entries zero. Direct substitution gives all four equations, so such a matrix exists.

For uniqueness, let both $P$ and $Q$ satisfy the equations. The matrices $AP$ and $AQ$ are symmetric idempotents, and

$$
\operatorname{range}(AP)=\operatorname{range}(AQ)=\operatorname{range}(A).
$$

Thus they are the same orthogonal projector, so $AP=AQ$. Similarly, $PA$ and $QA$ are symmetric idempotents with

$$
\ker(PA)=\ker(QA)=\ker(A),
$$

so $PA=QA$. Hence

$$
P=PAP=P(AQ)=(PA)Q=(QA)Q=QAQ=Q.
$$

Therefore, $P$ is unique.

### (6)
For (3), $\text{rank}(A)=n$ and we have $x=(A^TA)^{-1}A^Tb$, hence

$$
P=(A^TA)^{-1}A^T
$$

which satisfies the four equations in (5).

For (4), $\text{rank}(A)=m$ and we have $x=A^T(AA^T)^{-1}b$, hence

$$
P=A^T(AA^T)^{-1}
$$

which also satisfies the four equations in (5).
