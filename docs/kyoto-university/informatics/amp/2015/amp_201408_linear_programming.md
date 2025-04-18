---
sidebar_label: "2014年8月実施 線形計画"
tags:
  - Kyoto-University
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
L(x, \lambda) = -c^\top x + \lambda ^\top (Ax - b)$$

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
