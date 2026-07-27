---
sidebar_label: "2014年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Linear-Programming.Complementary-Slackness
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
以下の (i), (ii) に答えよ。

(i) 次の線形計画問題 (P1) とその双対問題 (D1) を考える。

$$
\begin{aligned}
\text{(P1)}: &\text{Minimize} &\boldsymbol{c}^{\top} \boldsymbol{x} \\
&\text{subject to} &\boldsymbol{A}\boldsymbol{x} = \boldsymbol{b} \\
&\text{ } &\boldsymbol{x} \geqq \boldsymbol{0}
\end{aligned}
$$

$$
\begin{aligned}
\text{(D1)}: &\text{Maximize} &\boldsymbol{b}^{\top} \boldsymbol{w} \\
&\text{subject to} &\boldsymbol{A}^{\top} \boldsymbol{w} \leqq \boldsymbol{c}
\end{aligned}
$$

ここで、$\boldsymbol{A}$ は $m \times n$ 定数行列、$\boldsymbol{b}$ は $m$ 次元定数ベクトル、$\boldsymbol{c}$ は $n$ 次元定数ベクトル、$\boldsymbol{x}$ は $n$ 次元変数ベクトル、$\boldsymbol{w}$ は $m$ 次元変数ベクトルであり、$\top$ は転置記号を表す。
問題 (P1) と (D1) は最適解 $\boldsymbol{x}^*$ と $\boldsymbol{w}^*$ を持つとする。
さらに $\boldsymbol{y}^* = \boldsymbol{c} - \boldsymbol{A}^{\top} \boldsymbol{w}^*$ とする。
このとき、$x_i^* > 0$ であれば、$y_i^* = 0$ が成り立つことを示せ。

(ii) 次の線形計画問題を考える。

$$
\begin{aligned}
\text{(P2)}: &\text{Maximize} &x_5 \\
&\text{subject to} &\sum_{i=1}^4 x_i \leqq 1 \\
&\text{ } &\sum_{i=k+1}^4 x_i \leqq kx_k \ (k=1,2,3) \\
&\text{ } &x_5 \leqq 4x_4
\end{aligned}
$$

問題 (P2) の最適解を $\boldsymbol{x}^*$ とする。問題 (P2) の双対問題の最適解を求めよ。さらに、

$$
\sum_{i=1}^4 x_i^* = 1
$$

が成り立つことを示せ。

### English Version


### 题目描述

回答下列两问。

1. 考虑互为原、对偶的线性规划
   $$
   \begin{aligned}
   (\mathrm{P1}):\quad&\text{最小化}\quad \boldsymbol c^\top\boldsymbol x\\
   &\text{满足}\quad \boldsymbol A\boldsymbol x=\boldsymbol b,\quad
   \boldsymbol x\geqq\boldsymbol0,
   \end{aligned}
   $$
   $$
   \begin{aligned}
   (\mathrm{D1}):\quad&\text{最大化}\quad \boldsymbol b^\top\boldsymbol w\\
   &\text{满足}\quad \boldsymbol A^\top\boldsymbol w\leqq\boldsymbol c.
   \end{aligned}
   $$
   其中 $\boldsymbol A$ 为 $m\times n$ 常数矩阵，$\boldsymbol b,\boldsymbol c$ 分别为 $m$ 维、$n$ 维常向量，$\boldsymbol x,\boldsymbol w$ 分别为 $n$ 维、$m$ 维变量向量，$\top$ 表示转置。假设 P1、D1 分别有最优解 $\boldsymbol x^*,\boldsymbol w^*$，并令
   $\boldsymbol y^*=\boldsymbol c-\boldsymbol A^\top\boldsymbol w^*$。证明：若 $x_i^*>0$，则 $y_i^*=0$。
2. 考虑线性规划
   $$
   \begin{aligned}
   (\mathrm{P2}):\quad&\text{最大化}\quad x_5\\
   &\text{满足}\quad \sum_{i=1}^4x_i\leqq1,\\
   &\hspace{2.8em}\sum_{i=k+1}^4x_i\leqq kx_k\quad(k=1,2,3),\\
   &\hspace{2.8em}x_5\leqq4x_4.
   \end{aligned}
   $$
   设其最优解为 $\boldsymbol x^*$。求 P2 的对偶问题的最优解，并证明
   $\sum_{i=1}^4x_i^*=1$。

#### 考点

- **线性规划对偶与互补松弛**：利用原、对偶最优解的零对偶间隙证明正原变量对应的对偶松弛为零。
- **对偶最优解构造**：为给定链式约束的线性规划写出并求解对偶，再借最优性论证首个资源约束必取等号。

## **Kai**
### (i)

$$
\begin{aligned}
    (x^*)^{\top}y* &= C^\top x^* - (Ax^*)^\top w^* \\
    &= C^\top x^* - b^\top w^* \\
    & = 0
\end{aligned}
$$

since $x^* \succeq \boldsymbol{0}$
and $y^* = C - A^\top w^* \succeq \boldsymbol{0}$,
hence if $x^* \succ \boldsymbol{0}$,

$$
y^* = \boldsymbol{0}
$$

### (ii)
Let $x = [x_1, x_2, x_3, x_4, x_5]^\top$, the problem (P2) can be written as

$$
\begin{aligned}
&\text{Minimize} &- [0,0,0,0,1]x\\
&\text{Subject to} 
&\begin{bmatrix}
    1 &1 &1 & 1 &0\\
    -1&1 &1 &1 &0 \\
    0 &-2 &1 &1 &0 \\
    0 &0 &-3 &1 &0\\
    0 &0 &0 &-4 &1
\end{bmatrix} \boldsymbol{x} \preceq 
\begin{bmatrix}
    1 \\ 0 \\ 0 \\ 0 \\ 0
\end{bmatrix}
\end{aligned}
$$

Denote as 
$$
\begin{aligned}
&\text{Minimize} &-c^\top x \\
&\text{Subject to} &A\boldsymbol{x} \preceq b
\end{aligned}
$$

Lagrangian:

$$
L(x, \lambda) = -c^\top x + \lambda ^\top (Ax - b)
$$

Lagrange dual function:

$$
d(\lambda) = -b^\top \lambda
$$

An optimal solution of dual problem is $\lambda ^\top = [1,1,1,1,1]$.
Since

$$
-c^\top x = -1, x_5 = 1
$$

By solving $Ax = b$, we get

$$
\sum_{i=1}^{4}x_i^* = 1
$$
