---
sidebar_label: "2015年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 線形計画

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h28_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)
### 日本語版
関数 $f : \mathbb{R}^n \rightarrow \mathbb{R}$ を連続的微分可能な凸関数とする。
さらに、$\nabla f(\boldsymbol{x})$ を次式で定義される関数 $f$ の $\boldsymbol{x} \in \mathbb{R}^n$ における勾配とする。

$$
\nabla f(\boldsymbol{x}) = \left( \frac{\partial f(\boldsymbol{x})}{\partial x_1}, \ldots, \frac{\partial f(\boldsymbol{x})}{\partial x_n} \right)^\top
$$

ただし、$\top$ は転置記号を表す。

次の線形計画問題 P を考える。

$$
\begin{aligned}
\text{P} : &\text{Minimize} &\nabla f(\bar{\boldsymbol{x}})^\top \boldsymbol{x} \\
&\text{subject to} &\boldsymbol{A}(\bar{\boldsymbol{x}} + \boldsymbol{x}) \leqq \boldsymbol{b}
\end{aligned}
$$

ただし、$\boldsymbol{A}$ は $m \times n$ 定数行列、$\boldsymbol{b}$ は $m$ 次元定数ベクトル、$\bar{\boldsymbol{x}}$ は $n$ 次元定数ベクトル、$\boldsymbol{x}$ は $n$ 次元変数ベクトルである。
問題 P は最適解を持つとする。

以下の問いに答えよ。

(i) $\nabla f(\bar{\boldsymbol{x}})^\top \boldsymbol{d} \geqq 0$ である任意の $\boldsymbol{d} \in \mathbb{R}^n$ に対して $f(\bar{\boldsymbol{x}} + \boldsymbol{d}) \geqq f(\bar{\boldsymbol{x}})$ となることを示せ。

(ii) 問題 P の双対問題を書け。

(iii) $\boldsymbol{A}\bar{\boldsymbol{x}} \geqq \boldsymbol{b}$ とする。このとき、$\boldsymbol{A} \boldsymbol{z} \leqq \boldsymbol{b}$ である任意の $z \in \mathbb{R}^n$ に対して、$f(\boldsymbol{z}) \geqq f(\bar{\boldsymbol{x}})$ であることを示せ。


### English Version


### 题目描述

设 $f:\mathbb R^n\to\mathbb R$ 为连续可微凸函数，并定义梯度

$$
\nabla f(\boldsymbol x)=
\left(\frac{\partial f(\boldsymbol x)}{\partial x_1},\ldots,
\frac{\partial f(\boldsymbol x)}{\partial x_n}\right)^\top,
$$

其中 $\top$ 表示转置。考虑线性规划

$$
\begin{aligned}
\mathrm P:\quad
&\text{最小化}\quad \nabla f(\bar{\boldsymbol x})^\top\boldsymbol x\\
&\text{满足}\quad
\boldsymbol A(\bar{\boldsymbol x}+\boldsymbol x)\leqq\boldsymbol b,
\end{aligned}
$$

其中 $\boldsymbol A$ 是 $m\times n$ 常数矩阵，$\boldsymbol b$ 是 $m$ 维常向量，$\bar{\boldsymbol x}$ 是 $n$ 维常向量，$\boldsymbol x$ 是 $n$ 维变量向量，并假设 P 有最优解。回答：

1. 证明对任意满足
   $\nabla f(\bar{\boldsymbol x})^\top\boldsymbol d\geqq0$
   的 $\boldsymbol d\in\mathbb R^n$，都有
   $f(\bar{\boldsymbol x}+\boldsymbol d)\geqq f(\bar{\boldsymbol x})$。
2. 写出 P 的对偶问题。
3. 假设 $\boldsymbol A\bar{\boldsymbol x}\geqq\boldsymbol b$。证明对任意满足 $\boldsymbol A\boldsymbol z\leqq\boldsymbol b$ 的 $\boldsymbol z\in\mathbb R^n$，都有
   $f(\boldsymbol z)\geqq f(\bar{\boldsymbol x})$。

## **Kai**
### (i)
Since $\nabla f(\bar{x})^\top d \geqq 0$, from first order condition we have

$$
f(\bar{x} + d) \geq f(\bar{x}) + \nabla f(\bar{x})^\top d \geq f(\bar{x})
$$

### (ii)
Lagrangian:

$$
L(x, \lambda) = \nabla f(\bar{x})^\top x + \lambda^\top (A(\bar{x} + x) - b)
$$

Lagrange dual function

$$
g(\lambda)=\inf_{x\in\mathbb R^n}L(x,\lambda)=
\begin{cases}
\lambda^\top(A\bar x-b),&\nabla f(\bar x)+A^\top\lambda=0,\\
-\infty,&\text{otherwise}.
\end{cases}
$$

Dual problem:

$$
\begin{aligned}
(D): &\text{Maximize} &\lambda^\top (A\bar{x} - b) \\
&\text{Subject to} &\nabla f(\bar{x}) + A^\top \lambda = \boldsymbol{0} \\
&\text{ } &\lambda \succeq \boldsymbol{0} \\
\end{aligned}
$$

### (iii)
Since $Az = A(z-\bar{x} + \bar{x}) \preceq b$ and $z-\bar{x}$ is in domain of P, let $v(p)$ denote P's optimal value, then

$$
f(z) - f(\bar{x}) \geq \nabla f(\bar{x})^\top (z- \bar{x}) \geq v(p)
$$

Since P has an optimal solution, strong duality gives an optimal dual solution $\lambda^*$ and

$$
v(p)=(\lambda^*)^\top(A\bar{x}-b)\geq0,
$$

because $A\bar{x}\succeq b$ and $\lambda^*\succeq0$. Therefore,

$$
f(z) \geq f(\bar{x})
$$
