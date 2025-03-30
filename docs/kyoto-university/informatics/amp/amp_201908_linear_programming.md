---
sidebar_label: "2019年8月実施 線形計画"
sidebar_position: 20
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{a}^i \ (i = 1, \ldots, n)$ と $\boldsymbol{b}$ を $m$ 次元ベクトル，$\boldsymbol{c} = (c_1, c_2, \ldots, c_n)^{\top}$ を $n$ 次元ベクトルする．
ただし $\top$ は転置記号を表す．さらに，$\boldsymbol{A}$ を第 $i$ 列が $\boldsymbol{a}^i$ となる $m \times n$ 行列，つまり $\boldsymbol{A} = [\boldsymbol{a}^1 \ \boldsymbol{a}^2 \ \cdots \ \boldsymbol{a}^n]$ とする．

次の線形計画問題 (P) とその双対問題 (D) を考える．

$$
\begin{aligned}
\text{(P)}\ &\text{Minimize} &\boldsymbol{c}^{\top} \boldsymbol{x} \\
&\text{subject to} &\boldsymbol{A}\boldsymbol{x} = \boldsymbol{b} \\
&\text{ } &\boldsymbol{x} \geqq \boldsymbol{0}
\end{aligned}
$$

$$
\begin{aligned}
\text{(D)}\ &\text{Maximize} &\boldsymbol{b}^{\top} \boldsymbol{w} \\
&\text{subject to} &\boldsymbol{A}^{\top} \boldsymbol{w} \leqq \boldsymbol{c}
\end{aligned}
$$

ただし，(P) の決定変数は $\boldsymbol{x} \in \mathbb{R}^n$，(D) の決定変数は $\boldsymbol{w} \in \mathbb{R}^m$ である．

問題 (P) は $x_1^* = 0$ となる唯一の最適解 $\boldsymbol{x}^* = (x_1^*, x_2^*, \ldots, x_n^*)^{\top}$ を持つとする．このとき，次の線形計画問題 (Q) を考える．

$$
\begin{aligned}
\text{(Q)}\ \text{Maximize } \ & \boldsymbol{b}^{\top} \boldsymbol{u} - (\boldsymbol{c}^{\top} \boldsymbol{x}^*) v \\
\text{subject to } \ &(\boldsymbol{a}^1)^{\top} \boldsymbol{u} - c_1 v \leqq -1 \\
\text{ } &(\boldsymbol{a}^i)^{\top} \boldsymbol{u} - c_i v \leqq 0 \ (i = 2, 3, \ldots, n) \\
\text{ } &v \geqq 0
\end{aligned}
$$

ただし，決定変数は $\boldsymbol{u} \in \mathbb{R}^m$ と $v \in \mathbb{R}$ である．

以下の問いに答えよ．

(i) 問題 (Q) の双対問題を書け．

(ii) 問題 (Q) が最適解を持つことを示せ．

(iii) 問題 (Q) の最適値が $0$ となることを示せ．

(iv) 問題 (Q) は $v^* > 0$ となる最適解 $(\boldsymbol{u}^*, v^*)$ を持つとする．$\boldsymbol{w}^* = \frac{\boldsymbol{u}^*}{v^*}$ とする．このとき，$\boldsymbol{w}^*$ は双対問題 (D) の最適解であることを示せ．

(v) 問題 (Q) は $v^* = 0$ となる最適解 $(\boldsymbol{u}^*, v^*)$ を持つとする．このとき，$(\boldsymbol{a}^1)^{\top} \boldsymbol{w}^* < c_1$ となる (D) の最適解 $\boldsymbol{w}^*$ が存在することを示せ．

### English Version


## **Kai**
### (i)
Lagrangian: 

$$
L(u,v,\lambda, \kappa) = (c^\top x^*)v - b^\top u + \lambda ^\top (A^\top u - vc - d) - \kappa v
$$

Lagrange dual function:

$$
d(\lambda, \kappa) = -\lambda ^\top d
$$

$$
\begin{aligned}
(D): \text{Minimize } \ &d^\top \lambda \\
\text{Subject to } \ &c^\top x^* - c^\top \lambda - \kappa = 0 \\
&\kappa \geq 0, \lambda \succeq \boldsymbol{0}\\
\end{aligned}
$$

where $d = [-1,0,0,\ldots, 0]^\top$

### (ii)
For (D), $\kappa = 0$, $\lambda = x^*$ is feasible , hence (Q) has optimal value $v(\text{Q}) \leq d^\top x^* = 0$.

Hence (Q) is bounded, and therefore has an optimal value.

### (iii)
For $w^*$, we have $c^\top x^* = b^\top w^*$.
Since duality gap is zero, for $(Q)$, when $u = w^*$ and $v = 1$, $0$ is attained.

### (iv)
we know

$$
b^\top u^* - v^* (c^\top x^*) = 0
$$

then

$$
b^\top \frac{u^*}{v^*} = c^\top x^*
$$

since

$$
A^\top \frac{u^*}{v^*} \leq c+d \leq c,
$$

$\frac{u^*}{v^*}$ is an optimal solution to $(D)$

### (v)
we have

$$
b^\top u^* = 0, A^\top u^* \leq d
$$

(D) has optimal solution $\widetilde{w}$, 
let $w^* = \widetilde{w} + tu^*$, $t > 0$,
then we have

$$
Aw^* \leq c+ td, \quad (a^1)\top w^* < c_1
$$

$$
b^\top w^* = b^\top \widetilde{w}
$$

i.e., $w^*$ is such an optimal solution
