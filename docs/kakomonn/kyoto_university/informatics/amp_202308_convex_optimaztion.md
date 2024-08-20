---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2023年8月実施 専門科目 凸最適化
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 専門科目 凸最適化

## **Author**
Casablanca

## **Description**
### 日本語版

### English Version
Let $c=(c_1,c_2, \ldots , c_n)$ , where the superscript $\top$ denotes transposition.
Consider the following linear programming problem P:

$$
\begin{aligned}
\text{P} : &\text{Minimize} &\boldsymbol{c}^{\top} \boldsymbol{y}\\
&\text{subject to} &\sum_{i=1}^{n} y_{i} \leq 1 \\
&\text{ } &\boldsymbol{y} \geq 0
\end{aligned}
$$

where the decision variable of problem P is the vector $\boldsymbol{y} = (y_1, y_2, \ldots y_n)^\top \in \mathbb{R}^\top$.

Answer the following questions (i) and (ii)

(i) write out a dual problem of problem P.

(ii) Show that problem P has an optimal solution.

Let $Y$ be the set of optimal solutions of problem P.

Answer the following quetions (iii) and (iv).

(iii) Show that $Y$ is a convex set.

(iv) Suppose that $c_{1} = c_2 = \cdots = c_n$ and $c_1 < 0$.
Consider the following optimization problem Q:

$$
\begin{aligned}
\text{Q} : &\text{Minimize} &\frac{1}{2} {\boldsymbol{x}^{\top} \boldsymbol{x} - \boldsymbol{c}^{\top} \boldsymbol{x}}\\
&\text{subject to} &\boldsymbol{x} \in Y
\end{aligned}
$$

where the decision variable of problem Q is the vector $\boldsymbol{x} \in \mathbb{R}^n$.
Obtain an optimal solution of problem Q by using Karush-Kuhn-Tucker conditions.


## **Kai**
### (i)
We have Lagrangian: $L(y,\lambda,\nu) = c^\top y + \lambda (\mathbf{1}^\top y - \mathbf{1} ) - \nu^\top y$.

Obtain Lagrange dual function: $d(\lambda, \nu) = \inf_{y} ((c^\top + \lambda \mathbf{1}^\top - \nu^\top)y - \lambda) = - \lambda$.

Then we write the  dual problem D:

$$ 
\begin{aligned}
\text{D} : &\text{Maximize} &-\lambda\\
&\text{subject to} &c + \lambda \mathbf{1} - \nu = 0\\
&\text{ } &\geq 0, \nu \succeq 0
\end{aligned}
$$


### (ii)
Since $-\lambda \mathbf{1} \preceq c$, the optimal value $v$ of dual problem D satisfies: $v \leq \min \{ c_1, c_2, \ldots c_n \}$
then the linear programming $P$ is bounded, thus has an optimal solution.

### (iii)
For any  $y_1,y_2 \in Y$  , we know that for any $\widetilde{y}$ which satisfies the constraints of P,

$$
c^\top y_1 \leq c^\top \widetilde{y}, \quad c^\top y_2 \leq c^\top \widetilde{y}
$$

for $\theta \in [0,1]$,

$$
\theta y_1 + (1 - \theta) y_2 \succeq \mathbf{0}, \quad
$$

$$
\mathbf{1}^\top (\theta y_1 + (1-\theta) y_2) \leq 1$$

$$
c^\top (\theta y_1 + (1-\theta)y_2) = \theta c^\top y_1 + (1-\theta)c^\top y_2 \leq c^\top \widetilde{y}
$$

then $\theta y_1 + (1-\theta)y_2 \in Y$, $Y$ is a convex set.

### (iv)
Since $c_1 = c_2 = \ldots c_n < 0$, $Y = \{ y | y \succeq \mathbf{0}, \mathbf{1}^\top y = 1 \}$, we can rewrite Q as 

$$
\begin{aligned}
Q:&\text{Minimize} &\frac{1}{2} x^\top x - c^\top x \\
&\text{subject to} &x \succeq \mathbf{0}, \mathbf{1}^\top x = 1 \\
\end{aligned}
$$

thus we get the Lagrangian: $L(x,\lambda, \mu) = \frac{1}{2} x^\top x - c^\top x - \lambda^\top x + \mu(1-\mathbf{1}^\top x)$.
Then the KKT-condition:

$$
\text{KKT-conditions: } \left\{
\begin{aligned}
x - c - \lambda - \mu \mathbf{1} &= 0 \\
\lambda  \succeq  0, -\lambda^\top x &=0 \\
x &\succeq 0\\
\mathbf{1}^\top x &= 1
\end{aligned}
\right.
$$

it is obviously that

$$
x^* = [\frac{1}{n} , \frac{1}{n}, \ldots , \frac{1}{n}]^\top , \lambda = \mathbf{0}, \mu = [\frac{1}{n} - c_1, \frac{1}{n} - c_1, \ldots, \frac{1}{n} - c_1]^\top
$$

satiesfies the KKT-condtions.
Hence $x^*$ is an optimal solution.
