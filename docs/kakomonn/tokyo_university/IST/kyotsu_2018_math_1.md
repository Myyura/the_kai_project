---
comments: false
description: 東京大学 大学院 情報理工学研究科 2018年度 数学 第1問
keywords: Tokyo-University, 2018
---

## **Source**
東京大学 大学院 情報理工学研究科 2018年度 数学 第1問

## **Description**
次の連立一次方程式を解く問題を考える．

$$
A_{x}=b
$$

ここで,$A\in R^{m\times n},b\in R^m$は与えられた定数の行列とべクトルであり,$x\in R^n$は未知ベクトルである．以下の問いに答えよ．

(1)、
$\bar{A}=(A|b)$のように，行列$A$の最後の列の後ろに1列追加した$m\times (n+1)$行列を作る．例えば,
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
\end{array}\right)$となる．この例の$\bar{A}$の第$i$列ベクトルを$a_{i}(i=1,2,3,4)$とする. 

(i)、$a_{1},a_{2},a_{3}$のうち線形独立なベクトルの最大個数を求めよ．

(ii)、$a_{4}$が$a_{1},a_{2},a_{3}$の線形和で表されることを, $a_{4}=x_{1}a_{1}+x_{2}a_{2}+a_{3}$となるスカラー$x_{1},x_{2}$を求めることで示せ．

(iii)、$a_{1},a_{2},a_{3},a_{4}$のうち線形独立なベクトルの最大個数を求めよ．

(2)、任意の$m,n,A,b$対して, $\text{rank}(\bar{A})=\text{rank}(A)$のとき連立一次方程式の解が存在することを示せ．

(3)、$\text{rank}(\bar{A})>\text{rank}(A)$ならば解は存在しない.$m>n$, $\text{rank}(\bar{A})=n$, $\text{rank}(\bar{A})>\text{rank}(A)$のとき, 連立一次方程式の右辺と左辺と差のノルムの２乗$\Vert b-A_{x}\Vert ^2$を最小にする$x$を求めよ．

(4)、$m<n,\text{rank}(A)=m$のとき，どのような$b$に対しても連立一次方程式を満たす解が複数存在する．解のうちで$\Vert x \Vert ^2$を最小にする$x$を，連立一次方程式を制約条件として，ラグランジュ乗数法を用いて求めよ．

(5)、任意$m,n,A$に対して，以下の4つの式を満たす$P\in R^{n\times m}$が唯一に決まることを示せ．

$$
\begin{aligned}
APA=A \\
PAP=P \\
(AP)^T=AP \\
(PA)^T=PA
\end{aligned}
$$

(6)、(3)て求めた$x$と(4)で求めた$x$が，いずれも$x=Pb$の形で表せることを示せ．

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
Note that $a_{4}=3a_{1}+a_{2}+a_{3}$

Therefore, $x_{1}=3,x_{2}=1$

#### (iii)
Note that $a_3 = -a_1 + a_2$ and $a_4 = 2a_1 + 2a_2$.

Hence there are 2 linealy independent vectors in $a_1, a_2, a_3, a_4$

### (2)
Assuming that $\text{rank}(\bar{A}) = \text{rank}(A)=r$ and there is no solution with $A_{x}=b$.

Hence the vector b or $a_{m+1}$ cannot be represented as the linear combination of $[a_{1},a_{2},...,a_{m}]$

Hence,

$$
\text{rank}(\bar{A}) =r+1> \text{rank}(A)
$$

which is contradictory to the fact that $\text{rank}(\bar{A}) = \text{rank}(A)$.

Therefore, for any $m,n,A,b$, when $\text{rank}(\bar{A}) = \text{rank}(A)$ the equation $A_{x}=b$ has nonzero solution.

### (3)

$$
\frac{d(\Vert b-A_{x}\Vert)^2}{dx}=
\frac{d((b-A_{x})^T(b-A_{x}))}{dx}=
2A^TAx-2A^Tb=0
$$

Therefore,

$$
x=(A^TA)^{-1}A^Tb
$$

### (4)
The Lagrangian function is

$$
L(x,\lambda)=x^Tx-\lambda^T(A_{x}-b)
$$

find its extreme points

$$
\begin{aligned}
\frac{\partial}{\partial_{x}}L(x,\lambda) &= x-A^T\lambda = 0 \\
\therefore x &= A^T\lambda
\end{aligned}
$$

then

$$
A_{x}=AA^T\lambda
$$

And

$$
\begin{aligned}
\frac{\partial}{\partial \lambda}L(x,\lambda) &= Ax-b =0 \\
A_{x} &= b
\end{aligned}
$$

Hence

$$
\begin{aligned}
b &= AA^T\lambda \\
\lambda &= (AA^T)^{-1}b
\end{aligned}
$$

Finally

$$
x=A^T(AA^T)^{-1}b
$$

### (5)
Assume that there are two different $P, Q \in R^{n\times m}$ satisfy the conditions, then we have

$$
QAP=QAPAP=(QA)^T(PA)^TP=(PAQA)^TP=(PA)^TP=PAP=P
$$

Hence $Q=P$, a contradiction to the assumption that $P$ and $Q$ are different.

Therefore, $P$ is unique.

### (6)
Question (3), $\text{rank}(A)=n$ and we have $x=(A^TA)^{-1}A^Tb$, hence

$$
P=(A^TA)^{-1}A^T
$$

Question(4), $\text{rank}(A)=m$ and we have $x=A^T(AA^T)^{-1}b$, hence

$$
P=A^T(AA^T)^{-1}
$$
