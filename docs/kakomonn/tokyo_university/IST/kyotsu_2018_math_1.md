---
comments: false
title: 東京大学 情報理工学研究科 2018年度 数学 第1問
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2018年度 数学 第1問

## **Author**
Zero, [etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
次の連立一次方程式を解く問題を考える．

$$
A_{x}=b
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

(3)、$\text{rank}(\bar{A})>\text{rank}(A)$ ならば解は存在しない.$m>n$, $\text{rank}(\bar{A})=n$, $\text{rank}(\bar{A})>\text{rank}(A)$ のとき, 連立一次方程式の右辺と左辺と差のノルムの２乗 $\Vert b-A_{x}\Vert ^2$ を最小にする $x$ を求めよ．

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
1&1&0\\
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
Assuming that $\text{rank}(\overline{A}) = \text{rank}(A)=r$ and there is no solution with $A_{x}=b$.

Hence the vector $b$ or $a_{m+1}$ cannot be represented as the linear combination of $(a_{1},a_{2},...,a_{m})$

Hence,

$$
\text{rank}(\overline{A}) =r+1> \text{rank}(A)
$$

which is contradictory to the fact that $\text{rank}(\bar{A}) = \text{rank}(A)$.

Therefore, for any $m,n,A,b$, when $\text{rank}(\overline{A}) = \text{rank}(A)$ the equation $Ax=b$ has nonzero solution.

### (3)

$$
\begin{aligned}
\mathcal{L} &= \| Ax - b \|^2 = (b-Ax^T)(b-Ax) \\
&= b^Tb - x^TA^Tb - b^TAx + x^T A^T A x
\end{aligned}
$$

$$
\begin{aligned}
  \frac{\partial \mathcal{L}}{\partial x} &= -A^Tb - A^Tb + (A^TA + (A^TA)^T) \\
  &= 2A^T Ax - 2A^Tb \\
  &= 0
\end{aligned}
$$

Therefore,

$$
x=(A^TA)^{-1}A^Tb
$$

### (4)
$$
\mathcal{L}(x,\lambda)=x^Tx-\lambda^T(Ax-b)
$$

$$
\begin{aligned}
\frac{\partial L(x,\lambda)}{\partial x} &= 2x-A^T\lambda^T = 0 \\
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial L(x,\lambda)}{\partial \lambda} &= Ax-b =0
\end{aligned}
$$

$$
\therefore x = \frac{A^T \lambda^T}{2} \qquad AA^T \lambda^T = 2b
$$

Hence

$$
\lambda^T = 2(AA^T)^{-1}b
$$

Finally

$$
x=A^T(AA^T)^{-1}b
$$

### (5)
Assume that there are two different solutions $P, Q \in R^{n\times m}$ satisfy the conditions, then we have

$$
QAP=QAPAP=(QA)^T(PA)^TP=(PAQA)^TP=(PA)^TP=PAP=P
$$

Hence $Q=P$, a contradiction to the assumption that $P$ and $Q$ are different.

Therefore, $P$ is unique.

### (6)
For (3), $\text{rank}(A)=n$ and we have $x=(A^TA)^{-1}A^Tb$, hence

$$
P=(A^TA)^{-1}A^T
$$

For (4), $\text{rank}(A)=m$ and we have $x=A^T(AA^T)^{-1}b$, hence

$$
P=A^T(AA^T)^{-1}
$$
