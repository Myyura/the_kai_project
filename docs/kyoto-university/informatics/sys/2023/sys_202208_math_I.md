---
sidebar_label: 2022年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Jacobi-Iterative-Method
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Stochastic-Matrix
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Limit
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 数学【I】

## **Author**
[机智的若叶](https://zhuanlan.zhihu.com/p/678084976), 祭音Myyura

## **Description**
### 問1
ベクトル $x$ に関する $m$ 元連立一次方程式 $A x = b$ を反復法によって解くことを考える。
そのために、 $m$ 次正方行列 $A$ を $P - Q$ に分解し、方程式を $P x = Q x + b$ のように書き換え、適当な初期値 $x_0$ を与えて、 $x_{n+1} = Q x_n + b$ 、つまり、 $x_{n+1} = P^{-1} (Q x_n + b)$ を繰り返し計算する。
特に、行列 $A$ の対角要素からなる対角行列を $P$ とする反復法をヤコビ法と呼ぶ。以下の設問に答えよ。

ただし、 $m$ 次正方行列 $Z$ の逆行列を $Z^{-1}$ 、転置を $Z^T$ 、スペクトル半径を $\rho (Z)$ と表す。
$\rho (Z)$ は $Z$ の固有値 $\lambda_i$ $(i = 1, \ldots, m)$ の絶対値の最大値 ( $\max_i |\lambda_i|$ ) に等しい。

(i) $P^{-1}$ が存在するとき、 $P x = Q x + b$ と $x_{n+1} = Q x_n + b$ から、

$$
  x - x_{n+1} = P^{-1} Q (x - x_n)
$$

となる。
$P^{-1} Q$ の固有値がすべて異なるものとして、 $n \to \infty$ のとき、任意の $x_0$ に対して $x_n$ が方程式の解に収束するために $\rho (P^{-1} Q)$ が満たすべき必要十分条件をその理由とともに答えよ。

以下の設問では、次の方程式をヤコビ法を用いて解く場合について考える。

$$
A x = b, \quad A = \begin{bmatrix} 12 & -4 & 3 \\ -3 & 4 & 0 \\ 3 & -2 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 5 \\ 1 \\ -3 \end{bmatrix} \tag{1}
$$

(ii) $P$ , $Q$ , $P^{-1}$ を求めよ。

(iii) $P^{-1} Q$ の固有値をすべて求めよ。さらに、 $P^{-1} Q$ のスペクトル半径を求めよ。

(iv) $x_0 = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$ として、 $x_1$ を求めよ。

(v) $A^{-1}$ を求めてから、方程式 (1) の解を求めよ。

### 問2
行列 $A$ は $n \times n$ の実対称行列で、その要素を $a_{ij} (i, j = 1, \ldots, n)$ と書く。さらに、すべての要素が非負であり、

$$
\sum_{j=1}^n a_{ij} = 1, \quad i = 1, \ldots, n
$$

を満たすと仮定する。以下の設問に答えよ。ただし、 $u$ はすべての要素が1である $n$ 次元ベクトルとする。

(i) $A u = u$ を示せ。

(ii) 任意の零ベクトルでない $n$ 次元実ベクトル $x$ に対して、 $x$ の要素の中で絶対値が最大のものを $x_m$ としたとき、任意の $i \in \{1, \ldots, n\}$ において

$$
\left| \sum_{j=1}^n a_{ij} x_j \right| \leq |x_m|
$$

が成り立つことを示せ。

(iii) $A$ の任意の固有値 $\lambda$ に対して、 $|\lambda| \leq 1$ が成り立つことを示せ。

(iv) $n = 2$ とし、 $A$ は次の形

$$
  A = \begin{bmatrix}
  1 - \alpha & \alpha \\
  \alpha & 1 - \alpha
  \end{bmatrix}, \quad 0 < \alpha \leq 1
$$

を取るとする。
設問 (i) から、 $A$ は固有値 $\lambda_1 = 1$ と対応する固有ベクトル $u = u / \sqrt{2}$ を持つ。
もう一方の固有値 $\lambda_2$ と対応する固有ベクトル $w$ を求めよ。ただし $w$ は正規化せよ。

(v) 設問 (iv) の $A$ に対し、その自然数乗 $A^k$ を考える。極限

$$
B = \lim_{k \to \infty} A^k
$$

が存在する $\alpha$ の範囲を答えよ。
また、極限が存在する場合には、その極限 $B$ を求めよ。

### 题目描述

回答以下两题。

1. 考虑用迭代法求解关于 $m$ 维向量 $\boldsymbol{x}$ 的线性方程组

$$
A\boldsymbol{x}=\boldsymbol{b}.
$$

把 $m$ 阶方阵分解为 $A=P-Q$，从而将方程改写为

$$
P\boldsymbol{x}=Q\boldsymbol{x}+\boldsymbol{b}.
$$

给定初值 $\boldsymbol{x}_0$ 后，题面先把迭代写为
$\boldsymbol{x}_{k+1}=Q\boldsymbol{x}_k+\boldsymbol{b}$，并随即说明实际反复计算的是

$$
\boldsymbol{x}_{k+1}
=P^{-1}(Q\boldsymbol{x}_k+\boldsymbol{b}).
$$

当 $P$ 取为由 $A$ 的对角元组成的对角矩阵时，该迭代称为 Jacobi 法。以下以
$Z^{-1}$、$Z^{\mathrm T}$、$\rho(Z)$ 分别表示 $m$ 阶方阵 $Z$ 的逆、转置和谱半径；若
$\lambda_i$（$i=1,\ldots,m$）是 $Z$ 的特征值，则

$$
\rho(Z)=\max_i|\lambda_i|.
$$

   1. 假设 $P^{-1}$ 存在。由定点方程和迭代式可得误差关系

$$
\boldsymbol{x}-\boldsymbol{x}_{k+1}
=P^{-1}Q(\boldsymbol{x}-\boldsymbol{x}_k).
$$

再假设 $P^{-1}Q$ 的特征值两两不同。给出并说明
$\rho(P^{-1}Q)$ 所须满足的充要条件，使得当 $k\to\infty$ 时，对任意初值
$\boldsymbol{x}_0$，序列 $\boldsymbol{x}_k$ 都收敛到方程组的解。

以下各问针对用 Jacobi 法求解

$$
A\boldsymbol{x}=\boldsymbol{b},\qquad
A=
\begin{bmatrix}
12&-4&3\\
-3&4&0\\
3&-2&4
\end{bmatrix},
\qquad
\boldsymbol{b}=
\begin{bmatrix}
5\\
1\\
-3
\end{bmatrix}.
\tag{1}
$$

   2. 求 $P$、$Q$ 和 $P^{-1}$。
   3. 求 $P^{-1}Q$ 的全部特征值，并求其谱半径。
   4. 取

$$
\boldsymbol{x}_0=
\begin{bmatrix}
0\\0\\0
\end{bmatrix},
$$

求 $\boldsymbol{x}_1$。
   5. 先求 $A^{-1}$，再求方程组 (1) 的解。

2. 设 $A=(a_{ij})$ 是 $n\times n$ 实对称矩阵，所有元素均非负，并满足每一行的元素和为 $1$：

$$
\sum_{j=1}^n a_{ij}=1,
\qquad i=1,\ldots,n.
$$

令 $\boldsymbol{u}$ 为各分量均等于 $1$ 的 $n$ 维向量。

   1. 证明 $A\boldsymbol{u}=\boldsymbol{u}$。
   2. 对任意非零实向量
      $\boldsymbol{x}=(x_1,\ldots,x_n)^{\mathrm T}$，从其分量中选取绝对值最大的一个并记为
      $x_m$。证明对任意 $i\in\{1,\ldots,n\}$，

$$
\left|\sum_{j=1}^n a_{ij}x_j\right|
\leq|x_m|.
$$

   3. 证明 $A$ 的每个特征值 $\lambda$ 都满足
      $|\lambda|\leq1$。
   4. 令 $n=2$ 且

$$
A=
\begin{bmatrix}
1-\alpha&\alpha\\
\alpha&1-\alpha
\end{bmatrix},
\qquad
0<\alpha\leq1.
$$

由第 1 小问可知，$\lambda_1=1$ 是 $A$ 的特征值，对应的归一化特征向量为
$\boldsymbol{u}/\sqrt2$。求另一个特征值 $\lambda_2$ 及其归一化特征向量
$\boldsymbol{w}$。
   5. 对上一小问的 $A$ 考虑自然数幂 $A^k$。求使极限

$$
B=\lim_{k\to\infty}A^k
$$

存在的 $\alpha$ 的取值范围；若极限存在，再求矩阵 $B$。

## **Kai**
### 問1
#### (i)

誤差 $e_n=x-x_n$ は $e_n=(P^{-1}Q)^ne_0$ を満たす。固有値がすべて異なるので $P^{-1}Q$ は対角化可能であり、任意の $e_0$ に対して $e_n\to0$ となる必要十分条件は

$$
\boxed{\rho(P^{-1}Q)<1}
$$

である。

#### (ii)

$$
\begin{aligned}
P &= \begin{bmatrix} 12 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 4 \end{bmatrix} \\
Q &= P - A = \begin{bmatrix} 0 & 4 & -3 \\ 3 & 0 & 0 \\ -3 & 2 & 0 \end{bmatrix} \\
P^{-1} &= \begin{bmatrix} \frac{1}{12} & 0 & 0 \\ 0 & \frac{1}{4} & 0 \\ 0 & 0 & \frac{1}{4} \end{bmatrix} \\
\end{aligned}
$$

#### (iii)
$P^{-1}Q$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0 &= \text{det}(tI - P^{-1}Q) \\
&= \lambda^{3} - \frac{7}{16} \lambda + \frac{3}{32} \\
&= \frac{1}{32} (2 \lambda - 1) (4 \lambda - 1) (4 \lambda + 3) \\
\therefore \ \
\lambda &= \frac{1}{2}, \frac{1}{4}, -\frac{3}{4}
\end{aligned}
$$

である。よって、

$$
\rho(P^{-1}Q) = \frac{3}{4}
$$

#### (iv)

$$
\begin{aligned}
x_1 = P^{-1}b = \begin{bmatrix} \frac{5}{12} \\ \frac{1}{4} \\ -\frac{3}{4} \end{bmatrix}
\end{aligned}
$$

#### (v)

$$
\begin{aligned}
A^{-1}
&=
\begin{bmatrix}
\frac{8}{63}&\frac{5}{63}&-\frac{2}{21}\\
\frac{2}{21}&\frac{13}{42}&-\frac{1}{14}\\
-\frac{1}{21}&\frac{2}{21}&\frac{2}{7}
\end{bmatrix},\\
x=A^{-1}b&=\begin{bmatrix} 1 \\ 1 \\ -1 \end{bmatrix}.
\end{aligned}
$$

### 問2
#### (i)
$a_{ij}$ は行列 $A$ の 第 $i$ 行目の第 $j$ 列目の成分とおくと、

$$
\begin{aligned}
Au = \big[\sum_{j=1}^n a_{1j}, \sum_{j=1}^n a_{2j}, \ldots \sum_{j=1}^n a_{nj} \big]^T = u
\end{aligned}
$$

である。

#### (ii)
すべての要素が非負であり、

$$
\begin{aligned}
|\sum_{j=1}^n a_{ij} x_j| \le \sum_{j=1}^n a_{ij}|x_j| \le \sum_{j=1}^n a_{ij} |x_m| = |x_m|
\end{aligned}
$$

#### (iii)
固有ベクトルを $[x_1,x_2,\ldots,x_n]^T$ とし、$|x_m|=\max_j|x_j|$ とする。固有方程式の第 $m$ 成分より、

$$
\left|\sum_{j=1}^na_{mj}x_j\right|=|\lambda x_m|.
$$

(ii) より、

$$
\begin{aligned}
&|\lambda x_m| \le |x_m| \\
&\therefore |\lambda| \le 1
\end{aligned}
$$

#### (iv)

$$
\begin{aligned}
&\text{tr} (A) = \lambda_1 + \lambda_2 = 2 - 2\alpha \\
&\because \lambda_1 = 1\ \ \ \therefore \lambda_2 = 1-2\alpha
\end{aligned}
$$

$$
\begin{aligned}
(A - (1 - 2\alpha)I) w = 0  \Rightarrow  w = [\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}]^T
\end{aligned}
$$

#### (v)

$0<\alpha\le1$ のもとで、もう一つの固有値は $1-2\alpha$ である。従って極限が存在する必要十分条件は

$$
\boxed{0<\alpha<1}.
$$

このとき、$v=(1,1)^T/\sqrt2$, $w=(1,-1)^T/\sqrt2$ とすれば

$$
A=[v,w]
\begin{bmatrix}1&0\\0&1-2\alpha\end{bmatrix}
[v,w]^T,
$$

なので

$$
B=vv^T
=\boxed{\frac12
\begin{bmatrix}1&1\\1&1\end{bmatrix}}.
$$
