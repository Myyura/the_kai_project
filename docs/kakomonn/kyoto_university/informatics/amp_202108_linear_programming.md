---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2021年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{A}$ と $\boldsymbol{B}$ を $m \times n$ 行列とする。さらに $\boldsymbol{A}$ の第 $(i,j)$ 成分を $A_{i,j} = -i-j(i = 1,\dots,m,j = 1,\dots,n)$ とする。

&emsp;&emsp;以下のパラメータ $\boldsymbol{u} \in \mathbb{R}^m$ をもつ線形計画問題 $P(\boldsymbol{u})$ とパラメータ $\boldsymbol{v} \in \mathbb{R}^n$ をもつ線形計画問題 $Q(\boldsymbol{v})$ を考える。

$$
\begin{aligned}
P(\boldsymbol{u}): &\text{Minimize} \quad \boldsymbol{u^{\top}Ax} \\
&\text{subject to} \quad \sum_{i=1}^{n}x_i \leqq 1 \\
&\qquad \qquad \quad \boldsymbol{x} \geqq \boldsymbol{0} \\
Q(\boldsymbol{v}): &\text{Minimize} \quad \boldsymbol{v^{\top}B^{\top}y} \\
&\text{subject to} \quad \sum_{i=1}^{m}y_i \leqq 1 \\
&\qquad \qquad \quad \boldsymbol{y} \geqq \boldsymbol{0} \\
\end{aligned}
$$

ただし, $P(\boldsymbol{u})$の決定変数は $\boldsymbol{x} = (x_1,x_2,\dots,x_n)^{\top} \in \mathbb{R}^n$ であり, $Q(\boldsymbol{v})$ の決定変数は $\boldsymbol{y} = (y_1,y_2,\dots,y_m)^{\top} \in \mathbb{R}^m$ である。また, $\top$ は転置記号を表す。

&emsp;&emsp;問題 $P(\boldsymbol{u})$ のすべての最適解の集合を $S_P(\boldsymbol{u})$ とし, 問題 $Q(\boldsymbol{v})$ のすべての最適解の集合を $S_Q(\boldsymbol{v})$ とする。さらに, $X = \{(\boldsymbol{x^*,y^*}) \in \mathbb{R}^n \times \mathbb{R}^m |\boldsymbol{x^*} \in S_P(\boldsymbol{y^*}),\boldsymbol{y^*} \in S_Q(\boldsymbol{x^*})\}$ とする。

&emsp;&emsp;以下の問いに答えよ。

(i) 問題 $P(\boldsymbol{u})$ の双対問題を書け。

(ii) $\boldsymbol{u} = (u_1,u_2,\dots,u_m)^{\top}$ を $u_i \leqq 0 (i = 1,\dots,m)$ であるベクトルとする。このとき,  $\boldsymbol{0} \in S_P(\boldsymbol{u})$ であることを示せ。

(iii) $\boldsymbol{B} = -\boldsymbol{A}$とする。このとき, すべての $(\boldsymbol{x^*,y^*}) \in X$ に対して $(\boldsymbol{y^*})^{\top}\boldsymbol{Ax^*} = 0$ となることを示せ。

(iv) $\boldsymbol{u} \in \mathbb{R}^m$ を $\boldsymbol{u} \geqq 0$ かつ $\boldsymbol{u \neq 0}$ であるベクトルとする。このとき, $S_P(\boldsymbol{u})$ を求めよ。

(v) $\boldsymbol{B = A}$ とする。このとき, $X$ を求めよ。

### English Version


## **Kai**
### (i)
Lagrangian:

$$
L(x, \lambda, \nu) = u^\top Ax + \lambda(\mathbf{1}^\top x - 1) - \nu^\top x
$$

Lagrange dual function:

$$
g(\lambda, \nu) = \inf_{x} \{ L(x,\lambda, \nu) \} = - \boldsymbol{\lambda}
$$

Dual proble $(D)$:

$$
\begin{aligned}
(D): &\text{Maximize} \quad \lambda \\
&\text{subject to} \quad u^\top A + \lambda \boldsymbol{1}^\top \succeq \boldsymbol{0} \\
&\qquad \qquad \quad \lambda \geqq 0
\end{aligned}
$$

### (ii)
from (i) we know , for $(D): -\lambda \boldsymbol{1} \preceq u^\top A$,
obviously $u^\top A \succeq \boldsymbol{0}$, from strong duality, $\max \{- \lambda\} = 0$, $0 \in S_p(u)$

### (iii)
according to the constraint, $x^* \succeq 0$, from $\boldsymbol{(ii)}, 0 \in S_Q(x^*)$.

If $x^* = 0$ , then $(y^*)^\top Ax^* = 0$.

If $x^* \neq 0$, then $y^* = 0$, otherwise $-(x^*)^\top A y^* \succ 0$, which is conflict with $0 \in S_Q(x^*)$.

Thus $(x^*)^\top A y^* = 0$ always holds.

### (iv)
Let $\boldsymbol{c} = u^\top A$. Then we have

$$
0 > c_1 > c_2 > \ldots > c_n
$$

The KKT_conditions:

$$
\text{ } \left\{
\begin{aligned}
c + \lambda \boldsymbol{1} - \nu & = 0 \\
\lambda \succeq \boldsymbol{0}, \nu   & \succeq \bold{0} \\
 -\nu^\top x^*  = 0,\lambda (\bold{1}^\top x^* - 1) &= 0
\end{aligned}
\right.
$$

And $\lambda = -c_n , \nu = \bold{c} - c_n \bold{1}, x^* = [0,0,\ldots, 1]^\top$ satisfies the KKT-conditions,
thus $[0,0,\ldots, 1]^\top \in S_P(u)$,
and

$$
\forall \widetilde{x} \neq [0,0,\ldots, 1]^\top, \bold{c} \widetilde{x} > c_n = \bold{c}x^*
$$

hence $S_P(u) = \{ [0,0,\ldots, 1]^\top \}$.

### (v)
Consider $P(y^*)$ and $Q(x^*)$.

For $x^* = 0$, if $y* \neq 0$, then $x^* = [0,0,\ldots, 1]^\top$. Similarly, when $y^* = \bold{0}, x^* \neq \bold{0}$.
Thus $(\bold{0}, \bold{0}) \in X$.

Then, we consider the case when $y^* \neq \bold{0}, x^* \neq \bold{0}$.

$$
y^* \neq \bold{0} \Rightarrow x^* = [0,0,\ldots, 1]^\top \Rightarrow x^* \neq \bold{0} \Rightarrow y^* = [0,0,\ldots, 1]^\top
$$

Therefore, $X = \{ (\bold{0}, \bold{0}), ([0,0,\ldots, 1]^\top, [0,0,\ldots, 1]^\top) \}$.
