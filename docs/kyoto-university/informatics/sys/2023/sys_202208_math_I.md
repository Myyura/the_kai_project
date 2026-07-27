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
そのために、$m$ 次正方行列 $A$ を $P - Q$ に分解し、方程式を $P x = Q x + b$ のように書き換え、適当な初期値 $x_0$ を与えて、$x_{n+1} = Q x_n + b$、つまり、$x_{n+1} = P^{-1} (Q x_n + b)$ を繰り返し計算する。
特に、行列 $A$ の対角要素からなる対角行列を $P$ とする反復法をヤコビ法と呼ぶ。以下の設問に答えよ。

ただし、$m$ 次正方行列 $Z$ の逆行列を $Z^{-1}$、転置を $Z^T$、スペクトル半径を $\rho (Z)$ と表す。
$\rho (Z)$ は $Z$ の固有値 $\lambda_i$ $(i = 1, \ldots, m)$ の絶対値の最大値 ($\max_i |\lambda_i|$) に等しい。

(i) $P^{-1}$ が存在するとき、$P x = Q x + b$ と $x_{n+1} = Q x_n + b$ から、

$$
  x - x_{n+1} = P^{-1} Q (x - x_n)
$$

となる。
$P^{-1} Q$ の固有値がすべて異なるものとして、$n \to \infty$ のとき、任意の $x_0$ に対して $x_n$ が方程式の解に収束するために $\rho (P^{-1} Q)$ が満たすべき必要十分条件をその理由とともに答えよ。

以下の設問では、次の方程式をヤコビ法を用いて解く場合について考える。

$$
A x = b, \quad A = \begin{bmatrix} 12 & -4 & 3 \\ -3 & 4 & 0 \\ 3 & -2 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 5 \\ 1 \\ -3 \end{bmatrix} \tag{1}
$$

(ii) $P$, $Q$, $P^{-1}$ を求めよ。

(iii) $P^{-1} Q$ の固有値をすべて求めよ。さらに、$P^{-1} Q$ のスペクトル半径を求めよ。

(iv) $x_0 = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$ として、$x_1$ を求めよ。

(v) $A^{-1}$ を求めてから、方程式 (1) の解を求めよ。

### 問2 
行列 $A$ は $n \times n$ の実対称行列で、その要素を $a_{ij} (i, j = 1, \ldots, n)$ と書く。さらに、すべての要素が非負であり、

$$
\sum_{j=1}^n a_{ij} = 1, \quad i = 1, \ldots, n
$$

を満たすと仮定する。以下の設問に答えよ。ただし、$u$ はすべての要素が1である $n$ 次元ベクトルとする。

(i) $A u = u$ を示せ。

(ii) 任意の零ベクトルでない $n$ 次元実ベクトル $x$ に対して、$x$ の要素の中で絶対値が最大のものを $x_m$ としたとき、任意の $i \in \{1, \ldots, n\}$ において

$$
\left| \sum_{j=1}^n a_{ij} x_j \right| \leq |x_m|
$$

が成り立つことを示せ。

(iii) $A$ の任意の固有値 $\lambda$ に対して、$|\lambda| \leq 1$ が成り立つことを示せ。

(iv) $n = 2$ とし、$A$ は次の形

$$
  A = \begin{bmatrix}
  1 - \alpha & \alpha \\
  \alpha & 1 - \alpha
  \end{bmatrix}, \quad 0 < \alpha \leq 1
$$

を取るとする。
設問 (i) から、$A$ は固有値 $\lambda_1 = 1$ と対応する固有ベクトル $u = u / \sqrt{2}$ を持つ。
もう一方の固有値 $\lambda_2$ と対応する固有ベクトル $w$ を求めよ。ただし $w$ は正規化せよ。

(v) 設問 (iv) の $A$ に対し、その自然数乗 $A^k$ を考える。極限

$$
B = \lim_{k \to \infty} A^k
$$

が存在する $\alpha$ の範囲を答えよ。
また、極限が存在する場合には、その極限 $B$ を求めよ。

### 题目描述

1. 考虑用迭代法求解关于向量 $x$ 的 $m$ 元线性方程组 $Ax=b$。把 $m$ 阶方阵分解为 $A=P-Q$，将方程改写为

   $$
   Px=Qx+b.
   $$

   给定适当初值 $x_0$ 后，题面将迭代写为 $x_{n+1}=Qx_n+b$，即反复计算

   $$
   x_{n+1}=P^{-1}(Qx_n+b).
   $$

   特别地，取 $P$ 为由 $A$ 的对角元素组成的对角矩阵时，该方法称为 Jacobi 法。以下 $Z^{-1}$、$Z^{\mathrm T}$、$\rho(Z)$ 分别表示 $m$ 阶方阵 $Z$ 的逆、转置和谱半径；$\rho(Z)$ 等于 $Z$ 的特征值绝对值的最大值。

   （i）当 $P^{-1}$ 存在时，由

   $$
   Px=Qx+b,\qquad
   x_{n+1}=P^{-1}(Qx_n+b)
   $$

   可得

   $$
   x-x_{n+1}=P^{-1}Q(x-x_n).
   $$

   假设 $P^{-1}Q$ 的特征值互不相同。给出并说明 $\rho(P^{-1}Q)$ 必须满足的充要条件，使 $n\to\infty$ 时 $x_n$ 对任意初值 $x_0$ 都收敛到方程的解。

   以下使用 Jacobi 法求解

   $$
   Ax=b,\qquad
   A=
   \begin{bmatrix}
   12&-4&3\\
   -3&4&0\\
   3&-2&4
   \end{bmatrix},
   \qquad
   b=
   \begin{bmatrix}
   5\\1\\-3
   \end{bmatrix}.
   \tag{1}
   $$

   （ii）求 $P,Q,P^{-1}$。

   （iii）求 $P^{-1}Q$ 的全部特征值及谱半径。

   （iv）取

   $$
   x_0=
   \begin{bmatrix}0\\0\\0\end{bmatrix},
   $$

   求 $x_1$。

   （v）先求 $A^{-1}$，再求方程（1）的解。

2. 设 $A$ 为 $n\times n$ 实对称矩阵，元素为 $a_{ij}$。假设所有元素非负，且

   $$
   \sum_{j=1}^na_{ij}=1,\qquad i=1,\ldots,n.
   $$

   令 $u$ 为所有分量均为 1 的 $n$ 维向量。

   （i）证明 $Au=u$。

   （ii）对任意非零实向量 $x$，令 $x_m$ 为其分量中绝对值最大的一个。证明对任意 $i\in\{1,\ldots,n\}$，

   $$
   \left|\sum_{j=1}^na_{ij}x_j\right|
   \leq|x_m|.
   $$

   （iii）证明 $A$ 的任意特征值 $\lambda$ 都满足 $|\lambda|\leq1$。

   （iv）令 $n=2$ 且

   $$
   A=
   \begin{bmatrix}
   1-\alpha&\alpha\\
   \alpha&1-\alpha
   \end{bmatrix},
   \qquad0<\alpha\leq1.
   $$

   由第（i）问可知 $A$ 有特征值 $\lambda_1=1$，对应的归一化特征向量为 $u/\sqrt2$。求另一个特征值 $\lambda_2$ 及其归一化特征向量 $w$。

   （v）对第（iv）问的矩阵 $A$ 考虑自然数幂 $A^k$。求使极限

   $$
   B=\lim_{k\to\infty}A^k
   $$

   存在的 $\alpha$ 范围；在极限存在时求 $B$。

#### 考点

- **Jacobi 迭代法**：从矩阵分裂构造迭代矩阵并执行首步迭代。
- **谱半径与迭代收敛**：利用误差递推和特征分解给出任意初值收敛的充要条件。
- **随机矩阵的谱性质**：由非负行和为 1 证明单位特征值及其他特征值的模界。
- **二阶对称矩阵幂极限**：通过正交谱分解判断幂序列是否收敛并计算极限投影。


## **Kai**
### 問1
#### (i)

$$
\rho(P^{-1}Q) \le 1
$$

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
x = \begin{bmatrix} 1 \\ 1 \\ -1 \end{bmatrix}
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
固有ベクトルを $[x_1, x_2, \ldots, x_n]^T$ とする。 任意の $x_j$ に対して、以下の式が成り立つ。

$$
\begin{aligned}
\lvert \sum_{j=1}^n a_{ij} x_j \rvert = |\lambda x_j|
\end{aligned}
$$

(ii) より、

$$
\begin{aligned}
&|\sum_{j=1}^n a_{ij} x_m| = |\lambda x_m| \le |x_m| \\
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
(A - (1 - \alpha)I) w = 0  \Rightarrow  w = [\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}]^T
\end{aligned}
$$

#### (v)
$\alpha \neq -1$

$$
\begin{aligned}
P^{-1}AP = \Lambda = \begin{bmatrix} 1 & 0 \\ 0 & 1-2 \alpha \end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
P = [v,w] = \begin{bmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
P^{-1} = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ =\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
B = \begin{bmatrix} \frac{1}{2} & -\frac{1}{2} \\ \frac{1}{2} & \frac{1}{2} \end{bmatrix}
\end{aligned}
$$
