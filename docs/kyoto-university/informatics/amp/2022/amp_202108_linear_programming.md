---
sidebar_label: "2021年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Linear-Programming.Parametric-Linear-Programming
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 線形計画

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
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

ただし, $P(\boldsymbol{u})$ の決定変数は $\boldsymbol{x} = (x_1,x_2,\dots,x_n)^{\top} \in \mathbb{R}^n$ であり, $Q(\boldsymbol{v})$ の決定変数は $\boldsymbol{y} = (y_1,y_2,\dots,y_m)^{\top} \in \mathbb{R}^m$ である。また, $\top$ は転置記号を表す。

&emsp;&emsp;問題 $P(\boldsymbol{u})$ のすべての最適解の集合を $S_P(\boldsymbol{u})$ とし, 問題 $Q(\boldsymbol{v})$ のすべての最適解の集合を $S_Q(\boldsymbol{v})$ とする。さらに, $X = \{(\boldsymbol{x^*,y^*}) \in \mathbb{R}^n \times \mathbb{R}^m |\boldsymbol{x^*} \in S_P(\boldsymbol{y^*}),\boldsymbol{y^*} \in S_Q(\boldsymbol{x^*})\}$ とする。

&emsp;&emsp;以下の問いに答えよ。

(i) 問題 $P(\boldsymbol{u})$ の双対問題を書け。

(ii) $\boldsymbol{u} = (u_1,u_2,\dots,u_m)^{\top}$ を $u_i \leqq 0 (i = 1,\dots,m)$ であるベクトルとする。このとき,  $\boldsymbol{0} \in S_P(\boldsymbol{u})$ であることを示せ。

(iii) $\boldsymbol{B} = -\boldsymbol{A}$ とする。このとき, すべての $(\boldsymbol{x^*,y^*}) \in X$ に対して $(\boldsymbol{y^*})^{\top}\boldsymbol{Ax^*} = 0$ となることを示せ。

(iv) $\boldsymbol{u} \in \mathbb{R}^m$ を $\boldsymbol{u} \geqq 0$ かつ $\boldsymbol{u \neq 0}$ であるベクトルとする。このとき, $S_P(\boldsymbol{u})$ を求めよ。

(v) $\boldsymbol{B = A}$ とする。このとき, $X$ を求めよ。

### English Version

### 题目描述

设 $\boldsymbol{A}$、$\boldsymbol{B}$ 均为 $m\times n$ 矩阵，并规定

$$
A_{ij}=-i-j
\qquad
(i=1,\ldots,m,\ j=1,\ldots,n).
$$

考虑分别带参数 $\boldsymbol{u}\in\mathbb{R}^m$ 和
$\boldsymbol{v}\in\mathbb{R}^n$ 的线性规划

$$
\begin{aligned}
P(\boldsymbol{u}):\quad
&\text{最小化}\quad
\boldsymbol{u}^\top\boldsymbol{A}\boldsymbol{x}\\
&\text{满足}\quad
\sum_{i=1}^n x_i\leqq1,\qquad
\boldsymbol{x}\geqq\boldsymbol{0},\\[2mm]
Q(\boldsymbol{v}):\quad
&\text{最小化}\quad
\boldsymbol{v}^\top\boldsymbol{B}^\top\boldsymbol{y}\\
&\text{满足}\quad
\sum_{i=1}^m y_i\leqq1,\qquad
\boldsymbol{y}\geqq\boldsymbol{0}.
\end{aligned}
$$

其中 $P(\boldsymbol{u})$ 的决策变量为
$\boldsymbol{x}=(x_1,\ldots,x_n)^\top\in\mathbb{R}^n$，
$Q(\boldsymbol{v})$ 的决策变量为
$\boldsymbol{y}=(y_1,\ldots,y_m)^\top\in\mathbb{R}^m$，且
$\top$ 表示转置。

记 $S_P(\boldsymbol{u})$ 和 $S_Q(\boldsymbol{v})$ 分别为
$P(\boldsymbol{u})$ 与 $Q(\boldsymbol{v})$ 的全部最优解集合，并定义

$$
X=
\left\{
(\boldsymbol{x}^*,\boldsymbol{y}^*)\in
\mathbb{R}^n\times\mathbb{R}^m
\ \middle|\
\boldsymbol{x}^*\in S_P(\boldsymbol{y}^*),\
\boldsymbol{y}^*\in S_Q(\boldsymbol{x}^*)
\right\}.
$$

回答下列问题：

1. 写出 $P(\boldsymbol{u})$ 的对偶问题。
2. 若 $\boldsymbol{u}=(u_1,\ldots,u_m)^\top$ 满足
   $u_i\leqq0$（$i=1,\ldots,m$），证明
   $\boldsymbol{0}\in S_P(\boldsymbol{u})$。
3. 令 $\boldsymbol{B}=-\boldsymbol{A}$。证明对任意
   $(\boldsymbol{x}^*,\boldsymbol{y}^*)\in X$，都有

$$
(\boldsymbol{y}^*)^\top\boldsymbol{A}\boldsymbol{x}^*=0.
$$

4. 若 $\boldsymbol{u}\geqq\boldsymbol{0}$ 且
   $\boldsymbol{u}\ne\boldsymbol{0}$，求集合 $S_P(\boldsymbol{u})$。
5. 令 $\boldsymbol{B}=\boldsymbol{A}$，求集合 $X$。

## **Kai**
### (i)
Lagrangian:

$$
L(x, \lambda, \nu) = u^\top Ax + \lambda(\boldsymbol{1}^\top x - 1) - \nu^\top x
$$

Lagrange dual function:

$$
g(\lambda,\nu)=\inf_x L(x,\lambda,\nu)=
\begin{cases}
-\lambda,&A^\top u+\lambda\boldsymbol1-\nu=0,\\
-\infty,&\text{otherwise}.
\end{cases}
$$

Dual proble $(D)$ :

$$
\begin{aligned}
(D): &\text{Maximize} \quad -\lambda \\
&\text{subject to} \quad A^\top u + \lambda \boldsymbol{1} \succeq \boldsymbol{0} \\
&\qquad \qquad \quad \lambda \geqq 0
\end{aligned}
$$

### (ii)
Since $u_i\leq0$ and $A_{ij}<0$, every component of $A^\top u$ is nonnegative. Thus for every feasible $x$,

$$
u^\top Ax=(A^\top u)^\top x\geq0.
$$

The feasible point $x=0$ attains $0$, so $0\in S_P(u)$.

### (iii)
Since $B=-A$ and $x^*\succeq0$, the coefficient vector of Q is
$Bx^*=-Ax^*\succeq0$. Hence $0\in S_Q(x^*)$.

If $x^* = 0$ , then $(y^*)^\top Ax^* = 0$ .

If $x^* \neq 0$, then every component of $-Ax^*$ is strictly positive. Thus $y^*=0$; otherwise $y^{*\top}(-Ax^*)>0$, contradicting the optimality of $y^*$ because $y=0$ has value $0$.

Thus $(y^*)^\top A x^* = 0$ always holds.

### (iv)
Let $\boldsymbol{c} = A^\top u$ . Then we have

$$
0 > c_1 > c_2 > \ldots > c_n
$$

The KKT_conditions:

$$
\text{ } \left\{
\begin{aligned}
c + \lambda \boldsymbol{1} - \nu & = 0 \\
\lambda \succeq \boldsymbol{0}, \nu   & \succeq \boldsymbol{0} \\
 -\nu^\top x^*  = 0,\lambda (\boldsymbol{1}^\top x^* - 1) &= 0
\end{aligned}
\right.
$$

And $\lambda = -c_n , \nu = \boldsymbol{c} - c_n \boldsymbol{1}, x^* = [0,0,\ldots, 1]^\top$ satisfies the KKT-conditions,
thus $[0,0,\ldots, 1]^\top \in S_P(u)$ ,
and

$$
\forall\text{ feasible }\widetilde{x} \neq [0,0,\ldots, 1]^\top, \boldsymbol{c}^\top \widetilde{x} > c_n = \boldsymbol{c}^\top x^*
$$

hence $S_P(u) = \{ [0,0,\ldots, 1]^\top \}$ .

### (v)
Consider $P(y^*)$ and $Q(x^*)$ .

Let

$$
\Delta_n=\{x\in\mathbb R^n:x\succeq0,\ \boldsymbol1^\top x\leq1\},
\qquad
\Delta_m=\{y\in\mathbb R^m:y\succeq0,\ \boldsymbol1^\top y\leq1\}.
$$

If $y^*=0$, then $S_P(y^*)=\Delta_n$. If also $x^*\ne0$, the coefficients $Ax^*$ of Q are strictly negative and strictly decrease with the row index, so $S_Q(x^*)=\{e_m\}$; hence $y^*=0$ is impossible. Therefore this case gives only $(x^*,y^*)=(0,0)$.

If $y^*\ne0$, part (iv) gives $x^*=e_n$. Since $x^*\ne0$, the same argument for Q gives $y^*=e_m$. Conversely, both pairs satisfy the defining optimality conditions. Therefore,

$$
X=\{(0,0),(e_n,e_m)\}.
$$
