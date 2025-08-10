---
sidebar_label: "2022年8月実施 数学【I】"
tags:
  - Kyoto-University
  - Linear-Algebra
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


## **Kai**
### 問1
#### (i)
$\rho(P^{-1}Q) \le 1$

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