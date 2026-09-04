---
sidebar_label: 2017年8月実施 専門科目II 問題5
tags:
  - Tokyo-University
  - Operations-Research.Convex-Optimization.One-Norm-Minimization
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題5

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Denote the set of real numbers with $\mathbb R$ and the absolute value of a real value $w$ with $|w|$. For a $d$-dimensional real column vector $\boldsymbol w$, we write its $i$-th element as $w_i$, and define $\|\boldsymbol w\|_1=|w_1|+|w_2|+\cdots+|w_d|$ and $\|\boldsymbol w\|_2=\sqrt{w_1^2+w_2^2+\cdots+w_d^2}$. The transpose of $\boldsymbol w$ is written as $\boldsymbol w^\top$.

A vector $\boldsymbol g\in\mathbb R^d$ is a subgradient of a convex function $f$ at $\boldsymbol x\in\mathbb R^d$ if

$$
\forall\boldsymbol z\in\mathbb R^d,\quad
f(\boldsymbol z)\ge f(\boldsymbol x)+\boldsymbol g^\top(\boldsymbol z-\boldsymbol x)
$$

holds. The set of subgradients of a convex function $f$ at $\boldsymbol x$, $\{\boldsymbol g\in\mathbb R^d\mid\forall\boldsymbol z\in\mathbb R^d,\ f(\boldsymbol z)\ge f(\boldsymbol x)+\boldsymbol g^\top(\boldsymbol z-\boldsymbol x)\}$, is called the subdifferential of $f$ at $\boldsymbol x$, and is denoted by $\partial f(\boldsymbol x)$. You may use the following facts (i), (ii) and (iii).

(i) A differentiable convex function $f(\boldsymbol x)$ satisfies

$$
\partial f(\boldsymbol x)=\{\nabla f(\boldsymbol x)\},\qquad
\nabla f(\boldsymbol x)=
\begin{pmatrix}
\partial f(\boldsymbol x)/\partial x_1\\
\vdots\\
\partial f(\boldsymbol x)/\partial x_d
\end{pmatrix}.
$$

(ii) For convex functions $f_1$ and $f_2$, it holds that $\partial(f_1+f_2)(\boldsymbol x)=\{\boldsymbol g_1+\boldsymbol g_2\mid \boldsymbol g_1\in\partial f_1(\boldsymbol x),\ \boldsymbol g_2\in\partial f_2(\boldsymbol x)\}$. (iii) $0\in\partial f(\boldsymbol w^*)$ is a necessary and sufficient condition that a convex function $f(\boldsymbol w)$ is minimized by $\boldsymbol w=\boldsymbol w^*$.

Answer the following questions.

(1) (a) For $f(w)=|w|$ ($w\in\mathbb R$), obtain $\partial f(w)$. (b) For $f(\boldsymbol w)=\|\boldsymbol w\|_1$ ($\boldsymbol w\in\mathbb R^d$), obtain $\partial f(\boldsymbol w)$.

(2) For $f(w)=\frac12(w-z)^2+\beta|w|$ ($w,z\in\mathbb R$, $0<\beta\in\mathbb R$), obtain $\partial f(w)$. Also obtain $w^*\in\mathbb R$ that minimizes $f(w)$.

(3) For $f(\boldsymbol w)=\frac12\|\boldsymbol w-\boldsymbol z\|_2^2+\beta\|\boldsymbol w\|_1$ ($\boldsymbol w,\boldsymbol z\in\mathbb R^d$, $0<\beta\in\mathbb R$), obtain $\partial f(\boldsymbol w)$. Also, assuming that $\boldsymbol w=\boldsymbol w^*\in\mathbb R^d$ minimizes $f(\boldsymbol w)$, and letting $j$ be an integer satisfying $1\le j\le d$, obtain a necessary and sufficient condition for $w_j^*=0$.

Consider the problem of predicting one dimensional real-valued label $y\in\mathbb R$ from a $d$-dimensional real vector $\boldsymbol x\in\mathbb R^d$. Suppose that a set of $n$ training samples

$$
\{(\boldsymbol x_i,y_i)\mid\boldsymbol x_i\in\mathbb R^d,\ y_i\in\mathbb R,\ i=1,2,\ldots,n\}
$$

is given where $(\boldsymbol x_i,y_i)$ means that $y_i$ is the real-valued label of $\boldsymbol x_i$.

By using a $d$-dimensional parameter $\boldsymbol w\in\mathbb R^d$, define a loss function as

$$
L(\boldsymbol w)=\frac1{2n}\sum_{i=1}^n(y_i-\boldsymbol w^\top\boldsymbol x_i)^2.
$$

We formulate the training of a predictor as the following optimization problem with a positive real value $\lambda$:

$$
\boldsymbol w^*=\underset{\boldsymbol w\in\mathbb R^d}{\operatorname{argmin}}
\{L(\boldsymbol w)+\lambda\|\boldsymbol w\|_1\}.
$$

The following algorithm is known for obtaining the optimal solution $\boldsymbol w^*$. It iteratively solves the optimization problem ($\dagger$) from an initial value $\boldsymbol w^{(0)}\in\mathbb R^d$ and using the step size $\eta_t>0$:

$$
\boldsymbol w^{(t+1)}
=\underset{\boldsymbol w\in\mathbb R^d}{\operatorname{argmin}}
\left\{
\nabla L(\boldsymbol w^{(t)})^\top(\boldsymbol w-\boldsymbol w^{(t)})
+\lambda\|\boldsymbol w\|_1
+\frac1{2\eta_t}\|\boldsymbol w-\boldsymbol w^{(t)}\|_2^2
\right\},
\qquad t=0,1,2,\ldots
\tag{†}
$$

Answer the following question.

(4) Express $a\in\mathbb R$ using $\eta_t$ and $\lambda$ such that $w_j^{(t)}-\eta_t\frac{\partial L}{\partial w_j}(\boldsymbol w^{(t)})\in[-a,a]$ is a necessary and sufficient condition for $w_j^{(t+1)}=0$, where $j$ is an integer satisfying $1\le j\le d$.

### 题目描述

以 $\mathbb R$ 表示实数集，$|w|$ 表示实数 $w$ 的绝对值。对实列向量 $\boldsymbol w\in\mathbb R^d$，以 $w_i$ 表示第 $i$ 个分量，$\boldsymbol w^{\mathsf T}$ 表示转置，定义
$\|\boldsymbol w\|_1=\sum_{i=1}^d|w_i|$、$\|\boldsymbol w\|_2=(\sum_{i=1}^dw_i^2)^{1/2}$。若 $\boldsymbol g,\boldsymbol x\in\mathbb R^d$，且对所有 $\boldsymbol z\in\mathbb R^d$ 都有

$$
f(\boldsymbol z)\ge f(\boldsymbol x)+\boldsymbol g^{\mathsf T}(\boldsymbol z-\boldsymbol x),
$$

则称 $\boldsymbol g$ 是凸函数 $f$ 在 $\boldsymbol x$ 处的次梯度；其集合记为
$\partial f(\boldsymbol x)$。可以使用以下事实：可微凸函数的次梯度唯一且等于梯度；
$\partial(f_1+f_2)$ 是两个次梯度集合的 Minkowski 和；$0\in\partial f(\boldsymbol w^*)$ 是 $\boldsymbol w^*$ 最小化 $f$ 的充要条件。

（1）求（a）$f(w)=|w|$（$w\in\mathbb R$）的 $\partial f(w)$；（b）$f(\boldsymbol w)=\|\boldsymbol w\|_1$（$\boldsymbol w\in\mathbb R^d$）的 $\partial f(\boldsymbol w)$。

（2）对 $f(w)=\frac12(w-z)^2+\beta|w|$（$w,z\in\mathbb R,\beta>0$），求
$\partial f(w)$ 及最小点 $w^*\in\mathbb R$。

（3）对 $f(\boldsymbol w)=\frac12\|\boldsymbol w-\boldsymbol z\|_2^2+
\beta\|\boldsymbol w\|_1$（$\boldsymbol w,\boldsymbol z\in\mathbb R^d,\beta>0$），求 $\partial f(\boldsymbol w)$；若 $\boldsymbol w^*\in\mathbb R^d$ 为最小点，且 $j$ 为满足 $1\le j\le d$ 的整数，给出 $w_j^*=0$ 的充要条件。

现由 $\boldsymbol x\in\mathbb R^d$ 预测实值标签 $y\in\mathbb R$，给定 $n$ 个训练样本 $\{(\boldsymbol x_i,y_i)\mid\boldsymbol x_i\in\mathbb R^d,\ y_i\in\mathbb R,\ i=1,\ldots,n\}$，其中 $y_i$ 是 $\boldsymbol x_i$ 的标签。用参数 $\boldsymbol w\in\mathbb R^d$ 定义损失并以带 $\ell_1$ 正则的最小二乘训练线性模型，其中 $\lambda>0$：

$$
L(\boldsymbol w)=\frac1{2n}\sum_{i=1}^n(y_i-\boldsymbol w^{\mathsf T}\boldsymbol x_i)^2,
\qquad
\boldsymbol w^*=\arg\min_{\boldsymbol w\in\mathbb R^d}\{L(\boldsymbol w)+\lambda\|\boldsymbol w\|_1\}.
$$

从 $\boldsymbol w^{(0)}\in\mathbb R^d$ 出发，取步长 $\eta_t>0$，迭代算法为

$$
\boldsymbol w^{(t+1)}=\arg\min_{\boldsymbol w\in\mathbb R^d}
\left\{
\nabla L(\boldsymbol w^{(t)})^{\mathsf T}(\boldsymbol w-\boldsymbol w^{(t)})
+\lambda\|\boldsymbol w\|_1
+\frac1{2\eta_t}\|\boldsymbol w-\boldsymbol w^{(t)}\|_2^2
\right\},\qquad t=0,1,2,\ldots.
$$

（4）设 $j$ 为满足 $1\le j\le d$ 的整数，用 $\eta_t$ 和 $\lambda$ 表示 $a\in\mathbb R$，使

$$
w_j^{(t)}-\eta_t\frac{\partial L}{\partial w_j}(\boldsymbol w^{(t)})
\in[-a,a]
$$

成为 $w_j^{(t+1)}=0$ 的充要条件。

## **Kai**

### （1）

$$
\partial|w|=
\begin{cases}
\{-1\},&w<0,\\
[-1,1],&w=0,\\
\{1\},&w>0.
\end{cases}
$$

并且

$$
\partial\|\boldsymbol w\|_1
=\{\boldsymbol g\in\mathbb R^d\mid g_i\in\partial|w_i|\ (i=1,\ldots,d)\}.
$$

### （2）

$$
\partial f(w)=w-z+\beta\,\partial|w|.
$$

由 $0\in\partial f(w^*)$，得软阈值解

$$
w^*=\operatorname{sgn}(z)(|z|-\beta)_+
=\begin{cases}
z-\beta,&z>\beta,\\
0,&|z|\le\beta,\\
z+\beta,&z<-\beta.
\end{cases}
$$

### （3）

$$
\partial f(\boldsymbol w)
=\boldsymbol w-\boldsymbol z+\beta\,\partial\|\boldsymbol w\|_1.
$$

各坐标相互独立，故

$$
w_j^*=0\quad\Longleftrightarrow\quad |z_j|\le\beta.
$$

### （4）

令

$$
q_j=w_j^{(t)}-\eta_t\frac{\partial L}{\partial w_j}(\boldsymbol w^{(t)}).
$$

配方后，每个坐标的子问题是
$\frac1{2\eta_t}(w_j-q_j)^2+\lambda|w_j|$，由（2）知

$$
w_j^{(t+1)}=0
\Longleftrightarrow |q_j|\le\eta_t\lambda.
$$

因此 $\boxed{a=\eta_t\lambda}$。
