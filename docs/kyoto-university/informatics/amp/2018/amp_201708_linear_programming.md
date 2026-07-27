---
sidebar_label: "2017年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Linear-Programming.Total-Unimodularity-and-Integrality
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{c} = (c_1, c_2, c_3, c_4, c_5)^{\top} \in \mathbb{R}^5$ をパラメータにもつ次の線形計画問題 $\text{P}(\boldsymbol{c})$ を考える。

$$
\begin{aligned}
\text{P}(\boldsymbol{c}): &\text{Minimize} &\boldsymbol{c}^{\top} \boldsymbol{x} \\
&\text{subject to} &x_1 + x_2 + x_4 + x_5 = 3 \\
&\text{ } &x_2 + x_3 + x_4 = 3 \\
&\text{ } &\boldsymbol{x} \geqq \boldsymbol{0}
\end{aligned}
$$

ここで、決定変数は $\boldsymbol{x} = (x_1, x_2, x_3, x_4, x_5)^\top \in \mathbb{R}^5$ であり、$\top$ は転置記号を表す。

問題 $\text{P}(\boldsymbol{c})$ の最適解の集合を $X(\boldsymbol{c})$ とする。
さらに、$\emptyset$ を空集合、$\mathbb{Z}$ を整数全体の集合、

$$
\mathbb{Z}^5 = \{ \boldsymbol{z} = (z_1, z_2, z_3, z_4, z_5)^{\top} \in \mathbb{R}^5 \mid z_i \in \mathbb{Z} \ (i = 1, 2, 3, 4, 5) \}
$$

とする。以下の問いに答えよ。

(i) 問題 $\text{P}(\boldsymbol{c})$ の双対問題を書け。

(ii) 任意の $\boldsymbol{c} \in \mathbb{R}^5$ に対して $X(\boldsymbol{c}) \neq \emptyset$ であることを示せ。

(iii) 任意の $\boldsymbol{c} \in \mathbb{R}^5$ に対して $X(\boldsymbol{c}) \cap \mathbb{Z}^5 \neq \emptyset$ であることを示せ。

(iv) 次の命題 (A) について、真であれば証明を、偽であれば反例を与えよ。

- (A) 任意の $\boldsymbol{c} \in \mathbb{R}^5$ に対して $X(\boldsymbol{c}) \subseteq \mathbb{Z}^5$ である。

### English Version

### 题目描述

对参数
$\boldsymbol c=(c_1,c_2,c_3,c_4,c_5)^\top\in\mathbb R^5$，考虑线性规划

$$
\begin{aligned}
\mathrm P(\boldsymbol c):\quad
&\text{最小化}\quad \boldsymbol c^\top\boldsymbol x\\
&\text{满足}\quad x_1+x_2+x_4+x_5=3,\\
&\hspace{2.8em}x_2+x_3+x_4=3,\\
&\hspace{2.8em}\boldsymbol x\geqq\boldsymbol0,
\end{aligned}
$$

其中决策变量
$\boldsymbol x=(x_1,x_2,x_3,x_4,x_5)^\top\in\mathbb R^5$，$\top$ 表示转置。令 $X(\boldsymbol c)$ 为 P$(\boldsymbol c)$ 的最优解集合，$\varnothing$ 为空集，并定义

$$
\mathbb Z^5=\{\boldsymbol z=(z_1,\ldots,z_5)^\top\in\mathbb R^5
\mid z_i\in\mathbb Z,\ i=1,\ldots,5\}.
$$

回答：

1. 写出 P$(\boldsymbol c)$ 的对偶问题。
2. 证明对任意 $\boldsymbol c\in\mathbb R^5$，都有 $X(\boldsymbol c)\ne\varnothing$。
3. 证明对任意 $\boldsymbol c\in\mathbb R^5$，都有
   $X(\boldsymbol c)\cap\mathbb Z^5\ne\varnothing$，即至少存在一个整数最优解。
4. 判断命题“对任意 $\boldsymbol c\in\mathbb R^5$，均有
   $X(\boldsymbol c)\subseteq\mathbb Z^5$”的真伪；若真则证明，若假则给出反例。

#### 考点

- **线性规划对偶**：为标准形式的参数化原问题构造等式约束对应的对偶。
- **全酉模与整数性**：根据约束矩阵和整数右端项论证任意目标下存在整数最优顶点。
- **整数最优解与全部最优解的区别**：辨析“存在整数最优解”是否意味着最优面上的每个点都是整数点，并用证明或反例回答。

## **Kai**
### (i)
Let $a^{(1)} = [1,1,0,1,1]^\top, a^{(2)} = [0,1,1,1,0]^\top$

Lagrangian:

$$
L(x,\mu) = c^\top x + \mu_1 (a^{(1)\top}-3) + \mu_2(a^{(2)\top} - 3)
$$

Lagrange dual function:

$$
g(\mu) = -3(\mu_1 + \mu_2)
$$

Dual problem:

$$
\begin{aligned}
(D): &\text{Maximize} &-3(\mu_1 + \mu_2) \\
&\text{subject to:} &c + \mu_1 a^{(1)} + \mu_2a^{(2)} \succeq \boldsymbol{1} \\
\end{aligned}
$$

### (ii)
The extreme point is $[0,3,0,0,0]$, $[0,0,0,3,0]$, $[0,0,0,0,3]$, $[3,0,3,0,0]$, and there is no extreme direction.
Hence the domain is bounded, thus $X(c) \neq \emptyset$

### (iii)
Suppose that $x^*$ is an optimal solution, then we have

$$
\begin{align}
c^\top x^* = c^\top \sum_{i=1}^{4}\theta_i x_i \tag{*}
\end{align}
$$

where $\theta_i \in [0,1]$, $\sum \theta_i = 1$, $x_i$ is extreme point shown in (ii).

First we have $c^\top x_i \geq c^\top x^*$, else $x^*$ is not a optimal solution.
If $c^\top x_j > c^\top x^*$ for $j =1,2,3,4$, then

$$
\sum_{i=1}^{4}\theta_i c^\top x_i > c^\top x^*
$$ 

But according to $(*)$

$$
c^\top x^* = \sum_{i=1}^{4}\theta_i c^\top x_i
$$

a contradiction.

Thus there is at least one extreme point such that $c^\top x_j = c^\top x^*$.

Therefore

$$
X(c)\cap \mathbb{Z}^5 \neq \emptyset
$$

### (iv)
Let $c^\top = [0,0,0,-1,-1]$, then $x_5^\top = [0,0,0,1.5,1.5]$ is also a solution.
